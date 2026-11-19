# CPU profile

Took 2.52s over 1,984 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 86.0% |   2.17s |   1,707 |
| Garbage collector  |  7.7% | 194.2ms |     153 |
| Standard library   |  4.4% | 111.7ms |      88 |
| Native             |  1.6% |  40.6ms |      32 |
| Regular expression |  0.2% |   3.8ms |       3 |
| Ours               |  0.1% |   1.3ms |       1 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.28s (90.7%) (anonymous) at ./cpuprofile-run.mjs
│   └── 2.28s (90.7%) typeCheckProject at ./tsc-workload.mjs:3:33
│       ├── … 1.77s (70.2%) (anonymous) at ./node_modules/typescript/lib/typescript.js:123385:37
│       │   ├── … 1.61s (63.8%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:87270:33
│       │   │   ├── … 825.0ms (32.8%) checkFunctionExpressionOrObjectLiteralMethodDeferred at ./node_modules/typescript/lib/typescript.js:79840:64
│       │   │   │   ├── 811.1ms (32.2%) checkSourceElement at 86886:30
│       │   │   │   │   └── … 806.0ms (32.0%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36
│       │   │   │   │       ├── 403.6ms (16.0%) checkVariableDeclaration at 84101:36
│       │   │   │   │       │   └── 401.1ms (15.9%) checkVariableLikeDeclaration at 83907:40
│       │   │   │   │       │       └── 401.1ms (15.9%) 6 more callees, led by (13.1%) getTypeOfSymbol at 58408:27
│       │   │   │   │       └── 399.8ms (15.9%) 13 more callees, led by (9.4%) checkExpressionStatement at 84124:36
│       │   │   │   └── 8.9ms (0.4%) getReturnTypeOfSignature at 61207:36
│       │   │   └── 778.1ms (30.9%) forEach at 2365:17
│       │   │       ├── … 746.3ms (29.6%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:86886:30
│       │   │       │   └── … 741.2ms (29.4%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36
│       │   │       │       ├── 219.6ms (8.7%) checkTypeReferenceNode at 82223:34
│       │   │       │       │   └── 219.6ms (8.7%) checkTypeReferenceOrImport at 82234:38
│       │   │       │       │       ├── … 201.8ms (8.0%) checkTypeArgumentConstraints at ./node_modules/typescript/lib/typescript.js:82186:40
│       │   │       │       │       │   ├── 142.2ms (5.6%) checkTypeAssignableTo at 65233:33
│       │   │       │       │       │   │   └── 142.2ms (5.6%, self 1.5% globally) checkTypeRelatedTo at 66185:30
│       │   │       │       │       │   │       └── … 139.6ms (5.5%, self 1.3% globally) isRelatedTo at ./node_modules/typescript/lib/typescript.js:66493:25
│       │   │       │       │       │   │           ├── … 97.7ms (3.9%, self 2.8% globally) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js:67063:36
│       │   │       │       │       │   │           │   └── 87.6ms (3.5%) structuredTypeRelatedTo at 67207:37
│       │   │       │       │       │   │           │       └── 87.6ms (3.5%, self 0.7% globally) structuredTypeRelatedToWorker at 67277:43
│       │   │       │       │       │   │           │           └── 85.0ms (3.4%) 5 more callees, led by (2.1%) signaturesRelatedTo at 68245:33
│       │   │       │       │       │   │           └── 35.5ms (1.4%) 5 more callees, led by (0.7%) getNormalizedType at ./node_modules/typescript/lib/typescript.js:66148:29
│       │   │       │       │       │   └── … 58.4ms (2.3%, self 0.6% globally) instantiateTypeWithAlias at ./node_modules/typescript/lib/typescript.js:65006:36
│       │   │       │       │       │       └── 57.1ms (2.3%, self 2.1% globally) instantiateTypeWorker at 65023:33
│       │   │       │       │       │           └── 54.6ms (2.2%) 7 more callees, led by (1.7%) getConditionalTypeInstantiation at 64979:43
│       │   │       │       │       └── 16.5ms (0.7%) getTypeFromTypeNode at 64524:31 …
│       │   │       │       └── 519.1ms (20.6%) 28 more callees, led by (8.2%) checkVariableDeclaration at 84101:36
│       │   │       └── 29.2ms (1.2%) 4 more callees, led by (0.7%) checkParameter at ./node_modules/typescript/lib/typescript.js:81674:26
│       │   └── … 146.0ms (5.8%, self 1.1%) bind at ./node_modules/typescript/lib/typescript.js:46600:16
│       │       └── 119.3ms (4.7%) 6 more callees, led by (2.8%) bindWorker at ./node_modules/typescript/lib/typescript.js:46663:22
│       ├── … 100.3ms (4.0%) (anonymous) at node:internal/modules/cjs/loader:1731:37
│       │   ├── 87.6ms (3.5%) wrapSafe at 1671:18
│       │   └── 12.7ms (0.5%) (anonymous) at ./node_modules/typescript/lib/typescript.js:1:1 …
│       └── 403.6ms (16.0%) 2 more callees, led by (15.6%) createProgram at ./node_modules/typescript/lib/typescript.js:122262:23
├── 194.2ms (7.7%) (garbage collector)
└── 40.6ms (1.6%) 20 more root frames, led by (0.2%) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js:67063:36
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|    % |    Time | Samples | Function                               | Location                                               |
| ---: | ------: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 7.7% | 194.2ms |     153 | `(garbage collector)`                  | `<unknown>`                                            |
| 3.5% |  87.6ms |      69 | `wrapSafe`                             | `node:internal/modules/cjs/loader:1671:18`             |
| 2.8% |  69.8ms |      55 | `recursiveTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 2.1% |  53.3ms |      42 | `instantiateTypeWorker`                | `./node_modules/typescript/lib/typescript.js:65023:33` |
| 1.5% |  38.1ms |      30 | `checkTypeRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66185:30` |
| 1.3% |  33.0ms |      26 | `isRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:66493:25` |
| 1.2% |  29.2ms |      23 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 1.1% |  26.7ms |      21 | `bind`                                 | `./node_modules/typescript/lib/typescript.js:46600:16` |
| 1.0% |  25.4ms |      20 | `scan`                                 | `./node_modules/typescript/lib/typescript.js:12765:16` |
| 1.0% |  24.1ms |      19 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js:69901:28` |
| 0.9% |  21.6ms |      17 | `getNormalizedType`                    | `./node_modules/typescript/lib/typescript.js:66148:29` |
| 0.9% |  21.6ms |      17 | `getPropertyOfType`                    | `./node_modules/typescript/lib/typescript.js:60739:29` |
| 0.7% |  17.8ms |      14 | `resolveStructuredTypeMembers`         | `./node_modules/typescript/lib/typescript.js:60090:40` |
| 0.7% |  16.5ms |      13 | `structuredTypeRelatedToWorker`        | `./node_modules/typescript/lib/typescript.js:67277:43` |
| 0.7% |  16.5ms |      13 | `createTypeReference`                  | `./node_modules/typescript/lib/typescript.js:61539:31` |
| 0.7% |  16.5ms |      13 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:66156:48` |
| 0.6% |  15.2ms |      12 | `stat`                                 | `<unknown>`                                            |
| 0.6% |  15.2ms |      12 | `instantiateTypeWithAlias`             | `./node_modules/typescript/lib/typescript.js:65006:36` |
| 0.6% |  15.2ms |      12 | `getMappedType`                        | `./node_modules/typescript/lib/typescript.js:64652:25` |
| 0.6% |  14.0ms |      11 | `declareSymbol`                        | `./node_modules/typescript/lib/typescript.js:44997:25` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|    % |   Time | Samples | Function                               | Location                                               |
| ---: | -----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 2.8% | 69.8ms |      55 | `recursiveTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 2.1% | 53.3ms |      42 | `instantiateTypeWorker`                | `./node_modules/typescript/lib/typescript.js:65023:33` |
| 1.5% | 38.1ms |      30 | `checkTypeRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66185:30` |
| 1.3% | 33.0ms |      26 | `isRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:66493:25` |
| 1.2% | 29.2ms |      23 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 1.1% | 26.7ms |      21 | `bind`                                 | `./node_modules/typescript/lib/typescript.js:46600:16` |
| 1.0% | 25.4ms |      20 | `scan`                                 | `./node_modules/typescript/lib/typescript.js:12765:16` |
| 1.0% | 24.1ms |      19 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js:69901:28` |
| 0.9% | 21.6ms |      17 | `getNormalizedType`                    | `./node_modules/typescript/lib/typescript.js:66148:29` |
| 0.9% | 21.6ms |      17 | `getPropertyOfType`                    | `./node_modules/typescript/lib/typescript.js:60739:29` |
| 0.7% | 17.8ms |      14 | `resolveStructuredTypeMembers`         | `./node_modules/typescript/lib/typescript.js:60090:40` |
| 0.7% | 16.5ms |      13 | `structuredTypeRelatedToWorker`        | `./node_modules/typescript/lib/typescript.js:67277:43` |
| 0.7% | 16.5ms |      13 | `createTypeReference`                  | `./node_modules/typescript/lib/typescript.js:61539:31` |
| 0.7% | 16.5ms |      13 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:66156:48` |
| 0.6% | 15.2ms |      12 | `instantiateTypeWithAlias`             | `./node_modules/typescript/lib/typescript.js:65006:36` |
| 0.6% | 15.2ms |      12 | `getMappedType`                        | `./node_modules/typescript/lib/typescript.js:64652:25` |
| 0.6% | 14.0ms |      11 | `declareSymbol`                        | `./node_modules/typescript/lib/typescript.js:44997:25` |
| 0.6% | 14.0ms |      11 | `createInstantiatedSymbolTable`        | `./node_modules/typescript/lib/typescript.js:59020:41` |
| 0.5% | 12.7ms |      10 | `internIdentifier`                     | `./node_modules/typescript/lib/typescript.js:32276:28` |
| 0.5% | 12.7ms |      10 | `instantiateTypes`                     | `./node_modules/typescript/lib/typescript.js:64640:28` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 7.7% | 194.2ms |     153 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % |   Time | Samples | Function                   | Location                                   |
| ---: | -----: | ------: | -------------------------- | ------------------------------------------ |
| 3.5% | 87.6ms |      69 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
| 0.4% | 10.2ms |       8 | `tryStatSync`              | `node:fs:389:21`                           |
| 0.1% |  2.5ms |       2 | `readFileSync`             | `node:fs:433:22`                           |
| 0.1% |  2.5ms |       2 | `slice`                    | `node:buffer:640:12`                       |
| 0.1% |  2.5ms |       2 | `statSync`                 | `node:fs:1745:18`                          |
| 0.1% |  1.3ms |       1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
| 0.1% |  1.3ms |       1 | `internalBinding`          | `node:internal/bootstrap/realm:185:45`     |
| 0.1% |  1.3ms |       1 | `(anonymous)`              | `node:internal/streams/lazy_transform:1:1` |
| 0.1% |  1.3ms |       1 | `getStatsFromBinding`      | `node:internal/fs/utils:552:29`            |
| 0.1% |  1.3ms |       1 | `isInt32`                  | `node:internal/validators:45:17`           |

##### Native

|    % |   Time | Samples | Function       | Location    |
| ---: | -----: | ------: | -------------- | ----------- |
| 0.6% | 15.2ms |      12 | `stat`         | `<unknown>` |
| 0.5% | 12.7ms |      10 | `open`         | `<unknown>` |
| 0.2% |  3.8ms |       3 | `readFileUtf8` | `<unknown>` |
| 0.2% |  3.8ms |       3 | `(program)`    | `<unknown>` |
| 0.1% |  2.5ms |       2 | `read`         | `<unknown>` |
| 0.1% |  1.3ms |       1 | `readdir`      | `<unknown>` |
| 0.1% |  1.3ms |       1 | `close`        | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 87.6ms |      69 | `node:internal/modules/cjs/loader:1713` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 56.4% | 39.3ms |      31 | `./node_modules/typescript/lib/typescript.js:67076` |
| 10.9% |  7.6ms |       6 | `./node_modules/typescript/lib/typescript.js:67123` |
|  7.3% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67135` |
|  7.3% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67129` |
|  5.5% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:67102` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:65023:33`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 52.4% | 27.9ms |      22 | `./node_modules/typescript/lib/typescript.js:65039` |
|  9.5% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:65052` |
|  7.1% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:65033` |
|  7.1% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:65023` |
|  4.8% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:65077` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 50.0% | 19.0ms |      15 | `./node_modules/typescript/lib/typescript.js:66185` |
| 33.3% | 12.7ms |      10 | `./node_modules/typescript/lib/typescript.js:66204` |
| 10.0% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:66268` |
|  3.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66212` |
|  3.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66203` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 26.9% | 8.9ms |       7 | `./node_modules/typescript/lib/typescript.js:66590` |
|  7.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66493` |
|  7.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66510` |
|  7.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66523` |
|  3.8% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66553` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:64785:38`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 47.8% | 14.0ms |      11 | `./node_modules/typescript/lib/typescript.js:64815` |
| 21.7% |  6.3ms |       5 | `./node_modules/typescript/lib/typescript.js:64818` |
| 13.0% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:64819` |
|  4.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64807` |
|  4.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64805` |

##### `bind` (`./node_modules/typescript/lib/typescript.js:46600:16`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 61.9% | 16.5ms |      13 | `./node_modules/typescript/lib/typescript.js:46608` |
|  9.5% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:46614` |
|  9.5% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:46604` |
|  9.5% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:46616` |
|  4.8% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:46627` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12765:16`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 15.0% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:12790` |
| 10.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:12765` |
| 10.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:13133` |
| 10.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:12936` |
| 10.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:13676` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:69901:28`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 21.1% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:69950` |
| 10.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:69954` |
| 10.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:69957` |
| 10.5% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:69942` |
|  5.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:70028` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:66148:29`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 94.1% | 20.3ms |      16 | `./node_modules/typescript/lib/typescript.js:66150` |
|  5.9% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64409` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:60739:29`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 41.2% | 8.9ms |       7 | `./node_modules/typescript/lib/typescript.js:60741` |
| 11.8% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:60745` |
| 11.8% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:60744` |
|  5.9% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:60493` |
|  5.9% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:60679` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:60090:40`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 71.4% | 12.7ms |      10 | `./node_modules/typescript/lib/typescript.js:60090` |
| 14.3% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:60091` |
| 14.3% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:60099` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67720` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67764` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67400` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67285` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67788` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:61539:31`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 53.8% | 8.9ms |       7 | `./node_modules/typescript/lib/typescript.js:61541` |
| 30.8% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:61544` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61526` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61539` |

##### `getNormalizedUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:66156:48`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 23.1% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:66156` |
| 23.1% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:65968` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66173` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66172` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66157` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 15.2ms |      12 | 1746     |

##### `instantiateTypeWithAlias` (`./node_modules/typescript/lib/typescript.js:65006:36`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 91.7% | 14.0ms |      11 | `./node_modules/typescript/lib/typescript.js:65019` |
|  8.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65006` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:64652:25`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 41.7% | 6.3ms |       5 | `./node_modules/typescript/lib/typescript.js:64652` |
| 25.0% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:64681` |
| 16.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:64653` |
|  8.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64660` |
|  8.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64655` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js:44997:25`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 27.3% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:45005` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:45000` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:14056` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:44997` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:44915` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js:59020:41`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 14.0ms |      11 | `./node_modules/typescript/lib/typescript.js:59023` |

##### `internIdentifier` (`./node_modules/typescript/lib/typescript.js:32276:28`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 70.0% | 8.9ms |       7 | `./node_modules/typescript/lib/typescript.js:32277` |
| 30.0% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:32279` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js:64640:28`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 50.0% | 6.3ms |       5 | `./node_modules/typescript/lib/typescript.js:64640` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64631` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65013` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64625` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64632` |

##### `open` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 90.0% | 11.4ms |       9 | 560      |
| 10.0% |  1.3ms |       1 | 563      |

##### `tryStatSync` (`node:fs:389:21`)

|      % |   Time | Samples | Location      |
| -----: | -----: | ------: | ------------- |
| 100.0% | 10.2ms |       8 | `node:fs:390` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 440      |

##### `readFileSync` (`node:fs:433:22`)

|     % |  Time | Samples | Location      |
| ----: | ----: | ------: | ------------- |
| 50.0% | 1.3ms |       1 | `node:fs:440` |
| 50.0% | 1.3ms |       1 | `node:fs:462` |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 2.5ms |       2 | `node:buffer:640` |

##### `statSync` (`node:fs:1745:18`)

|     % |  Time | Samples | Location       |
| ----: | ----: | ------: | -------------- |
| 50.0% | 1.3ms |       1 | `node:fs:1745` |
| 50.0% | 1.3ms |       1 | `node:fs:1755` |

##### `read` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 736      |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|      % |  Time | Samples | Location                            |
| -----: | ----: | ------: | ----------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/bootstrap/realm:397` |

##### `internalBinding` (`node:internal/bootstrap/realm:185:45`)

|      % |  Time | Samples | Location                            |
| -----: | ----: | ------: | ----------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/bootstrap/realm:188` |

##### `(anonymous)` (`node:internal/streams/lazy_transform:1:1`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/streams/lazy_transform:43` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/fs/utils:553` |

##### `isInt32` (`node:internal/validators:45:17`)

|      % |  Time | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/validators:46` |

##### `readdir` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1593     |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 517      |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 87.6ms |      69 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`)

|     % |   Time | Samples | Caller               | Location                                               |
| ----: | -----: | ------: | -------------------- | ------------------------------------------------------ |
| 98.2% | 68.5ms |      54 | `isRelatedTo`        | `./node_modules/typescript/lib/typescript.js:66493:25` |
|  1.8% |  1.3ms |       1 | `checkTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66185:30` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:65023:33`)

|      % |   Time | Samples | Caller                     | Location                                               |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 53.3ms |      42 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:65006:36` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`)

|      % |   Time | Samples | Caller            | Location                                               |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 38.1ms |      30 | `isTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66101:27` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Caller                          | Location                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 50.0% | 16.5ms |      13 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:66185:30` |
| 15.4% |  5.1ms |       4 | `typeArgumentsRelatedTo`        | `./node_modules/typescript/lib/typescript.js:66973:36` |
|  7.7% |  2.5ms |       2 | `isRelatedToWorker2`            | `./node_modules/typescript/lib/typescript.js:68378:34` |
|  7.7% |  2.5ms |       2 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43` |
|  3.8% |  1.3ms |       1 | `isPropertySymbolTypeRelated`   | `./node_modules/typescript/lib/typescript.js:67951:41` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:64785:38`)

|      % |   Time | Samples | Caller                  | Location                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 29.2ms |      23 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33` |

##### `bind` (`./node_modules/typescript/lib/typescript.js:46600:16`)

|     % |   Time | Samples | Caller              | Location                                               |
| ----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 52.4% | 14.0ms |      11 | `visitNode2`        | `./node_modules/typescript/lib/typescript.js:30720:20` |
| 19.0% |  5.1ms |       4 | `bindParameterFlow` | `./node_modules/typescript/lib/typescript.js:46059:29` |
| 14.3% |  3.8ms |       3 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:45224:21` |
| 14.3% |  3.8ms |       3 | `forEach`           | `./node_modules/typescript/lib/typescript.js:2365:17`  |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12765:16`)

|     % |   Time | Samples | Caller                    | Location                                               |
| ----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 95.0% | 24.1ms |      19 | `nextTokenWithoutCheck`   | `./node_modules/typescript/lib/typescript.js:31953:33` |
|  5.0% |  1.3ms |       1 | `parsePropertyNameWorker` | `./node_modules/typescript/lib/typescript.js:32339:35` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:69901:28`)

|     % |  Time | Samples | Caller                        | Location                                               |
| ----: | ----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 26.3% | 6.3ms |       5 | `inferFromTypeArguments`      | `./node_modules/typescript/lib/typescript.js:70136:36` |
| 21.1% | 5.1ms |       4 | `inferTypes`                  | `./node_modules/typescript/lib/typescript.js:69892:22` |
| 15.8% | 3.8ms |       3 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:70146:41` |
| 15.8% | 3.8ms |       3 | `applyToReturnTypes`          | `./node_modules/typescript/lib/typescript.js:69498:30` |
| 10.5% | 2.5ms |       2 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:70432:33` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:66148:29`)

|      % |   Time | Samples | Caller        | Location                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 21.6ms |      17 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:60739:29`)

|     % |  Time | Samples | Caller                                         | Location                                               |
| ----: | ----: | ------: | ---------------------------------------------- | ------------------------------------------------------ |
| 29.4% | 6.3ms |       5 | `createUnionOrIntersectionProperty`            | `./node_modules/typescript/lib/typescript.js:60498:45` |
| 23.5% | 5.1ms |       4 | `getUnmatchedProperties`                       | `./node_modules/typescript/lib/typescript.js:69709:35` |
| 11.8% | 2.5ms |       2 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:75918:56` |
| 11.8% | 2.5ms |       2 | `inferFromProperties`                          | `./node_modules/typescript/lib/typescript.js:70432:33` |
| 11.8% | 2.5ms |       2 | `getTypeOfPropertyOfType`                      | `./node_modules/typescript/lib/typescript.js:57261:35` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:60090:40`)

