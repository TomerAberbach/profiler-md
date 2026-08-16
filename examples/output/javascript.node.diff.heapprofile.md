# Heap profile diff

Allocated 33 MiB → 31.6 MiB (-1.404 MiB, -4.3%) over 49 samples → 26 samples (689 KiB → 1.21 MiB per sample).

| Category         | Change |      Delta |             % |                Size | Samples |
| ---------------- | -----: | ---------: | ------------: | ------------------: | ------: |
| Standard library | +32.1% | +5.099 MiB | 48.2% → 66.5% |   15.9 MiB → 21 MiB |  15 → 5 |
| Third-party      | -38.1% | -6.504 MiB | 51.8% → 33.5% | 17.1 MiB → 10.6 MiB | 34 → 21 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |              Size | Samples | Function                             | Location                                                                                  |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| +117.9% |  +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `readFileSync`                       | `node:fs:433:22`                                                                          |
|     new |   +1.503 MiB |   0.0% → 4.8% |     0 B → 1.5 MiB |   0 → 3 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
|     new | +576.375 KiB |   0.0% → 1.8% |     0 B → 576 KiB |   0 → 1 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8064:11`   |
|     new | +513.843 KiB |   0.0% → 1.6% |     0 B → 514 KiB |   0 → 1 | `getTransformFlagsSubtreeExclusions` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26575:48`  |
|     new | +513.843 KiB |   0.0% → 1.6% |     0 B → 514 KiB |   0 → 1 | `isRelatedTo`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|     new | +513.437 KiB |   0.0% → 1.6% |     0 B → 513 KiB |   0 → 1 | `getApparentTypeOfMappedType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57576:45`  |
|     new | +512.968 KiB |   0.0% → 1.6% |     0 B → 513 KiB |   0 → 1 | `parseParenthesizedExpression`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:34809:46`  |
|     new | +512.968 KiB |   0.0% → 1.6% |     0 B → 513 KiB |   0 → 1 | `getOrCreateEmitNode`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26930:33`  |
|     new | +512.937 KiB |   0.0% → 1.6% |     0 B → 513 KiB |   0 → 1 | `checkBinaryLikeExpressionWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76969:49`  |
|     new | +512.531 KiB |   0.0% → 1.6% |     0 B → 513 KiB |   0 → 1 | `lookAhead`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31233:27`  |
|     new | +512.187 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `check`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55419:27`  |
|     new | +512.156 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `createDeferredTypeReference`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58655:45`  |
|     new | +512.109 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `resolveEntityName`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:49650:35`  |
|     new | +512.078 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `getTypeAtFlowLoopLabel`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68850:44`  |
|     new | +512.062 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21532:11`  |
|     new | +512.062 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:142864:15` |
|     new | +512.062 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `diag`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8065:18`   |
|     new | +512.062 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `getTemplateLiteralRawText`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32397:43`  |
|     new | +512.062 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `createNodeFactory`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21553:31`  |
|     new | +512.015 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `(anonymous)`                        | `node:internal/abort_controller:1:1`                                                      |

##### Standard library

|  Change |        Delta |             % |              Size | Samples | Function       | Location                             |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------- | ------------------------------------ |
| +117.9% |  +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `readFileSync` | `node:fs:433:22`                     |
|     new | +512.015 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `(anonymous)`  | `node:internal/abort_controller:1:1` |

##### Third-party

