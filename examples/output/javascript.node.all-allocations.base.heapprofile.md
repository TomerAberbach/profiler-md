# Heap profile

Allocated 4.75 GiB over 9,660 samples (516 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 91.6% | 4.35 GiB |   8,892 |
| Standard library |  8.4% |  408 MiB |     768 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

## Call tree

Call paths to the hottest functions.

```
├── 4.64 GiB (97.7%) [[via 2 frames]] typeCheckProject  ./tsc-workload.mjs:3:33
│   ├── 4.13 GiB (86.9%) [[via 9 frames]] (anonymous)  ./node_modules/typescript/lib/typescript.js:123385:37
│   │   ├── 3.98 GiB (83.8%) [[via 4 frames]] checkSourceFileWorker  ./node_modules/typescript/lib/typescript.js:87270:33
│   │   │   ├── 2.55 GiB (53.8%) [[via 2 frames]] checkDeferredNode  ./node_modules/typescript/lib/typescript.js:87186:29
│   │   │   │   ├── 1.58 GiB (33.4%) [[via 5–12 frames]] checkSourceElementWorker  ./node_modules/typescript/lib/typescript.js:86895:36
│   │   │   │   │   ├── 1.07 GiB (22.5%) checkVariableDeclaration  :84101:36
│   │   │   │   │   │   └── 1.07 GiB (22.5%) checkVariableLikeDeclaration  :83907:40
│   │   │   │   │   │       ├── 950 MiB (19.5%) getTypeOfSymbol  :58408:27
│   │   │   │   │   │       │   ├── 918 MiB (18.9%) [[via 3 frames]] checkDeclarationInitializer  ./node_modules/typescript/lib/typescript.js:81169:39
│   │   │   │   │   │       │   │   ├── 763 MiB (15.7%) checkExpressionCached  :81145:33
│   │   │   │   │   │       │   │   │   ├── 383 MiB (7.9%) checkExpressionWorker  :81516:33
│   │   │   │   │   │       │   │   │   │   ├── 333 MiB (6.8%) [[via 2–8 frames]] checkCallExpression  ./node_modules/typescript/lib/typescript.js:78289:31
│   │   │   │   │   │       │   │   │   │   │   ├── 210 MiB (4.3%) [[via 12–15 frames]] checkTypeRelatedTo  (self 4.0%; 51.2% in 628 call stacks)  ./node_modules/typescript/lib/typescript.js:66185:30
│   │   │   │   │   │       │   │   │   │   │   └── 105 MiB (2.2%) 2 more branches, largest resolveCallExpression (2.1%)  :77689:33
│   │   │   │   │   │       │   │   │   │   └── 49.9 MiB (1.0%) 6 more branches, largest checkCallExpression (0.8%)  :78289:31
│   │   │   │   │   │       │   │   │   └── 380 MiB (7.8%) 1 more branch, checkExpression  :81476:27
│   │   │   │   │   │       │   │   └── 155 MiB (3.2%) 1 more branch, getQuickTypeOfExpression  :81431:36
│   │   │   │   │   │       │   └── 21.1 MiB (0.4%) [[via 6–23 frames]] getTypeOfMappedSymbol  ./node_modules/typescript/lib/typescript.js:59989:33
│   │   │   │   │   │       └── 143 MiB (2.9%) 4 more branches, largest checkExpressionCached (2.1%)  :81145:33 and getTypeOfVariableOrParameterOrPropertyWorker (0.7%)
│   │   │   │   │   └── 528 MiB (10.8%) 10 more branches, largest checkExpressionStatement (8.0%)  :84124:36 and checkTypeReferenceOrImport (1.1%)
│   │   │   │   └── 970 MiB (19.9%) checkSourceElementWorker  :86895:36
│   │   │   │       ├── 222 MiB (4.6%) [[via 3–4 frames]] checkExpressionStatement  ./node_modules/typescript/lib/typescript.js:84124:36
│   │   │   │       │   └── 222 MiB (4.6%) checkExpressionWorker  :81516:33
│   │   │   │       │       ├── 19.5 MiB (0.4%) [[via 1–9 frames]] checkIdentifier  ./node_modules/typescript/lib/typescript.js:72959:27
│   │   │   │       │       │   └── 17.5 MiB (0.4%) getFlowTypeOfReference  (3.3% self in 283 call stacks)  :71634:34
│   │   │   │       │       └── 202 MiB (4.2%) 10 more branches, largest checkCallExpression (3.1%)  ./node_modules/typescript/lib/typescript.js:78289:31 and checkPropertyAccessExpressionOrQualifiedName (0.7%)
│   │   │   │       ├── 57 MiB (1.2%) [[via 6–12 frames]] isRelatedTo  ./node_modules/typescript/lib/typescript.js:66493:25
│   │   │   │       │   └── 47.5 MiB (1.0%) [[via 5–8 frames]] recursiveTypeRelatedTo  (3.2% self in 218 call stacks)  ./node_modules/typescript/lib/typescript.js:67063:36
│   │   │   │       │       └── 29 MiB (0.6%) [[via 4 frames]] compareSignaturesRelated  ./node_modules/typescript/lib/typescript.js:65804:36
│   │   │   │       │           └── 7 MiB (0.1%) [[via 5 frames]] getObjectTypeInstantiation  (2.6% self in 248 call stacks)  ./node_modules/typescript/lib/typescript.js:64785:38
│   │   │   │       └── 672 MiB (13.8%) 8 more branches, largest checkVariableDeclaration (13.3%)  ./node_modules/typescript/lib/typescript.js:84101:36
│   │   │   └── 1.4 GiB (29.5%) forEach  :2365:17
│   │   │       ├── 979 MiB (20.1%) [[via 4–7 frames]] checkSourceElement  ./node_modules/typescript/lib/typescript.js:86886:30
│   │   │       │   ├── 787 MiB (16.2%) checkSourceElementWorker  :86895:36
│   │   │       │   │   └── 785 MiB (16.1%) 16 more branches, largest checkVariableDeclaration (11.7%)  :84101:36 and checkTypeReferenceNode (1.8%)
│   │   │       │   └── 192 MiB (3.9%) 1 more branch, checkSourceElementWorker  ./node_modules/typescript/lib/typescript.js:86895:36
│   │   │       └── 456 MiB (9.4%) 5 more branches, largest checkSourceElement (9.2%)  :86886:30
│   │   └── 151 MiB (3.1%) 2 more branches, largest getTypeChecker (3.1%)  :123266:26
│   └── 522 MiB (10.7%) 3 more branches, largest createProgram (10.3%)  ./node_modules/typescript/lib/typescript.js:122262:23
└── 112 MiB (2.3%) 49 more branches, largest (anonymous) (0.2%)  ./heapprofile-run.mjs:1:1
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                               | Location                                               |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 51.2% | 2.43 GiB |   4,961 | `checkTypeRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66185:30` |
|  3.3% |  160 MiB |     320 | `getFlowTypeOfReference`               | `./node_modules/typescript/lib/typescript.js:71634:34` |
|  3.2% |  156 MiB |     311 | `recursiveTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67063:36` |
|  2.7% |  131 MiB |     248 | `set`                                  | `<unknown>`                                            |
|  2.6% |  129 MiB |     257 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js:64785:38` |
|  1.9% | 93.5 MiB |     187 | `getTypeFactsWorker`                   | `./node_modules/typescript/lib/typescript.js:70941:30` |
|  1.9% | 90.2 MiB |     180 | `parseJSDocCommentWorker`              | `./node_modules/typescript/lib/typescript.js:37231:37` |
|  1.8% |   88 MiB |     176 | `instantiateSymbol`                    | `./node_modules/typescript/lib/typescript.js:64758:29` |
|  1.5% | 71.5 MiB |     143 | `Map`                                  | `<unknown>`                                            |
|  1.2% | 56.5 MiB |     113 | `next`                                 | `<unknown>`                                            |
|  0.7% |   36 MiB |      72 | `parseDelimitedList`                   | `./node_modules/typescript/lib/typescript.js:32875:30` |
|  0.7% |   35 MiB |      70 | `instantiateAnonymousType`             | `./node_modules/typescript/lib/typescript.js:64955:36` |
|  0.7% |   34 MiB |      68 | `declareSymbol`                        | `./node_modules/typescript/lib/typescript.js:44997:25` |
|  0.6% | 30.5 MiB |      61 | `setParentRecursive`                   | `./node_modules/typescript/lib/typescript.js:21708:28` |
|  0.6% | 29.5 MiB |      59 | `createBaseNode`                       | `./node_modules/typescript/lib/typescript.js:31416:21` |
|  0.6% |   29 MiB |      58 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:66156:48` |
|  0.6% |   27 MiB |      54 | `push`                                 | `<unknown>`                                            |
|  0.6% |   27 MiB |      54 | `isDeeplyNestedType`                   | `./node_modules/typescript/lib/typescript.js:68771:30` |
|  0.5% |   26 MiB |      52 | `createBaseIdentifierNode`             | `./node_modules/typescript/lib/typescript.js:31395:31` |
|  0.5% |   25 MiB |      50 | `instantiateTypes`                     | `./node_modules/typescript/lib/typescript.js:64640:28` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Third-party

|     % |     Size | Samples | Function                               | Location                                               |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------------------------------ |
| 51.2% | 2.43 GiB |   4,961 | `checkTypeRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66185:30` |
|  3.3% |  160 MiB |     320 | `getFlowTypeOfReference`               | `./node_modules/typescript/lib/typescript.js:71634:34` |
|  3.2% |  156 MiB |     311 | `recursiveTypeRelatedTo`               | `./node_modules/typescript/lib/typescript.js:67063:36` |
|  2.6% |  129 MiB |     257 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js:64785:38` |
|  1.9% | 93.5 MiB |     187 | `getTypeFactsWorker`                   | `./node_modules/typescript/lib/typescript.js:70941:30` |
|  1.9% | 90.2 MiB |     180 | `parseJSDocCommentWorker`              | `./node_modules/typescript/lib/typescript.js:37231:37` |
|  1.8% |   88 MiB |     176 | `instantiateSymbol`                    | `./node_modules/typescript/lib/typescript.js:64758:29` |
|  0.7% |   36 MiB |      72 | `parseDelimitedList`                   | `./node_modules/typescript/lib/typescript.js:32875:30` |
|  0.7% |   35 MiB |      70 | `instantiateAnonymousType`             | `./node_modules/typescript/lib/typescript.js:64955:36` |
|  0.7% |   34 MiB |      68 | `declareSymbol`                        | `./node_modules/typescript/lib/typescript.js:44997:25` |
|  0.6% | 30.5 MiB |      61 | `setParentRecursive`                   | `./node_modules/typescript/lib/typescript.js:21708:28` |
|  0.6% | 29.5 MiB |      59 | `createBaseNode`                       | `./node_modules/typescript/lib/typescript.js:31416:21` |
|  0.6% |   29 MiB |      58 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:66156:48` |
|  0.6% |   27 MiB |      54 | `isDeeplyNestedType`                   | `./node_modules/typescript/lib/typescript.js:68771:30` |
|  0.5% |   26 MiB |      52 | `createBaseIdentifierNode`             | `./node_modules/typescript/lib/typescript.js:31395:31` |
|  0.5% |   25 MiB |      50 | `instantiateTypes`                     | `./node_modules/typescript/lib/typescript.js:64640:28` |
|  0.5% |   24 MiB |      48 | `(anonymous)`                          | `./node_modules/typescript/lib/typescript.js:52487:21` |
|  0.5% |   22 MiB |      44 | `isRelatedTo`                          | `./node_modules/typescript/lib/typescript.js:66493:25` |
|  0.5% |   22 MiB |      44 | `getUnmatchedProperty`                 | `./node_modules/typescript/lib/typescript.js:69731:32` |
|  0.4% |   21 MiB |      42 | `structuredTypeRelatedToWorker`        | `./node_modules/typescript/lib/typescript.js:67277:43` |

##### Standard library

|     % |     Size | Samples | Function       | Location                                   |
| ----: | -------: | ------: | -------------- | ------------------------------------------ |
|  2.7% |  131 MiB |     248 | `set`          | `<unknown>`                                |
|  1.5% | 71.5 MiB |     143 | `Map`          | `<unknown>`                                |
|  1.2% | 56.5 MiB |     113 | `next`         | `<unknown>`                                |
|  0.6% |   27 MiB |      54 | `push`         | `<unknown>`                                |
|  0.4% | 21.3 MiB |      28 | `slice`        | `node:buffer:640:12`                       |
|  0.4% |   21 MiB |      42 | `splice`       | `<unknown>`                                |
|  0.4% | 17.5 MiB |      35 | `values`       | `<unknown>`                                |
|  0.2% | 11.5 MiB |      23 | `slice`        | `<unknown>`                                |
|  0.2% |  9.5 MiB |      19 | `replace`      | `<unknown>`                                |
|  0.2% | 8.77 MiB |       2 | `readFileSync` | `node:fs:433:22`                           |
|  0.1% |    6 MiB |      12 | `join`         | `<unknown>`                                |
|  0.1% | 5.27 MiB |      10 | `wrapSafe`     | `node:internal/modules/cjs/loader:1671:18` |
|  0.1% |    4 MiB |       8 | `Set`          | `<unknown>`                                |
|  0.1% | 2.52 MiB |       5 | `add`          | `<unknown>`                                |
|  0.1% |  2.5 MiB |       5 | `trimEnd`      | `<unknown>`                                |
|  0.1% |  2.5 MiB |       5 | `split`        | `<unknown>`                                |
| <0.1% |  1.5 MiB |       3 | `delete`       | `<unknown>`                                |
| <0.1% |  1.5 MiB |       3 | `get`          | `<unknown>`                                |
| <0.1% | 1.47 MiB |       1 | `post`         | `node:inspector:118:7`                     |
| <0.1% |  522 KiB |       1 | `charCodeAt`   | `<unknown>`                                |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`)

