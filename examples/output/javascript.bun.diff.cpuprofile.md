# CPU profile diff

Took 5.53s → 5.65s (+119.03ms, +2.1%) over 4,139 → 4,196 samples (1.3ms per sample).

| Category         |  Change |     Delta |             % |              Time |       Samples |
| ---------------- | ------: | --------: | ------------: | ----------------: | ------------: |
| Third-party      |   +3.1% | +154.94ms | 90.0% → 90.9% |     4.98s → 5.14s | 3,717 → 3,813 |
| Native           |   -1.5% |   -5.91ms |   7.3% → 7.1% | 406.9ms → 401.0ms |     311 → 308 |
| Standard library |  -18.4% |  -25.81ms |   2.5% → 2.0% | 140.6ms → 114.8ms |      108 → 75 |
| Unknown          | removed |   -4.19ms |   0.1% → 0.0% |       4.2ms → 0ms |         3 → 0 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 5.49s → 5.64s (99.2% → 99.8%) typeCheckProject at ./tsc-workload.mjs:3:33
│   ├── … 4.30s → 4.45s (77.8% → 78.8%) (anonymous) at ./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37
│   │   ├── … 4.03s → 4.17s (72.9% → 73.8%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33
│   │   │   ├── 2.24s → 2.34s (40.6% → 41.4%) checkDeferredNodes at 87179:30 → 88492:30
│   │   │   │   └── 2.24s → 2.34s (40.6% → 41.4%) forEach
│   │   │   │       └── 2.20s → 2.30s (39.8% → 40.8%) checkDeferredNode at ./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29
│   │   │   │           └── 2.20s → 2.30s (39.8% → 40.7%) checkFunctionExpressionOrObjectLiteralMethodDeferred at 79840:64 → 81135:64
│   │   │   │               ├── 2.16s → 2.26s (39.1% → 40.1%) checkSourceElement at 86886:30 → 88199:30
│   │   │   │               │   └── … 2.16s → 2.26s (39.0% → 40.1%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36
│   │   │   │               │       ├── … 645.5ms → 635.5ms (11.7% → 11.2%) checkExpressionWorker at ./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33
│   │   │   │               │       │   ├── 106.4ms → 81.8ms (1.9% → 1.4%) checkIdentifier at 72959:27 → 74242:27
│   │   │   │               │       │   │   ├── 54.6ms → 23.7ms (1.0% → 0.4%, self 0.6% → <0.1%) getFlowTypeOfReference at 71634:34 → 72917:34
│   │   │   │               │       │   │   └── 45.1ms → 55.5ms (0.8% → 1.0%) 14 more callees, led by (0.3% → 0.5%) getResolvedSymbol at 70627:29 → 71910:29
│   │   │   │               │       │   └── 532.6ms → 551.5ms (9.6% → 9.7%) 14 more callees, led by (6.1% → 6.4%) checkCallExpression at 78289:31 → 79584:31
│   │   │   │               │       └── 1.50s → 1.61s (27.2% → 28.6%) 25 more callees, led by (19.8% → 21.2%) checkVariableDeclaration at 84101:36 → 85396:36
│   │   │   │               └── 37.7ms → 32.7ms (0.7% → 0.6%) 3 more callees, led by (0.6% → 0.4%) getReturnTypeOfSignature at 61207:36 → 62462:36
│   │   │   └── 1.77s → 1.82s (32.1% → 32.3%) forEach at 2365:17 → 2378:17
│   │   │       ├── … 1.71s → 1.77s (31.0% → 31.4%) checkSourceElement at ./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30
│   │   │       │   └── … 1.71s → 1.77s (31.0% → 31.4%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36
│   │   │       │       ├── 525.2ms → 522.0ms (9.5% → 9.2%) checkTypeReferenceNode at 82223:34 → 83518:34
│   │   │       │       │   └── 520.6ms → 520.8ms (9.4% → 9.2%) checkTypeReferenceOrImport at 82234:38 → 83529:38
│   │   │       │       │       ├── 493.7ms → 466.6ms (8.9% → 8.2%) addLazyDiagnostic at 87339:25 → 88652:25 …
│   │   │       │       │       └── … 14.9ms → 29.8ms (0.3% → 0.5%) getTypeReferenceType at ./node_modules/typescript/lib/typescript.js:61750:32 → 63005:32
│   │   │       │       │           └── … 0ms → 13.7ms (0.0% → 0.2%) getMappedType at ./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25
│   │   │       │       │               └── … 0ms → 13.7ms (0.0% → 0.2%) SymbolObject at ./node_modules/typescript/lib/typescript.js:146406:14 → 148449:14
│   │   │       │       └── 1.18s → 1.24s (21.4% → 22.1%) 32 more callees, led by (9.2% → 9.7%) checkVariableDeclaration at 84101:36 → 85396:36
│   │   │       └── 61.3ms → 48.2ms (1.1% → 0.9%) 8 more callees, led by (0.7% → 0.5%) checkParameter at ./node_modules/typescript/lib/typescript.js:81674:26 → 82969:26
│   │   └── 267.7ms → 276.8ms (4.8% → 4.9%) getTypeChecker at 123266:26 → 124848:26
│   │       └── 267.7ms → 276.8ms (4.8% → 4.9%) createTypeChecker at 48842:27 → 50070:27 …
│   ├── 841.3ms → 847.8ms (15.2% → 15.0%) createProgram at ./node_modules/typescript/lib/typescript.js:122262:23 → 123840:23
│   │   ├── 693.8ms → 716.2ms (12.5% → 12.7%) forEach at 2365:17 → 2378:17
│   │   │   ├── … 208.5ms → 228.5ms (3.8% → 4.0%) parseList at ./node_modules/typescript/lib/typescript.js:32618:21 → 33673:21
│   │   │   │   └── … 205.5ms → 223.1ms (3.7% → 3.9%) parseListElement at ./node_modules/typescript/lib/typescript.js:32639:28 → 33694:28
│   │   │   │       ├── … 117.5ms → 14.8ms (2.1% → 0.3%, self 1.9% → 0.0%) withJSDoc at ./node_modules/typescript/lib/typescript.js:31691:21 → 32743:21
│   │   │   │       ├── … 0ms → 106.7ms (0.0% → 1.9%) NodeObject at ./node_modules/typescript/lib/typescript.js:146197:14 → 148243:14
│   │   │   │       └── 75.5ms → 83.3ms (1.4% → 1.5%) 8 more callees, led by (0.4% → 0.7%) (anonymous) at ./node_modules/typescript/lib/typescript.js:33416:157 → 34471:157
│   │   │   └── 465.8ms → 461.0ms (8.4% → 8.1%) 5 more callees, led by (4.1% → 4.0%) (anonymous) at 122449:24 → 124028:24
│   │   └── 146.5ms → 130.3ms (2.6% → 2.3%) 8 more callees, led by (2.2% → 1.9%) processTypeReferenceDirective at 124232:41 → 125814:41
│   └── 340.6ms → 337.9ms (6.1% → 6.0%) 4 more callees, led by (5.3% → 5.2%) bound require
└── … 8.4ms → 0ms (0.2% → 0.0%) fetch
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |           % |             Time | Samples | Function                          | Location                                                            |
| ------: | -------: | ----------: | ---------------: | ------: | --------------------------------- | ------------------------------------------------------------------- |
| +435.4% | +94.59ms | 0.4% → 2.1% | 21.7ms → 116.3ms | 17 → 12 | `NodeObject`                      | `./node_modules/typescript/lib/typescript.js:146197:14 → 148243:14` |
|  +60.2% | +24.80ms | 0.7% → 1.2% |  41.2ms → 66.0ms | 32 → 48 | `inferFromTypes`                  | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28`   |
| +374.0% | +23.94ms | 0.1% → 0.5% |   6.4ms → 30.3ms |  5 → 10 | `set`                             | `<unknown>`                                                         |
|     new | +20.45ms | 0.0% → 0.4% |     0ms → 20.4ms |   0 → 9 | `TypeObject`                      | `./node_modules/typescript/lib/typescript.js:148564:14`             |
|  +78.8% | +18.67ms | 0.4% → 0.7% |  23.7ms → 42.4ms | 19 → 33 | `getReducedType`                  | `./node_modules/typescript/lib/typescript.js:60678:26 → 61933:26`   |
|  +96.4% | +16.92ms | 0.3% → 0.6% |  17.6ms → 34.5ms | 14 → 26 | `shouldNormalizeIntersection`     | `./node_modules/typescript/lib/typescript.js:66169:39 → 67429:39`   |
| +378.0% | +16.23ms | 0.1% → 0.4% |   4.3ms → 20.5ms |  3 → 16 | `isTupleType`                     | `./node_modules/typescript/lib/typescript.js:69093:23 → 70353:23`   |
|  +48.9% | +16.21ms | 0.6% → 0.9% |  33.1ms → 49.3ms | 25 → 34 | `getNormalizedType`               | `./node_modules/typescript/lib/typescript.js:66148:29 → 67408:29`   |
|  +89.7% | +15.15ms | 0.3% → 0.6% |  16.9ms → 32.0ms | 12 → 24 | `getTypeFactsWorker`              | `./node_modules/typescript/lib/typescript.js:70941:30 → 72224:30`   |
| +114.1% | +14.81ms | 0.2% → 0.5% |  13.0ms → 27.8ms | 10 → 14 | `SymbolObject`                    | `./node_modules/typescript/lib/typescript.js:146406:14 → 148449:14` |
|  +56.5% | +12.68ms | 0.4% → 0.6% |  22.4ms → 35.1ms | 17 → 27 | `getReducedApparentType`          | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34`   |
|  +32.1% | +11.68ms | 0.7% → 0.8% |  36.4ms → 48.1ms | 28 → 37 | `scan`                            | `./node_modules/typescript/lib/typescript.js:12765:16 → 12895:16`   |
| +128.5% | +11.38ms | 0.2% → 0.4% |   8.9ms → 20.2ms |  7 → 15 | `scanJSDocCommentTextToken`       | `./node_modules/typescript/lib/typescript.js:13476:37 → 14434:37`   |
|  +58.7% | +10.97ms | 0.3% → 0.5% |  18.7ms → 29.7ms | 15 → 22 | `getSymbolLinks`                  | `./node_modules/typescript/lib/typescript.js:50252:26 → 51493:26`   |
|  +61.6% | +10.77ms | 0.3% → 0.5% |  17.5ms → 28.3ms | 14 → 22 | `declareSymbol`                   | `./node_modules/typescript/lib/typescript.js:44997:25 → 46190:25`   |
| +280.4% | +10.01ms | 0.1% → 0.2% |   3.6ms → 13.6ms |  3 → 10 | `createSymbolTable`               | `./node_modules/typescript/lib/typescript.js:15264:27 → 16239:27`   |
| +115.6% |  +9.63ms | 0.2% → 0.3% |   8.3ms → 18.0ms |  6 → 13 | `getUnionType`                    | `./node_modules/typescript/lib/typescript.js:62840:24 → 64095:24`   |
|  +37.9% |  +9.20ms | 0.4% → 0.6% |  24.3ms → 33.5ms | 19 → 24 | `findAncestor`                    | `./node_modules/typescript/lib/typescript.js:13949:22 → 14924:22`   |
|  +48.3% |  +9.12ms | 0.3% → 0.5% |  18.9ms → 28.0ms | 14 → 21 | `resolveStructuredTypeMembers`    | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40`   |
| +107.9% |  +8.82ms | 0.1% → 0.3% |   8.2ms → 17.0ms |  6 → 13 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43`   |

##### Third-party

|  Change |    Delta |           % |             Time | Samples | Function                          | Location                                                            |
| ------: | -------: | ----------: | ---------------: | ------: | --------------------------------- | ------------------------------------------------------------------- |
| +435.4% | +94.59ms | 0.4% → 2.1% | 21.7ms → 116.3ms | 17 → 12 | `NodeObject`                      | `./node_modules/typescript/lib/typescript.js:146197:14 → 148243:14` |
|  +60.2% | +24.80ms | 0.7% → 1.2% |  41.2ms → 66.0ms | 32 → 48 | `inferFromTypes`                  | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28`   |
|     new | +20.45ms | 0.0% → 0.4% |     0ms → 20.4ms |   0 → 9 | `TypeObject`                      | `./node_modules/typescript/lib/typescript.js:148564:14`             |
|  +78.8% | +18.67ms | 0.4% → 0.7% |  23.7ms → 42.4ms | 19 → 33 | `getReducedType`                  | `./node_modules/typescript/lib/typescript.js:60678:26 → 61933:26`   |
|  +96.4% | +16.92ms | 0.3% → 0.6% |  17.6ms → 34.5ms | 14 → 26 | `shouldNormalizeIntersection`     | `./node_modules/typescript/lib/typescript.js:66169:39 → 67429:39`   |
| +378.0% | +16.23ms | 0.1% → 0.4% |   4.3ms → 20.5ms |  3 → 16 | `isTupleType`                     | `./node_modules/typescript/lib/typescript.js:69093:23 → 70353:23`   |
|  +48.9% | +16.21ms | 0.6% → 0.9% |  33.1ms → 49.3ms | 25 → 34 | `getNormalizedType`               | `./node_modules/typescript/lib/typescript.js:66148:29 → 67408:29`   |
|  +89.7% | +15.15ms | 0.3% → 0.6% |  16.9ms → 32.0ms | 12 → 24 | `getTypeFactsWorker`              | `./node_modules/typescript/lib/typescript.js:70941:30 → 72224:30`   |
| +114.1% | +14.81ms | 0.2% → 0.5% |  13.0ms → 27.8ms | 10 → 14 | `SymbolObject`                    | `./node_modules/typescript/lib/typescript.js:146406:14 → 148449:14` |
|  +56.5% | +12.68ms | 0.4% → 0.6% |  22.4ms → 35.1ms | 17 → 27 | `getReducedApparentType`          | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34`   |
|  +32.1% | +11.68ms | 0.7% → 0.8% |  36.4ms → 48.1ms | 28 → 37 | `scan`                            | `./node_modules/typescript/lib/typescript.js:12765:16 → 12895:16`   |
| +128.5% | +11.38ms | 0.2% → 0.4% |   8.9ms → 20.2ms |  7 → 15 | `scanJSDocCommentTextToken`       | `./node_modules/typescript/lib/typescript.js:13476:37 → 14434:37`   |
|  +58.7% | +10.97ms | 0.3% → 0.5% |  18.7ms → 29.7ms | 15 → 22 | `getSymbolLinks`                  | `./node_modules/typescript/lib/typescript.js:50252:26 → 51493:26`   |
|  +61.6% | +10.77ms | 0.3% → 0.5% |  17.5ms → 28.3ms | 14 → 22 | `declareSymbol`                   | `./node_modules/typescript/lib/typescript.js:44997:25 → 46190:25`   |
| +280.4% | +10.01ms | 0.1% → 0.2% |   3.6ms → 13.6ms |  3 → 10 | `createSymbolTable`               | `./node_modules/typescript/lib/typescript.js:15264:27 → 16239:27`   |
| +115.6% |  +9.63ms | 0.2% → 0.3% |   8.3ms → 18.0ms |  6 → 13 | `getUnionType`                    | `./node_modules/typescript/lib/typescript.js:62840:24 → 64095:24`   |
|  +37.9% |  +9.20ms | 0.4% → 0.6% |  24.3ms → 33.5ms | 19 → 24 | `findAncestor`                    | `./node_modules/typescript/lib/typescript.js:13949:22 → 14924:22`   |
|  +48.3% |  +9.12ms | 0.3% → 0.5% |  18.9ms → 28.0ms | 14 → 21 | `resolveStructuredTypeMembers`    | `./node_modules/typescript/lib/typescript.js:60090:40 → 61345:40`   |
| +107.9% |  +8.82ms | 0.1% → 0.3% |   8.2ms → 17.0ms |  6 → 13 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43`   |
|  +55.2% |  +8.73ms | 0.3% → 0.4% |  15.8ms → 24.5ms | 12 → 19 | `createNodeArray`                 | `./node_modules/typescript/lib/typescript.js:23794:27 → 24844:27`   |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function                                     | Location    |
| ------: | ------: | -----------: | --------------: | ------: | -------------------------------------------- | ----------- |
|  +18.0% | +5.65ms |  0.6% → 0.7% | 31.4ms → 37.1ms | 21 → 27 | `readFileSync`                               | `<unknown>` |
|  +17.9% | +4.09ms |  0.4% → 0.5% | 22.9ms → 27.0ms | 17 → 21 | `statSync`                                   | `<unknown>` |
|  +48.5% | +3.84ms |  0.1% → 0.2% |  7.9ms → 11.8ms |   6 → 9 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g`   | `<unknown>` |
|  +97.5% | +3.56ms |         0.1% |   3.7ms → 7.2ms |   3 → 6 | `SymbolLinks`                                | `<unknown>` |
|     new | +2.74ms | 0.0% → <0.1% |     0ms → 2.7ms |   0 → 1 | `/^\.\.?($\|[\\/])/`                         | `<unknown>` |
|  +69.3% | +1.70ms | <0.1% → 0.1% |   2.5ms → 4.1ms |   2 → 3 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`        | `<unknown>` |
| +120.9% | +1.23ms |        <0.1% |   1.0ms → 2.3ms |   1 → 2 | `parseModule`                                | `<unknown>` |
|     new | +1.06ms | 0.0% → <0.1% |     0ms → 1.1ms |   0 → 1 | `generatorResume`                            | `<unknown>` |
|     new | +1.06ms | 0.0% → <0.1% |     0ms → 1.1ms |   0 → 1 | `/^\/\/\/?\s*@(ts-expect-error\|ts-ignore)/` | `<unknown>` |
|  +36.1% | +1.01ms |         0.1% |   2.8ms → 3.8ms |   2 → 3 | `realpathNativeSync`                         | `<unknown>` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function      | Location           |
| ------: | -------: | -----------: | --------------: | ------: | ------------- | ------------------ |
| +374.0% | +23.94ms |  0.1% → 0.5% |  6.4ms → 30.3ms |  5 → 10 | `set`         | `<unknown>`        |
| +206.0% |  +5.18ms | <0.1% → 0.1% |   2.5ms → 7.7ms |   2 → 6 | `next`        | `<unknown>`        |
|     new |  +3.41ms |  0.0% → 0.1% |     0ms → 3.4ms |   0 → 3 | `map`         | `<unknown>`        |
| +124.0% |  +3.04ms | <0.1% → 0.1% |   2.4ms → 5.5ms |   2 → 4 | `unshift`     | `<unknown>`        |
|     new |  +2.57ms | 0.0% → <0.1% |     0ms → 2.6ms |   0 → 2 | `has`         | `<unknown>`        |
|     new |  +2.42ms | 0.0% → <0.1% |     0ms → 2.4ms |   0 → 1 | `Set`         | `<unknown>`        |
|  +16.1% |  +1.70ms |         0.2% | 10.5ms → 12.2ms |   8 → 9 | `get`         | `<unknown>`        |
|  +36.4% |  +1.02ms |         0.1% |   2.8ms → 3.8ms |   2 → 3 | `filter`      | `<unknown>`        |
|  +79.9% |  +0.99ms |        <0.1% |   1.2ms → 2.2ms |   1 → 2 | `some`        | `<unknown>`        |
|  +66.5% |  +0.93ms |        <0.1% |   1.4ms → 2.3ms |   1 → 2 | `push`        | `<unknown>`        |
|  +33.8% |  +0.36ms |        <0.1% |   1.1ms → 1.4ms |       1 | `(anonymous)` | `node:crypto:1:11` |
|  +18.4% |  +0.23ms |        <0.1% |   1.3ms → 1.5ms |       1 | `startsWith`  | `<unknown>`        |
|  +13.7% |  +0.17ms |        <0.1% |   1.3ms → 1.4ms |       1 | `values`      | `<unknown>`        |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |            % |              Time |   Samples | Function                       | Location                                                          |
| ------: | --------: | -----------: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
|  -97.9% | -106.63ms | 2.0% → <0.1% |   108.9ms → 2.3ms |     6 → 2 | `withJSDoc`                    | `./node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |
|  -62.1% |  -36.54ms |  1.1% → 0.4% |   58.8ms → 22.3ms |   41 → 13 | `getFlowTypeOfReference`       | `./node_modules/typescript/lib/typescript.js:71634:34 → 72917:34` |
|  -15.9% |  -28.46ms |  3.2% → 2.7% | 179.0ms → 150.6ms | 133 → 114 | `getObjectFlags`               | `./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
|  -49.8% |  -24.73ms |  0.9% → 0.4% |   49.6ms → 24.9ms |   37 → 20 | `getApparentType`              | `./node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
|  -75.6% |  -22.03ms |  0.5% → 0.1% |    29.1ms → 7.1ms |    22 → 5 | `signaturesRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |
|  -57.5% |  -21.35ms |  0.7% → 0.3% |   37.1ms → 15.8ms |   25 → 12 | `getAliasId`                   | `./node_modules/typescript/lib/typescript.js:61521:22 → 62776:22` |
|   -7.4% |  -18.56ms |  4.5% → 4.1% | 250.6ms → 232.0ms | 177 → 176 | `checkTypeRelatedTo`           | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
|  -75.2% |  -14.33ms |  0.3% → 0.1% |    19.1ms → 4.7ms |    15 → 4 | `instantiateSignature`         | `./node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
|  -65.9% |  -11.70ms |  0.3% → 0.1% |    17.8ms → 6.1ms |    13 → 5 | `slice`                        | `<unknown>`                                                       |
|  -22.2% |  -10.82ms |  0.9% → 0.7% |   48.6ms → 37.8ms |   37 → 29 | `couldContainTypeVariables`    | `./node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |
|  -49.2% |  -10.71ms |  0.4% → 0.2% |   21.7ms → 11.0ms |    17 → 9 | `forEach`                      | `<unknown>`                                                       |
|  -41.5% |  -10.64ms |  0.5% → 0.3% |   25.7ms → 15.0ms |   20 → 12 | `getMappedType`                | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
| removed |   -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `fetch`                        | `<unknown>`                                                       |
|  -65.5% |   -9.40ms |  0.3% → 0.1% |    14.3ms → 4.9ms |    11 → 4 | `join`                         | `<unknown>`                                                       |
|  -53.6% |   -9.29ms |  0.3% → 0.1% |    17.3ms → 8.1ms |    13 → 6 | `getConditionalFlowTypeOfType` | `./node_modules/typescript/lib/typescript.js:61824:40 → 63079:40` |
|  -15.9% |   -9.23ms |  1.0% → 0.9% |   58.1ms → 48.9ms |   46 → 38 | `getRelationKey`               | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
|  -80.2% |   -9.17ms | 0.2% → <0.1% |    11.4ms → 2.3ms |     9 → 2 | `isBinaryExpression`           | `./node_modules/typescript/lib/typescript.js:29192:28 → 30242:28` |
|  -68.7% |   -7.96ms |  0.2% → 0.1% |    11.6ms → 3.6ms |     9 → 3 | `getSymbolFlags`               | `./node_modules/typescript/lib/typescript.js:51447:26 → 52688:26` |
|  -46.6% |   -7.74ms |  0.3% → 0.2% |    16.6ms → 8.9ms |    13 → 7 | `getTypeOfSymbol`              | `./node_modules/typescript/lib/typescript.js:58408:27 → 59663:27` |
|   -2.8% |   -7.57ms |  4.9% → 4.7% | 272.5ms → 264.9ms | 213 → 205 | `anonymous`                    | `<unknown>`                                                       |

##### Third-party

| Change |     Delta |            % |              Time |   Samples | Function                                       | Location                                                          |
| -----: | --------: | -----------: | ----------------: | --------: | ---------------------------------------------- | ----------------------------------------------------------------- |
| -97.9% | -106.63ms | 2.0% → <0.1% |   108.9ms → 2.3ms |     6 → 2 | `withJSDoc`                                    | `./node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |
| -62.1% |  -36.54ms |  1.1% → 0.4% |   58.8ms → 22.3ms |   41 → 13 | `getFlowTypeOfReference`                       | `./node_modules/typescript/lib/typescript.js:71634:34 → 72917:34` |
| -15.9% |  -28.46ms |  3.2% → 2.7% | 179.0ms → 150.6ms | 133 → 114 | `getObjectFlags`                               | `./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
| -49.8% |  -24.73ms |  0.9% → 0.4% |   49.6ms → 24.9ms |   37 → 20 | `getApparentType`                              | `./node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
| -75.6% |  -22.03ms |  0.5% → 0.1% |    29.1ms → 7.1ms |    22 → 5 | `signaturesRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |
| -57.5% |  -21.35ms |  0.7% → 0.3% |   37.1ms → 15.8ms |   25 → 12 | `getAliasId`                                   | `./node_modules/typescript/lib/typescript.js:61521:22 → 62776:22` |
|  -7.4% |  -18.56ms |  4.5% → 4.1% | 250.6ms → 232.0ms | 177 → 176 | `checkTypeRelatedTo`                           | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| -75.2% |  -14.33ms |  0.3% → 0.1% |    19.1ms → 4.7ms |    15 → 4 | `instantiateSignature`                         | `./node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
| -22.2% |  -10.82ms |  0.9% → 0.7% |   48.6ms → 37.8ms |   37 → 29 | `couldContainTypeVariables`                    | `./node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |
| -41.5% |  -10.64ms |  0.5% → 0.3% |   25.7ms → 15.0ms |   20 → 12 | `getMappedType`                                | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
| -53.6% |   -9.29ms |  0.3% → 0.1% |    17.3ms → 8.1ms |    13 → 6 | `getConditionalFlowTypeOfType`                 | `./node_modules/typescript/lib/typescript.js:61824:40 → 63079:40` |
| -15.9% |   -9.23ms |  1.0% → 0.9% |   58.1ms → 48.9ms |   46 → 38 | `getRelationKey`                               | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
| -80.2% |   -9.17ms | 0.2% → <0.1% |    11.4ms → 2.3ms |     9 → 2 | `isBinaryExpression`                           | `./node_modules/typescript/lib/typescript.js:29192:28 → 30242:28` |
| -68.7% |   -7.96ms |  0.2% → 0.1% |    11.6ms → 3.6ms |     9 → 3 | `getSymbolFlags`                               | `./node_modules/typescript/lib/typescript.js:51447:26 → 52688:26` |
| -46.6% |   -7.74ms |  0.3% → 0.2% |    16.6ms → 8.9ms |    13 → 7 | `getTypeOfSymbol`                              | `./node_modules/typescript/lib/typescript.js:58408:27 → 59663:27` |
| -87.7% |   -7.49ms | 0.2% → <0.1% |     8.5ms → 1.1ms |     7 → 1 | `length`                                       | `./node_modules/typescript/lib/typescript.js:2362:16 → 2375:16`   |
| -44.9% |   -7.25ms |  0.3% → 0.2% |    16.2ms → 8.9ms |    12 → 7 | `isNamedDeclaration`                           | `./node_modules/typescript/lib/typescript.js:14052:28 → 15027:28` |
| -22.0% |   -7.12ms |  0.6% → 0.4% |   32.3ms → 25.2ms |   25 → 14 | `setStructuredTypeMembers`                     | `./node_modules/typescript/lib/typescript.js:52502:36 → 53743:36` |
| -57.0% |   -7.03ms |  0.2% → 0.1% |    12.3ms → 5.3ms |    10 → 4 | `getSignaturesOfStructuredType`                | `./node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |
| -84.8% |   -6.90ms | 0.1% → <0.1% |     8.1ms → 1.2ms |     6 → 1 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |

##### Native

|  Change |   Delta |            % |              Time |   Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ------: | ------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|   -2.8% | -7.57ms |  4.9% → 4.7% | 272.5ms → 264.9ms | 213 → 205 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| removed | -4.96ms |  0.1% → 0.0% |       5.0ms → 0ms |     1 → 0 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|   -5.0% | -1.61ms |  0.6% → 0.5% |   32.0ms → 30.4ms |   26 → 23 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
| removed | -1.47ms | <0.1% → 0.0% |       1.5ms → 0ms |     1 → 0 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| removed | -1.46ms | <0.1% → 0.0% |       1.5ms → 0ms |     1 → 0 | `writer`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| removed | -1.35ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createRequire`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|  -17.4% | -1.33ms |         0.1% |     7.6ms → 6.3ms |     6 → 5 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
| removed | -1.10ms | <0.1% → 0.0% |       1.1ms → 0ms |     1 → 0 | `max`                                                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
| removed | -1.04ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `stream`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
|   -9.2% | -0.12ms |        <0.1% |     1.4ms → 1.2ms |         1 | `/^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)/`                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function      | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ------------- | ----------- |
|  -65.9% | -11.70ms |  0.3% → 0.1% |  17.8ms → 6.1ms |  13 → 5 | `slice`       | `<unknown>` |
|  -49.2% | -10.71ms |  0.4% → 0.2% | 21.7ms → 11.0ms |  17 → 9 | `forEach`     | `<unknown>` |
|  -65.5% |  -9.40ms |  0.3% → 0.1% |  14.3ms → 4.9ms |  11 → 4 | `join`        | `<unknown>` |
| removed |  -3.65ms |  0.1% → 0.0% |     3.6ms → 0ms |   3 → 0 | `trimEnd`     | `<unknown>` |
|  -72.0% |  -3.28ms | 0.1% → <0.1% |   4.6ms → 1.3ms |   4 → 1 | `lastIndexOf` | `<unknown>` |
|  -26.0% |  -3.02ms |         0.2% |  11.6ms → 8.6ms |   7 → 6 | `toString`    | `<unknown>` |
| removed |  -2.82ms |  0.1% → 0.0% |     2.8ms → 0ms |   2 → 0 | `trimStart`   | `<unknown>` |
|  -71.6% |  -2.73ms | 0.1% → <0.1% |   3.8ms → 1.1ms |   3 → 1 | `find`        | `<unknown>` |
| removed |  -2.70ms | <0.1% → 0.0% |     2.7ms → 0ms |   2 → 0 | `resolve`     | `<unknown>` |
| removed |  -2.61ms | <0.1% → 0.0% |     2.6ms → 0ms |   2 → 0 | `replace`     | `<unknown>` |
| removed |  -2.47ms | <0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `indexOf`     | `<unknown>` |
| removed |  -2.35ms | <0.1% → 0.0% |     2.4ms → 0ms |   2 → 0 | `substring`   | `<unknown>` |
|  -62.4% |  -2.13ms | 0.1% → <0.1% |   3.4ms → 1.3ms |   3 → 1 | `Map`         | `<unknown>` |
| removed |  -1.41ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `includes`    | `<unknown>` |
| removed |  -1.31ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `charCodeAt`  | `<unknown>` |
| removed |  -1.29ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `splice`      | `<unknown>` |
| removed |  -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `RegExp`      | `<unknown>` |
| removed |  -1.22ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `exec`        | `<unknown>` |
|  -52.1% |  -1.17ms |        <0.1% |   2.2ms → 1.1ms |   2 → 1 | `add`         | `<unknown>` |
| removed |  -1.12ms | <0.1% → 0.0% |     1.1ms → 0ms |   1 → 0 | `delete`      | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `NodeObject` (`./node_modules/typescript/lib/typescript.js:148243:14`)

|  Change |    Delta |      % |             Time | Samples | Location                                                      |
| ------: | -------: | -----: | ---------------: | ------: | ------------------------------------------------------------- |
| +435.4% | +94.59ms | 100.0% | 21.7ms → 116.3ms | 17 → 12 | `./node_modules/typescript/lib/typescript.js:146198 → 148244` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +268.0% | +7.41ms |  6.7% → 15.4% |  2.8ms → 10.2ms |   2 → 8 | `./node_modules/typescript/lib/typescript.js:70068 → 71351` |
| +147.6% | +5.74ms |  9.4% → 14.6% |   3.9ms → 9.6ms |   3 → 6 | `./node_modules/typescript/lib/typescript.js:70032 → 71315` |
|  +47.4% | +5.47ms | 28.0% → 25.8% | 11.5ms → 17.0ms |  9 → 13 | `./node_modules/typescript/lib/typescript.js:69902 → 71185` |
|  +89.9% | +2.39ms |   6.4% → 7.6% |   2.7ms → 5.0ms |   2 → 4 | `./node_modules/typescript/lib/typescript.js:69922 → 71205` |
| removed | -2.38ms |   5.8% → 0.0% |     2.4ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:69905`         |

##### `TypeObject` (`./node_modules/typescript/lib/typescript.js:148564:14`)

| Change |    Delta |             % |         Time | Samples | Location                                             |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------- |
|    new | +20.45ms | 0.0% → 100.0% | 0ms → 20.4ms |   0 → 9 | `./node_modules/typescript/lib/typescript.js:148565` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js:61933:26`)

|  Change |    Delta |             % |           Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +317.5% | +16.44ms | 21.8% → 51.0% | 5.2ms → 21.6ms |  4 → 17 | `./node_modules/typescript/lib/typescript.js:60680 → 61935` |
|  +48.2% |  +1.29ms |  11.3% → 9.4% |  2.7ms → 4.0ms |   2 → 3 | `./node_modules/typescript/lib/typescript.js:60682 → 61937` |
| removed |  -1.20ms |   5.1% → 0.0% |    1.2ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:60683`         |
|  +77.4% |  +1.07ms |          5.8% |  1.4ms → 2.5ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:60685 → 61940` |
|   +5.0% |  +0.49ms | 41.3% → 24.3% | 9.8ms → 10.3ms |       8 | `./node_modules/typescript/lib/typescript.js:60679 → 61934` |

##### `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +594.3% | +14.50ms | 13.9% → 49.1% |  2.4ms → 16.9ms |  2 → 12 | `./node_modules/typescript/lib/typescript.js:66172 → 67432` |
|  +26.0% |  +3.32ms | 72.7% → 46.7% | 12.8ms → 16.1ms | 10 → 13 | `./node_modules/typescript/lib/typescript.js:66174 → 67434` |
|     new |  +1.44ms |   0.0% → 4.2% |     0ms → 1.4ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:67433`         |

##### `isTupleType` (`./node_modules/typescript/lib/typescript.js:70353:23`)

|  Change |    Delta |      % |           Time | Samples | Location                                                    |
| ------: | -------: | -----: | -------------: | ------: | ----------------------------------------------------------- |
| +378.0% | +16.23ms | 100.0% | 4.3ms → 20.5ms |  3 → 16 | `./node_modules/typescript/lib/typescript.js:69094 → 70354` |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

| Change |    Delta |              % |            Time | Samples | Location                                                    |
| -----: | -------: | -------------: | --------------: | ------: | ----------------------------------------------------------- |
| +41.2% | +13.65ms | 100.0% → 94.8% | 33.1ms → 46.8ms | 25 → 32 | `./node_modules/typescript/lib/typescript.js:66150 → 67410` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js:72224:30`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| +390.2% | +5.96ms |  9.0% → 23.4% | 1.5ms → 7.5ms |   1 → 6 | `./node_modules/typescript/lib/typescript.js:70942 → 72225` |
|     new | +4.96ms |  0.0% → 15.5% |   0ms → 5.0ms |   0 → 4 | `./node_modules/typescript/lib/typescript.js:72285`         |
|  +77.4% | +2.78ms | 21.2% → 19.9% | 3.6ms → 6.4ms |   3 → 5 | `./node_modules/typescript/lib/typescript.js:70943 → 72226` |
| removed | -1.38ms |   8.2% → 0.0% |   1.4ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:70986`         |
|     new | +1.30ms |   0.0% → 4.1% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:72237`         |

##### `SymbolObject` (`./node_modules/typescript/lib/typescript.js:148449:14`)

|  Change |    Delta |      % |            Time | Samples | Location                                                      |
| ------: | -------: | -----: | --------------: | ------: | ------------------------------------------------------------- |
| +114.1% | +14.81ms | 100.0% | 13.0ms → 27.8ms | 10 → 14 | `./node_modules/typescript/lib/typescript.js:146407 → 148450` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:61750:34`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +56.5% | +12.68ms | 100.0% | 22.4ms → 35.1ms | 17 → 27 | `./node_modules/typescript/lib/typescript.js:60496 → 61751` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  +73.1% | +12.59ms | 47.3% → 62.0% | 17.2ms → 29.8ms | 13 → 23 | `./node_modules/typescript/lib/typescript.js:12774 → 12904` |
|     new | +10.74ms |  0.0% → 22.3% |    0ms → 10.7ms |   0 → 8 | `./node_modules/typescript/lib/typescript.js:13084`         |
| removed | -10.12ms |  27.8% → 0.0% |    10.1ms → 0ms |   8 → 0 | `./node_modules/typescript/lib/typescript.js:12959`         |
|     new |  +3.52ms |   0.0% → 7.3% |     0ms → 3.5ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:13336`         |
|     new |  +1.47ms |   0.0% → 3.1% |     0ms → 1.5ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:13054`         |

##### `scanJSDocCommentTextToken` (`./node_modules/typescript/lib/typescript.js:14434:37`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| +517.7% | +5.64ms | 12.3% → 33.2% | 1.1ms → 6.7ms |   1 → 5 | `./node_modules/typescript/lib/typescript.js:13482 → 14440` |
| +119.8% | +3.07ms | 28.9% → 27.8% | 2.6ms → 5.6ms |   2 → 4 | `./node_modules/typescript/lib/typescript.js:13492 → 14450` |
| removed | -1.41ms |  15.9% → 0.0% |   1.4ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:13477`         |
|     new | +1.35ms |   0.0% → 6.7% |   0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:14444`         |
|  -34.3% | -0.77ms |  25.3% → 7.3% | 2.2ms → 1.5ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:13494 → 14452` |

##### `getSymbolLinks` (`./node_modules/typescript/lib/typescript.js:51493:26`)

| Change |   Delta |             % |            Time | Samples | Location                                                    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +50.0% | +6.81ms | 73.0% → 69.0% | 13.6ms → 20.4ms | 11 → 15 | `./node_modules/typescript/lib/typescript.js:50256 → 51497` |
|  +2.9% | +0.15ms | 27.0% → 17.5% |   5.0ms → 5.2ms |       4 | `./node_modules/typescript/lib/typescript.js:50253 → 51494` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js:46190:25`)

|  Change |    Delta |             % |           Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +115.0% | +10.58ms | 52.6% → 70.0% | 9.2ms → 19.8ms |  8 → 15 | `./node_modules/typescript/lib/typescript.js:45010 → 46203` |
| +216.5% |  +3.25ms |  8.6% → 16.8% |  1.5ms → 4.7ms |   1 → 4 | `./node_modules/typescript/lib/typescript.js:45000 → 46193` |
|  -72.3% |  -3.00ms |  23.7% → 4.1% |  4.1ms → 1.1ms |   3 → 1 | `./node_modules/typescript/lib/typescript.js:45007 → 46200` |
| removed |  -1.37ms |   7.8% → 0.0% |    1.4ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:45063`         |
|  -15.6% |  -0.20ms |   7.3% → 3.8% |  1.3ms → 1.1ms |       1 | `./node_modules/typescript/lib/typescript.js:44998 → 46191` |

##### `createSymbolTable` (`./node_modules/typescript/lib/typescript.js:16239:27`)

|  Change |    Delta |             % |           Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +446.1% | +10.05ms | 63.2% → 90.7% | 2.3ms → 12.3ms |   2 → 9 | `./node_modules/typescript/lib/typescript.js:15265 → 16240` |
|     new |  +1.27ms |   0.0% → 9.3% |    0ms → 1.3ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:16242`         |

##### `getUnionType` (`./node_modules/typescript/lib/typescript.js:64095:24`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|     new | +4.48ms |  0.0% → 24.9% |   0ms → 4.5ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:64105`         |
|     new | +4.07ms |  0.0% → 22.6% |   0ms → 4.1ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:64106`         |
| removed | -1.44ms |  17.3% → 0.0% |   1.4ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:62845`         |
|     new | +1.38ms |   0.0% → 7.7% |   0ms → 1.4ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:64096`         |
|  +92.1% | +1.36ms | 17.7% → 15.8% | 1.5ms → 2.8ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:62849 → 64104` |

##### `findAncestor` (`./node_modules/typescript/lib/typescript.js:14924:22`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  +27.5% | +5.24ms | 78.3% → 72.5% | 19.0ms → 24.3ms | 15 → 17 | `./node_modules/typescript/lib/typescript.js:13951 → 14926` |
| +128.2% | +5.18ms | 16.6% → 27.5% |   4.0ms → 9.2ms |   3 → 7 | `./node_modules/typescript/lib/typescript.js:13957 → 14932` |
| removed | -1.22ms |   5.0% → 0.0% |     1.2ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:13950`         |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

|  Change |   Delta |            % |          Time | Samples | Location                                                    |
| ------: | ------: | -----------: | ------------: | ------: | ----------------------------------------------------------- |
| +265.6% | +3.98ms | 7.9% → 19.6% | 1.5ms → 5.5ms |   1 → 4 | `./node_modules/typescript/lib/typescript.js:60108 → 61363` |
|     new | +2.77ms |  0.0% → 9.9% |   0ms → 2.8ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:61361`         |
| removed | -2.74ms | 14.5% → 0.0% |   2.7ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:60095`         |
| removed | -1.49ms |  7.9% → 0.0% |   1.5ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:60094`         |
|     new | +1.46ms |  0.0% → 5.2% |   0ms → 1.5ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:61352`         |

##### `getIndexedAccessTypeOrUndefined` (`./node_modules/typescript/lib/typescript.js:65149:43`)

|  Change |   Delta |            % |        Time | Samples | Location                                            |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- |
|     new | +2.38ms | 0.0% → 14.0% | 0ms → 2.4ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:65159` |
|     new | +2.32ms | 0.0% → 13.6% | 0ms → 2.3ms |   0 → 2 | `./node_modules/typescript/lib/typescript.js:65154` |
| removed | -1.50ms | 18.4% → 0.0% | 1.5ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:63895` |
|     new | +1.48ms |  0.0% → 8.7% | 0ms → 1.5ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65167` |
|     new | +1.46ms |  0.0% → 8.6% | 0ms → 1.5ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65171` |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js:24844:27`)

|  Change |   Delta |             % |            Time | Samples | Location                                                    |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +605.5% | +8.78ms |  9.2% → 41.7% |  1.5ms → 10.2ms |   1 → 8 | `./node_modules/typescript/lib/typescript.js:23814 → 24864` |
|  -42.4% | -1.08ms |  16.1% → 6.0% |   2.5ms → 1.5ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:23802 → 24852` |
|   +8.7% | +1.03ms | 74.7% → 52.4% | 11.8ms → 12.9ms |  9 → 10 | `./node_modules/typescript/lib/typescript.js:23815 → 24865` |

##### `SymbolLinks` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| +97.5% | +3.56ms | 100.0% | 3.7ms → 7.2ms |   3 → 6 | 1        |

##### `generatorResume` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.06ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | 1        |

##### `next` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Location |
| ------: | ------: | -------------: | ------------: | ------: | -------- |
| +156.7% | +3.94ms | 100.0% → 83.9% | 2.5ms → 6.5ms |   2 → 5 | 1        |

##### `map` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +3.41ms | 0.0% → 100.0% | 0ms → 3.4ms |   0 → 3 | 1        |

##### `filter` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| +36.4% | +1.02ms | 100.0% | 2.8ms → 3.8ms |   2 → 3 | 1        |

##### `some` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| +79.9% | +0.99ms | 100.0% | 1.2ms → 2.2ms |   1 → 2 | 1        |

##### `(anonymous)` (`node:crypto:1:11`)

| Change |   Delta |      % |          Time | Samples | Location         |
| -----: | ------: | -----: | ------------: | ------: | ---------------- |
| +33.8% | +0.36ms | 100.0% | 1.1ms → 1.4ms |       1 | `node:crypto:74` |

##### `withJSDoc` (`./node_modules/typescript/lib/typescript.js:32743:21`)

| Change |     Delta |             % |            Time | Samples | Location                                                    |
| -----: | --------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| -98.8% | -104.30ms | 96.9% → 53.2% | 105.5ms → 1.2ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:31696 → 32748` |
| -68.6% |   -2.34ms |  3.1% → 46.8% |   3.4ms → 1.1ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:31692 → 32744` |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:72917:34`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  -63.3% | -34.04ms | 91.4% → 88.5% | 53.8ms → 19.7ms | 37 → 11 | `./node_modules/typescript/lib/typescript.js:71634 → 72917` |
|  -33.4% |  -1.29ms |  6.6% → 11.5% |   3.9ms → 2.6ms |   3 → 2 | `./node_modules/typescript/lib/typescript.js:71646 → 72929` |
| removed |  -1.22ms |   2.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:71649`         |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

| Change |    Delta |              % |              Time |   Samples | Location                                                    |
| -----: | -------: | -------------: | ----------------: | --------: | ----------------------------------------------------------- |
| -15.2% | -26.93ms | 99.1% → 100.0% | 177.5ms → 150.6ms | 132 → 114 | `./node_modules/typescript/lib/typescript.js:20243 → 21226` |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:61745:27`)

