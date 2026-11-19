# CPU profile diff

Took 2.14s → 2.15s (+17.50ms, +0.8%) over 1,684 → 1,701 samples (1.3ms per sample).

| Category           |  Change |    Delta |             % |              Time |       Samples |
| ------------------ | ------: | -------: | ------------: | ----------------: | ------------: |
| Third-party        |   +1.2% | +21.91ms | 84.6% → 84.9% |     1.81s → 1.83s | 1,424 → 1,444 |
| Garbage collector  |   +3.9% |  +4.83ms |   5.8% → 6.0% | 124.3ms → 129.1ms |      98 → 102 |
| Standard library   |   -8.6% | -10.36ms |   5.6% → 5.1% | 120.5ms → 110.1ms |       95 → 87 |
| Native             |   -8.1% |  -6.48ms |   3.7% → 3.4% |   79.9ms → 73.4ms |       63 → 58 |
| Regular expression |  +66.4% |  +2.52ms |   0.2% → 0.3% |     3.8ms → 6.3ms |         3 → 5 |
| Unknown            | +299.2% |  +3.80ms |   0.1% → 0.2% |     1.3ms → 5.1ms |         1 → 4 |
| Ours               |     new |  +1.27ms |   0.0% → 0.1% |       0ms → 1.3ms |         0 → 1 |

Paths starting with `./` or `../` are relative to `/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 1.95s (91.5% → 90.6%) typeCheckProject at ./tsc-workload.mjs:3:33
│   ├── … 1.46s → 1.45s (68.2% → 67.5%) (anonymous) at ./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37
│   │   ├── … 1.34s (62.8% → 62.0%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33
│   │   │   ├── … 738.2ms → 722.9ms (34.6% → 33.6%) checkFunctionExpressionOrObjectLiteralMethodDeferred at ./node_modules/typescript/lib/typescript.js:79840:64 → 81135:64
│   │   │   │   ├── 716.7ms → 711.5ms (33.6% → 33.0%) checkSourceElement at 86886:30 → 88199:30
│   │   │   │   │   └── … 716.7ms → 711.5ms (33.6% → 33.0%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36
│   │   │   │   │       ├── 370.4ms → 373.5ms (17.3%) checkVariableDeclaration at 84101:36 → 85396:36
│   │   │   │   │       │   └── 369.1ms → 369.7ms (17.3% → 17.2%) checkVariableLikeDeclaration at 83907:40 → 85202:40
│   │   │   │   │       │       └── 366.6ms → 367.1ms (17.2% → 17.0%) 6 more callees, led by (14.4% → 14.5%) getTypeOfSymbol at 58408:27 → 59663:27
│   │   │   │   │       └── 345.0ms → 336.8ms (16.2% → 15.6%) 18 more callees, led by (9.3% → 8.7%) checkExpressionStatement at 84124:36 → 85419:36
│   │   │   │   └── 20.3ms → 10.1ms (1.0% → 0.5%) 5 more callees, led by (0.5% → 0.3%) getReturnTypeOfSignature at 61207:36 → 62462:36
│   │   │   └── 596.2ms → 602.6ms (27.9% → 28.0%) forEach at 2365:17 → 2378:17
│   │   │       ├── … 575.9ms → 567.2ms (27.0% → 26.3%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30
│   │   │       │   └── … 575.9ms → 565.9ms (27.0% → 26.3%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36
│   │   │       │       ├── … 2.5ms → 0ms (0.1% → 0.0%) getNamedMembers at ./node_modules/typescript/lib/typescript.js:52485:27 → 53726:27
│   │   │       │       └── 567.0ms → 560.8ms (26.5% → 26.0%) 27 more callees, led by (8.8% → 8.7%) checkVariableDeclaration at 84101:36 → 85396:36
│   │   │       └── 19.0ms → 30.4ms (0.9% → 1.4%) 6 more callees, led by (0.6% → 0.8%) checkParameter at ./node_modules/typescript/lib/typescript.js:81674:26 → 82969:26
│   │   └── … 106.5ms → 108.9ms (5.0% → 5.1%, self 0.8% → 0.7%) bind at ./node_modules/typescript/lib/typescript.js:46600:16 → 47793:16
│   │       ├── … 0ms → 3.8ms (0.0% → 0.2%) canHaveJSDoc at ./node_modules/typescript/lib/typescript.js:17852:22 → 18835:22
│   │       └── 87.5ms → 88.6ms (4.1%) 5 more callees, led by (2.7% → 2.5%) bindWorker at ./node_modules/typescript/lib/typescript.js:46663:22 → 47856:22
│   ├── 348.8ms → 362.1ms (16.3% → 16.8%) createProgram at ./node_modules/typescript/lib/typescript.js:122262:23 → 123840:23
│   │   ├── 285.4ms → 301.3ms (13.4% → 14.0%) forEach at 2365:17 → 2378:17
│   │   │   ├── … 124.3ms → 131.7ms (5.8% → 6.1%) findSourceFileWorker at ./node_modules/typescript/lib/typescript.js:123984:32 → 125566:32
│   │   │   │   ├── … 82.4ms → 93.7ms (3.9% → 4.4%) parseSourceFileWorker at ./node_modules/typescript/lib/typescript.js:31659:33 → 32711:33
│   │   │   │   │   └── 78.6ms → 91.2ms (3.7% → 4.2%) parseList at 32618:21 → 33673:21
│   │   │   │   │       └── … 74.8ms → 87.4ms (3.5% → 4.1%) parseListElement at ./node_modules/typescript/lib/typescript.js:32639:28 → 33694:28
│   │   │   │   │           ├── … 0ms → 2.5ms (0.0% → 0.1%, self 0.2% → 1.1% globally) internIdentifier at ./node_modules/typescript/lib/typescript.js:32276:28 → 33331:28
│   │   │   │   │           └── 72.3ms → 79.8ms (3.4% → 3.7%) 13 more callees, led by (1.5% → 1.6%) parseStatement at 35924:26 → 36979:26
│   │   │   │   └── 31.7ms (1.5%) 5 more callees, led by (1.2% → 1.1%) processImportedModules at 124378:34 → 125960:34
│   │   │   ├── … 48.2ms → 51.9ms (2.3% → 2.4%) (anonymous) at ./node_modules/typescript/lib/typescript.js:124350:42 → 125932:42
│   │   │   │   ├── 22.8ms → 26.6ms (1.1% → 1.2%) processRootFile at 123708:27 → 125290:27 …
│   │   │   │   └── … 25.4ms → 20.3ms (1.2% → 0.9%) loadModuleFromImmediateNodeModulesDirectory at ./node_modules/typescript/lib/typescript.js:44319:53 → 45512:53
│   │   │   │       └── … 11.4ms → 2.5ms (0.5% → 0.1%, self 0.8% → 0.5% globally) op_fs_stat_sync
│   │   │   │           └── 8.9ms → 2.5ms (0.4% → 0.1%, self 0.9% → 0.3% globally) buildCustomError at ext:core/00_infra.js:94:28
│   │   │   └── 112.9ms → 117.7ms (5.3% → 5.5%) 3 more callees, led by (3.2% → 3.5%) (anonymous) at ./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35
│   │   └── 59.6ms → 58.2ms (2.8% → 2.7%) 5 more callees, led by (2.3% → 2.4%) processTypeReferenceDirective at 124232:41 → 125814:41
│   └── 148.4ms → 134.2ms (6.9% → 6.2%) 2 more callees, led by (6.4% → 5.8%) require at node:module:1752:35
├── 124.3ms → 129.1ms (5.8% → 6.0%) (garbage collector)
├── 2.5ms → 0ms (0.1% → 0.0%, self 1.1% → 0.6% globally) getObjectFlags at ./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24
└── 54.5ms → 72.2ms (2.6% → 3.4%) 61 more root frames, led by (0.6% → 0.8%) (program)
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |           % |              Time |  Samples | Function                          | Location                                                          |
| ------: | -------: | ----------: | ----------------: | -------: | --------------------------------- | ----------------------------------------------------------------- |
| +349.2% | +17.71ms | 0.2% → 1.1% |    5.1ms → 22.8ms |   4 → 18 | `internIdentifier`                | `./node_modules/typescript/lib/typescript.js:32276:28 → 33331:28` |
|  +91.9% | +15.16ms | 0.8% → 1.5% |   16.5ms → 31.7ms |  13 → 25 | `isTypeRelatedTo`                 | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |
|  +44.7% | +11.35ms | 1.2% → 1.7% |   25.4ms → 36.7ms |  20 → 29 | `instantiateTypeWorker`           | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
| +132.9% | +10.11ms | 0.4% → 0.8% |    7.6ms → 17.7ms |   6 → 14 | `isDeeplyNestedType`              | `./node_modules/typescript/lib/typescript.js:68771:30 → 70031:30` |
| +598.7% |  +7.59ms | 0.1% → 0.4% |     1.3ms → 8.9ms |    1 → 7 | `isSimpleTypeRelatedTo`           | `./node_modules/typescript/lib/typescript.js:66052:33 → 67312:33` |
|  +49.7% |  +7.57ms | 0.7% → 1.1% |   15.2ms → 22.8ms |  12 → 18 | `createTypeReference`             | `./node_modules/typescript/lib/typescript.js:61539:31 → 62794:31` |
|     new |  +6.33ms | 0.0% → 0.3% |       0ms → 6.3ms |    0 → 5 | `createIdentifier`                | `./node_modules/typescript/lib/typescript.js:23941:28 → 24991:28` |
|     new |  +6.33ms | 0.0% → 0.3% |       0ms → 6.3ms |    0 → 5 | `normalizePath`                   | `./node_modules/typescript/lib/typescript.js:9164:23`             |
| +498.9% |  +6.33ms | 0.1% → 0.4% |     1.3ms → 7.6ms |    1 → 6 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |
| +249.3% |  +6.33ms | 0.1% → 0.4% |     2.5ms → 8.9ms |    2 → 7 | `canHaveJSDoc`                    | `./node_modules/typescript/lib/typescript.js:17852:22 → 18835:22` |
|     new |  +5.06ms | 0.0% → 0.2% |       0ms → 5.1ms |    0 → 4 | `modifiersToFlags`                | `./node_modules/typescript/lib/typescript.js:20637:26`            |
| +399.1% |  +5.06ms | 0.1% → 0.3% |     1.3ms → 6.3ms |    1 → 5 | `getResolvedSymbol`               | `./node_modules/typescript/lib/typescript.js:70627:29 → 71910:29` |
| +399.1% |  +5.06ms | 0.1% → 0.3% |     1.3ms → 6.3ms |    1 → 5 | `token`                           | `./node_modules/typescript/lib/typescript.js:31950:17 → 33005:17` |
| +199.4% |  +5.06ms | 0.1% → 0.4% |     2.5ms → 7.6ms |    2 → 6 | `inferFromTypeArguments`          | `./node_modules/typescript/lib/typescript.js:70136:36 → 71419:36` |
| +132.9% |  +5.06ms | 0.2% → 0.4% |     3.8ms → 8.9ms |    3 → 7 | `instantiateType`                 | `./node_modules/typescript/lib/typescript.js:64996:27 → 66256:27` |
|  +79.7% |  +5.05ms | 0.3% → 0.5% |    6.3ms → 11.4ms |    5 → 9 | `inferFromMatchingTypes`          | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |
|  +79.7% |  +5.05ms | 0.3% → 0.5% |    6.3ms → 11.4ms |    5 → 9 | `resolveStructuredTypeMembers`    | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  +39.7% |  +5.04ms | 0.6% → 0.8% |   12.7ms → 17.7ms |  10 → 14 | `some`                            | `./node_modules/typescript/lib/typescript.js:2781:14 → 2794:14`   |
|   +3.9% |  +4.83ms | 5.8% → 6.0% | 124.3ms → 129.1ms | 98 → 102 | `(garbage collector)`             | `<unknown>`                                                       |
|     new |  +3.80ms | 0.0% → 0.2% |       0ms → 3.8ms |    0 → 3 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:68698:77 → 69958:77` |

##### Third-party

|  Change |    Delta |           % |            Time | Samples | Function                          | Location                                                          |
| ------: | -------: | ----------: | --------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
| +349.2% | +17.71ms | 0.2% → 1.1% |  5.1ms → 22.8ms |  4 → 18 | `internIdentifier`                | `./node_modules/typescript/lib/typescript.js:32276:28 → 33331:28` |
|  +91.9% | +15.16ms | 0.8% → 1.5% | 16.5ms → 31.7ms | 13 → 25 | `isTypeRelatedTo`                 | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |
|  +44.7% | +11.35ms | 1.2% → 1.7% | 25.4ms → 36.7ms | 20 → 29 | `instantiateTypeWorker`           | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
| +132.9% | +10.11ms | 0.4% → 0.8% |  7.6ms → 17.7ms |  6 → 14 | `isDeeplyNestedType`              | `./node_modules/typescript/lib/typescript.js:68771:30 → 70031:30` |
| +598.7% |  +7.59ms | 0.1% → 0.4% |   1.3ms → 8.9ms |   1 → 7 | `isSimpleTypeRelatedTo`           | `./node_modules/typescript/lib/typescript.js:66052:33 → 67312:33` |
|  +49.7% |  +7.57ms | 0.7% → 1.1% | 15.2ms → 22.8ms | 12 → 18 | `createTypeReference`             | `./node_modules/typescript/lib/typescript.js:61539:31 → 62794:31` |
|     new |  +6.33ms | 0.0% → 0.3% |     0ms → 6.3ms |   0 → 5 | `createIdentifier`                | `./node_modules/typescript/lib/typescript.js:23941:28 → 24991:28` |
|     new |  +6.33ms | 0.0% → 0.3% |     0ms → 6.3ms |   0 → 5 | `normalizePath`                   | `./node_modules/typescript/lib/typescript.js:9164:23`             |
| +498.9% |  +6.33ms | 0.1% → 0.4% |   1.3ms → 7.6ms |   1 → 6 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |
| +249.3% |  +6.33ms | 0.1% → 0.4% |   2.5ms → 8.9ms |   2 → 7 | `canHaveJSDoc`                    | `./node_modules/typescript/lib/typescript.js:17852:22 → 18835:22` |
|     new |  +5.06ms | 0.0% → 0.2% |     0ms → 5.1ms |   0 → 4 | `modifiersToFlags`                | `./node_modules/typescript/lib/typescript.js:20637:26`            |
| +399.1% |  +5.06ms | 0.1% → 0.3% |   1.3ms → 6.3ms |   1 → 5 | `getResolvedSymbol`               | `./node_modules/typescript/lib/typescript.js:70627:29 → 71910:29` |
| +399.1% |  +5.06ms | 0.1% → 0.3% |   1.3ms → 6.3ms |   1 → 5 | `token`                           | `./node_modules/typescript/lib/typescript.js:31950:17 → 33005:17` |
| +199.4% |  +5.06ms | 0.1% → 0.4% |   2.5ms → 7.6ms |   2 → 6 | `inferFromTypeArguments`          | `./node_modules/typescript/lib/typescript.js:70136:36 → 71419:36` |
| +132.9% |  +5.06ms | 0.2% → 0.4% |   3.8ms → 8.9ms |   3 → 7 | `instantiateType`                 | `./node_modules/typescript/lib/typescript.js:64996:27 → 66256:27` |
|  +79.7% |  +5.05ms | 0.3% → 0.5% |  6.3ms → 11.4ms |   5 → 9 | `inferFromMatchingTypes`          | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |
|  +79.7% |  +5.05ms | 0.3% → 0.5% |  6.3ms → 11.4ms |   5 → 9 | `resolveStructuredTypeMembers`    | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  +39.7% |  +5.04ms | 0.6% → 0.8% | 12.7ms → 17.7ms | 10 → 14 | `some`                            | `./node_modules/typescript/lib/typescript.js:2781:14 → 2794:14`   |
|     new |  +3.80ms | 0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:68698:77 → 69958:77` |
|     new |  +3.80ms | 0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `speculationHelper`               | `./node_modules/typescript/lib/typescript.js:13583:29 → 14542:29` |

##### Garbage collector

| Change |   Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | ------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
|  +3.9% | +4.83ms | 5.8% → 6.0% | 124.3ms → 129.1ms | 98 → 102 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change |   Delta |           % |            Time | Samples | Function               | Location                                        |
| -----: | ------: | ----------: | --------------: | ------: | ---------------------- | ----------------------------------------------- |
|    new | +3.80ms | 0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `statSync`             | `ext:deno_fs/30_fs.js:473:18`                   |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `readFileSync`         | `ext:deno_node/fs.ts:399:24`                    |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:569:8`     |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:539:8`     |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `CFISBIS`              | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`          | `ext:deno_node/crypto.ts:1:32`                  |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `getOptions`           | `ext:deno_node/internal/fs/utils.mjs:363:27`    |
|  +1.6% | +1.13ms |        3.4% | 72.3ms → 73.4ms | 57 → 58 | `compileFunction`      | `ext:core/01_core.js:1100:22`                   |

##### Native

| Change |   Delta |           % |            Time | Samples | Function                   | Location    |
| -----: | ------: | ----------: | --------------: | ------: | -------------------------- | ----------- |
| +29.8% | +3.77ms | 0.6% → 0.8% | 12.7ms → 16.5ms | 10 → 13 | `(program)`                | `<unknown>` |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `op_url_get_serialization` | `<unknown>` |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `op_require_try_self`      | `<unknown>` |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `op_inspector_dispatch`    | `<unknown>` |
| +19.8% | +1.25ms | 0.3% → 0.4% |   6.3ms → 7.6ms |   5 → 6 | `op_fs_read_file_sync`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |           % |            Time | Samples | Function                            | Location                                                          |
| ------: | -------: | ----------: | --------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
|  -66.7% | -12.70ms | 0.9% → 0.3% |  19.0ms → 6.3ms |  15 → 5 | `buildCustomError`                  | `ext:core/00_infra.js:94:28`                                      |
|  -47.5% | -11.44ms | 1.1% → 0.6% | 24.1ms → 12.7ms | 19 → 10 | `getObjectFlags`                    | `./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
|  -15.3% | -10.25ms | 3.1% → 2.6% | 67.2ms → 57.0ms | 53 → 45 | `isRelatedTo`                       | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|  -43.0% |  -7.63ms | 0.8% → 0.5% | 17.8ms → 10.1ms |  14 → 8 | `op_fs_stat_sync`                   | `<unknown>`                                                       |
|  -50.1% |  -7.62ms | 0.7% → 0.4% |  15.2ms → 7.6ms |  12 → 6 | `getMappedType`                     | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
|  -75.0% |  -7.62ms | 0.5% → 0.1% |  10.1ms → 2.5ms |   8 → 2 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45 → 61753:45` |
| removed |  -7.61ms | 0.4% → 0.0% |     7.6ms → 0ms |   6 → 0 | `getNamedMembers`                   | `./node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |
|   -8.4% |  -6.48ms | 3.6% → 3.3% | 77.4ms → 70.9ms | 61 → 56 | `recursiveTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|  -50.1% |  -6.35ms | 0.6% → 0.3% |  12.7ms → 6.3ms |  10 → 5 | `resolveObjectTypeMembers`          | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -62.6% |  -6.35ms | 0.5% → 0.2% |  10.1ms → 3.8ms |   8 → 3 | `getRelationKey`                    | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
|  -83.4% |  -6.34ms | 0.4% → 0.1% |   7.6ms → 1.3ms |   6 → 1 | `__export`                          | `./node_modules/typescript/lib/typescript.js:22:16`               |
| removed |  -6.34ms | 0.3% → 0.0% |     6.3ms → 0ms |   5 → 0 | `isGenericMappedType`               | `./node_modules/typescript/lib/typescript.js:60070:31 → 61325:31` |
| removed |  -6.34ms | 0.3% → 0.0% |     6.3ms → 0ms |   5 → 0 | `isOptionalDeclaration`             | `./node_modules/typescript/lib/typescript.js:21963:31 → 22956:31` |
|  -44.5% |  -5.09ms | 0.5% → 0.3% |  11.4ms → 6.3ms |   9 → 5 | `nextTokenWithoutCheck`             | `./node_modules/typescript/lib/typescript.js:31953:33 → 33008:33` |
|  -44.5% |  -5.09ms | 0.5% → 0.3% |  11.4ms → 6.3ms |   9 → 5 | `getApparentType`                   | `./node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
|  -50.1% |  -5.08ms | 0.5% → 0.2% |  10.1ms → 5.1ms |   8 → 4 | `structuredTypeRelatedTo`           | `./node_modules/typescript/lib/typescript.js:67207:37 → 68467:37` |
|  -57.2% |  -5.08ms | 0.4% → 0.2% |   8.9ms → 3.8ms |   7 → 3 | `createNodeArray`                   | `./node_modules/typescript/lib/typescript.js:23794:27 → 24844:27` |
|  -57.2% |  -5.08ms | 0.4% → 0.2% |   8.9ms → 3.8ms |   7 → 3 | `compareSignaturesRelated`          | `./node_modules/typescript/lib/typescript.js:65804:36 → 67064:36` |
|  -66.7% |  -5.08ms | 0.4% → 0.1% |   7.6ms → 2.5ms |   6 → 2 | `getTypeAtFlowNode`                 | `./node_modules/typescript/lib/typescript.js:71660:31 → 72943:31` |
|  -80.0% |  -5.08ms | 0.3% → 0.1% |   6.3ms → 1.3ms |   5 → 1 | `getAliasId`                        | `./node_modules/typescript/lib/typescript.js:61521:22 → 62776:22` |

##### Third-party

|  Change |    Delta |           % |            Time | Samples | Function                               | Location                                                          |
| ------: | -------: | ----------: | --------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
|  -47.5% | -11.44ms | 1.1% → 0.6% | 24.1ms → 12.7ms | 19 → 10 | `getObjectFlags`                       | `./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
|  -15.3% | -10.25ms | 3.1% → 2.6% | 67.2ms → 57.0ms | 53 → 45 | `isRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|  -50.1% |  -7.62ms | 0.7% → 0.4% |  15.2ms → 7.6ms |  12 → 6 | `getMappedType`                        | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
|  -75.0% |  -7.62ms | 0.5% → 0.1% |  10.1ms → 2.5ms |   8 → 2 | `createUnionOrIntersectionProperty`    | `./node_modules/typescript/lib/typescript.js:60498:45 → 61753:45` |
| removed |  -7.61ms | 0.4% → 0.0% |     7.6ms → 0ms |   6 → 0 | `getNamedMembers`                      | `./node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |
|   -8.4% |  -6.48ms | 3.6% → 3.3% | 77.4ms → 70.9ms | 61 → 56 | `recursiveTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|  -50.1% |  -6.35ms | 0.6% → 0.3% |  12.7ms → 6.3ms |  10 → 5 | `resolveObjectTypeMembers`             | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -62.6% |  -6.35ms | 0.5% → 0.2% |  10.1ms → 3.8ms |   8 → 3 | `getRelationKey`                       | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
|  -83.4% |  -6.34ms | 0.4% → 0.1% |   7.6ms → 1.3ms |   6 → 1 | `__export`                             | `./node_modules/typescript/lib/typescript.js:22:16`               |
| removed |  -6.34ms | 0.3% → 0.0% |     6.3ms → 0ms |   5 → 0 | `isGenericMappedType`                  | `./node_modules/typescript/lib/typescript.js:60070:31 → 61325:31` |
| removed |  -6.34ms | 0.3% → 0.0% |     6.3ms → 0ms |   5 → 0 | `isOptionalDeclaration`                | `./node_modules/typescript/lib/typescript.js:21963:31 → 22956:31` |
|  -44.5% |  -5.09ms | 0.5% → 0.3% |  11.4ms → 6.3ms |   9 → 5 | `nextTokenWithoutCheck`                | `./node_modules/typescript/lib/typescript.js:31953:33 → 33008:33` |
|  -44.5% |  -5.09ms | 0.5% → 0.3% |  11.4ms → 6.3ms |   9 → 5 | `getApparentType`                      | `./node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
|  -50.1% |  -5.08ms | 0.5% → 0.2% |  10.1ms → 5.1ms |   8 → 4 | `structuredTypeRelatedTo`              | `./node_modules/typescript/lib/typescript.js:67207:37 → 68467:37` |
|  -57.2% |  -5.08ms | 0.4% → 0.2% |   8.9ms → 3.8ms |   7 → 3 | `createNodeArray`                      | `./node_modules/typescript/lib/typescript.js:23794:27 → 24844:27` |
|  -57.2% |  -5.08ms | 0.4% → 0.2% |   8.9ms → 3.8ms |   7 → 3 | `compareSignaturesRelated`             | `./node_modules/typescript/lib/typescript.js:65804:36 → 67064:36` |
|  -66.7% |  -5.08ms | 0.4% → 0.1% |   7.6ms → 2.5ms |   6 → 2 | `getTypeAtFlowNode`                    | `./node_modules/typescript/lib/typescript.js:71660:31 → 72943:31` |
|  -80.0% |  -5.08ms | 0.3% → 0.1% |   6.3ms → 1.3ms |   5 → 1 | `getAliasId`                           | `./node_modules/typescript/lib/typescript.js:61521:22 → 62776:22` |
| removed |  -5.07ms | 0.2% → 0.0% |     5.1ms → 0ms |   4 → 0 | `(anonymous)`                          | `./node_modules/typescript/lib/typescript.js:64807:49 → 66062:49` |
| removed |  -5.07ms | 0.2% → 0.0% |     5.1ms → 0ms |   4 → 0 | `getPropertyOfUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:60674:48 → 61929:48` |