|     % |     Size | Samples | Caller                    | Location                                               |
| ----: | -------: | ------: | ------------------------- | ------------------------------------------------------ |
| 89.5% | 2.18 GiB |   4,439 | `isTypeOrBaseIdenticalTo` | `./node_modules/typescript/lib/typescript.js:70496:35` |
|  4.5% |  111 MiB |     221 | `isTypeAssignableTo`      | `./node_modules/typescript/lib/typescript.js:65221:30` |
|  4.3% |  107 MiB |     213 | `isTypeRelatedTo`         | `./node_modules/typescript/lib/typescript.js:66101:27` |
|  0.6% | 14.6 MiB |      29 | `isTypeIdenticalTo`       | `./node_modules/typescript/lib/typescript.js:65203:29` |
|  0.4% | 9.54 MiB |      19 | `checkTypeAssignableTo`   | `./node_modules/typescript/lib/typescript.js:65233:33` |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js:71634:34`)

|     % |     Size | Samples | Caller                              | Location                                               |
| ----: | -------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 60.3% | 96.7 MiB |     193 | `checkIdentifier`                   | `./node_modules/typescript/lib/typescript.js:72959:27` |
| 33.4% | 53.6 MiB |     107 | `getFlowTypeOfAccessExpression`     | `./node_modules/typescript/lib/typescript.js:76049:41` |
|  5.3% | 8.51 MiB |      17 | `tryGetThisTypeAt`                  | `./node_modules/typescript/lib/typescript.js:73293:28` |
|  0.6% |    1 MiB |       2 | `checkThisExpression`               | `./node_modules/typescript/lib/typescript.js:73219:31` |
|  0.3% |  512 KiB |       1 | `checkIfExpressionRefinesParameter` | `./node_modules/typescript/lib/typescript.js:79705:45` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67063:36`)

