# CPU profile

Took 5.54s over 4,139 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 89.8% |   4.98s |   3,717 |
| Native             |  6.7% | 369.4ms |     276 |
| Standard library   |  2.6% | 144.6ms |     108 |
| Regular expression |  0.8% |  46.8ms |      35 |
| Unknown            |  0.1% |   4.0ms |       3 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 5.50s (99.3%) typeCheckProject at ./tsc-workload.mjs:3:33
│   ├── … 4.39s (79.3%) (anonymous) at ./node_modules/typescript/lib/typescript.js:123385:37
│   │   ├── … 4.11s (74.1%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:87270:33
│   │   │   ├── 2.29s (41.3%) checkDeferredNodes at 87179:30
│   │   │   │   └── 2.29s (41.3%) forEach
│   │   │   │       └── 2.25s (40.5%) checkDeferredNode at ./node_modules/typescript/lib/typescript.js:87186:29
│   │   │   │           └── 2.24s (40.5%) checkFunctionExpressionOrObjectLiteralMethodDeferred at 79840:64
│   │   │   │               ├── 2.20s (39.8%) checkSourceElement at 86886:30
│   │   │   │               │   └── … 2.20s (39.8%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36
│   │   │   │               │       ├── 1.11s (20.1%) checkVariableDeclaration at 84101:36
│   │   │   │               │       │   └── 1.11s (20.0%) checkVariableLikeDeclaration at 83907:40
│   │   │   │               │       │       ├── 922.2ms (16.6%) getTypeOfSymbol at 58408:27
│   │   │   │               │       │       │   ├── … 24.1ms (0.4%, self 2.0% globally) getObjectTypeInstantiation at ./node_modules/typescript/lib/typescript.js:64785:38
│   │   │   │               │       │       │   └── 872.7ms (15.8%) 5 more callees, led by (15.0%) getTypeOfVariableOrParameterOrProperty at 58088:50
│   │   │   │               │       │       └── 183.4ms (3.3%) 4 more callees, led by (2.7%) checkExpressionCached at 81145:33
│   │   │   │               │       └── 1.09s (19.7%) 20 more callees, led by (12.0%) checkExpressionStatement at 84124:36
│   │   │   │               └── 38.8ms (0.7%) 3 more callees, led by (0.6%) getReturnTypeOfSignature at 61207:36
│   │   │   └── 1.81s (32.6%) forEach at 2365:17
│   │   │       ├── … 1.74s (31.5%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:86886:30
│   │   │       │   └── … 1.74s (31.4%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36
│   │   │       │       ├── 535.4ms (9.7%) checkTypeReferenceNode at 82223:34
│   │   │       │       │   └── 530.0ms (9.6%) checkTypeReferenceOrImport at 82234:38
│   │   │       │       │       ├── … 500.6ms (9.0%) checkTypeArgumentConstraints at ./node_modules/typescript/lib/typescript.js:82186:40
│   │   │       │       │       │   ├── 315.9ms (5.7%) checkTypeAssignableTo at 65233:33
│   │   │       │       │       │   │   └── 315.9ms (5.7%, self 4.3% globally) checkTypeRelatedTo at 66185:30
│   │   │       │       │       │   │       └── … 303.8ms (5.5%, self 1.1% globally) isRelatedTo at ./node_modules/typescript/lib/typescript.js:66493:25
│   │   │       │       │       │   │           ├── … 208.8ms (3.8%, self 2.3% globally) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js:67063:36
│   │   │       │       │       │   │           │   ├── 12.0ms (0.2%, self 1.1% globally) getRelationKey at 68729:26
│   │   │       │       │       │   │           │   └── 186.0ms (3.4%) 2 more callees, led by (3.3%) structuredTypeRelatedTo at 67207:37
│   │   │       │       │       │   │           └── 91.0ms (1.6%) 5 more callees, led by (1.0%) getNormalizedType at ./node_modules/typescript/lib/typescript.js:66148:29
│   │   │       │       │       │   └── 184.7ms (3.3%) 2 more callees, led by (3.3%) getEffectiveTypeArguments2 at 82183:38
│   │   │       │       │       └── 28.1ms (0.5%) getTypeFromTypeNode at 64524:31 …
│   │   │       │       └── 1.20s (21.7%) 29 more callees, led by (9.4%) checkVariableDeclaration at 84101:36
│   │   │       └── 64.2ms (1.2%) 6 more callees, led by (0.7%) checkParameter at ./node_modules/typescript/lib/typescript.js:81674:26
│   │   └── 278.4ms (5.0%) getTypeChecker at 123266:26
│   │       └── 278.4ms (5.0%) createTypeChecker at 48842:27 …
│   ├── … 306.5ms (5.5%, self 4.9%) anonymous
│   │   └── 33.5ms (0.6%) (anonymous) at ./node_modules/typescript/lib/typescript.js:1:10 …
│   └── 795.1ms (14.4%) 3 more callees, led by (13.5%) createProgram at ./node_modules/typescript/lib/typescript.js:122262:23
└── 26.8ms (0.5%) (anonymous)
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|    % |    Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location                                               |
| ---: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 5.1% | 285.1ms |     213 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>`                                            |
| 4.3% | 236.9ms |     177 | `checkTypeRelatedTo`                                                                                                                                                                                                                                                                                                                                                             | `./node_modules/typescript/lib/typescript.js:66185:30` |
| 3.2% | 178.0ms |     133 | `getObjectFlags`                                                                                                                                                                                                                                                                                                                                                                 | `./node_modules/typescript/lib/typescript.js:20242:24` |
| 2.3% | 129.8ms |      97 | `recursiveTypeRelatedTo`                                                                                                                                                                                                                                                                                                                                                         | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 2.0% | 111.1ms |      83 | `getObjectTypeInstantiation`                                                                                                                                                                                                                                                                                                                                                     | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 1.3% |  73.6ms |      55 | `getTypeListId`                                                                                                                                                                                                                                                                                                                                                                  | `./node_modules/typescript/lib/typescript.js:61498:25` |
| 1.1% |  61.6ms |      46 | `getRelationKey`                                                                                                                                                                                                                                                                                                                                                                 | `./node_modules/typescript/lib/typescript.js:68729:26` |
| 1.1% |  60.2ms |      45 | `isRelatedTo`                                                                                                                                                                                                                                                                                                                                                                    | `./node_modules/typescript/lib/typescript.js:66493:25` |
| 1.0% |  54.9ms |      41 | `getFlowTypeOfReference`                                                                                                                                                                                                                                                                                                                                                         | `./node_modules/typescript/lib/typescript.js:71634:34` |
| 0.9% |  49.5ms |      37 | `structuredTypeRelatedToWorker`                                                                                                                                                                                                                                                                                                                                                  | `./node_modules/typescript/lib/typescript.js:67277:43` |
| 0.9% |  49.5ms |      37 | `couldContainTypeVariables`                                                                                                                                                                                                                                                                                                                                                      | `./node_modules/typescript/lib/typescript.js:69600:37` |
| 0.9% |  49.5ms |      37 | `getApparentType`                                                                                                                                                                                                                                                                                                                                                                | `./node_modules/typescript/lib/typescript.js:60490:27` |
| 0.8% |  42.8ms |      32 | `inferFromTypes`                                                                                                                                                                                                                                                                                                                                                                 | `./node_modules/typescript/lib/typescript.js:69901:28` |
| 0.8% |  42.8ms |      32 | `createTypeReference`                                                                                                                                                                                                                                                                                                                                                            | `./node_modules/typescript/lib/typescript.js:61539:31` |
| 0.7% |  40.2ms |      30 | `createInstantiatedSymbolTable`                                                                                                                                                                                                                                                                                                                                                  | `./node_modules/typescript/lib/typescript.js:59020:41` |
| 0.7% |  38.8ms |      29 | `some`                                                                                                                                                                                                                                                                                                                                                                           | `./node_modules/typescript/lib/typescript.js:2781:14`  |
| 0.7% |  38.8ms |      29 | `isTypeRelatedTo`                                                                                                                                                                                                                                                                                                                                                                | `./node_modules/typescript/lib/typescript.js:66101:27` |
| 0.7% |  37.5ms |      28 | `scan`                                                                                                                                                                                                                                                                                                                                                                           | `./node_modules/typescript/lib/typescript.js:12765:16` |
| 0.6% |  34.8ms |      26 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>`                                            |
| 0.6% |  33.5ms |      25 | `getNormalizedType`                                                                                                                                                                                                                                                                                                                                                              | `./node_modules/typescript/lib/typescript.js:66148:29` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|    % |    Time | Samples | Function                        | Location                                               |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 4.3% | 236.9ms |     177 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:66185:30` |
| 3.2% | 178.0ms |     133 | `getObjectFlags`                | `./node_modules/typescript/lib/typescript.js:20242:24` |
| 2.3% | 129.8ms |      97 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 2.0% | 111.1ms |      83 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 1.3% |  73.6ms |      55 | `getTypeListId`                 | `./node_modules/typescript/lib/typescript.js:61498:25` |
| 1.1% |  61.6ms |      46 | `getRelationKey`                | `./node_modules/typescript/lib/typescript.js:68729:26` |
| 1.1% |  60.2ms |      45 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66493:25` |
| 1.0% |  54.9ms |      41 | `getFlowTypeOfReference`        | `./node_modules/typescript/lib/typescript.js:71634:34` |
| 0.9% |  49.5ms |      37 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43` |
| 0.9% |  49.5ms |      37 | `couldContainTypeVariables`     | `./node_modules/typescript/lib/typescript.js:69600:37` |
| 0.9% |  49.5ms |      37 | `getApparentType`               | `./node_modules/typescript/lib/typescript.js:60490:27` |
| 0.8% |  42.8ms |      32 | `inferFromTypes`                | `./node_modules/typescript/lib/typescript.js:69901:28` |
| 0.8% |  42.8ms |      32 | `createTypeReference`           | `./node_modules/typescript/lib/typescript.js:61539:31` |
| 0.7% |  40.2ms |      30 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js:59020:41` |
| 0.7% |  38.8ms |      29 | `some`                          | `./node_modules/typescript/lib/typescript.js:2781:14`  |
| 0.7% |  38.8ms |      29 | `isTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:66101:27` |
| 0.7% |  37.5ms |      28 | `scan`                          | `./node_modules/typescript/lib/typescript.js:12765:16` |
| 0.6% |  33.5ms |      25 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:66148:29` |
| 0.6% |  33.5ms |      25 | `setStructuredTypeMembers`      | `./node_modules/typescript/lib/typescript.js:52502:36` |
| 0.6% |  33.5ms |      25 | `getAliasId`                    | `./node_modules/typescript/lib/typescript.js:61521:22` |

##### Native

|     % |    Time | Samples | Function                | Location    |
| ----: | ------: | ------: | ----------------------- | ----------- |
|  5.1% | 285.1ms |     213 | `anonymous`             | `<unknown>` |
|  0.5% |  28.1ms |      21 | `readFileSync`          | `<unknown>` |
|  0.4% |  22.8ms |      17 | `statSync`              | `<unknown>` |
|  0.2% |   9.4ms |       7 | `fetch`                 | `<unknown>` |
|  0.1% |   8.0ms |       6 | `stringSplitFast`       | `<unknown>` |
|  0.1% |   4.0ms |       3 | `SymbolLinks`           | `<unknown>` |
| <0.1% |   2.7ms |       2 | `realpathNativeSync`    | `<unknown>` |
| <0.1% |   1.3ms |       1 | `loadAndEvaluateModule` | `<unknown>` |
| <0.1% |   1.3ms |       1 | `parseModule`           | `<unknown>` |
| <0.1% |   1.3ms |       1 | `writer`                | `<unknown>` |
| <0.1% |   1.3ms |       1 | `stream`                | `<unknown>` |
| <0.1% |   1.3ms |       1 | `createRequire`         | `<unknown>` |
| <0.1% |   1.3ms |       1 | `max`                   | `<unknown>` |
| <0.1% |   1.3ms |       1 | `readdirSync`           | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function      | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
|  0.4% | 22.8ms |      17 | `forEach`     | `<unknown>` |
|  0.3% | 17.4ms |      13 | `slice`       | `<unknown>` |
|  0.3% | 14.7ms |      11 | `join`        | `<unknown>` |
|  0.2% | 10.7ms |       8 | `get`         | `<unknown>` |
|  0.2% |  9.4ms |       7 | `toString`    | `<unknown>` |
|  0.1% |  6.7ms |       5 | `set`         | `<unknown>` |
|  0.1% |  5.4ms |       4 | `lastIndexOf` | `<unknown>` |
|  0.1% |  4.0ms |       3 | `trimEnd`     | `<unknown>` |
|  0.1% |  4.0ms |       3 | `find`        | `<unknown>` |
|  0.1% |  4.0ms |       3 | `Map`         | `<unknown>` |
| <0.1% |  2.7ms |       2 | `resolve`     | `<unknown>` |
| <0.1% |  2.7ms |       2 | `add`         | `<unknown>` |
| <0.1% |  2.7ms |       2 | `filter`      | `<unknown>` |
| <0.1% |  2.7ms |       2 | `substring`   | `<unknown>` |
| <0.1% |  2.7ms |       2 | `trimStart`   | `<unknown>` |
| <0.1% |  2.7ms |       2 | `replace`     | `<unknown>` |
| <0.1% |  2.7ms |       2 | `unshift`     | `<unknown>` |
| <0.1% |  2.7ms |       2 | `next`        | `<unknown>` |
| <0.1% |  2.7ms |       2 | `indexOf`     | `<unknown>` |
| <0.1% |  1.3ms |       1 | `bind`        | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`)

|     % |    Time | Samples | Location                                            |
| ----: | ------: | ------: | --------------------------------------------------- |
| 62.7% | 148.6ms |     111 | `./node_modules/typescript/lib/typescript.js:66193` |
| 32.8% |  77.6ms |      58 | `./node_modules/typescript/lib/typescript.js:66204` |
|  1.7% |   4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:66203` |
|  1.1% |   2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:66242` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:20242:24`)

|     % |    Time | Samples | Location                                            |
| ----: | ------: | ------: | --------------------------------------------------- |
| 99.2% | 176.7ms |     132 | `./node_modules/typescript/lib/typescript.js:20243` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 54.6% | 70.9ms |      53 | `./node_modules/typescript/lib/typescript.js:67076` |
| 20.6% | 26.8ms |      20 | `./node_modules/typescript/lib/typescript.js:67123` |
|  6.2% |  8.0ms |       6 | `./node_modules/typescript/lib/typescript.js:67129` |
|  4.1% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:67068` |
|  3.1% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:67188` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:64785:38`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 33.7% | 37.5ms |      28 | `./node_modules/typescript/lib/typescript.js:64815` |
| 31.3% | 34.8ms |      26 | `./node_modules/typescript/lib/typescript.js:64787` |
|  7.2% |  8.0ms |       6 | `./node_modules/typescript/lib/typescript.js:64819` |
|  7.2% |  8.0ms |       6 | `./node_modules/typescript/lib/typescript.js:64810` |
|  4.8% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:64786` |

##### `getTypeListId` (`./node_modules/typescript/lib/typescript.js:61498:25`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 60.0% | 44.2ms |      33 | `./node_modules/typescript/lib/typescript.js:61512` |
| 20.0% | 14.7ms |      11 | `./node_modules/typescript/lib/typescript.js:61509` |
| 10.9% |  8.0ms |       6 | `./node_modules/typescript/lib/typescript.js:61501` |
|  5.5% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:61514` |
|  1.8% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61506` |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:68729:26`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 80.4% | 49.5ms |      37 | `./node_modules/typescript/lib/typescript.js:68736` |
| 10.9% |  6.7ms |       5 | `./node_modules/typescript/lib/typescript.js:68735` |
|  6.5% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:68730` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 28.9% | 17.4ms |      13 | `./node_modules/typescript/lib/typescript.js:66510` |
| 17.8% | 10.7ms |       8 | `./node_modules/typescript/lib/typescript.js:66548` |
| 17.8% | 10.7ms |       8 | `./node_modules/typescript/lib/typescript.js:66523` |
| 13.3% |  8.0ms |       6 | `./node_modules/typescript/lib/typescript.js:66588` |
|  4.4% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:66560` |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:71634:34`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 90.2% | 49.5ms |      37 | `./node_modules/typescript/lib/typescript.js:71634` |
|  7.3% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:71646` |
|  2.4% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:71649` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 35.1% | 17.4ms |      13 | `./node_modules/typescript/lib/typescript.js:67280` |
| 16.2% |  8.0ms |       6 | `./node_modules/typescript/lib/typescript.js:67720` |
|  8.1% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:67285` |
|  2.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67748` |
|  2.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67392` |

##### `couldContainTypeVariables` (`./node_modules/typescript/lib/typescript.js:69600:37`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 40.5% | 20.1ms |      15 | `./node_modules/typescript/lib/typescript.js:69605` |
| 29.7% | 14.7ms |      11 | `./node_modules/typescript/lib/typescript.js:69607` |
|  8.1% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:69601` |
|  5.4% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:69606` |
|  2.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:69603` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:60490:27`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 35.1% | 17.4ms |      13 | `./node_modules/typescript/lib/typescript.js:60491` |
| 10.8% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:60493` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:69901:28`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 28.1% | 12.0ms |       9 | `./node_modules/typescript/lib/typescript.js:69902` |
| 12.5% |  5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:69923` |
|  9.4% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:70032` |
|  6.2% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:69922` |
|  6.2% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:69905` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:61539:31`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 65.6% | 28.1ms |      21 | `./node_modules/typescript/lib/typescript.js:61541` |
| 21.9% |  9.4ms |       7 | `./node_modules/typescript/lib/typescript.js:61544` |
|  6.2% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:61543` |
|  6.2% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:61540` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js:59020:41`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 86.7% | 34.8ms |      26 | `./node_modules/typescript/lib/typescript.js:59023` |
|  6.7% |  2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:59022` |
|  3.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:59025` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2781:14`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 48.3% | 18.7ms |      14 | `./node_modules/typescript/lib/typescript.js:2784` |
| 41.4% | 16.1ms |      12 | `./node_modules/typescript/lib/typescript.js:2785` |
| 10.3% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:2790` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66101:27`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 44.8% | 17.4ms |      13 | `./node_modules/typescript/lib/typescript.js:66135` |
| 27.6% | 10.7ms |       8 | `./node_modules/typescript/lib/typescript.js:66122` |
| 10.3% |  4.0ms |       3 | `./node_modules/typescript/lib/typescript.js:66112` |
|  3.4% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66115` |
|  3.4% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66103` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12765:16`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 46.4% | 17.4ms |      13 | `./node_modules/typescript/lib/typescript.js:12774` |
| 28.6% | 10.7ms |       8 | `./node_modules/typescript/lib/typescript.js:12959` |
|  3.6% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:12967` |
|  3.6% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:12847` |
|  3.6% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:13087` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:66148:29`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 33.5ms |      25 | `./node_modules/typescript/lib/typescript.js:66150` |

##### `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:52502:36`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 24.0% | 8.0ms |       6 | `./node_modules/typescript/lib/typescript.js:52504` |
| 24.0% | 8.0ms |       6 | `./node_modules/typescript/lib/typescript.js:52506` |
| 20.0% | 6.7ms |       5 | `./node_modules/typescript/lib/typescript.js:52505` |
| 16.0% | 5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:52507` |
|  8.0% | 2.7ms |       2 | `./node_modules/typescript/lib/typescript.js:52510` |

##### `getAliasId` (`./node_modules/typescript/lib/typescript.js:61521:22`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 33.5ms |      25 | `./node_modules/typescript/lib/typescript.js:61522` |

##### `forEach` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 22.8ms |      17 | 1        |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 4.0ms |       3 | 1        |

##### `find` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 4.0ms |       3 | 1        |

##### `filter` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.7ms |       2 | 1        |

##### `next` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.7ms |       2 | 1        |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `anonymous` (`<unknown>`)

|     % |    Time | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 95.8% | 273.0ms |     204 | `require`     | `<unknown>`               |
|  1.4% |   4.0ms |       3 | `(anonymous)` | `<unknown>`               |
|  0.5% |   1.3ms |       1 | `(anonymous)` | `internal:fs/glob:1:11`   |
|  0.5% |   1.3ms |       1 | `(anonymous)` | `internal:promisify:1:11` |
|  0.5% |   1.3ms |       1 | `(anonymous)` | `internal:stream:1:11`    |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`)

|     % |    Time | Samples | Caller                  | Location                                               |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------ |
| 97.7% | 231.6ms |     173 | `isTypeRelatedTo`       | `./node_modules/typescript/lib/typescript.js:66101:27` |
|  2.3% |   5.4ms |       4 | `checkTypeAssignableTo` | `./node_modules/typescript/lib/typescript.js:65233:33` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:20242:24`)

|     % |   Time | Samples | Caller                       | Location                                               |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 20.3% | 36.1ms |      27 | `getApparentType`            | `./node_modules/typescript/lib/typescript.js:60490:27` |
| 17.3% | 30.8ms |      23 | `couldContainTypeVariables`  | `./node_modules/typescript/lib/typescript.js:69600:37` |
| 12.8% | 22.8ms |      17 | `isTupleType`                | `./node_modules/typescript/lib/typescript.js:69093:23` |
|  9.0% | 16.1ms |      12 | `isEmptyAnonymousObjectType` | `./node_modules/typescript/lib/typescript.js:65967:38` |
|  6.0% | 10.7ms |       8 | `isObjectOrArrayLiteralType` | `./node_modules/typescript/lib/typescript.js:70509:38` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`)

|      % |    Time | Samples | Caller        | Location                                               |
| -----: | ------: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 129.8ms |      97 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:64785:38`)

|      % |    Time | Samples | Caller                  | Location                                               |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 111.1ms |      83 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33` |

##### `getTypeListId` (`./node_modules/typescript/lib/typescript.js:61498:25`)

|     % |   Time | Samples | Caller                            | Location                                               |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 25.5% | 18.7ms |      14 | `getObjectTypeInstantiation`      | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 23.6% | 17.4ms |      13 | `createTypeReference`             | `./node_modules/typescript/lib/typescript.js:61539:31` |
| 14.5% | 10.7ms |       8 | `getIntersectionType`             | `./node_modules/typescript/lib/typescript.js:63112:31` |
| 12.7% |  9.4ms |       7 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64979:43` |
| 10.9% |  8.0ms |       6 | `getUnionTypeFromSortedList`      | `./node_modules/typescript/lib/typescript.js:62948:38` |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:68729:26`)