| Change |        Delta |           % |          Size | Samples | Function                             | Location                                                                                  |
| -----: | -----------: | ----------: | ------------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new |   +1.503 MiB | 0.0% → 4.8% | 0 B → 1.5 MiB |   0 → 3 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
|    new | +576.375 KiB | 0.0% → 1.8% | 0 B → 576 KiB |   0 → 1 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8064:11`   |
|    new | +513.843 KiB | 0.0% → 1.6% | 0 B → 514 KiB |   0 → 1 | `getTransformFlagsSubtreeExclusions` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26575:48`  |
|    new | +513.843 KiB | 0.0% → 1.6% | 0 B → 514 KiB |   0 → 1 | `isRelatedTo`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|    new | +513.437 KiB | 0.0% → 1.6% | 0 B → 513 KiB |   0 → 1 | `getApparentTypeOfMappedType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57576:45`  |
|    new | +512.968 KiB | 0.0% → 1.6% | 0 B → 513 KiB |   0 → 1 | `parseParenthesizedExpression`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:34809:46`  |
|    new | +512.968 KiB | 0.0% → 1.6% | 0 B → 513 KiB |   0 → 1 | `getOrCreateEmitNode`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26930:33`  |
|    new | +512.937 KiB | 0.0% → 1.6% | 0 B → 513 KiB |   0 → 1 | `checkBinaryLikeExpressionWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76969:49`  |
|    new | +512.531 KiB | 0.0% → 1.6% | 0 B → 513 KiB |   0 → 1 | `lookAhead`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31233:27`  |
|    new | +512.187 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `check`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55419:27`  |
|    new | +512.156 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `createDeferredTypeReference`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58655:45`  |
|    new | +512.109 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `resolveEntityName`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:49650:35`  |
|    new | +512.078 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `getTypeAtFlowLoopLabel`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68850:44`  |
|    new | +512.062 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21532:11`  |
|    new | +512.062 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:142864:15` |
|    new | +512.062 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `diag`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8065:18`   |
|    new | +512.062 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `getTemplateLiteralRawText`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32397:43`  |
|    new | +512.062 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `createNodeFactory`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21553:31`  |
|    new | +512.015 KiB | 0.0% → 1.6% | 0 B → 512 KiB |   0 → 1 | `parseImportOrExportSpecifier`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36344:46`  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |           % |             Size | Samples | Function                                       | Location                                             |
| ------: | -----------: | ----------: | ---------------: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
|  -68.0% |   -2.126 MiB | 9.5% → 3.2% | 3.13 MiB → 1 MiB |   6 → 2 | `wrapSafe`                                     | `node:internal/modules/cjs/loader:1671:18`           |
| removed |     -1.5 MiB | 4.5% → 0.0% |    1.5 MiB → 0 B |   3 → 0 | `__init`                                       | `node_modules/typescript/lib/typescript.js:21:43`    |
| removed |   -1.008 MiB | 3.1% → 0.0% |   1.01 MiB → 0 B |   2 → 0 | `charCodeAt`                                   | `<unknown>`                                          |
| removed |       -1 MiB | 3.0% → 0.0% |      1 MiB → 0 B |   2 → 0 | `compileForInternalLoader`                     | `node:internal/bootstrap/realm:385:27`               |
| removed | -576.375 KiB | 1.7% → 0.0% |    576 KiB → 0 B |   1 → 0 | `__export`                                     | `node_modules/typescript/lib/typescript.js:27:18`    |
| removed |  -560.39 KiB | 1.7% → 0.0% |    560 KiB → 0 B |   1 → 0 | `set`                                          | `<unknown>`                                          |
| removed | -516.562 KiB | 1.5% → 0.0% |    517 KiB → 0 B |   1 → 0 | `nextToken`                                    | `node_modules/typescript/lib/typescript.js:29792:27` |
| removed | -515.625 KiB | 1.5% → 0.0% |    516 KiB → 0 B |   1 → 0 | `parseFunctionOrConstructorTypeToError`        | `node_modules/typescript/lib/typescript.js:31818:55` |
| removed |   -514.5 KiB | 1.5% → 0.0% |    515 KiB → 0 B |   1 → 0 | `bindChildren`                                 | `node_modules/typescript/lib/typescript.js:42723:26` |
| removed |   -514.5 KiB | 1.5% → 0.0% |    515 KiB → 0 B |   1 → 0 | `src/compiler/binder.ts`                       | `node_modules/typescript/lib/typescript.js:45024:29` |
| removed |     -513 KiB | 1.5% → 0.0% |    513 KiB → 0 B |   1 → 0 | `getTypeOfVariableOrParameterOrPropertyWorker` | `node_modules/typescript/lib/typescript.js:55481:58` |
| removed | -512.562 KiB | 1.5% → 0.0% |    513 KiB → 0 B |   1 → 0 | `src/compiler/visitorPublic.ts`                | `node_modules/typescript/lib/typescript.js:88437:36` |
| removed |   -512.5 KiB | 1.5% → 0.0% |    513 KiB → 0 B |   1 → 0 | `checkObjectTypeForDuplicateDeclarations`      | `node_modules/typescript/lib/typescript.js:79183:53` |
| removed |   -512.5 KiB | 1.5% → 0.0% |    513 KiB → 0 B |   1 → 0 | `getTargetOfImportClause`                      | `node_modules/typescript/lib/typescript.js:48594:37` |
| removed | -512.367 KiB | 1.5% → 0.0% |    512 KiB → 0 B |   1 → 0 | `checkPropertyInitialization`                  | `node_modules/typescript/lib/typescript.js:83095:41` |
| removed | -512.281 KiB | 1.5% → 0.0% |    512 KiB → 0 B |   1 → 0 | `resolveESModuleSymbol`                        | `node_modules/typescript/lib/typescript.js:49677:35` |
| removed | -512.109 KiB | 1.5% → 0.0% |    512 KiB → 0 B |   1 → 0 | `forEachChildInTypeReference`                  | `node_modules/typescript/lib/typescript.js:28848:72` |
| removed | -512.109 KiB | 1.5% → 0.0% |    512 KiB → 0 B |   1 → 0 | `getInstanceType`                              | `node_modules/typescript/lib/typescript.js:69812:31` |
| removed | -512.109 KiB | 1.5% → 0.0% |    512 KiB → 0 B |   1 → 0 | `forEachChildInImportType`                     | `node_modules/typescript/lib/typescript.js:28874:66` |
| removed | -512.101 KiB | 1.5% → 0.0% |    512 KiB → 0 B |   1 → 0 | `parseType`                                    | `node_modules/typescript/lib/typescript.js:31930:27` |

##### Standard library

|  Change |        Delta |           % |             Size | Samples | Function                   | Location                                   |
| ------: | -----------: | ----------: | ---------------: | ------: | -------------------------- | ------------------------------------------ |
|  -68.0% |   -2.126 MiB | 9.5% → 3.2% | 3.13 MiB → 1 MiB |   6 → 2 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
| removed |   -1.008 MiB | 3.1% → 0.0% |   1.01 MiB → 0 B |   2 → 0 | `charCodeAt`               | `<unknown>`                                |
| removed |       -1 MiB | 3.0% → 0.0% |      1 MiB → 0 B |   2 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
| removed |  -560.39 KiB | 1.7% → 0.0% |    560 KiB → 0 B |   1 → 0 | `set`                      | `<unknown>`                                |
| removed | -512.039 KiB | 1.5% → 0.0% |    512 KiB → 0 B |   1 → 0 | `push`                     | `<unknown>`                                |
| removed | -512.015 KiB | 1.5% → 0.0% |    512 KiB → 0 B |   1 → 0 | `internalBinding`          | `node:internal/bootstrap/realm:185:45`     |

##### Third-party

|  Change |        Delta |           % |          Size | Samples | Function                                       | Location                                             |
| ------: | -----------: | ----------: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
| removed |     -1.5 MiB | 4.5% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `__init`                                       | `node_modules/typescript/lib/typescript.js:21:43`    |
| removed | -576.375 KiB | 1.7% → 0.0% | 576 KiB → 0 B |   1 → 0 | `__export`                                     | `node_modules/typescript/lib/typescript.js:27:18`    |
| removed | -516.562 KiB | 1.5% → 0.0% | 517 KiB → 0 B |   1 → 0 | `nextToken`                                    | `node_modules/typescript/lib/typescript.js:29792:27` |
| removed | -515.625 KiB | 1.5% → 0.0% | 516 KiB → 0 B |   1 → 0 | `parseFunctionOrConstructorTypeToError`        | `node_modules/typescript/lib/typescript.js:31818:55` |
| removed |   -514.5 KiB | 1.5% → 0.0% | 515 KiB → 0 B |   1 → 0 | `bindChildren`                                 | `node_modules/typescript/lib/typescript.js:42723:26` |
| removed |   -514.5 KiB | 1.5% → 0.0% | 515 KiB → 0 B |   1 → 0 | `src/compiler/binder.ts`                       | `node_modules/typescript/lib/typescript.js:45024:29` |
| removed |     -513 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getTypeOfVariableOrParameterOrPropertyWorker` | `node_modules/typescript/lib/typescript.js:55481:58` |
| removed | -512.562 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `src/compiler/visitorPublic.ts`                | `node_modules/typescript/lib/typescript.js:88437:36` |
| removed |   -512.5 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `checkObjectTypeForDuplicateDeclarations`      | `node_modules/typescript/lib/typescript.js:79183:53` |
| removed |   -512.5 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getTargetOfImportClause`                      | `node_modules/typescript/lib/typescript.js:48594:37` |
| removed | -512.367 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `checkPropertyInitialization`                  | `node_modules/typescript/lib/typescript.js:83095:41` |
| removed | -512.281 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `resolveESModuleSymbol`                        | `node_modules/typescript/lib/typescript.js:49677:35` |
| removed | -512.109 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `forEachChildInTypeReference`                  | `node_modules/typescript/lib/typescript.js:28848:72` |
| removed | -512.109 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getInstanceType`                              | `node_modules/typescript/lib/typescript.js:69812:31` |
| removed | -512.109 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `forEachChildInImportType`                     | `node_modules/typescript/lib/typescript.js:28874:66` |
| removed | -512.101 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `parseType`                                    | `node_modules/typescript/lib/typescript.js:31930:27` |
| removed | -512.093 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `isYieldExpression2`                           | `node_modules/typescript/lib/typescript.js:32070:36` |
| removed | -512.093 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `extractPragmas`                               | `node_modules/typescript/lib/typescript.js:28669:26` |
| removed | -512.062 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `diag`                                         | `node_modules/typescript/lib/typescript.js:7054:16`  |
| removed | -512.062 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getTypeAtFlowLoopLabel`                       | `node_modules/typescript/lib/typescript.js:69215:38` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |              Size | Samples | Function                                   | Location                                                                                  |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| +117.9% | +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `readFileSync`                             | `node:fs:433:22`                                                                          |
| +117.9% | +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `defaultLoadImpl`                          | `node:internal/modules/cjs/loader:1112:25`                                                |
| +117.9% | +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `loadSource`                               | `node:internal/modules/cjs/loader:1797:20`                                                |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|     new |  +5.507 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|  +25.6% |  +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1878:37`                                                |
|  +25.6% |  +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1490:33`                                                |
|  +25.6% |  +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1193:24`                                                |
|  +25.6% |  +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1519:36`                                                |
|  +25.6% |  +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `wrapModuleLoad`                           | `node:internal/modules/cjs/loader:237:24`                                                 |
|  +25.6% |  +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `require`                                  | `node:internal/modules/helpers:146:19`                                                    |

##### Standard library

|  Change |        Delta |             % |              Size | Samples | Function          | Location                                   |
| ------: | -----------: | ------------: | ----------------: | ------: | ----------------- | ------------------------------------------ |
| +117.9% |  +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `readFileSync`    | `node:fs:433:22`                           |
| +117.9% |  +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |
| +117.9% |  +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `loadSource`      | `node:internal/modules/cjs/loader:1797:20` |
|  +25.6% |   +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  +25.6% |   +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  +25.6% |   +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  +25.6% |   +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  +25.6% |   +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader:237:24`  |
|  +25.6% |   +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `require`         | `node:internal/modules/helpers:146:19`     |
|     new | +512.015 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `(anonymous)`     | `node:internal/abort_controller:1:1`       |
|     new | +512.015 KiB |   0.0% → 1.6% |     0 B → 512 KiB |   0 → 1 | `(anonymous)`     | `node:internal/streams/operators:1:1`      |
|   +0.3% |   +3.859 KiB |   4.5% → 4.8% |           1.5 MiB |       3 | `forEach`         | `<unknown>`                                |