|     % |  Time | Samples | Caller                          | Location                                               |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 50.0% | 8.9ms |       7 | `getPropertyOfType`             | `./node_modules/typescript/lib/typescript.js:60739:29` |
| 35.7% | 6.3ms |       5 | `getSignaturesOfStructuredType` | `./node_modules/typescript/lib/typescript.js:60782:41` |
|  7.1% | 1.3ms |       1 | `isFunctionObjectType`          | `./node_modules/typescript/lib/typescript.js:70931:32` |
|  7.1% | 1.3ms |       1 | `getTypeOfPropertyOfType`       | `./node_modules/typescript/lib/typescript.js:57261:35` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`)

|      % |   Time | Samples | Caller                    | Location                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 16.5ms |      13 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67207:37` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:61539:31`)

|     % |  Time | Samples | Caller                                 | Location                                               |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 46.2% | 7.6ms |       6 | `createNormalizedTypeReference`        | `./node_modules/typescript/lib/typescript.js:62541:41` |
| 15.4% | 2.5ms |       2 | `createNormalizedTupleType`            | `./node_modules/typescript/lib/typescript.js:62544:37` |
| 15.4% | 2.5ms |       2 | `getTypeWithThisArgument`              | `./node_modules/typescript/lib/typescript.js:59199:35` |
|  7.7% | 1.3ms |       1 | `getNormalizedType`                    | `./node_modules/typescript/lib/typescript.js:66148:29` |
|  7.7% | 1.3ms |       1 | `getTypeFromClassOrInterfaceReference` | `./node_modules/typescript/lib/typescript.js:61596:48` |

##### `getNormalizedUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:66156:48`)

|     % |   Time | Samples | Caller                   | Location                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 92.3% | 15.2ms |      12 | `getNormalizedType`      | `./node_modules/typescript/lib/typescript.js:66148:29` |
|  7.7% |  1.3ms |       1 | `typeArgumentsRelatedTo` | `./node_modules/typescript/lib/typescript.js:66973:36` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location          |
| -----: | -----: | ------: | ---------- | ----------------- |
| 100.0% | 15.2ms |      12 | `statSync` | `node:fs:1745:18` |

##### `instantiateTypeWithAlias` (`./node_modules/typescript/lib/typescript.js:65006:36`)

|      % |   Time | Samples | Caller            | Location                                               |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 15.2ms |      12 | `instantiateType` | `./node_modules/typescript/lib/typescript.js:64996:27` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:64652:25`)

