# Heap profile

Allocated 741 MiB over 6,116,491 objects (127 B per object).

| Category         |     % |     Size |   Objects |
| ---------------- | ----: | -------: | --------: |
| Third-party      | 79.6% |  590 MiB | 5,327,172 |
| Standard library | 20.1% |  149 MiB |   782,764 |
| Native           |  0.3% | 1.98 MiB |         1 |
| Ours             |  0.1% |  512 KiB |     6,554 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.xkrVDK/profiler-md-input-generation.tORfp3/zod/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 739 MiB (99.7%) next
    ├── 726 MiB (98.0%) (anonymous) at ./datadog-pprof-heap.mjs:1:1
    │   └── 725 MiB (97.8%) typeCheckProject at ./tsc-workload.mjs
    │       ├── … 470 MiB (63.4%) (anonymous) at ./node_modules/typescript/lib/typescript.js:123385:37
    │       │   ├── … 386 MiB (52.1%) checkSourceFileWorker at ./node_modules/typescript/lib/typescript.js
    │       │   │   ├── 224 MiB (30.3%) checkDeferredNodes
    │       │   │   │   └── 224 MiB (30.3%) forEach
    │       │   │   │       ├── 217 MiB (29.2%) checkDeferredNode at ./node_modules/typescript/lib/typescript.js
    │       │   │   │       │   ├── 196 MiB (26.4%) checkSourceElementWorker
    │       │   │   │       │   │   ├── … 58.5 MiB (7.9%) checkExpression at ./node_modules/typescript/lib/typescript.js
    │       │   │   │       │   │   │   └── … 58.5 MiB (7.9%) checkExpressionWorker at ./node_modules/typescript/lib/typescript.js
    │       │   │   │       │   │   │       ├── 27.2 MiB (3.7%, self 0.7% globally) checkPropertyAccessExpressionOrQualifiedName
    │       │   │   │       │   │   │       │   └── 26.2 MiB (3.5%) getPropertyOfType
    │       │   │   │       │   │   │       │       ├── 20.5 MiB (2.8%) getPropertiesOfUnionOrIntersectionType
    │       │   │   │       │   │   │       │       │   ├── … 12.5 MiB (1.7%, self 13.2% globally) instantiateSymbol at ./node_modules/typescript/lib/typescript.js
    │       │   │   │       │   │   │       │       │   └── 3.01 MiB (0.4%) set
    │       │   │   │       │   │   │       │       └── 5.66 MiB (0.8%) resolveStructuredTypeMembers …
    │       │   │   │       │   │   │       └── 30.8 MiB (4.2%) 5 more callees, led by (3.8%) checkCallExpression at ./node_modules/typescript/lib/typescript.js
    │       │   │   │       │   │   ├── … 43.3 MiB (5.8%) checkTypeReferenceNode at ./node_modules/typescript/lib/typescript.js
    │       │   │   │       │   │   │   ├── … 27.8 MiB (3.7%, self 0.7% globally) recursiveTypeRelatedTo at ./node_modules/typescript/lib/typescript.js
    │       │   │   │       │   │   │   │   ├── 22 MiB (3.0%) structuredTypeRelatedTo …
    │       │   │   │       │   │   │   │   └── 5.25 MiB (0.7%) resetMaybeStack
    │       │   │   │       │   │   │   │       └── 5.25 MiB (0.7%, self 8.7% globally) set
    │       │   │   │       │   │   │   └── 15 MiB (2.0%) 2 more callees, led by (2.0%) getTypeFromTypeNodeWorker
    │       │   │   │       │   │   └── 94.1 MiB (12.7%) 2 more callees, led by (11.0%) checkVariableDeclaration at ./node_modules/typescript/lib/typescript.js
    │       │   │   │       │   └── 20.8 MiB (2.8%) 4 more callees, led by (2.3%) getReturnTypeOfSignature
    │       │   │   │       └── … 7 MiB (0.9%, self 1.8% globally) (anonymous) at ./node_modules/typescript/lib/typescript.js:52487:21
    │       │   │   └── 162 MiB (21.8%) 2 more callees, led by (21.8%) forEach
    │       │   └── … 80.5 MiB (10.9%) bind at ./node_modules/typescript/lib/typescript.js
    │       │       ├── … 68.5 MiB (9.2%) bindWorker at ./node_modules/typescript/lib/typescript.js
    │       │       │   ├── … 26.5 MiB (3.6%, self 1.4%, self 4.2% globally) declareSymbol at ./node_modules/typescript/lib/typescript.js
    │       │       │   │   └── 16 MiB (2.2%) 2 more callees, led by (2.1%) createSymbolTable
    │       │       │   └── 42 MiB (5.7%) 15 more callees, led by (1.4%) bindPropertyWorker
    │       │       └── 12 MiB (1.6%) 3 more callees, led by (1.3%) bindContainer at ./node_modules/typescript/lib/typescript.js
    │       ├── 241 MiB (32.5%) createProgram at ./node_modules/typescript/lib/typescript.js
    │       │   ├── 193 MiB (26.0%) forEach
    │       │   │   └── 193 MiB (26.0%) 4 more callees, led by (8.8%) (anonymous) at 122498:30
    │       │   └── 48.4 MiB (6.5%) processTypeReferenceDirective …
    │       └── 13.9 MiB (1.9%) 2 more callees, led by (1.7%) require at node:internal/modules/helpers
    └── … 11.6 MiB (1.6%) getUnmatchedProperties at ./node_modules/typescript/lib/typescript.js …
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Objects | Function                        | Location                                               |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------ |
| 13.2% | 97.5 MiB | 491,599 | `instantiateSymbol`             | `./node_modules/typescript/lib/typescript.js`          |
|  8.7% | 64.2 MiB |  32,522 | `set`                           | `<unknown>`                                            |
|  6.5% | 48.5 MiB | 515,734 | `Map`                           | `<unknown>`                                            |
|  4.5% | 33.5 MiB | 206,024 | `createBaseNode`                | `./node_modules/typescript/lib/typescript.js`          |
|  4.2% |   31 MiB | 299,635 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js`          |
|  3.5% |   26 MiB | 200,987 | `instantiateAnonymousType`      | `./node_modules/typescript/lib/typescript.js`          |
|  3.0% | 22.5 MiB | 196,644 | `createBaseIdentifierNode`      | `./node_modules/typescript/lib/typescript.js`          |
|  2.6% |   19 MiB | 136,532 | `instantiateSignature`          | `./node_modules/typescript/lib/typescript.js`          |
|  2.6% |   19 MiB | 118,602 | `parseTypeReference`            | `./node_modules/typescript/lib/typescript.js`          |
|  2.0% |   15 MiB |      10 | `getResolvedSymbol`             | `./node_modules/typescript/lib/typescript.js`          |
|  1.9% |   14 MiB |  87,394 | `parseNonArrayType`             | `./node_modules/typescript/lib/typescript.js`          |
|  1.9% | 13.8 MiB |     647 | `readFile`                      | `./node_modules/typescript/lib/typescript.js`          |
|  1.8% |   13 MiB | 124,444 | `(anonymous)`                   | `./node_modules/typescript/lib/typescript.js:52487:21` |
|  1.8% |   13 MiB | 175,702 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js`          |
|  1.7% | 12.5 MiB | 307,984 | `parseDelimitedList`            | `./node_modules/typescript/lib/typescript.js`          |
|  1.7% | 12.5 MiB | 148,952 | `createBaseTokenNode`           | `./node_modules/typescript/lib/typescript.js`          |
|  1.4% | 10.5 MiB |  97,333 | `instantiateTypes`              | `./node_modules/typescript/lib/typescript.js`          |
|  1.4% | 10.5 MiB |  91,765 | `parseIdentifierName`           | `./node_modules/typescript/lib/typescript.js`          |
|  1.3% |  9.5 MiB | 115,686 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js`          |
|  1.1% |  8.5 MiB |  97,455 | `instantiateList`               | `./node_modules/typescript/lib/typescript.js`          |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Third-party

|     % |     Size | Objects | Function                         | Location                                               |
| ----: | -------: | ------: | -------------------------------- | ------------------------------------------------------ |
| 13.2% | 97.5 MiB | 491,599 | `instantiateSymbol`              | `./node_modules/typescript/lib/typescript.js`          |
|  4.5% | 33.5 MiB | 206,024 | `createBaseNode`                 | `./node_modules/typescript/lib/typescript.js`          |
|  4.2% |   31 MiB | 299,635 | `declareSymbol`                  | `./node_modules/typescript/lib/typescript.js`          |
|  3.5% |   26 MiB | 200,987 | `instantiateAnonymousType`       | `./node_modules/typescript/lib/typescript.js`          |
|  3.0% | 22.5 MiB | 196,644 | `createBaseIdentifierNode`       | `./node_modules/typescript/lib/typescript.js`          |
|  2.6% |   19 MiB | 136,532 | `instantiateSignature`           | `./node_modules/typescript/lib/typescript.js`          |
|  2.6% |   19 MiB | 118,602 | `parseTypeReference`             | `./node_modules/typescript/lib/typescript.js`          |
|  2.0% |   15 MiB |      10 | `getResolvedSymbol`              | `./node_modules/typescript/lib/typescript.js`          |
|  1.9% |   14 MiB |  87,394 | `parseNonArrayType`              | `./node_modules/typescript/lib/typescript.js`          |
|  1.9% | 13.8 MiB |     647 | `readFile`                       | `./node_modules/typescript/lib/typescript.js`          |
|  1.8% |   13 MiB | 124,444 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:52487:21` |
|  1.8% |   13 MiB | 175,702 | `getObjectTypeInstantiation`     | `./node_modules/typescript/lib/typescript.js`          |
|  1.7% | 12.5 MiB | 307,984 | `parseDelimitedList`             | `./node_modules/typescript/lib/typescript.js`          |
|  1.7% | 12.5 MiB | 148,952 | `createBaseTokenNode`            | `./node_modules/typescript/lib/typescript.js`          |
|  1.4% | 10.5 MiB |  97,333 | `instantiateTypes`               | `./node_modules/typescript/lib/typescript.js`          |
|  1.4% | 10.5 MiB |  91,765 | `parseIdentifierName`            | `./node_modules/typescript/lib/typescript.js`          |
|  1.3% |  9.5 MiB | 115,686 | `createNormalizedTypeReference`  | `./node_modules/typescript/lib/typescript.js`          |
|  1.1% |  8.5 MiB |  97,455 | `instantiateList`                | `./node_modules/typescript/lib/typescript.js`          |
|  1.1% |    8 MiB |  69,916 | `createIdentifier`               | `./node_modules/typescript/lib/typescript.js`          |
|  1.1% |    8 MiB |  49,940 | `parsePropertyOrMethodSignature` | `./node_modules/typescript/lib/typescript.js`          |