| Change |   Delta |             % |            Time | Samples | Location                                                    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| -33.7% | -5.76ms | 34.4% → 45.4% | 17.1ms → 11.3ms |  13 → 9 | `./node_modules/typescript/lib/typescript.js:60491 → 61746` |
| -74.9% | -3.56ms |   9.6% → 4.8% |   4.8ms → 1.2ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:60493 → 61748` |

##### `signaturesRelatedTo` (`./node_modules/typescript/lib/typescript.js:69505:33`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -85.3% | -8.06ms | 32.4% → 19.6% | 9.4ms → 1.4ms |   7 → 1 | `./node_modules/typescript/lib/typescript.js:68259 → 69519` |
| removed | -6.76ms |  23.2% → 0.0% |   6.8ms → 0ms |   5 → 0 | `./node_modules/typescript/lib/typescript.js:68281`         |
|  -59.5% | -1.57ms |  9.1% → 15.0% | 2.6ms → 1.1ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:68280 → 69540` |
|  -56.6% | -1.47ms |  8.9% → 15.9% | 2.6ms → 1.1ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:68247 → 69507` |
|  -56.1% | -1.42ms |  8.7% → 15.6% | 2.5ms → 1.1ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:68255 → 69515` |

##### `getAliasId` (`./node_modules/typescript/lib/typescript.js:62776:22`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -57.5% | -21.35ms | 100.0% | 37.1ms → 15.8ms | 25 → 12 | `./node_modules/typescript/lib/typescript.js:61522 → 62777` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

|  Change |    Delta |             % |              Time |   Samples | Location                                                    |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------------------- |
|   -9.5% | -14.94ms | 62.5% → 61.1% | 156.7ms → 141.8ms | 111 → 107 | `./node_modules/typescript/lib/typescript.js:66193 → 67453` |
| removed |  -4.32ms |   1.7% → 0.0% |       4.3ms → 0ms |     3 → 0 | `./node_modules/typescript/lib/typescript.js:66203`         |
|     new |  +3.87ms |   0.0% → 1.7% |       0ms → 3.9ms |     0 → 3 | `./node_modules/typescript/lib/typescript.js:67494`         |
|   +3.2% |  +2.62ms | 32.9% → 36.6% |   82.3ms → 85.0ms |   58 → 65 | `./node_modules/typescript/lib/typescript.js:66204 → 67464` |
| removed |  -2.49ms |   1.0% → 0.0% |       2.5ms → 0ms |     2 → 0 | `./node_modules/typescript/lib/typescript.js:66242`         |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js:65988:32`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -88.5% | -8.73ms | 51.7% → 23.9% | 9.9ms → 1.1ms |   8 → 1 | `./node_modules/typescript/lib/typescript.js:64751 → 66006` |
|  -78.3% | -3.76ms | 25.2% → 22.0% | 4.8ms → 1.0ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:64735 → 65990` |
| removed | -2.95ms |  15.5% → 0.0% |   3.0ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:64746`         |
|     new | +1.42ms |  0.0% → 29.9% |   0ms → 1.4ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:65997`         |
|  -20.8% | -0.30ms |  7.6% → 24.2% | 1.4ms → 1.1ms |       1 | `./node_modules/typescript/lib/typescript.js:64737 → 65992` |

##### `couldContainTypeVariables` (`./node_modules/typescript/lib/typescript.js:70860:37`)

|  Change |    Delta |             % |            Time | Samples | Location                                                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|  -70.3% | -14.02ms | 41.0% → 15.6% |  19.9ms → 5.9ms |  15 → 5 | `./node_modules/typescript/lib/typescript.js:69605 → 70865` |
|  +23.8% |  +3.53ms | 30.5% → 48.5% | 14.8ms → 18.3ms | 11 → 14 | `./node_modules/typescript/lib/typescript.js:69607 → 70867` |
| removed |  -2.55ms |   5.2% → 0.0% |     2.6ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:69606`         |
|  +52.0% |  +2.23ms |  8.8% → 17.3% |   4.3ms → 6.5ms |   3 → 5 | `./node_modules/typescript/lib/typescript.js:69601 → 70861` |
| removed |  -1.08ms |   2.2% → 0.0% |     1.1ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:69603`         |

##### `forEach` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Location |
| -----: | -------: | -----: | --------------: | ------: | -------- |
| -49.2% | -10.71ms | 100.0% | 21.7ms → 11.0ms |  17 → 9 | 1        |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:65907:25`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -8.44ms |  32.9% → 0.0% |   8.4ms → 0ms |   7 → 0 | `./node_modules/typescript/lib/typescript.js:64659`         |
|     new | +3.58ms |  0.0% → 23.8% |   0ms → 3.6ms |   0 → 3 | `./node_modules/typescript/lib/typescript.js:65932`         |
|  -59.1% | -1.62ms |  10.7% → 7.4% | 2.7ms → 1.1ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:64653 → 65908` |
|  -32.8% | -1.27ms | 15.1% → 17.3% | 3.9ms → 2.6ms |   3 → 2 | `./node_modules/typescript/lib/typescript.js:64680 → 65935` |
|  +78.3% | +0.99ms |  4.9% → 15.0% | 1.3ms → 2.3ms |   1 → 2 | `./node_modules/typescript/lib/typescript.js:64658 → 65913` |

##### `getConditionalFlowTypeOfType` (`./node_modules/typescript/lib/typescript.js:63079:40`)

| Change |    Delta |              % |           Time | Samples | Location                                                    |
| -----: | -------: | -------------: | -------------: | ------: | ----------------------------------------------------------- |
| -61.5% | -10.66ms | 100.0% → 82.9% | 17.3ms → 6.7ms |  13 → 5 | `./node_modules/typescript/lib/typescript.js:61827 → 63082` |
|    new |  +1.38ms |   0.0% → 17.1% |    0ms → 1.4ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:63083`         |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`)

| Change |   Delta |             % |            Time | Samples | Location                                                    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| -20.1% | -9.46ms | 81.2% → 77.1% | 47.2ms → 37.7ms | 37 → 29 | `./node_modules/typescript/lib/typescript.js:68736 → 69996` |
| -31.9% | -1.91ms |  10.3% → 8.3% |   6.0ms → 4.1ms |   5 → 3 | `./node_modules/typescript/lib/typescript.js:68735 → 69995` |
| +22.7% | +0.87ms |   6.6% → 9.6% |   3.8ms → 4.7ms |   3 → 4 | `./node_modules/typescript/lib/typescript.js:68730 → 69990` |

##### `isBinaryExpression` (`./node_modules/typescript/lib/typescript.js:30242:28`)

| Change |   Delta |      % |           Time | Samples | Location                                                    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------------------------------- |
| -80.2% | -9.17ms | 100.0% | 11.4ms → 2.3ms |   9 → 2 | `./node_modules/typescript/lib/typescript.js:29193 → 30243` |

##### `getSymbolFlags` (`./node_modules/typescript/lib/typescript.js:52688:26`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -4.00ms |  34.6% → 0.0% |   4.0ms → 0ms |   3 → 0 | `./node_modules/typescript/lib/typescript.js:51448`         |
|  -48.5% | -2.39ms | 42.6% → 70.0% | 4.9ms → 2.5ms |   4 → 2 | `./node_modules/typescript/lib/typescript.js:51460 → 52701` |
| removed | -1.38ms |  11.9% → 0.0% |   1.4ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:51467`         |
|     new | +1.09ms |  0.0% → 30.0% |   0ms → 1.1ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:52696`         |

##### `getTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js:59663:27`)

|  Change |   Delta |             % |          Time | Samples | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|  -60.6% | -3.89ms | 38.7% → 28.5% | 6.4ms → 2.5ms |   5 → 2 | `./node_modules/typescript/lib/typescript.js:58414 → 59669` |
|     new | +1.50ms |  0.0% → 17.0% |   0ms → 1.5ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:59672`         |
| removed | -1.50ms |   9.0% → 0.0% |   1.5ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:58435`         |
|  -56.2% | -1.45ms | 15.5% → 12.7% | 2.6ms → 1.1ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:58409 → 59664` |
| removed | -1.40ms |   8.4% → 0.0% |   1.4ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:58420`         |

##### `length` (`./node_modules/typescript/lib/typescript.js:2375:16`)

| Change |   Delta |      % |          Time | Samples | Location                                                  |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------------------- |
| -87.7% | -7.49ms | 100.0% | 8.5ms → 1.1ms |   7 → 1 | `./node_modules/typescript/lib/typescript.js:2363 → 2376` |

##### `isNamedDeclaration` (`./node_modules/typescript/lib/typescript.js:15027:28`)

| Change |   Delta |      % |           Time | Samples | Location                                                    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------------------------------- |
| -44.9% | -7.25ms | 100.0% | 16.2ms → 8.9ms |  12 → 7 | `./node_modules/typescript/lib/typescript.js:14053 → 15028` |

##### `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:53743:36`)

| Change |   Delta |             % |           Time | Samples | Location                                                    |
| -----: | ------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| +75.4% | +5.97ms | 24.5% → 55.1% | 7.9ms → 13.9ms |   6 → 5 | `./node_modules/typescript/lib/typescript.js:52504 → 53745` |
| -53.3% | -4.17ms | 24.2% → 14.5% |  7.8ms → 3.7ms |   6 → 3 | `./node_modules/typescript/lib/typescript.js:52506 → 53747` |
| -60.3% | -3.79ms |  19.4% → 9.9% |  6.3ms → 2.5ms |   5 → 2 | `./node_modules/typescript/lib/typescript.js:52505 → 53746` |
| -71.7% | -3.62ms |  15.6% → 5.7% |  5.0ms → 1.4ms |   4 → 1 | `./node_modules/typescript/lib/typescript.js:52507 → 53748` |
| -54.6% | -1.46ms |   8.3% → 4.8% |  2.7ms → 1.2ms |   2 → 1 | `./node_modules/typescript/lib/typescript.js:52510 → 53751` |

##### `getSignaturesOfStructuredType` (`./node_modules/typescript/lib/typescript.js:62037:41`)

| Change |   Delta |             % |          Time | Samples | Location                                                    |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| -66.6% | -5.54ms | 67.4% → 52.3% | 8.3ms → 2.8ms |   7 → 2 | `./node_modules/typescript/lib/typescript.js:60784 → 62039` |
| -71.8% | -2.88ms | 32.6% → 21.4% | 4.0ms → 1.1ms |   3 → 1 | `./node_modules/typescript/lib/typescript.js:60783 → 62038` |
|    new | +1.40ms |  0.0% → 26.3% |   0ms → 1.4ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:62040`         |

##### `checkPropertyAccessExpressionOrQualifiedName` (`./node_modules/typescript/lib/typescript.js:77201:56`)

|  Change |   Delta |             % |        Time | Samples | Location                                            |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- |
| removed | -2.76ms |  33.9% → 0.0% | 2.8ms → 0ms |   2 → 0 | `./node_modules/typescript/lib/typescript.js:75919` |
| removed | -1.51ms |  18.6% → 0.0% | 1.5ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:76025` |
| removed | -1.44ms |  17.7% → 0.0% | 1.4ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:76018` |
|     new | +1.23ms | 0.0% → 100.0% | 0ms → 1.2ms |   0 → 1 | `./node_modules/typescript/lib/typescript.js:77255` |
| removed | -1.23ms |  15.1% → 0.0% | 1.2ms → 0ms |   1 → 0 | `./node_modules/typescript/lib/typescript.js:76021` |

##### `find` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| -71.6% | -2.73ms | 100.0% | 3.8ms → 1.1ms |   3 → 1 | 1        |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `NodeObject` (`./node_modules/typescript/lib/typescript.js:148243:14`)

|  Change |    Delta |              % |             Time | Samples | Caller           | Location                                                          |
| ------: | -------: | -------------: | ---------------: | ------: | ---------------- | ----------------------------------------------------------------- |
| +466.4% | +95.78ms | 94.5% → 100.0% | 20.5ms → 116.3ms | 16 → 12 | `createBaseNode` | `./node_modules/typescript/lib/typescript.js:31416:21 → 32468:21` |
| removed |  -1.19ms |    5.5% → 0.0% |      1.2ms → 0ms |   1 → 0 | `createBaseNode` | `./node_modules/typescript/lib/typescript.js:22581:26`            |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js:71184:28`)

