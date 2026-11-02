# CPU profile

Took 2.14s over 1,684 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 84.6% |   1.81s |   1,424 |
| Garbage collector  |  5.8% | 124.3ms |      98 |
| Standard library   |  5.6% | 120.5ms |      95 |
| Native             |  3.7% |  79.9ms |      63 |
| Regular expression |  0.2% |   3.8ms |       3 |
| Unknown            |  0.1% |   1.3ms |       1 |

Paths starting with `./` or `../` are relative to `/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1.95s (91.5%) typeCheckProject at ./tsc-workload.mjs:3:33
│   ├── … 1.46s (68.2%) (anonymous) at ./node_modules/typescript/lib/typescript.js:123385:37
│   │   ├── … 1.34s (62.8%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:87270:33
│   │   │   ├── … 738.2ms (34.6%) checkFunctionExpressionOrObjectLiteralMethodDeferred at ./node_modules/typescript/lib/typescript.js:79840:64
│   │   │   │   ├── 716.7ms (33.6%) checkSourceElement at 86886:30
│   │   │   │   │   └── … 716.7ms (33.6%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36
│   │   │   │   │       ├── 370.4ms (17.3%) checkVariableDeclaration at 84101:36
│   │   │   │   │       │   └── 369.1ms (17.3%) checkVariableLikeDeclaration at 83907:40
│   │   │   │   │       │       └── 366.6ms (17.2%) 6 more callees, led by (14.4%) getTypeOfSymbol at 58408:27
│   │   │   │   │       ├── 97.7ms (4.6%) checkTypeReferenceNode at 82223:34
│   │   │   │   │       │   └── 97.7ms (4.6%) checkTypeReferenceOrImport at 82234:38
│   │   │   │   │       │       ├── … 69.8ms (3.3%, self 3.6% globally) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js:67063:36
│   │   │   │   │       │       │   └── 63.4ms (3.0%) 3 more callees, led by (2.9%) structuredTypeRelatedTo at 67207:37
│   │   │   │   │       │       └── 22.8ms (1.1%) getTypeFromTypeNode at 64524:31 …
│   │   │   │   │       └── 247.3ms (11.6%) 9 more callees, led by (9.3%) checkExpressionStatement at 84124:36
│   │   │   │   └── 20.3ms (1.0%) 5 more callees, led by (0.5%) getReturnTypeOfSignature at 61207:36
│   │   │   └── 596.2ms (27.9%) forEach at 2365:17
│   │   │       ├── … 575.9ms (27.0%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:86886:30
│   │   │       │   └── … 575.9ms (27.0%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36
│   │   │       │       ├── 153.5ms (7.2%) checkTypeReferenceNode at 82223:34
│   │   │       │       │   └── 150.9ms (7.1%) checkTypeReferenceOrImport at 82234:38
│   │   │       │       │       ├── … 130.6ms (6.1%) checkTypeArgumentConstraints at ./node_modules/typescript/lib/typescript.js:82186:40
│   │   │       │       │       │   ├── 90.1ms (4.2%) checkTypeAssignableTo at 65233:33
│   │   │       │       │       │   │   └── 90.1ms (4.2%, self 1.4% globally) checkTypeRelatedTo at 66185:30
│   │   │       │       │       │   │       └── … 90.1ms (4.2%, self 3.1% globally) isRelatedTo at ./node_modules/typescript/lib/typescript.js:66493:25
│   │   │       │       │       │   │           └── 87.5ms (4.1%) 4 more callees, led by (2.8%) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js:67063:36
│   │   │       │       │       │   └── … 38.1ms (1.8%, self 1.2% globally) instantiateTypeWorker at ./node_modules/typescript/lib/typescript.js:65023:33
│   │   │       │       │       │       └── 38.1ms (1.8%) 5 more callees, led by (1.5%) getConditionalTypeInstantiation at 64979:43
│   │   │       │       │       └── 20.3ms (1.0%) 2 more callees, led by (0.9%) getTypeFromTypeNode at 64524:31
│   │   │       │       └── 421.1ms (19.7%) 21 more callees, led by (8.8%) checkVariableDeclaration at 84101:36
│   │   │       └── 19.0ms (0.9%) 3 more callees, led by (0.6%) checkParameter at ./node_modules/typescript/lib/typescript.js:81674:26
│   │   └── 114.2ms (5.3%) 2 more callees, led by (5.3%) getTypeChecker at 123266:26
│   ├── … 130.6ms (6.1%) (anonymous) at node:module:1622:37
│   │   ├── 104.0ms (4.9%) wrapSafe at 1596:18
│   │   │   └── 104.0ms (4.9%, self 3.4%) compileFunction at ext:core/01_core.js:1100:22
│   │   │       └── 31.7ms (1.5%) op_compile_function
│   │   └── 26.6ms (1.2%) (anonymous) at ./node_modules/typescript/lib/typescript.js:1:1 …
│   └── 360.2ms (16.9%) 2 more callees, led by (16.3%) createProgram at ./node_modules/typescript/lib/typescript.js:122262:23
├── 124.3ms (5.8%) (garbage collector)
└── 57.1ms (2.7%) 30 more root frames, led by (0.6%) (program)
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                               |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 5.8% | 124.3ms |      98 | `(garbage collector)`           | `<unknown>`                                            |
| 3.6% |  77.4ms |      61 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 3.4% |  72.3ms |      57 | `compileFunction`               | `ext:core/01_core.js:1100:22`                          |
| 3.1% |  67.2ms |      53 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66493:25` |
| 1.8% |  38.1ms |      30 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 1.5% |  31.7ms |      25 | `op_compile_function`           | `<unknown>`                                            |
| 1.4% |  29.2ms |      23 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:66185:30` |
| 1.2% |  25.4ms |      20 | `instantiateTypeWorker`         | `./node_modules/typescript/lib/typescript.js:65023:33` |
| 1.1% |  24.1ms |      19 | `getObjectFlags`                | `./node_modules/typescript/lib/typescript.js:20242:24` |
| 1.1% |  24.1ms |      19 | `getReducedApparentType`        | `./node_modules/typescript/lib/typescript.js:60495:34` |
| 1.1% |  22.8ms |      18 | `inferFromTypes`                | `./node_modules/typescript/lib/typescript.js:69901:28` |
| 0.9% |  19.0ms |      15 | `buildCustomError`              | `ext:core/00_infra.js:94:28`                           |
| 0.9% |  19.0ms |      15 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43` |
| 0.8% |  17.8ms |      14 | `op_fs_stat_sync`               | `<unknown>`                                            |
| 0.8% |  16.5ms |      13 | `scan`                          | `./node_modules/typescript/lib/typescript.js:12765:16` |
| 0.8% |  16.5ms |      13 | `bind`                          | `./node_modules/typescript/lib/typescript.js:46600:16` |
| 0.8% |  16.5ms |      13 | `isTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:66101:27` |
| 0.7% |  15.2ms |      12 | `getMappedType`                 | `./node_modules/typescript/lib/typescript.js:64652:25` |
| 0.7% |  15.2ms |      12 | `createTypeReference`           | `./node_modules/typescript/lib/typescript.js:61539:31` |
| 0.7% |  14.0ms |      11 | `bindWorker`                    | `./node_modules/typescript/lib/typescript.js:46663:22` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|    % |   Time | Samples | Function                        | Location                                               |
| ---: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 3.6% | 77.4ms |      61 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 3.1% | 67.2ms |      53 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66493:25` |
| 1.8% | 38.1ms |      30 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 1.4% | 29.2ms |      23 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:66185:30` |
| 1.2% | 25.4ms |      20 | `instantiateTypeWorker`         | `./node_modules/typescript/lib/typescript.js:65023:33` |
| 1.1% | 24.1ms |      19 | `getObjectFlags`                | `./node_modules/typescript/lib/typescript.js:20242:24` |
| 1.1% | 24.1ms |      19 | `getReducedApparentType`        | `./node_modules/typescript/lib/typescript.js:60495:34` |
| 1.1% | 22.8ms |      18 | `inferFromTypes`                | `./node_modules/typescript/lib/typescript.js:69901:28` |
| 0.9% | 19.0ms |      15 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43` |
| 0.8% | 16.5ms |      13 | `scan`                          | `./node_modules/typescript/lib/typescript.js:12765:16` |
| 0.8% | 16.5ms |      13 | `bind`                          | `./node_modules/typescript/lib/typescript.js:46600:16` |
| 0.8% | 16.5ms |      13 | `isTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:66101:27` |
| 0.7% | 15.2ms |      12 | `getMappedType`                 | `./node_modules/typescript/lib/typescript.js:64652:25` |
| 0.7% | 15.2ms |      12 | `createTypeReference`           | `./node_modules/typescript/lib/typescript.js:61539:31` |
| 0.7% | 14.0ms |      11 | `bindWorker`                    | `./node_modules/typescript/lib/typescript.js:46663:22` |
| 0.7% | 14.0ms |      11 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:66148:29` |
| 0.6% | 12.7ms |      10 | `some`                          | `./node_modules/typescript/lib/typescript.js:2781:14`  |
| 0.6% | 12.7ms |      10 | `resolveObjectTypeMembers`      | `./node_modules/typescript/lib/typescript.js:59210:36` |
| 0.5% | 11.4ms |       9 | `nextTokenWithoutCheck`         | `./node_modules/typescript/lib/typescript.js:31953:33` |
| 0.5% | 11.4ms |       9 | `getApparentType`               | `./node_modules/typescript/lib/typescript.js:60490:27` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 5.8% | 124.3ms |      98 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % |   Time | Samples | Function               | Location                                        |
| ---: | -----: | ------: | ---------------------- | ----------------------------------------------- |
| 3.4% | 72.3ms |      57 | `compileFunction`      | `ext:core/01_core.js:1100:22`                   |
| 0.9% | 19.0ms |      15 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                    |
| 0.5% | 11.4ms |       9 | `NotFound`             | `ext:runtime/01_errors.js:7:14`                 |
| 0.2% |  3.8ms |       3 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                    |
| 0.2% |  3.8ms |       3 | `SafeIterator`         | `ext:core/00_primordials.js:316:18`             |
| 0.1% |  2.5ms |       2 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`                    |
| 0.1% |  1.3ms |       1 | `loadMaybeCjs`         | `node:module:1669:22`                           |
| 0.1% |  1.3ms |       1 | `decodeUtf8`           | `ext:deno_node/internal/buffer.mjs:706:20`      |
| 0.1% |  1.3ms |       1 | `FastBuffer`           | `ext:deno_node/internal/buffer.mjs:192:14`      |
| 0.1% |  1.3ms |       1 | `value`                | `ext:deno_node/internal/fs/stat_utils.ts:30:14` |
| 0.1% |  1.3ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:554:8`     |
| 0.1% |  1.3ms |       1 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`    |

##### Native

|    % |   Time | Samples | Function                 | Location    |
| ---: | -----: | ------: | ------------------------ | ----------- |
| 1.5% | 31.7ms |      25 | `op_compile_function`    | `<unknown>` |
| 0.8% | 17.8ms |      14 | `op_fs_stat_sync`        | `<unknown>` |
| 0.6% | 12.7ms |      10 | `(program)`              | `<unknown>` |
| 0.3% |  6.3ms |       5 | `op_fs_read_file_sync`   | `<unknown>` |
| 0.2% |  3.8ms |       3 | `op_require_read_file`   | `<unknown>` |
| 0.1% |  2.5ms |       2 | `op_node_encoding_slice` | `<unknown>` |
| 0.1% |  2.5ms |       2 | `op_fs_realpath_sync`    | `<unknown>` |
| 0.1% |  1.3ms |       1 | `op_require_real_path`   | `<unknown>` |
| 0.1% |  1.3ms |       1 | `op_fs_read_dir_sync`    | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 60.7% | 46.9ms |      37 | `./node_modules/typescript/lib/typescript.js:67076` |
| 14.8% | 11.4ms |       9 | `./node_modules/typescript/lib/typescript.js:67068` |
|  6.6% |  5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67063` |
|  4.9% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:67135` |
|  4.9% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:67102` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 72.3ms |      57 | `ext:core/01_core.js:1106` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 39.6% | 26.6ms |      21 | `./node_modules/typescript/lib/typescript.js:66510` |
| 30.2% | 20.3ms |      16 | `./node_modules/typescript/lib/typescript.js:66505` |
|  3.8% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66590` |
|  3.8% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66588` |
|  3.8% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66493` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:64785:38`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 46.7% | 17.8ms |      14 | `./node_modules/typescript/lib/typescript.js:64815` |
| 10.0% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:64819` |
| 10.0% |  3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:64805` |
|  3.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64813` |
|  3.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64787` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 31.7ms |      25 | 1106     |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 60.9% | 17.8ms |      14 | `./node_modules/typescript/lib/typescript.js:66185` |
| 26.1% |  7.6ms |       6 | `./node_modules/typescript/lib/typescript.js:66236` |
|  8.7% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66204` |
|  4.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66202` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:65023:33`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 45.0% | 11.4ms |       9 | `./node_modules/typescript/lib/typescript.js:65039` |
| 10.0% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:65051` |
|  5.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65024` |
|  5.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65065` |
|  5.0% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65025` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:20242:24`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 57.9% | 14.0ms |      11 | `./node_modules/typescript/lib/typescript.js:20243` |
| 42.1% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:20242` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:60495:34`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 89.5% | 21.6ms |      17 | `./node_modules/typescript/lib/typescript.js:60496` |
| 10.5% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:60495` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:69901:28`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 22.2% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:69902` |
| 16.7% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:70032` |
| 11.1% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:69929` |
| 11.1% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:70062` |
|  5.6% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:69947` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |   Time | Samples | Location                   |
| ----: | -----: | ------: | -------------------------- |
| 73.3% | 14.0ms |      11 | `ext:core/00_infra.js:105` |
|  6.7% |  1.3ms |       1 | `ext:core/00_infra.js:97`  |
|  6.7% |  1.3ms |       1 | `ext:core/00_infra.js:95`  |
|  6.7% |  1.3ms |       1 | `ext:core/00_infra.js:108` |
|  6.7% |  1.3ms |       1 | `ext:core/00_infra.js:115` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 26.7% | 5.1ms |       4 | `./node_modules/typescript/lib/typescript.js:67753` |
| 13.3% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67764` |
| 13.3% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:67720` |
|  6.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67400` |
|  6.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:67277` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 17.8ms |      14 | 474      |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12765:16`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 23.1% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:12765` |
| 23.1% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:12951` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:12952` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:12967` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:12959` |

##### `bind` (`./node_modules/typescript/lib/typescript.js:46600:16`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 46.2% | 7.6ms |       6 | `./node_modules/typescript/lib/typescript.js:46608` |
| 15.4% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:46614` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:46612` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:46623` |
|  7.7% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:46600` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66101:27`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 69.2% | 11.4ms |       9 | `./node_modules/typescript/lib/typescript.js:66135` |
|  7.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66115` |
|  7.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66106` |
|  7.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66101` |
|  7.7% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66112` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:64652:25`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 25.0% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:64683` |
| 16.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:64661` |
| 16.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:64677` |
| 16.7% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:64653` |
|  8.3% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64655` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:61539:31`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 75.0% | 11.4ms |       9 | `./node_modules/typescript/lib/typescript.js:61541` |
| 16.7% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:61544` |
|  8.3% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61540` |

##### `bindWorker` (`./node_modules/typescript/lib/typescript.js:46663:22`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 27.3% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:46664` |
| 18.2% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:46663` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:46857` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:46666` |
|  9.1% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:46776` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:66148:29`)

|     % |   Time | Samples | Location                                            |
| ----: | -----: | ------: | --------------------------------------------------- |
| 72.7% | 10.1ms |       8 | `./node_modules/typescript/lib/typescript.js:66150` |
| 18.2% |  2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:66148` |
|  9.1% |  1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66152` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2781:14`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 50.0% | 6.3ms |       5 | `./node_modules/typescript/lib/typescript.js:2784` |
| 30.0% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:2785` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:2782` |