##### Standard library

|    % |     Size | Objects | Function       | Location                           |
| ---: | -------: | ------: | -------------- | ---------------------------------- |
| 8.7% | 64.2 MiB |  32,522 | `set`          | `<unknown>`                        |
| 6.5% | 48.5 MiB | 515,734 | `Map`          | `<unknown>`                        |
| 1.1% | 8.27 MiB |       1 | `readFileSync` | `node:fs`                          |
| 1.1% | 8.26 MiB |     506 | `slice`        | `node:buffer`                      |
| 0.8% |    6 MiB |  31,074 | `join`         | `<unknown>`                        |
| 0.5% |    4 MiB |  27,600 | `splice`       | `<unknown>`                        |
| 0.3% |    2 MiB |  11,095 | `push`         | `<unknown>`                        |
| 0.3% |    2 MiB |  71,001 | `slice`        | `<unknown>`                        |
| 0.2% | 1.63 MiB |  24,582 | `wrapSafe`     | `node:internal/modules/cjs/loader` |
| 0.1% |    1 MiB |     977 | `next`         | `<unknown>`                        |
| 0.1% |    1 MiB |  32,770 | `trimEnd`      | `<unknown>`                        |
| 0.1% |  522 KiB |      52 | `add`          | `<unknown>`                        |
| 0.1% |  512 KiB |   9,363 | `split`        | `<unknown>`                        |
| 0.1% |  512 KiB |  21,846 | `toString`     | `<unknown>`                        |
| 0.1% |  512 KiB |   3,641 | `charCodeAt`   | `<unknown>`                        |

#### Lines

