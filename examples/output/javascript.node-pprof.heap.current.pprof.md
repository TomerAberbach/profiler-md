# Heap profile

Allocated 299 MiB over 2,313,788 objects (135 B per object).

| Category         |     % |     Size |   Objects |
| ---------------- | ----: | -------: | --------: |
| Third-party      | 78.8% |  236 MiB | 2,068,837 |
| Standard library | 20.5% | 61.3 MiB |   244,950 |
| Native           |  0.7% | 1.96 MiB |         1 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.xkrVDK/profiler-md-input-generation.tORfp3/zod/`.

## Call tree

Call paths to the hottest functions.

```
├── 297 MiB (99.3%) [[via 2 frames]] next
│   ├── 291 MiB (97.3%) (anonymous)  ./datadog-pprof-heap.mjs:1:1
│   │   └── 289 MiB (96.8%) typeCheckProject  ./tsc-workload.mjs
│   │       ├── 193 MiB (64.5%) [[via 9 frames]] (anonymous)  ./node_modules/typescript/lib/typescript.js:124967:37
│   │       │   ├── 163 MiB (54.4%) [[via 4 frames]] checkSourceFileWorker  ./node_modules/typescript/lib/typescript.js
│   │       │   │   ├── 85 MiB (28.4%) forEach
│   │       │   │   │   ├── 52.4 MiB (17.5%) [[via 4–5 frames]] checkSourceElement  ./node_modules/typescript/lib/typescript.js
│   │       │   │   │   │   └── 52.4 MiB (17.5%) 1 more branch, checkSourceElementWorker
│   │       │   │   │   └── 32.6 MiB (10.9%) 2 more branches, largest checkSourceElement (10.1%) and checkParameter (0.8%)
│   │       │   │   └── 77.2 MiB (25.8%) checkDeferredNodes
│   │       │   │       └── 77.2 MiB (25.8%) forEach
│   │       │   │           ├── 74.2 MiB (24.8%) checkDeferredNode  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   ├── 52.9 MiB (17.7%) checkSourceElementWorker
│   │       │   │           │   │   ├── 18.2 MiB (6.1%) [[via 3–4 frames]] checkExpressionStatement  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   │   └── 18.2 MiB (6.1%) checkExpressionWorker
│   │       │   │           │   │   │       ├── 7.16 MiB (2.4%) [[via 4–8 frames]] checkPropertyAccessExpressionOrQualifiedName  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   │       │   └── 6.66 MiB (2.2%) getPropertyOfType
│   │       │   │           │   │   │       │       ├── 5 MiB (1.7%) getPropertiesOfUnionOrIntersectionType
│   │       │   │           │   │   │       │       │   ├── 3.5 MiB (1.2%) [[via 3 frames]] createInstantiatedSymbolTable  (self 1.0%; 10.5% in 51 call stacks)  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   │       │       │   └── 1 MiB (0.3%) set
│   │       │   │           │   │   │       │       └── 1.16 MiB (0.4%) resolveStructuredTypeMembers
│   │       │   │           │   │   │       ├── 3.05 MiB (1.0%) [[via 35 frames]] recursiveTypeRelatedTo  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   │       │   └── 1.5 MiB (0.5%) [[via 7 frames]] instantiateSignature  (2.7% self in 16 call stacks)  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   │       └── 7.02 MiB (2.3%) 5 more branches, largest checkCallExpression (1.7%)  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   ├── 13.6 MiB (4.5%) [[via 3–8 frames]] checkTypeReferenceNode  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   │   ├── 9.26 MiB (3.1%) [[via 3 frames]] isRelatedTo  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   │   │   ├── 1.75 MiB (0.6%) [[via 2 frames]] set  (9.1% self in 47 call stacks)
│   │       │   │           │   │   │   │   └── 6.51 MiB (2.2%) 2 more branches, largest recursiveTypeRelatedTo (2.0%)  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   │   │   └── 4.3 MiB (1.4%) 1 more branch, getTypeFromTypeNodeWorker
│   │       │   │           │   │   └── 21.1 MiB (7.1%) 2 more branches, largest checkVariableDeclaration (6.9%)  ./node_modules/typescript/lib/typescript.js
│   │       │   │           │   └── 21.3 MiB (7.1%) 2 more branches, largest checkFunctionExpressionOrObjectLiteralMethodDeferred (5.1%) and getReturnTypeOfSignature (2.1%)
│   │       │   │           └── 2.5 MiB (0.8%) [[via 9–21 frames]] (anonymous)  (1.8% self in 11 call stacks)  ./node_modules/typescript/lib/typescript.js:53728:21
│   │       │   └── 30.1 MiB (10.1%) 1 more branch, getTypeChecker
│   │       ├── 81 MiB (27.1%) createProgram  ./node_modules/typescript/lib/typescript.js
│   │       │   └── 81 MiB (27.1%) 3 more branches, largest forEach (21.5%) and processTypeReferenceDirective (5.4%)
│   │       └── 15.2 MiB (5.1%) [[via 5 frames]] (anonymous)  node:internal/modules/cjs/loader:1878:37
│   │           ├── 8.37 MiB (2.8%) [[via 2 frames]] readFileSync  node:fs
│   │           └── 6.78 MiB (2.3%) 1 more branch, (anonymous)  :1731:37
│   └── 6.01 MiB (2.0%) 1 more branch, getUnmatchedProperties  ./node_modules/typescript/lib/typescript.js
└── 1.96 MiB (0.7%) (external)
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Objects | Function                        | Location                                               |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 10.5% | 31.5 MiB | 158,824 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js`          |
|  9.1% | 27.3 MiB |  10,379 | `set`                           | `<unknown>`                                            |
|  6.0% |   18 MiB | 112,363 | `createBaseNode`                | `./node_modules/typescript/lib/typescript.js`          |
|  5.5% | 16.5 MiB | 165,589 | `Map`                           | `<unknown>`                                            |
|  3.7% |   11 MiB | 112,363 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js`          |
|  2.8% | 8.37 MiB |       1 | `readFileSync`                  | `node:fs`                                              |
|  2.7% | 8.02 MiB |   7,122 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js`          |
|  2.7% |    8 MiB |  70,851 | `instantiateSignature`          | `./node_modules/typescript/lib/typescript.js`          |
|  2.5% |  7.5 MiB |  57,992 | `instantiateAnonymousType`      | `./node_modules/typescript/lib/typescript.js`          |
|  2.4% | 7.28 MiB |     806 | `readFile`                      | `./node_modules/typescript/lib/typescript.js`          |
|  2.2% |  6.5 MiB |  70,391 | `instantiateList`               | `./node_modules/typescript/lib/typescript.js`          |
|  2.0% |    6 MiB |  57,427 | `createParameterDeclaration`    | `./node_modules/typescript/lib/typescript.js`          |
|  1.9% |  5.7 MiB |       4 | `getResolvedSymbol`             | `./node_modules/typescript/lib/typescript.js`          |
|  1.8% | 5.51 MiB |  38,834 | `(anonymous)`                   | `./node_modules/typescript/lib/typescript.js:53728:21` |
|  1.8% |  5.5 MiB |  48,070 | `parseIdentifierName`           | `./node_modules/typescript/lib/typescript.js`          |
|  1.8% |  5.5 MiB |  27,731 | `instantiateSymbol`             | `./node_modules/typescript/lib/typescript.js`          |
|  1.7% |    5 MiB | 120,158 | `parseDelimitedList`            | `./node_modules/typescript/lib/typescript.js`          |
|  1.5% |  4.5 MiB |  93,617 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js`          |
|  1.2% |  3.5 MiB |  36,756 | `instantiateTypes`              | `./node_modules/typescript/lib/typescript.js`          |
|  1.0% |    3 MiB |  18,727 | `parseNonArrayType`             | `./node_modules/typescript/lib/typescript.js`          |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Third-party

