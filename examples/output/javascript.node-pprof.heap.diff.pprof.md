# Heap profile diff

Allocated 741 MiB → 299 MiB (-442.016 MiB, -59.7%) over 6,116,491 → 2,313,788 objects (127 B → 135 B per object).

| Category         |  Change |        Delta |             % |                Size |               Objects |
| ---------------- | ------: | -----------: | ------------: | ------------------: | --------------------: |
| Third-party      |  -60.0% | -353.963 MiB | 79.6% → 78.8% |   590 MiB → 236 MiB | 5,327,172 → 2,068,837 |
| Standard library |  -58.8% |  -87.537 MiB | 20.1% → 20.5% |  149 MiB → 61.3 MiB |     782,764 → 244,950 |
| Native           |   -0.8% |  -16.491 KiB |   0.3% → 0.7% | 1.98 MiB → 1.96 MiB |                     1 |
| Ours             | removed | -512.031 KiB |   0.1% → 0.0% |       512 KiB → 0 B |             6,554 → 0 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.xkrVDK/profiler-md-input-generation.tORfp3/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 739 MiB → 297 MiB (99.7% → 99.3%) next
│   ├── 726 MiB → 291 MiB (98.0% → 97.3%) (anonymous) at ./datadog-pprof-heap.mjs:1:1
│   │   └── 725 MiB → 289 MiB (97.8% → 96.8%) typeCheckProject at ./tsc-workload.mjs
│   │       ├── … 470 MiB → 193 MiB (63.4% → 64.5%) (anonymous) at ./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37
│   │       │   ├── … 386 MiB → 163 MiB (52.1% → 54.4%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js
│   │       │   │   ├── 224 MiB → 77.2 MiB (30.3% → 25.8%) checkDeferredNodes
│   │       │   │   │   └── 224 MiB → 77.2 MiB (30.3% → 25.8%) forEach
│   │       │   │   │       ├── 217 MiB → 74.2 MiB (29.2% → 24.8%) checkDeferredNode at ./node_modules/typescript/lib/typescript.js
│   │       │   │   │       │   ├── 196 MiB → 52.9 MiB (26.4% → 17.7%) checkSourceElementWorker
│   │       │   │   │       │   │   ├── … 43.3 MiB → 13.6 MiB (5.8% → 4.5%) checkTypeReferenceNode at ./node_modules/typescript/lib/typescript.js
│   │       │   │   │       │   │   │   ├── 28.3 MiB → 9.26 MiB (3.8% → 3.1%) (anonymous) at 82238:27 → 83533:27
│   │       │   │   │       │   │   │   │   ├── … 27.8 MiB → 0 B (3.7% → 0.0%, self 0.7% → 0.3% globally) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js
│   │       │   │   │       │   │   │   │   │   ├── 22 MiB → 0 B (3.0% → 0.0%) structuredTypeRelatedTo …
│   │       │   │   │       │   │   │   │   │   └── 5.25 MiB → 0 B (0.7% → 0.0%) resetMaybeStack
│   │       │   │   │       │   │   │   │   │       └── 5.25 MiB → 0 B (0.7% → 0.0%, self 8.7% → 9.1% globally) set
│   │       │   │   │       │   │   │   │   └── 0 B → 9.26 MiB (0.0% → 3.1%) checkTypeArgumentConstraints …
│   │       │   │   │       │   │   │   └── 15 MiB → 4.3 MiB (2.0% → 1.4%) 2 more callees, led by (2.0% → 1.4%) getTypeFromTypeNodeWorker
│   │       │   │   │       │   │   ├── … 58.5 MiB → 0 B (7.9% → 0.0%) checkExpression at ./node_modules/typescript/lib/typescript.js
│   │       │   │   │       │   │   │   └── … 58.5 MiB → 0 B (7.9% → 0.0%) checkExpressionWorker at ./node_modules/typescript/lib/typescript.js
│   │       │   │   │       │   │   │       ├── 27.2 MiB → 0 B (3.7% → 0.0%, self 0.7% → 0.0% globally) checkPropertyAccessExpressionOrQualifiedName
│   │       │   │   │       │   │   │       │   └── 26.2 MiB → 0 B (3.5% → 0.0%) getPropertyOfType
│   │       │   │   │       │   │   │       │       ├── 20.5 MiB → 0 B (2.8% → 0.0%) getPropertiesOfUnionOrIntersectionType
│   │       │   │   │       │   │   │       │       │   ├── … 12.5 MiB → 0 B (1.7% → 0.0%, self 13.2% → 1.8% globally) instantiateSymbol at ./node_modules/typescript/lib/typescript.js
│   │       │   │   │       │   │   │       │       │   └── 3.01 MiB → 0 B (0.4% → 0.0%) set
│   │       │   │   │       │   │   │       │       └── 5.66 MiB → 0 B (0.8% → 0.0%) resolveStructuredTypeMembers …
│   │       │   │   │       │   │   │       └── 30.8 MiB → 0 B (4.2% → 0.0%) 5 more callees, led by (3.8% → 0.0%) checkCallExpression at ./node_modules/typescript/lib/typescript.js
│   │       │   │   │       │   │   └── 94.1 MiB → 39.3 MiB (12.7% → 13.2%) 4 more callees, led by (11.0% → 6.9%) checkVariableDeclaration at ./node_modules/typescript/lib/typescript.js
│   │       │   │   │       │   └── 20.8 MiB → 21.3 MiB (2.8% → 7.1%) 4 more callees, led by (0.3% → 5.1%) checkFunctionExpressionOrObjectLiteralMethodDeferred
│   │       │   │   │       └── … 7 MiB → 2.5 MiB (0.9% → 0.8%, self 1.8% globally) (anonymous) at ./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21
│   │       │   │   └── 161 MiB → 85 MiB (21.8% → 28.4%) forEach
│   │       │   │       ├── … 159 MiB → 82.5 MiB (21.4% → 27.6%) checkSourceElement at ./node_modules/typescript/lib/typescript.js
│   │       │   │       │   └── … 158 MiB → 82.5 MiB (21.4% → 27.6%) checkSourceElementWorker at ./node_modules/typescript/lib/typescript.js
│   │       │   │       │       └── 158 MiB → 82.5 MiB (21.4% → 27.6%) 17 more callees, led by (9.0% → 9.8%) checkTypeReferenceNode at ./node_modules/typescript/lib/typescript.js
│   │       │   │       └── 2.52 MiB (0.3% → 0.8%) 4 more callees, led by (0.1% → 0.8%) checkParameter at ./node_modules/typescript/lib/typescript.js
│   │       │   └── 83.5 MiB → 30.1 MiB (11.3% → 10.1%) getTypeChecker …
│   │       ├── 241 MiB → 81 MiB (32.5% → 27.1%) createProgram at ./node_modules/typescript/lib/typescript.js
│   │       │   └── 241 MiB → 81 MiB (32.5% → 27.1%) 3 more callees, led by (26.0% → 21.5%) forEach
│   │       └── 13.9 MiB → 15.7 MiB (1.9% → 5.2%) 2 more callees, led by (1.7% → 5.1%) require at node:internal/modules/helpers
│   └── … 11.6 MiB → 6.01 MiB (1.6% → 2.0%) getUnmatchedProperties at ./node_modules/typescript/lib/typescript.js …
└── 1.98 MiB → 1.96 MiB (0.3% → 0.7%) (external)
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |            % |                Size |          Objects | Function                          | Location                                            |
| -------: | -----------: | -----------: | ------------------: | ---------------: | --------------------------------- | --------------------------------------------------- |
| +1475.0% |  +29.504 MiB | 0.3% → 10.5% |    2 MiB → 31.5 MiB | 10,084 → 158,824 | `createInstantiatedSymbolTable`   | `./node_modules/typescript/lib/typescript.js`       |
|   +45.4% |   +2.503 MiB |  0.7% → 2.7% | 5.52 MiB → 8.02 MiB |    3,331 → 7,122 | `checkTypeRelatedTo`              | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +2 MiB |  0.0% → 0.7% |         0 B → 2 MiB |       0 → 10,924 | `getNodeLinks`                    | `./node_modules/typescript/lib/typescript.js`       |
|      new |   +1.502 MiB |  0.0% → 0.5% |       0 B → 1.5 MiB |       0 → 27,355 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js`       |
|      new |     +1.5 MiB |  0.0% → 0.5% |       0 B → 1.5 MiB |       0 → 16,386 | `diag`                            | `./node_modules/typescript/lib/typescript.js`       |
|  +212.6% |   +1.062 MiB |  0.1% → 0.5% |  512 KiB → 1.56 MiB |   9,363 → 17,562 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:16:15` |
|      new |    +1.01 MiB |  0.0% → 0.3% |      0 B → 1.01 MiB |       0 → 13,141 | `isDeeplyNestedType`              | `./node_modules/typescript/lib/typescript.js`       |
|      new |   +1.001 MiB |  0.0% → 0.3% |         0 B → 1 MiB |          0 → 452 | `tryStatSync`                     | `node:fs`                                           |
|      new |       +1 MiB |  0.0% → 0.3% |         0 B → 1 MiB |        0 → 5,729 | `bindAnonymousDeclaration`        | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +1 MiB |  0.0% → 0.3% |         0 B → 1 MiB |        0 → 6,242 | `parseTypeParameter`              | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +1 MiB |  0.0% → 0.3% |         0 B → 1 MiB |       0 → 19,116 | `makeCompositeTypeMapper`         | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +1 MiB |  0.0% → 0.3% |         0 B → 1 MiB |        0 → 6,242 | `createJSDocComment`              | `./node_modules/typescript/lib/typescript.js`       |
|      new | +768.093 KiB |  0.0% → 0.3% |       0 B → 768 KiB |            0 → 2 | `getDeclaredTypeOfTypeAlias`      | `./node_modules/typescript/lib/typescript.js`       |
|      new |  +576.14 KiB |  0.0% → 0.2% |       0 B → 576 KiB |            0 → 3 | `getTypeFromTypeReference`        | `./node_modules/typescript/lib/typescript.js`       |
|      new | +563.406 KiB |  0.0% → 0.2% |       0 B → 563 KiB |           0 → 11 | `filterType`                      | `./node_modules/typescript/lib/typescript.js`       |
|      new | +521.156 KiB |  0.0% → 0.2% |       0 B → 521 KiB |           0 → 51 | `isBinaryExpression`              | `./node_modules/typescript/lib/typescript.js`       |
|      new |  +519.25 KiB |  0.0% → 0.2% |       0 B → 519 KiB |           0 → 67 | `getSourceFileByPath`             | `./node_modules/typescript/lib/typescript.js`       |
|      new | +519.187 KiB |  0.0% → 0.2% |       0 B → 519 KiB |           0 → 71 | `getObjectFlags`                  | `./node_modules/typescript/lib/typescript.js`       |
|      new | +518.406 KiB |  0.0% → 0.2% |       0 B → 518 KiB |           0 → 53 | `token`                           | `./node_modules/typescript/lib/typescript.js`       |
|      new | +517.734 KiB |  0.0% → 0.2% |       0 B → 518 KiB |           0 → 47 | `resolveStructuredTypeMembers`    | `./node_modules/typescript/lib/typescript.js`       |

##### Third-party

|   Change |        Delta |            % |                Size |          Objects | Function                          | Location                                            |
| -------: | -----------: | -----------: | ------------------: | ---------------: | --------------------------------- | --------------------------------------------------- |
| +1475.0% |  +29.504 MiB | 0.3% → 10.5% |    2 MiB → 31.5 MiB | 10,084 → 158,824 | `createInstantiatedSymbolTable`   | `./node_modules/typescript/lib/typescript.js`       |
|   +45.4% |   +2.503 MiB |  0.7% → 2.7% | 5.52 MiB → 8.02 MiB |    3,331 → 7,122 | `checkTypeRelatedTo`              | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +2 MiB |  0.0% → 0.7% |         0 B → 2 MiB |       0 → 10,924 | `getNodeLinks`                    | `./node_modules/typescript/lib/typescript.js`       |
|      new |   +1.502 MiB |  0.0% → 0.5% |       0 B → 1.5 MiB |       0 → 27,355 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js`       |
|      new |     +1.5 MiB |  0.0% → 0.5% |       0 B → 1.5 MiB |       0 → 16,386 | `diag`                            | `./node_modules/typescript/lib/typescript.js`       |
|  +212.6% |   +1.062 MiB |  0.1% → 0.5% |  512 KiB → 1.56 MiB |   9,363 → 17,562 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:16:15` |
|      new |    +1.01 MiB |  0.0% → 0.3% |      0 B → 1.01 MiB |       0 → 13,141 | `isDeeplyNestedType`              | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +1 MiB |  0.0% → 0.3% |         0 B → 1 MiB |        0 → 5,729 | `bindAnonymousDeclaration`        | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +1 MiB |  0.0% → 0.3% |         0 B → 1 MiB |        0 → 6,242 | `parseTypeParameter`              | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +1 MiB |  0.0% → 0.3% |         0 B → 1 MiB |       0 → 19,116 | `makeCompositeTypeMapper`         | `./node_modules/typescript/lib/typescript.js`       |
|      new |       +1 MiB |  0.0% → 0.3% |         0 B → 1 MiB |        0 → 6,242 | `createJSDocComment`              | `./node_modules/typescript/lib/typescript.js`       |
|      new | +768.093 KiB |  0.0% → 0.3% |       0 B → 768 KiB |            0 → 2 | `getDeclaredTypeOfTypeAlias`      | `./node_modules/typescript/lib/typescript.js`       |
|      new |  +576.14 KiB |  0.0% → 0.2% |       0 B → 576 KiB |            0 → 3 | `getTypeFromTypeReference`        | `./node_modules/typescript/lib/typescript.js`       |
|      new | +563.406 KiB |  0.0% → 0.2% |       0 B → 563 KiB |           0 → 11 | `filterType`                      | `./node_modules/typescript/lib/typescript.js`       |
|      new | +521.156 KiB |  0.0% → 0.2% |       0 B → 521 KiB |           0 → 51 | `isBinaryExpression`              | `./node_modules/typescript/lib/typescript.js`       |
|      new |  +519.25 KiB |  0.0% → 0.2% |       0 B → 519 KiB |           0 → 67 | `getSourceFileByPath`             | `./node_modules/typescript/lib/typescript.js`       |
|      new | +519.187 KiB |  0.0% → 0.2% |       0 B → 519 KiB |           0 → 71 | `getObjectFlags`                  | `./node_modules/typescript/lib/typescript.js`       |
|      new | +518.406 KiB |  0.0% → 0.2% |       0 B → 518 KiB |           0 → 53 | `token`                           | `./node_modules/typescript/lib/typescript.js`       |
|      new | +517.734 KiB |  0.0% → 0.2% |       0 B → 518 KiB |           0 → 47 | `resolveStructuredTypeMembers`    | `./node_modules/typescript/lib/typescript.js`       |
|      new | +517.343 KiB |  0.0% → 0.2% |       0 B → 517 KiB |           0 → 55 | `getTypeOfFuncClassEnumModule`    | `./node_modules/typescript/lib/typescript.js`       |

##### Standard library

| Change |        Delta |           % |                Size |         Objects | Function       | Location                           |
| -----: | -----------: | ----------: | ------------------: | --------------: | -------------- | ---------------------------------- |
|    new |   +1.001 MiB | 0.0% → 0.3% |         0 B → 1 MiB |         0 → 452 | `tryStatSync`  | `node:fs`                          |
|    new | +515.625 KiB | 0.0% → 0.2% |       0 B → 516 KiB |         0 → 132 | `replace`      | `<unknown>`                        |
|    new | +513.046 KiB | 0.0% → 0.2% |       0 B → 513 KiB |         0 → 398 | `delete`       | `<unknown>`                        |
| +97.8% | +510.585 KiB | 0.1% → 0.3% |  522 KiB → 1.01 MiB |      52 → 2,635 | `add`          | `<unknown>`                        |
|  +1.3% | +110.078 KiB | 1.1% → 2.8% | 8.27 MiB → 8.37 MiB |               1 | `readFileSync` | `node:fs`                          |
|  +1.2% |  +20.312 KiB | 0.2% → 0.6% | 1.63 MiB → 1.65 MiB | 24,582 → 20,245 | `wrapSafe`     | `node:internal/modules/cjs/loader` |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |            % |                Size |           Objects | Function                        | Location                                                          |
| ------: | ----------: | -----------: | ------------------: | ----------------: | ------------------------------- | ----------------------------------------------------------------- |
|  -94.4% | -92.014 MiB | 13.2% → 1.8% |  97.5 MiB → 5.5 MiB |  491,599 → 27,731 | `instantiateSymbol`             | `./node_modules/typescript/lib/typescript.js`                     |
|  -57.5% |   -36.9 MiB |  8.7% → 9.1% | 64.2 MiB → 27.3 MiB |   32,522 → 10,379 | `set`                           | `<unknown>`                                                       |
|  -66.0% | -32.005 MiB |  6.5% → 5.5% | 48.5 MiB → 16.5 MiB | 515,734 → 165,589 | `Map`                           | `<unknown>`                                                       |
|  -93.3% | -21.003 MiB |  3.0% → 0.5% |  22.5 MiB → 1.5 MiB |  196,644 → 13,110 | `createBaseIdentifierNode`      | `./node_modules/typescript/lib/typescript.js`                     |
|  -64.5% | -20.003 MiB |  4.2% → 3.7% |     31 MiB → 11 MiB | 299,635 → 112,363 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js`                     |
| removed | -19.002 MiB |  2.6% → 0.0% |        19 MiB → 0 B |       118,602 → 0 | `parseTypeReference`            | `./node_modules/typescript/lib/typescript.js`                     |
|  -71.2% |   -18.5 MiB |  3.5% → 2.5% |    26 MiB → 7.5 MiB |  200,987 → 57,992 | `instantiateAnonymousType`      | `./node_modules/typescript/lib/typescript.js`                     |
|  -46.3% | -15.512 MiB |  4.5% → 6.0% |   33.5 MiB → 18 MiB | 206,024 → 112,363 | `createBaseNode`                | `./node_modules/typescript/lib/typescript.js`                     |
|  -57.9% | -11.002 MiB |  2.6% → 2.7% |      19 MiB → 8 MiB |  136,532 → 70,851 | `instantiateSignature`          | `./node_modules/typescript/lib/typescript.js`                     |
|  -78.6% | -11.001 MiB |  1.9% → 1.0% |      14 MiB → 3 MiB |   87,394 → 18,727 | `parseNonArrayType`             | `./node_modules/typescript/lib/typescript.js`                     |
|  -76.0% |    -9.5 MiB |  1.7% → 1.0% |    12.5 MiB → 3 MiB |  148,952 → 35,748 | `createBaseTokenNode`           | `./node_modules/typescript/lib/typescript.js`                     |
|  -62.1% |  -9.328 MiB |  2.0% → 1.9% |    15 MiB → 5.7 MiB |            10 → 4 | `getResolvedSymbol`             | `./node_modules/typescript/lib/typescript.js`                     |
|  -65.4% |  -8.501 MiB |  1.8% → 1.5% |    13 MiB → 4.5 MiB |  175,702 → 93,617 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js`                     |
|  -89.5% |    -8.5 MiB |  1.3% → 0.3% |     9.5 MiB → 1 MiB |  115,686 → 32,770 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js`                     |
| removed |   -8.26 MiB |  1.1% → 0.0% |      8.26 MiB → 0 B |           506 → 0 | `slice`                         | `node:buffer`                                                     |
|  -60.0% |  -7.502 MiB |         1.7% |    12.5 MiB → 5 MiB | 307,984 → 120,158 | `parseDelimitedList`            | `./node_modules/typescript/lib/typescript.js`                     |
|  -57.7% |  -7.499 MiB |         1.8% |   13 MiB → 5.51 MiB |  124,444 → 38,834 | `(anonymous)`                   | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
|  -66.7% |  -7.001 MiB |  1.4% → 1.2% |  10.5 MiB → 3.5 MiB |   97,333 → 36,756 | `instantiateTypes`              | `./node_modules/typescript/lib/typescript.js`                     |
|  -87.5% |  -7.001 MiB |  1.1% → 0.3% |       8 MiB → 1 MiB |    69,916 → 8,740 | `createIdentifier`              | `./node_modules/typescript/lib/typescript.js`                     |
|  -47.3% |  -6.543 MiB |  1.9% → 2.4% | 13.8 MiB → 7.28 MiB |         647 → 806 | `readFile`                      | `./node_modules/typescript/lib/typescript.js`                     |

##### Third-party

|  Change |       Delta |            % |                Size |           Objects | Function                                       | Location                                                          |
| ------: | ----------: | -----------: | ------------------: | ----------------: | ---------------------------------------------- | ----------------------------------------------------------------- |
|  -94.4% | -92.014 MiB | 13.2% → 1.8% |  97.5 MiB → 5.5 MiB |  491,599 → 27,731 | `instantiateSymbol`                            | `./node_modules/typescript/lib/typescript.js`                     |
|  -93.3% | -21.003 MiB |  3.0% → 0.5% |  22.5 MiB → 1.5 MiB |  196,644 → 13,110 | `createBaseIdentifierNode`                     | `./node_modules/typescript/lib/typescript.js`                     |
|  -64.5% | -20.003 MiB |  4.2% → 3.7% |     31 MiB → 11 MiB | 299,635 → 112,363 | `declareSymbol`                                | `./node_modules/typescript/lib/typescript.js`                     |
| removed | -19.002 MiB |  2.6% → 0.0% |        19 MiB → 0 B |       118,602 → 0 | `parseTypeReference`                           | `./node_modules/typescript/lib/typescript.js`                     |
|  -71.2% |   -18.5 MiB |  3.5% → 2.5% |    26 MiB → 7.5 MiB |  200,987 → 57,992 | `instantiateAnonymousType`                     | `./node_modules/typescript/lib/typescript.js`                     |
|  -46.3% | -15.512 MiB |  4.5% → 6.0% |   33.5 MiB → 18 MiB | 206,024 → 112,363 | `createBaseNode`                               | `./node_modules/typescript/lib/typescript.js`                     |
|  -57.9% | -11.002 MiB |  2.6% → 2.7% |      19 MiB → 8 MiB |  136,532 → 70,851 | `instantiateSignature`                         | `./node_modules/typescript/lib/typescript.js`                     |
|  -78.6% | -11.001 MiB |  1.9% → 1.0% |      14 MiB → 3 MiB |   87,394 → 18,727 | `parseNonArrayType`                            | `./node_modules/typescript/lib/typescript.js`                     |
|  -76.0% |    -9.5 MiB |  1.7% → 1.0% |    12.5 MiB → 3 MiB |  148,952 → 35,748 | `createBaseTokenNode`                          | `./node_modules/typescript/lib/typescript.js`                     |
|  -62.1% |  -9.328 MiB |  2.0% → 1.9% |    15 MiB → 5.7 MiB |            10 → 4 | `getResolvedSymbol`                            | `./node_modules/typescript/lib/typescript.js`                     |
|  -65.4% |  -8.501 MiB |  1.8% → 1.5% |    13 MiB → 4.5 MiB |  175,702 → 93,617 | `getObjectTypeInstantiation`                   | `./node_modules/typescript/lib/typescript.js`                     |
|  -89.5% |    -8.5 MiB |  1.3% → 0.3% |     9.5 MiB → 1 MiB |  115,686 → 32,770 | `createNormalizedTypeReference`                | `./node_modules/typescript/lib/typescript.js`                     |
|  -60.0% |  -7.502 MiB |         1.7% |    12.5 MiB → 5 MiB | 307,984 → 120,158 | `parseDelimitedList`                           | `./node_modules/typescript/lib/typescript.js`                     |
|  -57.7% |  -7.499 MiB |         1.8% |   13 MiB → 5.51 MiB |  124,444 → 38,834 | `(anonymous)`                                  | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
|  -66.7% |  -7.001 MiB |  1.4% → 1.2% |  10.5 MiB → 3.5 MiB |   97,333 → 36,756 | `instantiateTypes`                             | `./node_modules/typescript/lib/typescript.js`                     |
|  -87.5% |  -7.001 MiB |  1.1% → 0.3% |       8 MiB → 1 MiB |    69,916 → 8,740 | `createIdentifier`                             | `./node_modules/typescript/lib/typescript.js`                     |
|  -47.3% |  -6.543 MiB |  1.9% → 2.4% | 13.8 MiB → 7.28 MiB |         647 → 806 | `readFile`                                     | `./node_modules/typescript/lib/typescript.js`                     |
| removed |    -5.5 MiB |  0.7% → 0.0% |       5.5 MiB → 0 B |        21,849 → 0 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js`                     |
|  -62.5% |      -5 MiB |  1.1% → 1.0% |       8 MiB → 3 MiB |   49,940 → 18,727 | `parsePropertyOrMethodSignature`               | `./node_modules/typescript/lib/typescript.js`                     |
|  -71.4% |      -5 MiB |  0.9% → 0.7% |       7 MiB → 2 MiB |  166,038 → 76,462 | `createNodeArray`                              | `./node_modules/typescript/lib/typescript.js`                     |

##### Standard library

|  Change |        Delta |           % |                Size |           Objects | Function     | Location      |
| ------: | -----------: | ----------: | ------------------: | ----------------: | ------------ | ------------- |
|  -57.5% |    -36.9 MiB | 8.7% → 9.1% | 64.2 MiB → 27.3 MiB |   32,522 → 10,379 | `set`        | `<unknown>`   |
|  -66.0% |  -32.005 MiB | 6.5% → 5.5% | 48.5 MiB → 16.5 MiB | 515,734 → 165,589 | `Map`        | `<unknown>`   |
| removed |    -8.26 MiB | 1.1% → 0.0% |      8.26 MiB → 0 B |           506 → 0 | `slice`      | `node:buffer` |
|  -83.3% |   -5.001 MiB | 0.8% → 0.3% |       6 MiB → 1 MiB |    31,074 → 5,278 | `join`       | `<unknown>`   |
|  -62.5% |     -2.5 MiB |        0.5% |     4 MiB → 1.5 MiB |   27,600 → 10,350 | `splice`     | `<unknown>`   |
| removed |       -2 MiB | 0.3% → 0.0% |         2 MiB → 0 B |        71,001 → 0 | `slice`      | `<unknown>`   |
| removed |   -1.001 MiB | 0.1% → 0.0% |         1 MiB → 0 B |           977 → 0 | `next`       | `<unknown>`   |
| removed |       -1 MiB | 0.1% → 0.0% |         1 MiB → 0 B |        32,770 → 0 | `trimEnd`    | `<unknown>`   |
|  -25.0% | -512.109 KiB | 0.3% → 0.5% |     2 MiB → 1.5 MiB |    11,095 → 7,645 | `push`       | `<unknown>`   |
| removed | -512.039 KiB | 0.1% → 0.0% |       512 KiB → 0 B |         9,363 → 0 | `split`      | `<unknown>`   |
| removed | -512.015 KiB | 0.1% → 0.0% |       512 KiB → 0 B |         3,641 → 0 | `charCodeAt` | `<unknown>`   |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

|   Change |       Delta |      % |             Size |          Objects | Location                                                    |
| -------: | ----------: | -----: | ---------------: | ---------------: | ----------------------------------------------------------- |
| +1475.0% | +29.504 MiB | 100.0% | 2 MiB → 31.5 MiB | 10,084 → 158,824 | `./node_modules/typescript/lib/typescript.js:59020 → 60275` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |                Size |       Objects | Location                                                    |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------------------------------------------------------- |
| +45.4% | +2.503 MiB | 100.0% | 5.52 MiB → 8.02 MiB | 3,331 → 7,122 | `./node_modules/typescript/lib/typescript.js:66185 → 67445` |

##### `getNodeLinks` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | ---------: | --------------------------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB | 0 → 10,924 | `./node_modules/typescript/lib/typescript.js:51499` |

##### `getIndexedAccessTypeOrUndefined` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |             % |          Size |    Objects | Location                                            |
| -----: | ---------: | ------------: | ------------: | ---------: | --------------------------------------------------- |
|    new | +1.502 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB | 0 → 27,355 | `./node_modules/typescript/lib/typescript.js:65149` |

##### `diag` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |          Size |    Objects | Location                                           |
| -----: | -------: | ------------: | ------------: | ---------: | -------------------------------------------------- |
|    new | +1.5 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB | 0 → 16,386 | `./node_modules/typescript/lib/typescript.js:9365` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`)

|  Change |      Delta |      % |               Size |        Objects | Location                                         |
| ------: | ---------: | -----: | -----------------: | -------------: | ------------------------------------------------ |
| +212.6% | +1.062 MiB | 100.0% | 512 KiB → 1.56 MiB | 9,363 → 17,562 | `./node_modules/typescript/lib/typescript.js:16` |

##### `isDeeplyNestedType` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |             % |           Size |    Objects | Location                                            |
| -----: | --------: | ------------: | -------------: | ---------: | --------------------------------------------------- |
|    new | +1.01 MiB | 0.0% → 100.0% | 0 B → 1.01 MiB | 0 → 13,141 | `./node_modules/typescript/lib/typescript.js:70031` |

##### `tryStatSync` (`node:fs`)

| Change |      Delta |             % |        Size | Objects | Location      |
| -----: | ---------: | ------------: | ----------: | ------: | ------------- |
|    new | +1.001 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 452 | `node:fs:389` |

##### `bindAnonymousDeclaration` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | --------: | --------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 5,729 | `./node_modules/typescript/lib/typescript.js:47518` |

##### `parseTypeParameter` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | --------: | --------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 6,242 | `./node_modules/typescript/lib/typescript.js:34340` |

##### `makeCompositeTypeMapper` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | ---------: | --------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 19,116 | `./node_modules/typescript/lib/typescript.js:65951` |

##### `createJSDocComment` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | --------: | --------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 6,242 | `./node_modules/typescript/lib/typescript.js:27341` |

##### `getDeclaredTypeOfTypeAlias` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +768.093 KiB | 0.0% → 100.0% | 0 B → 768 KiB |   0 → 2 | `./node_modules/typescript/lib/typescript.js:60102` |

##### `getTypeFromTypeReference` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |          Size | Objects | Location                                            |
| -----: | ----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +576.14 KiB | 0.0% → 100.0% | 0 B → 576 KiB |   0 → 3 | `./node_modules/typescript/lib/typescript.js:63179` |

##### `filterType` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +563.406 KiB | 0.0% → 100.0% | 0 B → 563 KiB |  0 → 11 | `./node_modules/typescript/lib/typescript.js:72514` |

##### `isBinaryExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +521.156 KiB | 0.0% → 100.0% | 0 B → 521 KiB |  0 → 51 | `./node_modules/typescript/lib/typescript.js:30242` |

##### `getSourceFileByPath` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |          Size | Objects | Location                                             |
| -----: | ----------: | ------------: | ------------: | ------: | ---------------------------------------------------- |
|    new | +519.25 KiB | 0.0% → 100.0% | 0 B → 519 KiB |  0 → 67 | `./node_modules/typescript/lib/typescript.js:124892` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +519.187 KiB | 0.0% → 100.0% | 0 B → 519 KiB |  0 → 71 | `./node_modules/typescript/lib/typescript.js:21225` |

##### `token` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +518.406 KiB | 0.0% → 100.0% | 0 B → 518 KiB |  0 → 53 | `./node_modules/typescript/lib/typescript.js:33005` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +517.734 KiB | 0.0% → 100.0% | 0 B → 518 KiB |  0 → 47 | `./node_modules/typescript/lib/typescript.js:61345` |

##### `getTypeOfFuncClassEnumModule` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +517.343 KiB | 0.0% → 100.0% | 0 B → 517 KiB |  0 → 55 | `./node_modules/typescript/lib/typescript.js:59529` |

##### `readFileSync` (`node:fs`)

| Change |        Delta |      % |                Size | Objects | Location      |
| -----: | -----------: | -----: | ------------------: | ------: | ------------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `node:fs:433` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

| Change |       Delta |      % |                Size |         Objects | Location                                |
| -----: | ----------: | -----: | ------------------: | --------------: | --------------------------------------- |
|  +1.2% | +20.312 KiB | 100.0% | 1.63 MiB → 1.65 MiB | 24,582 → 20,245 | `node:internal/modules/cjs/loader:1671` |

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |               Size |          Objects | Location                                                    |
| -----: | ----------: | -----: | -----------------: | ---------------: | ----------------------------------------------------------- |
| -94.4% | -92.014 MiB | 100.0% | 97.5 MiB → 5.5 MiB | 491,599 → 27,731 | `./node_modules/typescript/lib/typescript.js:64758 → 66013` |

##### `createBaseIdentifierNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |               Size |          Objects | Location                                                    |
| -----: | ----------: | -----: | -----------------: | ---------------: | ----------------------------------------------------------- |
| -93.3% | -21.003 MiB | 100.0% | 22.5 MiB → 1.5 MiB | 196,644 → 13,110 | `./node_modules/typescript/lib/typescript.js:31395 → 32447` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |            Size |           Objects | Location                                                    |
| -----: | ----------: | -----: | --------------: | ----------------: | ----------------------------------------------------------- |
| -64.5% | -20.003 MiB | 100.0% | 31 MiB → 11 MiB | 299,635 → 112,363 | `./node_modules/typescript/lib/typescript.js:44997 → 46190` |

##### `parseTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |         Size |     Objects | Location                                            |
| ------: | ----------: | ------------: | -----------: | ----------: | --------------------------------------------------- |
| removed | -19.002 MiB | 100.0% → 0.0% | 19 MiB → 0 B | 118,602 → 0 | `./node_modules/typescript/lib/typescript.js:33132` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |             Size |          Objects | Location                                                    |
| -----: | --------: | -----: | ---------------: | ---------------: | ----------------------------------------------------------- |
| -71.2% | -18.5 MiB | 100.0% | 26 MiB → 7.5 MiB | 200,987 → 57,992 | `./node_modules/typescript/lib/typescript.js:64955 → 66215` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |              Size |           Objects | Location                                                    |
| -----: | ----------: | -----: | ----------------: | ----------------: | ----------------------------------------------------------- |
| -46.3% | -15.512 MiB | 100.0% | 33.5 MiB → 18 MiB | 206,024 → 112,363 | `./node_modules/typescript/lib/typescript.js:31416 → 32468` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |           Size |          Objects | Location                                                    |
| -----: | ----------: | -----: | -------------: | ---------------: | ----------------------------------------------------------- |
| -57.9% | -11.002 MiB | 100.0% | 19 MiB → 8 MiB | 136,532 → 70,851 | `./node_modules/typescript/lib/typescript.js:64733 → 65988` |

##### `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |           Size |         Objects | Location                                                    |
| -----: | ----------: | -----: | -------------: | --------------: | ----------------------------------------------------------- |
| -78.6% | -11.001 MiB | 100.0% | 14 MiB → 3 MiB | 87,394 → 18,727 | `./node_modules/typescript/lib/typescript.js:33781 → 34836` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Size |          Objects | Location                                                    |
| -----: | -------: | -----: | ---------------: | ---------------: | ----------------------------------------------------------- |
| -76.0% | -9.5 MiB | 100.0% | 12.5 MiB → 3 MiB | 148,952 → 35,748 | `./node_modules/typescript/lib/typescript.js:31409 → 32461` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |          Size | Objects | Location                                            |
| ------: | ----------: | ------------: | ------------: | ------: | --------------------------------------------------- |
| removed | -15.023 MiB | 100.0% → 0.0% |  15 MiB → 0 B |  10 → 0 | `./node_modules/typescript/lib/typescript.js:70627` |
|     new |  +5.695 MiB | 0.0% → 100.0% | 0 B → 5.7 MiB |   0 → 4 | `./node_modules/typescript/lib/typescript.js:71910` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |             Size |          Objects | Location                                                    |
| -----: | ---------: | -----: | ---------------: | ---------------: | ----------------------------------------------------------- |
| -65.4% | -8.501 MiB | 100.0% | 13 MiB → 4.5 MiB | 175,702 → 93,617 | `./node_modules/typescript/lib/typescript.js:64785 → 66040` |

##### `createNormalizedTypeReference` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Size |          Objects | Location                                                    |
| -----: | -------: | -----: | --------------: | ---------------: | ----------------------------------------------------------- |
| -89.5% | -8.5 MiB | 100.0% | 9.5 MiB → 1 MiB | 115,686 → 32,770 | `./node_modules/typescript/lib/typescript.js:62541 → 63796` |

##### `slice` (`node:buffer`)

|  Change |     Delta |             % |           Size | Objects | Location          |
| ------: | --------: | ------------: | -------------: | ------: | ----------------- |
| removed | -8.26 MiB | 100.0% → 0.0% | 8.26 MiB → 0 B | 506 → 0 | `node:buffer:640` |

##### `parseDelimitedList` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |             Size |           Objects | Location                                                    |
| -----: | ---------: | -----: | ---------------: | ----------------: | ----------------------------------------------------------- |
| -60.0% | -7.502 MiB | 100.0% | 12.5 MiB → 5 MiB | 307,984 → 120,158 | `./node_modules/typescript/lib/typescript.js:32875 → 33930` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53728:21`)

| Change |      Delta |      % |              Size |          Objects | Location                                                    |
| -----: | ---------: | -----: | ----------------: | ---------------: | ----------------------------------------------------------- |
| -57.7% | -7.499 MiB | 100.0% | 13 MiB → 5.51 MiB | 124,444 → 38,834 | `./node_modules/typescript/lib/typescript.js:52487 → 53728` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |               Size |         Objects | Location                                                    |
| -----: | ---------: | -----: | -----------------: | --------------: | ----------------------------------------------------------- |
| -66.7% | -7.001 MiB | 100.0% | 10.5 MiB → 3.5 MiB | 97,333 → 36,756 | `./node_modules/typescript/lib/typescript.js:64640 → 65895` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |          Size |        Objects | Location                                                    |
| -----: | ---------: | -----: | ------------: | -------------: | ----------------------------------------------------------- |
| -87.5% | -7.001 MiB | 100.0% | 8 MiB → 1 MiB | 69,916 → 8,740 | `./node_modules/typescript/lib/typescript.js:32283 → 33338` |

##### `readFile` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |           Size | Objects | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------------------------- |
| removed |  -13.229 MiB |  95.7% → 0.0% | 13.2 MiB → 0 B | 642 → 0 | `./node_modules/typescript/lib/typescript.js:121562` |
|     new |   +7.282 MiB | 0.0% → 100.0% | 0 B → 7.28 MiB | 0 → 806 | `./node_modules/typescript/lib/typescript.js:123140` |
| removed | -610.117 KiB |   4.3% → 0.0% |  610 KiB → 0 B |   5 → 0 | `./node_modules/typescript/lib/typescript.js:8747`   |

##### `checkPropertyAccessExpressionOrQualifiedName` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |          Size |    Objects | Location                                            |
| ------: | -------: | ------------: | ------------: | ---------: | --------------------------------------------------- |
| removed | -5.5 MiB | 100.0% → 0.0% | 5.5 MiB → 0 B | 21,849 → 0 | `./node_modules/typescript/lib/typescript.js:75918` |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |      % |          Size |         Objects | Location                                                    |
| -----: | -----: | -----: | ------------: | --------------: | ----------------------------------------------------------- |
| -62.5% | -5 MiB | 100.0% | 8 MiB → 3 MiB | 49,940 → 18,727 | `./node_modules/typescript/lib/typescript.js:33493 → 34548` |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |      % |          Size |          Objects | Location                                                    |
| -----: | -----: | -----: | ------------: | ---------------: | ----------------------------------------------------------- |
| -71.4% | -5 MiB | 100.0% | 7 MiB → 2 MiB | 166,038 → 76,462 | `./node_modules/typescript/lib/typescript.js:32232 → 33287` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |            Size |        Objects | Caller                        | Location                                      |
| -----: | -----------: | ------------: | --------------: | -------------: | ----------------------------- | --------------------------------------------- |
|    new |  +30.004 MiB |  0.0% → 95.2% |    0 B → 30 MiB |    0 → 151,261 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js` |
| -25.0% | -512.078 KiB | 100.0% → 4.8% | 2 MiB → 1.5 MiB | 10,084 → 7,563 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |             % |                Size |       Objects | Caller                                        | Location                                      |
| ------: | ---------: | ------------: | ------------------: | ------------: | --------------------------------------------- | --------------------------------------------- |
|  +75.0% | +3.008 MiB | 72.7% → 87.5% | 4.01 MiB → 7.02 MiB | 2,827 → 3,833 | `isTypeOrBaseIdenticalTo`                     | `./node_modules/typescript/lib/typescript.js` |
| removed | -514.5 KiB |   9.1% → 0.0% |       515 KiB → 0 B |       168 → 0 | `isTypeRelatedTo`                             | `./node_modules/typescript/lib/typescript.js` |
| removed | -514.5 KiB |   9.1% → 0.0% |       515 KiB → 0 B |       168 → 0 | `isTypeAssignableTo`                          | `./node_modules/typescript/lib/typescript.js` |
| removed | -514.5 KiB |   9.1% → 0.0% |       515 KiB → 0 B |       168 → 0 | `checkTypeAssignableToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js` |
|     new | +514.5 KiB |   0.0% → 6.3% |       0 B → 515 KiB |       0 → 168 | `checkTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Caller                                         | Location                                      |
| -----: | -----: | ------------: | ----------: | ---------: | ---------------------------------------------- | --------------------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB | 0 → 10,924 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js` |

##### `getIndexedAccessTypeOrUndefined` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |             % |          Size |    Objects | Caller                 | Location                                      |
| -----: | ---------: | ------------: | ------------: | ---------: | ---------------------- | --------------------------------------------- |
|    new | +1.502 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB | 0 → 27,355 | `getIndexedAccessType` | `./node_modules/typescript/lib/typescript.js` |

##### `diag` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |          Size |    Objects | Caller        | Location                                            |
| -----: | -------: | ------------: | ------------: | ---------: | ------------- | --------------------------------------------------- |
|    new | +1.5 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB | 0 → 16,386 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:16:15` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`)

