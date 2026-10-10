# Heap profile diff

Allocated 21.8 MiB → 26.2 MiB (+4.407 MiB, +20.2%) over 28 samples → 36 samples (798 KiB → 746 KiB per sample).

| Category         | Change |        Delta |             % |                Size | Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------: |
| Third-party      | +34.7% |   +3.645 MiB | 48.2% → 54.0% | 10.5 MiB → 14.2 MiB | 21 → 28 |
| Standard library |  +6.7% | +779.601 KiB | 51.8% → 46.0% | 11.3 MiB → 12.1 MiB |   7 → 8 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                   | Location                                                          |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------- |
|     new |   +2.563 MiB |  0.0% → 9.8% |      0 B → 2.56 MiB |   0 → 5 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:16:15`                 |
|  +81.6% |   +1.655 MiB | 9.3% → 14.1% | 2.03 MiB → 3.68 MiB |   4 → 7 | `wrapSafe`                                 | `node:internal/modules/cjs/loader:1671:18`                        |
|     new | +576.375 KiB |  0.0% → 2.1% |       0 B → 576 KiB |   0 → 1 | `__export`                                 | `node_modules/typescript/lib/typescript.js:22:16`                 |
| +102.3% | +524.015 KiB |  2.3% → 3.9% |  512 KiB → 1.01 MiB |   1 → 2 | `getTypeChecker`                           | `node_modules/typescript/lib/typescript.js:123266:26 → 124848:26` |
|     new | +519.187 KiB |  0.0% → 1.9% |       0 B → 519 KiB |   0 → 1 | `doJSDocScan`                              | `node_modules/typescript/lib/typescript.js:37253:27 → 38308:27`   |
|     new | +518.437 KiB |  0.0% → 1.9% |       0 B → 518 KiB |   0 → 1 | `createSymbol`                             | `node_modules/typescript/lib/typescript.js:46101:24`              |
|     new | +513.984 KiB |  0.0% → 1.9% |       0 B → 514 KiB |   0 → 1 | `propagateChildFlags`                      | `node_modules/typescript/lib/typescript.js:28495:29`              |
|     new | +513.562 KiB |  0.0% → 1.9% |       0 B → 514 KiB |   0 → 1 | `isTypeDerivedFrom`                        | `node_modules/typescript/lib/typescript.js:66484:29`              |
|     new | +513.562 KiB |  0.0% → 1.9% |       0 B → 514 KiB |   0 → 1 | `relateVariances`                          | `node_modules/typescript/lib/typescript.js:69054:31`              |
|     new | +513.437 KiB |  0.0% → 1.9% |       0 B → 513 KiB |   0 → 1 | `bindEach`                                 | `node_modules/typescript/lib/typescript.js:45226:20 → 46419:20`   |
|     new |     +513 KiB |  0.0% → 1.9% |       0 B → 513 KiB |   0 → 1 | `getTypeAtFlowAssignment`                  | `node_modules/typescript/lib/typescript.js:73025:37`              |
|     new | +512.406 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `resolveTypeReferenceDirectiveNamesWorker` | `node_modules/typescript/lib/typescript.js:122730:52 → 124309:52` |
|     new | +512.187 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `createTypeMapper`                         | `node_modules/typescript/lib/typescript.js:65904:28`              |
|     new | +512.187 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `getTransformFlagsSubtreeExclusions`       | `node_modules/typescript/lib/typescript.js:28511:44`              |
|     new | +512.109 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `checkBinaryLikeExpressionWorker`          | `node_modules/typescript/lib/typescript.js:81904:43`              |
|     new | +512.062 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:83934:23`              |
|     new | +512.062 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:3963:2`                |
|     new | +512.039 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `parseTokenNode`                           | `node_modules/typescript/lib/typescript.js:33257:26`              |
|     new | +512.031 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `sameMap`                                  | `node_modules/typescript/lib/typescript.js:2595:17`               |
|     new | +512.031 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `checkUnusedClassMembers`                  | `node_modules/typescript/lib/typescript.js:84802:35`              |

##### Third-party

|  Change |        Delta |           % |               Size | Samples | Function                                   | Location                                                          |
| ------: | -----------: | ----------: | -----------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------- |
|     new |   +2.563 MiB | 0.0% → 9.8% |     0 B → 2.56 MiB |   0 → 5 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:16:15`                 |
|     new | +576.375 KiB | 0.0% → 2.1% |      0 B → 576 KiB |   0 → 1 | `__export`                                 | `node_modules/typescript/lib/typescript.js:22:16`                 |
| +102.3% | +524.015 KiB | 2.3% → 3.9% | 512 KiB → 1.01 MiB |   1 → 2 | `getTypeChecker`                           | `node_modules/typescript/lib/typescript.js:123266:26 → 124848:26` |
|     new | +519.187 KiB | 0.0% → 1.9% |      0 B → 519 KiB |   0 → 1 | `doJSDocScan`                              | `node_modules/typescript/lib/typescript.js:37253:27 → 38308:27`   |
|     new | +518.437 KiB | 0.0% → 1.9% |      0 B → 518 KiB |   0 → 1 | `createSymbol`                             | `node_modules/typescript/lib/typescript.js:46101:24`              |
|     new | +513.984 KiB | 0.0% → 1.9% |      0 B → 514 KiB |   0 → 1 | `propagateChildFlags`                      | `node_modules/typescript/lib/typescript.js:28495:29`              |
|     new | +513.562 KiB | 0.0% → 1.9% |      0 B → 514 KiB |   0 → 1 | `isTypeDerivedFrom`                        | `node_modules/typescript/lib/typescript.js:66484:29`              |
|     new | +513.562 KiB | 0.0% → 1.9% |      0 B → 514 KiB |   0 → 1 | `relateVariances`                          | `node_modules/typescript/lib/typescript.js:69054:31`              |
|     new | +513.437 KiB | 0.0% → 1.9% |      0 B → 513 KiB |   0 → 1 | `bindEach`                                 | `node_modules/typescript/lib/typescript.js:45226:20 → 46419:20`   |
|     new |     +513 KiB | 0.0% → 1.9% |      0 B → 513 KiB |   0 → 1 | `getTypeAtFlowAssignment`                  | `node_modules/typescript/lib/typescript.js:73025:37`              |
|     new | +512.406 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `resolveTypeReferenceDirectiveNamesWorker` | `node_modules/typescript/lib/typescript.js:122730:52 → 124309:52` |
|     new | +512.187 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `createTypeMapper`                         | `node_modules/typescript/lib/typescript.js:65904:28`              |
|     new | +512.187 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `getTransformFlagsSubtreeExclusions`       | `node_modules/typescript/lib/typescript.js:28511:44`              |
|     new | +512.109 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `checkBinaryLikeExpressionWorker`          | `node_modules/typescript/lib/typescript.js:81904:43`              |
|     new | +512.062 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:83934:23`              |
|     new | +512.062 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:3963:2`                |
|     new | +512.039 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `parseTokenNode`                           | `node_modules/typescript/lib/typescript.js:33257:26`              |
|     new | +512.031 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `sameMap`                                  | `node_modules/typescript/lib/typescript.js:2595:17`               |
|     new | +512.031 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `checkUnusedClassMembers`                  | `node_modules/typescript/lib/typescript.js:84802:35`              |
|     new | +512.031 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `getDefaultLibFilePriority`                | `node_modules/typescript/lib/typescript.js:124352:37`             |

##### Standard library