|      % |    Size | Samples | Caller        | Location                                               |
| -----: | ------: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 156 MiB |     311 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                                   | Location                                               |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------------------ |
| 22.9% | 30.1 MiB |      60 | `resolveObjectTypeMembers`               | `./node_modules/typescript/lib/typescript.js:59210:36` |
| 14.9% | 19.5 MiB |      39 | `addInheritedMembers`                    | `./node_modules/typescript/lib/typescript.js:59027:31` |
| 11.8% | 15.5 MiB |      31 | `getPropertiesOfUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:60131:50` |
|  7.5% | 9.82 MiB |       9 | `resetMaybeStack`                        | `./node_modules/typescript/lib/typescript.js:67196:31` |
|  6.1% | 8.02 MiB |      16 | `(anonymous)`                            | `./node_modules/typescript/lib/typescript.js:52182:20` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:64785:38`)

|      % |    Size | Samples | Caller                  | Location                                               |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 129 MiB |     257 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js:70941:30`)

|     % |     Size | Samples | Caller                  | Location                                               |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------ |
| 36.9% | 34.5 MiB |      69 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:71020:29` |
| 27.8% |   26 MiB |      52 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:71032:35` |
| 19.2% |   18 MiB |      36 | `getTypeFactsWorker`    | `./node_modules/typescript/lib/typescript.js:70941:30` |
|  4.3% |    4 MiB |       8 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:70999:37` |
|  2.1% |    2 MiB |       4 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:81516:33` |

##### `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:37231:37`)

|     % |     Size | Samples | Caller              | Location                                               |
| ----: | -------: | ------: | ------------------- | ------------------------------------------------------ |
| 86.7% | 78.2 MiB |     156 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:31696:71` |
|  7.8% |    7 MiB |      14 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:37204:63` |
|  5.6% | 5.01 MiB |      10 | `parseJSDocComment` | `./node_modules/typescript/lib/typescript.js:37200:31` |

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js:64758:29`)

|     % |    Size | Samples | Caller                          | Location                                               |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 69.3% |  61 MiB |     122 | `resolveObjectTypeMembers`      | `./node_modules/typescript/lib/typescript.js:59210:36` |
| 15.9% |  14 MiB |      28 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js:59020:41` |
|  6.2% | 5.5 MiB |      11 | `instantiateSignature`          | `./node_modules/typescript/lib/typescript.js:64733:32` |
|  2.8% | 2.5 MiB |       5 | `resolveAnonymousTypeMembers`   | `./node_modules/typescript/lib/typescript.js:59723:39` |
|  2.8% | 2.5 MiB |       5 | `instantiateSignatures`         | `./node_modules/typescript/lib/typescript.js:64643:33` |

##### `Map` (`<unknown>`)

|     % |    Size | Samples | Caller                           | Location                                               |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------------------ |
| 49.0% |  35 MiB |      70 | `createSymbolTable`              | `./node_modules/typescript/lib/typescript.js:15264:27` |
| 16.8% |  12 MiB |      24 | `getIntersectionType`            | `./node_modules/typescript/lib/typescript.js:63112:31` |
|  8.4% |   6 MiB |      12 | `bindContainer`                  | `./node_modules/typescript/lib/typescript.js:45136:25` |
|  6.3% | 4.5 MiB |       9 | `createInstantiatedSymbolTable`  | `./node_modules/typescript/lib/typescript.js:59020:41` |
|  2.8% |   2 MiB |       4 | `checkUnusedLocalsAndParameters` | `./node_modules/typescript/lib/typescript.js:83592:42` |

##### `next` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 16.8% | 9.5 MiB |      19 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js:69709:35` |
| 10.6% |   6 MiB |      12 | `getIntersectionType`    | `./node_modules/typescript/lib/typescript.js:63112:31` |
|  8.0% | 4.5 MiB |       9 | `Map`                    | `<unknown>`                                            |
|  4.4% | 2.5 MiB |       5 | `getUnmatchedProperty`   | `./node_modules/typescript/lib/typescript.js:69731:32` |
|  4.4% | 2.5 MiB |       5 | `inferFromMatchingTypes` | `./node_modules/typescript/lib/typescript.js:70119:36` |

##### `parseDelimitedList` (`./node_modules/typescript/lib/typescript.js:32875:30`)

|     % |    Size | Samples | Caller                              | Location                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 44.4% |  16 MiB |      32 | `parseParameters`                   | `./node_modules/typescript/lib/typescript.js:33421:27` |
| 15.3% | 5.5 MiB |      11 | `parseTypeArgumentsOfTypeReference` | `./node_modules/typescript/lib/typescript.js:33127:45` |
| 11.1% |   4 MiB |       8 | `parseBracketedList`                | `./node_modules/typescript/lib/typescript.js:32938:30` |
|  8.3% |   3 MiB |       6 | `parseCallExpressionRest`           | `./node_modules/typescript/lib/typescript.js:35207:35` |
|  5.6% |   2 MiB |       4 | `parseObjectLiteralExpression`      | `./node_modules/typescript/lib/typescript.js:35422:40` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js:64955:36`)

|     % |   Size | Samples | Caller                       | Location                                               |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 74.3% | 26 MiB |      52 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 14.3% |  5 MiB |      10 | `instantiateConstituent`     | `./node_modules/typescript/lib/typescript.js:64900:36` |
| 11.4% |  4 MiB |       8 | `instantiateMappedType`      | `./node_modules/typescript/lib/typescript.js:64891:33` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js:44997:25`)

|     % |     Size | Samples | Caller                             | Location                                               |
| ----: | -------: | ------: | ---------------------------------- | ------------------------------------------------------ |
| 79.4% |   27 MiB |      54 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js:46199:44` |
| 19.1% | 6.51 MiB |      13 | `declareModuleMember`              | `./node_modules/typescript/lib/typescript.js:45071:31` |
|  1.5% |  512 KiB |       1 | `declareClassMember`               | `./node_modules/typescript/lib/typescript.js:46246:30` |

##### `setParentRecursive` (`./node_modules/typescript/lib/typescript.js:21708:28`)

|     % |     Size | Samples | Caller                                 | Location                                                |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------------------------------- |
| 49.2% |   15 MiB |      30 | `getModuleInstanceState`               | `./node_modules/typescript/lib/typescript.js:44660:32`  |
| 41.0% | 12.5 MiB |      25 | `bindChildren`                         | `./node_modules/typescript/lib/typescript.js:45235:24`  |
|  4.9% |  1.5 MiB |       3 | `getModuleInstanceStateForAliasTarget` | `./node_modules/typescript/lib/typescript.js:44741:46`  |
|  3.3% |    1 MiB |       2 | `collectModuleReferences`              | `./node_modules/typescript/lib/typescript.js:123774:37` |
|  1.6% |  512 KiB |       1 | `bindJSDoc`                            | `./node_modules/typescript/lib/typescript.js:46628:21`  |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js:31416:21`)

|     % |     Size | Samples | Caller                              | Location                                               |
| ----: | -------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 54.2% |   16 MiB |      32 | `createBaseDeclaration`             | `./node_modules/typescript/lib/typescript.js:23826:33` |
| 35.6% | 10.5 MiB |      21 | `createBaseNode`                    | `./node_modules/typescript/lib/typescript.js:23823:26` |
|  5.1% |  1.5 MiB |       3 | `createUnionTypeNode`               | `./node_modules/typescript/lib/typescript.js:24636:31` |
|  3.4% |    1 MiB |       2 | `createTypeLiteralNode`             | `./node_modules/typescript/lib/typescript.js:24569:33` |
|  1.7% |  512 KiB |       1 | `createUnionOrIntersectionTypeNode` | `./node_modules/typescript/lib/typescript.js:24627:45` |

