# CPU profile

Took 2.69s over 3,134 samples (858.4µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 88.6% |   2.38s |   2,890 |
| garbage collector |  6.6% | 177.0ms |     144 |
| stdlib            |  4.7% | 125.5ms |      94 |
| regexp            |  0.1% |   3.3ms |       3 |
| program           | <0.1% |  42.0µs |       3 |

Hidden functions account for 92.9% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                            | Location                                                                                 |
| ---: | ------: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 6.6% | 177.0ms |     144 | `(garbage collector)`               | `<unknown>`                                                                              |
| 3.0% |  80.6ms |     106 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 2.9% |  78.7ms |      83 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 2.7% |  71.5ms |      57 | `wrapSafe`                          | `node:internal/modules/cjs/loader:1671:18`                                               |
| 2.2% |  59.0ms |      51 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.6% |  44.3ms |      48 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 1.6% |  42.4ms |      39 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 1.4% |  37.1ms |      36 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 1.1% |  28.4ms |      27 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 1.1% |  28.3ms |      23 | `getRelationKey`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 1.0% |  26.2ms |      26 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% |  22.8ms |      21 | `isTypeRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 0.8% |  22.1ms |      22 | `compareSignaturesRelated`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |
| 0.8% |  20.8ms |      20 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 0.7% |  19.9ms |      26 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| 0.7% |  19.3ms |      23 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 0.7% |  18.5ms |      17 | `scanJsDocToken`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |
| 0.7% |  18.4ms |      15 | `createTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 0.7% |  17.9ms |      17 | `getIntersectionType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 0.7% |  17.6ms |      21 | `bindWorker`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 22.8% | 18.3ms |      16 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
| 22.2% | 17.9ms |      16 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |
| 17.0% | 13.7ms |      14 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
| 10.1% |  8.1ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63403` |
|  3.2% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63500` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 51.8% | 40.8ms |      35 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 10.7% |  8.5ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805` |
|  6.5% |  5.1ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |
|  4.7% |  3.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63840` |
|  3.2% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63865` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 71.5ms |      57 | `node:internal/modules/cjs/loader:1713` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 50.3% | 29.7ms |      24 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |
| 23.6% | 13.9ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63058` |
| 17.1% | 10.1ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
|  2.2% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63026` |
|  2.1% |  1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63014` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 27.6% | 12.2ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61999` |
| 11.8% |  5.2ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61984` |
| 10.9% |  4.8ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61994` |
|  5.7% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61993` |
|  5.6% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62017` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 17.9% | 7.6ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 11.9% | 5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61782` |
|  8.7% | 3.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740` |
|  5.9% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61770` |
|  5.7% | 2.4ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61772` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 32.9% | 12.2ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
| 17.1% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973` |
| 16.8% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |
|  6.7% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
|  3.5% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57807` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 18.2% | 5.2ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11247` |
| 17.8% | 5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |
|  7.8% | 2.2ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11411` |
|  4.7% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11389` |
|  4.6% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11299` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 88.8% | 25.1ms |      20 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65399` |
|  4.6% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390` |
|  4.3% |  1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65391` |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 28.8% | 7.5ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57630` |
| 19.1% | 5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57667` |
| 14.5% | 3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57631` |
|  9.5% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:16052` |
|  6.9% | 1.8ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57643` |

##### `isTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 68.2% | 15.5ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62966` |
| 21.0% |  4.8ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62960` |
|  5.5% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62949` |
|  5.3% |  1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938` |

##### `compareSignaturesRelated` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 17.0% | 3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62764` |
| 16.9% | 3.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62733` |
| 16.8% | 3.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62681` |
| 10.4% | 2.3ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62676` |
|  5.7% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62689` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 28.9% | 6.0ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57861` |
| 23.0% | 4.8ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857` |
|  8.0% | 1.7ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57858` |
|  6.2% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57179` |
|  6.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57879` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 39.2% | 7.8ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45473` |
| 28.9% | 5.8ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448` |
| 12.6% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:44917` |
|  8.0% | 1.6ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45487` |
|  6.1% | 1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45484` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 19.2% | 3.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64366` |
| 13.1% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64361` |
| 12.7% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924` |
|  6.7% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57176` |
|  6.5% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64410` |

##### `scanJsDocToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 27.3% | 5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950` |
|  7.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:10202` |
|  7.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12024` |
|  6.8% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12011` |
|  6.8% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12022` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 48.1% | 8.8ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58637` |
| 38.3% | 7.0ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58640` |
|  6.8% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635` |
|  6.8% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58607` |

##### `getIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 42.2% | 7.5ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60067` |
| 12.1% | 2.2ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60015` |
| 11.0% | 2.0ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60048` |
|  7.2% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60017` |
|  7.2% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60016` |

##### `bindWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 63.7% | 11.2ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45539` |
| 21.6% |  3.8ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45555` |
|  7.1% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538` |
|  0.2% | 42.0µs |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45668` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `(garbage collector)` (`<unknown>`)

|      % |    Time | Samples | Caller   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 177.0ms |     144 | `(root)` | `<unknown>` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 31.9% | 25.7ms |      32 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 31.0% | 25.0ms |      22 | `typeRelatedToSomeType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
|  2.6% |  2.1ms |       8 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
|  1.6% |  1.3ms |       1 | `compareSignaturesRelated`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller        | Location                                                                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 62.3% | 49.0ms |      52 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 71.5ms |      57 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Caller            | Location                                                                                 |
| ----: | -----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 97.7% | 57.7ms |      47 | `isTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|      % |   Time | Samples | Caller                     | Location                                                                                 |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 44.3ms |      48 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Caller                  | Location                                                                                 |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 97.1% | 41.2ms |      38 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|      % |   Time | Samples | Caller        | Location                                                                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 37.1ms |      36 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |   Time | Samples | Caller                  | Location                                                                                 |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 95.6% | 27.1ms |      26 | `nextTokenWithoutCheck` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31155:39` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 95.4% | 27.0ms |      22 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|  4.6% |  1.3ms |       1 | `isTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|      % |   Time | Samples | Caller                           | Location                                                                                 |
| -----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 26.2ms |      26 | `getUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |

##### `isTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Caller              | Location                                                                                 |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 62.7% | 14.3ms |      13 | `isTypeIdenticalTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62156:35` |

##### `compareSignaturesRelated` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 85.8% | 19.0ms |      17 | `signatureRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65017:40` |
| 11.1% |  2.5ms |       2 | `compareSignaturesRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`)