##### `resolveObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:59210:36`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 30.0% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:59223` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:59233` |
| 20.0% | 2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:59234` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:59247` |
| 10.0% | 1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:59245` |

##### `nextTokenWithoutCheck` (`./node_modules/typescript/lib/typescript.js:31953:33`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 11.4ms |       9 | `./node_modules/typescript/lib/typescript.js:31954` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:60490:27`)

|     % |  Time | Samples | Location                                            |
| ----: | ----: | ------: | --------------------------------------------------- |
| 66.7% | 7.6ms |       6 | `./node_modules/typescript/lib/typescript.js:60493` |
| 33.3% | 3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:60490` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |   Time | Samples | Location                     |
| -----: | -----: | ------: | ---------------------------- |
| 100.0% | 11.4ms |       9 | `ext:runtime/01_errors.js:8` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 6.3ms |       5 | 409      |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 3.8ms |       3 | `ext:deno_node/fs.ts:270` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 3.8ms |       3 | `ext:core/00_primordials.js:318` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 1670     |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 2.5ms |       2 | `ext:deno_node/fs.ts:117` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 707      |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 281      |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.3ms |       1 | `node:module:1670` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/buffer.mjs:707` |

##### `FastBuffer` (`ext:deno_node/internal/buffer.mjs:192:14`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/buffer.mjs:193` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:30` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:554:8`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:555` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:527` |

