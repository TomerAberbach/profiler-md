# Trace

Recorded 1,773 events over 3.88s.

| Category    |     % |    Time | Count |
| ----------- | ----: | ------: | ----: |
| Compilation | 87.1% |   3.38s | 1,497 |
| Parsing     | 11.1% | 432.9ms |   276 |

## Threads

Threads with the most time in spans. Threads run concurrently, so percentages can sum to more than 100%.

|     % |  Time | Count | Thread |
| ----: | ----: | ----: | ------ |
| 98.2% | 3.81s | 1,773 | `Main` |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

Thread spans with the most time, excluding child spans.

|     % |    Time | Count |   Mean |     Max | Span                                       |
| ----: | ------: | ----: | -----: | ------: | ------------------------------------------ |
| 29.5% |   1.14s |    83 | 13.8ms | 407.7ms | `checkSourceFile`                          |
| 23.4% | 909.7ms |   558 |  1.6ms |  24.6ms | `checkExpression`                          |
| 11.1% | 432.9ms |   276 |  1.6ms |  79.8ms | `createSourceFile`                         |
| 11.1% | 431.5ms |   279 |  1.5ms |  31.4ms | `structuredTypeRelatedTo`                  |
|  8.3% | 321.2ms |   275 |  1.2ms |  59.5ms | `bindSourceFile`                           |
|  7.9% | 307.3ms |   116 |  2.6ms |  22.0ms | `checkDeferredNode`                        |
|  2.9% | 111.2ms |    60 |  1.9ms |  17.6ms | `findSourceFile`                           |
|  1.7% |  64.8ms |    28 |  2.3ms |   7.4ms | `getVariancesWorker`                       |
|  1.1% |  40.9ms |    81 |  0.5ms |   4.5ms | `checkVariableDeclaration`                 |
|  0.5% |  18.9ms |     1 | 18.9ms |  18.9ms | `processRootFiles`                         |
|  0.4% |  17.2ms |     1 | 17.2ms |  17.2ms | `createProgram`                            |
|  0.1% |   3.7ms |     1 |  3.7ms |   3.7ms | `processTypeReferences`                    |
|  0.1% |   3.5ms |     2 |  1.8ms |   3.0ms | `resolveModuleNamesWorker`                 |
|  0.1% |   2.3ms |     1 |  2.3ms |   2.3ms | `resolveTypeReferenceDirectiveNamesWorker` |
| <0.1% |   0.7ms |     5 |  0.1ms |   0.2ms | `processTypeReferenceDirective`            |
| <0.1% |   0.6ms |     1 |  0.6ms |   0.6ms | `emit`                                     |
| <0.1% |   0.6ms |     1 |  0.6ms |   0.6ms | `emitBuildInfo`                            |
| <0.1% |   0.2ms |     2 |  0.1ms |   0.2ms | `resolveLibrary`                           |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % |    Time | Count |   Mean |     Max | Span                                       |
| ----: | ------: | ----: | -----: | ------: | ------------------------------------------ |
| 29.5% |   1.14s |    83 | 13.8ms | 407.7ms | `checkSourceFile`                          |
| 23.4% | 909.7ms |   558 |  1.6ms |  24.6ms | `checkExpression`                          |
| 11.1% | 431.5ms |   279 |  1.5ms |  31.4ms | `structuredTypeRelatedTo`                  |
|  8.3% | 321.2ms |   275 |  1.2ms |  59.5ms | `bindSourceFile`                           |
|  7.9% | 307.3ms |   116 |  2.6ms |  22.0ms | `checkDeferredNode`                        |
|  2.9% | 111.2ms |    60 |  1.9ms |  17.6ms | `findSourceFile`                           |
|  1.7% |  64.8ms |    28 |  2.3ms |   7.4ms | `getVariancesWorker`                       |
|  1.1% |  40.9ms |    81 |  0.5ms |   4.5ms | `checkVariableDeclaration`                 |
|  0.5% |  18.9ms |     1 | 18.9ms |  18.9ms | `processRootFiles`                         |
|  0.4% |  17.2ms |     1 | 17.2ms |  17.2ms | `createProgram`                            |
|  0.1% |   3.7ms |     1 |  3.7ms |   3.7ms | `processTypeReferences`                    |
|  0.1% |   3.5ms |     2 |  1.8ms |   3.0ms | `resolveModuleNamesWorker`                 |
|  0.1% |   2.3ms |     1 |  2.3ms |   2.3ms | `resolveTypeReferenceDirectiveNamesWorker` |
| <0.1% |   0.7ms |     5 |  0.1ms |   0.2ms | `processTypeReferenceDirective`            |
| <0.1% |   0.6ms |     1 |  0.6ms |   0.6ms | `emit`                                     |
| <0.1% |   0.6ms |     1 |  0.6ms |   0.6ms | `emitBuildInfo`                            |
| <0.1% |   0.2ms |     2 |  0.1ms |   0.2ms | `resolveLibrary`                           |

##### Parsing

|     % |    Time | Count |  Mean |    Max | Span               |
| ----: | ------: | ----: | ----: | -----: | ------------------ |
| 11.1% | 432.9ms |   276 | 1.6ms | 79.8ms | `createSourceFile` |

#### Parents

Parent spans with the largest contribution to each span's self time.

##### `checkExpression`

|     % |    Time | Count |  Mean |    Max | Parent                     |
| ----: | ------: | ----: | ----: | -----: | -------------------------- |
| 73.5% | 668.6ms |   379 | 1.8ms | 17.7ms | `checkExpression`          |
| 16.5% | 150.3ms |    78 | 1.9ms | 10.7ms | `checkVariableDeclaration` |
|  6.4% |  57.8ms |    66 | 0.9ms | 24.6ms | `checkDeferredNode`        |
|  3.6% |  33.1ms |    35 | 0.9ms |  9.0ms | `checkSourceFile`          |

##### `createSourceFile`

|     % |    Time | Count |  Mean |    Max | Parent                  |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 89.7% | 388.4ms |   213 | 1.8ms | 79.8ms | `findSourceFile`        |
|  8.9% |  38.6ms |    58 | 0.7ms |  3.4ms | `processRootFiles`      |
|  1.4% |   5.9ms |     5 | 1.2ms |  2.6ms | `processTypeReferences` |

##### `structuredTypeRelatedTo`