Lines with the largest contribution to each function's self size.

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 97.5 MiB | 491,599 | `./node_modules/typescript/lib/typescript.js:64758` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 33.5 MiB | 206,024 | `./node_modules/typescript/lib/typescript.js:31416` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 31 MiB | 299,635 | `./node_modules/typescript/lib/typescript.js:44997` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 26 MiB | 200,987 | `./node_modules/typescript/lib/typescript.js:64955` |

##### `createBaseIdentifierNode` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 22.5 MiB | 196,644 | `./node_modules/typescript/lib/typescript.js:31395` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 19 MiB | 136,532 | `./node_modules/typescript/lib/typescript.js:64733` |

##### `parseTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 19 MiB | 118,602 | `./node_modules/typescript/lib/typescript.js:33132` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 15 MiB |      10 | `./node_modules/typescript/lib/typescript.js:70627` |

##### `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 14 MiB |  87,394 | `./node_modules/typescript/lib/typescript.js:33781` |

##### `readFile` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 95.7% | 13.2 MiB |     642 | `./node_modules/typescript/lib/typescript.js:121562` |
|  4.3% |  610 KiB |       5 | `./node_modules/typescript/lib/typescript.js:8747`   |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:52487:21`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 13 MiB | 124,444 | `./node_modules/typescript/lib/typescript.js:52487` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 13 MiB | 175,702 | `./node_modules/typescript/lib/typescript.js:64785` |

##### `parseDelimitedList` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 12.5 MiB | 307,984 | `./node_modules/typescript/lib/typescript.js:32875` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 12.5 MiB | 148,952 | `./node_modules/typescript/lib/typescript.js:31409` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 10.5 MiB |  97,333 | `./node_modules/typescript/lib/typescript.js:64640` |

##### `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                            |
| -----: | -------: | ------: | --------------------------------------------------- |
| 100.0% | 10.5 MiB |  91,765 | `./node_modules/typescript/lib/typescript.js:32324` |

##### `createNormalizedTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 9.5 MiB | 115,686 | `./node_modules/typescript/lib/typescript.js:62541` |

##### `instantiateList` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 8.5 MiB |  97,455 | `./node_modules/typescript/lib/typescript.js:64623` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Location      |
| -----: | -------: | ------: | ------------- |
| 100.0% | 8.27 MiB |       1 | `node:fs:433` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Location          |
| -----: | -------: | ------: | ----------------- |
| 100.0% | 8.26 MiB |     506 | `node:buffer:640` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 8 MiB |  69,916 | `./node_modules/typescript/lib/typescript.js:32283` |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 8 MiB |  49,940 | `./node_modules/typescript/lib/typescript.js:33493` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Location                                |
| -----: | -------: | ------: | --------------------------------------- |
| 100.0% | 1.63 MiB |  24,582 | `node:internal/modules/cjs/loader:1671` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                                   | Location                                      |
| ----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 87.2% |  85 MiB | 428,574 | `resolveObjectTypeMembers`                               | `./node_modules/typescript/lib/typescript.js` |
|  9.7% | 9.5 MiB |  47,899 | `instantiateSignature`                                   | `./node_modules/typescript/lib/typescript.js` |
|  1.5% | 1.5 MiB |   7,563 | `getSignatureInstantiationWithoutFillingInTypeArguments` | `./node_modules/typescript/lib/typescript.js` |
|  1.5% | 1.5 MiB |   7,563 | `createErasedSignature`                                  | `./node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                                   | Location                                      |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------- |
| 20.3% |   13 MiB |   7,243 | `addInheritedMembers`                    | `./node_modules/typescript/lib/typescript.js` |
| 16.4% | 10.5 MiB |   6,814 | `resolveObjectTypeMembers`               | `./node_modules/typescript/lib/typescript.js` |
| 15.7% | 10.1 MiB |      11 | `resetMaybeStack`                        | `./node_modules/typescript/lib/typescript.js` |
|  7.0% | 4.51 MiB |   7,945 | `declareSymbol`                          | `./node_modules/typescript/lib/typescript.js` |
|  6.2% | 4.01 MiB |   2,294 | `getPropertiesOfUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |     Size | Objects | Caller                          | Location                                      |
| ----: | -------: | ------: | ------------------------------- | --------------------------------------------- |
| 47.4% |   23 MiB | 223,372 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js` |
| 23.7% | 11.5 MiB | 144,025 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
| 14.4% |    7 MiB |  74,168 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js` |
|  4.1% |    2 MiB |  26,735 | `bindAnonymousTypeWorker`       | `./node_modules/typescript/lib/typescript.js` |
|  4.1% |    2 MiB |  13,799 | `bindFunctionOrConstructorType` | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                  | Location                                      |
| ----: | -------: | ------: | ----------------------- | --------------------------------------------- |
| 25.4% | 8.51 MiB |  49,969 | `parseParameterWorker`  | `./node_modules/typescript/lib/typescript.js` |
| 20.9% |    7 MiB |  43,696 | `doJSDocScan`           | `./node_modules/typescript/lib/typescript.js` |
| 19.4% |  6.5 MiB |  40,575 | `parseNonArrayType`     | `./node_modules/typescript/lib/typescript.js` |
|  9.0% |    3 MiB |  18,727 | `createBaseDeclaration` | `./node_modules/typescript/lib/typescript.js` |
|  7.5% |  2.5 MiB |  15,605 | `createBaseNode`        | `./node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                    | Location                                      |
| ----: | ------: | ------: | ----------------------------------------- | --------------------------------------------- |
| 74.2% |  23 MiB | 210,406 | `declareSymbolAndAddToSymbolTable`        | `./node_modules/typescript/lib/typescript.js` |
| 12.9% |   4 MiB |  52,876 | `declareModuleMember`                     | `./node_modules/typescript/lib/typescript.js` |
|  4.8% | 1.5 MiB |  17,075 | `bindVariableDeclarationOrBindingElement` | `./node_modules/typescript/lib/typescript.js` |
|  3.2% |   1 MiB |   7,711 | `bindBlockScopedDeclaration`              | `./node_modules/typescript/lib/typescript.js` |
|  3.2% |   1 MiB |   7,711 | `declareClassMember`                      | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                       | Location                                      |
| ----: | -------: | ------: | ---------------------------- | --------------------------------------------- |
| 94.2% | 24.5 MiB | 190,659 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js` |
|  5.8% |  1.5 MiB |  10,328 | `instantiateMappedType`      | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseIdentifierNode` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller             | Location                                      |
| -----: | -------: | ------: | ------------------ | --------------------------------------------- |
| 100.0% | 22.5 MiB | 196,644 | `createIdentifier` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                  | Location                                      |
| ----: | ------: | ------: | ----------------------- | --------------------------------------------- |
| 94.7% |  18 MiB | 131,490 | `instantiateList`       | `./node_modules/typescript/lib/typescript.js` |
|  2.6% | 512 KiB |   2,521 | `getBaseSignature`      | `./node_modules/typescript/lib/typescript.js` |
|  2.6% | 512 KiB |   2,521 | `instantiateSignatures` | `./node_modules/typescript/lib/typescript.js` |

##### `parseTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller              | Location                                      |
| -----: | -----: | ------: | ------------------- | --------------------------------------------- |
| 100.0% | 19 MiB | 118,602 | `parseNonArrayType` | `./node_modules/typescript/lib/typescript.js` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller            | Location                                      |
| -----: | -----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% | 15 MiB |      10 | `checkIdentifier` | `./node_modules/typescript/lib/typescript.js` |