##### `op_require_real_path` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 811      |

##### `op_fs_read_dir_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 121      |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`)

|      % |   Time | Samples | Caller        | Location                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 77.4ms |      61 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Caller     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 72.3ms |      57 | `wrapSafe` | `node:module:1596:18` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Caller                                 | Location                                               |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 73.6% | 49.5ms |      39 | `checkTypeRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66185:30` |
|  9.4% |  6.3ms |       5 | `isRelatedToWorker2`                   | `./node_modules/typescript/lib/typescript.js:68378:34` |
|  7.5% |  5.1ms |       4 | `eachTypeRelatedToType`                | `./node_modules/typescript/lib/typescript.js:66935:35` |
|  3.8% |  2.5ms |       2 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:68568:48` |
|  1.9% |  1.3ms |       1 | `isPropertySymbolTypeRelated`          | `./node_modules/typescript/lib/typescript.js:67951:41` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:64785:38`)

|      % |   Time | Samples | Caller                  | Location                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 38.1ms |      30 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 31.7ms |      25 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`)

|      % |   Time | Samples | Caller            | Location                                               |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 29.2ms |      23 | `isTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66101:27` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:65023:33`)

|      % |   Time | Samples | Caller                     | Location                                               |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 25.4ms |      20 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:65006:36` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:20242:24`)

|     % |  Time | Samples | Caller                                 | Location                                               |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 15.8% | 3.8ms |       3 | `isNonDeferredTypeReference`           | `./node_modules/typescript/lib/typescript.js:68694:38` |
| 10.5% | 2.5ms |       2 | `getSingleBaseForNonAugmentingSubtype` | `./node_modules/typescript/lib/typescript.js:68988:48` |
| 10.5% | 2.5ms |       2 | `getRecursionIdentity`                 | `./node_modules/typescript/lib/typescript.js:68813:32` |
| 10.5% | 2.5ms |       2 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js:64785:38` |
|  5.3% | 1.3ms |       1 | `getMappedTargetWithSymbol`            | `./node_modules/typescript/lib/typescript.js:68797:37` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:60495:34`)

