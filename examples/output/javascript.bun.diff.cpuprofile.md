# CPU profile diff

Took 5.53s → 5.79s (+266.31ms, +4.8%) over 4,148 samples → 4,388 samples (1.3ms per sample).

| Category         | Change |     Delta |             % |              Time |       Samples |
| ---------------- | -----: | --------: | ------------: | ----------------: | ------------: |
| Third-party      |  +6.7% | +341.28ms | 91.7% → 93.4% |     5.07s → 5.41s | 3,814 → 4,092 |
| Standard library | -18.1% |  -50.37ms |   5.0% → 3.9% | 277.8ms → 227.5ms |     195 → 177 |
| Native           | -14.4% |  -25.93ms |   3.3% → 2.7% | 180.5ms → 154.5ms |     139 → 118 |
| Unknown          |    new |   +1.33ms |  0.0% → <0.1% |       0ms → 1.3ms |         0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|   Change |    Delta |            % |              Time |   Samples | Function                                       | Location                                                                                 |
| -------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
|  +162.9% | +36.88ms |  0.4% → 1.0% |   22.6ms → 59.5ms |   18 → 34 | `forEachChild`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26` |
|   +47.1% | +33.77ms |  1.3% → 1.8% |  71.7ms → 105.5ms |   55 → 81 | `getNormalizedType`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|   +11.1% | +26.91ms |  4.4% → 4.6% | 241.6ms → 268.5ms | 180 → 191 | `checkTypeRelatedTo`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|   +21.1% | +25.55ms |  2.2% → 2.5% | 121.1ms → 146.6ms |  93 → 113 | `isRelatedTo`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| +1520.7% | +20.12ms | <0.1% → 0.4% |    1.3ms → 21.4ms |     1 → 4 | `_loop_18`                                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63565:41` |
|  +221.4% | +19.13ms |  0.2% → 0.5% |    8.6ms → 27.8ms |    7 → 22 | `compareSignaturesRelated`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |
|  +168.7% | +17.18ms |  0.2% → 0.5% |   10.2ms → 27.4ms |    8 → 22 | `getTypeAliasInstantiation`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58731:43` |
|   +26.5% | +16.88ms |  1.2% → 1.4% |   63.7ms → 80.5ms |   48 → 62 | `getTypeListId`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |
|   +75.8% | +15.17ms |  0.4% → 0.6% |   20.0ms → 35.2ms |   16 → 27 | `getMappedType`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
|  +203.3% | +14.93ms |  0.1% → 0.4% |    7.3ms → 22.3ms |    6 → 16 | `getReducedApparentType`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
|   +14.9% | +14.60ms |  1.8% → 1.9% |  97.7ms → 112.3ms |   74 → 88 | `concat`                                       | `<unknown>`                                                                              |
|  +122.7% | +13.22ms |  0.2% → 0.4% |   10.8ms → 24.0ms |    8 → 19 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62` |
|   +26.7% | +11.96ms |  0.8% → 1.0% |   44.7ms → 56.7ms |   34 → 43 | `getReducedType`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
|  +189.4% | +11.55ms |  0.1% → 0.3% |    6.1ms → 17.6ms |    5 → 14 | `getUnionType`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59698:30` |
|  +215.7% |  +9.96ms |  0.1% → 0.3% |    4.6ms → 14.6ms |    4 → 11 | `filter`                                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:610:20`   |
|  +380.1% |  +9.79ms | <0.1% → 0.2% |    2.6ms → 12.4ms |     2 → 6 | `getNamedMembers`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50411:33` |
|   +93.6% |  +9.77ms |  0.2% → 0.3% |   10.4ms → 20.2ms |    8 → 15 | `findAncestor`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12537:26` |
|   +74.6% |  +9.51ms |  0.2% → 0.4% |   12.8ms → 22.3ms |   10 → 18 | `getCombinedFlags`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12431:30` |
|  +694.0% |  +9.11ms | <0.1% → 0.2% |    1.3ms → 10.4ms |     1 → 8 | `getTypeWithThisArgument`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56374:41` |
|  +251.4% |  +9.06ms |  0.1% → 0.2% |    3.6ms → 12.7ms |    3 → 10 | `getSingleSignature`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73489:36` |

##### Third-party

|   Change |    Delta |            % |              Time |   Samples | Function                                       | Location                                                                                 |
| -------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
|  +162.9% | +36.88ms |  0.4% → 1.0% |   22.6ms → 59.5ms |   18 → 34 | `forEachChild`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26` |
|   +47.1% | +33.77ms |  1.3% → 1.8% |  71.7ms → 105.5ms |   55 → 81 | `getNormalizedType`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|   +11.1% | +26.91ms |  4.4% → 4.6% | 241.6ms → 268.5ms | 180 → 191 | `checkTypeRelatedTo`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|   +21.1% | +25.55ms |  2.2% → 2.5% | 121.1ms → 146.6ms |  93 → 113 | `isRelatedTo`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| +1520.7% | +20.12ms | <0.1% → 0.4% |    1.3ms → 21.4ms |     1 → 4 | `_loop_18`                                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63565:41` |
|  +221.4% | +19.13ms |  0.2% → 0.5% |    8.6ms → 27.8ms |    7 → 22 | `compareSignaturesRelated`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |
|  +168.7% | +17.18ms |  0.2% → 0.5% |   10.2ms → 27.4ms |    8 → 22 | `getTypeAliasInstantiation`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58731:43` |
|   +26.5% | +16.88ms |  1.2% → 1.4% |   63.7ms → 80.5ms |   48 → 62 | `getTypeListId`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |
|   +75.8% | +15.17ms |  0.4% → 0.6% |   20.0ms → 35.2ms |   16 → 27 | `getMappedType`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
|  +203.3% | +14.93ms |  0.1% → 0.4% |    7.3ms → 22.3ms |    6 → 16 | `getReducedApparentType`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
|  +122.7% | +13.22ms |  0.2% → 0.4% |   10.8ms → 24.0ms |    8 → 19 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62` |
|   +26.7% | +11.96ms |  0.8% → 1.0% |   44.7ms → 56.7ms |   34 → 43 | `getReducedType`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
|  +189.4% | +11.55ms |  0.1% → 0.3% |    6.1ms → 17.6ms |    5 → 14 | `getUnionType`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59698:30` |
|  +215.7% |  +9.96ms |  0.1% → 0.3% |    4.6ms → 14.6ms |    4 → 11 | `filter`                                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:610:20`   |
|  +380.1% |  +9.79ms | <0.1% → 0.2% |    2.6ms → 12.4ms |     2 → 6 | `getNamedMembers`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50411:33` |
|   +93.6% |  +9.77ms |  0.2% → 0.3% |   10.4ms → 20.2ms |    8 → 15 | `findAncestor`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12537:26` |
|   +74.6% |  +9.51ms |  0.2% → 0.4% |   12.8ms → 22.3ms |   10 → 18 | `getCombinedFlags`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12431:30` |
|  +694.0% |  +9.11ms | <0.1% → 0.2% |    1.3ms → 10.4ms |     1 → 8 | `getTypeWithThisArgument`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56374:41` |
|  +251.4% |  +9.06ms |  0.1% → 0.2% |    3.6ms → 12.7ms |    3 → 10 | `getSingleSignature`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73489:36` |
|  +165.3% |  +8.85ms |  0.1% → 0.2% |    5.4ms → 14.2ms |    4 → 12 | `getConditionalType`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60911:36` |

##### Standard library

|  Change |    Delta |            % |             Time | Samples | Function      | Location                    |
| ------: | -------: | -----------: | ---------------: | ------: | ------------- | --------------------------- |
|  +14.9% | +14.60ms |  1.8% → 1.9% | 97.7ms → 112.3ms | 74 → 88 | `concat`      | `<unknown>`                 |
| +501.9% |  +5.67ms | <0.1% → 0.1% |    1.1ms → 6.8ms |   1 → 5 | `toString`    | `<unknown>`                 |
|  +53.3% |  +2.94ms |         0.1% |    5.5ms → 8.5ms |   4 → 7 | `set`         | `<unknown>`                 |
|  +93.7% |  +2.33ms | <0.1% → 0.1% |    2.5ms → 4.8ms |   2 → 4 | `lastIndexOf` | `<unknown>`                 |
| +122.6% |  +1.66ms | <0.1% → 0.1% |    1.4ms → 3.0ms |   1 → 2 | `some`        | `<unknown>`                 |
|     new |  +1.50ms | 0.0% → <0.1% |      0ms → 1.5ms |   0 → 1 | `every`       | `<unknown>`                 |
|     new |  +1.49ms | 0.0% → <0.1% |      0ms → 1.5ms |   0 → 1 | `(anonymous)` | `internal:primordials:1:11` |
|     new |  +1.25ms | 0.0% → <0.1% |      0ms → 1.2ms |   0 → 1 | `replace`     | `<unknown>`                 |
|     new |  +1.24ms | 0.0% → <0.1% |      0ms → 1.2ms |   0 → 1 | `trim`        | `<unknown>`                 |
|     new |  +1.23ms | 0.0% → <0.1% |      0ms → 1.2ms |   0 → 1 | `resolve`     | `<unknown>`                 |
|     new |  +1.14ms | 0.0% → <0.1% |      0ms → 1.1ms |   0 → 1 | `substr`      | `<unknown>`                 |
|     new |  +1.10ms | 0.0% → <0.1% |      0ms → 1.1ms |   0 → 1 | `charCodeAt`  | `<unknown>`                 |
|  +64.1% |  +0.98ms |        <0.1% |    1.5ms → 2.5ms |   1 → 2 | `trimStart`   | `<unknown>`                 |
|   +3.1% |  +0.07ms |        <0.1% |    2.4ms → 2.5ms |       2 | `Map`         | `<unknown>`                 |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function                                 | Location    |
| ------: | ------: | -----------: | --------------: | ------: | ---------------------------------------- | ----------- |
|  +25.9% | +6.22ms |  0.4% → 0.5% | 24.0ms → 30.2ms | 19 → 22 | `statSync`                               | `<unknown>` |
| +139.3% | +3.66ms | <0.1% → 0.1% |   2.6ms → 6.3ms |   2 → 5 | `stringSplitFast`                        | `<unknown>` |
| +129.0% | +1.98ms | <0.1% → 0.1% |   1.5ms → 3.5ms |   1 → 3 | `readdirSync`                            | `<unknown>` |
|     new | +1.34ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `hasObservableSideEffectsForRegExpSplit` | `<unknown>` |
|     new | +1.27ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `file`                                   | `<unknown>` |
|   +7.1% | +0.35ms |         0.1% |   5.0ms → 5.3ms |       4 | `realpathNativeSync`                     | `<unknown>` |
|  +27.9% | +0.33ms |        <0.1% |   1.2ms → 1.5ms |       1 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

| Change |    Delta |            % |              Time |  Samples | Function                            | Location                                                                                 |
| -----: | -------: | -----------: | ----------------: | -------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| -71.5% | -54.97ms |  1.4% → 0.4% |   76.9ms → 21.9ms |  47 → 17 | `slice`                             | `<unknown>`                                                                              |
| -70.4% | -30.82ms |  0.8% → 0.2% |   43.8ms → 13.0ms |  34 → 10 | `signaturesRelatedTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41` |
| -19.4% | -30.33ms |  2.8% → 2.2% | 156.0ms → 125.7ms | 122 → 97 | `getObjectFlags`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
| -52.1% | -19.88ms |  0.7% → 0.3% |   38.1ms → 18.2ms |  28 → 14 | `readFileSync`                      | `<unknown>`                                                                              |
| -31.4% | -14.56ms |  0.8% → 0.5% |   46.4ms → 31.9ms |  36 → 25 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| -34.4% | -13.85ms |  0.7% → 0.5% |   40.3ms → 26.5ms |  31 → 21 | `isFreshLiteralType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36` |
| -71.8% | -13.69ms |  0.3% → 0.1% |    19.0ms → 5.4ms |   10 → 4 | `next`                              | `<unknown>`                                                                              |
| -18.6% | -11.91ms |  1.2% → 0.9% |   63.9ms → 52.0ms |  48 → 40 | `getApparentType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| -75.1% | -11.89ms |  0.3% → 0.1% |    15.8ms → 3.9ms |   12 → 3 | `addDeclarationToSymbol`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43524:40` |
| -59.7% | -11.72ms |  0.4% → 0.1% |    19.6ms → 7.9ms |   15 → 6 | `getGenericObjectFlags`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60651:39` |
| -89.6% | -10.68ms | 0.2% → <0.1% |    11.9ms → 1.2ms |    9 → 1 | `createSignature`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56437:33` |
| -29.9% | -10.32ms |  0.6% → 0.4% |   34.5ms → 24.2ms |  22 → 19 | `getFlowTypeOfReference`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40` |
| -55.8% |  -9.57ms |  0.3% → 0.1% |    17.1ms → 7.6ms |   13 → 6 | `checkExpressionWithContextualType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77427:51` |
| -40.1% |  -9.07ms |  0.4% → 0.2% |   22.6ms → 13.6ms |  17 → 11 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| -24.5% |  -9.07ms |  0.7% → 0.5% |   37.0ms → 27.9ms |  28 → 22 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| -23.0% |  -8.77ms |  0.7% → 0.5% |   38.1ms → 29.3ms |  30 → 23 | `createTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| -31.1% |  -8.73ms |  0.5% → 0.3% |   28.0ms → 19.3ms |  22 → 15 | `setTextRangePos`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20749:29` |
| -20.5% |  -8.72ms |  0.8% → 0.6% |   42.6ms → 33.9ms |  33 → 25 | `instantiateTypeWithAlias`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| -29.1% |  -8.70ms |  0.5% → 0.4% |   29.9ms → 21.2ms |  22 → 16 | `forEach`                           | `<unknown>`                                                                              |
| -65.9% |  -7.60ms |  0.2% → 0.1% |    11.5ms → 3.9ms |    9 → 3 | `isWeakType`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65236:28` |

##### Third-party

| Change |    Delta |            % |              Time |  Samples | Function                            | Location                                                                                  |
| -----: | -------: | -----------: | ----------------: | -------: | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| -70.4% | -30.82ms |  0.8% → 0.2% |   43.8ms → 13.0ms |  34 → 10 | `signaturesRelatedTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`  |
| -19.4% | -30.33ms |  2.8% → 2.2% | 156.0ms → 125.7ms | 122 → 97 | `getObjectFlags`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`  |
| -31.4% | -14.56ms |  0.8% → 0.5% |   46.4ms → 31.9ms |  36 → 25 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`  |
| -34.4% | -13.85ms |  0.7% → 0.5% |   40.3ms → 26.5ms |  31 → 21 | `isFreshLiteralType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36`  |
| -18.6% | -11.91ms |  1.2% → 0.9% |   63.9ms → 52.0ms |  48 → 40 | `getApparentType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`  |
| -75.1% | -11.89ms |  0.3% → 0.1% |    15.8ms → 3.9ms |   12 → 3 | `addDeclarationToSymbol`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43524:40`  |
| -59.7% | -11.72ms |  0.4% → 0.1% |    19.6ms → 7.9ms |   15 → 6 | `getGenericObjectFlags`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60651:39`  |
| -89.6% | -10.68ms | 0.2% → <0.1% |    11.9ms → 1.2ms |    9 → 1 | `createSignature`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56437:33`  |
| -29.9% | -10.32ms |  0.6% → 0.4% |   34.5ms → 24.2ms |  22 → 19 | `getFlowTypeOfReference`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`  |
| -55.8% |  -9.57ms |  0.3% → 0.1% |    17.1ms → 7.6ms |   13 → 6 | `checkExpressionWithContextualType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77427:51`  |
| -40.1% |  -9.07ms |  0.4% → 0.2% |   22.6ms → 13.6ms |  17 → 11 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
| -24.5% |  -9.07ms |  0.7% → 0.5% |   37.0ms → 27.9ms |  28 → 22 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`  |
| -23.0% |  -8.77ms |  0.7% → 0.5% |   38.1ms → 29.3ms |  30 → 23 | `createTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`  |
| -31.1% |  -8.73ms |  0.5% → 0.3% |   28.0ms → 19.3ms |  22 → 15 | `setTextRangePos`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20749:29`  |
| -20.5% |  -8.72ms |  0.8% → 0.6% |   42.6ms → 33.9ms |  33 → 25 | `instantiateTypeWithAlias`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42`  |
| -65.9% |  -7.60ms |  0.2% → 0.1% |    11.5ms → 3.9ms |    9 → 3 | `isWeakType`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65236:28`  |
| -33.2% |  -7.52ms |  0.4% → 0.3% |   22.7ms → 15.1ms |  17 → 12 | `scanJsDocToken`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32`  |
| -73.0% |  -7.14ms | 0.2% → <0.1% |     9.8ms → 2.6ms |    7 → 2 | `NodeObject`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
| -64.5% |  -6.83ms |  0.2% → 0.1% |    10.6ms → 3.8ms |    8 → 3 | `getNonAssignedNameOfDeclaration`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12672:45`  |
| -33.6% |  -6.76ms |  0.4% → 0.2% |   20.1ms → 13.3ms |  15 → 10 | `(anonymous)`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12116:63`  |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function        | Location                           |
| ------: | -------: | -----------: | --------------: | ------: | --------------- | ---------------------------------- |
|  -71.5% | -54.97ms |  1.4% → 0.4% | 76.9ms → 21.9ms | 47 → 17 | `slice`         | `<unknown>`                        |
|  -71.8% | -13.69ms |  0.3% → 0.1% |  19.0ms → 5.4ms |  10 → 4 | `next`          | `<unknown>`                        |
|  -29.1% |  -8.70ms |  0.5% → 0.4% | 29.9ms → 21.2ms | 22 → 16 | `forEach`       | `<unknown>`                        |
| removed |  -2.24ms | <0.1% → 0.0% |     2.2ms → 0ms |   2 → 0 | `assign`        | `<unknown>`                        |
|  -18.4% |  -2.11ms |         0.2% |  11.5ms → 9.4ms |   9 → 7 | `join`          | `<unknown>`                        |
|  -55.3% |  -1.32ms |        <0.1% |   2.4ms → 1.1ms |   2 → 1 | `test`          | `<unknown>`                        |
| removed |  -1.31ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `splice`        | `<unknown>`                        |
| removed |  -1.27ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `pop`           | `<unknown>`                        |
| removed |  -1.21ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `onConstructed` | `internal:streams/writable:166:65` |
|  -21.3% |  -0.32ms |        <0.1% |   1.5ms → 1.2ms |       1 | `push`          | `<unknown>`                        |
|   -7.7% |  -0.21ms | 0.1% → <0.1% |   2.8ms → 2.6ms |       2 | `map`           | `<unknown>`                        |
|   -1.6% |  -0.21ms |         0.2% | 13.1ms → 12.9ms |      10 | `get`           | `<unknown>`                        |
|   -0.2% |  -4.00µs |        <0.1% |           2.5ms |       2 | `unshift`       | `<unknown>`                        |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ------: | -------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -52.1% | -19.88ms |  0.7% → 0.3% | 38.1ms → 18.2ms | 28 → 14 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|   -8.4% |  -5.54ms |  1.2% → 1.0% | 66.0ms → 60.5ms | 52 → 46 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| removed |  -3.99ms |  0.1% → 0.0% |     4.0ms → 0ms |   3 → 0 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g`                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| removed |  -2.50ms | <0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|   -6.9% |  -1.96ms |         0.5% | 28.3ms → 26.4ms | 22 → 21 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
| removed |  -1.54ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `newRegistryEntry`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| removed |  -1.46ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| removed |  -1.45ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `stream`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| removed |  -1.41ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `/^\.\.?($\|[\\/])/`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| removed |  -1.37ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `setPrototypeDirect`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |              % |          Time |       Samples | Function                        | Location                                                                                  |
| -----: | --------: | -------------: | ------------: | ------------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
|  +5.9% | +274.91ms |  83.8% → 84.7% | 4.63s → 4.91s | 3,504 → 3,748 | `flatMap`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|  +5.9% | +274.47ms |  83.7% → 84.6% | 4.62s → 4.90s | 3,499 → 3,743 | `(anonymous)`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|  +5.0% | +274.08ms |  99.7% → 99.8% | 5.51s → 5.78s | 4,134 → 4,380 | `typeCheckProject`              | `tsc-workload.mjs:3:33`                                                                   |
|  +5.0% | +274.08ms |  99.7% → 99.8% | 5.51s → 5.78s | 4,134 → 4,380 | `evaluate`                      | `<unknown>`                                                                               |
|  +5.0% | +274.08ms |  99.7% → 99.8% | 5.51s → 5.78s | 4,134 → 4,380 | `moduleEvaluation`              | `<unknown>`                                                                               |
|  +5.9% | +273.47ms |  83.8% → 84.7% | 4.63s → 4.90s | 3,504 → 3,747 | `getDiagnosticsHelper`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|  +5.0% | +273.00ms |  99.7% → 99.8% | 5.51s → 5.78s | 4,135 → 4,380 | `processTicksAndRejections`     | `<unknown>`                                                                               |
|  +4.9% | +272.54ms |  99.7% → 99.8% | 5.51s → 5.78s | 4,135 → 4,380 | `loadAndEvaluateModule`         | `<unknown>`                                                                               |
|  +5.9% | +272.44ms |  83.8% → 84.6% | 4.63s → 4.90s | 3,502 → 3,744 | `getAndCacheDiagnostics`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|  +5.9% | +272.37ms |  83.8% → 84.7% | 4.63s → 4.90s | 3,503 → 3,745 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|  +5.8% | +270.87ms |  83.8% → 84.6% | 4.63s → 4.90s | 3,502 → 3,743 | `runWithCancellationToken`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|  +4.9% | +269.23ms | 99.9% → 100.0% | 5.52s → 5.79s | 4,144 → 4,386 | `(anonymous)`                   | `<unknown>`                                                                               |
|  +4.8% | +248.81ms |          93.5% | 5.17s → 5.41s | 3,874 → 4,098 | `forEach`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|  +5.6% | +243.61ms |  78.5% → 79.1% | 4.33s → 4.58s | 3,278 → 3,518 | `getDiagnosticsWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
|  +5.6% | +243.61ms |  78.5% → 79.1% | 4.33s → 4.58s | 3,278 → 3,518 | `getDiagnostics`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  +5.6% | +242.06ms |  78.5% → 79.0% | 4.33s → 4.58s | 3,278 → 3,517 | `checkSourceFile`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
|  +5.5% | +238.47ms |  78.5% → 79.0% | 4.33s → 4.57s | 3,278 → 3,514 | `checkSourceFileWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
|  +5.4% | +232.85ms |  77.6% → 78.1% | 4.29s → 4.52s | 3,246 → 3,474 | `checkSourceElement`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|  +6.7% | +211.89ms |  57.3% → 58.3% | 3.16s → 3.37s | 2,400 → 2,583 | `checkBlock`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |
|  +7.1% | +207.91ms |  53.2% → 54.4% | 2.94s → 3.15s | 2,230 → 2,427 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`  |