##### Standard library

|  Change |    Delta |           % |           Time | Samples | Function               | Location                                        |
| ------: | -------: | ----------: | -------------: | ------: | ---------------------- | ----------------------------------------------- |
|  -66.7% | -12.70ms | 0.9% → 0.3% | 19.0ms → 6.3ms |  15 → 5 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                    |
|  -33.5% |  -3.82ms | 0.5% → 0.4% | 11.4ms → 7.6ms |   9 → 6 | `NotFound`             | `ext:runtime/01_errors.js:7:14`                 |
| removed |  -2.54ms | 0.1% → 0.0% |    2.5ms → 0ms |   2 → 0 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`                    |
|  -33.5% |  -1.27ms | 0.2% → 0.1% |  3.8ms → 2.5ms |   3 → 2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                    |
| removed |  -1.27ms | 0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `FastBuffer`           | `ext:deno_node/internal/buffer.mjs:192:14`      |
| removed |  -1.27ms | 0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `value`                | `ext:deno_node/internal/fs/stat_utils.ts:30:14` |
| removed |  -1.27ms | 0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:554:8`     |
|   -0.2% |  -0.01ms |        0.2% |          3.8ms |       3 | `SafeIterator`         | `ext:core/00_primordials.js:316:18`             |
|   -0.2% |  -2.39µs |        0.1% |          1.3ms |       1 | `loadMaybeCjs`         | `node:module:1669:22`                           |
|   -0.2% |  -2.39µs |        0.1% |          1.3ms |       1 | `decodeUtf8`           | `ext:deno_node/internal/buffer.mjs:706:20`      |
|   -0.2% |  -2.39µs |        0.1% |          1.3ms |       1 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`    |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function                 | Location    |
| ------: | ------: | ----------: | --------------: | ------: | ------------------------ | ----------- |
|  -43.0% | -7.63ms | 0.8% → 0.5% | 17.8ms → 10.1ms |  14 → 8 | `op_fs_stat_sync`        | `<unknown>` |
|  -12.2% | -3.86ms | 1.5% → 1.3% | 31.7ms → 27.9ms | 25 → 22 | `op_compile_function`    | `<unknown>` |
|  -50.1% | -1.27ms |        0.1% |   2.5ms → 1.3ms |   2 → 1 | `op_fs_realpath_sync`    | `<unknown>` |
| removed | -1.27ms | 0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `op_require_real_path`   | `<unknown>` |
| removed | -1.27ms | 0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `op_fs_read_dir_sync`    | `<unknown>` |
|   -0.2% | -0.01ms |        0.2% |           3.8ms |       3 | `op_require_read_file`   | `<unknown>` |
|   -0.2% | -4.78µs |        0.1% |           2.5ms |       2 | `op_node_encoding_slice` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `internIdentifier` (`./node_modules/typescript/lib/typescript.js:33331:28`)

|  Change |    Delta |             % |           Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +432.3% | +16.45ms | 75.0% → 88.9% | 3.8ms → 20.3ms |  3 → 16 | `./node_modules/typescript/lib/typescript.js:32277 → 33332` |
|  +99.6% |  +1.26ms | 25.0% → 11.1% |  1.3ms → 2.5ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:32279 → 33334` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  +66.4% | +7.57ms | 69.2% → 60.0% | 11.4ms → 19.0ms |  9 → 15 | `./node_modules/typescript/lib/typescript.js:66135 → 67395` |
|     new | +6.33ms |  0.0% → 20.0% |     0ms → 6.3ms |   0 → 5 | `./node_modules/typescript/lib/typescript.js:67382`         |
| +299.2% | +3.80ms |  7.7% → 16.0% |   1.3ms → 5.1ms |   1 → 4 | `./node_modules/typescript/lib/typescript.js:66112 → 67372` |
| removed | -1.27ms |   7.7% → 0.0% |     1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:66101`         |
| removed | -1.27ms |   7.7% → 0.0% |     1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:66106`         |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:66283:33`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  +88.5% | +10.11ms | 45.0% → 58.6% | 11.4ms → 21.5ms |  9 → 17 | `./node_modules/typescript/lib/typescript.js:65039 → 66299` |
| removed |  -2.54ms |  10.0% → 0.0% |     2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:65051`         |
|     new |  +2.53ms |   0.0% → 6.9% |     0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:66283`         |
| removed |  -1.27ms |   5.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:65025`         |
| removed |  -1.27ms |   5.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:65031`         |

##### `isDeeplyNestedType` (`./node_modules/typescript/lib/typescript.js:70031:30`)

|  Change |   Delta |             % |           Time | Samples | Location                                                    |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +299.2% | +7.59ms | 33.3% → 57.1% | 2.5ms → 10.1ms |   2 → 8 | `./node_modules/typescript/lib/typescript.js:68784 → 70044` |
| removed | -1.27ms |  16.7% → 0.0% |    1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:68782`         |
|     new | +1.27ms |   0.0% → 7.1% |    0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:70032`         |
|     new | +1.27ms |   0.0% → 7.1% |    0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:70033`         |
|  +49.7% | +1.26ms | 33.3% → 21.4% |  2.5ms → 3.8ms |   2 → 3 | `./node_modules/typescript/lib/typescript.js:68771 → 70031` |

##### `isSimpleTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67312:33`)

| Change |   Delta |              % |        Time | Samples | Location                                                    |
| -----: | ------: | -------------: | ----------: | ------: | ----------------------------------------------------------- |
|    new | +2.53ms |   0.0% → 28.6% | 0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:67312`         |
|    new | +2.53ms |   0.0% → 28.6% | 0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:67313`         |
|    new | +1.27ms |   0.0% → 14.3% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:67351`         |
|    new | +1.27ms |   0.0% → 14.3% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:67354`         |
|  -0.2% | -2.39µs | 100.0% → 14.3% |       1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:66096 → 67356` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

| Change |   Delta |             % |            Time | Samples | Location                                                    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +44.2% | +5.04ms | 75.0% → 72.2% | 11.4ms → 16.5ms |  9 → 13 | `./node_modules/typescript/lib/typescript.js:61541 → 62796` |
| +99.6% | +2.53ms | 16.7% → 22.2% |   2.5ms → 5.1ms |   2 → 4 | `./node_modules/typescript/lib/typescript.js:61544 → 62799` |
|  -0.2% | -2.39µs |   8.3% → 5.6% |           1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:61540 → 62795` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js:24991:28`)

| Change |   Delta |            % |        Time | Samples | Location                                            |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
|    new | +2.53ms | 0.0% → 40.0% | 0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:25005` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:24992` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:24995` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:24999` |

##### `normalizePath` (`./node_modules/typescript/lib/typescript.js:9164:23`)

| Change |   Delta |            % |        Time | Samples | Location                                           |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------------------- |
|    new | +5.06ms | 0.0% → 80.0% | 0ms → 5.1ms |   0 → 4 | `./node_modules/typescript/lib/typescript.js:9166` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:9165` |

##### `getIndexedAccessTypeOrUndefined` (`./node_modules/typescript/lib/typescript.js:65149:43`)

|  Change |   Delta |             % |        Time | Samples | Location                                            |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- |
|     new | +2.53ms |  0.0% → 33.3% | 0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:65165` |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:63899` |
|     new | +1.27ms |  0.0% → 16.7% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65153` |
|     new | +1.27ms |  0.0% → 16.7% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65157` |
|     new | +1.27ms |  0.0% → 16.7% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65164` |

##### `canHaveJSDoc` (`./node_modules/typescript/lib/typescript.js:18835:22`)

| Change |   Delta |              % |          Time | Samples | Location                                                    |
| -----: | ------: | -------------: | ------------: | ------: | ----------------------------------------------------------- |
|    new | +3.80ms |   0.0% → 42.9% |   0ms → 3.8ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:18835`         |
|    new | +1.27ms |   0.0% → 14.3% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:18905`         |
| +49.7% | +1.26ms | 100.0% → 42.9% | 2.5ms → 3.8ms |   2 → 3 | `./node_modules/typescript/lib/typescript.js:17853 → 18836` |

##### `modifiersToFlags` (`./node_modules/typescript/lib/typescript.js:20637:26`)

| Change |   Delta |            % |        Time | Samples | Location                                            |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
|    new | +2.53ms | 0.0% → 50.0% | 0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:20637` |
|    new | +1.27ms | 0.0% → 25.0% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:20639` |
|    new | +1.27ms | 0.0% → 25.0% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:20644` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js:71910:29`)

|  Change |   Delta |              % |          Time | Samples | Location                                                    |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------------------------------------- |
| +199.4% | +2.53ms | 100.0% → 60.0% | 1.3ms → 3.8ms |   1 → 3 | `./node_modules/typescript/lib/typescript.js:70630 → 71913` |
|     new | +1.27ms |   0.0% → 20.0% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:71910`         |
|     new | +1.27ms |   0.0% → 20.0% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:71911`         |

##### `token` (`./node_modules/typescript/lib/typescript.js:33005:17`)

| Change |   Delta |              % |        Time | Samples | Location                                                    |
| -----: | ------: | -------------: | ----------: | ------: | ----------------------------------------------------------- |
|    new | +5.06ms |   0.0% → 80.0% | 0ms → 5.1ms |   0 → 4 | `./node_modules/typescript/lib/typescript.js:33005`         |
|  -0.2% | -2.39µs | 100.0% → 20.0% |       1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:31951 → 33006` |

##### `inferFromTypeArguments` (`./node_modules/typescript/lib/typescript.js:71419:36`)

| Change |   Delta |              % |          Time | Samples | Location                                                    |
| -----: | ------: | -------------: | ------------: | ------: | ----------------------------------------------------------- |
|    new | +2.53ms |   0.0% → 33.3% |   0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:71421`         |
| +99.6% | +2.53ms | 100.0% → 66.7% | 2.5ms → 5.1ms |   2 → 4 | `./node_modules/typescript/lib/typescript.js:70142 → 71425` |

##### `instantiateType` (`./node_modules/typescript/lib/typescript.js:66256:27`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| +149.5% | +3.79ms | 66.7% → 71.4% | 2.5ms → 6.3ms |   2 → 5 | `./node_modules/typescript/lib/typescript.js:64997 → 66257` |
|     new | +1.27ms |  0.0% → 14.3% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:66256`         |
|   -0.2% | -2.39µs | 33.3% → 14.3% |         1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:65004 → 66264` |

##### `inferFromMatchingTypes` (`./node_modules/typescript/lib/typescript.js:71402:36`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| +149.5% | +3.79ms | 40.0% → 55.6% | 2.5ms → 6.3ms |   2 → 5 | `./node_modules/typescript/lib/typescript.js:70124 → 71407` |
|  +49.7% | +1.26ms | 40.0% → 33.3% | 2.5ms → 3.8ms |   2 → 3 | `./node_modules/typescript/lib/typescript.js:70123 → 71406` |
|   -0.2% | -2.39µs | 20.0% → 11.1% |         1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:70125 → 71408` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

| Change |   Delta |             % |        Time | Samples | Location                                                    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
|    new | +2.53ms |  0.0% → 22.2% | 0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:61357`         |
|    new | +1.27ms |  0.0% → 11.1% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:61345`         |
|    new | +1.27ms |  0.0% → 11.1% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:61349`         |
|  -0.2% | -0.01ms | 60.0% → 33.3% |       3.8ms |       3 | `./node_modules/typescript/lib/typescript.js:60091 → 61346` |
|  -0.2% | -4.78µs | 40.0% → 22.2% |       2.5ms |       2 | `./node_modules/typescript/lib/typescript.js:60100 → 61355` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2794:14`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
|     new | +3.80ms |  0.0% → 21.4% |   0ms → 3.8ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:2794`        |
|  +99.6% | +3.79ms | 30.0% → 42.9% | 3.8ms → 7.6ms |   3 → 6 | `./node_modules/typescript/lib/typescript.js:2785 → 2798` |
|  -40.1% | -2.54ms | 50.0% → 21.4% | 6.3ms → 3.8ms |   5 → 3 | `./node_modules/typescript/lib/typescript.js:2784 → 2797` |
| removed | -2.54ms |  20.0% → 0.0% |   2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:2782`        |
|     new | +1.27ms |   0.0% → 7.1% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:2803`        |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:69958:77`)

| Change |   Delta |             % |        Time | Samples | Location                                            |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- |
|    new | +3.80ms | 0.0% → 100.0% | 0ms → 3.8ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:69958` |

##### `speculationHelper` (`./node_modules/typescript/lib/typescript.js:14542:29`)

| Change |   Delta |            % |        Time | Samples | Location                                            |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
|    new | +1.27ms | 0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:14549` |
|    new | +1.27ms | 0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:14550` |
|    new | +1.27ms | 0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:14558` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

| Change |   Delta |            % |        Time | Samples | Location                                     |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------------- |
|    new | +2.53ms | 0.0% → 66.7% | 0ms → 2.5ms |   0 → 2 | `ext:deno_node/internal/fs/stat_utils.ts:27` |
|    new | +1.27ms | 0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/internal/fs/stat_utils.ts:71` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

| Change |   Delta |             % |        Time | Samples | Location                   |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_fs/30_fs.js:475` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

| Change |   Delta |             % |        Time | Samples | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/fs.ts:409` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:569:8`)

| Change |   Delta |             % |        Time | Samples | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/internal/fs/utils.mjs:570` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

| Change |   Delta |             % |        Time | Samples | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/internal/fs/utils.mjs:542` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

| Change |   Delta |             % |        Time | Samples | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/internal/fs/stat_utils.ts:74` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:32`)

| Change |   Delta |             % |        Time | Samples | Location                      |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/crypto.ts:297` |

##### `getOptions` (`ext:deno_node/internal/fs/utils.mjs:363:27`)

| Change |   Delta |             % |        Time | Samples | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/internal/fs/utils.mjs:363` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

| Change |   Delta |      % |            Time | Samples | Location                   |
| -----: | ------: | -----: | --------------: | ------: | -------------------------- |
|  +1.6% | +1.13ms | 100.0% | 72.3ms → 73.4ms | 57 → 58 | `ext:core/01_core.js:1106` |

##### `op_url_get_serialization` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | 101      |

##### `op_require_try_self` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | 1370     |

##### `op_inspector_dispatch` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | 203      |

##### `op_fs_read_file_sync` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| +19.8% | +1.25ms | 100.0% | 6.3ms → 7.6ms |   5 → 6 | 409      |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|  Change |   Delta |             % |           Time | Samples | Location                   |
| ------: | ------: | ------------: | -------------: | ------: | -------------------------- |
|  -63.7% | -8.89ms | 73.3% → 80.0% | 14.0ms → 5.1ms |  11 → 4 | `ext:core/00_infra.js:105` |
| removed | -1.27ms |   6.7% → 0.0% |    1.3ms → 0ms |   1 → 0 | `ext:core/00_infra.js:97`  |
| removed | -1.27ms |   6.7% → 0.0% |    1.3ms → 0ms |   1 → 0 | `ext:core/00_infra.js:108` |
| removed | -1.27ms |   6.7% → 0.0% |    1.3ms → 0ms |   1 → 0 | `ext:core/00_infra.js:115` |
|   -0.2% | -2.39µs |  6.7% → 20.0% |          1.3ms |       1 | `ext:core/00_infra.js:95`  |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

| Change |   Delta |             % |            Time | Samples | Location                                                    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| -75.0% | -7.62ms | 42.1% → 20.0% |  10.1ms → 2.5ms |   8 → 2 | `./node_modules/typescript/lib/typescript.js:20242 → 21225` |
| -27.4% | -3.82ms | 57.9% → 80.0% | 14.0ms → 10.1ms |  11 → 8 | `./node_modules/typescript/lib/typescript.js:20243 → 21226` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  -19.2% | -5.11ms | 39.6% → 37.8% | 26.6ms → 21.5ms | 21 → 17 | `./node_modules/typescript/lib/typescript.js:66510 → 67770` |
| removed | -2.54ms |   3.8% → 0.0% |     2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:66518`         |
| removed | -2.54ms |   3.8% → 0.0% |     2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:66560`         |
| removed | -2.54ms |   3.8% → 0.0% |     2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:66588`         |
|  +99.6% | +2.53ms |   3.8% → 8.9% |   2.5ms → 5.1ms |   2 → 4 | `./node_modules/typescript/lib/typescript.js:66493 → 67753` |

##### `op_fs_stat_sync` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
| -43.0% | -7.63ms | 100.0% | 17.8ms → 10.1ms |  14 → 8 | 474      |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:65907:25`)

|  Change |   Delta |            % |          Time | Samples | Location                                                    |
| ------: | ------: | -----------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -3.81ms | 25.0% → 0.0% |   3.8ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:64683`         |
| removed | -2.54ms | 16.7% → 0.0% |   2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:64677`         |
|     new | +2.53ms | 0.0% → 33.3% |   0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:65914`         |
|  -50.1% | -1.27ms |        16.7% | 2.5ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:64653 → 65908` |
|  -50.1% | -1.27ms |        16.7% | 2.5ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:64661 → 65916` |

##### `createUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js:61753:45`)

|  Change |   Delta |             % |        Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
| removed | -3.81ms |  37.5% → 0.0% | 3.8ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:60509`         |
| removed | -3.81ms |  37.5% → 0.0% | 3.8ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:60511`         |
| removed | -1.27ms |  12.5% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:60599`         |
|     new | +1.27ms |  0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:61801`         |
|   -0.2% | -2.39µs | 12.5% → 50.0% |       1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:60512 → 61767` |

##### `getNamedMembers` (`./node_modules/typescript/lib/typescript.js:53726:27`)

|  Change |   Delta |            % |        Time | Samples | Location                                            |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
| removed | -5.07ms | 66.7% → 0.0% | 5.1ms → 0ms |   4 → 0 | `./node_modules/typescript/lib/typescript.js:52487` |
| removed | -2.54ms | 33.3% → 0.0% | 2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:52492` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  -75.0% | -3.81ms |   6.6% → 1.8% |   5.1ms → 1.3ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:67063 → 68323` |
| removed | -3.81ms |   4.9% → 0.0% |     3.8ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:67135`         |
|   -5.6% | -2.62ms | 60.7% → 62.5% | 46.9ms → 44.3ms | 37 → 35 | `./node_modules/typescript/lib/typescript.js:67076 → 68336` |
|  -66.7% | -2.54ms |   4.9% → 1.8% |   3.8ms → 1.3ms |   3 → 1 | `./node_modules/typescript/lib/typescript.js:67102 → 68362` |
|     new | +2.53ms |   0.0% → 3.6% |     0ms → 2.5ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:68383`         |

##### `resolveObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:60465:36`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -2.54ms |  20.0% → 0.0% |   2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:59233`         |
| removed | -2.54ms |  20.0% → 0.0% |   2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:59234`         |
|  -33.5% | -1.27ms | 30.0% → 40.0% | 3.8ms → 2.5ms |   3 → 2 | `./node_modules/typescript/lib/typescript.js:59223 → 60478` |
| removed | -1.27ms |  10.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:59247`         |
|  +99.6% | +1.26ms | 10.0% → 40.0% | 1.3ms → 2.5ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:59245 → 60500` |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -6.34ms |  62.5% → 0.0% |   6.3ms → 0ms |   5 → 0 | `./node_modules/typescript/lib/typescript.js:68736`         |
|  -33.5% | -1.27ms | 37.5% → 66.7% | 3.8ms → 2.5ms |   3 → 2 | `./node_modules/typescript/lib/typescript.js:68730 → 69990` |
|     new | +1.27ms |  0.0% → 33.3% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:69995`         |

##### `__export` (`./node_modules/typescript/lib/typescript.js:22:16`)

| Change |   Delta |      % |          Time | Samples | Location                                         |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------ |
| -83.4% | -6.34ms | 100.0% | 7.6ms → 1.3ms |   6 → 1 | `./node_modules/typescript/lib/typescript.js:24` |

##### `isGenericMappedType` (`./node_modules/typescript/lib/typescript.js:61325:31`)

|  Change |   Delta |            % |        Time | Samples | Location                                            |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
| removed | -2.54ms | 40.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:60071` |
| removed | -2.54ms | 40.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:60077` |
| removed | -1.27ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:60070` |

##### `isOptionalDeclaration` (`./node_modules/typescript/lib/typescript.js:22956:31`)

|  Change |   Delta |            % |        Time | Samples | Location                                            |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
| removed | -3.81ms | 60.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:21964` |
| removed | -1.27ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:21967` |
| removed | -1.27ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:21969` |

##### `nextTokenWithoutCheck` (`./node_modules/typescript/lib/typescript.js:33008:33`)

| Change |   Delta |      % |           Time | Samples | Location                                                    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------------------------------- |
| -44.5% | -5.09ms | 100.0% | 11.4ms → 6.3ms |   9 → 5 | `./node_modules/typescript/lib/typescript.js:31954 → 33009` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:61745:27`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -3.81ms |  33.3% → 0.0% |   3.8ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:60490`         |
|  -33.5% | -2.55ms | 66.7% → 80.0% | 7.6ms → 5.1ms |   6 → 4 | `./node_modules/typescript/lib/typescript.js:60493 → 61748` |
|     new | +1.27ms |  0.0% → 20.0% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:61746`         |

##### `structuredTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68467:37`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -60.1% | -3.81ms | 62.5% → 50.0% | 6.3ms → 2.5ms |   5 → 2 | `./node_modules/typescript/lib/typescript.js:67209 → 68469` |
| removed | -1.27ms |  12.5% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:67238`         |
| removed | -1.27ms |  12.5% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:67247`         |
| removed | -1.27ms |  12.5% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:67263`         |
|     new | +1.27ms |  0.0% → 25.0% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:68467`         |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js:24844:27`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -2.54ms |  28.6% → 0.0% |   2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:23819`         |
|  -50.1% | -1.27ms | 28.6% → 33.3% | 2.5ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:23814 → 24864` |
| removed | -1.27ms |  14.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:23800`         |
| removed | -1.27ms |  14.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:23815`         |
| removed | -1.27ms |  14.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:23818`         |

##### `compareSignaturesRelated` (`./node_modules/typescript/lib/typescript.js:67064:36`)

|  Change |   Delta |            % |        Time | Samples | Location                                            |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
| removed | -3.81ms | 42.9% → 0.0% | 3.8ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:65866` |
| removed | -1.27ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:65815` |
| removed | -1.27ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:65839` |
| removed | -1.27ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:65869` |
| removed | -1.27ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:65893` |

##### `getTypeAtFlowNode` (`./node_modules/typescript/lib/typescript.js:72943:31`)