|     % |    Time | Count |  Mean |    Max | Parent                    |
| ----: | ------: | ----: | ----: | -----: | ------------------------- |
| 45.6% | 196.7ms |   183 | 1.1ms | 31.4ms | `structuredTypeRelatedTo` |
| 34.2% | 147.6ms |    29 | 5.1ms | 19.9ms | `getVariancesWorker`      |
| 12.6% |  54.4ms |    40 | 1.4ms | 13.9ms | `checkExpression`         |
|  4.2% |  18.2ms |    17 | 1.1ms |  4.4ms | `checkSourceFile`         |
|  2.1% |   8.9ms |     7 | 1.3ms |  2.0ms | `checkDeferredNode`       |

##### `checkDeferredNode`

|      % |    Time | Count |  Mean |    Max | Parent            |
| -----: | ------: | ----: | ----: | -----: | ----------------- |
| 100.0% | 307.3ms |   116 | 2.6ms | 22.0ms | `checkSourceFile` |

##### `findSourceFile`

|     % |   Time | Count |  Mean |    Max | Parent                          |
| ----: | -----: | ----: | ----: | -----: | ------------------------------- |
| 51.8% | 57.6ms |    44 | 1.3ms |  5.6ms | `findSourceFile`                |
| 27.8% | 31.0ms |     5 | 6.2ms | 17.6ms | `processTypeReferenceDirective` |
| 11.9% | 13.2ms |     2 | 6.6ms | 10.8ms | `createProgram`                 |
|  8.5% |  9.4ms |     9 | 1.0ms |  4.1ms | `processRootFiles`              |

##### `getVariancesWorker`

|     % |   Time | Count |  Mean |   Max | Parent                    |
| ----: | -----: | ----: | ----: | ----: | ------------------------- |
| 85.6% | 55.5ms |    24 | 2.3ms | 7.4ms | `structuredTypeRelatedTo` |
| 14.4% |  9.3ms |     4 | 2.3ms | 3.6ms | `checkExpression`         |

##### `checkVariableDeclaration`

|     % |   Time | Count |  Mean |   Max | Parent              |
| ----: | -----: | ----: | ----: | ----: | ------------------- |
| 81.1% | 33.1ms |    55 | 0.6ms | 4.5ms | `checkDeferredNode` |
| 18.9% |  7.7ms |    26 | 0.3ms | 1.0ms | `checkSourceFile`   |

##### `processRootFiles`

|      % |   Time | Count |   Mean |    Max | Parent          |
| -----: | -----: | ----: | -----: | -----: | --------------- |
| 100.0% | 18.9ms |     1 | 18.9ms | 18.9ms | `createProgram` |

##### `processTypeReferences`

|      % |  Time | Count |  Mean |   Max | Parent          |
| -----: | ----: | ----: | ----: | ----: | --------------- |
| 100.0% | 3.7ms |     1 | 3.7ms | 3.7ms | `createProgram` |

##### `resolveModuleNamesWorker`

|      % |  Time | Count |  Mean |   Max | Parent           |
| -----: | ----: | ----: | ----: | ----: | ---------------- |
| 100.0% | 3.5ms |     2 | 1.8ms | 3.0ms | `findSourceFile` |

##### `resolveTypeReferenceDirectiveNamesWorker`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 2.3ms |     1 | 2.3ms | 2.3ms | `processTypeReferences` |

##### `processTypeReferenceDirective`

|     % |  Time | Count |  Mean |   Max | Parent                  |
| ----: | ----: | ----: | ----: | ----: | ----------------------- |
| 80.4% | 0.6ms |     4 | 0.1ms | 0.2ms | `processTypeReferences` |
| 19.6% | 0.1ms |     1 | 0.1ms | 0.1ms | `findSourceFile`        |

##### `emitBuildInfo`

|      % |  Time | Count |  Mean |   Max | Parent |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 0.6ms |     1 | 0.6ms | 0.6ms | `emit` |

##### `resolveLibrary`

|      % |  Time | Count |  Mean |   Max | Parent           |
| -----: | ----: | ----: | ----: | ----: | ---------------- |
| 100.0% | 0.2ms |     2 | 0.1ms | 0.2ms | `findSourceFile` |

### Total time

Thread spans with the most time, including child spans.

|     % |    Time | Count |    Mean |     Max | Span                                       |
| ----: | ------: | ----: | ------: | ------: | ------------------------------------------ |
| 74.7% |   2.90s |    83 |  35.0ms | 601.2ms | `checkSourceFile`                          |
| 27.0% |   1.04s |   116 |   9.0ms | 122.3ms | `checkDeferredNode`                        |
| 26.9% |   1.04s |   558 |   5.2ms | 118.6ms | `checkExpression`                          |
| 20.6% | 799.1ms |    81 |   9.9ms | 118.8ms | `checkVariableDeclaration`                 |
| 15.2% | 590.8ms |     1 | 590.8ms | 590.8ms | `createProgram`                            |
| 13.0% | 503.6ms |    60 |  28.1ms | 190.8ms | `findSourceFile`                           |
| 12.5% | 487.0ms |   279 |  16.9ms | 173.2ms | `structuredTypeRelatedTo`                  |
| 11.1% | 432.9ms |   276 |   1.6ms |  79.8ms | `createSourceFile`                         |
| 10.0% | 388.3ms |     1 | 388.3ms | 388.3ms | `processRootFiles`                         |
|  8.3% | 321.2ms |   275 |   1.2ms |  59.5ms | `bindSourceFile`                           |
|  6.9% | 268.2ms |    28 |  50.9ms | 172.9ms | `getVariancesWorker`                       |
|  5.3% | 204.8ms |     5 |  41.0ms | 137.7ms | `processTypeReferenceDirective`            |
|  2.0% |  79.0ms |     1 |  79.0ms |  79.0ms | `processTypeReferences`                    |
|  0.1% |   3.5ms |     2 |   1.8ms |   3.0ms | `resolveModuleNamesWorker`                 |
|  0.1% |   2.3ms |     1 |   2.3ms |   2.3ms | `resolveTypeReferenceDirectiveNamesWorker` |
| <0.1% |   1.3ms |     1 |   1.3ms |   1.3ms | `emit`                                     |
| <0.1% |   0.6ms |     1 |   0.6ms |   0.6ms | `emitBuildInfo`                            |
| <0.1% |   0.2ms |     2 |   0.1ms |   0.2ms | `resolveLibrary`                           |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % |    Time | Count |    Mean |     Max | Span                                       |
| ----: | ------: | ----: | ------: | ------: | ------------------------------------------ |
| 74.7% |   2.90s |    83 |  35.0ms | 601.2ms | `checkSourceFile`                          |
| 27.0% |   1.04s |   116 |   9.0ms | 122.3ms | `checkDeferredNode`                        |
| 26.9% |   1.04s |   558 |   5.2ms | 118.6ms | `checkExpression`                          |
| 20.6% | 799.1ms |    81 |   9.9ms | 118.8ms | `checkVariableDeclaration`                 |
| 15.2% | 590.8ms |     1 | 590.8ms | 590.8ms | `createProgram`                            |
| 13.0% | 503.6ms |    60 |  28.1ms | 190.8ms | `findSourceFile`                           |
| 12.5% | 487.0ms |   279 |  16.9ms | 173.2ms | `structuredTypeRelatedTo`                  |
| 10.0% | 388.3ms |     1 | 388.3ms | 388.3ms | `processRootFiles`                         |
|  8.3% | 321.2ms |   275 |   1.2ms |  59.5ms | `bindSourceFile`                           |
|  6.9% | 268.2ms |    28 |  50.9ms | 172.9ms | `getVariancesWorker`                       |
|  5.3% | 204.8ms |     5 |  41.0ms | 137.7ms | `processTypeReferenceDirective`            |
|  2.0% |  79.0ms |     1 |  79.0ms |  79.0ms | `processTypeReferences`                    |
|  0.1% |   3.5ms |     2 |   1.8ms |   3.0ms | `resolveModuleNamesWorker`                 |
|  0.1% |   2.3ms |     1 |   2.3ms |   2.3ms | `resolveTypeReferenceDirectiveNamesWorker` |
| <0.1% |   1.3ms |     1 |   1.3ms |   1.3ms | `emit`                                     |
| <0.1% |   0.6ms |     1 |   0.6ms |   0.6ms | `emitBuildInfo`                            |
| <0.1% |   0.2ms |     2 |   0.1ms |   0.2ms | `resolveLibrary`                           |

