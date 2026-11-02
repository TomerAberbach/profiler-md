# CPU profile

Took 2.15s over 1,701 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 84.9% |   1.83s |   1,444 |
| Garbage collector  |  6.0% | 129.1ms |     102 |
| Standard library   |  5.1% | 110.1ms |      87 |
| Native             |  3.4% |  73.4ms |      58 |
| Regular expression |  0.3% |   6.3ms |       5 |
| Unknown            |  0.2% |   5.1ms |       4 |
| Ours               |  0.1% |   1.3ms |       1 |

Paths starting with `./` or `../` are relative to `/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1.95s (90.6%) typeCheckProject at ./tsc-workload.mjs:3:33
│   ├── … 1.45s (67.5%) (anonymous) at ./node_modules/typescript/lib/typescript.js:124967:37
│   │   ├── … 1.34s (62.0%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:88583:33
│   │   │   ├── … 722.9ms (33.6%) checkFunctionExpressionOrObjectLiteralMethodDeferred at ./node_modules/typescript/lib/typescript.js:81135:64
│   │   │   │   └── 711.5ms (33.0%) checkSourceElement at 88199:30
│   │   │   │       └── … 711.5ms (33.0%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:88208:36
│   │   │   │           ├── 373.5ms (17.3%) checkVariableDeclaration at 85396:36
│   │   │   │           │   └── 369.7ms (17.2%) checkVariableLikeDeclaration at 85202:40
│   │   │   │           │       └── 367.1ms (17.0%) 4 more callees, led by (14.5%) getTypeOfSymbol at 59663:27
│   │   │   │           └── 336.8ms (15.6%) 14 more callees, led by (8.7%) checkExpressionStatement at 85419:36
│   │   │   └── 602.6ms (28.0%) forEach at 2378:17
│   │   │       ├── … 567.2ms (26.3%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:88199:30
│   │   │       │   └── … 565.9ms (26.3%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:88208:36
│   │   │       │       ├── 150.7ms (7.0%) checkTypeReferenceNode at 83518:34
│   │   │       │       │   └── 149.4ms (6.9%) checkTypeReferenceOrImport at 83529:38
│   │   │       │       │       ├── … 136.7ms (6.3%) checkTypeArgumentConstraints at ./node_modules/typescript/lib/typescript.js:83481:40
│   │   │       │       │       │   ├── 95.0ms (4.4%) checkTypeAssignableTo at 66493:33
│   │   │       │       │       │   │   └── 93.7ms (4.4%, self 1.5% globally) checkTypeRelatedTo at 67445:30
│   │   │       │       │       │   │       └── … 92.4ms (4.3%, self 2.6% globally) isRelatedTo at ./node_modules/typescript/lib/typescript.js:67753:25
│   │   │       │       │       │   │           ├── … 60.8ms (2.8%, self 3.3% globally) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js:68323:36
│   │   │       │       │       │   │           │   └── 54.4ms (2.5%) 2 more callees, led by (2.4%) structuredTypeRelatedTo at 68467:37
│   │   │       │       │       │   │           └── 31.7ms (1.5%) 5 more callees, led by (1.1%) getNormalizedType at ./node_modules/typescript/lib/typescript.js:67408:29
│   │   │       │       │       │   └── … 36.7ms (1.7%, self 1.7% globally) instantiateTypeWorker at ./node_modules/typescript/lib/typescript.js:66283:33
│   │   │       │       │       │       ├── 7.6ms (0.4%, self 1.7% globally) getObjectTypeInstantiation at 66040:38
│   │   │       │       │       │       │   └── … 3.8ms (0.2%, self 0.8% globally) some at ./node_modules/typescript/lib/typescript.js:2794:14
│   │   │       │       │       │       └── 29.1ms (1.4%) 4 more callees, led by (1.1%) getConditionalTypeInstantiation at 66239:43
│   │   │       │       │       └── 12.7ms (0.6%) getTypeFromTypeNode at 65779:31 …
│   │   │       │       └── 412.7ms (19.2%) 23 more callees, led by (8.7%) checkVariableDeclaration at 85396:36
│   │   │       └── 30.4ms (1.4%) 6 more callees, led by (0.8%) checkParameter at ./node_modules/typescript/lib/typescript.js:82969:26
│   │   └── 116.5ms (5.4%) 2 more callees, led by (5.3%) getTypeChecker at 124848:26
│   ├── 362.1ms (16.8%) createProgram at ./node_modules/typescript/lib/typescript.js:123840:23
│   │   └── 359.5ms (16.7%) 5 more callees, led by (14.0%) forEach at 2378:17
│   └── … 117.7ms (5.5%) (anonymous) at node:module:1622:37
│       ├── 102.5ms (4.8%) wrapSafe at 1596:18
│       │   └── 101.3ms (4.7%, self 3.4%) compileFunction at ext:core/01_core.js:1100:22
│       │       └── 27.9ms (1.3%) op_compile_function
│       └── 15.2ms (0.7%) (anonymous) at ./node_modules/typescript/lib/typescript.js:1:1 …
├── 129.1ms (6.0%) (garbage collector)
├── 16.5ms (0.8%) (program)
└── 55.7ms (2.6%) 40 more root frames, led by (0.1%) structuredTypeRelatedToWorker at ./node_modules/typescript/lib/typescript.js:68537:43
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                               |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 6.0% | 129.1ms |     102 | `(garbage collector)`           | `<unknown>`                                            |
| 3.4% |  73.4ms |      58 | `compileFunction`               | `ext:core/01_core.js:1100:22`                          |
| 3.3% |  70.9ms |      56 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:68323:36` |
| 2.6% |  57.0ms |      45 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:67753:25` |
| 1.7% |  36.7ms |      29 | `instantiateTypeWorker`         | `./node_modules/typescript/lib/typescript.js:66283:33` |
| 1.7% |  36.7ms |      29 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js:66040:38` |
| 1.5% |  31.7ms |      25 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:67445:30` |
| 1.5% |  31.7ms |      25 | `isTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67361:27` |
| 1.3% |  27.9ms |      22 | `op_compile_function`           | `<unknown>`                                            |
| 1.1% |  24.1ms |      19 | `inferFromTypes`                | `./node_modules/typescript/lib/typescript.js:71184:28` |
| 1.1% |  22.8ms |      18 | `internIdentifier`              | `./node_modules/typescript/lib/typescript.js:33331:28` |
| 1.1% |  22.8ms |      18 | `createTypeReference`           | `./node_modules/typescript/lib/typescript.js:62794:31` |
| 1.0% |  21.5ms |      17 | `getReducedApparentType`        | `./node_modules/typescript/lib/typescript.js:61750:34` |
| 0.8% |  17.7ms |      14 | `scan`                          | `./node_modules/typescript/lib/typescript.js:12895:16` |
| 0.8% |  17.7ms |      14 | `some`                          | `./node_modules/typescript/lib/typescript.js:2794:14`  |
| 0.8% |  17.7ms |      14 | `isDeeplyNestedType`            | `./node_modules/typescript/lib/typescript.js:70031:30` |
| 0.8% |  16.5ms |      13 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:68537:43` |
| 0.8% |  16.5ms |      13 | `(program)`                     | `<unknown>`                                            |
| 0.7% |  15.2ms |      12 | `bind`                          | `./node_modules/typescript/lib/typescript.js:47793:16` |
| 0.6% |  13.9ms |      11 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:67408:29` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|    % |   Time | Samples | Function                        | Location                                               |
| ---: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 3.3% | 70.9ms |      56 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:68323:36` |
| 2.6% | 57.0ms |      45 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:67753:25` |
| 1.7% | 36.7ms |      29 | `instantiateTypeWorker`         | `./node_modules/typescript/lib/typescript.js:66283:33` |
| 1.7% | 36.7ms |      29 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js:66040:38` |
| 1.5% | 31.7ms |      25 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:67445:30` |
| 1.5% | 31.7ms |      25 | `isTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67361:27` |
| 1.1% | 24.1ms |      19 | `inferFromTypes`                | `./node_modules/typescript/lib/typescript.js:71184:28` |
| 1.1% | 22.8ms |      18 | `internIdentifier`              | `./node_modules/typescript/lib/typescript.js:33331:28` |
| 1.1% | 22.8ms |      18 | `createTypeReference`           | `./node_modules/typescript/lib/typescript.js:62794:31` |
| 1.0% | 21.5ms |      17 | `getReducedApparentType`        | `./node_modules/typescript/lib/typescript.js:61750:34` |
| 0.8% | 17.7ms |      14 | `scan`                          | `./node_modules/typescript/lib/typescript.js:12895:16` |
| 0.8% | 17.7ms |      14 | `some`                          | `./node_modules/typescript/lib/typescript.js:2794:14`  |
| 0.8% | 17.7ms |      14 | `isDeeplyNestedType`            | `./node_modules/typescript/lib/typescript.js:70031:30` |
| 0.8% | 16.5ms |      13 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:68537:43` |
| 0.7% | 15.2ms |      12 | `bind`                          | `./node_modules/typescript/lib/typescript.js:47793:16` |
| 0.6% | 13.9ms |      11 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:67408:29` |
| 0.6% | 13.9ms |      11 | `invokeOnce`                    | `./node_modules/typescript/lib/typescript.js:71374:24` |
| 0.6% | 12.7ms |      10 | `getReducedType`                | `./node_modules/typescript/lib/typescript.js:61933:26` |
| 0.6% | 12.7ms |      10 | `getObjectFlags`                | `./node_modules/typescript/lib/typescript.js:21225:24` |
| 0.6% | 12.7ms |      10 | `getPropertyOfType`             | `./node_modules/typescript/lib/typescript.js:61994:29` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 6.0% | 129.1ms |     102 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % |   Time | Samples | Function               | Location                                        |
| ---: | -----: | ------: | ---------------------- | ----------------------------------------------- |
| 3.4% | 73.4ms |      58 | `compileFunction`      | `ext:core/01_core.js:1100:22`                   |
| 0.4% |  7.6ms |       6 | `NotFound`             | `ext:runtime/01_errors.js:7:14`                 |
| 0.3% |  6.3ms |       5 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                    |
| 0.2% |  3.8ms |       3 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
| 0.2% |  3.8ms |       3 | `SafeIterator`         | `ext:core/00_primordials.js:316:18`             |
| 0.1% |  2.5ms |       2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                    |
| 0.1% |  1.3ms |       1 | `loadMaybeCjs`         | `node:module:1669:22`                           |
| 0.1% |  1.3ms |       1 | `(anonymous)`          | `ext:deno_node/crypto.ts:1:32`                  |
| 0.1% |  1.3ms |       1 | `readFileSync`         | `ext:deno_node/fs.ts:399:24`                    |
| 0.1% |  1.3ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:569:8`     |
| 0.1% |  1.3ms |       1 | `CFISBIS`              | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
| 0.1% |  1.3ms |       1 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`    |
| 0.1% |  1.3ms |       1 | `statSync`             | `ext:deno_fs/30_fs.js:473:18`                   |
| 0.1% |  1.3ms |       1 | `getOptions`           | `ext:deno_node/internal/fs/utils.mjs:363:27`    |
| 0.1% |  1.3ms |       1 | `decodeUtf8`           | `ext:deno_node/internal/buffer.mjs:706:20`      |
| 0.1% |  1.3ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:539:8`     |