|  Change |   Delta |            % |        Time | Samples | Location                                            |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
| removed | -2.54ms | 33.3% → 0.0% | 2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:71662` |
| removed | -1.27ms | 16.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:71660` |
| removed | -1.27ms | 16.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:71703` |
| removed | -1.27ms | 16.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:71729` |
| removed | -1.27ms | 16.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:71732` |

##### `getAliasId` (`./node_modules/typescript/lib/typescript.js:62776:22`)

|  Change |   Delta |              % |          Time | Samples | Location                                                    |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -66.7% | -2.54ms | 60.0% → 100.0% | 3.8ms → 1.3ms |   3 → 1 | `./node_modules/typescript/lib/typescript.js:61522 → 62777` |
| removed | -2.54ms |   40.0% → 0.0% |   2.5ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:61521`         |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:66062:49`)

|  Change |   Delta |             % |        Time | Samples | Location                                            |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- |
| removed | -5.07ms | 100.0% → 0.0% | 5.1ms → 0ms |   4 → 0 | `./node_modules/typescript/lib/typescript.js:64807` |

##### `getPropertyOfUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:61929:48`)

|  Change |   Delta |            % |        Time | Samples | Location                                            |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
| removed | -3.81ms | 75.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:60675` |
| removed | -1.27ms | 25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:60676` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

| Change |   Delta |      % |           Time | Samples | Location                     |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------- |
| -33.5% | -3.82ms | 100.0% | 11.4ms → 7.6ms |   9 → 6 | `ext:runtime/01_errors.js:8` |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|  Change |   Delta |             % |        Time | Samples | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- |
| removed | -2.54ms | 100.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `ext:deno_node/fs.ts:117` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

| Change |   Delta |      % |          Time | Samples | Location                  |
| -----: | ------: | -----: | ------------: | ------: | ------------------------- |
| -33.5% | -1.27ms | 100.0% | 3.8ms → 2.5ms |   3 → 2 | `ext:deno_node/fs.ts:270` |

##### `FastBuffer` (`ext:deno_node/internal/buffer.mjs:192:14`)

|  Change |   Delta |             % |        Time | Samples | Location                                |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `ext:deno_node/internal/buffer.mjs:193` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|  Change |   Delta |             % |        Time | Samples | Location                                     |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `ext:deno_node/internal/fs/stat_utils.ts:30` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:554:8`)

|  Change |   Delta |             % |        Time | Samples | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `ext:deno_node/internal/fs/utils.mjs:555` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

| Change |   Delta |      % |  Time | Samples | Location                         |
| -----: | ------: | -----: | ----: | ------: | -------------------------------- |
|  -0.2% | -0.01ms | 100.0% | 3.8ms |       3 | `ext:core/00_primordials.js:318` |

##### `loadMaybeCjs` (`node:module:1669:22`)

| Change |   Delta |      % |  Time | Samples | Location           |
| -----: | ------: | -----: | ----: | ------: | ------------------ |
|  -0.2% | -2.39µs | 100.0% | 1.3ms |       1 | `node:module:1670` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

| Change |   Delta |      % |  Time | Samples | Location                                |
| -----: | ------: | -----: | ----: | ------: | --------------------------------------- |
|  -0.2% | -2.39µs | 100.0% | 1.3ms |       1 | `ext:deno_node/internal/buffer.mjs:707` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

| Change |   Delta |      % |  Time | Samples | Location                                  |
| -----: | ------: | -----: | ----: | ------: | ----------------------------------------- |
|  -0.2% | -2.39µs | 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:527` |

##### `op_compile_function` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
| -12.2% | -3.86ms | 100.0% | 31.7ms → 27.9ms | 25 → 22 | 1106     |

##### `op_fs_realpath_sync` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | 281      |

##### `op_require_real_path` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Location |
| ------: | ------: | ------------: | ----------: | ------: | -------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | 811      |

##### `op_fs_read_dir_sync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Location |
| ------: | ------: | ------------: | ----------: | ------: | -------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | 121      |

##### `op_require_read_file` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Location |
| -----: | ------: | -----: | ----: | ------: | -------- |
|  -0.2% | -0.01ms | 100.0% | 3.8ms |       3 | 1670     |

##### `op_node_encoding_slice` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Location |
| -----: | ------: | -----: | ----: | ------: | -------- |
|  -0.2% | -4.78µs | 100.0% | 2.5ms |       2 | 707      |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `internIdentifier` (`./node_modules/typescript/lib/typescript.js:33331:28`)

|  Change |    Delta |             % |           Time | Samples | Caller                                  | Location                                                          |
| ------: | -------: | ------------: | -------------: | ------: | --------------------------------------- | ----------------------------------------------------------------- |
| +432.3% | +16.45ms | 75.0% → 88.9% | 3.8ms → 20.3ms |  3 → 16 | `createIdentifier`                      | `./node_modules/typescript/lib/typescript.js:32283:28 → 33338:28` |
|     new |  +2.53ms |  0.0% → 11.1% |    0ms → 2.5ms |   0 → 2 | `parseAmbientExternalModuleDeclaration` | `./node_modules/typescript/lib/typescript.js:37814:49`            |
| removed |  -1.27ms |  25.0% → 0.0% |    1.3ms → 0ms |   1 → 0 | `parseJSDocIdentifierName`              | `./node_modules/typescript/lib/typescript.js:38146:40`            |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

|  Change |   Delta |             % |            Time | Samples | Caller                                     | Location                                                          |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  +66.4% | +7.57ms | 69.2% → 60.0% | 11.4ms → 19.0ms |  9 → 15 | `isTypeIdenticalTo`                        | `./node_modules/typescript/lib/typescript.js:65203:29 → 66463:29` |
| +399.1% | +5.06ms |  7.7% → 20.0% |   1.3ms → 6.3ms |   1 → 5 | `isTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:65221:30 → 66481:30` |
|     new | +3.80ms |  0.0% → 12.0% |     0ms → 3.8ms |   0 → 3 | `isTypeComparableTo`                       | `./node_modules/typescript/lib/typescript.js:65227:30 → 66487:30` |
| removed | -1.27ms |   7.7% → 0.0% |     1.3ms → 0ms |   1 → 0 | `isApplicableIndexType`                    | `./node_modules/typescript/lib/typescript.js:60845:33`            |
|   -0.2% | -4.78µs |  15.4% → 8.0% |           2.5ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:65249:52 → 66509:52` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:66283:33`)

| Change |    Delta |              % |            Time | Samples | Caller                     | Location                                                          |
| -----: | -------: | -------------: | --------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| +39.7% | +10.08ms | 100.0% → 96.6% | 25.4ms → 35.4ms | 20 → 28 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:65006:36 → 66266:36` |

##### `isDeeplyNestedType` (`./node_modules/typescript/lib/typescript.js:70031:30`)

|  Change |   Delta |             % |           Time | Samples | Caller                   | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| +174.5% | +8.85ms | 66.7% → 78.6% | 5.1ms → 13.9ms |  4 → 11 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|  +49.7% | +1.26ms | 33.3% → 21.4% |  2.5ms → 3.8ms |   2 → 3 | `invokeOnce`             | `./node_modules/typescript/lib/typescript.js:70091:24 → 71374:24` |

##### `isSimpleTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67312:33`)

| Change |   Delta |              % |          Time | Samples | Caller            | Location                                                          |
| -----: | ------: | -------------: | ------------: | ------: | ----------------- | ----------------------------------------------------------------- |
|    new | +6.33ms |   0.0% → 71.4% |   0ms → 6.3ms |   0 → 5 | `isRelatedTo`     | `./node_modules/typescript/lib/typescript.js:67753:25`            |
| +99.6% | +1.26ms | 100.0% → 28.6% | 1.3ms → 2.5ms |   1 → 2 | `isTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

| Change |   Delta |             % |            Time | Samples | Caller                          | Location                                                          |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
|    new | +3.80ms |  0.0% → 16.7% |     0ms → 3.8ms |   0 → 3 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:66148:29 → 67408:29` |
|    new | +1.27ms |   0.0% → 5.6% |     0ms → 1.3ms |   0 → 1 | `createMarkerType`              | `./node_modules/typescript/lib/typescript.js:69926:28`            |
|    new | +1.27ms |   0.0% → 5.6% |     0ms → 1.3ms |   0 → 1 | `createPromiseLikeType`         | `./node_modules/typescript/lib/typescript.js:80633:33`            |
|    new | +1.27ms |   0.0% → 5.6% |     0ms → 1.3ms |   0 → 1 | `createNormalizedTupleType`     | `./node_modules/typescript/lib/typescript.js:63799:37`            |
|  -0.2% | -0.03ms | 91.7% → 61.1% | 14.0ms → 13.9ms |      11 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:62541:41 → 63796:41` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js:24991:28`)

| Change |   Delta |            % |        Time | Samples | Caller                        | Location                                                          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
|    new | +5.06ms | 0.0% → 80.0% | 0ms → 5.1ms |   0 → 4 | `createIdentifier`            | `./node_modules/typescript/lib/typescript.js:32283:28 → 33338:28` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `createAccessFromSymbolChain` | `./node_modules/typescript/lib/typescript.js:54749:43 → 55996:43` |

##### `normalizePath` (`./node_modules/typescript/lib/typescript.js:9164:23`)

| Change |   Delta |            % |        Time | Samples | Caller                                        | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------- | ------------------------------------------------------ |
|    new | +3.80ms | 0.0% → 60.0% | 0ms → 3.8ms |   0 → 3 | `toPath`                                      | `./node_modules/typescript/lib/typescript.js:9187:16`  |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `loadModuleFromSpecificNodeModulesDirectory`  | `./node_modules/typescript/lib/typescript.js:45536:52` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `loadModuleFromImmediateNodeModulesDirectory` | `./node_modules/typescript/lib/typescript.js:45512:53` |

##### `getIndexedAccessTypeOrUndefined` (`./node_modules/typescript/lib/typescript.js:65149:43`)

|  Change |   Delta |      % |          Time | Samples | Caller                 | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| +498.9% | +6.33ms | 100.0% | 1.3ms → 7.6ms |   1 → 6 | `getIndexedAccessType` | `./node_modules/typescript/lib/typescript.js:63879:32 → 65134:32` |

##### `canHaveJSDoc` (`./node_modules/typescript/lib/typescript.js:18835:22`)

|  Change |   Delta |             % |          Time | Samples | Caller                     | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| +299.2% | +3.80ms | 50.0% → 57.1% | 1.3ms → 5.1ms |   1 → 4 | `hasJSDocNodes`            | `./node_modules/typescript/lib/typescript.js:15138:23 → 16113:23` |
|     new | +1.27ms |  0.0% → 14.3% |   0ms → 1.3ms |   0 → 1 | `getJSDocTags`             | `./node_modules/typescript/lib/typescript.js:15290:22`            |
|   -0.2% | -2.39µs | 50.0% → 14.3% |         1.3ms |       1 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36` |

##### `modifiersToFlags` (`./node_modules/typescript/lib/typescript.js:20637:26`)

| Change |   Delta |            % |        Time | Samples | Caller                             | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------- | ------------------------------------------------------ |
|    new | +2.53ms | 0.0% → 50.0% | 0ms → 2.5ms |   0 → 2 | `createParameterDeclaration`       | `./node_modules/typescript/lib/typescript.js:25241:38` |
|    new | +1.27ms | 0.0% → 25.0% | 0ms → 1.3ms |   0 → 1 | `createArrowFunction`              | `./node_modules/typescript/lib/typescript.js:26100:31` |
|    new | +1.27ms | 0.0% → 25.0% | 0ms → 1.3ms |   0 → 1 | `getSyntacticModifierFlagsNoCache` | `./node_modules/typescript/lib/typescript.js:20630:42` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js:71910:29`)

|  Change |   Delta |              % |          Time | Samples | Caller                | Location                                                          |
| ------: | ------: | -------------: | ------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| +299.2% | +3.80ms | 100.0% → 80.0% | 1.3ms → 5.1ms |   1 → 4 | `checkIdentifier`     | `./node_modules/typescript/lib/typescript.js:72959:27 → 74242:27` |
|     new | +1.27ms |   0.0% → 20.0% |   0ms → 1.3ms |   0 → 1 | `isMatchingReference` | `./node_modules/typescript/lib/typescript.js:71968:31`            |

##### `token` (`./node_modules/typescript/lib/typescript.js:33005:17`)

| Change |   Delta |            % |        Time | Samples | Caller                                   | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------------- | ------------------------------------------------------ |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `doJSDocScan`                            | `./node_modules/typescript/lib/typescript.js:38308:27` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `isStartOfFunctionTypeOrConstructorType` | `./node_modules/typescript/lib/typescript.js:35079:50` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `parseUnionOrIntersectionType`           | `./node_modules/typescript/lib/typescript.js:35055:40` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `speculationHelper`                      | `./node_modules/typescript/lib/typescript.js:14542:29` |
|    new | +1.27ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `parseImportOrExportSpecifier`           | `./node_modules/typescript/lib/typescript.js:38024:40` |

##### `inferFromTypeArguments` (`./node_modules/typescript/lib/typescript.js:71419:36`)

|  Change |   Delta |      % |          Time | Samples | Caller           | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | ---------------- | ----------------------------------------------------------------- |
| +199.4% | +5.06ms | 100.0% | 2.5ms → 7.6ms |   2 → 6 | `inferFromTypes` | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |

##### `instantiateType` (`./node_modules/typescript/lib/typescript.js:66256:27`)

|  Change |   Delta |             % |          Time | Samples | Caller                        | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
|     new | +2.53ms |  0.0% → 28.6% |   0ms → 2.5ms |   0 → 2 | `instantiateList`             | `./node_modules/typescript/lib/typescript.js:64623:27 → 65878:27` |
| removed | -1.27ms |  33.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `instantiateIndexInfo`        | `./node_modules/typescript/lib/typescript.js:65135:32`            |
|     new | +1.27ms |  0.0% → 14.3% |   0ms → 1.3ms |   0 → 1 | `getReturnTypeOfSignature`    | `./node_modules/typescript/lib/typescript.js:61207:36 → 62462:36` |
|  +99.6% | +1.26ms | 33.3% → 28.6% | 1.3ms → 2.5ms |   1 → 2 | `getTypeOfInstantiatedSymbol` | `./node_modules/typescript/lib/typescript.js:58351:39 → 59606:39` |
|  +99.6% | +1.26ms | 33.3% → 28.6% | 1.3ms → 2.5ms |   1 → 2 | `getMappedType`               | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |

##### `inferFromMatchingTypes` (`./node_modules/typescript/lib/typescript.js:71402:36`)

| Change |   Delta |      % |           Time | Samples | Caller           | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | ---------------- | ----------------------------------------------------------------- |
| +79.7% | +5.05ms | 100.0% | 6.3ms → 11.4ms |   5 → 9 | `inferFromTypes` | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

|  Change |   Delta |             % |          Time | Samples | Caller                          | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
|     new | +3.80ms |  0.0% → 33.3% |   0ms → 3.8ms |   0 → 3 | `getPropertyOfType`             | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
| +299.2% | +3.80ms | 20.0% → 44.4% | 1.3ms → 5.1ms |   1 → 4 | `getPropertiesOfObjectType`     | `./node_modules/typescript/lib/typescript.js:60116:37 → 61371:37` |
| removed | -1.27ms |  20.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `isWeakType`                    | `./node_modules/typescript/lib/typescript.js:68592:22 → 69852:22` |
| removed | -1.27ms |  20.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `isEmptyObjectType`             | `./node_modules/typescript/lib/typescript.js:65964:29 → 67224:29` |
|   -0.2% | -4.78µs | 40.0% → 22.2% |         2.5ms |       2 | `getSignaturesOfStructuredType` | `./node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |

##### `some` (`./node_modules/typescript/lib/typescript.js:2794:14`)

|  Change |   Delta |            % |          Time | Samples | Caller                                | Location                                                          |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------- | ----------------------------------------------------------------- |
|  -50.1% | -1.27ms | 20.0% → 7.1% | 2.5ms → 1.3ms |   2 → 1 | `isTypeReferenceWithGenericArguments` | `./node_modules/typescript/lib/typescript.js:68697:47 → 69957:47` |
| removed | -1.27ms | 10.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `hasModifierOfKind`                   | `./node_modules/typescript/lib/typescript.js:30751:27`            |
| removed | -1.27ms | 10.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `instantiateContextualType`           | `./node_modules/typescript/lib/typescript.js:74222:37`            |
| removed | -1.27ms | 10.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `isReachableFlowNodeWorker`           | `./node_modules/typescript/lib/typescript.js:71498:37`            |
| removed | -1.27ms | 10.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `checkVariableLikeDeclaration`        | `./node_modules/typescript/lib/typescript.js:83907:40`            |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:69958:77`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                                        |
| -----: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------- |
|    new | +3.80ms | 0.0% → 100.0% | 0ms → 3.8ms |   0 → 3 | `some` | `./node_modules/typescript/lib/typescript.js:2781:14 → 2794:14` |

##### `speculationHelper` (`./node_modules/typescript/lib/typescript.js:14542:29`)

| Change |   Delta |            % |        Time | Samples | Caller      | Location                                                          |
| -----: | ------: | -----------: | ----------: | ------: | ----------- | ----------------------------------------------------------------- |
|    new | +2.53ms | 0.0% → 66.7% | 0ms → 2.5ms |   0 → 2 | `lookAhead` | `./node_modules/typescript/lib/typescript.js:13622:21 → 14581:21` |
|    new | +1.27ms | 0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `tryScan`   | `./node_modules/typescript/lib/typescript.js:13629:19 → 14588:19` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

| Change |   Delta |             % |        Time | Samples | Caller                   | Location                                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------ | ---------------------------------------------- |
|    new | +3.80ms | 0.0% → 100.0% | 0ms → 3.8ms |   0 → 3 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location                    |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | --------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location                                                        |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | --------------------------------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28 → 8751:28` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:569:8`)

| Change |   Delta |             % |        Time | Samples | Caller  | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | ------- | -------------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

| Change |   Delta |             % |        Time | Samples | Caller  | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | ------- | -------------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location                    |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | --------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:32`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                      |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ----------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1` |

##### `getOptions` (`ext:deno_node/internal/fs/utils.mjs:363:27`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location                                              |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | ----------------------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location              |
| -----: | ------: | -----: | --------------: | ------: | ---------- | --------------------- |
|  +1.6% | +1.13ms | 100.0% | 72.3ms → 73.4ms | 57 → 58 | `wrapSafe` | `node:module:1596:18` |

##### `op_url_get_serialization` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller             | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------------ |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `getSerialization` | `ext:deno_web/00_url.js:97:26` |

##### `op_require_try_self` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location              |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | --------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `node:module:1259:35` |

##### `op_inspector_dispatch` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                           |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ---------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `post` | `ext:deno_node/inspector.js:179:7` |

##### `op_fs_read_file_sync` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                     |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ---------------------------- |
| +19.8% | +1.25ms | 100.0% | 6.3ms → 7.6ms |   5 → 6 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

| Change |    Delta |      % |           Time | Samples | Caller            | Location    |
| -----: | -------: | -----: | -------------: | ------: | ----------------- | ----------- |
| -66.7% | -12.70ms | 100.0% | 19.0ms → 6.3ms |  15 → 5 | `op_fs_stat_sync` | `<unknown>` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|  Change |   Delta |            % |          Time | Samples | Caller                                 | Location                                                          |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
| removed | -2.54ms | 10.5% → 0.0% |   2.5ms → 0ms |   2 → 0 | `getSingleBaseForNonAugmentingSubtype` | `./node_modules/typescript/lib/typescript.js:68988:48`            |
| removed | -2.54ms | 10.5% → 0.0% |   2.5ms → 0ms |   2 → 0 | `getRecursionIdentity`                 | `./node_modules/typescript/lib/typescript.js:68813:32`            |
| removed | -2.54ms | 10.5% → 0.0% |   2.5ms → 0ms |   2 → 0 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js:64785:38`            |
|     new | +2.53ms | 0.0% → 20.0% |   0ms → 2.5ms |   0 → 2 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js:71184:28`            |
| +199.4% | +2.53ms | 5.3% → 30.0% | 1.3ms → 3.8ms |   1 → 3 | `couldContainTypeVariables`            | `./node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`)

|  Change |   Delta |             % |            Time | Samples | Caller                   | Location                                                          |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
|  -15.5% | -7.69ms | 73.6% → 73.3% | 49.5ms → 41.8ms | 39 → 33 | `checkTypeRelatedTo`     | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| removed | -6.34ms |   9.4% → 0.0% |     6.3ms → 0ms |   5 → 0 | `isRelatedToWorker2`     | `./node_modules/typescript/lib/typescript.js:68378:34 → 69638:34` |
|  -75.0% | -3.81ms |   7.5% → 2.2% |   5.1ms → 1.3ms |   4 → 1 | `eachTypeRelatedToType`  | `./node_modules/typescript/lib/typescript.js:66935:35 → 68195:35` |
|     new | +2.53ms |   0.0% → 4.4% |     0ms → 2.5ms |   0 → 2 | `typeRelatedToSomeType`  | `./node_modules/typescript/lib/typescript.js:66827:35 → 68087:35` |
|     new | +2.53ms |   0.0% → 4.4% |     0ms → 2.5ms |   0 → 2 | `typeArgumentsRelatedTo` | `./node_modules/typescript/lib/typescript.js:66973:36 → 68233:36` |

##### `op_fs_stat_sync` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location                      |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ----------------------------- |
| -43.0% | -7.63ms | 100.0% | 17.8ms → 10.1ms |  14 → 8 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:65907:25`)

| Change |   Delta |             % |          Time | Samples | Caller                  | Location                                                          |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| -83.4% | -6.34ms | 50.0% → 16.7% | 7.6ms → 1.3ms |   6 → 1 | `getMappedType`         | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
| -50.1% | -1.27ms |         16.7% | 2.5ms → 1.3ms |   2 → 1 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
| +33.1% | +1.26ms | 25.0% → 66.7% | 3.8ms → 5.1ms |   3 → 4 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:64807:49 → 66062:49` |

##### `createUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js:61753:45`)

| Change |   Delta |      % |           Time | Samples | Caller                           | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| -75.0% | -7.62ms | 100.0% | 10.1ms → 2.5ms |   8 → 2 | `getUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60637:42 → 61892:42` |

##### `getNamedMembers` (`./node_modules/typescript/lib/typescript.js:53726:27`)

|  Change |   Delta |            % |        Time | Samples | Caller                     | Location                                                          |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| removed | -6.34ms | 83.3% → 0.0% | 6.3ms → 0ms |   5 → 0 | `setStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js:52502:36 → 53743:36` |
| removed | -1.27ms | 16.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `resolveDeclaredMembers`   | `./node_modules/typescript/lib/typescript.js:59042:34`            |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

| Change |   Delta |      % |            Time | Samples | Caller        | Location                                                          |
| -----: | ------: | -----: | --------------: | ------: | ------------- | ----------------------------------------------------------------- |
|  -8.4% | -6.48ms | 100.0% | 77.4ms → 70.9ms | 61 → 56 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |

##### `resolveObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:60465:36`)

| Change |   Delta |      % |           Time | Samples | Caller                        | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
| -50.1% | -6.35ms | 100.0% | 12.7ms → 6.3ms |  10 → 5 | `resolveTypeReferenceMembers` | `./node_modules/typescript/lib/typescript.js:59264:39 → 60519:39` |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`)

| Change |   Delta |      % |           Time | Samples | Caller                   | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| -62.6% | -6.35ms | 100.0% | 10.1ms → 3.8ms |   8 → 3 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### `__export` (`./node_modules/typescript/lib/typescript.js:22:16`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location                                            |
| -----: | ------: | -----: | ------------: | ------: | ------------- | --------------------------------------------------- |
| -83.4% | -6.34ms | 100.0% | 7.6ms → 1.3ms |   6 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:16:15` |

##### `isGenericMappedType` (`./node_modules/typescript/lib/typescript.js:61325:31`)

|  Change |   Delta |            % |        Time | Samples | Caller                          | Location                                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| removed | -3.81ms | 60.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |
| removed | -1.27ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `isEmptyObjectType`             | `./node_modules/typescript/lib/typescript.js:65964:29`            |
| removed | -1.27ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)`                   | `./node_modules/typescript/lib/typescript.js:73958:7`             |

##### `isOptionalDeclaration` (`./node_modules/typescript/lib/typescript.js:22956:31`)

|  Change |   Delta |             % |        Time | Samples | Caller               | Location                                                          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ----------------------------------------------------------------- |
| removed | -6.34ms | 100.0% → 0.0% | 6.3ms → 0ms |   5 → 0 | `getTypeOfParameter` | `./node_modules/typescript/lib/typescript.js:78772:30 → 80067:30` |

##### `nextTokenWithoutCheck` (`./node_modules/typescript/lib/typescript.js:33008:33`)