|     % |   Time | Samples | Caller                     | Location                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 57.9% | 14.0ms |      11 | `getSignaturesOfType`      | `./node_modules/typescript/lib/typescript.js:60789:31` |
| 15.8% |  3.8ms |       3 | `getPropertyOfType`        | `./node_modules/typescript/lib/typescript.js:60739:29` |
| 10.5% |  2.5ms |       2 | `getIndexInfosOfType`      | `./node_modules/typescript/lib/typescript.js:60855:31` |
| 10.5% |  2.5ms |       2 | `getPropertiesOfType`      | `./node_modules/typescript/lib/typescript.js:60156:31` |
|  5.3% |  1.3ms |       1 | `resolveObjectTypeMembers` | `./node_modules/typescript/lib/typescript.js:59210:36` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:69901:28`)

|     % |  Time | Samples | Caller                        | Location                                               |
| ----: | ----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 33.3% | 7.6ms |       6 | `inferFromTypeArguments`      | `./node_modules/typescript/lib/typescript.js:70136:36` |
| 27.8% | 6.3ms |       5 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:70146:41` |
| 11.1% | 2.5ms |       2 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:70432:33` |
|  5.6% | 1.3ms |       1 | `inferTypes`                  | `./node_modules/typescript/lib/typescript.js:69892:22` |
|  5.6% | 1.3ms |       1 | `applyToReturnTypes`          | `./node_modules/typescript/lib/typescript.js:69498:30` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |   Time | Samples | Caller            | Location    |
| -----: | -----: | ------: | ----------------- | ----------- |
| 100.0% | 19.0ms |      15 | `op_fs_stat_sync` | `<unknown>` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`)

|      % |   Time | Samples | Caller                    | Location                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 19.0ms |      15 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67207:37` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 17.8ms |      14 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12765:16`)

|      % |   Time | Samples | Caller                  | Location                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 16.5ms |      13 | `nextTokenWithoutCheck` | `./node_modules/typescript/lib/typescript.js:31953:33` |

##### `bind` (`./node_modules/typescript/lib/typescript.js:46600:16`)

|     % |  Time | Samples | Caller              | Location                                               |
| ----: | ----: | ------: | ------------------- | ------------------------------------------------------ |
| 46.2% | 7.6ms |       6 | `visitNode2`        | `./node_modules/typescript/lib/typescript.js:30720:20` |
| 38.5% | 6.3ms |       5 | `forEach`           | `./node_modules/typescript/lib/typescript.js:2365:17`  |
|  7.7% | 1.3ms |       1 | `bindSourceFile2`   | `./node_modules/typescript/lib/typescript.js:44851:27` |
|  7.7% | 1.3ms |       1 | `bindParameterFlow` | `./node_modules/typescript/lib/typescript.js:46059:29` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66101:27`)

|     % |   Time | Samples | Caller                                     | Location                                               |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------ |
| 69.2% | 11.4ms |       9 | `isTypeIdenticalTo`                        | `./node_modules/typescript/lib/typescript.js:65203:29` |
| 15.4% |  2.5ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:65249:52` |
|  7.7% |  1.3ms |       1 | `isTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:65221:30` |
|  7.7% |  1.3ms |       1 | `isApplicableIndexType`                    | `./node_modules/typescript/lib/typescript.js:60845:33` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:64652:25`)

|     % |  Time | Samples | Caller                  | Location                                               |
| ----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 50.0% | 7.6ms |       6 | `getMappedType`         | `./node_modules/typescript/lib/typescript.js:64652:25` |
| 25.0% | 3.8ms |       3 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:64807:49` |
| 16.7% | 2.5ms |       2 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:61539:31`)

|     % |   Time | Samples | Caller                          | Location                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------ |
| 91.7% | 14.0ms |      11 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:62541:41` |
|  8.3% |  1.3ms |       1 | `getTypeWithThisArgument`       | `./node_modules/typescript/lib/typescript.js:59199:35` |

##### `bindWorker` (`./node_modules/typescript/lib/typescript.js:46663:22`)

|      % |   Time | Samples | Caller | Location                                               |
| -----: | -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 14.0ms |      11 | `bind` | `./node_modules/typescript/lib/typescript.js:46600:16` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:66148:29`)

|      % |   Time | Samples | Caller        | Location                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 14.0ms |      11 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2781:14`)

|     % |  Time | Samples | Caller                                | Location                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 20.0% | 2.5ms |       2 | `isTypeReferenceWithGenericArguments` | `./node_modules/typescript/lib/typescript.js:68697:47` |
| 20.0% | 2.5ms |       2 | `isReadonlySymbol`                    | `./node_modules/typescript/lib/typescript.js:79911:28` |
| 10.0% | 1.3ms |       1 | `hasModifierOfKind`                   | `./node_modules/typescript/lib/typescript.js:30751:27` |
| 10.0% | 1.3ms |       1 | `hasMatchingRecursionIdentity`        | `./node_modules/typescript/lib/typescript.js:68804:40` |
| 10.0% | 1.3ms |       1 | `instantiateContextualType`           | `./node_modules/typescript/lib/typescript.js:74222:37` |

##### `resolveObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:59210:36`)

|      % |   Time | Samples | Caller                        | Location                                               |
| -----: | -----: | ------: | ----------------------------- | ------------------------------------------------------ |
| 100.0% | 12.7ms |      10 | `resolveTypeReferenceMembers` | `./node_modules/typescript/lib/typescript.js:59264:39` |

##### `nextTokenWithoutCheck` (`./node_modules/typescript/lib/typescript.js:31953:33`)