##### Third-party

| Change |     Delta |             % |          Time |       Samples | Function                                               | Location                                                                                  |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
|  +5.9% | +274.91ms | 83.8% → 84.7% | 4.63s → 4.91s | 3,504 → 3,748 | `flatMap`                                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|  +5.9% | +274.47ms | 83.7% → 84.6% | 4.62s → 4.90s | 3,499 → 3,743 | `(anonymous)`                                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|  +5.9% | +273.47ms | 83.8% → 84.7% | 4.63s → 4.90s | 3,504 → 3,747 | `getDiagnosticsHelper`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|  +5.9% | +272.44ms | 83.8% → 84.6% | 4.63s → 4.90s | 3,502 → 3,744 | `getAndCacheDiagnostics`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|  +5.9% | +272.37ms | 83.8% → 84.7% | 4.63s → 4.90s | 3,503 → 3,745 | `getSemanticDiagnosticsForFile`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|  +5.8% | +270.87ms | 83.8% → 84.6% | 4.63s → 4.90s | 3,502 → 3,743 | `runWithCancellationToken`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|  +4.8% | +248.81ms |         93.5% | 5.17s → 5.41s | 3,874 → 4,098 | `forEach`                                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|  +5.6% | +243.61ms | 78.5% → 79.1% | 4.33s → 4.58s | 3,278 → 3,518 | `getDiagnosticsWorker`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
|  +5.6% | +243.61ms | 78.5% → 79.1% | 4.33s → 4.58s | 3,278 → 3,518 | `getDiagnostics`                                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  +5.6% | +242.06ms | 78.5% → 79.0% | 4.33s → 4.58s | 3,278 → 3,517 | `checkSourceFile`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
|  +5.5% | +238.47ms | 78.5% → 79.0% | 4.33s → 4.57s | 3,278 → 3,514 | `checkSourceFileWorker`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
|  +5.4% | +232.85ms | 77.6% → 78.1% | 4.29s → 4.52s | 3,246 → 3,474 | `checkSourceElement`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|  +6.7% | +211.89ms | 57.3% → 58.3% | 3.16s → 3.37s | 2,400 → 2,583 | `checkBlock`                                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |
|  +7.1% | +207.91ms | 53.2% → 54.4% | 2.94s → 3.15s | 2,230 → 2,427 | `checkCallExpression`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`  |
|  +6.9% | +190.84ms | 50.4% → 51.3% | 2.78s → 2.97s | 2,110 → 2,293 | `getResolvedSignature`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38`  |
|  +7.3% | +177.03ms | 43.6% → 44.7% | 2.41s → 2.58s | 1,830 → 1,974 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76186:70`  |
|  +7.2% | +173.26ms | 43.7% → 44.7% | 2.41s → 2.59s | 1,834 → 1,975 | `checkDeferredNode`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35`  |
|  +7.1% | +171.94ms | 43.7% → 44.7% | 2.41s → 2.59s | 1,835 → 1,975 | `checkDeferredNodes`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`  |
|  +5.3% | +171.44ms | 58.6% → 58.9% | 3.24s → 3.41s | 2,455 → 2,630 | `checkExpression`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
|  +8.2% | +159.74ms | 35.3% → 36.5% | 1.95s → 2.11s | 1,475 → 1,616 | `checkExpressionCached`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77450:39`  |