|     % |   Time | Samples | Caller                   | Location                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 89.1% | 54.9ms |      41 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 10.9% |  6.7ms |       5 | `isTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:66101:27` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Caller                   | Location                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 55.6% | 33.5ms |      25 | `checkTypeRelatedTo`     | `./node_modules/typescript/lib/typescript.js:66185:30` |
| 20.0% | 12.0ms |       9 | `isRelatedToWorker2`     | `./node_modules/typescript/lib/typescript.js:68378:34` |
|  8.9% |  5.4ms |       4 | `typeArgumentsRelatedTo` | `./node_modules/typescript/lib/typescript.js:66973:36` |
|  4.4% |  2.7ms |       2 | `typeRelatedToSomeType`  | `./node_modules/typescript/lib/typescript.js:66827:35` |
|  4.4% |  2.7ms |       2 | `eachTypeRelatedToType`  | `./node_modules/typescript/lib/typescript.js:66935:35` |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:71634:34`)

|     % |   Time | Samples | Caller                          | Location                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 90.2% | 49.5ms |      37 | `checkIdentifier`               | `./node_modules/typescript/lib/typescript.js:72959:27` |
|  9.8% |  5.4ms |       4 | `getFlowTypeOfAccessExpression` | `./node_modules/typescript/lib/typescript.js:76049:41` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`)