|     % |  Time | Samples | Caller                              | Location                                                                                 |
| ----: | ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 41.4% | 8.6ms |       9 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 17.8% | 3.7ms |       3 | `(anonymous)`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |   Time | Samples | Caller    | Location                                                                               |
| ----: | -----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 51.1% | 10.2ms |      11 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                 |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 19.3ms |      23 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `scanJsDocToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32`)

|      % |   Time | Samples | Caller           | Location                                                                                 |
| -----: | -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 18.5ms |      17 | `nextTokenJSDoc` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31170:32` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 59.9% | 11.0ms |       9 | `createNormalizedTypeReference` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59406:47` |
| 27.4% |  5.0ms |       4 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

##### `getIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37`)

|     % |   Time | Samples | Caller                              | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 63.2% | 11.3ms |      10 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 30.1% |  5.4ms |       5 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |

##### `bindWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|     % |   Time | Samples | Caller | Location                                                                                 |
| ----: | -----: | ------: | ------ | ---------------------------------------------------------------------------------------- |
| 92.7% | 16.3ms |      20 | `bind` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                            | Location                                                                                  |
| ----: | ------: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| 91.7% |   2.46s |   2,935 | `(anonymous)`                       | `cpuprofile-run.mjs`                                                                      |
| 91.3% |   2.45s |   2,933 | `typeCheckProject`                  | `tsc-workload.mjs:3:33`                                                                   |
| 73.2% |   1.96s |   2,479 | `getSemanticDiagnostics`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 36.0% | 969.4ms |   1,277 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 33.9% | 912.7ms |   1,227 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| 29.6% | 795.9ms |     809 | `isTypeRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`  |
| 29.2% | 785.2ms |   1,068 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
| 28.0% | 753.0ms |   1,075 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
| 19.4% | 521.7ms |     549 | `compareSignaturesRelated`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`  |
| 18.9% | 509.3ms |     525 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`  |
| 14.0% | 377.8ms |     366 | `createProgram`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  8.4% | 225.9ms |     225 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|  6.6% | 177.0ms |     144 | `(garbage collector)`               | `<unknown>`                                                                               |
|  6.4% | 170.9ms |     265 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
|  4.2% | 113.8ms |     124 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|  3.7% | 100.3ms |      80 | `require`                           | `node:internal/modules/helpers:146:19`                                                    |
|  3.7% |  98.6ms |      96 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`  |
|  3.2% |  87.2ms |     125 | `bindWorker`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`  |
|  2.8% |  75.1ms |      81 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`  |
|  2.7% |  71.5ms |      57 | `wrapSafe`                          | `node:internal/modules/cjs/loader:1671:18`                                                |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 99.6% |  2.45s |   2,933 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  0.4% | 10.3ms |       2 | `post`             | `cpuprofile-run.mjs:15:14` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 80.1% |   1.96s |   2,478 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 15.4% | 377.8ms |     366 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  4.1% | 100.3ms |      80 | `require`                          | `node:internal/modules/helpers:146:19`                                                    |
|  0.5% |  11.3ms |       9 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |  Time | Samples | Callee                 | Location                                                                                  |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.96s |   2,479 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Callee        | Location                                                                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 94.2% | 912.7ms |   1,227 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |    Time | Samples | Callee                   | Location                                                                                 |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 81.1% | 740.3ms |   1,029 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 12.5% | 113.8ms |     124 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|  0.1% |   0.7ms |       2 | `isRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `isTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |    Time | Samples | Callee               | Location                                                                                 |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 97.0% | 771.7ms |     787 | `checkTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|  0.2% |   1.3ms |       1 | `getRelationKey`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Callee                          | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 94.0% | 737.8ms |   1,012 | `structuredTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
|  4.6% |  36.3ms |      30 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|  0.4% |   2.9ms |      16 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |    Time | Samples | Callee                | Location                                                                                 |
| ----: | ------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 80.4% | 605.2ms |     611 | `propertiesRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
| 73.0% | 549.5ms |     577 | `signaturesRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41` |
| 17.9% | 134.5ms |     407 | `isRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `compareSignaturesRelated` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`)