| Change |   Delta |             % |           Time | Samples | Caller             | Location                                                          |
| -----: | ------: | ------------: | -------------: | ------: | ------------------ | ----------------------------------------------------------------- |
| -50.1% | -5.08ms | 88.9% → 80.0% | 10.1ms → 5.1ms |   8 → 4 | `nextToken`        | `./node_modules/typescript/lib/typescript.js:31960:21 → 33015:21` |
|  -0.2% | -2.39µs | 11.1% → 20.0% |          1.3ms |       1 | `createIdentifier` | `./node_modules/typescript/lib/typescript.js:32283:28 → 33338:28` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:61745:27`)

|  Change |   Delta |             % |          Time | Samples | Caller                              | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
|  -66.7% | -5.08ms | 66.7% → 40.0% | 7.6ms → 2.5ms |   6 → 2 | `getReducedApparentType`            | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34` |
| removed | -1.27ms |  11.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45`            |
| removed | -1.27ms |  11.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `getEffectsSignature`               | `./node_modules/typescript/lib/typescript.js:71434:31`            |
| removed | -1.27ms |  11.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `inferFromTypes`                    | `./node_modules/typescript/lib/typescript.js:69901:28`            |
|     new | +1.27ms |  0.0% → 20.0% |   0ms → 1.3ms |   0 → 1 | `resolveMappedTypeMembers`          | `./node_modules/typescript/lib/typescript.js:59922:36 → 61177:36` |

##### `structuredTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68467:37`)

| Change |   Delta |      % |           Time | Samples | Caller                   | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| -50.1% | -5.08ms | 100.0% | 10.1ms → 5.1ms |   8 → 4 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js:24844:27`)

|  Change |   Delta |              % |          Time | Samples | Caller                                           | Location                                                          |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------- |
|  -40.1% | -2.54ms | 71.4% → 100.0% | 6.3ms → 3.8ms |   5 → 3 | `createNodeArray`                                | `./node_modules/typescript/lib/typescript.js:32232:27 → 33287:27` |
| removed | -1.27ms |   14.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `createArrayLiteralExpression`                   | `./node_modules/typescript/lib/typescript.js:24790:40`            |
| removed | -1.27ms |   14.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `parenthesizeConstituentTypesOfIntersectionType` | `./node_modules/typescript/lib/typescript.js:22869:58`            |

##### `compareSignaturesRelated` (`./node_modules/typescript/lib/typescript.js:67064:36`)

| Change |   Delta |      % |          Time | Samples | Caller               | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | -------------------- | ----------------------------------------------------------------- |
| -57.2% | -5.08ms | 100.0% | 8.9ms → 3.8ms |   7 → 3 | `signatureRelatedTo` | `./node_modules/typescript/lib/typescript.js:68375:32 → 69635:32` |

##### `getTypeAtFlowNode` (`./node_modules/typescript/lib/typescript.js:72943:31`)

| Change |   Delta |              % |          Time | Samples | Caller                   | Location                                                          |
| -----: | ------: | -------------: | ------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| -83.4% | -6.34ms | 100.0% → 50.0% | 7.6ms → 1.3ms |   6 → 1 | `getFlowTypeOfReference` | `./node_modules/typescript/lib/typescript.js:71634:34 → 72917:34` |
|    new | +1.27ms |   0.0% → 50.0% |   0ms → 1.3ms |   0 → 1 | `getTypeAtFlowCondition` | `./node_modules/typescript/lib/typescript.js:71854:36 → 73137:36` |

##### `getAliasId` (`./node_modules/typescript/lib/typescript.js:62776:22`)

|  Change |   Delta |              % |        Time | Samples | Caller                       | Location                                                          |
| ------: | ------: | -------------: | ----------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
| removed | -3.81ms |   60.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38`            |
| removed | -1.27ms |   20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getIntersectionType`        | `./node_modules/typescript/lib/typescript.js:63112:31`            |
|   -0.2% | -2.39µs | 20.0% → 100.0% |       1.3ms |       1 | `getUnionTypeFromSortedList` | `./node_modules/typescript/lib/typescript.js:62948:38 → 64203:38` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:66062:49`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                                        |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------- |
| removed | -5.07ms | 100.0% → 0.0% | 5.1ms → 0ms |   4 → 0 | `map`  | `./node_modules/typescript/lib/typescript.js:2567:13 → 2580:13` |

##### `getPropertyOfUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:61929:48`)

|  Change |   Delta |            % |        Time | Samples | Caller                                   | Location                                                          |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------- | ----------------------------------------------------------------- |
| removed | -2.54ms | 50.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `getPropertiesOfUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:60131:50 → 61386:50` |
| removed | -2.54ms | 50.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `getPropertyOfType`                      | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

| Change |   Delta |      % |           Time | Samples | Caller        | Location                      |
| -----: | ------: | -----: | -------------: | ------: | ------------- | ----------------------------- |
| -33.5% | -3.82ms | 100.0% | 11.4ms → 7.6ms |   9 → 6 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|  Change |   Delta |             % |        Time | Samples | Caller             | Location                     |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | ---------------------------- |
| removed | -2.54ms | 100.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `realpathSyncImpl` | `ext:deno_node/fs.ts:148:28` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                     |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ---------------------------- |
| -33.5% | -1.27ms | 100.0% | 3.8ms → 2.5ms |   3 → 2 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `FastBuffer` (`ext:deno_node/internal/buffer.mjs:192:14`)

|  Change |   Delta |             % |        Time | Samples | Caller            | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------- | ------------------------------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `fromArrayBuffer` | `ext:deno_node/internal/buffer.mjs:1244:25` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location                                              |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ----------------------------------------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `fileSystemEntryExists` | `./node_modules/typescript/lib/typescript.js:8818:35` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:554:8`)

|  Change |   Delta |             % |        Time | Samples | Caller  | Location                                     |
| ------: | ------: | ------------: | ----------: | ------: | ------- | -------------------------------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

| Change |   Delta |      % |  Time | Samples | Caller             | Location                     |
| -----: | ------: | -----: | ----: | ------: | ------------------ | ---------------------------- |
|  -0.2% | -0.01ms | 100.0% | 3.8ms |       3 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `loadMaybeCjs` (`node:module:1669:22`)

| Change |   Delta |      % |  Time | Samples | Caller        | Location              |
| -----: | ------: | -----: | ----: | ------: | ------------- | --------------------- |
|  -0.2% | -2.39µs | 100.0% | 1.3ms |       1 | `(anonymous)` | `node:module:1653:37` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

| Change |   Delta |      % |  Time | Samples | Caller     | Location                                   |
| -----: | ------: | -----: | ----: | ------: | ---------- | ------------------------------------------ |
|  -0.2% | -2.39µs | 100.0% | 1.3ms |       1 | `toString` | `ext:deno_node/internal/buffer.mjs:751:46` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

| Change |   Delta |      % |  Time | Samples | Caller  | Location                                     |
| -----: | ------: | -----: | ----: | ------: | ------- | -------------------------------------------- |
|  -0.2% | -2.39µs | 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `op_compile_function` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller            | Location                      |
| -----: | ------: | -----: | --------------: | ------: | ----------------- | ----------------------------- |
| -12.2% | -3.86ms | 100.0% | 31.7ms → 27.9ms | 25 → 22 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `op_fs_realpath_sync` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                      |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `op_require_real_path` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller       | Location             |
| ------: | ------: | ------------: | ----------: | ------: | ------------ | -------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `toRealPath` | `node:module:806:20` |

##### `op_fs_read_dir_sync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------------------------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `readdirSync` | `ext:deno_node/_fs/_fs_readdir.ts:109:28` |

##### `op_require_read_file` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Caller         | Location              |
| -----: | ------: | -----: | ----: | ------: | -------------- | --------------------- |
|  -0.2% | -0.01ms | 100.0% | 3.8ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `op_node_encoding_slice` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Caller       | Location                                   |
| -----: | ------: | -----: | ----: | ------: | ------------ | ------------------------------------------ |
|  -0.2% | -4.78µs | 100.0% | 2.5ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Third-party

|  Change |    Delta |             % |              Time |       Samples | Function                           | Location                                                            |
| ------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------- | ------------------------------------------------------------------- |
|  +13.2% | +28.71ms | 10.2% → 11.5% | 218.2ms → 246.9ms |     172 → 195 | `instantiateTypes`                 | `./node_modules/typescript/lib/typescript.js:64640:28 → 65895:28`   |
|  +12.9% | +28.70ms | 10.4% → 11.6% | 222.0ms → 250.7ms |     175 → 198 | `instantiateList`                  | `./node_modules/typescript/lib/typescript.js:64623:27 → 65878:27`   |
|   +4.7% | +27.99ms | 28.0% → 29.1% | 598.7ms → 626.7ms |     472 → 495 | `getTypeOfSymbol`                  | `./node_modules/typescript/lib/typescript.js:58408:27 → 59663:27`   |
|   +1.6% | +27.16ms | 80.0% → 80.6% |     1.71s → 1.74s | 1,347 → 1,371 | `forEach`                          | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
| +224.4% | +22.77ms |   0.5% → 1.5% |   10.1ms → 32.9ms |        8 → 26 | `createIdentifier`                 | `./node_modules/typescript/lib/typescript.js:32283:28 → 33338:28`   |
|   +6.7% | +22.17ms | 15.4% → 16.3% | 328.5ms → 350.7ms |     259 → 277 | `signaturesRelatedTo`              | `./node_modules/typescript/lib/typescript.js:68245:33 → 69505:33`   |
|  +13.7% | +21.23ms |   7.2% → 8.2% | 154.7ms → 176.0ms |     122 → 139 | `getConditionalType`               | `./node_modules/typescript/lib/typescript.js:63974:30 → 65229:30`   |
|  +12.4% | +19.95ms |   7.5% → 8.4% | 161.1ms → 181.0ms |     127 → 143 | `getConditionalTypeInstantiation`  | `./node_modules/typescript/lib/typescript.js:64979:43 → 66239:43`   |
|   +4.0% | +19.34ms | 22.7% → 23.5% | 485.8ms → 505.1ms |     383 → 399 | `structuredTypeRelatedToWorker`    | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43`   |
|   +4.0% | +19.34ms | 22.9% → 23.6% | 488.3ms → 507.7ms |     385 → 401 | `structuredTypeRelatedTo`          | `./node_modules/typescript/lib/typescript.js:67207:37 → 68467:37`   |
|   +5.9% | +18.41ms | 14.5% → 15.2% | 309.5ms → 327.9ms |     244 → 259 | `signatureRelatedTo`               | `./node_modules/typescript/lib/typescript.js:68375:32 → 69635:32`   |
|   +5.5% | +18.36ms | 15.6% → 16.3% | 333.6ms → 352.0ms |     263 → 278 | `(anonymous)`                      | `./node_modules/typescript/lib/typescript.js:123923:7 → 125505:7`   |
|   +5.5% | +18.36ms | 15.6% → 16.3% | 333.6ms → 352.0ms |     263 → 278 | `findSourceFileWorker`             | `./node_modules/typescript/lib/typescript.js:123984:32 → 125566:32` |
|   +5.5% | +18.36ms | 15.6% → 16.3% | 333.6ms → 352.0ms |     263 → 278 | `findSourceFile`                   | `./node_modules/typescript/lib/typescript.js:123967:26 → 125549:26` |
|   +5.5% | +18.36ms | 15.6% → 16.3% | 333.6ms → 352.0ms |     263 → 278 | `getSourceFileFromReferenceWorker` | `./node_modules/typescript/lib/typescript.js:123879:44 → 125461:44` |
|   +5.5% | +18.36ms | 15.6% → 16.3% | 333.6ms → 352.0ms |     263 → 278 | `processSourceFile`                | `./node_modules/typescript/lib/typescript.js:123920:29 → 125502:29` |
| +349.2% | +17.71ms |   0.2% → 1.1% |    5.1ms → 22.8ms |        4 → 18 | `internIdentifier`                 | `./node_modules/typescript/lib/typescript.js:32276:28 → 33331:28`   |
|   +7.8% | +17.31ms | 10.4% → 11.1% | 222.0ms → 239.3ms |     175 → 189 | `(anonymous)`                      | `./node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
|   +7.7% | +17.30ms | 10.5% → 11.2% | 224.5ms → 241.8ms |     177 → 191 | `parseSourceFileWorker`            | `./node_modules/typescript/lib/typescript.js:31659:33 → 32711:33`   |
|   +6.0% | +17.19ms | 13.3% → 14.0% | 284.1ms → 301.3ms |     224 → 238 | `processRootFile`                  | `./node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |

##### Garbage collector

| Change |   Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | ------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
|  +3.9% | +4.83ms | 5.8% → 6.0% | 124.3ms → 129.1ms | 98 → 102 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |   Delta |             % |          Time |       Samples | Function                    | Location                                        |
| ------: | ------: | ------------: | ------------: | ------------: | --------------------------- | ----------------------------------------------- |
| +249.3% | +6.33ms |   0.1% → 0.4% | 2.5ms → 8.9ms |         2 → 7 | `CFISBIS`                   | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
| +199.4% | +5.06ms |   0.1% → 0.4% | 2.5ms → 7.6ms |         2 → 6 | `convertFileInfoToStats`    | `ext:deno_node/internal/fs/stat_utils.ts:6:39`  |
|     new | +3.80ms |   0.0% → 0.2% |   0ms → 3.8ms |         0 → 3 | `defineStatExtraProps`      | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `set`                       | `ext:deno_node/internal/fs/utils.mjs:569:8`     |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `set`                       | `ext:deno_node/internal/fs/utils.mjs:539:8`     |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `getSerialization`          | `ext:deno_web/00_url.js:97:26`                  |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `URL`                       | `ext:deno_web/00_url.js:716:14`                 |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `pathToFileURL`             | `ext:deno_node/url.ts:1337:27`                  |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `(anonymous)`               | `ext:deno_node/crypto.ts:1:32`                  |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `(anonymous)`               | `ext:deno_node/crypto.ts:1:1`                   |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `loadExtScript`             | `ext:core/01_core.js:951:25`                    |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `crypto`                    | `node:module:161:13`                            |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `get`                       | `node:module:212:9`                             |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `loadNativeModule`          | `node:module:2019:26`                           |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `getOptions`                | `ext:deno_node/internal/fs/utils.mjs:363:27`    |
|     new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `post`                      | `ext:deno_node/inspector.js:179:7`              |
|  +49.7% | +1.26ms |   0.1% → 0.2% | 2.5ms → 3.8ms |         2 → 3 | `Stats`                     | `ext:deno_node/internal/fs/utils.mjs:650:22`    |
|     ~0% | +0.11ms | 91.5% → 90.8% |         1.95s | 1,541 → 1,544 | `processTicksAndRejections` | `ext:core/01_core.js:356:37`                    |

##### Native

| Change |   Delta |             % |            Time |       Samples | Function                   | Location    |
| -----: | ------: | ------------: | --------------: | ------------: | -------------------------- | ----------- |
| +29.8% | +3.77ms |   0.6% → 0.8% | 12.7ms → 16.5ms |       10 → 13 | `(program)`                | `<unknown>` |
|  +0.1% | +1.38ms | 91.5% → 90.8% |   1.95s → 1.96s | 1,541 → 1,545 | `op_run_microtasks`        | `<unknown>` |
|    new | +1.27ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `op_url_get_serialization` | `<unknown>` |
|    new | +1.27ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `op_require_try_self`      | `<unknown>` |
|    new | +1.27ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `op_load_ext_script`       | `<unknown>` |
|    new | +1.27ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `op_inspector_dispatch`    | `<unknown>` |
| +19.8% | +1.25ms |   0.3% → 0.4% |   6.3ms → 7.6ms |         5 → 6 | `op_fs_read_file_sync`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |             % |              Time |   Samples | Function                                               | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------ | ----------------------------------------------------------------- |
| -14.7% | -33.34ms |  10.6% → 9.0% | 227.0ms → 193.7ms | 179 → 153 | `applyToParameterTypes`                                | `./node_modules/typescript/lib/typescript.js:69472:33 → 70732:33` |
| -11.4% | -24.46ms |  10.0% → 8.8% | 214.4ms → 189.9ms | 169 → 150 | `inferFromContravariantTypes`                          | `./node_modules/typescript/lib/typescript.js:70146:41 → 71429:41` |
| -11.4% | -24.46ms |  10.0% → 8.8% | 214.4ms → 189.9ms | 169 → 150 | `inferFromContravariantTypesIfStrictFunctionTypes`     | `./node_modules/typescript/lib/typescript.js:70151:62 → 71434:62` |
| -11.8% | -24.44ms |   9.7% → 8.5% | 206.8ms → 182.3ms | 163 → 144 | `inferFromMatchingTypes`                               | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |
| -16.7% | -24.33ms |   6.8% → 5.6% | 145.9ms → 121.5ms |  115 → 96 | `resolveStructuredTypeMembers`                         | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
| -33.5% | -24.19ms |   3.4% → 2.2% |   72.3ms → 48.1ms |   57 → 38 | `resolveTypeReferenceMembers`                          | `./node_modules/typescript/lib/typescript.js:59264:39 → 60519:39` |
| -46.4% | -24.15ms |   2.4% → 1.3% |   52.0ms → 27.9ms |   41 → 22 | `op_fs_stat_sync`                                      | `<unknown>`                                                       |
| -24.5% | -22.97ms |   4.4% → 3.3% |   93.9ms → 70.9ms |   74 → 56 | `getPropertyOfType`                                    | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
| -34.1% | -22.92ms |   3.1% → 2.1% |   67.2ms → 44.3ms |   53 → 35 | `resolveObjectTypeMembers`                             | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -8.7% | -22.00ms | 11.8% → 10.7% | 252.4ms → 230.4ms | 199 → 182 | `inferFromSignature`                                   | `./node_modules/typescript/lib/typescript.js:70456:32 → 71739:32` |
| -12.3% | -21.86ms |   8.3% → 7.2% | 177.6ms → 155.7ms | 140 → 123 | `isTypeOrBaseIdenticalTo`                              | `./node_modules/typescript/lib/typescript.js:70496:35 → 71779:35` |
|  -8.1% | -20.74ms | 12.0% → 10.9% | 256.2ms → 235.5ms | 202 → 186 | `inferFromSignatures`                                  | `./node_modules/typescript/lib/typescript.js:70444:33 → 71727:33` |
|  -6.4% | -19.57ms | 14.4% → 13.3% | 307.0ms → 287.4ms | 242 → 227 | `invokeOnce`                                           | `./node_modules/typescript/lib/typescript.js:70091:24 → 71374:24` |
| -35.8% | -19.09ms |   2.5% → 1.6% |   53.3ms → 34.2ms |   42 → 27 | `statSync`                                             | `ext:deno_fs/30_fs.js:473:18`                                     |
|  -9.7% | -16.79ms |   8.1% → 7.3% | 173.8ms → 157.0ms | 137 → 124 | `isTypeIdenticalTo`                                    | `./node_modules/typescript/lib/typescript.js:65203:29 → 66463:29` |
| -48.2% | -16.52ms |   1.6% → 0.8% |   34.2ms → 17.7ms |   27 → 14 | `buildCustomError`                                     | `ext:core/00_infra.js:94:28`                                      |
|  -5.3% | -15.75ms | 14.0% → 13.1% | 298.1ms → 282.3ms | 235 → 223 | `inferFromObjectTypes`                                 | `./node_modules/typescript/lib/typescript.js:70332:34 → 71615:34` |
|  -2.1% | -15.32ms | 34.6% → 33.6% | 738.2ms → 722.9ms | 582 → 571 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:79840:64 → 81135:64` |
|  -1.9% | -14.06ms | 34.7% → 33.7% | 740.8ms → 726.7ms | 584 → 574 | `checkDeferredNode`                                    | `./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |
|  -1.9% | -14.06ms | 34.7% → 33.7% | 740.8ms → 726.7ms | 584 → 574 | `checkDeferredNodes`                                   | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function                                               | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------ | ----------------------------------------------------------------- |
| -14.7% | -33.34ms |  10.6% → 9.0% | 227.0ms → 193.7ms | 179 → 153 | `applyToParameterTypes`                                | `./node_modules/typescript/lib/typescript.js:69472:33 → 70732:33` |
| -11.4% | -24.46ms |  10.0% → 8.8% | 214.4ms → 189.9ms | 169 → 150 | `inferFromContravariantTypes`                          | `./node_modules/typescript/lib/typescript.js:70146:41 → 71429:41` |
| -11.4% | -24.46ms |  10.0% → 8.8% | 214.4ms → 189.9ms | 169 → 150 | `inferFromContravariantTypesIfStrictFunctionTypes`     | `./node_modules/typescript/lib/typescript.js:70151:62 → 71434:62` |
| -11.8% | -24.44ms |   9.7% → 8.5% | 206.8ms → 182.3ms | 163 → 144 | `inferFromMatchingTypes`                               | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |
| -16.7% | -24.33ms |   6.8% → 5.6% | 145.9ms → 121.5ms |  115 → 96 | `resolveStructuredTypeMembers`                         | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
| -33.5% | -24.19ms |   3.4% → 2.2% |   72.3ms → 48.1ms |   57 → 38 | `resolveTypeReferenceMembers`                          | `./node_modules/typescript/lib/typescript.js:59264:39 → 60519:39` |
| -24.5% | -22.97ms |   4.4% → 3.3% |   93.9ms → 70.9ms |   74 → 56 | `getPropertyOfType`                                    | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
| -34.1% | -22.92ms |   3.1% → 2.1% |   67.2ms → 44.3ms |   53 → 35 | `resolveObjectTypeMembers`                             | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -8.7% | -22.00ms | 11.8% → 10.7% | 252.4ms → 230.4ms | 199 → 182 | `inferFromSignature`                                   | `./node_modules/typescript/lib/typescript.js:70456:32 → 71739:32` |
| -12.3% | -21.86ms |   8.3% → 7.2% | 177.6ms → 155.7ms | 140 → 123 | `isTypeOrBaseIdenticalTo`                              | `./node_modules/typescript/lib/typescript.js:70496:35 → 71779:35` |
|  -8.1% | -20.74ms | 12.0% → 10.9% | 256.2ms → 235.5ms | 202 → 186 | `inferFromSignatures`                                  | `./node_modules/typescript/lib/typescript.js:70444:33 → 71727:33` |
|  -6.4% | -19.57ms | 14.4% → 13.3% | 307.0ms → 287.4ms | 242 → 227 | `invokeOnce`                                           | `./node_modules/typescript/lib/typescript.js:70091:24 → 71374:24` |
|  -9.7% | -16.79ms |   8.1% → 7.3% | 173.8ms → 157.0ms | 137 → 124 | `isTypeIdenticalTo`                                    | `./node_modules/typescript/lib/typescript.js:65203:29 → 66463:29` |
|  -5.3% | -15.75ms | 14.0% → 13.1% | 298.1ms → 282.3ms | 235 → 223 | `inferFromObjectTypes`                                 | `./node_modules/typescript/lib/typescript.js:70332:34 → 71615:34` |
|  -2.1% | -15.32ms | 34.6% → 33.6% | 738.2ms → 722.9ms | 582 → 571 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:79840:64 → 81135:64` |
|  -1.9% | -14.06ms | 34.7% → 33.7% | 740.8ms → 726.7ms | 584 → 574 | `checkDeferredNode`                                    | `./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |
|  -1.9% | -14.06ms | 34.7% → 33.7% | 740.8ms → 726.7ms | 584 → 574 | `checkDeferredNodes`                                   | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|  -4.0% | -13.28ms | 15.5% → 14.8% | 331.1ms → 317.8ms | 261 → 251 | `inferFromTypes`                                       | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
|  -4.0% | -13.28ms | 15.5% → 14.8% | 331.1ms → 317.8ms | 261 → 251 | `inferTypes`                                           | `./node_modules/typescript/lib/typescript.js:69892:22 → 71175:22` |
|  -4.6% | -13.20ms | 13.4% → 12.7% | 286.7ms → 273.5ms | 226 → 216 | `checkObjectLiteral`                                   | `./node_modules/typescript/lib/typescript.js:74814:30 → 76097:30` |

##### Standard library

|  Change |    Delta |             % |              Time |       Samples | Function                       | Location                        |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------ | ------------------------------- |
|  -35.8% | -19.09ms |   2.5% → 1.6% |   53.3ms → 34.2ms |       42 → 27 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`   |
|  -48.2% | -16.52ms |   1.6% → 0.8% |   34.2ms → 17.7ms |       27 → 14 | `buildCustomError`             | `ext:core/00_infra.js:94:28`    |
|  -22.9% | -12.77ms |   2.6% → 2.0% |   55.8ms → 43.0ms |       44 → 34 | `statSync`                     | `ext:deno_node/fs.ts:97:20`     |
|   -8.5% | -11.65ms |   6.4% → 5.8% | 137.0ms → 125.3ms |      108 → 99 | `(anonymous)`                  | `node:module:1050:24`           |
|   -8.5% | -11.65ms |   6.4% → 5.8% | 137.0ms → 125.3ms |      108 → 99 | `(anonymous)`                  | `node:module:1525:36`           |
|   -8.5% | -11.65ms |   6.4% → 5.8% | 137.0ms → 125.3ms |      108 → 99 | `require`                      | `node:module:1752:35`           |
|   -7.7% | -10.38ms |   6.4% → 5.8% | 135.7ms → 125.3ms |      107 → 99 | `(anonymous)`                  | `node:module:1653:37`           |
|   -7.7% | -10.38ms |   6.4% → 5.8% | 135.7ms → 125.3ms |      107 → 99 | `(anonymous)`                  | `node:module:1438:33`           |
|   -7.7% | -10.38ms |   6.4% → 5.8% | 135.7ms → 125.3ms |      107 → 99 | `loadMaybeCjs`                 | `node:module:1669:22`           |
|   -7.9% | -10.37ms |   6.1% → 5.6% | 130.6ms → 120.3ms |      103 → 95 | `(anonymous)`                  | `node:module:1622:37`           |
|  -33.5% |  -3.82ms |   0.5% → 0.4% |    11.4ms → 7.6ms |         9 → 6 | `NotFound`                     | `ext:runtime/01_errors.js:7:14` |
|  -33.5% |  -3.82ms |   0.5% → 0.4% |    11.4ms → 7.6ms |         9 → 6 | `(anonymous)`                  | `ext:core/00_infra.js:127:37`   |
|  -75.0% |  -3.81ms |   0.2% → 0.1% |     5.1ms → 1.3ms |         4 → 1 | `realpathSyncImpl`             | `ext:deno_node/fs.ts:148:28`    |
|  -75.0% |  -3.81ms |   0.2% → 0.1% |     5.1ms → 1.3ms |         4 → 1 | `realpathSync_native`          | `ext:deno_node/fs.ts:164:53`    |
|   -2.6% |  -2.73ms |   4.9% → 4.7% | 104.0ms → 101.3ms |       82 → 80 | `compileFunction`              | `ext:core/01_core.js:1100:22`   |
|  -50.1% |  -2.54ms |   0.2% → 0.1% |     5.1ms → 2.5ms |         4 → 2 | `readFileMaybeDecode`          | `ext:deno_node/fs.ts:268:31`    |
| removed |  -2.54ms |   0.1% → 0.0% |       2.5ms → 0ms |         2 → 0 | `encodeRealpathResult`         | `ext:deno_node/fs.ts:116:32`    |
|   -0.1% |  -2.42ms | 91.5% → 90.7% |             1.95s | 1,541 → 1,542 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`    |
|   -1.4% |  -1.46ms |   4.9% → 4.8% | 104.0ms → 102.5ms |       82 → 81 | `wrapSafe`                     | `node:module:1596:18`           |
|  -50.1% |  -1.27ms |          0.1% |     2.5ms → 1.3ms |         2 → 1 | `realPathSync`                 | `ext:deno_fs/30_fs.js:280:22`   |

##### Native

|  Change |    Delta |           % |            Time | Samples | Function                 | Location    |
| ------: | -------: | ----------: | --------------: | ------: | ------------------------ | ----------- |
|  -46.4% | -24.15ms | 2.4% → 1.3% | 52.0ms → 27.9ms | 41 → 22 | `op_fs_stat_sync`        | `<unknown>` |
|  -12.2% |  -3.86ms | 1.5% → 1.3% | 31.7ms → 27.9ms | 25 → 22 | `op_compile_function`    | `<unknown>` |
|  -50.1% |  -1.27ms |        0.1% |   2.5ms → 1.3ms |   2 → 1 | `op_fs_realpath_sync`    | `<unknown>` |
| removed |  -1.27ms | 0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `op_require_real_path`   | `<unknown>` |
| removed |  -1.27ms | 0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `op_fs_read_dir_sync`    | `<unknown>` |
|   -0.2% |  -0.01ms |        0.2% |           3.8ms |       3 | `op_require_read_file`   | `<unknown>` |
|   -0.2% |  -4.78µs |        0.1% |           2.5ms |       2 | `op_node_encoding_slice` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js:65895:28`)