##### `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller                          | Location                                      |
| -----: | -----: | ------: | ------------------------------- | --------------------------------------------- |
| 100.0% | 14 MiB |  87,394 | `parseIntersectionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |

##### `readFile` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                | Location                                                |
| ----: | -------: | ------: | --------------------- | ------------------------------------------------------- |
| 92.1% | 12.7 MiB |     229 | `(anonymous)`         | `./node_modules/typescript/lib/typescript.js:121549:40` |
|  4.3% |  610 KiB |       5 | `readFile`            | `./node_modules/typescript/lib/typescript.js`           |
|  3.6% |  513 KiB |     413 | `readJsonOrUndefined` | `./node_modules/typescript/lib/typescript.js`           |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:52487:21`)

|      % |   Size | Objects | Caller    | Location    |
| -----: | -----: | ------: | --------- | ----------- |
| 100.0% | 13 MiB | 124,444 | `forEach` | `<unknown>` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller                  | Location                                      |
| -----: | -----: | ------: | ----------------------- | --------------------------------------------- |
| 100.0% | 13 MiB | 175,702 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `parseDelimitedList` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                      |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------------- |
| 44.0% | 5.5 MiB | 125,699 | `parseParameters`                   | `./node_modules/typescript/lib/typescript.js` |
| 16.0% |   2 MiB |  60,078 | `parseDeclarationWorker`            | `./node_modules/typescript/lib/typescript.js` |
| 12.0% | 1.5 MiB |  26,627 | `parseObjectLiteralExpression`      | `./node_modules/typescript/lib/typescript.js` |
| 12.0% | 1.5 MiB |  40,963 | `parseTypeArgumentsOfTypeReference` | `./node_modules/typescript/lib/typescript.js` |
|  8.0% |   1 MiB |  24,578 | `parseHeritageClause`               | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller        | Location                                      |
| -----: | -------: | ------: | ------------- | --------------------------------------------- |
| 100.0% | 12.5 MiB | 148,952 | `createToken` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                  | Location                                      |
| -----: | -------: | ------: | ----------------------- | --------------------------------------------- |
| 100.0% | 10.5 MiB |  97,333 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                      |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------------- |
| 85.7% |   9 MiB |  78,655 | `parsePropertyName`                 | `./node_modules/typescript/lib/typescript.js` |
|  4.8% | 512 KiB |   4,370 | `parseMappedTypeParameter`          | `./node_modules/typescript/lib/typescript.js` |
|  4.8% | 512 KiB |   4,370 | `parsePropertyAccessExpressionRest` | `./node_modules/typescript/lib/typescript.js` |
|  4.8% | 512 KiB |   4,370 | `parseTypeQuery`                    | `./node_modules/typescript/lib/typescript.js` |

##### `createNormalizedTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller                  | Location                                      |
| -----: | ------: | ------: | ----------------------- | --------------------------------------------- |
| 100.0% | 9.5 MiB | 115,686 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                      |
| ----: | ------: | ------: | ----------------------------- | --------------------------------------------- |
| 88.2% | 7.5 MiB |  64,685 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js` |
| 11.8% |   1 MiB |  32,770 | `instantiateSignatures`       | `./node_modules/typescript/lib/typescript.js` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Caller            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Caller     | Location      |
| -----: | -------: | ------: | ---------- | ------------- |
| 100.0% | 8.26 MiB |     506 | `toString` | `node:buffer` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                     | Location                                      |
| ----: | ------: | ------: | -------------------------- | --------------------------------------------- |
| 37.5% |   3 MiB |  26,219 | `parseIdentifierOrPattern` | `./node_modules/typescript/lib/typescript.js` |
| 25.0% |   2 MiB |  17,479 | `parseBindingIdentifier`   | `./node_modules/typescript/lib/typescript.js` |
| 18.7% | 1.5 MiB |  13,109 | `parseFunctionDeclaration` | `./node_modules/typescript/lib/typescript.js` |
| 12.5% |   1 MiB |   8,739 | `parseNameOfParameter`     | `./node_modules/typescript/lib/typescript.js` |
|  6.3% | 512 KiB |   4,370 | `parseVariableDeclaration` | `./node_modules/typescript/lib/typescript.js` |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller            | Location                                      |
| -----: | ----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% | 8 MiB |  49,940 | `parseTypeMember` | `./node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

|     % |  Size | Objects | Caller             | Location                                      |
| ----: | ----: | ------: | ------------------ | --------------------------------------------- |
| 83.3% | 5 MiB |  24,211 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| 16.7% | 1 MiB |   6,863 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `splice` (`<unknown>`)

