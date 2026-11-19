# CPU profile diff

Took 5.54s → 5.66s (+119.06ms, +2.1%) over 4,139 → 4,196 samples (1.3ms per sample).

| Category           |  Change |     Delta |             % |              Time |       Samples |
| ------------------ | ------: | --------: | ------------: | ----------------: | ------------: |
| Third-party        |   +3.4% | +167.36ms | 89.8% → 90.9% |     4.98s → 5.14s | 3,717 → 3,813 |
| Native             |   -1.4% |   -5.28ms |   6.7% → 6.4% | 369.4ms → 364.1ms |     276 → 270 |
| Standard library   |  -30.0% |  -43.41ms |   2.6% → 1.8% | 144.6ms → 101.1ms |      108 → 75 |
| Regular expression |   +9.4% |   +4.40ms |   0.8% → 0.9% |   46.8ms → 51.2ms |       35 → 38 |
| Unknown            | removed |   -4.02ms |   0.1% → 0.0% |       4.0ms → 0ms |         3 → 0 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 5.50s → 5.65s (99.3% → 99.8%) typeCheckProject at ./tsc-workload.mjs:3:33
│   ├── … 4.39s → 4.53s (79.3% → 80.1%) (anonymous) at ./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37
│   │   ├── … 4.11s → 4.24s (74.1% → 74.9%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33
│   │   │   ├── 2.29s → 2.37s (41.3% → 41.9%) checkDeferredNodes at 87179:30 → 88492:30
│   │   │   │   └── 2.29s → 2.37s (41.3% → 41.9%) forEach
│   │   │   │       └── 2.25s → 2.33s (40.5% → 41.3%) checkDeferredNode at ./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29
│   │   │   │           └── 2.24s → 2.33s (40.5% → 41.1%) checkFunctionExpressionOrObjectLiteralMethodDeferred at 79840:64 → 81135:64
│   │   │   │               ├── 2.20s → 2.29s (39.8% → 40.5%) checkSourceElement at 86886:30 → 88199:30
│   │   │   │               │   └── … 2.20s → 2.29s (39.8% → 40.5%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36
│   │   │   │               │       ├── … 655.9ms → 656.8ms (11.8% → 11.6%) checkExpressionWorker at ./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33
│   │   │   │               │       │   ├── 111.1ms → 85.0ms (2.0% → 1.5%) checkIdentifier at 72959:27 → 74242:27
│   │   │   │               │       │   │   ├── 57.6ms → 24.3ms (1.0% → 0.4%, self 0.7% → <0.1%) getFlowTypeOfReference at 71634:34 → 72917:34
│   │   │   │               │       │   │   └── 46.8ms → 58.0ms (0.8% → 1.0%) 14 more callees, led by (0.3% → 0.5%) getResolvedSymbol at 70627:29 → 71910:29
│   │   │   │               │       │   └── 538.1ms → 569.1ms (9.7% → 10.1%) 14 more callees, led by (6.2% → 6.5%) checkCallExpression at 78289:31 → 79584:31
│   │   │   │               │       └── 1.54s → 1.62s (27.8% → 28.7%) 25 more callees, led by (20.1% → 21.2%) checkVariableDeclaration at 84101:36 → 85396:36
│   │   │   │               └── 38.8ms → 33.7ms (0.7% → 0.6%) 3 more callees, led by (0.6% → 0.5%) getReturnTypeOfSignature at 61207:36 → 62462:36
│   │   │   └── 1.81s → 1.86s (32.6% → 32.9%) forEach at 2365:17 → 2378:17
│   │   │       ├── … 1.74s → 1.81s (31.5% → 31.9%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30
│   │   │       │   └── … 1.74s → 1.81s (31.4% → 31.9%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36
│   │   │       │       ├── 523.3ms → 562.4ms (9.4% → 9.9%) checkVariableDeclaration at 84101:36 → 85396:36
│   │   │       │       │   └── 523.3ms → 558.3ms (9.4% → 9.9%) checkVariableLikeDeclaration at 83907:40 → 85202:40
│   │   │       │       │       ├── 472.5ms → 499.0ms (8.5% → 8.8%) getTypeOfSymbol at 58408:27 → 59663:27
│   │   │       │       │       │   ├── … 416.3ms → 434.3ms (7.5% → 7.7%) checkDeclarationInitializer at ./node_modules/typescript/lib/typescript.js:81169:39 → 82464:39
│   │   │       │       │       │   │   └── … 393.5ms → 400.6ms (7.1%) checkExpressionWorker at ./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33
│   │   │       │       │       │   │       ├── … 327.9ms → 337.2ms (5.9% → 6.0%) resolveCallExpression at ./node_modules/typescript/lib/typescript.js:77689:33 → 78984:33
│   │   │       │       │       │   │       │   └── … 309.2ms → 316.9ms (5.6%) inferTypeArguments at ./node_modules/typescript/lib/typescript.js:76656:30 → 77951:30
│   │   │       │       │       │   │       │       ├── 170.0ms → 178.0ms (3.1%) inferTypes at 69892:22 → 71175:22
│   │   │       │       │       │   │       │       │   └── 170.0ms → 176.7ms (3.1%, self 0.8% → 1.1% globally) inferFromTypes at 69901:28 → 71184:28
│   │   │       │       │       │   │       │       │       ├── … 1.3ms → 6.7ms (<0.1% → 0.1%, self 0.9% → 0.5% globally) getApparentType at ./node_modules/typescript/lib/typescript.js:60490:27 → 61745:27
│   │   │       │       │       │   │       │       │       └── 157.9ms → 157.8ms (2.9% → 2.8%) 7 more callees, led by (2.0% → 2.1%) inferFromMatchingTypes at ./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36
│   │   │       │       │       │   │       │       └── 136.5ms → 138.9ms (2.5%) 3 more callees, led by (2.4%) getInferredTypes at 70570:28 → 71853:28
│   │   │       │       │       │   │       └── 38.8ms → 36.4ms (0.7% → 0.6%) 10 more callees, led by (0.1% → 0.2%) checkIdentifier at 72959:27 → 74242:27
│   │   │       │       │       │   └── 38.8ms → 48.6ms (0.7% → 0.9%) 6 more callees, led by (0.5% → 0.7%) getTypeOfInstantiatedSymbol at ./node_modules/typescript/lib/typescript.js:58351:39 → 59606:39
│   │   │       │       │       └── 50.9ms → 58.0ms (0.9% → 1.0%) 7 more callees, led by (0.6% → 0.7%) checkExpressionCached at 81145:33 → 82440:33
│   │   │       │       └── 1.21s → 1.24s (21.9%) 32 more callees, led by (9.7% → 9.3%) checkTypeReferenceNode at 82223:34 → 83518:34
│   │   │       └── 64.2ms → 49.9ms (1.2% → 0.9%) 8 more callees, led by (0.7% → 0.5%) checkParameter at ./node_modules/typescript/lib/typescript.js:81674:26 → 82969:26
│   │   └── 278.4ms → 288.6ms (5.0% → 5.1%) getTypeChecker at 123266:26 → 124848:26
│   │       └── 278.4ms → 288.6ms (5.0% → 5.1%) createTypeChecker at 48842:27 → 50070:27 …
│   └── 1.10s → 1.11s (19.9% → 19.6%) 5 more callees, led by (13.5%) createProgram at ./node_modules/typescript/lib/typescript.js:122262:23 → 123840:23
└── … 8.0ms → 0ms (0.1% → 0.0%) fetch
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |           % |            Time | Samples | Function                          | Location                                                          |
| ------: | -------: | ----------: | --------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
|  +51.1% | +21.90ms | 0.8% → 1.1% | 42.8ms → 64.7ms | 32 → 48 | `inferFromTypes`                  | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
|  +75.0% | +19.07ms | 0.5% → 0.8% | 25.4ms → 44.5ms | 19 → 33 | `getReducedType`                  | `./node_modules/typescript/lib/typescript.js:60678:26 → 61933:26` |
| +437.4% | +17.56ms | 0.1% → 0.4% |  4.0ms → 21.6ms |  3 → 16 | `isTupleType`                     | `./node_modules/typescript/lib/typescript.js:69093:23 → 70353:23` |
|  +87.1% | +16.33ms | 0.3% → 0.6% | 18.7ms → 35.1ms | 14 → 26 | `shouldNormalizeIntersection`     | `./node_modules/typescript/lib/typescript.js:66169:39 → 67429:39` |
| +101.5% | +16.31ms | 0.3% → 0.6% | 16.1ms → 32.4ms | 12 → 24 | `getTypeFactsWorker`              | `./node_modules/typescript/lib/typescript.js:70941:30 → 72224:30` |
|  +60.0% | +13.66ms | 0.4% → 0.6% | 22.8ms → 36.4ms | 17 → 27 | `getReducedApparentType`          | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34` |
|  +33.1% | +12.42ms | 0.7% → 0.9% | 37.5ms → 49.9ms | 28 → 37 | `scan`                            | `./node_modules/typescript/lib/typescript.js:12765:16 → 12895:16` |
|  +37.0% | +12.39ms | 0.6% → 0.8% | 33.5ms → 45.9ms | 25 → 34 | `getNormalizedType`               | `./node_modules/typescript/lib/typescript.js:66148:29 → 67408:29` |
|     new | +12.14ms | 0.0% → 0.2% |    0ms → 12.1ms |   0 → 9 | `TypeObject`                      | `./node_modules/typescript/lib/typescript.js:148564:14`           |
|  +22.5% | +11.17ms | 0.9% → 1.1% | 49.5ms → 60.7ms | 37 → 45 | `structuredTypeRelatedToWorker`   | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |
|  +58.3% | +10.93ms | 0.3% → 0.5% | 18.7ms → 29.7ms | 14 → 22 | `declareSymbol`                   | `./node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
| +115.9% | +10.86ms | 0.2% → 0.4% |  9.4ms → 20.2ms |  7 → 15 | `scanJSDocCommentTextToken`       | `./node_modules/typescript/lib/typescript.js:13476:37 → 14434:37` |
|  +42.3% |  +9.61ms | 0.4% → 0.6% | 22.8ms → 32.4ms | 17 → 24 | `instantiateTypeWorker`           | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|  +47.8% |  +9.59ms | 0.4% → 0.5% | 20.1ms → 29.7ms | 15 → 22 | `getSymbolLinks`                  | `./node_modules/typescript/lib/typescript.js:50252:26 → 51493:26` |
|  +51.1% |  +9.58ms | 0.3% → 0.5% | 18.7ms → 28.3ms | 14 → 21 | `resolveStructuredTypeMembers`    | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  +59.5% |  +9.56ms | 0.3% → 0.5% | 16.1ms → 25.6ms | 12 → 19 | `createNodeArray`                 | `./node_modules/typescript/lib/typescript.js:23794:27 → 24844:27` |
| +118.3% |  +9.50ms | 0.1% → 0.3% |  8.0ms → 17.5ms |  6 → 13 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |
| +118.3% |  +9.50ms | 0.1% → 0.3% |  8.0ms → 17.5ms |  6 → 13 | `getUnionType`                    | `./node_modules/typescript/lib/typescript.js:62840:24 → 64095:24` |
| +235.9% |  +9.47ms | 0.1% → 0.2% |  4.0ms → 13.5ms |  3 → 10 | `createSymbolTable`               | `./node_modules/typescript/lib/typescript.js:15264:27 → 16239:27` |
|  +29.6% |  +8.31ms | 0.5% → 0.6% | 28.1ms → 36.4ms | 21 → 27 | `readFileSync`                    | `<unknown>`                                                       |

##### Third-party

|  Change |    Delta |           % |            Time | Samples | Function                          | Location                                                          |
| ------: | -------: | ----------: | --------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
|  +51.1% | +21.90ms | 0.8% → 1.1% | 42.8ms → 64.7ms | 32 → 48 | `inferFromTypes`                  | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
|  +75.0% | +19.07ms | 0.5% → 0.8% | 25.4ms → 44.5ms | 19 → 33 | `getReducedType`                  | `./node_modules/typescript/lib/typescript.js:60678:26 → 61933:26` |
| +437.4% | +17.56ms | 0.1% → 0.4% |  4.0ms → 21.6ms |  3 → 16 | `isTupleType`                     | `./node_modules/typescript/lib/typescript.js:69093:23 → 70353:23` |
|  +87.1% | +16.33ms | 0.3% → 0.6% | 18.7ms → 35.1ms | 14 → 26 | `shouldNormalizeIntersection`     | `./node_modules/typescript/lib/typescript.js:66169:39 → 67429:39` |
| +101.5% | +16.31ms | 0.3% → 0.6% | 16.1ms → 32.4ms | 12 → 24 | `getTypeFactsWorker`              | `./node_modules/typescript/lib/typescript.js:70941:30 → 72224:30` |
|  +60.0% | +13.66ms | 0.4% → 0.6% | 22.8ms → 36.4ms | 17 → 27 | `getReducedApparentType`          | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34` |
|  +33.1% | +12.42ms | 0.7% → 0.9% | 37.5ms → 49.9ms | 28 → 37 | `scan`                            | `./node_modules/typescript/lib/typescript.js:12765:16 → 12895:16` |
|  +37.0% | +12.39ms | 0.6% → 0.8% | 33.5ms → 45.9ms | 25 → 34 | `getNormalizedType`               | `./node_modules/typescript/lib/typescript.js:66148:29 → 67408:29` |
|     new | +12.14ms | 0.0% → 0.2% |    0ms → 12.1ms |   0 → 9 | `TypeObject`                      | `./node_modules/typescript/lib/typescript.js:148564:14`           |
|  +22.5% | +11.17ms | 0.9% → 1.1% | 49.5ms → 60.7ms | 37 → 45 | `structuredTypeRelatedToWorker`   | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |
|  +58.3% | +10.93ms | 0.3% → 0.5% | 18.7ms → 29.7ms | 14 → 22 | `declareSymbol`                   | `./node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
| +115.9% | +10.86ms | 0.2% → 0.4% |  9.4ms → 20.2ms |  7 → 15 | `scanJSDocCommentTextToken`       | `./node_modules/typescript/lib/typescript.js:13476:37 → 14434:37` |
|  +42.3% |  +9.61ms | 0.4% → 0.6% | 22.8ms → 32.4ms | 17 → 24 | `instantiateTypeWorker`           | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|  +47.8% |  +9.59ms | 0.4% → 0.5% | 20.1ms → 29.7ms | 15 → 22 | `getSymbolLinks`                  | `./node_modules/typescript/lib/typescript.js:50252:26 → 51493:26` |
|  +51.1% |  +9.58ms | 0.3% → 0.5% | 18.7ms → 28.3ms | 14 → 21 | `resolveStructuredTypeMembers`    | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  +59.5% |  +9.56ms | 0.3% → 0.5% | 16.1ms → 25.6ms | 12 → 19 | `createNodeArray`                 | `./node_modules/typescript/lib/typescript.js:23794:27 → 24844:27` |
| +118.3% |  +9.50ms | 0.1% → 0.3% |  8.0ms → 17.5ms |  6 → 13 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |
| +118.3% |  +9.50ms | 0.1% → 0.3% |  8.0ms → 17.5ms |  6 → 13 | `getUnionType`                    | `./node_modules/typescript/lib/typescript.js:62840:24 → 64095:24` |
| +235.9% |  +9.47ms | 0.1% → 0.2% |  4.0ms → 13.5ms |  3 → 10 | `createSymbolTable`               | `./node_modules/typescript/lib/typescript.js:15264:27 → 16239:27` |
|  +47.3% |  +8.22ms | 0.3% → 0.5% | 17.4ms → 25.6ms | 13 → 19 | `maybeTypeOfKind`                 | `./node_modules/typescript/lib/typescript.js:80168:27 → 81463:27` |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function             | Location    |
| ------: | ------: | -----------: | --------------: | ------: | -------------------- | ----------- |
|  +29.6% | +8.31ms |  0.5% → 0.6% | 28.1ms → 36.4ms | 21 → 27 | `readFileSync`       | `<unknown>` |
|  +24.5% | +5.57ms |  0.4% → 0.5% | 22.8ms → 28.3ms | 17 → 21 | `statSync`           | `<unknown>` |
| +101.5% | +4.08ms |         0.1% |   4.0ms → 8.1ms |   3 → 6 | `SymbolLinks`        | `<unknown>` |
|  +51.1% | +1.37ms | <0.1% → 0.1% |   2.7ms → 4.0ms |   2 → 3 | `realpathNativeSync` | `<unknown>` |
| +101.5% | +1.36ms |        <0.1% |   1.3ms → 2.7ms |   1 → 2 | `parseModule`        | `<unknown>` |
|     new | +1.35ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `generatorResume`    | `<unknown>` |

##### Standard library

|  Change |   Delta |            % |            Time | Samples | Function      | Location           |
| ------: | ------: | -----------: | --------------: | ------: | ------------- | ------------------ |
| +101.5% | +6.79ms |  0.1% → 0.2% |  6.7ms → 13.5ms |  5 → 10 | `set`         | `<unknown>`        |
| +202.3% | +5.42ms | <0.1% → 0.1% |   2.7ms → 8.1ms |   2 → 6 | `next`        | `<unknown>`        |
|     new | +4.05ms |  0.0% → 0.1% |     0ms → 4.0ms |   0 → 3 | `map`         | `<unknown>`        |
| +101.5% | +2.72ms | <0.1% → 0.1% |   2.7ms → 5.4ms |   2 → 4 | `unshift`     | `<unknown>`        |
|     new | +2.70ms | 0.0% → <0.1% |     0ms → 2.7ms |   0 → 2 | `has`         | `<unknown>`        |
|  +13.4% | +1.43ms |         0.2% | 10.7ms → 12.1ms |   8 → 9 | `get`         | `<unknown>`        |
|  +51.1% | +1.37ms | <0.1% → 0.1% |   2.7ms → 4.0ms |   2 → 3 | `filter`      | `<unknown>`        |
| +101.5% | +1.36ms |        <0.1% |   1.3ms → 2.7ms |   1 → 2 | `push`        | `<unknown>`        |
| +101.5% | +1.36ms |        <0.1% |   1.3ms → 2.7ms |   1 → 2 | `some`        | `<unknown>`        |
|     new | +1.35ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `Set`         | `<unknown>`        |
|   +0.8% | +0.01ms |        <0.1% |           1.3ms |       1 | `shift`       | `<unknown>`        |
|   +0.8% | +0.01ms |        <0.1% |           1.3ms |       1 | `test`        | `<unknown>`        |
|   +0.8% | +0.01ms |        <0.1% |           1.3ms |       1 | `(anonymous)` | `node:crypto:1:11` |
|   +0.8% | +0.01ms |        <0.1% |           1.3ms |       1 | `values`      | `<unknown>`        |
|   +0.8% | +0.01ms |        <0.1% |           1.3ms |       1 | `startsWith`  | `<unknown>`        |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |              Time |   Samples | Function                        | Location                                                          |
| ------: | -------: | -----------: | ----------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
|  -68.1% | -37.34ms |  1.0% → 0.3% |   54.9ms → 17.5ms |   41 → 13 | `getFlowTypeOfReference`        | `./node_modules/typescript/lib/typescript.js:71634:34 → 72917:34` |
|  -13.6% | -24.27ms |  3.2% → 2.7% | 178.0ms → 153.7ms | 133 → 114 | `getObjectFlags`                | `./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
|  -77.1% | -22.70ms |  0.5% → 0.1% |    29.4ms → 6.7ms |    22 → 5 | `signaturesRelatedTo`           | `./node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |
|  -45.5% | -22.55ms |  0.9% → 0.5% |   49.5ms → 27.0ms |   37 → 20 | `getApparentType`               | `./node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
|  -51.6% | -17.28ms |  0.6% → 0.3% |   33.5ms → 16.2ms |   25 → 12 | `getAliasId`                    | `./node_modules/typescript/lib/typescript.js:61521:22 → 62776:22` |
|  -73.1% | -14.68ms |  0.4% → 0.1% |    20.1ms → 5.4ms |    15 → 4 | `instantiateSignature`          | `./node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
|  -43.6% | -14.58ms |  0.6% → 0.3% |   33.5ms → 18.9ms |   25 → 14 | `setStructuredTypeMembers`      | `./node_modules/typescript/lib/typescript.js:52502:36 → 53743:36` |
|  -61.2% | -10.66ms |  0.3% → 0.1% |    17.4ms → 6.7ms |    13 → 5 | `slice`                         | `<unknown>`                                                       |
|  -46.7% | -10.62ms |  0.4% → 0.2% |   22.8ms → 12.1ms |    17 → 9 | `forEach`                       | `<unknown>`                                                       |
|  -39.5% | -10.59ms |  0.5% → 0.3% |   26.8ms → 16.2ms |   20 → 12 | `getMappedType`                 | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
|  -21.0% | -10.41ms |  0.9% → 0.7% |   49.5ms → 39.1ms |   37 → 29 | `couldContainTypeVariables`     | `./node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |
|  -16.8% | -10.32ms |  1.1% → 0.9% |   61.6ms → 51.2ms |   46 → 38 | `getRelationKey`                | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
| removed |  -9.37ms |  0.2% → 0.0% |       9.4ms → 0ms |     7 → 0 | `fetch`                         | `<unknown>`                                                       |
|  -77.6% |  -9.35ms | 0.2% → <0.1% |    12.0ms → 2.7ms |     9 → 2 | `isBinaryExpression`            | `./node_modules/typescript/lib/typescript.js:29192:28 → 30242:28` |
|  -63.4% |  -9.33ms |  0.3% → 0.1% |    14.7ms → 5.4ms |    11 → 4 | `join`                          | `<unknown>`                                                       |
|  -53.5% |  -9.31ms |  0.3% → 0.1% |    17.4ms → 8.1ms |    13 → 6 | `getConditionalFlowTypeOfType`  | `./node_modules/typescript/lib/typescript.js:61824:40 → 63079:40` |
|   -3.0% |  -8.62ms |  5.1% → 4.9% | 285.1ms → 276.5ms | 213 → 205 | `anonymous`                     | `<unknown>`                                                       |
|  -85.6% |  -8.02ms | 0.2% → <0.1% |     9.4ms → 1.3ms |     7 → 1 | `length`                        | `./node_modules/typescript/lib/typescript.js:2362:16 → 2375:16`   |
|  -66.4% |  -8.00ms |  0.2% → 0.1% |    12.0ms → 4.0ms |     9 → 3 | `getSymbolFlags`                | `./node_modules/typescript/lib/typescript.js:51447:26 → 52688:26` |
|  -59.7% |  -7.99ms |  0.2% → 0.1% |    13.4ms → 5.4ms |    10 → 4 | `getSignaturesOfStructuredType` | `./node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |

##### Third-party

|  Change |    Delta |            % |              Time |   Samples | Function                                       | Location                                                          |
| ------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------- | ----------------------------------------------------------------- |
|  -68.1% | -37.34ms |  1.0% → 0.3% |   54.9ms → 17.5ms |   41 → 13 | `getFlowTypeOfReference`                       | `./node_modules/typescript/lib/typescript.js:71634:34 → 72917:34` |
|  -13.6% | -24.27ms |  3.2% → 2.7% | 178.0ms → 153.7ms | 133 → 114 | `getObjectFlags`                               | `./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
|  -77.1% | -22.70ms |  0.5% → 0.1% |    29.4ms → 6.7ms |    22 → 5 | `signaturesRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |
|  -45.5% | -22.55ms |  0.9% → 0.5% |   49.5ms → 27.0ms |   37 → 20 | `getApparentType`                              | `./node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
|  -51.6% | -17.28ms |  0.6% → 0.3% |   33.5ms → 16.2ms |   25 → 12 | `getAliasId`                                   | `./node_modules/typescript/lib/typescript.js:61521:22 → 62776:22` |
|  -73.1% | -14.68ms |  0.4% → 0.1% |    20.1ms → 5.4ms |    15 → 4 | `instantiateSignature`                         | `./node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
|  -43.6% | -14.58ms |  0.6% → 0.3% |   33.5ms → 18.9ms |   25 → 14 | `setStructuredTypeMembers`                     | `./node_modules/typescript/lib/typescript.js:52502:36 → 53743:36` |
|  -39.5% | -10.59ms |  0.5% → 0.3% |   26.8ms → 16.2ms |   20 → 12 | `getMappedType`                                | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
|  -21.0% | -10.41ms |  0.9% → 0.7% |   49.5ms → 39.1ms |   37 → 29 | `couldContainTypeVariables`                    | `./node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |
|  -16.8% | -10.32ms |  1.1% → 0.9% |   61.6ms → 51.2ms |   46 → 38 | `getRelationKey`                               | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
|  -77.6% |  -9.35ms | 0.2% → <0.1% |    12.0ms → 2.7ms |     9 → 2 | `isBinaryExpression`                           | `./node_modules/typescript/lib/typescript.js:29192:28 → 30242:28` |
|  -53.5% |  -9.31ms |  0.3% → 0.1% |    17.4ms → 8.1ms |    13 → 6 | `getConditionalFlowTypeOfType`                 | `./node_modules/typescript/lib/typescript.js:61824:40 → 63079:40` |
|  -85.6% |  -8.02ms | 0.2% → <0.1% |     9.4ms → 1.3ms |     7 → 1 | `length`                                       | `./node_modules/typescript/lib/typescript.js:2362:16 → 2375:16`   |
|  -66.4% |  -8.00ms |  0.2% → 0.1% |    12.0ms → 4.0ms |     9 → 3 | `getSymbolFlags`                               | `./node_modules/typescript/lib/typescript.js:51447:26 → 52688:26` |
|  -59.7% |  -7.99ms |  0.2% → 0.1% |    13.4ms → 5.4ms |    10 → 4 | `getSignaturesOfStructuredType`                | `./node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |
|  -45.7% |  -7.96ms |  0.3% → 0.2% |    17.4ms → 9.4ms |    13 → 7 | `getTypeOfSymbol`                              | `./node_modules/typescript/lib/typescript.js:58408:27 → 59663:27` |
| removed |  -6.69ms |  0.1% → 0.0% |       6.7ms → 0ms |     5 → 0 | `findIndex`                                    | `./node_modules/typescript/lib/typescript.js:2471:19 → 2484:19`   |
|  -83.2% |  -6.68ms | 0.1% → <0.1% |     8.0ms → 1.3ms |     6 → 1 | `createBaseIdentifier`                         | `./node_modules/typescript/lib/typescript.js:23922:32 → 24972:32` |
|  -83.2% |  -6.68ms | 0.1% → <0.1% |     8.0ms → 1.3ms |     6 → 1 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |
|  -49.6% |  -6.64ms |  0.2% → 0.1% |    13.4ms → 6.7ms |    10 → 5 | `bindWorker`                                   | `./node_modules/typescript/lib/typescript.js:46663:22 → 47856:22` |

##### Native

|  Change |   Delta |            % |              Time |   Samples | Function                | Location    |
| ------: | ------: | -----------: | ----------------: | --------: | ----------------------- | ----------- |
| removed | -9.37ms |  0.2% → 0.0% |       9.4ms → 0ms |     7 → 0 | `fetch`                 | `<unknown>` |
|   -3.0% | -8.62ms |  5.1% → 4.9% | 285.1ms → 276.5ms | 213 → 205 | `anonymous`             | `<unknown>` |
| removed | -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `loadAndEvaluateModule` | `<unknown>` |
| removed | -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `writer`                | `<unknown>` |
| removed | -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `stream`                | `<unknown>` |
| removed | -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createRequire`         | `<unknown>` |
| removed | -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `max`                   | `<unknown>` |
| removed | -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `readdirSync`           | `<unknown>` |
|  -16.0% | -1.29ms |         0.1% |     8.0ms → 6.7ms |     6 → 5 | `stringSplitFast`       | `<unknown>` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function      | Location           |
| ------: | -------: | -----------: | --------------: | ------: | ------------- | ------------------ |
|  -61.2% | -10.66ms |  0.3% → 0.1% |  17.4ms → 6.7ms |  13 → 5 | `slice`       | `<unknown>`        |
|  -46.7% | -10.62ms |  0.4% → 0.2% | 22.8ms → 12.1ms |  17 → 9 | `forEach`     | `<unknown>`        |
|  -63.4% |  -9.33ms |  0.3% → 0.1% |  14.7ms → 5.4ms |  11 → 4 | `join`        | `<unknown>`        |
| removed |  -4.02ms |  0.1% → 0.0% |     4.0ms → 0ms |   3 → 0 | `trimEnd`     | `<unknown>`        |
|  -74.8% |  -4.01ms | 0.1% → <0.1% |   5.4ms → 1.3ms |   4 → 1 | `lastIndexOf` | `<unknown>`        |
| removed |  -2.68ms | <0.1% → 0.0% |     2.7ms → 0ms |   2 → 0 | `resolve`     | `<unknown>`        |
| removed |  -2.68ms | <0.1% → 0.0% |     2.7ms → 0ms |   2 → 0 | `substring`   | `<unknown>`        |
| removed |  -2.68ms | <0.1% → 0.0% |     2.7ms → 0ms |   2 → 0 | `trimStart`   | `<unknown>`        |
| removed |  -2.68ms | <0.1% → 0.0% |     2.7ms → 0ms |   2 → 0 | `replace`     | `<unknown>`        |
| removed |  -2.68ms | <0.1% → 0.0% |     2.7ms → 0ms |   2 → 0 | `indexOf`     | `<unknown>`        |
|  -66.4% |  -2.67ms | 0.1% → <0.1% |   4.0ms → 1.3ms |   3 → 1 | `find`        | `<unknown>`        |
|  -66.4% |  -2.67ms | 0.1% → <0.1% |   4.0ms → 1.3ms |   3 → 1 | `Map`         | `<unknown>`        |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `bind`        | `<unknown>`        |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)` | `node:events:1:11` |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `RegExp`      | `<unknown>`        |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `delete`      | `<unknown>`        |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `exec`        | `<unknown>`        |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `includes`    | `<unknown>`        |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `charCodeAt`  | `<unknown>`        |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `splice`      | `<unknown>`        |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +303.0% | +8.11ms |  6.2% → 16.7% |  2.7ms → 10.8ms |   2 → 8 | `./node_modules/typescript/lib/typescript.js:70068 → 71351` |
|  +45.5% | +5.49ms | 28.1% → 27.1% | 12.0ms → 17.5ms |  9 → 13 | `./node_modules/typescript/lib/typescript.js:69902 → 71185` |
| +101.5% | +4.08ms |  9.4% → 12.5% |   4.0ms → 8.1ms |   3 → 6 | `./node_modules/typescript/lib/typescript.js:70032 → 71315` |
| +101.5% | +2.72ms |   6.2% → 8.3% |   2.7ms → 5.4ms |   2 → 4 | `./node_modules/typescript/lib/typescript.js:69922 → 71205` |
| removed | -2.68ms |   6.2% → 0.0% |     2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:69905`         |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js:61933:26`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +328.2% | +17.57ms | 21.1% → 51.5% |  5.4ms → 22.9ms |  4 → 17 | `./node_modules/typescript/lib/typescript.js:60680 → 61935` |
|  +51.1% |  +1.37ms |  10.5% → 9.1% |   2.7ms → 4.0ms |   2 → 3 | `./node_modules/typescript/lib/typescript.js:60682 → 61937` |
| +101.5% |  +1.36ms |   5.3% → 6.1% |   1.3ms → 2.7ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:60685 → 61940` |
| removed |  -1.34ms |   5.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:60683`         |
|   +0.8% |  +0.08ms | 42.1% → 24.2% | 10.7ms → 10.8ms |       8 | `./node_modules/typescript/lib/typescript.js:60679 → 61934` |

##### `isTupleType` (`./node_modules/typescript/lib/typescript.js:70353:23`)

|  Change |    Delta |      % |           Time | Samples | Location                                                    |
| ------: | -------: | -----: | -------------: | ------: | ----------------------------------------------------------- |
| +437.4% | +17.56ms | 100.0% | 4.0ms → 21.6ms |  3 → 16 | `./node_modules/typescript/lib/typescript.js:69094 → 70354` |

##### `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +504.6% | +13.51ms | 14.3% → 46.2% |  2.7ms → 16.2ms |  2 → 12 | `./node_modules/typescript/lib/typescript.js:66172 → 67432` |
|  +31.0% |  +4.15ms | 71.4% → 50.0% | 13.4ms → 17.5ms | 10 → 13 | `./node_modules/typescript/lib/typescript.js:66174 → 67434` |
|     new |  +1.35ms |   0.0% → 3.8% |     0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:67433`         |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js:72224:30`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| +504.6% | +6.75ms |  8.3% → 25.0% | 1.3ms → 8.1ms |   1 → 6 | `./node_modules/typescript/lib/typescript.js:70942 → 72225` |
|     new | +5.39ms |  0.0% → 16.7% |   0ms → 5.4ms |   0 → 4 | `./node_modules/typescript/lib/typescript.js:72285`         |
|  +67.9% | +2.73ms | 25.0% → 20.8% | 4.0ms → 6.7ms |   3 → 5 | `./node_modules/typescript/lib/typescript.js:70943 → 72226` |
|     new | +1.35ms |   0.0% → 4.2% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:72237`         |
| removed | -1.34ms |   8.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:70986`         |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:61750:34`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +60.0% | +13.66ms | 100.0% | 22.8ms → 36.4ms | 17 → 27 | `./node_modules/typescript/lib/typescript.js:60496 → 61751` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  +78.3% | +13.62ms | 46.4% → 62.2% | 17.4ms → 31.0ms | 13 → 23 | `./node_modules/typescript/lib/typescript.js:12774 → 12904` |
|     new | +10.79ms |  0.0% → 21.6% |    0ms → 10.8ms |   0 → 8 | `./node_modules/typescript/lib/typescript.js:13084`         |
| removed | -10.71ms |  28.6% → 0.0% |    10.7ms → 0ms |   8 → 0 | `./node_modules/typescript/lib/typescript.js:12959`         |
|     new |  +4.05ms |   0.0% → 8.1% |     0ms → 4.0ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:13336`         |
|     new |  +1.35ms |   0.0% → 2.7% |     0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:12962`         |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

| Change |   Delta |              % |            Time | Samples | Location                                                    |
| -----: | ------: | -------------: | --------------: | ------: | ----------------------------------------------------------- |
| +29.0% | +9.70ms | 100.0% → 94.1% | 33.5ms → 43.2ms | 25 → 32 | `./node_modules/typescript/lib/typescript.js:66150 → 67410` |

##### `TypeObject` (`./node_modules/typescript/lib/typescript.js:148564:14`)

| Change |    Delta |             % |         Time | Samples | Location                                             |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------- |
|    new | +12.14ms | 0.0% → 100.0% | 0ms → 12.1ms |   0 → 9 | `./node_modules/typescript/lib/typescript.js:148565` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|     new | +6.74ms |  0.0% → 11.1% |     0ms → 6.7ms |   0 → 5 | `./node_modules/typescript/lib/typescript.js:69028`         |
| +403.8% | +5.40ms |  2.7% → 11.1% |   1.3ms → 6.7ms |   1 → 5 | `./node_modules/typescript/lib/typescript.js:67513 → 68773` |
|  -49.6% | -3.98ms |  16.2% → 6.7% |   8.0ms → 4.0ms |   6 → 3 | `./node_modules/typescript/lib/typescript.js:67720 → 68980` |
|  -22.5% | -3.91ms | 35.1% → 22.2% | 17.4ms → 13.5ms | 13 → 10 | `./node_modules/typescript/lib/typescript.js:67280 → 68540` |
|     new | +2.70ms |   0.0% → 4.4% |     0ms → 2.7ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:68561`         |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js:46190:25`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  +88.9% | +9.52ms | 57.1% → 68.2% | 10.7ms → 20.2ms |  8 → 15 | `./node_modules/typescript/lib/typescript.js:45010 → 46203` |
| +303.0% | +4.06ms |  7.1% → 18.2% |   1.3ms → 5.4ms |   1 → 4 | `./node_modules/typescript/lib/typescript.js:45000 → 46193` |
|  -66.4% | -2.67ms |  21.4% → 4.5% |   4.0ms → 1.3ms |   3 → 1 | `./node_modules/typescript/lib/typescript.js:45007 → 46200` |
| removed | -1.34ms |   7.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:45063`         |
|   +0.8% | +0.01ms |   7.1% → 4.5% |           1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:44998 → 46191` |

##### `scanJSDocCommentTextToken` (`./node_modules/typescript/lib/typescript.js:14434:37`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| +403.8% | +5.40ms | 14.3% → 33.3% | 1.3ms → 6.7ms |   1 → 5 | `./node_modules/typescript/lib/typescript.js:13482 → 14440` |
| +101.5% | +2.72ms | 28.6% → 26.7% | 2.7ms → 5.4ms |   2 → 4 | `./node_modules/typescript/lib/typescript.js:13492 → 14450` |
|     new | +1.35ms |   0.0% → 6.7% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:14444`         |
| removed | -1.34ms |  14.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:13477`         |
|  -49.6% | -1.33ms |  28.6% → 6.7% | 2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:13494 → 14452` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:66283:33`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| +202.3% | +5.42ms | 11.8% → 25.0% | 2.7ms → 8.1ms |   2 → 6 | `./node_modules/typescript/lib/typescript.js:65026 → 66286` |
| +303.0% | +4.06ms |  5.9% → 16.7% | 1.3ms → 5.4ms |   1 → 4 | `./node_modules/typescript/lib/typescript.js:65052 → 66312` |
|     new | +2.70ms |   0.0% → 8.3% |   0ms → 2.7ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:66326`         |
| removed | -2.68ms |  11.8% → 0.0% |   2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:65077`         |
|     new | +1.35ms |   0.0% → 4.2% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:66305`         |

##### `getSymbolLinks` (`./node_modules/typescript/lib/typescript.js:51493:26`)

| Change |   Delta |             % |            Time | Samples | Location                                                    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +37.4% | +5.51ms | 73.3% → 68.2% | 14.7ms → 20.2ms | 11 → 15 | `./node_modules/typescript/lib/typescript.js:50256 → 51497` |
|  +0.8% | +0.04ms | 26.7% → 18.2% |           5.4ms |       4 | `./node_modules/typescript/lib/typescript.js:50253 → 51494` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

|  Change |   Delta |             % |           Time | Samples | Location                                                    |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +303.0% | +4.06ms |  7.1% → 19.0% |  1.3ms → 5.4ms |   1 → 4 | `./node_modules/typescript/lib/typescript.js:60108 → 61363` |
|     new | +2.70ms |   0.0% → 9.5% |    0ms → 2.7ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:61361`         |
| removed | -2.68ms |  14.3% → 0.0% |    2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:60095`         |
|  +15.2% | +1.42ms | 50.0% → 38.1% | 9.4ms → 10.8ms |   7 → 8 | `./node_modules/typescript/lib/typescript.js:60091 → 61346` |
|     new | +1.35ms |   0.0% → 4.8% |    0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:61352`         |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js:24844:27`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +706.1% | +9.45ms |  8.3% → 42.1% |  1.3ms → 10.8ms |   1 → 8 | `./node_modules/typescript/lib/typescript.js:23814 → 24864` |
|  +12.0% | +1.44ms | 75.0% → 52.6% | 12.0ms → 13.5ms |  9 → 10 | `./node_modules/typescript/lib/typescript.js:23815 → 24865` |
|  -49.6% | -1.33ms |  16.7% → 5.3% |   2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:23802 → 24852` |

##### `getIndexedAccessTypeOrUndefined` (`./node_modules/typescript/lib/typescript.js:65149:43`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|     new | +2.70ms |  0.0% → 15.4% |   0ms → 2.7ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:65154`         |
|     new | +2.70ms |  0.0% → 15.4% |   0ms → 2.7ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:65159`         |
| +101.5% | +1.36ms | 16.7% → 15.4% | 1.3ms → 2.7ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:63910 → 65165` |
|     new | +1.35ms |   0.0% → 7.7% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65167`         |
|     new | +1.35ms |   0.0% → 7.7% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65171`         |

##### `getUnionType` (`./node_modules/typescript/lib/typescript.js:64095:24`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|     new | +4.05ms |  0.0% → 23.1% |   0ms → 4.0ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:64105`         |
|     new | +4.05ms |  0.0% → 23.1% |   0ms → 4.0ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:64106`         |
| +101.5% | +1.36ms | 16.7% → 15.4% | 1.3ms → 2.7ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:62849 → 64104` |
|     new | +1.35ms |   0.0% → 7.7% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:64096`         |
|     new | +1.35ms |   0.0% → 7.7% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:64120`         |

##### `createSymbolTable` (`./node_modules/typescript/lib/typescript.js:16239:27`)

|  Change |   Delta |             % |           Time | Samples | Location                                                    |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +353.4% | +9.46ms | 66.7% → 90.0% | 2.7ms → 12.1ms |   2 → 9 | `./node_modules/typescript/lib/typescript.js:15265 → 16240` |
|     new | +1.35ms |  0.0% → 10.0% |    0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:16242`         |

##### `maybeTypeOfKind` (`./node_modules/typescript/lib/typescript.js:81463:27`)

|  Change |   Delta |             % |           Time | Samples | Location                                                    |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +353.4% | +9.46ms | 15.4% → 47.4% | 2.7ms → 12.1ms |   2 → 9 | `./node_modules/typescript/lib/typescript.js:80174 → 81469` |
|  -66.4% | -2.67ms |  23.1% → 5.3% |  4.0ms → 1.3ms |   3 → 1 | `./node_modules/typescript/lib/typescript.js:80175 → 81470` |
| +101.5% | +1.36ms |  7.7% → 10.5% |  1.3ms → 2.7ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:80172 → 81467` |
|  -49.6% | -1.33ms |  15.4% → 5.3% |  2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:80173 → 81468` |
|   +0.8% | +0.05ms | 38.5% → 26.3% |          6.7ms |       5 | `./node_modules/typescript/lib/typescript.js:80169 → 81464` |

##### `SymbolLinks` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Location |
| ------: | ------: | -----: | ------------: | ------: | -------- |
| +101.5% | +4.08ms | 100.0% | 4.0ms → 8.1ms |   3 → 6 | 1        |

##### `generatorResume` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | 1        |

##### `next` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Location |
| ------: | ------: | -------------: | ------------: | ------: | -------- |
| +151.9% | +4.07ms | 100.0% → 83.3% | 2.7ms → 6.7ms |   2 → 5 | 1        |

##### `map` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +4.05ms | 0.0% → 100.0% | 0ms → 4.0ms |   0 → 3 | 1        |

##### `filter` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| +51.1% | +1.37ms | 100.0% | 2.7ms → 4.0ms |   2 → 3 | 1        |

##### `some` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Location |
| ------: | ------: | -----: | ------------: | ------: | -------- |
| +101.5% | +1.36ms | 100.0% | 1.3ms → 2.7ms |   1 → 2 | 1        |

##### `(anonymous)` (`node:crypto:1:11`)

| Change |   Delta |      % |  Time | Samples | Location         |
| -----: | ------: | -----: | ----: | ------: | ---------------- |
|  +0.8% | +0.01ms | 100.0% | 1.3ms |       1 | `node:crypto:74` |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:72917:34`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  -70.0% | -34.69ms | 90.2% → 84.6% | 49.5ms → 14.8ms | 37 → 11 | `./node_modules/typescript/lib/typescript.js:71634 → 72917` |
| removed |  -1.34ms |   2.4% → 0.0% |     1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:71649`         |
|  -32.8% |  -1.32ms |  7.3% → 15.4% |   4.0ms → 2.7ms |   3 → 2 | `./node_modules/typescript/lib/typescript.js:71646 → 72929` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

| Change |    Delta |              % |              Time |   Samples | Location                                                    |
| -----: | -------: | -------------: | ----------------: | --------: | ----------------------------------------------------------- |
| -13.0% | -22.93ms | 99.2% → 100.0% | 176.7ms → 153.7ms | 132 → 114 | `./node_modules/typescript/lib/typescript.js:20243 → 21226` |

##### `signaturesRelatedTo` (`./node_modules/typescript/lib/typescript.js:69505:33`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -85.6% | -8.02ms | 31.8% → 20.0% | 9.4ms → 1.3ms |   7 → 1 | `./node_modules/typescript/lib/typescript.js:68259 → 69519` |
| removed | -6.69ms |  22.7% → 0.0% |   6.7ms → 0ms |   5 → 0 | `./node_modules/typescript/lib/typescript.js:68281`         |
| removed | -1.34ms |   4.5% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:68290`         |
|  -49.6% | -1.33ms |  9.1% → 20.0% | 2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:68247 → 69507` |
|  -49.6% | -1.33ms |  9.1% → 20.0% | 2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:68255 → 69515` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:61745:27`)

| Change |   Delta |             % |            Time | Samples | Location                                                    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| -30.2% | -5.26ms | 35.1% → 45.0% | 17.4ms → 12.1ms |  13 → 9 | `./node_modules/typescript/lib/typescript.js:60491 → 61746` |
| -74.8% | -4.01ms |  10.8% → 5.0% |   5.4ms → 1.3ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:60493 → 61748` |

##### `getAliasId` (`./node_modules/typescript/lib/typescript.js:62776:22`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -51.6% | -17.28ms | 100.0% | 33.5ms → 16.2ms | 25 → 12 | `./node_modules/typescript/lib/typescript.js:61522 → 62777` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js:65988:32`)

|  Change |   Delta |             % |           Time | Samples | Location                                                    |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
|  -87.4% | -9.36ms | 53.3% → 25.0% | 10.7ms → 1.3ms |   8 → 1 | `./node_modules/typescript/lib/typescript.js:64751 → 66006` |
|  -74.8% | -4.01ms | 26.7% → 25.0% |  5.4ms → 1.3ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:64735 → 65990` |
| removed | -2.68ms |  13.3% → 0.0% |    2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:64746`         |
|     new | +1.35ms |  0.0% → 25.0% |    0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65997`         |
|   +0.8% | +0.01ms |  6.7% → 25.0% |          1.3ms |       1 | `./node_modules/typescript/lib/typescript.js:64737 → 65992` |

##### `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:53743:36`)

| Change |   Delta |             % |          Time | Samples | Location                                                    |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| -74.8% | -4.01ms |  16.0% → 7.1% | 5.4ms → 1.3ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:52507 → 53748` |
| -59.7% | -4.00ms | 20.0% → 14.3% | 6.7ms → 2.7ms |   5 → 2 | `./node_modules/typescript/lib/typescript.js:52505 → 53746` |
| -49.6% | -3.98ms | 24.0% → 21.4% | 8.0ms → 4.0ms |   6 → 3 | `./node_modules/typescript/lib/typescript.js:52506 → 53747` |
| -49.6% | -1.33ms |   8.0% → 7.1% | 2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:52508 → 53749` |
| -49.6% | -1.33ms |   8.0% → 7.1% | 2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:52510 → 53751` |

##### `forEach` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Location |
| -----: | -------: | -----: | --------------: | ------: | -------- |
| -46.7% | -10.62ms | 100.0% | 22.8ms → 12.1ms |  17 → 9 | 1        |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:65907:25`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -9.37ms |  35.0% → 0.0% |   9.4ms → 0ms |   7 → 0 | `./node_modules/typescript/lib/typescript.js:64659`         |
|     new | +4.05ms |  0.0% → 25.0% |   0ms → 4.0ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:65932`         |
| +101.5% | +1.36ms |  5.0% → 16.7% | 1.3ms → 2.7ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:64658 → 65913` |
|  -49.6% | -1.33ms |  10.0% → 8.3% | 2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:64653 → 65908` |
|  -32.8% | -1.32ms | 15.0% → 16.7% | 4.0ms → 2.7ms |   3 → 2 | `./node_modules/typescript/lib/typescript.js:64680 → 65935` |

##### `couldContainTypeVariables` (`./node_modules/typescript/lib/typescript.js:70860:37`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  -66.4% | -13.33ms | 40.5% → 17.2% |  20.1ms → 6.7ms |  15 → 5 | `./node_modules/typescript/lib/typescript.js:69605 → 70865` |
|  +28.2% |  +4.16ms | 29.7% → 48.3% | 14.7ms → 18.9ms | 11 → 14 | `./node_modules/typescript/lib/typescript.js:69607 → 70867` |
|  +67.9% |  +2.73ms |  8.1% → 17.2% |   4.0ms → 6.7ms |   3 → 5 | `./node_modules/typescript/lib/typescript.js:69601 → 70861` |
| removed |  -2.68ms |   5.4% → 0.0% |     2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:69606`         |
| removed |  -1.34ms |   2.7% → 0.0% |     1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:69603`         |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`)

| Change |    Delta |             % |            Time | Samples | Location                                                    |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| -21.0% | -10.41ms | 80.4% → 76.3% | 49.5ms → 39.1ms | 37 → 29 | `./node_modules/typescript/lib/typescript.js:68736 → 69996` |
| -39.5% |  -2.65ms |  10.9% → 7.9% |   6.7ms → 4.0ms |   5 → 3 | `./node_modules/typescript/lib/typescript.js:68735 → 69995` |
| +34.3% |  +1.38ms |  6.5% → 10.5% |   4.0ms → 5.4ms |   3 → 4 | `./node_modules/typescript/lib/typescript.js:68730 → 69990` |

##### `isBinaryExpression` (`./node_modules/typescript/lib/typescript.js:30242:28`)

| Change |   Delta |      % |           Time | Samples | Location                                                    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------------------------------- |
| -77.6% | -9.35ms | 100.0% | 12.0ms → 2.7ms |   9 → 2 | `./node_modules/typescript/lib/typescript.js:29193 → 30243` |

##### `getConditionalFlowTypeOfType` (`./node_modules/typescript/lib/typescript.js:63079:40`)

| Change |    Delta |              % |           Time | Samples | Location                                                    |
| -----: | -------: | -------------: | -------------: | ------: | ----------------------------------------------------------- |
| -61.2% | -10.66ms | 100.0% → 83.3% | 17.4ms → 6.7ms |  13 → 5 | `./node_modules/typescript/lib/typescript.js:61827 → 63082` |
|    new |  +1.35ms |   0.0% → 16.7% |    0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:63083`         |

##### `length` (`./node_modules/typescript/lib/typescript.js:2375:16`)

| Change |   Delta |      % |          Time | Samples | Location                                                  |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------------------- |
| -85.6% | -8.02ms | 100.0% | 9.4ms → 1.3ms |   7 → 1 | `./node_modules/typescript/lib/typescript.js:2363 → 2376` |

##### `getSymbolFlags` (`./node_modules/typescript/lib/typescript.js:52688:26`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -4.02ms |  33.3% → 0.0% |   4.0ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:51448`         |
|  -49.6% | -2.66ms | 44.4% → 66.7% | 5.4ms → 2.7ms |   4 → 2 | `./node_modules/typescript/lib/typescript.js:51460 → 52701` |
|     new | +1.35ms |  0.0% → 33.3% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:52696`         |
| removed | -1.34ms |  11.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:51467`         |

##### `getSignaturesOfStructuredType` (`./node_modules/typescript/lib/typescript.js:62037:41`)

| Change |   Delta |             % |          Time | Samples | Location                                                    |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| -71.2% | -6.67ms | 70.0% → 50.0% | 9.4ms → 2.7ms |   7 → 2 | `./node_modules/typescript/lib/typescript.js:60784 → 62039` |
| -66.4% | -2.67ms | 30.0% → 25.0% | 4.0ms → 1.3ms |   3 → 1 | `./node_modules/typescript/lib/typescript.js:60783 → 62038` |
|    new | +1.35ms |  0.0% → 25.0% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:62040`         |

##### `getTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js:59663:27`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -59.7% | -4.00ms | 38.5% → 28.6% | 6.7ms → 2.7ms |   5 → 2 | `./node_modules/typescript/lib/typescript.js:58414 → 59669` |
|     new | +1.35ms |  0.0% → 14.3% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:59672`         |
| removed | -1.34ms |   7.7% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:58420`         |
| removed | -1.34ms |   7.7% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:58435`         |
|  -49.6% | -1.33ms | 15.4% → 14.3% | 2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:58409 → 59664` |

##### `findIndex` (`./node_modules/typescript/lib/typescript.js:2484:19`)

|  Change |   Delta |            % |        Time | Samples | Location                                           |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------------------------- |
| removed | -2.68ms | 40.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:2475` |
| removed | -1.34ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:2472` |
| removed | -1.34ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:2474` |
| removed | -1.34ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:2476` |

##### `createBaseIdentifier` (`./node_modules/typescript/lib/typescript.js:24972:32`)

|  Change |   Delta |              % |          Time | Samples | Location                                                    |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -74.8% | -4.01ms | 66.7% → 100.0% | 5.4ms → 1.3ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:23923 → 24973` |
| removed | -2.68ms |   33.3% → 0.0% |   2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:23924`         |

##### `checkPropertyAccessExpressionOrQualifiedName` (`./node_modules/typescript/lib/typescript.js:77201:56`)

|  Change |   Delta |             % |        Time | Samples | Location                                            |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- |
| removed | -2.68ms |  33.3% → 0.0% | 2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:75919` |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:77255` |
| removed | -1.34ms |  16.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:75968` |
| removed | -1.34ms |  16.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:76018` |
| removed | -1.34ms |  16.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:76021` |

##### `bindWorker` (`./node_modules/typescript/lib/typescript.js:47856:22`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -66.4% | -2.67ms | 30.0% → 20.0% | 4.0ms → 1.3ms |   3 → 1 | `./node_modules/typescript/lib/typescript.js:46678 → 47871` |
| removed | -1.34ms |  10.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:46693`         |
|  -49.6% | -1.33ms |         20.0% | 2.7ms → 1.3ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:46676 → 47869` |
|  -32.8% | -1.32ms | 30.0% → 40.0% | 4.0ms → 2.7ms |   3 → 2 | `./node_modules/typescript/lib/typescript.js:46664 → 47857` |

##### `find` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| -66.4% | -2.67ms | 100.0% | 4.0ms → 1.3ms |   3 → 1 | 1        |

##### `(anonymous)` (`node:events:1:11`)

|  Change |   Delta |             % |        Time | Samples | Location         |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node:events:24` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|  Change |   Delta |             % |           Time | Samples | Caller                        | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
| +135.1% | +5.43ms |  9.4% → 14.6% |  4.0ms → 9.4ms |   3 → 7 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:70432:33 → 71715:33` |
|  +51.1% | +4.11ms |         18.7% | 8.0ms → 12.1ms |   6 → 9 | `applyToReturnTypes`          | `./node_modules/typescript/lib/typescript.js:69498:30 → 70758:30` |
|  +61.2% | +4.10ms | 15.6% → 16.7% | 6.7ms → 10.8ms |   5 → 8 | `inferFromTypeArguments`      | `./node_modules/typescript/lib/typescript.js:70136:36 → 71419:36` |
| +101.5% | +4.08ms |  9.4% → 12.5% |  4.0ms → 8.1ms |   3 → 6 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:70146:41 → 71429:41` |
|  +17.6% | +1.41ms | 18.7% → 14.6% |  8.0ms → 9.4ms |   6 → 7 | `inferFromMatchingTypes`      | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js:61933:26`)

|  Change |    Delta |             % |            Time | Samples | Caller                                 | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
| +135.1% | +16.28ms | 47.4% → 63.6% | 12.0ms → 28.3ms |  9 → 21 | `getReducedApparentType`               | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34` |
|  +17.6% |  +1.41ms | 31.6% → 21.2% |   8.0ms → 9.4ms |   6 → 7 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:66156:48 → 67416:48` |
| +101.5% |  +1.36ms |   5.3% → 6.1% |   1.3ms → 2.7ms |   1 → 2 | `getIndexType`                         | `./node_modules/typescript/lib/typescript.js:63348:24 → 64603:24` |
|     new |  +1.35ms |   0.0% → 3.0% |     0ms → 1.3ms |   0 → 1 | `instantiateMappedType`                | `./node_modules/typescript/lib/typescript.js:64891:33 → 66151:33` |
| removed |  -1.34ms |   5.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `getIndexedAccessTypeOrUndefined`      | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |

##### `isTupleType` (`./node_modules/typescript/lib/typescript.js:70353:23`)

|  Change |   Delta |             % |          Time | Samples | Caller                      | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------- | ----------------------------------------------------------------- |
| +605.3% | +8.10ms | 33.3% → 43.7% | 1.3ms → 9.4ms |   1 → 7 | `isGenericTupleType`        | `./node_modules/typescript/lib/typescript.js:69096:30 → 70356:30` |
|     new | +2.70ms |  0.0% → 12.5% |   0ms → 2.7ms |   0 → 2 | `isArrayOrTupleType`        | `./node_modules/typescript/lib/typescript.js:70233:30`            |
| +101.5% | +1.36ms | 33.3% → 12.5% | 1.3ms → 2.7ms |   1 → 2 | `propertiesRelatedTo`       | `./node_modules/typescript/lib/typescript.js:68073:33 → 69333:33` |
| +101.5% | +1.36ms | 33.3% → 12.5% | 1.3ms → 2.7ms |   1 → 2 | `tryGetTypeAtPosition`      | `./node_modules/typescript/lib/typescript.js:78864:32 → 80159:32` |
|     new | +1.35ms |   0.0% → 6.3% |   0ms → 1.3ms |   0 → 1 | `getEffectiveCallArguments` | `./node_modules/typescript/lib/typescript.js:77014:37 → 78309:37` |

##### `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`)

| Change |    Delta |      % |            Time | Samples | Caller                                 | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
| +87.1% | +16.33ms | 100.0% | 18.7ms → 35.1ms | 14 → 26 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:66156:48 → 67416:48` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js:72224:30`)

|  Change |   Delta |             % |           Time | Samples | Caller                     | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| +118.3% | +9.50ms | 50.0% → 54.2% | 8.0ms → 17.5ms |  6 → 13 | `getTypeFacts`             | `./node_modules/typescript/lib/typescript.js:70935:24 → 72218:24` |
|  +81.4% | +5.45ms | 41.7% → 37.5% | 6.7ms → 12.1ms |   5 → 9 | `getIntersectionTypeFacts` | `./node_modules/typescript/lib/typescript.js:71006:36 → 72289:36` |
| +101.5% | +1.36ms |          8.3% |  1.3ms → 2.7ms |   1 → 2 | `(anonymous)`              | `./node_modules/typescript/lib/typescript.js:70999:37 → 72282:37` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:61750:34`)

|  Change |   Delta |             % |           Time | Samples | Caller                            | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
| +118.3% | +9.50ms | 35.3% → 48.1% | 8.0ms → 17.5ms |  6 → 13 | `getSignaturesOfType`             | `./node_modules/typescript/lib/typescript.js:60789:31 → 62044:31` |
|     new | +6.74ms |  0.0% → 18.5% |    0ms → 6.7ms |   0 → 5 | `getIndexInfosOfType`             | `./node_modules/typescript/lib/typescript.js:60855:31 → 62110:31` |
|  -79.8% | -5.34ms |  29.4% → 3.7% |  6.7ms → 1.3ms |   5 → 1 | `getPropertiesOfType`             | `./node_modules/typescript/lib/typescript.js:60156:31 → 61411:31` |
|  +61.2% | +4.10ms | 29.4% → 29.6% | 6.7ms → 10.8ms |   5 → 8 | `getPropertyOfType`               | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
| removed | -1.34ms |   5.9% → 0.0% |    1.3ms → 0ms |   1 → 0 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

| Change |    Delta |              % |            Time | Samples | Caller                  | Location                                                          |
| -----: | -------: | -------------: | --------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| +29.6% | +11.07ms | 100.0% → 97.3% | 37.5ms → 48.6ms | 28 → 36 | `nextTokenWithoutCheck` | `./node_modules/typescript/lib/typescript.js:31953:33 → 33008:33` |
|    new |  +1.35ms |    0.0% → 2.7% |     0ms → 1.3ms |   0 → 1 | `scanTokenAtPosition`   | `./node_modules/typescript/lib/typescript.js:17466:29`            |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

| Change |    Delta |      % |            Time | Samples | Caller        | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +37.0% | +12.39ms | 100.0% | 33.5ms → 45.9ms | 25 → 34 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |

##### `TypeObject` (`./node_modules/typescript/lib/typescript.js:148564:14`)

| Change |    Delta |            % |         Time | Samples | Caller             | Location                                               |
| -----: | -------: | -----------: | -----------: | ------: | ------------------ | ------------------------------------------------------ |
|    new | +10.79ms | 0.0% → 88.9% | 0ms → 10.8ms |   0 → 8 | `createType`       | `./node_modules/typescript/lib/typescript.js:53676:22` |
|    new |  +1.35ms | 0.0% → 11.1% |  0ms → 1.3ms |   0 → 1 | `createOriginType` | `./node_modules/typescript/lib/typescript.js:53689:28` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:68537:43`)

| Change |    Delta |      % |            Time | Samples | Caller                    | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------- | ----------------------------------------------------------------- |
| +22.5% | +11.17ms | 100.0% | 49.5ms → 60.7ms | 37 → 45 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67207:37 → 68467:37` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js:46190:25`)