|  Change |      Delta |      % |               Size |        Objects | Caller        | Location                                          |
| ------: | ---------: | -----: | -----------------: | -------------: | ------------- | ------------------------------------------------- |
| +212.6% | +1.062 MiB | 100.0% | 512 KiB → 1.56 MiB | 9,363 → 17,562 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |

##### `isDeeplyNestedType` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |             % |           Size |    Objects | Caller                   | Location                                      |
| -----: | --------: | ------------: | -------------: | ---------: | ------------------------ | --------------------------------------------- |
|    new | +1.01 MiB | 0.0% → 100.0% | 0 B → 1.01 MiB | 0 → 13,141 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js` |

##### `tryStatSync` (`node:fs`)

| Change |      Delta |             % |        Size | Objects | Caller         | Location  |
| -----: | ---------: | ------------: | ----------: | ------: | -------------- | --------- |
|    new | +1.001 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 452 | `readFileSync` | `node:fs` |

##### `bindAnonymousDeclaration` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Caller                           | Location                                      |
| -----: | -----: | ------------: | ----------: | --------: | -------------------------------- | --------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 5,729 | `bindSourceFileAsExternalModule` | `./node_modules/typescript/lib/typescript.js` |

##### `parseTypeParameter` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Caller               | Location                                      |
| -----: | -----: | ------------: | ----------: | --------: | -------------------- | --------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 6,242 | `parseDelimitedList` | `./node_modules/typescript/lib/typescript.js` |

##### `makeCompositeTypeMapper` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |          Size |    Objects | Caller                     | Location                                      |
| -----: | -----------: | -----------: | ------------: | ---------: | -------------------------- | --------------------------------------------- |
|    new | +512.062 KiB | 0.0% → 50.0% | 0 B → 512 KiB |  0 → 8,193 | `combineTypeMappers`       | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.015 KiB | 0.0% → 50.0% | 0 B → 512 KiB | 0 → 10,923 | `instantiateAnonymousType` | `./node_modules/typescript/lib/typescript.js` |

##### `createJSDocComment` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Caller        | Location                                      |
| -----: | -----: | ------------: | ----------: | --------: | ------------- | --------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 6,242 | `doJSDocScan` | `./node_modules/typescript/lib/typescript.js` |

##### `getDeclaredTypeOfTypeAlias` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Caller                          | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | --------------------------------------------- |
|    new | +768.093 KiB | 0.0% → 100.0% | 0 B → 768 KiB |   0 → 2 | `getTypeFromTypeAliasReference` | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeFromTypeReference` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |          Size | Objects | Caller                      | Location                                      |
| -----: | ----------: | ------------: | ------------: | ------: | --------------------------- | --------------------------------------------- |
|    new | +576.14 KiB | 0.0% → 100.0% | 0 B → 576 KiB |   0 → 3 | `getTypeFromTypeNodeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `filterType` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Caller             | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------ | --------------------------------------------- |
|    new | +563.406 KiB | 0.0% → 100.0% | 0 B → 563 KiB |  0 → 11 | `getTypeWithFacts` | `./node_modules/typescript/lib/typescript.js` |

##### `isBinaryExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Caller       | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | --------------------------------------------- |
|    new | +521.156 KiB | 0.0% → 100.0% | 0 B → 521 KiB |  0 → 51 | `bothHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `getSourceFileByPath` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |          Size | Objects | Caller          | Location                                      |
| -----: | ----------: | ------------: | ------------: | ------: | --------------- | --------------------------------------------- |
|    new | +519.25 KiB | 0.0% → 100.0% | 0 B → 519 KiB |  0 → 67 | `getSourceFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getObjectFlags` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Caller                | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | --------------------------------------------- |
|    new | +519.187 KiB | 0.0% → 100.0% | 0 B → 519 KiB |  0 → 71 | `isConstTypeVariable` | `./node_modules/typescript/lib/typescript.js` |

##### `token` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Caller                      | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- | --------------------------------------------- |
|    new | +518.406 KiB | 0.0% → 100.0% | 0 B → 518 KiB |  0 → 53 | `parseTypeAliasDeclaration` | `./node_modules/typescript/lib/typescript.js` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Caller                | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | --------------------------------------------- |
|    new | +517.734 KiB | 0.0% → 100.0% | 0 B → 518 KiB |  0 → 47 | `getIndexInfosOfType` | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeOfFuncClassEnumModule` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size | Objects | Caller            | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | --------------------------------------------- |
|    new | +517.343 KiB | 0.0% → 100.0% | 0 B → 517 KiB |  0 → 55 | `getTypeOfSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `replace` (`<unknown>`)

| Change |        Delta |             % |          Size | Objects | Caller                 | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------- | --------------------------------------------- |
|    new | +515.625 KiB | 0.0% → 100.0% | 0 B → 516 KiB | 0 → 132 | `getCanonicalFileName` | `./node_modules/typescript/lib/typescript.js` |

##### `delete` (`<unknown>`)

| Change |        Delta |             % |          Size | Objects | Caller            | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | --------------------------------------------- |
|    new | +513.046 KiB | 0.0% → 100.0% | 0 B → 513 KiB | 0 → 398 | `resetMaybeStack` | `./node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|  Change |        Delta |             % |           Size |   Objects | Caller             | Location                                      |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------ | --------------------------------------------- |
|     new |   +1.008 MiB | 0.0% → 100.0% | 0 B → 1.01 MiB | 0 → 2,635 | `declareSymbol`    | `./node_modules/typescript/lib/typescript.js` |
| removed | -522.031 KiB | 100.0% → 0.0% |  522 KiB → 0 B |    52 → 0 | `createMarkerType` | `./node_modules/typescript/lib/typescript.js` |