| Change |        Delta |             % |                Size | Samples | Function       | Location                                   |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------- | ------------------------------------------ |
| +81.6% |   +1.655 MiB |  9.3% → 14.1% | 2.03 MiB → 3.68 MiB |   4 → 7 | `wrapSafe`     | `node:internal/modules/cjs/loader:1671:18` |
|  +1.3% | +110.078 KiB | 37.9% → 31.9% | 8.27 MiB → 8.37 MiB |       1 | `readFileSync` | `node:fs:433:22`                           |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |           % |          Size | Samples | Function                                 | Location                                                        |
| ------: | -----------: | ----------: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------------------- |
| removed |       -1 MiB | 4.6% → 0.0% |   1 MiB → 0 B |   2 → 0 | `diag`                                   | `node_modules/typescript/lib/typescript.js:9336:14`             |
| removed | -517.687 KiB | 2.3% → 0.0% | 518 KiB → 0 B |   1 → 0 | `typeToTypeNodeWorker`                   | `node_modules/typescript/lib/typescript.js:53183:34`            |
| removed | -513.843 KiB | 2.3% → 0.0% | 514 KiB → 0 B |   1 → 0 | `exec`                                   | `<unknown>`                                                     |
| removed | -513.562 KiB | 2.3% → 0.0% | 514 KiB → 0 B |   1 → 0 | `parseSourceFile`                        | `node_modules/typescript/lib/typescript.js:31471:27 → 32523:27` |
| removed | -513.375 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `resolveModuleName`                      | `node_modules/typescript/lib/typescript.js:42868:27`            |
| removed | -513.187 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `parseDeclarationWorker`                 | `node_modules/typescript/lib/typescript.js:36069:34 → 37124:34` |
| removed |     -513 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getSetExternalModuleIndicator`          | `node_modules/typescript/lib/typescript.js:20661:39`            |
| removed |     -513 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `bindParentToChildIgnoringJSDoc`         | `node_modules/typescript/lib/typescript.js:21713:42`            |
| removed | -512.812 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:60131:50 → 61386:50` |
| removed |  -512.75 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `checkMemberForOverrideModifier`         | `node_modules/typescript/lib/typescript.js:85606:42`            |
| removed | -512.156 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `emitIntersectionType`                   | `node_modules/typescript/lib/typescript.js:117665:32`           |
| removed | -512.156 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `isConstContext`                         | `node_modules/typescript/lib/typescript.js:81235:26`            |
| removed | -512.093 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `join`                                   | `<unknown>`                                                     |
| removed | -512.062 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `createNodeFactory`                      | `node_modules/typescript/lib/typescript.js:23135:27`            |
| removed | -512.039 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `readPackageJsonTypesVersionPaths`       | `node_modules/typescript/lib/typescript.js:42158:42`            |
| removed | -512.031 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `toPath3`                                | `node_modules/typescript/lib/typescript.js:122790:19`           |
| removed | -512.015 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getSubPatternFromSpec`                  | `node_modules/typescript/lib/typescript.js:21110:31`            |
| removed | -512.015 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getLeadingLineTerminatorCount`          | `node_modules/typescript/lib/typescript.js:119810:41`           |
| removed | -512.015 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getMapOfCacheRedirects`                 | `node_modules/typescript/lib/typescript.js:42558:34`            |

##### Third-party

|  Change |        Delta |           % |          Size | Samples | Function                                 | Location                                                        |
| ------: | -----------: | ----------: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------------------- |
| removed |       -1 MiB | 4.6% → 0.0% |   1 MiB → 0 B |   2 → 0 | `diag`                                   | `node_modules/typescript/lib/typescript.js:9336:14`             |
| removed | -517.687 KiB | 2.3% → 0.0% | 518 KiB → 0 B |   1 → 0 | `typeToTypeNodeWorker`                   | `node_modules/typescript/lib/typescript.js:53183:34`            |
| removed | -513.562 KiB | 2.3% → 0.0% | 514 KiB → 0 B |   1 → 0 | `parseSourceFile`                        | `node_modules/typescript/lib/typescript.js:31471:27 → 32523:27` |
| removed | -513.375 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `resolveModuleName`                      | `node_modules/typescript/lib/typescript.js:42868:27`            |
| removed | -513.187 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `parseDeclarationWorker`                 | `node_modules/typescript/lib/typescript.js:36069:34 → 37124:34` |
| removed |     -513 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getSetExternalModuleIndicator`          | `node_modules/typescript/lib/typescript.js:20661:39`            |
| removed |     -513 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `bindParentToChildIgnoringJSDoc`         | `node_modules/typescript/lib/typescript.js:21713:42`            |
| removed | -512.812 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:60131:50 → 61386:50` |
| removed |  -512.75 KiB | 2.3% → 0.0% | 513 KiB → 0 B |   1 → 0 | `checkMemberForOverrideModifier`         | `node_modules/typescript/lib/typescript.js:85606:42`            |
| removed | -512.156 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `emitIntersectionType`                   | `node_modules/typescript/lib/typescript.js:117665:32`           |
| removed | -512.156 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `isConstContext`                         | `node_modules/typescript/lib/typescript.js:81235:26`            |
| removed | -512.062 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `createNodeFactory`                      | `node_modules/typescript/lib/typescript.js:23135:27`            |
| removed | -512.039 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `readPackageJsonTypesVersionPaths`       | `node_modules/typescript/lib/typescript.js:42158:42`            |
| removed | -512.031 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `toPath3`                                | `node_modules/typescript/lib/typescript.js:122790:19`           |
| removed | -512.015 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getSubPatternFromSpec`                  | `node_modules/typescript/lib/typescript.js:21110:31`            |
| removed | -512.015 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getLeadingLineTerminatorCount`          | `node_modules/typescript/lib/typescript.js:119810:41`           |
| removed | -512.015 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getMapOfCacheRedirects`                 | `node_modules/typescript/lib/typescript.js:42558:34`            |

##### Standard library

|  Change |        Delta |           % |          Size | Samples | Function | Location    |
| ------: | -----------: | ----------: | ------------: | ------: | -------- | ----------- |
| removed | -513.843 KiB | 2.3% → 0.0% | 514 KiB → 0 B |   1 → 0 | `exec`   | `<unknown>` |
| removed | -512.093 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `join`   | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:16:15`)

| Change |      Delta |             % |           Size | Samples | Caller        | Location                                        |
| -----: | ---------: | ------------: | -------------: | ------: | ------------- | ----------------------------------------------- |
|    new | +2.563 MiB | 0.0% → 100.0% | 0 B → 2.56 MiB |   0 → 5 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

| Change |      Delta |      % |                Size | Samples | Caller        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ------------------------------------------ |
| +81.6% | +1.655 MiB | 100.0% | 2.03 MiB → 3.68 MiB |   4 → 7 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `__export` (`node_modules/typescript/lib/typescript.js:22:16`)

| Change |        Delta |             % |          Size | Samples | Caller        | Location                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------------- |
|    new | +576.375 KiB | 0.0% → 100.0% | 0 B → 576 KiB |   0 → 1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:16:15` |

##### `getTypeChecker` (`node_modules/typescript/lib/typescript.js:124848:26`)

|  Change |        Delta |      % |               Size | Samples | Caller        | Location                                                          |
| ------: | -----------: | -----: | -----------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +102.3% | +524.015 KiB | 100.0% | 512 KiB → 1.01 MiB |   1 → 2 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `doJSDocScan` (`node_modules/typescript/lib/typescript.js:38308:27`)

| Change |        Delta |             % |          Size | Samples | Caller      | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ----------- | ---------------------------------------------------- |
|    new | +519.187 KiB | 0.0% → 100.0% | 0 B → 519 KiB |   0 → 1 | `scanRange` | `node_modules/typescript/lib/typescript.js:14560:21` |