|      % |   Time | Samples | Caller                    | Location                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 49.5ms |      37 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67207:37` |

##### `couldContainTypeVariables` (`./node_modules/typescript/lib/typescript.js:69600:37`)

|     % |   Time | Samples | Caller                     | Location                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 64.9% | 32.1ms |      24 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:65006:36` |
| 16.2% |  8.0ms |       6 | `instantiateSymbol`        | `./node_modules/typescript/lib/typescript.js:64758:29` |
| 10.8% |  5.4ms |       4 | `some`                     | `./node_modules/typescript/lib/typescript.js:2781:14`  |
|  8.1% |  4.0ms |       3 | `inferFromTypes`           | `./node_modules/typescript/lib/typescript.js:69901:28` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:60490:27`)

|     % |   Time | Samples | Caller                                         | Location                                               |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------------ |
| 86.5% | 42.8ms |      32 | `getReducedApparentType`                       | `./node_modules/typescript/lib/typescript.js:60495:34` |
|  5.4% |  2.7ms |       2 | `(anonymous)`                                  | `./node_modules/typescript/lib/typescript.js:74215:9`  |
|  2.7% |  1.3ms |       1 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:75918:56` |
|  2.7% |  1.3ms |       1 | `inferFromTypes`                               | `./node_modules/typescript/lib/typescript.js:69901:28` |
|  2.7% |  1.3ms |       1 | `structuredTypeRelatedToWorker`                | `./node_modules/typescript/lib/typescript.js:67277:43` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:69901:28`)

|     % |  Time | Samples | Caller                   | Location                                               |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------------------ |
| 18.7% | 8.0ms |       6 | `applyToReturnTypes`     | `./node_modules/typescript/lib/typescript.js:69498:30` |
| 18.7% | 8.0ms |       6 | `inferFromMatchingTypes` | `./node_modules/typescript/lib/typescript.js:70119:36` |
| 15.6% | 6.7ms |       5 | `inferFromTypeArguments` | `./node_modules/typescript/lib/typescript.js:70136:36` |
| 12.5% | 5.4ms |       4 | `inferTypes`             | `./node_modules/typescript/lib/typescript.js:69892:22` |
| 12.5% | 5.4ms |       4 | `inferFromTypes`         | `./node_modules/typescript/lib/typescript.js:69901:28` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:61539:31`)

|     % |   Time | Samples | Caller                          | Location                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 59.4% | 25.4ms |      19 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:62541:41` |
| 21.9% |  9.4ms |       7 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:66148:29` |
| 12.5% |  5.4ms |       4 | `getTypeWithThisArgument`       | `./node_modules/typescript/lib/typescript.js:59199:35` |
|  6.2% |  2.7ms |       2 | `createNormalizedTupleType`     | `./node_modules/typescript/lib/typescript.js:62544:37` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js:59020:41`)

|     % |   Time | Samples | Caller                        | Location                                               |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 90.0% | 36.1ms |      27 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59210:36` |
| 10.0% |  4.0ms |       3 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js:59723:39` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2781:14`)

|     % |   Time | Samples | Caller                      | Location                                               |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 31.0% | 12.0ms |       9 | `getReducedType`            | `./node_modules/typescript/lib/typescript.js:60678:26` |
| 20.7% |  8.0ms |       6 | `isReadonlySymbol`          | `./node_modules/typescript/lib/typescript.js:79911:28` |
| 10.3% |  4.0ms |       3 | `indexSignaturesRelatedTo`  | `./node_modules/typescript/lib/typescript.js:68475:38` |
|  6.9% |  2.7ms |       2 | `isConstTypeVariable`       | `./node_modules/typescript/lib/typescript.js:60206:31` |
|  6.9% |  2.7ms |       2 | `couldContainTypeVariables` | `./node_modules/typescript/lib/typescript.js:69600:37` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66101:27`)

|     % |   Time | Samples | Caller                                     | Location                                               |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------ |
| 58.6% | 22.8ms |      17 | `isTypeIdenticalTo`                        | `./node_modules/typescript/lib/typescript.js:65203:29` |
| 17.2% |  6.7ms |       5 | `isTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:65221:30` |
| 10.3% |  4.0ms |       3 | `isTypeComparableTo`                       | `./node_modules/typescript/lib/typescript.js:65227:30` |
|  6.9% |  2.7ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:65249:52` |
|  6.9% |  2.7ms |       2 | `compareTypesAssignable`                   | `./node_modules/typescript/lib/typescript.js:65209:34` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12765:16`)

|      % |   Time | Samples | Caller                  | Location                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 37.5ms |      28 | `nextTokenWithoutCheck` | `./node_modules/typescript/lib/typescript.js:31953:33` |

##### `/^\/tmp\/(?!(node_modules|bower_components|jspm_packages)(\/|$))nix\-shell\.K1HXIc\/(?!(node_modules|bower_components|jspm_packages)(\/|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules|bower_components|jspm_packages)(\/|$))[^/.][^/]*)*?\/(?!(node_modules|bower_components|jspm_packages)(\/|$))([^./]([^./]|(\.(?!min\.js$))?)*)?$/i` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                               |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 65.4% | 22.8ms |      17 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21208:60` |
| 34.6% | 12.0ms |       9 | `test`        | `<unknown>`                                            |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:66148:29`)

|      % |   Time | Samples | Caller        | Location                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 33.5ms |      25 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25` |