|  Change |    Delta |             % |              Time |   Samples | Caller                       | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------- | ----------------------------------------------------------------- |
|  +11.6% | +24.92ms | 98.3% → 96.9% | 214.4ms → 239.3ms | 169 → 189 | `instantiateTypeWorker`      | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
| +199.4% |  +2.53ms |   0.6% → 1.5% |     1.3ms → 3.8ms |     1 → 3 | `chooseOverload`             | `./node_modules/typescript/lib/typescript.js:77470:28 → 78765:28` |
|   -0.2% |  -0.03ms |   7.0% → 6.2% |            15.2ms |        12 | `getTypeArguments`           | `./node_modules/typescript/lib/typescript.js:61572:28 → 62827:28` |
|   -0.2% |  -0.02ms |   4.1% → 3.6% |             8.9ms |         7 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38 → 66040:38` |

##### `instantiateList` (`./node_modules/typescript/lib/typescript.js:65878:27`)

|  Change |    Delta |             % |              Time |   Samples | Caller                  | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
|  +12.0% | +26.18ms | 98.3% → 97.5% | 218.2ms → 244.3ms | 172 → 193 | `instantiateTypes`      | `./node_modules/typescript/lib/typescript.js:64640:28 → 65895:28` |
| +399.1% |  +5.06ms |   0.6% → 2.5% |     1.3ms → 6.3ms |     1 → 5 | `instantiateSignatures` | `./node_modules/typescript/lib/typescript.js:64643:33 → 65898:33` |
|  -50.1% |  -1.27ms |   1.1% → 0.5% |     2.5ms → 1.3ms |     2 → 1 | `instantiateSignature`  | `./node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
| removed |  -1.27ms |   0.6% → 0.0% |       1.3ms → 0ms |     1 → 0 | `instantiateIndexInfos` | `./node_modules/typescript/lib/typescript.js:64646:33`            |

##### `getTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js:59663:27`)

| Change |    Delta |             % |              Time |   Samples | Caller                         | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
| +46.8% | +10.09ms |   3.6% → 5.1% |   21.6ms → 31.7ms |   17 → 25 | `getNonMissingTypeOfSymbol`    | `./node_modules/typescript/lib/typescript.js:58439:37 → 59694:37` |
|  +1.6% |  +7.94ms | 82.0% → 79.6% | 490.9ms → 498.8ms | 387 → 394 | `checkVariableLikeDeclaration` | `./node_modules/typescript/lib/typescript.js:83907:40 → 85202:40` |
| +66.4% |  +5.05ms |   1.3% → 2.0% |    7.6ms → 12.7ms |    6 → 10 | `getNarrowedTypeOfSymbol`      | `./node_modules/typescript/lib/typescript.js:72897:35 → 74180:35` |
|  +8.1% |  +4.95ms | 10.2% → 10.5% |   60.9ms → 65.8ms |   48 → 52 | `getTypeOfParameter`           | `./node_modules/typescript/lib/typescript.js:78772:30 → 80067:30` |
| -43.0% |  -3.81ms |   1.5% → 0.8% |     8.9ms → 5.1ms |     7 → 4 | `getTypeOfInstantiatedSymbol`  | `./node_modules/typescript/lib/typescript.js:58351:39 → 59606:39` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

| Change |    Delta |             % |              Time |   Samples | Caller                         | Location                                                            |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ------------------------------------------------------------------- |
|  +3.0% | +17.87ms | 34.9% → 35.4% | 596.2ms → 614.0ms | 470 → 485 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  +5.6% | +15.92ms | 16.7% → 17.4% | 285.4ms → 301.3ms | 225 → 238 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:122262:23 → 123840:23` |
|  +1.8% | +10.32ms | 33.5% → 33.6% | 572.1ms → 582.4ms | 451 → 460 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:84112:40 → 85407:40`   |
| +22.3% |  +8.79ms |   2.3% → 2.8% |   39.3ms → 48.1ms |   31 → 38 | `resolveCall`                  | `./node_modules/typescript/lib/typescript.js:77299:23 → 78594:23`   |
|  +0.7% |  +7.00ms | 57.8% → 57.3% | 986.8ms → 993.8ms | 778 → 785 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:83716:22 → 85011:22`   |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js:33338:28`)

|  Change |    Delta |             % |           Time | Samples | Caller                   | Location                                                          |
| ------: | -------: | ------------: | -------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| +432.3% | +16.45ms | 37.5% → 61.5% | 3.8ms → 20.3ms |  3 → 16 | `parseIdentifierName`    | `./node_modules/typescript/lib/typescript.js:32324:31 → 33379:31` |
| +598.7% |  +7.59ms | 12.5% → 26.9% |  1.3ms → 8.9ms |   1 → 7 | `parseIdentifier`        | `./node_modules/typescript/lib/typescript.js:32321:27 → 33376:27` |
|  -25.1% |  -1.28ms | 50.0% → 11.5% |  5.1ms → 3.8ms |   4 → 3 | `parseBindingIdentifier` | `./node_modules/typescript/lib/typescript.js:32313:34 → 33368:34` |

##### `signaturesRelatedTo` (`./node_modules/typescript/lib/typescript.js:69505:33`)

| Change |    Delta |              % |              Time |   Samples | Caller                          | Location                                                          |
| -----: | -------: | -------------: | ----------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
|  +6.0% | +19.64ms | 100.0% → 99.3% | 328.5ms → 348.2ms | 259 → 275 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |
|    new |  +2.53ms |    0.0% → 0.7% |       0ms → 2.5ms |     0 → 2 | `structuredTypeRelatedTo`       | `./node_modules/typescript/lib/typescript.js:68467:37`            |

##### `getConditionalType` (`./node_modules/typescript/lib/typescript.js:65229:30`)

| Change |    Delta |             % |              Time |   Samples | Caller                            | Location                                                            |
| -----: | -------: | ------------: | ----------------: | --------: | --------------------------------- | ------------------------------------------------------------------- |
| +12.2% | +17.45ms | 92.6% → 91.4% | 143.3ms → 160.8ms | 113 → 127 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64979:43 → 66239:43`   |
| +39.7% |  +2.52ms |   4.1% → 5.0% |     6.3ms → 8.9ms |     5 → 7 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:64989:177 → 66249:177` |
|  -0.2% |  -0.02ms |   5.7% → 5.0% |             8.9ms |         7 | `getTypeFromConditionalTypeNode`  | `./node_modules/typescript/lib/typescript.js:64098:42 → 65353:42`   |

##### `getConditionalTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66239:43`)

| Change |    Delta |             % |              Time |   Samples | Caller                                       | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------------- | ----------------------------------------------------------------- |
| +13.7% | +21.23ms | 96.1% → 97.2% | 154.7ms → 176.0ms | 122 → 139 | `instantiateTypeWorker`                      | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
| -20.2% |  -1.28ms |   3.9% → 2.8% |     6.3ms → 5.1ms |     5 → 4 | `getConstraintOfDistributiveConditionalType` | `./node_modules/typescript/lib/typescript.js:60246:54 → 61501:54` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

| Change |    Delta |      % |              Time |   Samples | Caller                    | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------- | ----------------------------------------------------------------- |
|  +4.0% | +19.34ms | 100.0% | 485.8ms → 505.1ms | 383 → 399 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67207:37 → 68467:37` |

##### `structuredTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68467:37`)

| Change |    Delta |      % |              Time |   Samples | Caller                   | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------ | ----------------------------------------------------------------- |
|  +4.0% | +19.34ms | 100.0% | 488.3ms → 507.7ms | 385 → 401 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### `signatureRelatedTo` (`./node_modules/typescript/lib/typescript.js:69635:32`)

| Change |    Delta |      % |              Time |   Samples | Caller                | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | --------------------- | ----------------------------------------------------------------- |
|  +5.9% | +18.41ms | 100.0% | 309.5ms → 327.9ms | 244 → 259 | `signaturesRelatedTo` | `./node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:125505:7`)

| Change |    Delta |      % |              Time |   Samples | Caller                             | Location                                                            |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | ------------------------------------------------------------------- |
|  +5.5% | +18.36ms | 100.0% | 333.6ms → 352.0ms | 263 → 278 | `getSourceFileFromReferenceWorker` | `./node_modules/typescript/lib/typescript.js:123879:44 → 125461:44` |

##### `findSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:125566:32`)

| Change |    Delta |      % |              Time |   Samples | Caller           | Location                                                            |
| -----: | -------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------------------------------- |
|  +5.5% | +18.36ms | 100.0% | 333.6ms → 352.0ms | 263 → 278 | `findSourceFile` | `./node_modules/typescript/lib/typescript.js:123967:26 → 125549:26` |

##### `findSourceFile` (`./node_modules/typescript/lib/typescript.js:125549:26`)

| Change |    Delta |             % |              Time |   Samples | Caller                   | Location                                                            |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------ | ------------------------------------------------------------------- |
|  +5.5% | +18.36ms |        100.0% | 333.6ms → 352.0ms | 263 → 278 | `(anonymous)`            | `./node_modules/typescript/lib/typescript.js:123923:7 → 125505:7`   |
|  +7.9% | +16.08ms | 60.8% → 62.2% | 202.9ms → 219.0ms | 160 → 173 | `processImportedModules` | `./node_modules/typescript/lib/typescript.js:124378:34 → 125960:34` |

##### `getSourceFileFromReferenceWorker` (`./node_modules/typescript/lib/typescript.js:125461:44`)

| Change |    Delta |      % |              Time |   Samples | Caller              | Location                                                            |
| -----: | -------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------------------- |
|  +5.5% | +18.36ms | 100.0% | 333.6ms → 352.0ms | 263 → 278 | `processSourceFile` | `./node_modules/typescript/lib/typescript.js:123920:29 → 125502:29` |

##### `processSourceFile` (`./node_modules/typescript/lib/typescript.js:125502:29`)

| Change |    Delta |             % |              Time |   Samples | Caller                                | Location                                                            |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------- | ------------------------------------------------------------------- |
|  +6.0% | +17.19ms | 85.2% → 85.6% | 284.1ms → 301.3ms | 224 → 238 | `processRootFile`                     | `./node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |
|  +7.5% | +11.11ms | 44.5% → 45.3% | 148.4ms → 159.5ms | 117 → 126 | `processTypeReferenceDirectiveWorker` | `./node_modules/typescript/lib/typescript.js:124238:47 → 125820:47` |
|  +9.1% |  +6.20ms | 20.5% → 21.2% |   68.5ms → 74.7ms |   54 → 59 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35` |

##### `internIdentifier` (`./node_modules/typescript/lib/typescript.js:33331:28`)

|  Change |    Delta |             % |           Time | Samples | Caller                                  | Location                                                          |
| ------: | -------: | ------------: | -------------: | ------: | --------------------------------------- | ----------------------------------------------------------------- |
| +432.3% | +16.45ms | 75.0% → 88.9% | 3.8ms → 20.3ms |  3 → 16 | `createIdentifier`                      | `./node_modules/typescript/lib/typescript.js:32283:28 → 33338:28` |
|     new |  +2.53ms |  0.0% → 11.1% |    0ms → 2.5ms |   0 → 2 | `parseAmbientExternalModuleDeclaration` | `./node_modules/typescript/lib/typescript.js:37814:49`            |
| removed |  -1.27ms |  25.0% → 0.0% |    1.3ms → 0ms |   1 → 0 | `parseJSDocIdentifierName`              | `./node_modules/typescript/lib/typescript.js:38146:40`            |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124028:24`)

| Change |    Delta |      % |              Time |   Samples | Caller    | Location                                                        |
| -----: | -------: | -----: | ----------------: | --------: | --------- | --------------------------------------------------------------- |
|  +7.8% | +17.31ms | 100.0% | 222.0ms → 239.3ms | 175 → 189 | `forEach` | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17` |

##### `parseSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:32711:33`)

| Change |    Delta |      % |              Time |   Samples | Caller            | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ----------------- | ----------------------------------------------------------------- |
|  +7.7% | +17.30ms | 100.0% | 224.5ms → 241.8ms | 177 → 191 | `parseSourceFile` | `./node_modules/typescript/lib/typescript.js:31471:27 → 32523:27` |

##### `processRootFile` (`./node_modules/typescript/lib/typescript.js:125290:27`)

| Change |    Delta |             % |              Time |   Samples | Caller        | Location                                                            |
| -----: | -------: | ------------: | ----------------: | --------: | ------------- | ------------------------------------------------------------------- |
|  +7.8% | +17.31ms | 78.1% → 79.4% | 222.0ms → 239.3ms | 175 → 189 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
| +14.9% |  +6.25ms | 14.7% → 16.0% |   41.9ms → 48.1ms |   33 → 38 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124350:42 → 125932:42` |
|  -0.2% |  -0.12ms | 21.9% → 20.6% |   62.2ms → 62.0ms |        49 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:122498:30 → 124077:30` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location                    |
| ------: | ------: | -----: | ------------: | ------: | ---------- | --------------------------- |
| +249.3% | +6.33ms | 100.0% | 2.5ms → 8.9ms |   2 → 7 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                                        |
| ------: | ------: | -----: | ------------: | ------: | --------- | ----------------------------------------------- |
| +199.4% | +5.06ms | 100.0% | 2.5ms → 7.6ms |   2 → 6 | `CFISBIS` | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

| Change |   Delta |             % |        Time | Samples | Caller                   | Location                                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------ | ---------------------------------------------- |
|    new | +3.80ms | 0.0% → 100.0% | 0ms → 3.8ms |   0 → 3 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:569:8`)

| Change |   Delta |             % |        Time | Samples | Caller  | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | ------- | -------------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