|     % |     Size | Objects | Function                         | Location                                               |
| ----: | -------: | ------: | -------------------------------- | ------------------------------------------------------ |
| 10.5% | 31.5 MiB | 158,824 | `createInstantiatedSymbolTable`  | `./node_modules/typescript/lib/typescript.js`          |
|  6.0% |   18 MiB | 112,363 | `createBaseNode`                 | `./node_modules/typescript/lib/typescript.js`          |
|  3.7% |   11 MiB | 112,363 | `declareSymbol`                  | `./node_modules/typescript/lib/typescript.js`          |
|  2.7% | 8.02 MiB |   7,122 | `checkTypeRelatedTo`             | `./node_modules/typescript/lib/typescript.js`          |
|  2.7% |    8 MiB |  70,851 | `instantiateSignature`           | `./node_modules/typescript/lib/typescript.js`          |
|  2.5% |  7.5 MiB |  57,992 | `instantiateAnonymousType`       | `./node_modules/typescript/lib/typescript.js`          |
|  2.4% | 7.28 MiB |     806 | `readFile`                       | `./node_modules/typescript/lib/typescript.js`          |
|  2.2% |  6.5 MiB |  70,391 | `instantiateList`                | `./node_modules/typescript/lib/typescript.js`          |
|  2.0% |    6 MiB |  57,427 | `createParameterDeclaration`     | `./node_modules/typescript/lib/typescript.js`          |
|  1.9% |  5.7 MiB |       4 | `getResolvedSymbol`              | `./node_modules/typescript/lib/typescript.js`          |
|  1.8% | 5.51 MiB |  38,834 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:53728:21` |
|  1.8% |  5.5 MiB |  48,070 | `parseIdentifierName`            | `./node_modules/typescript/lib/typescript.js`          |
|  1.8% |  5.5 MiB |  27,731 | `instantiateSymbol`              | `./node_modules/typescript/lib/typescript.js`          |
|  1.7% |    5 MiB | 120,158 | `parseDelimitedList`             | `./node_modules/typescript/lib/typescript.js`          |
|  1.5% |  4.5 MiB |  93,617 | `getObjectTypeInstantiation`     | `./node_modules/typescript/lib/typescript.js`          |
|  1.2% |  3.5 MiB |  36,756 | `instantiateTypes`               | `./node_modules/typescript/lib/typescript.js`          |
|  1.0% |    3 MiB |  18,727 | `parseNonArrayType`              | `./node_modules/typescript/lib/typescript.js`          |
|  1.0% |    3 MiB |  18,727 | `parsePropertyOrMethodSignature` | `./node_modules/typescript/lib/typescript.js`          |
|  1.0% |    3 MiB |  35,748 | `createBaseTokenNode`            | `./node_modules/typescript/lib/typescript.js`          |
|  0.8% |  2.5 MiB |  19,279 | `bindFunctionOrConstructorType`  | `./node_modules/typescript/lib/typescript.js`          |

##### Standard library

|    % |     Size | Objects | Function       | Location                           |
| ---: | -------: | ------: | -------------- | ---------------------------------- |
| 9.1% | 27.3 MiB |  10,379 | `set`          | `<unknown>`                        |
| 5.5% | 16.5 MiB | 165,589 | `Map`          | `<unknown>`                        |
| 2.8% | 8.37 MiB |       1 | `readFileSync` | `node:fs`                          |
| 0.6% | 1.65 MiB |  20,245 | `wrapSafe`     | `node:internal/modules/cjs/loader` |
| 0.5% |  1.5 MiB |   7,645 | `push`         | `<unknown>`                        |
| 0.5% |  1.5 MiB |  10,350 | `splice`       | `<unknown>`                        |
| 0.3% | 1.01 MiB |   2,635 | `add`          | `<unknown>`                        |
| 0.3% |    1 MiB |     452 | `tryStatSync`  | `node:fs`                          |
| 0.3% |    1 MiB |   5,278 | `join`         | `<unknown>`                        |
| 0.2% |  516 KiB |     132 | `replace`      | `<unknown>`                        |
| 0.2% |  513 KiB |     398 | `delete`       | `<unknown>`                        |
| 0.2% |  512 KiB |  21,846 | `toString`     | `<unknown>`                        |

#### Lines

Lines with the largest contribution to each function's self size.

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 31.5 MiB | 158,824 | `./node_modules/typescript/lib/typescript.js:60275` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 18 MiB | 112,363 | `./node_modules/typescript/lib/typescript.js:32468` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 11 MiB | 112,363 | `./node_modules/typescript/lib/typescript.js:46190` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Location      |
| -----: | -------: | ------: | ------------- |
| 100.0% | 8.37 MiB |       1 | `node:fs:433` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 8.02 MiB |   7,122 | `./node_modules/typescript/lib/typescript.js:67445` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 8 MiB |  70,851 | `./node_modules/typescript/lib/typescript.js:65988` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 7.5 MiB |  57,992 | `./node_modules/typescript/lib/typescript.js:66215` |

##### `readFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                             |
| -----: | -------: | ------: | ---------------------------------------------------- |
| 100.0% | 7.28 MiB |     806 | `./node_modules/typescript/lib/typescript.js:123140` |