|  Change |   Delta |             % |           Time | Samples | Caller                        | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
| +161.0% | +6.65ms | 10.0% → 16.3% | 4.1ms → 10.8ms |   3 → 7 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:70432:33 → 71715:33` |
|  +84.6% | +5.04ms | 14.5% → 16.7% | 6.0ms → 11.0ms |   5 → 8 | `inferFromTypeArguments`      | `./node_modules/typescript/lib/typescript.js:70136:36 → 71419:36` |
| +101.3% | +4.11ms |  9.8% → 12.4% |  4.1ms → 8.2ms |   3 → 6 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js:70146:41 → 71429:41` |
|  +44.2% | +3.45ms | 18.9% → 17.0% | 7.8ms → 11.3ms |   6 → 9 | `applyToReturnTypes`          | `./node_modules/typescript/lib/typescript.js:69498:30 → 70758:30` |
|  +40.6% | +3.00ms | 18.0% → 15.8% | 7.4ms → 10.4ms |   6 → 7 | `inferFromMatchingTypes`      | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |

##### `set` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Caller                              | Location                                                |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
|     new | +22.15ms | 0.0% → 73.0% | 0ms → 22.2ms |   0 → 5 | `getDeclaredTypeOfClassOrInterface` | `./node_modules/typescript/lib/typescript.js:60073:45`  |
| removed |  -2.68ms | 41.9% → 0.0% |  2.7ms → 0ms |   2 → 0 | `declareSymbol`                     | `./node_modules/typescript/lib/typescript.js:44997:25`  |
|     new |  +2.68ms |  0.0% → 8.8% |  0ms → 2.7ms |   0 → 1 | `getSpreadType`                     | `./node_modules/typescript/lib/typescript.js:65547:25`  |
| removed |  -2.46ms | 38.4% → 0.0% |  2.5ms → 0ms |   2 → 0 | `updateFilesByNameMap`              | `./node_modules/typescript/lib/typescript.js:124131:32` |
|     new |  +1.55ms |  0.0% → 5.1% |  0ms → 1.6ms |   0 → 1 | `getConditionalTypeInstantiation`   | `./node_modules/typescript/lib/typescript.js:66239:43`  |

##### `TypeObject` (`./node_modules/typescript/lib/typescript.js:148564:14`)

| Change |    Delta |            % |         Time | Samples | Caller             | Location                                               |
| -----: | -------: | -----------: | -----------: | ------: | ------------------ | ------------------------------------------------------ |
|    new | +19.16ms | 0.0% → 93.7% | 0ms → 19.2ms |   0 → 8 | `createType`       | `./node_modules/typescript/lib/typescript.js:53676:22` |
|    new |  +1.29ms |  0.0% → 6.3% |  0ms → 1.3ms |   0 → 1 | `createOriginType` | `./node_modules/typescript/lib/typescript.js:53689:28` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js:61933:26`)

|  Change |    Delta |             % |            Time | Samples | Caller                                 | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
| +143.1% | +15.88ms | 46.8% → 63.7% | 11.1ms → 27.0ms |  9 → 21 | `getReducedApparentType`               | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34` |
|  +18.0% |  +1.38ms | 32.2% → 21.3% |   7.6ms → 9.0ms |   6 → 7 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:66156:48 → 67416:48` |
| +112.0% |  +1.36ms |   5.1% → 6.1% |   1.2ms → 2.6ms |   1 → 2 | `getIndexType`                         | `./node_modules/typescript/lib/typescript.js:63348:24 → 64603:24` |
| removed |  -1.21ms |   5.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `getIndexedAccessTypeOrUndefined`      | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |
|     new |  +1.14ms |   0.0% → 2.7% |     0ms → 1.1ms |   0 → 1 | `instantiateMappedType`                | `./node_modules/typescript/lib/typescript.js:64891:33 → 66151:33` |

##### `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`)

| Change |    Delta |      % |            Time | Samples | Caller                                 | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
| +96.4% | +16.92ms | 100.0% | 17.6ms → 34.5ms | 14 → 26 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:66156:48 → 67416:48` |

##### `isTupleType` (`./node_modules/typescript/lib/typescript.js:70353:23`)

|  Change |   Delta |             % |          Time | Samples | Caller                      | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------- | ----------------------------------------------------------------- |
| +513.3% | +7.43ms | 33.7% → 43.2% | 1.4ms → 8.9ms |   1 → 7 | `isGenericTupleType`        | `./node_modules/typescript/lib/typescript.js:69096:30 → 70356:30` |
|     new | +2.44ms |  0.0% → 11.9% |   0ms → 2.4ms |   0 → 2 | `isArrayOrTupleType`        | `./node_modules/typescript/lib/typescript.js:70233:30`            |
| +106.7% | +1.47ms | 32.2% → 13.9% | 1.4ms → 2.9ms |   1 → 2 | `tryGetTypeAtPosition`      | `./node_modules/typescript/lib/typescript.js:78864:32 → 80159:32` |
|     new | +1.42ms |   0.0% → 6.9% |   0ms → 1.4ms |   0 → 1 | `(anonymous)`               | `./node_modules/typescript/lib/typescript.js:75335:7`             |
|     new | +1.37ms |   0.0% → 6.7% |   0ms → 1.4ms |   0 → 1 | `hasEffectiveRestParameter` | `./node_modules/typescript/lib/typescript.js:80245:37`            |

##### `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`)

| Change |    Delta |      % |            Time | Samples | Caller        | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +48.9% | +16.21ms | 100.0% | 33.1ms → 49.3ms | 25 → 34 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js:72224:30`)

| Change |   Delta |             % |           Time | Samples | Caller                     | Location                                                          |
| -----: | ------: | ------------: | -------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| +84.9% | +7.62ms | 53.1% → 51.8% | 9.0ms → 16.6ms |  6 → 13 | `getTypeFacts`             | `./node_modules/typescript/lib/typescript.js:70935:24 → 72218:24` |
| +96.5% | +6.31ms | 38.7% → 40.1% | 6.5ms → 12.9ms |   5 → 9 | `getIntersectionTypeFacts` | `./node_modules/typescript/lib/typescript.js:71006:36 → 72289:36` |
| +88.5% | +1.22ms |   8.2% → 8.1% |  1.4ms → 2.6ms |   1 → 2 | `(anonymous)`              | `./node_modules/typescript/lib/typescript.js:70999:37 → 72282:37` |

##### `SymbolObject` (`./node_modules/typescript/lib/typescript.js:148449:14`)

| Change |   Delta |              % |            Time | Samples | Caller         | Location                                                          |
| -----: | ------: | -------------: | --------------: | ------: | -------------- | ----------------------------------------------------------------- |
|    new | +7.76ms |   0.0% → 27.9% |     0ms → 7.8ms |   0 → 6 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:46101:24`            |
| +54.3% | +7.05ms | 100.0% → 72.1% | 13.0ms → 20.0ms |  10 → 8 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:49995:24 → 51236:24` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js:61750:34`)

|  Change |   Delta |             % |           Time | Samples | Caller                            | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
| +118.8% | +9.25ms | 34.7% → 48.5% | 7.8ms → 17.0ms |  6 → 13 | `getSignaturesOfType`             | `./node_modules/typescript/lib/typescript.js:60789:31 → 62044:31` |
|     new | +6.47ms |  0.0% → 18.4% |    0ms → 6.5ms |   0 → 5 | `getIndexInfosOfType`             | `./node_modules/typescript/lib/typescript.js:60855:31 → 62110:31` |
|  -80.4% | -5.10ms |  28.3% → 3.5% |  6.3ms → 1.2ms |   5 → 1 | `getPropertiesOfType`             | `./node_modules/typescript/lib/typescript.js:60156:31 → 61411:31` |
|  +49.2% | +3.42ms | 31.0% → 29.5% | 6.9ms → 10.4ms |   5 → 8 | `getPropertyOfType`               | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
| removed | -1.36ms |   6.0% → 0.0% |    1.4ms → 0ms |   1 → 0 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |

##### `scan` (`./node_modules/typescript/lib/typescript.js:12895:16`)

| Change |    Delta |              % |            Time | Samples | Caller                  | Location                                                          |
| -----: | -------: | -------------: | --------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| +28.9% | +10.50ms | 100.0% → 97.5% | 36.4ms → 46.9ms | 28 → 36 | `nextTokenWithoutCheck` | `./node_modules/typescript/lib/typescript.js:31953:33 → 33008:33` |
|    new |  +1.18ms |    0.0% → 2.5% |     0ms → 1.2ms |   0 → 1 | `scanTokenAtPosition`   | `./node_modules/typescript/lib/typescript.js:17466:29`            |

##### `scanJSDocCommentTextToken` (`./node_modules/typescript/lib/typescript.js:14434:37`)

|  Change |    Delta |      % |           Time | Samples | Caller                      | Location                                                          |
| ------: | -------: | -----: | -------------: | ------: | --------------------------- | ----------------------------------------------------------------- |
| +128.5% | +11.38ms | 100.0% | 8.9ms → 20.2ms |  7 → 15 | `nextJSDocCommentTextToken` | `./node_modules/typescript/lib/typescript.js:31969:37 → 33024:37` |

##### `getSymbolLinks` (`./node_modules/typescript/lib/typescript.js:51493:26`)

|  Change |   Delta |             % |           Time | Samples | Caller                                     | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------- |
| +122.4% | +6.25ms | 27.3% → 38.3% | 5.1ms → 11.4ms |   4 → 8 | `getTypeOfVariableOrParameterOrProperty`   | `./node_modules/typescript/lib/typescript.js:58088:50 → 59343:50` |
|  -52.4% | -2.73ms |  27.9% → 8.4% |  5.2ms → 2.5ms |   4 → 2 | `instantiateSymbol`                        | `./node_modules/typescript/lib/typescript.js:64758:29 → 66013:29` |
|     new | +2.67ms |   0.0% → 9.0% |    0ms → 2.7ms |   0 → 2 | `getTypeOfFuncClassEnumModule`             | `./node_modules/typescript/lib/typescript.js:59529:40`            |
|     new | +2.63ms |   0.0% → 8.9% |    0ms → 2.6ms |   0 → 2 | `getContextualTypeForObjectLiteralElement` | `./node_modules/typescript/lib/typescript.js:75285:52`            |
|     new | +1.50ms |   0.0% → 5.1% |    0ms → 1.5ms |   0 → 1 | `getTypeAliasInstantiation`                | `./node_modules/typescript/lib/typescript.js:62886:37`            |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js:46190:25`)

|  Change |    Delta |             % |           Time | Samples | Caller                             | Location                                                          |
| ------: | -------: | ------------: | -------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
| +241.4% | +14.71ms | 34.8% → 73.6% | 6.1ms → 20.8ms |  5 → 16 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js:46199:44 → 47392:44` |
|  -61.0% |  -3.81ms |  35.7% → 8.6% |  6.2ms → 2.4ms |   5 → 2 | `declareModuleMember`              | `./node_modules/typescript/lib/typescript.js:45071:31 → 46264:31` |
|  -56.6% |  -2.92ms |  29.5% → 7.9% |  5.2ms → 2.2ms |   4 → 2 | `bindBlockScopedDeclaration`       | `./node_modules/typescript/lib/typescript.js:46333:38 → 47526:38` |
|     new |  +2.78ms |   0.0% → 9.8% |    0ms → 2.8ms |   0 → 2 | `declareClassMember`               | `./node_modules/typescript/lib/typescript.js:46246:30 → 47439:30` |

##### `createSymbolTable` (`./node_modules/typescript/lib/typescript.js:16239:27`)

|  Change |   Delta |             % |          Time | Samples | Caller                          | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| +303.1% | +3.99ms | 36.8% → 39.0% | 1.3ms → 5.3ms |   1 → 4 | `addDeclarationToSymbol`        | `./node_modules/typescript/lib/typescript.js:44912:34 → 46105:34` |
|     new | +1.54ms |  0.0% → 11.3% |   0ms → 1.5ms |   0 → 1 | `getWidenedTypeOfObjectLiteral` | `./node_modules/typescript/lib/typescript.js:70559:41`            |
|     new | +1.49ms |  0.0% → 11.0% |   0ms → 1.5ms |   0 → 1 | `checkObjectLiteral`            | `./node_modules/typescript/lib/typescript.js:76097:30`            |
|     new | +1.30ms |   0.0% → 9.6% |   0ms → 1.3ms |   0 → 1 | `transformTypeOfMembers`        | `./node_modules/typescript/lib/typescript.js:70476:34`            |
|     new | +1.27ms |   0.0% → 9.3% |   0ms → 1.3ms |   0 → 1 | `resolveAnonymousTypeMembers`   | `./node_modules/typescript/lib/typescript.js:60978:39`            |

##### `getUnionType` (`./node_modules/typescript/lib/typescript.js:64095:24`)

|  Change |   Delta |             % |          Time | Samples | Caller                  | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| +185.5% | +5.52ms | 35.7% → 47.3% | 3.0ms → 8.5ms |   2 → 6 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|     new | +1.53ms |   0.0% → 8.5% |   0ms → 1.5ms |   0 → 1 | `inferToMultipleTypes`  | `./node_modules/typescript/lib/typescript.js:71462:34`            |
|     new | +1.52ms |   0.0% → 8.5% |   0ms → 1.5ms |   0 → 1 | `computeBaseConstraint` | `./node_modules/typescript/lib/typescript.js:61624:35`            |
| removed | -1.44ms |  17.3% → 0.0% |   1.4ms → 0ms |   1 → 0 | `mapType`               | `./node_modules/typescript/lib/typescript.js:71268:19`            |
|     new | +1.44ms |   0.0% → 8.0% |   0ms → 1.4ms |   0 → 1 | `getIndexType`          | `./node_modules/typescript/lib/typescript.js:63348:24 → 64603:24` |

##### `findAncestor` (`./node_modules/typescript/lib/typescript.js:14924:22`)

|  Change |    Delta |            % |           Time | Samples | Caller                                      | Location                                                          |
| ------: | -------: | -----------: | -------------: | ------: | ------------------------------------------- | ----------------------------------------------------------------- |
| +985.1% | +11.41ms | 4.8% → 37.5% | 1.2ms → 12.6ms |   1 → 9 | `isInAmbientOrTypeNode`                     | `./node_modules/typescript/lib/typescript.js:70642:33 → 71925:33` |
|  -78.6% |  -3.99ms | 20.9% → 3.2% |  5.1ms → 1.1ms |   4 → 1 | `isInPropertyInitializerOrClassStaticBlock` | `./node_modules/typescript/lib/typescript.js:76098:53 → 77384:53` |
| removed |  -2.92ms | 12.0% → 0.0% |    2.9ms → 0ms |   2 → 0 | `isBlockScopedNameDeclaredBeforeUse`        | `./node_modules/typescript/lib/typescript.js:50289:46`            |
|     new |  +2.71ms |  0.0% → 8.1% |    0ms → 2.7ms |   0 → 2 | `isUsedInFunctionOrInstanceProperty`        | `./node_modules/typescript/lib/typescript.js:51609:48`            |
|  -61.5% |  -2.32ms | 15.5% → 4.3% |  3.8ms → 1.5ms |   3 → 1 | `chooseOverload`                            | `./node_modules/typescript/lib/typescript.js:77470:28 → 78765:28` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:61345:40`)

|  Change |   Delta |             % |           Time | Samples | Caller                          | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| +803.1% | +9.40ms |  6.2% → 37.7% | 1.2ms → 10.6ms |   1 → 8 | `getPropertyOfType`             | `./node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
|  -37.1% | -2.99ms | 42.6% → 18.1% |  8.1ms → 5.1ms |   6 → 4 | `getSignaturesOfStructuredType` | `./node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |
|     new | +1.54ms |   0.0% → 5.5% |    0ms → 1.5ms |   0 → 1 | `isFunctionObjectType`          | `./node_modules/typescript/lib/typescript.js:70931:32 → 72214:32` |
|  +36.9% | +1.49ms | 21.3% → 19.7% |  4.0ms → 5.5ms |   3 → 4 | `getIndexInfosOfStructuredType` | `./node_modules/typescript/lib/typescript.js:60848:41 → 62103:41` |
|  -53.2% | -1.38ms |  13.8% → 4.3% |  2.6ms → 1.2ms |   2 → 1 | `getPropertiesOfObjectType`     | `./node_modules/typescript/lib/typescript.js:60116:37 → 61371:37` |

##### `getIndexedAccessTypeOrUndefined` (`./node_modules/typescript/lib/typescript.js:65149:43`)

|  Change |   Delta |      % |           Time | Samples | Caller                 | Location                                                          |
| ------: | ------: | -----: | -------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| +107.9% | +8.82ms | 100.0% | 8.2ms → 17.0ms |  6 → 13 | `getIndexedAccessType` | `./node_modules/typescript/lib/typescript.js:63879:32 → 65134:32` |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js:24844:27`)

| Change |   Delta |             % |            Time | Samples | Caller                 | Location                                                          |
| -----: | ------: | ------------: | --------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| +40.7% | +5.99ms | 92.9% → 84.3% | 14.7ms → 20.7ms | 11 → 16 | `createNodeArray`      | `./node_modules/typescript/lib/typescript.js:32232:27 → 33287:27` |
|    new | +1.47ms |   0.0% → 6.0% |     0ms → 1.5ms |   0 → 1 | `asNodeArray`          | `./node_modules/typescript/lib/typescript.js:28348:23`            |
|    new | +1.31ms |   0.0% → 5.4% |     0ms → 1.3ms |   0 → 1 | `createCallExpression` | `./node_modules/typescript/lib/typescript.js:25978:32`            |
|  -3.4% | -0.04ms |   7.1% → 4.4% |           1.1ms |       1 | `createBlock`          | `./node_modules/typescript/lib/typescript.js:25392:23 → 26442:23` |

##### `readFileSync` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Caller           | Location                                                        |
| -----: | ------: | ------------: | --------------: | ------: | ---------------- | --------------------------------------------------------------- |
| +40.3% | +8.69ms | 68.6% → 81.6% | 21.6ms → 30.2ms | 14 → 23 | `readFileSync`   | `<unknown>`                                                     |
| -30.8% | -3.04ms | 31.4% → 18.4% |   9.9ms → 6.8ms |   7 → 4 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28 → 8751:28` |

##### `statSync` (`<unknown>`)

|  Change |   Delta |              % |            Time | Samples | Caller     | Location                                                        |
| ------: | ------: | -------------: | --------------: | ------: | ---------- | --------------------------------------------------------------- |
|  +32.6% | +6.63ms | 88.9% → 100.0% | 20.3ms → 27.0ms | 15 → 21 | `statSync` | `./node_modules/typescript/lib/typescript.js:8602:22 → 8631:22` |
| removed | -2.54ms |   11.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `statSync` | `<unknown>`                                                     |

##### `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g` (`<unknown>`)

| Change |   Delta |              % |           Time | Samples | Caller                | Location                                                        |
| -----: | ------: | -------------: | -------------: | ------: | --------------------- | --------------------------------------------------------------- |
| +34.0% | +2.70ms | 100.0% → 90.3% | 7.9ms → 10.6ms |   6 → 8 | `toFileNameLowerCase` | `./node_modules/typescript/lib/typescript.js:3496:29 → 3509:29` |
|    new | +1.15ms |    0.0% → 9.7% |    0ms → 1.1ms |   0 → 1 | `replace`             | `<unknown>`                                                     |

##### `SymbolLinks` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------------------------------------------------- |
| +97.5% | +3.56ms | 100.0% | 3.7ms → 7.2ms |   3 → 6 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:49995:24 → 51236:24` |

##### `/^\.\.?($|[\\/])/` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location                                              |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | ----------------------------------------------------- |
|    new | +2.74ms | 0.0% → 100.0% | 0ms → 2.7ms |   0 → 1 | `pathIsRelative` | `./node_modules/typescript/lib/typescript.js:8963:24` |

##### `/(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller          | Location                                                        |
| -----: | ------: | -----: | ------------: | ------: | --------------- | --------------------------------------------------------------- |
| +69.3% | +1.70ms | 100.0% | 2.5ms → 4.1ms |   2 → 3 | `normalizePath` | `./node_modules/typescript/lib/typescript.js:9135:23 → 9164:23` |

##### `parseModule` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller        | Location    |
| ------: | ------: | -----: | ------------: | ------: | ------------- | ----------- |
| +120.9% | +1.23ms | 100.0% | 1.0ms → 2.3ms |   1 → 2 | `(anonymous)` | `<unknown>` |

##### `generatorResume` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller   | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +1.06ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `return` | `<unknown>` |

##### `/^\/\/\/?\s*@(ts-expect-error|ts-ignore)/` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                    | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------------------ |
|    new | +1.06ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `getDirectiveFromComment` | `./node_modules/typescript/lib/typescript.js:14301:35` |

##### `realpathNativeSync` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                     | Location                                                        |
| -----: | ------: | -------------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------- |
|    new | +2.65ms |   0.0% → 70.1% |   0ms → 2.7ms |   0 → 2 | `bound realpathNativeSync` | `<unknown>`                                                     |
| -59.3% | -1.65ms | 100.0% → 29.9% | 2.8ms → 1.1ms |   2 → 1 | `realpath`                 | `./node_modules/typescript/lib/typescript.js:8852:22 → 8881:22` |

##### `next` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                     | Location                                                        |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------- |
| +148.2% | +3.73ms | 100.0% → 81.1% | 2.5ms → 6.2ms |   2 → 5 | `arrayFrom`                | `./node_modules/typescript/lib/typescript.js:3174:19 → 3187:19` |
|     new | +1.45ms |   0.0% → 18.9% |   0ms → 1.5ms |   0 → 1 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34 → 3059:34` |

##### `map` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller                                 | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------- | ------------------------------------------------------ |
|    new | +2.29ms | 0.0% → 67.2% | 0ms → 2.3ms |   0 → 2 | `createInferenceContext`               | `./node_modules/typescript/lib/typescript.js:70767:34` |
|    new | +1.12ms | 0.0% → 32.8% | 0ms → 1.1ms |   0 → 1 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48` |

##### `unshift` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller        | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +124.0% | +3.04ms | 100.0% | 2.4ms → 5.5ms |   2 → 4 | `addWorkItem` | `./node_modules/typescript/lib/typescript.js:31286:23 → 32338:23` |

##### `has` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller                   | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
|    new | +1.29ms | 0.0% → 50.1% | 0ms → 1.3ms |   0 → 1 | `addTypeToIntersection`  | `./node_modules/typescript/lib/typescript.js:64240:33` |
|    new | +1.28ms | 0.0% → 49.9% | 0ms → 1.3ms |   0 → 1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |

##### `Set` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new | +2.42ms | 0.0% → 100.0% | 0ms → 2.4ms |   0 → 1 | `getExportsOfModuleWorker` | `./node_modules/typescript/lib/typescript.js:53444:36` |

##### `get` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                            | Location                                                |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------- | ------------------------------------------------------- |
| removed | -4.04ms | 38.4% → 0.0% | 4.0ms → 0ms |   3 → 0 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64979:43`  |
|     new | +3.07ms | 0.0% → 25.1% | 0ms → 3.1ms |   0 → 2 | `findSourceFileWorker`            | `./node_modules/typescript/lib/typescript.js:125566:32` |
|     new | +2.77ms | 0.0% → 22.7% | 0ms → 2.8ms |   0 → 2 | `recursiveTypeRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68323:36`  |
| removed | -2.47ms | 23.4% → 0.0% | 2.5ms → 0ms |   2 → 0 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:50184:20`  |
| removed | -1.50ms | 14.3% → 0.0% | 1.5ms → 0ms |   1 → 0 | `getPropertyOfType`               | `./node_modules/typescript/lib/typescript.js:60739:29`  |

##### `filter` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                                  | Location                                                            |
| ------: | ------: | -------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| +177.2% | +2.45ms | 49.2% → 100.0% | 1.4ms → 3.8ms |   1 → 3 | `discriminateTypeByDiscriminableItems`  | `./node_modules/typescript/lib/typescript.js:68568:48 → 69828:48`   |
| removed | -1.43ms |   50.8% → 0.0% |   1.4ms → 0ms |   1 → 0 | `getDiagnosticsWithPrecedingDirectives` | `./node_modules/typescript/lib/typescript.js:123417:49 → 124999:49` |

##### `some` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                  | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| +79.9% | +0.99ms | 100.0% | 1.2ms → 2.2ms |   1 → 2 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js:77689:33 → 78984:33` |

##### `push` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                                |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
| removed | -1.41ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:38597:39`  |
|     new | +1.20ms |  0.0% → 51.2% | 0ms → 1.2ms |   0 → 1 | `resolveModuleNamesReusingOldState` | `./node_modules/typescript/lib/typescript.js:124396:45` |
|     new | +1.14ms |  0.0% → 48.8% | 0ms → 1.1ms |   0 → 1 | `getTemplateLiteralType`            | `./node_modules/typescript/lib/typescript.js:64644:34`  |

##### `(anonymous)` (`node:crypto:1:11`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| +33.8% | +0.36ms | 100.0% | 1.1ms → 1.4ms |       1 | `anonymous` | `<unknown>` |

##### `startsWith` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                   | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| +18.4% | +0.23ms | 100.0% | 1.3ms → 1.5ms |       1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### `values` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------ |
|     new | +1.44ms | 0.0% → 100.0% | 0ms → 1.4ms |   0 → 1 | `checkUnusedTypeParameters`         | `./node_modules/typescript/lib/typescript.js:84839:37` |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45` |

##### `withJSDoc` (`./node_modules/typescript/lib/typescript.js:32743:21`)

|  Change |     Delta |              % |            Time | Samples | Caller                           | Location                                                          |
| ------: | --------: | -------------: | --------------: | ------: | -------------------------------- | ----------------------------------------------------------------- |
|  -97.8% | -103.23ms | 96.9% → 100.0% | 105.5ms → 2.3ms |   4 → 2 | `parsePropertyOrMethodSignature` | `./node_modules/typescript/lib/typescript.js:33493:42 → 34548:42` |
| removed |   -3.41ms |    3.1% → 0.0% |     3.4ms → 0ms |   2 → 0 | `parseSourceFileWorker`          | `./node_modules/typescript/lib/typescript.js:31659:33`            |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:72917:34`)

| Change |    Delta |             % |            Time | Samples | Caller                          | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| -67.7% | -36.41ms | 91.4% → 77.9% | 53.8ms → 17.4ms | 37 → 10 | `checkIdentifier`               | `./node_modules/typescript/lib/typescript.js:72959:27 → 74242:27` |
|  -2.7% |  -0.14ms |  8.6% → 22.1% |   5.1ms → 4.9ms |   4 → 3 | `getFlowTypeOfAccessExpression` | `./node_modules/typescript/lib/typescript.js:76049:41 → 77335:41` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|  Change |   Delta |             % |            Time | Samples | Caller                       | Location                                                          |
| ------: | ------: | ------------: | --------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
|  -53.5% | -8.63ms |   9.0% → 5.0% |  16.1ms → 7.5ms |  12 → 6 | `isEmptyAnonymousObjectType` | `./node_modules/typescript/lib/typescript.js:65967:38 → 67227:38` |
|  -71.3% | -6.41ms |   5.0% → 1.7% |   9.0ms → 2.6ms |   6 → 2 | `isNonDeferredTypeReference` | `./node_modules/typescript/lib/typescript.js:68694:38 → 69954:38` |
|  -17.5% | -5.90ms | 18.8% → 18.5% | 33.7ms → 27.8ms | 23 → 21 | `couldContainTypeVariables`  | `./node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |
| removed | -4.29ms |   2.4% → 0.0% |     4.3ms → 0ms |   3 → 0 | `getNormalizedType`          | `./node_modules/typescript/lib/typescript.js:66148:29`            |
|     new | +3.73ms |   0.0% → 2.5% |     0ms → 3.7ms |   0 → 3 | `isRelatedTo`                | `./node_modules/typescript/lib/typescript.js:67753:25`            |

##### `getApparentType` (`./node_modules/typescript/lib/typescript.js:61745:27`)

|  Change |    Delta |             % |            Time | Samples | Caller                                         | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------- |
|  -50.8% | -21.92ms | 86.9% → 85.2% | 43.1ms → 21.2ms | 32 → 17 | `getReducedApparentType`                       | `./node_modules/typescript/lib/typescript.js:60495:34 → 61750:34` |
| removed |  -2.59ms |   5.2% → 0.0% |     2.6ms → 0ms |   2 → 0 | `(anonymous)`                                  | `./node_modules/typescript/lib/typescript.js:74215:9`             |
| removed |  -1.44ms |   2.9% → 0.0% |     1.4ms → 0ms |   1 → 0 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |
|  +89.3% |  +1.18ms |  2.7% → 10.0% |   1.3ms → 2.5ms |   1 → 2 | `inferFromTypes`                               | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
|   +3.9% |  +0.04ms |   2.3% → 4.7% |   1.1ms → 1.2ms |       1 | `structuredTypeRelatedToWorker`                | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |

##### `signaturesRelatedTo` (`./node_modules/typescript/lib/typescript.js:69505:33`)

| Change |    Delta |      % |           Time | Samples | Caller                          | Location                                                          |
| -----: | -------: | -----: | -------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| -75.6% | -22.03ms | 100.0% | 29.1ms → 7.1ms |  22 → 5 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |

##### `getAliasId` (`./node_modules/typescript/lib/typescript.js:62776:22`)

| Change |    Delta |             % |           Time | Samples | Caller                       | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
| -61.4% | -12.50ms | 54.8% → 49.8% | 20.4ms → 7.9ms |  13 → 6 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38 → 66040:38` |
| -69.2% | -11.61ms | 45.2% → 32.7% | 16.8ms → 5.2ms |  12 → 4 | `getIntersectionType`        | `./node_modules/typescript/lib/typescript.js:63112:31 → 64367:31` |
|    new |  +2.76ms |  0.0% → 17.5% |    0ms → 2.8ms |   0 → 2 | `getUnionTypeFromSortedList` | `./node_modules/typescript/lib/typescript.js:62948:38 → 64203:38` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

| Change |    Delta |             % |              Time |   Samples | Caller                  | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
|  -6.2% | -15.30ms | 97.7% → 98.9% | 244.8ms → 229.5ms | 173 → 174 | `isTypeRelatedTo`       | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |
| -56.5% |  -3.27ms |   2.3% → 1.1% |     5.8ms → 2.5ms |     4 → 2 | `checkTypeAssignableTo` | `./node_modules/typescript/lib/typescript.js:65233:33 → 66493:33` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js:65988:32`)

| Change |    Delta |             % |           Time | Samples | Caller                         | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | ------------------------------ | ----------------------------------------------------------------- |
| -85.5% | -15.09ms | 92.6% → 54.0% | 17.7ms → 2.6ms |  14 → 2 | `instantiateList`              | `./node_modules/typescript/lib/typescript.js:64623:27 → 65878:27` |
|    new |  +1.04ms |  0.0% → 22.0% |    0ms → 1.0ms |   0 → 1 | `createErasedSignature`        | `./node_modules/typescript/lib/typescript.js:61320:33 → 62575:33` |
| -19.7% |  -0.28ms |  7.4% → 23.9% |  1.4ms → 1.1ms |       1 | `createSignatureInstantiation` | `./node_modules/typescript/lib/typescript.js:61306:40 → 62561:40` |

##### `slice` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                     | Location                                                        |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------- |
| removed | -9.25ms |   52.1% → 0.0% |   9.3ms → 0ms |   7 → 0 | `addRange`                 | `./node_modules/typescript/lib/typescript.js:2979:18`           |
| removed | -1.51ms |    8.5% → 0.0% |   1.5ms → 0ms |   1 → 0 | `fillMissingTypeArguments` | `./node_modules/typescript/lib/typescript.js:60937:36`          |
|  -13.4% | -0.94ms | 39.4% → 100.0% | 7.0ms → 6.1ms |       5 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16 → 2546:16` |

##### `couldContainTypeVariables` (`./node_modules/typescript/lib/typescript.js:70860:37`)

| Change |   Delta |             % |            Time | Samples | Caller                     | Location                                                          |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| -21.5% | -6.86ms | 65.5% → 66.1% | 31.9ms → 25.0ms | 24 → 19 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js:65006:36 → 66266:36` |
| -23.3% | -1.87ms | 16.5% → 16.3% |   8.0ms → 6.2ms |   6 → 5 | `instantiateSymbol`        | `./node_modules/typescript/lib/typescript.js:64758:29 → 66013:29` |
| -26.7% | -1.43ms | 11.0% → 10.4% |   5.3ms → 3.9ms |   4 → 3 | `some`                     | `./node_modules/typescript/lib/typescript.js:2781:14 → 2794:14`   |
| -19.6% | -0.67ms |   7.0% → 7.2% |   3.4ms → 2.7ms |   3 → 2 | `inferFromTypes`           | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |

##### `forEach` (`<unknown>`)

|  Change |   Delta |             % |           Time | Samples | Caller                | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
|  -46.0% | -7.51ms | 75.0% → 79.8% | 16.3ms → 8.8ms |  13 → 7 | `getNamedMembers`     | `./node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |
|  -57.2% | -1.58ms | 12.7% → 10.7% |  2.8ms → 1.2ms |   2 → 1 | `checkDeferredNodes`  | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
| removed | -1.26ms |   5.8% → 0.0% |    1.3ms → 0ms |   1 → 0 | `visit`               | `./node_modules/typescript/lib/typescript.js:52216:19 → 53457:19` |
|  -25.4% | -0.36ms |   6.4% → 9.5% |  1.4ms → 1.0ms |       1 | `extendExportSymbols` | `./node_modules/typescript/lib/typescript.js:52179:31 → 53420:31` |

##### `getMappedType` (`./node_modules/typescript/lib/typescript.js:65907:25`)

|  Change |   Delta |             % |           Time | Samples | Caller                  | Location                                                          |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
|  -77.1% | -4.66ms |  23.6% → 9.2% |  6.0ms → 1.4ms |   5 → 1 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|  -31.1% | -3.34ms | 41.8% → 49.1% | 10.7ms → 7.4ms |   8 → 6 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:64807:49 → 66062:49` |
|  -33.3% | -2.50ms | 29.3% → 33.3% |  7.5ms → 5.0ms |   6 → 4 | `getMappedType`         | `./node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
| removed | -1.39ms |   5.4% → 0.0% |    1.4ms → 0ms |   1 → 0 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:64982:59 → 66242:59` |
|     new | +1.25ms |   0.0% → 8.3% |    0ms → 1.2ms |   0 → 1 | `canTailRecurse`        | `./node_modules/typescript/lib/typescript.js:65307:28`            |

##### `fetch` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller         | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------- | ----------- |
| removed | -9.85ms | 100.0% → 0.0% | 9.9ms → 0ms |   7 → 0 | `requestFetch` | `<unknown>` |

##### `join` (`<unknown>`)

| Change |    Delta |             % |           Time | Samples | Caller               | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------------------------------- |
| -82.9% | -11.01ms | 92.5% → 45.8% | 13.3ms → 2.3ms |  10 → 2 | `doJSDocScan`        | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
|    new |  +1.23ms |  0.0% → 24.8% |    0ms → 1.2ms |   0 → 1 | `getPathWithoutRoot` | `./node_modules/typescript/lib/typescript.js:9179:28`             |
| +35.5% |  +0.38ms |  7.5% → 29.4% |  1.1ms → 1.5ms |       1 | `parseTagComments`   | `./node_modules/typescript/lib/typescript.js:37509:32 → 38564:32` |

##### `getConditionalFlowTypeOfType` (`./node_modules/typescript/lib/typescript.js:63079:40`)

| Change |   Delta |      % |           Time | Samples | Caller                | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -53.6% | -9.29ms | 100.0% | 17.3ms → 8.1ms |  13 → 6 | `getTypeFromTypeNode` | `./node_modules/typescript/lib/typescript.js:64524:31 → 65779:31` |

##### `getRelationKey` (`./node_modules/typescript/lib/typescript.js:69989:26`)

| Change |    Delta |             % |            Time | Samples | Caller                   | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| -20.9% | -10.85ms | 89.4% → 84.1% | 52.0ms → 41.1ms | 41 → 32 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
| +26.2% |  +1.62ms | 10.6% → 15.9% |   6.2ms → 7.8ms |   5 → 6 | `isTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |

##### `isBinaryExpression` (`./node_modules/typescript/lib/typescript.js:30242:28`)

|  Change |   Delta |             % |          Time | Samples | Caller                                  | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- | ----------------------------------------------------------------- |
|  -68.0% | -2.35ms | 30.2% → 48.9% | 3.5ms → 1.1ms |   3 → 1 | `isLogicalOrCoalescingBinaryExpression` | `./node_modules/typescript/lib/typescript.js:19715:47 → 20698:47` |
| removed | -2.34ms |  20.5% → 0.0% |   2.3ms → 0ms |   2 → 0 | `isConstructorDeclaredProperty`         | `./node_modules/typescript/lib/typescript.js:57601:41`            |
| removed | -1.55ms |  13.6% → 0.0% |   1.6ms → 0ms |   1 → 0 | `bothHelper`                            | `./node_modules/typescript/lib/typescript.js:84142:24`            |
| removed | -1.39ms |  12.2% → 0.0% |   1.4ms → 0ms |   1 → 0 | `isAssignmentExpression`                | `./node_modules/typescript/lib/typescript.js:19739:32`            |
| removed | -1.22ms |  10.7% → 0.0% |   1.2ms → 0ms |   1 → 0 | `maybeCheckExpression`                  | `./node_modules/typescript/lib/typescript.js:80565:34`            |

##### `getSymbolFlags` (`./node_modules/typescript/lib/typescript.js:52688:26`)

|  Change |   Delta |             % |          Time | Samples | Caller                | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| removed | -3.75ms |  32.4% → 0.0% |   3.8ms → 0ms |   3 → 0 | `markAliasReferenced` | `./node_modules/typescript/lib/typescript.js:72874:31 → 74157:31` |
|  -71.5% | -3.64ms | 43.9% → 40.0% | 5.1ms → 1.5ms |   4 → 1 | `getSymbol2`          | `./node_modules/typescript/lib/typescript.js:50262:22 → 51503:22` |
| removed | -1.24ms |  10.7% → 0.0% |   1.2ms → 0ms |   1 → 0 | `checkAliasSymbol`    | `./node_modules/typescript/lib/typescript.js:86412:28`            |
|  +45.2% | +0.68ms | 12.9% → 60.0% | 1.5ms → 2.2ms |   1 → 2 | `symbolIsValue`       | `./node_modules/typescript/lib/typescript.js:52432:25 → 53673:25` |

##### `getTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js:59663:27`)

|  Change |   Delta |             % |          Time | Samples | Caller                        | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
| removed | -2.58ms |  15.5% → 0.0% |   2.6ms → 0ms |   2 → 0 | `getTypeOfInstantiatedSymbol` | `./node_modules/typescript/lib/typescript.js:58351:39 → 59606:39` |
|  -53.0% | -1.51ms | 17.2% → 15.1% | 2.9ms → 1.3ms |   2 → 1 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js:70432:33 → 71715:33` |
| removed | -1.50ms |   9.0% → 0.0% |   1.5ms → 0ms |   1 → 0 | `getNarrowedTypeOfSymbol`     | `./node_modules/typescript/lib/typescript.js:72897:35 → 74180:35` |
| removed | -1.30ms |   7.8% → 0.0% |   1.3ms → 0ms |   1 → 0 | `getWriteTypeOfSymbol`        | `./node_modules/typescript/lib/typescript.js:58395:32 → 59650:32` |
|     new | +1.19ms |  0.0% → 13.4% |   0ms → 1.2ms |   0 → 1 | `getNonMissingTypeOfSymbol`   | `./node_modules/typescript/lib/typescript.js:58439:37 → 59694:37` |

##### `anonymous` (`<unknown>`)

|  Change |   Delta |             % |              Time |   Samples | Caller        | Location                         |
| ------: | ------: | ------------: | ----------------: | --------: | ------------- | -------------------------------- |
|   -0.8% | -2.22ms | 95.8% → 97.7% | 261.1ms → 258.9ms | 204 → 200 | `require`     | `<unknown>`                      |
|  -38.3% | -1.54ms |   1.5% → 0.9% |     4.0ms → 2.5ms |     3 → 2 | `(anonymous)` | `<unknown>`                      |
| removed | -1.35ms |   0.5% → 0.0% |       1.4ms → 0ms |     1 → 0 | `(anonymous)` | `internal:stream:1:11`           |
| removed | -1.30ms |   0.5% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)` | `internal:streams/pipeline:1:11` |
| removed | -1.27ms |   0.5% → 0.0% |       1.3ms → 0ms |     1 → 0 | `(anonymous)` | `internal:promisify:1:11`        |

##### `length` (`./node_modules/typescript/lib/typescript.js:2375:16`)

|  Change |   Delta |             % |        Time | Samples | Caller                                 | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------------------------------------ |
| removed | -4.85ms |  56.7% → 0.0% | 4.8ms → 0ms |   4 → 0 | `getTypeReferenceArity`                | `./node_modules/typescript/lib/typescript.js:61593:33` |
| removed | -1.28ms |  15.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getTypeWithThisArgument`              | `./node_modules/typescript/lib/typescript.js:59199:35` |
| removed | -1.26ms |  14.8% → 0.0% | 1.3ms → 0ms |   1 → 0 | `resolveAliasWithDeprecationCheck`     | `./node_modules/typescript/lib/typescript.js:86514:44` |
| removed | -1.15ms |  13.5% → 0.0% | 1.2ms → 0ms |   1 → 0 | `fillMissingTypeArguments`             | `./node_modules/typescript/lib/typescript.js:60937:36` |
|     new | +1.05ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `getTypeFromClassOrInterfaceReference` | `./node_modules/typescript/lib/typescript.js:62851:48` |

##### `isNamedDeclaration` (`./node_modules/typescript/lib/typescript.js:15027:28`)

| Change |   Delta |      % |           Time | Samples | Caller                | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -44.9% | -7.25ms | 100.0% | 16.2ms → 8.9ms |  12 → 7 | `propagateChildFlags` | `./node_modules/typescript/lib/typescript.js:27445:29 → 28495:29` |

##### `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:53743:36`)

|  Change |   Delta |             % |            Time | Samples | Caller                        | Location                                                          |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
|  -44.1% | -8.97ms | 62.9% → 45.0% | 20.3ms → 11.4ms |  16 → 9 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js:59723:39 → 60978:39` |
|  +80.5% | +5.13ms | 19.7% → 45.6% |  6.4ms → 11.5ms |   5 → 3 | `resolveMappedTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59922:36 → 61177:36` |
|  -44.9% | -1.91ms |  13.2% → 9.3% |   4.3ms → 2.4ms |   3 → 2 | `createAnonymousType`         | `./node_modules/typescript/lib/typescript.js:52513:31 → 53754:31` |
| removed | -1.37ms |   4.2% → 0.0% |     1.4ms → 0ms |   1 → 0 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |

##### `getSignaturesOfStructuredType` (`./node_modules/typescript/lib/typescript.js:62037:41`)

| Change |   Delta |      % |           Time | Samples | Caller                | Location                                                          |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -57.0% | -7.03ms | 100.0% | 12.3ms → 5.3ms |  10 → 4 | `getSignaturesOfType` | `./node_modules/typescript/lib/typescript.js:60789:31 → 62044:31` |

##### `checkPropertyAccessExpressionOrQualifiedName` (`./node_modules/typescript/lib/typescript.js:77201:56`)

| Change |   Delta |      % |          Time | Samples | Caller                          | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| -84.8% | -6.90ms | 100.0% | 8.1ms → 1.2ms |   6 → 1 | `checkPropertyAccessExpression` | `./node_modules/typescript/lib/typescript.js:75786:41 → 77069:41` |

##### `loadAndEvaluateModule` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ----------- |
| removed | -4.96ms | 100.0% → 0.0% | 5.0ms → 0ms |   1 → 0 | `loadAndEvaluateModule` | `<unknown>` |

##### `/^\/tmp\/(?!(node_modules|bower_components|jspm_packages)(\/|$))nix\-shell\.K1HXIc\/(?!(node_modules|bower_components|jspm_packages)(\/|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules|bower_components|jspm_packages)(\/|$))[^/.][^/]*)*?\/(?!(node_modules|bower_components|jspm_packages)(\/|$))([^./]([^./]|(\.(?!min\.js$))?)*)?$/i` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Caller        | Location                                                          |
| -----: | ------: | ------------: | --------------: | ------: | ------------- | ----------------------------------------------------------------- |
|  -6.2% | -1.32ms | 66.2% → 65.4% | 21.2ms → 19.9ms | 17 → 15 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21208:60 → 22201:60` |
|  -2.7% | -0.29ms | 33.8% → 34.6% | 10.8ms → 10.5ms |   9 → 8 | `test`        | `<unknown>`                                                       |

##### `readdirSync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.47ms | 100.0% → 0.0% | 1.5ms → 0ms |   1 → 0 | `readdirSync` | `<unknown>` |

##### `writer` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                     |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------- |
| removed | -1.46ms | 100.0% → 0.0% | 1.5ms → 0ms |   1 → 0 | `WriteStream` | `internal:fs/streams:196:21` |

##### `createRequire` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller             | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------- |
| removed | -1.35ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `stringSplitFast` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                          | Location                                                        |
| -----: | ------: | -------------: | ------------: | ------: | ------------------------------- | --------------------------------------------------------------- |
| -33.1% | -2.53ms | 100.0% → 81.0% | 7.6ms → 5.1ms |   6 → 4 | `pathComponents`                | `./node_modules/typescript/lib/typescript.js:9068:24 → 9097:24` |
|    new | +1.20ms |   0.0% → 19.0% |   0ms → 1.2ms |   0 → 1 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js:123602:39`         |

##### `max` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -1.10ms | 100.0% → 0.0% | 1.1ms → 0ms |   1 → 0 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:65804:36` |

##### `stream` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.04ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `/^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)/` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                    | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------------------------- | ----------------------------------------------------------------- |
|  -9.2% | -0.12ms | 100.0% | 1.4ms → 1.2ms |       1 | `getDirectiveFromComment` | `./node_modules/typescript/lib/typescript.js:13343:35 → 14301:35` |

##### `trimEnd` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                   | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
| removed | -2.55ms | 70.0% → 0.0% | 2.6ms → 0ms |   2 → 0 | `doJSDocScan`            | `./node_modules/typescript/lib/typescript.js:37253:27` |
| removed | -1.10ms | 30.0% → 0.0% | 1.1ms → 0ms |   1 → 0 | `parseNestedTypeLiteral` | `./node_modules/typescript/lib/typescript.js:37723:38` |

##### `lastIndexOf` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller            | Location                                                          |
| ------: | ------: | -------------: | ------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| removed | -2.17ms |   47.7% → 0.0% |   2.2ms → 0ms |   2 → 0 | `startsWith`      | `./node_modules/typescript/lib/typescript.js:3819:20`             |
| removed | -1.20ms |   26.4% → 0.0% |   1.2ms → 0ms |   1 → 0 | `getBaseFileName` | `./node_modules/typescript/lib/typescript.js:9026:25`             |
|   +8.4% | +0.10ms | 25.8% → 100.0% | 1.2ms → 1.3ms |       1 | `doJSDocScan`     | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |

##### `toString` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller           | Location                                                        |
| -----: | ------: | -----: | -------------: | ------: | ---------------- | --------------------------------------------------------------- |
| -26.0% | -3.02ms | 100.0% | 11.6ms → 8.6ms |   7 → 6 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28 → 8751:28` |

##### `trimStart` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -2.82ms | 100.0% → 0.0% | 2.8ms → 0ms |   2 → 0 | `appendIfCommentDirective` | `./node_modules/typescript/lib/typescript.js:13330:36` |

##### `find` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                             | Location                                                          |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
|  -59.3% | -1.57ms | 69.6% → 100.0% | 2.7ms → 1.1ms |   2 → 1 | `getClassLikeDeclarationOfSymbol`  | `./node_modules/typescript/lib/typescript.js:20238:41 → 21221:41` |
| removed | -1.16ms |   30.4% → 0.0% |   1.2ms → 0ms |   1 → 0 | `checkResolvedBlockScopedVariable` | `./node_modules/typescript/lib/typescript.js:50794:44`            |

##### `resolve` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                  | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------- | ----------- |
| removed | -1.46ms | 53.9% → 0.0% | 1.5ms → 0ms |   1 → 0 | `(anonymous)`           | `<unknown>` |
| removed | -1.25ms | 46.1% → 0.0% | 1.2ms → 0ms |   1 → 0 | `loadAndEvaluateModule` | `<unknown>` |

##### `replace` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                 | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------- | ------------------------------------------------------ |
| removed | -1.48ms | 56.6% → 0.0% | 1.5ms → 0ms |   1 → 0 | `formatStringFromArgs` | `./node_modules/typescript/lib/typescript.js:20447:30` |
| removed | -1.13ms | 43.4% → 0.0% | 1.1ms → 0ms |   1 → 0 | `escapeString`         | `./node_modules/typescript/lib/typescript.js:18903:22` |

##### `indexOf` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ------------------------------------------------------ |
| removed | -2.47ms | 100.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `getContextualTypeForArgument` | `./node_modules/typescript/lib/typescript.js:73758:40` |

##### `substring` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller       | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------ | ------------------------------------------------------ |
| removed | -1.29ms | 54.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `scanString` | `./node_modules/typescript/lib/typescript.js:12396:22` |
| removed | -1.06ms | 45.3% → 0.0% | 1.1ms → 0ms |   1 → 0 | `scanNumber` | `./node_modules/typescript/lib/typescript.js:12234:22` |

##### `Map` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                    | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------- | ------------------------------------------------------ |
|     new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `checkGrammarObjectLiteralExpression`     | `./node_modules/typescript/lib/typescript.js:91022:47` |
| removed | -1.25ms |  36.6% → 0.0% | 1.3ms → 0ms |   1 → 0 | `checkObjectTypeForDuplicateDeclarations` | `./node_modules/typescript/lib/typescript.js:81951:51` |
| removed | -1.12ms |  32.8% → 0.0% | 1.1ms → 0ms |   1 → 0 | `checkUnusedLocalsAndParameters`          | `./node_modules/typescript/lib/typescript.js:83592:42` |
| removed | -1.05ms |  30.6% → 0.0% | 1.0ms → 0ms |   1 → 0 | `visit`                                   | `./node_modules/typescript/lib/typescript.js:52216:19` |

##### `includes` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller         | Location                                              |
| ------: | ------: | ------------: | ----------: | ------: | -------------- | ----------------------------------------------------- |
| removed | -1.41ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `hasExtension` | `./node_modules/typescript/lib/typescript.js:8940:22` |

##### `charCodeAt` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location                                              |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ----------------------------------------------------- |
| removed | -1.31ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getEncodedRootLength` | `./node_modules/typescript/lib/typescript.js:8971:30` |

##### `splice` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller              | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ------------------- | ------------------------------------------------------ |
| removed | -1.29ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `reorderCandidates` | `./node_modules/typescript/lib/typescript.js:76487:29` |

##### `RegExp` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ------------------------------------------------------ |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `getRegexFromPattern` | `./node_modules/typescript/lib/typescript.js:21175:29` |

##### `exec` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller           | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- | ------------------------------------------------------ |
| removed | -1.22ms | 100.0% → 0.0% | 1.2ms → 0ms |   1 → 0 | `extractPragmas` | `./node_modules/typescript/lib/typescript.js:38669:24` |

##### `add` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                   | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
| removed | -1.13ms |  50.1% → 0.0% | 1.1ms → 0ms |   1 → 0 | `createMarkerType`       | `./node_modules/typescript/lib/typescript.js:68666:28` |
| removed | -1.12ms |  49.9% → 0.0% | 1.1ms → 0ms |   1 → 0 | `requestSatisfyUtil`     | `<unknown>`                                            |
|     new | +1.08ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |

##### `delete` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                          | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------- | ------------------------------------------------------ |
| removed | -1.12ms | 100.0% → 0.0% | 1.1ms → 0ms |   1 → 0 | `removeWildcardFilesWithLowerPriorityExtension` | `./node_modules/typescript/lib/typescript.js:41898:55` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                            |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  +3.6% | +174.86ms | 88.7% → 89.9% | 4.91s → 5.08s | 3,657 → 3,757 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  +2.7% | +149.43ms | 99.2% → 99.8% | 5.49s → 5.64s | 4,110 → 4,187 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                                           |
|  +2.7% | +149.27ms | 99.2% → 99.8% | 5.49s → 5.64s | 4,109 → 4,186 | `processTicksAndRejections`                | `<unknown>`                                                         |
|  +2.7% | +148.18ms | 99.2% → 99.8% | 5.49s → 5.64s | 4,110 → 4,186 | `evaluate`                                 | `<unknown>`                                                         |
|  +2.7% | +148.18ms | 99.2% → 99.8% | 5.49s → 5.64s | 4,110 → 4,186 | `moduleEvaluation`                         | `<unknown>`                                                         |
|  +3.4% | +145.57ms | 77.9% → 78.8% | 4.31s → 4.46s | 3,285 → 3,363 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  +3.6% | +144.63ms | 72.0% → 73.1% | 3.98s → 4.13s | 3,031 → 3,110 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +3.3% | +144.02ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,285 → 3,362 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  +3.3% | +143.78ms | 77.9% → 78.8% | 4.31s → 4.46s | 3,286 → 3,363 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  +3.6% | +143.52ms | 72.0% → 73.0% | 3.98s → 4.13s | 3,031 → 3,109 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36`   |
|  +3.3% | +142.58ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,286 → 3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  +3.3% | +142.58ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,286 → 3,362 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  +2.6% | +141.87ms | 99.4% → 99.8% | 5.50s → 5.64s | 4,112 → 4,186 | `loadAndEvaluateModule`                    | `<unknown>`                                                         |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |

##### Third-party

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                            |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  +3.6% | +174.86ms | 88.7% → 89.9% | 4.91s → 5.08s | 3,657 → 3,757 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  +3.4% | +145.57ms | 77.9% → 78.8% | 4.31s → 4.46s | 3,285 → 3,363 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  +3.6% | +144.63ms | 72.0% → 73.1% | 3.98s → 4.13s | 3,031 → 3,110 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +3.3% | +144.02ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,285 → 3,362 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  +3.3% | +143.78ms | 77.9% → 78.8% | 4.31s → 4.46s | 3,286 → 3,363 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  +3.6% | +143.52ms | 72.0% → 73.0% | 3.98s → 4.13s | 3,031 → 3,109 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36`   |
|  +3.3% | +142.58ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,286 → 3,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  +3.3% | +142.58ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,286 → 3,362 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47 → 88649:47`   |
|  +3.4% | +135.82ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,074 → 3,145 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32 → 88656:32`   |
|  +3.4% | +135.82ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,074 → 3,145 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  +8.3% | +134.74ms | 29.3% → 31.0% | 1.62s → 1.75s | 1,230 → 1,327 | `isTypeRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27`   |
|  +4.8% | +128.11ms | 48.2% → 49.5% | 2.67s → 2.80s | 2,038 → 2,118 | `checkCallExpression`                      | `./node_modules/typescript/lib/typescript.js:78289:31 → 79584:31`   |

##### Native

| Change |     Delta |             % |            Time |       Samples | Function                                     | Location    |
| -----: | --------: | ------------: | --------------: | ------------: | -------------------------------------------- | ----------- |
|  +2.7% | +149.27ms | 99.2% → 99.8% |   5.49s → 5.64s | 4,109 → 4,186 | `processTicksAndRejections`                  | `<unknown>` |
|  +2.7% | +148.18ms | 99.2% → 99.8% |   5.49s → 5.64s | 4,110 → 4,186 | `evaluate`                                   | `<unknown>` |
|  +2.7% | +148.18ms | 99.2% → 99.8% |   5.49s → 5.64s | 4,110 → 4,186 | `moduleEvaluation`                           | `<unknown>` |
|  +2.6% | +141.87ms | 99.4% → 99.8% |   5.50s → 5.64s | 4,112 → 4,186 | `loadAndEvaluateModule`                      | `<unknown>` |
| +18.0% |   +5.65ms |   0.6% → 0.7% | 31.4ms → 37.1ms |       21 → 27 | `readFileSync`                               | `<unknown>` |
| +17.9% |   +4.09ms |   0.4% → 0.5% | 22.9ms → 27.0ms |       17 → 21 | `statSync`                                   | `<unknown>` |
|  +5.8% |   +3.93ms |   1.2% → 1.3% | 67.6ms → 71.5ms |       51 → 56 | `generatorResume`                            | `<unknown>` |
| +48.5% |   +3.84ms |   0.1% → 0.2% |  7.9ms → 11.8ms |         6 → 9 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g`   | `<unknown>` |
| +97.5% |   +3.56ms |          0.1% |   3.7ms → 7.2ms |         3 → 6 | `SymbolLinks`                                | `<unknown>` |
|    new |   +2.74ms |  0.0% → <0.1% |     0ms → 2.7ms |         0 → 1 | `/^\.\.?($\|[\\/])/`                         | `<unknown>` |
|    new |   +2.65ms |  0.0% → <0.1% |     0ms → 2.7ms |         0 → 2 | `bound realpathNativeSync`                   | `<unknown>` |
| +69.3% |   +1.70ms |  <0.1% → 0.1% |   2.5ms → 4.1ms |         2 → 3 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`        | `<unknown>` |
|    new |   +1.06ms |  0.0% → <0.1% |     0ms → 1.1ms |         0 → 1 | `return`                                     | `<unknown>` |
|    new |   +1.06ms |  0.0% → <0.1% |     0ms → 1.1ms |         0 → 1 | `/^\/\/\/?\s*@(ts-expect-error\|ts-ignore)/` | `<unknown>` |
| +36.1% |   +1.01ms |          0.1% |   2.8ms → 3.8ms |         2 → 3 | `realpathNativeSync`                         | `<unknown>` |