|  Change |    Delta |             % |           Time | Samples | Caller                             | Location                                                          |
| ------: | -------: | ------------: | -------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
| +222.4% | +14.89ms | 35.7% → 72.7% | 6.7ms → 21.6ms |  5 → 16 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js:46199:44 → 47392:44` |
|  -59.7% |  -4.00ms |  35.7% → 9.1% |  6.7ms → 2.7ms |   5 → 2 | `declareModuleMember`              | `./node_modules/typescript/lib/typescript.js:45071:31 → 46264:31` |
|     new |  +2.70ms |   0.0% → 9.1% |    0ms → 2.7ms |   0 → 2 | `declareClassMember`               | `./node_modules/typescript/lib/typescript.js:46246:30 → 47439:30` |
|  -49.6% |  -2.66ms |  28.6% → 9.1% |  5.4ms → 2.7ms |   4 → 2 | `bindBlockScopedDeclaration`       | `./node_modules/typescript/lib/typescript.js:46333:38 → 47526:38` |

##### `scanJSDocCommentTextToken` (`./node_modules/typescript/lib/typescript.js:14434:37`)

|  Change |    Delta |      % |           Time | Samples | Caller                      | Location                                                          |
| ------: | -------: | -----: | -------------: | ------: | --------------------------- | ----------------------------------------------------------------- |
| +115.9% | +10.86ms | 100.0% | 9.4ms → 20.2ms |  7 → 15 | `nextJSDocCommentTextToken` | `./node_modules/typescript/lib/typescript.js:31969:37 → 33024:37` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js:66283:33`)