##### `instantiateList` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 6.5 MiB |  70,391 | `./node_modules/typescript/lib/typescript.js:65878` |

##### `createParameterDeclaration` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 6 MiB |  57,427 | `./node_modules/typescript/lib/typescript.js:25241` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 5.7 MiB |       4 | `./node_modules/typescript/lib/typescript.js:71910` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53728:21`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 5.51 MiB |  38,834 | `./node_modules/typescript/lib/typescript.js:53728` |

##### `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 5.5 MiB |  48,070 | `./node_modules/typescript/lib/typescript.js:33379` |

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 5.5 MiB |  27,731 | `./node_modules/typescript/lib/typescript.js:66013` |

##### `parseDelimitedList` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 5 MiB | 120,158 | `./node_modules/typescript/lib/typescript.js:33930` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 4.5 MiB |  93,617 | `./node_modules/typescript/lib/typescript.js:66040` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 3.5 MiB |  36,756 | `./node_modules/typescript/lib/typescript.js:65895` |

##### `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 3 MiB |  18,727 | `./node_modules/typescript/lib/typescript.js:34836` |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 3 MiB |  18,727 | `./node_modules/typescript/lib/typescript.js:34548` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 3 MiB |  35,748 | `./node_modules/typescript/lib/typescript.js:32461` |

##### `bindFunctionOrConstructorType` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 2.5 MiB |  19,279 | `./node_modules/typescript/lib/typescript.js:47501` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Location                                |
| -----: | -------: | ------: | --------------------------------------- |
| 100.0% | 1.65 MiB |  20,245 | `node:internal/modules/cjs/loader:1671` |

##### `tryStatSync` (`node:fs`)

|      % |  Size | Objects | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 1 MiB |     452 | `node:fs:389` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                      |
| ----: | ------: | ------: | ----------------------------- | --------------------------------------------- |
| 95.2% |  30 MiB | 151,261 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js` |
|  4.8% | 1.5 MiB |   7,563 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                          | Location                                      |
| ----: | -------: | ------: | ------------------------------- | --------------------------------------------- |
| 20.2% | 5.52 MiB |   2,954 | `addInheritedMembers`           | `./node_modules/typescript/lib/typescript.js` |
| 14.8% | 4.05 MiB |      14 | `resetMaybeStack`               | `./node_modules/typescript/lib/typescript.js` |
| 12.9% | 3.51 MiB |   2,009 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|  9.4% | 2.56 MiB |   2,393 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js` |
|  7.6% | 2.08 MiB |     206 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                  | Location                                      |
| ----: | ------: | ------: | ----------------------- | --------------------------------------------- |
| 50.0% |   9 MiB |  56,181 | `parseNonArrayType`     | `./node_modules/typescript/lib/typescript.js` |
| 25.0% | 4.5 MiB |  28,092 | `createStringLiteral`   | `./node_modules/typescript/lib/typescript.js` |
| 16.7% |   3 MiB |  18,727 | `createUnionTypeNode`   | `./node_modules/typescript/lib/typescript.js` |
|  2.8% | 512 KiB |   3,121 | `createArrayTypeNode`   | `./node_modules/typescript/lib/typescript.js` |
|  2.8% | 512 KiB |   3,121 | `createBaseDeclaration` | `./node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |    Size | Objects | Caller                          | Location                                      |
| ----: | ------: | ------: | ------------------------------- | --------------------------------------------- |
| 45.5% | 7.5 MiB |  51,749 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js` |
| 30.3% |   5 MiB |  60,370 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
| 18.2% |   3 MiB |  33,635 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js` |
|  3.0% | 512 KiB |   3,450 | `processCommentPragmas`         | `./node_modules/typescript/lib/typescript.js` |
|  3.0% | 512 KiB |  16,385 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                    | Location                                      |
| ----: | ------: | ------: | ----------------------------------------- | --------------------------------------------- |
| 81.8% |   9 MiB |  96,939 | `declareSymbolAndAddToSymbolTable`        | `./node_modules/typescript/lib/typescript.js` |
|  9.1% |   1 MiB |   7,712 | `bindVariableDeclarationOrBindingElement` | `./node_modules/typescript/lib/typescript.js` |
|  4.5% | 512 KiB |   3,856 | `bindBlockScopedDeclaration`              | `./node_modules/typescript/lib/typescript.js` |
|  4.5% | 512 KiB |   3,856 | `bindTypeParameter`                       | `./node_modules/typescript/lib/typescript.js` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Caller            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                                     | Location                                      |
| ----: | -------: | ------: | ------------------------------------------ | --------------------------------------------- |
| 87.5% | 7.02 MiB |   3,833 | `isTypeOrBaseIdenticalTo`                  | `./node_modules/typescript/lib/typescript.js` |
|  6.3% |  515 KiB |     168 | `checkTypeAssignableTo`                    | `./node_modules/typescript/lib/typescript.js` |
|  6.2% |  512 KiB |   3,121 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                         | Location                                      |
| ----: | ------: | ------: | ------------------------------ | --------------------------------------------- |
| 87.5% |   7 MiB |  65,809 | `instantiateList`              | `./node_modules/typescript/lib/typescript.js` |
|  6.3% | 512 KiB |   2,521 | `createSignatureInstantiation` | `./node_modules/typescript/lib/typescript.js` |
|  6.3% | 512 KiB |   2,521 | `instantiateSignatures`        | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                       | Location                                      |
| ----: | ------: | ------: | ---------------------------- | --------------------------------------------- |
| 86.7% | 6.5 MiB |  50,643 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js` |
| 13.3% |   1 MiB |   7,349 | `instantiateMappedType`      | `./node_modules/typescript/lib/typescript.js` |