##### `getNormalizedUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js:66156:48`)

|     % |     Size | Samples | Caller              | Location                                               |
| ----: | -------: | ------: | ------------------- | ------------------------------------------------------ |
| 98.3% | 28.5 MiB |      57 | `isRelatedTo`       | `./node_modules/typescript/lib/typescript.js:66493:25` |
|  1.7% |  512 KiB |       1 | `getNormalizedType` | `./node_modules/typescript/lib/typescript.js:66148:29` |

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 31.5% | 8.5 MiB |      17 | `getIntersectionType`    | `./node_modules/typescript/lib/typescript.js:63112:31` |
| 14.8% |   4 MiB |       8 | `arrayFrom`              | `./node_modules/typescript/lib/typescript.js:3174:19`  |
| 13.0% | 3.5 MiB |       7 | `parseUnionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js:34017:34` |
|  5.6% | 1.5 MiB |       3 | `getSignaturesOfSymbol`  | `./node_modules/typescript/lib/typescript.js:61114:33` |
|  3.7% |   1 MiB |       2 | `pushTypeResolution`     | `./node_modules/typescript/lib/typescript.js:57184:30` |

##### `isDeeplyNestedType` (`./node_modules/typescript/lib/typescript.js:68771:30`)

|     % |   Size | Samples | Caller                   | Location                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 51.9% | 14 MiB |      28 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 40.7% | 11 MiB |      22 | `invokeOnce`             | `./node_modules/typescript/lib/typescript.js:70091:24` |
|  7.4% |  2 MiB |       4 | `(anonymous)`            | `./node_modules/typescript/lib/typescript.js:68777:33` |

##### `createBaseIdentifierNode` (`./node_modules/typescript/lib/typescript.js:31395:31`)

|     % |     Size | Samples | Caller                   | Location                                               |
| ----: | -------: | ------: | ------------------------ | ------------------------------------------------------ |
| 75.0% | 19.5 MiB |      39 | `createIdentifier`       | `./node_modules/typescript/lib/typescript.js:23941:28` |
| 17.3% |  4.5 MiB |       9 | `parseIdentifier`        | `./node_modules/typescript/lib/typescript.js:32321:27` |
|  3.8% |    1 MiB |       2 | `parsePrimaryExpression` | `./node_modules/typescript/lib/typescript.js:35282:34` |
|  3.8% |    1 MiB |       2 | `parseBindingIdentifier` | `./node_modules/typescript/lib/typescript.js:32313:34` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js:64640:28`)

|     % |   Size | Samples | Caller                       | Location                                               |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 96.0% | 24 MiB |      48 | `instantiateTypeWorker`      | `./node_modules/typescript/lib/typescript.js:65023:33` |
|  4.0% |  1 MiB |       2 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:52487:21`)

|      % |   Size | Samples | Caller    | Location    |
| -----: | -----: | ------: | --------- | ----------- |
| 100.0% | 24 MiB |      48 | `forEach` | `<unknown>` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js:66493:25`)

|     % |    Size | Samples | Caller                  | Location                                               |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------ |
| 90.9% |  20 MiB |      40 | `checkTypeRelatedTo`    | `./node_modules/typescript/lib/typescript.js:66185:30` |
|  4.5% |   1 MiB |       2 | `isRelatedToWorker2`    | `./node_modules/typescript/lib/typescript.js:68378:34` |
|  2.3% | 512 KiB |       1 | `typeRelatedToSomeType` | `./node_modules/typescript/lib/typescript.js:66827:35` |
|  2.3% | 512 KiB |       1 | `eachTypeRelatedToType` | `./node_modules/typescript/lib/typescript.js:66935:35` |

##### `getUnmatchedProperty` (`./node_modules/typescript/lib/typescript.js:69731:32`)

|     % |    Size | Samples | Caller                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 72.7% |  16 MiB |      32 | `propertiesRelatedTo`      | `./node_modules/typescript/lib/typescript.js:68073:33` |
| 15.9% | 3.5 MiB |       7 | `inferFromObjectTypes`     | `./node_modules/typescript/lib/typescript.js:70332:34` |
| 11.4% | 2.5 MiB |       5 | `typesDefinitelyUnrelated` | `./node_modules/typescript/lib/typescript.js:69737:36` |

##### `slice` (`node:buffer:640:12`)

|      % |     Size | Samples | Caller     | Location             |
| -----: | -------: | ------: | ---------- | -------------------- |
| 100.0% | 21.3 MiB |      28 | `toString` | `node:buffer:839:46` |

##### `splice` (`<unknown>`)

|     % |    Size | Samples | Caller               | Location                                               |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------ |
| 40.5% | 8.5 MiB |      17 | `getUnionTypeWorker` | `./node_modules/typescript/lib/typescript.js:62867:30` |
| 33.3% |   7 MiB |      14 | `addTypesToUnion`    | `./node_modules/typescript/lib/typescript.js:62693:27` |
| 21.4% | 4.5 MiB |       9 | `reorderCandidates`  | `./node_modules/typescript/lib/typescript.js:76487:29` |
|  2.4% | 512 KiB |       1 | `resolveCall`        | `./node_modules/typescript/lib/typescript.js:77299:23` |
|  2.4% | 512 KiB |       1 | `addTypeToUnion`     | `./node_modules/typescript/lib/typescript.js:62670:26` |

##### `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js:67277:43`)

|      % |   Size | Samples | Caller                    | Location                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 21 MiB |      42 | `structuredTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67207:37` |

##### `values` (`<unknown>`)

|     % |    Size | Samples | Caller                              | Location                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 17.1% |   3 MiB |       6 | `inferFromIndexTypes`               | `./node_modules/typescript/lib/typescript.js:70466:33` |
|  8.6% | 1.5 MiB |       3 | `hasMatchingArgument`               | `./node_modules/typescript/lib/typescript.js:70885:31` |
|  8.6% | 1.5 MiB |       3 | `inferFromTypes`                    | `./node_modules/typescript/lib/typescript.js:69901:28` |
|  5.7% |   1 MiB |       2 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45` |
|  5.7% |   1 MiB |       2 | `indexSignaturesRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68475:38` |

##### `slice` (`<unknown>`)

|     % |    Size | Samples | Caller                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 30.4% | 3.5 MiB |       7 | `filterType`               | `./node_modules/typescript/lib/typescript.js:71231:22` |
| 17.4% |   2 MiB |       4 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16`  |
| 17.4% |   2 MiB |       4 | `instantiateTypes`         | `./node_modules/typescript/lib/typescript.js:64640:28` |
|  4.3% | 512 KiB |       1 | `getAdjustedTypeWithFacts` | `./node_modules/typescript/lib/typescript.js:71022:36` |
|  4.3% | 512 KiB |       1 | `removeSuffix`             | `./node_modules/typescript/lib/typescript.js:3728:22`  |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Caller                                  | Location                                                |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------- |
| 57.9% | 5.5 MiB |      11 | `getCanonicalFileName`                  | `./node_modules/typescript/lib/typescript.js:124375:32` |
| 26.3% | 2.5 MiB |       5 | `toFileNameLowerCase`                   | `./node_modules/typescript/lib/typescript.js:3496:29`   |
| 10.5% |   1 MiB |       2 | `toPath3`                               | `./node_modules/typescript/lib/typescript.js:122790:19` |
|  5.3% | 512 KiB |       1 | `getResolvedProjectReferenceToRedirect` | `./node_modules/typescript/lib/typescript.js:124152:49` |

##### `readFileSync` (`node:fs:433:22`)

|     % |     Size | Samples | Caller            | Location                                              |
| ----: | -------: | ------: | ----------------- | ----------------------------------------------------- |
| 94.3% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`            |
|  5.7% |  512 KiB |       1 | `readFileWorker`  | `./node_modules/typescript/lib/typescript.js:8722:28` |