| Change |   Delta |      % |            Time | Samples | Caller                     | Location                                                          |
| -----: | ------: | -----: | --------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| +42.3% | +9.61ms | 100.0% | 22.8ms → 32.4ms | 17 → 24 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:65006:36 → 66266:36` |

##### `getSymbolLinks` (`./node_modules/typescript/lib/typescript.js:51493:26`)

|  Change |   Delta |             % |           Time | Samples | Caller                                     | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------- |
| +101.5% | +5.44ms | 26.7% → 36.4% | 5.4ms → 10.8ms |   4 → 8 | `getTypeOfVariableOrParameterOrProperty`   | `./node_modules/typescript/lib/typescript.js:58088:50 → 59343:50` |
|     new | +2.70ms |   0.0% → 9.1% |    0ms → 2.7ms |   0 → 2 | `getTypeOfFuncClassEnumModule`             | `./node_modules/typescript/lib/typescript.js:59529:40`            |
|     new | +2.70ms |   0.0% → 9.1% |    0ms → 2.7ms |   0 → 2 | `getContextualTypeForObjectLiteralElement` | `./node_modules/typescript/lib/typescript.js:75285:52`            |
|  -49.6% | -2.66ms |  26.7% → 9.1% |  5.4ms → 2.7ms |   4 → 2 | `instantiateSymbol`                        | `./node_modules/typescript/lib/typescript.js:64758:29 → 66013:29` |
|     new | +1.35ms |   0.0% → 4.5% |    0ms → 1.3ms |   0 → 1 | `getTypeAliasInstantiation`                | `./node_modules/typescript/lib/typescript.js:62886:37`            |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

|  Change |   Delta |             % |           Time | Samples | Caller                          | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| +706.1% | +9.45ms |  7.1% → 38.1% | 1.3ms → 10.8ms |   1 → 8 | `getPropertyOfType`             | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
|  -32.8% | -2.64ms | 42.9% → 19.0% |  8.0ms → 5.4ms |   6 → 4 | `getSignaturesOfStructuredType` | `./node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |
|  +34.3% | +1.38ms | 21.4% → 19.0% |  4.0ms → 5.4ms |   3 → 4 | `getIndexInfosOfStructuredType` | `./node_modules/typescript/lib/typescript.js:60848:41 → 62103:41` |
| +101.5% | +1.36ms |   7.1% → 9.5% |  1.3ms → 2.7ms |   1 → 2 | `isEmptyObjectType`             | `./node_modules/typescript/lib/typescript.js:65964:29 → 67224:29` |
|     new | +1.35ms |   0.0% → 4.8% |    0ms → 1.3ms |   0 → 1 | `isFunctionObjectType`          | `./node_modules/typescript/lib/typescript.js:70931:32 → 72214:32` |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js:24844:27`)

| Change |   Delta |             % |            Time | Samples | Caller                 | Location                                                          |
| -----: | ------: | ------------: | --------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| +46.6% | +6.86ms | 91.7% → 84.2% | 14.7ms → 21.6ms | 11 → 16 | `createNodeArray`      | `./node_modules/typescript/lib/typescript.js:32232:27 → 33287:27` |
|    new | +1.35ms |   0.0% → 5.3% |     0ms → 1.3ms |   0 → 1 | `asNodeArray`          | `./node_modules/typescript/lib/typescript.js:28348:23`            |
|    new | +1.35ms |   0.0% → 5.3% |     0ms → 1.3ms |   0 → 1 | `createCallExpression` | `./node_modules/typescript/lib/typescript.js:25978:32`            |
|  +0.8% | +0.01ms |   8.3% → 5.3% |           1.3ms |       1 | `createBlock`          | `./node_modules/typescript/lib/typescript.js:25392:23 → 26442:23` |

##### `getIndexedAccessTypeOrUndefined` (`./node_modules/typescript/lib/typescript.js:65149:43`)

|  Change |   Delta |      % |           Time | Samples | Caller                 | Location                                                          |
| ------: | ------: | -----: | -------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| +118.3% | +9.50ms | 100.0% | 8.0ms → 17.5ms |  6 → 13 | `getIndexedAccessType` | `./node_modules/typescript/lib/typescript.js:63879:32 → 65134:32` |

##### `getUnionType` (`./node_modules/typescript/lib/typescript.js:64095:24`)

|  Change |   Delta |             % |          Time | Samples | Caller                  | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| +202.3% | +5.42ms | 33.3% → 46.2% | 2.7ms → 8.1ms |   2 → 6 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|  +51.1% | +1.37ms | 33.3% → 23.1% | 2.7ms → 4.0ms |   2 → 3 | `getOptionalType`       | `./node_modules/typescript/lib/typescript.js:69154:27 → 70414:27` |
|     new | +1.35ms |   0.0% → 7.7% |   0ms → 1.3ms |   0 → 1 | `getIndexType`          | `./node_modules/typescript/lib/typescript.js:63348:24 → 64603:24` |
|     new | +1.35ms |   0.0% → 7.7% |   0ms → 1.3ms |   0 → 1 | `inferToMultipleTypes`  | `./node_modules/typescript/lib/typescript.js:71462:34`            |
|     new | +1.35ms |   0.0% → 7.7% |   0ms → 1.3ms |   0 → 1 | `computeBaseConstraint` | `./node_modules/typescript/lib/typescript.js:61624:35`            |

##### `createSymbolTable` (`./node_modules/typescript/lib/typescript.js:16239:27`)

|  Change |   Delta |             % |          Time | Samples | Caller                          | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| +303.0% | +4.06ms | 33.3% → 40.0% | 1.3ms → 5.4ms |   1 → 4 | `addDeclarationToSymbol`        | `./node_modules/typescript/lib/typescript.js:44912:34 → 46105:34` |
|     new | +1.35ms |  0.0% → 10.0% |   0ms → 1.3ms |   0 → 1 | `transformTypeOfMembers`        | `./node_modules/typescript/lib/typescript.js:70476:34`            |
|     new | +1.35ms |  0.0% → 10.0% |   0ms → 1.3ms |   0 → 1 | `checkObjectLiteral`            | `./node_modules/typescript/lib/typescript.js:76097:30`            |
|     new | +1.35ms |  0.0% → 10.0% |   0ms → 1.3ms |   0 → 1 | `resolveAnonymousTypeMembers`   | `./node_modules/typescript/lib/typescript.js:60978:39`            |
|     new | +1.35ms |  0.0% → 10.0% |   0ms → 1.3ms |   0 → 1 | `getWidenedTypeOfObjectLiteral` | `./node_modules/typescript/lib/typescript.js:70559:41`            |

##### `readFileSync` (`<unknown>`)

| Change |    Delta |             % |            Time | Samples | Caller           | Location                                                        |
| -----: | -------: | ------------: | --------------: | ------: | ---------------- | --------------------------------------------------------------- |
| +65.5% | +12.28ms | 66.7% → 85.2% | 18.7ms → 31.0ms | 14 → 23 | `readFileSync`   | `<unknown>`                                                     |
| -42.4% |  -3.97ms | 33.3% → 14.8% |   9.4ms → 5.4ms |   7 → 4 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28 → 8751:28` |

##### `maybeTypeOfKind` (`./node_modules/typescript/lib/typescript.js:81463:27`)

|  Change |    Delta |             % |           Time | Samples | Caller                              | Location                                                          |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
| +605.3% | +16.20ms | 15.4% → 73.7% | 2.7ms → 18.9ms |  2 → 14 | `getIntersectionTypeFacts`          | `./node_modules/typescript/lib/typescript.js:71006:36 → 72289:36` |
|  -56.8% |  -5.32ms | 53.8% → 15.8% |  9.4ms → 4.0ms |   7 → 3 | `maybeTypeOfKind`                   | `./node_modules/typescript/lib/typescript.js:80168:27 → 81463:27` |
| removed |  -2.68ms |  15.4% → 0.0% |    2.7ms → 0ms |   2 → 0 | `shouldDeferIndexType`              | `./node_modules/typescript/lib/typescript.js:63345:32`            |
|   +0.8% |  +0.01ms |   7.7% → 5.3% |          1.3ms |       1 | `instantiateContextualType`         | `./node_modules/typescript/lib/typescript.js:74222:37 → 75505:37` |
|   +0.8% |  +0.01ms |   7.7% → 5.3% |          1.3ms |       1 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js:81122:45 → 82417:45` |

##### `statSync` (`<unknown>`)

|  Change |   Delta |              % |            Time | Samples | Caller     | Location                                                        |
| ------: | ------: | -------------: | --------------: | ------: | ---------- | --------------------------------------------------------------- |
|  +41.1% | +8.24ms | 88.2% → 100.0% | 20.1ms → 28.3ms | 15 → 21 | `statSync` | `./node_modules/typescript/lib/typescript.js:8602:22 → 8631:22` |
| removed | -2.68ms |   11.8% → 0.0% |     2.7ms → 0ms |   2 → 0 | `statSync` | `<unknown>`                                                     |

##### `SymbolLinks` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller         | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | -------------- | ----------------------------------------------------------------- |
| +101.5% | +4.08ms | 100.0% | 4.0ms → 8.1ms |   3 → 6 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:49995:24 → 51236:24` |

##### `realpathNativeSync` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                     | Location                                                        |
| -----: | ------: | -------------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------- |
|    new | +2.70ms |   0.0% → 66.7% |   0ms → 2.7ms |   0 → 2 | `bound realpathNativeSync` | `<unknown>`                                                     |
| -49.6% | -1.33ms | 100.0% → 33.3% | 2.7ms → 1.3ms |   2 → 1 | `realpath`                 | `./node_modules/typescript/lib/typescript.js:8852:22 → 8881:22` |

##### `parseModule` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller        | Location    |
| ------: | ------: | -----: | ------------: | ------: | ------------- | ----------- |
| +101.5% | +1.36ms | 100.0% | 1.3ms → 2.7ms |   1 → 2 | `(anonymous)` | `<unknown>` |

##### `generatorResume` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller   | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `return` | `<unknown>` |

##### `set` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                              | Location                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
|     new | +6.74ms | 0.0% → 50.0% | 0ms → 6.7ms |   0 → 5 | `getDeclaredTypeOfClassOrInterface` | `./node_modules/typescript/lib/typescript.js:60073:45`  |
| removed | -2.68ms | 40.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `declareSymbol`                     | `./node_modules/typescript/lib/typescript.js:44997:25`  |
| removed | -2.68ms | 40.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `updateFilesByNameMap`              | `./node_modules/typescript/lib/typescript.js:124131:32` |
|     new | +1.35ms | 0.0% → 10.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:51425:20`  |
|     new | +1.35ms | 0.0% → 10.0% | 0ms → 1.3ms |   0 → 1 | `getSpreadType`                     | `./node_modules/typescript/lib/typescript.js:65547:25`  |

##### `next` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                     | Location                                                        |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------- |
| +151.9% | +4.07ms | 100.0% → 83.3% | 2.7ms → 6.7ms |   2 → 5 | `arrayFrom`                | `./node_modules/typescript/lib/typescript.js:3174:19 → 3187:19` |
|     new | +1.35ms |   0.0% → 16.7% |   0ms → 1.3ms |   0 → 1 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34 → 3059:34` |

##### `map` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller                                 | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------- | ------------------------------------------------------ |
|    new | +2.70ms | 0.0% → 66.7% | 0ms → 2.7ms |   0 → 2 | `createInferenceContext`               | `./node_modules/typescript/lib/typescript.js:70767:34` |
|    new | +1.35ms | 0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48` |

##### `unshift` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller        | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +101.5% | +2.72ms | 100.0% | 2.7ms → 5.4ms |   2 → 4 | `addWorkItem` | `./node_modules/typescript/lib/typescript.js:31286:23 → 32338:23` |

##### `has` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller                   | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
|    new | +1.35ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `addTypeToIntersection`  | `./node_modules/typescript/lib/typescript.js:64240:33` |
|    new | +1.35ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |

##### `get` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                            | Location                                                |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------- | ------------------------------------------------------- |
| removed | -4.02ms | 37.5% → 0.0% | 4.0ms → 0ms |   3 → 0 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64979:43`  |
|     new | +2.70ms | 0.0% → 22.2% | 0ms → 2.7ms |   0 → 2 | `findSourceFileWorker`            | `./node_modules/typescript/lib/typescript.js:125566:32` |
|     new | +2.70ms | 0.0% → 22.2% | 0ms → 2.7ms |   0 → 2 | `recursiveTypeRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68323:36`  |
| removed | -2.68ms | 25.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:50184:20`  |
|     new | +1.35ms | 0.0% → 11.1% | 0ms → 1.3ms |   0 → 1 | `bindClassLikeDeclaration`        | `./node_modules/typescript/lib/typescript.js:48535:36`  |

##### `filter` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                                  | Location                                                            |
| ------: | ------: | -------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| +202.3% | +2.71ms | 50.0% → 100.0% | 1.3ms → 4.0ms |   1 → 3 | `discriminateTypeByDiscriminableItems`  | `./node_modules/typescript/lib/typescript.js:68568:48 → 69828:48`   |
| removed | -1.34ms |   50.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `getDiagnosticsWithPrecedingDirectives` | `./node_modules/typescript/lib/typescript.js:123417:49 → 124999:49` |

##### `push` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                                |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
|     new | +1.35ms |  0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `getTemplateLiteralType`            | `./node_modules/typescript/lib/typescript.js:64644:34`  |
|     new | +1.35ms |  0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `resolveModuleNamesReusingOldState` | `./node_modules/typescript/lib/typescript.js:124396:45` |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:38597:39`  |

##### `some` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller                  | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| +101.5% | +1.36ms | 100.0% | 1.3ms → 2.7ms |   1 → 2 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js:77689:33 → 78984:33` |

##### `Set` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `getExportsOfModuleWorker` | `./node_modules/typescript/lib/typescript.js:53444:36` |

##### `shift` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------------------ |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `removeLeadingNewlines` | `./node_modules/typescript/lib/typescript.js:38405:37` |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `removeListener`        | `node:events:206:63`                                   |

##### `test` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller           | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- | ------------------------------------------------------ |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `visitDirectory` | `./node_modules/typescript/lib/typescript.js:22185:26` |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `every`          | `./node_modules/typescript/lib/typescript.js:2439:15`  |

##### `(anonymous)` (`node:crypto:1:11`)

| Change |   Delta |      % |  Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.8% | +0.01ms | 100.0% | 1.3ms |       1 | `anonymous` | `<unknown>` |

##### `values` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------ |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `checkUnusedTypeParameters`         | `./node_modules/typescript/lib/typescript.js:84839:37` |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45` |