##### `readFile` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                | Location                                                |
| ----: | -------: | ------: | --------------------- | ------------------------------------------------------- |
| 93.1% | 6.78 MiB |     750 | `(anonymous)`         | `./node_modules/typescript/lib/typescript.js:123127:40` |
|  6.9% |  518 KiB |      56 | `readJsonOrUndefined` | `./node_modules/typescript/lib/typescript.js`           |

##### `instantiateList` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                      |
| ----: | ------: | ------: | ----------------------------- | --------------------------------------------- |
| 92.3% |   6 MiB |  67,270 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js` |
|  7.7% | 512 KiB |   3,121 | `instantiateTypes`            | `./node_modules/typescript/lib/typescript.js` |

##### `createParameterDeclaration` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller           | Location                                      |
| -----: | ----: | ------: | ---------------- | --------------------------------------------- |
| 100.0% | 6 MiB |  57,427 | `parseParameter` | `./node_modules/typescript/lib/typescript.js` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller            | Location                                      |
| -----: | ------: | ------: | ----------------- | --------------------------------------------- |
| 100.0% | 5.7 MiB |       4 | `checkIdentifier` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53728:21`)

|      % |     Size | Objects | Caller    | Location    |
| -----: | -------: | ------: | --------- | ----------- |
| 100.0% | 5.51 MiB |  38,834 | `forEach` | `<unknown>` |

##### `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                      |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------------- |
| 81.8% | 4.5 MiB |  39,330 | `parseEntityNameOfTypeReference`    | `./node_modules/typescript/lib/typescript.js` |
|  9.1% | 512 KiB |   4,370 | `parsePropertyName`                 | `./node_modules/typescript/lib/typescript.js` |
|  9.1% | 512 KiB |   4,370 | `parsePropertyAccessExpressionRest` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                                   | Location                                      |
| ----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 54.5% |   3 MiB |  15,126 | `instantiateSignature`                                   | `./node_modules/typescript/lib/typescript.js` |
| 27.3% | 1.5 MiB |   7,563 | `createErasedSignature`                                  | `./node_modules/typescript/lib/typescript.js` |
|  9.1% | 512 KiB |   2,521 | `getSignatureInstantiationWithoutFillingInTypeArguments` | `./node_modules/typescript/lib/typescript.js` |
|  9.1% | 512 KiB |   2,521 | `createInstantiatedSymbolTable`                          | `./node_modules/typescript/lib/typescript.js` |

##### `parseDelimitedList` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                      |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------------- |
| 50.0% | 2.5 MiB |  49,156 | `parseParameters`                   | `./node_modules/typescript/lib/typescript.js` |
| 20.0% |   1 MiB |  24,578 | `parseArgumentList`                 | `./node_modules/typescript/lib/typescript.js` |
| 10.0% | 512 KiB |   8,193 | `parseVariableStatement`            | `./node_modules/typescript/lib/typescript.js` |
| 10.0% | 512 KiB |  16,385 | `parseBracketedList`                | `./node_modules/typescript/lib/typescript.js` |
| 10.0% | 512 KiB |  21,846 | `parseTypeArgumentsOfTypeReference` | `./node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller                  | Location                                      |
| -----: | ------: | ------: | ----------------------- | --------------------------------------------- |
| 100.0% | 4.5 MiB |  93,617 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                  | Location                                      |
| ----: | ------: | ------: | ----------------------- | --------------------------------------------- |
| 57.1% |   2 MiB |  13,471 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |
| 28.6% |   1 MiB |   6,900 | `getTypeArguments`      | `./node_modules/typescript/lib/typescript.js` |
| 14.3% | 512 KiB |  16,385 | `getConditionalType`    | `./node_modules/typescript/lib/typescript.js` |

##### `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller                          | Location                                      |
| -----: | ----: | ------: | ------------------------------- | --------------------------------------------- |
| 100.0% | 3 MiB |  18,727 | `parseIntersectionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller            | Location                                      |
| -----: | ----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% | 3 MiB |  18,727 | `parseTypeMember` | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller        | Location                                      |
| -----: | ----: | ------: | ------------- | --------------------------------------------- |
| 100.0% | 3 MiB |  35,748 | `createToken` | `./node_modules/typescript/lib/typescript.js` |

##### `bindFunctionOrConstructorType` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller       | Location                                      |
| -----: | ------: | ------: | ------------ | --------------------------------------------- |
| 100.0% | 2.5 MiB |  19,279 | `bindWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.65 MiB |  20,245 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                | Location                                      |
| ----: | ------: | ------: | --------------------- | --------------------------------------------- |
| 33.3% | 512 KiB |     745 | `parseType`           | `./node_modules/typescript/lib/typescript.js` |
| 33.3% | 512 KiB |   3,450 | `getIntersectionType` | `./node_modules/typescript/lib/typescript.js` |
| 33.3% | 512 KiB |   3,450 | `instantiateList`     | `./node_modules/typescript/lib/typescript.js` |