##### `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:52502:36`)

|     % |   Time | Samples | Caller                        | Location                                               |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 64.0% | 21.4ms |      16 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js:59723:39` |
| 20.0% |  6.7ms |       5 | `resolveMappedTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59922:36` |
| 12.0% |  4.0ms |       3 | `createAnonymousType`         | `./node_modules/typescript/lib/typescript.js:52513:31` |
|  4.0% |  1.3ms |       1 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59210:36` |

##### `getAliasId` (`./node_modules/typescript/lib/typescript.js:61521:22`)

|     % |   Time | Samples | Caller                       | Location                                               |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 52.0% | 17.4ms |      13 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 48.0% | 16.1ms |      12 | `getIntersectionType`        | `./node_modules/typescript/lib/typescript.js:63112:31` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                              |
| ----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 66.7% | 18.7ms |      14 | `readFileSync`   | `<unknown>`                                           |
| 33.3% |  9.4ms |       7 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28` |

##### `statSync` (`<unknown>`)

|     % |   Time | Samples | Caller     | Location                                              |
| ----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 88.2% | 20.1ms |      15 | `statSync` | `./node_modules/typescript/lib/typescript.js:8602:22` |
| 11.8% |  2.7ms |       2 | `statSync` | `<unknown>`                                           |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Caller                | Location                                               |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------ |
| 76.5% | 17.4ms |      13 | `getNamedMembers`     | `./node_modules/typescript/lib/typescript.js:52485:27` |
| 11.8% |  2.7ms |       2 | `checkDeferredNodes`  | `./node_modules/typescript/lib/typescript.js:87179:30` |
|  5.9% |  1.3ms |       1 | `extendExportSymbols` | `./node_modules/typescript/lib/typescript.js:52179:31` |
|  5.9% |  1.3ms |       1 | `visit`               | `./node_modules/typescript/lib/typescript.js:52216:19` |

##### `slice` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                               |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 53.8% | 9.4ms |       7 | `addRange`                 | `./node_modules/typescript/lib/typescript.js:2979:18`  |
| 38.5% | 6.7ms |       5 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16`  |
|  7.7% | 1.3ms |       1 | `fillMissingTypeArguments` | `./node_modules/typescript/lib/typescript.js:60937:36` |

##### `join` (`<unknown>`)

|     % |   Time | Samples | Caller             | Location                                               |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 90.9% | 13.4ms |      10 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js:37253:27` |
|  9.1% |  1.3ms |       1 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js:37509:32` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                            | Location                                               |
| ----: | ----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 37.5% | 4.0ms |       3 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64979:43` |
| 25.0% | 2.7ms |       2 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:50184:20` |
| 12.5% | 1.3ms |       1 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:52182:20` |
| 12.5% | 1.3ms |       1 | `getDiagnostics2`                 | `./node_modules/typescript/lib/typescript.js:18843:27` |
| 12.5% | 1.3ms |       1 | `getPropertyOfType`               | `./node_modules/typescript/lib/typescript.js:60739:29` |

##### `fetch` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location    |
| -----: | ----: | ------: | -------------- | ----------- |
| 100.0% | 9.4ms |       7 | `requestFetch` | `<unknown>` |

##### `toString` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                              |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 9.4ms |       7 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28` |

##### `stringSplitFast` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                              |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 8.0ms |       6 | `pathComponents` | `./node_modules/typescript/lib/typescript.js:9068:24` |

##### `set` (`<unknown>`)

|     % |  Time | Samples | Caller                 | Location                                                |
| ----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 40.0% | 2.7ms |       2 | `declareSymbol`        | `./node_modules/typescript/lib/typescript.js:44997:25`  |
| 40.0% | 2.7ms |       2 | `updateFilesByNameMap` | `./node_modules/typescript/lib/typescript.js:124131:32` |
| 20.0% | 1.3ms |       1 | `(anonymous)`          | `./node_modules/typescript/lib/typescript.js:59752:23`  |

##### `lastIndexOf` (`<unknown>`)

|     % |  Time | Samples | Caller            | Location                                               |
| ----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 50.0% | 2.7ms |       2 | `startsWith`      | `./node_modules/typescript/lib/typescript.js:3819:20`  |
| 25.0% | 1.3ms |       1 | `doJSDocScan`     | `./node_modules/typescript/lib/typescript.js:37253:27` |
| 25.0% | 1.3ms |       1 | `getBaseFileName` | `./node_modules/typescript/lib/typescript.js:9026:25`  |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 4.0ms |       3 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:49995:24` |

##### `trimEnd` (`<unknown>`)

|     % |  Time | Samples | Caller                   | Location                                               |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------------------ |
| 66.7% | 2.7ms |       2 | `doJSDocScan`            | `./node_modules/typescript/lib/typescript.js:37253:27` |
| 33.3% | 1.3ms |       1 | `parseNestedTypeLiteral` | `./node_modules/typescript/lib/typescript.js:37723:38` |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Caller                             | Location                                               |
| ----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------ |
| 66.7% | 2.7ms |       2 | `getClassLikeDeclarationOfSymbol`  | `./node_modules/typescript/lib/typescript.js:20238:41` |
| 33.3% | 1.3ms |       1 | `checkResolvedBlockScopedVariable` | `./node_modules/typescript/lib/typescript.js:50794:44` |

##### `Map` (`<unknown>`)

|     % |  Time | Samples | Caller                                    | Location                                               |
| ----: | ----: | ------: | ----------------------------------------- | ------------------------------------------------------ |
| 33.3% | 1.3ms |       1 | `checkUnusedLocalsAndParameters`          | `./node_modules/typescript/lib/typescript.js:83592:42` |
| 33.3% | 1.3ms |       1 | `checkObjectTypeForDuplicateDeclarations` | `./node_modules/typescript/lib/typescript.js:81951:51` |
| 33.3% | 1.3ms |       1 | `visit`                                   | `./node_modules/typescript/lib/typescript.js:52216:19` |

##### `realpathNativeSync` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                              |
| -----: | ----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 2.7ms |       2 | `realpath` | `./node_modules/typescript/lib/typescript.js:8852:22` |

##### `resolve` (`<unknown>`)

|     % |  Time | Samples | Caller                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 50.0% | 1.3ms |       1 | `loadAndEvaluateModule` | `<unknown>` |
| 50.0% | 1.3ms |       1 | `(anonymous)`           | `<unknown>` |

##### `add` (`<unknown>`)

|     % |  Time | Samples | Caller               | Location                                               |
| ----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 50.0% | 1.3ms |       1 | `requestSatisfyUtil` | `<unknown>`                                            |
| 50.0% | 1.3ms |       1 | `createMarkerType`   | `./node_modules/typescript/lib/typescript.js:68666:28` |

##### `filter` (`<unknown>`)

|     % |  Time | Samples | Caller                                  | Location                                                |
| ----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------- |
| 50.0% | 1.3ms |       1 | `discriminateTypeByDiscriminableItems`  | `./node_modules/typescript/lib/typescript.js:68568:48`  |
| 50.0% | 1.3ms |       1 | `getDiagnosticsWithPrecedingDirectives` | `./node_modules/typescript/lib/typescript.js:123417:49` |

##### `substring` (`<unknown>`)

|     % |  Time | Samples | Caller       | Location                                               |
| ----: | ----: | ------: | ------------ | ------------------------------------------------------ |
| 50.0% | 1.3ms |       1 | `scanString` | `./node_modules/typescript/lib/typescript.js:12396:22` |
| 50.0% | 1.3ms |       1 | `scanNumber` | `./node_modules/typescript/lib/typescript.js:12234:22` |

##### `trimStart` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 2.7ms |       2 | `appendIfCommentDirective` | `./node_modules/typescript/lib/typescript.js:13330:36` |

##### `replace` (`<unknown>`)

|     % |  Time | Samples | Caller                 | Location                                               |
| ----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 50.0% | 1.3ms |       1 | `formatStringFromArgs` | `./node_modules/typescript/lib/typescript.js:20447:30` |
| 50.0% | 1.3ms |       1 | `escapeString`         | `./node_modules/typescript/lib/typescript.js:18903:22` |

##### `unshift` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                               |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 2.7ms |       2 | `addWorkItem` | `./node_modules/typescript/lib/typescript.js:31286:23` |

##### `next` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location                                              |
| -----: | ----: | ------: | ----------- | ----------------------------------------------------- |
| 100.0% | 2.7ms |       2 | `arrayFrom` | `./node_modules/typescript/lib/typescript.js:3174:19` |

##### `indexOf` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location                                               |
| -----: | ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 100.0% | 2.7ms |       2 | `getContextualTypeForArgument` | `./node_modules/typescript/lib/typescript.js:73758:40` |

##### `loadAndEvaluateModule` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location    |
| -----: | ----: | ------: | ----------------------- | ----------- |
| 100.0% | 1.3ms |       1 | `loadAndEvaluateModule` | `<unknown>` |

##### `parseModule` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `<unknown>` |

##### `writer` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                     |
| -----: | ----: | ------: | ------------- | ---------------------------- |
| 100.0% | 1.3ms |       1 | `WriteStream` | `internal:fs/streams:196:21` |

##### `stream` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `<unknown>` |

##### `createRequire` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 1.3ms |       1 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `max` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:65804:36` |