##### `createSymbol` (`node_modules/typescript/lib/typescript.js:46101:24`)

| Change |        Delta |             % |          Size | Samples | Caller                          | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ---------------------------------------------------- |
|    new | +518.437 KiB | 0.0% → 100.0% | 0 B → 518 KiB |   0 → 1 | `bindFunctionOrConstructorType` | `node_modules/typescript/lib/typescript.js:47501:41` |

##### `propagateChildFlags` (`node_modules/typescript/lib/typescript.js:28495:29`)

| Change |        Delta |             % |          Size | Samples | Caller                    | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- | ---------------------------------------------------- |
|    new | +513.984 KiB | 0.0% → 100.0% | 0 B → 514 KiB |   0 → 1 | `createVariableStatement` | `node_modules/typescript/lib/typescript.js:26455:35` |

##### `isTypeDerivedFrom` (`node_modules/typescript/lib/typescript.js:66484:29`)

| Change |        Delta |             % |          Size | Samples | Caller        | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------------------- |
|    new | +513.562 KiB | 0.0% → 100.0% | 0 B → 514 KiB |   0 → 1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:73860:26` |

##### `relateVariances` (`node_modules/typescript/lib/typescript.js:69054:31`)

| Change |        Delta |             % |          Size | Samples | Caller                          | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ---------------------------------------------------- |
|    new | +513.562 KiB | 0.0% → 100.0% | 0 B → 514 KiB |   0 → 1 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:68537:43` |

##### `bindEach` (`node_modules/typescript/lib/typescript.js:46419:20`)

| Change |        Delta |             % |          Size | Samples | Caller                               | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
|    new | +513.437 KiB | 0.0% → 100.0% | 0 B → 513 KiB |   0 → 1 | `forEachChildInInterfaceDeclaration` | `node_modules/typescript/lib/typescript.js:32060:80` |

##### `getTypeAtFlowAssignment` (`node_modules/typescript/lib/typescript.js:73025:37`)

| Change |    Delta |             % |          Size | Samples | Caller              | Location                                             |
| -----: | -------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------- |
|    new | +513 KiB | 0.0% → 100.0% | 0 B → 513 KiB |   0 → 1 | `getTypeAtFlowNode` | `node_modules/typescript/lib/typescript.js:72943:31` |

##### `resolveTypeReferenceDirectiveNamesWorker` (`node_modules/typescript/lib/typescript.js:124309:52`)

| Change |        Delta |             % |          Size | Samples | Caller                                              | Location                                                          |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- | ----------------------------------------------------------------- |
|    new | +512.406 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `resolveTypeReferenceDirectiveNamesReusingOldState` | `node_modules/typescript/lib/typescript.js:122897:61 → 124476:61` |

##### `createTypeMapper` (`node_modules/typescript/lib/typescript.js:65904:28`)

| Change |        Delta |             % |          Size | Samples | Caller                       | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ---------------------------------------------------- |
|    new | +512.187 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:66040:38` |

##### `getTransformFlagsSubtreeExclusions` (`node_modules/typescript/lib/typescript.js:28511:44`)

| Change |        Delta |             % |          Size | Samples | Caller            | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | ---------------------------------------------------- |
|    new | +512.187 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `createNodeArray` | `node_modules/typescript/lib/typescript.js:33287:27` |

##### `checkBinaryLikeExpressionWorker` (`node_modules/typescript/lib/typescript.js:81904:43`)

| Change |        Delta |             % |          Size | Samples | Caller   | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | -------- | ---------------------------------------------------- |
|    new | +512.109 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `onExit` | `node_modules/typescript/lib/typescript.js:81831:20` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:83934:23`)

| Change |        Delta |             % |          Size | Samples | Caller              | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------- |
|    new | +512.062 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `addLazyDiagnostic` | `node_modules/typescript/lib/typescript.js:88652:25` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:3963:2`)

| Change |        Delta |             % |          Size | Samples | Caller        | Location                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------------- |
|    new | +512.062 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:16:15` |

##### `parseTokenNode` (`node_modules/typescript/lib/typescript.js:33257:26`)

| Change |        Delta |             % |          Size | Samples | Caller            | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | ---------------------------------------------------- |
|    new | +512.039 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `parseTypeMember` | `node_modules/typescript/lib/typescript.js:34591:27` |

##### `sameMap` (`node_modules/typescript/lib/typescript.js:2595:17`)

| Change |        Delta |             % |          Size | Samples | Caller                  | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- | ---------------------------------------------------- |
|    new | +512.031 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `getCovariantInference` | `node_modules/typescript/lib/typescript.js:71808:33` |

##### `checkUnusedClassMembers` (`node_modules/typescript/lib/typescript.js:84802:35`)

| Change |        Delta |             % |          Size | Samples | Caller                   | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ | ---------------------------------------------------- |
|    new | +512.031 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `checkUnusedIdentifiers` | `node_modules/typescript/lib/typescript.js:84748:34` |

##### `getDefaultLibFilePriority` (`node_modules/typescript/lib/typescript.js:124352:37`)

| Change |        Delta |             % |          Size | Samples | Caller                   | Location                                              |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ | ----------------------------------------------------- |
|    new | +512.031 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `compareDefaultLibFiles` | `node_modules/typescript/lib/typescript.js:124349:34` |

##### `readFileSync` (`node:fs:433:22`)

| Change |        Delta |      % |                Size | Samples | Caller            | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ------------------------------------------ |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `diag` (`node_modules/typescript/lib/typescript.js:9336:14`)

|  Change |  Delta |             % |        Size | Samples | Caller        | Location                                          |
| ------: | -----: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:16:15` |

##### `typeToTypeNodeWorker` (`node_modules/typescript/lib/typescript.js:53183:34`)

|  Change |        Delta |             % |          Size | Samples | Caller                 | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- | ---------------------------------------------------- |
| removed | -517.687 KiB | 100.0% → 0.0% | 518 KiB → 0 B |   1 → 0 | `typeToTypeNodeHelper` | `node_modules/typescript/lib/typescript.js:53177:34` |

##### `exec` (`<unknown>`)

|  Change |        Delta |             % |          Size | Samples | Caller           | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ---------------------------------------------------- |
| removed | -513.843 KiB | 100.0% → 0.0% | 514 KiB → 0 B |   1 → 0 | `extractPragmas` | `node_modules/typescript/lib/typescript.js:38669:24` |

##### `parseSourceFile` (`node_modules/typescript/lib/typescript.js:32523:27`)

|  Change |        Delta |             % |          Size | Samples | Caller             | Location                                                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------ | --------------------------------------------------------------- |
| removed | -513.562 KiB | 100.0% → 0.0% | 514 KiB → 0 B |   1 → 0 | `createSourceFile` | `node_modules/typescript/lib/typescript.js:31293:26 → 32345:26` |

##### `resolveModuleName` (`node_modules/typescript/lib/typescript.js:42868:27`)

|  Change |        Delta |             % |          Size | Samples | Caller    | Location                                              |
| ------: | -----------: | ------------: | ------------: | ------: | --------- | ----------------------------------------------------- |
| removed | -513.375 KiB | 100.0% → 0.0% | 513 KiB → 0 B |   1 → 0 | `resolve` | `node_modules/typescript/lib/typescript.js:121935:14` |

##### `parseDeclarationWorker` (`node_modules/typescript/lib/typescript.js:37124:34`)

|  Change |        Delta |             % |          Size | Samples | Caller             | Location                                                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------ | --------------------------------------------------------------- |
| removed | -513.187 KiB | 100.0% → 0.0% | 513 KiB → 0 B |   1 → 0 | `parseDeclaration` | `node_modules/typescript/lib/typescript.js:36040:28 → 37095:28` |

##### `getSetExternalModuleIndicator` (`node_modules/typescript/lib/typescript.js:20661:39`)

|  Change |    Delta |             % |          Size | Samples | Caller                       | Location                                              |
| ------: | -------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------------------------------------- |
| removed | -513 KiB | 100.0% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getCreateSourceFileOptions` | `node_modules/typescript/lib/typescript.js:123978:38` |