##### `splice` (`<unknown>`)

|      % |    Size | Objects | Caller            | Location                                      |
| -----: | ------: | ------: | ----------------- | --------------------------------------------- |
| 100.0% | 1.5 MiB |  10,350 | `addTypesToUnion` | `./node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|      % |     Size | Objects | Caller          | Location                                      |
| -----: | -------: | ------: | --------------- | --------------------------------------------- |
| 100.0% | 1.01 MiB |   2,635 | `declareSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `tryStatSync` (`node:fs`)

|      % |  Size | Objects | Caller         | Location  |
| -----: | ----: | ------: | -------------- | --------- |
| 100.0% | 1 MiB |     452 | `readFileSync` | `node:fs` |

##### `join` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                      |
| ----: | ------: | ------: | ------------------ | --------------------------------------------- |
| 50.0% | 512 KiB |   2,428 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |
| 50.0% | 512 KiB |   2,850 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |

##### `replace` (`<unknown>`)

|      % |    Size | Objects | Caller                 | Location                                      |
| -----: | ------: | ------: | ---------------------- | --------------------------------------------- |
| 100.0% | 516 KiB |     132 | `getCanonicalFileName` | `./node_modules/typescript/lib/typescript.js` |

##### `delete` (`<unknown>`)

|      % |    Size | Objects | Caller            | Location                                      |
| -----: | ------: | ------: | ----------------- | --------------------------------------------- |
| 100.0% | 513 KiB |     398 | `resetMaybeStack` | `./node_modules/typescript/lib/typescript.js` |

##### `toString` (`<unknown>`)

|      % |    Size | Objects | Caller                | Location                                      |
| -----: | ------: | ------: | --------------------- | --------------------------------------------- |
| 100.0% | 512 KiB |  21,846 | `getIntersectionType` | `./node_modules/typescript/lib/typescript.js` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |    Size |   Objects | Function                                   | Location                                                |
| ----: | ------: | --------: | ------------------------------------------ | ------------------------------------------------------- |
| 99.3% | 297 MiB | 2,313,787 | `(anonymous)`                              | `./datadog-pprof-heap.mjs:1:1`                          |
| 99.3% | 297 MiB | 2,313,787 | `next`                                     | `<unknown>`                                             |
| 99.3% | 297 MiB | 2,313,787 | `run`                                      | `node:internal/modules/esm/module_job`                  |
| 99.3% | 297 MiB | 2,313,787 | `(anonymous)`                              | `<unknown>`                                             |
| 98.8% | 296 MiB | 2,313,786 | `typeCheckProject`                         | `./tsc-workload.mjs`                                    |
| 66.5% | 199 MiB | 1,485,474 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124967:37` |
| 66.5% | 199 MiB | 1,485,474 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124899:76` |
| 66.5% | 199 MiB | 1,485,474 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`           |
| 59.8% | 179 MiB | 1,414,262 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js`           |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Third-party

|     % |    Size |   Objects | Function                                   | Location                                                |
| ----: | ------: | --------: | ------------------------------------------ | ------------------------------------------------------- |
| 66.5% | 199 MiB | 1,485,474 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124967:37` |
| 66.5% | 199 MiB | 1,485,474 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:124899:76` |
| 66.5% | 199 MiB | 1,485,474 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js`           |
| 66.5% | 199 MiB | 1,485,474 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`           |
| 59.8% | 179 MiB | 1,414,262 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js`           |
| 56.5% | 169 MiB | 1,219,765 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js`           |
| 54.2% | 162 MiB | 1,219,545 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js`           |
| 54.2% | 162 MiB | 1,219,545 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js`           |
| 38.3% | 114 MiB |   835,798 | `checkBlock`                               | `./node_modules/typescript/lib/typescript.js`           |
| 37.8% | 113 MiB |   823,250 | `checkExpressionWorker`                    | `./node_modules/typescript/lib/typescript.js`           |

##### Standard library

|     % |     Size |   Objects | Function          | Location                                   |
| ----: | -------: | --------: | ----------------- | ------------------------------------------ |
| 99.3% |  297 MiB | 2,313,787 | `next`            | `<unknown>`                                |
| 99.3% |  297 MiB | 2,313,787 | `run`             | `node:internal/modules/esm/module_job`     |
| 27.7% | 82.7 MiB |   617,477 | `forEach`         | `<unknown>`                                |
|  9.1% | 27.3 MiB |    10,379 | `set`             | `<unknown>`                                |
|  5.7% |   17 MiB |   165,662 | `Map`             | `<unknown>`                                |
|  5.1% | 15.2 MiB |    87,698 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  5.1% | 15.2 MiB |    87,698 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  5.1% | 15.2 MiB |    87,698 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  5.1% | 15.2 MiB |    87,698 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  5.1% | 15.2 MiB |    87,698 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  5.1% | 15.2 MiB |    87,698 | `require`         | `node:internal/modules/helpers`            |
|  3.1% | 9.37 MiB |       453 | `readFileSync`    | `node:fs`                                  |
|  2.8% | 8.37 MiB |         1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  2.8% | 8.37 MiB |         1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  2.3% | 6.78 MiB |    87,697 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.6% | 1.65 MiB |    20,245 | `wrapSafe`        | `node:internal/modules/cjs/loader`         |
|  0.5% |  1.5 MiB |     7,645 | `push`            | `<unknown>`                                |
|  0.5% |  1.5 MiB |    10,350 | `splice`          | `<unknown>`                                |
|  0.3% | 1.01 MiB |     2,635 | `add`             | `<unknown>`                                |
|  0.3% |    1 MiB |       452 | `tryStatSync`     | `node:fs`                                  |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`)

|      % |    Size |   Objects | Caller | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 297 MiB | 2,313,787 | `next` | `<unknown>` |

##### `next` (`<unknown>`)

|      % |     Size |   Objects | Caller                     | Location                                      |
| -----: | -------: | --------: | -------------------------- | --------------------------------------------- |
| 100.0% |  297 MiB | 2,313,787 | `run`                      | `node:internal/modules/esm/module_job`        |
|   1.2% |  3.5 MiB |    44,999 | `inferFromObjectTypes`     | `./node_modules/typescript/lib/typescript.js` |
|   0.8% | 2.51 MiB |     7,782 | `firstOrUndefinedIterator` | `./node_modules/typescript/lib/typescript.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Caller        | Location    |
| -----: | ------: | --------: | ------------- | ----------- |
| 100.0% | 297 MiB | 2,313,787 | `(anonymous)` | `<unknown>` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