##### `readdirSync` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.3ms |       1 | `readdirSync` | `<unknown>` |

##### `bind` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                    |
| -----: | ----: | ------: | ------------- | --------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `internal:primordials:1:11` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 99.8% | 5.53s |   4,129 | `(anonymous)`                              | `<unknown>`                                             |
| 99.3% | 5.50s |   4,112 | `loadAndEvaluateModule`                    | `<unknown>`                                             |
| 99.3% | 5.50s |   4,110 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                               |
| 99.3% | 5.50s |   4,110 | `evaluate`                                 | `<unknown>`                                             |
| 99.3% | 5.50s |   4,110 | `moduleEvaluation`                         | `<unknown>`                                             |
| 99.3% | 5.50s |   4,109 | `processTicksAndRejections`                | `<unknown>`                                             |
| 88.4% | 4.89s |   3,657 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17`   |
| 79.4% | 4.40s |   3,286 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 79.4% | 4.40s |   3,286 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17`   |
| 79.4% | 4.40s |   3,286 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32` |
| 79.4% | 4.40s |   3,285 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 79.4% | 4.40s |   3,285 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41` |
| 79.3% | 4.40s |   3,284 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 79.3% | 4.40s |   3,284 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36` |
| 79.3% | 4.40s |   3,284 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |
| 79.3% | 4.40s |   3,284 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34` |
| 79.3% | 4.40s |   3,284 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45` |
| 74.3% | 4.11s |   3,074 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32`  |
| 74.3% | 4.11s |   3,074 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27`  |
| 74.2% | 4.11s |   3,072 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33`  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 88.4% | 4.89s |   3,657 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17`   |
| 79.4% | 4.40s |   3,286 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 79.4% | 4.40s |   3,286 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17`   |
| 79.4% | 4.40s |   3,286 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32` |
| 79.4% | 4.40s |   3,285 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 79.4% | 4.40s |   3,285 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41` |
| 79.3% | 4.40s |   3,284 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 79.3% | 4.40s |   3,284 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36` |
| 79.3% | 4.40s |   3,284 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |
| 79.3% | 4.40s |   3,284 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34` |
| 79.3% | 4.40s |   3,284 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45` |
| 74.3% | 4.11s |   3,074 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32`  |
| 74.3% | 4.11s |   3,074 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27`  |
| 74.2% | 4.11s |   3,072 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 74.2% | 4.11s |   3,072 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27`  |
| 74.2% | 4.11s |   3,072 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47`  |
| 73.2% | 4.06s |   3,031 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36`  |
| 73.2% | 4.06s |   3,031 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30`  |
| 55.6% | 3.08s |   2,301 | `checkBlock`                               | `./node_modules/typescript/lib/typescript.js:83716:22`  |
| 55.1% | 3.05s |   2,279 | `checkExpression`                          | `./node_modules/typescript/lib/typescript.js:81476:27`  |

##### Native

|     % |    Time | Samples | Function                    | Location    |
| ----: | ------: | ------: | --------------------------- | ----------- |
| 99.3% |   5.50s |   4,112 | `loadAndEvaluateModule`     | `<unknown>` |
| 99.3% |   5.50s |   4,110 | `evaluate`                  | `<unknown>` |
| 99.3% |   5.50s |   4,110 | `moduleEvaluation`          | `<unknown>` |
| 99.3% |   5.50s |   4,109 | `processTicksAndRejections` | `<unknown>` |
|  5.8% | 322.6ms |     241 | `anonymous`                 | `<unknown>` |
|  5.6% | 309.2ms |     231 | `require`                   | `<unknown>` |
|  5.6% | 309.2ms |     231 | `bound require`             | `<unknown>` |
|  1.2% |  68.3ms |      51 | `generatorResume`           | `<unknown>` |
|  0.5% |  28.1ms |      21 | `readFileSync`              | `<unknown>` |
|  0.4% |  22.8ms |      17 | `statSync`                  | `<unknown>` |
|  0.3% |  17.4ms |      13 | `parseModule`               | `<unknown>` |
|  0.2% |  10.7ms |       8 | `requestSatisfyUtil`        | `<unknown>` |
|  0.2% |   9.4ms |       7 | `fetch`                     | `<unknown>` |
|  0.2% |   9.4ms |       7 | `requestFetch`              | `<unknown>` |
|  0.2% |   9.4ms |       7 | `requestInstantiate`        | `<unknown>` |
|  0.1% |   8.0ms |       6 | `stringSplitFast`           | `<unknown>` |
|  0.1% |   4.0ms |       3 | `SymbolLinks`               | `<unknown>` |
| <0.1% |   2.7ms |       2 | `requestSatisfy`            | `<unknown>` |
| <0.1% |   2.7ms |       2 | `loadModule`                | `<unknown>` |
| <0.1% |   2.7ms |       2 | `realpathNativeSync`        | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function          | Location                   |
| ----: | -----: | ------: | ----------------- | -------------------------- |
| 41.9% |  2.32s |   1,734 | `forEach`         | `<unknown>`                |
|  0.6% | 33.5ms |      25 | `next`            | `<unknown>`                |
|  0.3% | 17.4ms |      13 | `slice`           | `<unknown>`                |
|  0.3% | 14.7ms |      11 | `join`            | `<unknown>`                |
|  0.2% | 13.4ms |      10 | `test`            | `<unknown>`                |
|  0.2% | 10.7ms |       8 | `get`             | `<unknown>`                |
|  0.2% |  9.4ms |       7 | `toString`        | `<unknown>`                |
|  0.2% |  9.4ms |       7 | `some`            | `<unknown>`                |
|  0.1% |  6.7ms |       5 | `set`             | `<unknown>`                |
|  0.1% |  6.7ms |       5 | `find`            | `<unknown>`                |
|  0.1% |  5.4ms |       4 | `map`             | `<unknown>`                |
|  0.1% |  5.4ms |       4 | `lastIndexOf`     | `<unknown>`                |
|  0.1% |  4.0ms |       3 | `(anonymous)`     | `node:fs:1:11`             |
|  0.1% |  4.0ms |       3 | `(anonymous)`     | `internal:stream:1:11`     |
|  0.1% |  4.0ms |       3 | `(anonymous)`     | `node:stream:1:11`         |
|  0.1% |  4.0ms |       3 | `(anonymous)`     | `internal:fs/streams:1:11` |
|  0.1% |  4.0ms |       3 | `get WriteStream` | `node:fs:587:18`           |
|  0.1% |  4.0ms |       3 | `filter`          | `<unknown>`                |
|  0.1% |  4.0ms |       3 | `trimEnd`         | `<unknown>`                |
|  0.1% |  4.0ms |       3 | `sort`            | `<unknown>`                |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |   Time | Samples | Caller                      | Location    |
| ----: | -----: | ------: | --------------------------- | ----------- |
| 99.5% |  5.50s |   4,108 | `processTicksAndRejections` | `<unknown>` |
|  0.3% | 16.1ms |      12 | `parseModule`               | `<unknown>` |
|  0.2% |  9.4ms |       7 | `(anonymous)`               | `<unknown>` |
|  0.2% |  9.4ms |       7 | `requestInstantiate`        | `<unknown>` |

##### `loadAndEvaluateModule` (`<unknown>`)

|     % |  Time | Samples | Caller                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 99.9% | 5.50s |   4,108 | `(anonymous)`           | `<unknown>` |
|  0.1% | 5.4ms |       4 | `loadAndEvaluateModule` | `<unknown>` |

##### `evaluate` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.50s |   4,110 | `moduleEvaluation` | `<unknown>` |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location    |
| -----: | ----: | ------: | ----------------------- | ----------- |
| 100.0% | 5.50s |   4,110 | `moduleEvaluation`      | `<unknown>` |
| 100.0% | 5.50s |   4,108 | `loadAndEvaluateModule` | `<unknown>` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2365:17`)

|     % |    Time | Samples | Caller                         | Location                                                |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------- |
| 62.9% |   3.08s |   2,301 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:83716:22`  |
| 37.0% |   1.81s |   1,353 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 34.6% |   1.69s |   1,266 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:84112:40`  |
| 12.2% | 597.0ms |     446 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:122262:23` |
| 10.9% | 535.4ms |     400 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js:85417:33`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |  Time | Samples | Caller    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 4.40s |   3,286 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2612:17`)

|      % |  Time | Samples | Caller                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,286 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:123313:32`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,285 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:123327:34` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:123327:34`)