##### `startsWith` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Caller                   | Location                                                          |
| -----: | ------: | -----: | ----: | ------: | ------------------------ | ----------------------------------------------------------------- |
|  +0.8% | +0.01ms | 100.0% | 1.3ms |       1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:72917:34`)

| Change |    Delta |             % |            Time | Samples | Caller                          | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| -72.8% | -36.04ms | 90.2% → 76.9% | 49.5ms → 13.5ms | 37 → 10 | `checkIdentifier`               | `./node_modules/typescript/lib/typescript.js:72959:27 → 74242:27` |
| -24.4% |  -1.31ms |  9.8% → 23.1% |   5.4ms → 4.0ms |   4 → 3 | `getFlowTypeOfAccessExpression` | `./node_modules/typescript/lib/typescript.js:76049:41 → 77335:41` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|  Change |   Delta |           % |           Time | Samples | Caller                       | Location                                                          |
| ------: | ------: | ----------: | -------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
|  -49.6% | -7.97ms | 9.0% → 5.3% | 16.1ms → 8.1ms |  12 → 6 | `isEmptyAnonymousObjectType` | `./node_modules/typescript/lib/typescript.js:65967:38 → 67227:38` |
|  -66.4% | -5.33ms | 4.5% → 1.8% |  8.0ms → 2.7ms |   6 → 2 | `isNonDeferredTypeReference` | `./node_modules/typescript/lib/typescript.js:68694:38 → 69954:38` |
|     new | +4.05ms | 0.0% → 2.6% |    0ms → 4.0ms |   0 → 3 | `isRelatedTo`                | `./node_modules/typescript/lib/typescript.js:67753:25`            |
| removed | -4.02ms | 2.3% → 0.0% |    4.0ms → 0ms |   3 → 0 | `getNormalizedType`          | `./node_modules/typescript/lib/typescript.js:66148:29`            |
|  -37.0% | -3.96ms | 6.0% → 4.4% | 10.7ms → 6.7ms |   8 → 5 | `isObjectOrArrayLiteralType` | `./node_modules/typescript/lib/typescript.js:70509:38 → 71792:38` |

##### `signaturesRelatedTo` (`./node_modules/typescript/lib/typescript.js:69505:33`)

| Change |    Delta |      % |           Time | Samples | Caller                          | Location                                                          |
| -----: | -------: | -----: | -------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| -77.1% | -22.70ms | 100.0% | 29.4ms → 6.7ms |  22 → 5 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:61745:27`)

|  Change |    Delta |             % |            Time | Samples | Caller                                         | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------- |
|  -46.5% | -19.90ms | 86.5% → 85.0% | 42.8ms → 22.9ms | 32 → 17 | `getReducedApparentType`                       | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34` |
| removed |  -2.68ms |   5.4% → 0.0% |     2.7ms → 0ms |   2 → 0 | `(anonymous)`                                  | `./node_modules/typescript/lib/typescript.js:74215:9`             |
| +101.5% |  +1.36ms |  2.7% → 10.0% |   1.3ms → 2.7ms |   1 → 2 | `inferFromTypes`                               | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
| removed |  -1.34ms |   2.7% → 0.0% |     1.3ms → 0ms |   1 → 0 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |
|   +0.8% |  +0.01ms |   2.7% → 5.0% |           1.3ms |       1 | `structuredTypeRelatedToWorker`                | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |

##### `getAliasId` (`./node_modules/typescript/lib/typescript.js:62776:22`)

| Change |    Delta |             % |           Time | Samples | Caller                       | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
| -66.4% | -10.67ms | 48.0% → 33.3% | 16.1ms → 5.4ms |  12 → 4 | `getIntersectionType`        | `./node_modules/typescript/lib/typescript.js:63112:31 → 64367:31` |
| -53.5% |  -9.31ms | 52.0% → 50.0% | 17.4ms → 8.1ms |  13 → 6 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38 → 66040:38` |
|    new |  +2.70ms |  0.0% → 16.7% |    0ms → 2.7ms |   0 → 2 | `getUnionTypeFromSortedList` | `./node_modules/typescript/lib/typescript.js:62948:38 → 64203:38` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js:65988:32`)

| Change |    Delta |             % |           Time | Samples | Caller                         | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | ------------------------------ | ----------------------------------------------------------------- |
| -85.6% | -16.04ms | 93.3% → 50.0% | 18.7ms → 2.7ms |  14 → 2 | `instantiateList`              | `./node_modules/typescript/lib/typescript.js:64623:27 → 65878:27` |
|    new |  +1.35ms |  0.0% → 25.0% |    0ms → 1.3ms |   0 → 1 | `createErasedSignature`        | `./node_modules/typescript/lib/typescript.js:61320:33 → 62575:33` |
|  +0.8% |  +0.01ms |  6.7% → 25.0% |          1.3ms |       1 | `createSignatureInstantiation` | `./node_modules/typescript/lib/typescript.js:61306:40 → 62561:40` |

##### `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:53743:36`)

|  Change |   Delta |             % |            Time | Samples | Caller                        | Location                                                          |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
|  -43.3% | -9.28ms | 64.0% → 64.3% | 21.4ms → 12.1ms |  16 → 9 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js:59723:39 → 60978:39` |
|  -39.5% | -2.65ms | 20.0% → 21.4% |   6.7ms → 4.0ms |   5 → 3 | `resolveMappedTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59922:36 → 61177:36` |
| removed | -1.34ms |   4.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -32.8% | -1.32ms | 12.0% → 14.3% |   4.0ms → 2.7ms |   3 → 2 | `createAnonymousType`         | `./node_modules/typescript/lib/typescript.js:52513:31 → 53754:31` |

##### `slice` (`<unknown>`)

|  Change |   Delta |              % |        Time | Samples | Caller                     | Location                                                        |
| ------: | ------: | -------------: | ----------: | ------: | -------------------------- | --------------------------------------------------------------- |
| removed | -9.37ms |   53.8% → 0.0% | 9.4ms → 0ms |   7 → 0 | `addRange`                 | `./node_modules/typescript/lib/typescript.js:2979:18`           |
| removed | -1.34ms |    7.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `fillMissingTypeArguments` | `./node_modules/typescript/lib/typescript.js:60937:36`          |
|   +0.8% | +0.05ms | 38.5% → 100.0% |       6.7ms |       5 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16 → 2546:16` |

##### `forEach` (`<unknown>`)

|  Change |   Delta |             % |           Time | Samples | Caller                | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
|  -45.7% | -7.96ms | 76.5% → 77.8% | 17.4ms → 9.4ms |  13 → 7 | `getNamedMembers`     | `./node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |
| removed | -1.34ms |   5.9% → 0.0% |    1.3ms → 0ms |   1 → 0 | `visit`               | `./node_modules/typescript/lib/typescript.js:52216:19 → 53457:19` |
|  -49.6% | -1.33ms | 11.8% → 11.1% |  2.7ms → 1.3ms |   2 → 1 | `checkDeferredNodes`  | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|   +0.8% | +0.01ms |  5.9% → 11.1% |          1.3ms |       1 | `extendExportSymbols` | `./node_modules/typescript/lib/typescript.js:52179:31 → 53420:31` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:65907:25`)

|  Change |   Delta |             % |           Time | Samples | Caller                  | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
|  -79.8% | -5.34ms |  25.0% → 8.3% |  6.7ms → 1.3ms |   5 → 1 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|  -32.8% | -2.64ms | 30.0% → 33.3% |  8.0ms → 5.4ms |   6 → 4 | `getMappedType`         | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
|  -24.4% | -2.62ms | 40.0% → 50.0% | 10.7ms → 8.1ms |   8 → 6 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:64807:49 → 66062:49` |
|     new | +1.35ms |   0.0% → 8.3% |    0ms → 1.3ms |   0 → 1 | `canTailRecurse`        | `./node_modules/typescript/lib/typescript.js:65307:28`            |
| removed | -1.34ms |   5.0% → 0.0% |    1.3ms → 0ms |   1 → 0 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:64982:59 → 66242:59` |

##### `couldContainTypeVariables` (`./node_modules/typescript/lib/typescript.js:70860:37`)

| Change |   Delta |             % |            Time | Samples | Caller                     | Location                                                          |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| -20.2% | -6.50ms | 64.9% → 65.5% | 32.1ms → 25.6ms | 24 → 19 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:65006:36 → 66266:36` |
| -32.8% | -1.32ms |   8.1% → 6.9% |   4.0ms → 2.7ms |   3 → 2 | `inferFromTypes`           | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
| -24.4% | -1.31ms | 10.8% → 10.3% |   5.4ms → 4.0ms |   4 → 3 | `some`                     | `./node_modules/typescript/lib/typescript.js:2781:14 → 2794:14`   |
| -16.0% | -1.29ms | 16.2% → 17.2% |   8.0ms → 6.7ms |   6 → 5 | `instantiateSymbol`        | `./node_modules/typescript/lib/typescript.js:64758:29 → 66013:29` |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`)

| Change |    Delta |             % |            Time | Samples | Caller                   | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| -21.4% | -11.72ms | 89.1% → 84.2% | 54.9ms → 43.2ms | 41 → 32 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
| +20.9% |  +1.40ms | 10.9% → 15.8% |   6.7ms → 8.1ms |   5 → 6 | `isTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |

##### `fetch` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller         | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------- | ----------- |
| removed | -9.37ms | 100.0% → 0.0% | 9.4ms → 0ms |   7 → 0 | `requestFetch` | `<unknown>` |

##### `isBinaryExpression` (`./node_modules/typescript/lib/typescript.js:30242:28`)

|  Change |   Delta |             % |          Time | Samples | Caller                                  | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- | ----------------------------------------------------------------- |
| removed | -2.68ms |  22.2% → 0.0% |   2.7ms → 0ms |   2 → 0 | `isConstructorDeclaredProperty`         | `./node_modules/typescript/lib/typescript.js:57601:41`            |
|  -66.4% | -2.67ms | 33.3% → 50.0% | 4.0ms → 1.3ms |   3 → 1 | `isLogicalOrCoalescingBinaryExpression` | `./node_modules/typescript/lib/typescript.js:19715:47 → 20698:47` |
| removed | -1.34ms |  11.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `bothHelper`                            | `./node_modules/typescript/lib/typescript.js:84142:24`            |
| removed | -1.34ms |  11.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `isAssignmentExpression`                | `./node_modules/typescript/lib/typescript.js:19739:32`            |
| removed | -1.34ms |  11.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `maybeCheckExpression`                  | `./node_modules/typescript/lib/typescript.js:80565:34`            |

##### `join` (`<unknown>`)

| Change |    Delta |             % |           Time | Samples | Caller               | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------------------------------- |
| -79.8% | -10.69ms | 90.9% → 50.0% | 13.4ms → 2.7ms |  10 → 2 | `doJSDocScan`        | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
|    new |  +1.35ms |  0.0% → 25.0% |    0ms → 1.3ms |   0 → 1 | `getPathWithoutRoot` | `./node_modules/typescript/lib/typescript.js:9179:28`             |
|  +0.8% |  +0.01ms |  9.1% → 25.0% |          1.3ms |       1 | `parseTagComments`   | `./node_modules/typescript/lib/typescript.js:37509:32 → 38564:32` |

##### `getConditionalFlowTypeOfType` (`./node_modules/typescript/lib/typescript.js:63079:40`)

| Change |   Delta |      % |           Time | Samples | Caller                | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -53.5% | -9.31ms | 100.0% | 17.4ms → 8.1ms |  13 → 6 | `getTypeFromTypeNode` | `./node_modules/typescript/lib/typescript.js:64524:31 → 65779:31` |

##### `anonymous` (`<unknown>`)

|  Change |   Delta |             % |              Time |   Samples | Caller        | Location                        |
| ------: | ------: | ------------: | ----------------: | --------: | ------------- | ------------------------------- |
|   -1.2% | -3.32ms | 95.8% → 97.6% | 273.0ms → 269.7ms | 204 → 200 | `require`     | `<unknown>`                     |
|     new | +1.35ms |   0.0% → 0.5% |       0ms → 1.3ms |     0 → 1 | `(anonymous)` | `node:fs:1:11`                  |
|     new | +1.35ms |   0.0% → 0.5% |       0ms → 1.3ms |     0 → 1 | `(anonymous)` | `internal:streams/compose:1:11` |
| removed | -1.34ms |   0.5% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)` | `internal:fs/glob:1:11`         |
| removed | -1.34ms |   0.5% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)` | `internal:promisify:1:11`       |

##### `length` (`./node_modules/typescript/lib/typescript.js:2375:16`)

|  Change |   Delta |             % |        Time | Samples | Caller                                 | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------------------------------------ |
| removed | -5.35ms |  57.1% → 0.0% | 5.4ms → 0ms |   4 → 0 | `getTypeReferenceArity`                | `./node_modules/typescript/lib/typescript.js:61593:33` |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `getTypeFromClassOrInterfaceReference` | `./node_modules/typescript/lib/typescript.js:62851:48` |
| removed | -1.34ms |  14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `resolveAliasWithDeprecationCheck`     | `./node_modules/typescript/lib/typescript.js:86514:44` |
| removed | -1.34ms |  14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `fillMissingTypeArguments`             | `./node_modules/typescript/lib/typescript.js:60937:36` |
| removed | -1.34ms |  14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getTypeWithThisArgument`              | `./node_modules/typescript/lib/typescript.js:59199:35` |

##### `getSymbolFlags` (`./node_modules/typescript/lib/typescript.js:52688:26`)

|  Change |   Delta |             % |          Time | Samples | Caller                | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| removed | -4.02ms |  33.3% → 0.0% |   4.0ms → 0ms |   3 → 0 | `markAliasReferenced` | `./node_modules/typescript/lib/typescript.js:72874:31 → 74157:31` |
|  -74.8% | -4.01ms | 44.4% → 33.3% | 5.4ms → 1.3ms |   4 → 1 | `getSymbol2`          | `./node_modules/typescript/lib/typescript.js:50262:22 → 51503:22` |
| +101.5% | +1.36ms | 11.1% → 66.7% | 1.3ms → 2.7ms |   1 → 2 | `symbolIsValue`       | `./node_modules/typescript/lib/typescript.js:52432:25 → 53673:25` |
| removed | -1.34ms |  11.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `checkAliasSymbol`    | `./node_modules/typescript/lib/typescript.js:86412:28`            |

##### `getSignaturesOfStructuredType` (`./node_modules/typescript/lib/typescript.js:62037:41`)

| Change |   Delta |      % |           Time | Samples | Caller                | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -59.7% | -7.99ms | 100.0% | 13.4ms → 5.4ms |  10 → 4 | `getSignaturesOfType` | `./node_modules/typescript/lib/typescript.js:60789:31 → 62044:31` |

##### `getTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js:59663:27`)

|  Change |   Delta |            % |        Time | Samples | Caller                                         | Location                                                          |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------- |
| removed | -2.68ms | 15.4% → 0.0% | 2.7ms → 0ms |   2 → 0 | `getTypeOfInstantiatedSymbol`                  | `./node_modules/typescript/lib/typescript.js:58351:39 → 59606:39` |
|     new | +1.35ms | 0.0% → 14.3% | 0ms → 1.3ms |   0 → 1 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |
|     new | +1.35ms | 0.0% → 14.3% | 0ms → 1.3ms |   0 → 1 | `getNonMissingTypeOfSymbol`                    | `./node_modules/typescript/lib/typescript.js:58439:37 → 59694:37` |
| removed | -1.34ms |  7.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `checkVariableLikeDeclaration`                 | `./node_modules/typescript/lib/typescript.js:83907:40 → 85202:40` |
| removed | -1.34ms |  7.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getNarrowedTypeOfSymbol`                      | `./node_modules/typescript/lib/typescript.js:72897:35 → 74180:35` |

##### `findIndex` (`./node_modules/typescript/lib/typescript.js:2484:19`)

|  Change |   Delta |            % |        Time | Samples | Caller                            | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------- | ------------------------------------------------------ |
| removed | -4.02ms | 60.0% → 0.0% | 4.0ms → 0ms |   3 → 0 | `getSpreadArgumentIndex`          | `./node_modules/typescript/lib/typescript.js:76523:34` |
| removed | -1.34ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `intersectUnionsOfPrimitiveTypes` | `./node_modules/typescript/lib/typescript.js:63067:43` |
| removed | -1.34ms | 20.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getStartElementCount`            | `./node_modules/typescript/lib/typescript.js:62634:32` |

##### `createBaseIdentifier` (`./node_modules/typescript/lib/typescript.js:24972:32`)

| Change |   Delta |      % |          Time | Samples | Caller             | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------------------ | ----------------------------------------------------------------- |
| -83.2% | -6.68ms | 100.0% | 8.0ms → 1.3ms |   6 → 1 | `createIdentifier` | `./node_modules/typescript/lib/typescript.js:23941:28 → 24991:28` |

##### `checkPropertyAccessExpressionOrQualifiedName` (`./node_modules/typescript/lib/typescript.js:77201:56`)

| Change |   Delta |      % |          Time | Samples | Caller                          | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| -83.2% | -6.68ms | 100.0% | 8.0ms → 1.3ms |   6 → 1 | `checkPropertyAccessExpression` | `./node_modules/typescript/lib/typescript.js:75786:41 → 77069:41` |

##### `bindWorker` (`./node_modules/typescript/lib/typescript.js:47856:22`)

| Change |   Delta |      % |           Time | Samples | Caller | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | ------ | ----------------------------------------------------------------- |
| -49.6% | -6.64ms | 100.0% | 13.4ms → 6.7ms |  10 → 5 | `bind` | `./node_modules/typescript/lib/typescript.js:46600:16 → 47793:16` |

##### `loadAndEvaluateModule` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `loadAndEvaluateModule` | `<unknown>` |

##### `writer` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                     |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `WriteStream` | `internal:fs/streams:196:21` |

##### `stream` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `createRequire` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller             | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `max` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:65804:36` |

##### `readdirSync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `readdirSync` | `<unknown>` |

##### `stringSplitFast` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                          | Location                                                        |
| -----: | ------: | -------------: | ------------: | ------: | ------------------------------- | --------------------------------------------------------------- |
| -32.8% | -2.64ms | 100.0% → 80.0% | 8.0ms → 5.4ms |   6 → 4 | `pathComponents`                | `./node_modules/typescript/lib/typescript.js:9068:24 → 9097:24` |
|    new | +1.35ms |   0.0% → 20.0% |   0ms → 1.3ms |   0 → 1 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js:123602:39`         |

##### `trimEnd` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                   | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
| removed | -2.68ms | 66.7% → 0.0% | 2.7ms → 0ms |   2 → 0 | `doJSDocScan`            | `./node_modules/typescript/lib/typescript.js:37253:27` |
| removed | -1.34ms | 33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `parseNestedTypeLiteral` | `./node_modules/typescript/lib/typescript.js:37723:38` |

##### `lastIndexOf` (`<unknown>`)

|  Change |   Delta |              % |        Time | Samples | Caller            | Location                                                          |
| ------: | ------: | -------------: | ----------: | ------: | ----------------- | ----------------------------------------------------------------- |
| removed | -2.68ms |   50.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `startsWith`      | `./node_modules/typescript/lib/typescript.js:3819:20`             |
| removed | -1.34ms |   25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getBaseFileName` | `./node_modules/typescript/lib/typescript.js:9026:25`             |
|   +0.8% | +0.01ms | 25.0% → 100.0% |       1.3ms |       1 | `doJSDocScan`     | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |

##### `resolve` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                  | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------- | ----------- |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `loadAndEvaluateModule` | `<unknown>` |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)`           | `<unknown>` |

##### `substring` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller       | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------ | ------------------------------------------------------ |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `scanString` | `./node_modules/typescript/lib/typescript.js:12396:22` |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `scanNumber` | `./node_modules/typescript/lib/typescript.js:12234:22` |

##### `trimStart` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `appendIfCommentDirective` | `./node_modules/typescript/lib/typescript.js:13330:36` |

##### `replace` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                 | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------- | ------------------------------------------------------ |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `formatStringFromArgs` | `./node_modules/typescript/lib/typescript.js:20447:30` |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `escapeString`         | `./node_modules/typescript/lib/typescript.js:18903:22` |

##### `indexOf` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ------------------------------------------------------ |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `getContextualTypeForArgument` | `./node_modules/typescript/lib/typescript.js:73758:40` |

##### `find` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                             | Location                                                          |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
| removed | -1.34ms |   33.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `checkResolvedBlockScopedVariable` | `./node_modules/typescript/lib/typescript.js:50794:44`            |
|  -49.6% | -1.33ms | 66.7% → 100.0% | 2.7ms → 1.3ms |   2 → 1 | `getClassLikeDeclarationOfSymbol`  | `./node_modules/typescript/lib/typescript.js:20238:41 → 21221:41` |

##### `Map` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                    | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------- | ------------------------------------------------------ |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `checkGrammarObjectLiteralExpression`     | `./node_modules/typescript/lib/typescript.js:91022:47` |
| removed | -1.34ms |  33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `checkUnusedLocalsAndParameters`          | `./node_modules/typescript/lib/typescript.js:83592:42` |
| removed | -1.34ms |  33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `checkObjectTypeForDuplicateDeclarations` | `./node_modules/typescript/lib/typescript.js:81951:51` |
| removed | -1.34ms |  33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `visit`                                   | `./node_modules/typescript/lib/typescript.js:52216:19` |

##### `bind` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | --------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `internal:primordials:1:11` |

##### `(anonymous)` (`node:events:1:11`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `RegExp` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ------------------------------------------------------ |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getRegexFromPattern` | `./node_modules/typescript/lib/typescript.js:21175:29` |

##### `delete` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                          | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------- | ------------------------------------------------------ |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `removeWildcardFilesWithLowerPriorityExtension` | `./node_modules/typescript/lib/typescript.js:41898:55` |

##### `exec` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller           | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- | ------------------------------------------------------ |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `extractPragmas` | `./node_modules/typescript/lib/typescript.js:38669:24` |

##### `includes` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller         | Location                                              |
| ------: | ------: | ------------: | ----------: | ------: | -------------- | ----------------------------------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `hasExtension` | `./node_modules/typescript/lib/typescript.js:8940:22` |

##### `charCodeAt` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location                                              |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ----------------------------------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getEncodedRootLength` | `./node_modules/typescript/lib/typescript.js:8971:30` |

##### `splice` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller              | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ------------------- | ------------------------------------------------------ |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `reorderCandidates` | `./node_modules/typescript/lib/typescript.js:76487:29` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                            |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  +3.5% | +172.14ms | 88.4% → 89.5% | 4.89s → 5.07s | 3,657 → 3,757 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  +2.6% | +145.74ms | 99.3% → 99.8% | 5.50s → 5.65s | 4,110 → 4,187 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                                           |
|  +2.6% | +145.73ms | 99.3% → 99.8% | 5.50s → 5.65s | 4,109 → 4,186 | `processTicksAndRejections`                | `<unknown>`                                                         |
|  +2.6% | +144.39ms | 99.3% → 99.8% | 5.50s → 5.65s | 4,110 → 4,186 | `evaluate`                                 | `<unknown>`                                                         |
|  +2.6% | +144.39ms | 99.3% → 99.8% | 5.50s → 5.65s | 4,110 → 4,186 | `moduleEvaluation`                         | `<unknown>`                                                         |
|  +8.7% | +143.36ms | 29.7% → 31.6% | 1.65s → 1.79s | 1,230 → 1,327 | `isTypeRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27`   |
|  +2.6% | +141.71ms | 99.3% → 99.8% | 5.50s → 5.65s | 4,112 → 4,186 | `loadAndEvaluateModule`                    | `<unknown>`                                                         |
|  +3.2% | +138.68ms | 79.4% → 80.1% | 4.40s → 4.54s | 3,285 → 3,363 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  +3.4% | +137.44ms | 73.2% → 74.1% | 4.06s → 4.19s | 3,031 → 3,110 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +3.1% | +137.34ms | 79.4% → 80.1% | 4.40s → 4.54s | 3,286 → 3,363 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  +3.1% | +137.33ms | 79.4% → 80.1% | 4.40s → 4.53s | 3,285 → 3,362 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  +3.4% | +136.09ms | 73.2% → 74.1% | 4.06s → 4.19s | 3,031 → 3,109 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36`   |
|  +3.1% | +135.99ms | 79.4% → 80.1% | 4.40s → 4.53s | 3,286 → 3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  +3.1% | +135.99ms | 79.4% → 80.1% | 4.40s → 4.53s | 3,286 → 3,362 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  +3.2% | +129.76ms | 74.2% → 75.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |

##### Third-party

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                            |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  +3.5% | +172.14ms | 88.4% → 89.5% | 4.89s → 5.07s | 3,657 → 3,757 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  +8.7% | +143.36ms | 29.7% → 31.6% | 1.65s → 1.79s | 1,230 → 1,327 | `isTypeRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27`   |
|  +3.2% | +138.68ms | 79.4% → 80.1% | 4.40s → 4.54s | 3,285 → 3,363 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  +3.2% | +138.67ms | 79.3% → 80.1% | 4.40s → 4.53s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  +3.4% | +137.44ms | 73.2% → 74.1% | 4.06s → 4.19s | 3,031 → 3,110 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +3.1% | +137.34ms | 79.4% → 80.1% | 4.40s → 4.54s | 3,286 → 3,363 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  +3.1% | +137.33ms | 79.4% → 80.1% | 4.40s → 4.53s | 3,285 → 3,362 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  +3.4% | +136.09ms | 73.2% → 74.1% | 4.06s → 4.19s | 3,031 → 3,109 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36`   |
|  +3.1% | +135.99ms | 79.4% → 80.1% | 4.40s → 4.53s | 3,286 → 3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  +3.1% | +135.99ms | 79.4% → 80.1% | 4.40s → 4.53s | 3,286 → 3,362 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  +3.2% | +129.76ms | 74.2% → 75.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  +3.2% | +129.76ms | 74.2% → 75.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |
|  +3.2% | +129.76ms | 74.2% → 75.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47 → 88649:47`   |
|  +4.7% | +128.66ms | 49.2% → 50.5% | 2.73s → 2.86s | 2,038 → 2,118 | `checkCallExpression`                      | `./node_modules/typescript/lib/typescript.js:78289:31 → 79584:31`   |
|  +3.1% | +127.09ms | 74.3% → 75.0% | 4.11s → 4.24s | 3,074 → 3,145 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32 → 88656:32`   |
|  +3.1% | +127.09ms | 74.3% → 75.0% | 4.11s → 4.24s | 3,074 → 3,145 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |

##### Native