##### `bindParentToChildIgnoringJSDoc` (`node_modules/typescript/lib/typescript.js:21713:42`)

|  Change |    Delta |             % |          Size | Samples | Caller                    | Location                                             |
| ------: | -------: | ------------: | ------------: | ------: | ------------------------- | ---------------------------------------------------- |
| removed | -513 KiB | 100.0% → 0.0% | 513 KiB → 0 B |   1 → 0 | `forEachChildRecursively` | `node_modules/typescript/lib/typescript.js:31244:33` |

##### `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js:61386:50`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------------------- |
| removed | -512.812 KiB | 100.0% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getPropertiesOfType` | `node_modules/typescript/lib/typescript.js:60156:31` |

##### `checkMemberForOverrideModifier` (`node_modules/typescript/lib/typescript.js:85606:42`)

|  Change |       Delta |             % |          Size | Samples | Caller                                   | Location                                             |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| removed | -512.75 KiB | 100.0% → 0.0% | 513 KiB → 0 B |   1 → 0 | `checkExistingMemberForOverrideModifier` | `node_modules/typescript/lib/typescript.js:85586:50` |

##### `emitIntersectionType` (`node_modules/typescript/lib/typescript.js:117665:32`)

|  Change |        Delta |             % |          Size | Samples | Caller                       | Location                                              |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------------------------------------- |
| removed | -512.156 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `pipelineEmitWithHintWorker` | `node_modules/typescript/lib/typescript.js:116837:38` |

##### `isConstContext` (`node_modules/typescript/lib/typescript.js:81235:26`)

|  Change |        Delta |             % |          Size | Samples | Caller               | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------- | ---------------------------------------------------- |
| removed | -512.156 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `checkObjectLiteral` | `node_modules/typescript/lib/typescript.js:74814:30` |

##### `join` (`<unknown>`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------------------- |
| removed | -512.093 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `doJSDocScan` | `node_modules/typescript/lib/typescript.js:37253:27` |

##### `createNodeFactory` (`node_modules/typescript/lib/typescript.js:23135:27`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------------- |
| removed | -512.062 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:16:15` |

##### `readPackageJsonTypesVersionPaths` (`node_modules/typescript/lib/typescript.js:42158:42`)

|  Change |        Delta |             % |          Size | Samples | Caller                             | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| removed | -512.039 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getVersionPathsOfPackageJsonInfo` | `node_modules/typescript/lib/typescript.js:43646:42` |

##### `toPath3` (`node_modules/typescript/lib/typescript.js:122790:19`)

|  Change |        Delta |             % |          Size | Samples | Caller                 | Location                                              |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- | ----------------------------------------------------- |
| removed | -512.031 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `findSourceFileWorker` | `node_modules/typescript/lib/typescript.js:123984:32` |

##### `getSubPatternFromSpec` (`node_modules/typescript/lib/typescript.js:21110:31`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------------------- |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:21101:25` |

##### `getLeadingLineTerminatorCount` (`node_modules/typescript/lib/typescript.js:119810:41`)

|  Change |        Delta |             % |          Size | Samples | Caller              | Location                                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------------------------------- |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `emitNodeListItems` | `node_modules/typescript/lib/typescript.js:119610:29` |

##### `getMapOfCacheRedirects` (`node_modules/typescript/lib/typescript.js:42558:34`)

|  Change |        Delta |             % |          Size | Samples | Caller                  | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------- | ---------------------------------------------------- |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getFromDirectoryCache` | `node_modules/typescript/lib/typescript.js:42672:33` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |      Delta |              % |                Size | Samples | Function                                   | Location                                                          |
| ------: | ---------: | -------------: | ------------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  +31.6% | +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1878:37`                        |
|  +31.6% | +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1490:33`                        |
|  +31.6% | +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1193:24`                        |
|  +31.6% | +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1519:36`                        |
|  +31.6% | +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `wrapModuleLoad`                           | `node:internal/modules/cjs/loader:237:24`                         |
|  +31.6% | +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `require`                                  | `node:internal/modules/helpers:146:19`                            |
|  +93.9% | +3.781 MiB |  18.5% → 29.8% | 4.03 MiB → 7.81 MiB |  8 → 15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1731:37`                        |
|  +15.6% | +3.405 MiB | 100.0% → 96.2% | 21.8 MiB → 25.2 MiB | 28 → 34 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                           |
|  +15.6% | +3.405 MiB | 100.0% → 96.2% | 21.8 MiB → 25.2 MiB | 28 → 34 | `(anonymous)`                              | `tsc-run.mjs:1:1`                                                 |
|  +15.6% | +3.405 MiB | 100.0% → 96.2% | 21.8 MiB → 25.2 MiB | 28 → 34 | `next`                                     | `<unknown>`                                                       |
|  +15.6% | +3.405 MiB | 100.0% → 96.2% | 21.8 MiB → 25.2 MiB | 28 → 34 | `run`                                      | `node:internal/modules/esm/module_job:332:12`                     |
|  +15.6% | +3.405 MiB | 100.0% → 96.2% | 21.8 MiB → 25.2 MiB | 28 → 34 | `(anonymous)`                              | `<unknown>`                                                       |
|     new | +2.502 MiB |    0.0% → 9.5% |       0 B → 2.5 MiB |   0 → 5 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js:82771:27`              |
| +141.7% | +2.125 MiB |   6.9% → 13.8% |  1.5 MiB → 3.63 MiB |   3 → 7 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:16:15`                 |
| +106.3% | +2.125 MiB |   9.2% → 15.7% |    2 MiB → 4.13 MiB |   4 → 8 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:1:1`                   |
|  +81.6% | +1.655 MiB |   9.3% → 14.1% | 2.03 MiB → 3.68 MiB |   4 → 7 | `wrapSafe`                                 | `node:internal/modules/cjs/loader:1671:18`                        |
|  +33.6% | +1.513 MiB |  20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  +33.6% | +1.513 MiB |  20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  +33.6% | +1.513 MiB |  20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  +33.6% | +1.513 MiB |  20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |

##### Third-party

|  Change |      Delta |             % |                Size | Samples | Function                                   | Location                                                          |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------- |
|     new | +2.502 MiB |   0.0% → 9.5% |       0 B → 2.5 MiB |   0 → 5 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js:82771:27`              |
| +141.7% | +2.125 MiB |  6.9% → 13.8% |  1.5 MiB → 3.63 MiB |   3 → 7 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:16:15`                 |
| +106.3% | +2.125 MiB |  9.2% → 15.7% |    2 MiB → 4.13 MiB |   4 → 8 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:1:1`                   |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  +33.6% | +1.513 MiB | 20.7% → 23.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
| +300.9% | +1.508 MiB |   2.3% → 7.7% |  513 KiB → 2.01 MiB |   1 → 4 | `parseDeclarationWorker`                   | `node_modules/typescript/lib/typescript.js:36069:34 → 37124:34`   |
| +150.2% | +1.502 MiB |   4.6% → 9.5% |     1 MiB → 2.5 MiB |   2 → 5 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:81516:33 → 82811:33`   |
|     new | +1.501 MiB |   0.0% → 5.7% |       0 B → 1.5 MiB |   0 → 3 | `getConditionalType`                       | `node_modules/typescript/lib/typescript.js:65229:30`              |
|     new | +1.501 MiB |   0.0% → 5.7% |       0 B → 1.5 MiB |   0 → 3 | `compareSignaturesRelated`                 | `node_modules/typescript/lib/typescript.js:67064:36`              |
|     new | +1.501 MiB |   0.0% → 5.7% |       0 B → 1.5 MiB |   0 → 3 | `signatureRelatedTo`                       | `node_modules/typescript/lib/typescript.js:69635:32`              |
|     new | +1.501 MiB |   0.0% → 5.7% |       0 B → 1.5 MiB |   0 → 3 | `signaturesRelatedTo`                      | `node_modules/typescript/lib/typescript.js:69505:33`              |
| +101.7% | +1.018 MiB |   4.6% → 7.7% |    1 MiB → 2.02 MiB |   2 → 4 | `getTypeChecker`                           | `node_modules/typescript/lib/typescript.js:123266:26 → 124848:26` |
|  +20.2% | +1.013 MiB |         23.0% | 5.01 MiB → 6.02 MiB | 10 → 12 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |

##### Standard library

| Change |        Delta |              % |                Size | Samples | Function          | Location                                      |
| -----: | -----------: | -------------: | ------------------: | ------: | ----------------- | --------------------------------------------- |
| +31.6% |   +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37`    |
| +31.6% |   +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33`    |
| +31.6% |   +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24`    |
| +31.6% |   +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36`    |
| +31.6% |   +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader:237:24`     |
| +31.6% |   +3.889 MiB |  56.4% → 61.7% | 12.3 MiB → 16.2 MiB |  9 → 16 | `require`         | `node:internal/modules/helpers:146:19`        |
| +93.9% |   +3.781 MiB |  18.5% → 29.8% | 4.03 MiB → 7.81 MiB |  8 → 15 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37`    |
| +15.6% |   +3.405 MiB | 100.0% → 96.2% | 21.8 MiB → 25.2 MiB | 28 → 34 | `next`            | `<unknown>`                                   |
| +15.6% |   +3.405 MiB | 100.0% → 96.2% | 21.8 MiB → 25.2 MiB | 28 → 34 | `run`             | `node:internal/modules/esm/module_job:332:12` |
| +81.6% |   +1.655 MiB |   9.3% → 14.1% | 2.03 MiB → 3.68 MiB |   4 → 7 | `wrapSafe`        | `node:internal/modules/cjs/loader:1671:18`    |
| +50.1% | +512.812 KiB |    4.6% → 5.7% |     1 MiB → 1.5 MiB |   2 → 3 | `forEach`         | `<unknown>`                                   |
|    new | +512.031 KiB |    0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `sort`            | `<unknown>`                                   |
|  +1.3% | +110.078 KiB |  37.9% → 31.9% | 8.27 MiB → 8.37 MiB |       1 | `readFileSync`    | `node:fs:433:22`                              |
|  +1.3% | +110.078 KiB |  37.9% → 31.9% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`    |
|  +1.3% | +110.078 KiB |  37.9% → 31.9% | 8.27 MiB → 8.37 MiB |       1 | `loadSource`      | `node:internal/modules/cjs/loader:1797:20`    |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Third-party