|     % |    Size | Objects | Caller               | Location                                      |
| ----: | ------: | ------: | -------------------- | --------------------------------------------- |
| 62.5% | 2.5 MiB |  17,250 | `getUnionTypeWorker` | `./node_modules/typescript/lib/typescript.js` |
| 37.5% | 1.5 MiB |  10,350 | `addTypesToUnion`    | `./node_modules/typescript/lib/typescript.js` |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                   | Location                                      |
| ----: | ------: | ------: | ------------------------ | --------------------------------------------- |
| 50.0% |   1 MiB |   6,900 | `getSignaturesOfSymbol`  | `./node_modules/typescript/lib/typescript.js` |
| 25.0% | 512 KiB |     745 | `parseUnionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |
| 25.0% | 512 KiB |   3,450 | `getIntersectionType`    | `./node_modules/typescript/lib/typescript.js` |

##### `slice` (`<unknown>`)

|     % |  Size | Objects | Caller             | Location                                      |
| ----: | ----: | ------: | ------------------ | --------------------------------------------- |
| 50.0% | 1 MiB |  32,770 | `instantiateTypes` | `./node_modules/typescript/lib/typescript.js` |
| 50.0% | 1 MiB |  38,231 | `addRange`         | `./node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.63 MiB |  24,582 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `next` (`<unknown>`)

|     % |    Size | Objects | Caller                            | Location                                      |
| ----: | ------: | ------: | --------------------------------- | --------------------------------------------- |
| 50.0% | 513 KiB |     456 | `collectExternalModuleReferences` | `./node_modules/typescript/lib/typescript.js` |
| 50.0% | 513 KiB |     521 | `getUnmatchedProperty`            | `./node_modules/typescript/lib/typescript.js` |

##### `trimEnd` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                      |
| ----: | ------: | ------: | ------------------ | --------------------------------------------- |
| 50.0% | 512 KiB |  16,385 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| 50.0% | 512 KiB |  16,385 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|      % |    Size | Objects | Caller             | Location                                      |
| -----: | ------: | ------: | ------------------ | --------------------------------------------- |
| 100.0% | 522 KiB |      52 | `createMarkerType` | `./node_modules/typescript/lib/typescript.js` |

##### `split` (`<unknown>`)

|      % |    Size | Objects | Caller                          | Location                                      |
| -----: | ------: | ------: | ------------------------------- | --------------------------------------------- |
| 100.0% | 512 KiB |   9,363 | `getLibraryNameFromLibFileName` | `./node_modules/typescript/lib/typescript.js` |

##### `toString` (`<unknown>`)

|      % |    Size | Objects | Caller                | Location                                      |
| -----: | ------: | ------: | --------------------- | --------------------------------------------- |
| 100.0% | 512 KiB |  21,846 | `getIntersectionType` | `./node_modules/typescript/lib/typescript.js` |

##### `charCodeAt` (`<unknown>`)

|      % |    Size | Objects | Caller    | Location                                      |
| -----: | ------: | ------: | --------- | --------------------------------------------- |
| 100.0% | 512 KiB |   3,641 | `toPath3` | `./node_modules/typescript/lib/typescript.js` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |    Size |   Objects | Function                                   | Location                                                |
| ----: | ------: | --------: | ------------------------------------------ | ------------------------------------------------------- |
| 99.7% | 739 MiB | 6,116,490 | `(anonymous)`                              | `./datadog-pprof-heap.mjs:1:1`                          |
| 99.7% | 739 MiB | 6,116,490 | `next`                                     | `<unknown>`                                             |
| 99.7% | 739 MiB | 6,116,490 | `run`                                      | `node:internal/modules/esm/module_job`                  |
| 99.7% | 739 MiB | 6,116,490 | `(anonymous)`                              | `<unknown>`                                             |
| 99.5% | 738 MiB | 6,116,489 | `typeCheckProject`                         | `./tsc-workload.mjs`                                    |
| 65.0% | 482 MiB | 3,884,207 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 65.0% | 482 MiB | 3,884,207 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 65.0% | 482 MiB | 3,884,207 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js`           |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Third-party

|     % |    Size |   Objects | Function                                   | Location                                                |
| ----: | ------: | --------: | ------------------------------------------ | ------------------------------------------------------- |
| 65.0% | 482 MiB | 3,884,207 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37` |
| 65.0% | 482 MiB | 3,884,207 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76` |
| 65.0% | 482 MiB | 3,884,207 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js`           |
| 65.0% | 482 MiB | 3,884,207 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js`           |
| 53.7% | 398 MiB | 3,054,268 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js`           |
| 51.1% | 379 MiB | 3,016,611 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js`           |
| 51.1% | 379 MiB | 3,016,611 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js`           |
| 49.5% | 366 MiB | 3,181,707 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js`           |
| 38.7% | 287 MiB | 2,027,236 | `checkExpressionWorker`                    | `./node_modules/typescript/lib/typescript.js`           |
| 38.2% | 283 MiB | 2,223,122 | `checkBlock`                               | `./node_modules/typescript/lib/typescript.js`           |

##### Standard library

|     % |     Size |   Objects | Function          | Location                                   |
| ----: | -------: | --------: | ----------------- | ------------------------------------------ |
| 99.7% |  739 MiB | 6,116,490 | `next`            | `<unknown>`                                |
| 99.7% |  739 MiB | 6,116,490 | `run`             | `node:internal/modules/esm/module_job`     |
| 31.7% |  235 MiB | 1,659,120 | `forEach`         | `<unknown>`                                |
|  8.7% | 64.2 MiB |    32,522 | `set`             | `<unknown>`                                |
|  6.5% | 48.5 MiB |   515,734 | `Map`             | `<unknown>`                                |
|  1.7% | 12.9 MiB |   106,788 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  1.7% | 12.9 MiB |   106,788 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  1.7% | 12.9 MiB |   106,788 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  1.7% | 12.9 MiB |   106,788 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  1.7% | 12.9 MiB |   106,788 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  1.7% | 12.9 MiB |   106,788 | `require`         | `node:internal/modules/helpers`            |
|  1.1% | 8.27 MiB |         1 | `readFileSync`    | `node:fs`                                  |
|  1.1% | 8.27 MiB |         1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  1.1% | 8.27 MiB |         1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  1.1% | 8.26 MiB |       506 | `slice`           | `node:buffer`                              |
|  1.1% | 8.26 MiB |       506 | `toString`        | `node:buffer`                              |
|  0.8% |    6 MiB |    31,074 | `join`            | `<unknown>`                                |
|  0.6% | 4.65 MiB |   106,787 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.5% |    4 MiB |    27,600 | `splice`          | `<unknown>`                                |
|  0.3% |    2 MiB |    11,095 | `push`            | `<unknown>`                                |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`)