##### Standard library

|  Change |    Delta |             % |            Time |       Samples | Function      | Location                          |
| ------: | -------: | ------------: | --------------: | ------------: | ------------- | --------------------------------- |
|   +4.0% | +90.83ms | 41.1% → 41.8% |   2.27s → 2.36s | 1,734 → 1,777 | `forEach`     | `<unknown>`                       |
| +374.0% | +23.94ms |   0.1% → 0.5% |  6.4ms → 30.3ms |        5 → 10 | `set`         | `<unknown>`                       |
|  +33.1% | +10.84ms |   0.6% → 0.8% | 32.8ms → 43.6ms |       25 → 34 | `next`        | `<unknown>`                       |
| +124.0% |  +3.04ms |  <0.1% → 0.1% |   2.4ms → 5.5ms |         2 → 4 | `unshift`     | `<unknown>`                       |
|     new |  +2.57ms |  0.0% → <0.1% |     0ms → 2.6ms |         0 → 2 | `has`         | `<unknown>`                       |
|     new |  +2.42ms |  0.0% → <0.1% |     0ms → 2.4ms |         0 → 1 | `Set`         | `<unknown>`                       |
|  +58.0% |  +2.24ms |          0.1% |   3.9ms → 6.1ms |         3 → 5 | `filter`      | `<unknown>`                       |
|  +16.1% |  +1.70ms |          0.2% | 10.5ms → 12.2ms |         8 → 9 | `get`         | `<unknown>`                       |
|     new |  +1.06ms |  0.0% → <0.1% |     0ms → 1.1ms |         0 → 1 | `every`       | `<unknown>`                       |
|  +66.5% |  +0.93ms |         <0.1% |   1.4ms → 2.3ms |         1 → 2 | `push`        | `<unknown>`                       |
|   +9.6% |  +0.50ms |          0.1% |   5.2ms → 5.7ms |         4 → 5 | `map`         | `<unknown>`                       |
|  +33.8% |  +0.36ms |         <0.1% |   1.1ms → 1.4ms |             1 | `(anonymous)` | `node:crypto:1:11`                |
|  +18.4% |  +0.23ms |         <0.1% |   1.3ms → 1.5ms |             1 | `startsWith`  | `<unknown>`                       |
|  +13.7% |  +0.17ms |         <0.1% |   1.3ms → 1.4ms |             1 | `values`      | `<unknown>`                       |
|  +15.9% |  +0.17ms |         <0.1% |   1.1ms → 1.2ms |             1 | `(anonymous)` | `internal:streams/duplex:1:11`    |
|   +4.0% |  +0.15ms |          0.1% |   3.7ms → 3.8ms |             3 | `sort`        | `<unknown>`                       |
|   +0.5% |  +0.01ms |         <0.1% |           2.4ms |             2 | `(anonymous)` | `internal:streams/compose:1:11`   |
|   +0.5% |  +0.01ms |         <0.1% |           2.4ms |             2 | `(anonymous)` | `internal:streams/operators:1:11` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function                         | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------- | ----------------------------------------------------------------- |
| -28.9% | -97.99ms |   6.1% → 4.3% | 338.9ms → 240.9ms | 183 → 180 | `parseObjectTypeMembers`         | `./node_modules/typescript/lib/typescript.js:33580:34 → 34635:34` |
| -29.5% | -94.96ms |   5.8% → 4.0% | 321.8ms → 226.8ms | 171 → 169 | `parseTypeMember`                | `./node_modules/typescript/lib/typescript.js:33536:27 → 34591:27` |
| -30.8% | -94.70ms |   5.6% → 3.8% | 307.9ms → 213.2ms | 160 → 158 | `parsePropertyOrMethodSignature` | `./node_modules/typescript/lib/typescript.js:33493:42 → 34548:42` |
| -44.0% | -92.19ms |   3.8% → 2.1% | 209.7ms → 117.5ms |   84 → 89 | `withJSDoc`                      | `./node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |
|  -9.2% | -52.65ms |  10.3% → 9.2% | 572.9ms → 520.3ms | 427 → 389 | `checkTypeAssignableTo`          | `./node_modules/typescript/lib/typescript.js:65233:33 → 66493:33` |
|  -8.3% | -51.12ms |  11.1% → 9.9% | 612.3ms → 561.2ms | 459 → 423 | `checkTypeAliasDeclaration`      | `./node_modules/typescript/lib/typescript.js:85990:37 → 87285:37` |
| -40.4% | -39.43ms |   1.8% → 1.0% |   97.6ms → 58.2ms |   70 → 44 | `onLeft`                         | `./node_modules/typescript/lib/typescript.js:80503:20 → 81798:20` |
| -40.4% | -39.43ms |   1.8% → 1.0% |   97.6ms → 58.2ms |   70 → 44 | `left`                           | `./node_modules/typescript/lib/typescript.js:30385:16 → 31437:16` |
| -24.2% | -38.90ms |   2.9% → 2.2% | 160.7ms → 121.8ms |  112 → 93 | `typeRelatedToSomeType`          | `./node_modules/typescript/lib/typescript.js:66827:35 → 68087:35` |
| -22.5% | -37.74ms |   3.0% → 2.3% | 167.9ms → 130.1ms | 124 → 100 | `maybeCheckExpression`           | `./node_modules/typescript/lib/typescript.js:80565:34 → 81860:34` |
|  -9.0% | -37.36ms |   7.5% → 6.7% | 415.3ms → 377.9ms | 309 → 289 | `unionOrIntersectionRelatedTo`   | `./node_modules/typescript/lib/typescript.js:66757:42 → 68017:42` |
|  -5.1% | -35.76ms | 12.7% → 11.8% | 705.3ms → 669.6ms | 538 → 505 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:82238:27 → 83533:27` |
| -16.7% | -34.24ms |   3.7% → 3.0% | 204.8ms → 170.5ms | 151 → 131 | `trampoline`                     | `./node_modules/typescript/lib/typescript.js:30489:22 → 31541:22` |
| -16.7% | -33.37ms |   3.6% → 2.9% | 199.6ms → 166.2ms | 147 → 128 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:80462:12 → 81757:12` |
|  -4.7% | -33.11ms | 12.7% → 11.9% | 705.5ms → 672.3ms | 538 → 507 | `checkTypeArgumentConstraints`   | `./node_modules/typescript/lib/typescript.js:82186:40 → 83481:40` |
| -15.9% | -28.46ms |   3.2% → 2.7% | 179.0ms → 150.6ms | 133 → 114 | `getObjectFlags`                 | `./node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
| -22.1% | -27.07ms |   2.2% → 1.7% |  122.6ms → 95.5ms |   84 → 74 | `checkMappedType`                | `./node_modules/typescript/lib/typescript.js:82354:27 → 83649:27` |
| -84.3% | -26.64ms |   0.6% → 0.1% |    31.6ms → 5.0ms |    25 → 4 | `isEvolvingArrayOperationTarget` | `./node_modules/typescript/lib/typescript.js:71351:42 → 72634:42` |
|  -7.0% | -26.62ms |   6.9% → 6.3% | 380.9ms → 354.3ms | 282 → 272 | `checkModuleDeclaration`         | `./node_modules/typescript/lib/typescript.js:86242:34 → 87555:34` |
| -50.0% | -24.27ms |   0.9% → 0.4% |   48.5ms → 24.3ms |   26 → 19 | `checkUnionOrIntersectionType`   | `./node_modules/typescript/lib/typescript.js:82318:40 → 83613:40` |

##### Native

|  Change |    Delta |            % |              Time |   Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -10.97ms |  0.2% → 0.0% |      11.0ms → 0ms |     8 → 0 | `requestSatisfyUtil`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| removed |  -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| removed |  -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `requestFetch`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
| removed |  -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `requestInstantiate`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|   -2.6% |  -8.09ms |  5.6% → 5.3% | 308.2ms → 300.1ms | 241 → 231 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  -47.4% |  -7.50ms |  0.3% → 0.1% |    15.8ms → 8.3ms |    13 → 7 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| removed |  -2.60ms | <0.1% → 0.0% |       2.6ms → 0ms |     2 → 0 | `requestSatisfy`                                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
| removed |  -2.60ms | <0.1% → 0.0% |       2.6ms → 0ms |     2 → 0 | `loadModule`                                                                                                                                                                                                                                                                                                                                                                     | `<unknown>` |
|   -0.6% |  -1.85ms |  5.3% → 5.2% | 295.8ms → 294.0ms | 231 → 226 | `require`                                                                                                                                                                                                                                                                                                                                                                        | `<unknown>` |
|   -0.6% |  -1.85ms |  5.3% → 5.2% | 295.8ms → 294.0ms | 231 → 226 | `bound require`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|   -5.0% |  -1.61ms |  0.6% → 0.5% |   32.0ms → 30.4ms |   26 → 23 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
| removed |  -1.47ms | <0.1% → 0.0% |       1.5ms → 0ms |     1 → 0 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| removed |  -1.46ms | <0.1% → 0.0% |       1.5ms → 0ms |     1 → 0 | `writer`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| removed |  -1.40ms | <0.1% → 0.0% |       1.4ms → 0ms |     1 → 0 | `bound onceWrapper`                                                                                                                                                                                                                                                                                                                                                              | `<unknown>` |
| removed |  -1.35ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createRequire`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|  -17.4% |  -1.33ms |         0.1% |     7.6ms → 6.3ms |     6 → 5 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
| removed |  -1.10ms | <0.1% → 0.0% |       1.1ms → 0ms |     1 → 0 | `max`                                                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
| removed |  -1.04ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `stream`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
|   -9.2% |  -0.12ms |        <0.1% |     1.4ms → 1.2ms |         1 | `/^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)/`                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |

##### Standard library

|  Change |    Delta |            % |           Time | Samples | Function         | Location                          |
| ------: | -------: | -----------: | -------------: | ------: | ---------------- | --------------------------------- |
|  -65.9% | -11.70ms |  0.3% → 0.1% | 17.8ms → 6.1ms |  13 → 5 | `slice`          | `<unknown>`                       |
|  -65.5% |  -9.40ms |  0.3% → 0.1% | 14.3ms → 4.9ms |  11 → 4 | `join`           | `<unknown>`                       |
| removed |  -3.65ms |  0.1% → 0.0% |    3.6ms → 0ms |   3 → 0 | `trimEnd`        | `<unknown>`                       |
|  -72.0% |  -3.28ms | 0.1% → <0.1% |  4.6ms → 1.3ms |   4 → 1 | `lastIndexOf`    | `<unknown>`                       |
|  -26.0% |  -3.02ms |         0.2% | 11.6ms → 8.6ms |   7 → 6 | `toString`       | `<unknown>`                       |
| removed |  -2.82ms |  0.1% → 0.0% |    2.8ms → 0ms |   2 → 0 | `trimStart`      | `<unknown>`                       |
| removed |  -2.70ms | <0.1% → 0.0% |    2.7ms → 0ms |   2 → 0 | `resolve`        | `<unknown>`                       |
|  -26.2% |  -2.50ms |  0.2% → 0.1% |  9.5ms → 7.0ms |   7 → 6 | `some`           | `<unknown>`                       |
| removed |  -2.47ms | <0.1% → 0.0% |    2.5ms → 0ms |   2 → 0 | `indexOf`        | `<unknown>`                       |
| removed |  -2.35ms | <0.1% → 0.0% |    2.4ms → 0ms |   2 → 0 | `substring`      | `<unknown>`                       |
|  -65.3% |  -2.30ms | 0.1% → <0.1% |  3.5ms → 1.2ms |   3 → 1 | `(anonymous)`    | `node:fs:1:11`                    |
|  -62.4% |  -2.13ms | 0.1% → <0.1% |  3.4ms → 1.3ms |   3 → 1 | `Map`            | `<unknown>`                       |
|  -25.3% |  -1.60ms |         0.1% |  6.4ms → 4.7ms |   5 → 4 | `find`           | `<unknown>`                       |
| removed |  -1.46ms | <0.1% → 0.0% |    1.5ms → 0ms |   1 → 0 | `WriteStream`    | `internal:fs/streams:196:21`      |
| removed |  -1.41ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `includes`       | `<unknown>`                       |
| removed |  -1.40ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `removeListener` | `node:events:206:63`              |
| removed |  -1.40ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `onceWrapper`    | `node:events:192:21`              |
| removed |  -1.40ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `emit`           | `node:events:78:48`               |
| removed |  -1.40ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `onConstruct`    | `internal:streams/destroy:128:23` |
|  -36.0% |  -1.34ms | 0.1% → <0.1% |  3.7ms → 2.4ms |   3 → 2 | `(anonymous)`    | `internal:stream:1:11`            |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

| Change |     Delta |             % |              Time |       Samples | Caller                         | Location                                                            |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------ | ------------------------------------------------------------------- |
|  +7.3% | +121.58ms | 33.8% → 35.0% |     1.66s → 1.78s | 1,266 → 1,332 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:84112:40 → 85407:40`   |
|  +3.7% | +111.41ms |         61.8% |     3.03s → 3.14s | 2,301 → 2,363 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:83716:22 → 85011:22`   |
|  +2.4% |  +42.83ms | 36.3% → 35.9% |     1.78s → 1.82s | 1,353 → 1,380 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  +8.2% |  +42.31ms | 10.6% → 11.0% | 518.5ms → 560.8ms |     400 → 415 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js:85417:33 → 86712:33`   |
| +11.9% |  +27.15ms |   4.6% → 5.0% | 228.0ms → 255.1ms |      95 → 116 | `processReferencedFiles`       | `./node_modules/typescript/lib/typescript.js:124199:34 → 125781:34` |

##### `evaluate` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Caller             | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------------ | ----------- |
|  +2.7% | +148.18ms | 100.0% | 5.49s → 5.64s | 4,110 → 4,186 | `moduleEvaluation` | `<unknown>` |

##### `moduleEvaluation` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Caller                  | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------- | ----------- |
|  +2.7% | +150.67ms | 100.0% | 5.49s → 5.64s | 4,108 → 4,186 | `loadAndEvaluateModule` | `<unknown>` |
|  +2.7% | +148.18ms | 100.0% | 5.49s → 5.64s | 4,110 → 4,186 | `moduleEvaluation`      | `<unknown>` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

| Change |     Delta |      % |          Time |       Samples | Caller             | Location                  |
| -----: | --------: | -----: | ------------: | ------------: | ------------------ | ------------------------- |
|  +3.4% | +145.57ms | 100.0% | 4.31s → 4.46s | 3,285 → 3,363 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |     Delta |      % |          Time |       Samples | Caller                     | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------- | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

| Change |     Delta |      % |          Time |       Samples | Caller                                     | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

| Change |     Delta |      % |          Time |       Samples | Caller                   | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------ | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

| Change |     Delta |      % |          Time |       Samples | Caller                              | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

| Change |     Delta |      % |          Time |       Samples | Caller                          | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------- | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

| Change |     Delta |              % |              Time |       Samples | Caller                                                 | Location                                                          |
| -----: | --------: | -------------: | ----------------: | ------------: | ------------------------------------------------------ | ----------------------------------------------------------------- |
|  +3.5% | +141.35ms | 100.0% → 99.9% |     3.98s → 4.12s | 3,031 → 3,107 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`   |
|  +4.5% |  +98.40ms |  55.3% → 55.7% |     2.20s → 2.30s | 1,678 → 1,727 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:79840:64 → 81135:64` |
|  -8.0% |  -48.61ms |  15.2% → 13.5% | 605.8ms → 557.2ms |     454 → 420 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:85990:37 → 87285:37` |
|  +8.2% |  +35.26ms |  10.8% → 11.3% | 431.2ms → 466.4ms |     328 → 348 | `checkFunctionOrMethodDeclaration`                     | `./node_modules/typescript/lib/typescript.js:83398:44 → 84693:44` |
| +30.2% |  +32.07ms |    2.7% → 3.3% | 106.1ms → 138.2ms |      82 → 103 | `checkForOfStatement`                                  | `./node_modules/typescript/lib/typescript.js:84279:31 → 85574:31` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

| Change |     Delta |      % |          Time |       Samples | Caller        | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  +3.3% | +144.02ms | 100.0% | 4.31s → 4.45s | 3,285 → 3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

| Change |     Delta |            % |          Time |       Samples | Caller                              | Location                                                            |
| -----: | --------: | -----------: | ------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------- |
|  +3.3% | +142.58ms |       100.0% | 4.31s → 4.45s | 3,286 → 3,362 | `getDiagnosticsHelper`              | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|    new |   +1.51ms | 0.0% → <0.1% |   0ms → 1.5ms |         0 → 1 | `filterOwnedJSDocTags`              | `./node_modules/typescript/lib/typescript.js:18930:30`              |
|    new |   +1.20ms | 0.0% → <0.1% |   0ms → 1.2ms |         0 → 1 | `getRegularExpressionsForWildcards` | `./node_modules/typescript/lib/typescript.js:22090:43`              |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

| Change |     Delta |      % |          Time |       Samples | Caller               | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | -------------------- | ----------------------------------------------------------------- |
|  +3.6% | +143.52ms | 100.0% | 3.98s → 4.13s | 3,031 → 3,109 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |     Delta |      % |          Time |       Samples | Caller    | Location                                                        |
| -----: | --------: | -----: | ------------: | ------------: | --------- | --------------------------------------------------------------- |
|  +3.3% | +142.58ms | 100.0% | 4.31s → 4.45s | 3,286 → 3,362 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

| Change |     Delta |      % |          Time |       Samples | Caller                   | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------ | ------------------------------------------------------------------- |
|  +3.3% | +144.07ms | 100.0% | 4.31s → 4.45s | 3,285 → 3,362 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |

##### `loadAndEvaluateModule` (`<unknown>`)

|  Change |     Delta |              % |          Time |       Samples | Caller                  | Location    |
| ------: | --------: | -------------: | ------------: | ------------: | ----------------------- | ----------- |
|   +2.7% | +150.67ms | 99.8% → 100.0% | 5.49s → 5.64s | 4,108 → 4,186 | `(anonymous)`           | `<unknown>` |
| removed |   -8.80ms |    0.2% → 0.0% |   8.8ms → 0ms |         4 → 0 | `loadAndEvaluateModule` | `<unknown>` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

| Change |     Delta |      % |          Time |       Samples | Caller            | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------- | ----------------------------------------------------------------- |
|  +3.4% | +138.40ms | 100.0% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27 → 88552:27` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

| Change |     Delta |      % |          Time |       Samples | Caller                                | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------------- | ----------------------------------------------------------------- |
|  +3.4% | +138.40ms | 100.0% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47 → 88649:47` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

| Change |     Delta |      % |          Time |       Samples | Caller                 | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------- | ----------------------------------------------------------------- |
|  +3.4% | +138.40ms | 100.0% | 4.04s → 4.17s | 3,072 → 3,145 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32 → 88656:32` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

| Change |     Delta |      % |          Time |       Samples | Caller            | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------- | ----------------------------------------------------------------- |
|  +3.4% | +135.82ms | 100.0% | 4.04s → 4.17s | 3,074 → 3,145 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:87322:27 → 88635:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

| Change |     Delta |      % |          Time |       Samples | Caller        | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  +3.4% | +135.82ms | 100.0% | 4.04s → 4.17s | 3,074 → 3,145 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

| Change |    Delta |             % |              Time |   Samples | Caller                                     | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------ | ----------------------------------------------------------------- |
| +10.1% | +51.64ms | 31.4% → 32.0% | 510.0ms → 561.6ms | 386 → 432 | `isTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:65221:30 → 66481:30` |
|  +9.3% | +42.02ms | 27.7% → 28.0% | 449.9ms → 492.0ms | 349 → 360 | `compareTypesAssignable`                   | `./node_modules/typescript/lib/typescript.js:65209:34 → 66469:34` |
| +17.8% | +31.58ms | 10.9% → 11.9% | 177.5ms → 209.1ms | 137 → 157 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:65249:52 → 66509:52` |
|  +1.3% |  +6.36ms | 30.2% → 28.2% | 489.2ms → 495.5ms | 362 → 381 | `isTypeIdenticalTo`                        | `./node_modules/typescript/lib/typescript.js:65203:29 → 66463:29` |
| +50.1% |  +5.96ms |   0.7% → 1.0% |   11.9ms → 17.8ms |    9 → 13 | `isTypeComparableTo`                       | `./node_modules/typescript/lib/typescript.js:65227:30 → 66487:30` |

##### `checkCallExpression` (`./node_modules/typescript/lib/typescript.js:79584:31`)

| Change |     Delta |      % |          Time |       Samples | Caller                  | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------- | ----------------------------------------------------------------- |
|  +4.8% | +128.11ms | 100.0% | 2.67s → 2.80s | 2,038 → 2,118 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |

##### `readFileSync` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Caller           | Location                                                        |
| -----: | ------: | ------------: | --------------: | ------: | ---------------- | --------------------------------------------------------------- |
| +40.3% | +8.69ms | 68.6% → 81.6% | 21.6ms → 30.2ms | 14 → 23 | `readFileSync`   | `<unknown>`                                                     |
| +18.0% | +5.65ms |        100.0% | 31.4ms → 37.1ms | 21 → 27 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28 → 8751:28` |

##### `statSync` (`<unknown>`)

|  Change |   Delta |            % |            Time | Samples | Caller     | Location                                                        |
| ------: | ------: | -----------: | --------------: | ------: | ---------- | --------------------------------------------------------------- |
|  +17.9% | +4.09ms |       100.0% | 22.9ms → 27.0ms | 17 → 21 | `statSync` | `./node_modules/typescript/lib/typescript.js:8602:22 → 8631:22` |
| removed | -2.54ms | 11.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `statSync` | `<unknown>`                                                     |

##### `generatorResume` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Caller                     | Location                                                        |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------------------------------- |
| +18.7% | +5.66ms | 44.8% → 50.3% | 30.3ms → 35.9ms | 23 → 28 | `next`                     | `<unknown>`                                                     |
|  -7.5% | -2.79ms | 55.2% → 48.3% | 37.3ms → 34.5ms | 28 → 27 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34 → 3059:34` |
|    new | +1.06ms |   0.0% → 1.5% |     0ms → 1.1ms |   0 → 1 | `return`                   | `<unknown>`                                                     |

##### `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g` (`<unknown>`)

| Change |   Delta |              % |           Time | Samples | Caller                | Location                                                        |
| -----: | ------: | -------------: | -------------: | ------: | --------------------- | --------------------------------------------------------------- |
| +34.0% | +2.70ms | 100.0% → 90.3% | 7.9ms → 10.6ms |   6 → 8 | `toFileNameLowerCase` | `./node_modules/typescript/lib/typescript.js:3496:29 → 3509:29` |
|    new | +1.15ms |    0.0% → 9.7% |    0ms → 1.1ms |   0 → 1 | `replace`             | `<unknown>`                                                     |

##### `SymbolLinks` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------------------------------------------------- |
| +97.5% | +3.56ms | 100.0% | 3.7ms → 7.2ms |   3 → 6 | `createSymbol` | `./node_modules/typescript/lib/typescript.js:49995:24 → 51236:24` |

##### `/^\.\.?($|[\\/])/` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location                                              |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | ----------------------------------------------------- |
|    new | +2.74ms | 0.0% → 100.0% | 0ms → 2.7ms |   0 → 1 | `pathIsRelative` | `./node_modules/typescript/lib/typescript.js:8963:24` |

##### `bound realpathNativeSync` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location                                              |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ----------------------------------------------------- |
|    new | +2.65ms | 0.0% → 100.0% | 0ms → 2.7ms |   0 → 2 | `realpath` | `./node_modules/typescript/lib/typescript.js:8881:22` |

##### `/(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller          | Location                                                        |
| -----: | ------: | -----: | ------------: | ------: | --------------- | --------------------------------------------------------------- |
| +69.3% | +1.70ms | 100.0% | 2.5ms → 4.1ms |   2 → 3 | `normalizePath` | `./node_modules/typescript/lib/typescript.js:9135:23 → 9164:23` |

##### `return` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location                                              |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------------- |
|    new | +1.06ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3059:34` |

##### `/^\/\/\/?\s*@(ts-expect-error|ts-ignore)/` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                    | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------------------ |
|    new | +1.06ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `getDirectiveFromComment` | `./node_modules/typescript/lib/typescript.js:14301:35` |

##### `realpathNativeSync` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                     | Location                                                        |
| -----: | ------: | -------------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------- |
|    new | +2.65ms |   0.0% → 70.1% |   0ms → 2.7ms |   0 → 2 | `bound realpathNativeSync` | `<unknown>`                                                     |
| -59.3% | -1.65ms | 100.0% → 29.9% | 2.8ms → 1.1ms |   2 → 1 | `realpath`                 | `./node_modules/typescript/lib/typescript.js:8852:22 → 8881:22` |

##### `forEach` (`<unknown>`)

|  Change |    Delta |             % |            Time |       Samples | Caller                           | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------------: | -------------------------------- | ----------------------------------------------------------------- |
|   +4.3% | +97.13ms | 98.7% → 99.0% |   2.24s → 2.34s | 1,711 → 1,759 | `checkDeferredNodes`             | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|  -30.7% | -14.24ms |   2.0% → 1.4% | 46.4ms → 32.2ms |       36 → 25 | `getNamedMembers`                | `./node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |
|  +72.8% |  +2.92ms |   0.2% → 0.3% |   4.0ms → 6.9ms |         3 → 5 | `visit`                          | `./node_modules/typescript/lib/typescript.js:52216:19 → 53457:19` |
| removed |  -1.41ms |   0.1% → 0.0% |     1.4ms → 0ms |         1 → 0 | `processPragmasIntoFields`       | `./node_modules/typescript/lib/typescript.js:38584:34`            |
|  -45.1% |  -1.14ms |          0.1% |   2.5ms → 1.4ms |         2 → 1 | `checkUnusedLocalsAndParameters` | `./node_modules/typescript/lib/typescript.js:83592:42 → 84887:42` |

##### `set` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Caller                              | Location                                                |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
|     new | +22.15ms | 0.0% → 73.0% | 0ms → 22.2ms |   0 → 5 | `getDeclaredTypeOfClassOrInterface` | `./node_modules/typescript/lib/typescript.js:60073:45`  |
| removed |  -2.68ms | 41.9% → 0.0% |  2.7ms → 0ms |   2 → 0 | `declareSymbol`                     | `./node_modules/typescript/lib/typescript.js:44997:25`  |
|     new |  +2.68ms |  0.0% → 8.8% |  0ms → 2.7ms |   0 → 1 | `getSpreadType`                     | `./node_modules/typescript/lib/typescript.js:65547:25`  |
| removed |  -2.46ms | 38.4% → 0.0% |  2.5ms → 0ms |   2 → 0 | `updateFilesByNameMap`              | `./node_modules/typescript/lib/typescript.js:124131:32` |
|     new |  +1.55ms |  0.0% → 5.1% |  0ms → 1.6ms |   0 → 1 | `getConditionalTypeInstantiation`   | `./node_modules/typescript/lib/typescript.js:66239:43`  |

##### `next` (`<unknown>`)

|  Change |   Delta |             % |            Time | Samples | Caller                     | Location                                                        |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------------------------------- |
|  +23.5% | +7.12ms | 92.3% → 85.7% | 30.3ms → 37.4ms | 23 → 29 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34 → 3059:34` |
| +148.2% | +3.73ms |  7.7% → 14.3% |   2.5ms → 6.2ms |   2 → 5 | `arrayFrom`                | `./node_modules/typescript/lib/typescript.js:3174:19 → 3187:19` |

##### `unshift` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller        | Location                                                          |
| ------: | ------: | -----: | ------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +124.0% | +3.04ms | 100.0% | 2.4ms → 5.5ms |   2 → 4 | `addWorkItem` | `./node_modules/typescript/lib/typescript.js:31286:23 → 32338:23` |

##### `has` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller                   | Location                                               |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
|    new | +1.29ms | 0.0% → 50.1% | 0ms → 1.3ms |   0 → 1 | `addTypeToIntersection`  | `./node_modules/typescript/lib/typescript.js:64240:33` |
|    new | +1.28ms | 0.0% → 49.9% | 0ms → 1.3ms |   0 → 1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:68323:36` |

##### `Set` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new | +2.42ms | 0.0% → 100.0% | 0ms → 2.4ms |   0 → 1 | `getExportsOfModuleWorker` | `./node_modules/typescript/lib/typescript.js:53444:36` |

##### `filter` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller                                  | Location                                                            |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| +177.2% | +2.45ms | 35.8% → 62.8% | 1.4ms → 3.8ms |   1 → 3 | `discriminateTypeByDiscriminableItems`  | `./node_modules/typescript/lib/typescript.js:68568:48 → 69828:48`   |
|  -24.7% | -0.35ms | 37.0% → 17.6% | 1.4ms → 1.1ms |       1 | `getDiagnosticsWithPrecedingDirectives` | `./node_modules/typescript/lib/typescript.js:123417:49 → 124999:49` |
|  +13.6% | +0.14ms | 27.2% → 19.6% | 1.1ms → 1.2ms |       1 | `(anonymous)`                           | `./node_modules/typescript/lib/typescript.js:16:15`                 |

##### `get` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                            | Location                                                |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------- | ------------------------------------------------------- |
| removed | -4.04ms | 38.4% → 0.0% | 4.0ms → 0ms |   3 → 0 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64979:43`  |
|     new | +3.07ms | 0.0% → 25.1% | 0ms → 3.1ms |   0 → 2 | `findSourceFileWorker`            | `./node_modules/typescript/lib/typescript.js:125566:32` |
|     new | +2.77ms | 0.0% → 22.7% | 0ms → 2.8ms |   0 → 2 | `recursiveTypeRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68323:36`  |
| removed | -2.47ms | 23.4% → 0.0% | 2.5ms → 0ms |   2 → 0 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:50184:20`  |
| removed | -1.50ms | 14.3% → 0.0% | 1.5ms → 0ms |   1 → 0 | `getPropertyOfType`               | `./node_modules/typescript/lib/typescript.js:60739:29`  |

##### `every` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                       | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------- | ------------------------------------------------------ |
|    new | +1.06ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `isDuplicatedCommonJSExport` | `./node_modules/typescript/lib/typescript.js:88196:38` |

##### `push` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                                |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
| removed | -1.41ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:38597:39`  |
|     new | +1.20ms |  0.0% → 51.2% | 0ms → 1.2ms |   0 → 1 | `resolveModuleNamesReusingOldState` | `./node_modules/typescript/lib/typescript.js:124396:45` |
|     new | +1.14ms |  0.0% → 48.8% | 0ms → 1.1ms |   0 → 1 | `getTemplateLiteralType`            | `./node_modules/typescript/lib/typescript.js:64644:34`  |

##### `map` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller                                 | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
|     new | +2.37ms |  0.0% → 41.5% |   0ms → 2.4ms |   0 → 2 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48`            |
|     new | +2.29ms |  0.0% → 40.2% |   0ms → 2.3ms |   0 → 2 | `createInferenceContext`               | `./node_modules/typescript/lib/typescript.js:70767:34`            |
|  -61.6% | -1.68ms | 52.3% → 18.3% | 2.7ms → 1.0ms |   2 → 1 | `convertArrayLiteralExpressionToJson`  | `./node_modules/typescript/lib/typescript.js:40782:47 → 41871:47` |
| removed | -1.25ms |  24.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `matchFiles`                           | `./node_modules/typescript/lib/typescript.js:21178:20`            |
| removed | -1.23ms |  23.6% → 0.0% |   1.2ms → 0ms |   1 → 0 | `getRegularExpressionForWildcard`      | `./node_modules/typescript/lib/typescript.js:21088:41`            |

##### `(anonymous)` (`node:crypto:1:11`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| +33.8% | +0.36ms | 100.0% | 1.1ms → 1.4ms |       1 | `anonymous` | `<unknown>` |

##### `startsWith` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                   | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| +18.4% | +0.23ms | 100.0% | 1.3ms → 1.5ms |       1 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### `values` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------ |
|     new | +1.44ms | 0.0% → 100.0% | 0ms → 1.4ms |   0 → 1 | `checkUnusedTypeParameters`         | `./node_modules/typescript/lib/typescript.js:84839:37` |
| removed | -1.27ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45` |

##### `(anonymous)` (`internal:streams/duplex:1:11`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| +15.9% | +0.17ms | 100.0% | 1.1ms → 1.2ms |       1 | `anonymous` | `<unknown>` |

##### `sort` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller              | Location                                                        |
| -----: | ------: | -----: | ------------: | ------: | ------------------- | --------------------------------------------------------------- |
|  +4.0% | +0.15ms | 100.0% | 3.7ms → 3.8ms |       3 | `stableSortIndices` | `./node_modules/typescript/lib/typescript.js:3009:27 → 3022:27` |

##### `(anonymous)` (`internal:streams/compose:1:11`)

| Change |   Delta |      % |  Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.5% | +0.01ms | 100.0% | 2.4ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:streams/operators:1:11`)