|      % |    Size |   Objects | Caller        | Location                       |
| -----: | ------: | --------: | ------------- | ------------------------------ |
| 100.0% | 296 MiB | 2,313,786 | `(anonymous)` | `./datadog-pprof-heap.mjs:1:1` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|      % |    Size |   Objects | Caller                     | Location                                      |
| -----: | ------: | --------: | -------------------------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                                     | Location                                      |
| -----: | ------: | --------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                   | Location                                      |
| -----: | ------: | --------: | ------------------------ | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                              | Location                                      |
| -----: | ------: | --------: | ----------------------------------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                          | Location                                      |
| -----: | ------: | --------: | ------------------------------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller        | Location                                                |
| -----: | ------: | --------: | ------------- | ------------------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124899:76` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

|      % |    Size |   Objects | Caller    | Location                                      |
| -----: | ------: | --------: | --------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                 | Location                                      |
| -----: | ------: | --------: | ---------------------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                   | Location                                      |
| -----: | ------: | --------: | ------------------------ | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller             | Location             |
| -----: | ------: | --------: | ------------------ | -------------------- |
| 100.0% | 199 MiB | 1,485,474 | `typeCheckProject` | `./tsc-workload.mjs` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                         | Location                                      |
| ----: | -------: | ------: | ------------------------------ | --------------------------------------------- |
| 49.6% | 88.5 MiB | 626,468 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js` |
| 36.1% | 64.4 MiB | 589,745 | `createProgram`                | `./node_modules/typescript/lib/typescript.js` |
| 27.8% | 49.6 MiB | 334,281 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js` |
| 18.4% | 32.9 MiB | 283,908 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js` |
|  9.0% | 16.1 MiB | 171,984 | `processReferencedFiles`       | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller            | Location                                      |
| -----: | ------: | --------: | ----------------- | --------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                                | Location                                      |
| -----: | ------: | --------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                 | Location                                      |
| -----: | ------: | --------: | ---------------------- | --------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller            | Location                                      |
| -----: | ------: | --------: | ----------------- | --------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller        | Location                                                |
| -----: | ------: | --------: | ------------- | ------------------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124967:37` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size |   Objects | Caller               | Location                                      |
| -----: | -------: | --------: | -------------------- | --------------------------------------------- |
| 100.0% |  162 MiB | 1,219,545 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js` |
|  35.1% | 56.9 MiB |   444,817 | `checkDeferredNode`  | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                      | Location                                      |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------- |
| 70.5% |  114 MiB | 824,517 | `forEach`                   | `./node_modules/typescript/lib/typescript.js` |
| 40.0% | 64.8 MiB | 501,517 | `checkBlock`                | `./node_modules/typescript/lib/typescript.js` |
| 20.8% | 33.7 MiB | 262,033 | `checkTypeAliasDeclaration` | `./node_modules/typescript/lib/typescript.js` |
| 18.0% | 29.1 MiB | 199,766 | `checkVariableStatement`    | `./node_modules/typescript/lib/typescript.js` |
| 15.6% | 25.2 MiB | 172,719 | `checkModuleDeclaration`    | `./node_modules/typescript/lib/typescript.js` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                     | Location                                      |
| -----: | -------: | ------: | -------------------------- | --------------------------------------------- |
| 100.0% |  114 MiB | 835,798 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |
|   2.3% | 2.66 MiB |  31,653 | `checkTryStatement`        | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                              | Location                                      |
| ----: | -------: | ------: | ----------------------------------- | --------------------------------------------- |
| 78.8% |   89 MiB | 618,584 | `checkExpression`                   | `./node_modules/typescript/lib/typescript.js` |
| 27.8% | 31.4 MiB | 238,555 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js` |
| 27.7% | 31.3 MiB | 260,531 | `checkExpressionStatement`          | `./node_modules/typescript/lib/typescript.js` |
| 18.9% | 21.3 MiB | 155,621 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js` |
| 14.2% |   16 MiB | 191,613 | `checkExpressionWorker`             | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size | Objects | Caller                     | Location                                      |
| ----: | -------: | ------: | -------------------------- | --------------------------------------------- |
| 96.4% | 79.7 MiB | 593,224 | `checkDeferredNodes`       | `./node_modules/typescript/lib/typescript.js` |
|  2.4% |    2 MiB |  21,339 | `resolveObjectTypeMembers` | `./node_modules/typescript/lib/typescript.js` |
|  2.4% |    2 MiB |  11,131 | `getNamedMembers`          | `./node_modules/typescript/lib/typescript.js` |
|  1.8% |  1.5 MiB |   6,364 | `setStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js` |
|  0.6% |  514 KiB |      73 | `extendExportSymbols`      | `./node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                          | Location                                      |
| ----: | -------: | ------: | ------------------------------- | --------------------------------------------- |
| 20.2% | 5.52 MiB |   2,954 | `addInheritedMembers`           | `./node_modules/typescript/lib/typescript.js` |
| 14.8% | 4.05 MiB |      14 | `resetMaybeStack`               | `./node_modules/typescript/lib/typescript.js` |
| 12.9% | 3.51 MiB |   2,009 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|  9.4% | 2.56 MiB |   2,393 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js` |
|  7.6% | 2.08 MiB |     206 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |    Size | Objects | Caller                          | Location                                      |
| ----: | ------: | ------: | ------------------------------- | --------------------------------------------- |
| 44.1% | 7.5 MiB |  51,749 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js` |
| 29.4% |   5 MiB |  60,370 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
| 17.6% |   3 MiB |  33,635 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js` |
|  3.0% | 514 KiB |      73 | `visit`                         | `./node_modules/typescript/lib/typescript.js` |
|  2.9% | 512 KiB |   3,450 | `processCommentPragmas`         | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 15.2 MiB |  87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 15.2 MiB |  87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Caller           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 15.2 MiB |  87,698 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 15.2 MiB |  87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Caller    | Location                        |
| -----: | -------: | ------: | --------- | ------------------------------- |
| 100.0% | 15.2 MiB |  87,698 | `require` | `node:internal/modules/helpers` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Caller             | Location             |
| -----: | -------: | ------: | ------------------ | -------------------- |
| 100.0% | 15.2 MiB |  87,698 | `typeCheckProject` | `./tsc-workload.mjs` |