##### Native

|    % |   Time | Samples | Function                   | Location    |
| ---: | -----: | ------: | -------------------------- | ----------- |
| 1.3% | 27.9ms |      22 | `op_compile_function`      | `<unknown>` |
| 0.8% | 16.5ms |      13 | `(program)`                | `<unknown>` |
| 0.5% | 10.1ms |       8 | `op_fs_stat_sync`          | `<unknown>` |
| 0.4% |  7.6ms |       6 | `op_fs_read_file_sync`     | `<unknown>` |
| 0.2% |  3.8ms |       3 | `op_require_read_file`     | `<unknown>` |
| 0.1% |  2.5ms |       2 | `op_node_encoding_slice`   | `<unknown>` |
| 0.1% |  1.3ms |       1 | `op_url_get_serialization` | `<unknown>` |
| 0.1% |  1.3ms |       1 | `op_require_try_self`      | `<unknown>` |
| 0.1% |  1.3ms |       1 | `op_fs_realpath_sync`      | `<unknown>` |
| 0.1% |  1.3ms |       1 | `op_inspector_dispatch`    | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 73.4ms |      58 | `ext:core/01_core.js:1106` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 62.5% | 44.3ms |      35 | `./node_modules/typescript/lib/typescript.js:68336` |
| 14.3% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:68328` |
|  3.6% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:68373` |
|  3.6% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:68389` |
|  3.6% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:68383` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 37.8% | 21.5ms |      17 | `./node_modules/typescript/lib/typescript.js:67770` |
| 37.8% | 21.5ms |      17 | `./node_modules/typescript/lib/typescript.js:67765` |
|  8.9% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67753` |
|  4.4% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67754` |
|  2.2% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67850` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:66283:33`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 58.6% | 21.5ms |      17 | `./node_modules/typescript/lib/typescript.js:66299` |
|  6.9% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66349` |
|  6.9% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66293` |
|  6.9% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66283` |
|  6.9% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66284` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66040:38`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 41.4% | 15.2ms |      12 | `./node_modules/typescript/lib/typescript.js:66070` |
| 13.8% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:66079` |
| 10.3% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:66078` |
|  6.9% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66041` |
|  6.9% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66044` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 76.0% | 24.1ms |      19 | `./node_modules/typescript/lib/typescript.js:67445` |
|  8.0% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67462` |
|  4.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67496` |
|  4.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67476` |
|  4.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67464` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 60.0% | 19.0ms |      15 | `./node_modules/typescript/lib/typescript.js:67395` |
| 20.0% |  6.3ms |       5 | `./node_modules/typescript/lib/typescript.js:67382` |
| 16.0% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67372` |
|  4.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67381` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 27.9ms |      22 | 1106     |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 15.8% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:71185` |
| 10.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71311` |
| 10.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71345` |
| 10.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71198` |
|  5.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:71213` |