|      % |    Size |   Objects | Caller | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 739 MiB | 6,116,490 | `next` | `<unknown>` |

##### `next` (`<unknown>`)

|      % |     Size |   Objects | Caller                            | Location                                      |
| -----: | -------: | --------: | --------------------------------- | --------------------------------------------- |
| 100.0% |  739 MiB | 6,116,490 | `run`                             | `node:internal/modules/esm/module_job`        |
|   0.9% | 6.56 MiB |    48,161 | `inferFromObjectTypes`            | `./node_modules/typescript/lib/typescript.js` |
|   0.7% |  5.5 MiB |    69,517 | `getUnmatchedProperty`            | `./node_modules/typescript/lib/typescript.js` |
|   0.1% |  513 KiB |       456 | `collectExternalModuleReferences` | `./node_modules/typescript/lib/typescript.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Caller        | Location    |
| -----: | ------: | --------: | ------------- | ----------- |
| 100.0% | 739 MiB | 6,116,490 | `(anonymous)` | `<unknown>` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

|      % |    Size |   Objects | Caller        | Location                       |
| -----: | ------: | --------: | ------------- | ------------------------------ |
| 100.0% | 738 MiB | 6,116,489 | `(anonymous)` | `./datadog-pprof-heap.mjs:1:1` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|      % |    Size |   Objects | Caller                     | Location                                      |
| -----: | ------: | --------: | -------------------------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                                     | Location                                      |
| -----: | ------: | --------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                   | Location                                      |
| -----: | ------: | --------: | ------------------------ | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                              | Location                                      |
| -----: | ------: | --------: | ----------------------------------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                          | Location                                      |
| -----: | ------: | --------: | ------------------------------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller        | Location                                                |
| -----: | ------: | --------: | ------------- | ------------------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |    Size |   Objects | Caller    | Location                                      |
| -----: | ------: | --------: | --------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                 | Location                                      |
| -----: | ------: | --------: | ---------------------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                   | Location                                      |
| -----: | ------: | --------: | ------------------------ | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getSemanticDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller             | Location             |
| -----: | ------: | --------: | ------------------ | -------------------- |
| 100.0% | 482 MiB | 3,884,207 | `typeCheckProject` | `./tsc-workload.mjs` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller            | Location                                      |
| -----: | ------: | --------: | ----------------- | --------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                                | Location                                      |
| -----: | ------: | --------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller                 | Location                                      |
| -----: | ------: | --------: | ---------------------- | --------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller            | Location                                      |
| -----: | ------: | --------: | ----------------- | --------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Caller        | Location                                                |
| -----: | ------: | --------: | ------------- | ------------------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size |   Objects | Caller                         | Location                                      |
| -----: | -------: | --------: | ------------------------------ | --------------------------------------------- |
| 100.0% |  379 MiB | 3,016,611 | `checkSourceElement`           | `./node_modules/typescript/lib/typescript.js` |
|  54.4% |  206 MiB | 1,546,347 | `checkDeferredNode`            | `./node_modules/typescript/lib/typescript.js` |
|   4.3% | 16.3 MiB |   161,659 | `checkIfStatement`             | `./node_modules/typescript/lib/typescript.js` |
|   1.3% |    5 MiB |    38,254 | `checkSignatureDeclaration`    | `./node_modules/typescript/lib/typescript.js` |
|   0.5% |    2 MiB |    17,736 | `checkVariableLikeDeclaration` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Caller                      | Location                                      |
| ----: | -------: | --------: | --------------------------- | --------------------------------------------- |
| 73.0% |  277 MiB | 2,207,036 | `checkBlock`                | `./node_modules/typescript/lib/typescript.js` |
| 45.8% |  173 MiB | 1,472,785 | `forEach`                   | `./node_modules/typescript/lib/typescript.js` |
| 35.8% |  136 MiB |   997,050 | `checkVariableStatement`    | `./node_modules/typescript/lib/typescript.js` |
| 17.4% | 65.7 MiB |   642,032 | `checkTypeAliasDeclaration` | `./node_modules/typescript/lib/typescript.js` |
| 11.5% | 43.7 MiB |   403,339 | `checkModuleDeclaration`    | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Caller                          | Location                                      |
| ----: | -------: | --------: | ------------------------------- | --------------------------------------------- |
| 52.7% |  193 MiB | 1,708,922 | `createProgram`                 | `./node_modules/typescript/lib/typescript.js` |
| 46.5% |  170 MiB | 1,469,834 | `checkSourceFileWorker`         | `./node_modules/typescript/lib/typescript.js` |
| 11.4% | 41.8 MiB |   421,311 | `processReferencedFiles`        | `./node_modules/typescript/lib/typescript.js` |
| 10.0% | 36.5 MiB |   310,595 | `checkClassDeclaration`         | `./node_modules/typescript/lib/typescript.js` |
|  6.7% | 24.5 MiB |   199,825 | `processLibReferenceDirectives` | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Caller                              | Location                                      |
| ----: | -------: | --------: | ----------------------------------- | --------------------------------------------- |
| 97.0% |  278 MiB | 1,962,809 | `checkExpression`                   | `./node_modules/typescript/lib/typescript.js` |
| 24.8% |   71 MiB |   548,795 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js` |
| 14.2% | 40.6 MiB |   314,674 | `checkExpressionWorker`             | `./node_modules/typescript/lib/typescript.js` |
| 10.5% |   30 MiB |    75,461 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js` |
|  1.6% |  4.5 MiB |    48,426 | `onRight`                           | `./node_modules/typescript/lib/typescript.js` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js`)