|     % |   Time | Samples | Caller             | Location                                               |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 88.9% | 10.1ms |       8 | `nextToken`        | `./node_modules/typescript/lib/typescript.js:31960:21` |
| 11.1% |  1.3ms |       1 | `createIdentifier` | `./node_modules/typescript/lib/typescript.js:32283:28` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:60490:27`)

|     % |  Time | Samples | Caller                              | Location                                               |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 66.7% | 7.6ms |       6 | `getReducedApparentType`            | `./node_modules/typescript/lib/typescript.js:60495:34` |
| 11.1% | 1.3ms |       1 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45` |
| 11.1% | 1.3ms |       1 | `getEffectsSignature`               | `./node_modules/typescript/lib/typescript.js:71434:31` |
| 11.1% | 1.3ms |       1 | `inferFromTypes`                    | `./node_modules/typescript/lib/typescript.js:69901:28` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |   Time | Samples | Caller        | Location                      |
| -----: | -----: | ------: | ------------- | ----------------------------- |
| 100.0% | 11.4ms |       9 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 6.3ms |       5 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 3.8ms |       3 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 3.8ms |       3 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 3.8ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 2.5ms |       2 | `realpathSyncImpl` | `ext:deno_node/fs.ts:148:28` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 2.5ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 2.5ms |       2 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:module:1653:37` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Caller     | Location                                   |
| -----: | ----: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `toString` | `ext:deno_node/internal/buffer.mjs:751:46` |

##### `FastBuffer` (`ext:deno_node/internal/buffer.mjs:192:14`)

|      % |  Time | Samples | Caller            | Location                                    |
| -----: | ----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 1.3ms |       1 | `fromArrayBuffer` | `ext:deno_node/internal/buffer.mjs:1244:25` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|      % |  Time | Samples | Caller                  | Location                                              |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `fileSystemEntryExists` | `./node_modules/typescript/lib/typescript.js:8818:35` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:554:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `op_require_real_path` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location             |
| -----: | ----: | ------: | ------------ | -------------------- |
| 100.0% | 1.3ms |       1 | `toRealPath` | `node:module:806:20` |

##### `op_fs_read_dir_sync` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `readdirSync` | `ext:deno_node/_fs/_fs_readdir.ts:109:28` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |  Time | Samples | Function                                   | Location                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 91.5% | 1.95s |   1,541 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                               |
| 91.5% | 1.95s |   1,541 | `(anonymous)`                              | `./cpuprofile-run.mjs`                                  |
| 91.5% | 1.95s |   1,541 | `op_run_microtasks`                        | `<unknown>`                                             |
| 91.5% | 1.95s |   1,541 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                            |
| 91.5% | 1.95s |   1,541 | `drainTicks`                               | `ext:core/01_core.js:425:22`                            |
| 91.5% | 1.95s |   1,541 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                            |
| 80.0% | 1.71s |   1,347 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17`   |
| 68.2% | 1.46s |   1,149 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41` |
| 68.2% | 1.46s |   1,149 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 68.2% | 1.46s |   1,149 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17`   |
| 68.2% | 1.46s |   1,149 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32` |
| 68.2% | 1.46s |   1,149 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 68.2% | 1.46s |   1,148 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 68.2% | 1.46s |   1,148 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36` |
| 68.2% | 1.46s |   1,148 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |
| 68.2% | 1.46s |   1,148 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34` |
| 68.2% | 1.46s |   1,148 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45` |
| 62.8% | 1.34s |   1,058 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 62.8% | 1.34s |   1,058 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27`  |
| 62.8% | 1.34s |   1,058 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47`  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function                                   | Location                                                |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 80.0% |   1.71s |   1,347 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17`   |
| 68.2% |   1.46s |   1,149 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41` |
| 68.2% |   1.46s |   1,149 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 68.2% |   1.46s |   1,149 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17`   |
| 68.2% |   1.46s |   1,149 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32` |
| 68.2% |   1.46s |   1,149 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 68.2% |   1.46s |   1,148 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 68.2% |   1.46s |   1,148 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36` |
| 68.2% |   1.46s |   1,148 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |
| 68.2% |   1.46s |   1,148 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34` |
| 68.2% |   1.46s |   1,148 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45` |
| 62.8% |   1.34s |   1,058 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 62.8% |   1.34s |   1,058 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27`  |
| 62.8% |   1.34s |   1,058 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47`  |
| 62.8% |   1.34s |   1,058 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32`  |
| 62.8% |   1.34s |   1,058 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27`  |
| 61.8% |   1.32s |   1,040 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36`  |
| 61.7% |   1.32s |   1,039 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30`  |
| 46.7% | 998.2ms |     787 | `checkExpression`                          | `./node_modules/typescript/lib/typescript.js:81476:27`  |
| 46.7% | 997.0ms |     786 | `checkExpressionWorker`                    | `./node_modules/typescript/lib/typescript.js:81516:33`  |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 5.8% | 124.3ms |      98 | `(garbage collector)` | `<unknown>` |

##### Standard library

|     % |    Time | Samples | Function                       | Location                        |
| ----: | ------: | ------: | ------------------------------ | ------------------------------- |
| 91.5% |   1.95s |   1,541 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`    |
| 91.5% |   1.95s |   1,541 | `drainTicks`                   | `ext:core/01_core.js:425:22`    |
| 91.5% |   1.95s |   1,541 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`    |
|  6.4% | 137.0ms |     108 | `(anonymous)`                  | `node:module:1050:24`           |
|  6.4% | 137.0ms |     108 | `(anonymous)`                  | `node:module:1525:36`           |
|  6.4% | 137.0ms |     108 | `require`                      | `node:module:1752:35`           |
|  6.4% | 135.7ms |     107 | `loadMaybeCjs`                 | `node:module:1669:22`           |
|  6.4% | 135.7ms |     107 | `(anonymous)`                  | `node:module:1653:37`           |
|  6.4% | 135.7ms |     107 | `(anonymous)`                  | `node:module:1438:33`           |
|  6.1% | 130.6ms |     103 | `(anonymous)`                  | `node:module:1622:37`           |
|  4.9% | 104.0ms |      82 | `compileFunction`              | `ext:core/01_core.js:1100:22`   |
|  4.9% | 104.0ms |      82 | `wrapSafe`                     | `node:module:1596:18`           |
|  2.6% |  55.8ms |      44 | `statSync`                     | `ext:deno_node/fs.ts:97:20`     |
|  2.5% |  53.3ms |      42 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`   |
|  1.6% |  34.2ms |      27 | `buildCustomError`             | `ext:core/00_infra.js:94:28`    |
|  0.5% |  11.4ms |       9 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`    |
|  0.5% |  11.4ms |       9 | `NotFound`                     | `ext:runtime/01_errors.js:7:14` |
|  0.5% |  11.4ms |       9 | `(anonymous)`                  | `ext:core/00_infra.js:127:37`   |
|  0.2% |   5.1ms |       4 | `realpathSyncImpl`             | `ext:deno_node/fs.ts:148:28`    |
|  0.2% |   5.1ms |       4 | `realpathSync_native`          | `ext:deno_node/fs.ts:164:53`    |

##### Native

|     % |   Time | Samples | Function                 | Location    |
| ----: | -----: | ------: | ------------------------ | ----------- |
| 91.5% |  1.95s |   1,541 | `op_run_microtasks`      | `<unknown>` |
|  2.4% | 52.0ms |      41 | `op_fs_stat_sync`        | `<unknown>` |
|  1.5% | 31.7ms |      25 | `op_compile_function`    | `<unknown>` |
|  0.6% | 12.7ms |      10 | `(program)`              | `<unknown>` |
|  0.3% |  6.3ms |       5 | `op_fs_read_file_sync`   | `<unknown>` |
|  0.2% |  3.8ms |       3 | `op_require_read_file`   | `<unknown>` |
|  0.1% |  2.5ms |       2 | `op_node_encoding_slice` | `<unknown>` |
|  0.1% |  2.5ms |       2 | `op_fs_realpath_sync`    | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_require_real_path`   | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_fs_read_dir_sync`    | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|      % |  Time | Samples | Caller        | Location               |
| -----: | ----: | ------: | ------------- | ---------------------- |
| 100.0% | 1.95s |   1,541 | `(anonymous)` | `./cpuprofile-run.mjs` |

##### `(anonymous)` (`./cpuprofile-run.mjs`)

|      % |  Time | Samples | Caller              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 1.95s |   1,541 | `op_run_microtasks` | `<unknown>` |

##### `op_run_microtasks` (`<unknown>`)

|      % |  Time | Samples | Caller                      | Location                     |
| -----: | ----: | ------: | --------------------------- | ---------------------------- |
| 100.0% | 1.95s |   1,541 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|      % |  Time | Samples | Caller       | Location                     |
| -----: | ----: | ------: | ------------ | ---------------------------- |
| 100.0% | 1.95s |   1,541 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|      % |  Time | Samples | Caller                         | Location                     |
| -----: | ----: | ------: | ------------------------------ | ---------------------------- |
| 100.0% | 1.95s |   1,541 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2365:17`)

