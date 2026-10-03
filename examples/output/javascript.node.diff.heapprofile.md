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
|     new | +512.062 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:21101:25 → 3963:2`     |
|     new | +512.062 KiB |  0.0% → 1.9% |       0 B → 512 KiB |   0 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:83934:23`              |
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
|     new | +512.062 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:21101:25 → 3963:2`     |
|     new | +512.062 KiB | 0.0% → 1.9% |      0 B → 512 KiB |   0 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:83934:23`              |
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
| +301.8% | +1.509 MiB |   2.3% → 7.7% |  512 KiB → 2.01 MiB |   1 → 4 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:122498:30 → 124028:24` |
| +300.9% | +1.508 MiB |   2.3% → 7.7% |  513 KiB → 2.01 MiB |   1 → 4 | `parseDeclarationWorker`                   | `node_modules/typescript/lib/typescript.js:36069:34 → 37124:34`   |
| +150.2% | +1.502 MiB |   4.6% → 9.5% |     1 MiB → 2.5 MiB |   2 → 5 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:81516:33 → 82811:33`   |
|     new | +1.501 MiB |   0.0% → 5.7% |       0 B → 1.5 MiB |   0 → 3 | `getConditionalType`                       | `node_modules/typescript/lib/typescript.js:65229:30`              |
|     new | +1.501 MiB |   0.0% → 5.7% |       0 B → 1.5 MiB |   0 → 3 | `compareSignaturesRelated`                 | `node_modules/typescript/lib/typescript.js:67064:36`              |
|     new | +1.501 MiB |   0.0% → 5.7% |       0 B → 1.5 MiB |   0 → 3 | `signatureRelatedTo`                       | `node_modules/typescript/lib/typescript.js:69635:32`              |
|     new | +1.501 MiB |   0.0% → 5.7% |       0 B → 1.5 MiB |   0 → 3 | `signaturesRelatedTo`                      | `node_modules/typescript/lib/typescript.js:69505:33`              |
| +101.7% | +1.018 MiB |   4.6% → 7.7% |    1 MiB → 2.02 MiB |   2 → 4 | `getTypeChecker`                           | `node_modules/typescript/lib/typescript.js:123266:26 → 124848:26` |

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
| removed | -4.006 MiB |  18.4% → 0.0% |      4.01 MiB → 0 B |   8 → 0 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:122449:24`             |
|  -33.3% | -2.502 MiB | 34.5% → 19.1% | 7.51 MiB → 5.01 MiB | 15 → 10 | `forEach`                          | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:123923:7 → 125505:7`   |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `findSourceFileWorker`             | `node_modules/typescript/lib/typescript.js:123984:32 → 125566:32` |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `findSourceFile`                   | `node_modules/typescript/lib/typescript.js:123967:26 → 125549:26` |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `getSourceFileFromReferenceWorker` | `node_modules/typescript/lib/typescript.js:123879:44 → 125461:44` |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `processSourceFile`                | `node_modules/typescript/lib/typescript.js:123920:29 → 125502:29` |
|  -55.4% | -2.497 MiB |  20.7% → 7.7% | 4.51 MiB → 2.01 MiB |   9 → 4 | `processRootFile`                  | `node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |
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
|  -66.8% | -1.005 MiB |   6.9% → 1.9% |  1.51 MiB → 512 KiB |   3 → 1 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:82238:27 → 81757:12`   |

##### Standard library

|  Change |        Delta |           % |          Size | Samples | Function | Location    |
| ------: | -----------: | ----------: | ------------: | ------: | -------- | ----------- |
| removed | -513.843 KiB | 2.3% → 0.0% | 514 KiB → 0 B |   1 → 0 | `exec`   | `<unknown>` |
| removed | -512.093 KiB | 2.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `join`   | `<unknown>` |