|     % |   Time | Samples | Caller                  | Location                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 66.7% | 10.2ms |       8 | `getMappedType`         | `./node_modules/typescript/lib/typescript.js:64652:25` |
| 25.0% |  3.8ms |       3 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:64807:49` |
|  8.3% |  1.3ms |       1 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js:44997:25`)

|     % |  Time | Samples | Caller                             | Location                                               |
| ----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------ |
| 36.4% | 5.1ms |       4 | `declareModuleMember`              | `./node_modules/typescript/lib/typescript.js:45071:31` |
| 27.3% | 3.8ms |       3 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js:46199:44` |
| 27.3% | 3.8ms |       3 | `bindBlockScopedDeclaration`       | `./node_modules/typescript/lib/typescript.js:46333:38` |
|  9.1% | 1.3ms |       1 | `declareSourceFileMember`          | `./node_modules/typescript/lib/typescript.js:46249:35` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js:59020:41`)

|      % |   Time | Samples | Caller                     | Location                                               |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 14.0ms |      11 | `resolveObjectTypeMembers` | `./node_modules/typescript/lib/typescript.js:59210:36` |

##### `internIdentifier` (`./node_modules/typescript/lib/typescript.js:32276:28`)

|     % |   Time | Samples | Caller                    | Location                                               |
| ----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 80.0% | 10.2ms |       8 | `createIdentifier`        | `./node_modules/typescript/lib/typescript.js:32283:28` |
| 20.0% |  2.5ms |       2 | `parsePropertyNameWorker` | `./node_modules/typescript/lib/typescript.js:32339:35` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js:64640:28`)

|     % |  Time | Samples | Caller                       | Location                                               |
| ----: | ----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 50.0% | 6.3ms |       5 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 40.0% | 5.1ms |       4 | `instantiateTypeWorker`      | `./node_modules/typescript/lib/typescript.js:65023:33` |
| 10.0% | 1.3ms |       1 | `instantiateAnonymousType`   | `./node_modules/typescript/lib/typescript.js:64955:36` |

##### `open` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location         |
| -----: | -----: | ------: | ---------- | ---------------- |
| 100.0% | 12.7ms |      10 | `openSync` | `node:fs:559:18` |

##### `tryStatSync` (`node:fs:389:21`)

|      % |   Time | Samples | Caller         | Location         |
| -----: | -----: | ------: | -------------- | ---------------- |
| 100.0% | 10.2ms |       8 | `readFileSync` | `node:fs:433:22` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 3.8ms |       3 | `readFileSync` | `node:fs:433:22` |

##### `readFileSync` (`node:fs:433:22`)

|     % |  Time | Samples | Caller            | Location                                              |
| ----: | ----: | ------: | ----------------- | ----------------------------------------------------- |
| 50.0% | 1.3ms |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`            |
| 50.0% | 1.3ms |       1 | `readFileWorker`  | `./node_modules/typescript/lib/typescript.js:8722:28` |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Caller     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 2.5ms |       2 | `toString` | `node:buffer:839:46` |