|  Change |      Delta |             % |                Size | Samples | Function                           | Location                                                          |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
|  -33.3% | -2.502 MiB | 34.5% → 19.1% | 7.51 MiB → 5.01 MiB | 15 → 10 | `forEach`                          | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:123923:7 → 125505:7`   |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `findSourceFileWorker`             | `node_modules/typescript/lib/typescript.js:123984:32 → 125566:32` |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `findSourceFile`                   | `node_modules/typescript/lib/typescript.js:123967:26 → 125549:26` |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `getSourceFileFromReferenceWorker` | `node_modules/typescript/lib/typescript.js:123879:44 → 125461:44` |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `processSourceFile`                | `node_modules/typescript/lib/typescript.js:123920:29 → 125502:29` |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `processRootFile`                  | `node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |
|  -49.9% | -1.997 MiB |  18.4% → 7.7% | 4.01 MiB → 2.01 MiB |   8 → 4 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
|  -75.1% | -1.505 MiB |   9.2% → 1.9% |  2.01 MiB → 512 KiB |   4 → 1 | `typeToString`                     | `node_modules/typescript/lib/typescript.js:53002:24 → 54239:24`   |
|  -75.1% | -1.505 MiB |   9.2% → 1.9% |  2.01 MiB → 512 KiB |   4 → 1 | `getTypeNamesForErrorDisplay`      | `node_modules/typescript/lib/typescript.js:53023:39 → 54260:39`   |
|  -75.1% | -1.505 MiB |   9.2% → 1.9% |  2.01 MiB → 512 KiB |   4 → 1 | `reportRelationError`              | `node_modules/typescript/lib/typescript.js:66409:33 → 67669:33`   |
|  -75.1% | -1.505 MiB |   9.2% → 1.9% |  2.01 MiB → 512 KiB |   4 → 1 | `reportErrorResults`               | `node_modules/typescript/lib/typescript.js:66600:32 → 67860:32`   |
| removed | -1.503 MiB |   6.9% → 0.0% |       1.5 MiB → 0 B |   3 → 0 | `processTypeReferenceDirectives`   | `node_modules/typescript/lib/typescript.js:124212:42`             |
| removed | -1.501 MiB |   6.9% → 0.0% |       1.5 MiB → 0 B |   3 → 0 | `loadWithModeAwareCache`           | `node_modules/typescript/lib/typescript.js:121967:32`             |
|  -33.2% | -1.497 MiB | 20.7% → 11.5% | 4.51 MiB → 3.01 MiB |   9 → 6 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:122262:23 → 123840:23` |
|  -42.7% | -1.496 MiB |  16.1% → 7.7% | 3.51 MiB → 2.01 MiB |   7 → 4 | `processImportedModules`           | `node_modules/typescript/lib/typescript.js:124378:34 → 125960:34` |
|  -66.8% | -1.005 MiB |   6.9% → 1.9% |  1.51 MiB → 512 KiB |   3 → 1 | `checkTypeAssignableTo`            | `node_modules/typescript/lib/typescript.js:65233:33 → 66493:33`   |
|  -66.8% | -1.005 MiB |   6.9% → 1.9% |  1.51 MiB → 512 KiB |   3 → 1 | `checkFunctionOrMethodDeclaration` | `node_modules/typescript/lib/typescript.js:83398:44 → 84693:44`   |
|  -66.8% | -1.005 MiB |   6.9% → 1.9% |  1.51 MiB → 512 KiB |   3 → 1 | `checkMethodDeclaration`           | `node_modules/typescript/lib/typescript.js:82023:34 → 83318:34`   |
|  -50.1% | -1.004 MiB |   9.2% → 3.8% |    2.01 MiB → 1 MiB |   4 → 2 | `checkClassDeclaration`            | `node_modules/typescript/lib/typescript.js:85417:33 → 86712:33`   |

##### Standard library

|  Change |        Delta |           % |          Size | Samples | Function | Location    |
| ------: | -----------: | ----------: | ------------: | ------: | -------- | ----------- |
| removed | -513.843 KiB | 2.3% → 0.0% | 514 KiB → 0 B |   1 → 0 | `exec`   | `<unknown>` |
| removed | -512.093 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `join`   | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

| Change |        Delta |             % |                Size | Samples | Callee        | Location                                   |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------- | ------------------------------------------ |
| +93.9% |   +3.781 MiB | 32.8% → 48.3% | 4.03 MiB → 7.81 MiB |  8 → 15 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
|  +1.3% | +110.078 KiB | 67.2% → 51.7% | 8.27 MiB → 8.37 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ------------------------------------------ |
| +31.6% | +3.889 MiB | 100.0% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ------------------------------------------ |
| +31.6% | +3.889 MiB | 100.0% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

| Change |      Delta |      % |                Size | Samples | Callee           | Location                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------------- |
| +31.6% | +3.889 MiB | 100.0% | 12.3 MiB → 16.2 MiB |  9 → 16 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ------------------------------------------ |
| +31.6% | +3.889 MiB | 100.0% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ------------------------------------------ |
| +31.6% | +3.889 MiB | 100.0% | 12.3 MiB → 16.2 MiB |  9 → 16 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|  Change |      Delta |             % |                Size | Samples | Callee        | Location                                        |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------- | ----------------------------------------------- |
| +106.3% | +2.125 MiB | 49.7% → 52.8% |    2 MiB → 4.13 MiB |   4 → 8 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
|  +81.6% | +1.655 MiB | 50.3% → 47.2% | 2.03 MiB → 3.68 MiB |   4 → 7 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`      |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|  Change |        Delta |             % |                Size | Samples | Callee                             | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
|  +31.6% |   +3.889 MiB | 56.4% → 64.2% | 12.3 MiB → 16.2 MiB |  9 → 16 | `require`                          | `node:internal/modules/helpers:146:19`                            |
|  +33.6% |   +1.513 MiB | 20.7% → 23.9% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  -33.2% |   -1.497 MiB | 20.7% → 11.9% | 4.51 MiB → 3.01 MiB |   9 → 6 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:122262:23 → 123840:23` |
| removed | -512.015 KiB |   2.3% → 0.0% |       512 KiB → 0 B |   1 → 0 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:40536:42`              |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