##### Parsing

|     % |    Time | Count |  Mean |    Max | Span               |
| ----: | ------: | ----: | ----: | -----: | ------------------ |
| 11.1% | 432.9ms |   276 | 1.6ms | 79.8ms | `createSourceFile` |

#### Attribute values

Attribute values with the largest contribution to each span's total time.

##### `checkSourceFile`

|     % |    Time | Count |    Mean |     Max | Attribute | Value                                                 |
| ----: | ------: | ----: | ------: | ------: | --------- | ----------------------------------------------------- |
| 20.7% | 601.2ms |     1 | 601.2ms | 601.2ms | `path`    | `/src/zod/src/types.ts`                               |
|  9.7% | 282.9ms |     1 | 282.9ms | 282.9ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
|  9.3% | 269.8ms |     1 | 269.8ms | 269.8ms | `path`    | `/src/zod/src/helpers/partialUtil.ts`                 |
|  4.9% | 143.4ms |     1 | 143.4ms | 143.4ms | `path`    | `/src/zod/src/__tests__/object.test.ts`               |
|  4.3% | 125.7ms |     1 | 125.7ms | 125.7ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |

##### `checkDeferredNode`

|     % |    Time | Count |   Mean |     Max | Attribute | Value                                                 |
| ----: | ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------- |
| 26.0% | 273.0ms |    12 | 22.8ms | 122.3ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
|  8.8% |  92.6ms |     7 | 13.2ms |  40.6ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |
|  7.1% |  74.4ms |    10 |  7.4ms |  22.3ms | `path`    | `/src/zod/src/__tests__/object.test.ts`               |
|  6.0% |  63.2ms |     6 | 10.5ms |  20.2ms | `path`    | `/src/zod/src/__tests__/function.test.ts`             |
|  5.1% |  53.1ms |     5 | 10.6ms |  20.3ms | `path`    | `/src/zod/src/__tests__/intersection.test.ts`         |

##### `checkExpression`

|     % |    Time | Count |   Mean |     Max | Attribute | Value                                                 |
| ----: | ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------- |
| 34.7% |   1.01s |   104 |  9.7ms | 118.6ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
|  9.5% | 275.8ms |    19 | 14.5ms |  83.8ms | `path`    | `/src/zod/src/__tests__/crazySchema.ts`               |
|  9.2% | 266.8ms |    44 |  6.1ms |  15.6ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |
|  5.5% | 159.8ms |    97 |  1.6ms |  13.8ms | `path`    | `/src/zod/src/types.ts`                               |
|  5.1% | 147.8ms |    25 |  5.9ms |  18.4ms | `path`    | `/src/zod/src/__tests__/object.test.ts`               |

##### `checkVariableDeclaration`

|     % |    Time | Count |   Mean |     Max | Attribute | Value                                                 |
| ----: | ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------- |
| 22.4% | 179.3ms |     5 | 35.9ms | 118.8ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
| 11.5% |  92.2ms |     2 | 46.1ms |  84.0ms | `path`    | `/src/zod/src/__tests__/crazySchema.ts`               |
|  8.5% |  68.3ms |     8 |  8.5ms |  21.6ms | `path`    | `/src/zod/src/__tests__/object.test.ts`               |
|  7.1% |  56.4ms |     7 |  8.1ms |  18.5ms | `path`    | `/src/zod/src/__tests__/function.test.ts`             |
|  6.6% |  52.6ms |     7 |  7.5ms |  16.0ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |

##### `createProgram`

|      % |    Time | Count |    Mean |     Max | Attribute        | Value                    |
| -----: | ------: | ----: | ------: | ------: | ---------------- | ------------------------ |
| 100.0% | 590.8ms |     1 | 590.8ms | 590.8ms | `configFilePath` | `/src/zod/tsconfig.json` |

##### `findSourceFile`

|     % |    Time | Count |    Mean |     Max | Attribute         | Value                                                      |
| ----: | ------: | ----: | ------: | ------: | ----------------- | ---------------------------------------------------------- |
| 49.2% | 828.1ms |    22 |  37.6ms | 187.3ms | `fileIncludeKind` | `Import`                                                   |
| 19.6% | 330.8ms |     9 |  36.8ms | 190.8ms | `fileIncludeKind` | `RootFile`                                                 |
| 10.1% | 169.3ms |    12 |  14.1ms |  33.0ms | `fileIncludeKind` | `LibReferenceDirective`                                    |
|  8.2% | 137.6ms |     1 | 137.6ms | 137.6ms | `fileIncludeKind` | `TypeReferenceDirective`                                   |
|  6.3% | 106.3ms |     2 |  53.1ms |  86.9ms | `fileIncludeKind` | `LibFile`                                                  |
| 11.3% | 190.8ms |     1 | 190.8ms | 190.8ms | `fileName`        | `/src/zod/src/__tests__/all-errors.test.ts`                |
| 11.1% | 187.3ms |     1 | 187.3ms | 187.3ms | `fileName`        | `/src/zod/node_modules/@jest/globals/build/index.d.ts`     |
| 10.4% | 174.4ms |     1 | 174.4ms | 174.4ms | `fileName`        | `/src/zod/node_modules/@jest/environment/build/index.d.ts` |
|  8.2% | 137.6ms |     1 | 137.6ms | 137.6ms | `fileName`        | `/src/zod/node_modules/@types/node/index.d.ts`             |
|  7.5% | 125.5ms |     1 | 125.5ms | 125.5ms | `fileName`        | `/src/zod/src/ZodError.ts`                                 |