|  Change |     Delta |             % |            Time |       Samples | Function                    | Location    |
| ------: | --------: | ------------: | --------------: | ------------: | --------------------------- | ----------- |
|   +2.6% | +145.73ms | 99.3% → 99.8% |   5.50s → 5.65s | 4,109 → 4,186 | `processTicksAndRejections` | `<unknown>` |
|   +2.6% | +144.39ms | 99.3% → 99.8% |   5.50s → 5.65s | 4,110 → 4,186 | `evaluate`                  | `<unknown>` |
|   +2.6% | +144.39ms | 99.3% → 99.8% |   5.50s → 5.65s | 4,110 → 4,186 | `moduleEvaluation`          | `<unknown>` |
|   +2.6% | +141.71ms | 99.3% → 99.8% |   5.50s → 5.65s | 4,112 → 4,186 | `loadAndEvaluateModule`     | `<unknown>` |
|  +29.6% |   +8.31ms |   0.5% → 0.6% | 28.1ms → 36.4ms |       21 → 27 | `readFileSync`              | `<unknown>` |
|  +10.6% |   +7.26ms |   1.2% → 1.3% | 68.3ms → 75.5ms |       51 → 56 | `generatorResume`           | `<unknown>` |
|  +24.5% |   +5.57ms |   0.4% → 0.5% | 22.8ms → 28.3ms |       17 → 21 | `statSync`                  | `<unknown>` |
| +101.5% |   +4.08ms |          0.1% |   4.0ms → 8.1ms |         3 → 6 | `SymbolLinks`               | `<unknown>` |
|     new |   +2.70ms |  0.0% → <0.1% |     0ms → 2.7ms |         0 → 2 | `bound realpathNativeSync`  | `<unknown>` |
|  +51.1% |   +1.37ms |  <0.1% → 0.1% |   2.7ms → 4.0ms |         2 → 3 | `realpathNativeSync`        | `<unknown>` |
|     new |   +1.35ms |  0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `return`                    | `<unknown>` |

##### Standard library

|  Change |    Delta |             % |            Time |       Samples | Function      | Location                          |
| ------: | -------: | ------------: | --------------: | ------------: | ------------- | --------------------------------- |
|   +3.3% | +75.67ms | 41.9% → 42.3% |   2.32s → 2.40s | 1,734 → 1,777 | `forEach`     | `<unknown>`                       |
|  +37.0% | +12.39ms |   0.6% → 0.8% | 33.5ms → 45.9ms |       25 → 34 | `next`        | `<unknown>`                       |
| +101.5% |  +6.79ms |   0.1% → 0.2% |  6.7ms → 13.5ms |        5 → 10 | `set`         | `<unknown>`                       |
|  +67.9% |  +2.73ms |          0.1% |   4.0ms → 6.7ms |         3 → 5 | `filter`      | `<unknown>`                       |
| +101.5% |  +2.72ms |  <0.1% → 0.1% |   2.7ms → 5.4ms |         2 → 4 | `unshift`     | `<unknown>`                       |
|     new |  +2.70ms |  0.0% → <0.1% |     0ms → 2.7ms |         0 → 2 | `has`         | `<unknown>`                       |
|  +13.4% |  +1.43ms |          0.2% | 10.7ms → 12.1ms |         8 → 9 | `get`         | `<unknown>`                       |
|  +26.0% |  +1.39ms |          0.1% |   5.4ms → 6.7ms |         4 → 5 | `map`         | `<unknown>`                       |
| +101.5% |  +1.36ms |         <0.1% |   1.3ms → 2.7ms |         1 → 2 | `push`        | `<unknown>`                       |
|     new |  +1.35ms |  0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `Set`         | `<unknown>`                       |
|     new |  +1.35ms |  0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `every`       | `<unknown>`                       |
|   +0.8% |  +0.03ms |          0.1% |           4.0ms |             3 | `sort`        | `<unknown>`                       |
|   +0.8% |  +0.02ms |         <0.1% |           2.7ms |             2 | `(anonymous)` | `internal:streams/compose:1:11`   |
|   +0.8% |  +0.02ms |         <0.1% |           2.7ms |             2 | `(anonymous)` | `internal:streams/operators:1:11` |
|   +0.8% |  +0.02ms |         <0.1% |           2.7ms |             2 | `replace`     | `<unknown>`                       |
|   +0.8% |  +0.01ms |         <0.1% |           1.3ms |             1 | `(anonymous)` | `internal:streams/duplex:1:11`    |
|   +0.8% |  +0.01ms |         <0.1% |           1.3ms |             1 | `shift`       | `<unknown>`                       |
|   +0.8% |  +0.01ms |         <0.1% |           1.3ms |             1 | `(anonymous)` | `node:crypto:1:11`                |
|   +0.8% |  +0.01ms |         <0.1% |           1.3ms |             1 | `values`      | `<unknown>`                       |
|   +0.8% |  +0.01ms |         <0.1% |           1.3ms |             1 | `startsWith`  | `<unknown>`                       |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function                         | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------- | ----------------------------------------------------------------- |
|  -8.2% | -46.90ms |  10.3% → 9.3% | 571.5ms → 524.6ms | 427 → 389 | `checkTypeAssignableTo`          | `./node_modules/typescript/lib/typescript.js:65233:33 → 66493:33` |
|  -7.1% | -43.87ms | 11.1% → 10.1% | 614.4ms → 570.5ms | 459 → 423 | `checkTypeAliasDeclaration`      | `./node_modules/typescript/lib/typescript.js:85990:37 → 87285:37` |
|  -5.4% | -39.02ms | 13.0% → 12.0% | 720.1ms → 681.1ms | 538 → 505 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:82238:27 → 83533:27` |
|  -5.0% | -36.33ms | 13.0% → 12.1% | 720.1ms → 683.8ms | 538 → 507 | `checkTypeArgumentConstraints`   | `./node_modules/typescript/lib/typescript.js:82186:40 → 83481:40` |
| -36.7% | -34.35ms |   1.7% → 1.0% |   93.7ms → 59.3ms |   70 → 44 | `onLeft`                         | `./node_modules/typescript/lib/typescript.js:80503:20 → 81798:20` |
| -36.7% | -34.35ms |   1.7% → 1.0% |   93.7ms → 59.3ms |   70 → 44 | `left`                           | `./node_modules/typescript/lib/typescript.js:30385:16 → 31437:16` |
| -18.7% | -31.10ms |   3.0% → 2.4% | 166.0ms → 134.9ms | 124 → 100 | `maybeCheckExpression`           | `./node_modules/typescript/lib/typescript.js:80565:34 → 81860:34` |
| -37.5% | -29.08ms |   1.4% → 0.9% |   77.6ms → 48.6ms |   58 → 36 | `setStructuredTypeMembers`       | `./node_modules/typescript/lib/typescript.js:52502:36 → 53743:36` |
| -83.9% | -28.07ms |   0.6% → 0.1% |    33.5ms → 5.4ms |    25 → 4 | `isEvolvingArrayOperationTarget` | `./node_modules/typescript/lib/typescript.js:71351:42 → 72634:42` |
| -12.6% | -25.43ms |   3.6% → 3.1% | 202.1ms → 176.7ms | 151 → 131 | `trampoline`                     | `./node_modules/typescript/lib/typescript.js:30489:22 → 31541:22` |
| -16.3% | -24.48ms |   2.7% → 2.2% | 149.9ms → 125.4ms |  112 → 93 | `typeRelatedToSomeType`          | `./node_modules/typescript/lib/typescript.js:66827:35 → 68087:35` |
| -13.6% | -24.27ms |   3.2% → 2.7% | 178.0ms → 153.7ms | 133 → 114 | `getObjectFlags`                 | `./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
| -12.3% | -24.13ms |   3.6% → 3.1% | 196.8ms → 172.6ms | 147 → 128 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:80462:12 → 81757:12` |
|  -5.8% | -23.82ms |   7.5% → 6.9% | 413.6ms → 389.8ms | 309 → 289 | `unionOrIntersectionRelatedTo`   | `./node_modules/typescript/lib/typescript.js:66757:42 → 68017:42` |
|  -8.7% | -22.32ms |   4.6% → 4.1% | 257.0ms → 234.7ms | 192 → 174 | `eachTypeRelatedToType`          | `./node_modules/typescript/lib/typescript.js:66935:35 → 68195:35` |
| -20.1% | -22.09ms |   2.0% → 1.5% |  109.8ms → 87.7ms |   82 → 65 | `getSignaturesOfStructuredType`  | `./node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |
| -17.9% | -21.99ms |   2.2% → 1.8% | 123.1ms → 101.1ms |   92 → 75 | `forEachChildInBlock`            | `./node_modules/typescript/lib/typescript.js:31198:29 → 32250:29` |
| -37.6% | -21.15ms |   1.0% → 0.6% |   56.2ms → 35.1ms |   42 → 26 | `parseTypeReference`             | `./node_modules/typescript/lib/typescript.js:33132:30 → 34187:30` |
| -21.6% | -20.84ms |   1.7% → 1.3% |   96.4ms → 75.5ms |   72 → 56 | `getNonMissingTypeOfSymbol`      | `./node_modules/typescript/lib/typescript.js:58439:37 → 59694:37` |
| -51.4% | -19.93ms |   0.7% → 0.3% |   38.8ms → 18.9ms |   29 → 14 | `getTypeOfExpression`            | `./node_modules/typescript/lib/typescript.js:81411:31 → 82706:31` |

##### Native

|  Change |    Delta |            % |              Time |   Samples | Function             | Location    |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------- | ----------- |
|   -3.4% | -11.03ms |  5.8% → 5.5% | 322.6ms → 311.5ms | 241 → 231 | `anonymous`          | `<unknown>` |
| removed | -10.71ms |  0.2% → 0.0% |      10.7ms → 0ms |     8 → 0 | `requestSatisfyUtil` | `<unknown>` |
| removed |  -9.37ms |  0.2% → 0.0% |       9.4ms → 0ms |     7 → 0 | `fetch`              | `<unknown>` |
| removed |  -9.37ms |  0.2% → 0.0% |       9.4ms → 0ms |     7 → 0 | `requestFetch`       | `<unknown>` |
| removed |  -9.37ms |  0.2% → 0.0% |       9.4ms → 0ms |     7 → 0 | `requestInstantiate` | `<unknown>` |
|  -45.7% |  -7.96ms |  0.3% → 0.2% |    17.4ms → 9.4ms |    13 → 7 | `parseModule`        | `<unknown>` |
|   -1.4% |  -4.39ms |  5.6% → 5.4% | 309.2ms → 304.8ms | 231 → 226 | `require`            | `<unknown>` |
|   -1.4% |  -4.39ms |  5.6% → 5.4% | 309.2ms → 304.8ms | 231 → 226 | `bound require`      | `<unknown>` |
| removed |  -2.68ms | <0.1% → 0.0% |       2.7ms → 0ms |     2 → 0 | `requestSatisfy`     | `<unknown>` |
| removed |  -2.68ms | <0.1% → 0.0% |       2.7ms → 0ms |     2 → 0 | `loadModule`         | `<unknown>` |
| removed |  -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `writer`             | `<unknown>` |
| removed |  -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `stream`             | `<unknown>` |
| removed |  -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `bound onceWrapper`  | `<unknown>` |
| removed |  -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createRequire`      | `<unknown>` |
| removed |  -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `max`                | `<unknown>` |
| removed |  -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `readdirSync`        | `<unknown>` |
|  -16.0% |  -1.29ms |         0.1% |     8.0ms → 6.7ms |     6 → 5 | `stringSplitFast`    | `<unknown>` |

##### Standard library

|  Change |    Delta |            % |           Time | Samples | Function         | Location                     |
| ------: | -------: | -----------: | -------------: | ------: | ---------------- | ---------------------------- |
|  -61.2% | -10.66ms |  0.3% → 0.1% | 17.4ms → 6.7ms |  13 → 5 | `slice`          | `<unknown>`                  |
|  -63.4% |  -9.33ms |  0.3% → 0.1% | 14.7ms → 5.4ms |  11 → 4 | `join`           | `<unknown>`                  |
| removed |  -4.02ms |  0.1% → 0.0% |    4.0ms → 0ms |   3 → 0 | `trimEnd`        | `<unknown>`                  |
|  -74.8% |  -4.01ms | 0.1% → <0.1% |  5.4ms → 1.3ms |   4 → 1 | `lastIndexOf`    | `<unknown>`                  |
| removed |  -2.68ms | <0.1% → 0.0% |    2.7ms → 0ms |   2 → 0 | `resolve`        | `<unknown>`                  |
| removed |  -2.68ms | <0.1% → 0.0% |    2.7ms → 0ms |   2 → 0 | `substring`      | `<unknown>`                  |
| removed |  -2.68ms | <0.1% → 0.0% |    2.7ms → 0ms |   2 → 0 | `trimStart`      | `<unknown>`                  |
| removed |  -2.68ms | <0.1% → 0.0% |    2.7ms → 0ms |   2 → 0 | `indexOf`        | `<unknown>`                  |
|  -66.4% |  -2.67ms | 0.1% → <0.1% |  4.0ms → 1.3ms |   3 → 1 | `(anonymous)`    | `node:fs:1:11`               |
|  -66.4% |  -2.67ms | 0.1% → <0.1% |  4.0ms → 1.3ms |   3 → 1 | `Map`            | `<unknown>`                  |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `bind`           | `<unknown>`                  |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `(anonymous)`    | `internal:primordials:1:11`  |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `(anonymous)`    | `internal:shared:1:11`       |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `(anonymous)`    | `internal:validators:1:11`   |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `(anonymous)`    | `node:events:1:11`           |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `(anonymous)`    | `internal:fs/glob:1:11`      |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `(anonymous)`    | `node:fs/promises:1:11`      |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `(anonymous)`    | `internal:promisify:1:11`    |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `WriteStream`    | `internal:fs/streams:196:21` |
| removed |  -1.34ms | <0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `removeListener` | `node:events:206:63`         |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

| Change |     Delta |             % |              Time |       Samples | Caller                         | Location                                                            |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------ | ------------------------------------------------------------------- |
|  +3.5% | +107.07ms |         62.9% |     3.08s → 3.19s | 2,301 → 2,363 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:83716:22 → 85011:22`   |
|  +6.0% | +101.91ms | 34.6% → 35.5% |     1.69s → 1.80s | 1,266 → 1,332 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:84112:40 → 85407:40`   |
|  +2.8% |  +50.20ms | 37.0% → 36.7% |     1.81s → 1.86s | 1,353 → 1,380 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
| +23.0% |  +29.29ms |   2.6% → 3.1% | 127.2ms → 156.4ms |      95 → 116 | `processReferencedFiles`       | `./node_modules/typescript/lib/typescript.js:124199:34 → 125781:34` |
|  +4.8% |  +28.82ms | 12.2% → 12.4% | 597.0ms → 625.8ms |     446 → 464 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:122262:23 → 123840:23` |

##### `evaluate` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Caller             | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------------ | ----------- |
|  +2.6% | +144.39ms | 100.0% | 5.50s → 5.65s | 4,110 → 4,186 | `moduleEvaluation` | `<unknown>` |

##### `moduleEvaluation` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Caller                  | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------- | ----------- |
|  +2.7% | +147.06ms | 100.0% | 5.50s → 5.65s | 4,108 → 4,186 | `loadAndEvaluateModule` | `<unknown>` |
|  +2.6% | +144.39ms | 100.0% | 5.50s → 5.65s | 4,110 → 4,186 | `moduleEvaluation`      | `<unknown>` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

| Change |    Delta |             % |              Time |   Samples | Caller                                     | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------ | ----------------------------------------------------------------- |
| +12.8% | +65.97ms | 31.4% → 32.6% | 516.7ms → 582.6ms | 386 → 432 | `isTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:65221:30 → 66481:30` |
|  +6.1% | +29.31ms | 29.4% → 28.7% | 484.5ms → 513.8ms | 362 → 381 | `isTypeIdenticalTo`                        | `./node_modules/typescript/lib/typescript.js:65203:29 → 66463:29` |
| +15.5% | +28.37ms | 11.1% → 11.8% | 183.4ms → 211.7ms | 137 → 157 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:65249:52 → 66509:52` |
|  +3.9% | +18.39ms | 28.4% → 27.1% | 467.1ms → 485.5ms | 349 → 360 | `compareTypesAssignable`                   | `./node_modules/typescript/lib/typescript.js:65209:34 → 66469:34` |
| +45.5% |  +5.49ms |   0.7% → 1.0% |   12.0ms → 17.5ms |    9 → 13 | `isTypeComparableTo`                       | `./node_modules/typescript/lib/typescript.js:65227:30 → 66487:30` |

##### `loadAndEvaluateModule` (`<unknown>`)

|  Change |     Delta |              % |          Time |       Samples | Caller                  | Location    |
| ------: | --------: | -------------: | ------------: | ------------: | ----------------------- | ----------- |
|   +2.7% | +147.06ms | 99.9% → 100.0% | 5.50s → 5.65s | 4,108 → 4,186 | `(anonymous)`           | `<unknown>` |
| removed |   -5.35ms |    0.1% → 0.0% |   5.4ms → 0ms |         4 → 0 | `loadAndEvaluateModule` | `<unknown>` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

| Change |     Delta |      % |          Time |       Samples | Caller             | Location                  |
| -----: | --------: | -----: | ------------: | ------------: | ------------------ | ------------------------- |
|  +3.2% | +138.68ms | 100.0% | 4.40s → 4.54s | 3,285 → 3,363 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |     Delta |      % |          Time |       Samples | Caller                     | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------- | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

| Change |     Delta |      % |          Time |       Samples | Caller                                     | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

| Change |     Delta |      % |          Time |       Samples | Caller                   | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------ | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

| Change |     Delta |      % |          Time |       Samples | Caller                              | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

| Change |     Delta |      % |          Time |       Samples | Caller                          | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------- | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

| Change |     Delta |              % |              Time |       Samples | Caller                                                 | Location                                                          |
| -----: | --------: | -------------: | ----------------: | ------------: | ------------------------------------------------------ | ----------------------------------------------------------------- |
|  +3.3% | +133.39ms | 100.0% → 99.9% |     4.06s → 4.19s | 3,031 → 3,107 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`   |
|  +3.7% |  +83.19ms |  55.4% → 55.5% |     2.25s → 2.33s | 1,678 → 1,727 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:79840:64 → 81135:64` |
|  -6.8% |  -41.23ms |  15.0% → 13.5% | 607.7ms → 566.4ms |     454 → 420 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:85990:37 → 87285:37` |
|  +6.9% |  +30.32ms |  10.8% → 11.2% | 439.0ms → 469.3ms |     328 → 348 | `checkFunctionOrMethodDeclaration`                     | `./node_modules/typescript/lib/typescript.js:83398:44 → 84693:44` |
|  +8.3% |  +29.71ms |    8.9% → 9.3% | 360.0ms → 389.8ms |     269 → 289 | `checkIfStatement`                                     | `./node_modules/typescript/lib/typescript.js:84128:28 → 85423:28` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

| Change |     Delta |            % |          Time |       Samples | Caller                              | Location                                                            |
| -----: | --------: | -----------: | ------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------- |
|  +3.1% | +135.99ms |       100.0% | 4.40s → 4.53s | 3,286 → 3,362 | `getDiagnosticsHelper`              | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|    new |   +1.35ms | 0.0% → <0.1% |   0ms → 1.3ms |         0 → 1 | `filterOwnedJSDocTags`              | `./node_modules/typescript/lib/typescript.js:18930:30`              |
|    new |   +1.35ms | 0.0% → <0.1% |   0ms → 1.3ms |         0 → 1 | `getRegularExpressionsForWildcards` | `./node_modules/typescript/lib/typescript.js:22090:43`              |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

| Change |     Delta |      % |          Time |       Samples | Caller        | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  +3.1% | +137.33ms | 100.0% | 4.40s → 4.53s | 3,285 → 3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

| Change |     Delta |      % |          Time |       Samples | Caller               | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | -------------------- | ----------------------------------------------------------------- |
|  +3.4% | +136.09ms | 100.0% | 4.06s → 4.19s | 3,031 → 3,109 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |     Delta |      % |          Time |       Samples | Caller    | Location                                                        |
| -----: | --------: | -----: | ------------: | ------------: | --------- | --------------------------------------------------------------- |
|  +3.1% | +135.99ms | 100.0% | 4.40s → 4.53s | 3,286 → 3,362 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

| Change |     Delta |      % |          Time |       Samples | Caller                   | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------ | ------------------------------------------------------------------- |
|  +3.1% | +137.33ms | 100.0% | 4.40s → 4.53s | 3,285 → 3,362 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

| Change |     Delta |      % |          Time |       Samples | Caller            | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------- | ----------------------------------------------------------------- |
|  +3.2% | +129.76ms | 100.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27 → 88552:27` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

| Change |     Delta |      % |          Time |       Samples | Caller                                | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------------- | ----------------------------------------------------------------- |
|  +3.2% | +129.76ms | 100.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47 → 88649:47` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

| Change |     Delta |      % |          Time |       Samples | Caller                 | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------- | ----------------------------------------------------------------- |
|  +3.2% | +129.76ms | 100.0% | 4.11s → 4.24s | 3,072 → 3,145 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32 → 88656:32` |

##### `checkCallExpression` (`./node_modules/typescript/lib/typescript.js:79584:31`)

| Change |     Delta |      % |          Time |       Samples | Caller                  | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------- | ----------------------------------------------------------------- |
|  +4.7% | +128.66ms | 100.0% | 2.73s → 2.86s | 2,038 → 2,118 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

| Change |     Delta |      % |          Time |       Samples | Caller            | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------- | ----------------------------------------------------------------- |
|  +3.1% | +127.09ms | 100.0% | 4.11s → 4.24s | 3,074 → 3,145 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:87322:27 → 88635:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

| Change |     Delta |      % |          Time |       Samples | Caller        | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  +3.1% | +127.09ms | 100.0% | 4.11s → 4.24s | 3,074 → 3,145 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `readFileSync` (`<unknown>`)

| Change |    Delta |             % |            Time | Samples | Caller           | Location                                                        |
| -----: | -------: | ------------: | --------------: | ------: | ---------------- | --------------------------------------------------------------- |
| +65.5% | +12.28ms | 66.7% → 85.2% | 18.7ms → 31.0ms | 14 → 23 | `readFileSync`   | `<unknown>`                                                     |
| +29.6% |  +8.31ms |        100.0% | 28.1ms → 36.4ms | 21 → 27 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28 → 8751:28` |

##### `generatorResume` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Caller                     | Location                                                        |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------------------------------- |
| +22.7% | +6.98ms | 45.1% → 50.0% | 30.8ms → 37.8ms | 23 → 28 | `next`                     | `<unknown>`                                                     |
|    new | +1.35ms |   0.0% → 1.8% |     0ms → 1.3ms |   0 → 1 | `return`                   | `<unknown>`                                                     |
|  -2.8% | -1.06ms | 54.9% → 48.2% | 37.5ms → 36.4ms | 28 → 27 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34 → 3059:34` |

##### `statSync` (`<unknown>`)

|  Change |   Delta |            % |            Time | Samples | Caller     | Location                                                        |
| ------: | ------: | -----------: | --------------: | ------: | ---------- | --------------------------------------------------------------- |
|  +24.5% | +5.57ms |       100.0% | 22.8ms → 28.3ms | 17 → 21 | `statSync` | `./node_modules/typescript/lib/typescript.js:8602:22 → 8631:22` |
| removed | -2.68ms | 11.8% → 0.0% |     2.7ms → 0ms |   2 → 0 | `statSync` | `<unknown>`                                                     |

##### `SymbolLinks` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller         | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | -------------- | ----------------------------------------------------------------- |
| +101.5% | +4.08ms | 100.0% | 4.0ms → 8.1ms |   3 → 6 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:49995:24 → 51236:24` |

##### `bound realpathNativeSync` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location                                              |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ----------------------------------------------------- |
|    new | +2.70ms | 0.0% → 100.0% | 0ms → 2.7ms |   0 → 2 | `realpath` | `./node_modules/typescript/lib/typescript.js:8881:22` |

##### `realpathNativeSync` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                     | Location                                                        |
| -----: | ------: | -------------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------- |
|    new | +2.70ms |   0.0% → 66.7% |   0ms → 2.7ms |   0 → 2 | `bound realpathNativeSync` | `<unknown>`                                                     |
| -49.6% | -1.33ms | 100.0% → 33.3% | 2.7ms → 1.3ms |   2 → 1 | `realpath`                 | `./node_modules/typescript/lib/typescript.js:8852:22 → 8881:22` |

##### `return` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location                                              |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------------- |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3059:34` |

##### `forEach` (`<unknown>`)

|  Change |    Delta |             % |            Time |       Samples | Caller                     | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------------: | -------------------------- | ----------------------------------------------------------------- |
|   +3.6% | +82.17ms | 98.7% → 99.0% |   2.29s → 2.37s | 1,711 → 1,759 | `checkDeferredNodes`       | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|  -30.0% | -14.47ms |   2.1% → 1.4% | 48.2ms → 33.7ms |       36 → 25 | `getNamedMembers`          | `./node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |
|  +67.9% |  +2.73ms |   0.2% → 0.3% |   4.0ms → 6.7ms |         3 → 5 | `visit`                    | `./node_modules/typescript/lib/typescript.js:52216:19 → 53457:19` |
|     new |  +1.35ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `getInferTypeParameters`   | `./node_modules/typescript/lib/typescript.js:65339:34`            |
| removed |  -1.34ms |   0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `processPragmasIntoFields` | `./node_modules/typescript/lib/typescript.js:38584:34`            |

##### `next` (`<unknown>`)

|  Change |   Delta |             % |            Time | Samples | Caller                     | Location                                                        |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------------------------------- |
|  +27.0% | +8.33ms | 92.0% → 85.3% | 30.8ms → 39.1ms | 23 → 29 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34 → 3059:34` |
| +151.9% | +4.07ms |  8.0% → 14.7% |   2.7ms → 6.7ms |   2 → 5 | `arrayFrom`                | `./node_modules/typescript/lib/typescript.js:3174:19 → 3187:19` |