| Change |   Delta |      % |  Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.5% | +0.01ms | 100.0% | 2.4ms |       2 | `anonymous` | `<unknown>` |

##### `parseObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:34635:34`)

| Change |     Delta |             % |              Time |   Samples | Caller                      | Location                                                          |
| -----: | --------: | ------------: | ----------------: | --------: | --------------------------- | ----------------------------------------------------------------- |
| -31.4% | -101.72ms | 95.6% → 92.3% | 324.1ms → 222.4ms | 171 → 166 | `parseInterfaceDeclaration` | `./node_modules/typescript/lib/typescript.js:36692:37 → 37747:37` |
| +38.7% |   +6.32ms |   4.8% → 9.4% |   16.3ms → 22.7ms |   13 → 17 | `parseTypeLiteral`          | `./node_modules/typescript/lib/typescript.js:33576:28 → 34631:28` |

##### `parseTypeMember` (`./node_modules/typescript/lib/typescript.js:34591:27`)

| Change |    Delta |      % |              Time |   Samples | Caller             | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------ | ----------------------------------------------------------------- |
| -29.5% | -94.96ms | 100.0% | 321.8ms → 226.8ms | 171 → 169 | `parseListElement` | `./node_modules/typescript/lib/typescript.js:32639:28 → 33694:28` |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js:34548:42`)

| Change |    Delta |      % |              Time |   Samples | Caller            | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ----------------- | ----------------------------------------------------------------- |
| -30.8% | -94.70ms | 100.0% | 307.9ms → 213.2ms | 160 → 158 | `parseTypeMember` | `./node_modules/typescript/lib/typescript.js:33536:27 → 34591:27` |

##### `withJSDoc` (`./node_modules/typescript/lib/typescript.js:32743:21`)

|  Change |    Delta |             % |             Time | Samples | Caller                              | Location                                                          |
| ------: | -------: | ------------: | ---------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
|  -49.4% | -84.43ms | 81.5% → 73.6% | 170.9ms → 86.5ms | 54 → 65 | `parsePropertyOrMethodSignature`    | `./node_modules/typescript/lib/typescript.js:33493:42 → 34548:42` |
| removed |  -3.41ms |   1.6% → 0.0% |      3.4ms → 0ms |   2 → 0 | `parseSourceFileWorker`             | `./node_modules/typescript/lib/typescript.js:31659:33`            |
| removed |  -2.55ms |   1.2% → 0.0% |      2.5ms → 0ms |   2 → 0 | `parseClassDeclarationOrExpression` | `./node_modules/typescript/lib/typescript.js:36632:45`            |
|  +30.2% |  +2.45ms |   3.9% → 9.0% |   8.1ms → 10.5ms |   6 → 8 | `parseFunctionDeclaration`          | `./node_modules/typescript/lib/typescript.js:36270:36 → 37325:36` |
|  -21.1% |  -2.10ms |   4.7% → 6.7% |    9.9ms → 7.8ms |   8 → 6 | `parseInterfaceDeclaration`         | `./node_modules/typescript/lib/typescript.js:36692:37 → 37747:37` |

##### `checkTypeAssignableTo` (`./node_modules/typescript/lib/typescript.js:66493:33`)

| Change |    Delta |             % |              Time |   Samples | Caller                         | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
|  -7.2% | -36.80ms | 89.6% → 91.6% | 513.1ms → 476.3ms | 393 → 357 | `checkTypeArgumentConstraints` | `./node_modules/typescript/lib/typescript.js:82186:40 → 83481:40` |
| -94.5% | -25.03ms |   4.6% → 0.3% |    26.5ms → 1.5ms |     9 → 1 | `checkMappedType`              | `./node_modules/typescript/lib/typescript.js:82354:27 → 83649:27` |
| +76.4% | +15.13ms |   3.5% → 6.7% |   19.8ms → 34.9ms |   15 → 25 | `(anonymous)`                  | `./node_modules/typescript/lib/typescript.js:85458:27 → 86753:27` |
| -57.1% |  -1.68ms |   0.5% → 0.2% |     2.9ms → 1.3ms |     2 → 1 | `(anonymous)`                  | `./node_modules/typescript/lib/typescript.js:85526:14 → 86821:14` |
| -59.8% |  -1.67ms |   0.5% → 0.2% |     2.8ms → 1.1ms |     2 → 1 | `(anonymous)`                  | `./node_modules/typescript/lib/typescript.js:85960:23 → 87255:23` |

##### `checkTypeAliasDeclaration` (`./node_modules/typescript/lib/typescript.js:87285:37`)

| Change |    Delta |      % |              Time |   Samples | Caller                     | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------- | ----------------------------------------------------------------- |
|  -8.3% | -51.12ms | 100.0% | 612.3ms → 561.2ms | 459 → 423 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36` |

##### `onLeft` (`./node_modules/typescript/lib/typescript.js:81798:20`)

| Change |    Delta |      % |            Time | Samples | Caller | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------ | ----------------------------------------------------------------- |
| -40.4% | -39.43ms | 100.0% | 97.6ms → 58.2ms | 70 → 44 | `left` | `./node_modules/typescript/lib/typescript.js:30385:16 → 31437:16` |

##### `left` (`./node_modules/typescript/lib/typescript.js:31437:16`)

| Change |    Delta |      % |            Time | Samples | Caller       | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------ | ----------------------------------------------------------------- |
| -40.4% | -39.43ms | 100.0% | 97.6ms → 58.2ms | 70 → 44 | `trampoline` | `./node_modules/typescript/lib/typescript.js:30489:22 → 31541:22` |

##### `typeRelatedToSomeType` (`./node_modules/typescript/lib/typescript.js:68087:35`)

| Change |    Delta |             % |              Time |  Samples | Caller                         | Location                                                          |
| -----: | -------: | ------------: | ----------------: | -------: | ------------------------------ | ----------------------------------------------------------------- |
| -24.3% | -37.44ms | 95.8% → 95.7% | 154.0ms → 116.6ms | 107 → 89 | `unionOrIntersectionRelatedTo` | `./node_modules/typescript/lib/typescript.js:66757:42 → 68017:42` |
| -21.7% |  -1.46ms |   4.2% → 4.3% |     6.7ms → 5.2ms |    5 → 4 | `eachTypeRelatedToSomeType`    | `./node_modules/typescript/lib/typescript.js:66809:39 → 68069:39` |

##### `maybeCheckExpression` (`./node_modules/typescript/lib/typescript.js:81860:34`)

| Change |    Delta |             % |            Time | Samples | Caller    | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | --------- | ----------------------------------------------------------------- |
| -40.4% | -39.43ms | 58.2% → 44.7% | 97.6ms → 58.2ms | 70 → 44 | `onLeft`  | `./node_modules/typescript/lib/typescript.js:80503:20 → 81798:20` |
|  +6.5% |  +4.60ms | 41.8% → 57.5% | 70.2ms → 74.8ms | 54 → 58 | `onRight` | `./node_modules/typescript/lib/typescript.js:80531:21 → 81826:21` |

##### `unionOrIntersectionRelatedTo` (`./node_modules/typescript/lib/typescript.js:68017:42`)

| Change |    Delta |             % |              Time |   Samples | Caller                          | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
| -21.1% | -24.88ms | 28.4% → 24.7% |  118.0ms → 93.2ms |   93 → 72 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|  -4.8% | -14.99ms | 75.6% → 79.1% | 314.1ms → 299.1ms | 229 → 228 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:83533:27`)

| Change |    Delta |      % |              Time |   Samples | Caller              | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------- | ----------------------------------------------------------------- |
|  -5.1% | -35.76ms | 100.0% | 705.3ms → 669.6ms | 538 → 505 | `addLazyDiagnostic` | `./node_modules/typescript/lib/typescript.js:87339:25 → 88652:25` |

##### `trampoline` (`./node_modules/typescript/lib/typescript.js:31541:22`)

| Change |    Delta |     % |              Time |   Samples | Caller         | Location                                                          |
| -----: | -------: | ----: | ----------------: | --------: | -------------- | ----------------------------------------------------------------- |
| -16.7% | -33.37ms | 97.5% | 199.6ms → 166.2ms | 147 → 128 | `(anonymous)`  | `./node_modules/typescript/lib/typescript.js:80462:12 → 81757:12` |
| -16.9% |  -0.88ms |  2.5% |     5.2ms → 4.3ms |     4 → 3 | `bindChildren` | `./node_modules/typescript/lib/typescript.js:45235:24 → 46428:24` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:81757:12`)

| Change |    Delta |      % |              Time |   Samples | Caller                  | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
| -16.7% | -33.37ms | 100.0% | 199.6ms → 166.2ms | 147 → 128 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |

##### `checkTypeArgumentConstraints` (`./node_modules/typescript/lib/typescript.js:83481:40`)

| Change |    Delta |             % |              Time |   Samples | Caller        | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------- | ----------------------------------------------------------------- |
|  -5.1% | -35.70ms | 99.8% → 99.4% | 704.1ms → 668.4ms | 537 → 504 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:82238:27 → 83533:27` |
| +81.6% |  +1.08ms |   0.2% → 0.4% |     1.3ms → 2.4ms |     1 → 2 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:85458:27 → 86753:27` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js:21225:24`)

|  Change |   Delta |             % |            Time | Samples | Caller                       | Location                                                          |
| ------: | ------: | ------------: | --------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
|  -53.5% | -8.63ms |   9.0% → 5.0% |  16.1ms → 7.5ms |  12 → 6 | `isEmptyAnonymousObjectType` | `./node_modules/typescript/lib/typescript.js:65967:38 → 67227:38` |
|  -71.3% | -6.41ms |   5.0% → 1.7% |   9.0ms → 2.6ms |   6 → 2 | `isNonDeferredTypeReference` | `./node_modules/typescript/lib/typescript.js:68694:38 → 69954:38` |
|  -17.5% | -5.90ms | 18.8% → 18.5% | 33.7ms → 27.8ms | 23 → 21 | `couldContainTypeVariables`  | `./node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |
| removed | -4.29ms |   2.4% → 0.0% |     4.3ms → 0ms |   3 → 0 | `getNormalizedType`          | `./node_modules/typescript/lib/typescript.js:66148:29`            |
|     new | +3.73ms |   0.0% → 2.5% |     0ms → 3.7ms |   0 → 3 | `isRelatedTo`                | `./node_modules/typescript/lib/typescript.js:67753:25`            |

##### `checkMappedType` (`./node_modules/typescript/lib/typescript.js:83649:27`)

| Change |    Delta |      % |             Time | Samples | Caller                     | Location                                                          |
| -----: | -------: | -----: | ---------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| -22.1% | -27.07ms | 100.0% | 122.6ms → 95.5ms | 84 → 74 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36` |

##### `isEvolvingArrayOperationTarget` (`./node_modules/typescript/lib/typescript.js:72634:42`)

| Change |    Delta |      % |           Time | Samples | Caller            | Location                                                          |
| -----: | -------: | -----: | -------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| -84.3% | -26.64ms | 100.0% | 31.6ms → 5.0ms |  25 → 4 | `checkIdentifier` | `./node_modules/typescript/lib/typescript.js:72959:27 → 74242:27` |

##### `checkModuleDeclaration` (`./node_modules/typescript/lib/typescript.js:87555:34`)

| Change |    Delta |      % |              Time |   Samples | Caller                     | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------- | ----------------------------------------------------------------- |
|  -7.0% | -26.62ms | 100.0% | 380.9ms → 354.3ms | 282 → 272 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36` |

##### `checkUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:83613:40`)

| Change |    Delta |      % |            Time | Samples | Caller                     | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| -50.0% | -24.27ms | 100.0% | 48.5ms → 24.3ms | 26 → 19 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36` |

##### `requestSatisfyUtil` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller           | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ---------------- | ----------- |
| removed | -8.38ms | 76.3% → 0.0% | 8.4ms → 0ms |   6 → 0 | `(anonymous)`    | `<unknown>` |
| removed | -2.60ms | 23.7% → 0.0% | 2.6ms → 0ms |   2 → 0 | `requestSatisfy` | `<unknown>` |

##### `fetch` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller         | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------- | ----------- |
| removed | -9.85ms | 100.0% → 0.0% | 9.9ms → 0ms |   7 → 0 | `requestFetch` | `<unknown>` |

##### `requestFetch` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -9.85ms | 100.0% → 0.0% | 9.9ms → 0ms |   7 → 0 | `(anonymous)` | `<unknown>` |

##### `requestInstantiate` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller               | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
| removed | -9.85ms | 100.0% → 0.0% | 9.9ms → 0ms |   7 → 0 | `requestSatisfyUtil` | `<unknown>` |

##### `anonymous` (`<unknown>`)

| Change |   Delta |             % |              Time |   Samples | Caller        | Location               |
| -----: | ------: | ------------: | ----------------: | --------: | ------------- | ---------------------- |
| -57.0% | -4.91ms |   2.8% → 1.2% |     8.6ms → 3.7ms |     7 → 3 | `(anonymous)` | `<unknown>`            |
| -65.3% | -2.30ms |   1.1% → 0.4% |     3.5ms → 1.2ms |     3 → 1 | `(anonymous)` | `node:fs:1:11`         |
|  -0.6% | -1.85ms | 96.0% → 98.0% | 295.8ms → 294.0ms | 231 → 226 | `require`     | `<unknown>`            |
| -36.0% | -1.34ms |   1.2% → 0.8% |     3.7ms → 2.4ms |     3 → 2 | `(anonymous)` | `internal:stream:1:11` |
| -36.0% | -1.34ms |   1.2% → 0.8% |     3.7ms → 2.4ms |     3 → 2 | `(anonymous)` | `node:stream:1:11`     |

##### `parseModule` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller        | Location    |
| -----: | ------: | -----: | -------------: | ------: | ------------- | ----------- |
| -47.4% | -7.50ms | 100.0% | 15.8ms → 8.3ms |  13 → 7 | `(anonymous)` | `<unknown>` |

##### `requestSatisfy` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller       | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------ | ----------- |
| removed | -2.60ms | 100.0% → 0.0% | 2.6ms → 0ms |   2 → 0 | `loadModule` | `<unknown>` |

##### `loadModule` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ----------- |
| removed | -2.60ms | 100.0% → 0.0% | 2.6ms → 0ms |   2 → 0 | `loadModule`            | `<unknown>` |
| removed | -2.60ms | 100.0% → 0.0% | 2.6ms → 0ms |   2 → 0 | `loadAndEvaluateModule` | `<unknown>` |

##### `require` (`<unknown>`)

| Change |   Delta |      % |              Time |   Samples | Caller          | Location    |
| -----: | ------: | -----: | ----------------: | --------: | --------------- | ----------- |
|  -0.6% | -1.85ms | 100.0% | 295.8ms → 294.0ms | 231 → 226 | `bound require` | `<unknown>` |

##### `bound require` (`<unknown>`)

|  Change |   Delta |           % |              Time |   Samples | Caller             | Location                                                        |
| ------: | ------: | ----------: | ----------------: | --------: | ------------------ | --------------------------------------------------------------- |
|   -0.6% | -1.85ms |      100.0% | 295.8ms → 294.0ms | 231 → 226 | `typeCheckProject` | `./tsc-workload.mjs:3:33`                                       |
| removed | -1.17ms | 0.4% → 0.0% |       1.2ms → 0ms |     1 → 0 | `(anonymous)`      | `./node_modules/typescript/lib/typescript.js:16:15`             |
|  -36.6% | -0.83ms | 0.8% → 0.5% |     2.3ms → 1.4ms |     2 → 1 | `getNodeSystem`    | `./node_modules/typescript/lib/typescript.js:8460:25 → 8489:25` |

##### `/^\/tmp\/(?!(node_modules|bower_components|jspm_packages)(\/|$))nix\-shell\.K1HXIc\/(?!(node_modules|bower_components|jspm_packages)(\/|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules|bower_components|jspm_packages)(\/|$))[^/.][^/]*)*?\/(?!(node_modules|bower_components|jspm_packages)(\/|$))([^./]([^./]|(\.(?!min\.js$))?)*)?$/i` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Caller        | Location                                                          |
| -----: | ------: | ------------: | --------------: | ------: | ------------- | ----------------------------------------------------------------- |
|  -6.2% | -1.32ms | 66.2% → 65.4% | 21.2ms → 19.9ms | 17 → 15 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21208:60 → 22201:60` |
|  -2.7% | -0.29ms | 33.8% → 34.6% | 10.8ms → 10.5ms |   9 → 8 | `test`        | `<unknown>`                                                       |

##### `readdirSync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                           | Location                                              |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------- | ----------------------------------------------------- |
| removed | -1.47ms | 100.0% → 0.0% | 1.5ms → 0ms |   1 → 0 | `readdirSync`                    | `<unknown>`                                           |
| removed | -1.47ms | 100.0% → 0.0% | 1.5ms → 0ms |   1 → 0 | `getAccessibleFileSystemEntries` | `./node_modules/typescript/lib/typescript.js:8776:44` |

##### `writer` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                     |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------- |
| removed | -1.46ms | 100.0% → 0.0% | 1.5ms → 0ms |   1 → 0 | `WriteStream` | `internal:fs/streams:196:21` |

##### `bound onceWrapper` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ------ | ------------------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `emit` | `node:events:78:48` |

##### `createRequire` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller             | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------- |
| removed | -1.35ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `stringSplitFast` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                          | Location                                                        |
| -----: | ------: | -------------: | ------------: | ------: | ------------------------------- | --------------------------------------------------------------- |
| -33.1% | -2.53ms | 100.0% → 81.0% | 7.6ms → 5.1ms |   6 → 4 | `pathComponents`                | `./node_modules/typescript/lib/typescript.js:9068:24 → 9097:24` |
|    new | +1.20ms |   0.0% → 19.0% |   0ms → 1.2ms |   0 → 1 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js:123602:39`         |

##### `max` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -1.10ms | 100.0% → 0.0% | 1.1ms → 0ms |   1 → 0 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:65804:36` |

##### `stream` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.04ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `/^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)/` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                    | Location                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------------------------- | ----------------------------------------------------------------- |
|  -9.2% | -0.12ms | 100.0% | 1.4ms → 1.2ms |       1 | `getDirectiveFromComment` | `./node_modules/typescript/lib/typescript.js:13343:35 → 14301:35` |

##### `slice` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                     | Location                                                        |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------- |
| removed | -9.25ms |   52.1% → 0.0% |   9.3ms → 0ms |   7 → 0 | `addRange`                 | `./node_modules/typescript/lib/typescript.js:2979:18`           |
| removed | -1.51ms |    8.5% → 0.0% |   1.5ms → 0ms |   1 → 0 | `fillMissingTypeArguments` | `./node_modules/typescript/lib/typescript.js:60937:36`          |
|  -13.4% | -0.94ms | 39.4% → 100.0% | 7.0ms → 6.1ms |       5 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16 → 2546:16` |

##### `join` (`<unknown>`)

| Change |    Delta |             % |           Time | Samples | Caller               | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------------------------------- |
| -82.9% | -11.01ms | 92.5% → 45.8% | 13.3ms → 2.3ms |  10 → 2 | `doJSDocScan`        | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
|    new |  +1.23ms |  0.0% → 24.8% |    0ms → 1.2ms |   0 → 1 | `getPathWithoutRoot` | `./node_modules/typescript/lib/typescript.js:9179:28`             |
| +35.5% |  +0.38ms |  7.5% → 29.4% |  1.1ms → 1.5ms |       1 | `parseTagComments`   | `./node_modules/typescript/lib/typescript.js:37509:32 → 38564:32` |

##### `trimEnd` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                   | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
| removed | -2.55ms | 70.0% → 0.0% | 2.6ms → 0ms |   2 → 0 | `doJSDocScan`            | `./node_modules/typescript/lib/typescript.js:37253:27` |
| removed | -1.10ms | 30.0% → 0.0% | 1.1ms → 0ms |   1 → 0 | `parseNestedTypeLiteral` | `./node_modules/typescript/lib/typescript.js:37723:38` |

##### `lastIndexOf` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller            | Location                                                          |
| ------: | ------: | -------------: | ------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| removed | -2.17ms |   47.7% → 0.0% |   2.2ms → 0ms |   2 → 0 | `startsWith`      | `./node_modules/typescript/lib/typescript.js:3819:20`             |
| removed | -1.20ms |   26.4% → 0.0% |   1.2ms → 0ms |   1 → 0 | `getBaseFileName` | `./node_modules/typescript/lib/typescript.js:9026:25`             |
|   +8.4% | +0.10ms | 25.8% → 100.0% | 1.2ms → 1.3ms |       1 | `doJSDocScan`     | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |

##### `toString` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller           | Location                                                        |
| -----: | ------: | -----: | -------------: | ------: | ---------------- | --------------------------------------------------------------- |
| -26.0% | -3.02ms | 100.0% | 11.6ms → 8.6ms |   7 → 6 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28 → 8751:28` |

##### `trimStart` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -2.82ms | 100.0% → 0.0% | 2.8ms → 0ms |   2 → 0 | `appendIfCommentDirective` | `./node_modules/typescript/lib/typescript.js:13330:36` |

##### `resolve` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                  | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------- | ----------- |
| removed | -1.46ms | 53.9% → 0.0% | 1.5ms → 0ms |   1 → 0 | `(anonymous)`           | `<unknown>` |
| removed | -1.25ms | 46.1% → 0.0% | 1.2ms → 0ms |   1 → 0 | `loadAndEvaluateModule` | `<unknown>` |

##### `some` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Caller                  | Location                                                          |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| -25.6% | -2.06ms | 84.3% → 85.1% | 8.0ms → 6.0ms |   6 → 5 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js:77689:33 → 78984:33` |
| -29.7% | -0.45ms | 15.7% → 14.9% | 1.5ms → 1.1ms |       1 | `hasExportDeclarations` | `./node_modules/typescript/lib/typescript.js:46259:33 → 47452:33` |

##### `indexOf` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ------------------------------------------------------ |
| removed | -2.47ms | 100.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `getContextualTypeForArgument` | `./node_modules/typescript/lib/typescript.js:73758:40` |

##### `substring` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller       | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------ | ------------------------------------------------------ |
| removed | -1.29ms | 54.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `scanString` | `./node_modules/typescript/lib/typescript.js:12396:22` |
| removed | -1.06ms | 45.3% → 0.0% | 1.1ms → 0ms |   1 → 0 | `scanNumber` | `./node_modules/typescript/lib/typescript.js:12234:22` |

##### `(anonymous)` (`node:fs:1:11`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| -65.3% | -2.30ms | 100.0% | 3.5ms → 1.2ms |   3 → 1 | `anonymous` | `<unknown>` |

##### `Map` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                    | Location                                               |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------- | ------------------------------------------------------ |
|     new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `checkGrammarObjectLiteralExpression`     | `./node_modules/typescript/lib/typescript.js:91022:47` |
| removed | -1.25ms |  36.6% → 0.0% | 1.3ms → 0ms |   1 → 0 | `checkObjectTypeForDuplicateDeclarations` | `./node_modules/typescript/lib/typescript.js:81951:51` |
| removed | -1.12ms |  32.8% → 0.0% | 1.1ms → 0ms |   1 → 0 | `checkUnusedLocalsAndParameters`          | `./node_modules/typescript/lib/typescript.js:83592:42` |
| removed | -1.05ms |  30.6% → 0.0% | 1.0ms → 0ms |   1 → 0 | `visit`                                   | `./node_modules/typescript/lib/typescript.js:52216:19` |

##### `find` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller                             | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
| removed | -3.70ms |  58.2% → 0.0% |   3.7ms → 0ms |   3 → 0 | `checkResolvedBlockScopedVariable` | `./node_modules/typescript/lib/typescript.js:50794:44`            |
|     new | +1.15ms |  0.0% → 24.2% |   0ms → 1.2ms |   0 → 1 | `getDeclaredTypeOfTypeAlias`       | `./node_modules/typescript/lib/typescript.js:60102:38`            |
|  +35.6% | +0.94ms | 41.8% → 75.8% | 2.7ms → 3.6ms |   2 → 3 | `getClassLikeDeclarationOfSymbol`  | `./node_modules/typescript/lib/typescript.js:20238:41 → 21221:41` |