##### `createSourceFile`

|     % |   Time | Count |   Mean |    Max | Attribute | Value                                               |
| ----: | -----: | ----: | -----: | -----: | --------- | --------------------------------------------------- |
| 18.4% | 79.8ms |     1 | 79.8ms | 79.8ms | `path`    | `/src/zod/src/types.ts`                             |
| 17.6% | 76.2ms |     1 | 76.2ms | 76.2ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
|  6.1% | 26.5ms |     1 | 26.5ms | 26.5ms | `path`    | `/src/zod/node_modules/@babel/types/lib/index.d.ts` |
|  3.5% | 15.2ms |     1 | 15.2ms | 15.2ms | `path`    | `/src/zod/src/ZodError.ts`                          |
|  2.5% | 11.0ms |     1 | 11.0ms | 11.0ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |

##### `bindSourceFile`

|     % |   Time | Count |   Mean |    Max | Attribute | Value                                               |
| ----: | -----: | ----: | -----: | -----: | --------- | --------------------------------------------------- |
| 18.5% | 59.5ms |     1 | 59.5ms | 59.5ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
| 10.6% | 34.2ms |     1 | 34.2ms | 34.2ms | `path`    | `/src/zod/src/types.ts`                             |
|  7.3% | 23.4ms |     1 | 23.4ms | 23.4ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |
|  5.6% | 17.9ms |     1 | 17.9ms | 17.9ms | `path`    | `/src/zod/node_modules/@babel/types/lib/index.d.ts` |
|  2.3% |  7.4ms |     1 |  7.4ms |  7.4ms | `path`    | `/src/zod/node_modules/@types/node/inspector.d.ts`  |

##### `processTypeReferenceDirective`

|     % |    Time | Count |    Mean |     Max | Attribute   | Value                                                      |
| ----: | ------: | ----: | ------: | ------: | ----------- | ---------------------------------------------------------- |
| 67.2% | 137.7ms |     1 | 137.7ms | 137.7ms | `directive` | `node`                                                     |
| 21.7% |  44.5ms |     1 |  44.5ms |  44.5ms | `directive` | `babel__core`                                              |
|  7.8% |  16.1ms |     1 |  16.1ms |  16.1ms | `directive` | `semver`                                                   |
|  2.5% |   5.0ms |     1 |   5.0ms |   5.0ms | `directive` | `json-schema`                                              |
|  0.7% |   1.5ms |     1 |   1.5ms |   1.5ms | `directive` | `estree`                                                   |
| 67.2% | 137.7ms |     1 | 137.7ms | 137.7ms | `refPath`   | `/src/zod/node_modules/@jest/environment/build/index.d.ts` |

##### `resolveModuleNamesWorker`

|     % |  Time | Count |  Mean |   Max | Attribute            | Value                                                      |
| ----: | ----: | ----: | ----: | ----: | -------------------- | ---------------------------------------------------------- |
| 84.3% | 3.0ms |     1 | 3.0ms | 3.0ms | `containingFileName` | `/src/zod/node_modules/@types/istanbul-reports/index.d.ts` |
| 15.7% | 0.6ms |     1 | 0.6ms | 0.6ms | `containingFileName` | `/src/zod/node_modules/@jest/fake-timers/build/index.d.ts` |

##### `resolveTypeReferenceDirectiveNamesWorker`

|      % |  Time | Count |  Mean |   Max | Attribute            | Value                                 |
| -----: | ----: | ----: | ----: | ----: | -------------------- | ------------------------------------- |
| 100.0% | 2.3ms |     1 | 2.3ms | 2.3ms | `containingFileName` | `/src/zod/__inferred type names__.ts` |

##### `resolveLibrary`

|     % |  Time | Count |  Mean |   Max | Attribute     | Value                                                            |
| ----: | ----: | ----: | ----: | ----: | ------------- | ---------------------------------------------------------------- |
| 67.3% | 0.2ms |     1 | 0.2ms | 0.2ms | `resolveFrom` | `/src/zod/__lib_node_modules_lookup_lib.es2020.intl.d.ts__.ts`   |
| 32.7% | 0.1ms |     1 | 0.1ms | 0.1ms | `resolveFrom` | `/src/zod/__lib_node_modules_lookup_lib.es2022.string.d.ts__.ts` |

#### Threads

Threads with the largest contribution to each span's total time.

##### `checkSourceFile`

|      % |  Time | Count |   Mean |     Max | Thread |
| -----: | ----: | ----: | -----: | ------: | ------ |
| 100.0% | 2.90s |    83 | 35.0ms | 601.2ms | `Main` |

##### `checkDeferredNode`

|      % |  Time | Count |  Mean |     Max | Thread |
| -----: | ----: | ----: | ----: | ------: | ------ |
| 100.0% | 1.04s |   116 | 9.0ms | 122.3ms | `Main` |

##### `checkExpression`

|      % |  Time | Count |  Mean |     Max | Thread |
| -----: | ----: | ----: | ----: | ------: | ------ |
| 100.0% | 2.90s |   558 | 5.2ms | 118.6ms | `Main` |

##### `checkVariableDeclaration`

|      % |    Time | Count |  Mean |     Max | Thread |
| -----: | ------: | ----: | ----: | ------: | ------ |
| 100.0% | 799.1ms |    81 | 9.9ms | 118.8ms | `Main` |

##### `createProgram`

|      % |    Time | Count |    Mean |     Max | Thread |
| -----: | ------: | ----: | ------: | ------: | ------ |
| 100.0% | 590.8ms |     1 | 590.8ms | 590.8ms | `Main` |

##### `findSourceFile`

|      % |  Time | Count |   Mean |     Max | Thread |
| -----: | ----: | ----: | -----: | ------: | ------ |
| 100.0% | 1.68s |    60 | 28.1ms | 190.8ms | `Main` |

##### `structuredTypeRelatedTo`