##### `join` (`<unknown>`)

|     % |  Size | Samples | Caller             | Location                                               |
| ----: | ----: | ------: | ------------------ | ------------------------------------------------------ |
| 83.3% | 5 MiB |      10 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js:37253:27` |
| 16.7% | 1 MiB |       2 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js:37509:32` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 5.27 MiB |      10 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `Set` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 87.5% | 3.5 MiB |       7 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 12.5% | 512 KiB |       1 | `bindSourceFile2`        | `./node_modules/typescript/lib/typescript.js:44851:27` |

##### `add` (`<unknown>`)

|     % |     Size | Samples | Caller                   | Location                                               |
| ----: | -------: | ------: | ------------------------ | ------------------------------------------------------ |
| 40.2% | 1.01 MiB |       2 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36` |
| 20.0% |  514 KiB |       1 | `(anonymous)`            | `./node_modules/typescript/lib/typescript.js:52218:32` |
| 20.0% |  514 KiB |       1 | `declareSymbol`          | `./node_modules/typescript/lib/typescript.js:44997:25` |
| 19.9% |  513 KiB |       1 | `checkNodeDeferred`      | `./node_modules/typescript/lib/typescript.js:87169:29` |

##### `trimEnd` (`<unknown>`)

|     % |    Size | Samples | Caller             | Location                                               |
| ----: | ------: | ------: | ------------------ | ------------------------------------------------------ |
| 60.0% | 1.5 MiB |       3 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js:37253:27` |
| 40.0% |   1 MiB |       2 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js:37509:32` |

##### `split` (`<unknown>`)

|     % |    Size | Samples | Caller              | Location                                              |
| ----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 80.0% |   2 MiB |       4 | `getPathComponents` | `./node_modules/typescript/lib/typescript.js:9075:27` |
| 20.0% | 512 KiB |       1 | `pathComponents`    | `./node_modules/typescript/lib/typescript.js:9068:24` |

##### `delete` (`<unknown>`)

|      % |    Size | Samples | Caller            | Location                                               |
| -----: | ------: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 1.5 MiB |       3 | `resetMaybeStack` | `./node_modules/typescript/lib/typescript.js:67196:31` |

##### `get` (`<unknown>`)

|     % |    Size | Samples | Caller                       | Location                                               |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------ |
| 33.3% | 512 KiB |       1 | `getTypeAtFlowLoopLabel`     | `./node_modules/typescript/lib/typescript.js:71934:36` |
| 33.3% | 512 KiB |       1 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38` |
| 33.3% | 512 KiB |       1 | `getIntersectionType`        | `./node_modules/typescript/lib/typescript.js:63112:31` |

##### `post` (`node:inspector:118:7`)

|      % |     Size | Samples | Caller        | Location                    |
| -----: | -------: | ------: | ------------- | --------------------------- |
| 100.0% | 1.47 MiB |       1 | `(anonymous)` | `node:internal/util:477:24` |

##### `charCodeAt` (`<unknown>`)

|      % |    Size | Samples | Caller | Location                                               |
| -----: | ------: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 522 KiB |       1 | `scan` | `./node_modules/typescript/lib/typescript.js:12765:16` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size | Samples | Function                                   | Location                                                |
| ----: | -------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 98.0% | 4.65 GiB |   9,463 | `typeCheckProject`                         | `./tsc-workload.mjs:3:33`                               |
| 97.9% | 4.65 GiB |   9,456 | `(anonymous)`                              | `./heapprofile-run.mjs:1:1`                             |
| 97.7% | 4.64 GiB |   9,437 | `(anonymous)`                              | `<unknown>`                                             |
| 87.6% | 4.16 GiB |   8,484 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 87.5% | 4.16 GiB |   8,482 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36` |
| 87.5% | 4.16 GiB |   8,480 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |
| 87.5% | 4.16 GiB |   8,478 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34` |
| 87.5% | 4.16 GiB |   8,474 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45` |
| 87.5% | 4.16 GiB |   8,473 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41` |
| 87.4% | 4.15 GiB |   8,470 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 87.4% | 4.15 GiB |   8,465 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17`   |
| 87.4% | 4.15 GiB |   8,464 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32` |
| 87.3% | 4.15 GiB |   8,461 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 84.6% | 4.02 GiB |   8,198 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 84.6% | 4.02 GiB |   8,193 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27`  |
| 84.5% | 4.02 GiB |   8,190 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47`  |
| 84.5% | 4.02 GiB |   8,187 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32`  |
| 84.5% | 4.02 GiB |   8,186 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27`  |
| 84.3% | 4.01 GiB |   8,166 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36`  |
| 84.3% |    4 GiB |   8,165 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30`  |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                                |
| ----: | -------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 87.6% | 4.16 GiB |   8,484 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 87.5% | 4.16 GiB |   8,482 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36` |
| 87.5% | 4.16 GiB |   8,480 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |
| 87.5% | 4.16 GiB |   8,478 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34` |
| 87.5% | 4.16 GiB |   8,474 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45` |
| 87.5% | 4.16 GiB |   8,473 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41` |
| 87.4% | 4.15 GiB |   8,470 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 87.4% | 4.15 GiB |   8,465 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17`   |
| 87.4% | 4.15 GiB |   8,464 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32` |
| 87.3% | 4.15 GiB |   8,461 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 84.6% | 4.02 GiB |   8,198 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 84.6% | 4.02 GiB |   8,193 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27`  |
| 84.5% | 4.02 GiB |   8,190 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js:87336:47`  |
| 84.5% | 4.02 GiB |   8,187 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js:87343:32`  |
| 84.5% | 4.02 GiB |   8,186 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27`  |
| 84.3% | 4.01 GiB |   8,166 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js:86895:36`  |
| 84.3% |    4 GiB |   8,165 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js:86886:30`  |
| 75.9% | 3.61 GiB |   7,344 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17`   |
| 73.8% | 3.51 GiB |   7,144 | `checkExpressionWorker`                    | `./node_modules/typescript/lib/typescript.js:81516:33`  |
| 71.0% | 3.37 GiB |   6,873 | `checkCallExpression`                      | `./node_modules/typescript/lib/typescript.js:78289:31`  |

##### Standard library

|     % |     Size | Samples | Function          | Location                                   |
| ----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 54.8% | 2.61 GiB |   5,309 | `forEach`         | `<unknown>`                                |
|  2.7% |  131 MiB |     248 | `set`             | `<unknown>`                                |
|  1.7% | 83.5 MiB |     167 | `next`            | `<unknown>`                                |
|  1.6% | 78.1 MiB |     156 | `Map`             | `<unknown>`                                |
|  0.6% |   27 MiB |      54 | `push`            | `<unknown>`                                |
|  0.4% | 21.3 MiB |      28 | `slice`           | `node:buffer:640:12`                       |
|  0.4% | 21.3 MiB |      28 | `toString`        | `node:buffer:839:46`                       |
|  0.4% |   21 MiB |      42 | `splice`          | `<unknown>`                                |
|  0.4% | 18.1 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  0.4% | 18.1 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  0.4% | 18.1 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  0.4% | 18.1 MiB |      20 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader:237:24`  |
|  0.4% | 18.1 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  0.4% | 18.1 MiB |      20 | `require`         | `node:internal/modules/helpers:146:19`     |
|  0.4% | 17.5 MiB |      35 | `values`          | `<unknown>`                                |
|  0.3% |   15 MiB |      30 | `replace`         | `<unknown>`                                |
|  0.2% | 11.5 MiB |      23 | `slice`           | `<unknown>`                                |
|  0.2% | 9.87 MiB |      19 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.2% | 9.27 MiB |       3 | `readFileSync`    | `node:fs:433:22`                           |
|  0.2% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Caller        | Location                    |
| ----: | -------: | ------: | ------------- | --------------------------- |
| 99.9% | 4.65 GiB |   9,455 | `(anonymous)` | `./heapprofile-run.mjs:1:1` |