|      % |     Size |   Objects | Caller                     | Location                                      |
| -----: | -------: | --------: | -------------------------- | --------------------------------------------- |
| 100.0% |  283 MiB | 2,223,122 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |
|   2.4% | 6.66 MiB |    71,036 | `checkTryStatement`        | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size |   Objects | Caller                     | Location                                      |
| ----: | -------: | --------: | -------------------------- | --------------------------------------------- |
| 96.8% |  227 MiB | 1,584,376 | `checkDeferredNodes`       | `./node_modules/typescript/lib/typescript.js` |
|  3.6% |  8.5 MiB |    72,863 | `resolveObjectTypeMembers` | `./node_modules/typescript/lib/typescript.js` |
|  1.7% |    4 MiB |    35,196 | `getNamedMembers`          | `./node_modules/typescript/lib/typescript.js` |
|  0.4% | 1.03 MiB |     3,129 | `mergeSymbolTable`         | `./node_modules/typescript/lib/typescript.js` |
|  0.2% |  514 KiB |        73 | `visit`                    | `./node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                                   | Location                                      |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------- |
| 20.3% |   13 MiB |   7,243 | `addInheritedMembers`                    | `./node_modules/typescript/lib/typescript.js` |
| 16.4% | 10.5 MiB |   6,814 | `resolveObjectTypeMembers`               | `./node_modules/typescript/lib/typescript.js` |
| 15.7% | 10.1 MiB |      11 | `resetMaybeStack`                        | `./node_modules/typescript/lib/typescript.js` |
|  7.0% | 4.51 MiB |   7,945 | `declareSymbol`                          | `./node_modules/typescript/lib/typescript.js` |
|  6.2% | 4.01 MiB |   2,294 | `getPropertiesOfUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |     Size | Objects | Caller                          | Location                                      |
| ----: | -------: | ------: | ------------------------------- | --------------------------------------------- |
| 47.4% |   23 MiB | 223,372 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js` |
| 23.7% | 11.5 MiB | 144,025 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
| 14.4% |    7 MiB |  74,168 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js` |
|  4.1% |    2 MiB |  26,735 | `bindAnonymousTypeWorker`       | `./node_modules/typescript/lib/typescript.js` |
|  4.1% |    2 MiB |  13,799 | `bindFunctionOrConstructorType` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.9 MiB | 106,788 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.9 MiB | 106,788 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Caller           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 12.9 MiB | 106,788 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.9 MiB | 106,788 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Caller    | Location                        |
| -----: | -------: | ------: | --------- | ------------------------------- |
| 100.0% | 12.9 MiB | 106,788 | `require` | `node:internal/modules/helpers` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Caller             | Location             |
| -----: | -------: | ------: | ------------------ | -------------------- |
| 100.0% | 12.9 MiB | 106,788 | `typeCheckProject` | `./tsc-workload.mjs` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Caller            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller       | Location                           |
| -----: | -------: | ------: | ------------ | ---------------------------------- |
| 100.0% | 8.27 MiB |       1 | `loadSource` | `node:internal/modules/cjs/loader` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 8.27 MiB |       1 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Caller     | Location      |
| -----: | -------: | ------: | ---------- | ------------- |
| 100.0% | 8.26 MiB |     506 | `toString` | `node:buffer` |

##### `toString` (`node:buffer`)

|      % |     Size | Objects | Caller           | Location                                      |
| -----: | -------: | ------: | ---------------- | --------------------------------------------- |
| 100.0% | 8.26 MiB |     506 | `readFileWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

|     % |  Size | Objects | Caller             | Location                                      |
| ----: | ----: | ------: | ------------------ | --------------------------------------------- |
| 83.3% | 5 MiB |  24,211 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| 16.7% | 1 MiB |   6,863 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 4.65 MiB | 106,787 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `splice` (`<unknown>`)

|     % |    Size | Objects | Caller               | Location                                      |
| ----: | ------: | ------: | -------------------- | --------------------------------------------- |
| 62.5% | 2.5 MiB |  17,250 | `getUnionTypeWorker` | `./node_modules/typescript/lib/typescript.js` |
| 37.5% | 1.5 MiB |  10,350 | `addTypesToUnion`    | `./node_modules/typescript/lib/typescript.js` |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                   | Location                                      |
| ----: | ------: | ------: | ------------------------ | --------------------------------------------- |
| 50.0% |   1 MiB |   6,900 | `getSignaturesOfSymbol`  | `./node_modules/typescript/lib/typescript.js` |
| 25.0% | 512 KiB |     745 | `parseUnionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |
| 25.0% | 512 KiB |   3,450 | `getIntersectionType`    | `./node_modules/typescript/lib/typescript.js` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Objects | Callee             | Location                                                 |
| ----: | -------: | --------: | ------------------ | -------------------------------------------------------- |
| 99.8% |  738 MiB | 6,116,489 | `typeCheckProject` | `./tsc-workload.mjs`                                     |
|  0.2% | 1.47 MiB |         1 | `profile`          | `./node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `next` (`<unknown>`)

|      % |     Size |   Objects | Callee                   | Location                                      |
| -----: | -------: | --------: | ------------------------ | --------------------------------------------- |
| 100.0% |  739 MiB | 6,116,490 | `(anonymous)`            | `./datadog-pprof-heap.mjs:1:1`                |
|   1.6% | 11.6 MiB |   117,157 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Callee | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 739 MiB | 6,116,490 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location                               |
| -----: | ------: | --------: | ------ | -------------------------------------- |
| 100.0% | 739 MiB | 6,116,490 | `run`  | `node:internal/modules/esm/module_job` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

|     % |     Size |   Objects | Callee                             | Location                                      |
| ----: | -------: | --------: | ---------------------------------- | --------------------------------------------- |
| 65.3% |  482 MiB | 3,884,207 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js` |
| 32.7% |  241 MiB | 2,110,933 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js` |
|  1.8% | 12.9 MiB |   106,788 | `require`                          | `node:internal/modules/helpers`               |
|  0.1% |    1 MiB |     8,007 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123385:37`)

|     % |     Size |   Objects | Callee            | Location                                      |
| ----: | -------: | --------: | ----------------- | --------------------------------------------- |
| 82.7% |  398 MiB | 3,054,268 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js` |
| 17.3% | 83.5 MiB |   829,939 | `getTypeChecker`  | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                                |
| -----: | ------: | --------: | ------------- | ------------------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                      |
| -----: | ------: | --------: | -------------------------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                     | Location                                      |
| -----: | ------: | --------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                   | Location                                      |
| -----: | ------: | --------: | ------------------------ | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                              | Location                                      |
| -----: | ------: | --------: | ----------------------------------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123317:76`)