|     % |    Time | Samples | Caller                         | Location                                                |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------- |
| 57.8% | 986.8ms |     778 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:83716:22`  |
| 34.9% | 596.2ms |     470 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 33.5% | 572.1ms |     451 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:84112:40`  |
| 16.7% | 285.4ms |     225 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:122262:23` |
| 10.5% | 178.8ms |     141 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js:85417:33`  |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123375:41`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,149 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |  Time | Samples | Caller    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 1.46s |   1,149 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2612:17`)

|      % |  Time | Samples | Caller                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,149 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:123313:32`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,149 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:123327:34` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:123327:34`)

|      % |  Time | Samples | Caller             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 1.46s |   1,149 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|      % |  Time | Samples | Caller                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:123365:36`)

|      % |  Time | Samples | Caller                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:123384:52`)

|      % |  Time | Samples | Caller                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:123670:34`)

|      % |  Time | Samples | Caller                              | Location                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123381:45`)

|      % |  Time | Samples | Caller                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.34s |   1,058 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:87239:27`)

|      % |  Time | Samples | Caller                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.34s |   1,058 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:87336:47`)

|      % |  Time | Samples | Caller                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.34s |   1,058 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:87343:32`)

|      % |  Time | Samples | Caller            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.34s |   1,058 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:87322:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:87322:27`)

|      % |  Time | Samples | Caller        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.34s |   1,058 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:86895:36`)

|     % |  Time | Samples | Caller               | Location                                               |
| ----: | ----: | ------: | -------------------- | ------------------------------------------------------ |
| 99.9% | 1.32s |   1,039 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:86886:30`)

|     % |    Time | Samples | Caller                                                 | Location                                               |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 99.9% |   1.32s |   1,038 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2365:17`  |
| 54.4% | 716.7ms |     565 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:79840:64` |
| 13.8% | 181.4ms |     143 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:85990:37` |
| 10.9% | 143.3ms |     113 | `checkFunctionOrMethodDeclaration`                     | `./node_modules/typescript/lib/typescript.js:83398:44` |
|  9.2% | 121.8ms |      96 | `checkModuleDeclaration`                               | `./node_modules/typescript/lib/typescript.js:86242:34` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:81476:27`)

|     % |    Time | Samples | Caller                              | Location                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 59.2% | 591.1ms |     466 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js:81145:33` |
| 46.9% | 468.0ms |     369 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js:81122:45` |
| 31.1% | 310.8ms |     245 | `checkExpressionForMutableLocation` | `./node_modules/typescript/lib/typescript.js:81239:45` |
| 30.6% | 305.7ms |     241 | `checkExpressionStatement`          | `./node_modules/typescript/lib/typescript.js:84124:36` |
| 24.0% | 239.7ms |     189 | `checkNonNullExpression`            | `./node_modules/typescript/lib/typescript.js:75707:34` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js:81516:33`)

|      % |    Time | Samples | Caller            | Location                                               |
| -----: | ------: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 997.0ms |     786 | `checkExpression` | `./node_modules/typescript/lib/typescript.js:81476:27` |