| Change |      Delta |      % |                Size | Samples | Callee             | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------ | ----------------------- |
| +15.6% | +3.405 MiB | 100.0% | 21.8 MiB → 25.2 MiB | 28 → 34 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

##### `next` (`<unknown>`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location          |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ----------------- |
| +15.6% | +3.405 MiB | 100.0% | 21.8 MiB → 25.2 MiB | 28 → 34 | `(anonymous)` | `tsc-run.mjs:1:1` |

##### `run` (`node:internal/modules/esm/module_job:332:12`)

| Change |      Delta |      % |                Size | Samples | Callee | Location    |
| -----: | ---------: | -----: | ------------------: | ------: | ------ | ----------- |
| +15.6% | +3.405 MiB | 100.0% | 21.8 MiB → 25.2 MiB | 28 → 34 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

| Change |      Delta |      % |                Size | Samples | Callee | Location                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ------ | --------------------------------------------- |
| +15.6% | +3.405 MiB | 100.0% | 21.8 MiB → 25.2 MiB | 28 → 34 | `run`  | `node:internal/modules/esm/module_job:332:12` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js:82771:27`)

| Change |      Delta |             % |          Size | Samples | Callee                  | Location                                             |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------- | ---------------------------------------------------- |
|    new | +2.502 MiB | 0.0% → 100.0% | 0 B → 2.5 MiB |   0 → 5 | `checkExpressionWorker` | `node_modules/typescript/lib/typescript.js:82811:33` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:16:15`)

|  Change |        Delta |            % |          Size | Samples | Callee              | Location                                             |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------- | ---------------------------------------------------- |
| removed |       -1 MiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `diag`              | `node_modules/typescript/lib/typescript.js:9336:14`  |
|     new | +576.375 KiB | 0.0% → 15.5% | 0 B → 576 KiB |   0 → 1 | `__export`          | `node_modules/typescript/lib/typescript.js:22:16`    |
| removed | -512.062 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `createNodeFactory` | `node_modules/typescript/lib/typescript.js:23135:27` |
|     new | +512.062 KiB | 0.0% → 13.8% | 0 B → 512 KiB |   0 → 1 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:3963:2`   |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:1:1`)

|  Change |      Delta |             % |               Size | Samples | Callee        | Location                                          |
| ------: | ---------: | ------------: | -----------------: | ------: | ------------- | ------------------------------------------------- |
| +141.7% | +2.125 MiB | 75.0% → 87.9% | 1.5 MiB → 3.63 MiB |   3 → 7 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:16:15` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124967:37`)

|  Change |        Delta |             % |             Size | Samples | Callee            | Location                                                          |
| ------: | -----------: | ------------: | ---------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| +101.7% |   +1.018 MiB | 22.2% → 33.5% | 1 MiB → 2.02 MiB |   2 → 4 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js:123266:26 → 124848:26` |
|  +14.1% | +507.265 KiB | 77.8% → 66.5% | 3.51 MiB → 4 MiB |   7 → 8 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124899:76`)

| Change |      Delta |      % |                Size | Samples | Callee                          | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| +33.6% | +1.513 MiB | 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:124947:36`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +33.6% | +1.513 MiB | 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:124966:52`)

| Change |      Delta |      % |                Size | Samples | Callee                     | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| +33.6% | +1.513 MiB | 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:125252:34`)

| Change |      Delta |      % |                Size | Samples | Callee                                     | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------- |
| +33.6% | +1.513 MiB | 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:124963:45`)

| Change |      Delta |      % |                Size | Samples | Callee                   | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| +33.6% | +1.513 MiB | 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:124957:41`)

| Change |      Delta |      % |                Size | Samples | Callee                              | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
| +33.6% | +1.513 MiB | 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:124895:32`)

| Change |      Delta |      % |                Size | Samples | Callee    | Location                                                      |
| -----: | ---------: | -----: | ------------------: | ------: | --------- | ------------------------------------------------------------- |
| +33.6% | +1.513 MiB | 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `flatMap` | `node_modules/typescript/lib/typescript.js:2612:17 → 2625:17` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:124909:34`)

| Change |      Delta |      % |                Size | Samples | Callee                 | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| +33.6% | +1.513 MiB | 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |

##### `parseDeclarationWorker` (`node_modules/typescript/lib/typescript.js:37124:34`)

| Change |        Delta |            % |           Size | Samples | Callee                      | Location                                             |
| -----: | -----------: | -----------: | -------------: | ------: | --------------------------- | ---------------------------------------------------- |
|    new |   +1.008 MiB | 0.0% → 50.2% | 0 B → 1.01 MiB |   0 → 2 | `parseClassDeclaration`     | `node_modules/typescript/lib/typescript.js:37684:33` |
|    new |       +1 MiB | 0.0% → 49.8% |    0 B → 1 MiB |   0 → 2 | `parseInterfaceDeclaration` | `node_modules/typescript/lib/typescript.js:37747:37` |
|    new | +513.984 KiB | 0.0% → 25.0% |  0 B → 514 KiB |   0 → 1 | `parseVariableStatement`    | `node_modules/typescript/lib/typescript.js:37316:34` |
|    new | +512.039 KiB | 0.0% → 24.9% |  0 B → 512 KiB |   0 → 1 | `parseModuleDeclaration`    | `node_modules/typescript/lib/typescript.js:37833:34` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js:82811:33`)