##### Standard library

|  Change |     Delta |             % |             Time |       Samples | Function      | Location                       |
| ------: | --------: | ------------: | ---------------: | ------------: | ------------- | ------------------------------ |
|   +7.4% | +181.89ms | 44.3% → 45.4% |    2.44s → 2.62s | 1,858 → 2,005 | `forEach`     | `<unknown>`                    |
|  +14.9% |  +14.60ms |   1.8% → 1.9% | 97.7ms → 112.3ms |       74 → 88 | `concat`      | `<unknown>`                    |
| +501.9% |   +5.67ms |  <0.1% → 0.1% |    1.1ms → 6.8ms |         1 → 5 | `toString`    | `<unknown>`                    |
|  +43.1% |   +4.17ms |          0.2% |   9.7ms → 13.9ms |        7 → 11 | `some`        | `<unknown>`                    |
|  +53.3% |   +2.94ms |          0.1% |    5.5ms → 8.5ms |         4 → 7 | `set`         | `<unknown>`                    |
|  +93.7% |   +2.33ms |  <0.1% → 0.1% |    2.5ms → 4.8ms |         2 → 4 | `lastIndexOf` | `<unknown>`                    |
|     new |   +1.50ms |  0.0% → <0.1% |      0ms → 1.5ms |         0 → 1 | `every`       | `<unknown>`                    |
|     new |   +1.49ms |  0.0% → <0.1% |      0ms → 1.5ms |         0 → 1 | `(anonymous)` | `internal:primordials:1:11`    |
|     new |   +1.49ms |  0.0% → <0.1% |      0ms → 1.5ms |         0 → 1 | `(anonymous)` | `internal:shared:1:11`         |
|     new |   +1.49ms |  0.0% → <0.1% |      0ms → 1.5ms |         0 → 1 | `(anonymous)` | `internal:validators:1:11`     |
|     new |   +1.27ms |  0.0% → <0.1% |      0ms → 1.3ms |         0 → 1 | `WriteStream` | `internal:fs/streams:196:21`   |
|     new |   +1.25ms |  0.0% → <0.1% |      0ms → 1.2ms |         0 → 1 | `replace`     | `<unknown>`                    |
|     new |   +1.24ms |  0.0% → <0.1% |      0ms → 1.2ms |         0 → 1 | `trim`        | `<unknown>`                    |
|     new |   +1.23ms |  0.0% → <0.1% |      0ms → 1.2ms |         0 → 1 | `resolve`     | `<unknown>`                    |
|     new |   +1.14ms |  0.0% → <0.1% |      0ms → 1.1ms |         0 → 1 | `substr`      | `<unknown>`                    |
|     new |   +1.10ms |  0.0% → <0.1% |      0ms → 1.1ms |         0 → 1 | `charCodeAt`  | `<unknown>`                    |
|  +64.1% |   +0.98ms |         <0.1% |    1.5ms → 2.5ms |         1 → 2 | `trimStart`   | `<unknown>`                    |
|  +38.3% |   +0.41ms |         <0.1% |    1.1ms → 1.5ms |             1 | `(anonymous)` | `internal:streams/duplex:1:11` |
|   +3.1% |   +0.07ms |         <0.1% |    2.4ms → 2.5ms |             2 | `Map`         | `<unknown>`                    |