##### `WriteStream` (`internal:fs/streams:196:21`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.46ms | 100.0% → 0.0% | 1.5ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `includes` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller         | Location                                              |
| ------: | ------: | ------------: | ----------: | ------: | -------------- | ----------------------------------------------------- |
| removed | -1.41ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `hasExtension` | `./node_modules/typescript/lib/typescript.js:8940:22` |

##### `removeListener` (`node:events:206:63`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location             |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | -------------------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `onceWrapper` | `node:events:192:21` |

##### `onceWrapper` (`node:events:192:21`)

|  Change |   Delta |             % |        Time | Samples | Caller              | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------- | ----------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `bound onceWrapper` | `<unknown>` |

##### `emit` (`node:events:78:48`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                          |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | --------------------------------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `onConstruct` | `internal:streams/destroy:128:23` |

##### `onConstruct` (`internal:streams/destroy:128:23`)

|  Change |   Delta |             % |        Time | Samples | Caller                      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------- | ----------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `processTicksAndRejections` | `<unknown>` |

##### `(anonymous)` (`internal:stream:1:11`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| -36.0% | -1.34ms | 100.0% | 3.7ms → 2.4ms |   3 → 2 | `anonymous` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

| Change |     Delta |             % |              Time |       Samples | Callee               | Location                                                            |
| -----: | --------: | ------------: | ----------------: | ------------: | -------------------- | ------------------------------------------------------------------- |
|  +3.5% | +141.35ms |         81.2% |     3.98s → 4.12s | 3,031 → 3,107 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +6.7% |  +34.86ms | 10.6% → 11.0% | 522.2ms → 557.1ms |     318 → 343 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
| +11.9% |  +27.15ms |   4.6% → 5.0% | 228.0ms → 255.1ms |      95 → 116 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35` |
|  +7.5% |  +12.88ms |   3.5% → 3.6% | 172.6ms → 185.4ms |     136 → 142 | `bind`               | `./node_modules/typescript/lib/typescript.js:46600:16 → 47793:16`   |
|  -7.3% |  -12.46ms |   3.5% → 3.1% | 171.5ms → 159.1ms |     128 → 121 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122498:30 → 124077:30` |

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|  Change |     Delta |             % |              Time |       Samples | Callee                   | Location                                                            |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------ | ------------------------------------------------------------------- |
|   +3.4% | +145.57ms | 78.5% → 79.0% |     4.31s → 4.46s | 3,285 → 3,363 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|   +0.8% |   +6.52ms | 15.3% → 15.0% | 841.3ms → 847.8ms |     558 → 565 | `createProgram`          | `./node_modules/typescript/lib/typescript.js:122262:23 → 123840:23` |
|   -0.6% |   -1.85ms |   5.4% → 5.2% | 295.8ms → 294.0ms |     231 → 226 | `bound require`          | `<unknown>`                                                         |
|     new |   +1.42ms |  0.0% → <0.1% |       0ms → 1.4ms |         0 → 1 | `findConfigFile`         | `./node_modules/typescript/lib/typescript.js:123025:24`             |
| removed |   -1.35ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 | `createRequire`          | `<unknown>`                                                         |

##### `processTicksAndRejections` (`<unknown>`)

|  Change |     Delta |            % |          Time |       Samples | Callee        | Location                          |
| ------: | --------: | -----------: | ------------: | ------------: | ------------- | --------------------------------- |
|   +2.7% | +150.67ms |       100.0% | 5.49s → 5.64s | 4,108 → 4,186 | `(anonymous)` | `<unknown>`                       |
| removed |   -1.40ms | <0.1% → 0.0% |   1.4ms → 0ms |         1 → 0 | `onConstruct` | `internal:streams/destroy:128:23` |

##### `moduleEvaluation` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Callee             | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------------ | ----------- |
|  +2.7% | +148.18ms | 100.0% | 5.49s → 5.64s | 4,110 → 4,186 | `evaluate`         | `<unknown>` |
|  +2.7% | +148.18ms | 100.0% | 5.49s → 5.64s | 4,110 → 4,186 | `moduleEvaluation` | `<unknown>` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

| Change |     Delta |      % |          Time |       Samples | Callee                 | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------- | ------------------------------------------------------------------- |
|  +3.3% | +144.07ms | 100.0% | 4.31s → 4.45s | 3,285 → 3,362 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |     Delta |            % |              Time |       Samples | Callee                             | Location                                                            |
| -----: | --------: | -----------: | ----------------: | ------------: | ---------------------------------- | ------------------------------------------------------------------- |
|  +3.4% | +135.82ms |        93.7% |     4.04s → 4.17s | 3,074 → 3,145 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  +3.4% |   +9.03ms |         6.2% | 267.7ms → 276.8ms |     208 → 214 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:123266:26 → 124848:26` |
| -22.9% |   -0.64ms | 0.1% → <0.1% |     2.8ms → 2.1ms |             2 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:123405:44 → 124987:44` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

| Change |     Delta |      % |          Time |       Samples | Callee        | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

| Change |     Delta |      % |          Time |       Samples | Callee                     | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------- | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

| Change |     Delta |      % |          Time |       Samples | Callee                                     | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

| Change |     Delta |      % |          Time |       Samples | Callee                   | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------ | ------------------------------------------------------------------- |
|  +3.4% | +145.40ms | 100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:88199:30`)

| Change |     Delta |      % |          Time |       Samples | Callee                     | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------- | ----------------------------------------------------------------- |
|  +3.6% | +143.52ms | 100.0% | 3.98s → 4.13s | 3,031 → 3,109 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36 → 88208:36` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|  Change |     Delta |            % |          Time |       Samples | Callee                              | Location                                                            |
| ------: | --------: | -----------: | ------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------- |
|   +3.4% | +145.40ms |       100.0% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
| removed |   -1.38ms | <0.1% → 0.0% |   1.4ms → 0ms |         1 → 0 | `getProgramDiagnostics`             | `./node_modules/typescript/lib/typescript.js:123337:33`             |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

| Change |     Delta |            % |          Time |       Samples | Callee        | Location                                                            |
| -----: | --------: | -----------: | ------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  +3.3% | +142.58ms |       100.0% | 4.31s → 4.45s | 3,286 → 3,362 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|    new |   +1.51ms | 0.0% → <0.1% |   0ms → 1.5ms |         0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:18932:28`              |
|    new |   +1.20ms | 0.0% → <0.1% |   0ms → 1.2ms |         0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:22094:25`              |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:88208:36`)

| Change |     Delta |             % |              Time |       Samples | Callee                      | Location                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | --------------------------- | ----------------------------------------------------------------- |
|  +7.5% | +124.45ms | 41.6% → 43.1% |     1.65s → 1.78s | 1,264 → 1,332 | `checkVariableDeclaration`  | `./node_modules/typescript/lib/typescript.js:84101:36 → 85396:36` |
|  +3.7% | +111.24ms |         76.1% |     3.03s → 3.14s | 2,301 → 2,363 | `checkBlock`                | `./node_modules/typescript/lib/typescript.js:83716:22 → 85011:22` |
|  +6.1% | +101.07ms | 41.4% → 42.4% |     1.65s → 1.75s | 1,260 → 1,322 | `checkVariableStatement`    | `./node_modules/typescript/lib/typescript.js:84119:34 → 85414:34` |
|  +9.7% |  +62.96ms | 16.3% → 17.2% | 648.5ms → 711.5ms |     496 → 529 | `checkClassDeclaration`     | `./node_modules/typescript/lib/typescript.js:85417:33 → 86712:33` |
|  -8.3% |  -51.12ms | 15.4% → 13.6% | 612.3ms → 561.2ms |     459 → 423 | `checkTypeAliasDeclaration` | `./node_modules/typescript/lib/typescript.js:85990:37 → 87285:37` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |     Delta |      % |          Time |       Samples | Callee                          | Location                                                            |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------------- | ------------------------------------------------------------------- |
|  +3.3% | +144.02ms | 100.0% | 4.31s → 4.45s | 3,285 → 3,362 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                                                        |
| -----: | --------: | -----: | ------------: | ------------: | --------- | --------------------------------------------------------------- |
|  +3.3% | +142.58ms | 100.0% | 4.31s → 4.45s | 3,286 → 3,362 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17` |

##### `loadAndEvaluateModule` (`<unknown>`)

|  Change |     Delta |              % |          Time |       Samples | Callee                  | Location    |
| ------: | --------: | -------------: | ------------: | ------------: | ----------------------- | ----------- |
|   +2.7% | +150.67ms | 99.8% → 100.0% | 5.49s → 5.64s | 4,108 → 4,186 | `moduleEvaluation`      | `<unknown>` |
| removed |   -8.80ms |    0.2% → 0.0% |   8.8ms → 0ms |         4 → 0 | `loadAndEvaluateModule` | `<unknown>` |
| removed |   -2.60ms |   <0.1% → 0.0% |   2.6ms → 0ms |         2 → 0 | `loadModule`            | `<unknown>` |
| removed |   -1.25ms |   <0.1% → 0.0% |   1.2ms → 0ms |         1 → 0 | `resolve`               | `<unknown>` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|  Change |    Delta |             % |          Time |       Samples | Callee                       | Location                                                          |
| ------: | -------: | ------------: | ------------: | ------------: | ---------------------------- | ----------------------------------------------------------------- |
|   +4.4% | +98.28ms | 55.6% → 56.1% | 2.24s → 2.34s | 1,711 → 1,760 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|   +2.4% | +42.83ms | 44.1% → 43.7% | 1.78s → 1.82s | 1,353 → 1,380 | `forEach`                    | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`   |
| removed |  -1.21ms |  <0.1% → 0.0% |   1.2ms → 0ms |         1 → 0 | `clear`                      | `./node_modules/typescript/lib/typescript.js:2564:15`             |
| removed |  -1.13ms |  <0.1% → 0.0% |   1.1ms → 0ms |         1 → 0 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js:86845:38`            |
|   -5.3% |  -0.37ms |          0.2% | 7.0ms → 6.7ms |         6 → 5 | `addLazyDiagnostic`          | `./node_modules/typescript/lib/typescript.js:87339:25 → 88652:25` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

| Change |     Delta |      % |          Time |       Samples | Callee                  | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------- | ----------------------------------------------------------------- |
|  +3.4% | +138.40ms | 100.0% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:88649:47`)

| Change |     Delta |      % |          Time |       Samples | Callee            | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ----------------- | ----------------------------------------------------------------- |
|  +3.4% | +138.40ms | 100.0% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27 → 88552:27` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:88656:32`)

|  Change |     Delta |              % |          Time |       Samples | Callee                                | Location                                                          |
| ------: | --------: | -------------: | ------------: | ------------: | ------------------------------------- | ----------------------------------------------------------------- |
|   +3.4% | +138.40ms | 99.9% → 100.0% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47 → 88649:47` |
| removed |   -2.58ms |    0.1% → 0.0% |   2.6ms → 0ms |         2 → 0 | `getDiagnostics2`                     | `./node_modules/typescript/lib/typescript.js:18843:27`            |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

| Change |     Delta |      % |          Time |       Samples | Callee                 | Location                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------- | ----------------------------------------------------------------- |
|  +3.4% | +135.82ms | 100.0% | 4.04s → 4.17s | 3,074 → 3,145 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32 → 88656:32` |

##### `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`)

|  Change |     Delta |             % |           Time |       Samples | Callee                  | Location                                                          |
| ------: | --------: | ------------: | -------------: | ------------: | ----------------------- | ----------------------------------------------------------------- |
|   +7.5% | +117.53ms | 96.9% → 96.2% |  1.57s → 1.68s | 1,192 → 1,276 | `checkTypeRelatedTo`    | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| +132.4% |   +8.17ms |   0.4% → 0.8% | 6.2ms → 14.3ms |        5 → 11 | `getRelationKey`        | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
| +488.3% |   +7.58ms |   0.1% → 0.5% |  1.6ms → 9.1ms |         1 → 7 | `isFreshLiteralType`    | `./node_modules/typescript/lib/typescript.js:64408:30 → 65663:30` |
|  +24.9% |   +0.98ms |   0.2% → 0.3% |  3.9ms → 4.9ms |         3 → 4 | `isSimpleTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66052:33 → 67312:33` |

##### `checkCallExpression` (`./node_modules/typescript/lib/typescript.js:79584:31`)

|  Change |     Delta |             % |              Time |       Samples | Callee                      | Location                                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | --------------------------- | ----------------------------------------------------------------- |
|   +4.1% | +103.41ms | 94.4% → 93.8% |     2.52s → 2.62s | 1,924 → 1,985 | `getResolvedSignature`      | `./node_modules/typescript/lib/typescript.js:78173:32 → 79468:32` |
|   +6.9% |  +14.51ms |   7.9% → 8.0% | 209.8ms → 224.3ms |     164 → 162 | `getReturnTypeOfSignature`  | `./node_modules/typescript/lib/typescript.js:61207:36 → 62462:36` |
|  +24.1% |  +10.55ms |   1.6% → 1.9% |   43.7ms → 54.3ms |       31 → 41 | `checkDeprecatedSignature`  | `./node_modules/typescript/lib/typescript.js:78343:36 → 79638:36` |
|     new |   +1.47ms |   0.0% → 0.1% |       0ms → 1.5ms |         0 → 1 | `isSymbolOrSymbolForCall`   | `./node_modules/typescript/lib/typescript.js:79670:35`            |
| +100.4% |   +1.21ms |  <0.1% → 0.1% |     1.2ms → 2.4ms |         1 → 2 | `checkGrammarTypeArguments` | `./node_modules/typescript/lib/typescript.js:89580:37 → 90922:37` |

##### `readFileSync` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Callee         | Location    |
| -----: | ------: | ------------: | --------------: | ------: | -------------- | ----------- |
| +40.3% | +8.69ms | 68.6% → 81.6% | 21.6ms → 30.2ms | 14 → 23 | `readFileSync` | `<unknown>` |

##### `statSync` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee     | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ----------- |
| removed | -2.54ms | 11.1% → 0.0% | 2.5ms → 0ms |   2 → 0 | `statSync` | `<unknown>` |

##### `generatorResume` (`<unknown>`)

| Change |   Delta |              % |            Time | Samples | Callee                   | Location                                                            |
| -----: | ------: | -------------: | --------------: | ------: | ------------------------ | ------------------------------------------------------------------- |
|  +4.3% | +2.87ms | 100.0% → 98.5% | 67.6ms → 70.5ms | 51 → 55 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js:69709:108 → 70992:108` |

##### `bound realpathNativeSync` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee               | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
|    new | +2.65ms | 0.0% → 100.0% | 0ms → 2.7ms |   0 → 2 | `realpathNativeSync` | `<unknown>` |

##### `return` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
|    new | +1.06ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `generatorResume` | `<unknown>` |

##### `forEach` (`<unknown>`)

|  Change |    Delta |             % |            Time |       Samples | Callee              | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------------: | ------------------- | ----------------------------------------------------------------- |
|   +4.4% | +98.72ms | 98.6% → 99.0% |   2.24s → 2.34s | 1,709 → 1,758 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |
|  -22.3% |  -6.73ms |   1.3% → 1.0% | 30.1ms → 23.4ms |       23 → 18 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
| +104.2% |  +2.87ms |   0.1% → 0.2% |   2.8ms → 5.6ms |         2 → 4 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52218:32 → 53459:32` |
| removed |  -1.41ms |   0.1% → 0.0% |     1.4ms → 0ms |         1 → 0 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:38591:27`            |
|     new |  +1.32ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:53481:29`            |

##### `next` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Callee            | Location    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------- | ----------- |
| +18.7% | +5.66ms | 92.3% → 82.4% | 30.3ms → 35.9ms | 23 → 28 | `generatorResume` | `<unknown>` |

##### `filter` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee        | Location                                                |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | ------------------------------------------------------- |
|     new | +1.19ms | 0.0% → 19.6% | 0ms → 1.2ms |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:41264:66`  |
|     new | +1.07ms | 0.0% → 17.6% | 0ms → 1.1ms |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:125001:48` |
| removed | -1.05ms | 27.2% → 0.0% | 1.1ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:40182:69`  |

##### `every` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee        | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------------ |
|    new | +1.06ms | 0.0% → 100.0% | 0ms → 1.1ms |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:88197:74` |

##### `map` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Callee        | Location                                                          |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | ----------------------------------------------------------------- |
|  -61.6% | -1.68ms | 52.3% → 18.3% | 2.7ms → 1.0ms |   2 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:40787:32 → 41876:32` |
| removed | -1.25ms |  24.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21182:95`            |
|     new | +1.25ms |  0.0% → 21.9% |   0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:69830:31`            |
| removed | -1.23ms |  23.6% → 0.0% |   1.2ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21093:32`            |

##### `(anonymous)` (`internal:streams/duplex:1:11`)

| Change |   Delta |      % |          Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| +15.9% | +0.17ms | 100.0% | 1.1ms → 1.2ms |       1 | `anonymous` | `<unknown>` |

##### `sort` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee        | Location                                                        |
| -----: | ------: | -----: | ------------: | ------: | ------------- | --------------------------------------------------------------- |
|  +4.0% | +0.15ms | 100.0% | 3.7ms → 3.8ms |       3 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:3010:16 → 3023:16` |

##### `(anonymous)` (`internal:streams/compose:1:11`)

| Change |   Delta |      % |  Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.5% | +0.01ms | 100.0% | 2.4ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:streams/operators:1:11`)

| Change |   Delta |      % |  Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ----: | ------: | ----------- | ----------- |
|  +0.5% | +0.01ms | 100.0% | 2.4ms |       2 | `anonymous` | `<unknown>` |

##### `parseObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:34635:34`)

| Change |    Delta |             % |              Time |   Samples | Callee          | Location                                                          |
| -----: | -------: | ------------: | ----------------: | --------: | --------------- | ----------------------------------------------------------------- |
| -29.0% | -96.62ms | 98.2% → 98.0% | 332.8ms → 236.2ms | 179 → 176 | `parseList`     | `./node_modules/typescript/lib/typescript.js:32618:21 → 33673:21` |
| -22.3% |  -1.37ms |   1.8% → 2.0% |     6.1ms → 4.8ms |         4 | `parseExpected` | `./node_modules/typescript/lib/typescript.js:32036:25 → 33091:25` |

##### `parseTypeMember` (`./node_modules/typescript/lib/typescript.js:34591:27`)

|  Change |    Delta |             % |              Time |   Samples | Callee                           | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------- | ----------------------------------------------------------------- |
|  -30.8% | -94.70ms | 95.7% → 94.0% | 307.9ms → 213.2ms | 160 → 158 | `parsePropertyOrMethodSignature` | `./node_modules/typescript/lib/typescript.js:33493:42 → 34548:42` |
| removed |  -4.07ms |   1.3% → 0.0% |       4.1ms → 0ms |     3 → 0 | `parseIndexSignatureDeclaration` | `./node_modules/typescript/lib/typescript.js:33483:42`            |
| +147.0% |  +3.39ms |   0.7% → 2.5% |     2.3ms → 5.7ms |     2 → 5 | `parseModifiers`                 | `./node_modules/typescript/lib/typescript.js:36498:26 → 37553:26` |
|  -32.8% |  -2.43ms |   2.3% → 2.2% |     7.4ms → 5.0ms |     6 → 4 | `parseSignatureMember`           | `./node_modules/typescript/lib/typescript.js:33439:32 → 34494:32` |
| removed |  -1.58ms |   0.5% → 0.0% |       1.6ms → 0ms |     1 → 0 | `parseAccessorDeclaration`       | `./node_modules/typescript/lib/typescript.js:36381:36`            |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js:34548:42`)

| Change |    Delta |             % |             Time | Samples | Callee                | Location                                                          |
| -----: | -------: | ------------: | ---------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -49.4% | -84.43ms | 55.5% → 40.6% | 170.9ms → 86.5ms | 54 → 65 | `withJSDoc`           | `./node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |
| -29.6% | -10.01ms | 11.0% → 11.1% |  33.8ms → 23.8ms | 27 → 18 | `parseTypeAnnotation` | `./node_modules/typescript/lib/typescript.js:34117:31 → 35172:31` |
| +18.5% |  +8.12ms | 14.3% → 24.4% |  44.0ms → 52.1ms | 33 → 37 | `parseParameters`     | `./node_modules/typescript/lib/typescript.js:33421:27 → 34476:27` |
| +41.0% |  +4.75ms |   3.8% → 7.7% |  11.6ms → 16.3ms |  9 → 12 | `parsePropertyName`   | `./node_modules/typescript/lib/typescript.js:32353:29 → 33408:29` |
| -50.3% |  -2.81ms |   1.8% → 1.3% |    5.6ms → 2.8ms |   4 → 2 | `finishNode`          | `./node_modules/typescript/lib/typescript.js:32237:22 → 33292:22` |

##### `withJSDoc` (`./node_modules/typescript/lib/typescript.js:32743:21`)

|  Change |    Delta |             % |            Time | Samples | Callee                  | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| +450.9% | +17.49ms |  1.9% → 18.2% |  3.9ms → 21.4ms |  3 → 16 | `getJSDocCommentRanges` | `./node_modules/typescript/lib/typescript.js:16640:31 → 17623:31` |
|   -4.6% |  -4.48ms | 46.2% → 78.6% | 96.9ms → 92.4ms | 75 → 70 | `mapDefined`            | `./node_modules/typescript/lib/typescript.js:2683:20 → 2696:20`   |
|     new |  +1.43ms |   0.0% → 1.2% |     0ms → 1.4ms |   0 → 1 | `assert`                | `./node_modules/typescript/lib/typescript.js:4046:18`             |

##### `checkTypeAssignableTo` (`./node_modules/typescript/lib/typescript.js:66493:33`)

| Change |    Delta |      % |              Time |   Samples | Callee               | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------- | ----------------------------------------------------------------- |
|  -9.2% | -52.65ms | 100.0% | 572.9ms → 520.3ms | 427 → 389 | `checkTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |

##### `checkTypeAliasDeclaration` (`./node_modules/typescript/lib/typescript.js:87285:37`)

|  Change |    Delta |             % |              Time |   Samples | Callee                              | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------- | ----------------------------------------------------------------- |
|   -8.0% | -48.61ms | 98.9% → 99.3% | 605.8ms → 557.2ms | 454 → 420 | `checkSourceElement`                | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |
| removed |  -2.50ms |   0.4% → 0.0% |       2.5ms → 0ms |     2 → 0 | `checkTypeParameters`               | `./node_modules/typescript/lib/typescript.js:85263:31`            |
| removed |  -1.47ms |   0.2% → 0.0% |       1.5ms → 0ms |     1 → 0 | `checkExportsOnMergedDeclarations`  | `./node_modules/typescript/lib/typescript.js:82638:44`            |
|     new |  +1.17ms |   0.0% → 0.2% |       0ms → 1.2ms |     0 → 1 | `registerForUnusedIdentifiersCheck` | `./node_modules/typescript/lib/typescript.js:84736:45`            |
| removed |  -1.10ms |   0.2% → 0.0% |       1.1ms → 0ms |     1 → 0 | `checkTypeNameIsReserved`           | `./node_modules/typescript/lib/typescript.js:85203:35`            |

##### `onLeft` (`./node_modules/typescript/lib/typescript.js:81798:20`)

| Change |    Delta |      % |            Time | Samples | Callee                 | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| -40.4% | -39.43ms | 100.0% | 97.6ms → 58.2ms | 70 → 44 | `maybeCheckExpression` | `./node_modules/typescript/lib/typescript.js:80565:34 → 81860:34` |

##### `left` (`./node_modules/typescript/lib/typescript.js:31437:16`)

| Change |    Delta |      % |            Time | Samples | Callee   | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | -------- | ----------------------------------------------------------------- |
| -40.4% | -39.43ms | 100.0% | 97.6ms → 58.2ms | 70 → 44 | `onLeft` | `./node_modules/typescript/lib/typescript.js:80503:20 → 81798:20` |

##### `typeRelatedToSomeType` (`./node_modules/typescript/lib/typescript.js:68087:35`)

|  Change |    Delta |             % |              Time |  Samples | Callee                | Location                                                          |
| ------: | -------: | ------------: | ----------------: | -------: | --------------------- | ----------------------------------------------------------------- |
|  -19.0% | -27.46ms | 90.1% → 96.3% | 144.8ms → 117.3ms | 100 → 89 | `isRelatedTo`         | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|  -79.7% |  -9.47ms |   7.4% → 2.0% |    11.9ms → 2.4ms |    9 → 2 | `getBestMatchingType` | `./node_modules/typescript/lib/typescript.js:68565:31 → 69825:31` |
| removed |  -1.35ms |   0.8% → 0.0% |       1.3ms → 0ms |    1 → 0 | `getObjectFlags`      | `./node_modules/typescript/lib/typescript.js:20242:24`            |
| removed |  -1.31ms |   0.8% → 0.0% |       1.3ms → 0ms |    1 → 0 | `containsType`        | `./node_modules/typescript/lib/typescript.js:62659:24`            |

##### `maybeCheckExpression` (`./node_modules/typescript/lib/typescript.js:81860:34`)

|  Change |    Delta |              % |              Time |   Samples | Callee               | Location                                                          |
| ------: | -------: | -------------: | ----------------: | --------: | -------------------- | ----------------------------------------------------------------- |
|  -21.9% | -36.52ms | 99.3% → 100.0% | 166.6ms → 130.1ms | 123 → 100 | `checkExpression`    | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
| removed |  -1.22ms |    0.7% → 0.0% |       1.2ms → 0ms |     1 → 0 | `isBinaryExpression` | `./node_modules/typescript/lib/typescript.js:29192:28`            |

##### `unionOrIntersectionRelatedTo` (`./node_modules/typescript/lib/typescript.js:68017:42`)

|  Change |    Delta |             % |              Time |   Samples | Callee                          | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
|  -24.3% | -37.44ms | 37.1% → 30.8% | 154.0ms → 116.6ms |  107 → 89 | `typeRelatedToSomeType`         | `./node_modules/typescript/lib/typescript.js:66827:35 → 68087:35` |
|   -8.5% | -21.21ms | 59.8% → 60.1% | 248.2ms → 227.0ms | 192 → 174 | `eachTypeRelatedToType`         | `./node_modules/typescript/lib/typescript.js:66935:35 → 68195:35` |
|  +20.1% | +16.51ms | 19.8% → 26.2% |   82.4ms → 98.9ms |   62 → 74 | `typeRelatedToEachType`         | `./node_modules/typescript/lib/typescript.js:66887:35 → 68147:35` |
| removed |  -2.40ms |   0.6% → 0.0% |       2.4ms → 0ms |     2 → 0 | `getRegularTypeOfObjectLiteral` | `./node_modules/typescript/lib/typescript.js:69225:41`            |
|   -7.1% |  -1.39ms |   4.7% → 4.8% |   19.6ms → 18.2ms |        14 | `someTypeRelatedToType`         | `./node_modules/typescript/lib/typescript.js:66907:35 → 68167:35` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:83533:27`)

| Change |    Delta |     % |              Time |   Samples | Callee                                      | Location                                                          |
| -----: | -------: | ----: | ----------------: | --------: | ------------------------------------------- | ----------------------------------------------------------------- |
|  -5.1% | -35.70ms | 99.8% | 704.1ms → 668.4ms | 537 → 504 | `checkTypeArgumentConstraints`              | `./node_modules/typescript/lib/typescript.js:82186:40 → 83481:40` |
|  -5.3% |  -0.06ms |  0.2% |             1.2ms |         1 | `getTypeParametersForTypeReferenceOrImport` | `./node_modules/typescript/lib/typescript.js:82213:53 → 83508:53` |

##### `trampoline` (`./node_modules/typescript/lib/typescript.js:31541:22`)

|  Change |    Delta |             % |            Time | Samples | Callee     | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ----------------------------------------------------------------- |
|  -40.4% | -39.43ms | 47.7% → 34.1% | 97.6ms → 58.2ms | 70 → 44 | `left`     | `./node_modules/typescript/lib/typescript.js:30385:16 → 31437:16` |
|  -18.2% |  -5.50ms | 14.7% → 14.5% | 30.2ms → 24.7ms | 22 → 19 | `exit`     | `./node_modules/typescript/lib/typescript.js:30417:16 → 31469:16` |
| +185.3% |  +5.14ms |   1.4% → 4.6% |   2.8ms → 7.9ms |   2 → 6 | `enter`    | `./node_modules/typescript/lib/typescript.js:30377:17 → 31429:17` |
|   +4.3% |  +3.23ms | 36.3% → 45.5% | 74.4ms → 77.6ms | 57 → 60 | `right`    | `./node_modules/typescript/lib/typescript.js:30405:17 → 31457:17` |
|  +55.8% |  +1.40ms |   1.2% → 2.3% |   2.5ms → 3.9ms |   2 → 3 | `operator` | `./node_modules/typescript/lib/typescript.js:30397:20 → 31449:20` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:81757:12`)