|      % |  Time | Count |   Mean |     Max | Thread |
| -----: | ----: | ----: | -----: | ------: | ------ |
| 100.0% | 4.71s |   279 | 16.9ms | 173.2ms | `Main` |

##### `createSourceFile`

|      % |    Time | Count |  Mean |    Max | Thread |
| -----: | ------: | ----: | ----: | -----: | ------ |
| 100.0% | 432.9ms |   276 | 1.6ms | 79.8ms | `Main` |

##### `processRootFiles`

|      % |    Time | Count |    Mean |     Max | Thread |
| -----: | ------: | ----: | ------: | ------: | ------ |
| 100.0% | 388.3ms |     1 | 388.3ms | 388.3ms | `Main` |

##### `bindSourceFile`

|      % |    Time | Count |  Mean |    Max | Thread |
| -----: | ------: | ----: | ----: | -----: | ------ |
| 100.0% | 321.2ms |   275 | 1.2ms | 59.5ms | `Main` |

##### `getVariancesWorker`

|      % |  Time | Count |   Mean |     Max | Thread |
| -----: | ----: | ----: | -----: | ------: | ------ |
| 100.0% | 1.42s |    28 | 50.9ms | 172.9ms | `Main` |

##### `processTypeReferenceDirective`

|      % |    Time | Count |   Mean |     Max | Thread |
| -----: | ------: | ----: | -----: | ------: | ------ |
| 100.0% | 204.8ms |     5 | 41.0ms | 137.7ms | `Main` |

##### `processTypeReferences`

|      % |   Time | Count |   Mean |    Max | Thread |
| -----: | -----: | ----: | -----: | -----: | ------ |
| 100.0% | 79.0ms |     1 | 79.0ms | 79.0ms | `Main` |

##### `resolveModuleNamesWorker`

|      % |  Time | Count |  Mean |   Max | Thread |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 3.5ms |     2 | 1.8ms | 3.0ms | `Main` |

##### `resolveTypeReferenceDirectiveNamesWorker`

|      % |  Time | Count |  Mean |   Max | Thread |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 2.3ms |     1 | 2.3ms | 2.3ms | `Main` |

##### `emit`

|      % |  Time | Count |  Mean |   Max | Thread |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 1.3ms |     1 | 1.3ms | 1.3ms | `Main` |

##### `emitBuildInfo`

|      % |  Time | Count |  Mean |   Max | Thread |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 0.6ms |     1 | 0.6ms | 0.6ms | `Main` |

##### `resolveLibrary`

|      % |  Time | Count |  Mean |   Max | Thread |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 0.2ms |     2 | 0.1ms | 0.2ms | `Main` |

#### Parents

Parent spans with the largest contribution to each span's total time.

##### `checkDeferredNode`

|      % |  Time | Count |  Mean |     Max | Parent            |
| -----: | ----: | ----: | ----: | ------: | ----------------- |
| 100.0% | 1.04s |   116 | 9.0ms | 122.3ms | `checkSourceFile` |

##### `checkExpression`

|     % |    Time | Count |  Mean |     Max | Parent                     |
| ----: | ------: | ----: | ----: | ------: | -------------------------- |
| 64.1% |   1.86s |   379 | 4.9ms | 101.2ms | `checkExpression`          |
| 25.9% | 752.1ms |    78 | 9.6ms | 118.6ms | `checkVariableDeclaration` |
|  7.3% | 211.8ms |    66 | 3.2ms |  24.6ms | `checkDeferredNode`        |
|  2.7% |  79.5ms |    35 | 2.3ms |  13.8ms | `checkSourceFile`          |

##### `checkVariableDeclaration`

|     % |    Time | Count |   Mean |     Max | Parent              |
| ----: | ------: | ----: | -----: | ------: | ------------------- |
| 64.9% | 518.4ms |    55 |  9.4ms | 118.8ms | `checkDeferredNode` |
| 35.1% | 280.6ms |    26 | 10.8ms |  84.0ms | `checkSourceFile`   |

##### `findSourceFile`

|     % |    Time | Count |   Mean |     Max | Parent                          |
| ----: | ------: | ----: | -----: | ------: | ------------------------------- |
| 61.9% |   1.04s |    44 | 23.7ms | 187.3ms | `findSourceFile`                |
| 19.6% | 330.8ms |     9 | 36.8ms | 190.8ms | `processRootFiles`              |
| 12.1% | 204.1ms |     5 | 40.8ms | 137.6ms | `processTypeReferenceDirective` |
|  6.3% | 106.3ms |     2 | 53.1ms |  86.9ms | `createProgram`                 |

##### `structuredTypeRelatedTo`

|     % |    Time | Count |   Mean |     Max | Parent                    |
| ----: | ------: | ----: | -----: | ------: | ------------------------- |
| 61.2% |   2.88s |   183 | 15.8ms | 163.2ms | `structuredTypeRelatedTo` |
| 28.9% |   1.36s |    29 | 46.9ms | 169.9ms | `getVariancesWorker`      |
|  7.3% | 344.8ms |    17 | 20.3ms | 173.2ms | `checkSourceFile`         |
|  2.2% | 103.3ms |    40 |  2.6ms |  16.1ms | `checkExpression`         |
|  0.2% |  11.7ms |     7 |  1.7ms |   2.4ms | `checkDeferredNode`       |

##### `createSourceFile`

|     % |    Time | Count |  Mean |    Max | Parent                  |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 89.7% | 388.4ms |   213 | 1.8ms | 79.8ms | `findSourceFile`        |
|  8.9% |  38.6ms |    58 | 0.7ms |  3.4ms | `processRootFiles`      |
|  1.4% |   5.9ms |     5 | 1.2ms |  2.6ms | `processTypeReferences` |

##### `processRootFiles`

|      % |    Time | Count |    Mean |     Max | Parent          |
| -----: | ------: | ----: | ------: | ------: | --------------- |
| 100.0% | 388.3ms |     1 | 388.3ms | 388.3ms | `createProgram` |

##### `getVariancesWorker`

|     % |   Time | Count |   Mean |     Max | Parent                    |
| ----: | -----: | ----: | -----: | ------: | ------------------------- |
| 97.9% |  1.39s |    24 | 58.1ms | 172.9ms | `structuredTypeRelatedTo` |
|  2.1% | 30.4ms |     4 |  7.6ms |  13.0ms | `checkExpression`         |

##### `processTypeReferenceDirective`