|      % |    Size |   Objects | Callee                          | Location                                      |
| -----: | ------: | --------: | ------------------------------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                                |
| -----: | ------: | --------: | ------------- | ------------------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee    | Location                                      |
| -----: | ------: | --------: | --------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                      |
| -----: | ------: | --------: | ---------------------- | --------------------------------------------- |
| 100.0% | 482 MiB | 3,884,207 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee                       | Location                                      |
| ----: | ------: | --------: | ---------------------------- | --------------------------------------------- |
| 57.1% | 227 MiB | 1,584,376 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js` |
| 42.8% | 170 MiB | 1,469,834 | `forEach`                    | `./node_modules/typescript/lib/typescript.js` |
|  0.1% | 513 KiB |        58 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                  | Location                                      |
| -----: | ------: | --------: | ----------------------- | --------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee            | Location                                      |
| -----: | ------: | --------: | ----------------- | --------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                | Location                                      |
| -----: | ------: | --------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                      |
| -----: | ------: | --------: | ---------------------- | --------------------------------------------- |
| 100.0% | 398 MiB | 3,054,268 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                     | Location                                      |
| ----: | -------: | --------: | -------------------------- | --------------------------------------------- |
| 74.8% |  283 MiB | 2,223,122 | `checkBlock`               | `./node_modules/typescript/lib/typescript.js` |
| 36.4% |  138 MiB | 1,006,807 | `checkVariableDeclaration` | `./node_modules/typescript/lib/typescript.js` |
| 36.4% |  138 MiB | 1,006,807 | `checkVariableStatement`   | `./node_modules/typescript/lib/typescript.js` |
| 31.2% |  118 MiB | 1,007,194 | `checkTypeReferenceNode`   | `./node_modules/typescript/lib/typescript.js` |
| 25.9% | 98.1 MiB |   776,560 | `checkExpression`          | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                      |
| -----: | ------: | --------: | -------------------------- | --------------------------------------------- |
| 100.0% | 379 MiB | 3,016,611 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee               | Location                                                |
| ----: | -------: | --------: | -------------------- | ------------------------------------------------------- |
| 47.3% |  173 MiB | 1,472,785 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js`           |
| 33.4% |  122 MiB | 1,050,146 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24` |
| 19.3% | 70.9 MiB |   658,776 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122498:30` |
| 11.4% | 41.8 MiB |   421,311 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35` |
|  6.7% | 24.5 MiB |   199,825 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124350:42` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                                         | Location                                      |
| ----: | -------: | --------: | ---------------------------------------------- | --------------------------------------------- |
| 94.8% |  272 MiB | 1,931,250 | `checkCallExpression`                          | `./node_modules/typescript/lib/typescript.js` |
| 17.5% | 50.2 MiB |   221,217 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js` |
| 15.4% | 44.2 MiB |   309,216 | `checkObjectLiteral`                           | `./node_modules/typescript/lib/typescript.js` |
| 14.2% | 40.6 MiB |   314,674 | `checkExpressionWorker`                        | `./node_modules/typescript/lib/typescript.js` |
|  7.5% | 21.5 MiB |   172,932 | `checkArrayLiteral`                            | `./node_modules/typescript/lib/typescript.js` |

##### `checkBlock` (`./node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee               | Location                                      |
| ----: | -------: | --------: | -------------------- | --------------------------------------------- |
| 97.7% |  277 MiB | 2,207,036 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js` |
|  2.3% | 6.51 MiB |    16,086 | `forEach`            | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size |   Objects | Callee              | Location                                               |
| ----: | -------: | --------: | ------------------- | ------------------------------------------------------ |
| 96.8% |  227 MiB | 1,584,376 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js`          |
|  5.5% |   13 MiB |   124,444 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52487:21` |
|  0.4% | 1.03 MiB |     3,129 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:50184:20` |
|  0.4% |    1 MiB |       131 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52182:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Objects | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 64.0% | 8.27 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader`         |
| 36.0% | 4.65 MiB | 106,787 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.9 MiB | 106,788 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.9 MiB | 106,788 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.9 MiB | 106,788 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Callee           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 12.9 MiB | 106,788 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.9 MiB | 106,788 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee         | Location  |
| -----: | -------: | ------: | -------------- | --------- |
| 100.0% | 8.27 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `toString` (`node:buffer`)

|      % |     Size | Objects | Callee  | Location      |
| -----: | -------: | ------: | ------- | ------------- |
| 100.0% | 8.26 MiB |     506 | `slice` | `node:buffer` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Objects | Callee        | Location                                          |
| ----: | -------: | ------: | ------------- | ------------------------------------------------- |
| 64.9% | 3.02 MiB |  82,205 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |
| 35.1% | 1.63 MiB |  24,582 | `wrapSafe`    | `node:internal/modules/cjs/loader`                |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs`) ← `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 11.3 MiB |       3 | `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `checkIdentifier` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5% |   11 MiB |  55,465 | `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.1% | 8.27 MiB |       1 | `readFileSync` (`node:fs`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader`) ← `loadSource` ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.7% |  5.5 MiB |  34,334 | `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (36056:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.7% |  5.5 MiB |  47,919 | `declareSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindPropertyWorker` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% | 5.25 MiB |       3 | `set` ← `resetMaybeStack` (`./node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `(anonymous)` (82238:27) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% | 5.03 MiB |       2 | `readFile` (`./node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |  4.5 MiB |  28,091 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (36056:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% |  4.5 MiB |       3 | `checkPropertyAccessExpressionOrQualifiedName` (`./node_modules/typescript/lib/typescript.js`) ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% | 4.01 MiB |   2,827 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.5% |    4 MiB |  24,970 | `createBaseNode` (`./node_modules/typescript/lib/typescript.js`) ← `doJSDocScan` ← `parseJSDocCommentWorker` ← `(anonymous)` (31696:71) ← `mapDefined` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |    4 MiB |  53,468 | `Map` ← `createSymbolTable` (`./node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |  3.5 MiB |  21,849 | `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js`) ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |  3.5 MiB |  32,771 | `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`) ← `getObjectTypeInstantiation` ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `getNonMissingTypeOfSymbol` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `(anonymous)` (82238:27) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% | 3.01 MiB |   1,720 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |    3 MiB |  15,127 | `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |    3 MiB |  18,728 | `parseTypeReference` (`./node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseTypeAnnotation` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.4% |    3 MiB |  33,634 | `mapDefined` (`./node_modules/typescript/lib/typescript.js`) ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% |    3 MiB |  23,133 | `declareSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% |    3 MiB |  26,217 | `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`) ← `parsePropertyName` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