|  Change |        Delta |            % |          Size | Samples | Callee                          | Location                                             |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------- | ---------------------------------------------------- |
|     new | +513.562 KiB | 0.0% → 20.0% | 0 B → 514 KiB |   0 → 1 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js:77069:41` |
|     new |     +513 KiB | 0.0% → 20.0% | 0 B → 513 KiB |   0 → 1 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js:74242:27` |
|     new |     +513 KiB | 0.0% → 20.0% | 0 B → 513 KiB |   0 → 1 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js:82811:33` |
| removed | -512.156 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js:74814:30` |
|     new | +512.109 KiB | 0.0% → 20.0% | 0 B → 512 KiB |   0 → 1 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:81757:12` |

##### `getConditionalType` (`node_modules/typescript/lib/typescript.js:65229:30`)

| Change |        Delta |            % |          Size | Samples | Callee               | Location                                             |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------- | ---------------------------------------------------- |
|    new |   +1.001 MiB | 0.0% → 66.7% |   0 B → 1 MiB |   0 → 2 | `isTypeAssignableTo` | `node_modules/typescript/lib/typescript.js:66481:30` |
|    new | +512.187 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `instantiateType`    | `node_modules/typescript/lib/typescript.js:66256:27` |

##### `compareSignaturesRelated` (`node_modules/typescript/lib/typescript.js:67064:36`)

| Change |        Delta |            % |          Size | Samples | Callee                            | Location                                             |
| -----: | -----------: | -----------: | ------------: | ------: | --------------------------------- | ---------------------------------------------------- |
|    new |   +1.001 MiB | 0.0% → 66.7% |   0 B → 1 MiB |   0 → 2 | `isRelatedToWorker2`              | `node_modules/typescript/lib/typescript.js:69638:34` |
|    new | +512.031 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `instantiateSignatureInContextOf` | `node_modules/typescript/lib/typescript.js:77923:43` |

##### `signatureRelatedTo` (`node_modules/typescript/lib/typescript.js:69635:32`)

| Change |      Delta |             % |          Size | Samples | Callee                     | Location                                             |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------------- | ---------------------------------------------------- |
|    new | +1.501 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `compareSignaturesRelated` | `node_modules/typescript/lib/typescript.js:67064:36` |

##### `signaturesRelatedTo` (`node_modules/typescript/lib/typescript.js:69505:33`)

| Change |      Delta |             % |          Size | Samples | Callee               | Location                                             |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------- | ---------------------------------------------------- |
|    new | +1.501 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `signatureRelatedTo` | `node_modules/typescript/lib/typescript.js:69635:32` |

##### `getTypeChecker` (`node_modules/typescript/lib/typescript.js:124848:26`)

|  Change |        Delta |             % |               Size | Samples | Callee              | Location                                                        |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------------- | --------------------------------------------------------------- |
| +101.1% | +518.875 KiB | 50.0% → 49.9% | 513 KiB → 1.01 MiB |   1 → 2 | `createTypeChecker` | `node_modules/typescript/lib/typescript.js:48842:27 → 50070:27` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:2625:17`)

|  Change |        Delta |              % |                Size | Samples | Callee        | Location                                                          |
| ------: | -----------: | -------------: | ------------------: | ------: | ------------- | ----------------------------------------------------------------- |
|  +33.6% |   +1.513 MiB | 90.0% → 100.0% | 4.51 MiB → 6.02 MiB |  9 → 12 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
| removed | -512.015 KiB |   10.0% → 0.0% |       512 KiB → 0 B |   1 → 0 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:21101:25`              |

##### `forEach` (`<unknown>`)

| Change |        Delta |      % |            Size | Samples | Callee              | Location                                                        |
| -----: | -----------: | -----: | --------------: | ------: | ------------------- | --------------------------------------------------------------- |
| +50.1% | +512.812 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |

##### `sort` (`<unknown>`)

| Change |        Delta |             % |          Size | Samples | Callee        | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | --------------------------------------------------- |
|    new | +512.031 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:3023:16` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

| Change |        Delta |      % |                Size | Samples | Callee         | Location         |
| -----: | -----------: | -----: | ------------------: | ------: | -------------- | ---------------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

| Change |        Delta |      % |                Size | Samples | Callee            | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ------------------------------------------ |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:2378:17`)

|  Change |        Delta |             % |                Size | Samples | Callee               | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------- | ----------------------------------------------------------------- |
|  -49.9% |   -1.997 MiB | 53.3% → 40.1% | 4.01 MiB → 2.01 MiB |   8 → 4 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
| removed | -513.562 KiB |   6.7% → 0.0% |       514 KiB → 0 B |   1 → 0 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124200:35`             |
| removed | -512.093 KiB |   6.7% → 0.0% |       512 KiB → 0 B |   1 → 0 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122498:30`             |
|     new | +512.031 KiB |  0.0% → 10.0% |       0 B → 512 KiB |   0 → 1 | `checkParameter`     | `node_modules/typescript/lib/typescript.js:82969:26`              |
|   -0.2% |   -4.718 KiB | 40.0% → 59.9% |    3.01 MiB → 3 MiB |       6 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:125505:7`)

| Change |      Delta |      % |                Size | Samples | Callee           | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------------------------------------- |
| -55.4% | -2.497 MiB | 100.0% | 4.51 MiB → 2.01 MiB |   9 → 4 | `findSourceFile` | `node_modules/typescript/lib/typescript.js:123967:26 → 125549:26` |

##### `findSourceFileWorker` (`node_modules/typescript/lib/typescript.js:125566:32`)

|  Change |        Delta |              % |                Size | Samples | Callee                           | Location                                                          |
| ------: | -----------: | -------------: | ------------------: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| removed |   -1.503 MiB |   33.4% → 0.0% |       1.5 MiB → 0 B |   3 → 0 | `processTypeReferenceDirectives` | `node_modules/typescript/lib/typescript.js:124212:42`             |
|  -42.7% |   -1.496 MiB | 77.8% → 100.0% | 3.51 MiB → 2.01 MiB |   7 → 4 | `processImportedModules`         | `node_modules/typescript/lib/typescript.js:124378:34 → 125960:34` |
| removed | -513.562 KiB |   11.1% → 0.0% |       514 KiB → 0 B |   1 → 0 | `processReferencedFiles`         | `node_modules/typescript/lib/typescript.js:124199:34`             |
| removed |     -513 KiB |   11.1% → 0.0% |       513 KiB → 0 B |   1 → 0 | `getCreateSourceFileOptions`     | `node_modules/typescript/lib/typescript.js:123978:38`             |
| removed | -512.031 KiB |   11.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `toPath3`                        | `node_modules/typescript/lib/typescript.js:122790:19`             |

##### `findSourceFile` (`node_modules/typescript/lib/typescript.js:125549:26`)

| Change |      Delta |      % |                Size | Samples | Callee                 | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| -55.4% | -2.497 MiB | 100.0% | 4.51 MiB → 2.01 MiB |   9 → 4 | `findSourceFileWorker` | `node_modules/typescript/lib/typescript.js:123984:32 → 125566:32` |

##### `getSourceFileFromReferenceWorker` (`node_modules/typescript/lib/typescript.js:125461:44`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location                                                        |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | --------------------------------------------------------------- |
| -55.4% | -2.497 MiB | 100.0% | 4.51 MiB → 2.01 MiB |   9 → 4 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123923:7 → 125505:7` |

##### `processSourceFile` (`node_modules/typescript/lib/typescript.js:125502:29`)

| Change |      Delta |      % |                Size | Samples | Callee                             | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
| -55.4% | -2.497 MiB | 100.0% | 4.51 MiB → 2.01 MiB |   9 → 4 | `getSourceFileFromReferenceWorker` | `node_modules/typescript/lib/typescript.js:123879:44 → 125461:44` |

##### `processRootFile` (`node_modules/typescript/lib/typescript.js:125290:27`)

| Change |      Delta |      % |                Size | Samples | Callee              | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------- | ----------------------------------------------------------------- |
| -55.4% | -2.497 MiB | 100.0% | 4.51 MiB → 2.01 MiB |   9 → 4 | `processSourceFile` | `node_modules/typescript/lib/typescript.js:123920:29 → 125502:29` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124028:24`)