##### `internIdentifier` (`./node_modules/typescript/lib/typescript.js:33331:28`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 88.9% | 20.3ms |      16 | `./node_modules/typescript/lib/typescript.js:33332` |
| 11.1% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:33334` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 72.2% | 16.5ms |      13 | `./node_modules/typescript/lib/typescript.js:62796` |
| 22.2% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:62799` |
|  5.6% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:62795` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:61750:34`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 21.5ms |      17 | `./node_modules/typescript/lib/typescript.js:61751` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 28.6% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:12915` |
| 14.3% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:13078` |
| 14.3% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:13336` |
|  7.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:12975` |
|  7.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:13089` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2794:14`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 42.9% | 7.6ms |       6 | `./node_modules/typescript/lib/typescript.js:2798` |
| 21.4% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:2797` |
| 21.4% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:2794` |
|  7.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:2803` |
|  7.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:2806` |

##### `isDeeplyNestedType` (`./node_modules/typescript/lib/typescript.js:70031:30`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 57.1% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:70044` |
| 21.4% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:70031` |
|  7.1% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:70032` |
|  7.1% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:70033` |
|  7.1% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:70055` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:69024` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:68980` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:68660` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:68541` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:68653` |

##### `bind` (`./node_modules/typescript/lib/typescript.js:47793:16`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 33.3% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:47801` |
| 16.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:47802` |
|  8.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:47797` |
|  8.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:47805` |
|  8.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:47816` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 63.6% | 8.9ms |       7 | `./node_modules/typescript/lib/typescript.js:67410` |
| 27.3% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:67408` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67409` |

##### `invokeOnce` (`./node_modules/typescript/lib/typescript.js:71374:24`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 54.5% | 7.6ms |       6 | `./node_modules/typescript/lib/typescript.js:71376` |
| 18.2% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:71392` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:71389` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:71387` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:71375` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js:61933:26`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 30.0% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:61933` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:61936` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:61942` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61938` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61937` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 80.0% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:21226` |
| 20.0% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:21225` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:61994:29`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 80.0% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:61996` |
| 10.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61997` |
| 10.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61999` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 10.1ms |       8 | 474      |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 7.6ms |       6 | `ext:runtime/01_errors.js:8` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 7.6ms |       6 | 409      |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Location                   |
| ----: | ----: | ------: | -------------------------- |
| 80.0% | 5.1ms |       4 | `ext:core/00_infra.js:105` |
| 20.0% | 1.3ms |       1 | `ext:core/00_infra.js:95`  |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|     % |  Time | Samples | Location                                     |
| ----: | ----: | ------: | -------------------------------------------- |
| 66.7% | 2.5ms |       2 | `ext:deno_node/internal/fs/stat_utils.ts:27` |
| 33.3% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:71` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 3.8ms |       3 | `ext:core/00_primordials.js:318` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 1670     |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 2.5ms |       2 | `ext:deno_node/fs.ts:270` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 707      |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.3ms |       1 | `node:module:1670` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:32`)

|      % |  Time | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/crypto.ts:297` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/fs.ts:409` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:569:8`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:570` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:74` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:527` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |  Time | Samples | Location                   |
| -----: | ----: | ------: | -------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_fs/30_fs.js:475` |

##### `getOptions` (`ext:deno_node/internal/fs/utils.mjs:363:27`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:363` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/buffer.mjs:707` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:542` |

##### `op_url_get_serialization` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 101      |

##### `op_require_try_self` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1370     |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 281      |

##### `op_inspector_dispatch` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 203      |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Caller     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 73.4ms |      58 | `wrapSafe` | `node:module:1596:18` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

|      % |   Time | Samples | Caller        | Location                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 70.9ms |      56 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:67753:25` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Caller                        | Location                                               |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 73.3% | 41.8ms |      33 | `checkTypeRelatedTo`          | `./node_modules/typescript/lib/typescript.js:67445:30` |
|  4.4% |  2.5ms |       2 | `isPropertySymbolTypeRelated` | `./node_modules/typescript/lib/typescript.js:69211:41` |
|  4.4% |  2.5ms |       2 | `typeRelatedToSomeType`       | `./node_modules/typescript/lib/typescript.js:68087:35` |
|  4.4% |  2.5ms |       2 | `typeArgumentsRelatedTo`      | `./node_modules/typescript/lib/typescript.js:68233:36` |
|  2.2% |  1.3ms |       1 | `eachTypeRelatedToType`       | `./node_modules/typescript/lib/typescript.js:68195:35` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:66283:33`)

|     % |   Time | Samples | Caller                     | Location                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 96.6% | 35.4ms |      28 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:66266:36` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66040:38`)

|      % |   Time | Samples | Caller                  | Location                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 36.7ms |      29 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:66283:33` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

|     % |   Time | Samples | Caller                  | Location                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 92.0% | 29.1ms |      23 | `isTypeRelatedTo`       | `./node_modules/typescript/lib/typescript.js:67361:27` |
|  4.0% |  1.3ms |       1 | `checkTypeAssignableTo` | `./node_modules/typescript/lib/typescript.js:66493:33` |
|  4.0% |  1.3ms |       1 | `isTypeComparableTo`    | `./node_modules/typescript/lib/typescript.js:66487:30` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

|     % |   Time | Samples | Caller                                     | Location                                               |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------ |
| 60.0% | 19.0ms |      15 | `isTypeIdenticalTo`                        | `./node_modules/typescript/lib/typescript.js:66463:29` |
| 20.0% |  6.3ms |       5 | `isTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:66481:30` |
| 12.0% |  3.8ms |       3 | `isTypeComparableTo`                       | `./node_modules/typescript/lib/typescript.js:66487:30` |
|  8.0% |  2.5ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:66509:52` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 27.9ms |      22 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|     % |  Time | Samples | Caller                        | Location                                               |
| ----: | ----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 26.3% | 6.3ms |       5 | `applyToReturnTypes`          | `./node_modules/typescript/lib/typescript.js:70758:30` |
| 21.1% | 5.1ms |       4 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:71429:41` |
| 15.8% | 3.8ms |       3 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:71715:33` |
| 10.5% | 2.5ms |       2 | `inferToMultipleTypes`        | `./node_modules/typescript/lib/typescript.js:71462:34` |
| 10.5% | 2.5ms |       2 | `inferFromTypes`              | `./node_modules/typescript/lib/typescript.js:71184:28` |