| Change |   Delta |             % |        Time | Samples | Caller  | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | ------- | -------------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `getSerialization` (`ext:deno_web/00_url.js:97:26`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `URL`  | `ext:deno_web/00_url.js:716:14` |

##### `URL` (`ext:deno_web/00_url.js:716:14`)

| Change |   Delta |             % |        Time | Samples | Caller          | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | --------------- | ------------------------------ |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `pathToFileURL` | `ext:deno_node/url.ts:1337:27` |

##### `pathToFileURL` (`ext:deno_node/url.ts:1337:27`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location              |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | --------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `wrapSafe` | `node:module:1596:18` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:32`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                      |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ----------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:1`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `op_load_ext_script` | `<unknown>` |

##### `loadExtScript` (`ext:core/01_core.js:951:25`)

| Change |   Delta |             % |        Time | Samples | Caller   | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------- | -------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `crypto` | `node:module:161:13` |

##### `crypto` (`node:module:161:13`)

| Change |   Delta |             % |        Time | Samples | Caller | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `get`  | `node:module:212:9` |

##### `get` (`node:module:212:9`)

| Change |   Delta |             % |        Time | Samples | Caller             | Location              |
| -----: | ------: | ------------: | ----------: | ------: | ------------------ | --------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `loadNativeModule` | `node:module:2019:26` |

##### `loadNativeModule` (`node:module:2019:26`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location              |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | --------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `node:module:1050:24` |

##### `getOptions` (`ext:deno_node/internal/fs/utils.mjs:363:27`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location                                              |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | ----------------------------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8751:28` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                     |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./cpuprofile-run.mjs:15:15` |

##### `Stats` (`ext:deno_node/internal/fs/utils.mjs:650:22`)

| Change |   Delta |      % |          Time | Samples | Caller                   | Location                                       |
| -----: | ------: | -----: | ------------: | ------: | ------------------------ | ---------------------------------------------- |
| +49.7% | +1.26ms | 100.0% | 2.5ms → 3.8ms |   2 → 3 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

| Change |   Delta |              % |  Time |       Samples | Caller       | Location                     |
| -----: | ------: | -------------: | ----: | ------------: | ------------ | ---------------------------- |
|  -0.1% | -1.15ms | 100.0% → 99.9% | 1.95s | 1,541 → 1,543 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `op_run_microtasks` (`<unknown>`)

| Change |   Delta |              % |  Time |       Samples | Caller                      | Location                     |
| -----: | ------: | -------------: | ----: | ------------: | --------------------------- | ---------------------------- |
|    ~0% | +0.11ms | 100.0% → 99.9% | 1.95s | 1,541 → 1,544 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `op_url_get_serialization` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller             | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------------ |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `getSerialization` | `ext:deno_web/00_url.js:97:26` |

##### `op_require_try_self` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location              |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | --------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `node:module:1259:35` |

##### `op_load_ext_script` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller          | Location                     |
| -----: | ------: | ------------: | ----------: | ------: | --------------- | ---------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `loadExtScript` | `ext:core/01_core.js:951:25` |

##### `op_inspector_dispatch` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                           |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ---------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `post` | `ext:deno_node/inspector.js:179:7` |

##### `op_fs_read_file_sync` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                     |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ---------------------------- |
| +19.8% | +1.25ms | 100.0% | 6.3ms → 7.6ms |   5 → 6 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `applyToParameterTypes` (`./node_modules/typescript/lib/typescript.js:70732:33`)

|  Change |    Delta |              % |              Time |   Samples | Caller                            | Location                                                          |
| ------: | -------: | -------------: | ----------------: | --------: | --------------------------------- | ----------------------------------------------------------------- |
|  -14.2% | -32.08ms | 99.4% → 100.0% | 225.8ms → 193.7ms | 178 → 153 | `inferFromSignature`              | `./node_modules/typescript/lib/typescript.js:70456:32 → 71739:32` |
| removed |  -1.27ms |    0.6% → 0.0% |       1.3ms → 0ms |     1 → 0 | `instantiateSignatureInContextOf` | `./node_modules/typescript/lib/typescript.js:76628:43`            |

##### `inferFromContravariantTypes` (`./node_modules/typescript/lib/typescript.js:71429:41`)

| Change |    Delta |      % |              Time |   Samples | Caller                                             | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------------------------------- | ----------------------------------------------------------------- |
| -11.4% | -24.46ms | 100.0% | 214.4ms → 189.9ms | 169 → 150 | `inferFromContravariantTypesIfStrictFunctionTypes` | `./node_modules/typescript/lib/typescript.js:70151:62 → 71434:62` |

##### `inferFromContravariantTypesIfStrictFunctionTypes` (`./node_modules/typescript/lib/typescript.js:71434:62`)

| Change |    Delta |      % |              Time |   Samples | Caller                  | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
| -11.4% | -24.46ms | 100.0% | 214.4ms → 189.9ms | 169 → 150 | `applyToParameterTypes` | `./node_modules/typescript/lib/typescript.js:69472:33 → 70732:33` |

##### `inferFromMatchingTypes` (`./node_modules/typescript/lib/typescript.js:71402:36`)

| Change |    Delta |      % |              Time |   Samples | Caller           | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------- | ----------------------------------------------------------------- |
| -11.8% | -24.44ms | 100.0% | 206.8ms → 182.3ms | 163 → 144 | `inferFromTypes` | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

| Change |    Delta |             % |            Time | Samples | Caller                          | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| -39.0% | -17.81ms | 31.3% → 22.9% | 45.7ms → 27.9ms | 36 → 22 | `getPropertyOfType`             | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
| -27.1% |  -8.92ms | 22.6% → 19.8% | 33.0ms → 24.1ms | 26 → 19 | `isWeakType`                    | `./node_modules/typescript/lib/typescript.js:68592:22 → 69852:22` |
| +22.3% |  +8.79ms | 27.0% → 39.6% | 39.3ms → 48.1ms | 31 → 38 | `getPropertiesOfObjectType`     | `./node_modules/typescript/lib/typescript.js:60116:37 → 61371:37` |
| -50.1% |  -3.81ms |   5.2% → 3.1% |   7.6ms → 3.8ms |   6 → 3 | `isEmptyObjectType`             | `./node_modules/typescript/lib/typescript.js:65964:29 → 67224:29` |
| -11.9% |  -2.57ms | 14.8% → 15.6% | 21.6ms → 19.0ms | 17 → 15 | `getSignaturesOfStructuredType` | `./node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |

##### `resolveTypeReferenceMembers` (`./node_modules/typescript/lib/typescript.js:60519:39`)

| Change |    Delta |      % |            Time | Samples | Caller                         | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------ | ----------------------------------------------------------------- |
| -33.5% | -24.19ms | 100.0% | 72.3ms → 48.1ms | 57 → 38 | `resolveStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |

##### `op_fs_stat_sync` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                      |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ----------------------------- |
| -46.4% | -24.15ms | 100.0% | 52.0ms → 27.9ms | 41 → 22 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:61994:29`)

|  Change |    Delta |             % |            Time | Samples | Caller                                         | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------- |
|  -35.5% | -21.64ms | 64.9% → 55.4% | 60.9ms → 39.2ms | 48 → 31 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |
|  +49.7% |  +5.04ms | 10.8% → 21.4% | 10.1ms → 15.2ms |  8 → 12 | `getUnmatchedProperties`                       | `./node_modules/typescript/lib/typescript.js:69709:35 → 70992:35` |
|  +21.2% |  +3.76ms | 18.9% → 30.4% | 17.8ms → 21.5ms | 14 → 17 | `createUnionOrIntersectionProperty`            | `./node_modules/typescript/lib/typescript.js:60498:45 → 61753:45` |
|  -50.1% |  -2.54ms |   5.4% → 3.6% |   5.1ms → 2.5ms |   4 → 2 | `propertiesRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:68073:33 → 69333:33` |
| removed |  -2.54ms |   2.7% → 0.0% |     2.5ms → 0ms |   2 → 0 | `inferFromProperties`                          | `./node_modules/typescript/lib/typescript.js:70432:33`            |

##### `resolveObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:60465:36`)

|  Change |    Delta |              % |            Time | Samples | Caller                           | Location                                                          |
| ------: | -------: | -------------: | --------------: | ------: | -------------------------------- | ----------------------------------------------------------------- |
|  -31.5% | -20.38ms | 96.2% → 100.0% | 64.7ms → 44.3ms | 51 → 35 | `resolveTypeReferenceMembers`    | `./node_modules/typescript/lib/typescript.js:59264:39 → 60519:39` |
| removed |  -2.54ms |    3.8% → 0.0% |     2.5ms → 0ms |   2 → 0 | `resolveClassOrInterfaceMembers` | `./node_modules/typescript/lib/typescript.js:59261:42`            |

##### `inferFromSignature` (`./node_modules/typescript/lib/typescript.js:71739:32`)

| Change |    Delta |              % |              Time |   Samples | Caller                | Location                                                          |
| -----: | -------: | -------------: | ----------------: | --------: | --------------------- | ----------------------------------------------------------------- |
|  -9.2% | -23.26ms | 100.0% → 99.5% | 252.4ms → 229.1ms | 199 → 181 | `inferFromSignatures` | `./node_modules/typescript/lib/typescript.js:70444:33 → 71727:33` |

##### `isTypeOrBaseIdenticalTo` (`./node_modules/typescript/lib/typescript.js:71779:35`)

| Change |    Delta |      % |              Time |   Samples | Caller                   | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------ | ----------------------------------------------------------------- |
| -12.3% | -21.86ms | 100.0% | 177.6ms → 155.7ms | 140 → 123 | `inferFromMatchingTypes` | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |

##### `inferFromSignatures` (`./node_modules/typescript/lib/typescript.js:71727:33`)

| Change |    Delta |      % |              Time |   Samples | Caller                 | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------- | ----------------------------------------------------------------- |
|  -8.1% | -20.74ms | 100.0% | 256.2ms → 235.5ms | 202 → 186 | `inferFromObjectTypes` | `./node_modules/typescript/lib/typescript.js:70332:34 → 71615:34` |

##### `invokeOnce` (`./node_modules/typescript/lib/typescript.js:71374:24`)

| Change |    Delta |      % |              Time |   Samples | Caller           | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------- | ----------------------------------------------------------------- |
|  -6.4% | -19.57ms | 100.0% | 307.0ms → 287.4ms | 242 → 227 | `inferFromTypes` | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                    |
| -----: | -------: | -----: | --------------: | ------: | ---------- | --------------------------- |
| -35.8% | -19.09ms | 100.0% | 53.3ms → 34.2ms | 42 → 27 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `isTypeIdenticalTo` (`./node_modules/typescript/lib/typescript.js:66463:29`)

| Change |    Delta |              % |              Time |   Samples | Caller                          | Location                                                          |
| -----: | -------: | -------------: | ----------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
| -11.1% | -19.32ms | 100.0% → 98.4% | 173.8ms → 154.5ms | 137 → 122 | `isTypeOrBaseIdenticalTo`       | `./node_modules/typescript/lib/typescript.js:70496:35 → 71779:35` |
|    new |  +1.27ms |    0.0% → 0.8% |       0ms → 1.3ms |     0 → 1 | `inferFromMatchingTypes`        | `./node_modules/typescript/lib/typescript.js:71402:36`            |
|    new |  +1.27ms |    0.0% → 0.8% |       0ms → 1.3ms |     0 → 1 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:68537:43`            |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

| Change |    Delta |      % |            Time | Samples | Caller            | Location    |
| -----: | -------: | -----: | --------------: | ------: | ----------------- | ----------- |
| -48.2% | -16.52ms | 100.0% | 34.2ms → 17.7ms | 27 → 14 | `op_fs_stat_sync` | `<unknown>` |

##### `inferFromObjectTypes` (`./node_modules/typescript/lib/typescript.js:71615:34`)

| Change |    Delta |      % |              Time |   Samples | Caller       | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------ | ----------------------------------------------------------------- |
|  -5.3% | -15.75ms | 100.0% | 298.1ms → 282.3ms | 235 → 223 | `invokeOnce` | `./node_modules/typescript/lib/typescript.js:70091:24 → 71374:24` |

##### `checkFunctionExpressionOrObjectLiteralMethodDeferred` (`./node_modules/typescript/lib/typescript.js:81135:64`)

| Change |    Delta |      % |              Time |   Samples | Caller              | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------- | ----------------------------------------------------------------- |
|  -2.1% | -15.32ms | 100.0% | 738.2ms → 722.9ms | 582 → 571 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |

##### `checkDeferredNode` (`./node_modules/typescript/lib/typescript.js:88499:29`)

| Change |    Delta |      % |              Time |   Samples | Caller               | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------- | ----------------------------------------------------------------- |
|  -1.9% | -14.06ms | 100.0% | 740.8ms → 726.7ms | 584 → 574 | `checkDeferredNodes` | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |

##### `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)

| Change |    Delta |      % |              Time |   Samples | Caller                  | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
|  -1.9% | -14.06ms | 100.0% | 740.8ms → 726.7ms | 584 → 574 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

| Change |    Delta |             % |              Time |   Samples | Caller                        | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------------- | ----------------------------------------------------------------- |
| -11.4% | -24.46ms | 64.8% → 59.8% | 214.4ms → 189.9ms | 169 → 150 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:70146:41 → 71429:41` |
|  -4.0% | -13.28ms |        100.0% | 331.1ms → 317.8ms | 261 → 251 | `inferTypes`                  | `./node_modules/typescript/lib/typescript.js:69892:22 → 71175:22` |
| +29.2% |  +6.29ms |   6.5% → 8.8% |   21.6ms → 27.9ms |   17 → 22 | `applyToReturnTypes`          | `./node_modules/typescript/lib/typescript.js:69498:30 → 70758:30` |
|  -2.1% |  -5.56ms | 80.1% → 81.7% | 265.1ms → 259.5ms | 209 → 205 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:70432:33 → 71715:33` |
| -33.5% |  -5.09ms |   4.6% → 3.2% |   15.2ms → 10.1ms |    12 → 8 | `inferFromMatchingTypes`      | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |

##### `inferTypes` (`./node_modules/typescript/lib/typescript.js:71175:22`)

|  Change |    Delta |             % |              Time |   Samples | Caller                          | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
|   -5.1% | -14.46ms | 86.2% → 85.3% | 285.4ms → 270.9ms | 225 → 214 | `inferTypeArguments`            | `./node_modules/typescript/lib/typescript.js:76656:30 → 77951:30` |
| removed |  -1.27ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)`                   | `./node_modules/typescript/lib/typescript.js:76633:55`            |
| removed |  -1.27ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `inferReverseMappedType`        | `./node_modules/typescript/lib/typescript.js:69702:34`            |
|     new |  +1.27ms |   0.0% → 0.4% |       0ms → 1.3ms |     0 → 1 | `inferReverseMappedTypeWorker`  | `./node_modules/typescript/lib/typescript.js:70963:40`            |
|  +49.7% |  +1.26ms |   0.8% → 1.2% |     2.5ms → 3.8ms |     2 → 3 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |

##### `checkObjectLiteral` (`./node_modules/typescript/lib/typescript.js:76097:30`)

| Change |    Delta |      % |              Time |   Samples | Caller                  | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
|  -4.6% | -13.20ms | 100.0% | 286.7ms → 273.5ms | 226 → 216 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                                                        |
| -----: | -------: | -----: | --------------: | ------: | ---------- | --------------------------------------------------------------- |
| -22.9% | -12.77ms | 100.0% | 55.8ms → 43.0ms | 44 → 34 | `statSync` | `./node_modules/typescript/lib/typescript.js:8602:22 → 8631:22` |

##### `(anonymous)` (`node:module:1050:24`)

| Change |    Delta |      % |              Time |  Samples | Caller        | Location              |
| -----: | -------: | -----: | ----------------: | -------: | ------------- | --------------------- |
|  -8.5% | -11.65ms | 100.0% | 137.0ms → 125.3ms | 108 → 99 | `(anonymous)` | `node:module:1525:36` |

##### `(anonymous)` (`node:module:1525:36`)

| Change |    Delta |      % |              Time |  Samples | Caller    | Location              |
| -----: | -------: | -----: | ----------------: | -------: | --------- | --------------------- |
|  -8.5% | -11.65ms | 100.0% | 137.0ms → 125.3ms | 108 → 99 | `require` | `node:module:1752:35` |

##### `require` (`node:module:1752:35`)

| Change |    Delta |           % |              Time |  Samples | Caller             | Location                                              |
| -----: | -------: | ----------: | ----------------: | -------: | ------------------ | ----------------------------------------------------- |
|  -8.5% | -11.65ms |      100.0% | 137.0ms → 125.3ms | 108 → 99 | `typeCheckProject` | `./tsc-workload.mjs:3:33`                             |
|    new |  +1.27ms | 0.0% → 1.0% |       0ms → 1.3ms |    0 → 1 | `(anonymous)`      | `./node_modules/typescript/lib/typescript.js:16:15`   |
|    new |  +1.27ms | 0.0% → 1.0% |       0ms → 1.3ms |    0 → 1 | `getNodeSystem`    | `./node_modules/typescript/lib/typescript.js:8489:25` |

##### `(anonymous)` (`node:module:1653:37`)

| Change |    Delta |      % |              Time |  Samples | Caller        | Location              |
| -----: | -------: | -----: | ----------------: | -------: | ------------- | --------------------- |
|  -7.7% | -10.38ms | 100.0% | 135.7ms → 125.3ms | 107 → 99 | `(anonymous)` | `node:module:1438:33` |

##### `(anonymous)` (`node:module:1438:33`)

| Change |    Delta |      % |              Time |  Samples | Caller        | Location              |
| -----: | -------: | -----: | ----------------: | -------: | ------------- | --------------------- |
|  -7.7% | -10.38ms | 100.0% | 135.7ms → 125.3ms | 107 → 99 | `(anonymous)` | `node:module:1050:24` |

##### `loadMaybeCjs` (`node:module:1669:22`)

| Change |    Delta |      % |              Time |  Samples | Caller        | Location              |
| -----: | -------: | -----: | ----------------: | -------: | ------------- | --------------------- |
|  -7.7% | -10.38ms | 100.0% | 135.7ms → 125.3ms | 107 → 99 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1622:37`)

| Change |    Delta |      % |              Time |  Samples | Caller         | Location              |
| -----: | -------: | -----: | ----------------: | -------: | -------------- | --------------------- |
|  -7.9% | -10.37ms | 100.0% | 130.6ms → 120.3ms | 103 → 95 | `loadMaybeCjs` | `node:module:1669:22` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

| Change |   Delta |      % |           Time | Samples | Caller        | Location                      |
| -----: | ------: | -----: | -------------: | ------: | ------------- | ----------------------------- |
| -33.5% | -3.82ms | 100.0% | 11.4ms → 7.6ms |   9 → 6 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

| Change |   Delta |      % |           Time | Samples | Caller             | Location                     |
| -----: | ------: | -----: | -------------: | ------: | ------------------ | ---------------------------- |
| -33.5% | -3.82ms | 100.0% | 11.4ms → 7.6ms |   9 → 6 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `realpathSyncImpl` (`ext:deno_node/fs.ts:148:28`)

| Change |   Delta |      % |          Time | Samples | Caller                | Location                     |
| -----: | ------: | -----: | ------------: | ------: | --------------------- | ---------------------------- |
| -75.0% | -3.81ms | 100.0% | 5.1ms → 1.3ms |   4 → 1 | `realpathSync_native` | `ext:deno_node/fs.ts:164:53` |

##### `realpathSync_native` (`ext:deno_node/fs.ts:164:53`)

| Change |   Delta |      % |          Time | Samples | Caller     | Location                                                        |
| -----: | ------: | -----: | ------------: | ------: | ---------- | --------------------------------------------------------------- |
| -75.0% | -3.81ms | 100.0% | 5.1ms → 1.3ms |   4 → 1 | `realpath` | `./node_modules/typescript/lib/typescript.js:8852:22 → 8881:22` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

| Change |   Delta |      % |              Time | Samples | Caller     | Location              |
| -----: | ------: | -----: | ----------------: | ------: | ---------- | --------------------- |
|  -2.6% | -2.73ms | 100.0% | 104.0ms → 101.3ms | 82 → 80 | `wrapSafe` | `node:module:1596:18` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                     |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ---------------------------- |
| -50.1% | -2.54ms | 100.0% | 5.1ms → 2.5ms |   4 → 2 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|  Change |   Delta |             % |        Time | Samples | Caller             | Location                     |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | ---------------------------- |
| removed | -2.54ms | 100.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `realpathSyncImpl` | `ext:deno_node/fs.ts:148:28` |

##### `wrapSafe` (`node:module:1596:18`)

| Change |   Delta |      % |              Time | Samples | Caller        | Location              |
| -----: | ------: | -----: | ----------------: | ------: | ------------- | --------------------- |
|  -1.4% | -1.46ms | 100.0% | 104.0ms → 102.5ms | 82 → 81 | `(anonymous)` | `node:module:1622:37` |

##### `realPathSync` (`ext:deno_fs/30_fs.js:280:22`)

| Change |   Delta |      % |          Time | Samples | Caller             | Location                     |
| -----: | ------: | -----: | ------------: | ------: | ------------------ | ---------------------------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `realpathSyncImpl` | `ext:deno_node/fs.ts:148:28` |

##### `op_compile_function` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller            | Location                      |
| -----: | ------: | -----: | --------------: | ------: | ----------------- | ----------------------------- |
| -12.2% | -3.86ms | 100.0% | 31.7ms → 27.9ms | 25 → 22 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `op_fs_realpath_sync` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                      |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `op_require_real_path` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller       | Location             |
| ------: | ------: | ------------: | ----------: | ------: | ------------ | -------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `toRealPath` | `node:module:806:20` |

##### `op_fs_read_dir_sync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------------------------------------- |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `readdirSync` | `ext:deno_node/_fs/_fs_readdir.ts:109:28` |

##### `op_require_read_file` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Caller         | Location              |
| -----: | ------: | -----: | ----: | ------: | -------------- | --------------------- |
|  -0.2% | -0.01ms | 100.0% | 3.8ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `op_node_encoding_slice` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Caller       | Location                                   |
| -----: | ------: | -----: | ----: | ------: | ------------ | ------------------------------------------ |
|  -0.2% | -4.78µs | 100.0% | 2.5ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js:65895:28`)

| Change |    Delta |              % |              Time |   Samples | Callee            | Location                                                          |
| -----: | -------: | -------------: | ----------------: | --------: | ----------------- | ----------------------------------------------------------------- |
| +12.0% | +26.18ms | 100.0% → 99.0% | 218.2ms → 244.3ms | 172 → 193 | `instantiateList` | `./node_modules/typescript/lib/typescript.js:64623:27 → 65878:27` |

##### `instantiateList` (`./node_modules/typescript/lib/typescript.js:65878:27`)

|  Change |    Delta |             % |              Time |   Samples | Callee                 | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------- | ----------------------------------------------------------------- |
|  +10.8% | +23.64ms | 98.3% → 96.5% | 218.2ms → 241.8ms | 172 → 191 | `instantiateType`      | `./node_modules/typescript/lib/typescript.js:64996:27 → 66256:27` |
|     new |  +5.06ms |   0.0% → 2.0% |       0ms → 5.1ms |     0 → 4 | `instantiateSignature` | `./node_modules/typescript/lib/typescript.js:65988:32`            |
| removed |  -1.27ms |   0.6% → 0.0% |       1.3ms → 0ms |     1 → 0 | `instantiateIndexInfo` | `./node_modules/typescript/lib/typescript.js:65135:32`            |

##### `getTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js:59663:27`)

| Change |   Delta |             % |              Time |   Samples | Callee                                   | Location                                                          |
| -----: | ------: | ------------: | ----------------: | --------: | ---------------------------------------- | ----------------------------------------------------------------- |
|  +1.6% | +7.92ms | 83.9% → 81.4% | 502.3ms → 510.2ms | 396 → 403 | `getTypeOfVariableOrParameterOrProperty` | `./node_modules/typescript/lib/typescript.js:58088:50 → 59343:50` |
|  +6.7% | +6.16ms | 15.3% → 15.6% |   91.3ms → 97.5ms |   72 → 77 | `getTypeOfInstantiatedSymbol`            | `./node_modules/typescript/lib/typescript.js:58351:39 → 59606:39` |
|    new | +5.06ms |   0.0% → 0.8% |       0ms → 5.1ms |     0 → 4 | `getTypeOfAccessors`                     | `./node_modules/typescript/lib/typescript.js:59467:30`            |
| -75.0% | -3.81ms |   0.8% → 0.2% |     5.1ms → 1.3ms |     4 → 1 | `getTypeOfFuncClassEnumModule`           | `./node_modules/typescript/lib/typescript.js:58274:40 → 59529:40` |
|    new | +2.53ms |   0.0% → 0.4% |       0ms → 2.5ms |     0 → 2 | `getCheckFlags`                          | `./node_modules/typescript/lib/typescript.js:21102:23`            |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

| Change |    Delta |             % |              Time |       Samples | Callee               | Location                                                            |
| -----: | -------: | ------------: | ----------------: | ------------: | -------------------- | ------------------------------------------------------------------- |
|  +7.8% | +17.31ms | 13.0% → 13.8% | 222.0ms → 239.3ms |     175 → 189 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
|  +0.7% |  +8.91ms | 77.1% → 76.4% |     1.32s → 1.33s | 1,038 → 1,047 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +9.6% |  +7.45ms |   4.5% → 4.9% |   77.4ms → 84.8ms |       61 → 67 | `bind`               | `./node_modules/typescript/lib/typescript.js:46600:16 → 47793:16`   |
|  +9.1% |  +6.20ms |   4.0% → 4.3% |   68.5ms → 74.7ms |       54 → 59 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35` |
| +74.7% |  +3.79ms |   0.3% → 0.5% |     5.1ms → 8.9ms |         4 → 7 | `checkImportBinding` | `./node_modules/typescript/lib/typescript.js:86542:30 → 87855:30`   |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js:33338:28`)

|  Change |    Delta |             % |           Time | Samples | Callee                  | Location                                                          |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| +432.3% | +16.45ms | 37.5% → 61.5% | 3.8ms → 20.3ms |  3 → 16 | `internIdentifier`      | `./node_modules/typescript/lib/typescript.js:32276:28 → 33331:28` |
| +399.1% |  +5.06ms | 12.5% → 19.2% |  1.3ms → 6.3ms |   1 → 5 | `createIdentifier`      | `./node_modules/typescript/lib/typescript.js:23941:28 → 24991:28` |
|  +99.6% |  +2.53ms | 25.0% → 15.4% |  2.5ms → 5.1ms |   2 → 4 | `nextTokenWithoutCheck` | `./node_modules/typescript/lib/typescript.js:31953:33 → 33008:33` |
|   -0.2% |  -2.39µs |  12.5% → 3.8% |          1.3ms |       1 | `finishNode`            | `./node_modules/typescript/lib/typescript.js:32237:22 → 33292:22` |

##### `signaturesRelatedTo` (`./node_modules/typescript/lib/typescript.js:69505:33`)

|  Change |    Delta |             % |              Time |   Samples | Callee                  | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
|   +5.9% | +18.41ms | 94.2% → 93.5% | 309.5ms → 327.9ms | 244 → 259 | `signatureRelatedTo`    | `./node_modules/typescript/lib/typescript.js:68375:32 → 69635:32` |
|  -25.1% |  -5.10ms |   6.2% → 4.3% |   20.3ms → 15.2ms |   16 → 12 | `getSignaturesOfType`   | `./node_modules/typescript/lib/typescript.js:60789:31 → 62044:31` |
|  -12.7% |  -1.29ms |   3.1% → 2.5% |    10.1ms → 8.9ms |     8 → 7 | `signaturesIdenticalTo` | `./node_modules/typescript/lib/typescript.js:68390:35 → 69650:35` |
| removed |  -1.27ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `isJSConstructor`       | `./node_modules/typescript/lib/typescript.js:78189:27`            |
|     new |  +1.27ms |   0.0% → 0.4% |       0ms → 1.3ms |     0 → 1 | `assertEqual`           | `./node_modules/typescript/lib/typescript.js:4056:23`             |

##### `getConditionalType` (`./node_modules/typescript/lib/typescript.js:65229:30`)

|  Change |    Delta |             % |             Time | Samples | Callee                   | Location                                                          |
| ------: | -------: | ------------: | ---------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
|  +15.8% | +15.01ms | 61.5% → 62.6% | 95.1ms → 110.1ms | 75 → 87 | `isTypeAssignableTo`     | `./node_modules/typescript/lib/typescript.js:65221:30 → 66481:30` |
|   +9.5% |  +4.97ms | 33.6% → 32.4% |  52.0ms → 57.0ms | 41 → 45 | `instantiateType`        | `./node_modules/typescript/lib/typescript.js:64996:27 → 66256:27` |
|  -66.7% |  -2.54ms |   2.5% → 0.7% |    3.8ms → 1.3ms |   3 → 1 | `isDeferredType`         | `./node_modules/typescript/lib/typescript.js:63971:26 → 65226:26` |
| removed |  -1.27ms |   0.8% → 0.0% |      1.3ms → 0ms |   1 → 0 | `skipTypeParentheses`    | `./node_modules/typescript/lib/typescript.js:18159:29`            |
| removed |  -1.27ms |   0.8% → 0.0% |      1.3ms → 0ms |   1 → 0 | `createInferenceContext` | `./node_modules/typescript/lib/typescript.js:69507:34`            |

##### `getConditionalTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66239:43`)

|  Change |    Delta |             % |              Time |   Samples | Callee               | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------- | ----------------------------------------------------------------- |
|  +12.2% | +17.45ms | 89.0% → 88.8% | 143.3ms → 160.8ms | 113 → 127 | `getConditionalType` | `./node_modules/typescript/lib/typescript.js:63974:30 → 65229:30` |
|  +66.4% |  +7.57ms |  7.1% → 10.5% |   11.4ms → 19.0ms |    9 → 15 | `map`                | `./node_modules/typescript/lib/typescript.js:2567:13 → 2580:13`   |
| removed |  -1.27ms |   0.8% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createTypeMapper`   | `./node_modules/typescript/lib/typescript.js:64649:28`            |
|     new |  +1.27ms |   0.0% → 0.7% |       0ms → 1.3ms |     0 → 1 | `getTypeListId`      | `./node_modules/typescript/lib/typescript.js:62753:25`            |
|   -0.2% |  -0.02ms |   5.5% → 4.9% |             8.9ms |         7 | `mapTypeWithAlias`   | `./node_modules/typescript/lib/typescript.js:71292:28 → 72575:28` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