##### `(anonymous)` (`node:module:1050:24`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 137.0ms |     108 | `(anonymous)` | `node:module:1525:36` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |    Time | Samples | Caller    | Location              |
| -----: | ------: | ------: | --------- | --------------------- |
| 100.0% | 137.0ms |     108 | `require` | `node:module:1752:35` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Caller             | Location                  |
| -----: | ------: | ------: | ------------------ | ------------------------- |
| 100.0% | 137.0ms |     108 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 135.7ms |     107 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1653:37`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 135.7ms |     107 | `(anonymous)` | `node:module:1438:33` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 135.7ms |     107 | `(anonymous)` | `node:module:1050:24` |

##### `(anonymous)` (`node:module:1622:37`)

|      % |    Time | Samples | Caller         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 130.6ms |     103 | `loadMaybeCjs` | `node:module:1669:22` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |    Time | Samples | Caller     | Location              |
| -----: | ------: | ------: | ---------- | --------------------- |
| 100.0% | 104.0ms |      82 | `wrapSafe` | `node:module:1596:18` |

##### `wrapSafe` (`node:module:1596:18`)

|      % |    Time | Samples | Caller        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 104.0ms |      82 | `(anonymous)` | `node:module:1622:37` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|      % |   Time | Samples | Caller     | Location                                              |
| -----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 55.8ms |      44 | `statSync` | `./node_modules/typescript/lib/typescript.js:8602:22` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |   Time | Samples | Caller     | Location                    |
| -----: | -----: | ------: | ---------- | --------------------------- |
| 100.0% | 53.3ms |      42 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 52.0ms |      41 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |   Time | Samples | Caller            | Location    |
| -----: | -----: | ------: | ----------------- | ----------- |
| 100.0% | 34.2ms |      27 | `op_fs_stat_sync` | `<unknown>` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 31.7ms |      25 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 11.4ms |       9 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |   Time | Samples | Caller        | Location                      |
| -----: | -----: | ------: | ------------- | ----------------------------- |
| 100.0% | 11.4ms |       9 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

|      % |   Time | Samples | Caller             | Location                     |
| -----: | -----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 11.4ms |       9 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 6.3ms |       5 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `realpathSyncImpl` (`ext:deno_node/fs.ts:148:28`)

|      % |  Time | Samples | Caller                | Location                     |
| -----: | ----: | ------: | --------------------- | ---------------------------- |
| 100.0% | 5.1ms |       4 | `realpathSync_native` | `ext:deno_node/fs.ts:164:53` |

##### `realpathSync_native` (`ext:deno_node/fs.ts:164:53`)

|      % |  Time | Samples | Caller     | Location                                              |
| -----: | ----: | ------: | ---------- | ----------------------------------------------------- |
| 100.0% | 5.1ms |       4 | `realpath` | `./node_modules/typescript/lib/typescript.js:8852:22` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 3.8ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 2.5ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 2.5ms |       2 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `op_require_real_path` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location             |
| -----: | ----: | ------: | ------------ | -------------------- |
| 100.0% | 1.3ms |       1 | `toRealPath` | `node:module:806:20` |

##### `op_fs_read_dir_sync` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `readdirSync` | `ext:deno_node/_fs/_fs_readdir.ts:109:28` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 74.6% |   1.46s |   1,149 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 17.8% | 348.8ms |     275 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js:122262:23` |
|  7.0% | 137.0ms |     108 | `require`                          | `node:module:1752:35`                                   |
|  0.6% |  11.4ms |       9 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js:40536:42`  |

##### `(anonymous)` (`./cpuprofile-run.mjs`)

|      % |  Time | Samples | Callee             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 1.95s |   1,541 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `op_run_microtasks` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location               |
| -----: | ----: | ------: | ------------- | ---------------------- |
| 100.0% | 1.95s |   1,541 | `(anonymous)` | `./cpuprofile-run.mjs` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|      % |  Time | Samples | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 1.95s |   1,541 | `op_run_microtasks` | `<unknown>` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|      % |  Time | Samples | Callee                      | Location                     |
| -----: | ----: | ------: | --------------------------- | ---------------------------- |
| 100.0% | 1.95s |   1,541 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `__drainNextTickAndMacrotasks` (`ext:core/01_core.js:479:40`)

|      % |  Time | Samples | Callee       | Location                     |
| -----: | ----: | ------: | ------------ | ---------------------------- |
| 100.0% | 1.95s |   1,541 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2365:17`)

|     % |    Time | Samples | Callee               | Location                                                |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------- |
| 77.1% |   1.32s |   1,038 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30`  |
| 13.0% | 222.0ms |     175 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24` |
|  5.9% | 101.5ms |      80 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:45224:21`  |
|  4.5% |  77.4ms |      61 | `bind`               | `./node_modules/typescript/lib/typescript.js:46600:16`  |
|  4.0% |  68.5ms |      54 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123375:41`)

|     % |  Time | Samples | Callee                              | Location                                                |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 99.9% | 1.46s |   1,148 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45` |
|  0.1% | 1.3ms |       1 | `getDiagnostics2`                   | `./node_modules/typescript/lib/typescript.js:18843:27`  |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |  Time | Samples | Callee                          | Location                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,149 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2612:17`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,149 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:123313:32`)

|      % |  Time | Samples | Callee    | Location                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 1.46s |   1,149 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:123327:34`)

|      % |  Time | Samples | Callee                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,149 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|     % |    Time | Samples | Callee                             | Location                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 92.2% |   1.34s |   1,058 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:87322:27`  |
|  7.8% | 112.9ms |      89 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:123266:26` |
|  0.1% |   1.3ms |       1 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:123405:44` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:123365:36`)

|      % |  Time | Samples | Callee        | Location                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:123384:52`)

|      % |  Time | Samples | Callee                     | Location                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:123670:34`)

|      % |  Time | Samples | Callee                                     | Location                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123381:45`)

|      % |  Time | Samples | Callee                   | Location                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 1.46s |   1,148 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`)

|     % |    Time | Samples | Callee               | Location                                               |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------ |
| 55.2% | 740.8ms |     584 | `checkDeferredNodes` | `./node_modules/typescript/lib/typescript.js:87179:30` |
| 44.4% | 596.2ms |     470 | `forEach`            | `./node_modules/typescript/lib/typescript.js:2365:17`  |
|  0.4% |   5.1ms |       4 | `addLazyDiagnostic`  | `./node_modules/typescript/lib/typescript.js:87339:25` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:87239:27`)

|      % |  Time | Samples | Callee                  | Location                                               |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 1.34s |   1,058 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:87270:33` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:87336:47`)

|      % |  Time | Samples | Callee            | Location                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.34s |   1,058 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:87343:32`)

|      % |  Time | Samples | Callee                                | Location                                               |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.34s |   1,058 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:87322:27`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.34s |   1,058 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:86895:36`)

|     % |    Time | Samples | Callee                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 74.8% | 986.8ms |     778 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js:83716:22` |
| 43.4% | 572.1ms |     451 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js:84101:36` |
| 43.0% | 567.0ms |     447 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js:84119:34` |
| 23.2% | 305.7ms |     241 | `checkExpressionStatement` | `./node_modules/typescript/lib/typescript.js:84124:36` |
| 20.9% | 275.2ms |     217 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js:82223:34` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:86886:30`)

|      % |  Time | Samples | Callee                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.32s |   1,039 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js:81476:27`)

|     % |    Time | Samples | Callee                                          | Location                                               |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------ |
| 99.9% | 997.0ms |     786 | `checkExpressionWorker`                         | `./node_modules/typescript/lib/typescript.js:81516:33` |
|  1.0% |  10.1ms |       8 | `instantiateTypeWithSingleGenericCallSignature` | `./node_modules/typescript/lib/typescript.js:81266:57` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js:81516:33`)

|     % |    Time | Samples | Callee                          | Location                                               |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 88.9% | 886.6ms |     699 | `checkCallExpression`           | `./node_modules/typescript/lib/typescript.js:78289:31` |
| 30.8% | 307.0ms |     242 | `checkPropertyAccessExpression` | `./node_modules/typescript/lib/typescript.js:75786:41` |
| 28.8% | 286.7ms |     226 | `checkObjectLiteral`            | `./node_modules/typescript/lib/typescript.js:74814:30` |
| 15.5% | 154.7ms |     122 | `checkArrayLiteral`             | `./node_modules/typescript/lib/typescript.js:74651:29` |
|  9.7% |  96.4ms |      76 | `checkIdentifier`               | `./node_modules/typescript/lib/typescript.js:72959:27` |

##### `(anonymous)` (`node:module:1050:24`)

|     % |    Time | Samples | Callee        | Location              |
| ----: | ------: | ------: | ------------- | --------------------- |
| 99.1% | 135.7ms |     107 | `(anonymous)` | `node:module:1438:33` |
|  0.9% |   1.3ms |       1 | `(anonymous)` | `node:module:1259:35` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 137.0ms |     108 | `(anonymous)` | `node:module:1050:24` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 137.0ms |     108 | `(anonymous)` | `node:module:1525:36` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|     % |    Time | Samples | Callee                 | Location              |
| ----: | ------: | ------: | ---------------------- | --------------------- |
| 96.3% | 130.6ms |     103 | `(anonymous)`          | `node:module:1622:37` |
|  2.8% |   3.8ms |       3 | `op_require_read_file` | `<unknown>`           |

##### `(anonymous)` (`node:module:1653:37`)

|      % |    Time | Samples | Callee         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 135.7ms |     107 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 135.7ms |     107 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1622:37`)