##### `internIdentifier` (`./node_modules/typescript/lib/typescript.js:33331:28`)

|     % |   Time | Samples | Caller                                  | Location                                               |
| ----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------ |
| 88.9% | 20.3ms |      16 | `createIdentifier`                      | `./node_modules/typescript/lib/typescript.js:33338:28` |
| 11.1% |  2.5ms |       2 | `parseAmbientExternalModuleDeclaration` | `./node_modules/typescript/lib/typescript.js:37814:49` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Caller                          | Location                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 61.1% | 13.9ms |      11 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:63796:41` |
| 16.7% |  3.8ms |       3 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:67408:29` |
|  5.6% |  1.3ms |       1 | `createMarkerType`              | `./node_modules/typescript/lib/typescript.js:69926:28` |
|  5.6% |  1.3ms |       1 | `createPromiseLikeType`         | `./node_modules/typescript/lib/typescript.js:80633:33` |
|  5.6% |  1.3ms |       1 | `createNormalizedTupleType`     | `./node_modules/typescript/lib/typescript.js:63799:37` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:61750:34`)

|     % |  Time | Samples | Caller                | Location                                               |
| ----: | ----: | ------: | --------------------- | ------------------------------------------------------ |
| 35.3% | 7.6ms |       6 | `getPropertyOfType`   | `./node_modules/typescript/lib/typescript.js:61994:29` |
| 29.4% | 6.3ms |       5 | `getSignaturesOfType` | `./node_modules/typescript/lib/typescript.js:62044:31` |
| 23.5% | 5.1ms |       4 | `getIndexInfosOfType` | `./node_modules/typescript/lib/typescript.js:62110:31` |
| 11.8% | 2.5ms |       2 | `getPropertiesOfType` | `./node_modules/typescript/lib/typescript.js:61411:31` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

|      % |   Time | Samples | Caller                  | Location                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 17.7ms |      14 | `nextTokenWithoutCheck` | `./node_modules/typescript/lib/typescript.js:33008:33` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2794:14`)

|     % |  Time | Samples | Caller                                | Location                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 14.3% | 2.5ms |       2 | `isReadonlySymbol`                    | `./node_modules/typescript/lib/typescript.js:81206:28` |
|  7.1% | 1.3ms |       1 | `parseDeclaration`                    | `./node_modules/typescript/lib/typescript.js:37095:28` |
|  7.1% | 1.3ms |       1 | `getObjectTypeInstantiation`          | `./node_modules/typescript/lib/typescript.js:66040:38` |
|  7.1% | 1.3ms |       1 | `isTypeReferenceWithGenericArguments` | `./node_modules/typescript/lib/typescript.js:69957:47` |
|  7.1% | 1.3ms |       1 | `binarySearchKey`                     | `./node_modules/typescript/lib/typescript.js:3101:25`  |

##### `isDeeplyNestedType` (`./node_modules/typescript/lib/typescript.js:70031:30`)

|     % |   Time | Samples | Caller                   | Location                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 78.6% | 13.9ms |      11 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |
| 21.4% |  3.8ms |       3 | `invokeOnce`             | `./node_modules/typescript/lib/typescript.js:71374:24` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

|      % |   Time | Samples | Caller                    | Location                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 16.5ms |      13 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68467:37` |

##### `bind` (`./node_modules/typescript/lib/typescript.js:47793:16`)

|     % |  Time | Samples | Caller              | Location                                               |
| ----: | ----: | ------: | ------------------- | ------------------------------------------------------ |
| 50.0% | 7.6ms |       6 | `visitNode2`        | `./node_modules/typescript/lib/typescript.js:31772:20` |
| 33.3% | 5.1ms |       4 | `forEach`           | `./node_modules/typescript/lib/typescript.js:2378:17`  |
| 16.7% | 2.5ms |       2 | `bindParameterFlow` | `./node_modules/typescript/lib/typescript.js:47252:29` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

|      % |   Time | Samples | Caller        | Location                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 13.9ms |      11 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:67753:25` |

##### `invokeOnce` (`./node_modules/typescript/lib/typescript.js:71374:24`)

|      % |   Time | Samples | Caller           | Location                                               |
| -----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 13.9ms |      11 | `inferFromTypes` | `./node_modules/typescript/lib/typescript.js:71184:28` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js:61933:26`)

|     % |  Time | Samples | Caller                                 | Location                                               |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 40.0% | 5.1ms |       4 | `getReducedApparentType`               | `./node_modules/typescript/lib/typescript.js:61750:34` |
| 20.0% | 2.5ms |       2 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:67416:48` |
| 10.0% | 1.3ms |       1 | `instantiateMappedType`                | `./node_modules/typescript/lib/typescript.js:66151:33` |
| 10.0% | 1.3ms |       1 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js:71184:28` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|     % |  Time | Samples | Caller                       | Location                                               |
| ----: | ----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 30.0% | 3.8ms |       3 | `couldContainTypeVariables`  | `./node_modules/typescript/lib/typescript.js:70860:37` |
| 20.0% | 2.5ms |       2 | `isNonDeferredTypeReference` | `./node_modules/typescript/lib/typescript.js:69954:38` |
| 20.0% | 2.5ms |       2 | `inferFromTypes`             | `./node_modules/typescript/lib/typescript.js:71184:28` |
| 10.0% | 1.3ms |       1 | `getNormalizedType`          | `./node_modules/typescript/lib/typescript.js:67408:29` |
| 10.0% | 1.3ms |       1 | `isRelatedTo`                | `./node_modules/typescript/lib/typescript.js:67753:25` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:61994:29`)

|     % |  Time | Samples | Caller                                         | Location                                               |
| ----: | ----: | ------: | ---------------------------------------------- | ------------------------------------------------------ |
| 60.0% | 7.6ms |       6 | `createUnionOrIntersectionProperty`            | `./node_modules/typescript/lib/typescript.js:61753:45` |
| 20.0% | 2.5ms |       2 | `getUnmatchedProperties`                       | `./node_modules/typescript/lib/typescript.js:70992:35` |
| 20.0% | 2.5ms |       2 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:77201:56` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 10.1ms |       8 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Caller        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 7.6ms |       6 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 7.6ms |       6 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 6.3ms |       5 | `op_fs_stat_sync` | `<unknown>` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|      % |  Time | Samples | Caller                   | Location                                       |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 100.0% | 3.8ms |       3 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 3.8ms |       3 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 3.8ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 2.5ms |       2 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 2.5ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:32`)