|      % |  Time | Samples | Caller             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 4.40s |   3,285 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123375:41`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,285 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|      % |  Time | Samples | Caller                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:123365:36`)

|      % |  Time | Samples | Caller                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:123384:52`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:123670:34`)

|      % |  Time | Samples | Caller                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123381:45`)

|      % |  Time | Samples | Caller                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:87343:32`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 4.11s |   3,074 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:87322:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:87322:27`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.11s |   3,074 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 4.11s |   3,072 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:87239:27`)

|      % |  Time | Samples | Caller                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 4.11s |   3,072 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:87336:47`)

|      % |  Time | Samples | Caller                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 4.11s |   3,072 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:86895:36`)

|      % |  Time | Samples | Caller               | Location                                               |
| -----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 100.0% | 4.06s |   3,031 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:86886:30`)

|      % |    Time | Samples | Caller                                                 | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |   4.06s |   3,031 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2365:17`  |
|  55.4% |   2.25s |   1,678 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:79840:64` |
|  15.0% | 607.7ms |     454 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:85990:37` |
|  10.8% | 439.0ms |     328 | `checkFunctionOrMethodDeclaration`                     | `./node_modules/typescript/lib/typescript.js:83398:44` |
|   9.3% | 376.1ms |     281 | `checkModuleDeclaration`                               | `./node_modules/typescript/lib/typescript.js:86242:34` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js:83716:22`)

|      % |    Time | Samples | Caller                     | Location                                               |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |   3.08s |   2,301 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36` |
|   4.6% | 140.5ms |     105 | `checkTryStatement`        | `./node_modules/typescript/lib/typescript.js:85102:29` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:81476:27`)

|     % |    Time | Samples | Caller                              | Location                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 57.3% |   1.75s |   1,305 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js:81145:33` |
| 47.2% |   1.44s |   1,076 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js:81122:45` |
| 33.4% |   1.02s |     762 | `checkExpressionStatement`          | `./node_modules/typescript/lib/typescript.js:84124:36` |
| 32.1% | 979.8ms |     732 | `checkExpressionForMutableLocation` | `./node_modules/typescript/lib/typescript.js:81239:45` |
| 25.1% | 764.3ms |     571 | `checkNonNullExpression`            | `./node_modules/typescript/lib/typescript.js:75707:34` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Caller                | Location                                               |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------ |
| 98.7% |  2.29s |   1,711 | `checkDeferredNodes`  | `./node_modules/typescript/lib/typescript.js:87179:30` |
|  2.1% | 48.2ms |      36 | `getNamedMembers`     | `./node_modules/typescript/lib/typescript.js:52485:27` |
|  0.5% | 10.7ms |       8 | `extendExportSymbols` | `./node_modules/typescript/lib/typescript.js:52179:31` |
|  0.2% |  4.0ms |       3 | `mergeSymbolTable`    | `./node_modules/typescript/lib/typescript.js:50183:28` |
|  0.2% |  4.0ms |       3 | `visit`               | `./node_modules/typescript/lib/typescript.js:52216:19` |

##### `anonymous` (`<unknown>`)

|     % |    Time | Samples | Caller        | Location               |
| ----: | ------: | ------: | ------------- | ---------------------- |
| 95.9% | 309.2ms |     231 | `require`     | `<unknown>`            |
|  2.9% |   9.4ms |       7 | `(anonymous)` | `<unknown>`            |
|  1.2% |   4.0ms |       3 | `(anonymous)` | `node:fs:1:11`         |
|  1.2% |   4.0ms |       3 | `(anonymous)` | `internal:stream:1:11` |
|  1.2% |   4.0ms |       3 | `(anonymous)` | `node:stream:1:11`     |

##### `require` (`<unknown>`)

|      % |    Time | Samples | Caller          | Location    |
| -----: | ------: | ------: | --------------- | ----------- |
| 100.0% | 309.2ms |     231 | `bound require` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |    Time | Samples | Caller             | Location                                              |
| -----: | ------: | ------: | ------------------ | ----------------------------------------------------- |
| 100.0% | 309.2ms |     231 | `typeCheckProject` | `./tsc-workload.mjs:3:33`                             |
|   0.9% |   2.7ms |       2 | `getNodeSystem`    | `./node_modules/typescript/lib/typescript.js:8460:25` |
|   0.4% |   1.3ms |       1 | `(anonymous)`      | `./node_modules/typescript/lib/typescript.js:16:15`   |

##### `generatorResume` (`<unknown>`)

|     % |   Time | Samples | Caller                     | Location                                              |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------- |
| 54.9% | 37.5ms |      28 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34` |
| 45.1% | 30.8ms |      23 | `next`                     | `<unknown>`                                           |

##### `next` (`<unknown>`)

|     % |   Time | Samples | Caller                     | Location                                              |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------- |
| 92.0% | 30.8ms |      23 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34` |
|  8.0% |  2.7ms |       2 | `arrayFrom`                | `./node_modules/typescript/lib/typescript.js:3174:19` |

##### `readFileSync` (`<unknown>`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 28.1ms |      21 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28` |
|  66.7% | 18.7ms |      14 | `readFileSync`   | `<unknown>`                                           |

##### `statSync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                                              |
| -----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 22.8ms |      17 | `statSync` | `./node_modules/typescript/lib/typescript.js:8602:22` |
|  11.8% |  2.7ms |       2 | `statSync` | `<unknown>`                                           |

##### `parseModule` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 17.4ms |      13 | `(anonymous)` | `<unknown>` |

##### `slice` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                               |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 53.8% | 9.4ms |       7 | `addRange`                 | `./node_modules/typescript/lib/typescript.js:2979:18`  |
| 38.5% | 6.7ms |       5 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16`  |
|  7.7% | 1.3ms |       1 | `fillMissingTypeArguments` | `./node_modules/typescript/lib/typescript.js:60937:36` |

##### `join` (`<unknown>`)

|     % |   Time | Samples | Caller             | Location                                               |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 90.9% | 13.4ms |      10 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js:37253:27` |
|  9.1% |  1.3ms |       1 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js:37509:32` |

##### `test` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                               |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 90.0% | 12.0ms |       9 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21208:60` |
| 10.0% |  1.3ms |       1 | `every`       | `./node_modules/typescript/lib/typescript.js:2439:15`  |

##### `requestSatisfyUtil` (`<unknown>`)

|     % |  Time | Samples | Caller           | Location    |
| ----: | ----: | ------: | ---------------- | ----------- |
| 75.0% | 8.0ms |       6 | `(anonymous)`    | `<unknown>` |
| 25.0% | 2.7ms |       2 | `requestSatisfy` | `<unknown>` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                            | Location                                               |
| ----: | ----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 37.5% | 4.0ms |       3 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64979:43` |
| 25.0% | 2.7ms |       2 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:50184:20` |
| 12.5% | 1.3ms |       1 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:52182:20` |
| 12.5% | 1.3ms |       1 | `getDiagnostics2`                 | `./node_modules/typescript/lib/typescript.js:18843:27` |
| 12.5% | 1.3ms |       1 | `getPropertyOfType`               | `./node_modules/typescript/lib/typescript.js:60739:29` |

##### `fetch` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location    |
| -----: | ----: | ------: | -------------- | ----------- |
| 100.0% | 9.4ms |       7 | `requestFetch` | `<unknown>` |

##### `requestFetch` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 9.4ms |       7 | `(anonymous)` | `<unknown>` |

##### `requestInstantiate` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 9.4ms |       7 | `requestSatisfyUtil` | `<unknown>` |

##### `toString` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                              |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 9.4ms |       7 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Caller                  | Location                                               |
| ----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 85.7% | 8.0ms |       6 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js:77689:33` |
| 14.3% | 1.3ms |       1 | `hasExportDeclarations` | `./node_modules/typescript/lib/typescript.js:46259:33` |

##### `stringSplitFast` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                              |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 8.0ms |       6 | `pathComponents` | `./node_modules/typescript/lib/typescript.js:9068:24` |

##### `set` (`<unknown>`)

|     % |  Time | Samples | Caller                 | Location                                                |
| ----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 40.0% | 2.7ms |       2 | `declareSymbol`        | `./node_modules/typescript/lib/typescript.js:44997:25`  |
| 40.0% | 2.7ms |       2 | `updateFilesByNameMap` | `./node_modules/typescript/lib/typescript.js:124131:32` |
| 20.0% | 1.3ms |       1 | `(anonymous)`          | `./node_modules/typescript/lib/typescript.js:59752:23`  |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Caller                             | Location                                               |
| ----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------ |
| 60.0% | 4.0ms |       3 | `checkResolvedBlockScopedVariable` | `./node_modules/typescript/lib/typescript.js:50794:44` |
| 40.0% | 2.7ms |       2 | `getClassLikeDeclarationOfSymbol`  | `./node_modules/typescript/lib/typescript.js:20238:41` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Caller                                | Location                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 50.0% | 2.7ms |       2 | `convertArrayLiteralExpressionToJson` | `./node_modules/typescript/lib/typescript.js:40782:47` |
| 25.0% | 1.3ms |       1 | `matchFiles`                          | `./node_modules/typescript/lib/typescript.js:21178:20` |
| 25.0% | 1.3ms |       1 | `getRegularExpressionForWildcard`     | `./node_modules/typescript/lib/typescript.js:21088:41` |

##### `lastIndexOf` (`<unknown>`)