| Change |    Delta |             % |              Time |   Samples | Callee                         | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
|  +6.0% | +19.64ms | 67.6% → 68.9% | 328.5ms → 348.2ms | 259 → 275 | `signaturesRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |
|  +4.2% | +16.97ms | 82.2% → 82.5% | 399.5ms → 416.5ms | 315 → 329 | `propertiesRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68073:33 → 69333:33` |
| +10.9% |  +8.71ms | 16.4% → 17.5% |   79.9ms → 88.6ms |   63 → 70 | `indexSignaturesRelatedTo`     | `./node_modules/typescript/lib/typescript.js:68475:38 → 69735:38` |
|  +9.0% |  +8.68ms | 19.8% → 20.8% |  96.4ms → 105.1ms |   76 → 83 | `unionOrIntersectionRelatedTo` | `./node_modules/typescript/lib/typescript.js:66757:42 → 68017:42` |
| +10.7% |  +7.46ms | 14.4% → 15.3% |   69.8ms → 77.2ms |   55 → 61 | `relateVariances`              | `./node_modules/typescript/lib/typescript.js:67794:31 → 69054:31` |

##### `structuredTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68467:37`)

|  Change |    Delta |           % |              Time |   Samples | Callee                                 | Location                                                          |
| ------: | -------: | ----------: | ----------------: | --------: | -------------------------------------- | ----------------------------------------------------------------- |
|   +4.0% | +19.34ms |       99.5% | 485.8ms → 505.1ms | 383 → 399 | `structuredTypeRelatedToWorker`        | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |
| removed |  -2.54ms | 0.5% → 0.0% |       2.5ms → 0ms |     2 → 0 | `getEffectiveConstraintOfIntersection` | `./node_modules/typescript/lib/typescript.js:60279:48`            |
|     new |  +2.53ms | 0.0% → 0.5% |       0ms → 2.5ms |     0 → 2 | `signaturesRelatedTo`                  | `./node_modules/typescript/lib/typescript.js:69505:33`            |
| removed |  -1.27ms | 0.3% → 0.0% |       1.3ms → 0ms |     1 → 0 | `propertiesRelatedTo`                  | `./node_modules/typescript/lib/typescript.js:68073:33`            |
|     new |  +1.27ms | 0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `isRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:67753:25`            |

##### `signatureRelatedTo` (`./node_modules/typescript/lib/typescript.js:69635:32`)

|  Change |    Delta |             % |              Time |   Samples | Callee                     | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------- | ----------------------------------------------------------------- |
|   +5.2% | +15.88ms | 99.6% → 98.8% | 308.2ms → 324.1ms | 243 → 256 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:65804:36 → 67064:36` |
| removed |  -1.27ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getNonArrayRestType`      | `./node_modules/typescript/lib/typescript.js:78969:31`            |
|  +99.6% |  +1.26ms |   0.4% → 0.8% |     1.3ms → 2.5ms |     1 → 2 | `getErasedSignature`       | `./node_modules/typescript/lib/typescript.js:61317:30 → 62572:30` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:125505:7`)

| Change |    Delta |      % |              Time |   Samples | Callee           | Location                                                            |
| -----: | -------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------------------------------- |
|  +5.5% | +18.36ms | 100.0% | 333.6ms → 352.0ms | 263 → 278 | `findSourceFile` | `./node_modules/typescript/lib/typescript.js:123967:26 → 125549:26` |

##### `findSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:125566:32`)

| Change |    Delta |             % |              Time |   Samples | Callee                           | Location                                                            |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------- | ------------------------------------------------------------------- |
|  +6.6% | +16.00ms | 72.6% → 73.4% | 242.3ms → 258.3ms | 191 → 204 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:121493:10 → 123071:10` |
|  +6.8% | +14.78ms | 65.4% → 66.2% | 218.2ms → 232.9ms | 172 → 184 | `processImportedModules`         | `./node_modules/typescript/lib/typescript.js:124378:34 → 125960:34` |
| +11.0% | +11.20ms | 30.4% → 32.0% | 101.5ms → 112.7ms |   80 → 89 | `processTypeReferenceDirectives` | `./node_modules/typescript/lib/typescript.js:124212:42 → 125794:42` |
|  +9.1% |  +6.20ms | 20.5% → 21.2% |   68.5ms → 74.7ms |   54 → 59 | `processReferencedFiles`         | `./node_modules/typescript/lib/typescript.js:124199:34 → 125781:34` |
|  +7.7% |  +3.71ms | 14.4% → 14.7% |   48.2ms → 51.9ms |   38 → 41 | `processLibReferenceDirectives`  | `./node_modules/typescript/lib/typescript.js:124349:41 → 125931:41` |

##### `findSourceFile` (`./node_modules/typescript/lib/typescript.js:125549:26`)

| Change |    Delta |      % |              Time |   Samples | Callee                 | Location                                                            |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------- | ------------------------------------------------------------------- |
|  +5.5% | +18.36ms | 100.0% | 333.6ms → 352.0ms | 263 → 278 | `findSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:123984:32 → 125566:32` |

##### `getSourceFileFromReferenceWorker` (`./node_modules/typescript/lib/typescript.js:125461:44`)

| Change |    Delta |      % |              Time |   Samples | Callee        | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------- | ----------------------------------------------------------------- |
|  +5.5% | +18.36ms | 100.0% | 333.6ms → 352.0ms | 263 → 278 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123923:7 → 125505:7` |

##### `processSourceFile` (`./node_modules/typescript/lib/typescript.js:125502:29`)

| Change |    Delta |      % |              Time |   Samples | Callee                             | Location                                                            |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | ------------------------------------------------------------------- |
|  +5.5% | +18.36ms | 100.0% | 333.6ms → 352.0ms | 263 → 278 | `getSourceFileFromReferenceWorker` | `./node_modules/typescript/lib/typescript.js:123879:44 → 125461:44` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124028:24`)

| Change |    Delta |      % |              Time |   Samples | Callee            | Location                                                            |
| -----: | -------: | -----: | ----------------: | --------: | ----------------- | ------------------------------------------------------------------- |
|  +7.8% | +17.31ms | 100.0% | 222.0ms → 239.3ms | 175 → 189 | `processRootFile` | `./node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |

##### `parseSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:32711:33`)

|  Change |    Delta |             % |              Time |   Samples | Callee                  | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
|   +7.4% | +16.05ms | 96.6% → 96.3% | 216.9ms → 232.9ms | 171 → 184 | `parseList`             | `./node_modules/typescript/lib/typescript.js:32618:21 → 33673:21` |
| removed |  -1.27ms |   0.6% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createSourceFile2`     | `./node_modules/typescript/lib/typescript.js:26546:29`            |
|     new |  +1.27ms |   0.0% → 0.5% |       0ms → 1.3ms |     0 → 1 | `currentNode`           | `./node_modules/typescript/lib/typescript.js:33701:23`            |
|  +49.7% |  +1.26ms |   1.1% → 1.6% |     2.5ms → 3.8ms |     2 → 3 | `createSourceFile2`     | `./node_modules/typescript/lib/typescript.js:31795:29 → 32847:29` |
|   -0.2% |  -0.01ms |   1.7% → 1.6% |             3.8ms |         3 | `processCommentPragmas` | `./node_modules/typescript/lib/typescript.js:38564:31 → 39632:31` |

##### `processRootFile` (`./node_modules/typescript/lib/typescript.js:125290:27`)

| Change |    Delta |      % |              Time |   Samples | Callee              | Location                                                            |
| -----: | -------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------------------- |
|  +6.0% | +17.19ms | 100.0% | 284.1ms → 301.3ms | 224 → 238 | `processSourceFile` | `./node_modules/typescript/lib/typescript.js:123920:29 → 125502:29` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|  Change |   Delta |              % |          Time | Samples | Callee                   | Location                                       |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------ | ---------------------------------------------- |
| +199.4% | +5.06ms | 100.0% → 85.7% | 2.5ms → 7.6ms |   2 → 6 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

| Change |   Delta |              % |          Time | Samples | Callee                 | Location                                        |
| -----: | ------: | -------------: | ------------: | ------: | ---------------------- | ----------------------------------------------- |
|    new | +3.80ms |   0.0% → 50.0% |   0ms → 3.8ms |   0 → 3 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
| +49.7% | +1.26ms | 100.0% → 50.0% | 2.5ms → 3.8ms |   2 → 3 | `Stats`                | `ext:deno_node/internal/fs/utils.mjs:650:22`    |

##### `getSerialization` (`ext:deno_web/00_url.js:97:26`)

| Change |   Delta |             % |        Time | Samples | Callee                     | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `op_url_get_serialization` | `<unknown>` |

##### `URL` (`ext:deno_web/00_url.js:716:14`)

| Change |   Delta |             % |        Time | Samples | Callee             | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------------ |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `getSerialization` | `ext:deno_web/00_url.js:97:26` |

##### `pathToFileURL` (`ext:deno_node/url.ts:1337:27`)

| Change |   Delta |             % |        Time | Samples | Callee | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `URL`  | `ext:deno_web/00_url.js:716:14` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:1`)

| Change |   Delta |             % |        Time | Samples | Callee        | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------ |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:32` |

##### `loadExtScript` (`ext:core/01_core.js:951:25`)

| Change |   Delta |             % |        Time | Samples | Callee               | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `op_load_ext_script` | `<unknown>` |

##### `crypto` (`node:module:161:13`)

| Change |   Delta |             % |        Time | Samples | Callee          | Location                     |
| -----: | ------: | ------------: | ----------: | ------: | --------------- | ---------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `loadExtScript` | `ext:core/01_core.js:951:25` |

##### `get` (`node:module:212:9`)

| Change |   Delta |             % |        Time | Samples | Callee   | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------- | -------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `crypto` | `node:module:161:13` |

##### `loadNativeModule` (`node:module:2019:26`)

| Change |   Delta |             % |        Time | Samples | Callee | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `get`  | `node:module:212:9` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

| Change |   Delta |             % |        Time | Samples | Callee                  | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ----------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `op_inspector_dispatch` | `<unknown>` |

##### `Stats` (`ext:deno_node/internal/fs/utils.mjs:650:22`)

|  Change |   Delta |             % |        Time | Samples | Callee       | Location                                     |
| ------: | ------: | ------------: | ----------: | ------: | ------------ | -------------------------------------------- |
| removed | -1.27ms |  50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `set`        | `ext:deno_node/internal/fs/utils.mjs:554:8`  |
|     new | +1.27ms |  0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `set`        | `ext:deno_node/internal/fs/utils.mjs:569:8`  |
|     new | +1.27ms |  0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `set`        | `ext:deno_node/internal/fs/utils.mjs:539:8`  |
|   -0.2% | -2.39µs | 50.0% → 33.3% |       1.3ms |       1 | `dateFromMs` | `ext:deno_node/internal/fs/utils.mjs:526:20` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

| Change |   Delta |      % |  Time |       Samples | Callee              | Location    |
| -----: | ------: | -----: | ----: | ------------: | ------------------- | ----------- |
|    ~0% | +0.11ms | 100.0% | 1.95s | 1,541 → 1,544 | `op_run_microtasks` | `<unknown>` |

##### `op_run_microtasks` (`<unknown>`)

| Change |   Delta |      % |          Time |       Samples | Callee        | Location               |
| -----: | ------: | -----: | ------------: | ------------: | ------------- | ---------------------- |
|  +0.1% | +1.38ms | 100.0% | 1.95s → 1.96s | 1,541 → 1,545 | `(anonymous)` | `./cpuprofile-run.mjs` |

##### `op_load_ext_script` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee        | Location                      |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ----------------------------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1` |

##### `applyToParameterTypes` (`./node_modules/typescript/lib/typescript.js:70732:33`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                             | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------- | ----------------------------------------------------------------- |
|  -11.4% | -24.46ms | 94.4% → 98.0% | 214.4ms → 189.9ms | 169 → 150 | `inferFromContravariantTypesIfStrictFunctionTypes` | `./node_modules/typescript/lib/typescript.js:70151:62 → 71434:62` |
|  -75.0% |  -7.62ms |   4.5% → 1.3% |    10.1ms → 2.5ms |     8 → 2 | `getTypeAtPosition`                                | `./node_modules/typescript/lib/typescript.js:78861:29 → 80156:29` |
| removed |  -1.27ms |   0.6% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)`                                      | `./node_modules/typescript/lib/typescript.js:76633:55`            |
| removed |  -1.27ms |   0.6% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getRestTypeAtPosition`                            | `./node_modules/typescript/lib/typescript.js:78878:33`            |
|  +99.6% |  +1.26ms |   0.6% → 1.3% |     1.3ms → 2.5ms |     1 → 2 | `getEffectiveRestType`                             | `./node_modules/typescript/lib/typescript.js:78957:32 → 80252:32` |

##### `inferFromContravariantTypes` (`./node_modules/typescript/lib/typescript.js:71429:41`)

| Change |    Delta |      % |              Time |   Samples | Callee           | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------- | ----------------------------------------------------------------- |
| -11.4% | -24.46ms | 100.0% | 214.4ms → 189.9ms | 169 → 150 | `inferFromTypes` | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |

##### `inferFromContravariantTypesIfStrictFunctionTypes` (`./node_modules/typescript/lib/typescript.js:71434:62`)

| Change |    Delta |      % |              Time |   Samples | Callee                        | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------------- | ----------------------------------------------------------------- |
| -11.4% | -24.46ms | 100.0% | 214.4ms → 189.9ms | 169 → 150 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:70146:41 → 71429:41` |

##### `inferFromMatchingTypes` (`./node_modules/typescript/lib/typescript.js:71402:36`)

|  Change |    Delta |             % |              Time |   Samples | Callee                    | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------- | ----------------------------------------------------------------- |
|  -12.3% | -21.86ms | 85.9% → 85.4% | 177.6ms → 155.7ms | 140 → 123 | `isTypeOrBaseIdenticalTo` | `./node_modules/typescript/lib/typescript.js:70496:35 → 71779:35` |
|  -33.5% |  -5.09ms |   7.4% → 5.6% |   15.2ms → 10.1ms |    12 → 8 | `inferFromTypes`          | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
|  -60.1% |  -3.81ms |   3.1% → 1.4% |     6.3ms → 2.5ms |     5 → 2 | `appendIfUnique`          | `./node_modules/typescript/lib/typescript.js:3001:24 → 3014:24`   |
| removed |  -1.27ms |   0.6% → 0.0% |       1.3ms → 0ms |     1 → 0 | `filter`                  | `./node_modules/typescript/lib/typescript.js:2533:16`             |
|     new |  +1.27ms |   0.0% → 0.7% |       0ms → 1.3ms |     0 → 1 | `isTypeCloselyMatchedBy`  | `./node_modules/typescript/lib/typescript.js:71782:34`            |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

|  Change |    Delta |             % |            Time | Samples | Callee                           | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------- | ----------------------------------------------------------------- |
|  -33.5% | -24.19ms | 49.6% → 39.6% | 72.3ms → 48.1ms | 57 → 38 | `resolveTypeReferenceMembers`    | `./node_modules/typescript/lib/typescript.js:59264:39 → 60519:39` |
|  -19.4% |  -6.39ms | 22.6% → 21.9% | 33.0ms → 26.6ms | 26 → 21 | `resolveAnonymousTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59723:39 → 60978:39` |
|  +18.8% |  +5.01ms | 18.3% → 26.0% | 26.6ms → 31.7ms | 21 → 25 | `resolveMappedTypeMembers`       | `./node_modules/typescript/lib/typescript.js:59922:36 → 61177:36` |
|  -60.1% |  -3.81ms |   4.3% → 2.1% |   6.3ms → 2.5ms |   5 → 2 | `resolveClassOrInterfaceMembers` | `./node_modules/typescript/lib/typescript.js:59261:42 → 60516:42` |
| removed |  -1.27ms |   0.9% → 0.0% |     1.3ms → 0ms |   1 → 0 | `getTypeArguments`               | `./node_modules/typescript/lib/typescript.js:61572:28`            |

##### `resolveTypeReferenceMembers` (`./node_modules/typescript/lib/typescript.js:60519:39`)

|  Change |    Delta |             % |            Time | Samples | Callee                     | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
|  -31.5% | -20.38ms | 89.5% → 92.1% | 64.7ms → 44.3ms | 51 → 35 | `resolveObjectTypeMembers` | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -50.1% |  -1.27ms |   3.5% → 2.6% |   2.5ms → 1.3ms |   2 → 1 | `resolveDeclaredMembers`   | `./node_modules/typescript/lib/typescript.js:59042:34 → 60297:34` |
|  -50.1% |  -1.27ms |   3.5% → 2.6% |   2.5ms → 1.3ms |   2 → 1 | `getTypeArguments`         | `./node_modules/typescript/lib/typescript.js:61572:28 → 62827:28` |
| removed |  -1.27ms |   1.8% → 0.0% |     1.3ms → 0ms |   1 → 0 | `concatenate`              | `./node_modules/typescript/lib/typescript.js:2810:21`             |
|     new |  +1.27ms |   0.0% → 2.6% |     0ms → 1.3ms |   0 → 1 | `instantiateSignatures`    | `./node_modules/typescript/lib/typescript.js:65898:33`            |

##### `op_fs_stat_sync` (`<unknown>`)

| Change |    Delta |             % |            Time | Samples | Callee             | Location                     |
| -----: | -------: | ------------: | --------------: | ------: | ------------------ | ---------------------------- |
| -48.2% | -16.52ms | 65.9% → 63.6% | 34.2ms → 17.7ms | 27 → 14 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:61994:29`)

|  Change |    Delta |             % |            Time | Samples | Callee                                 | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
|  -39.0% | -17.81ms | 48.6% → 39.3% | 45.7ms → 27.9ms | 36 → 22 | `resolveStructuredTypeMembers`         | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  -50.1% |  -3.81ms |   8.1% → 5.4% |   7.6ms → 3.8ms |   6 → 3 | `getPropertyOfUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:60674:48 → 61929:48` |
|  -50.1% |  -1.27ms |   2.7% → 1.8% |   2.5ms → 1.3ms |   2 → 1 | `symbolIsValue`                        | `./node_modules/typescript/lib/typescript.js:52432:25 → 53673:25` |
| removed |  -1.27ms |   1.4% → 0.0% |     1.3ms → 0ms |   1 → 0 | `getPropertyOfObjectType`              | `./node_modules/typescript/lib/typescript.js:60122:35`            |
|   -0.2% |  -0.07ms | 40.5% → 53.6% | 38.1ms → 38.0ms |      30 | `getReducedApparentType`               | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34` |

##### `resolveObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:60465:36`)

|  Change |   Delta |             % |            Time | Samples | Callee                     | Location                                                          |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
|  -27.4% | -7.65ms | 41.5% → 45.7% | 27.9ms → 20.3ms | 22 → 16 | `instantiateType`          | `./node_modules/typescript/lib/typescript.js:64996:27 → 66256:27` |
|  -27.4% | -3.82ms | 20.8% → 22.9% | 14.0ms → 10.1ms |  11 → 8 | `getPropertiesOfType`      | `./node_modules/typescript/lib/typescript.js:60156:31 → 61411:31` |
|  -75.0% | -3.81ms |   7.5% → 2.9% |   5.1ms → 1.3ms |   4 → 1 | `setStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js:52502:36 → 53743:36` |
|  -50.1% | -1.27ms |   3.8% → 2.9% |   2.5ms → 1.3ms |   2 → 1 | `addInheritedMembers`      | `./node_modules/typescript/lib/typescript.js:59027:31 → 60282:31` |
| removed | -1.27ms |   1.9% → 0.0% |     1.3ms → 0ms |   1 → 0 | `getBaseTypes`             | `./node_modules/typescript/lib/typescript.js:58664:24`            |

##### `inferFromSignature` (`./node_modules/typescript/lib/typescript.js:71739:32`)

| Change |    Delta |             % |              Time |   Samples | Callee                  | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
| -14.2% | -32.08ms | 89.4% → 84.1% | 225.8ms → 193.7ms | 178 → 153 | `applyToParameterTypes` | `./node_modules/typescript/lib/typescript.js:69472:33 → 70732:33` |
| +27.0% |  +7.54ms | 11.1% → 15.4% |   27.9ms → 35.4ms |   22 → 28 | `applyToReturnTypes`    | `./node_modules/typescript/lib/typescript.js:69498:30 → 70758:30` |

##### `isTypeOrBaseIdenticalTo` (`./node_modules/typescript/lib/typescript.js:71779:35`)

| Change |    Delta |             % |              Time |   Samples | Callee              | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------- | ----------------------------------------------------------------- |
| -11.1% | -19.32ms | 97.9% → 99.2% | 173.8ms → 154.5ms | 137 → 122 | `isTypeIdenticalTo` | `./node_modules/typescript/lib/typescript.js:65203:29 → 66463:29` |

##### `inferFromSignatures` (`./node_modules/typescript/lib/typescript.js:71727:33`)

| Change |    Delta |             % |              Time |   Samples | Callee                | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | --------------------- | ----------------------------------------------------------------- |
|  -9.2% | -23.26ms | 98.5% → 97.3% | 252.4ms → 229.1ms | 199 → 181 | `inferFromSignature`  | `./node_modules/typescript/lib/typescript.js:70456:32 → 71739:32` |
| +99.6% |  +2.53ms |   1.0% → 2.2% |     2.5ms → 5.1ms |     2 → 4 | `getSignaturesOfType` | `./node_modules/typescript/lib/typescript.js:60789:31 → 62044:31` |
|    new |  +1.27ms |   0.0% → 0.5% |       0ms → 1.3ms |     0 → 1 | `getBaseSignature`    | `./node_modules/typescript/lib/typescript.js:62599:28`            |

##### `invokeOnce` (`./node_modules/typescript/lib/typescript.js:71374:24`)

|  Change |    Delta |             % |              Time |   Samples | Callee                        | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------- | ----------------------------------------------------------------- |
|   -5.3% | -15.75ms | 97.1% → 98.2% | 298.1ms → 282.3ms | 235 → 223 | `inferFromObjectTypes`        | `./node_modules/typescript/lib/typescript.js:70332:34 → 71615:34` |
| removed |  -1.27ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:70432:33`            |
|  +19.8% |  +1.25ms |   2.1% → 2.6% |     6.3ms → 7.6ms |     5 → 6 | `isDeeplyNestedType`          | `./node_modules/typescript/lib/typescript.js:68771:30 → 70031:30` |
|   -0.2% |  -0.03ms |   5.8% → 6.2% |   17.8ms → 17.7ms |        14 | `inferToConditionalType`      | `./node_modules/typescript/lib/typescript.js:70272:36 → 71555:36` |
|   -0.2% |  -0.01ms |   1.2% → 1.3% |             3.8ms |         3 | `inferFromGenericMappedTypes` | `./node_modules/typescript/lib/typescript.js:70324:41 → 71607:41` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|  Change |    Delta |             % |            Time | Samples | Callee            | Location    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------- | ----------- |
|  -46.4% | -24.15ms | 97.6% → 81.5% | 52.0ms → 27.9ms | 41 → 22 | `op_fs_stat_sync` | `<unknown>` |
| +299.2% |  +3.80ms |  2.4% → 14.8% |   1.3ms → 5.1ms |   1 → 4 | `(anonymous)`     | `<unknown>` |

##### `isTypeIdenticalTo` (`./node_modules/typescript/lib/typescript.js:66463:29`)

| Change |    Delta |              % |              Time |   Samples | Callee            | Location                                                          |
| -----: | -------: | -------------: | ----------------: | --------: | ----------------- | ----------------------------------------------------------------- |
|  -7.6% | -12.98ms | 97.8% → 100.0% | 170.0ms → 157.0ms | 134 → 124 | `isTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

| Change |   Delta |             % |           Time | Samples | Callee         | Location                            |
| -----: | ------: | ------------: | -------------: | ------: | -------------- | ----------------------------------- |
| -33.5% | -3.82ms | 33.3% → 42.9% | 11.4ms → 7.6ms |   9 → 6 | `(anonymous)`  | `ext:core/00_infra.js:127:37`       |
|  -0.2% | -0.01ms | 11.1% → 21.4% |          3.8ms |       3 | `SafeIterator` | `ext:core/00_primordials.js:316:18` |

##### `inferFromObjectTypes` (`./node_modules/typescript/lib/typescript.js:71615:34`)

|  Change |    Delta |             % |              Time |   Samples | Callee                     | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------- | ----------------------------------------------------------------- |
|   -8.1% | -20.74ms | 86.0% → 83.4% | 256.2ms → 235.5ms | 202 → 186 | `inferFromSignatures`      | `./node_modules/typescript/lib/typescript.js:70444:33 → 71727:33` |
|   -4.8% | -13.18ms | 91.9% → 92.4% | 274.0ms → 260.8ms | 216 → 206 | `inferFromProperties`      | `./node_modules/typescript/lib/typescript.js:70432:33 → 71715:33` |
|     new | +10.13ms |   0.0% → 3.6% |      0ms → 10.1ms |     0 → 8 | `inferFromIndexTypes`      | `./node_modules/typescript/lib/typescript.js:71749:33`            |
|  +24.8% |  +3.77ms |   5.1% → 6.7% |   15.2ms → 19.0ms |   12 → 15 | `typesDefinitelyUnrelated` | `./node_modules/typescript/lib/typescript.js:69737:36 → 71020:36` |
| removed |  -1.27ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `inferFromTypes`           | `./node_modules/typescript/lib/typescript.js:69901:28`            |

##### `checkFunctionExpressionOrObjectLiteralMethodDeferred` (`./node_modules/typescript/lib/typescript.js:81135:64`)

|  Change |   Delta |             % |              Time |   Samples | Callee                                            | Location                                                          |
| ------: | ------: | ------------: | ----------------: | --------: | ------------------------------------------------- | ----------------------------------------------------------------- |
|   -0.7% | -5.15ms | 97.1% → 98.4% | 716.7ms → 711.5ms | 565 → 562 | `checkSourceElement`                              | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |
|  -44.5% | -5.09ms |   1.5% → 0.9% |    11.4ms → 6.3ms |     9 → 5 | `getReturnTypeOfSignature`                        | `./node_modules/typescript/lib/typescript.js:61207:36 → 62462:36` |
| removed | -2.54ms |   0.3% → 0.0% |       2.5ms → 0ms |     2 → 0 | `checkAllCodePathsInNonVoidFunctionReturnOrThrow` | `./node_modules/typescript/lib/typescript.js:79721:59`            |
|  -33.5% | -1.27ms |   0.5% → 0.4% |     3.8ms → 2.5ms |     3 → 2 | `checkExpression`                                 | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
| removed | -1.27ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getReturnTypeFromAnnotation`                     | `./node_modules/typescript/lib/typescript.js:61239:39`            |