|      % |  Time | Samples | Caller        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|      % |  Time | Samples | Caller           | Location                                              |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:569:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 1.3ms |       1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 1.3ms |       1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `getOptions` (`ext:deno_node/internal/fs/utils.mjs:363:27`)

|      % |  Time | Samples | Caller           | Location                                              |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Caller     | Location                                   |
| -----: | ----: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `toString` | `ext:deno_node/internal/buffer.mjs:751:46` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `op_url_get_serialization` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location                       |
| -----: | ----: | ------: | ------------------ | ------------------------------ |
| 100.0% | 1.3ms |       1 | `getSerialization` | `ext:deno_web/00_url.js:97:26` |

##### `op_require_try_self` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:module:1259:35` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `op_inspector_dispatch` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                           |
| -----: | ----: | ------: | ------ | ---------------------------------- |
| 100.0% | 1.3ms |       1 | `post` | `ext:deno_node/inspector.js:179:7` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 90.8% | 1.96s |   1,545 | `(anonymous)`                              | `./cpuprofile-run.mjs`                                  |
| 90.8% | 1.96s |   1,545 | `op_run_microtasks`                        | `<unknown>`                                             |
| 90.8% | 1.95s |   1,544 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                               |
| 90.8% | 1.95s |   1,544 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                            |
| 90.7% | 1.95s |   1,543 | `drainTicks`                               | `ext:core/01_core.js:425:22`                            |
| 90.7% | 1.95s |   1,542 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                            |
| 80.6% | 1.74s |   1,371 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2378:17`   |
| 67.9% | 1.46s |   1,155 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124967:37` |
| 67.8% | 1.46s |   1,154 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:124947:36` |
| 67.8% | 1.46s |   1,154 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |
| 67.8% | 1.46s |   1,154 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:125252:34` |
| 67.8% | 1.46s |   1,154 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:124963:45` |
| 67.8% | 1.46s |   1,154 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:124957:41` |
| 67.8% | 1.46s |   1,153 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2625:17`   |
| 67.8% | 1.46s |   1,153 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124899:76` |
| 67.7% | 1.46s |   1,151 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:124895:32` |
| 67.7% | 1.46s |   1,151 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 62.6% | 1.35s |   1,064 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 62.6% | 1.35s |   1,064 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:88552:27`  |
| 62.6% | 1.35s |   1,064 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:88656:32`  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 80.6% | 1.74s |   1,371 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2378:17`   |
| 67.9% | 1.46s |   1,155 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124967:37` |
| 67.8% | 1.46s |   1,154 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:124947:36` |
| 67.8% | 1.46s |   1,154 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |
| 67.8% | 1.46s |   1,154 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:125252:34` |
| 67.8% | 1.46s |   1,154 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:124963:45` |
| 67.8% | 1.46s |   1,154 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:124957:41` |
| 67.8% | 1.46s |   1,153 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2625:17`   |
| 67.8% | 1.46s |   1,153 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124899:76` |
| 67.7% | 1.46s |   1,151 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:124895:32` |
| 67.7% | 1.46s |   1,151 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 62.6% | 1.35s |   1,064 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 62.6% | 1.35s |   1,064 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:88552:27`  |
| 62.6% | 1.35s |   1,064 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:88656:32`  |
| 62.6% | 1.35s |   1,064 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:88635:27`  |
| 62.5% | 1.35s |   1,063 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:88649:47`  |
| 61.6% | 1.33s |   1,048 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:88208:36`  |
| 61.6% | 1.33s |   1,048 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:88199:30`  |
| 46.4% | 1.00s |     790 | `checkExpressionWorker`                    | `./node_modules/typescript/lib/typescript.js:82811:33`  |
| 46.4% | 1.00s |     790 | `checkExpression`                          | `./node_modules/typescript/lib/typescript.js:82771:27`  |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 6.0% | 129.1ms |     102 | `(garbage collector)` | `<unknown>` |

##### Standard library

|     % |    Time | Samples | Function                       | Location                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------- |
| 90.8% |   1.95s |   1,544 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`                    |
| 90.7% |   1.95s |   1,543 | `drainTicks`                   | `ext:core/01_core.js:425:22`                    |
| 90.7% |   1.95s |   1,542 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`                    |
|  5.8% | 125.3ms |      99 | `loadMaybeCjs`                 | `node:module:1669:22`                           |
|  5.8% | 125.3ms |      99 | `(anonymous)`                  | `node:module:1653:37`                           |
|  5.8% | 125.3ms |      99 | `(anonymous)`                  | `node:module:1438:33`                           |
|  5.8% | 125.3ms |      99 | `(anonymous)`                  | `node:module:1050:24`                           |
|  5.8% | 125.3ms |      99 | `(anonymous)`                  | `node:module:1525:36`                           |
|  5.8% | 125.3ms |      99 | `require`                      | `node:module:1752:35`                           |
|  5.6% | 120.3ms |      95 | `(anonymous)`                  | `node:module:1622:37`                           |
|  4.8% | 102.5ms |      81 | `wrapSafe`                     | `node:module:1596:18`                           |
|  4.7% | 101.3ms |      80 | `compileFunction`              | `ext:core/01_core.js:1100:22`                   |
|  2.0% |  43.0ms |      34 | `statSync`                     | `ext:deno_node/fs.ts:97:20`                     |
|  1.6% |  34.2ms |      27 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`                   |
|  0.8% |  17.7ms |      14 | `buildCustomError`             | `ext:core/00_infra.js:94:28`                    |
|  0.5% |  11.4ms |       9 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`                    |
|  0.4% |   8.9ms |       7 | `CFISBIS`                      | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|  0.4% |   7.6ms |       6 | `convertFileInfoToStats`       | `ext:deno_node/internal/fs/stat_utils.ts:6:39`  |
|  0.4% |   7.6ms |       6 | `NotFound`                     | `ext:runtime/01_errors.js:7:14`                 |
|  0.4% |   7.6ms |       6 | `(anonymous)`                  | `ext:core/00_infra.js:127:37`                   |

##### Native

|     % |   Time | Samples | Function                   | Location    |
| ----: | -----: | ------: | -------------------------- | ----------- |
| 90.8% |  1.96s |   1,545 | `op_run_microtasks`        | `<unknown>` |
|  1.3% | 27.9ms |      22 | `op_compile_function`      | `<unknown>` |
|  1.3% | 27.9ms |      22 | `op_fs_stat_sync`          | `<unknown>` |
|  0.8% | 16.5ms |      13 | `(program)`                | `<unknown>` |
|  0.4% |  7.6ms |       6 | `op_fs_read_file_sync`     | `<unknown>` |
|  0.2% |  3.8ms |       3 | `op_require_read_file`     | `<unknown>` |
|  0.1% |  2.5ms |       2 | `op_node_encoding_slice`   | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_url_get_serialization` | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_require_try_self`      | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_load_ext_script`       | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_fs_realpath_sync`      | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_inspector_dispatch`    | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./cpuprofile-run.mjs`)