##### `readFileSync` (`node:fs`)

| Change |        Delta |      % |                Size | Objects | Caller            | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ---------------------------------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

| Change |       Delta |      % |                Size |         Objects | Caller        | Location                                   |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------- | ------------------------------------------ |
|  +1.2% | +20.312 KiB | 100.0% | 1.63 MiB → 1.65 MiB | 24,582 → 20,245 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |            % |              Size |         Objects | Caller                                                   | Location                                      |
| ------: | -----------: | -----------: | ----------------: | --------------: | -------------------------------------------------------- | --------------------------------------------- |
| removed |  -85.013 MiB | 87.2% → 0.0% |      85 MiB → 0 B |     428,574 → 0 | `resolveObjectTypeMembers`                               | `./node_modules/typescript/lib/typescript.js` |
|  -68.4% |     -6.5 MiB | 9.7% → 54.5% |   9.5 MiB → 3 MiB | 47,899 → 15,126 | `instantiateSignature`                                   | `./node_modules/typescript/lib/typescript.js` |
|  -66.7% |       -1 MiB |  1.5% → 9.1% | 1.5 MiB → 512 KiB |   7,563 → 2,521 | `getSignatureInstantiationWithoutFillingInTypeArguments` | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.078 KiB |  0.0% → 9.1% |     0 B → 512 KiB |       0 → 2,521 | `createInstantiatedSymbolTable`                          | `./node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|  Change |       Delta |             % |                Size |       Objects | Caller                          | Location                                      |
| ------: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | --------------------------------------------- |
| removed | -10.527 MiB |  16.4% → 0.0% |      10.5 MiB → 0 B |     6,814 → 0 | `resolveObjectTypeMembers`      | `./node_modules/typescript/lib/typescript.js` |
|  -57.7% |  -7.515 MiB | 20.3% → 20.2% |   13 MiB → 5.52 MiB | 7,243 → 2,954 | `addInheritedMembers`           | `./node_modules/typescript/lib/typescript.js` |
|  -59.8% |  -6.015 MiB | 15.7% → 14.8% | 10.1 MiB → 4.05 MiB |       11 → 14 | `resetMaybeStack`               | `./node_modules/typescript/lib/typescript.js` |
|     new |  +3.509 MiB |  0.0% → 12.9% |      0 B → 3.51 MiB |     0 → 2,009 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|  -76.7% |  -3.458 MiB |   7.0% → 3.8% | 4.51 MiB → 1.05 MiB |   7,945 → 571 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|  Change |       Delta |             % |             Size |          Objects | Caller                          | Location                                      |
| ------: | ----------: | ------------: | ---------------: | ---------------: | ------------------------------- | --------------------------------------------- |
|  -67.4% | -15.502 MiB | 47.4% → 45.5% | 23 MiB → 7.5 MiB | 223,372 → 51,749 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js` |
|  -56.5% |  -6.501 MiB | 23.7% → 30.3% | 11.5 MiB → 5 MiB | 144,025 → 60,370 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|  -57.1% |      -4 MiB | 14.4% → 18.2% |    7 MiB → 3 MiB |  74,168 → 33,635 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js` |
| removed |      -2 MiB |   4.1% → 0.0% |      2 MiB → 0 B |       26,735 → 0 | `bindAnonymousTypeWorker`       | `./node_modules/typescript/lib/typescript.js` |
| removed |      -2 MiB |   4.1% → 0.0% |      2 MiB → 0 B |       13,799 → 0 | `bindFunctionOrConstructorType` | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseIdentifierNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |              % |               Size |         Objects | Caller             | Location                                      |
| -----: | ----------: | -------------: | -----------------: | --------------: | ------------------ | --------------------------------------------- |
| -97.8% | -22.004 MiB | 100.0% → 33.3% | 22.5 MiB → 512 KiB | 196,644 → 4,370 | `createIdentifier` | `./node_modules/typescript/lib/typescript.js` |
|    new |      +1 MiB |   0.0% → 66.7% |        0 B → 1 MiB |       0 → 8,740 | `parseIdentifier`  | `./node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |           Size |          Objects | Caller                             | Location                                      |
| ------: | -----------: | ------------: | -------------: | ---------------: | ---------------------------------- | --------------------------------------------- |
|  -60.9% |  -14.002 MiB | 74.2% → 81.8% | 23 MiB → 9 MiB | 210,406 → 96,939 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
| removed |       -4 MiB |  12.9% → 0.0% |    4 MiB → 0 B |       52,876 → 0 | `declareModuleMember`              | `./node_modules/typescript/lib/typescript.js` |
| removed |       -1 MiB |   3.2% → 0.0% |    1 MiB → 0 B |        7,711 → 0 | `declareClassMember`               | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.125 KiB |   1.6% → 0.0% |  512 KiB → 0 B |        3,856 → 0 | `declareSourceFileMember`          | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.125 KiB |   0.0% → 4.5% |  0 B → 512 KiB |        0 → 3,856 | `bindTypeParameter`                | `./node_modules/typescript/lib/typescript.js` |