##### `readFileSync` (`node:fs`)

|     % |     Size | Objects | Caller            | Location                                      |
| ----: | -------: | ------: | ----------------- | --------------------------------------------- |
| 89.3% | 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`            |
| 10.7% |    1 MiB |     452 | `readFileWorker`  | `./node_modules/typescript/lib/typescript.js` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller       | Location                           |
| -----: | -------: | ------: | ------------ | ---------------------------------- |
| 100.0% | 8.37 MiB |       1 | `loadSource` | `node:internal/modules/cjs/loader` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 8.37 MiB |       1 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 6.78 MiB |  87,697 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.65 MiB |  20,245 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                | Location                                      |
| ----: | ------: | ------: | --------------------- | --------------------------------------------- |
| 33.3% | 512 KiB |     745 | `parseType`           | `./node_modules/typescript/lib/typescript.js` |
| 33.3% | 512 KiB |   3,450 | `getIntersectionType` | `./node_modules/typescript/lib/typescript.js` |
| 33.3% | 512 KiB |   3,450 | `instantiateList`     | `./node_modules/typescript/lib/typescript.js` |

##### `splice` (`<unknown>`)

|      % |    Size | Objects | Caller            | Location                                      |
| -----: | ------: | ------: | ----------------- | --------------------------------------------- |
| 100.0% | 1.5 MiB |  10,350 | `addTypesToUnion` | `./node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|      % |     Size | Objects | Caller          | Location                                      |
| -----: | -------: | ------: | --------------- | --------------------------------------------- |
| 100.0% | 1.01 MiB |   2,635 | `declareSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `tryStatSync` (`node:fs`)

|      % |  Size | Objects | Caller         | Location  |
| -----: | ----: | ------: | -------------- | --------- |
| 100.0% | 1 MiB |     452 | `readFileSync` | `node:fs` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Objects | Callee             | Location                                                 |
| ----: | -------: | --------: | ------------------ | -------------------------------------------------------- |
| 99.5% |  296 MiB | 2,313,786 | `typeCheckProject` | `./tsc-workload.mjs`                                     |
|  0.5% | 1.48 MiB |         1 | `profile`          | `./node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `next` (`<unknown>`)

|      % |     Size |   Objects | Callee                   | Location                                      |
| -----: | -------: | --------: | ------------------------ | --------------------------------------------- |
| 100.0% |  297 MiB | 2,313,787 | `(anonymous)`            | `./datadog-pprof-heap.mjs:1:1`                |
|   2.0% | 6.01 MiB |    52,781 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Callee | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 297 MiB | 2,313,787 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location                               |
| -----: | ------: | --------: | ------ | -------------------------------------- |
| 100.0% | 297 MiB | 2,313,787 | `run`  | `node:internal/modules/esm/module_job` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