|      % |  Time | Samples | Caller              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 1.96s |   1,545 | `op_run_microtasks` | `<unknown>` |

##### `op_run_microtasks` (`<unknown>`)

|     % |  Time | Samples | Caller                      | Location                     |
| ----: | ----: | ------: | --------------------------- | ---------------------------- |
| 99.9% | 1.95s |   1,544 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|      % |  Time | Samples | Caller        | Location               |
| -----: | ----: | ------: | ------------- | ---------------------- |
| 100.0% | 1.95s |   1,544 | `(anonymous)` | `./cpuprofile-run.mjs` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|     % |  Time | Samples | Caller       | Location                     |
| ----: | ----: | ------: | ------------ | ---------------------------- |
| 99.9% | 1.95s |   1,543 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|     % |  Time | Samples | Caller                         | Location                     |
| ----: | ----: | ------: | ------------------------------ | ---------------------------- |
| 99.9% | 1.95s |   1,542 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

|     % |    Time | Samples | Caller                         | Location                                                |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------- |
| 57.3% | 993.8ms |     785 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:85011:22`  |
| 35.4% | 614.0ms |     485 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:88583:33`  |
| 33.6% | 582.4ms |     460 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:85407:40`  |
| 17.4% | 301.3ms |     238 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:123840:23` |
| 10.3% | 178.5ms |     141 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js:86712:33`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|     % |  Time | Samples | Caller                     | Location                                                |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 99.9% | 1.46s |   1,154 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:124947:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

|      % |  Time | Samples | Caller                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:125252:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

|      % |  Time | Samples | Caller                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124963:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

|      % |  Time | Samples | Caller                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124957:41` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|     % |  Time | Samples | Caller        | Location                                                |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 99.9% | 1.46s |   1,153 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124899:76` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

|     % |  Time | Samples | Caller                              | Location                                                |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 99.8% | 1.46s |   1,151 | `getDiagnosticsHelper`              | `./node_modules/typescript/lib/typescript.js:124895:32` |
|  0.1% | 1.3ms |       1 | `getRegularExpressionsForWildcards` | `./node_modules/typescript/lib/typescript.js:22090:43`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

|     % |  Time | Samples | Caller    | Location                                              |
| ----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 99.9% | 1.46s |   1,152 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2625:17` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,151 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:124909:34` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

|      % |  Time | Samples | Caller             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 1.46s |   1,151 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.35s |   1,064 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:88552:27` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

|     % |  Time | Samples | Caller                                | Location                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 99.9% | 1.35s |   1,063 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:88649:47` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.35s |   1,064 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:88635:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

|     % |  Time | Samples | Caller        | Location                                                |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 99.9% | 1.35s |   1,063 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124967:37` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

|      % |  Time | Samples | Caller                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.35s |   1,063 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:88656:32` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

|      % |  Time | Samples | Caller               | Location                                               |
| -----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 100.0% | 1.33s |   1,048 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:88199:30` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

|     % |    Time | Samples | Caller                                                 | Location                                               |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 99.9% |   1.33s |   1,047 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2378:17`  |
| 53.6% | 711.5ms |     562 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:81135:64` |
| 13.4% | 177.2ms |     140 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:87285:37` |
| 11.2% | 148.1ms |     117 | `checkFunctionOrMethodDeclaration`                     | `./node_modules/typescript/lib/typescript.js:84693:44` |
|  9.7% | 129.1ms |     102 | `checkModuleDeclaration`                               | `./node_modules/typescript/lib/typescript.js:87555:34` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js:82811:33`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.00s |     790 | `checkExpression` | `./node_modules/typescript/lib/typescript.js:82771:27` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:82771:27`)

|     % |    Time | Samples | Caller                              | Location                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 58.6% | 586.2ms |     463 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js:82440:33` |
| 47.5% | 474.8ms |     375 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js:82417:45` |
| 31.5% | 315.2ms |     249 | `checkExpressionForMutableLocation` | `./node_modules/typescript/lib/typescript.js:82534:45` |
| 30.4% | 303.8ms |     240 | `checkExpressionStatement`          | `./node_modules/typescript/lib/typescript.js:85419:36` |
| 25.2% | 251.9ms |     199 | `checkNonNullExpression`            | `./node_modules/typescript/lib/typescript.js:76990:34` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 125.3ms |      99 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1653:37`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 125.3ms |      99 | `(anonymous)` | `node:module:1438:33` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 125.3ms |      99 | `(anonymous)` | `node:module:1050:24` |

##### `(anonymous)` (`node:module:1050:24`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 125.3ms |      99 | `(anonymous)` | `node:module:1525:36` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |    Time | Samples | Caller    | Location              |
| -----: | ------: | ------: | --------- | --------------------- |
| 100.0% | 125.3ms |      99 | `require` | `node:module:1752:35` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Caller             | Location                                              |
| -----: | ------: | ------: | ------------------ | ----------------------------------------------------- |
| 100.0% | 125.3ms |      99 | `typeCheckProject` | `./tsc-workload.mjs:3:33`                             |
|   1.0% |   1.3ms |       1 | `(anonymous)`      | `./node_modules/typescript/lib/typescript.js:16:15`   |
|   1.0% |   1.3ms |       1 | `getNodeSystem`    | `./node_modules/typescript/lib/typescript.js:8489:25` |

##### `(anonymous)` (`node:module:1622:37`)

|      % |    Time | Samples | Caller         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 120.3ms |      95 | `loadMaybeCjs` | `node:module:1669:22` |

##### `wrapSafe` (`node:module:1596:18`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 102.5ms |      81 | `(anonymous)` | `node:module:1622:37` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |    Time | Samples | Caller     | Location              |
| -----: | ------: | ------: | ---------- | --------------------- |
| 100.0% | 101.3ms |      80 | `wrapSafe` | `node:module:1596:18` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|      % |   Time | Samples | Caller     | Location                                              |
| -----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 43.0ms |      34 | `statSync` | `./node_modules/typescript/lib/typescript.js:8631:22` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |   Time | Samples | Caller     | Location                    |
| -----: | -----: | ------: | ---------- | --------------------------- |
| 100.0% | 34.2ms |      27 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 27.9ms |      22 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 27.9ms |      22 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |   Time | Samples | Caller            | Location    |
| -----: | -----: | ------: | ----------------- | ----------- |
| 100.0% | 17.7ms |      14 | `op_fs_stat_sync` | `<unknown>` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 11.4ms |       9 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 8.9ms |       7 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|      % |  Time | Samples | Caller    | Location                                        |
| -----: | ----: | ------: | --------- | ----------------------------------------------- |
| 100.0% | 7.6ms |       6 | `CFISBIS` | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Caller        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 7.6ms |       6 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 7.6ms |       6 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 7.6ms |       6 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 3.8ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 2.5ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