| Change |    Delta |      % |              Time |   Samples | Callee       | Location                                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------ | ----------------------------------------------------------------- |
| -16.7% | -33.37ms | 100.0% | 199.6ms → 166.2ms | 147 → 128 | `trampoline` | `./node_modules/typescript/lib/typescript.js:30489:22 → 31541:22` |

##### `checkTypeArgumentConstraints` (`./node_modules/typescript/lib/typescript.js:83481:40`)

|  Change |    Delta |             % |              Time |   Samples | Callee                         | Location                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
|   -7.2% | -36.80ms | 72.7% → 70.8% | 513.1ms → 476.3ms | 393 → 357 | `checkTypeAssignableTo`        | `./node_modules/typescript/lib/typescript.js:65233:33 → 66493:33` |
|   +1.2% |  +2.35ms | 26.9% → 28.5% | 189.6ms → 191.9ms | 143 → 147 | `getEffectiveTypeArguments2`   | `./node_modules/typescript/lib/typescript.js:82183:38 → 83478:38` |
| +125.0% |  +1.54ms |   0.2% → 0.4% |     1.2ms → 2.8ms |     1 → 2 | `getConstraintOfTypeParameter` | `./node_modules/typescript/lib/typescript.js:60199:40 → 61454:40` |
| removed |  -1.49ms |   0.2% → 0.0% |       1.5ms → 0ms |     1 → 0 | `instantiateType`              | `./node_modules/typescript/lib/typescript.js:64996:27`            |

##### `checkMappedType` (`./node_modules/typescript/lib/typescript.js:83649:27`)

| Change |    Delta |             % |            Time | Samples | Callee                  | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| -94.5% | -25.03ms |  21.6% → 1.5% |  26.5ms → 1.5ms |   9 → 1 | `checkTypeAssignableTo` | `./node_modules/typescript/lib/typescript.js:65233:33 → 66493:33` |
|  -1.0% |  -0.94ms | 77.5% → 98.5% | 95.0ms → 94.1ms | 74 → 73 | `checkSourceElement`    | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |

##### `isEvolvingArrayOperationTarget` (`./node_modules/typescript/lib/typescript.js:72634:42`)

| Change |    Delta |             % |           Time | Samples | Callee                | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -95.3% | -27.45ms | 91.1% → 27.1% | 28.8ms → 1.3ms |  23 → 1 | `getTypeOfExpression` | `./node_modules/typescript/lib/typescript.js:81411:31 → 82706:31` |
|  +0.7% |  +0.01ms |  4.0% → 25.8% |          1.3ms |       1 | `getReferenceRoot`    | `./node_modules/typescript/lib/typescript.js:71168:28 → 72451:28` |

##### `checkModuleDeclaration` (`./node_modules/typescript/lib/typescript.js:87555:34`)

|  Change |    Delta |              % |              Time |   Samples | Callee               | Location                                                          |
| ------: | -------: | -------------: | ----------------: | --------: | -------------------- | ----------------------------------------------------------------- |
|   -6.7% | -25.34ms | 99.7% → 100.0% | 379.6ms → 354.3ms | 281 → 272 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |
| removed |  -1.29ms |    0.3% → 0.0% |       1.3ms → 0ms |     1 → 0 | `addLazyDiagnostic`  | `./node_modules/typescript/lib/typescript.js:87339:25`            |

##### `checkUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:83613:40`)

| Change |    Delta |             % |            Time | Samples | Callee                | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -45.4% | -18.97ms | 86.1% → 94.1% | 41.8ms → 22.8ms | 21 → 18 | `forEach`             | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`   |
| -61.6% |  -4.15ms | 13.9% → 10.7% |   6.7ms → 2.6ms |   5 → 2 | `getTypeFromTypeNode` | `./node_modules/typescript/lib/typescript.js:64524:31 → 65779:31` |

##### `requestSatisfyUtil` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee               | Location    |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- | ----------- |
| removed | -9.85ms | 89.8% → 0.0% | 9.9ms → 0ms |   7 → 0 | `requestInstantiate` | `<unknown>` |
| removed | -1.12ms | 10.2% → 0.0% | 1.1ms → 0ms |   1 → 0 | `add`                | `<unknown>` |

##### `requestFetch` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee  | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------- | ----------- |
| removed | -9.85ms | 100.0% → 0.0% | 9.9ms → 0ms |   7 → 0 | `fetch` | `<unknown>` |

##### `requestInstantiate` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -9.85ms | 100.0% → 0.0% | 9.9ms → 0ms |   7 → 0 | `(anonymous)` | `<unknown>` |

##### `anonymous` (`<unknown>`)

|  Change |   Delta |           % |          Time | Samples | Callee        | Location                   |
| ------: | ------: | ----------: | ------------: | ------: | ------------- | -------------------------- |
|  -65.3% | -2.30ms | 1.1% → 0.4% | 3.5ms → 1.2ms |   3 → 1 | `(anonymous)` | `node:fs:1:11`             |
|  -36.0% | -1.34ms | 1.2% → 0.8% | 3.7ms → 2.4ms |   3 → 2 | `(anonymous)` | `internal:stream:1:11`     |
|  -36.0% | -1.34ms | 1.2% → 0.8% | 3.7ms → 2.4ms |   3 → 2 | `(anonymous)` | `node:stream:1:11`         |
|  -36.0% | -1.34ms | 1.2% → 0.8% | 3.7ms → 2.4ms |   3 → 2 | `(anonymous)` | `internal:fs/streams:1:11` |
| removed | -1.27ms | 0.4% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)` | `internal:promisify:1:11`  |

##### `parseModule` (`<unknown>`)

| Change |   Delta |             % |           Time | Samples | Callee        | Location    |
| -----: | ------: | ------------: | -------------: | ------: | ------------- | ----------- |
| -59.0% | -8.74ms | 93.6% → 73.0% | 14.8ms → 6.1ms |  12 → 5 | `(anonymous)` | `<unknown>` |

##### `requestSatisfy` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee               | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
| removed | -2.60ms | 100.0% → 0.0% | 2.6ms → 0ms |   2 → 0 | `requestSatisfyUtil` | `<unknown>` |

##### `loadModule` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee           | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- | ----------- |
| removed | -2.60ms | 100.0% → 0.0% | 2.6ms → 0ms |   2 → 0 | `requestSatisfy` | `<unknown>` |
| removed | -2.60ms | 100.0% → 0.0% | 2.6ms → 0ms |   2 → 0 | `loadModule`     | `<unknown>` |

##### `require` (`<unknown>`)

| Change |   Delta |      % |              Time |   Samples | Callee      | Location    |
| -----: | ------: | -----: | ----------------: | --------: | ----------- | ----------- |
|  -0.6% | -1.85ms | 100.0% | 295.8ms → 294.0ms | 231 → 226 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

| Change |   Delta |           % |              Time |   Samples | Callee      | Location    |
| -----: | ------: | ----------: | ----------------: | --------: | ----------- | ----------- |
|  -0.6% | -1.85ms |      100.0% | 295.8ms → 294.0ms | 231 → 226 | `require`   | `<unknown>` |
| -36.6% | -0.83ms | 0.8% → 0.5% |     2.3ms → 1.4ms |     2 → 1 | `anonymous` | `<unknown>` |

##### `readdirSync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.47ms | 100.0% → 0.0% | 1.5ms → 0ms |   1 → 0 | `readdirSync` | `<unknown>` |

##### `bound onceWrapper` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location             |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | -------------------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `onceWrapper` | `node:events:192:21` |

##### `some` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Callee                               | Location                                                          |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------ | ----------------------------------------------------------------- |
| -44.8% | -3.05ms | 71.3% → 53.4% | 6.8ms → 3.8ms |   5 → 3 | `isGenericFunctionReturningFunction` | `./node_modules/typescript/lib/typescript.js:77766:46 → 79061:46` |
| -29.7% | -0.45ms | 15.7% → 14.9% | 1.5ms → 1.1ms |       1 | `(anonymous)`                        | `./node_modules/typescript/lib/typescript.js:46261:43 → 47454:43` |

##### `(anonymous)` (`node:fs:1:11`)

| Change |   Delta |      % |          Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| -65.3% | -2.30ms | 100.0% | 3.5ms → 1.2ms |   3 → 1 | `anonymous` | `<unknown>` |

##### `find` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee        | Location                                               |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | ------------------------------------------------------ |
|     new | +3.67ms | 0.0% → 77.2% | 0ms → 3.7ms |   0 → 3 | `isTypeAlias` | `./node_modules/typescript/lib/typescript.js:18786:21` |
| removed | -2.54ms | 40.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:50801:7`  |

##### `WriteStream` (`internal:fs/streams:196:21`)

|  Change |   Delta |             % |        Time | Samples | Callee   | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -1.46ms | 100.0% → 0.0% | 1.5ms → 0ms |   1 → 0 | `writer` | `<unknown>` |

##### `removeListener` (`node:events:206:63`)

|  Change |   Delta |             % |        Time | Samples | Callee  | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------- | ----------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `shift` | `<unknown>` |

##### `onceWrapper` (`node:events:192:21`)

|  Change |   Delta |             % |        Time | Samples | Callee           | Location             |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- | -------------------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `removeListener` | `node:events:206:63` |

##### `emit` (`node:events:78:48`)

|  Change |   Delta |             % |        Time | Samples | Callee              | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------- | ----------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `bound onceWrapper` | `<unknown>` |

##### `onConstruct` (`internal:streams/destroy:128:23`)

|  Change |   Delta |             % |        Time | Samples | Callee | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ------ | ------------------- |
| removed | -1.40ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | `emit` | `node:events:78:48` |

##### `(anonymous)` (`internal:stream:1:11`)

| Change |   Delta |      % |          Time | Samples | Callee      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| -36.0% | -1.34ms | 100.0% | 3.7ms → 2.4ms |   3 → 2 | `anonymous` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`

|  Change |     Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | --------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +106.66ms |  0.0% → 1.9% |   0ms → 106.7ms |   0 → 5 | `NodeObject` (`./node_modules/typescript/lib/typescript.js:148243:14`) ← `createBaseNode` (32468:21) ← `createBaseNode` (24873:26) ← `createHeritageClause` (27497:32) ← `parseHeritageClause` (37721:31) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseHeritageClauses` (37715:32) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |  +22.15ms |  0.0% → 0.4% |    0ms → 22.2ms |   0 → 5 | `set` ← `getDeclaredTypeOfClassOrInterface` (`./node_modules/typescript/lib/typescript.js:60073:45`) ← `tryGetDeclaredTypeOfSymbol` (60200:38) ← `getDeclaredTypeOfSymbol` (60197:35) ← `getTypeFromClassOrInterfaceReference` (62851:48) ← `getTypeReferenceType` (63005:32) ← `getTypeFromTypeReference` (63179:36) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `resolveBaseTypesOfInterface` (60017:39) ← `getBaseTypes` (59919:24) ← `resolveObjectTypeMembers` (60465:36) ← `resolveTypeReferenceMembers` (60519:39) ← `resolveStructuredTypeMembers` (61345:40) ← `getPropertyOfType` (61994:29) ← `getIterationTypesOfMethod` (86136:37) ← `getIterationTypesOfIteratorSlow` (86220:43) ← `getIterationTypesOfIteratorFast` (86047:43) ← `getIterationTypesOfIteratorWorker` (86032:45) ← `getIterationTypesOfIterableSlow` (85994:43) ← `getIterationTypesOfIterableWorker` (85882:45) ← `getIterationTypesOfIterable` (85813:39) ← `getIteratedTypeOrElementType` (85662:40) ← `checkIteratedTypeOrElementType` (85649:42) ← `checkRightHandSideOfForOf` (85645:37) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkForOfStatement` (85574:31) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |  +17.29ms |  0.0% → 0.3% |    0ms → 17.3ms |  0 → 12 | `shouldNormalizeIntersection` (`./node_modules/typescript/lib/typescript.js:67429:39`) ← `getNormalizedUnionOrIntersectionType` (67416:48) ← `getNormalizedType` (67408:29) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new |  +13.72ms |  0.0% → 0.2% |    0ms → 13.7ms |   0 → 3 | `SymbolObject` (`./node_modules/typescript/lib/typescript.js:148449:14`) ← `createSymbol` (51236:24) ← `instantiateSymbol` (66013:29) ← `createInstantiatedSymbolTable` (60275:41) ← `resolveObjectTypeMembers` (60465:36) ← `resolveTypeReferenceMembers` (60519:39) ← `resolveStructuredTypeMembers` (61345:40) ← `isWeakType` (69852:22) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `compareTypesAssignable` (66469:34) ← `getInferredType` (71816:27) ← `(anonymous)` (70790:49) ← `getMappedType` (65907:25) ← `getMappedType` (65907:25) ← `(anonymous)` (66062:49) ← `map` (2580:13) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `getTypeAliasInstantiation` (62886:37) ← `getTypeFromTypeAliasReference` (62903:41) ← `getTypeReferenceType` (63005:32) ← `getTypeFromTypeReference` (63179:36) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIndexedAccessType` (83644:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkTypeParameter` (82927:30) ← `checkTypeParameters` (86558:31) ← `checkSignatureDeclaration` (83087:37) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkMethodDeclaration` (83318:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkClassDeclaration` (86712:33) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new |  +13.23ms |  0.0% → 0.2% |    0ms → 13.2ms |  0 → 10 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkReturnStatement` (86275:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkFunctionDeclarationDiagnostics` (84580:49) ← `addLazyDiagnostic` (88652:25) ← `checkFunctionDeclaration` (84578:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |  +12.83ms |  0.0% → 0.2% |    0ms → 12.8ms |   0 → 3 | `TypeObject` (`./node_modules/typescript/lib/typescript.js:148564:14`) ← `createType` (53676:22) ← `createTypeWithSymbol` (53684:32) ← `createObjectType` (53707:28) ← `createTypeReference` (62794:31) ← `createNormalizedTypeReference` (63796:41) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `getReturnTypeOfSignature` (62462:36) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `checkTypeAssignableTo` (66493:33) ← `checkTypeArgumentConstraints` (83481:40) ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` (88652:25) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkTypeAliasDeclaration` (87285:37) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |  +10.89ms |  0.0% → 0.2% |    0ms → 10.9ms |   0 → 8 | `getNodeId` (`./node_modules/typescript/lib/typescript.js:50052:19`) ← `getNodeLinks` (51499:24) ← `getResolvedSymbol` (71910:29) ← `checkIdentifier` (74242:27) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkPrefixUnaryExpression` (81376:38) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkTruthinessExpression` (85549:37) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkForOfStatement` (85574:31) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkMethodDeclaration` (83318:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkClassDeclaration` (86712:33) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +767.5% |   +9.66ms | <0.1% → 0.2% |  1.3ms → 10.9ms |   1 → 8 | `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:38286:37`) ← `(anonymous)` (38259:63) ← `doInsideOfContext` (32908:29) ← `parseJSDocComment` (38255:31) ← `(anonymous)` (32748:71) ← `mapDefined` (2696:20) ← `withJSDoc` (32743:21) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseModuleOrNamespaceDeclaration` (37800:45) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |   +9.44ms |  0.0% → 0.2% |     0ms → 9.4ms |   0 → 7 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `checkTypeRelatedToAndOptionallyElaborate` (66509:52) ← `checkTypeAssignableToAndOptionallyElaborate` (66496:55) ← `checkReturnStatement` (86275:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `(anonymous)` (86337:37) ← `forEach` (2378:17) ← `checkSwitchStatement` (86332:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |   +8.93ms |  0.0% → 0.2% |     0ms → 8.9ms |   0 → 1 | `setStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js:53743:36`) ← `resolveMappedTypeMembers` (61177:36) ← `resolveStructuredTypeMembers` (61345:40) ← `getPropertiesOfObjectType` (61371:37) ← `getPropertiesOfType` (61411:31) ← `isStringIndexSignatureOnlyType` (67243:42) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateMappedType` (66151:33) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getMappedType` (65907:25) ← `(anonymous)` (66062:49) ← `map` (2580:13) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +307.3% |   +8.32ms | <0.1% → 0.2% |  2.7ms → 11.0ms |   2 → 9 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +38.3% |   +7.21ms |  0.3% → 0.5% | 18.8ms → 26.0ms | 14 → 19 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:10) ← `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |   +6.88ms |  0.0% → 0.1% |     0ms → 6.9ms |   0 → 2 | `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:72917:34`) ← `checkIdentifier` (74242:27) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkForOfStatement` (85574:31) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkMethodDeclaration` (83318:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkClassDeclaration` (86712:33) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +28.7% |   +6.58ms |  0.4% → 0.5% | 22.9ms → 29.5ms | 18 → 22 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |   +6.34ms |  0.0% → 0.1% |     0ms → 6.3ms |   0 → 1 | `getNormalizedType` (`./node_modules/typescript/lib/typescript.js:67408:29`) ← `isRelatedTo` (67753:25) ← `isRelatedToWorker2` (69638:34) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `compareTypesAssignable` (66469:34) ← `getInferredType` (71816:27) ← `getInferredTypes` (71853:28) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +90.6% |   +6.26ms |  0.1% → 0.2% |  6.9ms → 13.2ms |  5 → 10 | `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |   +6.08ms |  0.0% → 0.1% |     0ms → 6.1ms |   0 → 2 | `getConditionalType` (`./node_modules/typescript/lib/typescript.js:65229:30`) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateMappedType` (66151:33) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getMappedType` (65907:25) ← `(anonymous)` (66062:49) ← `map` (2580:13) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +83.9% |   +5.65ms |  0.1% → 0.2% |  6.7ms → 12.4ms |   5 → 9 | `getUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js:61892:42`) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +232.3% |   +5.53ms | <0.1% → 0.1% |   2.4ms → 7.9ms |   2 → 6 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |   +5.49ms |  0.0% → 0.1% |     0ms → 5.5ms |   0 → 4 | `isPropertyDeclaration` (`./node_modules/typescript/lib/typescript.js:30080:31`) ← `isPrivateIdentifierClassElementDeclaration` (15495:52) ← `isStaticPrivateIdentifierProperty` (60294:45) ← `addInheritedMembers` (60282:31) ← `resolveObjectTypeMembers` (60465:36) ← `resolveTypeReferenceMembers` (60519:39) ← `resolveStructuredTypeMembers` (61345:40) ← `getPropertyOfType` (61994:29) ← `getUnmatchedProperties` (70992:108) ← `generatorResume` ← `next` ← `firstOrUndefinedIterator` (`./node_modules/typescript/lib/typescript.js:3059:34`) ← `getUnmatchedProperty` (71014:32) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeAssignableTo` (66481:30) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateMappedType` (66151:33) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getMappedType` (65907:25) ← `(anonymous)` (66062:49) ← `map` (2580:13) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `getTypeArguments` (62827:28) ← `typeReferenceToTypeNode` (54996:39) ← `visitAndTransformType` (54870:37) ← `typeToTypeNodeWorker` (54430:34) ← `typeToTypeNodeHelper` (54424:34) ← `expressionOrTypeToTypeNodeHelper` (54336:46) ← `expressionOrTypeToTypeNode` (54326:40) ← `serializeReturnTypeForSignatureWorker` (56317:51) ← `serializeReturnTypeForSignature` (56298:45) ← `signatureToSignatureDeclarationHelper` (55405:51) ← `(anonymous)` (54299:149) ← `withContext` (54395:25) ← `signatureToSignatureDeclaration` (54299:40) ← `signatureToStringWorker` (54219:37) ← `usingSingleLineStringWriter` (16334:37) ← `signatureToString` (54217:29) ← `checkDeprecatedSignature` (79638:36) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

|  Change |     Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | --------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -105.51ms |  1.9% → 0.0% |   105.5ms → 0ms |   4 → 0 | `withJSDoc` (`./node_modules/typescript/lib/typescript.js:31691:21`) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseTypeMember` (33536:27) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseModuleBlock` (36734:28) ← `parseAmbientExternalModuleDeclaration` (36759:49) ← `parseModuleDeclaration` (36778:34) ← `parseDeclarationWorker` (36069:34) ← `(anonymous)` (36056:56) ← `doInsideOfContext` (31856:29) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |  -28.80ms |  0.5% → 0.0% |    28.8ms → 0ms |  23 → 0 | `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:71634:34`) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `getTypeOfExpression` (81411:31) ← `isEvolvingArrayOperationTarget` (71351:42) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkIndexedAccess` (76439:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `maybeCheckExpression` (80565:34) ← `onLeft` (80503:20) ← `left` (30385:16) ← `trampoline` (30489:22) ← `(anonymous)` (80462:12) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -60.9% |  -24.05ms |  0.7% → 0.3% | 39.5ms → 15.5ms | 24 → 12 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -22.18ms |  0.4% → 0.0% |    22.2ms → 0ms |   6 → 0 | `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `typeRelatedToSomeType` (66827:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkMappedType` (82354:27) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkUnionOrIntersectionType` (82318:40) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkModuleDeclaration` (86242:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -63.3% |  -16.86ms |  0.5% → 0.2% |  26.6ms → 9.8ms |  17 → 7 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                       |
|  -36.8% |  -14.34ms |  0.7% → 0.4% | 39.0ms → 24.7ms | 23 → 18 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections` |
| removed |  -13.77ms |  0.2% → 0.0% |    13.8ms → 0ms |  10 → 0 | `getAliasId` (`./node_modules/typescript/lib/typescript.js:61521:22`) ← `getIntersectionType` (63112:31) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getReturnTypeOfSignature` (61207:36) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -10.83ms |  0.2% → 0.0% |    10.8ms → 0ms |   3 → 0 | `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:71634:34`) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `maybeCheckExpression` (80565:34) ← `onLeft` (80503:20) ← `left` (30385:16) ← `trampoline` (30489:22) ← `(anonymous)` (80462:12) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkTruthinessExpression` (84254:37) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkFunctionDeclarationDiagnostics` (83285:49) ← `addLazyDiagnostic` (87339:25) ← `checkFunctionDeclaration` (83283:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -10.69ms |  0.2% → 0.0% |    10.7ms → 0ms |   8 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `checkTypeRelatedToAndOptionallyElaborate` (65249:52) ← `getSignatureApplicabilityError` (76912:42) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkAssertionWorker` (78581:32) ← `checkAssertion` (78541:26) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |   -9.25ms |  0.2% → 0.0% |     9.3ms → 0ms |   7 → 0 | `slice` ← `addRange` (`./node_modules/typescript/lib/typescript.js:2979:18`) ← `createUnionOrIntersectionProperty` (60498:45) ← `getUnionOrIntersectionProperty` (60637:42) ← `isDiscriminantProperty` (70800:34) ← `findDiscriminantProperties` (70812:38) ← `findMatchingDiscriminantType` (90511:40) ← `getBestMatchingType` (68565:31) ← `typeRelatedToSomeType` (66827:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkSignatureDeclaration` (81792:37) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkMethodDeclaration` (82023:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkClassDeclaration` (85417:33) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |   -8.76ms |  0.2% → 0.0% |     8.8ms → 0ms |   7 → 0 | `instantiateSignature` (`./node_modules/typescript/lib/typescript.js:64733:32`) ← `instantiateList` (64623:27) ← `instantiateSignatures` (64643:33) ← `resolveAnonymousTypeMembers` (59723:39) ← `resolveStructuredTypeMembers` (60090:40) ← `getSignaturesOfStructuredType` (60782:41) ← `getSignaturesOfType` (60789:31) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |   -8.38ms |  0.2% → 0.0% |     8.4ms → 0ms |   6 → 0 | `fetch` ← `requestFetch` ← `(anonymous)` ← `(anonymous)` ← `requestInstantiate` ← `requestSatisfyUtil` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |   -7.37ms |  0.1% → 0.0% |     7.4ms → 0ms |   6 → 0 | `join` ← `doJSDocScan` (`./node_modules/typescript/lib/typescript.js:37253:27`) ← `scanRange` (13601:21) ← `parseJSDocCommentWorker` (37231:37) ← `(anonymous)` (37204:63) ← `doInsideOfContext` (31856:29) ← `parseJSDocComment` (37200:31) ← `(anonymous)` (31696:71) ← `mapDefined` (2683:20) ← `withJSDoc` (31691:21) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |   -6.36ms |  0.1% → 0.0% |     6.4ms → 0ms |   5 → 0 | `invokeOnce` (`./node_modules/typescript/lib/typescript.js:70091:24`) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                       |
| removed |   -6.21ms |  0.1% → 0.0% |     6.2ms → 0ms |   5 → 0 | `NodeObject` (`./node_modules/typescript/lib/typescript.js:146197:14`) ← `createBaseNode` (31416:21) ← `createBaseNode` (23823:26) ← `createTypeReferenceNode` (24493:35) ← `parseTypeReference` (33132:30) ← `parseNonArrayType` (33781:29) ← `parsePostfixTypeOrHigher` (33903:36) ← `doOutsideOfContext` (31838:30) ← `allowConditionalTypesAnd` (31880:36) ← `parseTypeOperatorOrHigher` (33974:37) ← `parseUnionOrIntersectionType` (34000:40) ← `parseIntersectionTypeOrHigher` (34014:41) ← `parseUnionOrIntersectionType` (34000:40) ← `parseUnionTypeOrHigher` (34017:34) ← `parseType` (34098:21) ← `parseTypeAnnotation` (34117:31) ← `parseParameterWorker` (33339:32) ← `parseParameter` (33329:26) ← `(anonymous)` (33416:157) ← `parseListElement` (32639:28) ← `parseDelimitedList` (32875:30) ← `parseParametersWorker` (33411:33) ← `parseParameters` (33421:27) ← `parseFunctionDeclaration` (36270:36) ← `parseDeclarationWorker` (36069:34) ← `(anonymous)` (36056:56) ← `doInsideOfContext` (31856:29) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |   -5.62ms |  0.1% → 0.0% |     5.6ms → 0ms |   4 → 0 | `getTypeListId` (`./node_modules/typescript/lib/typescript.js:61498:25`) ← `getConditionalTypeInstantiation` (64979:43) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getTypeOfMappedSymbol` (59989:33) ← `getTypeOfSymbol` (58408:27) ← `getPropertyTypeForIndexType` (63548:39) ← `getIndexedAccessTypeOrUndefined` (63894:43) ← `getIndexedAccessType` (63879:32) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getConditionalType` (63974:30) ← `getConditionalTypeInstantiation` (64979:43) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `isGenericMappedType` (60070:31) ← `shouldDeferIndexType` (63345:32) ← `getIndexType` (63348:24) ← `getTypeFromTypeOperatorNode` (63360:39) ← `getTypeFromTypeNodeWorker` (64527:37) ← `getTypeFromTypeNode` (64524:31) ← `getDeclaredTypeOfTypeAlias` (58847:38) ← `tryGetDeclaredTypeOfSymbol` (58945:38) ← `getDeclaredTypeOfSymbol` (58942:35) ← `getTypeFromTypeAliasReference` (61648:41) ← `getTypeReferenceType` (61750:32) ← `getTypeFromTypeReference` (61924:36) ← `getTypeFromTypeNodeWorker` (64527:37) ← `getTypeFromTypeNode` (64524:31) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -77.1% |   -5.10ms | 0.1% → <0.1% |   6.6ms → 1.5ms |   3 → 1 | `toString` ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js:8751:28`) ← `readFile` (8776:22) ← `readFile` (123140:15) ← `(anonymous)` (123127:40) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124077:30) ← `forEach` (2378:17) ← `createProgram` (123840:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |   -5.00ms |  0.1% → 0.0% |     5.0ms → 0ms |   4 → 0 | `createUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js:60498:45`) ← `getUnionOrIntersectionProperty` (60637:42) ← `getPropertyOfUnionOrIntersectionType` (60674:48) ← `getPropertiesOfUnionOrIntersectionType` (60131:50) ← `getReducedType` (60678:26) ← `getReducedApparentType` (60495:34) ← `getPropertyOfType` (60739:29) ← `checkPropertyAccessExpressionOrQualifiedName` (75918:56) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |   -4.96ms |  0.1% → 0.0% |     5.0ms → 0ms |   1 → 0 | `loadAndEvaluateModule` ← `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |   -4.93ms |  0.1% → 0.0% |     4.9ms → 0ms |   1 → 0 | `getSetExternalModuleIndicator` (`./node_modules/typescript/lib/typescript.js:20661:39`) ← `getCreateSourceFileOptions` (123978:38) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