##### `set` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                              | Location                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
|     new | +6.74ms | 0.0% → 50.0% | 0ms → 6.7ms |   0 → 5 | `getDeclaredTypeOfClassOrInterface` | `./node_modules/typescript/lib/typescript.js:60073:45`  |
| removed | -2.68ms | 40.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `declareSymbol`                     | `./node_modules/typescript/lib/typescript.js:44997:25`  |
| removed | -2.68ms | 40.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `updateFilesByNameMap`              | `./node_modules/typescript/lib/typescript.js:124131:32` |
|     new | +1.35ms | 0.0% → 10.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:51425:20`  |
|     new | +1.35ms | 0.0% → 10.0% | 0ms → 1.3ms |   0 → 1 | `getSpreadType`                     | `./node_modules/typescript/lib/typescript.js:65547:25`  |

##### `filter` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller                                  | Location                                                            |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| +202.3% | +2.71ms | 33.3% → 60.0% | 1.3ms → 4.0ms |   1 → 3 | `discriminateTypeByDiscriminableItems`  | `./node_modules/typescript/lib/typescript.js:68568:48 → 69828:48`   |
|   +0.8% | +0.01ms | 33.3% → 20.0% |         1.3ms |       1 | `(anonymous)`                           | `./node_modules/typescript/lib/typescript.js:16:15`                 |
|   +0.8% | +0.01ms | 33.3% → 20.0% |         1.3ms |       1 | `getDiagnosticsWithPrecedingDirectives` | `./node_modules/typescript/lib/typescript.js:123417:49 → 124999:49` |

##### `unshift` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller        | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +101.5% | +2.72ms | 100.0% | 2.7ms → 5.4ms |   2 → 4 | `addWorkItem` | `./node_modules/typescript/lib/typescript.js:31286:23 → 32338:23` |

##### `has` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller                   | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
|    new | +1.35ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `addTypeToIntersection`  | `./node_modules/typescript/lib/typescript.js:64240:33` |
|    new | +1.35ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |

##### `get` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                            | Location                                                |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------- | ------------------------------------------------------- |
| removed | -4.02ms | 37.5% → 0.0% | 4.0ms → 0ms |   3 → 0 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64979:43`  |
|     new | +2.70ms | 0.0% → 22.2% | 0ms → 2.7ms |   0 → 2 | `findSourceFileWorker`            | `./node_modules/typescript/lib/typescript.js:125566:32` |
|     new | +2.70ms | 0.0% → 22.2% | 0ms → 2.7ms |   0 → 2 | `recursiveTypeRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68323:36`  |
| removed | -2.68ms | 25.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:50184:20`  |
|     new | +1.35ms | 0.0% → 11.1% | 0ms → 1.3ms |   0 → 1 | `bindClassLikeDeclaration`        | `./node_modules/typescript/lib/typescript.js:48535:36`  |

##### `map` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller                                 | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
|     new | +2.70ms |  0.0% → 40.0% |   0ms → 2.7ms |   0 → 2 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48`            |
|     new | +2.70ms |  0.0% → 40.0% |   0ms → 2.7ms |   0 → 2 | `createInferenceContext`               | `./node_modules/typescript/lib/typescript.js:70767:34`            |
| removed | -1.34ms |  25.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `matchFiles`                           | `./node_modules/typescript/lib/typescript.js:21178:20`            |
| removed | -1.34ms |  25.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `getRegularExpressionForWildcard`      | `./node_modules/typescript/lib/typescript.js:21088:41`            |
|  -49.6% | -1.33ms | 50.0% → 20.0% | 2.7ms → 1.3ms |   2 → 1 | `convertArrayLiteralExpressionToJson`  | `./node_modules/typescript/lib/typescript.js:40782:47 → 41871:47` |

##### `push` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                                |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
|     new | +1.35ms |  0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `getTemplateLiteralType`            | `./node_modules/typescript/lib/typescript.js:64644:34`  |
|     new | +1.35ms |  0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `resolveModuleNamesReusingOldState` | `./node_modules/typescript/lib/typescript.js:124396:45` |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:38597:39`  |

##### `Set` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `getExportsOfModuleWorker` | `./node_modules/typescript/lib/typescript.js:53444:36` |

##### `every` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                       | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------- | ------------------------------------------------------ |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `isDuplicatedCommonJSExport` | `./node_modules/typescript/lib/typescript.js:88196:38` |

##### `sort` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Caller              | Location                                                        |
| -----: | ------: | -----: | ----: | ------: | ------------------- | --------------------------------------------------------------- |
|  +0.8% | +0.03ms | 100.0% | 4.0ms |       3 | `stableSortIndices` | `./node_modules/typescript/lib/typescript.js:3009:27 → 3022:27` |

##### `(anonymous)` (`internal:streams/compose:1:11`)

| Change |   Delta |      % |  Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.8% | +0.02ms | 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:streams/operators:1:11`)

| Change |   Delta |      % |  Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.8% | +0.02ms | 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `replace` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                  | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------- | ------------------------------------------------------ |
|     new | +1.35ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `toFileNameLowerCase`   | `./node_modules/typescript/lib/typescript.js:3509:29`  |
|     new | +1.35ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `getSubPatternFromSpec` | `./node_modules/typescript/lib/typescript.js:22103:31` |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `formatStringFromArgs`  | `./node_modules/typescript/lib/typescript.js:20447:30` |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `escapeString`          | `./node_modules/typescript/lib/typescript.js:18903:22` |

##### `(anonymous)` (`internal:streams/duplex:1:11`)

| Change |   Delta |      % |  Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.8% | +0.01ms | 100.0% | 1.3ms |       1 | `anonymous` | `<unknown>` |

##### `shift` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------------------ |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `removeLeadingNewlines` | `./node_modules/typescript/lib/typescript.js:38405:37` |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `removeListener`        | `node:events:206:63`                                   |

##### `(anonymous)` (`node:crypto:1:11`)

| Change |   Delta |      % |  Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.8% | +0.01ms | 100.0% | 1.3ms |       1 | `anonymous` | `<unknown>` |

##### `values` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------ |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `checkUnusedTypeParameters`         | `./node_modules/typescript/lib/typescript.js:84839:37` |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45` |

##### `startsWith` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Caller                   | Location                                                          |
| -----: | ------: | -----: | ----: | ------: | ------------------------ | ----------------------------------------------------------------- |
|  +0.8% | +0.01ms | 100.0% | 1.3ms |       1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### `checkTypeAssignableTo` (`./node_modules/typescript/lib/typescript.js:66493:33`)

|  Change |    Delta |             % |              Time |   Samples | Caller                         | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
|   -8.5% | -44.55ms | 92.0% → 91.8% | 526.0ms → 481.5ms | 393 → 357 | `checkTypeArgumentConstraints` | `./node_modules/typescript/lib/typescript.js:82186:40 → 83481:40` |
|  +67.9% | +13.64ms |   3.5% → 6.4% |   20.1ms → 33.7ms |   15 → 25 | `(anonymous)`                  | `./node_modules/typescript/lib/typescript.js:85458:27 → 86753:27` |
|  -88.8% | -10.70ms |   2.1% → 0.3% |    12.0ms → 1.3ms |     9 → 1 | `checkMappedType`              | `./node_modules/typescript/lib/typescript.js:82354:27 → 83649:27` |
| removed |  -1.34ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `checkTypePredicate`           | `./node_modules/typescript/lib/typescript.js:81707:30`            |
| removed |  -1.34ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `checkInExpression`            | `./node_modules/typescript/lib/typescript.js:80236:29`            |

##### `checkTypeAliasDeclaration` (`./node_modules/typescript/lib/typescript.js:87285:37`)

| Change |    Delta |      % |              Time |   Samples | Caller                     | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------- | ----------------------------------------------------------------- |
|  -7.1% | -43.87ms | 100.0% | 614.4ms → 570.5ms | 459 → 423 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:83533:27`)

| Change |    Delta |      % |              Time |   Samples | Caller              | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------- | ----------------------------------------------------------------- |
|  -5.4% | -39.02ms | 100.0% | 720.1ms → 681.1ms | 538 → 505 | `addLazyDiagnostic` | `./node_modules/typescript/lib/typescript.js:87339:25 → 88652:25` |

##### `checkTypeArgumentConstraints` (`./node_modules/typescript/lib/typescript.js:83481:40`)

|  Change |    Delta |             % |              Time |   Samples | Caller        | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------- | ----------------------------------------------------------------- |
|   -5.4% | -39.03ms | 99.8% → 99.4% | 718.8ms → 679.7ms | 537 → 504 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:82238:27 → 83533:27` |
| +101.5% |  +1.36ms |   0.2% → 0.4% |     1.3ms → 2.7ms |     1 → 2 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:85458:27 → 86753:27` |

##### `onLeft` (`./node_modules/typescript/lib/typescript.js:81798:20`)

| Change |    Delta |      % |            Time | Samples | Caller | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------ | ----------------------------------------------------------------- |
| -36.7% | -34.35ms | 100.0% | 93.7ms → 59.3ms | 70 → 44 | `left` | `./node_modules/typescript/lib/typescript.js:30385:16 → 31437:16` |

##### `left` (`./node_modules/typescript/lib/typescript.js:31437:16`)

| Change |    Delta |      % |            Time | Samples | Caller       | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------ | ----------------------------------------------------------------- |
| -36.7% | -34.35ms | 100.0% | 93.7ms → 59.3ms | 70 → 44 | `trampoline` | `./node_modules/typescript/lib/typescript.js:30489:22 → 31541:22` |

##### `maybeCheckExpression` (`./node_modules/typescript/lib/typescript.js:81860:34`)

| Change |    Delta |             % |            Time | Samples | Caller    | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | --------- | ----------------------------------------------------------------- |
| -36.7% | -34.35ms | 56.5% → 44.0% | 93.7ms → 59.3ms | 70 → 44 | `onLeft`  | `./node_modules/typescript/lib/typescript.js:80503:20 → 81798:20` |
|  +8.2% |  +5.95ms | 43.5% → 58.0% | 72.3ms → 78.2ms | 54 → 58 | `onRight` | `./node_modules/typescript/lib/typescript.js:80531:21 → 81826:21` |

##### `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:53743:36`)

| Change |   Delta |             % |            Time | Samples | Caller                        | Location                                                          |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
| -58.0% | -9.32ms | 20.7% → 13.9% |  16.1ms → 6.7ms |  12 → 5 | `createAnonymousType`         | `./node_modules/typescript/lib/typescript.js:52513:31 → 53754:31` |
| -36.4% | -9.25ms | 32.8% → 33.3% | 25.4ms → 16.2ms | 19 → 12 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js:59723:39 → 60978:39` |
| -24.4% | -6.54ms | 34.5% → 41.7% | 26.8ms → 20.2ms | 20 → 15 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
| -42.4% | -3.97ms | 12.1% → 11.1% |   9.4ms → 5.4ms |   7 → 4 | `resolveMappedTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59922:36 → 61177:36` |

##### `isEvolvingArrayOperationTarget` (`./node_modules/typescript/lib/typescript.js:72634:42`)

| Change |    Delta |      % |           Time | Samples | Caller            | Location                                                          |
| -----: | -------: | -----: | -------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| -83.9% | -28.07ms | 100.0% | 33.5ms → 5.4ms |  25 → 4 | `checkIdentifier` | `./node_modules/typescript/lib/typescript.js:72959:27 → 74242:27` |

##### `trampoline` (`./node_modules/typescript/lib/typescript.js:31541:22`)

| Change |    Delta |             % |              Time |   Samples | Caller         | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | -------------- | ----------------------------------------------------------------- |
| -12.3% | -24.13ms | 97.4% → 97.7% | 196.8ms → 172.6ms | 147 → 128 | `(anonymous)`  | `./node_modules/typescript/lib/typescript.js:80462:12 → 81757:12` |
| -24.4% |  -1.31ms |   2.6% → 2.3% |     5.4ms → 4.0ms |     4 → 3 | `bindChildren` | `./node_modules/typescript/lib/typescript.js:45235:24 → 46428:24` |

##### `typeRelatedToSomeType` (`./node_modules/typescript/lib/typescript.js:68087:35`)

| Change |    Delta |             % |              Time |  Samples | Caller                         | Location                                                          |
| -----: | -------: | ------------: | ----------------: | -------: | ------------------------------ | ----------------------------------------------------------------- |
| -16.2% | -23.19ms | 95.5% → 95.7% | 143.2ms → 120.0ms | 107 → 89 | `unionOrIntersectionRelatedTo` | `./node_modules/typescript/lib/typescript.js:66757:42 → 68017:42` |
| -19.4% |  -1.30ms |   4.5% → 4.3% |     6.7ms → 5.4ms |    5 → 4 | `eachTypeRelatedToSomeType`    | `./node_modules/typescript/lib/typescript.js:66809:39 → 68069:39` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|  Change |   Delta |           % |           Time | Samples | Caller                       | Location                                                          |
| ------: | ------: | ----------: | -------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
|  -49.6% | -7.97ms | 9.0% → 5.3% | 16.1ms → 8.1ms |  12 → 6 | `isEmptyAnonymousObjectType` | `./node_modules/typescript/lib/typescript.js:65967:38 → 67227:38` |
|  -66.4% | -5.33ms | 4.5% → 1.8% |  8.0ms → 2.7ms |   6 → 2 | `isNonDeferredTypeReference` | `./node_modules/typescript/lib/typescript.js:68694:38 → 69954:38` |
|     new | +4.05ms | 0.0% → 2.6% |    0ms → 4.0ms |   0 → 3 | `isRelatedTo`                | `./node_modules/typescript/lib/typescript.js:67753:25`            |
| removed | -4.02ms | 2.3% → 0.0% |    4.0ms → 0ms |   3 → 0 | `getNormalizedType`          | `./node_modules/typescript/lib/typescript.js:66148:29`            |
|  -37.0% | -3.96ms | 6.0% → 4.4% | 10.7ms → 6.7ms |   8 → 5 | `isObjectOrArrayLiteralType` | `./node_modules/typescript/lib/typescript.js:70509:38 → 71792:38` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:81757:12`)

| Change |    Delta |      % |              Time |   Samples | Caller                  | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
| -12.3% | -24.13ms | 100.0% | 196.8ms → 172.6ms | 147 → 128 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |

##### `unionOrIntersectionRelatedTo` (`./node_modules/typescript/lib/typescript.js:68017:42`)

| Change |    Delta |             % |              Time |   Samples | Caller                          | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
| -22.0% | -27.37ms | 30.1% → 24.9% |  124.5ms → 97.1ms |   93 → 72 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|  +0.3% |  +0.99ms | 74.1% → 78.9% | 306.5ms → 307.5ms | 229 → 228 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |

##### `eachTypeRelatedToType` (`./node_modules/typescript/lib/typescript.js:68195:35`)

| Change |    Delta |      % |              Time |   Samples | Caller                         | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
|  -8.7% | -22.32ms | 100.0% | 257.0ms → 234.7ms | 192 → 174 | `unionOrIntersectionRelatedTo` | `./node_modules/typescript/lib/typescript.js:66757:42 → 68017:42` |

##### `getSignaturesOfStructuredType` (`./node_modules/typescript/lib/typescript.js:62037:41`)

| Change |    Delta |      % |             Time | Samples | Caller                | Location                                                          |
| -----: | -------: | -----: | ---------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -20.1% | -22.09ms | 100.0% | 109.8ms → 87.7ms | 82 → 65 | `getSignaturesOfType` | `./node_modules/typescript/lib/typescript.js:60789:31 → 62044:31` |

##### `forEachChildInBlock` (`./node_modules/typescript/lib/typescript.js:32250:29`)

| Change |    Delta |      % |              Time | Samples | Caller         | Location                                                          |
| -----: | -------: | -----: | ----------------: | ------: | -------------- | ----------------------------------------------------------------- |
| -17.9% | -21.99ms | 100.0% | 123.1ms → 101.1ms | 92 → 75 | `forEachChild` | `./node_modules/typescript/lib/typescript.js:31237:22 → 32289:22` |

##### `parseTypeReference` (`./node_modules/typescript/lib/typescript.js:34187:30`)

| Change |    Delta |      % |            Time | Samples | Caller              | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------- | ----------------------------------------------------------------- |
| -37.6% | -21.15ms | 100.0% | 56.2ms → 35.1ms | 42 → 26 | `parseNonArrayType` | `./node_modules/typescript/lib/typescript.js:33781:29 → 34836:29` |

##### `getNonMissingTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js:59694:37`)

| Change |    Delta |      % |            Time | Samples | Caller                        | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
| -21.6% | -20.84ms | 100.0% | 96.4ms → 75.5ms | 72 → 56 | `isPropertySymbolTypeRelated` | `./node_modules/typescript/lib/typescript.js:67951:41 → 69211:41` |

##### `getTypeOfExpression` (`./node_modules/typescript/lib/typescript.js:82706:31`)

|  Change |    Delta |            % |           Time | Samples | Caller                              | Location                                                          |
| ------: | -------: | -----------: | -------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
|  -95.6% | -29.44ms | 79.3% → 7.1% | 30.8ms → 1.3ms |  23 → 1 | `isEvolvingArrayOperationTarget`    | `./node_modules/typescript/lib/typescript.js:71351:42 → 72634:42` |
|     new |  +5.39ms | 0.0% → 28.6% |    0ms → 5.4ms |   0 → 4 | `narrowTypeByInstanceof`            | `./node_modules/typescript/lib/typescript.js:73775:36`            |
| +303.0% |  +4.06ms | 3.4% → 28.6% |  1.3ms → 5.4ms |   1 → 4 | `narrowTypeByEquality`              | `./node_modules/typescript/lib/typescript.js:72281:34 → 73564:34` |
| +202.3% |  +2.71ms | 3.4% → 21.4% |  1.3ms → 4.0ms |   1 → 3 | `getAssignedTypeOfBinaryExpression` | `./node_modules/typescript/lib/typescript.js:71082:45 → 72365:45` |
| removed |  -2.68ms |  6.9% → 0.0% |    2.7ms → 0ms |   2 → 0 | `getTypeOfSwitchClause`             | `./node_modules/typescript/lib/typescript.js:71172:33`            |

##### `anonymous` (`<unknown>`)

|  Change |   Delta |             % |              Time |   Samples | Caller        | Location                   |
| ------: | ------: | ------------: | ----------------: | --------: | ------------- | -------------------------- |
|  -56.8% | -5.32ms |   2.9% → 1.3% |     9.4ms → 4.0ms |     7 → 3 | `(anonymous)` | `<unknown>`                |
|   -1.4% | -4.39ms | 95.9% → 97.8% | 309.2ms → 304.8ms | 231 → 226 | `require`     | `<unknown>`                |
|  -66.4% | -2.67ms |   1.2% → 0.4% |     4.0ms → 1.3ms |     3 → 1 | `(anonymous)` | `node:fs:1:11`             |
| removed | -1.34ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)` | `internal:shared:1:11`     |
| removed | -1.34ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)` | `internal:validators:1:11` |

##### `requestSatisfyUtil` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller           | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ---------------- | ----------- |
| removed | -8.03ms | 75.0% → 0.0% | 8.0ms → 0ms |   6 → 0 | `(anonymous)`    | `<unknown>` |
| removed | -2.68ms | 25.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `requestSatisfy` | `<unknown>` |

##### `fetch` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller         | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------- | ----------- |
| removed | -9.37ms | 100.0% → 0.0% | 9.4ms → 0ms |   7 → 0 | `requestFetch` | `<unknown>` |

##### `requestFetch` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -9.37ms | 100.0% → 0.0% | 9.4ms → 0ms |   7 → 0 | `(anonymous)` | `<unknown>` |

##### `requestInstantiate` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller               | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
| removed | -9.37ms | 100.0% → 0.0% | 9.4ms → 0ms |   7 → 0 | `requestSatisfyUtil` | `<unknown>` |

##### `parseModule` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller        | Location    |
| -----: | ------: | -----: | -------------: | ------: | ------------- | ----------- |
| -45.7% | -7.96ms | 100.0% | 17.4ms → 9.4ms |  13 → 7 | `(anonymous)` | `<unknown>` |

##### `require` (`<unknown>`)

| Change |   Delta |      % |              Time |   Samples | Caller          | Location    |
| -----: | ------: | -----: | ----------------: | --------: | --------------- | ----------- |
|  -1.4% | -4.39ms | 100.0% | 309.2ms → 304.8ms | 231 → 226 | `bound require` | `<unknown>` |

##### `bound require` (`<unknown>`)

|  Change |   Delta |           % |              Time |   Samples | Caller             | Location                                                        |
| ------: | ------: | ----------: | ----------------: | --------: | ------------------ | --------------------------------------------------------------- |
|   -1.4% | -4.39ms |      100.0% | 309.2ms → 304.8ms | 231 → 226 | `typeCheckProject` | `./tsc-workload.mjs:3:33`                                       |
| removed | -1.34ms | 0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)`      | `./node_modules/typescript/lib/typescript.js:16:15`             |
|  -49.6% | -1.33ms | 0.9% → 0.4% |     2.7ms → 1.3ms |     2 → 1 | `getNodeSystem`    | `./node_modules/typescript/lib/typescript.js:8460:25 → 8489:25` |

##### `requestSatisfy` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller       | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------ | ----------- |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `loadModule` | `<unknown>` |

##### `loadModule` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ----------- |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `loadModule`            | `<unknown>` |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `loadAndEvaluateModule` | `<unknown>` |

##### `writer` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                     |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `WriteStream` | `internal:fs/streams:196:21` |

##### `stream` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `bound onceWrapper` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ------ | ------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `emit` | `node:events:78:48` |

##### `createRequire` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller             | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `max` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:65804:36` |

##### `readdirSync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                           | Location                                              |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------- | ----------------------------------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `readdirSync`                    | `<unknown>`                                           |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getAccessibleFileSystemEntries` | `./node_modules/typescript/lib/typescript.js:8776:44` |

##### `stringSplitFast` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                          | Location                                                        |
| -----: | ------: | -------------: | ------------: | ------: | ------------------------------- | --------------------------------------------------------------- |
| -32.8% | -2.64ms | 100.0% → 80.0% | 8.0ms → 5.4ms |   6 → 4 | `pathComponents`                | `./node_modules/typescript/lib/typescript.js:9068:24 → 9097:24` |
|    new | +1.35ms |   0.0% → 20.0% |   0ms → 1.3ms |   0 → 1 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js:123602:39`         |

##### `slice` (`<unknown>`)

|  Change |   Delta |              % |        Time | Samples | Caller                     | Location                                                        |
| ------: | ------: | -------------: | ----------: | ------: | -------------------------- | --------------------------------------------------------------- |
| removed | -9.37ms |   53.8% → 0.0% | 9.4ms → 0ms |   7 → 0 | `addRange`                 | `./node_modules/typescript/lib/typescript.js:2979:18`           |
| removed | -1.34ms |    7.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `fillMissingTypeArguments` | `./node_modules/typescript/lib/typescript.js:60937:36`          |
|   +0.8% | +0.05ms | 38.5% → 100.0% |       6.7ms |       5 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16 → 2546:16` |

##### `join` (`<unknown>`)

| Change |    Delta |             % |           Time | Samples | Caller               | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------------------------------- |
| -79.8% | -10.69ms | 90.9% → 50.0% | 13.4ms → 2.7ms |  10 → 2 | `doJSDocScan`        | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
|    new |  +1.35ms |  0.0% → 25.0% |    0ms → 1.3ms |   0 → 1 | `getPathWithoutRoot` | `./node_modules/typescript/lib/typescript.js:9179:28`             |
|  +0.8% |  +0.01ms |  9.1% → 25.0% |          1.3ms |       1 | `parseTagComments`   | `./node_modules/typescript/lib/typescript.js:37509:32 → 38564:32` |

##### `trimEnd` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                   | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
| removed | -2.68ms | 66.7% → 0.0% | 2.7ms → 0ms |   2 → 0 | `doJSDocScan`            | `./node_modules/typescript/lib/typescript.js:37253:27` |
| removed | -1.34ms | 33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `parseNestedTypeLiteral` | `./node_modules/typescript/lib/typescript.js:37723:38` |

##### `lastIndexOf` (`<unknown>`)

|  Change |   Delta |              % |        Time | Samples | Caller            | Location                                                          |
| ------: | ------: | -------------: | ----------: | ------: | ----------------- | ----------------------------------------------------------------- |
| removed | -2.68ms |   50.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `startsWith`      | `./node_modules/typescript/lib/typescript.js:3819:20`             |
| removed | -1.34ms |   25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getBaseFileName` | `./node_modules/typescript/lib/typescript.js:9026:25`             |
|   +0.8% | +0.01ms | 25.0% → 100.0% |       1.3ms |       1 | `doJSDocScan`     | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |

##### `resolve` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                  | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------- | ----------- |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `loadAndEvaluateModule` | `<unknown>` |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)`           | `<unknown>` |

##### `substring` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller       | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------ | ------------------------------------------------------ |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `scanString` | `./node_modules/typescript/lib/typescript.js:12396:22` |
| removed | -1.34ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `scanNumber` | `./node_modules/typescript/lib/typescript.js:12234:22` |

##### `trimStart` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `appendIfCommentDirective` | `./node_modules/typescript/lib/typescript.js:13330:36` |

##### `indexOf` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ------------------------------------------------------ |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `getContextualTypeForArgument` | `./node_modules/typescript/lib/typescript.js:73758:40` |

##### `(anonymous)` (`node:fs:1:11`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| -66.4% | -2.67ms | 100.0% | 4.0ms → 1.3ms |   3 → 1 | `anonymous` | `<unknown>` |

##### `Map` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                    | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------- | ------------------------------------------------------ |
|     new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `checkGrammarObjectLiteralExpression`     | `./node_modules/typescript/lib/typescript.js:91022:47` |
| removed | -1.34ms |  33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `checkUnusedLocalsAndParameters`          | `./node_modules/typescript/lib/typescript.js:83592:42` |
| removed | -1.34ms |  33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `checkObjectTypeForDuplicateDeclarations` | `./node_modules/typescript/lib/typescript.js:81951:51` |
| removed | -1.34ms |  33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `visit`                                   | `./node_modules/typescript/lib/typescript.js:52216:19` |

##### `bind` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | --------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `internal:primordials:1:11` |