|     % |    Time | Samples | Callee        | Location                                          |
| ----: | ------: | ------: | ------------- | ------------------------------------------------- |
| 79.6% | 104.0ms |      82 | `wrapSafe`    | `node:module:1596:18`                             |
| 20.4% |  26.6ms |      21 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 30.5% | 31.7ms |      25 | `op_compile_function` | `<unknown>` |

##### `wrapSafe` (`node:module:1596:18`)

|      % |    Time | Samples | Callee            | Location                      |
| -----: | ------: | ------: | ----------------- | ----------------------------- |
| 100.0% | 104.0ms |      82 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|     % |   Time | Samples | Callee     | Location                                        |
| ----: | -----: | ------: | ---------- | ----------------------------------------------- |
| 95.5% | 53.3ms |      42 | `statSync` | `ext:deno_fs/30_fs.js:473:18`                   |
|  4.5% |  2.5ms |       2 | `CFISBIS`  | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 97.6% | 52.0ms |      41 | `op_fs_stat_sync` | `<unknown>` |
|  2.4% |  1.3ms |       1 | `(anonymous)`     | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 65.9% | 34.2ms |      27 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |   Time | Samples | Callee         | Location                            |
| ----: | -----: | ------: | -------------- | ----------------------------------- |
| 33.3% | 11.4ms |       9 | `(anonymous)`  | `ext:core/00_infra.js:127:37`       |
| 11.1% |  3.8ms |       3 | `SafeIterator` | `ext:core/00_primordials.js:316:18` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|     % |  Time | Samples | Callee                 | Location                     |
| ----: | ----: | ------: | ---------------------- | ---------------------------- |
| 55.6% | 6.3ms |       5 | `op_fs_read_file_sync` | `<unknown>`                  |
| 44.4% | 5.1ms |       4 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31` |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

|      % |   Time | Samples | Callee     | Location                        |
| -----: | -----: | ------: | ---------- | ------------------------------- |
| 100.0% | 11.4ms |       9 | `NotFound` | `ext:runtime/01_errors.js:7:14` |

##### `realpathSyncImpl` (`ext:deno_node/fs.ts:148:28`)

|     % |  Time | Samples | Callee                 | Location                      |
| ----: | ----: | ------: | ---------------------- | ----------------------------- |
| 50.0% | 2.5ms |       2 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`  |
| 50.0% | 2.5ms |       2 | `realPathSync`         | `ext:deno_fs/30_fs.js:280:22` |

##### `realpathSync_native` (`ext:deno_node/fs.ts:164:53`)

|      % |  Time | Samples | Callee             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 5.1ms |       4 | `realpathSyncImpl` | `ext:deno_node/fs.ts:148:28` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./cpuprofile-run.mjs`) ← `op_run_microtasks` ← `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.4% | 72.3ms |      57 | `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.5% | 31.7ms |      25 | `op_compile_function` ← `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% | 10.1ms |       8 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |  7.6ms |       6 | `__export` (`./node_modules/typescript/lib/typescript.js:22:16`) ← `(anonymous)` (16:15) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |  7.6ms |       6 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                       |
| 0.4% |  7.6ms |       6 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) |
| 0.2% |  5.1ms |       4 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  5.1ms |       4 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  5.1ms |       4 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `membersRelatedToIndexInfo` (68416:39) ← `typeRelatedToIndexInfo` (68491:36) ← `indexSignaturesRelatedTo` (68475:38) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `compareTypesAssignable` (65209:34) ← `getInferredType` (70533:27) ← `getInferredTypes` (70570:28) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  5.1ms |       4 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  5.1ms |       4 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                  |
| 0.2% |  3.8ms |       3 | `op_require_read_file` ← `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  3.8ms |       3 | `createProgram` (`./node_modules/typescript/lib/typescript.js:122262:23`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  3.8ms |       3 | `op_fs_stat_sync` ← `statSync` (`ext:deno_fs/30_fs.js:473:18`) ← `statSync` (`ext:deno_node/fs.ts:97:20`) ← `statSync` (`./node_modules/typescript/lib/typescript.js:8602:22`) ← `fileSystemEntryExists` (8818:35) ← `directoryExists` (8843:29) ← `directoryExists` (121564:22) ← `directoryProbablyExists` (19966:33) ← `loadModuleFromImmediateNodeModulesDirectory` (44319:53) ← `(anonymous)` (44308:66) ← `forEachAncestorDirectory` (9318:34) ← `lookup` (44307:18) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (44293:57) ← `loadModuleFromNearestNodeModulesDirectory` (44267:51) ← `tryResolve` (43261:22) ← `nodeModuleNameResolverWorker` (43183:38) ← `nodeModuleNameResolver` (43152:32) ← `resolveModuleName` (42868:27) ← `resolve` (121935:14) ← `loadWithModeAwareCache` (121967:32) ← `actualResolveModuleNamesWorker` (122336:38) ← `resolveModuleNamesWorker` (122716:36) ← `resolveModuleNamesReusingOldState` (122817:45) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  3.8ms |       3 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  3.8ms |       3 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66101:27`) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `membersRelatedToIndexInfo` (68416:39) ← `typeRelatedToIndexInfo` (68491:36) ← `indexSignaturesRelatedTo` (68475:38) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `compareTypesAssignable` (65209:34) ← `getInferredType` (70533:27) ← `getInferredTypes` (70570:28) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                        |
| 0.2% |  3.8ms |       3 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromTypes` (69901:28) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `getSpreadArgumentType` (76720:33) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `getQuickTypeOfExpression` (81431:36) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                               |