|     % |  Time | Samples | Caller            | Location                                               |
| ----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 50.0% | 2.7ms |       2 | `startsWith`      | `./node_modules/typescript/lib/typescript.js:3819:20`  |
| 25.0% | 1.3ms |       1 | `doJSDocScan`     | `./node_modules/typescript/lib/typescript.js:37253:27` |
| 25.0% | 1.3ms |       1 | `getBaseFileName` | `./node_modules/typescript/lib/typescript.js:9026:25`  |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 4.0ms |       3 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:49995:24` |

##### `(anonymous)` (`node:fs:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:stream:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:stream:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/streams:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `get WriteStream` (`node:fs:587:18`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 4.0ms |       3 | `(anonymous)` | `<unknown>` |

##### `filter` (`<unknown>`)

|     % |  Time | Samples | Caller                                  | Location                                                |
| ----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------- |
| 33.3% | 1.3ms |       1 | `(anonymous)`                           | `./node_modules/typescript/lib/typescript.js:16:15`     |
| 33.3% | 1.3ms |       1 | `discriminateTypeByDiscriminableItems`  | `./node_modules/typescript/lib/typescript.js:68568:48`  |
| 33.3% | 1.3ms |       1 | `getDiagnosticsWithPrecedingDirectives` | `./node_modules/typescript/lib/typescript.js:123417:49` |

##### `trimEnd` (`<unknown>`)

|     % |  Time | Samples | Caller                   | Location                                               |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------------------ |
| 66.7% | 2.7ms |       2 | `doJSDocScan`            | `./node_modules/typescript/lib/typescript.js:37253:27` |
| 33.3% | 1.3ms |       1 | `parseNestedTypeLiteral` | `./node_modules/typescript/lib/typescript.js:37723:38` |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Caller              | Location                                              |
| -----: | ----: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 4.0ms |       3 | `stableSortIndices` | `./node_modules/typescript/lib/typescript.js:3009:27` |

##### `requestSatisfy` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location    |
| -----: | ----: | ------: | ------------ | ----------- |
| 100.0% | 2.7ms |       2 | `loadModule` | `<unknown>` |

##### `loadModule` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location    |
| -----: | ----: | ------: | ----------------------- | ----------- |
| 100.0% | 2.7ms |       2 | `loadModule`            | `<unknown>` |
| 100.0% | 2.7ms |       2 | `loadAndEvaluateModule` | `<unknown>` |

##### `realpathNativeSync` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                              |
| -----: | ----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 2.7ms |       2 | `realpath` | `./node_modules/typescript/lib/typescript.js:8852:22` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |   Time | Samples | Callee                  | Location    |
| ----: | -----: | ------: | ----------------------- | ----------- |
| 99.5% |  5.50s |   4,108 | `loadAndEvaluateModule` | `<unknown>` |
|  0.3% | 17.4ms |      13 | `parseModule`           | `<unknown>` |
|  0.2% |  9.4ms |       7 | `requestFetch`          | `<unknown>` |
|  0.2% |  9.4ms |       7 | `(anonymous)`           | `<unknown>` |
|  0.2% |  9.4ms |       7 | `anonymous`             | `<unknown>` |

##### `loadAndEvaluateModule` (`<unknown>`)

|     % |  Time | Samples | Callee                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 99.9% | 5.50s |   4,108 | `moduleEvaluation`      | `<unknown>` |
|  0.1% | 5.4ms |       4 | `loadAndEvaluateModule` | `<unknown>` |
| <0.1% | 2.7ms |       2 | `loadModule`            | `<unknown>` |
| <0.1% | 1.3ms |       1 | `resolve`               | `<unknown>` |

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 79.9% |   4.40s |   3,285 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 13.6% | 746.9ms |     558 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js:122262:23` |
|  5.6% | 309.2ms |     231 | `bound require`                    | `<unknown>`                                             |
|  0.9% |  46.8ms |      35 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js:40536:42`  |
| <0.1% |   1.3ms |       1 | `createRequire`                    | `<unknown>`                                             |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.50s |   4,110 | `evaluate`         | `<unknown>` |
| 100.0% | 5.50s |   4,110 | `moduleEvaluation` | `<unknown>` |

##### `processTicksAndRejections` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                          |
| -----: | ----: | ------: | ------------- | --------------------------------- |
| 100.0% | 5.50s |   4,108 | `(anonymous)` | `<unknown>`                       |
|  <0.1% | 1.3ms |       1 | `onConstruct` | `internal:streams/destroy:128:23` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2365:17`)

|     % |    Time | Samples | Callee               | Location                                                |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------- |
| 82.9% |   4.06s |   3,031 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30`  |
|  8.7% | 425.6ms |     318 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24` |
|  4.7% | 228.9ms |     171 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:45224:21`  |
|  3.7% | 182.0ms |     136 | `bind`               | `./node_modules/typescript/lib/typescript.js:46600:16`  |
|  3.5% | 171.3ms |     128 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122498:30` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |  Time | Samples | Callee                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,285 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2612:17`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,286 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:123313:32`)

|      % |  Time | Samples | Callee    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 4.40s |   3,286 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:123327:34`)

|      % |  Time | Samples | Callee                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,285 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123375:41`)

|      % |  Time | Samples | Callee                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45` |
|  <0.1% | 1.3ms |       1 | `getProgramDiagnostics`             | `./node_modules/typescript/lib/typescript.js:123337:33` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 93.6% |   4.11s |   3,074 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:87322:27`  |
|  6.3% | 278.4ms |     208 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:123266:26` |
|  0.1% |   2.7ms |       2 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:123405:44` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:123365:36`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:123384:52`)

|      % |  Time | Samples | Callee                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:123670:34`)

|      % |  Time | Samples | Callee                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123381:45`)

|      % |  Time | Samples | Callee                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.40s |   3,284 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:87343:32`)

|     % |  Time | Samples | Callee                                | Location                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 99.9% | 4.11s |   3,072 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47` |
|  0.1% | 2.7ms |       2 | `getDiagnostics2`                     | `./node_modules/typescript/lib/typescript.js:18843:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:87322:27`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 4.11s |   3,074 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`)

|     % |  Time | Samples | Callee                       | Location                                               |
| ----: | ----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 55.7% | 2.29s |   1,711 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js:87179:30` |
| 44.0% | 1.81s |   1,353 | `forEach`                    | `./node_modules/typescript/lib/typescript.js:2365:17`  |
|  0.2% | 8.0ms |       6 | `addLazyDiagnostic`          | `./node_modules/typescript/lib/typescript.js:87339:25` |
| <0.1% | 1.3ms |       1 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js:86845:38` |
| <0.1% | 1.3ms |       1 | `clear`                      | `./node_modules/typescript/lib/typescript.js:2564:15`  |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:87239:27`)

|      % |  Time | Samples | Callee                  | Location                                               |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 4.11s |   3,072 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:87270:33` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:87336:47`)

|      % |  Time | Samples | Callee            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 4.11s |   3,072 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:86895:36`)

|     % |    Time | Samples | Callee                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 75.9% |   3.08s |   2,301 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js:83716:22` |
| 41.7% |   1.69s |   1,264 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js:84101:36` |
| 41.6% |   1.69s |   1,260 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js:84119:34` |
| 25.2% |   1.02s |     763 | `checkExpressionStatement` | `./node_modules/typescript/lib/typescript.js:84124:36` |
| 21.3% | 864.7ms |     646 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js:82223:34` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:86886:30`)

|      % |  Time | Samples | Callee                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 4.06s |   3,031 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js:83716:22`)

|      % |  Time | Samples | Callee    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 3.08s |   2,301 | `forEach` | `./node_modules/typescript/lib/typescript.js:2365:17` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:81476:27`)

|     % |   Time | Samples | Callee                                          | Location                                               |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------------ |
| 99.9% |  3.05s |   2,276 | `checkExpressionWorker`                         | `./node_modules/typescript/lib/typescript.js:81516:33` |
|  1.2% | 37.5ms |      28 | `instantiateTypeWithSingleGenericCallSignature` | `./node_modules/typescript/lib/typescript.js:81266:57` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Callee              | Location                                               |
| ----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 98.6% |  2.29s |   1,709 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js:87186:29` |
|  1.3% | 30.8ms |      23 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52487:21` |
|  0.4% |  9.4ms |       7 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52182:20` |
|  0.2% |  4.0ms |       3 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:50184:20` |
|  0.1% |  2.7ms |       2 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52218:32` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                           |
| ----: | -----: | ------: | ------------- | -------------------------------------------------- |
| 11.6% | 37.5ms |      28 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:10` |
|  1.2% |  4.0ms |       3 | `(anonymous)` | `node:fs:1:11`                                     |
|  1.2% |  4.0ms |       3 | `(anonymous)` | `internal:stream:1:11`                             |
|  1.2% |  4.0ms |       3 | `(anonymous)` | `node:stream:1:11`                                 |
|  1.2% |  4.0ms |       3 | `(anonymous)` | `internal:fs/streams:1:11`                         |

##### `require` (`<unknown>`)

|      % |    Time | Samples | Callee      | Location    |
| -----: | ------: | ------: | ----------- | ----------- |
| 100.0% | 309.2ms |     231 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |    Time | Samples | Callee      | Location    |
| -----: | ------: | ------: | ----------- | ----------- |
| 100.0% | 309.2ms |     231 | `require`   | `<unknown>` |
|   0.9% |   2.7ms |       2 | `anonymous` | `<unknown>` |

##### `generatorResume` (`<unknown>`)

|      % |   Time | Samples | Callee                   | Location                                                |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 68.3ms |      51 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js:69709:108` |