|     % |    Time | Count |    Mean |     Max | Parent                  |
| ----: | ------: | ----: | ------: | ------: | ----------------------- |
| 67.2% | 137.7ms |     1 | 137.7ms | 137.7ms | `findSourceFile`        |
| 32.8% |  67.1ms |     4 |  16.8ms |  44.5ms | `processTypeReferences` |

##### `processTypeReferences`

|      % |   Time | Count |   Mean |    Max | Parent          |
| -----: | -----: | ----: | -----: | -----: | --------------- |
| 100.0% | 79.0ms |     1 | 79.0ms | 79.0ms | `createProgram` |

##### `resolveModuleNamesWorker`

|      % |  Time | Count |  Mean |   Max | Parent           |
| -----: | ----: | ----: | ----: | ----: | ---------------- |
| 100.0% | 3.5ms |     2 | 1.8ms | 3.0ms | `findSourceFile` |

##### `resolveTypeReferenceDirectiveNamesWorker`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 2.3ms |     1 | 2.3ms | 2.3ms | `processTypeReferences` |

##### `emitBuildInfo`

|      % |  Time | Count |  Mean |   Max | Parent |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 0.6ms |     1 | 0.6ms | 0.6ms | `emit` |

##### `resolveLibrary`

|      % |  Time | Count |  Mean |   Max | Parent           |
| -----: | ----: | ----: | ----: | ----: | ---------------- |
| 100.0% | 0.2ms |     2 | 0.1ms | 0.2ms | `findSourceFile` |

#### Children

Child spans with the largest contribution to each span's total time.

##### `checkSourceFile`

|     % |    Time | Count |   Mean |     Max | Child                      |
| ----: | ------: | ----: | -----: | ------: | -------------------------- |
| 36.2% |   1.04s |   116 |  9.0ms | 122.3ms | `checkDeferredNode`        |
| 11.9% | 344.8ms |    17 | 20.3ms | 173.2ms | `structuredTypeRelatedTo`  |
|  9.7% | 280.6ms |    26 | 10.8ms |  84.0ms | `checkVariableDeclaration` |
|  2.7% |  79.5ms |    35 |  2.3ms |  13.8ms | `checkExpression`          |

##### `checkDeferredNode`

|     % |    Time | Count |  Mean |     Max | Child                      |
| ----: | ------: | ----: | ----: | ------: | -------------------------- |
| 49.4% | 518.4ms |    55 | 9.4ms | 118.8ms | `checkVariableDeclaration` |
| 20.2% | 211.8ms |    66 | 3.2ms |  24.6ms | `checkExpression`          |
|  1.1% |  11.7ms |     7 | 1.7ms |   2.4ms | `structuredTypeRelatedTo`  |

##### `checkExpression`

|     % |    Time | Count |  Mean |     Max | Child                     |
| ----: | ------: | ----: | ----: | ------: | ------------------------- |
| 64.1% |   1.86s |   379 | 4.9ms | 101.2ms | `checkExpression`         |
|  3.6% | 103.3ms |    40 | 2.6ms |  16.1ms | `structuredTypeRelatedTo` |
|  1.0% |  30.4ms |     4 | 7.6ms |  13.0ms | `getVariancesWorker`      |

##### `checkVariableDeclaration`

|     % |    Time | Count |  Mean |     Max | Child                     |
| ----: | ------: | ----: | ----: | ------: | ------------------------- |
| 94.1% | 752.1ms |    78 | 9.6ms | 118.6ms | `checkExpression`         |
|  0.8% |   6.0ms |     3 | 2.0ms |   2.7ms | `structuredTypeRelatedTo` |

##### `createProgram`

|     % |    Time | Count |    Mean |     Max | Child                   |
| ----: | ------: | ----: | ------: | ------: | ----------------------- |
| 65.7% | 388.3ms |     1 | 388.3ms | 388.3ms | `processRootFiles`      |
| 18.0% | 106.3ms |     2 |  53.1ms |  86.9ms | `findSourceFile`        |
| 13.4% |  79.0ms |     1 |  79.0ms |  79.0ms | `processTypeReferences` |

##### `findSourceFile`

|     % |    Time | Count |    Mean |     Max | Child                           |
| ----: | ------: | ----: | ------: | ------: | ------------------------------- |
| 61.9% |   1.04s |    44 |  23.7ms | 187.3ms | `findSourceFile`                |
| 23.1% | 388.4ms |   213 |   1.8ms |  79.8ms | `createSourceFile`              |
|  8.2% | 137.7ms |     1 | 137.7ms | 137.7ms | `processTypeReferenceDirective` |
|  0.2% |   3.5ms |     2 |   1.8ms |   3.0ms | `resolveModuleNamesWorker`      |
| <0.1% |   0.2ms |     2 |   0.1ms |   0.2ms | `resolveLibrary`                |

##### `structuredTypeRelatedTo`

|     % |  Time | Count |   Mean |     Max | Child                     |
| ----: | ----: | ----: | -----: | ------: | ------------------------- |
| 61.2% | 2.88s |   183 | 15.8ms | 163.2ms | `structuredTypeRelatedTo` |
| 29.6% | 1.39s |    24 | 58.1ms | 172.9ms | `getVariancesWorker`      |

##### `processRootFiles`

|     % |    Time | Count |   Mean |     Max | Child              |
| ----: | ------: | ----: | -----: | ------: | ------------------ |
| 85.2% | 330.8ms |     9 | 36.8ms | 190.8ms | `findSourceFile`   |
|  9.9% |  38.6ms |    58 |  0.7ms |   3.4ms | `createSourceFile` |

##### `getVariancesWorker`

|     % |  Time | Count |   Mean |     Max | Child                     |
| ----: | ----: | ----: | -----: | ------: | ------------------------- |
| 95.5% | 1.36s |    29 | 46.9ms | 169.9ms | `structuredTypeRelatedTo` |

##### `processTypeReferenceDirective`

|     % |    Time | Count |   Mean |     Max | Child            |
| ----: | ------: | ----: | -----: | ------: | ---------------- |
| 99.6% | 204.1ms |     5 | 40.8ms | 137.6ms | `findSourceFile` |

##### `processTypeReferences`

|     % |   Time | Count |   Mean |    Max | Child                                      |
| ----: | -----: | ----: | -----: | -----: | ------------------------------------------ |
| 85.0% | 67.1ms |     4 | 16.8ms | 44.5ms | `processTypeReferenceDirective`            |
|  7.5% |  5.9ms |     5 |  1.2ms |  2.6ms | `createSourceFile`                         |
|  2.9% |  2.3ms |     1 |  2.3ms |  2.3ms | `resolveTypeReferenceDirectiveNamesWorker` |