##### `statSync` (`node:fs:1745:18`)

|     % |  Time | Samples | Caller                  | Location                                              |
| ----: | ----: | ------: | ----------------------- | ----------------------------------------------------- |
| 50.0% | 1.3ms |       1 | `statSync`              | `./node_modules/typescript/lib/typescript.js:8602:22` |
| 50.0% | 1.3ms |       1 | `fileSystemEntryExists` | `./node_modules/typescript/lib/typescript.js:8818:35` |

##### `read` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location         |
| -----: | ----: | ------: | ---------- | ---------------- |
| 100.0% | 2.5ms |       2 | `readSync` | `node:fs:695:18` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|      % |  Time | Samples | Caller           | Location                               |
| -----: | ----: | ------: | ---------------- | -------------------------------------- |
| 100.0% | 1.3ms |       1 | `requireBuiltin` | `node:internal/bootstrap/realm:422:24` |

##### `internalBinding` (`node:internal/bootstrap/realm:185:45`)

|      % |  Time | Samples | Caller        | Location      |
| -----: | ----: | ------: | ------------- | ------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:os:1:1` |

##### `(anonymous)` (`node:internal/streams/lazy_transform:1:1`)

|      % |  Time | Samples | Caller                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 1.3ms |       1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |  Time | Samples | Caller     | Location          |
| -----: | ----: | ------: | ---------- | ----------------- |
| 100.0% | 1.3ms |       1 | `statSync` | `node:fs:1745:18` |

##### `isInt32` (`node:internal/validators:45:17`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 1.3ms |       1 | `readFileSync` | `node:fs:433:22` |

##### `readdir` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location          |
| -----: | ----: | ------: | ------------- | ----------------- |
| 100.0% | 1.3ms |       1 | `readdirSync` | `node:fs:1579:21` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location         |
| -----: | ----: | ------: | ----------- | ---------------- |
| 100.0% | 1.3ms |       1 | `closeSync` | `node:fs:516:19` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 90.7% | 2.28s |   1,799 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                               |
| 90.7% | 2.28s |   1,799 | `(anonymous)`                              | `./cpuprofile-run.mjs`                                  |
| 82.0% | 2.06s |   1,626 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17`   |
| 70.4% | 1.77s |   1,396 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41` |
| 70.4% | 1.77s |   1,396 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 70.4% | 1.77s |   1,396 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17`   |
| 70.3% | 1.77s |   1,395 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32` |
| 70.3% | 1.77s |   1,395 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 70.3% | 1.77s |   1,395 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 70.3% | 1.77s |   1,395 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36` |
| 70.3% | 1.77s |   1,395 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |
| 70.3% | 1.77s |   1,395 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34` |
| 70.3% | 1.77s |   1,395 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45` |
| 64.0% | 1.61s |   1,269 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27`  |
| 64.0% | 1.61s |   1,269 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47`  |
| 64.0% | 1.61s |   1,269 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32`  |
| 64.0% | 1.61s |   1,269 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27`  |
| 63.9% | 1.61s |   1,268 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 63.4% | 1.60s |   1,257 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30`  |
| 63.3% | 1.59s |   1,256 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36`  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 82.0% | 2.06s |   1,626 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17`   |
| 70.4% | 1.77s |   1,396 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41` |
| 70.4% | 1.77s |   1,396 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 70.4% | 1.77s |   1,396 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17`   |
| 70.3% | 1.77s |   1,395 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32` |
| 70.3% | 1.77s |   1,395 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 70.3% | 1.77s |   1,395 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 70.3% | 1.77s |   1,395 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36` |
| 70.3% | 1.77s |   1,395 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |
| 70.3% | 1.77s |   1,395 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34` |
| 70.3% | 1.77s |   1,395 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45` |
| 64.0% | 1.61s |   1,269 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27`  |
| 64.0% | 1.61s |   1,269 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47`  |
| 64.0% | 1.61s |   1,269 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32`  |
| 64.0% | 1.61s |   1,269 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27`  |
| 63.9% | 1.61s |   1,268 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 63.4% | 1.60s |   1,257 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30`  |
| 63.3% | 1.59s |   1,256 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36`  |
| 47.8% | 1.20s |     948 | `checkBlock`                               | `./node_modules/typescript/lib/typescript.js:83716:22`  |
| 46.2% | 1.16s |     916 | `checkExpression`                          | `./node_modules/typescript/lib/typescript.js:81476:27`  |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 7.7% | 194.2ms |     153 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % |    Time | Samples | Function                   | Location                                   |
| ---: | ------: | ------: | -------------------------- | ------------------------------------------ |
| 4.3% | 109.2ms |      86 | `(anonymous)`              | `node:internal/modules/cjs/loader:1878:37` |
| 4.3% | 109.2ms |      86 | `(anonymous)`              | `node:internal/modules/cjs/loader:1490:33` |
| 4.3% | 109.2ms |      86 | `(anonymous)`              | `node:internal/modules/cjs/loader:1193:24` |
| 4.3% | 109.2ms |      86 | `wrapModuleLoad`           | `node:internal/modules/cjs/loader:237:24`  |
| 4.3% | 109.2ms |      86 | `(anonymous)`              | `node:internal/modules/cjs/loader:1519:36` |
| 4.3% | 109.2ms |      86 | `require`                  | `node:internal/modules/helpers:146:19`     |
| 4.1% | 104.1ms |      82 | `(anonymous)`              | `node:internal/modules/cjs/loader:1731:37` |
| 3.5% |  87.6ms |      69 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
| 1.4% |  34.3ms |      27 | `readFileSync`             | `node:fs:433:22`                           |
| 0.8% |  19.0ms |      15 | `statSync`                 | `node:fs:1745:18`                          |
| 0.5% |  12.7ms |      10 | `openSync`                 | `node:fs:559:18`                           |
| 0.4% |  10.2ms |       8 | `tryStatSync`              | `node:fs:389:21`                           |
| 0.2% |   5.1ms |       4 | `defaultLoadImpl`          | `node:internal/modules/cjs/loader:1112:25` |
| 0.2% |   5.1ms |       4 | `loadSource`               | `node:internal/modules/cjs/loader:1797:20` |
| 0.2% |   3.8ms |       3 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
| 0.2% |   3.8ms |       3 | `compileForPublicLoader`   | `node:internal/bootstrap/realm:332:25`     |
| 0.2% |   3.8ms |       3 | `loadBuiltinModule`        | `node:internal/modules/helpers:113:27`     |
| 0.2% |   3.8ms |       3 | `loadBuiltinWithHooks`     | `node:internal/modules/cjs/loader:1159:30` |
| 0.1% |   2.5ms |       2 | `requireBuiltin`           | `node:internal/bootstrap/realm:422:24`     |
| 0.1% |   2.5ms |       2 | `slice`                    | `node:buffer:640:12`                       |

##### Native

|    % |   Time | Samples | Function       | Location    |
| ---: | -----: | ------: | -------------- | ----------- |
| 0.6% | 15.2ms |      12 | `stat`         | `<unknown>` |
| 0.5% | 12.7ms |      10 | `open`         | `<unknown>` |
| 0.2% |  3.8ms |       3 | `readFileUtf8` | `<unknown>` |
| 0.2% |  3.8ms |       3 | `(program)`    | `<unknown>` |
| 0.1% |  2.5ms |       2 | `read`         | `<unknown>` |
| 0.1% |  1.3ms |       1 | `readdir`      | `<unknown>` |
| 0.1% |  1.3ms |       1 | `close`        | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|      % |  Time | Samples | Caller        | Location               |
| -----: | ----: | ------: | ------------- | ---------------------- |
| 100.0% | 2.28s |   1,799 | `(anonymous)` | `./cpuprofile-run.mjs` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2365:17`)