|     % |    Time | Samples | Callee                     | Location                                                                                 |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 47.7% | 249.1ms |     286 | `isRelatedToWorker`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63300:39` |
| 29.3% | 152.6ms |     141 | `getNonNullableType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65926:36` |
|  2.6% |  13.8ms |      11 | `compareSignaturesRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |
|  0.2% |   1.3ms |       1 | `isRelatedTo`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |    Time | Samples | Callee                       | Location                                                                                 |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 59.0% | 300.5ms |     306 | `instantiateTypes`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34` |
| 44.1% | 224.5ms |     220 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|  3.8% |  19.2ms |      20 | `getIntersectionType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|     % |    Time | Samples | Callee    | Location                                                                               |
| ----: | ------: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 83.6% | 315.8ms |     311 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |    Time | Samples | Callee                  | Location                                                                                 |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 55.9% | 126.4ms |     122 | `instantiateMappedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61835:39` |
| 48.2% | 108.9ms |     113 | `map`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |    Time | Samples | Callee          | Location                                                                                 |
| ----: | ------: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 97.0% | 165.8ms |     251 | `bindContainer` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43814:31` |
| 50.3% |  85.9ms |     124 | `bindWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Callee                | Location                                                                                 |
| ----: | -----: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 30.0% | 34.1ms |      48 | `getReducedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
| 18.9% | 21.5ms |      23 | `getSimplifiedType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60672:35` |
|  4.4% |  5.0ms |       4 | `createTypeReference` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 100.3ms |      80 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`)

|     % |   Time | Samples | Callee                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 47.0% | 46.3ms |      40 | `getReducedApparentType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |

##### `bindWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|     % |   Time | Samples | Callee                           | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 14.0% | 12.2ms |      21 | `bindPropertyOrMethodOrAccessor` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46346:48` |
| 12.3% | 10.7ms |      11 | `bindParameter`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46296:31` |
| 11.4% | 10.0ms |      15 | `bindPropertyWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45774:36` |
|  9.5% |  8.3ms |      14 | `bindModuleDeclaration`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45072:39` |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |   Time | Samples | Callee                | Location                                                                                 |
| ----: | -----: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 21.9% | 16.5ms |      18 | `getPropertyOfType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 10.5% |  7.9ms |      11 | `getIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
|  8.7% |  6.5ms |       6 | `getApparentType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.1% | 647.2ms |     758 | `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 11.5% | 309.3ms |     300 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.7% |  71.5ms |      57 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.9% |  51.5ms |      42 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.5% |  41.6ms |      39 | `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |  36.4ms |      35 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% |  35.0ms |      39 | `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.0% |  28.0ms |      24 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                             |
|  1.0% |  26.3ms |      21 | `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.9% |  25.2ms |      29 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                     |
|  0.9% |  24.9ms |      25 | `scanJsDocToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32`) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.9% |  23.3ms |      19 | `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`) ← `getPropertyOfType` (57857:35) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                  |
|  0.8% |  20.8ms |      17 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isRelatedTo` (63309:33) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                       |
|  0.7% |  18.8ms |      27 | `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`) ← `bind` (45448:22) ← `bind` (45448:22) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.7% |  18.3ms |      21 | `bindWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`) ← `bind` (45448:22) ← `bind` (45448:22) ← `bind` (45448:22) ← `bind` (45448:22) ← `bind` (45448:22) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                      |
|  0.7% |  18.0ms |      17 | `isTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.7% |  17.9ms |      15 | `compareSignaturesRelated` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40) |
|  0.7% |  17.7ms |      15 | `compareSignaturesRelated` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                              |
|  0.7% |  17.7ms |      14 | `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`) ← `isRelatedTo` (63309:33) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                            |
|  0.6% |  17.2ms |      17 | `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                               |