##### `parseTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |         Size |     Objects | Caller              | Location                                      |
| ------: | ----------: | ------------: | -----------: | ----------: | ------------------- | --------------------------------------------- |
| removed | -19.002 MiB | 100.0% → 0.0% | 19 MiB → 0 B | 118,602 → 0 | `parseNonArrayType` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |               Size |          Objects | Caller                       | Location                                      |
| -----: | -----------: | ------------: | -----------------: | ---------------: | ---------------------------- | --------------------------------------------- |
| -73.5% |      -18 MiB | 94.2% → 86.7% | 24.5 MiB → 6.5 MiB | 190,659 → 50,643 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js` |
| -33.3% | -512.015 KiB |  5.8% → 13.3% |    1.5 MiB → 1 MiB |   10,328 → 7,349 | `instantiateMappedType`      | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |             % |            Size |         Objects | Caller                  | Location                                      |
| ------: | ---------: | ------------: | --------------: | --------------: | ----------------------- | --------------------------------------------- |
| removed | -8.511 MiB |  25.4% → 0.0% |  8.51 MiB → 0 B |      49,969 → 0 | `parseParameterWorker`  | `./node_modules/typescript/lib/typescript.js` |
| removed |     -7 MiB |  20.9% → 0.0% |     7 MiB → 0 B |      43,696 → 0 | `doJSDocScan`           | `./node_modules/typescript/lib/typescript.js` |
|     new |   +4.5 MiB |  0.0% → 25.0% |   0 B → 4.5 MiB |      0 → 28,092 | `createStringLiteral`   | `./node_modules/typescript/lib/typescript.js` |
|  +38.5% |   +2.5 MiB | 19.4% → 50.0% | 6.5 MiB → 9 MiB | 40,575 → 56,181 | `parseNonArrayType`     | `./node_modules/typescript/lib/typescript.js` |
|  -83.3% |   -2.5 MiB |   9.0% → 2.8% | 3 MiB → 512 KiB |  18,727 → 3,121 | `createBaseDeclaration` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |           Size |          Objects | Caller                         | Location                                      |
| ------: | -----------: | ------------: | -------------: | ---------------: | ------------------------------ | --------------------------------------------- |
|  -61.1% |  -11.002 MiB | 94.7% → 87.5% | 18 MiB → 7 MiB | 131,490 → 65,809 | `instantiateList`              | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.078 KiB |   2.6% → 0.0% |  512 KiB → 0 B |        2,521 → 0 | `getBaseSignature`             | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.078 KiB |   0.0% → 6.3% |  0 B → 512 KiB |        0 → 2,521 | `createSignatureInstantiation` | `./node_modules/typescript/lib/typescript.js` |

##### `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |           Size |         Objects | Caller                          | Location                                      |
| -----: | ----------: | -----: | -------------: | --------------: | ------------------------------- | --------------------------------------------- |
| -78.6% | -11.001 MiB | 100.0% | 14 MiB → 3 MiB | 87,394 → 18,727 | `parseIntersectionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Size |          Objects | Caller        | Location                                      |
| -----: | -------: | -----: | ---------------: | ---------------: | ------------- | --------------------------------------------- |
| -76.0% | -9.5 MiB | 100.0% | 12.5 MiB → 3 MiB | 148,952 → 35,748 | `createToken` | `./node_modules/typescript/lib/typescript.js` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |             Size | Objects | Caller            | Location                                      |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------- | --------------------------------------------- |
| -62.1% | -9.328 MiB | 100.0% | 15 MiB → 5.7 MiB |  10 → 4 | `checkIdentifier` | `./node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |             Size |          Objects | Caller                  | Location                                      |
| -----: | ---------: | -----: | ---------------: | ---------------: | ----------------------- | --------------------------------------------- |
| -65.4% | -8.501 MiB | 100.0% | 13 MiB → 4.5 MiB | 175,702 → 93,617 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `createNormalizedTypeReference` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Size |          Objects | Caller                  | Location                                      |
| -----: | -------: | -----: | --------------: | ---------------: | ----------------------- | --------------------------------------------- |
| -89.5% | -8.5 MiB | 100.0% | 9.5 MiB → 1 MiB | 115,686 → 32,770 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `slice` (`node:buffer`)

|  Change |     Delta |             % |           Size | Objects | Caller     | Location      |
| ------: | --------: | ------------: | -------------: | ------: | ---------- | ------------- |
| removed | -8.26 MiB | 100.0% → 0.0% | 8.26 MiB → 0 B | 506 → 0 | `toString` | `node:buffer` |

##### `parseDelimitedList` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |             % |              Size |          Objects | Caller                              | Location                                      |
| ------: | ---------: | ------------: | ----------------: | ---------------: | ----------------------------------- | --------------------------------------------- |
|  -54.6% | -3.001 MiB | 44.0% → 50.0% | 5.5 MiB → 2.5 MiB | 125,699 → 49,156 | `parseParameters`                   | `./node_modules/typescript/lib/typescript.js` |
| removed |     -2 MiB |  16.0% → 0.0% |       2 MiB → 0 B |       60,078 → 0 | `parseDeclarationWorker`            | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.5 MiB |  12.0% → 0.0% |     1.5 MiB → 0 B |       26,627 → 0 | `parseObjectLiteralExpression`      | `./node_modules/typescript/lib/typescript.js` |
|  -66.7% |     -1 MiB | 12.0% → 10.0% | 1.5 MiB → 512 KiB |  40,963 → 21,846 | `parseTypeArgumentsOfTypeReference` | `./node_modules/typescript/lib/typescript.js` |
| removed |     -1 MiB |   8.0% → 0.0% |       1 MiB → 0 B |       24,578 → 0 | `parseHeritageClause`               | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53728:21`)

| Change |      Delta |      % |              Size |          Objects | Caller    | Location    |
| -----: | ---------: | -----: | ----------------: | ---------------: | --------- | ----------- |
| -57.7% | -7.499 MiB | 100.0% | 13 MiB → 5.51 MiB | 124,444 → 38,834 | `forEach` | `<unknown>` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |              % |             Size |         Objects | Caller                  | Location                                      |
| -----: | -----------: | -------------: | ---------------: | --------------: | ----------------------- | --------------------------------------------- |
| -81.0% |   -8.501 MiB | 100.0% → 57.1% | 10.5 MiB → 2 MiB | 97,333 → 13,471 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |
|    new |       +1 MiB |   0.0% → 28.6% |      0 B → 1 MiB |       0 → 6,900 | `getTypeArguments`      | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.031 KiB |   0.0% → 14.3% |    0 B → 512 KiB |      0 → 16,385 | `getConditionalType`    | `./node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |              % |          Size |       Objects | Caller                     | Location                                      |
| ------: | -----------: | -------------: | ------------: | ------------: | -------------------------- | --------------------------------------------- |
| removed |       -3 MiB |   37.5% → 0.0% |   3 MiB → 0 B |    26,219 → 0 | `parseIdentifierOrPattern` | `./node_modules/typescript/lib/typescript.js` |
| removed |       -2 MiB |   25.0% → 0.0% |   2 MiB → 0 B |    17,479 → 0 | `parseBindingIdentifier`   | `./node_modules/typescript/lib/typescript.js` |
| removed |     -1.5 MiB |   18.7% → 0.0% | 1.5 MiB → 0 B |    13,109 → 0 | `parseFunctionDeclaration` | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.109 KiB |    6.3% → 0.0% | 512 KiB → 0 B |     4,370 → 0 | `parseVariableDeclaration` | `./node_modules/typescript/lib/typescript.js` |
|     ~0% |       +120 B | 12.5% → 100.0% |         1 MiB | 8,739 → 8,740 | `parseNameOfParameter`     | `./node_modules/typescript/lib/typescript.js` |

##### `readFile` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |                Size |   Objects | Caller                | Location                                                            |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------- | ------------------------------------------------------------------- |
|  -46.8% |   -5.952 MiB | 92.1% → 93.1% | 12.7 MiB → 6.78 MiB | 229 → 750 | `(anonymous)`         | `./node_modules/typescript/lib/typescript.js:121549:40 → 123127:40` |
| removed | -610.117 KiB |   4.3% → 0.0% |       610 KiB → 0 B |     5 → 0 | `readFile`            | `./node_modules/typescript/lib/typescript.js`                       |
|   +1.0% |   +4.976 KiB |   3.6% → 6.9% |   513 KiB → 518 KiB |  413 → 56 | `readJsonOrUndefined` | `./node_modules/typescript/lib/typescript.js`                       |

##### `checkPropertyAccessExpressionOrQualifiedName` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |          Size |    Objects | Caller                  | Location                                      |
| ------: | -------: | ------------: | ------------: | ---------: | ----------------------- | --------------------------------------------- |
| removed | -5.5 MiB | 100.0% → 0.0% | 5.5 MiB → 0 B | 21,849 → 0 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |      % |          Size |         Objects | Caller            | Location                                      |
| -----: | -----: | -----: | ------------: | --------------: | ----------------- | --------------------------------------------- |
| -62.5% | -5 MiB | 100.0% | 8 MiB → 3 MiB | 49,940 → 18,727 | `parseTypeMember` | `./node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |              Size |         Objects | Caller                   | Location                                      |
| ------: | -----------: | ------------: | ----------------: | --------------: | ------------------------ | --------------------------------------------- |
| removed |     -2.5 MiB |  35.7% → 0.0% |     2.5 MiB → 0 B |      57,349 → 0 | `parseUnionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |
|  -66.7% |       -2 MiB | 42.9% → 50.0% |     3 MiB → 1 MiB | 79,195 → 38,231 | `parseModifiers`         | `./node_modules/typescript/lib/typescript.js` |
|  -66.7% |       -1 MiB | 21.4% → 25.0% | 1.5 MiB → 512 KiB | 29,494 → 21,846 | `parseList`              | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.031 KiB |  0.0% → 25.0% |     0 B → 512 KiB |      0 → 16,385 | `parseType`              | `./node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

| Change |        Delta |             % |            Size |        Objects | Caller             | Location                                      |
| -----: | -----------: | ------------: | --------------: | -------------: | ------------------ | --------------------------------------------- |
| -90.0% |   -4.501 MiB | 83.3% → 50.0% | 5 MiB → 512 KiB | 24,211 → 2,850 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| -50.0% | -512.078 KiB | 16.7% → 50.0% | 1 MiB → 512 KiB |  6,863 → 2,428 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `splice` (`<unknown>`)

|  Change |    Delta |            % |          Size |    Objects | Caller               | Location                                      |
| ------: | -------: | -----------: | ------------: | ---------: | -------------------- | --------------------------------------------- |
| removed | -2.5 MiB | 62.5% → 0.0% | 2.5 MiB → 0 B | 17,250 → 0 | `getUnionTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `slice` (`<unknown>`)

|  Change |  Delta |            % |        Size |    Objects | Caller             | Location                                      |
| ------: | -----: | -----------: | ----------: | ---------: | ------------------ | --------------------------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B | 32,770 → 0 | `instantiateTypes` | `./node_modules/typescript/lib/typescript.js` |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B | 38,231 → 0 | `addRange`         | `./node_modules/typescript/lib/typescript.js` |

##### `next` (`<unknown>`)

|  Change |        Delta |            % |          Size | Objects | Caller                            | Location                                      |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------- | --------------------------------------------- |
| removed |     -513 KiB | 50.0% → 0.0% | 513 KiB → 0 B | 456 → 0 | `collectExternalModuleReferences` | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.859 KiB | 50.0% → 0.0% | 513 KiB → 0 B | 521 → 0 | `getUnmatchedProperty`            | `./node_modules/typescript/lib/typescript.js` |

##### `trimEnd` (`<unknown>`)

|  Change |        Delta |            % |          Size |    Objects | Caller             | Location                                      |
| ------: | -----------: | -----------: | ------------: | ---------: | ------------------ | --------------------------------------------- |
| removed | -512.031 KiB | 50.0% → 0.0% | 512 KiB → 0 B | 16,385 → 0 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.031 KiB | 50.0% → 0.0% | 512 KiB → 0 B | 16,385 → 0 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `push` (`<unknown>`)

|  Change |        Delta |            % |          Size |   Objects | Caller                   | Location                                      |
| ------: | -----------: | -----------: | ------------: | --------: | ------------------------ | --------------------------------------------- |
| removed |       -1 MiB | 50.0% → 0.0% |   1 MiB → 0 B | 6,900 → 0 | `getSignaturesOfSymbol`  | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.187 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   745 → 0 | `parseUnionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.187 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 745 | `parseType`              | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.109 KiB | 0.0% → 33.3% | 0 B → 512 KiB | 0 → 3,450 | `instantiateList`        | `./node_modules/typescript/lib/typescript.js` |

##### `split` (`<unknown>`)

|  Change |        Delta |             % |          Size |   Objects | Caller                          | Location                                      |
| ------: | -----------: | ------------: | ------------: | --------: | ------------------------------- | --------------------------------------------- |
| removed | -512.039 KiB | 100.0% → 0.0% | 512 KiB → 0 B | 9,363 → 0 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js` |

##### `charCodeAt` (`<unknown>`)

|  Change |        Delta |             % |          Size |   Objects | Caller    | Location                                      |
| ------: | -----------: | ------------: | ------------: | --------: | --------- | --------------------------------------------- |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B | 3,641 → 0 | `toPath3` | `./node_modules/typescript/lib/typescript.js` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Third-party

|   Change |       Delta |            % |                Size |           Objects | Function                                               | Location                                      |
| -------: | ----------: | -----------: | ------------------: | ----------------: | ------------------------------------------------------ | --------------------------------------------- |
| +1923.6% | +38.508 MiB | 0.3% → 13.6% |    2 MiB → 40.5 MiB |  10,766 → 300,722 | `checkTypeArgumentConstraints`                         | `./node_modules/typescript/lib/typescript.js` |
| +1670.7% |  +33.46 MiB | 0.3% → 11.9% |    2 MiB → 35.5 MiB |   9,757 → 300,030 | `checkVariableDeclarationList`                         | `./node_modules/typescript/lib/typescript.js` |
| +3320.0% | +33.291 MiB | 0.1% → 11.5% |    1 MiB → 34.3 MiB |     244 → 266,961 | `checkExpressionStatement`                             | `./node_modules/typescript/lib/typescript.js` |
|  +200.1% | +27.013 MiB | 1.8% → 13.6% | 13.5 MiB → 40.5 MiB | 154,109 → 223,724 | `createInstantiatedSymbolTable`                        | `./node_modules/typescript/lib/typescript.js` |
|  +756.1% | +22.697 MiB |  0.4% → 8.6% |    3 MiB → 25.7 MiB |  20,173 → 182,444 | `checkTypeReferenceOrImport`                           | `./node_modules/typescript/lib/typescript.js` |
|      new | +18.573 MiB |  0.0% → 6.2% |      0 B → 18.6 MiB |        0 → 98,427 | `inferFromProperties`                                  | `./node_modules/typescript/lib/typescript.js` |
| +1749.9% | +17.502 MiB |  0.1% → 6.2% |    1 MiB → 18.5 MiB |  12,563 → 190,938 | `parseParameter`                                       | `./node_modules/typescript/lib/typescript.js` |
| +1140.9% |  +17.12 MiB |  0.2% → 6.2% |  1.5 MiB → 18.6 MiB |  16,466 → 157,763 | `fillMissingTypeArguments`                             | `./node_modules/typescript/lib/typescript.js` |
|   +95.0% | +15.691 MiB | 2.2% → 10.8% | 16.5 MiB → 32.2 MiB | 146,087 → 229,082 | `addLazyDiagnostic`                                    | `./node_modules/typescript/lib/typescript.js` |
|  +563.9% | +14.136 MiB |  0.3% → 5.6% | 2.51 MiB → 16.6 MiB |     430 → 148,260 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js` |
|      new | +13.772 MiB |  0.0% → 4.6% |      0 B → 13.8 MiB |       0 → 137,625 | `checkExpressionForMutableLocation`                    | `./node_modules/typescript/lib/typescript.js` |
| +2299.5% | +11.519 MiB |  0.1% → 4.0% |    513 KiB → 12 MiB |      469 → 65,865 | `inferFromSignature`                                   | `./node_modules/typescript/lib/typescript.js` |
|  +956.5% |  +9.602 MiB |  0.1% → 3.5% |    1 MiB → 10.6 MiB |      294 → 86,105 | `typeArgumentsRelatedTo`                               | `./node_modules/typescript/lib/typescript.js` |
|  +127.0% |  +8.737 MiB |  0.9% → 5.2% | 6.88 MiB → 15.6 MiB |  59,510 → 130,687 | `isPropertySymbolTypeRelated`                          | `./node_modules/typescript/lib/typescript.js` |
|      new |  +8.501 MiB |  0.0% → 2.8% |       0 B → 8.5 MiB |        0 → 46,772 | `getPropertiesOfObjectType`                            | `./node_modules/typescript/lib/typescript.js` |
|  +748.0% |  +7.498 MiB |  0.1% → 2.8% |     1 MiB → 8.5 MiB |      581 → 73,894 | `parseVariableStatement`                               | `./node_modules/typescript/lib/typescript.js` |
|  +203.2% |   +7.13 MiB |  0.5% → 3.6% | 3.51 MiB → 10.6 MiB |    1,542 → 57,386 | `resolveSignature`                                     | `./node_modules/typescript/lib/typescript.js` |
|   +95.0% |  +7.127 MiB |  1.0% → 4.9% |  7.5 MiB → 14.6 MiB |   56,953 → 77,932 | `checkTypeAssignableTo`                                | `./node_modules/typescript/lib/typescript.js` |
|  +710.1% |   +7.12 MiB |  0.1% → 2.7% |    1 MiB → 8.12 MiB |    2,321 → 58,451 | `eachTypeRelatedToType`                                | `./node_modules/typescript/lib/typescript.js` |
|  +165.3% |  +6.629 MiB |  0.5% → 3.6% | 4.01 MiB → 10.6 MiB |    1,590 → 57,386 | `getResolvedSignature`                                 | `./node_modules/typescript/lib/typescript.js` |

##### Standard library

| Change |        Delta |           % |                Size |          Objects | Function          | Location                                   |
| -----: | -----------: | ----------: | ------------------: | ---------------: | ----------------- | ------------------------------------------ |
| +17.3% |   +2.236 MiB | 1.7% → 5.1% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
| +17.3% |   +2.236 MiB | 1.7% → 5.1% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
| +17.3% |   +2.236 MiB | 1.7% → 5.1% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
| +17.3% |   +2.236 MiB | 1.7% → 5.1% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
| +17.3% |   +2.236 MiB | 1.7% → 5.1% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
| +17.3% |   +2.236 MiB | 1.7% → 5.1% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `require`         | `node:internal/modules/helpers`            |
| +45.8% |   +2.128 MiB | 0.6% → 2.3% | 4.65 MiB → 6.78 MiB | 106,787 → 87,697 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
| +13.4% |   +1.109 MiB | 1.1% → 3.1% | 8.27 MiB → 9.37 MiB |          1 → 453 | `readFileSync`    | `node:fs`                                  |
|    new |   +1.001 MiB | 0.0% → 0.3% |         0 B → 1 MiB |          0 → 452 | `tryStatSync`     | `node:fs`                                  |
|    new | +515.625 KiB | 0.0% → 0.2% |       0 B → 516 KiB |          0 → 132 | `replace`         | `<unknown>`                                |
|    new | +513.046 KiB | 0.0% → 0.2% |       0 B → 513 KiB |          0 → 398 | `delete`          | `<unknown>`                                |
| +97.8% | +510.585 KiB | 0.1% → 0.3% |  522 KiB → 1.01 MiB |       52 → 2,635 | `add`             | `<unknown>`                                |
|  +1.3% | +110.078 KiB | 1.1% → 2.8% | 8.27 MiB → 8.37 MiB |                1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  +1.3% | +110.078 KiB | 1.1% → 2.8% | 8.27 MiB → 8.37 MiB |                1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  +1.2% |  +20.312 KiB | 0.2% → 0.6% | 1.63 MiB → 1.65 MiB |  24,582 → 20,245 | `wrapSafe`        | `node:internal/modules/cjs/loader`         |
|  +0.7% |   +3.671 KiB | 0.1% → 0.2% |   512 KiB → 516 KiB |       5,958 → 74 | `some`            | `<unknown>`                                |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |              Size |               Objects | Function                                   | Location                                                            |
| -----: | -----------: | ------------: | ----------------: | --------------------: | ------------------------------------------ | ------------------------------------------------------------------- |
| -59.9% | -442.016 MiB | 99.5% → 98.8% | 738 MiB → 296 MiB | 6,116,489 → 2,313,786 | `typeCheckProject`                         | `./tsc-workload.mjs`                                                |
| -59.8% |     -442 MiB | 99.7% → 99.3% | 739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `(anonymous)`                              | `./datadog-pprof-heap.mjs:1:1`                                      |
| -59.8% |     -442 MiB | 99.7% → 99.3% | 739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `next`                                     | `<unknown>`                                                         |
| -59.8% |     -442 MiB | 99.7% → 99.3% | 739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `run`                                      | `node:internal/modules/esm/module_job`                              |
| -59.8% |     -442 MiB | 99.7% → 99.3% | 739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `(anonymous)`                              | `<unknown>`                                                         |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js`                       |