|     % |    Time | Samples | Caller                         | Location                                                |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------- |
| 58.2% |   1.20s |     947 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:83716:22`  |
| 37.8% | 780.6ms |     615 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 30.5% | 629.6ms |     496 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:84112:40`  |
| 15.8% | 326.2ms |     257 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:122262:23` |
| 12.9% | 266.5ms |     210 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js:85417:33`  |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123375:41`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,396 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |  Time | Samples | Caller    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 1.77s |   1,396 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2612:17`)

|     % |  Time | Samples | Caller                 | Location                                                |
| ----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 99.9% | 1.77s |   1,395 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:123313:32`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:123327:34` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:123327:34`)

|     % |  Time | Samples | Caller             | Location                  |
| ----: | ----: | ------: | ------------------ | ------------------------- |
| 99.9% | 1.77s |   1,394 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|      % |  Time | Samples | Caller                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:123365:36`)

|      % |  Time | Samples | Caller                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:123384:52`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:123670:34`)

|      % |  Time | Samples | Caller                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123381:45`)

|      % |  Time | Samples | Caller                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:87239:27`)

|      % |  Time | Samples | Caller                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.61s |   1,269 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:87336:47`)

|      % |  Time | Samples | Caller                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.61s |   1,269 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:87343:32`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.61s |   1,269 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:87322:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:87322:27`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.61s |   1,269 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.61s |   1,268 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:86886:30`)