##### `(anonymous)` (`./heapprofile-run.mjs:1:1`)

|     % |     Size | Samples | Caller        | Location    |
| ----: | -------: | ------: | ------------- | ----------- |
| 99.8% | 4.64 GiB |   9,437 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|      % |     Size | Samples | Caller                     | Location                                                |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,482 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:123365:36`)

|      % |     Size | Samples | Caller                                     | Location                                                |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,480 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:123384:52`)

|      % |     Size | Samples | Caller                   | Location                                                |
| -----: | -------: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,478 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:123670:34`)

|      % |     Size | Samples | Caller                              | Location                                                |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,474 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123381:45`)

|      % |     Size | Samples | Caller                          | Location                                                |
| -----: | -------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,472 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123375:41`)

|      % |     Size | Samples | Caller        | Location                                                |
| -----: | -------: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,470 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|     % |     Size | Samples | Caller    | Location                                              |
| ----: | -------: | ------: | --------- | ----------------------------------------------------- |
| 99.9% | 4.15 GiB |   8,465 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2612:17`)

|      % |     Size | Samples | Caller                 | Location                                                |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,464 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:123313:32`)

|      % |     Size | Samples | Caller                   | Location                                                |
| -----: | -------: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,461 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js:123327:34` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:123327:34`)

|     % |     Size | Samples | Caller             | Location                  |
| ----: | -------: | ------: | ------------------ | ------------------------- |
| 99.9% | 4.14 GiB |   8,450 | `typeCheckProject` | `./tsc-workload.mjs:3:33` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`)

|     % |     Size | Samples | Caller            | Location                                               |
| ----: | -------: | ------: | ----------------- | ------------------------------------------------------ |
| 99.9% | 4.02 GiB |   8,192 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:87239:27`)

|      % |     Size | Samples | Caller                                | Location                                               |
| -----: | -------: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 4.02 GiB |   8,190 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:87336:47`)

|      % |     Size | Samples | Caller                 | Location                                               |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 4.02 GiB |   8,187 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:87343:32`)

|      % |     Size | Samples | Caller            | Location                                               |
| -----: | -------: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 4.02 GiB |   8,186 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js:87322:27` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:87322:27`)

|      % |     Size | Samples | Caller        | Location                                                |
| -----: | -------: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.01 GiB |   8,182 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:86895:36`)

|      % |     Size | Samples | Caller                         | Location                                               |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------------ |
| 100.0% |    4 GiB |   8,165 | `checkSourceElement`           | `./node_modules/typescript/lib/typescript.js:86886:30` |
|  23.9% |  981 MiB |   1,950 | `checkDeferredNode`            | `./node_modules/typescript/lib/typescript.js:87186:29` |
|   0.2% | 6.51 MiB |      13 | `checkSignatureDeclaration`    | `./node_modules/typescript/lib/typescript.js:81792:37` |
|  <0.1% |    1 MiB |       2 | `checkVariableLikeDeclaration` | `./node_modules/typescript/lib/typescript.js:83907:40` |
|  <0.1% |  512 KiB |       1 | `checkSourceElementWorker`     | `./node_modules/typescript/lib/typescript.js:86895:36` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:86886:30`)

|     % |      Size | Samples | Caller                                                 | Location                                               |
| ----: | --------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 80.0% |   3.2 GiB |   6,528 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js:2365:17`  |
| 40.2% |  1.61 GiB |   3,281 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js:79840:64` |
| 25.0% | 1,023 MiB |   2,036 | `checkBlock`                                           | `./node_modules/typescript/lib/typescript.js:83716:22` |
| 19.0% |   779 MiB |   1,552 | `checkVariableStatement`                               | `./node_modules/typescript/lib/typescript.js:84119:34` |
|  7.9% |   323 MiB |     645 | `checkTypeAliasDeclaration`                            | `./node_modules/typescript/lib/typescript.js:85990:37` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2365:17`)

|     % |     Size | Samples | Caller                         | Location                                                |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------------------- |
| 54.7% | 1.97 GiB |   4,019 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:83716:22`  |
| 47.7% | 1.72 GiB |   3,512 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js:84112:40`  |
| 39.6% | 1.43 GiB |   2,915 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js:87270:33`  |
| 10.8% |  400 MiB |     786 | `createProgram`                | `./node_modules/typescript/lib/typescript.js:122262:23` |
|  6.2% |  229 MiB |     454 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js:85417:33`  |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js:81516:33`)

|     % |      Size | Samples | Caller                              | Location                                               |
| ----: | --------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 75.5% |  2.65 GiB |   5,398 | `checkExpression`                   | `./node_modules/typescript/lib/typescript.js:81476:27` |
| 64.8% |  2.27 GiB |   4,636 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js:81122:45` |
| 28.3% | 1,016 MiB |   2,024 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js:81145:33` |
| 16.4% |   590 MiB |   1,176 | `checkObjectLiteral`                | `./node_modules/typescript/lib/typescript.js:74814:30` |
| 16.1% |   576 MiB |   1,148 | `checkExpressionWorker`             | `./node_modules/typescript/lib/typescript.js:81516:33` |

##### `checkCallExpression` (`./node_modules/typescript/lib/typescript.js:78289:31`)

|      % |     Size | Samples | Caller                  | Location                                               |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 3.37 GiB |   6,873 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:81516:33` |

##### `forEach` (`<unknown>`)

|     % |     Size | Samples | Caller                     | Location                                               |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------------------ |
| 99.4% | 2.59 GiB |   5,275 | `checkDeferredNodes`       | `./node_modules/typescript/lib/typescript.js:87179:30` |
|  0.4% | 11.5 MiB |      23 | `resolveObjectTypeMembers` | `./node_modules/typescript/lib/typescript.js:59210:36` |
|  0.4% |   10 MiB |      20 | `extendExportSymbols`      | `./node_modules/typescript/lib/typescript.js:52179:31` |
|  0.3% |    7 MiB |      14 | `setStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js:52502:36` |
|  0.2% |  5.5 MiB |      11 | `getNamedMembers`          | `./node_modules/typescript/lib/typescript.js:52485:27` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                                   | Location                                               |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------------------ |
| 22.9% | 30.1 MiB |      60 | `resolveObjectTypeMembers`               | `./node_modules/typescript/lib/typescript.js:59210:36` |
| 14.9% | 19.5 MiB |      39 | `addInheritedMembers`                    | `./node_modules/typescript/lib/typescript.js:59027:31` |
| 11.8% | 15.5 MiB |      31 | `getPropertiesOfUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:60131:50` |
|  7.5% | 9.82 MiB |       9 | `resetMaybeStack`                        | `./node_modules/typescript/lib/typescript.js:67196:31` |
|  6.1% | 8.02 MiB |      16 | `(anonymous)`                            | `./node_modules/typescript/lib/typescript.js:52182:20` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Caller                     | Location                                               |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------------------ |
| 32.9% | 27.5 MiB |      55 | `getUnmatchedProperty`     | `./node_modules/typescript/lib/typescript.js:69731:32` |
| 11.4% |  9.5 MiB |      19 | `getUnmatchedProperties`   | `./node_modules/typescript/lib/typescript.js:69709:35` |
|  7.8% |  6.5 MiB |      13 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js:3046:34`  |
|  7.2% |    6 MiB |      12 | `getIntersectionType`      | `./node_modules/typescript/lib/typescript.js:63112:31` |
|  5.4% |  4.5 MiB |       9 | `Map`                      | `<unknown>`                                            |

##### `Map` (`<unknown>`)

|     % |     Size | Samples | Caller                          | Location                                               |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 44.8% |   35 MiB |      70 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js:15264:27` |
| 15.4% |   12 MiB |      24 | `getIntersectionType`           | `./node_modules/typescript/lib/typescript.js:63112:31` |
|  7.7% | 6.05 MiB |      12 | `visit`                         | `./node_modules/typescript/lib/typescript.js:52216:19` |
|  7.7% |    6 MiB |      12 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js:45136:25` |
|  5.8% |  4.5 MiB |       9 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js:59020:41` |

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 31.5% | 8.5 MiB |      17 | `getIntersectionType`    | `./node_modules/typescript/lib/typescript.js:63112:31` |
| 14.8% |   4 MiB |       8 | `arrayFrom`              | `./node_modules/typescript/lib/typescript.js:3174:19`  |
| 13.0% | 3.5 MiB |       7 | `parseUnionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js:34017:34` |
|  5.6% | 1.5 MiB |       3 | `getSignaturesOfSymbol`  | `./node_modules/typescript/lib/typescript.js:61114:33` |
|  3.7% |   1 MiB |       2 | `pushTypeResolution`     | `./node_modules/typescript/lib/typescript.js:57184:30` |

