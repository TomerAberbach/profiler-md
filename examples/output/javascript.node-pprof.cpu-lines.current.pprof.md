# Wall time profile

Took 18.51s over 14,812 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 85.8% |  15.87s |  12,703 |
| Garbage collector  | 12.3% |   2.27s |   1,819 |
| Native             |  1.1% | 201.3ms |     161 |
| Standard library   |  0.7% | 137.5ms |     110 |
| Regular expression |  0.1% |  21.3ms |      17 |
| Ours               | <0.1% |   2.5ms |       2 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                         | Location                                                                        |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------- |
| 12.3% |   2.27s |   1,819 | `(garbage collector)`            | `<unknown>`                                                                     |
|  3.7% | 691.3ms |     553 | `isRelatedTo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.6% | 670.0ms |     536 | `recursiveTypeRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.2% | 398.8ms |     319 | `checkTypeRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.0% | 373.8ms |     299 | `getObjectTypeInstantiation`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.0% | 361.3ms |     289 | `instantiateTypeWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.3% | 232.5ms |     186 | `scan`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.0% | 185.0ms |     148 | `getRelationKey`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.0% | 181.3ms |     145 | `getNormalizedType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.9% | 162.5ms |     130 | `getNodeLinks`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.9% | 161.3ms |     129 | `structuredTypeRelatedToWorker`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.9% | 157.5ms |     126 | `inferFromTypes`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.8% | 145.0ms |     116 | `bind`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.8% | 140.0ms |     112 | `createTypeReference`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% | 131.3ms |     105 | `instantiateType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% | 131.3ms |     105 | `getReducedApparentType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% | 130.0ms |     104 | `instantiateList`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% | 128.8ms |     103 | `typeRelatedToSomeType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% | 120.0ms |      96 | `isIdenticalTo`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% | 116.3ms |      93 | `getUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                         | Location                                                                        |
| ---: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------- |
| 3.7% | 691.3ms |     553 | `isRelatedTo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 3.6% | 670.0ms |     536 | `recursiveTypeRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 2.2% | 398.8ms |     319 | `checkTypeRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 2.0% | 373.8ms |     299 | `getObjectTypeInstantiation`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 2.0% | 361.3ms |     289 | `instantiateTypeWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.3% | 232.5ms |     186 | `scan`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.0% | 185.0ms |     148 | `getRelationKey`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.0% | 181.3ms |     145 | `getNormalizedType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.9% | 162.5ms |     130 | `getNodeLinks`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.9% | 161.3ms |     129 | `structuredTypeRelatedToWorker`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.9% | 157.5ms |     126 | `inferFromTypes`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.8% | 145.0ms |     116 | `bind`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.8% | 140.0ms |     112 | `createTypeReference`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 131.3ms |     105 | `instantiateType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 131.3ms |     105 | `getReducedApparentType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 130.0ms |     104 | `instantiateList`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 128.8ms |     103 | `typeRelatedToSomeType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.6% | 120.0ms |      96 | `isIdenticalTo`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.6% | 116.3ms |      93 | `getUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.6% | 115.0ms |      92 | `getMappedType`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.3% | 2.27s |   1,819 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function            | Location    |
| ----: | -----: | ------: | ------------------- | ----------- |
|  0.4% | 75.0ms |      60 | `open`              | `<unknown>` |
|  0.4% | 66.3ms |      53 | `stat`              | `<unknown>` |
|  0.2% | 28.8ms |      23 | `realpath`          | `<unknown>` |
|  0.1% | 13.8ms |      11 | `read`              | `<unknown>` |
| <0.1% |  6.3ms |       5 | `readdir`           | `<unknown>` |
| <0.1% |  3.8ms |       3 | `close`             | `<unknown>` |
| <0.1% |  3.8ms |       3 | `readFileUtf8`      | `<unknown>` |
| <0.1% |  2.5ms |       2 | `fstat`             | `<unknown>` |
| <0.1% |  1.3ms |       1 | `getNativeThreadId` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 26.0% | 180.0ms |     144 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
| 16.1% | 111.3ms |      89 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |
| 12.7% |  87.5ms |      70 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63331` |
|  9.4% |  65.0ms |      52 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63403` |
|  3.8% |  26.3ms |      21 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 60.1% | 402.5ms |     322 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
|  6.0% |  40.0ms |      32 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805` |
|  3.7% |  25.0ms |      20 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63904` |
|  3.5% |  23.8ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |
|  3.2% |  21.3ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63843` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 70.5% | 281.3ms |     225 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |
| 18.8% |  75.0ms |      60 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
|  3.8% |  15.0ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63058` |
|  2.5% |  10.0ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63014` |
|  1.9% |   7.5ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63012` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 36.1% | 135.0ms |     108 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 10.7% |  40.0ms |      32 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61782` |
|  4.0% |  15.0ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61768` |
|  3.3% |  12.5ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61741` |
|  3.3% |  12.5ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61781` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 49.1% | 177.5ms |     142 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61999` |
|  7.3% |  26.3ms |      21 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983` |
|  6.6% |  23.8ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62013` |
|  6.2% |  22.5ms |      18 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61991` |
|  5.9% |  21.3ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61994` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 15.1% | 35.0ms |      28 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11247` |
| 11.3% | 26.3ms |      21 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12116` |
|  8.1% | 18.8ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11566` |
|  7.5% | 17.5ms |      14 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11689` |
|  7.0% | 16.3ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 93.2% | 172.5ms |     138 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65399` |
|  2.0% |   3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390` |
|  1.4% |   2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65396` |
|  1.4% |   2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65398` |
|  1.4% |   2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65391` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 25.5% | 46.3ms |      37 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
| 15.2% | 27.5ms |      22 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62977` |
| 11.0% | 20.0ms |      16 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |
|  7.6% | 13.8ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973` |
|  6.9% | 12.5ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62975` |

##### `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 93.8% | 152.5ms |     122 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48030` |
|  5.4% |   8.8ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48028` |
|  0.8% |   1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48029` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 14.7% | 23.8ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64406` |
| 11.6% | 18.8ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64408` |
| 10.9% | 17.5ms |      14 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924` |
|  7.8% | 12.5ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64410` |
|  6.2% | 10.0ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63935` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 15.9% | 25.0ms |      20 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66908` |
| 15.1% | 23.8ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66728` |
|  4.0% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66784` |
|  4.0% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66717` |
|  4.0% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66735` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 44.0% | 63.8ms |      51 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45473` |
| 12.9% | 18.8ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45484` |
|  5.2% |  7.5ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45479` |
|  5.2% |  7.5ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:44917` |
|  5.2% |  7.5ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45487` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 67.0% | 93.8ms |      75 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58637` |
| 25.9% | 36.3ms |      29 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58640` |
|  2.7% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635` |
|  1.8% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58636` |
|  0.9% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50362` |

##### `instantiateType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 20.0% | 26.3ms |      21 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61961` |
| 14.3% | 18.8ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66384` |
|  8.6% | 11.3ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61962` |
|  8.6% | 11.3ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61979` |
|  8.6% | 11.3ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66388` |

##### `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 91.4% | 120.0ms |      96 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57613` |
|  2.9% |   3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608` |
|  2.9% |   3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57799` |
|  1.9% |   2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57802` |
|  1.0% |   1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57595` |

##### `instantiateList` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 60.6% | 78.8ms |      63 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61595` |
| 13.5% | 17.5ms |      14 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61600` |
|  9.6% | 12.5ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61597` |
|  5.8% |  7.5ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591` |
|  4.8% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61599` |