##### Third-party

| Change |        Delta |             % |               Size |               Objects | Function                                   | Location                                                            |
| -----: | -----------: | ------------: | -----------------: | --------------------: | ------------------------------------------ | ------------------------------------------------------------------- |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js`                       |
| -58.7% | -282.725 MiB | 65.0% → 66.5% |  482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% |  398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% |  398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% |  398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% |  398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js`                       |
| -57.6% | -229.301 MiB | 53.7% → 56.5% |  398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js`                       |
| -57.2% | -216.724 MiB | 51.1% → 54.2% |  379 MiB → 162 MiB | 3,016,611 → 1,219,545 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js`                       |
| -57.2% | -216.724 MiB | 51.1% → 54.2% |  379 MiB → 162 MiB | 3,016,611 → 1,219,545 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js`                       |
| -67.8% | -188.647 MiB | 37.5% → 29.9% | 278 MiB → 89.5 MiB |   1,962,809 → 634,969 | `checkExpression`                          | `./node_modules/typescript/lib/typescript.js`                       |
| -51.3% | -187.871 MiB | 49.5% → 59.8% |  366 MiB → 179 MiB | 3,181,707 → 1,414,262 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js`                       |
| -60.6% | -173.671 MiB | 38.7% → 37.8% |  287 MiB → 113 MiB |   2,027,236 → 823,250 | `checkExpressionWorker`                    | `./node_modules/typescript/lib/typescript.js`                       |

##### Standard library

|  Change |        Delta |             % |                Size |               Objects | Function     | Location                               |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ------------ | -------------------------------------- |
|  -59.8% |     -442 MiB | 99.7% → 99.3% |   739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `next`       | `<unknown>`                            |
|  -59.8% |     -442 MiB | 99.7% → 99.3% |   739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `run`        | `node:internal/modules/esm/module_job` |
|  -64.8% | -151.998 MiB | 31.7% → 27.7% |  235 MiB → 82.7 MiB |   1,659,120 → 617,477 | `forEach`    | `<unknown>`                            |
|  -57.5% |    -36.9 MiB |   8.7% → 9.1% | 64.2 MiB → 27.3 MiB |       32,522 → 10,379 | `set`        | `<unknown>`                            |
|  -64.9% |  -31.503 MiB |   6.5% → 5.7% |   48.5 MiB → 17 MiB |     515,734 → 165,662 | `Map`        | `<unknown>`                            |
| removed |    -8.26 MiB |   1.1% → 0.0% |      8.26 MiB → 0 B |               506 → 0 | `slice`      | `node:buffer`                          |
| removed |    -8.26 MiB |   1.1% → 0.0% |      8.26 MiB → 0 B |               506 → 0 | `toString`   | `node:buffer`                          |
|  -83.3% |   -5.001 MiB |   0.8% → 0.3% |       6 MiB → 1 MiB |        31,074 → 5,278 | `join`       | `<unknown>`                            |
|  -62.5% |     -2.5 MiB |          0.5% |     4 MiB → 1.5 MiB |       27,600 → 10,350 | `splice`     | `<unknown>`                            |
| removed |       -2 MiB |   0.3% → 0.0% |         2 MiB → 0 B |            71,001 → 0 | `slice`      | `<unknown>`                            |
| removed |       -1 MiB |   0.1% → 0.0% |         1 MiB → 0 B |            32,770 → 0 | `trimEnd`    | `<unknown>`                            |
|  -25.0% | -512.109 KiB |   0.3% → 0.5% |     2 MiB → 1.5 MiB |        11,095 → 7,645 | `push`       | `<unknown>`                            |
| removed | -512.039 KiB |   0.1% → 0.0% |       512 KiB → 0 B |             9,363 → 0 | `split`      | `<unknown>`                            |
| removed | -512.015 KiB |   0.1% → 0.0% |       512 KiB → 0 B |             3,641 → 0 | `charCodeAt` | `<unknown>`                            |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `checkTypeArgumentConstraints` (`./node_modules/typescript/lib/typescript.js`)

|   Change |       Delta |      % |             Size |          Objects | Caller        | Location                                                          |
| -------: | ----------: | -----: | ---------------: | ---------------: | ------------- | ----------------------------------------------------------------- |
| +1923.6% | +38.508 MiB | 100.0% | 2 MiB → 40.5 MiB | 10,766 → 300,722 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:82238:27 → 83533:27` |

##### `checkVariableDeclarationList` (`./node_modules/typescript/lib/typescript.js`)

|   Change |      Delta |      % |             Size |         Objects | Caller                   | Location                                      |
| -------: | ---------: | -----: | ---------------: | --------------: | ------------------------ | --------------------------------------------- |
| +1670.7% | +33.46 MiB | 100.0% | 2 MiB → 35.5 MiB | 9,757 → 300,030 | `checkVariableStatement` | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionStatement` (`./node_modules/typescript/lib/typescript.js`)

|   Change |       Delta |      % |             Size |       Objects | Caller                     | Location                                      |
| -------: | ----------: | -----: | ---------------: | ------------: | -------------------------- | --------------------------------------------- |
| +3320.0% | +33.291 MiB | 100.0% | 1 MiB → 34.3 MiB | 244 → 266,961 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |              % |             Size |          Objects | Caller                        | Location                                      |
| -----: | ----------: | -------------: | ---------------: | ---------------: | ----------------------------- | --------------------------------------------- |
|    new | +34.514 MiB |   0.0% → 85.2% |   0 B → 34.5 MiB |      0 → 172,176 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js` |
| -55.6% |  -7.501 MiB | 100.0% → 14.8% | 13.5 MiB → 6 MiB | 154,109 → 51,548 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js` |

##### `checkTypeReferenceOrImport` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |      % |             Size |          Objects | Caller                   | Location                                      |
| ------: | ----------: | -----: | ---------------: | ---------------: | ------------------------ | --------------------------------------------- |
| +756.1% | +22.697 MiB | 100.0% | 3 MiB → 25.7 MiB | 20,173 → 182,444 | `checkTypeReferenceNode` | `./node_modules/typescript/lib/typescript.js` |

##### `inferFromProperties` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |           Size |    Objects | Caller                 | Location                                      |
| -----: | ----------: | ------------: | -------------: | ---------: | ---------------------- | --------------------------------------------- |
|    new | +18.573 MiB | 0.0% → 100.0% | 0 B → 18.6 MiB | 0 → 98,427 | `inferFromObjectTypes` | `./node_modules/typescript/lib/typescript.js` |

##### `parseParameter` (`./node_modules/typescript/lib/typescript.js`)

|   Change |        Delta |              % |               Size |         Objects | Caller        | Location                                                            |
| -------: | -----------: | -------------: | -----------------: | --------------: | ------------- | ------------------------------------------------------------------- |
| +3600.0% |  +18.002 MiB | 50.0% → 100.0% | 512 KiB → 18.5 MiB | 8,193 → 190,938 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:33416:157 → 34471:157` |
|  removed | -512.109 KiB |   50.0% → 0.0% |      512 KiB → 0 B |       4,370 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:33484:64`              |

##### `fillMissingTypeArguments` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |            % |           Size |     Objects | Caller                                 | Location                                      |
| ------: | -----------: | -----------: | -------------: | ----------: | -------------------------------------- | --------------------------------------------- |
|     new |  +18.121 MiB | 0.0% → 97.3% | 0 B → 18.1 MiB | 0 → 141,378 | `getEffectiveTypeArguments2`           | `./node_modules/typescript/lib/typescript.js` |
| removed |       -1 MiB | 66.6% → 0.0% |    1 MiB → 0 B |  16,386 → 0 | `getTypeFromClassOrInterfaceReference` | `./node_modules/typescript/lib/typescript.js` |
| removed |   -512.5 KiB | 33.4% → 0.0% |  513 KiB → 0 B |      80 → 0 | `checkTypeArgumentConstraints`         | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.031 KiB |  0.0% → 2.7% |  0 B → 512 KiB |  0 → 16,385 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js` |

##### `addLazyDiagnostic` (`./node_modules/typescript/lib/typescript.js`)

|   Change |       Delta |             % |             Size |          Objects | Caller                             | Location                                      |
| -------: | ----------: | ------------: | ---------------: | ---------------: | ---------------------------------- | --------------------------------------------- |
| +1108.8% | +22.196 MiB | 12.1% → 75.1% | 2 MiB → 24.2 MiB | 10,766 → 172,563 | `checkTypeReferenceOrImport`       | `./node_modules/typescript/lib/typescript.js` |
|   -42.9% |  -3.001 MiB | 42.4% → 12.4% |    7 MiB → 4 MiB |  62,220 → 16,629 | `checkClassLikeDeclaration`        | `./node_modules/typescript/lib/typescript.js` |
|   -37.5% |  -1.501 MiB |  24.2% → 7.8% |  4 MiB → 2.5 MiB |  30,987 → 11,541 | `checkFunctionDeclaration`         | `./node_modules/typescript/lib/typescript.js` |
|      new |    +1.5 MiB |   0.0% → 4.7% |    0 B → 1.5 MiB |       0 → 21,427 | `checkFunctionOrConstructorSymbol` | `./node_modules/typescript/lib/typescript.js` |
|  removed |      -1 MiB |   6.1% → 0.0% |      1 MiB → 0 B |        5,378 → 0 | `checkAssertionDeferred`           | `./node_modules/typescript/lib/typescript.js` |

##### `checkFunctionExpressionOrObjectLiteralMethodDeferred` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |      % |                Size |       Objects | Caller              | Location                                      |
| ------: | ----------: | -----: | ------------------: | ------------: | ------------------- | --------------------------------------------- |
| +563.9% | +14.136 MiB | 100.0% | 2.51 MiB → 16.6 MiB | 430 → 148,260 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionForMutableLocation` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |            % |           Size |     Objects | Caller                    | Location                                      |
| -----: | ----------: | -----------: | -------------: | ----------: | ------------------------- | --------------------------------------------- |
|    new | +10.511 MiB | 0.0% → 76.3% | 0 B → 10.5 MiB | 0 → 132,081 | `checkArrayLiteral`       | `./node_modules/typescript/lib/typescript.js` |
|    new |  +3.261 MiB | 0.0% → 23.7% | 0 B → 3.26 MiB |   0 → 5,544 | `checkPropertyAssignment` | `./node_modules/typescript/lib/typescript.js` |

##### `inferFromSignature` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |              Size |    Objects | Caller                 | Location                                      |
| -----: | ----------: | ------------: | ----------------: | ---------: | ---------------------- | --------------------------------------------- |
|    new | +11.518 MiB |  0.0% → 95.8% |    0 B → 11.5 MiB | 0 → 65,728 | `inferFromObjectTypes` | `./node_modules/typescript/lib/typescript.js` |
|  +0.2% |      +800 B | 100.0% → 4.2% | 513 KiB → 514 KiB |  469 → 137 | `inferFromSignatures`  | `./node_modules/typescript/lib/typescript.js` |

##### `typeArgumentsRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |      % |             Size |      Objects | Caller            | Location                                      |
| ------: | ---------: | -----: | ---------------: | -----------: | ----------------- | --------------------------------------------- |
| +956.5% | +9.602 MiB | 100.0% | 1 MiB → 10.6 MiB | 294 → 86,105 | `relateVariances` | `./node_modules/typescript/lib/typescript.js` |

##### `isPropertySymbolTypeRelated` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |      % |                Size |          Objects | Caller              | Location                                      |
| ------: | ---------: | -----: | ------------------: | ---------------: | ------------------- | --------------------------------------------- |
| +127.0% | +8.737 MiB | 100.0% | 6.88 MiB → 15.6 MiB | 59,510 → 130,687 | `propertyRelatedTo` | `./node_modules/typescript/lib/typescript.js` |

##### `getPropertiesOfObjectType` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |          Size |    Objects | Caller                            | Location                                      |
| -----: | -----------: | -----------: | ------------: | ---------: | --------------------------------- | --------------------------------------------- |
|    new |   +5.501 MiB | 0.0% → 64.7% | 0 B → 5.5 MiB | 0 → 31,702 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js` |
|    new |     +2.5 MiB | 0.0% → 29.4% | 0 B → 2.5 MiB | 0 → 14,463 | `propertiesIdenticalTo`           | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.156 KiB |  0.0% → 5.9% | 0 B → 512 KiB |    0 → 607 | `getPropertiesOfType`             | `./node_modules/typescript/lib/typescript.js` |

##### `parseVariableStatement` (`./node_modules/typescript/lib/typescript.js`)

| Change |          Delta |              % |          Size |      Objects | Caller                   | Location                                               |
| -----: | -------------: | -------------: | ------------: | -----------: | ------------------------ | ------------------------------------------------------ |
|    new |       +6.5 MiB |   0.0% → 76.5% | 0 B → 6.5 MiB |   0 → 53,840 | `(anonymous)`            | `./node_modules/typescript/lib/typescript.js:37111:56` |
| +99.5% | +1,021.781 KiB | 100.0% → 23.5% | 1 MiB → 2 MiB | 581 → 20,054 | `parseDeclarationWorker` | `./node_modules/typescript/lib/typescript.js`          |

##### `resolveSignature` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |      % |                Size |        Objects | Caller                 | Location                                      |
| ------: | --------: | -----: | ------------------: | -------------: | ---------------------- | --------------------------------------------- |
| +203.2% | +7.13 MiB | 100.0% | 3.51 MiB → 10.6 MiB | 1,542 → 57,386 | `getResolvedSignature` | `./node_modules/typescript/lib/typescript.js` |

##### `checkTypeAssignableTo` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |               Size |         Objects | Caller                         | Location                                                          |
| ------: | -----------: | ------------: | -----------------: | --------------: | ------------------------------ | ----------------------------------------------------------------- |
| +607.9% |   +9.126 MiB | 20.0% → 72.6% | 1.5 MiB → 10.6 MiB | 10,686 → 61,422 | `checkTypeArgumentConstraints` | `./node_modules/typescript/lib/typescript.js`                     |
|  -40.0% |   -2.001 MiB | 66.7% → 20.5% |      5 MiB → 3 MiB | 40,296 → 13,821 | `(anonymous)`                  | `./node_modules/typescript/lib/typescript.js:85458:27 → 86753:27` |
|     new |   +514.5 KiB |   0.0% → 3.4% |      0 B → 515 KiB |         0 → 168 | `getIteratedTypeOrElementType` | `./node_modules/typescript/lib/typescript.js`                     |
| removed | -512.109 KiB |   6.7% → 0.0% |      512 KiB → 0 B |       3,450 → 0 | `(anonymous)`                  | `./node_modules/typescript/lib/typescript.js:85960:23`            |

##### `eachTypeRelatedToType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |      % |             Size |        Objects | Caller                         | Location                                      |
| ------: | --------: | -----: | ---------------: | -------------: | ------------------------------ | --------------------------------------------- |
| +710.1% | +7.12 MiB | 100.0% | 1 MiB → 8.12 MiB | 2,321 → 58,451 | `unionOrIntersectionRelatedTo` | `./node_modules/typescript/lib/typescript.js` |