##### Third-party

| Change |      Delta |            % |           Size | Samples | Function                                   | Location                                                                                  |
| -----: | ---------: | -----------: | -------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|    new | +5.509 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|    new | +5.507 MiB | 0.0% → 17.4% | 0 B → 5.51 MiB |  0 → 11 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|    new | +3.505 MiB | 0.0% → 11.1% | 0 B → 3.51 MiB |   0 → 7 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
|    new | +3.505 MiB | 0.0% → 11.1% | 0 B → 3.51 MiB |   0 → 7 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
|    new | +3.505 MiB | 0.0% → 11.1% | 0 B → 3.51 MiB |   0 → 7 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
|    new | +3.505 MiB | 0.0% → 11.1% | 0 B → 3.51 MiB |   0 → 7 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|    new | +3.004 MiB |  0.0% → 9.5% |    0 B → 3 MiB |   0 → 6 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
|    new | +3.004 MiB |  0.0% → 9.5% |    0 B → 3 MiB |   0 → 6 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|    new | +2.563 MiB |  0.0% → 8.1% | 0 B → 2.56 MiB |   0 → 5 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1`       |
|    new | +2.504 MiB |  0.0% → 7.9% |  0 B → 2.5 MiB |   0 → 5 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |
|    new | +2.503 MiB |  0.0% → 7.9% |  0 B → 2.5 MiB |   0 → 5 | `parseStatement`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:35399:32`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |      Delta |             % |                Size | Samples | Function                                   | Location                                              |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| removed | -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed | -9.007 MiB |  27.3% → 0.0% |      9.01 MiB → 0 B |  18 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| removed | -7.002 MiB |  21.2% → 0.0% |         7 MiB → 0 B |  14 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| removed | -7.002 MiB |  21.2% → 0.0% |         7 MiB → 0 B |  14 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| removed | -7.002 MiB |  21.2% → 0.0% |         7 MiB → 0 B |  14 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| removed | -7.002 MiB |  21.2% → 0.0% |         7 MiB → 0 B |  14 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| removed | -7.002 MiB |  21.2% → 0.0% |         7 MiB → 0 B |  14 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| removed | -7.002 MiB |  21.2% → 0.0% |         7 MiB → 0 B |  14 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| removed | -7.002 MiB |  21.2% → 0.0% |         7 MiB → 0 B |  14 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| removed | -6.113 MiB |  18.5% → 0.0% |      6.11 MiB → 0 B |  12 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:1:1`       |
|  -61.4% | -5.676 MiB | 28.0% → 11.3% | 9.24 MiB → 3.56 MiB |  18 → 7 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1731:37`            |

