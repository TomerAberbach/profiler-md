# CPU profile

Took 5.66s over 4,196 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 90.9% |   5.14s |   3,813 |
| Native             |  6.4% | 364.1ms |     270 |
| Standard library   |  1.8% | 101.1ms |      75 |
| Regular expression |  0.9% |  51.2ms |      38 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 5.65s (99.8%) typeCheckProject at ./tsc-workload.mjs:3:33
    ├── … 4.53s (80.1%) (anonymous) at ./node_modules/typescript/lib/typescript.js:124967:37
    │   ├── … 4.24s (74.9%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:88583:33
    │   │   ├── 2.37s (41.9%) checkDeferredNodes at 88492:30
    │   │   │   └── 2.37s (41.9%) forEach
    │   │   │       └── 2.33s (41.3%) checkDeferredNode at ./node_modules/typescript/lib/typescript.js:88499:29
    │   │   │           └── 2.33s (41.1%) checkFunctionExpressionOrObjectLiteralMethodDeferred at 81135:64
    │   │   │               ├── 2.29s (40.5%) checkSourceElement at 88199:30
    │   │   │               │   └── … 2.29s (40.5%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:88208:36
    │   │   │               │       ├── 1.20s (21.2%) checkVariableDeclaration at 85396:36
    │   │   │               │       │   └── 1.20s (21.2%) 2 more callees, led by (21.1%) checkVariableLikeDeclaration at 85202:40
    │   │   │               │       ├── … 656.8ms (11.6%) checkExpressionWorker at ./node_modules/typescript/lib/typescript.js:82811:33
    │   │   │               │       │   ├── 147.0ms (2.6%) checkPropertyAccessExpression at 77069:41
    │   │   │               │       │   │   └── 133.5ms (2.4%) checkPropertyAccessExpressionOrQualifiedName at 77201:56
    │   │   │               │       │   │       ├── 95.8ms (1.7%) getPropertyOfType at 61994:29
    │   │   │               │       │   │       │   └── 66.1ms (1.2%, self 0.6% globally) getReducedApparentType at 61750:34
    │   │   │               │       │   │       │       ├── 49.9ms (0.9%) getReducedType at 61933:26 …
    │   │   │               │       │   │       │       └── 12.1ms (0.2%) getApparentType at 61745:27
    │   │   │               │       │   │       │           └── 4.0ms (0.1%, self 2.7% globally) getObjectFlags at 21225:24
    │   │   │               │       │   │       └── 9.4ms (0.2%) getFlowTypeOfAccessExpression at 77335:41
    │   │   │               │       │   └── 507.1ms (9.0%) 12 more callees, led by (6.5%) checkCallExpression at 79584:31
    │   │   │               │       └── 424.8ms (7.5%) 19 more callees, led by (4.8%) checkTypeReferenceNode at 83518:34
    │   │   │               └── 25.6ms (0.5%) getReturnTypeOfSignature at 62462:36
    │   │   └── 1.86s (32.9%) forEach at 2378:17
    │   │       ├── … 1.81s (31.9%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:88199:30
    │   │       │   └── … 1.81s (31.9%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:88208:36
    │   │       │       ├── 528.7ms (9.3%) checkTypeReferenceNode at 83518:34
    │   │       │       │   └── 527.3ms (9.3%) checkTypeReferenceOrImport at 83529:38
    │   │       │       │       ├── … 480.1ms (8.5%) checkTypeArgumentConstraints at ./node_modules/typescript/lib/typescript.js:83481:40
    │   │       │       │       │   ├── 287.3ms (5.1%) checkTypeAssignableTo at 66493:33
    │   │       │       │       │   │   └── 287.3ms (5.1%, self 4.2% globally) checkTypeRelatedTo at 67445:30
    │   │       │       │       │   │       └── … 268.4ms (4.7%) isRelatedTo at ./node_modules/typescript/lib/typescript.js:67753:25 …
    │   │       │       │       │   └── 192.9ms (3.4%) 2 more callees, led by (3.4%) getEffectiveTypeArguments2 at 83478:38
    │   │       │       │       └── 45.9ms (0.8%) getTypeFromTypeNode at 65779:31 …
    │   │       │       └── 1.28s (22.5%) 30 more callees, led by (9.9%) checkVariableDeclaration at 85396:36
    │   │       └── … 27.0ms (0.5%) checkParameter at ./node_modules/typescript/lib/typescript.js:82969:26
    │   └── 291.3ms (5.1%) 2 more callees, led by (5.1%) getTypeChecker at 124848:26
    ├── … 303.4ms (5.4%, self 4.8%) anonymous
    │   └── 33.7ms (0.6%) (anonymous) at ./node_modules/typescript/lib/typescript.js:1:10 …
    └── 806.5ms (14.3%) 3 more callees, led by (13.5%) createProgram at ./node_modules/typescript/lib/typescript.js:123840:23
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                               |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 4.9% | 276.5ms |     205 | `anonymous`                     | `<unknown>`                                            |
| 4.2% | 237.4ms |     176 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:67445:30` |
| 2.7% | 153.7ms |     114 | `getObjectFlags`                | `./node_modules/typescript/lib/typescript.js:21225:24` |
| 2.3% | 129.5ms |      96 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:68323:36` |
| 1.9% | 105.2ms |      78 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js:66040:38` |
| 1.2% |  70.1ms |      52 | `getTypeListId`                 | `./node_modules/typescript/lib/typescript.js:62753:25` |
| 1.2% |  66.1ms |      49 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:67753:25` |
| 1.1% |  64.7ms |      48 | `inferFromTypes`                | `./node_modules/typescript/lib/typescript.js:71184:28` |
| 1.1% |  60.7ms |      45 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:68537:43` |
| 0.9% |  51.2ms |      38 | `getRelationKey`                | `./node_modules/typescript/lib/typescript.js:69989:26` |
| 0.9% |  49.9ms |      37 | `scan`                          | `./node_modules/typescript/lib/typescript.js:12895:16` |
| 0.8% |  45.9ms |      34 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:67408:29` |
| 0.8% |  44.5ms |      33 | `getReducedType`                | `./node_modules/typescript/lib/typescript.js:61933:26` |
| 0.8% |  44.5ms |      33 | `createTypeReference`           | `./node_modules/typescript/lib/typescript.js:62794:31` |
| 0.7% |  41.8ms |      31 | `some`                          | `./node_modules/typescript/lib/typescript.js:2794:14`  |
| 0.7% |  41.8ms |      31 | `isTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67361:27` |
| 0.7% |  41.8ms |      31 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js:60275:41` |
| 0.7% |  39.1ms |      29 | `couldContainTypeVariables`     | `./node_modules/typescript/lib/typescript.js:70860:37` |
| 0.6% |  36.4ms |      27 | `readFileSync`                  | `<unknown>`                                            |
| 0.6% |  36.4ms |      27 | `getReducedApparentType`        | `./node_modules/typescript/lib/typescript.js:61750:34` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|    % |    Time | Samples | Function                        | Location                                               |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 4.2% | 237.4ms |     176 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:67445:30` |
| 2.7% | 153.7ms |     114 | `getObjectFlags`                | `./node_modules/typescript/lib/typescript.js:21225:24` |
| 2.3% | 129.5ms |      96 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:68323:36` |
| 1.9% | 105.2ms |      78 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js:66040:38` |
| 1.2% |  70.1ms |      52 | `getTypeListId`                 | `./node_modules/typescript/lib/typescript.js:62753:25` |
| 1.2% |  66.1ms |      49 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:67753:25` |
| 1.1% |  64.7ms |      48 | `inferFromTypes`                | `./node_modules/typescript/lib/typescript.js:71184:28` |
| 1.1% |  60.7ms |      45 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:68537:43` |
| 0.9% |  51.2ms |      38 | `getRelationKey`                | `./node_modules/typescript/lib/typescript.js:69989:26` |
| 0.9% |  49.9ms |      37 | `scan`                          | `./node_modules/typescript/lib/typescript.js:12895:16` |
| 0.8% |  45.9ms |      34 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:67408:29` |
| 0.8% |  44.5ms |      33 | `getReducedType`                | `./node_modules/typescript/lib/typescript.js:61933:26` |
| 0.8% |  44.5ms |      33 | `createTypeReference`           | `./node_modules/typescript/lib/typescript.js:62794:31` |
| 0.7% |  41.8ms |      31 | `some`                          | `./node_modules/typescript/lib/typescript.js:2794:14`  |
| 0.7% |  41.8ms |      31 | `isTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67361:27` |
| 0.7% |  41.8ms |      31 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js:60275:41` |
| 0.7% |  39.1ms |      29 | `couldContainTypeVariables`     | `./node_modules/typescript/lib/typescript.js:70860:37` |
| 0.6% |  36.4ms |      27 | `getReducedApparentType`        | `./node_modules/typescript/lib/typescript.js:61750:34` |
| 0.6% |  35.1ms |      26 | `shouldNormalizeIntersection`   | `./node_modules/typescript/lib/typescript.js:67429:39` |
| 0.6% |  35.1ms |      26 | `resolveNameHelper`             | `./node_modules/typescript/lib/typescript.js:23186:29` |

##### Native

|     % |    Time | Samples | Function             | Location    |
| ----: | ------: | ------: | -------------------- | ----------- |
|  4.9% | 276.5ms |     205 | `anonymous`          | `<unknown>` |
|  0.6% |  36.4ms |      27 | `readFileSync`       | `<unknown>` |
|  0.5% |  28.3ms |      21 | `statSync`           | `<unknown>` |
|  0.1% |   8.1ms |       6 | `SymbolLinks`        | `<unknown>` |
|  0.1% |   6.7ms |       5 | `stringSplitFast`    | `<unknown>` |
|  0.1% |   4.0ms |       3 | `realpathNativeSync` | `<unknown>` |
| <0.1% |   2.7ms |       2 | `parseModule`        | `<unknown>` |
| <0.1% |   1.3ms |       1 | `generatorResume`    | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function      | Location           |
| ----: | -----: | ------: | ------------- | ------------------ |
|  0.2% | 13.5ms |      10 | `set`         | `<unknown>`        |
|  0.2% | 12.1ms |       9 | `get`         | `<unknown>`        |
|  0.2% | 12.1ms |       9 | `forEach`     | `<unknown>`        |
|  0.1% |  8.1ms |       6 | `next`        | `<unknown>`        |
|  0.1% |  8.1ms |       6 | `toString`    | `<unknown>`        |
|  0.1% |  6.7ms |       5 | `slice`       | `<unknown>`        |
|  0.1% |  5.4ms |       4 | `join`        | `<unknown>`        |
|  0.1% |  5.4ms |       4 | `unshift`     | `<unknown>`        |
|  0.1% |  4.0ms |       3 | `filter`      | `<unknown>`        |
|  0.1% |  4.0ms |       3 | `map`         | `<unknown>`        |
| <0.1% |  2.7ms |       2 | `has`         | `<unknown>`        |
| <0.1% |  2.7ms |       2 | `some`        | `<unknown>`        |
| <0.1% |  2.7ms |       2 | `push`        | `<unknown>`        |
| <0.1% |  1.3ms |       1 | `(anonymous)` | `node:crypto:1:11` |
| <0.1% |  1.3ms |       1 | `test`        | `<unknown>`        |
| <0.1% |  1.3ms |       1 | `add`         | `<unknown>`        |
| <0.1% |  1.3ms |       1 | `find`        | `<unknown>`        |
| <0.1% |  1.3ms |       1 | `Map`         | `<unknown>`        |
| <0.1% |  1.3ms |       1 | `values`      | `<unknown>`        |
| <0.1% |  1.3ms |       1 | `Set`         | `<unknown>`        |

#### Lines

Lines with the largest contribution to each function's self time.

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

|     % |    Time | Samples | Location                                            |
| ----: | ------: | ------: | --------------------------------------------------- |
| 60.8% | 144.3ms |     107 | `./node_modules/typescript/lib/typescript.js:67453` |
| 36.9% |  87.7ms |      65 | `./node_modules/typescript/lib/typescript.js:67464` |
|  1.7% |   4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:67494` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|      % |    Time | Samples | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 153.7ms |     114 | `./node_modules/typescript/lib/typescript.js:21226` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 68.7% | 89.0ms |      66 | `./node_modules/typescript/lib/typescript.js:68336` |
|  9.4% | 12.1ms |       9 | `./node_modules/typescript/lib/typescript.js:68383` |
|  4.2% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:68448` |
|  3.1% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:68395` |
|  2.1% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:68357` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66040:38`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 35.9% | 37.8ms |      28 | `./node_modules/typescript/lib/typescript.js:66070` |
| 19.2% | 20.2ms |      15 | `./node_modules/typescript/lib/typescript.js:66042` |
| 16.7% | 17.5ms |      13 | `./node_modules/typescript/lib/typescript.js:66079` |
| 10.3% | 10.8ms |       8 | `./node_modules/typescript/lib/typescript.js:66065` |
|  5.1% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:66081` |

##### `getTypeListId` (`./node_modules/typescript/lib/typescript.js:62753:25`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 38.5% | 27.0ms |      20 | `./node_modules/typescript/lib/typescript.js:62767` |
| 30.8% | 21.6ms |      16 | `./node_modules/typescript/lib/typescript.js:62764` |
| 13.5% |  9.4ms |       7 | `./node_modules/typescript/lib/typescript.js:62756` |
| 11.5% |  8.1ms |       6 | `./node_modules/typescript/lib/typescript.js:62769` |
|  1.9% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:62755` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 20.4% | 13.5ms |      10 | `./node_modules/typescript/lib/typescript.js:67783` |
| 16.3% | 10.8ms |       8 | `./node_modules/typescript/lib/typescript.js:67770` |
| 12.2% |  8.1ms |       6 | `./node_modules/typescript/lib/typescript.js:67848` |
| 12.2% |  8.1ms |       6 | `./node_modules/typescript/lib/typescript.js:67808` |
|  8.2% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:67765` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 27.1% | 17.5ms |      13 | `./node_modules/typescript/lib/typescript.js:71185` |
| 16.7% | 10.8ms |       8 | `./node_modules/typescript/lib/typescript.js:71351` |
| 12.5% |  8.1ms |       6 | `./node_modules/typescript/lib/typescript.js:71315` |
|  8.3% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:71205` |
|  6.2% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:71206` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 22.2% | 13.5ms |      10 | `./node_modules/typescript/lib/typescript.js:68540` |
| 11.1% |  6.7ms |       5 | `./node_modules/typescript/lib/typescript.js:68773` |
| 11.1% |  6.7ms |       5 | `./node_modules/typescript/lib/typescript.js:69028` |
|  8.9% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:68545` |
|  6.7% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:68980` |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 76.3% | 39.1ms |      29 | `./node_modules/typescript/lib/typescript.js:69996` |
| 10.5% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:69990` |
|  7.9% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:69995` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 62.2% | 31.0ms |      23 | `./node_modules/typescript/lib/typescript.js:12904` |
| 21.6% | 10.8ms |       8 | `./node_modules/typescript/lib/typescript.js:13084` |
|  8.1% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:13336` |
|  2.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:13054` |
|  2.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:13077` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 94.1% | 43.2ms |      32 | `./node_modules/typescript/lib/typescript.js:67410` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js:61933:26`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 51.5% | 22.9ms |      17 | `./node_modules/typescript/lib/typescript.js:61935` |
| 24.2% | 10.8ms |       8 | `./node_modules/typescript/lib/typescript.js:61934` |
|  9.1% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:61937` |
|  6.1% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:61940` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 66.7% | 29.7ms |      22 | `./node_modules/typescript/lib/typescript.js:62796` |
| 33.3% | 14.8ms |      11 | `./node_modules/typescript/lib/typescript.js:62799` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2794:14`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 48.4% | 20.2ms |      15 | `./node_modules/typescript/lib/typescript.js:2798` |
| 38.7% | 16.2ms |      12 | `./node_modules/typescript/lib/typescript.js:2797` |
|  6.5% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:2803` |
|  3.2% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:2795` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 61.3% | 25.6ms |      19 | `./node_modules/typescript/lib/typescript.js:67395` |
| 16.1% |  6.7ms |       5 | `./node_modules/typescript/lib/typescript.js:67382` |
| 12.9% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:67375` |
|  9.7% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:67372` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js:60275:41`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 93.5% | 39.1ms |      29 | `./node_modules/typescript/lib/typescript.js:60278` |
|  3.2% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:60277` |
|  3.2% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:60276` |

##### `couldContainTypeVariables` (`./node_modules/typescript/lib/typescript.js:70860:37`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 48.3% | 18.9ms |      14 | `./node_modules/typescript/lib/typescript.js:70867` |
| 17.2% |  6.7ms |       5 | `./node_modules/typescript/lib/typescript.js:70861` |
| 17.2% |  6.7ms |       5 | `./node_modules/typescript/lib/typescript.js:70865` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:61750:34`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 36.4ms |      27 | `./node_modules/typescript/lib/typescript.js:61751` |

##### `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 50.0% | 17.5ms |      13 | `./node_modules/typescript/lib/typescript.js:67434` |
| 46.2% | 16.2ms |      12 | `./node_modules/typescript/lib/typescript.js:67432` |
|  3.8% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67433` |

##### `resolveNameHelper` (`./node_modules/typescript/lib/typescript.js:23186:29`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 50.0% | 17.5ms |      13 | `./node_modules/typescript/lib/typescript.js:23230` |
|  7.7% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:23196` |
|  7.7% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:23406` |
|  3.8% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:23206` |
|  3.8% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:23188` |

##### `forEach` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 12.1ms |       9 | 1        |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 8.1ms |       6 | 1        |

##### `next` (`<unknown>`)

|     % |  Time | Samples | Location |
| ----: | ----: | ------: | -------- |
| 83.3% | 6.7ms |       5 | 1        |

##### `filter` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 4.0ms |       3 | 1        |

##### `map` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 4.0ms |       3 | 1        |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.7ms |       2 | 1        |

##### `generatorResume` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1        |

##### `(anonymous)` (`node:crypto:1:11`)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 1.3ms |       1 | `node:crypto:74` |

##### `find` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1        |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `anonymous` (`<unknown>`)

|     % |    Time | Samples | Caller        | Location                        |
| ----: | ------: | ------: | ------------- | ------------------------------- |
| 97.6% | 269.7ms |     200 | `require`     | `<unknown>`                     |
|  1.0% |   2.7ms |       2 | `(anonymous)` | `<unknown>`                     |
|  0.5% |   1.3ms |       1 | `(anonymous)` | `node:fs:1:11`                  |
|  0.5% |   1.3ms |       1 | `(anonymous)` | `internal:streams/compose:1:11` |
|  0.5% |   1.3ms |       1 | `(anonymous)` | `internal:streams/duplex:1:11`  |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

|     % |    Time | Samples | Caller                  | Location                                               |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------ |
| 98.9% | 234.7ms |     174 | `isTypeRelatedTo`       | `./node_modules/typescript/lib/typescript.js:67361:27` |
|  1.1% |   2.7ms |       2 | `checkTypeAssignableTo` | `./node_modules/typescript/lib/typescript.js:66493:33` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|     % |   Time | Samples | Caller                       | Location                                               |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 21.9% | 33.7ms |      25 | `getApparentType`            | `./node_modules/typescript/lib/typescript.js:61745:27` |
| 18.4% | 28.3ms |      21 | `couldContainTypeVariables`  | `./node_modules/typescript/lib/typescript.js:70860:37` |
| 14.0% | 21.6ms |      16 | `isTupleType`                | `./node_modules/typescript/lib/typescript.js:70353:23` |
|  6.1% |  9.4ms |       7 | `getPropagatingFlagsOfTypes` | `./node_modules/typescript/lib/typescript.js:62779:38` |
|  5.3% |  8.1ms |       6 | `isEmptyAnonymousObjectType` | `./node_modules/typescript/lib/typescript.js:67227:38` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

|      % |    Time | Samples | Caller        | Location                                               |
| -----: | ------: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 129.5ms |      96 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:67753:25` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66040:38`)

|      % |    Time | Samples | Caller                  | Location                                               |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 105.2ms |      78 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:66283:33` |

##### `getTypeListId` (`./node_modules/typescript/lib/typescript.js:62753:25`)

|     % |   Time | Samples | Caller                       | Location                                               |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 28.8% | 20.2ms |      15 | `createTypeReference`        | `./node_modules/typescript/lib/typescript.js:62794:31` |
| 28.8% | 20.2ms |      15 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:66040:38` |
| 17.3% | 12.1ms |       9 | `getIntersectionType`        | `./node_modules/typescript/lib/typescript.js:64367:31` |
| 13.5% |  9.4ms |       7 | `getUnionTypeFromSortedList` | `./node_modules/typescript/lib/typescript.js:64203:38` |
|  7.7% |  5.4ms |       4 | `getAliasId`                 | `./node_modules/typescript/lib/typescript.js:62776:22` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Caller                          | Location                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 63.3% | 41.8ms |      31 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:67445:30` |
| 14.3% |  9.4ms |       7 | `isRelatedToWorker2`            | `./node_modules/typescript/lib/typescript.js:69638:34` |
|  6.1% |  4.0ms |       3 | `isPropertySymbolTypeRelated`   | `./node_modules/typescript/lib/typescript.js:69211:41` |
|  4.1% |  2.7ms |       2 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:68537:43` |
|  4.1% |  2.7ms |       2 | `typeArgumentsRelatedTo`        | `./node_modules/typescript/lib/typescript.js:68233:36` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|     % |   Time | Samples | Caller                        | Location                                               |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 18.7% | 12.1ms |       9 | `applyToReturnTypes`          | `./node_modules/typescript/lib/typescript.js:70758:30` |
| 16.7% | 10.8ms |       8 | `inferFromTypeArguments`      | `./node_modules/typescript/lib/typescript.js:71419:36` |
| 14.6% |  9.4ms |       7 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:71715:33` |
| 14.6% |  9.4ms |       7 | `inferFromMatchingTypes`      | `./node_modules/typescript/lib/typescript.js:71402:36` |
| 12.5% |  8.1ms |       6 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:71429:41` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

|      % |   Time | Samples | Caller                    | Location                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 60.7ms |      45 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68467:37` |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`)

|     % |   Time | Samples | Caller                   | Location                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 84.2% | 43.2ms |      32 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |
| 15.8% |  8.1ms |       6 | `isTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:67361:27` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

|     % |   Time | Samples | Caller                  | Location                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 97.3% | 48.6ms |      36 | `nextTokenWithoutCheck` | `./node_modules/typescript/lib/typescript.js:33008:33` |
|  2.7% |  1.3ms |       1 | `scanTokenAtPosition`   | `./node_modules/typescript/lib/typescript.js:17466:29` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

|      % |   Time | Samples | Caller        | Location                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 45.9ms |      34 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:67753:25` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js:61933:26`)

|     % |   Time | Samples | Caller                                 | Location                                               |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 63.6% | 28.3ms |      21 | `getReducedApparentType`               | `./node_modules/typescript/lib/typescript.js:61750:34` |
| 21.2% |  9.4ms |       7 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:67416:48` |
|  6.1% |  2.7ms |       2 | `getIndexType`                         | `./node_modules/typescript/lib/typescript.js:64603:24` |
|  3.0% |  1.3ms |       1 | `sameMap`                              | `./node_modules/typescript/lib/typescript.js:2595:17`  |
|  3.0% |  1.3ms |       1 | `instantiateMappedType`                | `./node_modules/typescript/lib/typescript.js:66151:33` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Caller                          | Location                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 66.7% | 29.7ms |      22 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:63796:41` |
| 18.2% |  8.1ms |       6 | `getTypeWithThisArgument`       | `./node_modules/typescript/lib/typescript.js:60454:35` |
|  9.1% |  4.0ms |       3 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:67408:29` |
|  3.0% |  1.3ms |       1 | `getWidenedTypeWithContext`     | `./node_modules/typescript/lib/typescript.js:70582:37` |
|  3.0% |  1.3ms |       1 | `createNormalizedTupleType`     | `./node_modules/typescript/lib/typescript.js:63799:37` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2794:14`)

|     % |  Time | Samples | Caller                      | Location                                               |
| ----: | ----: | ------: | --------------------------- | ------------------------------------------------------ |
| 22.6% | 9.4ms |       7 | `getReducedType`            | `./node_modules/typescript/lib/typescript.js:61933:26` |
| 16.1% | 6.7ms |       5 | `isReadonlySymbol`          | `./node_modules/typescript/lib/typescript.js:81206:28` |
| 12.9% | 5.4ms |       4 | `couldContainTypeVariables` | `./node_modules/typescript/lib/typescript.js:70860:37` |
|  9.7% | 4.0ms |       3 | `indexSignaturesRelatedTo`  | `./node_modules/typescript/lib/typescript.js:69735:38` |
|  6.5% | 2.7ms |       2 | `isConstTypeVariable`       | `./node_modules/typescript/lib/typescript.js:61461:31` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

|     % |   Time | Samples | Caller                                     | Location                                               |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------ |
| 80.6% | 33.7ms |      25 | `isTypeIdenticalTo`                        | `./node_modules/typescript/lib/typescript.js:66463:29` |
|  9.7% |  4.0ms |       3 | `isTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:66481:30` |
|  6.5% |  2.7ms |       2 | `isTypeComparableTo`                       | `./node_modules/typescript/lib/typescript.js:66487:30` |
|  3.2% |  1.3ms |       1 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:66509:52` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js:60275:41`)

|     % |   Time | Samples | Caller                        | Location                                               |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 96.8% | 40.5ms |      30 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js:60465:36` |
|  3.2% |  1.3ms |       1 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js:60978:39` |

##### `couldContainTypeVariables` (`./node_modules/typescript/lib/typescript.js:70860:37`)

|     % |   Time | Samples | Caller                     | Location                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 65.5% | 25.6ms |      19 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:66266:36` |
| 17.2% |  6.7ms |       5 | `instantiateSymbol`        | `./node_modules/typescript/lib/typescript.js:66013:29` |
| 10.3% |  4.0ms |       3 | `some`                     | `./node_modules/typescript/lib/typescript.js:2794:14`  |
|  6.9% |  2.7ms |       2 | `inferFromTypes`           | `./node_modules/typescript/lib/typescript.js:71184:28` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                              |
| ----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 85.2% | 31.0ms |      23 | `readFileSync`   | `<unknown>`                                           |
| 14.8% |  5.4ms |       4 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:61750:34`)

|     % |   Time | Samples | Caller                | Location                                               |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------ |
| 48.1% | 17.5ms |      13 | `getSignaturesOfType` | `./node_modules/typescript/lib/typescript.js:62044:31` |
| 29.6% | 10.8ms |       8 | `getPropertyOfType`   | `./node_modules/typescript/lib/typescript.js:61994:29` |
| 18.5% |  6.7ms |       5 | `getIndexInfosOfType` | `./node_modules/typescript/lib/typescript.js:62110:31` |
|  3.7% |  1.3ms |       1 | `getPropertiesOfType` | `./node_modules/typescript/lib/typescript.js:61411:31` |

##### `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`)

|      % |   Time | Samples | Caller                                 | Location                                               |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 100.0% | 35.1ms |      26 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:67416:48` |

##### `resolveNameHelper` (`./node_modules/typescript/lib/typescript.js:23186:29`)

|     % |   Time | Samples | Caller              | Location                                               |
| ----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 53.8% | 18.9ms |      14 | `resolveEntityName` | `./node_modules/typescript/lib/typescript.js:52866:29` |
| 46.2% | 16.2ms |      12 | `getResolvedSymbol` | `./node_modules/typescript/lib/typescript.js:71910:29` |

##### `statSync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                                              |
| -----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 28.3ms |      21 | `statSync` | `./node_modules/typescript/lib/typescript.js:8631:22` |

##### `set` (`<unknown>`)

|     % |  Time | Samples | Caller                                | Location                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 50.0% | 6.7ms |       5 | `getDeclaredTypeOfClassOrInterface`   | `./node_modules/typescript/lib/typescript.js:60073:45` |
| 10.0% | 1.3ms |       1 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:51425:20` |
| 10.0% | 1.3ms |       1 | `getSpreadType`                       | `./node_modules/typescript/lib/typescript.js:65547:25` |
| 10.0% | 1.3ms |       1 | `checkGrammarObjectLiteralExpression` | `./node_modules/typescript/lib/typescript.js:91022:47` |
| 10.0% | 1.3ms |       1 | `getConditionalTypeInstantiation`     | `./node_modules/typescript/lib/typescript.js:66239:43` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                                |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 22.2% | 2.7ms |       2 | `findSourceFileWorker`     | `./node_modules/typescript/lib/typescript.js:125566:32` |
| 22.2% | 2.7ms |       2 | `recursiveTypeRelatedTo`   | `./node_modules/typescript/lib/typescript.js:68323:36`  |
| 11.1% | 1.3ms |       1 | `bindClassLikeDeclaration` | `./node_modules/typescript/lib/typescript.js:48535:36`  |
| 11.1% | 1.3ms |       1 | `addInheritedMembers`      | `./node_modules/typescript/lib/typescript.js:60282:31`  |
| 11.1% | 1.3ms |       1 | `isFunctionObjectType`     | `./node_modules/typescript/lib/typescript.js:72214:32`  |

##### `forEach` (`<unknown>`)

|     % |  Time | Samples | Caller                | Location                                               |
| ----: | ----: | ------: | --------------------- | ------------------------------------------------------ |
| 77.8% | 9.4ms |       7 | `getNamedMembers`     | `./node_modules/typescript/lib/typescript.js:53726:27` |
| 11.1% | 1.3ms |       1 | `checkDeferredNodes`  | `./node_modules/typescript/lib/typescript.js:88492:30` |
| 11.1% | 1.3ms |       1 | `extendExportSymbols` | `./node_modules/typescript/lib/typescript.js:53420:31` |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 8.1ms |       6 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:51236:24` |

##### `next` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                              |
| ----: | ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 83.3% | 6.7ms |       5 | `arrayFrom`                | `./node_modules/typescript/lib/typescript.js:3187:19` |
| 16.7% | 1.3ms |       1 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3059:34` |

##### `toString` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                              |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 8.1ms |       6 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |

##### `stringSplitFast` (`<unknown>`)

|     % |  Time | Samples | Caller                          | Location                                                |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 80.0% | 5.4ms |       4 | `pathComponents`                | `./node_modules/typescript/lib/typescript.js:9097:24`   |
| 20.0% | 1.3ms |       1 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js:123602:39` |

##### `slice` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location                                              |
| -----: | ----: | ------: | -------- | ----------------------------------------------------- |
| 100.0% | 6.7ms |       5 | `filter` | `./node_modules/typescript/lib/typescript.js:2546:16` |

##### `join` (`<unknown>`)

|     % |  Time | Samples | Caller               | Location                                               |
| ----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 50.0% | 2.7ms |       2 | `doJSDocScan`        | `./node_modules/typescript/lib/typescript.js:38308:27` |
| 25.0% | 1.3ms |       1 | `getPathWithoutRoot` | `./node_modules/typescript/lib/typescript.js:9179:28`  |
| 25.0% | 1.3ms |       1 | `parseTagComments`   | `./node_modules/typescript/lib/typescript.js:38564:32` |

##### `unshift` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                               |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 5.4ms |       4 | `addWorkItem` | `./node_modules/typescript/lib/typescript.js:32338:23` |

##### `realpathNativeSync` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                              |
| ----: | ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 66.7% | 2.7ms |       2 | `bound realpathNativeSync` | `<unknown>`                                           |
| 33.3% | 1.3ms |       1 | `realpath`                 | `./node_modules/typescript/lib/typescript.js:8881:22` |

##### `filter` (`<unknown>`)

|      % |  Time | Samples | Caller                                 | Location                                               |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 100.0% | 4.0ms |       3 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Caller                                 | Location                                               |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 66.7% | 2.7ms |       2 | `createInferenceContext`               | `./node_modules/typescript/lib/typescript.js:70767:34` |
| 33.3% | 1.3ms |       1 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48` |

##### `parseModule` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.7ms |       2 | `(anonymous)` | `<unknown>` |

##### `has` (`<unknown>`)

|     % |  Time | Samples | Caller                   | Location                                               |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------------------ |
| 50.0% | 1.3ms |       1 | `addTypeToIntersection`  | `./node_modules/typescript/lib/typescript.js:64240:33` |
| 50.0% | 1.3ms |       1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location                                               |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 2.7ms |       2 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js:78984:33` |

##### `push` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location                                                |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 50.0% | 1.3ms |       1 | `getTemplateLiteralType`            | `./node_modules/typescript/lib/typescript.js:64644:34`  |
| 50.0% | 1.3ms |       1 | `resolveModuleNamesReusingOldState` | `./node_modules/typescript/lib/typescript.js:124396:45` |

##### `generatorResume` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 1.3ms |       1 | `return` | `<unknown>` |

##### `(anonymous)` (`node:crypto:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.3ms |       1 | `anonymous` | `<unknown>` |

##### `test` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                               |
| -----: | ----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `visitDirectory` | `./node_modules/typescript/lib/typescript.js:22185:26` |

##### `add` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                               |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |

##### `find` (`<unknown>`)

|      % |  Time | Samples | Caller                            | Location                                               |
| -----: | ----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `getClassLikeDeclarationOfSymbol` | `./node_modules/typescript/lib/typescript.js:21221:41` |

##### `Map` (`<unknown>`)

|      % |  Time | Samples | Caller                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `checkGrammarObjectLiteralExpression` | `./node_modules/typescript/lib/typescript.js:91022:47` |

##### `values` (`<unknown>`)

|      % |  Time | Samples | Caller                      | Location                                               |
| -----: | ----: | ------: | --------------------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `checkUnusedTypeParameters` | `./node_modules/typescript/lib/typescript.js:84839:37` |

##### `Set` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `getExportsOfModuleWorker` | `./node_modules/typescript/lib/typescript.js:53444:36` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 99.9% | 5.65s |   4,193 | `(anonymous)`                              | `<unknown>`                                             |
| 99.8% | 5.65s |   4,187 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                               |
| 99.8% | 5.65s |   4,186 | `evaluate`                                 | `<unknown>`                                             |
| 99.8% | 5.65s |   4,186 | `moduleEvaluation`                         | `<unknown>`                                             |
| 99.8% | 5.65s |   4,186 | `loadAndEvaluateModule`                    | `<unknown>`                                             |
| 99.8% | 5.65s |   4,186 | `processTicksAndRejections`                | `<unknown>`                                             |
| 89.5% | 5.07s |   3,757 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2378:17`   |
| 80.1% | 4.54s |   3,363 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 80.1% | 4.54s |   3,363 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2625:17`   |
| 80.1% | 4.53s |   3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124967:37` |
| 80.1% | 4.53s |   3,362 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:124947:36` |
| 80.1% | 4.53s |   3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |
| 80.1% | 4.53s |   3,362 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:125252:34` |
| 80.1% | 4.53s |   3,362 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:124963:45` |
| 80.1% | 4.53s |   3,362 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:124957:41` |
| 80.1% | 4.53s |   3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124899:76` |
| 80.1% | 4.53s |   3,362 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:124895:32` |
| 75.0% | 4.24s |   3,145 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 75.0% | 4.24s |   3,145 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:88552:27`  |
| 75.0% | 4.24s |   3,145 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:88649:47`  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 89.5% | 5.07s |   3,757 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2378:17`   |
| 80.1% | 4.54s |   3,363 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 80.1% | 4.54s |   3,363 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2625:17`   |
| 80.1% | 4.53s |   3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124967:37` |
| 80.1% | 4.53s |   3,362 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:124947:36` |
| 80.1% | 4.53s |   3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |
| 80.1% | 4.53s |   3,362 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:125252:34` |
| 80.1% | 4.53s |   3,362 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:124963:45` |
| 80.1% | 4.53s |   3,362 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:124957:41` |
| 80.1% | 4.53s |   3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124899:76` |
| 80.1% | 4.53s |   3,362 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:124895:32` |
| 75.0% | 4.24s |   3,145 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 75.0% | 4.24s |   3,145 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:88552:27`  |
| 75.0% | 4.24s |   3,145 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:88649:47`  |
| 75.0% | 4.24s |   3,145 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:88656:32`  |
| 75.0% | 4.24s |   3,145 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:88635:27`  |
| 74.1% | 4.19s |   3,110 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:88199:30`  |
| 74.1% | 4.19s |   3,109 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:88208:36`  |
| 56.3% | 3.19s |   2,364 | `checkBlock`                               | `./node_modules/typescript/lib/typescript.js:85011:22`  |
| 55.5% | 3.14s |   2,328 | `checkExpression`                          | `./node_modules/typescript/lib/typescript.js:82771:27`  |

##### Native

|     % |    Time | Samples | Function                    | Location    |
| ----: | ------: | ------: | --------------------------- | ----------- |
| 99.8% |   5.65s |   4,186 | `evaluate`                  | `<unknown>` |
| 99.8% |   5.65s |   4,186 | `moduleEvaluation`          | `<unknown>` |
| 99.8% |   5.65s |   4,186 | `loadAndEvaluateModule`     | `<unknown>` |
| 99.8% |   5.65s |   4,186 | `processTicksAndRejections` | `<unknown>` |
|  5.5% | 311.5ms |     231 | `anonymous`                 | `<unknown>` |
|  5.4% | 304.8ms |     226 | `require`                   | `<unknown>` |
|  5.4% | 304.8ms |     226 | `bound require`             | `<unknown>` |
|  1.3% |  75.5ms |      56 | `generatorResume`           | `<unknown>` |
|  0.6% |  36.4ms |      27 | `readFileSync`              | `<unknown>` |
|  0.5% |  28.3ms |      21 | `statSync`                  | `<unknown>` |
|  0.2% |   9.4ms |       7 | `parseModule`               | `<unknown>` |
|  0.1% |   8.1ms |       6 | `SymbolLinks`               | `<unknown>` |
|  0.1% |   6.7ms |       5 | `stringSplitFast`           | `<unknown>` |
|  0.1% |   4.0ms |       3 | `realpathNativeSync`        | `<unknown>` |
| <0.1% |   2.7ms |       2 | `bound realpathNativeSync`  | `<unknown>` |
| <0.1% |   1.3ms |       1 | `return`                    | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function          | Location                          |
| ----: | -----: | ------: | ----------------- | --------------------------------- |
| 42.3% |  2.40s |   1,777 | `forEach`         | `<unknown>`                       |
|  0.8% | 45.9ms |      34 | `next`            | `<unknown>`                       |
|  0.2% | 13.5ms |      10 | `set`             | `<unknown>`                       |
|  0.2% | 12.1ms |       9 | `test`            | `<unknown>`                       |
|  0.2% | 12.1ms |       9 | `get`             | `<unknown>`                       |
|  0.1% |  8.1ms |       6 | `some`            | `<unknown>`                       |
|  0.1% |  8.1ms |       6 | `toString`        | `<unknown>`                       |
|  0.1% |  6.7ms |       5 | `filter`          | `<unknown>`                       |
|  0.1% |  6.7ms |       5 | `map`             | `<unknown>`                       |
|  0.1% |  6.7ms |       5 | `slice`           | `<unknown>`                       |
|  0.1% |  5.4ms |       4 | `join`            | `<unknown>`                       |
|  0.1% |  5.4ms |       4 | `unshift`         | `<unknown>`                       |
|  0.1% |  5.4ms |       4 | `find`            | `<unknown>`                       |
|  0.1% |  4.0ms |       3 | `sort`            | `<unknown>`                       |
| <0.1% |  2.7ms |       2 | `(anonymous)`     | `internal:streams/compose:1:11`   |
| <0.1% |  2.7ms |       2 | `(anonymous)`     | `internal:streams/operators:1:11` |
| <0.1% |  2.7ms |       2 | `(anonymous)`     | `internal:stream:1:11`            |
| <0.1% |  2.7ms |       2 | `(anonymous)`     | `node:stream:1:11`                |
| <0.1% |  2.7ms |       2 | `(anonymous)`     | `internal:fs/streams:1:11`        |
| <0.1% |  2.7ms |       2 | `get WriteStream` | `node:fs:587:18`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                      | Location    |
| ----: | ----: | ------: | --------------------------- | ----------- |
| 99.8% | 5.65s |   4,186 | `processTicksAndRejections` | `<unknown>` |
|  0.1% | 6.7ms |       5 | `parseModule`               | `<unknown>` |

##### `evaluate` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.65s |   4,186 | `moduleEvaluation` | `<unknown>` |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location    |
| -----: | ----: | ------: | ----------------------- | ----------- |
| 100.0% | 5.65s |   4,186 | `moduleEvaluation`      | `<unknown>` |
| 100.0% | 5.65s |   4,186 | `loadAndEvaluateModule` | `<unknown>` |

##### `loadAndEvaluateModule` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.65s |   4,186 | `(anonymous)` | `<unknown>` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

|     % |    Time | Samples | Caller                         | Location                                                |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------- |
| 62.9% |   3.19s |   2,363 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:85011:22`  |
| 36.7% |   1.86s |   1,380 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 35.5% |   1.80s |   1,332 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:85407:40`  |
| 12.4% | 625.8ms |     464 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:123840:23` |
| 11.0% | 559.7ms |     415 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js:86712:33`  |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

|      % |  Time | Samples | Caller             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 4.54s |   3,363 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

|      % |  Time | Samples | Caller                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getDiagnosticsHelper`              | `./node_modules/typescript/lib/typescript.js:124895:32` |
|  <0.1% | 1.3ms |       1 | `filterOwnedJSDocTags`              | `./node_modules/typescript/lib/typescript.js:18930:30`  |
|  <0.1% | 1.3ms |       1 | `getRegularExpressionsForWildcards` | `./node_modules/typescript/lib/typescript.js:22090:43`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|      % |  Time | Samples | Caller                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:124947:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

|      % |  Time | Samples | Caller                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:125252:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

|      % |  Time | Samples | Caller                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124963:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

|      % |  Time | Samples | Caller                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124957:41` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124899:76` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

|      % |  Time | Samples | Caller    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2625:17` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:124909:34` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 4.24s |   3,145 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:88552:27` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

|      % |  Time | Samples | Caller                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 4.24s |   3,145 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:88649:47` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

|      % |  Time | Samples | Caller                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 4.24s |   3,145 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:88656:32` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 4.24s |   3,145 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:88635:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.24s |   3,145 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124967:37` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

|     % |    Time | Samples | Caller                                                 | Location                                               |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 99.9% |   4.19s |   3,107 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2378:17`  |
| 55.5% |   2.33s |   1,727 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:81135:64` |
| 13.5% | 566.4ms |     420 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:87285:37` |
| 11.2% | 469.3ms |     348 | `checkFunctionOrMethodDeclaration`                     | `./node_modules/typescript/lib/typescript.js:84693:44` |
|  9.3% | 389.8ms |     289 | `checkIfStatement`                                     | `./node_modules/typescript/lib/typescript.js:85423:28` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

|      % |  Time | Samples | Caller               | Location                                               |
| -----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 100.0% | 4.19s |   3,109 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:88199:30` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js:85011:22`)

|      % |    Time | Samples | Caller                     | Location                                               |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |   3.19s |   2,363 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:88208:36` |
|   4.1% | 130.8ms |      97 | `checkTryStatement`        | `./node_modules/typescript/lib/typescript.js:86397:29` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:82771:27`)

|     % |    Time | Samples | Caller                              | Location                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 57.4% |   1.80s |   1,336 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js:82440:33` |
| 46.7% |   1.47s |   1,087 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js:82417:45` |
| 33.0% |   1.04s |     768 | `checkExpressionStatement`          | `./node_modules/typescript/lib/typescript.js:85419:36` |
| 32.0% |   1.01s |     746 | `checkExpressionForMutableLocation` | `./node_modules/typescript/lib/typescript.js:82534:45` |
| 25.7% | 806.5ms |     598 | `checkNonNullExpression`            | `./node_modules/typescript/lib/typescript.js:76990:34` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Caller                | Location                                               |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------ |
| 99.0% |  2.37s |   1,759 | `checkDeferredNodes`  | `./node_modules/typescript/lib/typescript.js:88492:30` |
|  1.4% | 33.7ms |      25 | `getNamedMembers`     | `./node_modules/typescript/lib/typescript.js:53726:27` |
|  0.5% | 10.8ms |       8 | `extendExportSymbols` | `./node_modules/typescript/lib/typescript.js:53420:31` |
|  0.3% |  6.7ms |       5 | `visit`               | `./node_modules/typescript/lib/typescript.js:53457:19` |
|  0.2% |  4.0ms |       3 | `mergeSymbolTable`    | `./node_modules/typescript/lib/typescript.js:51424:28` |

##### `anonymous` (`<unknown>`)

|     % |    Time | Samples | Caller        | Location                          |
| ----: | ------: | ------: | ------------- | --------------------------------- |
| 97.8% | 304.8ms |     226 | `require`     | `<unknown>`                       |
|  1.3% |   4.0ms |       3 | `(anonymous)` | `<unknown>`                       |
|  0.9% |   2.7ms |       2 | `(anonymous)` | `internal:streams/compose:1:11`   |
|  0.9% |   2.7ms |       2 | `(anonymous)` | `internal:streams/operators:1:11` |
|  0.9% |   2.7ms |       2 | `(anonymous)` | `internal:stream:1:11`            |

##### `require` (`<unknown>`)

|      % |    Time | Samples | Caller          | Location    |
| -----: | ------: | ------: | --------------- | ----------- |
| 100.0% | 304.8ms |     226 | `bound require` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |    Time | Samples | Caller             | Location                                              |
| -----: | ------: | ------: | ------------------ | ----------------------------------------------------- |
| 100.0% | 304.8ms |     226 | `typeCheckProject` | `./tsc-workload.mjs:3:33`                             |
|   0.4% |   1.3ms |       1 | `getNodeSystem`    | `./node_modules/typescript/lib/typescript.js:8489:25` |

##### `generatorResume` (`<unknown>`)

|     % |   Time | Samples | Caller                     | Location                                              |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------- |
| 50.0% | 37.8ms |      28 | `next`                     | `<unknown>`                                           |
| 48.2% | 36.4ms |      27 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3059:34` |
|  1.8% |  1.3ms |       1 | `return`                   | `<unknown>`                                           |

##### `next` (`<unknown>`)

|     % |   Time | Samples | Caller                     | Location                                              |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------- |
| 85.3% | 39.1ms |      29 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3059:34` |
| 14.7% |  6.7ms |       5 | `arrayFrom`                | `./node_modules/typescript/lib/typescript.js:3187:19` |

##### `readFileSync` (`<unknown>`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 36.4ms |      27 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |
|  85.2% | 31.0ms |      23 | `readFileSync`   | `<unknown>`                                           |

##### `statSync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                                              |
| -----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 28.3ms |      21 | `statSync` | `./node_modules/typescript/lib/typescript.js:8631:22` |

##### `set` (`<unknown>`)

|     % |  Time | Samples | Caller                                | Location                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 50.0% | 6.7ms |       5 | `getDeclaredTypeOfClassOrInterface`   | `./node_modules/typescript/lib/typescript.js:60073:45` |
| 10.0% | 1.3ms |       1 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:51425:20` |
| 10.0% | 1.3ms |       1 | `getSpreadType`                       | `./node_modules/typescript/lib/typescript.js:65547:25` |
| 10.0% | 1.3ms |       1 | `checkGrammarObjectLiteralExpression` | `./node_modules/typescript/lib/typescript.js:91022:47` |
| 10.0% | 1.3ms |       1 | `getConditionalTypeInstantiation`     | `./node_modules/typescript/lib/typescript.js:66239:43` |

##### `test` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                               |
| ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
| 88.9% | 10.8ms |       8 | `(anonymous)`    | `./node_modules/typescript/lib/typescript.js:22201:60` |
| 11.1% |  1.3ms |       1 | `visitDirectory` | `./node_modules/typescript/lib/typescript.js:22185:26` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                                |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 22.2% | 2.7ms |       2 | `findSourceFileWorker`     | `./node_modules/typescript/lib/typescript.js:125566:32` |
| 22.2% | 2.7ms |       2 | `recursiveTypeRelatedTo`   | `./node_modules/typescript/lib/typescript.js:68323:36`  |
| 11.1% | 1.3ms |       1 | `bindClassLikeDeclaration` | `./node_modules/typescript/lib/typescript.js:48535:36`  |
| 11.1% | 1.3ms |       1 | `addInheritedMembers`      | `./node_modules/typescript/lib/typescript.js:60282:31`  |
| 11.1% | 1.3ms |       1 | `isFunctionObjectType`     | `./node_modules/typescript/lib/typescript.js:72214:32`  |

##### `parseModule` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 9.4ms |       7 | `(anonymous)` | `<unknown>` |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 8.1ms |       6 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:51236:24` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Caller                  | Location                                               |
| ----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 83.3% | 6.7ms |       5 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js:78984:33` |
| 16.7% | 1.3ms |       1 | `hasExportDeclarations` | `./node_modules/typescript/lib/typescript.js:47452:33` |

##### `toString` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                              |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 8.1ms |       6 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |

##### `stringSplitFast` (`<unknown>`)

|     % |  Time | Samples | Caller                          | Location                                                |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 80.0% | 5.4ms |       4 | `pathComponents`                | `./node_modules/typescript/lib/typescript.js:9097:24`   |
| 20.0% | 1.3ms |       1 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js:123602:39` |

##### `filter` (`<unknown>`)

|     % |  Time | Samples | Caller                                  | Location                                                |
| ----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------- |
| 60.0% | 4.0ms |       3 | `discriminateTypeByDiscriminableItems`  | `./node_modules/typescript/lib/typescript.js:69828:48`  |
| 20.0% | 1.3ms |       1 | `(anonymous)`                           | `./node_modules/typescript/lib/typescript.js:16:15`     |
| 20.0% | 1.3ms |       1 | `getDiagnosticsWithPrecedingDirectives` | `./node_modules/typescript/lib/typescript.js:124999:49` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Caller                                 | Location                                               |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 40.0% | 2.7ms |       2 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48` |
| 40.0% | 2.7ms |       2 | `createInferenceContext`               | `./node_modules/typescript/lib/typescript.js:70767:34` |
| 20.0% | 1.3ms |       1 | `convertArrayLiteralExpressionToJson`  | `./node_modules/typescript/lib/typescript.js:41871:47` |

##### `slice` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location                                              |
| -----: | ----: | ------: | -------- | ----------------------------------------------------- |
| 100.0% | 6.7ms |       5 | `filter` | `./node_modules/typescript/lib/typescript.js:2546:16` |

##### `join` (`<unknown>`)

|     % |  Time | Samples | Caller               | Location                                               |
| ----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 50.0% | 2.7ms |       2 | `doJSDocScan`        | `./node_modules/typescript/lib/typescript.js:38308:27` |
| 25.0% | 1.3ms |       1 | `getPathWithoutRoot` | `./node_modules/typescript/lib/typescript.js:9179:28`  |
| 25.0% | 1.3ms |       1 | `parseTagComments`   | `./node_modules/typescript/lib/typescript.js:38564:32` |

##### `unshift` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                               |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 5.4ms |       4 | `addWorkItem` | `./node_modules/typescript/lib/typescript.js:32338:23` |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Caller                            | Location                                               |
| ----: | ----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 75.0% | 4.0ms |       3 | `getClassLikeDeclarationOfSymbol` | `./node_modules/typescript/lib/typescript.js:21221:41` |
| 25.0% | 1.3ms |       1 | `getDeclaredTypeOfTypeAlias`      | `./node_modules/typescript/lib/typescript.js:60102:38` |

##### `realpathNativeSync` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                              |
| ----: | ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 66.7% | 2.7ms |       2 | `bound realpathNativeSync` | `<unknown>`                                           |
| 33.3% | 1.3ms |       1 | `realpath`                 | `./node_modules/typescript/lib/typescript.js:8881:22` |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Caller              | Location                                              |
| -----: | ----: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 4.0ms |       3 | `stableSortIndices` | `./node_modules/typescript/lib/typescript.js:3022:27` |

##### `bound realpathNativeSync` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                              |
| -----: | ----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 2.7ms |       2 | `realpath` | `./node_modules/typescript/lib/typescript.js:8881:22` |

##### `(anonymous)` (`internal:streams/compose:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:streams/operators:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:stream:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:stream:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/streams:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `get WriteStream` (`node:fs:587:18`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.7ms |       2 | `(anonymous)` | `<unknown>` |

##### `return` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                              |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3059:34` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Callee                  | Location         |
| ----: | ----: | ------: | ----------------------- | ---------------- |
| 99.8% | 5.65s |   4,186 | `loadAndEvaluateModule` | `<unknown>`      |
|  0.2% | 9.4ms |       7 | `parseModule`           | `<unknown>`      |
|  0.1% | 4.0ms |       3 | `anonymous`             | `<unknown>`      |
| <0.1% | 2.7ms |       2 | `get WriteStream`       | `node:fs:587:18` |

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 80.3% |   4.54s |   3,363 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 13.5% | 762.0ms |     565 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js:123840:23` |
|  5.4% | 304.8ms |     226 | `bound require`                    | `<unknown>`                                             |
|  0.8% |  43.2ms |      32 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js:41625:42`  |
| <0.1% |   1.3ms |       1 | `findConfigFile`                   | `./node_modules/typescript/lib/typescript.js:123025:24` |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.65s |   4,186 | `evaluate`         | `<unknown>` |
| 100.0% | 5.65s |   4,186 | `moduleEvaluation` | `<unknown>` |

##### `loadAndEvaluateModule` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.65s |   4,186 | `moduleEvaluation` | `<unknown>` |

##### `processTicksAndRejections` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.65s |   4,186 | `(anonymous)` | `<unknown>` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

|     % |    Time | Samples | Callee               | Location                                                |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------- |
| 82.7% |   4.19s |   3,107 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:88199:30`  |
|  9.1% | 462.6ms |     343 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124028:24` |
|  4.6% | 234.7ms |     174 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:46417:21`  |
|  3.8% | 191.5ms |     142 | `bind`               | `./node_modules/typescript/lib/typescript.js:47793:16`  |
|  3.2% | 163.2ms |     121 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124077:30` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

|      % |  Time | Samples | Callee                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:124895:32` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124899:76` |
|  <0.1% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:18932:28`  |
|  <0.1% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:22094:25`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 93.5% |   4.24s |   3,145 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:88635:27`  |
|  6.4% | 288.6ms |     214 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:124848:26` |
|  0.1% |   2.7ms |       2 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:124987:44` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

|      % |  Time | Samples | Callee                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:124947:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

|      % |  Time | Samples | Callee                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

|      % |  Time | Samples | Callee                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:125252:34` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|      % |  Time | Samples | Callee                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124963:45` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

|      % |  Time | Samples | Callee                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124957:41` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

|      % |  Time | Samples | Callee    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 4.53s |   3,362 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2625:17` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|     % |  Time | Samples | Callee               | Location                                               |
| ----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 56.0% | 2.37s |   1,760 | `checkDeferredNodes` | `./node_modules/typescript/lib/typescript.js:88492:30` |
| 43.9% | 1.86s |   1,380 | `forEach`            | `./node_modules/typescript/lib/typescript.js:2378:17`  |
|  0.2% | 6.7ms |       5 | `addLazyDiagnostic`  | `./node_modules/typescript/lib/typescript.js:88652:25` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

|      % |  Time | Samples | Callee                  | Location                                               |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 4.24s |   3,145 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:88583:33` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

|      % |  Time | Samples | Callee            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 4.24s |   3,145 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:88552:27` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

|      % |  Time | Samples | Callee                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 4.24s |   3,145 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:88649:47` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 4.24s |   3,145 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:88656:32` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

|      % |  Time | Samples | Callee                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 4.19s |   3,109 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:88208:36` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

|     % |    Time | Samples | Callee                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 76.0% |   3.19s |   2,363 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js:85011:22` |
| 42.8% |   1.80s |   1,332 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js:85396:36` |
| 42.5% |   1.78s |   1,322 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js:85414:34` |
| 24.7% |   1.04s |     768 | `checkExpressionStatement` | `./node_modules/typescript/lib/typescript.js:85419:36` |
| 20.3% | 852.4ms |     632 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js:83518:34` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js:85011:22`)

|      % |  Time | Samples | Callee                    | Location                                               |
| -----: | ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 3.19s |   2,363 | `forEach`                 | `./node_modules/typescript/lib/typescript.js:2378:17`  |
|  <0.1% | 1.3ms |       1 | `isFunctionOrModuleBlock` | `./node_modules/typescript/lib/typescript.js:15584:33` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:82771:27`)

|      % |   Time | Samples | Callee                                          | Location                                               |
| -----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  3.14s |   2,327 | `checkExpressionWorker`                         | `./node_modules/typescript/lib/typescript.js:82811:33` |
|   1.0% | 31.0ms |      23 | `instantiateTypeWithSingleGenericCallSignature` | `./node_modules/typescript/lib/typescript.js:82561:57` |
|   0.1% |  2.7ms |       2 | `isConstEnumObjectType`                         | `./node_modules/typescript/lib/typescript.js:81489:33` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Callee              | Location                                               |
| ----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 98.9% |  2.37s |   1,758 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js:88499:29` |
|  1.0% | 24.3ms |      18 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:53728:21` |
|  0.4% |  9.4ms |       7 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:53423:20` |
|  0.2% |  5.4ms |       4 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:53459:32` |
|  0.2% |  4.0ms |       3 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:51425:20` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                           |
| ----: | -----: | ------: | ------------- | -------------------------------------------------- |
| 11.3% | 35.1ms |      26 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:10` |
|  0.9% |  2.7ms |       2 | `(anonymous)` | `internal:streams/compose:1:11`                    |
|  0.9% |  2.7ms |       2 | `(anonymous)` | `internal:streams/operators:1:11`                  |
|  0.9% |  2.7ms |       2 | `(anonymous)` | `internal:stream:1:11`                             |
|  0.9% |  2.7ms |       2 | `(anonymous)` | `node:stream:1:11`                                 |

##### `require` (`<unknown>`)

|      % |    Time | Samples | Callee      | Location    |
| -----: | ------: | ------: | ----------- | ----------- |
| 100.0% | 304.8ms |     226 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |    Time | Samples | Callee      | Location    |
| -----: | ------: | ------: | ----------- | ----------- |
| 100.0% | 304.8ms |     226 | `require`   | `<unknown>` |
|   0.4% |   1.3ms |       1 | `anonymous` | `<unknown>` |

##### `generatorResume` (`<unknown>`)

|     % |   Time | Samples | Callee                   | Location                                                |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------- |
| 98.2% | 74.2ms |      55 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js:70992:108` |

##### `next` (`<unknown>`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 82.4% | 37.8ms |      28 | `generatorResume` | `<unknown>` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Callee         | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
| 85.2% | 31.0ms |      23 | `readFileSync` | `<unknown>` |

##### `test` (`<unknown>`)

|     % |   Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                           | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 88.9% | 10.8ms |       8 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |

##### `parseModule` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 71.4% | 6.7ms |       5 | `(anonymous)` | `<unknown>` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Callee                               | Location                                               |
| ----: | ----: | ------: | ------------------------------------ | ------------------------------------------------------ |
| 50.0% | 4.0ms |       3 | `isGenericFunctionReturningFunction` | `./node_modules/typescript/lib/typescript.js:79061:46` |
| 16.7% | 1.3ms |       1 | `(anonymous)`                        | `./node_modules/typescript/lib/typescript.js:47454:43` |

##### `filter` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                                |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 20.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:41264:66`  |
| 20.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:125001:48` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                               |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------ |
| 20.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:69830:31` |
| 20.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:41876:32` |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                               |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------ |
| 75.0% | 4.0ms |       3 | `isTypeAlias` | `./node_modules/typescript/lib/typescript.js:18786:21` |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                                              |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.0ms |       3 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:3023:16` |

##### `bound realpathNativeSync` (`<unknown>`)

|      % |  Time | Samples | Callee               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 2.7ms |       2 | `realpathNativeSync` | `<unknown>` |

##### `(anonymous)` (`internal:streams/compose:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:streams/operators:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/streams:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `get WriteStream` (`node:fs:587:18`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `return` (`<unknown>`)

|      % |  Time | Samples | Callee            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 1.3ms |       1 | `generatorResume` | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.8% | 269.7ms |     200 | `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |  29.7ms |      22 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |  25.6ms |      19 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:10) ← `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% |  24.3ms |      18 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% |  22.9ms |      17 | `createTypeChecker` (`./node_modules/typescript/lib/typescript.js:50070:27`) ← `getTypeChecker` (124848:26) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% |  20.2ms |      15 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `(anonymous)` (`./node_modules/typescript/lib/typescript.js:22201:60`) ← `findIndex` (2484:19) ← `visitDirectory` (22185:26) ← `visitDirectory` (22185:26) ← `visitDirectory` (22185:26) ← `matchFiles` (22171:20) ← `readDirectory` (8844:27) ← `getFileNamesFromConfigSpecs` (42891:37) ← `getFileNames` (42379:24) ← `parseJsonConfigFileContentWorker` (42261:42) ← `parseJsonSourceFileConfigFileContent` (42230:46) ← `getParsedCommandLineOfConfigFile` (41625:42)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% |  16.2ms |      12 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.3% |  16.2ms |      12 | `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`) ← `getNormalizedUnionOrIntersectionType` (67416:48) ← `getNormalizedType` (67408:29) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  13.5ms |      10 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkReturnStatement` (86275:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkFunctionDeclarationDiagnostics` (84580:49) ← `addLazyDiagnostic` (88652:25) ← `checkFunctionDeclaration` (84578:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  13.5ms |      10 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  12.1ms |       9 | `getUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js:61892:42`) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |  12.1ms |       9 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  10.8ms |       8 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `test` ← `(anonymous)` (`./node_modules/typescript/lib/typescript.js:22201:60`) ← `findIndex` (2484:19) ← `visitDirectory` (22185:26) ← `visitDirectory` (22185:26) ← `visitDirectory` (22185:26) ← `matchFiles` (22171:20) ← `readDirectory` (8844:27) ← `getFileNamesFromConfigSpecs` (42891:37) ← `getFileNames` (42379:24) ← `parseJsonConfigFileContentWorker` (42261:42) ← `parseJsonSourceFileConfigFileContent` (42230:46) ← `getParsedCommandLineOfConfigFile` (41625:42)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  10.8ms |       8 | `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:38286:37`) ← `(anonymous)` (38259:63) ← `doInsideOfContext` (32908:29) ← `parseJSDocComment` (38255:31) ← `(anonymous)` (32748:71) ← `mapDefined` (2696:20) ← `withJSDoc` (32743:21) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseModuleOrNamespaceDeclaration` (37800:45) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  10.8ms |       8 | `getNodeId` (`./node_modules/typescript/lib/typescript.js:50052:19`) ← `getNodeLinks` (51499:24) ← `getResolvedSymbol` (71910:29) ← `checkIdentifier` (74242:27) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkPrefixUnaryExpression` (81376:38) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkTruthinessExpression` (85549:37) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkForOfStatement` (85574:31) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkMethodDeclaration` (83318:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkClassDeclaration` (86712:33) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |
| 0.2% |   9.4ms |       7 | `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:38286:37`) ← `(anonymous)` (38259:63) ← `doInsideOfContext` (32908:29) ← `parseJSDocComment` (38255:31) ← `(anonymous)` (32748:71) ← `mapDefined` (2696:20) ← `withJSDoc` (32743:21) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124077:30) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |   9.4ms |       7 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `checkTypeRelatedToAndOptionallyElaborate` (66509:52) ← `checkTypeAssignableToAndOptionallyElaborate` (66496:55) ← `checkReturnStatement` (86275:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `(anonymous)` (86337:37) ← `forEach` (2378:17) ← `checkSwitchStatement` (86332:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |   9.4ms |       7 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% |   8.1ms |       6 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.1% |   8.1ms |       6 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