##### `getResolvedSignature` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |      % |                Size |        Objects | Caller                | Location                                      |
| ------: | ---------: | -----: | ------------------: | -------------: | --------------------- | --------------------------------------------- |
| +165.3% | +6.629 MiB | 100.0% | 4.01 MiB → 10.6 MiB | 1,590 → 57,386 | `checkCallExpression` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

| Change |      Delta |      % |                Size |          Objects | Caller        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

| Change |      Delta |      % |                Size |          Objects | Caller        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

| Change |      Delta |      % |                Size |          Objects | Caller           | Location                           |
| -----: | ---------: | -----: | ------------------: | ---------------: | ---------------- | ---------------------------------- |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

| Change |      Delta |      % |                Size |          Objects | Caller    | Location                        |
| -----: | ---------: | -----: | ------------------: | ---------------: | --------- | ------------------------------- |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `require` | `node:internal/modules/helpers` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

| Change |      Delta |      % |                Size |          Objects | Caller        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `require` (`node:internal/modules/helpers`)

| Change |      Delta |      % |                Size |          Objects | Caller             | Location             |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------------ | -------------------- |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `typeCheckProject` | `./tsc-workload.mjs` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

| Change |      Delta |      % |                Size |          Objects | Caller        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +45.8% | +2.128 MiB | 100.0% | 4.65 MiB → 6.78 MiB | 106,787 → 87,697 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `readFileSync` (`node:fs`)

| Change |        Delta |              % |                Size | Objects | Caller            | Location                                      |
| -----: | -----------: | -------------: | ------------------: | ------: | ----------------- | --------------------------------------------- |
|    new |   +1.001 MiB |   0.0% → 10.7% |         0 B → 1 MiB | 0 → 452 | `readFileWorker`  | `./node_modules/typescript/lib/typescript.js` |
|  +1.3% | +110.078 KiB | 100.0% → 89.3% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`            |

##### `tryStatSync` (`node:fs`)

| Change |      Delta |             % |        Size | Objects | Caller         | Location  |
| -----: | ---------: | ------------: | ----------: | ------: | -------------- | --------- |
|    new | +1.001 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 452 | `readFileSync` | `node:fs` |

##### `replace` (`<unknown>`)

| Change |        Delta |             % |          Size | Objects | Caller                 | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------- | --------------------------------------------- |
|    new | +515.625 KiB | 0.0% → 100.0% | 0 B → 516 KiB | 0 → 132 | `getCanonicalFileName` | `./node_modules/typescript/lib/typescript.js` |

##### `delete` (`<unknown>`)

| Change |        Delta |             % |          Size | Objects | Caller            | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | --------------------------------------------- |
|    new | +513.046 KiB | 0.0% → 100.0% | 0 B → 513 KiB | 0 → 398 | `resetMaybeStack` | `./node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|  Change |        Delta |             % |           Size |   Objects | Caller             | Location                                      |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------ | --------------------------------------------- |
|     new |   +1.008 MiB | 0.0% → 100.0% | 0 B → 1.01 MiB | 0 → 2,635 | `declareSymbol`    | `./node_modules/typescript/lib/typescript.js` |
| removed | -522.031 KiB | 100.0% → 0.0% |  522 KiB → 0 B |    52 → 0 | `createMarkerType` | `./node_modules/typescript/lib/typescript.js` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

| Change |        Delta |      % |                Size | Objects | Caller       | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------ | ---------------------------------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `loadSource` | `node:internal/modules/cjs/loader` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

| Change |        Delta |      % |                Size | Objects | Caller        | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ------------- | ------------------------------------------ |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

| Change |       Delta |      % |                Size |         Objects | Caller        | Location                                   |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------- | ------------------------------------------ |
|  +1.2% | +20.312 KiB | 100.0% | 1.63 MiB → 1.65 MiB | 24,582 → 20,245 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `some` (`<unknown>`)

|  Change |        Delta |             % |          Size |   Objects | Caller                  | Location                                      |
| ------: | -----------: | ------------: | ------------: | --------: | ----------------------- | --------------------------------------------- |
|     new | +515.687 KiB | 0.0% → 100.0% | 0 B → 516 KiB |    0 → 74 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B | 5,958 → 0 | `hasExportDeclarations` | `./node_modules/typescript/lib/typescript.js` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

| Change |        Delta |      % |              Size |               Objects | Caller        | Location                       |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------- | ------------------------------ |
| -59.9% | -442.016 MiB | 100.0% | 738 MiB → 296 MiB | 6,116,489 → 2,313,786 | `(anonymous)` | `./datadog-pprof-heap.mjs:1:1` |

##### `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`)

| Change |    Delta |      % |              Size |               Objects | Caller | Location    |
| -----: | -------: | -----: | ----------------: | --------------------: | ------ | ----------- |
| -59.8% | -442 MiB | 100.0% | 739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `next` | `<unknown>` |

##### `next` (`<unknown>`)

|  Change |      Delta |           % |               Size |               Objects | Caller                            | Location                                      |
| ------: | ---------: | ----------: | -----------------: | --------------------: | --------------------------------- | --------------------------------------------- |
|  -59.8% |   -442 MiB |      100.0% |  739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `run`                             | `node:internal/modules/esm/module_job`        |
| removed | -5.501 MiB | 0.7% → 0.0% |      5.5 MiB → 0 B |            69,517 → 0 | `getUnmatchedProperty`            | `./node_modules/typescript/lib/typescript.js` |
|  -46.6% | -3.062 MiB | 0.9% → 1.2% | 6.56 MiB → 3.5 MiB |       48,161 → 44,999 | `inferFromObjectTypes`            | `./node_modules/typescript/lib/typescript.js` |
|     new | +2.507 MiB | 0.0% → 0.8% |     0 B → 2.51 MiB |             0 → 7,782 | `firstOrUndefinedIterator`        | `./node_modules/typescript/lib/typescript.js` |
| removed |   -513 KiB | 0.1% → 0.0% |      513 KiB → 0 B |               456 → 0 | `collectExternalModuleReferences` | `./node_modules/typescript/lib/typescript.js` |

##### `run` (`node:internal/modules/esm/module_job`)

| Change |    Delta |      % |              Size |               Objects | Caller        | Location    |
| -----: | -------: | -----: | ----------------: | --------------------: | ------------- | ----------- |
| -59.8% | -442 MiB | 100.0% | 739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |        Delta |      % |              Size |               Objects | Caller                     | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | -------------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |        Delta |      % |              Size |               Objects | Caller    | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | --------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller                                     | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------------------ | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller                   | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------ | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller                              | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller                          | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller        | Location                                                            |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------- | ------------------------------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller                 | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ---------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller                   | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------ | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller             | Location             |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------ | -------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `typeCheckProject` | `./tsc-workload.mjs` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller            | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller                                | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller                 | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ---------------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller            | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Caller        | Location                                                            |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------- | ------------------------------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |               Size |               Objects | Caller                         | Location                                      |
| ------: | -----------: | ------------: | -----------------: | --------------------: | ------------------------------ | --------------------------------------------- |
|  -57.2% | -216.724 MiB |        100.0% |  379 MiB → 162 MiB | 3,016,611 → 1,219,545 | `checkSourceElement`           | `./node_modules/typescript/lib/typescript.js` |
|  -72.4% | -149.032 MiB | 54.4% → 35.1% | 206 MiB → 56.9 MiB |   1,546,347 → 444,817 | `checkDeferredNode`            | `./node_modules/typescript/lib/typescript.js` |
| removed |  -16.255 MiB |   4.3% → 0.0% |     16.3 MiB → 0 B |           161,659 → 0 | `checkIfStatement`             | `./node_modules/typescript/lib/typescript.js` |
| removed |   -5.004 MiB |   1.3% → 0.0% |        5 MiB → 0 B |            38,254 → 0 | `checkSignatureDeclaration`    | `./node_modules/typescript/lib/typescript.js` |
| removed |       -2 MiB |   0.5% → 0.0% |        2 MiB → 0 B |            17,736 → 0 | `checkVariableLikeDeclaration` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |                Size |             Objects | Caller                      | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------------: | --------------------------- | --------------------------------------------- |
| -76.6% | -211.908 MiB | 73.0% → 40.0% |  277 MiB → 64.8 MiB | 2,207,036 → 501,517 | `checkBlock`                | `./node_modules/typescript/lib/typescript.js` |
| -78.5% | -106.636 MiB | 35.8% → 18.0% |  136 MiB → 29.1 MiB |   997,050 → 199,766 | `checkVariableStatement`    | `./node_modules/typescript/lib/typescript.js` |
| -34.1% |  -59.144 MiB | 45.8% → 70.5% |   173 MiB → 114 MiB | 1,472,785 → 824,517 | `forEach`                   | `./node_modules/typescript/lib/typescript.js` |
| -48.7% |  -32.029 MiB | 17.4% → 20.8% | 65.7 MiB → 33.7 MiB |   642,032 → 262,033 | `checkTypeAliasDeclaration` | `./node_modules/typescript/lib/typescript.js` |
| -81.0% |  -21.293 MiB |   6.9% → 3.1% |    26.3 MiB → 5 MiB |    172,702 → 14,924 | `resolveCall`               | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |               Size |           Objects | Caller                        | Location                                      |
| ------: | ----------: | ------------: | -----------------: | ----------------: | ----------------------------- | --------------------------------------------- |
| removed | -98.138 MiB |  35.3% → 0.0% |     98.1 MiB → 0 B |       776,560 → 0 | `checkSourceElementWorker`    | `./node_modules/typescript/lib/typescript.js` |
|  -61.0% | -75.189 MiB | 44.3% → 53.7% | 123 MiB → 48.1 MiB | 926,666 → 336,475 | `checkDeclarationInitializer` | `./node_modules/typescript/lib/typescript.js` |
|  -63.0% | -46.658 MiB | 26.6% → 30.6% |  74 MiB → 27.4 MiB | 372,363 → 205,240 | `resolveCallExpression`       | `./node_modules/typescript/lib/typescript.js` |
| removed | -27.451 MiB |   9.9% → 0.0% |     27.5 MiB → 0 B |       217,915 → 0 | `checkReturnStatement`        | `./node_modules/typescript/lib/typescript.js` |
|  -97.7% | -21.039 MiB |   7.7% → 0.6% | 21.5 MiB → 512 KiB |   172,932 → 2,521 | `checkArrayLiteral`           | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

|   Change |        Delta |             % |                Size |             Objects | Caller                         | Location                                      |
| -------: | -----------: | ------------: | ------------------: | ------------------: | ------------------------------ | --------------------------------------------- |
|   -66.6% | -128.726 MiB | 52.7% → 36.1% |  193 MiB → 64.4 MiB | 1,708,922 → 589,745 | `createProgram`                | `./node_modules/typescript/lib/typescript.js` |
|   -48.0% |  -81.828 MiB | 46.5% → 49.6% |  170 MiB → 88.5 MiB | 1,469,834 → 626,468 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js` |
|  +662.3% |   +43.12 MiB |  1.8% → 27.8% | 6.51 MiB → 49.6 MiB |    16,086 → 334,281 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js` |
| +1543.4% |  +30.909 MiB |  0.5% → 18.4% |    2 MiB → 32.9 MiB |     9,757 → 283,908 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js` |
|   -61.4% |  -25.659 MiB |  11.4% → 9.0% | 41.8 MiB → 16.1 MiB |   421,311 → 171,984 | `processReferencedFiles`       | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |              Size |             Objects | Caller                              | Location                                      |
| -----: | -----------: | ------------: | ----------------: | ------------------: | ----------------------------------- | --------------------------------------------- |
| -68.0% | -189.147 MiB | 97.0% → 78.8% |  278 MiB → 89 MiB | 1,962,809 → 618,584 | `checkExpression`                   | `./node_modules/typescript/lib/typescript.js` |
| -55.8% |  -39.646 MiB | 24.8% → 27.8% | 71 MiB → 31.4 MiB |   548,795 → 238,555 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js` |
|    new |  +31.282 MiB |  0.0% → 27.7% |    0 B → 31.3 MiB |         0 → 260,531 | `checkExpressionStatement`          | `./node_modules/typescript/lib/typescript.js` |
| -60.5% |    -24.6 MiB |         14.2% | 40.6 MiB → 16 MiB |   314,674 → 191,613 | `checkExpressionWorker`             | `./node_modules/typescript/lib/typescript.js` |
|    new |   +9.511 MiB |   0.0% → 8.4% |    0 B → 9.51 MiB |         0 → 116,452 | `checkExpressionForMutableLocation` | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|  Change |        Delta |             % |               Size |             Objects | Caller                     | Location                                      |
| ------: | -----------: | ------------: | -----------------: | ------------------: | -------------------------- | --------------------------------------------- |
|  -64.9% | -147.473 MiB | 96.8% → 96.4% | 227 MiB → 79.7 MiB | 1,584,376 → 593,224 | `checkDeferredNodes`       | `./node_modules/typescript/lib/typescript.js` |
|  -76.4% |   -6.499 MiB |   3.6% → 2.4% |    8.5 MiB → 2 MiB |     72,863 → 21,339 | `resolveObjectTypeMembers` | `./node_modules/typescript/lib/typescript.js` |
|  -50.0% |       -2 MiB |   1.7% → 2.4% |      4 MiB → 2 MiB |     35,196 → 11,131 | `getNamedMembers`          | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.026 MiB |   0.4% → 0.0% |     1.03 MiB → 0 B |           3,129 → 0 | `mergeSymbolTable`         | `./node_modules/typescript/lib/typescript.js` |
| +200.1% |       +1 MiB |   0.2% → 1.8% |  512 KiB → 1.5 MiB |      16,385 → 6,364 | `setStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|  Change |       Delta |             % |                Size |       Objects | Caller                          | Location                                      |
| ------: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | --------------------------------------------- |
| removed | -10.527 MiB |  16.4% → 0.0% |      10.5 MiB → 0 B |     6,814 → 0 | `resolveObjectTypeMembers`      | `./node_modules/typescript/lib/typescript.js` |
|  -57.7% |  -7.515 MiB | 20.3% → 20.2% |   13 MiB → 5.52 MiB | 7,243 → 2,954 | `addInheritedMembers`           | `./node_modules/typescript/lib/typescript.js` |
|  -59.8% |  -6.015 MiB | 15.7% → 14.8% | 10.1 MiB → 4.05 MiB |       11 → 14 | `resetMaybeStack`               | `./node_modules/typescript/lib/typescript.js` |
|     new |  +3.509 MiB |  0.0% → 12.9% |      0 B → 3.51 MiB |     0 → 2,009 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|  -76.7% |  -3.458 MiB |   7.0% → 3.8% | 4.51 MiB → 1.05 MiB |   7,945 → 571 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|  Change |       Delta |             % |             Size |          Objects | Caller                          | Location                                      |
| ------: | ----------: | ------------: | ---------------: | ---------------: | ------------------------------- | --------------------------------------------- |
|  -67.4% | -15.502 MiB | 47.4% → 44.1% | 23 MiB → 7.5 MiB | 223,372 → 51,749 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js` |
|  -56.5% |  -6.501 MiB | 23.7% → 29.4% | 11.5 MiB → 5 MiB | 144,025 → 60,370 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|  -57.1% |      -4 MiB | 14.4% → 17.6% |    7 MiB → 3 MiB |  74,168 → 33,635 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js` |
| removed |      -2 MiB |   4.1% → 0.0% |      2 MiB → 0 B |       26,735 → 0 | `bindAnonymousTypeWorker`       | `./node_modules/typescript/lib/typescript.js` |
| removed |      -2 MiB |   4.1% → 0.0% |      2 MiB → 0 B |       13,799 → 0 | `bindFunctionOrConstructorType` | `./node_modules/typescript/lib/typescript.js` |

##### `slice` (`node:buffer`)

|  Change |     Delta |             % |           Size | Objects | Caller     | Location      |
| ------: | --------: | ------------: | -------------: | ------: | ---------- | ------------- |
| removed | -8.26 MiB | 100.0% → 0.0% | 8.26 MiB → 0 B | 506 → 0 | `toString` | `node:buffer` |

##### `toString` (`node:buffer`)

|  Change |     Delta |             % |           Size | Objects | Caller           | Location                                      |
| ------: | --------: | ------------: | -------------: | ------: | ---------------- | --------------------------------------------- |
| removed | -8.26 MiB | 100.0% → 0.0% | 8.26 MiB → 0 B | 506 → 0 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

| Change |        Delta |             % |            Size |        Objects | Caller             | Location                                      |
| -----: | -----------: | ------------: | --------------: | -------------: | ------------------ | --------------------------------------------- |
| -90.0% |   -4.501 MiB | 83.3% → 50.0% | 5 MiB → 512 KiB | 24,211 → 2,850 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| -50.0% | -512.078 KiB | 16.7% → 50.0% | 1 MiB → 512 KiB |  6,863 → 2,428 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `splice` (`<unknown>`)

|  Change |    Delta |            % |          Size |    Objects | Caller               | Location                                      |
| ------: | -------: | -----------: | ------------: | ---------: | -------------------- | --------------------------------------------- |
| removed | -2.5 MiB | 62.5% → 0.0% | 2.5 MiB → 0 B | 17,250 → 0 | `getUnionTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `slice` (`<unknown>`)