|     % |    Time | Samples | Caller                                                 | Location                                               |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 99.8% |   1.59s |   1,254 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2365:17`  |
| 50.8% | 811.1ms |     639 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:79840:64` |
| 13.6% | 217.0ms |     171 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:85990:37` |
| 13.4% | 213.2ms |     168 | `checkFunctionOrMethodDeclaration`                     | `./node_modules/typescript/lib/typescript.js:83398:44` |
| 10.5% | 167.5ms |     132 | `checkModuleDeclaration`                               | `./node_modules/typescript/lib/typescript.js:86242:34` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:86895:36`)

|      % |  Time | Samples | Caller               | Location                                               |
| -----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 100.0% | 1.59s |   1,256 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js:83716:22`)

|      % |   Time | Samples | Caller                     | Location                                               |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |  1.20s |     948 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36` |
|   3.8% | 45.7ms |      36 | `checkTryStatement`        | `./node_modules/typescript/lib/typescript.js:85102:29` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:81476:27`)

|     % |    Time | Samples | Caller                              | Location                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 58.0% | 674.0ms |     531 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js:81145:33` |
| 46.3% | 538.2ms |     424 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js:81122:45` |
| 32.2% | 374.4ms |     295 | `checkExpressionStatement`          | `./node_modules/typescript/lib/typescript.js:84124:36` |
| 29.8% | 346.5ms |     273 | `checkExpressionForMutableLocation` | `./node_modules/typescript/lib/typescript.js:81239:45` |
| 26.4% | 307.2ms |     242 | `checkNonNullExpression`            | `./node_modules/typescript/lib/typescript.js:75707:34` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|      % |    Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 109.2ms |      86 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |    Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 109.2ms |      86 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |    Time | Samples | Caller           | Location                                  |
| -----: | ------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 109.2ms |      86 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |    Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 109.2ms |      86 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |    Time | Samples | Caller    | Location                               |
| -----: | ------: | ------: | --------- | -------------------------------------- |
| 100.0% | 109.2ms |      86 | `require` | `node:internal/modules/helpers:146:19` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |    Time | Samples | Caller              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 109.2ms |      86 | `typeCheckProject`  | `./tsc-workload.mjs:3:33`                             |
|   2.3% |   2.5ms |       2 | `getNodeSystem`     | `./node_modules/typescript/lib/typescript.js:8460:25` |
|   1.2% |   1.3ms |       1 | `tryGetPerformance` | `./node_modules/typescript/lib/typescript.js:5288:27` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|      % |    Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 104.1ms |      82 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 87.6ms |      69 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `readFileSync` (`node:fs:433:22`)

|     % |   Time | Samples | Caller            | Location                                              |
| ----: | -----: | ------: | ----------------- | ----------------------------------------------------- |
| 85.2% | 29.2ms |      23 | `readFileWorker`  | `./node_modules/typescript/lib/typescript.js:8722:28` |
| 14.8% |  5.1ms |       4 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`            |

##### `statSync` (`node:fs:1745:18`)

|     % |   Time | Samples | Caller                  | Location                                              |
| ----: | -----: | ------: | ----------------------- | ----------------------------------------------------- |
| 93.3% | 17.8ms |      14 | `statSync`              | `./node_modules/typescript/lib/typescript.js:8602:22` |
|  6.7% |  1.3ms |       1 | `fileSystemEntryExists` | `./node_modules/typescript/lib/typescript.js:8818:35` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location          |
| -----: | -----: | ------: | ---------- | ----------------- |
| 100.0% | 15.2ms |      12 | `statSync` | `node:fs:1745:18` |

##### `openSync` (`node:fs:559:18`)

|      % |   Time | Samples | Caller         | Location         |
| -----: | -----: | ------: | -------------- | ---------------- |
| 100.0% | 12.7ms |      10 | `readFileSync` | `node:fs:433:22` |

##### `open` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location         |
| -----: | -----: | ------: | ---------- | ---------------- |
| 100.0% | 12.7ms |      10 | `openSync` | `node:fs:559:18` |

##### `tryStatSync` (`node:fs:389:21`)

|      % |   Time | Samples | Caller         | Location         |
| -----: | -----: | ------: | -------------- | ---------------- |
| 100.0% | 10.2ms |       8 | `readFileSync` | `node:fs:433:22` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 5.1ms |       4 | `loadSource` | `node:internal/modules/cjs/loader:1797:20` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 5.1ms |       4 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|      % |  Time | Samples | Caller                   | Location                               |
| -----: | ----: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 3.8ms |       3 | `compileForPublicLoader` | `node:internal/bootstrap/realm:332:25` |
|  66.7% | 2.5ms |       2 | `requireBuiltin`         | `node:internal/bootstrap/realm:422:24` |

##### `compileForPublicLoader` (`node:internal/bootstrap/realm:332:25`)

|      % |  Time | Samples | Caller              | Location                               |
| -----: | ----: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 3.8ms |       3 | `loadBuiltinModule` | `node:internal/modules/helpers:113:27` |

##### `loadBuiltinModule` (`node:internal/modules/helpers:113:27`)

|      % |  Time | Samples | Caller                 | Location                                   |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 3.8ms |       3 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `loadBuiltinWithHooks` (`node:internal/modules/cjs/loader:1159:30`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 3.8ms |       3 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 3.8ms |       3 | `readFileSync` | `node:fs:433:22` |

##### `requireBuiltin` (`node:internal/bootstrap/realm:422:24`)

|     % |  Time | Samples | Caller        | Location                          |
| ----: | ----: | ------: | ------------- | --------------------------------- |
| 50.0% | 1.3ms |       1 | `(anonymous)` | `node:perf_hooks:1:1`             |
| 50.0% | 1.3ms |       1 | `(anonymous)` | `node:internal/crypto/cipher:1:1` |
| 50.0% | 1.3ms |       1 | `(anonymous)` | `node:crypto:1:1`                 |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Caller     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 2.5ms |       2 | `toString` | `node:buffer:839:46` |

##### `read` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location         |
| -----: | ----: | ------: | ---------- | ---------------- |
| 100.0% | 2.5ms |       2 | `readSync` | `node:fs:695:18` |

##### `readdir` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location          |
| -----: | ----: | ------: | ------------- | ----------------- |
| 100.0% | 1.3ms |       1 | `readdirSync` | `node:fs:1579:21` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location         |
| -----: | ----: | ------: | ----------- | ---------------- |
| 100.0% | 1.3ms |       1 | `closeSync` | `node:fs:516:19` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 77.5% |   1.77s |   1,394 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 17.2% | 392.2ms |     309 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js:122262:23` |
|  4.8% | 109.2ms |      86 | `require`                          | `node:internal/modules/helpers:146:19`                  |
|  0.5% |  11.4ms |       9 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js:40536:42`  |

##### `(anonymous)` (`./cpuprofile-run.mjs`)

|      % |  Time | Samples | Callee             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 2.28s |   1,799 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2365:17`)

|     % |    Time | Samples | Callee               | Location                                                |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------- |
| 77.1% |   1.59s |   1,254 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30`  |
| 12.9% | 266.5ms |     210 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24` |
|  6.7% | 138.3ms |     109 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:45224:21`  |
|  4.8% |  99.0ms |      78 | `bind`               | `./node_modules/typescript/lib/typescript.js:46600:16`  |
|  3.6% |  73.6ms |      58 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123375:41`)

|     % |  Time | Samples | Callee                              | Location                                                |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 99.9% | 1.77s |   1,395 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |  Time | Samples | Callee                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,396 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2612:17`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,396 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:123313:32`)

|      % |  Time | Samples | Callee    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:123327:34`)