##### `checkDeferredNode` (`./node_modules/typescript/lib/typescript.js:88499:29`)

| Change |    Delta |             % |              Time |   Samples | Callee                                                       | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------ | ----------------------------------------------------------------- |
|  -2.1% | -15.32ms | 99.7% → 99.5% | 738.2ms → 722.9ms | 582 → 571 | `checkFunctionExpressionOrObjectLiteralMethodDeferred`       | `./node_modules/typescript/lib/typescript.js:79840:64 → 81135:64` |
|    new |  +1.27ms |   0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `checkAssertionDeferred`                                     | `./node_modules/typescript/lib/typescript.js:79907:34`            |
|    new |  +1.27ms |   0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `checkAllCodePathsInNonVoidFunctionReturnOrThrowDiagnostics` | `./node_modules/typescript/lib/typescript.js:81019:72`            |
|  -0.2% |  -2.39µs |          0.2% |             1.3ms |         1 | `resolveUntypedCall`                                         | `./node_modules/typescript/lib/typescript.js:76466:30 → 77761:30` |

##### `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)

| Change |    Delta |      % |              Time |   Samples | Callee              | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------- | ----------------------------------------------------------------- |
|  -1.9% | -14.06ms | 100.0% | 740.8ms → 726.7ms | 584 → 574 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|  Change |    Delta |             % |              Time |   Samples | Callee                   | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------ | ----------------------------------------------------------------- |
|  -11.8% | -24.44ms | 62.5% → 57.4% | 206.8ms → 182.3ms | 163 → 144 | `inferFromMatchingTypes` | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |
|   -6.4% | -19.57ms | 92.7% → 90.4% | 307.0ms → 287.4ms | 242 → 227 | `invokeOnce`             | `./node_modules/typescript/lib/typescript.js:70091:24 → 71374:24` |
| +199.4% |  +7.59ms |   1.1% → 3.6% |    3.8ms → 11.4ms |     3 → 9 | `inferToMultipleTypes`   | `./node_modules/typescript/lib/typescript.js:70179:34 → 71462:34` |
|  +30.5% |  +5.03ms |   5.0% → 6.8% |   16.5ms → 21.5ms |   13 → 17 | `inferFromTypeArguments` | `./node_modules/typescript/lib/typescript.js:70136:36 → 71419:36` |
| removed |  -2.54ms |   0.8% → 0.0% |       2.5ms → 0ms |     2 → 0 | `getAliasVariances`      | `./node_modules/typescript/lib/typescript.js:68616:29`            |

##### `inferTypes` (`./node_modules/typescript/lib/typescript.js:71175:22`)

| Change |    Delta |      % |              Time |   Samples | Callee           | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------- | ----------------------------------------------------------------- |
|  -4.0% | -13.28ms | 100.0% | 331.1ms → 317.8ms | 261 → 251 | `inferFromTypes` | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |

##### `checkObjectLiteral` (`./node_modules/typescript/lib/typescript.js:76097:30`)

|  Change |   Delta |             % |              Time |   Samples | Callee                                | Location                                                          |
| ------: | ------: | ------------: | ----------------: | --------: | ------------------------------------- | ----------------------------------------------------------------- |
|   -2.6% | -6.83ms | 92.9% → 94.9% | 266.4ms → 259.5ms | 210 → 205 | `checkPropertyAssignment`             | `./node_modules/typescript/lib/typescript.js:81252:35 → 82547:35` |
|  -57.2% | -5.08ms |   3.1% → 1.4% |     8.9ms → 3.8ms |     7 → 3 | `getApparentTypeOfContextualType`     | `./node_modules/typescript/lib/typescript.js:74205:43 → 75488:43` |
|     new | +2.53ms |   0.0% → 0.9% |       0ms → 2.5ms |     0 → 2 | `checkGrammarObjectLiteralExpression` | `./node_modules/typescript/lib/typescript.js:91022:47`            |
|  -33.5% | -1.27ms |   1.3% → 0.9% |     3.8ms → 2.5ms |     3 → 2 | `checkExpression`                     | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
| removed | -1.27ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getPropertiesOfType`                 | `./node_modules/typescript/lib/typescript.js:60156:31`            |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|  Change |    Delta |             % |            Time | Samples | Callee     | Location                                        |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ----------------------------------------------- |
|  -35.8% | -19.09ms | 95.5% → 79.4% | 53.3ms → 34.2ms | 42 → 27 | `statSync` | `ext:deno_fs/30_fs.js:473:18`                   |
| +249.3% |  +6.33ms |  4.5% → 20.6% |   2.5ms → 8.9ms |   2 → 7 | `CFISBIS`  | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `(anonymous)` (`node:module:1050:24`)

| Change |    Delta |              % |              Time |  Samples | Callee             | Location              |
| -----: | -------: | -------------: | ----------------: | -------: | ------------------ | --------------------- |
|  -7.7% | -10.38ms | 99.1% → 100.0% | 135.7ms → 125.3ms | 107 → 99 | `(anonymous)`      | `node:module:1438:33` |
|    new |  +1.27ms |    0.0% → 1.0% |       0ms → 1.3ms |    0 → 1 | `loadNativeModule` | `node:module:2019:26` |
|  -0.2% |  -2.39µs |    0.9% → 1.0% |             1.3ms |        1 | `(anonymous)`      | `node:module:1259:35` |

##### `(anonymous)` (`node:module:1525:36`)

| Change |    Delta |      % |              Time |  Samples | Callee        | Location              |
| -----: | -------: | -----: | ----------------: | -------: | ------------- | --------------------- |
|  -8.5% | -11.65ms | 100.0% | 137.0ms → 125.3ms | 108 → 99 | `(anonymous)` | `node:module:1050:24` |

##### `require` (`node:module:1752:35`)

| Change |    Delta |      % |              Time |  Samples | Callee        | Location              |
| -----: | -------: | -----: | ----------------: | -------: | ------------- | --------------------- |
|  -8.5% | -11.65ms | 100.0% | 137.0ms → 125.3ms | 108 → 99 | `(anonymous)` | `node:module:1525:36` |

##### `(anonymous)` (`node:module:1653:37`)

| Change |    Delta |      % |              Time |  Samples | Callee         | Location              |
| -----: | -------: | -----: | ----------------: | -------: | -------------- | --------------------- |
|  -7.7% | -10.38ms | 100.0% | 135.7ms → 125.3ms | 107 → 99 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`node:module:1438:33`)

| Change |    Delta |      % |              Time |  Samples | Callee        | Location              |
| -----: | -------: | -----: | ----------------: | -------: | ------------- | --------------------- |
|  -7.7% | -10.38ms | 100.0% | 135.7ms → 125.3ms | 107 → 99 | `(anonymous)` | `node:module:1653:37` |

##### `loadMaybeCjs` (`node:module:1669:22`)

| Change |    Delta |             % |              Time |  Samples | Callee                 | Location              |
| -----: | -------: | ------------: | ----------------: | -------: | ---------------------- | --------------------- |
|  -7.9% | -10.37ms | 96.3% → 96.0% | 130.6ms → 120.3ms | 103 → 95 | `(anonymous)`          | `node:module:1622:37` |
|  -0.2% |  -0.01ms |   2.8% → 3.0% |             3.8ms |        3 | `op_require_read_file` | `<unknown>`           |

##### `(anonymous)` (`node:module:1622:37`)

| Change |   Delta |             % |              Time | Samples | Callee        | Location                                          |
| -----: | ------: | ------------: | ----------------: | ------: | ------------- | ------------------------------------------------- |
| -33.5% | -8.91ms | 20.4% → 14.7% |   26.6ms → 17.7ms | 21 → 14 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |
|  -1.4% | -1.46ms | 79.6% → 85.3% | 104.0ms → 102.5ms | 82 → 81 | `wrapSafe`    | `node:module:1596:18`                             |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

| Change |   Delta |      % |           Time | Samples | Callee     | Location                        |
| -----: | ------: | -----: | -------------: | ------: | ---------- | ------------------------------- |
| -33.5% | -3.82ms | 100.0% | 11.4ms → 7.6ms |   9 → 6 | `NotFound` | `ext:runtime/01_errors.js:7:14` |

##### `realpathSyncImpl` (`ext:deno_node/fs.ts:148:28`)

|  Change |   Delta |              % |          Time | Samples | Callee                 | Location                      |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------- | ----------------------------- |
| removed | -2.54ms |   50.0% → 0.0% |   2.5ms → 0ms |   2 → 0 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`  |
|  -50.1% | -1.27ms | 50.0% → 100.0% | 2.5ms → 1.3ms |   2 → 1 | `realPathSync`         | `ext:deno_fs/30_fs.js:280:22` |

##### `realpathSync_native` (`ext:deno_node/fs.ts:164:53`)

| Change |   Delta |      % |          Time | Samples | Callee             | Location                     |
| -----: | ------: | -----: | ------------: | ------: | ------------------ | ---------------------------- |
| -75.0% | -3.81ms | 100.0% | 5.1ms → 1.3ms |   4 → 1 | `realpathSyncImpl` | `ext:deno_node/fs.ts:148:28` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

| Change |   Delta |             % |            Time | Samples | Callee                | Location    |
| -----: | ------: | ------------: | --------------: | ------: | --------------------- | ----------- |
| -12.2% | -3.86ms | 30.5% → 27.5% | 31.7ms → 27.9ms | 25 → 22 | `op_compile_function` | `<unknown>` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|  Change |   Delta |            % |        Time | Samples | Callee | Location                                   |
| ------: | ------: | -----------: | ----------: | ------: | ------ | ------------------------------------------ |
| removed | -1.27ms | 25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `from` | `ext:deno_node/internal/buffer.mjs:328:47` |

##### `__drainNextTickAndMacrotasks` (`ext:core/01_core.js:479:40`)

| Change |   Delta |      % |  Time |       Samples | Callee       | Location                     |
| -----: | ------: | -----: | ----: | ------------: | ------------ | ---------------------------- |
|  -0.1% | -2.42ms | 100.0% | 1.95s | 1,541 → 1,542 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `wrapSafe` (`node:module:1596:18`)

| Change |   Delta |              % |              Time | Samples | Callee            | Location                       |
| -----: | ------: | -------------: | ----------------: | ------: | ----------------- | ------------------------------ |
|  -2.6% | -2.73ms | 100.0% → 98.8% | 104.0ms → 101.3ms | 82 → 80 | `compileFunction` | `ext:core/01_core.js:1100:22`  |
|    new | +1.27ms |    0.0% → 1.2% |       0ms → 1.3ms |   0 → 1 | `pathToFileURL`   | `ext:deno_node/url.ts:1337:27` |

##### `realPathSync` (`ext:deno_fs/30_fs.js:280:22`)

| Change |   Delta |      % |          Time | Samples | Callee                | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------- | ----------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `op_fs_realpath_sync` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./cpuprofile-run.mjs`) ← `op_run_microtasks` ← `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|  Change |   Delta |           % |          Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +3.80ms | 0.0% → 0.2% |   0ms → 3.8ms |   0 → 3 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +3.80ms | 0.0% → 0.2% |   0ms → 3.8ms |   0 → 3 | `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`) ← `createNormalizedTypeReference` (63796:41) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `membersRelatedToIndexInfo` (69676:39) ← `typeRelatedToIndexInfo` (69751:36) ← `indexSignaturesRelatedTo` (69735:38) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `compareTypesAssignable` (66469:34) ← `getInferredType` (71816:27) ← `getInferredTypes` (71853:28) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new | +3.80ms | 0.0% → 0.2% |   0ms → 3.8ms |   0 → 3 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new | +3.80ms | 0.0% → 0.2% |   0ms → 3.8ms |   0 → 3 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeAssignableTo` (66481:30) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `isGenericMappedType` (61325:31) ← `shouldDeferIndexType` (64600:32) ← `getIndexType` (64603:24) ← `getTypeFromTypeOperatorNode` (64615:39) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `getDeclaredTypeOfTypeAlias` (60102:38) ← `tryGetDeclaredTypeOfSymbol` (60200:38) ← `getDeclaredTypeOfSymbol` (60197:35) ← `getTypeFromTypeAliasReference` (62903:41) ← `getTypeReferenceType` (63005:32) ← `getTypeFromTypeReference` (63179:36) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +299.2% | +3.80ms | 0.1% → 0.2% | 1.3ms → 5.1ms |   1 → 4 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +99.6% | +3.79ms | 0.2% → 0.4% | 3.8ms → 7.6ms |   3 → 6 | `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js:61994:29`) ← `createUnionOrIntersectionProperty` (61753:45) ← `getUnionOrIntersectionProperty` (61892:42) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `internIdentifier` (`./node_modules/typescript/lib/typescript.js:33331:28`) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `normalizeSlashes` (`./node_modules/typescript/lib/typescript.js:9114:26`) ← `combinePaths` (9140:22) ← `loadModuleFromSpecificNodeModulesDirectory` (45536:52) ← `loadModuleFromImmediateNodeModulesDirectory` (45512:53) ← `(anonymous)` (45501:66) ← `forEachAncestorDirectory` (9347:34) ← `lookup` (45500:18) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (45486:57) ← `loadModuleFromNearestNodeModulesDirectory` (45460:51) ← `tryResolve` (44454:22) ← `nodeModuleNameResolverWorker` (44376:38) ← `nodeModuleNameResolver` (44345:32) ← `resolveModuleName` (44061:27) ← `resolve` (123513:14) ← `loadWithModeAwareCache` (123545:32) ← `actualResolveModuleNamesWorker` (123915:38) ← `resolveModuleNamesWorker` (124295:36) ← `resolveModuleNamesReusingOldState` (124396:45) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `withJSDoc` (`./node_modules/typescript/lib/typescript.js:32743:21`) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124077:30) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `forEachChild` (`./node_modules/typescript/lib/typescript.js:32289:22`) ← `getNodeAtPosition` (125436:31) ← `collectDynamicImportOrRequireOrJsDocImportCalls` (125394:61) ← `collectExternalModuleReferences` (125324:43) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `op_fs_read_file_sync` ← `readFileSync` (`ext:deno_node/fs.ts:399:24`) ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js:8751:28`) ← `readFile` (8776:22) ← `readFile` (123140:15) ← `(anonymous)` (123127:40) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`) ← `applyToReturnTypes` (70758:30) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `isRelatedToWorker2` (69638:34) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `membersRelatedToIndexInfo` (69676:39) ← `typeRelatedToIndexInfo` (69751:36) ← `indexSignaturesRelatedTo` (69735:38) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `compareTypesAssignable` (66469:34) ← `getInferredType` (71816:27) ← `getInferredTypes` (71853:28) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `resolveExternalModuleSymbol` (`./node_modules/typescript/lib/typescript.js:53263:39`) ← `resolveESModuleSymbol` (53296:33) ← `getExternalModuleMember` (52403:35) ← `getTargetOfImportSpecifier` (52508:38) ← `getTargetOfAliasDeclaration` (52616:39) ← `resolveAlias` (52662:24) ← `checkAliasSymbol` (87725:28) ← `checkImportBinding` (87855:30) ← `forEach` (2378:17) ← `checkImportDeclaration` (87896:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `markAliasReferenced` (`./node_modules/typescript/lib/typescript.js:74157:31`) ← `checkIdentifier` (74242:27) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `inferFromMatchingTypes` (`./node_modules/typescript/lib/typescript.js:71402:36`) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromTypes` (71184:28) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `getSpreadArgumentType` (78015:33) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `getQuickTypeOfExpression` (82726:36) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |
|     new | +2.53ms | 0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `checkIdentifier` (`./node_modules/typescript/lib/typescript.js:74242:27`) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `getQuickTypeOfExpression` (82726:36) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./cpuprofile-run.mjs`) ← `op_run_microtasks` ← `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|  Change |   Delta |           % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | ------: | ----------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -83.4% | -6.34ms | 0.4% → 0.1% |   7.6ms → 1.3ms |   6 → 1 | `__export` (`./node_modules/typescript/lib/typescript.js:22:16`) ← `(anonymous)` (16:15) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -5.07ms | 0.2% → 0.0% |     5.1ms → 0ms |   4 → 0 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `membersRelatedToIndexInfo` (68416:39) ← `typeRelatedToIndexInfo` (68491:36) ← `indexSignaturesRelatedTo` (68475:38) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `compareTypesAssignable` (65209:34) ← `getInferredType` (70533:27) ← `getInferredTypes` (70570:28) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -12.2% | -3.86ms | 1.5% → 1.3% | 31.7ms → 27.9ms | 25 → 22 | `op_compile_function` ← `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -3.81ms | 0.2% → 0.0% |     3.8ms → 0ms |   3 → 0 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromTypes` (69901:28) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `getSpreadArgumentType` (76720:33) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `getQuickTypeOfExpression` (81431:36) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                               |
|  -33.5% | -2.55ms | 0.4% → 0.2% |   7.6ms → 5.1ms |   6 → 4 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |
|  -50.1% | -2.54ms | 0.2% → 0.1% |   5.1ms → 2.5ms |   4 → 2 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -66.7% | -2.54ms | 0.2% → 0.1% |   3.8ms → 1.3ms |   3 → 1 | `op_fs_stat_sync` ← `statSync` (`ext:deno_fs/30_fs.js:473:18`) ← `statSync` (`ext:deno_node/fs.ts:97:20`) ← `statSync` (`./node_modules/typescript/lib/typescript.js:8631:22`) ← `fileSystemEntryExists` (8847:35) ← `directoryExists` (8872:29) ← `directoryExists` (123142:22) ← `directoryProbablyExists` (20949:33) ← `loadModuleFromImmediateNodeModulesDirectory` (45512:53) ← `(anonymous)` (45501:66) ← `forEachAncestorDirectory` (9347:34) ← `lookup` (45500:18) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (45486:57) ← `loadModuleFromNearestNodeModulesDirectory` (45460:51) ← `tryResolve` (44454:22) ← `nodeModuleNameResolverWorker` (44376:38) ← `nodeModuleNameResolver` (44345:32) ← `resolveModuleName` (44061:27) ← `resolve` (123513:14) ← `loadWithModeAwareCache` (123545:32) ← `actualResolveModuleNamesWorker` (123915:38) ← `resolveModuleNamesWorker` (124295:36) ← `resolveModuleNamesReusingOldState` (124396:45) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -66.7% | -2.54ms | 0.2% → 0.1% |   3.8ms → 1.3ms |   3 → 1 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -66.7% | -2.54ms | 0.2% → 0.1% |   3.8ms → 1.3ms |   3 → 1 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -66.7% | -2.54ms | 0.2% → 0.1% |   3.8ms → 1.3ms |   3 → 1 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -66.7% | -2.54ms | 0.2% → 0.1% |   3.8ms → 1.3ms |   3 → 1 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `isRelatedToWorker2` (69638:34) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `membersRelatedToIndexInfo` (69676:39) ← `typeRelatedToIndexInfo` (69751:36) ← `indexSignaturesRelatedTo` (69735:38) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `compareTypesAssignable` (66469:34) ← `getInferredType` (71816:27) ← `getInferredTypes` (71853:28) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                        |
|  -66.7% | -2.54ms | 0.2% → 0.1% |   3.8ms → 1.3ms |   3 → 1 | `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `checkTypeAssignableTo` (66493:33) ← `checkTypeArgumentConstraints` (83481:40) ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` (88652:25) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkTypeAliasDeclaration` (87285:37) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -2.54ms | 0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `op_fs_read_file_sync` ← `readFileSync` (`ext:deno_node/fs.ts:399:24`) ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js:8722:28`) ← `readFile` (8747:22) ← `readFile` (121562:15) ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -2.54ms | 0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `op_fs_read_file_sync` ← `readFileSync` (`ext:deno_node/fs.ts:399:24`) ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js:8722:28`) ← `readFile` (8747:22) ← `readFile` (121562:15) ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -2.54ms | 0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `NotFound` (`ext:runtime/01_errors.js:7:14`) ← `(anonymous)` (`ext:core/00_infra.js:127:37`) ← `buildCustomError` (94:28) ← `op_fs_stat_sync` ← `statSync` (`ext:deno_fs/30_fs.js:473:18`) ← `statSync` (`ext:deno_node/fs.ts:97:20`) ← `statSync` (`./node_modules/typescript/lib/typescript.js:8602:22`) ← `fileSystemEntryExists` (8818:35) ← `directoryExists` (8843:29) ← `directoryExists` (121564:22) ← `directoryProbablyExists` (19966:33) ← `loadNodeModuleFromDirectoryWorker` (43730:43) ← `loader` (44365:18) ← `loadModuleFromSpecificNodeModulesDirectory` (44343:52) ← `loadModuleFromImmediateNodeModulesDirectory` (44319:53) ← `(anonymous)` (44308:66) ← `forEachAncestorDirectory` (9318:34) ← `lookup` (44307:18) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (44293:57) ← `loadModuleFromNearestNodeModulesDirectory` (44267:51) ← `tryResolve` (43261:22) ← `nodeModuleNameResolverWorker` (43183:38) ← `nodeModuleNameResolver` (43152:32) ← `resolveModuleName` (42868:27) ← `resolveLibrary` (42855:24) ← `actualResolveLibrary` (122384:28) ← `pathForLibFileWorker` (124310:32) ← `pathForLibFile` (124302:26) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (124350:42) ← `forEach` (2365:17) ← `processLibReferenceDirectives` (124349:41) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                             |
| removed | -2.54ms | 0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `scanIdentifier` (`./node_modules/typescript/lib/typescript.js:13250:26`) ← `scan` (12765:16) ← `nextTokenWithoutCheck` (31953:33) ← `nextToken` (31960:21) ← `isTypeMemberStart` (33515:29) ← `speculationHelper` (13583:29) ← `lookAhead` (13622:21) ← `speculationHelper` (31996:29) ← `lookAhead` (32012:21) ← `isListElement2` (32423:26) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -2.54ms | 0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `scanString` (`./node_modules/typescript/lib/typescript.js:12396:22`) ← `scan` (12765:16) ← `nextTokenWithoutCheck` (31953:33) ← `nextToken` (31960:21) ← `parseOptional` (32161:25) ← `parseUnionOrIntersectionType` (34000:40) ← `parseUnionTypeOrHigher` (34017:34) ← `parseType` (34098:21) ← `parseParenthesizedType` (33687:34) ← `parseNonArrayType` (33781:29) ← `parsePostfixTypeOrHigher` (33903:36) ← `doOutsideOfContext` (31838:30) ← `allowConditionalTypesAnd` (31880:36) ← `parseTypeOperatorOrHigher` (33974:37) ← `parseUnionOrIntersectionType` (34000:40) ← `parseIntersectionTypeOrHigher` (34014:41) ← `parseUnionOrIntersectionType` (34000:40) ← `parseUnionTypeOrHigher` (34017:34) ← `parseType` (34098:21) ← `parseTypeAnnotation` (34117:31) ← `parseVariableDeclaration` (36207:36) ← `parseVariableDeclarationAllowExclamation` (36201:52) ← `parseListElement` (32639:28) ← `parseDelimitedList` (32875:30) ← `parseVariableDeclarationList` (36220:40) ← `parseVariableStatement` (36261:34) ← `parseDeclarationWorker` (36069:34) ← `(anonymous)` (36056:56) ← `doInsideOfContext` (31856:29) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -2.54ms | 0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `createTypeChecker` (`./node_modules/typescript/lib/typescript.js:48842:27`) ← `getTypeChecker` (123266:26) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -2.54ms | 0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -2.54ms | 0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:69901:28`) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                 |