|  Change |  Delta |            % |        Size |    Objects | Caller             | Location                                      |
| ------: | -----: | -----------: | ----------: | ---------: | ------------------ | --------------------------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B | 32,770 → 0 | `instantiateTypes` | `./node_modules/typescript/lib/typescript.js` |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B | 38,231 → 0 | `addRange`         | `./node_modules/typescript/lib/typescript.js` |

##### `trimEnd` (`<unknown>`)

|  Change |        Delta |            % |          Size |    Objects | Caller             | Location                                      |
| ------: | -----------: | -----------: | ------------: | ---------: | ------------------ | --------------------------------------------- |
| removed | -512.031 KiB | 50.0% → 0.0% | 512 KiB → 0 B | 16,385 → 0 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.031 KiB | 50.0% → 0.0% | 512 KiB → 0 B | 16,385 → 0 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `push` (`<unknown>`)

|  Change |        Delta |            % |          Size |   Objects | Caller                   | Location                                      |
| ------: | -----------: | -----------: | ------------: | --------: | ------------------------ | --------------------------------------------- |
| removed |       -1 MiB | 50.0% → 0.0% |   1 MiB → 0 B | 6,900 → 0 | `getSignaturesOfSymbol`  | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.187 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   745 → 0 | `parseUnionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.187 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 745 | `parseType`              | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.109 KiB | 0.0% → 33.3% | 0 B → 512 KiB | 0 → 3,450 | `instantiateList`        | `./node_modules/typescript/lib/typescript.js` |

##### `split` (`<unknown>`)

|  Change |        Delta |             % |          Size |   Objects | Caller                          | Location                                      |
| ------: | -----------: | ------------: | ------------: | --------: | ------------------------------- | --------------------------------------------- |
| removed | -512.039 KiB | 100.0% → 0.0% | 512 KiB → 0 B | 9,363 → 0 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js` |

##### `charCodeAt` (`<unknown>`)

|  Change |        Delta |             % |          Size |   Objects | Caller    | Location                                      |
| ------: | -----------: | ------------: | ------------: | --------: | --------- | --------------------------------------------- |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B | 3,641 → 0 | `toPath3` | `./node_modules/typescript/lib/typescript.js` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `checkTypeArgumentConstraints` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |               Size |         Objects | Callee                       | Location                                      |
| ------: | ----------: | ------------: | -----------------: | --------------: | ---------------------------- | --------------------------------------------- |
|     new | +18.121 MiB |  0.0% → 44.7% |     0 B → 18.1 MiB |     0 → 141,378 | `getEffectiveTypeArguments2` | `./node_modules/typescript/lib/typescript.js` |
|     new | +11.761 MiB |  0.0% → 29.0% |     0 B → 11.8 MiB |      0 → 97,922 | `checkTypeRelatedTo`         | `./node_modules/typescript/lib/typescript.js` |
| +607.9% |  +9.126 MiB | 75.0% → 26.2% | 1.5 MiB → 10.6 MiB | 10,686 → 61,422 | `checkTypeAssignableTo`      | `./node_modules/typescript/lib/typescript.js` |
| removed |  -512.5 KiB |  25.0% → 0.0% |      513 KiB → 0 B |          80 → 0 | `fillMissingTypeArguments`   | `./node_modules/typescript/lib/typescript.js` |

##### `checkVariableDeclarationList` (`./node_modules/typescript/lib/typescript.js`)

|   Change |       Delta |              % |             Size |         Objects | Callee               | Location                                      |
| -------: | ----------: | -------------: | ---------------: | --------------: | -------------------- | --------------------------------------------- |
| +1543.4% | +30.909 MiB | 100.0% → 92.8% | 2 MiB → 32.9 MiB | 9,757 → 283,908 | `forEach`            | `./node_modules/typescript/lib/typescript.js` |
|      new |   +2.55 MiB |    0.0% → 7.2% |   0 B → 2.55 MiB |      0 → 16,122 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionStatement` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |             Size |     Objects | Callee                  | Location                                      |
| ------: | ----------: | ------------: | ---------------: | ----------: | ----------------------- | --------------------------------------------- |
|     new | +31.282 MiB |  0.0% → 91.2% |   0 B → 31.3 MiB | 0 → 260,531 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js` |
| +200.3% |  +2.008 MiB | 100.0% → 8.8% | 1 MiB → 3.01 MiB | 244 → 6,430 | `checkExpression`       | `./node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |             Size |          Objects | Callee              | Location                                      |
| -----: | -----------: | ------------: | ---------------: | ---------------: | ------------------- | --------------------------------------------- |
| -56.5% |   -6.501 MiB | 85.2% → 12.3% | 11.5 MiB → 5 MiB | 144,025 → 60,370 | `Map`               | `<unknown>`                                   |
|    new |   +3.509 MiB |   0.0% → 8.7% |   0 B → 3.51 MiB |        0 → 2,009 | `set`               | `<unknown>`                                   |
|    new | +512.078 KiB |   0.0% → 1.2% |    0 B → 512 KiB |        0 → 2,521 | `instantiateSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `checkTypeReferenceOrImport` (`./node_modules/typescript/lib/typescript.js`)

|   Change |        Delta |             % |             Size |          Objects | Callee                | Location                                      |
| -------: | -----------: | ------------: | ---------------: | ---------------: | --------------------- | --------------------------------------------- |
| +1108.8% |  +22.196 MiB | 66.7% → 94.2% | 2 MiB → 24.2 MiB | 10,766 → 172,563 | `addLazyDiagnostic`   | `./node_modules/typescript/lib/typescript.js` |
|   +50.1% | +513.117 KiB |  33.3% → 5.8% |  1 MiB → 1.5 MiB |    9,407 → 9,881 | `getTypeFromTypeNode` | `./node_modules/typescript/lib/typescript.js` |

##### `inferFromProperties` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |           Size |    Objects | Callee            | Location                                      |
| -----: | -----------: | -----------: | -------------: | ---------: | ----------------- | --------------------------------------------- |
|    new |  +18.073 MiB | 0.0% → 97.3% | 0 B → 18.1 MiB | 0 → 95,448 | `inferFromTypes`  | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.015 KiB |  0.0% → 2.7% |  0 B → 512 KiB |  0 → 2,979 | `getTypeOfSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `parseParameter` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |           Size |     Objects | Callee                       | Location                                      |
| ------: | -----------: | ------------: | -------------: | ----------: | ---------------------------- | --------------------------------------------- |
|     new |  +11.501 MiB |  0.0% → 62.2% | 0 B → 11.5 MiB | 0 → 101,960 | `parseType`                  | `./node_modules/typescript/lib/typescript.js` |
|     new |       +6 MiB |  0.0% → 32.4% |    0 B → 6 MiB |  0 → 57,427 | `createParameterDeclaration` | `./node_modules/typescript/lib/typescript.js` |
|     new |       +1 MiB |   0.0% → 5.4% |    0 B → 1 MiB |   0 → 8,740 | `parseNameOfParameter`       | `./node_modules/typescript/lib/typescript.js` |
| removed |       -1 MiB | 100.0% → 0.0% |    1 MiB → 0 B |  12,563 → 0 | `parseParameterWorker`       | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.109 KiB |   0.0% → 2.7% |  0 B → 512 KiB |   0 → 4,370 | `parseTypeAnnotation`        | `./node_modules/typescript/lib/typescript.js` |

##### `fillMissingTypeArguments` (`./node_modules/typescript/lib/typescript.js`)

|   Change |      Delta |              % |               Size |          Objects | Callee            | Location                                      |
| -------: | ---------: | -------------: | -----------------: | ---------------: | ----------------- | --------------------------------------------- |
| +1107.6% | +16.62 MiB | 100.0% → 97.3% | 1.5 MiB → 18.1 MiB | 16,466 → 141,378 | `instantiateType` | `./node_modules/typescript/lib/typescript.js` |

##### `addLazyDiagnostic` (`./node_modules/typescript/lib/typescript.js`)

|   Change |       Delta |             % |             Size |          Objects | Callee                                | Location                                                          |
| -------: | ----------: | ------------: | ---------------: | ---------------: | ------------------------------------- | ----------------------------------------------------------------- |
| +1108.8% | +22.196 MiB | 12.1% → 75.1% | 2 MiB → 24.2 MiB | 10,766 → 172,563 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:82238:27 → 83533:27` |
|   -42.9% |  -3.001 MiB | 42.4% → 12.4% |    7 MiB → 4 MiB |  62,220 → 16,629 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:85458:27 → 86753:27` |
|   -37.5% |  -1.501 MiB |  24.2% → 7.8% |  4 MiB → 2.5 MiB |  30,987 → 11,541 | `checkFunctionDeclarationDiagnostics` | `./node_modules/typescript/lib/typescript.js`                     |
|      new |    +1.5 MiB |   0.0% → 4.7% |    0 B → 1.5 MiB |       0 → 21,427 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:83747:23`            |
|  removed |      -1 MiB |   6.1% → 0.0% |      1 MiB → 0 B |        5,378 → 0 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:78620:25`            |

##### `checkFunctionExpressionOrObjectLiteralMethodDeferred` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |      % |                Size |       Objects | Callee               | Location                                      |
| ------: | ----------: | -----: | ------------------: | ------------: | -------------------- | --------------------------------------------- |
| +563.9% | +14.136 MiB | 100.0% | 2.51 MiB → 16.6 MiB | 430 → 148,260 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionForMutableLocation` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |           Size |     Objects | Callee                                          | Location                                      |
| -----: | -----------: | -----------: | -------------: | ----------: | ----------------------------------------------- | --------------------------------------------- |
|    new |   +9.511 MiB | 0.0% → 69.1% | 0 B → 9.51 MiB | 0 → 116,452 | `checkExpressionWorker`                         | `./node_modules/typescript/lib/typescript.js` |
|    new |   +2.253 MiB | 0.0% → 16.4% | 0 B → 2.25 MiB |  0 → 15,740 | `checkExpression`                               | `./node_modules/typescript/lib/typescript.js` |
|    new |   +1.007 MiB |  0.0% → 7.3% | 0 B → 1.01 MiB |   0 → 2,802 | `isConstContext`                                | `./node_modules/typescript/lib/typescript.js` |
|    new | +513.046 KiB |  0.0% → 3.6% |  0 B → 513 KiB |     0 → 110 | `getContextualType2`                            | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.078 KiB |  0.0% → 3.6% |  0 B → 512 KiB |   0 → 2,521 | `instantiateTypeWithSingleGenericCallSignature` | `./node_modules/typescript/lib/typescript.js` |

##### `inferFromSignature` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |              Size |    Objects | Callee                     | Location                                      |
| -----: | -----------: | ------------: | ----------------: | ---------: | -------------------------- | --------------------------------------------- |
|    new |   +9.517 MiB |  0.0% → 79.2% |    0 B → 9.52 MiB | 0 → 39,922 | `applyToParameterTypes`    | `./node_modules/typescript/lib/typescript.js` |
|    new |     +1.5 MiB |  0.0% → 12.5% |     0 B → 1.5 MiB | 0 → 22,356 | `inferFromTypes`           | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.109 KiB |   0.0% → 4.2% |     0 B → 512 KiB |  0 → 3,450 | `getReturnTypeOfSignature` | `./node_modules/typescript/lib/typescript.js` |
|  +0.2% |       +800 B | 100.0% → 4.2% | 513 KiB → 514 KiB |  469 → 137 | `applyToReturnTypes`       | `./node_modules/typescript/lib/typescript.js` |

##### `typeArgumentsRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |      % |             Size |      Objects | Callee        | Location                                      |
| ------: | ---------: | -----: | ---------------: | -----------: | ------------- | --------------------------------------------- |
| +956.5% | +9.602 MiB | 100.0% | 1 MiB → 10.6 MiB | 294 → 86,105 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js` |

##### `isPropertySymbolTypeRelated` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |              % |                Size |          Objects | Callee                      | Location                                      |
| ------: | ----------: | -------------: | ------------------: | ---------------: | --------------------------- | --------------------------------------------- |
| +190.2% | +10.238 MiB | 78.2% → 100.0% | 5.38 MiB → 15.6 MiB | 42,629 → 130,687 | `isRelatedTo`               | `./node_modules/typescript/lib/typescript.js` |
| removed |    -1.5 MiB |   21.8% → 0.0% |       1.5 MiB → 0 B |       16,881 → 0 | `getNonMissingTypeOfSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `getPropertiesOfObjectType` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |          Size |    Objects | Callee                         | Location                                      |
| -----: | -----------: | -----------: | ------------: | ---------: | ------------------------------ | --------------------------------------------- |
|    new |     +4.5 MiB | 0.0% → 52.9% | 0 B → 4.5 MiB | 0 → 23,061 | `resolveTypeReferenceMembers`  | `./node_modules/typescript/lib/typescript.js` |
|    new |       +2 MiB | 0.0% → 23.5% |   0 B → 2 MiB | 0 → 14,612 | `resolveMappedTypeMembers`     | `./node_modules/typescript/lib/typescript.js` |
|    new |     +1.5 MiB | 0.0% → 17.6% | 0 B → 1.5 MiB |  0 → 8,492 | `resolveAnonymousTypeMembers`  | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.156 KiB |  0.0% → 5.9% | 0 B → 512 KiB |    0 → 607 | `resolveStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js` |

##### `parseVariableStatement` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |          Size |    Objects | Callee                         | Location                                      |
| ------: | -----------: | ------------: | ------------: | ---------: | ------------------------------ | --------------------------------------------- |
|     new |   +8.001 MiB |  0.0% → 94.1% |   0 B → 8 MiB | 0 → 70,773 | `parseDelimitedList`           | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.002 MiB | 100.0% → 0.0% |   1 MiB → 0 B |    581 → 0 | `parseVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.039 KiB |   0.0% → 5.9% | 0 B → 512 KiB |  0 → 3,121 | `createBaseNode`               | `./node_modules/typescript/lib/typescript.js` |

##### `resolveSignature` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |             % |               Size |        Objects | Callee                  | Location                                      |
| ------: | ---------: | ------------: | -----------------: | -------------: | ----------------------- | --------------------------------------------- |
| +185.0% | +4.632 MiB | 71.4% → 67.1% | 2.5 MiB → 7.14 MiB | 1,442 → 42,139 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js` |
| +248.6% | +2.498 MiB | 28.6% → 32.9% |    1 MiB → 3.5 MiB |   100 → 15,247 | `resolveNewExpression`  | `./node_modules/typescript/lib/typescript.js` |

##### `checkTypeAssignableTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |               Size |         Objects | Callee               | Location                                      |
| -----: | ---------: | -----: | -----------------: | --------------: | -------------------- | --------------------------------------------- |
| +95.0% | +7.127 MiB | 100.0% | 7.5 MiB → 14.6 MiB | 56,953 → 77,932 | `checkTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js` |

##### `eachTypeRelatedToType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |      % |             Size |        Objects | Callee        | Location                                      |
| ------: | --------: | -----: | ---------------: | -------------: | ------------- | --------------------------------------------- |
| +710.1% | +7.12 MiB | 100.0% | 1 MiB → 8.12 MiB | 2,321 → 58,451 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js` |

##### `getResolvedSignature` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |              % |                Size |        Objects | Callee                  | Location                                      |
| ------: | -----------: | -------------: | ------------------: | -------------: | ----------------------- | --------------------------------------------- |
| +203.2% |    +7.13 MiB | 87.5% → 100.0% | 3.51 MiB → 10.6 MiB | 1,542 → 57,386 | `resolveSignature`      | `./node_modules/typescript/lib/typescript.js` |
| removed | -513.375 KiB |   12.5% → 0.0% |       513 KiB → 0 B |         48 → 0 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

| Change |        Delta |             % |                Size |          Objects | Callee        | Location                                   |
| -----: | -----------: | ------------: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +45.8% |   +2.128 MiB | 36.0% → 44.7% | 4.65 MiB → 6.78 MiB | 106,787 → 87,697 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
|  +1.3% | +110.078 KiB | 64.0% → 55.3% | 8.27 MiB → 8.37 MiB |                1 | `loadSource`  | `node:internal/modules/cjs/loader`         |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

| Change |      Delta |      % |                Size |          Objects | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

| Change |      Delta |      % |                Size |          Objects | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

| Change |      Delta |      % |                Size |          Objects | Callee           | Location                           |
| -----: | ---------: | -----: | ------------------: | ---------------: | ---------------- | ---------------------------------- |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

| Change |      Delta |      % |                Size |          Objects | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `require` (`node:internal/modules/helpers`)

| Change |      Delta |      % |                Size |          Objects | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ---------------: | ------------- | ------------------------------------------ |
| +17.3% | +2.236 MiB | 100.0% | 12.9 MiB → 15.2 MiB | 106,788 → 87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

| Change |       Delta |             % |                Size |         Objects | Callee        | Location                                          |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------- | ------------------------------------------------- |
| +69.9% |  +2.109 MiB | 64.9% → 75.6% | 3.02 MiB → 5.13 MiB | 82,205 → 67,452 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |
|  +1.2% | +20.312 KiB | 35.1% → 24.4% | 1.63 MiB → 1.65 MiB | 24,582 → 20,245 | `wrapSafe`    | `node:internal/modules/cjs/loader`                |

##### `readFileSync` (`node:fs`)

| Change |      Delta |            % |        Size | Objects | Callee        | Location  |
| -----: | ---------: | -----------: | ----------: | ------: | ------------- | --------- |
|    new | +1.001 MiB | 0.0% → 10.7% | 0 B → 1 MiB | 0 → 452 | `tryStatSync` | `node:fs` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

| Change |        Delta |      % |                Size | Objects | Callee         | Location  |
| -----: | -----------: | -----: | ------------------: | ------: | -------------- | --------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

| Change |        Delta |      % |                Size | Objects | Callee            | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ---------------------------------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `some` (`<unknown>`)

|  Change |        Delta |             % |          Size |   Objects | Callee        | Location                                               |
| ------: | -----------: | ------------: | ------------: | --------: | ------------- | ------------------------------------------------------ |
|     new | +515.687 KiB | 0.0% → 100.0% | 0 B → 516 KiB |    0 → 74 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:79055:29` |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B | 5,958 → 0 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:46261:43` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

| Change |        Delta |             % |                Size |               Objects | Callee                             | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ---------------------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 65.3% → 67.3% |   482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js` |
| -66.5% | -160.527 MiB | 32.7% → 27.4% |    241 MiB → 81 MiB |   2,110,933 → 736,758 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js` |
| +17.3% |   +2.236 MiB |   1.8% → 5.1% | 12.9 MiB → 15.2 MiB |      106,788 → 87,698 | `require`                          | `node:internal/modules/helpers`               |
| -50.0% |  -512.14 KiB |   0.1% → 0.2% |     1 MiB → 512 KiB |         8,007 → 3,856 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`)