##### `slice` (`node:buffer:640:12`)

|      % |     Size | Samples | Caller     | Location             |
| -----: | -------: | ------: | ---------- | -------------------- |
| 100.0% | 21.3 MiB |      28 | `toString` | `node:buffer:839:46` |

##### `toString` (`node:buffer:839:46`)

|      % |     Size | Samples | Caller           | Location                                              |
| -----: | -------: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 21.3 MiB |      28 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js:8722:28` |

##### `splice` (`<unknown>`)

|     % |    Size | Samples | Caller               | Location                                               |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------ |
| 40.5% | 8.5 MiB |      17 | `getUnionTypeWorker` | `./node_modules/typescript/lib/typescript.js:62867:30` |
| 33.3% |   7 MiB |      14 | `addTypesToUnion`    | `./node_modules/typescript/lib/typescript.js:62693:27` |
| 21.4% | 4.5 MiB |       9 | `reorderCandidates`  | `./node_modules/typescript/lib/typescript.js:76487:29` |
|  2.4% | 512 KiB |       1 | `resolveCall`        | `./node_modules/typescript/lib/typescript.js:77299:23` |
|  2.4% | 512 KiB |       1 | `addTypeToUnion`     | `./node_modules/typescript/lib/typescript.js:62670:26` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.1 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.1 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Samples | Caller           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 18.1 MiB |      20 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.1 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Samples | Caller    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 18.1 MiB |      20 | `require` | `node:internal/modules/helpers:146:19` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |     Size | Samples | Caller             | Location                                              |
| -----: | -------: | ------: | ------------------ | ----------------------------------------------------- |
| 100.0% | 18.1 MiB |      20 | `typeCheckProject` | `./tsc-workload.mjs:3:33`                             |
|   5.5% |    1 MiB |       2 | `getNodeSystem`    | `./node_modules/typescript/lib/typescript.js:8460:25` |

##### `values` (`<unknown>`)

|     % |    Size | Samples | Caller                              | Location                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 17.1% |   3 MiB |       6 | `inferFromIndexTypes`               | `./node_modules/typescript/lib/typescript.js:70466:33` |
|  8.6% | 1.5 MiB |       3 | `hasMatchingArgument`               | `./node_modules/typescript/lib/typescript.js:70885:31` |
|  8.6% | 1.5 MiB |       3 | `inferFromTypes`                    | `./node_modules/typescript/lib/typescript.js:69901:28` |
|  5.7% |   1 MiB |       2 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45` |
|  5.7% |   1 MiB |       2 | `indexSignaturesRelatedTo`          | `./node_modules/typescript/lib/typescript.js:68475:38` |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Caller                                  | Location                                                |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------- |
| 66.7% |  10 MiB |      20 | `getCanonicalFileName`                  | `./node_modules/typescript/lib/typescript.js:124375:32` |
| 16.7% | 2.5 MiB |       5 | `toFileNameLowerCase`                   | `./node_modules/typescript/lib/typescript.js:3496:29`   |
| 10.0% | 1.5 MiB |       3 | `getResolvedProjectReferenceToRedirect` | `./node_modules/typescript/lib/typescript.js:124152:49` |
|  6.7% |   1 MiB |       2 | `toPath3`                               | `./node_modules/typescript/lib/typescript.js:122790:19` |

##### `slice` (`<unknown>`)

|     % |    Size | Samples | Caller                     | Location                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 30.4% | 3.5 MiB |       7 | `filterType`               | `./node_modules/typescript/lib/typescript.js:71231:22` |
| 17.4% |   2 MiB |       4 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16`  |
| 17.4% |   2 MiB |       4 | `instantiateTypes`         | `./node_modules/typescript/lib/typescript.js:64640:28` |
|  4.3% | 512 KiB |       1 | `getAdjustedTypeWithFacts` | `./node_modules/typescript/lib/typescript.js:71022:36` |
|  4.3% | 512 KiB |       1 | `removeSuffix`             | `./node_modules/typescript/lib/typescript.js:3728:22`  |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 9.87 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `readFileSync` (`node:fs:433:22`)

|     % |     Size | Samples | Caller            | Location                                              |
| ----: | -------: | ------: | ----------------- | ----------------------------------------------------- |
| 89.2% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`            |
| 10.8% |    1 MiB |       2 | `readFileWorker`  | `./node_modules/typescript/lib/typescript.js:8722:28` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |     Size | Samples | Caller       | Location                                   |
| -----: | -------: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 8.27 MiB |       1 | `loadSource` | `node:internal/modules/cjs/loader:1797:20` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `typeCheckProject` (`./tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                                |
| ----: | -------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 89.0% | 4.14 GiB |   8,450 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js:123327:34` |
| 10.5% |  503 MiB |     990 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js:122262:23` |
|  0.4% | 18.1 MiB |      20 | `require`                          | `node:internal/modules/helpers:146:19`                  |
| <0.1% |  1.5 MiB |       3 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js:40536:42`  |

##### `(anonymous)` (`./heapprofile-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                    |
| -----: | -------: | ------: | ------------------ | --------------------------- |
| 100.0% | 4.65 GiB |   9,455 | `typeCheckProject` | `./tsc-workload.mjs:3:33`   |
|  <0.1% | 1.47 MiB |       1 | `fn`               | `node:internal/util:476:14` |

##### `(anonymous)` (`<unknown>`)

|      % |     Size | Samples | Callee        | Location                    |
| -----: | -------: | ------: | ------------- | --------------------------- |
| 100.0% | 4.64 GiB |   9,437 | `(anonymous)` | `./heapprofile-run.mjs:1:1` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|     % |     Size | Samples | Callee                             | Location                                                |
| ----: | -------: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 96.5% | 4.01 GiB |   8,182 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:87322:27`  |
|  3.5% |  150 MiB |     300 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:123266:26` |
| <0.1% |    1 MiB |       2 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:123405:44` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:123365:36`)

|      % |     Size | Samples | Callee        | Location                                                |
| -----: | -------: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,482 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:123384:52`)

|      % |     Size | Samples | Callee                     | Location                                                |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,480 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:123670:34`)

|      % |     Size | Samples | Callee                                     | Location                                                |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,478 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123381:45`)

|      % |     Size | Samples | Callee                   | Location                                                |
| -----: | -------: | ------: | ------------------------ | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,474 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:123375:41`)

|      % |     Size | Samples | Callee                              | Location                                                |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,472 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45` |
|  <0.1% |  512 KiB |       1 | `getProgramDiagnostics`             | `./node_modules/typescript/lib/typescript.js:123337:33` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |     Size | Samples | Callee                          | Location                                                |
| -----: | -------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,470 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2612:17`)

|      % |     Size | Samples | Callee        | Location                                                |
| -----: | -------: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,465 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:123313:32`)

|      % |     Size | Samples | Callee    | Location                                              |
| -----: | -------: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,464 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:123327:34`)