|     % |     Size |   Objects | Callee                             | Location                                      |
| ----: | -------: | --------: | ---------------------------------- | --------------------------------------------- |
| 67.3% |  199 MiB | 1,485,474 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js` |
| 27.4% |   81 MiB |   736,758 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js` |
|  5.1% | 15.2 MiB |    87,698 | `require`                          | `node:internal/modules/helpers`               |
|  0.2% |  512 KiB |     3,856 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|     % |     Size |   Objects | Callee            | Location                                      |
| ----: | -------: | --------: | ----------------- | --------------------------------------------- |
| 84.9% |  169 MiB | 1,219,765 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js` |
| 15.1% | 30.1 MiB |   265,709 | `getTypeChecker`  | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                                |
| -----: | ------: | --------: | ------------- | ------------------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                      |
| -----: | ------: | --------: | -------------------------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                     | Location                                      |
| -----: | ------: | --------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                   | Location                                      |
| -----: | ------: | --------: | ------------------------ | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                              | Location                                      |
| -----: | ------: | --------: | ----------------------------------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

|      % |    Size |   Objects | Callee                          | Location                                      |
| -----: | ------: | --------: | ------------------------------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                                |
| -----: | ------: | --------: | ------------- | ------------------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:124899:76` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee    | Location                                      |
| -----: | ------: | --------: | --------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                      |
| -----: | ------: | --------: | ---------------------- | --------------------------------------------- |
| 100.0% | 199 MiB | 1,485,474 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee               | Location                                                |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------------- |
| 63.9% |  114 MiB | 824,517 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js`           |
| 23.1% | 41.2 MiB | 351,657 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124028:24` |
| 13.0% | 23.2 MiB | 238,088 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124077:30` |
|  9.0% | 16.1 MiB | 171,984 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:125782:35` |
|  2.5% |  4.5 MiB |  25,893 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:125932:42` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee                       | Location                                      |
| ----: | -------: | ------: | ---------------------------- | --------------------------------------------- |
| 52.5% | 88.5 MiB | 626,468 | `forEach`                    | `./node_modules/typescript/lib/typescript.js` |
| 47.3% | 79.7 MiB | 593,224 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js` |
|  0.3% |  514 KiB |      73 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                  | Location                                      |
| -----: | ------: | --------: | ----------------------- | --------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee            | Location                                      |
| -----: | ------: | --------: | ----------------- | --------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                | Location                                      |
| -----: | ------: | --------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                      |
| -----: | ------: | --------: | ---------------------- | --------------------------------------------- |
| 100.0% | 169 MiB | 1,219,765 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee                     | Location                                      |
| ----: | -------: | ------: | -------------------------- | --------------------------------------------- |
| 70.6% |  114 MiB | 835,798 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js` |
| 39.9% | 64.6 MiB | 499,796 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js` |
| 39.9% | 64.6 MiB | 499,796 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js` |
| 29.5% | 47.8 MiB | 338,181 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js` |
| 21.2% | 34.3 MiB | 266,961 | `checkExpressionStatement` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                      |
| -----: | ------: | --------: | -------------------------- | --------------------------------------------- |
| 100.0% | 162 MiB | 1,219,545 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee               | Location                                      |
| ----: | -------: | ------: | -------------------- | --------------------------------------------- |
| 56.6% | 64.8 MiB | 501,517 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js` |
| 43.4% | 49.6 MiB | 334,281 | `forEach`            | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee                                         | Location                                      |
| ----: | -------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 93.8% |  106 MiB | 781,363 | `checkCallExpression`                          | `./node_modules/typescript/lib/typescript.js` |
| 19.6% | 22.1 MiB | 116,354 | `checkObjectLiteral`                           | `./node_modules/typescript/lib/typescript.js` |
| 14.3% | 16.2 MiB |  73,973 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js` |
| 14.2% |   16 MiB | 191,613 | `checkExpressionWorker`                        | `./node_modules/typescript/lib/typescript.js` |
| 10.2% | 11.5 MiB | 134,679 | `checkArrayLiteral`                            | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size | Objects | Callee              | Location                                               |
| ----: | -------: | ------: | ------------------- | ------------------------------------------------------ |
| 96.4% | 79.7 MiB | 593,224 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js`          |
|  6.7% | 5.51 MiB |  38,834 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:53728:21` |
|  0.6% |  514 KiB |      73 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:53423:20` |

##### `Map` (`<unknown>`)

|    % |    Size | Objects | Callee | Location    |
| ---: | ------: | ------: | ------ | ----------- |
| 3.0% | 514 KiB |      73 | `set`  | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Objects | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 55.3% | 8.37 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader`         |
| 44.7% | 6.78 MiB |  87,697 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 15.2 MiB |  87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 15.2 MiB |  87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 15.2 MiB |  87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Callee           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 15.2 MiB |  87,698 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 15.2 MiB |  87,698 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `readFileSync` (`node:fs`)

|     % |  Size | Objects | Callee        | Location  |
| ----: | ----: | ------: | ------------- | --------- |
| 10.7% | 1 MiB |     452 | `tryStatSync` | `node:fs` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee         | Location  |
| -----: | -------: | ------: | -------------- | --------- |
| 100.0% | 8.37 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Objects | Callee        | Location                                          |
| ----: | -------: | ------: | ------------- | ------------------------------------------------- |
| 75.6% | 5.13 MiB |  67,452 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |
| 24.4% | 1.65 MiB |  20,245 | `wrapSafe`    | `node:internal/modules/cjs/loader`                |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.8% | 8.37 MiB |       1 | `readFileSync` (`node:fs`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader`) ← `loadSource` ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.3% | 7.02 MiB |   3,833 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`) |
| 1.4% | 4.19 MiB |       1 | `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `checkIdentifier` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |    3 MiB |  18,728 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `createStringLiteral` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseVariableStatement` ← `(anonymous)` (37111:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.8% | 2.53 MiB |       1 | `readFile` (`./node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (123127:40) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.8% |  2.5 MiB |  12,606 | `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.7% |    2 MiB |  12,485 | `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseVariableStatement` ← `(anonymous)` (37111:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |    2 MiB |  10,084 | `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableToAndOptionallyElaborate` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                           |
| 0.7% |    2 MiB |  13,799 | `Map` ← `createSymbolTable` (`./node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% |    2 MiB |  31,944 | `declareSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.6% | 1.75 MiB |       1 | `set` ← `resetMaybeStack` (`./node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (83533:27) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% | 1.65 MiB |  20,245 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% | 1.56 MiB |  17,562 | `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |  1.5 MiB |   9,364 | `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`) ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |  1.5 MiB |   9,364 | `createParameterDeclaration` (`./node_modules/typescript/lib/typescript.js`) ← `parseParameter` ← `(anonymous)` (34471:157) ← `parseDelimitedList` ← `parseParameters` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.5% |  1.5 MiB |  11,567 | `bindFunctionOrConstructorType` (`./node_modules/typescript/lib/typescript.js`) ← `bindWorker` ← `bind` ← `bindParameterFlow` ← `bindChildren` ← `bind` ← `bindEach` ← `forEachChildInMethodDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `visitNodes` ← `forEachChildInClassDeclarationOrExpression` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `visitNode2` ← `forEachChildInModuleDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |  1.5 MiB |  16,386 | `diag` (`./node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (16:15) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% |  1.5 MiB |  17,074 | `declareSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindPropertyOrMethodOrAccessor` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% |  1.5 MiB |       1 | `getNodeLinks` (`./node_modules/typescript/lib/typescript.js`) ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`./tsc-workload.mjs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% | 1.48 MiB |       1 | `getAllocationProfile` (`./node_modules/@datadog/pprof/out/src/heap-profiler-bindings.js`) ← `v8Profile` (`./node_modules/@datadog/pprof/out/src/heap-profiler.js`) ← `profile`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