| Change |      Delta |      % |                Size | Samples | Callee            | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| -49.9% | -1.997 MiB | 100.0% | 4.01 MiB → 2.01 MiB |   8 → 4 | `processRootFile` | `node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |

##### `typeToString` (`node_modules/typescript/lib/typescript.js:54239:24`)

|  Change |        Delta |              % |          Size | Samples | Callee           | Location                                                      |
| ------: | -----------: | -------------: | ------------: | ------: | ---------------- | ------------------------------------------------------------- |
| removed |       -1 MiB |   49.9% → 0.0% |   1 MiB → 0 B |   2 → 0 | `writeNode`      | `node_modules/typescript/lib/typescript.js:116630:21`         |
| removed | -517.687 KiB |   25.2% → 0.0% | 518 KiB → 0 B |   1 → 0 | `typeToTypeNode` | `node_modules/typescript/lib/typescript.js:53051:23`          |
|     ~0% |        +32 B | 24.9% → 100.0% |       512 KiB |       1 | `(anonymous)`    | `node_modules/typescript/lib/typescript.js:3504:10 → 3517:10` |

##### `getTypeNamesForErrorDisplay` (`node_modules/typescript/lib/typescript.js:54260:39`)

| Change |      Delta |      % |               Size | Samples | Callee         | Location                                                        |
| -----: | ---------: | -----: | -----------------: | ------: | -------------- | --------------------------------------------------------------- |
| -75.1% | -1.505 MiB | 100.0% | 2.01 MiB → 512 KiB |   4 → 1 | `typeToString` | `node_modules/typescript/lib/typescript.js:53002:24 → 54239:24` |

##### `reportRelationError` (`node_modules/typescript/lib/typescript.js:67669:33`)

| Change |      Delta |      % |               Size | Samples | Callee                        | Location                                                        |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------------- | --------------------------------------------------------------- |
| -75.1% | -1.505 MiB | 100.0% | 2.01 MiB → 512 KiB |   4 → 1 | `getTypeNamesForErrorDisplay` | `node_modules/typescript/lib/typescript.js:53023:39 → 54260:39` |

##### `reportErrorResults` (`node_modules/typescript/lib/typescript.js:67860:32`)

| Change |      Delta |      % |               Size | Samples | Callee                | Location                                                        |
| -----: | ---------: | -----: | -----------------: | ------: | --------------------- | --------------------------------------------------------------- |
| -75.1% | -1.505 MiB | 100.0% | 2.01 MiB → 512 KiB |   4 → 1 | `reportRelationError` | `node_modules/typescript/lib/typescript.js:66409:33 → 67669:33` |

##### `processTypeReferenceDirectives` (`node_modules/typescript/lib/typescript.js:124212:42`)

|  Change |        Delta |            % |          Size | Samples | Callee                                              | Location                                              |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------- | ----------------------------------------------------- |
| removed |   -1.003 MiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `processTypeReferenceDirective`                     | `node_modules/typescript/lib/typescript.js:124232:41` |
| removed | -512.039 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `resolveTypeReferenceDirectiveNamesReusingOldState` | `node_modules/typescript/lib/typescript.js:122897:61` |

##### `loadWithModeAwareCache` (`node_modules/typescript/lib/typescript.js:121967:32`)

|  Change |        Delta |            % |          Size | Samples | Callee    | Location                                              |
| ------: | -----------: | -----------: | ------------: | ------: | --------- | ----------------------------------------------------- |
| removed |   -1.001 MiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `resolve` | `node_modules/typescript/lib/typescript.js:121935:14` |
| removed | -512.039 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `resolve` | `node_modules/typescript/lib/typescript.js:121956:14` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js:123840:23`)

| Change |        Delta |              % |                Size | Samples | Callee                                              | Location                                                      |
| -----: | -----------: | -------------: | ------------------: | ------: | --------------------------------------------------- | ------------------------------------------------------------- |
| -55.4% |   -2.497 MiB | 100.0% → 66.8% | 4.51 MiB → 2.01 MiB |   9 → 4 | `forEach`                                           | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17` |
|    new | +512.406 KiB |   0.0% → 16.6% |       0 B → 512 KiB |   0 → 1 | `resolveTypeReferenceDirectiveNamesReusingOldState` | `node_modules/typescript/lib/typescript.js:124476:61`         |
|    new | +512.031 KiB |   0.0% → 16.6% |       0 B → 512 KiB |   0 → 1 | `stableSort`                                        | `node_modules/typescript/lib/typescript.js:3033:20`           |

##### `processImportedModules` (`node_modules/typescript/lib/typescript.js:125960:34`)

|  Change |      Delta |            % |                Size | Samples | Callee                              | Location                                                          |
| ------: | ---------: | -----------: | ------------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
|  -42.7% | -1.496 MiB |       100.0% | 3.51 MiB → 2.01 MiB |   7 → 4 | `findSourceFile`                    | `node_modules/typescript/lib/typescript.js:123967:26 → 125549:26` |
| removed | -1.001 MiB | 28.6% → 0.0% |         1 MiB → 0 B |   2 → 0 | `resolveModuleNamesReusingOldState` | `node_modules/typescript/lib/typescript.js:122817:45`             |

##### `checkTypeAssignableTo` (`node_modules/typescript/lib/typescript.js:66493:33`)

| Change |      Delta |      % |               Size | Samples | Callee               | Location                                                        |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------- | --------------------------------------------------------------- |
| -66.8% | -1.005 MiB | 100.0% | 1.51 MiB → 512 KiB |   3 → 1 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |

##### `checkFunctionOrMethodDeclaration` (`node_modules/typescript/lib/typescript.js:84693:44`)

| Change |      Delta |      % |               Size | Samples | Callee                      | Location                                                        |
| -----: | ---------: | -----: | -----------------: | ------: | --------------------------- | --------------------------------------------------------------- |
| -66.8% | -1.005 MiB | 100.0% | 1.51 MiB → 512 KiB |   3 → 1 | `checkSignatureDeclaration` | `node_modules/typescript/lib/typescript.js:81792:37 → 83087:37` |

##### `checkMethodDeclaration` (`node_modules/typescript/lib/typescript.js:83318:34`)

| Change |      Delta |      % |               Size | Samples | Callee                             | Location                                                        |
| -----: | ---------: | -----: | -----------------: | ------: | ---------------------------------- | --------------------------------------------------------------- |
| -66.8% | -1.005 MiB | 100.0% | 1.51 MiB → 512 KiB |   3 → 1 | `checkFunctionOrMethodDeclaration` | `node_modules/typescript/lib/typescript.js:83398:44 → 84693:44` |

##### `checkClassDeclaration` (`node_modules/typescript/lib/typescript.js:86712:33`)

|  Change |        Delta |              % |             Size | Samples | Callee                      | Location                                                      |
| ------: | -----------: | -------------: | ---------------: | ------: | --------------------------- | ------------------------------------------------------------- |
|  -33.5% | -516.109 KiB | 75.0% → 100.0% | 1.51 MiB → 1 MiB |   3 → 2 | `forEach`                   | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17` |
| removed |  -512.75 KiB |   25.0% → 0.0% |    513 KiB → 0 B |   1 → 0 | `checkClassLikeDeclaration` | `node_modules/typescript/lib/typescript.js:85429:37`          |