##### `emit`

|     % |  Time | Count |  Mean |   Max | Child           |
| ----: | ----: | ----: | ----: | ----: | --------------- |
| 49.1% | 0.6ms |     1 | 0.6ms | 0.6ms | `emitBuildInfo` |

#### Longest instances

Instances of each span with the most time.

##### `checkSourceFile`

|     % |    Time | Start | Thread | Attributes                                                 |
| ----: | ------: | ----: | ------ | ---------------------------------------------------------- |
| 20.7% | 601.2ms | 1.38s | `Main` | `path=/src/zod/src/types.ts`                               |
|  9.7% | 282.9ms | 2.38s | `Main` | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |
|  9.3% | 269.8ms | 1.11s | `Main` | `path=/src/zod/src/helpers/partialUtil.ts`                 |
|  4.9% | 143.4ms | 3.10s | `Main` | `path=/src/zod/src/__tests__/object.test.ts`               |
|  4.3% | 125.7ms | 3.26s | `Main` | `path=/src/zod/src/__tests__/partials.test.ts`             |

##### `checkDeferredNode`

|     % |    Time | Start | Thread | Attributes                                                  |
| ----: | ------: | ----: | ------ | ----------------------------------------------------------- |
| 11.7% | 122.3ms | 2.40s | `Main` | `path=/src/zod/src/__tests__/discriminated-unions.test.ts`  |
|  3.9% |  40.6ms | 3.31s | `Main` | `path=/src/zod/src/__tests__/partials.test.ts`              |
|  2.7% |  28.6ms | 2.77s | `Main` | `path=/src/zod/src/__tests__/firstpartyschematypes.test.ts` |
|  2.6% |  27.7ms | 3.52s | `Main` | `path=/src/zod/src/__tests__/readonly.test.ts`              |
|  2.2% |  23.1ms | 1.08s | `Main` | `path=/src/zod/src/helpers/parseUtil.ts`                    |

##### `checkExpression`

|    % |    Time | Start | Thread | Attributes                                                 |
| ---: | ------: | ----: | ------ | ---------------------------------------------------------- |
| 4.1% | 118.6ms | 2.40s | `Main` | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |
| 3.5% | 101.2ms | 2.40s | `Main` | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |
| 2.9% |  83.8ms | 2.26s | `Main` | `path=/src/zod/src/__tests__/crazySchema.ts`               |
| 2.4% |  70.0ms | 2.26s | `Main` | `path=/src/zod/src/__tests__/crazySchema.ts`               |
| 0.9% |  25.8ms |    2s | `Main` | `path=/src/zod/src/__tests__/all-errors.test.ts`           |

##### `checkVariableDeclaration`

|     % |    Time | Start | Thread | Attributes                                                 |
| ----: | ------: | ----: | ------ | ---------------------------------------------------------- |
| 14.9% | 118.8ms | 2.40s | `Main` | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |
| 10.5% |  84.0ms | 2.26s | `Main` | `path=/src/zod/src/__tests__/crazySchema.ts`               |
|  3.3% |  26.1ms |    2s | `Main` | `path=/src/zod/src/__tests__/all-errors.test.ts`           |
|  2.7% |  21.6ms | 3.22s | `Main` | `path=/src/zod/src/__tests__/object.test.ts`               |
|  2.6% |  21.0ms | 2.22s | `Main` | `path=/src/zod/src/__tests__/catch.test.ts`                |

##### `createProgram`

|      % |    Time | Start | Thread | Attributes                              |
| -----: | ------: | ----: | ------ | --------------------------------------- |
| 100.0% | 590.8ms |   0ms | `Main` | `configFilePath=/src/zod/tsconfig.json` |

##### `findSourceFile`

|     % |    Time |   Start | Thread | Attributes                                                                                      |
| ----: | ------: | ------: | ------ | ----------------------------------------------------------------------------------------------- |
| 11.3% | 190.8ms | 127.5ms | `Main` | `fileName=/src/zod/src/__tests__/all-errors.test.ts, fileIncludeKind=RootFile`                  |
| 11.1% | 187.3ms | 130.8ms | `Main` | `fileName=/src/zod/node_modules/@jest/globals/build/index.d.ts, fileIncludeKind=Import`         |
| 10.4% | 174.4ms | 134.0ms | `Main` | `fileName=/src/zod/node_modules/@jest/environment/build/index.d.ts, fileIncludeKind=Import`     |
|  8.2% | 137.6ms | 138.1ms | `Main` | `fileName=/src/zod/node_modules/@types/node/index.d.ts, fileIncludeKind=TypeReferenceDirective` |
|  7.5% | 125.5ms |   0.8ms | `Main` | `fileName=/src/zod/src/ZodError.ts, fileIncludeKind=RootFile`                                   |

##### `structuredTypeRelatedTo`

|    % |    Time | Start | Thread |
| ---: | ------: | ----: | ------ |
| 3.7% | 173.2ms | 1.11s | `Main` |
| 3.6% | 169.9ms | 1.11s | `Main` |
| 3.5% | 163.2ms | 1.12s | `Main` |
| 3.4% | 161.8ms | 1.12s | `Main` |
| 3.3% | 156.6ms | 1.12s | `Main` |

##### `createSourceFile`

|     % |   Time |   Start | Thread | Attributes                                               |
| ----: | -----: | ------: | ------ | -------------------------------------------------------- |
| 18.4% | 79.8ms |  42.8ms | `Main` | `path=/src/zod/src/types.ts`                             |
| 17.6% | 76.2ms | 495.1ms | `Main` | `path=/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
|  6.1% | 26.5ms | 401.6ms | `Main` | `path=/src/zod/node_modules/@babel/types/lib/index.d.ts` |
|  3.5% | 15.2ms |   1.7ms | `Main` | `path=/src/zod/src/ZodError.ts`                          |
|  2.5% | 11.0ms | 241.4ms | `Main` | `path=/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |

##### `processRootFiles`

|      % |    Time | Start | Thread |
| -----: | ------: | ----: | ------ |
| 100.0% | 388.3ms | 0.7ms | `Main` |

##### `bindSourceFile`

|     % |   Time |   Start | Thread | Attributes                                               |
| ----: | -----: | ------: | ------ | -------------------------------------------------------- |
| 18.5% | 59.5ms | 624.6ms | `Main` | `path=/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
| 10.6% | 34.2ms | 719.9ms | `Main` | `path=/src/zod/src/types.ts`                             |
|  7.3% | 23.4ms | 598.0ms | `Main` | `path=/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |
|  5.6% | 17.9ms | 911.2ms | `Main` | `path=/src/zod/node_modules/@babel/types/lib/index.d.ts` |
|  2.3% |  7.4ms | 799.7ms | `Main` | `path=/src/zod/node_modules/@types/node/inspector.d.ts`  |