##### `typeRelatedToSomeType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 86.4% | 111.3ms |      89 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63666` |
|  1.9% |   2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63659` |
|  1.9% |   2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650` |
|  1.9% |   2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63664` |
|  1.0% |   1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1372`  |

##### `isIdenticalTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 51.0% | 61.3ms |      49 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63537` |
|  9.4% | 11.3ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524` |
|  9.4% | 11.3ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63529` |
|  7.3% |  8.8ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63525` |
|  5.2% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63666` |

##### `getUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 73.1% | 85.0ms |      68 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57779` |
| 14.0% | 16.3ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57782` |
|  9.7% | 11.3ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57777` |
|  2.2% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57781` |
|  1.1% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57776` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 26.1% | 30.0ms |      24 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61623` |
| 26.1% | 30.0ms |      24 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620` |
| 23.9% | 27.5ms |      22 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61638` |
|  7.6% |  8.8ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61621` |
|  7.6% |  8.8ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61629` |

##### `open` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 98.3% | 73.8ms |      59 | 560      |
|  1.7% |  1.3ms |       1 | 563      |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 66.3ms |      53 | 1746     |

##### `realpath` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 28.8ms |      23 | 2853     |

##### `read` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 13.8ms |      11 | 736      |

##### `readdir` (`<unknown>`)

|     % |  Time | Samples | Location |
| ----: | ----: | ------: | -------- |
| 80.0% | 5.0ms |       4 | 1590     |
| 20.0% | 1.3ms |       1 | 1593     |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 517      |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 440      |

##### `fstat` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 390      |

##### `getNativeThreadId` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 76       |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                                                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 40.9% | 282.5ms |     226 | `typeRelatedToSomeType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 29.8% | 206.3ms |     165 | `checkTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.0% |  76.3ms |      61 | `isRelatedToWorker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.8% |  40.0ms |      32 | `isPropertySymbolTypeRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.7% |  32.5ms |      26 | `eachTypeRelatedToType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                                                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 56.7% | 380.0ms |     304 | `isRelatedTo`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 42.5% | 285.0ms |     228 | `isIdenticalTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.4% |   2.5ms |       2 | `checkTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `isPropertySymbolTypeRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `typeRelatedToSomeType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                                                        |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 97.8% | 390.0ms |     312 | `isTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.3% |   5.0ms |       4 | `checkTypeAssignableTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `elaborateElementwise`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `inferFromMatchingTypes`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `allTypesAssignableToKind` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                                                        |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 98.7% | 368.8ms |     295 | `instantiateTypeWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.3% |   5.0ms |       4 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                                                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 97.6% | 352.5ms |     282 | `instantiateTypeWithAlias`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `checkCallExpression`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `getTypeOfInstantiatedSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `getMappedType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `getTypeOfSymbol`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 98.9% | 230.0ms |     184 | `nextTokenWithoutCheck`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `parseNonArrayType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `parseBindingIdentifier` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 93.9% | 173.8ms |     139 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.7% |   8.8ms |       7 | `isTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% |   1.3ms |       1 | `isTypeAssignableTo`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% |   1.3ms |       1 | `chooseOverload`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 96.6% | 175.0ms |     140 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.1% |   3.8ms |       3 | `checkTypeRelatedTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.4% |   2.5ms |       2 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                                     | Location                                                                        |
| ----: | -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 24.6% | 40.0ms |      32 | `checkPropertyAccessExpressionOrQualifiedName`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 19.2% | 31.3ms |      25 | `getObjectTypeInstantiation`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 19.2% | 31.3ms |      25 | `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 14.6% | 23.8ms |      19 | `getResolvedSymbol`                                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  8.5% | 13.8ms |      11 | `getResolvedSignature`                                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                                                        |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------- |
| 97.7% | 157.5ms |     126 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.3% |   3.8ms |       3 | `isRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 17.5% | 27.5ms |      22 | `inferFromContravariantTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 16.7% | 26.3ms |      21 | `inferFromTypes`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 16.7% | 26.3ms |      21 | `inferFromTypeArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 15.1% | 23.8ms |      19 | `inferFromMatchingTypes`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.7% | 20.0ms |      16 | `inferTypes`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                    | Location                                                                                 |
| ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 58.6% | 85.0ms |      68 | `visitNode`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 31.9% | 46.3ms |      37 | `forEach`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  4.3% |  6.3ms |       5 | `(anonymous)`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:22` |
|  2.6% |  3.8ms |       3 | `bindExpressionStatement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  0.9% |  1.3ms |       1 | `bindSourceFile`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                                                        |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------- |
| 64.3% | 90.0ms |      72 | `createNormalizedTypeReference`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 17.0% | 23.8ms |      19 | `getTypeWithThisArgument`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  7.1% | 10.0ms |       8 | `getNormalizedType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.4% |  7.5ms |       6 | `createNormalizedTupleType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.8% |  2.5ms |       2 | `createTypeFromGenericGlobalType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 48.6% | 63.8ms |      51 | `instantiateList`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 21.0% | 27.5ms |      22 | `getMappedType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.4% | 15.0ms |      12 | `instantiateTypeWorker`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  8.6% | 11.3ms |       9 | `getConditionalType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.8% |  6.3ms |       5 | `getTypeOfInstantiatedSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                                                        |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------- |
| 48.6% | 63.8ms |      51 | `getSignaturesOfType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 39.0% | 51.3ms |      41 | `getPropertyOfType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.7% |  7.5ms |       6 | `getIndexedAccessTypeOrUndefined` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.9% |  3.8ms |       3 | `getIndexInfosOfType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.9% |  2.5ms |       2 | `resolveTypeReferenceMembers`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 37.5% | 48.8ms |      39 | `instantiateTypes`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 34.6% | 45.0ms |      36 | `instantiateSignature`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 21.2% | 27.5ms |      22 | `instantiateSignatures`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.9% |  3.8ms |       3 | `instantiateIndexInfos`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.9% |  3.8ms |       3 | `resolveTypeReferenceMembers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `typeRelatedToSomeType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                                                        |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 70.9% | 91.3ms |      73 | `eachTypeRelatedToSomeType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 26.2% | 33.8ms |      27 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.9% |  3.8ms |       3 | `structuredTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `isIdenticalTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 95.8% | 115.0ms |      92 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.1% |   2.5ms |       2 | `checkTypeRelatedTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.1% |   2.5ms |       2 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                 | Location                                                                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------- |
| 95.7% | 111.3ms |      89 | `getPropertyOfUnionOrIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.2% |   3.8ms |       3 | `isDiscriminantProperty`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.1% |   1.3ms |       1 | `discriminateTypeByDiscriminableItems` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 81.5% | 93.8ms |      75 | `getMappedType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  9.8% | 11.3ms |       9 | `(anonymous)`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61768:31` |
|  3.3% |  3.8ms |       3 | `instantiateTypeWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  3.3% |  3.8ms |       3 | `(anonymous)`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61942:31` |
|  2.2% |  2.5ms |       2 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### `open` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 75.0ms |      60 | `openSync` | `node:fs` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 66.3ms |      53 | `statSync` | `node:fs` |