##### Native

|  Change |     Delta |             % |            Time |       Samples | Function                                 | Location    |
| ------: | --------: | ------------: | --------------: | ------------: | ---------------------------------------- | ----------- |
|   +5.0% | +274.08ms | 99.7% → 99.8% |   5.51s → 5.78s | 4,134 → 4,380 | `evaluate`                               | `<unknown>` |
|   +5.0% | +274.08ms | 99.7% → 99.8% |   5.51s → 5.78s | 4,134 → 4,380 | `moduleEvaluation`                       | `<unknown>` |
|   +5.0% | +273.00ms | 99.7% → 99.8% |   5.51s → 5.78s | 4,135 → 4,380 | `processTicksAndRejections`              | `<unknown>` |
|   +4.9% | +272.54ms | 99.7% → 99.8% |   5.51s → 5.78s | 4,135 → 4,380 | `loadAndEvaluateModule`                  | `<unknown>` |
|  +25.9% |   +6.22ms |   0.4% → 0.5% | 24.0ms → 30.2ms |       19 → 22 | `statSync`                               | `<unknown>` |
| +139.3% |   +3.66ms |  <0.1% → 0.1% |   2.6ms → 6.3ms |         2 → 5 | `stringSplitFast`                        | `<unknown>` |
| +248.1% |   +3.00ms |  <0.1% → 0.1% |   1.2ms → 4.2ms |         1 → 3 | `bound realpathNativeSync`               | `<unknown>` |
| +129.0% |   +1.98ms |  <0.1% → 0.1% |   1.5ms → 3.5ms |         1 → 3 | `readdirSync`                            | `<unknown>` |
|     new |   +1.34ms |  0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `hasObservableSideEffectsForRegExpSplit` | `<unknown>` |
|     new |   +1.34ms |  0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `[Symbol.split]`                         | `<unknown>` |
|     new |   +1.27ms |  0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `file`                                   | `<unknown>` |
|   +7.1% |   +0.35ms |          0.1% |   5.0ms → 5.3ms |             4 | `realpathNativeSync`                     | `<unknown>` |
|  +27.9% |   +0.33ms |         <0.1% |   1.2ms → 1.5ms |             1 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |            % |              Time |   Samples | Function                            | Location                                                                                 |
| ------: | -------: | -----------: | ----------------: | --------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
|  -68.3% | -55.26ms |  1.5% → 0.4% |   81.0ms → 25.7ms |   49 → 20 | `captureErrorCalculationState`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
|  -71.5% | -54.97ms |  1.4% → 0.4% |   76.9ms → 21.9ms |   47 → 17 | `slice`                             | `<unknown>`                                                                              |
|  -78.2% | -33.26ms |  0.8% → 0.2% |    42.5ms → 9.2ms |    21 → 7 | `isTypeAssignableToKind`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76512:40` |
|   -6.1% | -31.06ms |  9.3% → 8.3% | 513.0ms → 481.9ms | 377 → 371 | `checkMethodDeclaration`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78362:40` |
|  -82.6% | -30.98ms |  0.7% → 0.1% |    37.5ms → 6.5ms |    17 → 5 | `getAwaitedTypeNoAlias`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79269:39` |
|  -19.4% | -30.33ms |  2.8% → 2.2% | 156.0ms → 125.7ms |  122 → 97 | `getObjectFlags`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
|  -76.2% | -29.56ms |  0.7% → 0.2% |    38.8ms → 9.2ms |    18 → 7 | `checkAwaitedType`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79184:34` |
|  -95.6% | -28.11ms | 0.5% → <0.1% |    29.4ms → 1.3ms |    11 → 1 | `isThenableType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79193:32` |
| removed | -27.00ms |  0.5% → 0.0% |      27.0ms → 0ms |     9 → 0 | `checkAsyncFunctionReturnType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79374:46` |
|   -4.6% | -22.83ms |  9.0% → 8.2% | 496.9ms → 474.1ms | 375 → 365 | `getSignatureApplicabilityError`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73779:48` |
|  -53.6% | -21.06ms |  0.7% → 0.3% |   39.3ms → 18.2ms |   29 → 14 | `readFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36`  |
|  -27.8% | -20.91ms |  1.4% → 0.9% |   75.2ms → 54.2ms |   57 → 41 | `speculationHelper`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12034:35` |
|  -26.0% | -20.57ms |  1.4% → 1.0% |   79.0ms → 58.4ms |   60 → 44 | `speculationHelper`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31200:35` |
|  -10.6% | -20.31ms |  3.5% → 2.9% | 190.8ms → 170.5ms | 143 → 133 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|  -40.2% | -20.21ms |  0.9% → 0.5% |   50.2ms → 30.0ms |   38 → 24 | `inferFromTypeArguments`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
|  -25.1% | -20.04ms |  1.4% → 1.0% |   79.8ms → 59.8ms |   59 → 41 | `declareSymbol`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31` |
|  -52.1% | -19.88ms |  0.7% → 0.3% |   38.1ms → 18.2ms |   28 → 14 | `readFileSync`                      | `<unknown>`                                                                              |
|  -15.0% | -19.87ms |  2.4% → 1.9% | 132.2ms → 112.3ms |  100 → 87 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
|  -31.9% | -19.41ms |  1.1% → 0.7% |   60.9ms → 41.5ms |   45 → 32 | `instantiateMappedTypeTemplate`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61911:47` |
|  -60.4% | -18.33ms |  0.5% → 0.2% |   30.4ms → 12.0ms |    23 → 9 | `getGenericObjectFlags`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60651:39` |