##### `(anonymous)` (`internal:primordials:1:11`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:shared:1:11`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:validators:1:11`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:events:1:11`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/glob:1:11`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:fs/promises:1:11`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:promisify:1:11`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `WriteStream` (`internal:fs/streams:196:21`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `removeListener` (`node:events:206:63`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location             |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | -------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `onceWrapper` | `node:events:192:21` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

| Change |     Delta |             % |              Time |       Samples | Callee               | Location                                                            |
| -----: | --------: | ------------: | ----------------: | ------------: | -------------------- | ------------------------------------------------------------------- |
|  +3.3% | +133.39ms | 82.9% → 82.7% |     4.06s → 4.19s | 3,031 → 3,107 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +8.7% |  +36.96ms |   8.7% → 9.1% | 425.6ms → 462.6ms |     318 → 343 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
| +23.0% |  +29.29ms |   2.6% → 3.1% | 127.2ms → 156.4ms |      95 → 116 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35` |
| +36.0% |   +9.64ms |   0.5% → 0.7% |   26.8ms → 36.4ms |       20 → 27 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:85042:37 → 86337:37`   |
|  +5.2% |   +9.48ms |   3.7% → 3.8% | 182.0ms → 191.5ms |     136 → 142 | `bind`               | `./node_modules/typescript/lib/typescript.js:46600:16 → 47793:16`   |

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

| Change |     Delta |             % |              Time |       Samples | Callee                             | Location                                                            |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------- | ------------------------------------------------------------------- |
|  +3.2% | +138.68ms | 79.9% → 80.3% |     4.40s → 4.54s | 3,285 → 3,363 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  +2.0% |  +15.13ms | 13.6% → 13.5% | 746.9ms → 762.0ms |     558 → 565 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js:122262:23 → 123840:23` |
|  -1.4% |   -4.39ms |   5.6% → 5.4% | 309.2ms → 304.8ms |     231 → 226 | `bound require`                    | `<unknown>`                                                         |
|  -7.9% |   -3.69ms |   0.9% → 0.8% |   46.8ms → 43.2ms |       35 → 32 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js:40536:42 → 41625:42`   |
|    new |   +1.35ms |  0.0% → <0.1% |       0ms → 1.3ms |         0 → 1 | `findConfigFile`                   | `./node_modules/typescript/lib/typescript.js:123025:24`             |

##### `processTicksAndRejections` (`<unknown>`)

|  Change |     Delta |            % |          Time |       Samples | Callee        | Location                          |
| ------: | --------: | -----------: | ------------: | ------------: | ------------- | --------------------------------- |
|   +2.7% | +147.06ms |       100.0% | 5.50s → 5.65s | 4,108 → 4,186 | `(anonymous)` | `<unknown>`                       |
| removed |   -1.34ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `onConstruct` | `internal:streams/destroy:128:23` |

##### `moduleEvaluation` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Callee             | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------------ | ----------- |
|  +2.6% | +144.39ms | 100.0% | 5.50s → 5.65s | 4,110 → 4,186 | `evaluate`         | `<unknown>` |
|  +2.6% | +144.39ms | 100.0% | 5.50s → 5.65s | 4,110 → 4,186 | `moduleEvaluation` | `<unknown>` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

|  Change |     Delta |             % |           Time |       Samples | Callee                  | Location                                                          |
| ------: | --------: | ------------: | -------------: | ------------: | ----------------------- | ----------------------------------------------------------------- |
|   +7.9% | +125.44ms | 96.9% → 96.2% |  1.60s → 1.72s | 1,192 → 1,276 | `checkTypeRelatedTo`    | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| +121.7% |   +8.14ms |   0.4% → 0.8% | 6.7ms → 14.8ms |        5 → 11 | `getRelationKey`        | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
| +605.3% |   +8.10ms |   0.1% → 0.5% |  1.3ms → 9.4ms |         1 → 7 | `isFreshLiteralType`    | `./node_modules/typescript/lib/typescript.js:64408:30 → 65663:30` |
|  +34.3% |   +1.38ms |   0.2% → 0.3% |  4.0ms → 5.4ms |         3 → 4 | `isSimpleTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66052:33 → 67312:33` |

##### `loadAndEvaluateModule` (`<unknown>`)

|  Change |     Delta |              % |          Time |       Samples | Callee                  | Location    |
| ------: | --------: | -------------: | ------------: | ------------: | ----------------------- | ----------- |
|   +2.7% | +147.06ms | 99.9% → 100.0% | 5.50s → 5.65s | 4,108 → 4,186 | `moduleEvaluation`      | `<unknown>` |
| removed |   -5.35ms |    0.1% → 0.0% |   5.4ms → 0ms |         4 → 0 | `loadAndEvaluateModule` | `<unknown>` |
| removed |   -2.68ms |   <0.1% → 0.0% |   2.7ms → 0ms |         2 → 0 | `loadModule`            | `<unknown>` |
| removed |   -1.34ms |   <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `resolve`               | `<unknown>` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

| Change |     Delta |      % |          Time |       Samples | Callee                 | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------- | ------------------------------------------------------------------- |
|  +3.1% | +137.33ms | 100.0% | 4.40s → 4.53s | 3,285 → 3,362 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |     Delta |             % |              Time |       Samples | Callee                             | Location                                                            |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------- | ------------------------------------------------------------------- |
|  +3.1% | +127.09ms | 93.6% → 93.5% |     4.11s → 4.24s | 3,074 → 3,145 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  +3.7% |  +10.21ms |   6.3% → 6.4% | 278.4ms → 288.6ms |     208 → 214 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:123266:26 → 124848:26` |
|  +0.8% |   +0.02ms |          0.1% |             2.7ms |             2 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:123405:44 → 124987:44` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

| Change |     Delta |      % |          Time |       Samples | Callee        | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

| Change |     Delta |      % |          Time |       Samples | Callee                     | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------- | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

| Change |     Delta |      % |          Time |       Samples | Callee                                     | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

| Change |     Delta |      % |          Time |       Samples | Callee                   | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------ | ------------------------------------------------------------------- |
|  +3.2% | +138.67ms | 100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

| Change |     Delta |      % |          Time |       Samples | Callee                     | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------- | ----------------------------------------------------------------- |
|  +3.4% | +136.09ms | 100.0% | 4.06s → 4.19s | 3,031 → 3,109 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

| Change |     Delta |            % |          Time |       Samples | Callee        | Location                                                            |
| -----: | --------: | -----------: | ------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  +3.1% | +135.99ms |       100.0% | 4.40s → 4.53s | 3,286 → 3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|    new |   +1.35ms | 0.0% → <0.1% |   0ms → 1.3ms |         0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:18932:28`              |
|    new |   +1.35ms | 0.0% → <0.1% |   0ms → 1.3ms |         0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:22094:25`              |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|  Change |     Delta |            % |          Time |       Samples | Callee                              | Location                                                            |
| ------: | --------: | -----------: | ------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------- |
|   +3.2% | +138.67ms |       100.0% | 4.40s → 4.53s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
| removed |   -1.34ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `getProgramDiagnostics`             | `./node_modules/typescript/lib/typescript.js:123337:33`             |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

| Change |     Delta |             % |              Time |       Samples | Callee                      | Location                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | --------------------------- | ----------------------------------------------------------------- |
|  +3.5% | +107.07ms | 75.9% → 76.0% |     3.08s → 3.19s | 2,301 → 2,363 | `checkBlock`                | `./node_modules/typescript/lib/typescript.js:83716:22 → 85011:22` |
|  +6.2% | +104.59ms | 41.7% → 42.8% |     1.69s → 1.80s | 1,264 → 1,332 | `checkVariableDeclaration`  | `./node_modules/typescript/lib/typescript.js:84101:36 → 85396:36` |
|  +5.7% |  +96.46ms | 41.6% → 42.5% |     1.69s → 1.78s | 1,260 → 1,322 | `checkVariableStatement`    | `./node_modules/typescript/lib/typescript.js:84119:34 → 85414:34` |
|  +7.5% |  +49.56ms | 16.4% → 17.0% | 663.9ms → 713.4ms |     496 → 529 | `checkClassDeclaration`     | `./node_modules/typescript/lib/typescript.js:85417:33 → 86712:33` |
|  -7.1% |  -43.87ms | 15.1% → 13.6% | 614.4ms → 570.5ms |     459 → 423 | `checkTypeAliasDeclaration` | `./node_modules/typescript/lib/typescript.js:85990:37 → 87285:37` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |     Delta |      % |          Time |       Samples | Callee                          | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------- | ------------------------------------------------------------------- |
|  +3.1% | +137.33ms | 100.0% | 4.40s → 4.53s | 3,285 → 3,362 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                                                        |
| -----: | --------: | -----: | ------------: | ------------: | --------- | --------------------------------------------------------------- |
|  +3.1% | +135.99ms | 100.0% | 4.40s → 4.53s | 3,286 → 3,362 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|  Change |    Delta |             % |          Time |       Samples | Callee                       | Location                                                          |
| ------: | -------: | ------------: | ------------: | ------------: | ---------------------------- | ----------------------------------------------------------------- |
|   +3.6% | +83.52ms | 55.7% → 56.0% | 2.29s → 2.37s | 1,711 → 1,760 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|   +2.8% | +50.20ms | 44.0% → 43.9% | 1.81s → 1.86s | 1,353 → 1,380 | `forEach`                    | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`   |
| removed |  -1.34ms |  <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js:86845:38`            |
| removed |  -1.34ms |  <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `clear`                      | `./node_modules/typescript/lib/typescript.js:2564:15`             |
|  -16.0% |  -1.29ms |          0.2% | 8.0ms → 6.7ms |         6 → 5 | `addLazyDiagnostic`          | `./node_modules/typescript/lib/typescript.js:87339:25 → 88652:25` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

| Change |     Delta |      % |          Time |       Samples | Callee                  | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------- | ----------------------------------------------------------------- |
|  +3.2% | +129.76ms | 100.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

| Change |     Delta |      % |          Time |       Samples | Callee            | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------- | ----------------------------------------------------------------- |
|  +3.2% | +129.76ms | 100.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27 → 88552:27` |

##### `checkCallExpression` (`./node_modules/typescript/lib/typescript.js:79584:31`)

|  Change |     Delta |             % |            Time |       Samples | Callee                        | Location                                                          |
| ------: | --------: | ------------: | --------------: | ------------: | ----------------------------- | ----------------------------------------------------------------- |
|   +4.0% | +101.88ms | 94.4% → 93.7% |   2.58s → 2.68s | 1,924 → 1,985 | `getResolvedSignature`        | `./node_modules/typescript/lib/typescript.js:78173:32 → 79468:32` |
|  +33.3% |  +13.80ms |   1.5% → 1.9% | 41.5ms → 55.3ms |       31 → 41 | `checkDeprecatedSignature`    | `./node_modules/typescript/lib/typescript.js:78343:36 → 79638:36` |
| +101.5% |   +1.36ms |  <0.1% → 0.1% |   1.3ms → 2.7ms |         1 → 2 | `checkGrammarTypeArguments`   | `./node_modules/typescript/lib/typescript.js:89580:37 → 90922:37` |
|     new |   +1.35ms |  0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `isSymbolOrSymbolForCall`     | `./node_modules/typescript/lib/typescript.js:79670:35`            |
|     new |   +1.35ms |  0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `getTypePredicateOfSignature` | `./node_modules/typescript/lib/typescript.js:62417:39`            |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

|  Change |     Delta |              % |          Time |       Samples | Callee                                | Location                                                          |
| ------: | --------: | -------------: | ------------: | ------------: | ------------------------------------- | ----------------------------------------------------------------- |
|   +3.2% | +129.76ms | 99.9% → 100.0% | 4.11s → 4.24s | 3,072 → 3,145 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47 → 88649:47` |
| removed |   -2.68ms |    0.1% → 0.0% |   2.7ms → 0ms |         2 → 0 | `getDiagnostics2`                     | `./node_modules/typescript/lib/typescript.js:18843:27`            |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

| Change |     Delta |      % |          Time |       Samples | Callee                 | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------- | ----------------------------------------------------------------- |
|  +3.1% | +127.09ms | 100.0% | 4.11s → 4.24s | 3,074 → 3,145 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32 → 88656:32` |

##### `readFileSync` (`<unknown>`)

| Change |    Delta |             % |            Time | Samples | Callee         | Location    |
| -----: | -------: | ------------: | --------------: | ------: | -------------- | ----------- |
| +65.5% | +12.28ms | 66.7% → 85.2% | 18.7ms → 31.0ms | 14 → 23 | `readFileSync` | `<unknown>` |

##### `generatorResume` (`<unknown>`)

| Change |   Delta |              % |            Time | Samples | Callee                   | Location                                                            |
| -----: | ------: | -------------: | --------------: | ------: | ------------------------ | ------------------------------------------------------------------- |
|  +8.7% | +5.91ms | 100.0% → 98.2% | 68.3ms → 74.2ms | 51 → 55 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js:69709:108 → 70992:108` |

##### `statSync` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee     | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ----------- |
| removed | -2.68ms | 11.8% → 0.0% | 2.7ms → 0ms |   2 → 0 | `statSync` | `<unknown>` |

##### `bound realpathNativeSync` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee               | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
|    new | +2.70ms | 0.0% → 100.0% | 0ms → 2.7ms |   0 → 2 | `realpathNativeSync` | `<unknown>` |

##### `return` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `generatorResume` | `<unknown>` |

##### `forEach` (`<unknown>`)

|  Change |    Delta |             % |            Time |       Samples | Callee              | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------------: | ------------------- | ----------------------------------------------------------------- |
|   +3.7% | +83.50ms | 98.6% → 98.9% |   2.29s → 2.37s | 1,709 → 1,758 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |
|  -21.1% |  -6.51ms |   1.3% → 1.0% | 30.8ms → 24.3ms |       23 → 18 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
| +101.5% |  +2.72ms |   0.1% → 0.2% |   2.7ms → 5.4ms |         2 → 4 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52218:32 → 53459:32` |
|     new |  +1.35ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:65342:27`            |
|     new |  +1.35ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:53481:29`            |

##### `next` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Callee            | Location    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------- | ----------- |
| +22.7% | +6.98ms | 92.0% → 82.4% | 30.8ms → 37.8ms | 23 → 28 | `generatorResume` | `<unknown>` |

##### `filter` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee        | Location                                                |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | ------------------------------------------------------- |
|     new | +1.35ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:41264:66`  |
|     new | +1.35ms | 0.0% → 20.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:125001:48` |
| removed | -1.34ms | 33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:40182:69`  |

##### `map` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Callee        | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | ----------------------------------------------------------------- |
|     new | +1.35ms |  0.0% → 20.0% |   0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:69830:31`            |
| removed | -1.34ms |  25.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21182:95`            |
| removed | -1.34ms |  25.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21093:32`            |
|  -49.6% | -1.33ms | 50.0% → 20.0% | 2.7ms → 1.3ms |   2 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:40787:32 → 41876:32` |

##### `every` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee        | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------------ |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:88197:74` |

##### `sort` (`<unknown>`)

| Change |   Delta |      % |  Time | Samples | Callee        | Location                                                        |
| -----: | ------: | -----: | ----: | ------: | ------------- | --------------------------------------------------------------- |
|  +0.8% | +0.03ms | 100.0% | 4.0ms |       3 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:3010:16 → 3023:16` |

##### `(anonymous)` (`internal:streams/compose:1:11`)

| Change |   Delta |      % |  Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.8% | +0.02ms | 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:streams/operators:1:11`)

| Change |   Delta |      % |  Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.8% | +0.02ms | 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `replace` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Callee                                     | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------------ | ------------------------------------------------------ |
|    new | +1.35ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g` | `<unknown>`                                            |
|    new | +1.35ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `replaceWildcardCharacter`                 | `./node_modules/typescript/lib/typescript.js:22060:29` |

##### `(anonymous)` (`internal:streams/duplex:1:11`)

| Change |   Delta |      % |  Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.8% | +0.01ms | 100.0% | 1.3ms |       1 | `anonymous` | `<unknown>` |

##### `checkTypeAssignableTo` (`./node_modules/typescript/lib/typescript.js:66493:33`)

| Change |    Delta |      % |              Time |   Samples | Callee               | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------- | ----------------------------------------------------------------- |
|  -8.2% | -46.90ms | 100.0% | 571.5ms → 524.6ms | 427 → 389 | `checkTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |

##### `checkTypeAliasDeclaration` (`./node_modules/typescript/lib/typescript.js:87285:37`)

|  Change |    Delta |             % |              Time |   Samples | Callee                              | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------- | ----------------------------------------------------------------- |
|   -6.8% | -41.23ms | 98.9% → 99.3% | 607.7ms → 566.4ms | 454 → 420 | `checkSourceElement`                | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |
| removed |  -2.68ms |   0.4% → 0.0% |       2.7ms → 0ms |     2 → 0 | `checkTypeParameters`               | `./node_modules/typescript/lib/typescript.js:85263:31`            |
|     new |  +1.35ms |   0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `registerForUnusedIdentifiersCheck` | `./node_modules/typescript/lib/typescript.js:84736:45`            |
| removed |  -1.34ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `checkTypeNameIsReserved`           | `./node_modules/typescript/lib/typescript.js:85203:35`            |
| removed |  -1.34ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `checkExportsOnMergedDeclarations`  | `./node_modules/typescript/lib/typescript.js:82638:44`            |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:83533:27`)

| Change |    Delta |     % |              Time |   Samples | Callee                                      | Location                                                          |
| -----: | -------: | ----: | ----------------: | --------: | ------------------------------------------- | ----------------------------------------------------------------- |
|  -5.4% | -39.03ms | 99.8% | 718.8ms → 679.7ms | 537 → 504 | `checkTypeArgumentConstraints`              | `./node_modules/typescript/lib/typescript.js:82186:40 → 83481:40` |
|  +0.8% |  +0.01ms |  0.2% |             1.3ms |         1 | `getTypeParametersForTypeReferenceOrImport` | `./node_modules/typescript/lib/typescript.js:82213:53 → 83508:53` |

##### `checkTypeArgumentConstraints` (`./node_modules/typescript/lib/typescript.js:83481:40`)

|  Change |    Delta |             % |              Time |   Samples | Callee                         | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
|   -8.5% | -44.55ms | 73.0% → 70.4% | 526.0ms → 481.5ms | 393 → 357 | `checkTypeAssignableTo`        | `./node_modules/typescript/lib/typescript.js:65233:33 → 66493:33` |
|   +3.6% |  +6.85ms | 26.6% → 29.0% | 191.4ms → 198.3ms | 143 → 147 | `getEffectiveTypeArguments2`   | `./node_modules/typescript/lib/typescript.js:82183:38 → 83478:38` |
| +101.5% |  +1.36ms |   0.2% → 0.4% |     1.3ms → 2.7ms |     1 → 2 | `getConstraintOfTypeParameter` | `./node_modules/typescript/lib/typescript.js:60199:40 → 61454:40` |
| removed |  -1.34ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `instantiateType`              | `./node_modules/typescript/lib/typescript.js:64996:27`            |

##### `onLeft` (`./node_modules/typescript/lib/typescript.js:81798:20`)

| Change |    Delta |      % |            Time | Samples | Callee                 | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| -36.7% | -34.35ms | 100.0% | 93.7ms → 59.3ms | 70 → 44 | `maybeCheckExpression` | `./node_modules/typescript/lib/typescript.js:80565:34 → 81860:34` |

##### `left` (`./node_modules/typescript/lib/typescript.js:31437:16`)

| Change |    Delta |      % |            Time | Samples | Callee   | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | -------- | ----------------------------------------------------------------- |
| -36.7% | -34.35ms | 100.0% | 93.7ms → 59.3ms | 70 → 44 | `onLeft` | `./node_modules/typescript/lib/typescript.js:80503:20 → 81798:20` |

##### `maybeCheckExpression` (`./node_modules/typescript/lib/typescript.js:81860:34`)

|  Change |    Delta |              % |              Time |   Samples | Callee               | Location                                                          |
| ------: | -------: | -------------: | ----------------: | --------: | -------------------- | ----------------------------------------------------------------- |
|  -18.1% | -29.77ms | 99.2% → 100.0% | 164.6ms → 134.9ms | 123 → 100 | `checkExpression`    | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
| removed |  -1.34ms |    0.8% → 0.0% |       1.3ms → 0ms |     1 → 0 | `isBinaryExpression` | `./node_modules/typescript/lib/typescript.js:29192:28`            |

##### `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:53743:36`)

| Change |    Delta |             % |            Time | Samples | Callee            | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| -32.8% | -14.50ms | 56.9% → 61.1% | 44.2ms → 29.7ms | 33 → 22 | `getNamedMembers` | `./node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |

##### `isEvolvingArrayOperationTarget` (`./node_modules/typescript/lib/typescript.js:72634:42`)

| Change |    Delta |             % |           Time | Samples | Callee                | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -95.6% | -29.44ms | 92.0% → 25.0% | 30.8ms → 1.3ms |  23 → 1 | `getTypeOfExpression` | `./node_modules/typescript/lib/typescript.js:81411:31 → 82706:31` |
|  +0.8% |  +0.01ms |  4.0% → 25.0% |          1.3ms |       1 | `getReferenceRoot`    | `./node_modules/typescript/lib/typescript.js:71168:28 → 72451:28` |

##### `trampoline` (`./node_modules/typescript/lib/typescript.js:31541:22`)

|  Change |    Delta |             % |            Time | Samples | Callee     | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ----------------------------------------------------------------- |
|  -36.7% | -34.35ms | 46.4% → 33.6% | 93.7ms → 59.3ms | 70 → 44 | `left`     | `./node_modules/typescript/lib/typescript.js:30385:16 → 31437:16` |
| +202.3% |  +5.42ms |   1.3% → 4.6% |   2.7ms → 8.1ms |   2 → 6 | `enter`    | `./node_modules/typescript/lib/typescript.js:30377:17 → 31429:17` |
|   +6.1% |  +4.63ms | 37.7% → 45.8% | 76.3ms → 80.9ms | 57 → 60 | `right`    | `./node_modules/typescript/lib/typescript.js:30405:17 → 31457:17` |
|  -13.0% |  -3.82ms | 14.6% → 14.5% | 29.4ms → 25.6ms | 22 → 19 | `exit`     | `./node_modules/typescript/lib/typescript.js:30417:16 → 31469:16` |
|  +51.1% |  +1.37ms |   1.3% → 2.3% |   2.7ms → 4.0ms |   2 → 3 | `operator` | `./node_modules/typescript/lib/typescript.js:30397:20 → 31449:20` |

##### `typeRelatedToSomeType` (`./node_modules/typescript/lib/typescript.js:68087:35`)

|  Change |    Delta |             % |              Time |  Samples | Callee                | Location                                                          |
| ------: | -------: | ------------: | ----------------: | -------: | --------------------- | ----------------------------------------------------------------- |
|  -10.3% | -13.82ms | 89.3% → 95.7% | 133.8ms → 120.0ms | 100 → 89 | `isRelatedTo`         | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|  -77.6% |  -9.35ms |   8.0% → 2.2% |    12.0ms → 2.7ms |    9 → 2 | `getBestMatchingType` | `./node_modules/typescript/lib/typescript.js:68565:31 → 69825:31` |
| removed |  -1.34ms |   0.9% → 0.0% |       1.3ms → 0ms |    1 → 0 | `getObjectFlags`      | `./node_modules/typescript/lib/typescript.js:20242:24`            |
| removed |  -1.34ms |   0.9% → 0.0% |       1.3ms → 0ms |    1 → 0 | `containsType`        | `./node_modules/typescript/lib/typescript.js:62659:24`            |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:81757:12`)

| Change |    Delta |      % |              Time |   Samples | Callee       | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------ | ----------------------------------------------------------------- |
| -12.3% | -24.13ms | 100.0% | 196.8ms → 172.6ms | 147 → 128 | `trampoline` | `./node_modules/typescript/lib/typescript.js:30489:22 → 31541:22` |

##### `unionOrIntersectionRelatedTo` (`./node_modules/typescript/lib/typescript.js:68017:42`)

|  Change |    Delta |             % |              Time |   Samples | Callee                          | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
|  -16.2% | -23.19ms | 34.6% → 30.8% | 143.2ms → 120.0ms |  107 → 89 | `typeRelatedToSomeType`         | `./node_modules/typescript/lib/typescript.js:66827:35 → 68087:35` |
|   -8.7% | -22.32ms | 62.1% → 60.2% | 257.0ms → 234.7ms | 192 → 174 | `eachTypeRelatedToType`         | `./node_modules/typescript/lib/typescript.js:66935:35 → 68195:35` |
|  +20.3% | +16.82ms | 20.1% → 25.6% |   83.0ms → 99.8ms |   62 → 74 | `typeRelatedToEachType`         | `./node_modules/typescript/lib/typescript.js:66887:35 → 68147:35` |
| removed |  -2.68ms |   0.6% → 0.0% |       2.7ms → 0ms |     2 → 0 | `getRegularTypeOfObjectLiteral` | `./node_modules/typescript/lib/typescript.js:69225:41`            |
|   +0.8% |  +0.14ms |   4.5% → 4.8% |   18.7ms → 18.9ms |        14 | `someTypeRelatedToType`         | `./node_modules/typescript/lib/typescript.js:66907:35 → 68167:35` |

##### `eachTypeRelatedToType` (`./node_modules/typescript/lib/typescript.js:68195:35`)

| Change |    Delta |             % |              Time |   Samples | Callee                               | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------ | ----------------------------------------------------------------- |
|  -8.3% | -21.00ms | 98.4% → 98.9% | 253.0ms → 232.0ms | 189 → 172 | `isRelatedTo`                        | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|    new |  +1.35ms |   0.0% → 0.6% |       0ms → 1.3ms |     0 → 1 | `getUndefinedStrippedTargetIfNeeded` | `./node_modules/typescript/lib/typescript.js:68189:48`            |

##### `getSignaturesOfStructuredType` (`./node_modules/typescript/lib/typescript.js:62037:41`)

| Change |    Delta |             % |            Time | Samples | Callee                         | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------ | ----------------------------------------------------------------- |
| -15.8% | -15.44ms | 89.0% → 93.8% | 97.7ms → 82.3ms | 73 → 61 | `resolveStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |

##### `forEachChildInBlock` (`./node_modules/typescript/lib/typescript.js:32250:29`)

| Change |    Delta |      % |              Time | Samples | Callee       | Location                                                          |
| -----: | -------: | -----: | ----------------: | ------: | ------------ | ----------------------------------------------------------------- |
| -17.9% | -21.99ms | 100.0% | 123.1ms → 101.1ms | 92 → 75 | `visitNodes` | `./node_modules/typescript/lib/typescript.js:30723:20 → 31775:20` |

##### `parseTypeReference` (`./node_modules/typescript/lib/typescript.js:34187:30`)

| Change |    Delta |             % |            Time | Samples | Callee                              | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
| -89.9% | -12.04ms |  23.8% → 3.8% |  13.4ms → 1.3ms |  10 → 1 | `createTypeReferenceNode`           | `./node_modules/typescript/lib/typescript.js:24493:35 → 25543:35` |
| -38.7% | -11.90ms | 54.8% → 53.8% | 30.8ms → 18.9ms | 23 → 14 | `parseEntityNameOfTypeReference`    | `./node_modules/typescript/lib/typescript.js:33120:42 → 34175:42` |
| -49.6% | -10.63ms | 38.1% → 30.8% | 21.4ms → 10.8ms |  16 → 8 | `parseTypeArgumentsOfTypeReference` | `./node_modules/typescript/lib/typescript.js:33127:45 → 34182:45` |
|    new |  +4.05ms |  0.0% → 11.5% |     0ms → 4.0ms |   0 → 3 | `finishNode`                        | `./node_modules/typescript/lib/typescript.js:33292:22`            |

##### `getNonMissingTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js:59694:37`)

| Change |    Delta |             % |            Time | Samples | Callee            | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| -20.8% | -19.52ms | 97.2% → 98.2% | 93.7ms → 74.2ms | 70 → 55 | `getTypeOfSymbol` | `./node_modules/typescript/lib/typescript.js:58408:27 → 59663:27` |

##### `getTypeOfExpression` (`./node_modules/typescript/lib/typescript.js:82706:31`)

|  Change |    Delta |             % |            Time | Samples | Callee                     | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
|  -65.1% | -22.66ms | 89.7% → 64.3% | 34.8ms → 12.1ms |  26 → 9 | `checkExpression`          | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
| +303.0% |  +4.06ms |  3.4% → 28.6% |   1.3ms → 5.4ms |   1 → 4 | `getQuickTypeOfExpression` | `./node_modules/typescript/lib/typescript.js:81431:36 → 82726:36` |

##### `anonymous` (`<unknown>`)

|  Change |   Delta |             % |            Time | Samples | Callee        | Location                                           |
| ------: | ------: | ------------: | --------------: | ------: | ------------- | -------------------------------------------------- |
|  -66.4% | -2.67ms |   1.2% → 0.4% |   4.0ms → 1.3ms |   3 → 1 | `(anonymous)` | `node:fs:1:11`                                     |
|   -6.4% | -2.41ms | 11.6% → 11.3% | 37.5ms → 35.1ms | 28 → 26 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:10` |
| removed | -1.34ms |   0.4% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)` | `internal:primordials:1:11`                        |
| removed | -1.34ms |   0.4% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)` | `internal:shared:1:11`                             |
| removed | -1.34ms |   0.4% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)` | `internal:validators:1:11`                         |

##### `requestSatisfyUtil` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee               | Location    |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- | ----------- |
| removed | -9.37ms | 87.5% → 0.0% | 9.4ms → 0ms |   7 → 0 | `requestInstantiate` | `<unknown>` |
| removed | -1.34ms | 12.5% → 0.0% | 1.3ms → 0ms |   1 → 0 | `add`                | `<unknown>` |

##### `requestFetch` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee  | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------- | ----------- |
| removed | -9.37ms | 100.0% → 0.0% | 9.4ms → 0ms |   7 → 0 | `fetch` | `<unknown>` |

##### `requestInstantiate` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -9.37ms | 100.0% → 0.0% | 9.4ms → 0ms |   7 → 0 | `(anonymous)` | `<unknown>` |

##### `parseModule` (`<unknown>`)

| Change |   Delta |             % |           Time | Samples | Callee        | Location    |
| -----: | ------: | ------------: | -------------: | ------: | ------------- | ----------- |
| -58.0% | -9.32ms | 92.3% → 71.4% | 16.1ms → 6.7ms |  12 → 5 | `(anonymous)` | `<unknown>` |

##### `require` (`<unknown>`)

| Change |   Delta |      % |              Time |   Samples | Callee      | Location    |
| -----: | ------: | -----: | ----------------: | --------: | ----------- | ----------- |
|  -1.4% | -4.39ms | 100.0% | 309.2ms → 304.8ms | 231 → 226 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

| Change |   Delta |           % |              Time |   Samples | Callee      | Location    |
| -----: | ------: | ----------: | ----------------: | --------: | ----------- | ----------- |
|  -1.4% | -4.39ms |      100.0% | 309.2ms → 304.8ms | 231 → 226 | `require`   | `<unknown>` |
| -49.6% | -1.33ms | 0.9% → 0.4% |     2.7ms → 1.3ms |     2 → 1 | `anonymous` | `<unknown>` |

##### `requestSatisfy` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee               | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `requestSatisfyUtil` | `<unknown>` |

##### `loadModule` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee           | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- | ----------- |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `requestSatisfy` | `<unknown>` |
| removed | -2.68ms | 100.0% → 0.0% | 2.7ms → 0ms |   2 → 0 | `loadModule`     | `<unknown>` |

##### `bound onceWrapper` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location             |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | -------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `onceWrapper` | `node:events:192:21` |

##### `readdirSync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `readdirSync` | `<unknown>` |

##### `(anonymous)` (`node:fs:1:11`)

| Change |   Delta |      % |          Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| -66.4% | -2.67ms | 100.0% | 4.0ms → 1.3ms |   3 → 1 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:primordials:1:11`)

|  Change |   Delta |             % |        Time | Samples | Callee | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `bind` | `<unknown>` |

##### `(anonymous)` (`internal:shared:1:11`)

|  Change |   Delta |             % |        Time | Samples | Callee      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:validators:1:11`)

|  Change |   Delta |             % |        Time | Samples | Callee      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/glob:1:11`)

|  Change |   Delta |             % |        Time | Samples | Callee      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:fs/promises:1:11`)

|  Change |   Delta |             % |        Time | Samples | Callee      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:promisify:1:11`)

|  Change |   Delta |             % |        Time | Samples | Callee      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `anonymous` | `<unknown>` |

##### `WriteStream` (`internal:fs/streams:196:21`)

|  Change |   Delta |             % |        Time | Samples | Callee   | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `writer` | `<unknown>` |

##### `removeListener` (`node:events:206:63`)

|  Change |   Delta |             % |        Time | Samples | Callee  | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------- | ----------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `shift` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`

|  Change |    Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +16.18ms |  0.0% → 0.3% |    0ms → 16.2ms |  0 → 12 | `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`) ← `getNormalizedUnionOrIntersectionType` (67416:48) ← `getNormalizedType` (67408:29) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new | +13.49ms |  0.0% → 0.2% |    0ms → 13.5ms |  0 → 10 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkReturnStatement` (86275:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkFunctionDeclarationDiagnostics` (84580:49) ← `addLazyDiagnostic` (88652:25) ← `checkFunctionDeclaration` (84578:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +10.79ms |  0.0% → 0.2% |    0ms → 10.8ms |   0 → 8 | `getNodeId` (`./node_modules/typescript/lib/typescript.js:50052:19`) ← `getNodeLinks` (51499:24) ← `getResolvedSymbol` (71910:29) ← `checkIdentifier` (74242:27) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkPrefixUnaryExpression` (81376:38) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkTruthinessExpression` (85549:37) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkForOfStatement` (85574:31) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkMethodDeclaration` (83318:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkClassDeclaration` (86712:33) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +353.4% |  +9.46ms | <0.1% → 0.2% |  2.7ms → 12.1ms |   2 → 9 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +706.1% |  +9.45ms | <0.1% → 0.2% |  1.3ms → 10.8ms |   1 → 8 | `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:38286:37`) ← `(anonymous)` (38259:63) ← `doInsideOfContext` (32908:29) ← `parseJSDocComment` (38255:31) ← `(anonymous)` (32748:71) ← `mapDefined` (2696:20) ← `withJSDoc` (32743:21) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseModuleOrNamespaceDeclaration` (37800:45) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |  +9.44ms |  0.0% → 0.2% |     0ms → 9.4ms |   0 → 7 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `checkTypeRelatedToAndOptionallyElaborate` (66509:52) ← `checkTypeAssignableToAndOptionallyElaborate` (66496:55) ← `checkReturnStatement` (86275:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `(anonymous)` (86337:37) ← `forEach` (2378:17) ← `checkSwitchStatement` (86332:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +36.7% |  +6.89ms |  0.3% → 0.5% | 18.7ms → 25.6ms | 14 → 19 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:10) ← `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +101.5% |  +6.79ms |  0.1% → 0.2% |  6.7ms → 13.5ms |  5 → 10 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |  +6.74ms |  0.0% → 0.1% |     0ms → 6.7ms |   0 → 5 | `NodeObject` (`./node_modules/typescript/lib/typescript.js:148243:14`) ← `createBaseNode` (32468:21) ← `createBaseNode` (24873:26) ← `createHeritageClause` (27497:32) ← `parseHeritageClause` (37721:31) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseHeritageClauses` (37715:32) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |  +6.74ms |  0.0% → 0.1% |     0ms → 6.7ms |   0 → 5 | `set` ← `getDeclaredTypeOfClassOrInterface` (`./node_modules/typescript/lib/typescript.js:60073:45`) ← `tryGetDeclaredTypeOfSymbol` (60200:38) ← `getDeclaredTypeOfSymbol` (60197:35) ← `getTypeFromClassOrInterfaceReference` (62851:48) ← `getTypeReferenceType` (63005:32) ← `getTypeFromTypeReference` (63179:36) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `resolveBaseTypesOfInterface` (60017:39) ← `getBaseTypes` (59919:24) ← `resolveObjectTypeMembers` (60465:36) ← `resolveTypeReferenceMembers` (60519:39) ← `resolveStructuredTypeMembers` (61345:40) ← `getPropertyOfType` (61994:29) ← `getIterationTypesOfMethod` (86136:37) ← `getIterationTypesOfIteratorSlow` (86220:43) ← `getIterationTypesOfIteratorFast` (86047:43) ← `getIterationTypesOfIteratorWorker` (86032:45) ← `getIterationTypesOfIterableSlow` (85994:43) ← `getIterationTypesOfIterableWorker` (85882:45) ← `getIterationTypesOfIterable` (85813:39) ← `getIteratedTypeOrElementType` (85662:40) ← `checkIteratedTypeOrElementType` (85649:42) ← `checkRightHandSideOfForOf` (85645:37) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkForOfStatement` (85574:31) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +23.2% |  +5.58ms |  0.4% → 0.5% | 24.1ms → 29.7ms | 18 → 22 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +81.4% |  +5.45ms |  0.1% → 0.2% |  6.7ms → 12.1ms |   5 → 9 | `getUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js:61892:42`) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +202.3% |  +5.42ms | <0.1% → 0.1% |   2.7ms → 8.1ms |   2 → 6 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +403.8% |  +5.40ms | <0.1% → 0.1% |   1.3ms → 6.7ms |   1 → 5 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |  +5.39ms |  0.0% → 0.1% |     0ms → 5.4ms |   0 → 4 | `declareSymbol` (`./node_modules/typescript/lib/typescript.js:46190:25`) ← `declareSymbolAndAddToSymbolTable` (47392:44) ← `bindParameter` (48577:25) ← `bindWorker` (47856:22) ← `bind` (47793:16) ← `forEach` (2378:17) ← `bindEach` (46419:20) ← `visitNodes` (31775:20) ← `forEachChildInMethodSignature` (31854:70) ← `forEachChild` (32289:22) ← `bindEachChild` (46425:25) ← `bindChildren` (46428:24) ← `bindContainer` (46329:25) ← `bind` (47793:16) ← `forEach` (2378:17) ← `bindEach` (46419:20) ← `visitNodes` (31775:20) ← `forEachChildInInterfaceDeclaration` (32060:80) ← `forEachChild` (32289:22) ← `bindEachChild` (46425:25) ← `bindChildren` (46428:24) ← `bindContainer` (46329:25) ← `bind` (47793:16) ← `(anonymous)` (46417:21) ← `forEach` (2378:17) ← `bindEach` (46419:20) ← `bindEachFunctionsFirst` (46415:34) ← `bindChildren` (46428:24) ← `bindContainer` (46329:25) ← `bind` (47793:16) ← `bindSourceFile2` (46044:27) ← `bindSourceFile` (45987:24) ← `initializeTypeChecker` (90118:33) ← `createTypeChecker` (50070:27) ← `getTypeChecker` (124848:26) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new |  +5.39ms |  0.0% → 0.1% |     0ms → 5.4ms |   0 → 4 | `isPropertyDeclaration` (`./node_modules/typescript/lib/typescript.js:30080:31`) ← `isPrivateIdentifierClassElementDeclaration` (15495:52) ← `isStaticPrivateIdentifierProperty` (60294:45) ← `addInheritedMembers` (60282:31) ← `resolveObjectTypeMembers` (60465:36) ← `resolveTypeReferenceMembers` (60519:39) ← `resolveStructuredTypeMembers` (61345:40) ← `getPropertyOfType` (61994:29) ← `getUnmatchedProperties` (70992:108) ← `generatorResume` ← `next` ← `firstOrUndefinedIterator` (`./node_modules/typescript/lib/typescript.js:3059:34`) ← `getUnmatchedProperty` (71014:32) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateMappedType` (66151:33) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getMappedType` (65907:25) ← `(anonymous)` (66062:49) ← `map` (2580:13) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `getTypeArguments` (62827:28) ← `typeReferenceToTypeNode` (54996:39) ← `visitAndTransformType` (54870:37) ← `typeToTypeNodeWorker` (54430:34) ← `typeToTypeNodeHelper` (54424:34) ← `expressionOrTypeToTypeNodeHelper` (54336:46) ← `expressionOrTypeToTypeNode` (54326:40) ← `serializeReturnTypeForSignatureWorker` (56317:51) ← `serializeReturnTypeForSignature` (56298:45) ← `signatureToSignatureDeclarationHelper` (55405:51) ← `(anonymous)` (54299:149) ← `withContext` (54395:25) ← `signatureToSignatureDeclaration` (54299:40) ← `signatureToStringWorker` (54219:37) ← `usingSingleLineStringWriter` (16334:37) ← `signatureToString` (54217:29) ← `checkDeprecatedSignature` (79638:36) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |
|     new |  +5.39ms |  0.0% → 0.1% |     0ms → 5.4ms |   0 → 4 | `createSymbolTable` (`./node_modules/typescript/lib/typescript.js:16239:27`) ← `addDeclarationToSymbol` (46105:34) ← `declareSymbol` (46190:25) ← `declareSymbolAndAddToSymbolTable` (47392:44) ← `bindParameter` (48577:25) ← `bindWorker` (47856:22) ← `bind` (47793:16) ← `forEach` (2378:17) ← `bindEach` (46419:20) ← `visitNodes` (31775:20) ← `forEachChildInFunctionDeclaration` (31866:78) ← `forEachChild` (32289:22) ← `bindEachChild` (46425:25) ← `bindChildren` (46428:24) ← `bindContainer` (46329:25) ← `bind` (47793:16) ← `(anonymous)` (46416:21) ← `forEach` (2378:17) ← `bindEach` (46419:20) ← `bindEachFunctionsFirst` (46415:34) ← `bindChildren` (46428:24) ← `bindContainer` (46329:25) ← `bind` (47793:16) ← `bindSourceFile2` (46044:27) ← `bindSourceFile` (45987:24) ← `initializeTypeChecker` (90118:33) ← `createTypeChecker` (50070:27) ← `getTypeChecker` (124848:26) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +101.5% |  +4.08ms |         0.1% |   4.0ms → 8.1ms |   3 → 6 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +303.0% |  +4.06ms | <0.1% → 0.1% |   1.3ms → 5.4ms |   1 → 4 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +303.0% |  +4.06ms | <0.1% → 0.1% |   1.3ms → 5.4ms |   1 → 4 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

|  Change |    Delta |           % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | -------: | ----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -30.78ms | 0.6% → 0.0% |    30.8ms → 0ms |  23 → 0 | `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:71634:34`) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `getTypeOfExpression` (81411:31) ← `isEvolvingArrayOperationTarget` (71351:42) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkIndexedAccess` (76439:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `maybeCheckExpression` (80565:34) ← `onLeft` (80503:20) ← `left` (30385:16) ← `trampoline` (30489:22) ← `(anonymous)` (80462:12) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -49.6% | -15.94ms | 0.6% → 0.3% | 32.1ms → 16.2ms | 24 → 12 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -13.38ms | 0.2% → 0.0% |    13.4ms → 0ms |  10 → 0 | `getAliasId` (`./node_modules/typescript/lib/typescript.js:61521:22`) ← `getIntersectionType` (63112:31) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getReturnTypeOfSignature` (61207:36) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -58.5% | -13.31ms | 0.4% → 0.2% |  22.8ms → 9.4ms |  17 → 7 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                          |
| removed | -10.71ms | 0.2% → 0.0% |    10.7ms → 0ms |   8 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `checkTypeRelatedToAndOptionallyElaborate` (65249:52) ← `getSignatureApplicabilityError` (76912:42) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkAssertionWorker` (78581:32) ← `checkAssertion` (78541:26) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |  -9.37ms | 0.2% → 0.0% |     9.4ms → 0ms |   7 → 0 | `slice` ← `addRange` (`./node_modules/typescript/lib/typescript.js:2979:18`) ← `createUnionOrIntersectionProperty` (60498:45) ← `getUnionOrIntersectionProperty` (60637:42) ← `isDiscriminantProperty` (70800:34) ← `findDiscriminantProperties` (70812:38) ← `findMatchingDiscriminantType` (90511:40) ← `getBestMatchingType` (68565:31) ← `typeRelatedToSomeType` (66827:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkSignatureDeclaration` (81792:37) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkMethodDeclaration` (82023:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkClassDeclaration` (85417:33) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -9.37ms | 0.2% → 0.0% |     9.4ms → 0ms |   7 → 0 | `instantiateSignature` (`./node_modules/typescript/lib/typescript.js:64733:32`) ← `instantiateList` (64623:27) ← `instantiateSignatures` (64643:33) ← `resolveAnonymousTypeMembers` (59723:39) ← `resolveStructuredTypeMembers` (60090:40) ← `getSignaturesOfStructuredType` (60782:41) ← `getSignaturesOfType` (60789:31) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -8.03ms | 0.1% → 0.0% |     8.0ms → 0ms |   6 → 0 | `fetch` ← `requestFetch` ← `(anonymous)` ← `(anonymous)` ← `requestInstantiate` ← `requestSatisfyUtil` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |  -8.03ms | 0.1% → 0.0% |     8.0ms → 0ms |   6 → 0 | `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `typeRelatedToSomeType` (66827:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkMappedType` (82354:27) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkUnionOrIntersectionType` (82318:40) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkModuleDeclaration` (86242:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -8.03ms | 0.1% → 0.0% |     8.0ms → 0ms |   6 → 0 | `join` ← `doJSDocScan` (`./node_modules/typescript/lib/typescript.js:37253:27`) ← `scanRange` (13601:21) ← `parseJSDocCommentWorker` (37231:37) ← `(anonymous)` (37204:63) ← `doInsideOfContext` (31856:29) ← `parseJSDocComment` (37200:31) ← `(anonymous)` (31696:71) ← `mapDefined` (2683:20) ← `withJSDoc` (31691:21) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |  -6.69ms | 0.1% → 0.0% |     6.7ms → 0ms |   5 → 0 | `NodeObject` (`./node_modules/typescript/lib/typescript.js:146197:14`) ← `createBaseNode` (31416:21) ← `createBaseNode` (23823:26) ← `createTypeReferenceNode` (24493:35) ← `parseTypeReference` (33132:30) ← `parseNonArrayType` (33781:29) ← `parsePostfixTypeOrHigher` (33903:36) ← `doOutsideOfContext` (31838:30) ← `allowConditionalTypesAnd` (31880:36) ← `parseTypeOperatorOrHigher` (33974:37) ← `parseUnionOrIntersectionType` (34000:40) ← `parseIntersectionTypeOrHigher` (34014:41) ← `parseUnionOrIntersectionType` (34000:40) ← `parseUnionTypeOrHigher` (34017:34) ← `parseType` (34098:21) ← `parseTypeAnnotation` (34117:31) ← `parseParameterWorker` (33339:32) ← `parseParameter` (33329:26) ← `(anonymous)` (33416:157) ← `parseListElement` (32639:28) ← `parseDelimitedList` (32875:30) ← `parseParametersWorker` (33411:33) ← `parseParameters` (33421:27) ← `parseFunctionDeclaration` (36270:36) ← `parseDeclarationWorker` (36069:34) ← `(anonymous)` (36056:56) ← `doInsideOfContext` (31856:29) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |  -6.69ms | 0.1% → 0.0% |     6.7ms → 0ms |   5 → 0 | `invokeOnce` (`./node_modules/typescript/lib/typescript.js:70091:24`) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -21.1% |  -6.51ms | 0.6% → 0.4% | 30.8ms → 24.3ms | 23 → 18 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                    |
| removed |  -5.35ms | 0.1% → 0.0% |     5.4ms → 0ms |   4 → 0 | `withJSDoc` (`./node_modules/typescript/lib/typescript.js:31691:21`) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseTypeMember` (33536:27) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseModuleBlock` (36734:28) ← `parseAmbientExternalModuleDeclaration` (36759:49) ← `parseModuleDeclaration` (36778:34) ← `parseDeclarationWorker` (36069:34) ← `(anonymous)` (36056:56) ← `doInsideOfContext` (31856:29) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |  -5.35ms | 0.1% → 0.0% |     5.4ms → 0ms |   4 → 0 | `createUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js:60498:45`) ← `getUnionOrIntersectionProperty` (60637:42) ← `getPropertyOfUnionOrIntersectionType` (60674:48) ← `getPropertiesOfUnionOrIntersectionType` (60131:50) ← `getReducedType` (60678:26) ← `getReducedApparentType` (60495:34) ← `getPropertyOfType` (60739:29) ← `checkPropertyAccessExpressionOrQualifiedName` (75918:56) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |  -5.35ms | 0.1% → 0.0% |     5.4ms → 0ms |   4 → 0 | `getTypeListId` (`./node_modules/typescript/lib/typescript.js:61498:25`) ← `getConditionalTypeInstantiation` (64979:43) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getTypeOfMappedSymbol` (59989:33) ← `getTypeOfSymbol` (58408:27) ← `getPropertyTypeForIndexType` (63548:39) ← `getIndexedAccessTypeOrUndefined` (63894:43) ← `getIndexedAccessType` (63879:32) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getConditionalType` (63974:30) ← `getConditionalTypeInstantiation` (64979:43) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `isGenericMappedType` (60070:31) ← `shouldDeferIndexType` (63345:32) ← `getIndexType` (63348:24) ← `getTypeFromTypeOperatorNode` (63360:39) ← `getTypeFromTypeNodeWorker` (64527:37) ← `getTypeFromTypeNode` (64524:31) ← `getDeclaredTypeOfTypeAlias` (58847:38) ← `tryGetDeclaredTypeOfSymbol` (58945:38) ← `getDeclaredTypeOfSymbol` (58942:35) ← `getTypeFromTypeAliasReference` (61648:41) ← `getTypeReferenceType` (61750:32) ← `getTypeFromTypeReference` (61924:36) ← `getTypeFromTypeNodeWorker` (64527:37) ← `getTypeFromTypeNode` (64524:31) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |  -4.02ms | 0.1% → 0.0% |     4.0ms → 0ms |   3 → 0 | `setParent` (`./node_modules/typescript/lib/typescript.js:21694:19`) ← `bindParentToChildIgnoringJSDoc` (21713:42) ← `bindParentToChild` (21727:29) ← `forEachChildRecursively` (31244:33) ← `setParentRecursive` (21708:28) ← `getModuleInstanceState` (44660:32) ← `declareModuleSymbol` (46298:31) ← `bindModuleDeclaration` (46270:33) ← `bindWorker` (46663:22) ← `bind` (46600:16) ← `(anonymous)` (45224:21) ← `forEach` (2365:17) ← `bindEach` (45226:20) ← `bindEachFunctionsFirst` (45222:34) ← `bindChildren` (45235:24) ← `bindContainer` (45136:25) ← `bind` (46600:16) ← `bindSourceFile2` (44851:27) ← `bindSourceFile` (44794:24) ← `initializeTypeChecker` (88776:33) ← `createTypeChecker` (48842:27) ← `getTypeChecker` (123266:26) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |  -4.02ms | 0.1% → 0.0% |     4.0ms → 0ms |   3 → 0 | `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:71634:34`) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `maybeCheckExpression` (80565:34) ← `onLeft` (80503:20) ← `left` (30385:16) ← `trampoline` (30489:22) ← `(anonymous)` (80462:12) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkTruthinessExpression` (84254:37) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkFunctionDeclarationDiagnostics` (83285:49) ← `addLazyDiagnostic` (87339:25) ← `checkFunctionDeclaration` (83283:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |  -4.02ms | 0.1% → 0.0% |     4.0ms → 0ms |   3 → 0 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |  -4.02ms | 0.1% → 0.0% |     4.0ms → 0ms |   3 → 0 | `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:20242:24`) ← `isEmptyAnonymousObjectType` (65967:38) ← `shouldNormalizeIntersection` (66169:39) ← `getNormalizedUnionOrIntersectionType` (66156:48) ← `getNormalizedType` (66148:29) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections` |