##### `realpath` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location  |
| -----: | -----: | ------: | -------------------- | --------- |
| 100.0% | 28.8ms |      23 | `(anonymous:L#2853)` | `node:fs` |

##### `read` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 13.8ms |      11 | `readSync` | `node:fs` |

##### `readdir` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location  |
| -----: | ----: | ------: | ------------- | --------- |
| 100.0% | 6.3ms |       5 | `readdirSync` | `node:fs` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location  |
| -----: | ----: | ------: | ----------- | --------- |
| 100.0% | 3.8ms |       3 | `closeSync` | `node:fs` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location  |
| -----: | ----: | ------: | -------------- | --------- |
| 100.0% | 3.8ms |       3 | `readFileSync` | `node:fs` |

##### `fstat` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location  |
| -----: | ----: | ------: | ------------- | --------- |
| 100.0% | 2.5ms |       2 | `tryStatSync` | `node:fs` |

##### `getNativeThreadId` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `stop` | `node_modules/@datadog/pprof/out/src/time-profiler.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                                                                  |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 86.9% | 16.08s |  12,869 | `typeCheckProject`                         | `tsc-workload.mjs`                                                                        |
| 86.9% | 16.08s |  12,867 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                                                                  |
| 86.9% | 16.08s |  12,865 | `run`                                      | `node:internal/modules/esm/module_job`                                                    |
| 83.0% | 15.37s |  12,300 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.92s |  11,140 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.92s |  11,138 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,135 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,134 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,133 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,133 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,132 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114657:47` |
| 75.1% | 13.90s |  11,126 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.1% | 13.90s |  11,125 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,399 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,398 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,398 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,396 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,395 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114747:32` |
| 69.5% | 12.87s |  10,297 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 69.5% | 12.86s |  10,294 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                                                                  |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 83.0% | 15.37s |  12,300 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.92s |  11,140 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.92s |  11,138 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,135 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,134 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,133 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,133 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.2% | 13.91s |  11,132 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114657:47` |
| 75.1% | 13.90s |  11,126 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 75.1% | 13.90s |  11,125 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,399 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,398 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,398 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,396 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 70.2% | 12.99s |  10,395 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114747:32` |
| 69.5% | 12.87s |  10,297 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 69.5% | 12.86s |  10,294 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 52.6% |  9.73s |   7,786 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 52.5% |  9.71s |   7,770 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 50.9% |  9.42s |   7,536 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.3% | 2.27s |   1,819 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function            | Location    |
| ----: | -----: | ------: | ------------------- | ----------- |
|  0.4% | 75.0ms |      60 | `open`              | `<unknown>` |
|  0.4% | 66.3ms |      53 | `stat`              | `<unknown>` |
|  0.2% | 28.8ms |      23 | `realpath`          | `<unknown>` |
|  0.1% | 13.8ms |      11 | `read`              | `<unknown>` |
| <0.1% |  6.3ms |       5 | `readdir`           | `<unknown>` |
| <0.1% |  3.8ms |       3 | `close`             | `<unknown>` |
| <0.1% |  3.8ms |       3 | `readFileUtf8`      | `<unknown>` |
| <0.1% |  2.5ms |       2 | `fstat`             | `<unknown>` |
| <0.1% |  1.3ms |       1 | `getNativeThreadId` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |   Time | Samples | Callee                             | Location                                                                        |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------- |
| 86.4% | 13.90s |  11,125 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.8% |  2.05s |   1,641 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% | 98.8ms |      79 | `require`                          | `node:internal/modules/helpers`                                                 |
|  0.2% | 25.0ms |      20 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs:3:33`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 16.08s |  12,867 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location                  |
| -----: | -----: | ------: | ------------- | ------------------------- |
| 100.0% | 16.08s |  12,864 | `(anonymous)` | `datadog-pprof.mjs:3:33`  |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `datadog-pprof.mjs:72:14` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                                                                  |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 83.6% |  12.85s |  10,285 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|  8.2% |   1.25s |   1,007 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:33` |
|  5.4% | 837.5ms |     670 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:22`  |
|  4.5% | 696.3ms |     557 | `bind`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|  2.6% | 398.8ms |     319 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115533:35` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                 | Location                                                                                  |
| ----: | ------: | ------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 93.3% |  12.99s |  10,394 | `(anonymous)`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114747:32` |
|  6.6% | 921.3ms |     737 | `(anonymous)`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114739:52` |
| <0.1% |   5.0ms |       4 | `(anonymous)`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114748:50` |
| <0.1% |   2.5ms |       2 | `(anonymous:L#114748)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| <0.1% |   1.3ms |       1 | `getDiagnostics`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                                                        |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.92s |  11,138 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                                                        |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 13.91s |  11,134 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                                                        |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 13.91s |  11,133 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                                                        |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.91s |  11,132 | `getBindAndCheckDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                                                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 13.91s |  11,131 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114657:47` |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114657:48` |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20136:35`  |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114657:47`)

|      % |   Time | Samples | Callee                          | Location                                                                        |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.91s |  11,132 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                          | Location                                                                        |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.90s |  11,124 | `flatMap`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `sortAndDeduplicateDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                                                        |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.90s |  11,125 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                                                        |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 12.99s |  10,398 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                                                        |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 12.99s |  10,396 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkDeferredNodes`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `mark`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                                                        |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------- |
| 100.0% | 12.99s |  10,396 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getDiagnostics`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                       | Location                                                                        |
| ----: | ----: | ------: | ---------------------------- | ------------------------------------------------------------------------------- |
| 56.5% | 7.34s |   5,878 | `checkDeferredNodes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.3% | 5.62s |   4,498 | `forEach`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.1% | 8.8ms |       7 | `checkExternalModuleExports` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.1% | 8.8ms |       7 | `checkUnusedIdentifiers`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% | 2.5ms |       2 | `checkSourceElement`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114747:32`)

|      % |   Time | Samples | Callee           | Location                                                                        |
| -----: | -----: | ------: | ---------------- | ------------------------------------------------------------------------------- |
| 100.0% | 12.99s |  10,395 | `getDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                         | Location                                                                        |
| -----: | -----: | ------: | ------------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 12.86s |  10,292 | `checkSourceElementWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkReturnStatement`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkExpressionStatement`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkUnionOrIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkModuleDeclaration`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                                                        |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 73.2% | 9.41s |   7,533 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.9% | 5.64s |   4,514 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.8% | 5.63s |   4,505 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 23.9% | 3.07s |   2,456 | `checkExpressionStatement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 21.8% | 2.80s |   2,242 | `checkTypeReferenceNode`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                                          | Location                                                                        |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| 99.8% |   9.71s |   7,770 | `checkExpressionWorker`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.4% | 140.0ms |     112 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |  33.8ms |      27 | `checkClassDeclaration`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |  22.5ms |      18 | `checkIfStatement`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |  22.5ms |      18 | `checkBlock`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 92.5% |   8.98s |   7,190 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 30.8% |   2.99s |   2,394 | `checkPropertyAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 29.5% |   2.86s |   2,293 | `checkObjectLiteral`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 16.9% |   1.63s |   1,311 | `checkArrayLiteral`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  9.4% | 911.3ms |     729 | `checkIdentifier`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkBlock` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Callee    | Location                                                                        |
| -----: | ----: | ------: | --------- | ------------------------------------------------------------------------------- |
| 100.0% | 9.41s |   7,534 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs:3:33`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 71.3ms |      57 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1755:18) ← `(anonymous)` (1913:37) ← `(anonymous)` (1505:37) ← `(anonymous)` (1309:33) ← `wrapModuleLoad` ← `(anonymous)` (1527:24) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% | 53.8ms |      43 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                        |
| 0.3% | 48.8ms |      39 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.2% | 43.8ms |      35 | `getUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% | 40.0ms |      32 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% | 37.5ms |      30 | `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% | 33.8ms |      27 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% | 31.3ms |      25 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                              |
| 0.2% | 31.3ms |      25 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% | 30.0ms |      24 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% | 28.8ms |      23 | `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` ← `checkFunctionExpressionOrObjectLiteralMethod` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.1% | 25.0ms |      20 | `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% | 25.0ms |      20 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% | 22.5ms |      18 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                         |
| 0.1% | 21.3ms |      17 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 20.0ms |      16 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                        |
| 0.1% | 20.0ms |      16 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% | 18.8ms |      15 | `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% | 18.8ms |      15 | `open` ← `openSync` (`node:fs`) ← `readFileSync` ← `readFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `readFile` ← `readFile` ← `getSourceFile` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:32) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (113905:33) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.1% | 17.5ms |      14 | `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114747:32) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114657:47) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