##### Third-party

|  Change |    Delta |            % |              Time |   Samples | Function                               | Location                                                                                 |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
|  -68.3% | -55.26ms |  1.5% → 0.4% |   81.0ms → 25.7ms |   49 → 20 | `captureErrorCalculationState`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
|  -78.2% | -33.26ms |  0.8% → 0.2% |    42.5ms → 9.2ms |    21 → 7 | `isTypeAssignableToKind`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76512:40` |
|   -6.1% | -31.06ms |  9.3% → 8.3% | 513.0ms → 481.9ms | 377 → 371 | `checkMethodDeclaration`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78362:40` |
|  -82.6% | -30.98ms |  0.7% → 0.1% |    37.5ms → 6.5ms |    17 → 5 | `getAwaitedTypeNoAlias`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79269:39` |
|  -19.4% | -30.33ms |  2.8% → 2.2% | 156.0ms → 125.7ms |  122 → 97 | `getObjectFlags`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
|  -76.2% | -29.56ms |  0.7% → 0.2% |    38.8ms → 9.2ms |    18 → 7 | `checkAwaitedType`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79184:34` |
|  -95.6% | -28.11ms | 0.5% → <0.1% |    29.4ms → 1.3ms |    11 → 1 | `isThenableType`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79193:32` |
| removed | -27.00ms |  0.5% → 0.0% |      27.0ms → 0ms |     9 → 0 | `checkAsyncFunctionReturnType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79374:46` |
|   -4.6% | -22.83ms |  9.0% → 8.2% | 496.9ms → 474.1ms | 375 → 365 | `getSignatureApplicabilityError`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73779:48` |
|  -53.6% | -21.06ms |  0.7% → 0.3% |   39.3ms → 18.2ms |   29 → 14 | `readFileWorker`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36`  |
|  -27.8% | -20.91ms |  1.4% → 0.9% |   75.2ms → 54.2ms |   57 → 41 | `speculationHelper`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12034:35` |
|  -26.0% | -20.57ms |  1.4% → 1.0% |   79.0ms → 58.4ms |   60 → 44 | `speculationHelper`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31200:35` |
|  -10.6% | -20.31ms |  3.5% → 2.9% | 190.8ms → 170.5ms | 143 → 133 | `createUnionOrIntersectionProperty`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|  -40.2% | -20.21ms |  0.9% → 0.5% |   50.2ms → 30.0ms |   38 → 24 | `inferFromTypeArguments`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
|  -25.1% | -20.04ms |  1.4% → 1.0% |   79.8ms → 59.8ms |   59 → 41 | `declareSymbol`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31` |
|  -15.0% | -19.87ms |  2.4% → 1.9% | 132.2ms → 112.3ms |  100 → 87 | `scan`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
|  -31.9% | -19.41ms |  1.1% → 0.7% |   60.9ms → 41.5ms |   45 → 32 | `instantiateMappedTypeTemplate`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61911:47` |
|  -60.4% | -18.33ms |  0.5% → 0.2% |   30.4ms → 12.0ms |    23 → 9 | `getGenericObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60651:39` |
|  -46.7% | -18.02ms |  0.7% → 0.4% |   38.6ms → 20.5ms |   30 → 15 | `discriminateTypeByDiscriminableItems` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65195:54` |
|  -34.8% | -18.00ms |  0.9% → 0.6% |   51.7ms → 33.7ms |   39 → 26 | `parseNonArrayType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33066:35` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function          | Location                           |
| ------: | -------: | -----------: | --------------: | ------: | ----------------- | ---------------------------------- |
|  -71.5% | -54.97ms |  1.4% → 0.4% | 76.9ms → 21.9ms | 47 → 17 | `slice`           | `<unknown>`                        |
|  -71.8% | -13.69ms |  0.3% → 0.1% |  19.0ms → 5.4ms |  10 → 4 | `next`            | `<unknown>`                        |
|  -75.4% |  -3.79ms | 0.1% → <0.1% |   5.0ms → 1.2ms |   4 → 1 | `find`            | `<unknown>`                        |
|  -41.3% |  -2.79ms |         0.1% |   6.7ms → 4.0ms |   5 → 3 | `map`             | `<unknown>`                        |
|  -45.2% |  -2.32ms | 0.1% → <0.1% |   5.1ms → 2.8ms |   4 → 2 | `get WriteStream` | `node:fs:587:18`                   |
|  -18.1% |  -2.27ms |         0.2% | 12.5ms → 10.2ms |  10 → 8 | `test`            | `<unknown>`                        |
| removed |  -2.24ms | <0.1% → 0.0% |     2.2ms → 0ms |   2 → 0 | `assign`          | `<unknown>`                        |
|  -59.6% |  -2.18ms | 0.1% → <0.1% |   3.7ms → 1.5ms |   3 → 1 | `(anonymous)`     | `internal:stream:1:11`             |
|  -59.6% |  -2.18ms | 0.1% → <0.1% |   3.7ms → 1.5ms |   3 → 1 | `(anonymous)`     | `node:stream:1:11`                 |
|  -59.6% |  -2.18ms | 0.1% → <0.1% |   3.7ms → 1.5ms |   3 → 1 | `(anonymous)`     | `internal:fs/streams:1:11`         |
|  -18.4% |  -2.11ms |         0.2% |  11.5ms → 9.4ms |   9 → 7 | `join`            | `<unknown>`                        |
|  -33.9% |  -1.35ms | 0.1% → <0.1% |   4.0ms → 2.6ms |   3 → 2 | `sort`            | `<unknown>`                        |
| removed |  -1.31ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `splice`          | `<unknown>`                        |
| removed |  -1.27ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `pop`             | `<unknown>`                        |
| removed |  -1.21ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `onConstructed`   | `internal:streams/writable:166:65` |
| removed |  -1.21ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `(anonymous)`     | `internal:streams/writable:196:33` |
| removed |  -1.21ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `emit`            | `node:events:78:48`                |
| removed |  -1.21ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `onConstruct`     | `internal:streams/destroy:128:23`  |
|  -35.5% |  -0.81ms |        <0.1% |   2.3ms → 1.5ms |   2 → 1 | `(anonymous)`     | `internal:streams/pipeline:1:11`   |
|  -35.5% |  -0.81ms |        <0.1% |   2.3ms → 1.5ms |   2 → 1 | `(anonymous)`     | `internal:streams/compose:1:11`    |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ------: | -------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -52.1% | -19.88ms |  0.7% → 0.3% | 38.1ms → 18.2ms | 28 → 14 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  -40.9% |  -4.75ms |  0.2% → 0.1% |  11.6ms → 6.9ms |   9 → 5 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| removed |  -3.99ms |  0.1% → 0.0% |     4.0ms → 0ms |   3 → 0 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g`                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|   -4.0% |  -3.52ms |  1.6% → 1.5% | 88.8ms → 85.3ms | 69 → 65 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|   -6.9% |  -1.96ms |         0.5% | 28.3ms → 26.4ms | 22 → 21 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
| removed |  -1.54ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `newRegistryEntry`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| removed |  -1.54ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `ensureRegistered`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| removed |  -1.54ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `loadModule`                                                                                                                                                                                                                                                                                                                                                                     | `<unknown>` |
| removed |  -1.46ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| removed |  -1.46ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `requestFetch`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
| removed |  -1.46ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `requestInstantiate`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| removed |  -1.46ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `requestSatisfyUtil`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| removed |  -1.45ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `stream`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
|   -1.8% |  -1.44ms |  1.5% → 1.4% | 81.2ms → 79.7ms | 63 → 61 | `require`                                                                                                                                                                                                                                                                                                                                                                        | `<unknown>` |
|   -1.8% |  -1.44ms |  1.5% → 1.4% | 81.2ms → 79.7ms | 63 → 61 | `bound require`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
| removed |  -1.41ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `/^\.\.?($\|[\\/])/`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| removed |  -1.37ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `setPrototypeDirect`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| removed |  -1.21ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `bound onceWrapper`                                                                                                                                                                                                                                                                                                                                                              | `<unknown>` |