##### Standard library

|  Change |        Delta |             % |                Size | Samples | Function                          | Location                                      |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------- | --------------------------------------------- |
|  -61.4% |   -5.676 MiB | 28.0% → 11.3% | 9.24 MiB → 3.56 MiB |  18 → 7 | `(anonymous)`                     | `node:internal/modules/cjs/loader:1731:37`    |
|  -68.0% |   -2.126 MiB |   9.5% → 3.2% |    3.13 MiB → 1 MiB |   6 → 2 | `wrapSafe`                        | `node:internal/modules/cjs/loader:1671:18`    |
| removed |   -1.008 MiB |   3.1% → 0.0% |      1.01 MiB → 0 B |   2 → 0 | `charCodeAt`                      | `<unknown>`                                   |
|  -66.7% |       -1 MiB |   4.5% → 1.6% |   1.5 MiB → 512 KiB |   3 → 1 | `compileForInternalLoader`        | `node:internal/bootstrap/realm:385:27`        |
|   -2.9% | -926.421 KiB | 95.5% → 96.8% | 31.5 MiB → 30.6 MiB | 46 → 24 | `next`                            | `<unknown>`                                   |
|   -2.9% | -926.421 KiB | 95.5% → 96.8% | 31.5 MiB → 30.6 MiB | 46 → 24 | `run`                             | `node:internal/modules/esm/module_job:332:12` |
| removed |  -560.39 KiB |   1.7% → 0.0% |       560 KiB → 0 B |   1 → 0 | `set`                             | `<unknown>`                                   |
|  -50.0% | -512.203 KiB |   3.0% → 1.6% |     1 MiB → 512 KiB |   2 → 1 | `requireBuiltin`                  | `node:internal/bootstrap/realm:422:24`        |
| removed | -512.125 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `asyncRunEntryPointWithESMLoader` | `node:internal/modules/run_main:105:47`       |
| removed | -512.125 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `runEntryPointWithESMLoader`      | `node:internal/modules/run_main:138:36`       |
| removed | -512.125 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `executeUserEntryPoint`           | `node:internal/modules/run_main:157:31`       |
| removed | -512.125 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `(anonymous)`                     | `node:internal/main/run_main_module:1:1`      |
| removed | -512.039 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `push`                            | `<unknown>`                                   |
| removed | -512.015 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `internalBinding`                 | `node:internal/bootstrap/realm:185:45`        |
| removed | -512.015 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `(anonymous)`                     | `node:crypto:1:1`                             |
| removed | -512.015 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `compileForPublicLoader`          | `node:internal/bootstrap/realm:332:25`        |
| removed | -512.015 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `loadBuiltinModule`               | `node:internal/modules/helpers:113:27`        |
| removed | -512.015 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `loadBuiltinWithHooks`            | `node:internal/modules/cjs/loader:1159:30`    |
|     ~0% |        -80 B |   3.0% → 3.2% |               1 MiB |       2 | `get`                             | `<unknown>`                                   |
|     ~0% |        -80 B |   3.0% → 3.2% |               1 MiB |       2 | `getOwn`                          | `node:internal/bootstrap/realm:205:16`        |