##### `op_url_get_serialization` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location                       |
| -----: | ----: | ------: | ------------------ | ------------------------------ |
| 100.0% | 1.3ms |       1 | `getSerialization` | `ext:deno_web/00_url.js:97:26` |

##### `op_require_try_self` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:module:1259:35` |

##### `op_load_ext_script` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location                     |
| -----: | ----: | ------: | --------------- | ---------------------------- |
| 100.0% | 1.3ms |       1 | `loadExtScript` | `ext:core/01_core.js:951:25` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `op_inspector_dispatch` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                           |
| -----: | ----: | ------: | ------ | ---------------------------------- |
| 100.0% | 1.3ms |       1 | `post` | `ext:deno_node/inspector.js:179:7` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./cpuprofile-run.mjs`)

|     % |  Time | Samples | Callee             | Location                     |
| ----: | ----: | ------: | ------------------ | ---------------------------- |
| 99.9% | 1.95s |   1,544 | `typeCheckProject` | `./tsc-workload.mjs:3:33`    |
|  0.1% | 1.3ms |       1 | `post`             | `./cpuprofile-run.mjs:14:14` |

##### `op_run_microtasks` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location               |
| -----: | ----: | ------: | ------------- | ---------------------- |
| 100.0% | 1.96s |   1,545 | `(anonymous)` | `./cpuprofile-run.mjs` |

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 74.5% |   1.46s |   1,151 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js:124909:34` |
| 18.5% | 362.1ms |     286 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js:123840:23` |
|  6.4% | 125.3ms |      99 | `require`                          | `node:module:1752:35`                                   |
|  0.5% |   8.9ms |       7 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js:41625:42`  |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|      % |  Time | Samples | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 1.95s |   1,544 | `op_run_microtasks` | `<unknown>` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|      % |  Time | Samples | Callee                      | Location                     |
| -----: | ----: | ------: | --------------------------- | ---------------------------- |
| 100.0% | 1.95s |   1,543 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `__drainNextTickAndMacrotasks` (`ext:core/01_core.js:479:40`)

|      % |  Time | Samples | Callee       | Location                     |
| -----: | ----: | ------: | ------------ | ---------------------------- |
| 100.0% | 1.95s |   1,542 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

|     % |    Time | Samples | Callee               | Location                                                |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------- |
| 76.4% |   1.33s |   1,047 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:88199:30`  |
| 13.8% | 239.3ms |     189 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124028:24` |
|  6.1% | 105.1ms |      83 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:46417:21`  |
|  4.9% |  84.8ms |      67 | `bind`               | `./node_modules/typescript/lib/typescript.js:47793:16`  |
|  4.3% |  74.7ms |      59 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:125782:35` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 92.0% |   1.35s |   1,063 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:88635:27`  |
|  7.9% | 115.2ms |      91 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:124848:26` |
|  0.1% |   1.3ms |       1 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:124987:44` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

|      % |  Time | Samples | Callee                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:124947:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

|      % |  Time | Samples | Callee                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

|      % |  Time | Samples | Callee                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:125252:34` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|      % |  Time | Samples | Callee                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,154 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124963:45` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

|     % |  Time | Samples | Callee        | Location                                                |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 99.9% | 1.46s |   1,152 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124899:76` |
|  0.1% | 1.3ms |       1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:22094:25`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

|      % |  Time | Samples | Callee                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,153 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:124957:41` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

|      % |  Time | Samples | Callee    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 1.46s |   1,151 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2625:17` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

|      % |  Time | Samples | Callee                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,151 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:124895:32` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|     % |    Time | Samples | Callee                       | Location                                               |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------ |
| 53.9% | 726.7ms |     574 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js:88492:30` |
| 45.6% | 614.0ms |     485 | `forEach`                    | `./node_modules/typescript/lib/typescript.js:2378:17`  |
|  0.2% |   2.5ms |       2 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js:88158:38` |
|  0.1% |   1.3ms |       1 | `addLazyDiagnostic`          | `./node_modules/typescript/lib/typescript.js:88652:25` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

|      % |  Time | Samples | Callee                  | Location                                               |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 1.35s |   1,064 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:88583:33` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

|     % |  Time | Samples | Callee                                | Location                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 99.9% | 1.35s |   1,063 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:88649:47` |
|  0.1% | 1.3ms |       1 | `getDiagnostics2`                     | `./node_modules/typescript/lib/typescript.js:19826:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.35s |   1,064 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:88656:32` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

|      % |  Time | Samples | Callee            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.35s |   1,063 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:88552:27` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

|     % |    Time | Samples | Callee                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 75.0% | 995.1ms |     786 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js:85011:22` |
| 43.9% | 582.4ms |     460 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js:85414:34` |
| 43.8% | 581.1ms |     459 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js:85396:36` |
| 22.9% | 303.8ms |     240 | `checkExpressionStatement` | `./node_modules/typescript/lib/typescript.js:85419:36` |
| 21.4% | 283.6ms |     224 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js:83518:34` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

|      % |  Time | Samples | Callee                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.33s |   1,048 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:88208:36` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js:82811:33`)

|     % |    Time | Samples | Callee                          | Location                                               |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 89.6% | 896.3ms |     708 | `checkCallExpression`           | `./node_modules/typescript/lib/typescript.js:79584:31` |
| 30.5% | 305.1ms |     241 | `checkPropertyAccessExpression` | `./node_modules/typescript/lib/typescript.js:77069:41` |
| 27.3% | 273.5ms |     216 | `checkObjectLiteral`            | `./node_modules/typescript/lib/typescript.js:76097:30` |
| 16.1% | 160.8ms |     127 | `checkArrayLiteral`             | `./node_modules/typescript/lib/typescript.js:75934:29` |
| 10.0% | 100.0ms |      79 | `checkIdentifier`               | `./node_modules/typescript/lib/typescript.js:74242:27` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:82771:27`)

|      % |  Time | Samples | Callee                                          | Location                                               |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.00s |     790 | `checkExpressionWorker`                         | `./node_modules/typescript/lib/typescript.js:82811:33` |
|   0.8% | 7.6ms |       6 | `instantiateTypeWithSingleGenericCallSignature` | `./node_modules/typescript/lib/typescript.js:82561:57` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|     % |    Time | Samples | Callee                 | Location              |
| ----: | ------: | ------: | ---------------------- | --------------------- |
| 96.0% | 120.3ms |      95 | `(anonymous)`          | `node:module:1622:37` |
|  3.0% |   3.8ms |       3 | `op_require_read_file` | `<unknown>`           |