|      % |     Size | Samples | Callee                 | Location                                                |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,461 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`)

|     % |     Size | Samples | Callee                       | Location                                               |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------------------ |
| 64.3% | 2.59 GiB |   5,273 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js:87179:30` |
| 35.5% | 1.43 GiB |   2,915 | `forEach`                    | `./node_modules/typescript/lib/typescript.js:2365:17`  |
|  0.1% |  4.5 MiB |       9 | `addLazyDiagnostic`          | `./node_modules/typescript/lib/typescript.js:87339:25` |
| <0.1% |  512 KiB |       1 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js:86845:38` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:87239:27`)

|      % |     Size | Samples | Callee                  | Location                                               |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------ |
| 100.0% | 4.02 GiB |   8,192 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:87270:33` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js:87336:47`)

|      % |     Size | Samples | Callee            | Location                                               |
| -----: | -------: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 4.02 GiB |   8,190 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js:87239:27` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js:87343:32`)

|      % |     Size | Samples | Callee                                | Location                                               |
| -----: | -------: | ------: | ------------------------------------- | ------------------------------------------------------ |
| 100.0% | 4.02 GiB |   8,187 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js:87336:47` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:87322:27`)

|      % |     Size | Samples | Callee                 | Location                                               |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 4.02 GiB |   8,186 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js:86895:36`)

|     % |     Size | Samples | Callee                      | Location                                               |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------ |
| 74.2% | 2.97 GiB |   6,055 | `checkBlock`                | `./node_modules/typescript/lib/typescript.js:83716:22` |
| 63.2% | 2.53 GiB |   5,164 | `checkVariableDeclaration`  | `./node_modules/typescript/lib/typescript.js:84101:36` |
| 63.2% | 2.53 GiB |   5,163 | `checkVariableStatement`    | `./node_modules/typescript/lib/typescript.js:84119:34` |
| 19.8% |  811 MiB |   1,608 | `checkExpressionStatement`  | `./node_modules/typescript/lib/typescript.js:84124:36` |
|  8.0% |  327 MiB |     653 | `checkTypeAliasDeclaration` | `./node_modules/typescript/lib/typescript.js:85990:37` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js:86886:30`)

|      % |  Size | Samples | Callee                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 4 GiB |   8,165 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js:86895:36` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2365:17`)

|     % |     Size | Samples | Callee               | Location                                                |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------------- |
| 88.8% |  3.2 GiB |   6,528 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30`  |
|  6.5% |  241 MiB |     480 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24` |
|  4.3% |  159 MiB |     306 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122498:30` |
|  2.6% | 97.4 MiB |     194 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35` |
|  1.5% | 54.2 MiB |     108 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124350:42` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js:81516:33`)

|     % |     Size | Samples | Callee                          | Location                                               |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 96.2% | 3.37 GiB |   6,873 | `checkCallExpression`           | `./node_modules/typescript/lib/typescript.js:78289:31` |
| 52.5% | 1.84 GiB |   3,758 | `checkObjectLiteral`            | `./node_modules/typescript/lib/typescript.js:74814:30` |
| 31.1% | 1.09 GiB |   2,227 | `checkArrayLiteral`             | `./node_modules/typescript/lib/typescript.js:74651:29` |
| 16.1% |  576 MiB |   1,148 | `checkExpressionWorker`         | `./node_modules/typescript/lib/typescript.js:81516:33` |
|  7.1% |  256 MiB |     510 | `checkPropertyAccessExpression` | `./node_modules/typescript/lib/typescript.js:75786:41` |

##### `checkCallExpression` (`./node_modules/typescript/lib/typescript.js:78289:31`)

|     % |     Size | Samples | Callee                     | Location                                               |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------------------ |
| 39.7% | 1.34 GiB |   2,725 | `getResolvedSignature`     | `./node_modules/typescript/lib/typescript.js:78173:32` |
| 35.0% | 1.18 GiB |   2,403 | `resolveSignature`         | `./node_modules/typescript/lib/typescript.js:78155:28` |
| 23.6% |  816 MiB |   1,626 | `resolveCallExpression`    | `./node_modules/typescript/lib/typescript.js:77689:33` |
|  3.2% |  111 MiB |     222 | `getReturnTypeOfSignature` | `./node_modules/typescript/lib/typescript.js:61207:36` |
|  1.1% | 37.1 MiB |      74 | `instantiateType`          | `./node_modules/typescript/lib/typescript.js:64996:27` |

##### `forEach` (`<unknown>`)

|     % |     Size | Samples | Callee              | Location                                               |
| ----: | -------: | ------: | ------------------- | ------------------------------------------------------ |
| 99.4% | 2.59 GiB |   5,277 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js:87186:29` |
|  0.9% | 24.5 MiB |      49 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52487:21` |
|  0.4% |   10 MiB |      20 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52182:20` |
|  0.1% | 2.05 MiB |       4 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:50184:20` |
| <0.1% |  560 KiB |       1 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:59752:23` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Callee                   | Location                                               |
| ----: | -------: | ------: | ------------------------ | ------------------------------------------------------ |
| 43.7% | 36.5 MiB |      73 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js:69709:35` |

##### `Map` (`<unknown>`)

|    % |     Size | Samples | Callee | Location    |
| ---: | -------: | ------: | ------ | ----------- |
| 5.8% |  4.5 MiB |       9 | `next` | `<unknown>` |
| 2.6% | 2.05 MiB |       4 | `set`  | `<unknown>` |

##### `toString` (`node:buffer:839:46`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 21.3 MiB |      28 | `slice` | `node:buffer:640:12` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Samples | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 54.4% | 9.87 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
| 45.6% | 8.27 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.1 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Samples | Callee                 | Location                                   |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 18.1 MiB |      20 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   5.5% |    1 MiB |       2 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.1 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 18.1 MiB |      20 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.1 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Callee        | Location                                              |
| ----: | ------: | ------: | ------------- | ----------------------------------------------------- |
| 36.7% | 5.5 MiB |      11 | `toLowerCase` | `./node_modules/typescript/lib/typescript.js:3492:21` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Samples | Callee        | Location                                          |
| ----: | -------: | ------: | ------------- | ------------------------------------------------- |
| 53.5% | 5.27 MiB |      10 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`        |
| 46.5% | 4.59 MiB |       9 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |

##### `readFileSync` (`node:fs:433:22`)

|    % |    Size | Samples | Callee        | Location         |
| ---: | ------: | ------: | ------------- | ---------------- |
| 5.4% | 514 KiB |       1 | `tryStatSync` | `node:fs:389:21` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |     Size | Samples | Callee         | Location         |
| -----: | -------: | ------: | -------------- | ---------------- |
| 100.0% | 8.27 MiB |       1 | `readFileSync` | `node:fs:433:22` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./heapprofile-run.mjs:1:1`) ← `(anonymous)`

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.6% |  126 MiB |     251 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.7% | 83.9 MiB |     167 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                               |
| 1.4% | 65.8 MiB |     131 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) |
| 1.2% | 59.2 MiB |     118 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                  |
| 1.0% | 49.7 MiB |      99 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.9% | 45.2 MiB |      90 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.9% | 43.2 MiB |      86 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `inferFromSignature` (70456:32) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                      |
| 0.8% | 39.2 MiB |      78 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% | 37.1 MiB |      74 | `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:37231:37`) ← `(anonymous)` (31696:71) ← `mapDefined` (2683:20) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseTypeMember` (33536:27) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseStatement` (35924:26) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.7% | 35.6 MiB |      71 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.7% | 33.6 MiB |      67 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% | 32.1 MiB |      64 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% | 25.6 MiB |      51 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% | 25.1 MiB |      50 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% | 24.6 MiB |      49 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 24.1 MiB |      48 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 23.6 MiB |      47 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% | 23.1 MiB |      46 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                             |
| 0.5% | 22.6 MiB |      45 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% | 21.6 MiB |      43 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