##### Third-party

|  Change |      Delta |            % |           Size | Samples | Function                                   | Location                                              |
| ------: | ---------: | -----------: | -------------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| removed | -9.505 MiB | 28.8% → 0.0% | 9.51 MiB → 0 B |  19 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed | -9.007 MiB | 27.3% → 0.0% | 9.01 MiB → 0 B |  18 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| removed | -7.002 MiB | 21.2% → 0.0% |    7 MiB → 0 B |  14 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| removed | -7.002 MiB | 21.2% → 0.0% |    7 MiB → 0 B |  14 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| removed | -7.002 MiB | 21.2% → 0.0% |    7 MiB → 0 B |  14 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| removed | -7.002 MiB | 21.2% → 0.0% |    7 MiB → 0 B |  14 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| removed | -7.002 MiB | 21.2% → 0.0% |    7 MiB → 0 B |  14 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| removed | -7.002 MiB | 21.2% → 0.0% |    7 MiB → 0 B |  14 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| removed | -7.002 MiB | 21.2% → 0.0% |    7 MiB → 0 B |  14 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| removed | -6.113 MiB | 18.5% → 0.0% | 6.11 MiB → 0 B |  12 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:1:1`       |
| removed | -5.613 MiB | 17.0% → 0.0% | 5.61 MiB → 0 B |  11 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:18:11`     |