##### `(anonymous)` (`node:module:1653:37`)

|      % |    Time | Samples | Callee         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 125.3ms |      99 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 125.3ms |      99 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1050:24`)

|      % |    Time | Samples | Callee             | Location              |
| -----: | ------: | ------: | ------------------ | --------------------- |
| 100.0% | 125.3ms |      99 | `(anonymous)`      | `node:module:1438:33` |
|   1.0% |   1.3ms |       1 | `(anonymous)`      | `node:module:1259:35` |
|   1.0% |   1.3ms |       1 | `loadNativeModule` | `node:module:2019:26` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 125.3ms |      99 | `(anonymous)` | `node:module:1050:24` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 125.3ms |      99 | `(anonymous)` | `node:module:1525:36` |

##### `(anonymous)` (`node:module:1622:37`)

|     % |    Time | Samples | Callee        | Location                                          |
| ----: | ------: | ------: | ------------- | ------------------------------------------------- |
| 85.3% | 102.5ms |      81 | `wrapSafe`    | `node:module:1596:18`                             |
| 14.7% |  17.7ms |      14 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |

##### `wrapSafe` (`node:module:1596:18`)

|     % |    Time | Samples | Callee            | Location                       |
| ----: | ------: | ------: | ----------------- | ------------------------------ |
| 98.8% | 101.3ms |      80 | `compileFunction` | `ext:core/01_core.js:1100:22`  |
|  1.2% |   1.3ms |       1 | `pathToFileURL`   | `ext:deno_node/url.ts:1337:27` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 27.5% | 27.9ms |      22 | `op_compile_function` | `<unknown>` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|     % |   Time | Samples | Callee     | Location                                        |
| ----: | -----: | ------: | ---------- | ----------------------------------------------- |
| 79.4% | 34.2ms |      27 | `statSync` | `ext:deno_fs/30_fs.js:473:18`                   |
| 20.6% |  8.9ms |       7 | `CFISBIS`  | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 81.5% | 27.9ms |      22 | `op_fs_stat_sync` | `<unknown>` |
| 14.8% |  5.1ms |       4 | `(anonymous)`     | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 63.6% | 17.7ms |      14 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Callee         | Location                            |
| ----: | ----: | ------: | -------------- | ----------------------------------- |
| 42.9% | 7.6ms |       6 | `(anonymous)`  | `ext:core/00_infra.js:127:37`       |
| 21.4% | 3.8ms |       3 | `SafeIterator` | `ext:core/00_primordials.js:316:18` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|     % |  Time | Samples | Callee                 | Location                     |
| ----: | ----: | ------: | ---------------------- | ---------------------------- |
| 66.7% | 7.6ms |       6 | `op_fs_read_file_sync` | `<unknown>`                  |
| 22.2% | 2.5ms |       2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|     % |  Time | Samples | Callee                   | Location                                       |
| ----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 85.7% | 7.6ms |       6 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|     % |  Time | Samples | Callee                 | Location                                        |
| ----: | ----: | ------: | ---------------------- | ----------------------------------------------- |
| 50.0% | 3.8ms |       3 | `Stats`                | `ext:deno_node/internal/fs/utils.mjs:650:22`    |
| 50.0% | 3.8ms |       3 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

|      % |  Time | Samples | Callee     | Location                        |
| -----: | ----: | ------: | ---------- | ------------------------------- |
| 100.0% | 7.6ms |       6 | `NotFound` | `ext:runtime/01_errors.js:7:14` |

##### `op_load_ext_script` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./cpuprofile-run.mjs`) ← `op_run_microtasks` ← `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.4% | 73.4ms |      58 | `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.3% | 27.9ms |      22 | `op_compile_function` ← `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% |  8.9ms |       7 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |  7.6ms |       6 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |  7.6ms |       6 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                       |
| 0.4% |  7.6ms |       6 | `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:61994:29`) ← `createUnionOrIntersectionProperty` (61753:45) ← `getUnionOrIntersectionProperty` (61892:42) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% |  6.3ms |       5 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                  |
| 0.2% |  5.1ms |       4 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |  5.1ms |       4 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |
| 0.2% |  3.8ms |       3 | `op_require_read_file` ← `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  3.8ms |       3 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  3.8ms |       3 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.2% |  3.8ms |       3 | `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`) ← `createNormalizedTypeReference` (63796:41) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `membersRelatedToIndexInfo` (69676:39) ← `typeRelatedToIndexInfo` (69751:36) ← `indexSignaturesRelatedTo` (69735:38) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `compareTypesAssignable` (66469:34) ← `getInferredType` (71816:27) ← `getInferredTypes` (71853:28) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  3.8ms |       3 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeAssignableTo` (66481:30) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `isGenericMappedType` (61325:31) ← `shouldDeferIndexType` (64600:32) ← `getIndexType` (64603:24) ← `getTypeFromTypeOperatorNode` (64615:39) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `getDeclaredTypeOfTypeAlias` (60102:38) ← `tryGetDeclaredTypeOfSymbol` (60200:38) ← `getDeclaredTypeOfSymbol` (60197:35) ← `getTypeFromTypeAliasReference` (62903:41) ← `getTypeReferenceType` (63005:32) ← `getTypeFromTypeReference` (63179:36) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  3.8ms |       3 | `getIntersectionType` (`./node_modules/typescript/lib/typescript.js:64367:31`) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getMappedType` (65907:25) ← `(anonymous)` (66062:49) ← `map` (2580:13) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  3.8ms |       3 | `getUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js:61892:42`) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% |  2.5ms |       2 | `createProgram` (`./node_modules/typescript/lib/typescript.js:123840:23`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% |  2.5ms |       2 | `internIdentifier` (`./node_modules/typescript/lib/typescript.js:33331:28`) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% |  2.5ms |       2 | `normalizeSlashes` (`./node_modules/typescript/lib/typescript.js:9114:26`) ← `combinePaths` (9140:22) ← `loadModuleFromSpecificNodeModulesDirectory` (45536:52) ← `loadModuleFromImmediateNodeModulesDirectory` (45512:53) ← `(anonymous)` (45501:66) ← `forEachAncestorDirectory` (9347:34) ← `lookup` (45500:18) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (45486:57) ← `loadModuleFromNearestNodeModulesDirectory` (45460:51) ← `tryResolve` (44454:22) ← `nodeModuleNameResolverWorker` (44376:38) ← `nodeModuleNameResolver` (44345:32) ← `resolveModuleName` (44061:27) ← `resolve` (123513:14) ← `loadWithModeAwareCache` (123545:32) ← `actualResolveModuleNamesWorker` (123915:38) ← `resolveModuleNamesWorker` (124295:36) ← `resolveModuleNamesReusingOldState` (124396:45) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