|      % |  Time | Samples | Callee                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 91.0% |   1.61s |   1,269 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:87322:27`  |
|  8.8% | 156.1ms |     123 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:123266:26` |
|  0.1% |   1.3ms |       1 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:123405:44` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:123365:36`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:123384:52`)

|      % |  Time | Samples | Callee                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:123670:34`)

|      % |  Time | Samples | Callee                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123381:45`)

|      % |  Time | Samples | Callee                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.77s |   1,395 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:87239:27`)

|     % |  Time | Samples | Callee                              | Location                                               |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 99.9% | 1.61s |   1,268 | `checkSourceFileWorker`             | `./node_modules/typescript/lib/typescript.js:87270:33` |
|  0.1% | 1.3ms |       1 | `registerForUnusedIdentifiersCheck` | `./node_modules/typescript/lib/typescript.js:83441:45` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:87336:47`)

|      % |  Time | Samples | Callee            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.61s |   1,269 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:87343:32`)

|      % |  Time | Samples | Callee                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.61s |   1,269 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:87322:27`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.61s |   1,269 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`)

|     % |    Time | Samples | Callee               | Location                                               |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------ |
| 51.3% | 826.3ms |     651 | `checkDeferredNodes` | `./node_modules/typescript/lib/typescript.js:87179:30` |
| 48.5% | 780.6ms |     615 | `forEach`            | `./node_modules/typescript/lib/typescript.js:2365:17`  |
|  0.2% |   2.5ms |       2 | `addLazyDiagnostic`  | `./node_modules/typescript/lib/typescript.js:87339:25` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:86886:30`)

|     % |  Time | Samples | Callee                         | Location                                               |
| ----: | ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 99.9% | 1.59s |   1,256 | `checkSourceElementWorker`     | `./node_modules/typescript/lib/typescript.js:86895:36` |
|  0.1% | 1.3ms |       1 | `checkUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:82318:40` |
|  0.1% | 1.3ms |       1 | `checkTypeLiteral`             | `./node_modules/typescript/lib/typescript.js:82270:28` |
|  0.1% | 1.3ms |       1 | `canHaveFlowNode`              | `./node_modules/typescript/lib/typescript.js:17829:25` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:86895:36`)

|     % |    Time | Samples | Callee                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 75.5% |   1.20s |     948 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js:83716:22` |
| 39.5% | 629.6ms |     496 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js:84101:36` |
| 39.3% | 627.0ms |     494 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js:84119:34` |
| 23.5% | 374.4ms |     295 | `checkExpressionStatement` | `./node_modules/typescript/lib/typescript.js:84124:36` |
| 21.5% | 342.7ms |     270 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js:82223:34` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js:83716:22`)

|     % |  Time | Samples | Callee          | Location                                               |
| ----: | ----: | ------: | --------------- | ------------------------------------------------------ |
| 99.9% | 1.20s |     947 | `forEach`       | `./node_modules/typescript/lib/typescript.js:2365:17`  |
|  0.1% | 1.3ms |       1 | `isModuleBlock` | `./node_modules/typescript/lib/typescript.js:29324:23` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:81476:27`)