##### `getVariancesWorker`

|     % |    Time | Start | Thread |
| ----: | ------: | ----: | ------ |
| 12.1% | 172.9ms | 1.11s | `Main` |
| 11.3% | 161.6ms | 1.12s | `Main` |
| 10.5% | 149.3ms | 1.12s | `Main` |
|  8.6% | 122.6ms | 1.15s | `Main` |
|  8.1% | 114.9ms | 1.15s | `Main` |

##### `processTypeReferenceDirective`

|     % |    Time |   Start | Thread | Attributes                                                                         |
| ----: | ------: | ------: | ------ | ---------------------------------------------------------------------------------- |
| 67.2% | 137.7ms | 138.0ms | `Main` | `directive=node, refPath=/src/zod/node_modules/@jest/environment/build/index.d.ts` |
| 21.7% |  44.5ms | 395.7ms | `Main` | `directive=babel__core`                                                            |
|  7.8% |  16.1ms | 456.0ms | `Main` | `directive=semver`                                                                 |
|  2.5% |   5.0ms | 450.2ms | `Main` | `directive=json-schema`                                                            |
|  0.7% |   1.5ms | 444.3ms | `Main` | `directive=estree`                                                                 |

##### `processTypeReferences`

|      % |   Time |   Start | Thread |
| -----: | -----: | ------: | ------ |
| 100.0% | 79.0ms | 393.3ms | `Main` |

##### `resolveModuleNamesWorker`

|     % |  Time |   Start | Thread | Attributes                                                                    |
| ----: | ----: | ------: | ------ | ----------------------------------------------------------------------------- |
| 84.3% | 3.0ms | 294.2ms | `Main` | `containingFileName=/src/zod/node_modules/@types/istanbul-reports/index.d.ts` |
| 15.7% | 0.6ms | 304.2ms | `Main` | `containingFileName=/src/zod/node_modules/@jest/fake-timers/build/index.d.ts` |

##### `resolveTypeReferenceDirectiveNamesWorker`

|      % |  Time |   Start | Thread | Attributes                                               |
| -----: | ----: | ------: | ------ | -------------------------------------------------------- |
| 100.0% | 2.3ms | 393.3ms | `Main` | `containingFileName=/src/zod/__inferred type names__.ts` |

##### `emit`

|      % |  Time | Start | Thread |
| -----: | ----: | ----: | ------ |
| 100.0% | 1.3ms | 3.88s | `Main` |

##### `emitBuildInfo`

|      % |  Time | Start | Thread |
| -----: | ----: | ----: | ------ |
| 100.0% | 0.6ms | 3.88s | `Main` |

##### `resolveLibrary`

|     % |  Time |   Start | Thread | Attributes                                                                   |
| ----: | ----: | ------: | ------ | ---------------------------------------------------------------------------- |
| 67.3% | 0.2ms | 274.3ms | `Main` | `resolveFrom=/src/zod/__lib_node_modules_lookup_lib.es2020.intl.d.ts__.ts`   |
| 32.7% | 0.1ms | 484.3ms | `Main` | `resolveFrom=/src/zod/__lib_node_modules_lookup_lib.es2022.string.d.ts__.ts` |

### Count

Thread spans with the most occurrences recorded.

|     % | Count | Span                                       |
| ----: | ----: | ------------------------------------------ |
| 31.5% |   558 | `checkExpression`                          |
| 15.8% |   279 | `structuredTypeRelatedTo`                  |
| 15.6% |   276 | `createSourceFile`                         |
| 15.5% |   275 | `bindSourceFile`                           |
|  6.5% |   116 | `checkDeferredNode`                        |
|  4.7% |    83 | `checkSourceFile`                          |
|  4.6% |    81 | `checkVariableDeclaration`                 |
|  3.4% |    60 | `findSourceFile`                           |
|  1.6% |    28 | `getVariancesWorker`                       |
|  0.3% |     5 | `processTypeReferenceDirective`            |
|  0.1% |     2 | `resolveLibrary`                           |
|  0.1% |     2 | `resolveModuleNamesWorker`                 |
|  0.1% |     1 | `createProgram`                            |
|  0.1% |     1 | `processRootFiles`                         |
|  0.1% |     1 | `processTypeReferences`                    |
|  0.1% |     1 | `resolveTypeReferenceDirectiveNamesWorker` |
|  0.1% |     1 | `emit`                                     |
|  0.1% |     1 | `emitBuildInfo`                            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % | Count | Span                                       |
| ----: | ----: | ------------------------------------------ |
| 31.5% |   558 | `checkExpression`                          |
| 15.8% |   279 | `structuredTypeRelatedTo`                  |
| 15.5% |   275 | `bindSourceFile`                           |
|  6.5% |   116 | `checkDeferredNode`                        |
|  4.7% |    83 | `checkSourceFile`                          |
|  4.6% |    81 | `checkVariableDeclaration`                 |
|  3.4% |    60 | `findSourceFile`                           |
|  1.6% |    28 | `getVariancesWorker`                       |
|  0.3% |     5 | `processTypeReferenceDirective`            |
|  0.1% |     2 | `resolveLibrary`                           |
|  0.1% |     2 | `resolveModuleNamesWorker`                 |
|  0.1% |     1 | `createProgram`                            |
|  0.1% |     1 | `processRootFiles`                         |
|  0.1% |     1 | `processTypeReferences`                    |
|  0.1% |     1 | `resolveTypeReferenceDirectiveNamesWorker` |
|  0.1% |     1 | `emit`                                     |
|  0.1% |     1 | `emitBuildInfo`                            |

##### Parsing

|     % | Count | Span               |
| ----: | ----: | ------------------ |
| 15.6% |   276 | `createSourceFile` |

## Most frequent instants

### Count

Instants with the most occurrences recorded.

#### Categories

Categories accounting for at least 1.0% of instants.

##### Compilation

|      % | Count | Instant                             |
| -----: | ----: | ----------------------------------- |
| 100.0% |     2 | `recursiveTypeRelatedTo_DepthLimit` |

#### Threads

Threads with the largest contribution to each instant's count.

##### `recursiveTypeRelatedTo_DepthLimit`

|      % | Count | Thread |
| -----: | ----: | ------ |
| 100.0% |     2 | `Main` |