| Change |        Delta |             % |                Size |               Objects | Callee             | Location                                                 |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ------------------ | -------------------------------------------------------- |
| -59.9% | -442.016 MiB | 99.8% → 99.5% |   738 MiB → 296 MiB | 6,116,489 → 2,313,786 | `typeCheckProject` | `./tsc-workload.mjs`                                     |
|  +1.1% |  +16.539 KiB |   0.2% → 0.5% | 1.47 MiB → 1.48 MiB |                     1 | `profile`          | `./node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `next` (`<unknown>`)

| Change |      Delta |           % |                Size |               Objects | Callee                   | Location                                      |
| -----: | ---------: | ----------: | ------------------: | --------------------: | ------------------------ | --------------------------------------------- |
| -59.8% |   -442 MiB |      100.0% |   739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `(anonymous)`            | `./datadog-pprof-heap.mjs:1:1`                |
| -48.0% | -5.555 MiB | 1.6% → 2.0% | 11.6 MiB → 6.01 MiB |      117,157 → 52,781 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js` |

##### `run` (`node:internal/modules/esm/module_job`)

| Change |    Delta |      % |              Size |               Objects | Callee | Location    |
| -----: | -------: | -----: | ----------------: | --------------------: | ------ | ----------- |
| -59.8% | -442 MiB | 100.0% | 739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

| Change |    Delta |      % |              Size |               Objects | Callee | Location                               |
| -----: | -------: | -----: | ----------------: | --------------------: | ------ | -------------------------------------- |
| -59.8% | -442 MiB | 100.0% | 739 MiB → 297 MiB | 6,116,490 → 2,313,787 | `run`  | `node:internal/modules/esm/module_job` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |        Delta |             % |                Size |               Objects | Callee            | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ----------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 82.7% → 84.9% |   398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js` |
| -63.9% |  -53.424 MiB | 17.3% → 15.1% | 83.5 MiB → 30.1 MiB |     829,939 → 265,709 | `getTypeChecker`  | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |        Delta |      % |              Size |               Objects | Callee                          | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee        | Location                                                            |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------- | ------------------------------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                     | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | -------------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                                     | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------------------ | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                   | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------ | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                              | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee        | Location                                                            |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------- | ------------------------------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee    | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | --------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                 | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ---------------------- | --------------------------------------------- |
| -58.7% | -282.725 MiB | 100.0% | 482 MiB → 199 MiB | 3,884,207 → 1,485,474 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |               Size |             Objects | Callee                       | Location                                      |
| -----: | -----------: | ------------: | -----------------: | ------------------: | ---------------------------- | --------------------------------------------- |
| -64.9% | -147.473 MiB | 57.1% → 47.3% | 227 MiB → 79.7 MiB | 1,584,376 → 593,224 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js` |
| -48.0% |  -81.828 MiB | 42.8% → 52.5% | 170 MiB → 88.5 MiB | 1,469,834 → 626,468 | `forEach`                    | `./node_modules/typescript/lib/typescript.js` |
|  +0.1% |       +472 B |   0.1% → 0.3% |  513 KiB → 514 KiB |             58 → 73 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                  | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee            | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                                | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                 | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ---------------------- | --------------------------------------------- |
| -57.6% | -229.301 MiB | 100.0% | 398 MiB → 169 MiB | 3,054,268 → 1,219,765 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |               Size |             Objects | Callee                     | Location                                      |
| ------: | -----------: | ------------: | -----------------: | ------------------: | -------------------------- | --------------------------------------------- |
|  -59.6% | -168.787 MiB | 74.8% → 70.6% |  283 MiB → 114 MiB | 2,223,122 → 835,798 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js` |
| removed |  -98.138 MiB |  25.9% → 0.0% |     98.1 MiB → 0 B |         776,560 → 0 | `checkExpression`          | `./node_modules/typescript/lib/typescript.js` |
|  -53.1% |  -73.175 MiB | 36.4% → 39.9% | 138 MiB → 64.6 MiB | 1,006,807 → 499,796 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js` |
|  -53.1% |  -73.175 MiB | 36.4% → 39.9% | 138 MiB → 64.6 MiB | 1,006,807 → 499,796 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js` |
|  -59.5% |  -70.385 MiB | 31.2% → 29.5% | 118 MiB → 47.8 MiB | 1,007,194 → 338,181 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                     | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | -------------------------- | --------------------------------------------- |
| -57.2% | -216.724 MiB | 100.0% | 379 MiB → 162 MiB | 3,016,611 → 1,219,545 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |              % |              Size |             Objects | Callee                                          | Location                                      |
| -----: | -----------: | -------------: | ----------------: | ------------------: | ----------------------------------------------- | --------------------------------------------- |
| -68.0% | -189.147 MiB | 100.0% → 99.4% |  278 MiB → 89 MiB | 1,962,809 → 618,584 | `checkExpressionWorker`                         | `./node_modules/typescript/lib/typescript.js` |
| -57.2% |   -2.001 MiB |    1.3% → 1.7% | 3.5 MiB → 1.5 MiB |     14,201 → 21,427 | `instantiateTypeWithSingleGenericCallSignature` | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |                Size |             Objects | Callee               | Location                                                            |
| -----: | ----------: | ------------: | ------------------: | ------------------: | -------------------- | ------------------------------------------------------------------- |
| -66.3% | -81.044 MiB | 33.4% → 23.1% |  122 MiB → 41.2 MiB | 1,050,146 → 351,657 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
| -34.1% | -59.144 MiB | 47.3% → 63.9% |   173 MiB → 114 MiB | 1,472,785 → 824,517 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js`                       |
| -67.3% | -47.682 MiB | 19.3% → 13.0% | 70.9 MiB → 23.2 MiB |   658,776 → 238,088 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122498:30 → 124077:30` |
| -61.4% | -25.659 MiB |  11.4% → 9.0% | 41.8 MiB → 16.1 MiB |   421,311 → 171,984 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35` |
| -81.6% |  -19.95 MiB |   6.7% → 2.5% |  24.5 MiB → 4.5 MiB |    199,825 → 25,893 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124350:42 → 125932:42` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |                Size |             Objects | Callee                                         | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------------: | ---------------------------------------------- | --------------------------------------------- |
| -61.0% | -165.681 MiB | 94.8% → 93.8% |   272 MiB → 106 MiB | 1,931,250 → 781,363 | `checkCallExpression`                          | `./node_modules/typescript/lib/typescript.js` |
| -67.8% |  -34.066 MiB | 17.5% → 14.3% | 50.2 MiB → 16.2 MiB |    221,217 → 73,973 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js` |
| -60.5% |    -24.6 MiB |         14.2% |   40.6 MiB → 16 MiB |   314,674 → 191,613 | `checkExpressionWorker`                        | `./node_modules/typescript/lib/typescript.js` |
| -50.0% |  -22.075 MiB | 15.4% → 19.6% | 44.2 MiB → 22.1 MiB |   309,216 → 116,354 | `checkObjectLiteral`                           | `./node_modules/typescript/lib/typescript.js` |
| -46.5% |  -10.025 MiB |  7.5% → 10.2% | 21.5 MiB → 11.5 MiB |   172,932 → 134,679 | `checkArrayLiteral`                            | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|  Change |        Delta |             % |               Size |             Objects | Callee              | Location                                                          |
| ------: | -----------: | ------------: | -----------------: | ------------------: | ------------------- | ----------------------------------------------------------------- |
|  -64.9% | -147.473 MiB | 96.8% → 96.4% | 227 MiB → 79.7 MiB | 1,584,376 → 593,224 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js`                     |
|  -57.7% |   -7.499 MiB |   5.5% → 6.7% |  13 MiB → 5.51 MiB |    124,444 → 38,834 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
| removed |   -1.026 MiB |   0.4% → 0.0% |     1.03 MiB → 0 B |           3,129 → 0 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:50184:20`            |
|  -50.0% |  -513.39 KiB |   0.4% → 0.6% |    1 MiB → 514 KiB |            131 → 73 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52182:20 → 53423:20` |

##### `Map` (`<unknown>`)

| Change |        Delta |           % |          Size | Objects | Callee | Location    |
| -----: | -----------: | ----------: | ------------: | ------: | ------ | ----------- |
|    new | +513.851 KiB | 0.0% → 3.0% | 0 B → 514 KiB |  0 → 73 | `set`  | `<unknown>` |

##### `toString` (`node:buffer`)

|  Change |     Delta |             % |           Size | Objects | Callee  | Location      |
| ------: | --------: | ------------: | -------------: | ------: | ------- | ------------- |
| removed | -8.26 MiB | 100.0% → 0.0% | 8.26 MiB → 0 B | 506 → 0 | `slice` | `node:buffer` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs`) ← `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`

|  Change |      Delta |           % |               Size |        Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ---------: | ----------: | -----------------: | -------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +7.017 MiB | 0.0% → 2.3% |     0 B → 7.02 MiB |      0 → 3,833 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                      |
|     new |     +3 MiB | 0.0% → 1.0% |        0 B → 3 MiB |     0 → 18,728 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `createStringLiteral` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseVariableStatement` ← `(anonymous)` (37111:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |   +2.5 MiB | 0.0% → 0.8% |      0 B → 2.5 MiB |     0 → 12,606 | `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |     +2 MiB | 0.0% → 0.7% |        0 B → 2 MiB |     0 → 12,485 | `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseVariableStatement` ← `(anonymous)` (37111:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |     +2 MiB | 0.0% → 0.7% |        0 B → 2 MiB |     0 → 10,084 | `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableToAndOptionallyElaborate` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                |
|     new |  +1.75 MiB | 0.0% → 0.6% |     0 B → 1.75 MiB |          0 → 1 | `set` ← `resetMaybeStack` (`./node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (83533:27) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |   +1.5 MiB | 0.0% → 0.5% |      0 B → 1.5 MiB |      0 → 9,364 | `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`) ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new |   +1.5 MiB | 0.0% → 0.5% |      0 B → 1.5 MiB |      0 → 9,364 | `createParameterDeclaration` (`./node_modules/typescript/lib/typescript.js`) ← `parseParameter` ← `(anonymous)` (34471:157) ← `parseDelimitedList` ← `parseParameters` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |   +1.5 MiB | 0.0% → 0.5% |      0 B → 1.5 MiB |     0 → 16,386 | `diag` (`./node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (16:15) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |   +1.5 MiB | 0.0% → 0.5% |      0 B → 1.5 MiB |          0 → 1 | `getNodeLinks` (`./node_modules/typescript/lib/typescript.js`) ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +212.6% | +1.062 MiB | 0.1% → 0.5% | 512 KiB → 1.56 MiB | 9,363 → 17,562 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new | +1.001 MiB | 0.0% → 0.3% |        0 B → 1 MiB |        0 → 573 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |     +1 MiB | 0.0% → 0.3% |        0 B → 1 MiB |      0 → 5,729 | `bindAnonymousDeclaration` (`./node_modules/typescript/lib/typescript.js`) ← `bindSourceFileAsExternalModule` ← `bindSourceFileIfExternalModule` ← `bindWorker` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |     +1 MiB | 0.0% → 0.3% |        0 B → 1 MiB |      0 → 6,243 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseTypeAliasDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |     +1 MiB | 0.0% → 0.3% |        0 B → 1 MiB |      0 → 6,243 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `createUnionTypeNode` ← `parseType` ← `parseParameter` ← `(anonymous)` (34471:157) ← `parseDelimitedList` ← `parseParameters` ← `parseFunctionDeclaration` ← `(anonymous)` (37111:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |     +1 MiB | 0.0% → 0.3% |        0 B → 1 MiB |      0 → 6,243 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `createStringLiteral` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseTypeAliasDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |     +1 MiB | 0.0% → 0.3% |        0 B → 1 MiB |      0 → 6,243 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseParameter` ← `(anonymous)` (34471:157) ← `parseDelimitedList` ← `parseParameters` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |     +1 MiB | 0.0% → 0.3% |        0 B → 1 MiB |      0 → 6,243 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseParameter` ← `(anonymous)` (34471:157) ← `parseDelimitedList` ← `parseParameters` ← `parseFunctionOrConstructorType` ← `parseType` ← `parseParameter` ← `(anonymous)` (34471:157) ← `parseDelimitedList` ← `parseParameters` ← `parseFunctionDeclaration` ← `parseStatement` ← `parseList` ← `parseModuleBlock` ← `parseAmbientExternalModuleDeclaration` ← `parseModuleDeclaration` ← `(anonymous)` (37111:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `(anonymous)` (125782:35) ← `forEach` ← `processReferencedFiles` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `processTypeReferenceDirectives` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124028:24) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |     +1 MiB | 0.0% → 0.3% |        0 B → 1 MiB |      0 → 6,900 | `Map` ← `bindContainer` (`./node_modules/typescript/lib/typescript.js`) ← `bind` ← `bindParameterFlow` ← `bindChildren` ← `bind` ← `bindEach` ← `forEachChildInMethodDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `visitNodes` ← `forEachChildInClassDeclarationOrExpression` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `visitNode2` ← `forEachChildInModuleDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |     +1 MiB | 0.0% → 0.3% |        0 B → 1 MiB |      0 → 5,042 | `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getSignaturesOfType` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `relateVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (83533:27) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs`) ← `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`

|  Change |       Delta |           % |                Size |         Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | ----------: | ----------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -11.002 MiB | 1.5% → 0.0% |        11 MiB → 0 B |      55,465 → 0 | `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -62.8% |  -7.078 MiB | 1.5% → 1.4% | 11.3 MiB → 4.19 MiB |           3 → 1 | `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `checkIdentifier` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -5.5 MiB | 0.7% → 0.0% |       5.5 MiB → 0 B |      34,334 → 0 | `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (36056:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |   -5.25 MiB | 0.7% → 0.0% |      5.25 MiB → 0 B |           3 → 0 | `set` ← `resetMaybeStack` (`./node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `(anonymous)` (82238:27) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |    -4.5 MiB | 0.6% → 0.0% |       4.5 MiB → 0 B |      28,091 → 0 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (36056:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -81.8% |    -4.5 MiB | 0.7% → 0.3% |     5.5 MiB → 1 MiB | 47,919 → 13,219 | `declareSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindPropertyWorker` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -4.5 MiB | 0.6% → 0.0% |       4.5 MiB → 0 B |           3 → 0 | `checkPropertyAccessExpressionOrQualifiedName` (`./node_modules/typescript/lib/typescript.js`) ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -4.008 MiB | 0.5% → 0.0% |      4.01 MiB → 0 B |       2,827 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| removed |      -4 MiB | 0.5% → 0.0% |         4 MiB → 0 B |      24,970 → 0 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `doJSDocScan` ← `parseJSDocCommentWorker` ← `(anonymous)` (31696:71) ← `mapDefined` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -3.5 MiB | 0.5% → 0.0% |       3.5 MiB → 0 B |      21,849 → 0 | `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`) ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |    -3.5 MiB | 0.5% → 0.0% |       3.5 MiB → 0 B |      32,771 → 0 | `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`) ← `getObjectTypeInstantiation` ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `getNonMissingTypeOfSymbol` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `(anonymous)` (82238:27) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |  -3.005 MiB | 0.4% → 0.0% |      3.01 MiB → 0 B |       1,720 → 0 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |      -3 MiB | 0.4% → 0.0% |         3 MiB → 0 B |      15,127 → 0 | `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                       |
| removed |      -3 MiB | 0.4% → 0.0% |         3 MiB → 0 B |      18,728 → 0 | `parseTypeReference` (`./node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseTypeAnnotation` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |      -3 MiB | 0.4% → 0.0% |         3 MiB → 0 B |      33,634 → 0 | `mapDefined` (`./node_modules/typescript/lib/typescript.js`) ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |      -3 MiB | 0.4% → 0.0% |         3 MiB → 0 B |      26,217 → 0 | `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`) ← `parsePropertyName` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -2.515 MiB | 0.3% → 0.0% |      2.52 MiB → 0 B |           1 → 0 | `slice` (`node:buffer`) ← `toString` ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js`) ← `readFile` ← `readFile` ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -49.7% |  -2.501 MiB | 0.7% → 0.8% | 5.03 MiB → 2.53 MiB |           2 → 1 | `readFile` (`./node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (123127:40) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |    -2.5 MiB | 0.3% → 0.0% |       2.5 MiB → 0 B |      13,192 → 0 | `join` ← `doJSDocScan` (`./node_modules/typescript/lib/typescript.js`) ← `parseJSDocCommentWorker` ← `(anonymous)` (31696:71) ← `mapDefined` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |    -2.5 MiB | 0.3% → 0.0% |       2.5 MiB → 0 B |      25,593 → 0 | `createParameterDeclaration` (`./node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (33416:157) ← `parseDelimitedList` ← `parseParameters` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