|     % |  Time | Samples | Callee                                          | Location                                               |
| ----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------------ |
| 99.8% | 1.16s |     914 | `checkExpressionWorker`                         | `./node_modules/typescript/lib/typescript.js:81516:33` |
|  0.7% | 7.6ms |       6 | `instantiateTypeWithSingleGenericCallSignature` | `./node_modules/typescript/lib/typescript.js:81266:57` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |    Time | Samples | Callee        | Location                                   |
| ----: | ------: | ------: | ------------- | ------------------------------------------ |
| 95.3% | 104.1ms |      82 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
|  4.7% |   5.1ms |       4 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 109.2ms |      86 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |    Time | Samples | Callee                 | Location                                   |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 109.2ms |      86 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   3.5% |   3.8ms |       3 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 109.2ms |      86 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |    Time | Samples | Callee           | Location                                  |
| -----: | ------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 109.2ms |      86 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 109.2ms |      86 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |   Time | Samples | Callee        | Location                                          |
| ----: | -----: | ------: | ------------- | ------------------------------------------------- |
| 84.1% | 87.6ms |      69 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`        |
| 15.9% | 16.5ms |      13 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |

##### `readFileSync` (`node:fs:433:22`)

|     % |   Time | Samples | Callee         | Location         |
| ----: | -----: | ------: | -------------- | ---------------- |
| 37.0% | 12.7ms |      10 | `openSync`     | `node:fs:559:18` |
| 29.6% | 10.2ms |       8 | `tryStatSync`  | `node:fs:389:21` |
| 11.1% |  3.8ms |       3 | `readFileUtf8` | `<unknown>`      |
|  7.4% |  2.5ms |       2 | `tryReadSync`  | `node:fs:412:21` |
|  3.7% |  1.3ms |       1 | `closeSync`    | `node:fs:516:19` |

##### `statSync` (`node:fs:1745:18`)

|     % |   Time | Samples | Callee                | Location                        |
| ----: | -----: | ------: | --------------------- | ------------------------------- |
| 80.0% | 15.2ms |      12 | `stat`                | `<unknown>`                     |
|  6.7% |  1.3ms |       1 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |

##### `openSync` (`node:fs:559:18`)

|      % |   Time | Samples | Callee | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 12.7ms |      10 | `open` | `<unknown>` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |  Time | Samples | Callee         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 5.1ms |       4 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |  Time | Samples | Callee            | Location                                   |
| -----: | ----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 5.1ms |       4 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|     % |  Time | Samples | Callee        | Location                                   |
| ----: | ----: | ------: | ------------- | ------------------------------------------ |
| 33.3% | 1.3ms |       1 | `(anonymous)` | `node:perf_hooks:1:1`                      |
| 33.3% | 1.3ms |       1 | `(anonymous)` | `node:os:1:1`                              |
| 33.3% | 1.3ms |       1 | `(anonymous)` | `node:internal/streams/lazy_transform:1:1` |
| 33.3% | 1.3ms |       1 | `(anonymous)` | `node:internal/crypto/cipher:1:1`          |
| 33.3% | 1.3ms |       1 | `(anonymous)` | `node:crypto:1:1`                          |

##### `compileForPublicLoader` (`node:internal/bootstrap/realm:332:25`)

|      % |  Time | Samples | Callee                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 3.8ms |       3 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `loadBuiltinModule` (`node:internal/modules/helpers:113:27`)

|      % |  Time | Samples | Callee                   | Location                               |
| -----: | ----: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 3.8ms |       3 | `compileForPublicLoader` | `node:internal/bootstrap/realm:332:25` |

##### `loadBuiltinWithHooks` (`node:internal/modules/cjs/loader:1159:30`)

|      % |  Time | Samples | Callee              | Location                               |
| -----: | ----: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 3.8ms |       3 | `loadBuiltinModule` | `node:internal/modules/helpers:113:27` |

##### `requireBuiltin` (`node:internal/bootstrap/realm:422:24`)

|      % |  Time | Samples | Callee                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 2.5ms |       2 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./cpuprofile-run.mjs`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.5% | 87.6ms |      69 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% |  7.6ms |       6 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.3% |  6.3ms |       5 | `assert` (`./node_modules/typescript/lib/typescript.js:4033:18`) ← `withJSDoc` (31691:21) ← `parseParameterWorker` (33339:32) ← `parseParameter` (33329:26) ← `(anonymous)` (33416:157) ← `parseListElement` (32639:28) ← `parseDelimitedList` (32875:30) ← `parseParametersWorker` (33411:33) ← `parseParameters` (33421:27) ← `parseFunctionDeclaration` (36270:36) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% |  6.3ms |       5 | `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:60739:29`) ← `createUnionOrIntersectionProperty` (60498:45) ← `getUnionOrIntersectionProperty` (60637:42) ← `getPropertyOfUnionOrIntersectionType` (60674:48) ← `getPropertiesOfUnionOrIntersectionType` (60131:50) ← `getReducedType` (60678:26) ← `getReducedApparentType` (60495:34) ← `getPropertyOfType` (60739:29) ← `checkPropertyAccessExpressionOrQualifiedName` (75918:56) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  5.1ms |       4 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  5.1ms |       4 | `getTokenValue` (`./node_modules/typescript/lib/typescript.js:12135:20`) ← `doJSDocScan` (37253:27) ← `scanRange` (13601:21) ← `parseJSDocCommentWorker` (37231:37) ← `(anonymous)` (37204:63) ← `doInsideOfContext` (31856:29) ← `parseJSDocComment` (37200:31) ← `(anonymous)` (31696:71) ← `mapDefined` (2683:20) ← `withJSDoc` (31691:21) ← `parseFunctionDeclaration` (36270:36) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseModuleBlock` (36734:28) ← `parseAmbientExternalModuleDeclaration` (36759:49) ← `parseModuleDeclaration` (36778:34) ← `parseDeclarationWorker` (36069:34) ← `(anonymous)` (36056:56) ← `doInsideOfContext` (31856:29) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  5.1ms |       4 | `getTypeArguments` (`./node_modules/typescript/lib/typescript.js:61572:28`) ← `isTypeReferenceWithGenericArguments` (68697:47) ← `getTypeReferenceId` (68706:32) ← `getGenericTypeReferenceRelationKey` (68700:46) ← `getRelationKey` (68729:26) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getConditionalType` (63974:30) ← `getConditionalTypeInstantiation` (64979:43) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `fillMissingTypeArguments` (60937:36) ← `getEffectiveTypeArguments2` (82183:38) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `visitNode2` (30720:20) ← `forEachChildInConditionalType` (30846:70) ← `forEachChild` (31237:22) ← `checkConditionalType` (82384:32) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkModuleDeclaration` (86242:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  3.8ms |       3 | `readFileUtf8` ← `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |  3.8ms |       3 | `__export` (`./node_modules/typescript/lib/typescript.js:22:16`) ← `(anonymous)` (16:15) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  3.8ms |       3 | `tryStatSync` (`node:fs:389:21`) ← `readFileSync` (433:22) ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js:8722:28`) ← `readFile` (8747:22) ← `readFile` (121562:15) ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  3.8ms |       3 | `open` ← `openSync` (`node:fs:559:18`) ← `readFileSync` (433:22) ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js:8722:28`) ← `readFile` (8747:22) ← `readFile` (121562:15) ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% |  3.8ms |       3 | `scan` (`./node_modules/typescript/lib/typescript.js:12765:16`) ← `nextTokenWithoutCheck` (31953:33) ← `nextToken` (31960:21) ← `tryParseSemicolon` (32220:29) ← `parseSemicolon` (32229:26) ← `parseTypeMemberSemicolon` (33433:36) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseTypeMember` (33536:27) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  3.8ms |       3 | `reducePathComponents` (`./node_modules/typescript/lib/typescript.js:9088:30`) ← `containsPath` (9233:22) ← `getDefaultLibFilePriority` (122773:37) ← `compareDefaultLibFiles` (122770:34) ← `(anonymous)` (3010:16) ← `stableSortIndices` (3009:27) ← `stableSort` (3020:20) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  3.8ms |       3 | `isThisPropertyAccessInConstructor` (`./node_modules/typescript/lib/typescript.js:75909:45`) ← `checkPropertyAccessExpressionOrQualifiedName` (75918:56) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `(anonymous)` (79605:39) ← `traverse` (16743:20) ← `visitNodes` (30723:20) ← `forEachChildInBlock` (31198:29) ← `forEachChild` (31237:22) ← `traverse` (16743:20) ← `forEachReturnStatement` (16741:32) ← `checkAndAggregateReturnExpressionTypes` (79600:50) ← `getReturnTypeFromBody` (79377:33) ← `getReturnTypeOfSignature` (61207:36) ← `getReturnTypeOfSignature` (61207:36) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getVariancesWorker` (68619:30) ← `getVariances` (68613:24) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `getConditionalType` (63974:30) ← `getConditionalTypeInstantiation` (64979:43) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `fillMissingTypeArguments` (60937:36) ← `getEffectiveTypeArguments2` (82183:38) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `visitNode2` (30720:20) ← `forEachChildInConditionalType` (30846:70) ← `forEachChild` (31237:22) ← `checkConditionalType` (82384:32) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkModuleDeclaration` (86242:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) |
| 0.2% |  3.8ms |       3 | `checkImportBinding` (`./node_modules/typescript/lib/typescript.js:86542:30`) ← `forEach` (2365:17) ← `checkImportDeclaration` (86583:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  3.8ms |       3 | `getNormalizedUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:66156:48`) ← `getNormalizedType` (66148:29) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `membersRelatedToIndexInfo` (68416:39) ← `typeRelatedToIndexInfo` (68491:36) ← `indexSignaturesRelatedTo` (68475:38) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `compareTypesAssignable` (65209:34) ← `getInferredType` (70533:27) ← `getInferredTypes` (70570:28) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  3.8ms |       3 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% |  2.5ms |       2 | `getPackageJsonInfo` (`./node_modules/typescript/lib/typescript.js:43688:28`) ← `getPackageScopeForPath` (43629:32) ← `lookupFromPackageJson` (122140:33) ← `getImpliedNodeFormatForFileWorker` (122138:43) ← `getCreateSourceFileOptions` (123978:38) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% |  2.5ms |       2 | `getTokenFullStart` (`./node_modules/typescript/lib/typescript.js:12127:24`) ← `createNodeArray` (32232:27) ← `parseDelimitedList` (32875:30) ← `parseArgumentList` (35247:29) ← `parseCallExpressionRest` (35207:35) ← `parseLeftHandSideExpressionOrHigher` (34719:47) ← `parseUpdateExpression` (34700:33) ← `parseUnaryExpressionOrHigher` (34626:40) ← `parseBinaryExpressionOrHigher` (34549:41) ← `parseAssignmentExpressionOrHigher` (34212:45) ← `parseInitializer` (34206:28) ← `parseVariableDeclaration` (36207:36) ← `parseVariableDeclarationAllowExclamation` (36201:52) ← `parseListElement` (32639:28) ← `parseDelimitedList` (32875:30) ← `parseVariableDeclarationList` (36220:40) ← `parseVariableStatement` (36261:34) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseBlock` (35493:22) ← `parseFunctionBlock` (35517:30) ← `parseFunctionBlockOrSemicolon` (36130:41) ← `parseFunctionDeclaration` (36270:36) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