##### `next` (`<unknown>`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 92.0% | 30.8ms |      23 | `generatorResume` | `<unknown>` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Callee         | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
| 66.7% | 18.7ms |      14 | `readFileSync` | `<unknown>` |

##### `statSync` (`<unknown>`)

|     % |  Time | Samples | Callee     | Location    |
| ----: | ----: | ------: | ---------- | ----------- |
| 11.8% | 2.7ms |       2 | `statSync` | `<unknown>` |

##### `parseModule` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 92.3% | 16.1ms |      12 | `(anonymous)` | `<unknown>` |

##### `test` (`<unknown>`)

|     % |   Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                           | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 90.0% | 12.0ms |       9 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |

##### `requestSatisfyUtil` (`<unknown>`)

|     % |  Time | Samples | Callee               | Location    |
| ----: | ----: | ------: | -------------------- | ----------- |
| 87.5% | 9.4ms |       7 | `requestInstantiate` | `<unknown>` |
| 12.5% | 1.3ms |       1 | `add`                | `<unknown>` |

##### `requestFetch` (`<unknown>`)

|      % |  Time | Samples | Callee  | Location    |
| -----: | ----: | ------: | ------- | ----------- |
| 100.0% | 9.4ms |       7 | `fetch` | `<unknown>` |

##### `requestInstantiate` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 9.4ms |       7 | `(anonymous)` | `<unknown>` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Callee                               | Location                                               |
| ----: | ----: | ------: | ------------------------------------ | ------------------------------------------------------ |
| 71.4% | 6.7ms |       5 | `isGenericFunctionReturningFunction` | `./node_modules/typescript/lib/typescript.js:77766:46` |
| 14.3% | 1.3ms |       1 | `(anonymous)`                        | `./node_modules/typescript/lib/typescript.js:46261:43` |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                              |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 40.0% | 2.7ms |       2 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:50801:7` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                               |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------ |
| 50.0% | 2.7ms |       2 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:40787:32` |
| 25.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21182:95` |
| 25.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21093:32` |

##### `(anonymous)` (`node:fs:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/streams:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `get WriteStream` (`node:fs:587:18`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4.0ms |       3 | `anonymous` | `<unknown>` |

##### `filter` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                               |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------ |
| 33.3% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:40182:69` |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                                              |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.0ms |       3 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:3010:16` |

##### `requestSatisfy` (`<unknown>`)

|      % |  Time | Samples | Callee               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 2.7ms |       2 | `requestSatisfyUtil` | `<unknown>` |

##### `loadModule` (`<unknown>`)

|      % |  Time | Samples | Callee           | Location    |
| -----: | ----: | ------: | ---------------- | ----------- |
| 100.0% | 2.7ms |       2 | `requestSatisfy` | `<unknown>` |
| 100.0% | 2.7ms |       2 | `loadModule`     | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.9% | 271.7ms |     203 | `anonymous` ← `require` ← `bound require` ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |  32.1ms |      24 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |  30.8ms |      23 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections` |
| 0.6% |  30.8ms |      23 | `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:71634:34`) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `getTypeOfExpression` (81411:31) ← `isEvolvingArrayOperationTarget` (71351:42) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkIndexedAccess` (76439:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `maybeCheckExpression` (80565:34) ← `onLeft` (80503:20) ← `left` (30385:16) ← `trampoline` (30489:22) ← `(anonymous)` (80462:12) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |  25.4ms |      19 | `createTypeChecker` (`./node_modules/typescript/lib/typescript.js:48842:27`) ← `getTypeChecker` (123266:26) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |  24.1ms |      18 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% |  22.8ms |      17 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                       |
| 0.4% |  22.8ms |      17 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `(anonymous)` (`./node_modules/typescript/lib/typescript.js:21208:60`) ← `findIndex` (2471:19) ← `visitDirectory` (21192:26) ← `visitDirectory` (21192:26) ← `visitDirectory` (21192:26) ← `matchFiles` (21178:20) ← `readDirectory` (8815:27) ← `getFileNamesFromConfigSpecs` (41698:37) ← `getFileNames` (41264:24) ← `parseJsonConfigFileContentWorker` (41170:42) ← `parseJsonSourceFileConfigFileContent` (41139:46) ← `getParsedCommandLineOfConfigFile` (40536:42) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.3% |  18.7ms |      14 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:10) ← `anonymous` ← `require` ← `bound require` ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  13.4ms |      10 | `getAliasId` (`./node_modules/typescript/lib/typescript.js:61521:22`) ← `getIntersectionType` (63112:31) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getReturnTypeOfSignature` (61207:36) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.2% |  12.0ms |       9 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `test` ← `(anonymous)` (`./node_modules/typescript/lib/typescript.js:21208:60`) ← `findIndex` (2471:19) ← `visitDirectory` (21192:26) ← `visitDirectory` (21192:26) ← `visitDirectory` (21192:26) ← `matchFiles` (21178:20) ← `readDirectory` (8815:27) ← `getFileNamesFromConfigSpecs` (41698:37) ← `getFileNames` (41264:24) ← `parseJsonConfigFileContentWorker` (41170:42) ← `parseJsonSourceFileConfigFileContent` (41139:46) ← `getParsedCommandLineOfConfigFile` (40536:42) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  10.7ms |       8 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `checkTypeRelatedToAndOptionallyElaborate` (65249:52) ← `getSignatureApplicabilityError` (76912:42) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkAssertionWorker` (78581:32) ← `checkAssertion` (78541:26) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |   9.4ms |       7 | `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:37231:37`) ← `(anonymous)` (37204:63) ← `doInsideOfContext` (31856:29) ← `parseJSDocComment` (37200:31) ← `(anonymous)` (31696:71) ← `mapDefined` (2683:20) ← `withJSDoc` (31691:21) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseTypeMember` (33536:27) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |   9.4ms |       7 | `slice` ← `addRange` (`./node_modules/typescript/lib/typescript.js:2979:18`) ← `createUnionOrIntersectionProperty` (60498:45) ← `getUnionOrIntersectionProperty` (60637:42) ← `isDiscriminantProperty` (70800:34) ← `findDiscriminantProperties` (70812:38) ← `findMatchingDiscriminantType` (90511:40) ← `getBestMatchingType` (68565:31) ← `typeRelatedToSomeType` (66827:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkSignatureDeclaration` (81792:37) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkMethodDeclaration` (82023:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkClassDeclaration` (85417:33) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |   9.4ms |       7 | `instantiateSignature` (`./node_modules/typescript/lib/typescript.js:64733:32`) ← `instantiateList` (64623:27) ← `instantiateSignatures` (64643:33) ← `resolveAnonymousTypeMembers` (59723:39) ← `resolveStructuredTypeMembers` (60090:40) ← `getSignaturesOfStructuredType` (60782:41) ← `getSignaturesOfType` (60789:31) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% |   8.0ms |       6 | `fetch` ← `requestFetch` ← `(anonymous)` ← `(anonymous)` ← `requestInstantiate` ← `requestSatisfyUtil` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% |   8.0ms |       6 | `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `typeRelatedToSomeType` (66827:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkMappedType` (82354:27) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkUnionOrIntersectionType` (82318:40) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkModuleDeclaration` (86242:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% |   8.0ms |       6 | `join` ← `doJSDocScan` (`./node_modules/typescript/lib/typescript.js:37253:27`) ← `scanRange` (13601:21) ← `parseJSDocCommentWorker` (37231:37) ← `(anonymous)` (37204:63) ← `doInsideOfContext` (31856:29) ← `parseJSDocComment` (37200:31) ← `(anonymous)` (31696:71) ← `mapDefined` (2683:20) ← `withJSDoc` (31691:21) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% |   6.7ms |       5 | `NodeObject` (`./node_modules/typescript/lib/typescript.js:146197:14`) ← `createBaseNode` (31416:21) ← `createBaseNode` (23823:26) ← `createTypeReferenceNode` (24493:35) ← `parseTypeReference` (33132:30) ← `parseNonArrayType` (33781:29) ← `parsePostfixTypeOrHigher` (33903:36) ← `doOutsideOfContext` (31838:30) ← `allowConditionalTypesAnd` (31880:36) ← `parseTypeOperatorOrHigher` (33974:37) ← `parseUnionOrIntersectionType` (34000:40) ← `parseIntersectionTypeOrHigher` (34014:41) ← `parseUnionOrIntersectionType` (34000:40) ← `parseUnionTypeOrHigher` (34017:34) ← `parseType` (34098:21) ← `parseTypeAnnotation` (34117:31) ← `parseParameterWorker` (33339:32) ← `parseParameter` (33329:26) ← `(anonymous)` (33416:157) ← `parseListElement` (32639:28) ← `parseDelimitedList` (32875:30) ← `parseParametersWorker` (33411:33) ← `parseParameters` (33421:27) ← `parseFunctionDeclaration` (36270:36) ← `parseDeclarationWorker` (36069:34) ← `(anonymous)` (36056:56) ← `doInsideOfContext` (31856:29) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% |   6.7ms |       5 | `scan` (`./node_modules/typescript/lib/typescript.js:12765:16`) ← `nextTokenWithoutCheck` (31953:33) ← `nextToken` (31960:21) ← `tryParseSemicolon` (32220:29) ← `parseSemicolon` (32229:26) ← `parseTypeMemberSemicolon` (33433:36) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseTypeMember` (33536:27) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
