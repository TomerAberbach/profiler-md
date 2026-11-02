# CPU profile

Took 2.39s over 1,893 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 86.5% |   2.07s |   1,637 |
| Garbage collector  |  7.8% | 186.9ms |     148 |
| Standard library   |  4.4% | 106.1ms |      84 |
| Native             |  1.1% |  26.5ms |      21 |
| Regular expression |  0.2% |   3.8ms |       3 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.17s (90.6%) (anonymous) at ./cpuprofile-run.mjs
│   └── 2.17s (90.6%) typeCheckProject at ./tsc-workload.mjs:3:33
│       ├── … 1.67s (69.7%) (anonymous) at ./node_modules/typescript/lib/typescript.js:124967:37
│       │   ├── … 1.52s (63.5%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:88583:33
│       │   │   ├── … 789.1ms (33.0%) checkFunctionExpressionOrObjectLiteralMethodDeferred at ./node_modules/typescript/lib/typescript.js:81135:64
│       │   │   │   ├── 766.4ms (32.1%) checkSourceElement at 88199:30
│       │   │   │   │   └── … 765.2ms (32.0%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:88208:36
│       │   │   │   │       ├── … 229.8ms (9.6%) checkExpressionWorker at ./node_modules/typescript/lib/typescript.js:82811:33
│       │   │   │   │       │   ├── 36.6ms (1.5%) checkIdentifier at 74242:27
│       │   │   │   │       │   │   └── 30.3ms (1.3%) 4 more callees, led by (0.6%) getFlowTypeOfReference at 72917:34
│       │   │   │   │       │   └── 186.9ms (7.8%) 12 more callees, led by (5.0%) checkCallExpression at 79584:31
│       │   │   │   │       └── 527.8ms (22.1%) 13 more callees, led by (15.9%) checkVariableDeclaration at 85396:36
│       │   │   │   └── 22.7ms (1.0%) 3 more callees, led by (0.8%) getReturnTypeOfSignature at 62462:36
│       │   │   └── 722.2ms (30.2%) forEach at 2378:17
│       │   │       ├── … 694.4ms (29.1%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:88199:30
│       │   │       │   └── … 694.4ms (29.1%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:88208:36
│       │   │       │       ├── 210.9ms (8.8%) checkTypeReferenceNode at 83518:34
│       │   │       │       │   └── 208.3ms (8.7%) checkTypeReferenceOrImport at 83529:38
│       │   │       │       │       ├── … 188.1ms (7.9%) checkTypeArgumentConstraints at ./node_modules/typescript/lib/typescript.js:83481:40
│       │   │       │       │       │   ├── 131.3ms (5.5%) checkTypeAssignableTo at 66493:33
│       │   │       │       │       │   │   └── 131.3ms (5.5%, self 2.3% globally) checkTypeRelatedTo at 67445:30
│       │   │       │       │       │   │       └── … 123.7ms (5.2%, self 1.6% globally) isRelatedTo at ./node_modules/typescript/lib/typescript.js:67753:25
│       │   │       │       │       │   │           ├── … 96.0ms (4.0%, self 2.4% globally) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js:68323:36
│       │   │       │       │       │   │           │   └── 92.2ms (3.9%) 3 more callees, led by (3.6%) structuredTypeRelatedTo at 68467:37
│       │   │       │       │       │   │           └── 27.8ms (1.2%) 4 more callees, led by (0.7%) getNormalizedType at 67408:29
│       │   │       │       │       │   └── … 50.5ms (2.1%, self 1.8% globally) instantiateTypeWorker at ./node_modules/typescript/lib/typescript.js:66283:33
│       │   │       │       │       │       └── 49.2ms (2.1%) 8 more callees, led by (1.5%) getConditionalTypeInstantiation at 66239:43
│       │   │       │       │       └── … 7.6ms (0.3%) resolveEntityName at ./node_modules/typescript/lib/typescript.js:52866:29
│       │   │       │       └── 482.3ms (20.2%) 27 more callees, led by (8.0%) checkVariableDeclaration at 85396:36
│       │   │       └── 27.8ms (1.2%) 3 more callees, led by (0.8%) checkParameter at ./node_modules/typescript/lib/typescript.js:82969:26
│       │   └── … 137.6ms (5.8%, self 1.3%) bind at ./node_modules/typescript/lib/typescript.js:47793:16
│       │       └── 106.1ms (4.4%) 8 more callees, led by (2.3%) bindWorker at ./node_modules/typescript/lib/typescript.js:47856:22
│       ├── 382.6ms (16.0%) createProgram at ./node_modules/typescript/lib/typescript.js:123840:23
│       │   └── 378.8ms (15.8%) 5 more callees, led by (13.2%) forEach at 2378:17
│       ├── … 94.7ms (4.0%) (anonymous) at node:internal/modules/cjs/loader:1731:37
│       │   ├── 82.1ms (3.4%) wrapSafe at 1671:18
│       │   └── 12.6ms (0.5%) (anonymous) at ./node_modules/typescript/lib/typescript.js:1:1 …
│       └── 13.9ms (0.6%) getParsedCommandLineOfConfigFile at ./node_modules/typescript/lib/typescript.js:41625:42 …
├── 186.9ms (7.8%) (garbage collector)
└── 37.9ms (1.6%) 19 more root frames, led by (0.2%) structuredTypeRelatedToWorker at ./node_modules/typescript/lib/typescript.js:68537:43
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|    % |    Time | Samples | Function                               | Location                                               |
| ---: | ------: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 7.8% | 186.9ms |     148 | `(garbage collector)`                  | `<unknown>`                                            |
| 3.4% |  82.1ms |      65 | `wrapSafe`                             | `node:internal/modules/cjs/loader:1671:18`             |
| 2.4% |  56.8ms |      45 | `recursiveTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:68323:36` |
| 2.3% |  54.3ms |      43 | `checkTypeRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:67445:30` |
| 1.8% |  44.2ms |      35 | `instantiateTypeWorker`                | `./node_modules/typescript/lib/typescript.js:66283:33` |
| 1.6% |  39.1ms |      31 | `isRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:67753:25` |
| 1.5% |  36.6ms |      29 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js:66040:38` |
| 1.3% |  31.6ms |      25 | `scan`                                 | `./node_modules/typescript/lib/typescript.js:12895:16` |
| 1.3% |  31.6ms |      25 | `bind`                                 | `./node_modules/typescript/lib/typescript.js:47793:16` |
| 1.0% |  22.7ms |      18 | `createTypeReference`                  | `./node_modules/typescript/lib/typescript.js:62794:31` |
| 0.8% |  20.2ms |      16 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js:71184:28` |
| 0.7% |  16.4ms |      13 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:67416:48` |
| 0.7% |  16.4ms |      13 | `checkIdentifier`                      | `./node_modules/typescript/lib/typescript.js:74242:27` |
| 0.7% |  16.4ms |      13 | `invokeOnce`                           | `./node_modules/typescript/lib/typescript.js:71374:24` |
| 0.6% |  15.2ms |      12 | `getMappedType`                        | `./node_modules/typescript/lib/typescript.js:65907:25` |
| 0.6% |  15.2ms |      12 | `getNormalizedType`                    | `./node_modules/typescript/lib/typescript.js:67408:29` |
| 0.6% |  13.9ms |      11 | `getPropertyOfType`                    | `./node_modules/typescript/lib/typescript.js:61994:29` |
| 0.5% |  12.6ms |      10 | `nextTokenWithoutCheck`                | `./node_modules/typescript/lib/typescript.js:33008:33` |
| 0.5% |  12.6ms |      10 | `canHaveJSDoc`                         | `./node_modules/typescript/lib/typescript.js:18835:22` |
| 0.5% |  12.6ms |      10 | `resolveStructuredTypeMembers`         | `./node_modules/typescript/lib/typescript.js:61345:40` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|    % |   Time | Samples | Function                               | Location                                               |
| ---: | -----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 2.4% | 56.8ms |      45 | `recursiveTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:68323:36` |
| 2.3% | 54.3ms |      43 | `checkTypeRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:67445:30` |
| 1.8% | 44.2ms |      35 | `instantiateTypeWorker`                | `./node_modules/typescript/lib/typescript.js:66283:33` |
| 1.6% | 39.1ms |      31 | `isRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:67753:25` |
| 1.5% | 36.6ms |      29 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js:66040:38` |
| 1.3% | 31.6ms |      25 | `scan`                                 | `./node_modules/typescript/lib/typescript.js:12895:16` |
| 1.3% | 31.6ms |      25 | `bind`                                 | `./node_modules/typescript/lib/typescript.js:47793:16` |
| 1.0% | 22.7ms |      18 | `createTypeReference`                  | `./node_modules/typescript/lib/typescript.js:62794:31` |
| 0.8% | 20.2ms |      16 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js:71184:28` |
| 0.7% | 16.4ms |      13 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:67416:48` |
| 0.7% | 16.4ms |      13 | `checkIdentifier`                      | `./node_modules/typescript/lib/typescript.js:74242:27` |
| 0.7% | 16.4ms |      13 | `invokeOnce`                           | `./node_modules/typescript/lib/typescript.js:71374:24` |
| 0.6% | 15.2ms |      12 | `getMappedType`                        | `./node_modules/typescript/lib/typescript.js:65907:25` |
| 0.6% | 15.2ms |      12 | `getNormalizedType`                    | `./node_modules/typescript/lib/typescript.js:67408:29` |
| 0.6% | 13.9ms |      11 | `getPropertyOfType`                    | `./node_modules/typescript/lib/typescript.js:61994:29` |
| 0.5% | 12.6ms |      10 | `nextTokenWithoutCheck`                | `./node_modules/typescript/lib/typescript.js:33008:33` |
| 0.5% | 12.6ms |      10 | `canHaveJSDoc`                         | `./node_modules/typescript/lib/typescript.js:18835:22` |
| 0.5% | 12.6ms |      10 | `resolveStructuredTypeMembers`         | `./node_modules/typescript/lib/typescript.js:61345:40` |
| 0.5% | 12.6ms |      10 | `compareSignaturesRelated`             | `./node_modules/typescript/lib/typescript.js:67064:36` |
| 0.5% | 12.6ms |      10 | `structuredTypeRelatedToWorker`        | `./node_modules/typescript/lib/typescript.js:68537:43` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 7.8% | 186.9ms |     148 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % |   Time | Samples | Function              | Location                                   |
| ---: | -----: | ------: | --------------------- | ------------------------------------------ |
| 3.4% | 82.1ms |      65 | `wrapSafe`            | `node:internal/modules/cjs/loader:1671:18` |
| 0.3% |  6.3ms |       5 | `tryStatSync`         | `node:fs:389:21`                           |
| 0.2% |  5.1ms |       4 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`            |
| 0.1% |  2.5ms |       2 | `createUnsafeBuffer`  | `node:internal/buffer:1082:28`             |
| 0.1% |  2.5ms |       2 | `slice`               | `node:buffer:640:12`                       |
| 0.1% |  1.3ms |       1 | `readFileSync`        | `node:fs:433:22`                           |
| 0.1% |  1.3ms |       1 | `(anonymous)`         | `node:internal/crypto/keys:1:1`            |
| 0.1% |  1.3ms |       1 | `toPathIfFileURL`     | `node:internal/url:1671:25`                |
| 0.1% |  1.3ms |       1 | `wrappedFn`           | `node:internal/errors:535:21`              |
| 0.1% |  1.3ms |       1 | `isUint8Array`        | `node:internal/util/types:13:22`           |
| 0.1% |  1.3ms |       1 | `FastBuffer`          | `node:internal/buffer:956:1`               |

##### Native

|    % |   Time | Samples | Function       | Location    |
| ---: | -----: | ------: | -------------- | ----------- |
| 0.4% | 10.1ms |       8 | `stat`         | `<unknown>` |
| 0.4% |  8.8ms |       7 | `open`         | `<unknown>` |
| 0.2% |  3.8ms |       3 | `readFileUtf8` | `<unknown>` |
| 0.1% |  1.3ms |       1 | `read`         | `<unknown>` |
| 0.1% |  1.3ms |       1 | `realpath`     | `<unknown>` |
| 0.1% |  1.3ms |       1 | `(program)`    | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 82.1ms |      65 | `node:internal/modules/cjs/loader:1713` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 42.2% | 24.0ms |      19 | `./node_modules/typescript/lib/typescript.js:68336` |
| 13.3% |  7.6ms |       6 | `./node_modules/typescript/lib/typescript.js:68323` |
|  4.4% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:68365` |
|  4.4% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:68383` |
|  4.4% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:68358` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 65.1% | 35.4ms |      28 | `./node_modules/typescript/lib/typescript.js:67445` |
| 18.6% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:67464` |
|  9.3% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67528` |
|  4.7% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67462` |
|  2.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67473` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:66283:33`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 48.6% | 21.5ms |      17 | `./node_modules/typescript/lib/typescript.js:66299` |
|  8.6% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:66283` |
|  8.6% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:66312` |
|  5.7% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66306` |
|  5.7% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66293` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 16.1% | 6.3ms |       5 | `./node_modules/typescript/lib/typescript.js:67783` |
| 12.9% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67753` |
|  9.7% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:67808` |
|  9.7% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:67850` |
|  6.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67820` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66040:38`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 62.1% | 22.7ms |      18 | `./node_modules/typescript/lib/typescript.js:66070` |
| 10.3% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:62759` |
|  6.9% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66079` |
|  3.4% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66062` |
|  3.4% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65908` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 16.0% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:12915` |
| 12.0% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:14635` |
|  8.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:13045` |
|  4.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:13350` |
|  4.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:13212` |

##### `bind` (`./node_modules/typescript/lib/typescript.js:47793:16`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 60.0% | 18.9ms |      15 | `./node_modules/typescript/lib/typescript.js:47801` |
|  8.0% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:47802` |
|  8.0% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:47807` |
|  4.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:48751` |
|  4.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:47809` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 50.0% | 11.4ms |       9 | `./node_modules/typescript/lib/typescript.js:62796` |
| 44.4% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:62799` |
|  5.6% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:62800` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 25.0% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:71207` |
| 18.8% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:71184` |
| 12.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71212` |
| 12.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71352` |
| 12.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71185` |

##### `getNormalizedUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:67416:48`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 30.8% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67416` |
| 23.1% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:67432` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67222` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67421` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61937` |

##### `checkIdentifier` (`./node_modules/typescript/lib/typescript.js:74242:27`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 23.1% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:74342` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:74353` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:74344` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:74278` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:74339` |

##### `invokeOnce` (`./node_modules/typescript/lib/typescript.js:71374:24`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71375` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71392` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71387` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71389` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:71386` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:65907:25`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 33.3% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:65907` |
| 33.3% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:65936` |
| 16.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:65908` |
|  8.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65916` |
|  8.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65910` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 15.2ms |      12 | `./node_modules/typescript/lib/typescript.js:67410` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:61994:29`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 45.5% | 6.3ms |       5 | `./node_modules/typescript/lib/typescript.js:61999` |
| 27.3% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:61996` |
| 18.2% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:62000` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61936` |

##### `nextTokenWithoutCheck` (`./node_modules/typescript/lib/typescript.js:33008:33`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 12.6ms |      10 | `./node_modules/typescript/lib/typescript.js:33009` |

##### `canHaveJSDoc` (`./node_modules/typescript/lib/typescript.js:18835:22`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 80.0% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:18836` |
| 20.0% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:18835` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 60.0% | 7.6ms |       6 | `./node_modules/typescript/lib/typescript.js:61345` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:61355` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:61349` |

##### `compareSignaturesRelated` (`./node_modules/typescript/lib/typescript.js:67064:36`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67153` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67068` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67120` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67126` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67071` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:68639` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:68967` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:68542` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:68997` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:68985` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 10.1ms |       8 | 1746     |

##### `open` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 8.8ms |       7 | 560      |

##### `tryStatSync` (`node:fs:389:21`)

|      % |  Time | Samples | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 6.3ms |       5 | `node:fs:390` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 5.1ms |       4 | `node:internal/fs/utils:553` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 440      |

##### `createUnsafeBuffer` (`node:internal/buffer:1082:28`)

|      % |  Time | Samples | Location                    |
| -----: | ----: | ------: | --------------------------- |
| 100.0% | 2.5ms |       2 | `node:internal/buffer:1089` |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 2.5ms |       2 | `node:buffer:640` |

##### `readFileSync` (`node:fs:433:22`)

|      % |  Time | Samples | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 1.3ms |       1 | `node:fs:440` |

##### `(anonymous)` (`node:internal/crypto/keys:1:1`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/crypto/keys:103` |

##### `toPathIfFileURL` (`node:internal/url:1671:25`)

|      % |  Time | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1.3ms |       1 | `node:internal/url:1672` |

##### `wrappedFn` (`node:internal/errors:535:21`)

|      % |  Time | Samples | Location                   |
| -----: | ----: | ------: | -------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/errors:535` |

##### `isUint8Array` (`node:internal/util/types:13:22`)

|      % |  Time | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/util/types:14` |

##### `FastBuffer` (`node:internal/buffer:956:1`)

|      % |  Time | Samples | Location                   |
| -----: | ----: | ------: | -------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/buffer:956` |

##### `read` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 736      |

##### `realpath` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 2853     |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 82.1ms |      65 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

|     % |   Time | Samples | Caller               | Location                                               |
| ----: | -----: | ------: | -------------------- | ------------------------------------------------------ |
| 97.8% | 55.6ms |      44 | `isRelatedTo`        | `./node_modules/typescript/lib/typescript.js:67753:25` |
|  2.2% |  1.3ms |       1 | `checkTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67445:30` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

|     % |   Time | Samples | Caller                                     | Location                                               |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------ |
| 90.7% | 49.2ms |      39 | `isTypeRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:67361:27` |
|  7.0% |  3.8ms |       3 | `checkTypeAssignableTo`                    | `./node_modules/typescript/lib/typescript.js:66493:33` |
|  2.3% |  1.3ms |       1 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:66509:52` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:66283:33`)

|      % |   Time | Samples | Caller                     | Location                                               |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 44.2ms |      35 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:66266:36` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Caller                        | Location                                               |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 61.3% | 24.0ms |      19 | `checkTypeRelatedTo`          | `./node_modules/typescript/lib/typescript.js:67445:30` |
| 12.9% |  5.1ms |       4 | `isRelatedToWorker2`          | `./node_modules/typescript/lib/typescript.js:69638:34` |
|  9.7% |  3.8ms |       3 | `typeArgumentsRelatedTo`      | `./node_modules/typescript/lib/typescript.js:68233:36` |
|  6.5% |  2.5ms |       2 | `eachTypeRelatedToType`       | `./node_modules/typescript/lib/typescript.js:68195:35` |
|  3.2% |  1.3ms |       1 | `isPropertySymbolTypeRelated` | `./node_modules/typescript/lib/typescript.js:69211:41` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66040:38`)

|      % |   Time | Samples | Caller                  | Location                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 36.6ms |      29 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:66283:33` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

|      % |   Time | Samples | Caller                  | Location                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 31.6ms |      25 | `nextTokenWithoutCheck` | `./node_modules/typescript/lib/typescript.js:33008:33` |

##### `bind` (`./node_modules/typescript/lib/typescript.js:47793:16`)

|     % |   Time | Samples | Caller                      | Location                                               |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 48.0% | 15.2ms |      12 | `visitNode2`                | `./node_modules/typescript/lib/typescript.js:31772:20` |
| 32.0% | 10.1ms |       8 | `forEach`                   | `./node_modules/typescript/lib/typescript.js:2378:17`  |
| 16.0% |  5.1ms |       4 | `bindParameterFlow`         | `./node_modules/typescript/lib/typescript.js:47252:29` |
|  4.0% |  1.3ms |       1 | `bindLogicalLikeExpression` | `./node_modules/typescript/lib/typescript.js:47050:37` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Caller                          | Location                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 77.8% | 17.7ms |      14 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:63796:41` |
| 22.2% |  5.1ms |       4 | `getTypeWithThisArgument`       | `./node_modules/typescript/lib/typescript.js:60454:35` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|     % |  Time | Samples | Caller                        | Location                                               |
| ----: | ----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 25.0% | 5.1ms |       4 | `inferFromMatchingTypes`      | `./node_modules/typescript/lib/typescript.js:71402:36` |
| 18.8% | 3.8ms |       3 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:71429:41` |
| 18.8% | 3.8ms |       3 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:71715:33` |
| 18.8% | 3.8ms |       3 | `inferFromTypeArguments`      | `./node_modules/typescript/lib/typescript.js:71419:36` |
|  6.3% | 1.3ms |       1 | `inferFromTypes`              | `./node_modules/typescript/lib/typescript.js:71184:28` |

##### `getNormalizedUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:67416:48`)

|      % |   Time | Samples | Caller              | Location                                               |
| -----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 16.4ms |      13 | `getNormalizedType` | `./node_modules/typescript/lib/typescript.js:67408:29` |

##### `checkIdentifier` (`./node_modules/typescript/lib/typescript.js:74242:27`)

|     % |   Time | Samples | Caller                  | Location                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 92.3% | 15.2ms |      12 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:82811:33` |
|  7.7% |  1.3ms |       1 | `checkExpression`       | `./node_modules/typescript/lib/typescript.js:82771:27` |

##### `invokeOnce` (`./node_modules/typescript/lib/typescript.js:71374:24`)

|     % |   Time | Samples | Caller                 | Location                                               |
| ----: | -----: | ------: | ---------------------- | ------------------------------------------------------ |
| 84.6% | 13.9ms |      11 | `inferFromTypes`       | `./node_modules/typescript/lib/typescript.js:71184:28` |
|  7.7% |  1.3ms |       1 | `inferToMultipleTypes` | `./node_modules/typescript/lib/typescript.js:71462:34` |
|  7.7% |  1.3ms |       1 | `inferTypes`           | `./node_modules/typescript/lib/typescript.js:71175:22` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:65907:25`)

|     % |   Time | Samples | Caller                            | Location                                               |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 66.7% | 10.1ms |       8 | `getMappedType`                   | `./node_modules/typescript/lib/typescript.js:65907:25` |
|  8.3% |  1.3ms |       1 | `instantiateTypeWorker`           | `./node_modules/typescript/lib/typescript.js:66283:33` |
|  8.3% |  1.3ms |       1 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:66242:59` |
|  8.3% |  1.3ms |       1 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:66062:49` |
|  8.3% |  1.3ms |       1 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:66239:43` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

|      % |   Time | Samples | Caller        | Location                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 15.2ms |      12 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:67753:25` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:61994:29`)

|     % |  Time | Samples | Caller                              | Location                                               |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 27.3% | 3.8ms |       3 | `inferFromProperties`               | `./node_modules/typescript/lib/typescript.js:71715:33` |
| 27.3% | 3.8ms |       3 | `getUnmatchedProperties`            | `./node_modules/typescript/lib/typescript.js:70992:35` |
| 27.3% | 3.8ms |       3 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:61753:45` |
|  9.1% | 1.3ms |       1 | `getPropertyTypeForIndexType`       | `./node_modules/typescript/lib/typescript.js:64803:39` |
|  9.1% | 1.3ms |       1 | `propertiesRelatedTo`               | `./node_modules/typescript/lib/typescript.js:69333:33` |

##### `nextTokenWithoutCheck` (`./node_modules/typescript/lib/typescript.js:33008:33`)

|      % |   Time | Samples | Caller      | Location                                               |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 12.6ms |      10 | `nextToken` | `./node_modules/typescript/lib/typescript.js:33015:21` |

##### `canHaveJSDoc` (`./node_modules/typescript/lib/typescript.js:18835:22`)

|     % |   Time | Samples | Caller                     | Location                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 90.0% | 11.4ms |       9 | `hasJSDocNodes`            | `./node_modules/typescript/lib/typescript.js:16113:23` |
| 10.0% |  1.3ms |       1 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:88208:36` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

|     % |  Time | Samples | Caller                          | Location                                               |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 40.0% | 5.1ms |       4 | `getSignaturesOfStructuredType` | `./node_modules/typescript/lib/typescript.js:62037:41` |
| 30.0% | 3.8ms |       3 | `isWeakType`                    | `./node_modules/typescript/lib/typescript.js:69852:22` |
| 30.0% | 3.8ms |       3 | `getPropertyOfType`             | `./node_modules/typescript/lib/typescript.js:61994:29` |

##### `compareSignaturesRelated` (`./node_modules/typescript/lib/typescript.js:67064:36`)

|     % |   Time | Samples | Caller                     | Location                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 80.0% | 10.1ms |       8 | `signatureRelatedTo`       | `./node_modules/typescript/lib/typescript.js:69635:32` |
| 20.0% |  2.5ms |       2 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:67064:36` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

|      % |   Time | Samples | Caller                    | Location                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 12.6ms |      10 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68467:37` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location          |
| -----: | -----: | ------: | ---------- | ----------------- |
| 100.0% | 10.1ms |       8 | `statSync` | `node:fs:1745:18` |

##### `open` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location         |
| -----: | ----: | ------: | ---------- | ---------------- |
| 100.0% | 8.8ms |       7 | `openSync` | `node:fs:559:18` |

##### `tryStatSync` (`node:fs:389:21`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 6.3ms |       5 | `readFileSync` | `node:fs:433:22` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |  Time | Samples | Caller     | Location          |
| -----: | ----: | ------: | ---------- | ----------------- |
| 100.0% | 5.1ms |       4 | `statSync` | `node:fs:1745:18` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 3.8ms |       3 | `readFileSync` | `node:fs:433:22` |

##### `createUnsafeBuffer` (`node:internal/buffer:1082:28`)

|      % |  Time | Samples | Caller     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 2.5ms |       2 | `allocate` | `node:buffer:436:18` |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Caller     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 2.5ms |       2 | `toString` | `node:buffer:839:46` |

##### `readFileSync` (`node:fs:433:22`)

|      % |  Time | Samples | Caller            | Location                                   |
| -----: | ----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `(anonymous)` (`node:internal/crypto/keys:1:1`)

|      % |  Time | Samples | Caller                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 1.3ms |       1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `toPathIfFileURL` (`node:internal/url:1671:25`)

|      % |  Time | Samples | Caller        | Location                        |
| -----: | ----: | ------: | ------------- | ------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:internal/fs/utils:730:42` |

##### `wrappedFn` (`node:internal/errors:535:21`)

|      % |  Time | Samples | Caller     | Location          |
| -----: | ----: | ------: | ---------- | ----------------- |
| 100.0% | 1.3ms |       1 | `statSync` | `node:fs:1745:18` |

##### `isUint8Array` (`node:internal/util/types:13:22`)

|      % |  Time | Samples | Caller        | Location                        |
| -----: | ----: | ------: | ------------- | ------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:internal/fs/utils:708:38` |

##### `FastBuffer` (`node:internal/buffer:956:1`)

|      % |  Time | Samples | Caller     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 1.3ms |       1 | `allocate` | `node:buffer:436:18` |

##### `read` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location         |
| -----: | ----: | ------: | ---------- | ---------------- |
| 100.0% | 1.3ms |       1 | `readSync` | `node:fs:695:18` |

##### `realpath` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location          |
| -----: | ----: | ------: | ------------- | ----------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:fs:2851:23` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 90.7% | 2.17s |   1,717 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                               |
| 90.6% | 2.17s |   1,715 | `(anonymous)`                              | `./cpuprofile-run.mjs`                                  |
| 81.5% | 1.95s |   1,543 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2378:17`   |
| 70.0% | 1.67s |   1,325 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2625:17`   |
| 69.9% | 1.67s |   1,324 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124967:37` |
| 69.9% | 1.67s |   1,324 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:124947:36` |
| 69.9% | 1.67s |   1,324 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |
| 69.9% | 1.67s |   1,324 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:125252:34` |
| 69.9% | 1.67s |   1,324 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:124963:45` |
| 69.9% | 1.67s |   1,324 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:124957:41` |
| 69.9% | 1.67s |   1,324 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124899:76` |
| 69.9% | 1.67s |   1,323 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:124895:32` |
| 69.9% | 1.67s |   1,323 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 63.8% | 1.52s |   1,207 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 63.8% | 1.52s |   1,207 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:88552:27`  |
| 63.8% | 1.52s |   1,207 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:88649:47`  |
| 63.8% | 1.52s |   1,207 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:88656:32`  |
| 63.8% | 1.52s |   1,207 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:88635:27`  |
| 62.7% | 1.50s |   1,187 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:88208:36`  |
| 62.7% | 1.50s |   1,187 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:88199:30`  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 81.5% | 1.95s |   1,543 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2378:17`   |
| 70.0% | 1.67s |   1,325 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2625:17`   |
| 69.9% | 1.67s |   1,324 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124967:37` |
| 69.9% | 1.67s |   1,324 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:124947:36` |
| 69.9% | 1.67s |   1,324 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |
| 69.9% | 1.67s |   1,324 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:125252:34` |
| 69.9% | 1.67s |   1,324 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:124963:45` |
| 69.9% | 1.67s |   1,324 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:124957:41` |
| 69.9% | 1.67s |   1,324 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124899:76` |
| 69.9% | 1.67s |   1,323 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:124895:32` |
| 69.9% | 1.67s |   1,323 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 63.8% | 1.52s |   1,207 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 63.8% | 1.52s |   1,207 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:88552:27`  |
| 63.8% | 1.52s |   1,207 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:88649:47`  |
| 63.8% | 1.52s |   1,207 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:88656:32`  |
| 63.8% | 1.52s |   1,207 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:88635:27`  |
| 62.7% | 1.50s |   1,187 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:88208:36`  |
| 62.7% | 1.50s |   1,187 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:88199:30`  |
| 48.0% | 1.15s |     908 | `checkBlock`                               | `./node_modules/typescript/lib/typescript.js:85011:22`  |
| 46.0% | 1.10s |     870 | `checkExpressionWorker`                    | `./node_modules/typescript/lib/typescript.js:82811:33`  |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 7.8% | 186.9ms |     148 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % |    Time | Samples | Function              | Location                                   |
| ---: | ------: | ------: | --------------------- | ------------------------------------------ |
| 4.2% | 101.0ms |      80 | `(anonymous)`         | `node:internal/modules/cjs/loader:1878:37` |
| 4.2% | 101.0ms |      80 | `(anonymous)`         | `node:internal/modules/cjs/loader:1490:33` |
| 4.2% | 101.0ms |      80 | `(anonymous)`         | `node:internal/modules/cjs/loader:1193:24` |
| 4.2% | 101.0ms |      80 | `wrapModuleLoad`      | `node:internal/modules/cjs/loader:237:24`  |
| 4.2% | 101.0ms |      80 | `(anonymous)`         | `node:internal/modules/cjs/loader:1519:36` |
| 4.2% | 101.0ms |      80 | `require`             | `node:internal/modules/helpers:146:19`     |
| 4.0% |  96.0ms |      76 | `(anonymous)`         | `node:internal/modules/cjs/loader:1731:37` |
| 3.4% |  82.1ms |      65 | `wrapSafe`            | `node:internal/modules/cjs/loader:1671:18` |
| 1.1% |  25.3ms |      20 | `readFileSync`        | `node:fs:433:22`                           |
| 0.8% |  18.9ms |      15 | `statSync`            | `node:fs:1745:18`                          |
| 0.4% |   8.8ms |       7 | `openSync`            | `node:fs:559:18`                           |
| 0.3% |   6.3ms |       5 | `tryStatSync`         | `node:fs:389:21`                           |
| 0.2% |   5.1ms |       4 | `defaultLoadImpl`     | `node:internal/modules/cjs/loader:1112:25` |
| 0.2% |   5.1ms |       4 | `loadSource`          | `node:internal/modules/cjs/loader:1797:20` |
| 0.2% |   5.1ms |       4 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`            |
| 0.2% |   3.8ms |       3 | `allocate`            | `node:buffer:436:18`                       |
| 0.2% |   3.8ms |       3 | `allocUnsafe`         | `node:buffer:411:42`                       |
| 0.2% |   3.8ms |       3 | `tryCreateBuffer`     | `node:fs:397:25`                           |
| 0.2% |   3.8ms |       3 | `wrappedFn`           | `node:internal/errors:535:21`              |
| 0.1% |   2.5ms |       2 | `createUnsafeBuffer`  | `node:internal/buffer:1082:28`             |

##### Native

|    % |   Time | Samples | Function       | Location    |
| ---: | -----: | ------: | -------------- | ----------- |
| 0.4% | 10.1ms |       8 | `stat`         | `<unknown>` |
| 0.4% |  8.8ms |       7 | `open`         | `<unknown>` |
| 0.2% |  3.8ms |       3 | `readFileUtf8` | `<unknown>` |
| 0.1% |  1.3ms |       1 | `read`         | `<unknown>` |
| 0.1% |  1.3ms |       1 | `realpath`     | `<unknown>` |
| 0.1% |  1.3ms |       1 | `(program)`    | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |  Time | Samples | Caller        | Location               |
| ----: | ----: | ------: | ------------- | ---------------------- |
| 99.9% | 2.17s |   1,715 | `(anonymous)` | `./cpuprofile-run.mjs` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

|     % |    Time | Samples | Caller                         | Location                                                |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------- |
| 58.7% |   1.14s |     906 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:85011:22`  |
| 37.4% | 728.5ms |     577 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 30.3% | 589.7ms |     467 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:85407:40`  |
| 16.1% | 314.4ms |     249 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:123840:23` |
| 12.6% | 245.0ms |     194 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js:86712:33`  |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

|     % |  Time | Samples | Caller                              | Location                                                |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 99.8% | 1.67s |   1,322 | `getDiagnosticsHelper`              | `./node_modules/typescript/lib/typescript.js:124895:32` |
|  0.1% | 1.3ms |       1 | `getRegularExpressionsForWildcards` | `./node_modules/typescript/lib/typescript.js:22090:43`  |
|  0.1% | 1.3ms |       1 | `filterOwnedJSDocTags`              | `./node_modules/typescript/lib/typescript.js:18930:30`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|      % |  Time | Samples | Caller                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:124947:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

|      % |  Time | Samples | Caller                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:125252:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

|      % |  Time | Samples | Caller                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124963:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

|      % |  Time | Samples | Caller                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124957:41` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124899:76` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

|      % |  Time | Samples | Caller    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2625:17` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,323 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:124909:34` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

|      % |  Time | Samples | Caller             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 1.67s |   1,323 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.52s |   1,207 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:88552:27` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

|      % |  Time | Samples | Caller                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.52s |   1,207 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:88649:47` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

|      % |  Time | Samples | Caller                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.52s |   1,207 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:88656:32` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.52s |   1,207 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:88635:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.52s |   1,207 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124967:37` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

|      % |  Time | Samples | Caller               | Location                                               |
| -----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 100.0% | 1.50s |   1,187 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:88199:30` |
|   0.1% | 1.3ms |       1 | `forEach`            | `./node_modules/typescript/lib/typescript.js:2378:17`  |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

|     % |    Time | Samples | Caller                                                 | Location                                               |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 99.7% |   1.49s |   1,183 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2378:17`  |
| 51.1% | 766.4ms |     607 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:81135:64` |
| 14.4% | 215.9ms |     171 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:87285:37` |
| 13.6% | 204.5ms |     162 | `checkFunctionOrMethodDeclaration`                     | `./node_modules/typescript/lib/typescript.js:84693:44` |
| 11.0% | 164.1ms |     130 | `checkModuleDeclaration`                               | `./node_modules/typescript/lib/typescript.js:87555:34` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js:85011:22`)

|     % |   Time | Samples | Caller                     | Location                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 99.9% |  1.15s |     907 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:88208:36` |
|  3.3% | 37.9ms |      30 | `checkTryStatement`        | `./node_modules/typescript/lib/typescript.js:86397:29` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js:82811:33`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.10s |     870 | `checkExpression` | `./node_modules/typescript/lib/typescript.js:82771:27` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|      % |    Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 101.0ms |      80 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |    Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 101.0ms |      80 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |    Time | Samples | Caller           | Location                                  |
| -----: | ------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 101.0ms |      80 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |    Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 101.0ms |      80 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |    Time | Samples | Caller    | Location                               |
| -----: | ------: | ------: | --------- | -------------------------------------- |
| 100.0% | 101.0ms |      80 | `require` | `node:internal/modules/helpers:146:19` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |    Time | Samples | Caller             | Location                                              |
| -----: | ------: | ------: | ------------------ | ----------------------------------------------------- |
| 100.0% | 101.0ms |      80 | `typeCheckProject` | `./tsc-workload.mjs:3:33`                             |
|   1.3% |   1.3ms |       1 | `getNodeSystem`    | `./node_modules/typescript/lib/typescript.js:8489:25` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 96.0ms |      76 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 82.1ms |      65 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `readFileSync` (`node:fs:433:22`)

|     % |   Time | Samples | Caller            | Location                                              |
| ----: | -----: | ------: | ----------------- | ----------------------------------------------------- |
| 80.0% | 20.2ms |      16 | `readFileWorker`  | `./node_modules/typescript/lib/typescript.js:8751:28` |
| 20.0% |  5.1ms |       4 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`            |

##### `statSync` (`node:fs:1745:18`)

|      % |   Time | Samples | Caller     | Location                                              |
| -----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 18.9ms |      15 | `statSync` | `./node_modules/typescript/lib/typescript.js:8631:22` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location          |
| -----: | -----: | ------: | ---------- | ----------------- |
| 100.0% | 10.1ms |       8 | `statSync` | `node:fs:1745:18` |

##### `openSync` (`node:fs:559:18`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 8.8ms |       7 | `readFileSync` | `node:fs:433:22` |

##### `open` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location         |
| -----: | ----: | ------: | ---------- | ---------------- |
| 100.0% | 8.8ms |       7 | `openSync` | `node:fs:559:18` |

##### `tryStatSync` (`node:fs:389:21`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 6.3ms |       5 | `readFileSync` | `node:fs:433:22` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 5.1ms |       4 | `loadSource` | `node:internal/modules/cjs/loader:1797:20` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 5.1ms |       4 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |  Time | Samples | Caller     | Location          |
| -----: | ----: | ------: | ---------- | ----------------- |
| 100.0% | 5.1ms |       4 | `statSync` | `node:fs:1745:18` |

##### `allocate` (`node:buffer:436:18`)

|      % |  Time | Samples | Caller        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 3.8ms |       3 | `allocUnsafe` | `node:buffer:411:42` |

##### `allocUnsafe` (`node:buffer:411:42`)

|      % |  Time | Samples | Caller            | Location         |
| -----: | ----: | ------: | ----------------- | ---------------- |
| 100.0% | 3.8ms |       3 | `tryCreateBuffer` | `node:fs:397:25` |

##### `tryCreateBuffer` (`node:fs:397:25`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 3.8ms |       3 | `readFileSync` | `node:fs:433:22` |

##### `wrappedFn` (`node:internal/errors:535:21`)

|      % |  Time | Samples | Caller        | Location                        |
| -----: | ----: | ------: | ------------- | ------------------------------- |
| 100.0% | 3.8ms |       3 | `statSync`    | `node:fs:1745:18`               |
|  33.3% | 1.3ms |       1 | `(anonymous)` | `node:internal/fs/utils:730:42` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 3.8ms |       3 | `readFileSync` | `node:fs:433:22` |

##### `createUnsafeBuffer` (`node:internal/buffer:1082:28`)

|      % |  Time | Samples | Caller     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 2.5ms |       2 | `allocate` | `node:buffer:436:18` |

##### `read` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location         |
| -----: | ----: | ------: | ---------- | ---------------- |
| 100.0% | 1.3ms |       1 | `readSync` | `node:fs:695:18` |

##### `realpath` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location          |
| -----: | ----: | ------: | ------------- | ----------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:fs:2851:23` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 77.1% |   1.67s |   1,323 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 17.6% | 382.6ms |     303 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js:123840:23` |
|  4.7% | 101.0ms |      80 | `require`                          | `node:internal/modules/helpers:146:19`                  |
|  0.6% |  13.9ms |      11 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js:41625:42`  |

##### `(anonymous)` (`./cpuprofile-run.mjs`)

|      % |  Time | Samples | Callee             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 2.17s |   1,715 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

|     % |    Time | Samples | Callee               | Location                                                |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------- |
| 76.7% |   1.49s |   1,183 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:88199:30`  |
| 13.2% | 256.3ms |     203 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124028:24` |
|  6.6% | 128.8ms |     102 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:46417:21`  |
|  5.9% | 114.9ms |      91 | `bind`               | `./node_modules/typescript/lib/typescript.js:47793:16`  |
|  3.6% |  69.4ms |      55 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:125782:35` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

|     % |  Time | Samples | Callee        | Location                                                |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 99.9% | 1.67s |   1,324 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124899:76` |
|  0.1% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:22094:25`  |
|  0.1% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:18932:28`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|     % |    Time | Samples | Callee             | Location                                                |
| ----: | ------: | ------: | ------------------ | ------------------------------------------------------- |
| 91.2% |   1.52s |   1,207 | `getDiagnostics2`  | `./node_modules/typescript/lib/typescript.js:88635:27`  |
|  8.8% | 146.5ms |     116 | `getTypeChecker`   | `./node_modules/typescript/lib/typescript.js:124848:26` |
|  0.1% |   1.3ms |       1 | `skipTypeChecking` | `./node_modules/typescript/lib/typescript.js:22519:26`  |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

|      % |  Time | Samples | Callee                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:124947:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

|      % |  Time | Samples | Callee                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

|      % |  Time | Samples | Callee                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:125252:34` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|      % |  Time | Samples | Callee                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124963:45` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

|      % |  Time | Samples | Callee                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,324 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124957:41` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

|     % |  Time | Samples | Callee    | Location                                              |
| ----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 99.9% | 1.67s |   1,322 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2625:17` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

|      % |  Time | Samples | Callee                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 1.67s |   1,323 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:124895:32` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|     % |    Time | Samples | Callee               | Location                                               |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------ |
| 52.0% | 792.9ms |     628 | `checkDeferredNodes` | `./node_modules/typescript/lib/typescript.js:88492:30` |
| 47.8% | 728.5ms |     577 | `forEach`            | `./node_modules/typescript/lib/typescript.js:2378:17`  |
|  0.2% |   2.5ms |       2 | `addLazyDiagnostic`  | `./node_modules/typescript/lib/typescript.js:88652:25` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

|      % |  Time | Samples | Callee                  | Location                                               |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 1.52s |   1,207 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:88583:33` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

|      % |  Time | Samples | Callee            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.52s |   1,207 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:88552:27` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

|      % |  Time | Samples | Callee                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.52s |   1,207 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:88649:47` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.52s |   1,207 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:88656:32` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

|     % |    Time | Samples | Callee                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 76.4% |   1.15s |     907 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js:85011:22` |
| 39.4% | 590.9ms |     468 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js:85414:34` |
| 39.3% | 589.7ms |     467 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js:85396:36` |
| 24.7% | 370.0ms |     293 | `checkExpressionStatement` | `./node_modules/typescript/lib/typescript.js:85419:36` |
| 21.6% | 323.2ms |     256 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js:83518:34` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

|      % |  Time | Samples | Callee                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.50s |   1,187 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:88208:36` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js:85011:22`)

|     % |  Time | Samples | Callee                    | Location                                               |
| ----: | ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 99.8% | 1.14s |     906 | `forEach`                 | `./node_modules/typescript/lib/typescript.js:2378:17`  |
|  0.1% | 1.3ms |       1 | `isSourceFile`            | `./node_modules/typescript/lib/typescript.js:30503:22` |
|  0.1% | 1.3ms |       1 | `isFunctionOrModuleBlock` | `./node_modules/typescript/lib/typescript.js:15584:33` |
|  0.1% | 1.3ms |       1 | `checkSourceElement`      | `./node_modules/typescript/lib/typescript.js:88199:30` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js:82811:33`)

|     % |    Time | Samples | Callee                          | Location                                               |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 86.4% | 949.5ms |     752 | `checkCallExpression`           | `./node_modules/typescript/lib/typescript.js:79584:31` |
| 32.6% | 358.6ms |     284 | `checkPropertyAccessExpression` | `./node_modules/typescript/lib/typescript.js:77069:41` |
| 28.6% | 314.4ms |     249 | `checkObjectLiteral`            | `./node_modules/typescript/lib/typescript.js:76097:30` |
| 13.2% | 145.2ms |     115 | `checkArrayLiteral`             | `./node_modules/typescript/lib/typescript.js:75934:29` |
| 11.6% | 127.5ms |     101 | `checkIdentifier`               | `./node_modules/typescript/lib/typescript.js:74242:27` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |   Time | Samples | Callee        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 95.0% | 96.0ms |      76 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
|  5.0% |  5.1ms |       4 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 101.0ms |      80 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |    Time | Samples | Callee                 | Location                                   |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 101.0ms |      80 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   1.3% |   1.3ms |       1 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 101.0ms |      80 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |    Time | Samples | Callee           | Location                                  |
| -----: | ------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 101.0ms |      80 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 101.0ms |      80 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |   Time | Samples | Callee        | Location                                          |
| ----: | -----: | ------: | ------------- | ------------------------------------------------- |
| 85.5% | 82.1ms |      65 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`        |
| 14.5% | 13.9ms |      11 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |

##### `readFileSync` (`node:fs:433:22`)

|     % |  Time | Samples | Callee            | Location         |
| ----: | ----: | ------: | ----------------- | ---------------- |
| 35.0% | 8.8ms |       7 | `openSync`        | `node:fs:559:18` |
| 25.0% | 6.3ms |       5 | `tryStatSync`     | `node:fs:389:21` |
| 15.0% | 3.8ms |       3 | `readFileUtf8`    | `<unknown>`      |
| 15.0% | 3.8ms |       3 | `tryCreateBuffer` | `node:fs:397:25` |
|  5.0% | 1.3ms |       1 | `tryReadSync`     | `node:fs:412:21` |

##### `statSync` (`node:fs:1745:18`)

|     % |   Time | Samples | Callee                | Location                        |
| ----: | -----: | ------: | --------------------- | ------------------------------- |
| 53.3% | 10.1ms |       8 | `stat`                | `<unknown>`                     |
| 26.7% |  5.1ms |       4 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |
| 20.0% |  3.8ms |       3 | `wrappedFn`           | `node:internal/errors:535:21`   |

##### `openSync` (`node:fs:559:18`)

|      % |  Time | Samples | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 8.8ms |       7 | `open` | `<unknown>` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |  Time | Samples | Callee         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 5.1ms |       4 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |  Time | Samples | Callee            | Location                                   |
| -----: | ----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 5.1ms |       4 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `allocate` (`node:buffer:436:18`)

|     % |  Time | Samples | Callee               | Location                       |
| ----: | ----: | ------: | -------------------- | ------------------------------ |
| 66.7% | 2.5ms |       2 | `createUnsafeBuffer` | `node:internal/buffer:1082:28` |
| 33.3% | 1.3ms |       1 | `FastBuffer`         | `node:internal/buffer:956:1`   |

##### `allocUnsafe` (`node:buffer:411:42`)

|      % |  Time | Samples | Callee     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 3.8ms |       3 | `allocate` | `node:buffer:436:18` |

##### `tryCreateBuffer` (`node:fs:397:25`)

|      % |  Time | Samples | Callee        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 3.8ms |       3 | `allocUnsafe` | `node:buffer:411:42` |

##### `wrappedFn` (`node:internal/errors:535:21`)

|     % |  Time | Samples | Callee        | Location                        |
| ----: | ----: | ------: | ------------- | ------------------------------- |
| 66.7% | 2.5ms |       2 | `(anonymous)` | `node:internal/fs/utils:730:42` |
| 33.3% | 1.3ms |       1 | `(anonymous)` | `node:internal/fs/utils:708:38` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./cpuprofile-run.mjs`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.4% | 82.1ms |      65 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% | 11.4ms |       9 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.3% |  7.6ms |       6 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  5.1ms |       4 | `parseExpected` (`./node_modules/typescript/lib/typescript.js:33091:25`) ← `parseObjectLiteralExpression` (36477:40) ← `parsePrimaryExpression` (36337:34) ← `parseMemberExpressionOrHigher` (35794:41) ← `parseLeftHandSideExpressionOrHigher` (35774:47) ← `parseUpdateExpression` (35755:33) ← `parseUnaryExpressionOrHigher` (35681:40) ← `parseBinaryExpressionOrHigher` (35604:41) ← `parseAssignmentExpressionOrHigher` (35267:45) ← `parseArgumentOrArrayLiteralElement` (36408:46) ← `doOutsideOfContext` (32890:30) ← `parseArgumentExpression` (36414:35) ← `parseListElement` (33694:28) ← `parseDelimitedList` (33930:30) ← `parseArgumentList` (36302:29) ← `parseCallExpressionRest` (36262:35) ← `parseLeftHandSideExpressionOrHigher` (35774:47) ← `parseUpdateExpression` (35755:33) ← `parseUnaryExpressionOrHigher` (35681:40) ← `parseBinaryExpressionOrHigher` (35604:41) ← `parseAssignmentExpressionOrHigher` (35267:45) ← `parseExpression` (35233:27) ← `doOutsideOfContext` (32890:30) ← `allowInAnd` (32926:22) ← `parseReturnStatement` (36689:32) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseBlock` (36548:22) ← `parseFunctionBlock` (36572:30) ← `parseFunctionBlockOrSemicolon` (37185:41) ← `parseMethodDeclaration` (37379:34) ← `parsePropertyOrMethodDeclaration` (37417:44) ← `parseClassElement` (37593:29) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseClassMembers` (37744:29) ← `parseClassDeclarationOrExpression` (37687:45) ← `parseClassDeclaration` (37684:33) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  5.1ms |       4 | `nextToken` (`./node_modules/typescript/lib/typescript.js:33015:21`) ← `nextTokenIsIdentifierOrStringLiteralOnSameLine` (37181:58) ← `isDeclaration2` (36835:26) ← `speculationHelper` (14542:29) ← `lookAhead` (14581:21) ← `speculationHelper` (33051:29) ← `lookAhead` (33067:21) ← `isStartOfDeclaration` (36895:32) ← `isStartOfStatement` (36898:30) ← `isListElement2` (33478:26) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  5.1ms |       4 | `nextTokenWithoutCheck` (`./node_modules/typescript/lib/typescript.js:33008:33`) ← `nextToken` (33015:21) ← `tryParseSemicolon` (33275:29) ← `parseSemicolon` (33284:26) ← `parseTypeMemberSemicolon` (34488:36) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124077:30) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  5.1ms |       4 | `parseLiteralTypeNode` (`./node_modules/typescript/lib/typescript.js:34779:32`) ← `parseNonArrayType` (34836:29) ← `parsePostfixTypeOrHigher` (34958:36) ← `doOutsideOfContext` (32890:30) ← `allowConditionalTypesAnd` (32932:36) ← `parseTypeOperatorOrHigher` (35029:37) ← `parseUnionOrIntersectionType` (35055:40) ← `parseIntersectionTypeOrHigher` (35069:41) ← `parseUnionOrIntersectionType` (35055:40) ← `parseUnionTypeOrHigher` (35072:34) ← `parseType` (35153:21) ← `parseParenthesizedType` (34742:34) ← `parseNonArrayType` (34836:29) ← `parsePostfixTypeOrHigher` (34958:36) ← `doOutsideOfContext` (32890:30) ← `allowConditionalTypesAnd` (32932:36) ← `parseTypeOperatorOrHigher` (35029:37) ← `parseUnionOrIntersectionType` (35055:40) ← `parseIntersectionTypeOrHigher` (35069:41) ← `parseUnionOrIntersectionType` (35055:40) ← `parseUnionTypeOrHigher` (35072:34) ← `parseType` (35153:21) ← `parseTypeAnnotation` (35172:31) ← `parseVariableDeclaration` (37262:36) ← `parseVariableDeclarationAllowExclamation` (37256:52) ← `parseListElement` (33694:28) ← `parseDelimitedList` (33930:30) ← `parseVariableDeclarationList` (37275:40) ← `parseVariableStatement` (37316:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  5.1ms |       4 | `bind` (`./node_modules/typescript/lib/typescript.js:47793:16`) ← `forEach` (2378:17) ← `bindEach` (46419:20) ← `visitNodes` (31775:20) ← `forEachChildInInterfaceDeclaration` (32060:80) ← `forEachChild` (32289:22) ← `bindEachChild` (46425:25) ← `bindChildren` (46428:24) ← `bindContainer` (46329:25) ← `bind` (47793:16) ← `(anonymous)` (46417:21) ← `forEach` (2378:17) ← `bindEach` (46419:20) ← `bindEachFunctionsFirst` (46415:34) ← `bindChildren` (46428:24) ← `bindContainer` (46329:25) ← `bind` (47793:16) ← `bindSourceFile2` (46044:27) ← `bindSourceFile` (45987:24) ← `initializeTypeChecker` (90118:33) ← `createTypeChecker` (50070:27) ← `getTypeChecker` (124848:26) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  5.1ms |       4 | `createTypeMapper` (`./node_modules/typescript/lib/typescript.js:65904:28`) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfInstantiatedSymbol` (59606:39) ← `getTypeOfSymbol` (59663:27) ← `getNonMissingTypeOfSymbol` (59694:37) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getVariancesWorker` (69879:30) ← `getVariances` (69873:24) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `typeArgumentsRelatedTo` (68233:36) ← `relateVariances` (69054:31) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `checkTypeAssignableTo` (66493:33) ← `checkTypeArgumentConstraints` (83481:40) ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` (88652:25) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkClassLikeDeclaration` (86724:37) ← `checkClassDeclaration` (86712:33) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  5.1ms |       4 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.2% |  5.1ms |       4 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  3.8ms |       3 | `readFileUtf8` ← `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  3.8ms |       3 | `createProgram` (`./node_modules/typescript/lib/typescript.js:123840:23`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  3.8ms |       3 | `tryStatSync` (`node:fs:389:21`) ← `readFileSync` (433:22) ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js:8751:28`) ← `readFile` (8776:22) ← `readFile` (123140:15) ← `readJsonOrUndefined` (20932:29) ← `readJson` (20939:18) ← `getPackageJsonInfo` (44881:28) ← `loadModuleFromSpecificNodeModulesDirectory` (45536:52) ← `loadModuleFromImmediateNodeModulesDirectory` (45512:53) ← `(anonymous)` (45501:66) ← `forEachAncestorDirectory` (9347:34) ← `lookup` (45500:18) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (45486:57) ← `loadModuleFromNearestNodeModulesDirectory` (45460:51) ← `tryResolve` (44454:22) ← `nodeModuleNameResolverWorker` (44376:38) ← `nodeModuleNameResolver` (44345:32) ← `resolveModuleName` (44061:27) ← `resolve` (123513:14) ← `loadWithModeAwareCache` (123545:32) ← `actualResolveModuleNamesWorker` (123915:38) ← `resolveModuleNamesWorker` (124295:36) ← `resolveModuleNamesReusingOldState` (124396:45) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% |  3.8ms |       3 | `createNodeArray` (`./node_modules/typescript/lib/typescript.js:33287:27`) ← `parseModifiersForConstructorType` (34749:44) ← `parseFunctionOrConstructorType` (34759:42) ← `parseType` (35153:21) ← `parseTypeParameter` (34340:30) ← `parseListElement` (33694:28) ← `parseDelimitedList` (33930:30) ← `parseBracketedList` (33993:30) ← `parseTypeParameters` (34363:31) ← `parseTypeAliasDeclaration` (37756:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (125932:42) ← `forEach` (2378:17) ← `processLibReferenceDirectives` (125931:41) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (125932:42) ← `forEach` (2378:17) ← `processLibReferenceDirectives` (125931:41) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (125932:42) ← `forEach` (2378:17) ← `processLibReferenceDirectives` (125931:41) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (125932:42) ← `forEach` (2378:17) ← `processLibReferenceDirectives` (125931:41) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (125932:42) ← `forEach` (2378:17) ← `processLibReferenceDirectives` (125931:41) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  3.8ms |       3 | `doJSDocScan` (`./node_modules/typescript/lib/typescript.js:38308:27`) ← `scanRange` (14560:21) ← `parseJSDocCommentWorker` (38286:37) ← `(anonymous)` (38259:63) ← `doInsideOfContext` (32908:29) ← `parseJSDocComment` (38255:31) ← `(anonymous)` (32748:71) ← `mapDefined` (2696:20) ← `withJSDoc` (32743:21) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124077:30) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  3.8ms |       3 | `getDefaultLibFilePriority` (`./node_modules/typescript/lib/typescript.js:124352:37`) ← `compareDefaultLibFiles` (124349:34) ← `(anonymous)` (3023:16) ← `stableSortIndices` (3022:27) ← `stableSort` (3033:20) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  3.8ms |       3 | `addInheritedMembers` (`./node_modules/typescript/lib/typescript.js:60282:31`) ← `resolveObjectTypeMembers` (60465:36) ← `resolveTypeReferenceMembers` (60519:39) ← `resolveStructuredTypeMembers` (61345:40) ← `isWeakType` (69852:22) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getVariancesWorker` (69879:30) ← `getVariances` (69873:24) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isRelatedToWorker2` (69638:34) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getVariancesWorker` (69879:30) ← `getVariances` (69873:24) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isRelatedToWorker2` (69638:34) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getVariancesWorker` (69879:30) ← `getVariances` (69873:24) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isRelatedToWorker2` (69638:34) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getVariancesWorker` (69879:30) ← `getVariances` (69873:24) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isRelatedToWorker2` (69638:34) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getVariancesWorker` (69879:30) ← `getVariances` (69873:24) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isRelatedToWorker2` (69638:34) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getVariancesWorker` (69879:30) ← `getVariances` (69873:24) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `fillMissingTypeArguments` (62192:36) ← `getEffectiveTypeArguments2` (83478:38) ← `checkTypeArgumentConstraints` (83481:40) ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` (88652:25) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `visitNode2` (31772:20) ← `forEachChildInConditionalType` (31898:70) ← `forEachChild` (32289:22) ← `checkConditionalType` (83679:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkTypeAliasDeclaration` (87285:37) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkModuleDeclaration` (87555:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `checkTypeAssignableTo` (66493:33) ← `checkMappedType` (83649:27) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `visitNode2` (31772:20) ← `forEachChildInConditionalType` (31898:70) ← `forEachChild` (32289:22) ← `checkConditionalType` (83679:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `visitNode2` (31772:20) ← `forEachChildInConditionalType` (31898:70) ← `forEachChild` (32289:22) ← `checkConditionalType` (83679:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `visitNode2` (31772:20) ← `forEachChildInConditionalType` (31898:70) ← `forEachChild` (32289:22) ← `checkConditionalType` (83679:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `visitNode2` (31772:20) ← `forEachChildInConditionalType` (31898:70) ← `forEachChild` (32289:22) ← `checkConditionalType` (83679:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `visitNode2` (31772:20) ← `forEachChildInConditionalType` (31898:70) ← `forEachChild` (32289:22) ← `checkConditionalType` (83679:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `visitNode2` (31772:20) ← `forEachChildInConditionalType` (31898:70) ← `forEachChild` (32289:22) ← `checkConditionalType` (83679:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkTypeAliasDeclaration` (87285:37) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkModuleDeclaration` (87555:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% |  3.8ms |       3 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
