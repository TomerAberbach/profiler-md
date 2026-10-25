# Trace

Recorded 1,785 events over 3.90s.

| Category    |     % |    Time | Count |
| ----------- | ----: | ------: | ----: |
| Compilation | 87.4% |   3.41s | 1,509 |
| Parsing     | 11.0% | 431.0ms |   276 |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

Thread spans with the most time, excluding child spans.

|     % |    Time | Count |   Mean |     Max | Span                            |
| ----: | ------: | ----: | -----: | ------: | ------------------------------- |
| 29.2% |   1.13s |    83 | 13.7ms | 420.4ms | `checkSourceFile`               |
| 24.4% | 951.2ms |   565 |  1.7ms |  24.7ms | `checkExpression`               |
| 11.0% | 431.0ms |   276 |  1.6ms |  75.8ms | `createSourceFile`              |
| 10.9% | 424.9ms |   278 |  1.5ms |  33.5ms | `structuredTypeRelatedTo`       |
|  8.2% | 319.1ms |   275 |  1.2ms |  61.0ms | `bindSourceFile`                |
|  8.0% | 314.0ms |   117 |  2.7ms |  20.8ms | `checkDeferredNode`             |
|  2.9% | 114.5ms |    63 |  1.8ms |  17.5ms | `findSourceFile`                |
|  1.5% |  57.8ms |    24 |  2.4ms |   9.5ms | `getVariancesWorker`            |
|  1.3% |  52.1ms |    88 |  0.6ms |   5.2ms | `checkVariableDeclaration`      |
|  0.5% |  17.6ms |     1 | 17.6ms |  17.6ms | `processRootFiles`              |
|  0.2% |   9.2ms |     1 |  9.2ms |   9.2ms | `createProgram`                 |
|  0.2% |   6.2ms |     1 |  6.2ms |   6.2ms | `processTypeReferences`         |
|  0.1% |   4.2ms |     4 |  1.1ms |   2.0ms | `resolveModuleNamesWorker`      |
| <0.1% |   0.9ms |     5 |  0.2ms |   0.3ms | `processTypeReferenceDirective` |
| <0.1% |   0.6ms |     1 |  0.6ms |   0.6ms | `emit`                          |
| <0.1% |   0.4ms |     1 |  0.4ms |   0.4ms | `emitBuildInfo`                 |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % |    Time | Count |   Mean |     Max | Span                            |
| ----: | ------: | ----: | -----: | ------: | ------------------------------- |
| 29.2% |   1.13s |    83 | 13.7ms | 420.4ms | `checkSourceFile`               |
| 24.4% | 951.2ms |   565 |  1.7ms |  24.7ms | `checkExpression`               |
| 10.9% | 424.9ms |   278 |  1.5ms |  33.5ms | `structuredTypeRelatedTo`       |
|  8.2% | 319.1ms |   275 |  1.2ms |  61.0ms | `bindSourceFile`                |
|  8.0% | 314.0ms |   117 |  2.7ms |  20.8ms | `checkDeferredNode`             |
|  2.9% | 114.5ms |    63 |  1.8ms |  17.5ms | `findSourceFile`                |
|  1.5% |  57.8ms |    24 |  2.4ms |   9.5ms | `getVariancesWorker`            |
|  1.3% |  52.1ms |    88 |  0.6ms |   5.2ms | `checkVariableDeclaration`      |
|  0.5% |  17.6ms |     1 | 17.6ms |  17.6ms | `processRootFiles`              |
|  0.2% |   9.2ms |     1 |  9.2ms |   9.2ms | `createProgram`                 |
|  0.2% |   6.2ms |     1 |  6.2ms |   6.2ms | `processTypeReferences`         |
|  0.1% |   4.2ms |     4 |  1.1ms |   2.0ms | `resolveModuleNamesWorker`      |
| <0.1% |   0.9ms |     5 |  0.2ms |   0.3ms | `processTypeReferenceDirective` |
| <0.1% |   0.6ms |     1 |  0.6ms |   0.6ms | `emit`                          |
| <0.1% |   0.4ms |     1 |  0.4ms |   0.4ms | `emitBuildInfo`                 |

##### Parsing

|     % |    Time | Count |  Mean |    Max | Span               |
| ----: | ------: | ----: | ----: | -----: | ------------------ |
| 11.0% | 431.0ms |   276 | 1.6ms | 75.8ms | `createSourceFile` |

#### Parents

Parent spans with the largest contribution to each span's self time.

##### `checkExpression`

|     % |    Time | Count |  Mean |    Max | Parent                     |
| ----: | ------: | ----: | ----: | -----: | -------------------------- |
| 70.8% | 673.0ms |   383 | 1.8ms | 17.6ms | `checkExpression`          |
| 20.2% | 191.7ms |    86 | 2.2ms | 14.5ms | `checkVariableDeclaration` |
|  5.7% |  54.7ms |    53 | 1.0ms | 24.7ms | `checkDeferredNode`        |
|  3.3% |  31.7ms |    43 | 0.7ms |  8.5ms | `checkSourceFile`          |

##### `createSourceFile`

|     % |    Time | Count |  Mean |    Max | Parent                  |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 88.1% | 379.6ms |   215 | 1.8ms | 75.8ms | `findSourceFile`        |
| 10.1% |  43.5ms |    56 | 0.8ms |  3.7ms | `processRootFiles`      |
|  1.8% |   7.9ms |     5 | 1.6ms |  3.8ms | `processTypeReferences` |

##### `structuredTypeRelatedTo`

|     % |    Time | Count |  Mean |    Max | Parent                    |
| ----: | ------: | ----: | ----: | -----: | ------------------------- |
| 46.3% | 196.8ms |   179 | 1.1ms | 33.5ms | `structuredTypeRelatedTo` |
| 35.2% | 149.6ms |    29 | 5.2ms | 26.7ms | `getVariancesWorker`      |
| 11.2% |  47.8ms |    44 | 1.1ms | 15.3ms | `checkExpression`         |
|  4.0% |  16.8ms |    17 | 1.0ms |  4.5ms | `checkSourceFile`         |
|  3.3% |  14.0ms |     9 | 1.6ms |  3.0ms | `checkDeferredNode`       |

##### `checkDeferredNode`

|      % |    Time | Count |  Mean |    Max | Parent            |
| -----: | ------: | ----: | ----: | -----: | ----------------- |
| 100.0% | 314.0ms |   117 | 2.7ms | 20.8ms | `checkSourceFile` |

##### `findSourceFile`

|     % |   Time | Count |  Mean |    Max | Parent                          |
| ----: | -----: | ----: | ----: | -----: | ------------------------------- |
| 58.2% | 66.6ms |    46 | 1.4ms |  6.4ms | `findSourceFile`                |
| 28.4% | 32.5ms |     5 | 6.5ms | 17.5ms | `processTypeReferenceDirective` |
|  8.6% |  9.9ms |    10 | 1.0ms |  3.7ms | `processRootFiles`              |
|  4.8% |  5.5ms |     2 | 2.8ms |  3.0ms | `createProgram`                 |

##### `getVariancesWorker`

|     % |   Time | Count |  Mean |   Max | Parent                    |
| ----: | -----: | ----: | ----: | ----: | ------------------------- |
| 86.7% | 50.1ms |    21 | 2.4ms | 9.5ms | `structuredTypeRelatedTo` |
| 13.3% |  7.7ms |     3 | 2.6ms | 3.1ms | `checkExpression`         |

##### `checkVariableDeclaration`

|     % |   Time | Count |  Mean |   Max | Parent              |
| ----: | -----: | ----: | ----: | ----: | ------------------- |
| 83.7% | 43.6ms |    61 | 0.7ms | 5.2ms | `checkDeferredNode` |
| 16.3% |  8.5ms |    27 | 0.3ms | 1.2ms | `checkSourceFile`   |

##### `processRootFiles`

|      % |   Time | Count |   Mean |    Max | Parent          |
| -----: | -----: | ----: | -----: | -----: | --------------- |
| 100.0% | 17.6ms |     1 | 17.6ms | 17.6ms | `createProgram` |

##### `processTypeReferences`

|      % |  Time | Count |  Mean |   Max | Parent          |
| -----: | ----: | ----: | ----: | ----: | --------------- |
| 100.0% | 6.2ms |     1 | 6.2ms | 6.2ms | `createProgram` |

##### `resolveModuleNamesWorker`

|      % |  Time | Count |  Mean |   Max | Parent           |
| -----: | ----: | ----: | ----: | ----: | ---------------- |
| 100.0% | 4.2ms |     4 | 1.1ms | 2.0ms | `findSourceFile` |

##### `processTypeReferenceDirective`

|     % |  Time | Count |  Mean |   Max | Parent                  |
| ----: | ----: | ----: | ----: | ----: | ----------------------- |
| 75.3% | 0.7ms |     4 | 0.2ms | 0.3ms | `processTypeReferences` |
| 24.7% | 0.2ms |     1 | 0.2ms | 0.2ms | `findSourceFile`        |

##### `emitBuildInfo`

|      % |  Time | Count |  Mean |   Max | Parent |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 0.4ms |     1 | 0.4ms | 0.4ms | `emit` |

### Total time

Thread spans with the most time, including child spans.

|     % |    Time | Count |    Mean |     Max | Span                            |
| ----: | ------: | ----: | ------: | ------: | ------------------------------- |
| 75.3% |   2.93s |    83 |  35.4ms | 643.9ms | `checkSourceFile`               |
| 27.6% |   1.07s |   565 |   5.1ms | 124.9ms | `checkExpression`               |
| 27.4% |   1.06s |   117 |   9.1ms | 128.2ms | `checkDeferredNode`             |
| 21.3% | 831.6ms |    88 |   9.5ms | 125.2ms | `checkVariableDeclaration`      |
| 15.0% | 583.7ms |     1 | 583.7ms | 583.7ms | `createProgram`                 |
| 12.8% | 498.6ms |    63 |  27.2ms | 204.2ms | `findSourceFile`                |
| 12.2% | 475.0ms |   278 |  14.5ms | 152.4ms | `structuredTypeRelatedTo`       |
| 11.0% | 431.0ms |   276 |   1.6ms |  75.8ms | `createSourceFile`              |
| 10.3% | 402.9ms |     1 | 402.9ms | 402.9ms | `processRootFiles`              |
|  8.2% | 319.1ms |   275 |   1.2ms |  61.0ms | `bindSourceFile`                |
|  6.2% | 242.4ms |    24 |  48.4ms | 152.0ms | `getVariancesWorker`            |
|  5.6% | 217.2ms |     5 |  43.4ms | 146.6ms | `processTypeReferenceDirective` |
|  2.2% |  84.8ms |     1 |  84.8ms |  84.8ms | `processTypeReferences`         |
|  0.1% |   4.2ms |     4 |   1.1ms |   2.0ms | `resolveModuleNamesWorker`      |
| <0.1% |   1.1ms |     1 |   1.1ms |   1.1ms | `emit`                          |
| <0.1% |   0.4ms |     1 |   0.4ms |   0.4ms | `emitBuildInfo`                 |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % |    Time | Count |    Mean |     Max | Span                            |
| ----: | ------: | ----: | ------: | ------: | ------------------------------- |
| 75.3% |   2.93s |    83 |  35.4ms | 643.9ms | `checkSourceFile`               |
| 27.6% |   1.07s |   565 |   5.1ms | 124.9ms | `checkExpression`               |
| 27.4% |   1.06s |   117 |   9.1ms | 128.2ms | `checkDeferredNode`             |
| 21.3% | 831.6ms |    88 |   9.5ms | 125.2ms | `checkVariableDeclaration`      |
| 15.0% | 583.7ms |     1 | 583.7ms | 583.7ms | `createProgram`                 |
| 12.8% | 498.6ms |    63 |  27.2ms | 204.2ms | `findSourceFile`                |
| 12.2% | 475.0ms |   278 |  14.5ms | 152.4ms | `structuredTypeRelatedTo`       |
| 10.3% | 402.9ms |     1 | 402.9ms | 402.9ms | `processRootFiles`              |
|  8.2% | 319.1ms |   275 |   1.2ms |  61.0ms | `bindSourceFile`                |
|  6.2% | 242.4ms |    24 |  48.4ms | 152.0ms | `getVariancesWorker`            |
|  5.6% | 217.2ms |     5 |  43.4ms | 146.6ms | `processTypeReferenceDirective` |
|  2.2% |  84.8ms |     1 |  84.8ms |  84.8ms | `processTypeReferences`         |
|  0.1% |   4.2ms |     4 |   1.1ms |   2.0ms | `resolveModuleNamesWorker`      |
| <0.1% |   1.1ms |     1 |   1.1ms |   1.1ms | `emit`                          |
| <0.1% |   0.4ms |     1 |   0.4ms |   0.4ms | `emitBuildInfo`                 |

##### Parsing

|     % |    Time | Count |  Mean |    Max | Span               |
| ----: | ------: | ----: | ----: | -----: | ------------------ |
| 11.0% | 431.0ms |   276 | 1.6ms | 75.8ms | `createSourceFile` |

#### Attribute values

Attribute values with the largest contribution to each span's total time.

##### `checkSourceFile`

|     % |    Time | Count |    Mean |     Max | Attribute | Value                                                 |
| ----: | ------: | ----: | ------: | ------: | --------- | ----------------------------------------------------- |
| 21.9% | 643.9ms |     1 | 643.9ms | 643.9ms | `path`    | `/src/zod/src/types.ts`                               |
|  9.9% | 291.1ms |     1 | 291.1ms | 291.1ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
|  8.7% | 255.1ms |     1 | 255.1ms | 255.1ms | `path`    | `/src/zod/src/helpers/partialUtil.ts`                 |
|  4.9% | 143.0ms |     1 | 143.0ms | 143.0ms | `path`    | `/src/zod/src/__tests__/object.test.ts`               |
|  4.1% | 120.1ms |     1 | 120.1ms | 120.1ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |

##### `checkExpression`

|     % |    Time | Count |   Mean |     Max | Attribute | Value                                                 |
| ----: | ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------- |
| 33.8% | 964.9ms |    85 | 11.4ms | 124.9ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
|  9.2% | 262.2ms |    16 | 16.4ms |  83.5ms | `path`    | `/src/zod/src/__tests__/crazySchema.ts`               |
|  8.5% | 241.7ms |   114 |  2.1ms |  21.8ms | `path`    | `/src/zod/src/types.ts`                               |
|  5.3% | 152.3ms |    26 |  5.9ms |  19.5ms | `path`    | `/src/zod/src/__tests__/object.test.ts`               |
|  4.5% | 127.4ms |    22 |  5.8ms |  16.8ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |

##### `checkDeferredNode`

|     % |    Time | Count |   Mean |     Max | Attribute | Value                                                 |
| ----: | ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------- |
| 26.2% | 280.4ms |    12 | 23.4ms | 128.2ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
|  7.5% |  80.2ms |     6 | 13.4ms |  43.1ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |
|  7.3% |  78.1ms |    11 |  7.1ms |  23.1ms | `path`    | `/src/zod/src/__tests__/object.test.ts`               |
|  5.3% |  56.7ms |     7 |  8.1ms |  11.1ms | `path`    | `/src/zod/src/__tests__/function.test.ts`             |
|  4.8% |  51.1ms |     4 | 12.8ms |  19.3ms | `path`    | `/src/zod/src/__tests__/intersection.test.ts`         |

##### `checkVariableDeclaration`

|     % |    Time | Count |   Mean |     Max | Attribute | Value                                                 |
| ----: | ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------- |
| 22.4% | 186.1ms |     5 | 37.2ms | 125.2ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
| 11.3% |  93.6ms |     2 | 46.8ms |  83.9ms | `path`    | `/src/zod/src/__tests__/crazySchema.ts`               |
|  8.2% |  68.5ms |     8 |  8.6ms |  22.3ms | `path`    | `/src/zod/src/__tests__/object.test.ts`               |
|  6.5% |  53.7ms |     7 |  7.7ms |  10.3ms | `path`    | `/src/zod/src/__tests__/function.test.ts`             |
|  5.0% |  41.3ms |     6 |  6.9ms |   9.8ms | `path`    | `/src/zod/src/__tests__/intersection.test.ts`         |

##### `createProgram`

|      % |    Time | Count |    Mean |     Max | Attribute        | Value                    |
| -----: | ------: | ----: | ------: | ------: | ---------------- | ------------------------ |
| 100.0% | 583.7ms |     1 | 583.7ms | 583.7ms | `configFilePath` | `/src/zod/tsconfig.json` |

##### `findSourceFile`

|     % |    Time | Count |    Mean |     Max | Attribute         | Value                                                      |
| ----: | ------: | ----: | ------: | ------: | ----------------- | ---------------------------------------------------------- |
| 49.6% | 847.7ms |    21 |  40.4ms | 200.4ms | `fileIncludeKind` | `Import`                                                   |
| 20.0% | 341.8ms |    10 |  34.2ms | 204.2ms | `fileIncludeKind` | `RootFile`                                                 |
|  9.9% | 168.8ms |    14 |  12.1ms |  32.6ms | `fileIncludeKind` | `LibReferenceDirective`                                    |
|  8.6% | 146.3ms |     1 | 146.3ms | 146.3ms | `fileIncludeKind` | `TypeReferenceDirective`                                   |
|  5.1% |  86.9ms |     2 |  43.4ms |  64.2ms | `fileIncludeKind` | `LibFile`                                                  |
| 11.9% | 204.2ms |     1 | 204.2ms | 204.2ms | `fileName`        | `/src/zod/src/__tests__/all-errors.test.ts`                |
| 11.7% | 200.4ms |     1 | 200.4ms | 200.4ms | `fileName`        | `/src/zod/node_modules/@jest/globals/build/index.d.ts`     |
| 10.9% | 187.0ms |     1 | 187.0ms | 187.0ms | `fileName`        | `/src/zod/node_modules/@jest/environment/build/index.d.ts` |
|  8.6% | 146.3ms |     1 | 146.3ms | 146.3ms | `fileName`        | `/src/zod/node_modules/@types/node/index.d.ts`             |
|  7.2% | 124.0ms |     1 | 124.0ms | 124.0ms | `fileName`        | `/src/zod/src/ZodError.ts`                                 |

##### `createSourceFile`

|     % |   Time | Count |   Mean |    Max | Attribute | Value                                               |
| ----: | -----: | ----: | -----: | -----: | --------- | --------------------------------------------------- |
| 17.6% | 75.8ms |     1 | 75.8ms | 75.8ms | `path`    | `/src/zod/src/types.ts`                             |
| 14.2% | 61.2ms |     1 | 61.2ms | 61.2ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
|  5.6% | 24.0ms |     1 | 24.0ms | 24.0ms | `path`    | `/src/zod/node_modules/@babel/types/lib/index.d.ts` |
|  3.7% | 16.1ms |     1 | 16.1ms | 16.1ms | `path`    | `/src/zod/src/ZodError.ts`                          |
|  2.8% | 11.9ms |     1 | 11.9ms | 11.9ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |

##### `bindSourceFile`

|     % |   Time | Count |   Mean |    Max | Attribute | Value                                               |
| ----: | -----: | ----: | -----: | -----: | --------- | --------------------------------------------------- |
| 19.1% | 61.0ms |     1 | 61.0ms | 61.0ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
| 11.1% | 35.5ms |     1 | 35.5ms | 35.5ms | `path`    | `/src/zod/src/types.ts`                             |
|  6.8% | 21.8ms |     1 | 21.8ms | 21.8ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |
|  5.6% | 18.0ms |     1 | 18.0ms | 18.0ms | `path`    | `/src/zod/node_modules/@babel/types/lib/index.d.ts` |
|  2.3% |  7.3ms |     1 |  7.3ms |  7.3ms | `path`    | `/src/zod/node_modules/@types/node/inspector.d.ts`  |

##### `processTypeReferenceDirective`

|     % |    Time | Count |    Mean |     Max | Attribute   | Value                                                      |
| ----: | ------: | ----: | ------: | ------: | ----------- | ---------------------------------------------------------- |
| 67.5% | 146.6ms |     1 | 146.6ms | 146.6ms | `directive` | `node`                                                     |
| 21.7% |  47.2ms |     1 |  47.2ms |  47.2ms | `directive` | `babel__core`                                              |
|  7.7% |  16.8ms |     1 |  16.8ms |  16.8ms | `directive` | `semver`                                                   |
|  2.6% |   5.7ms |     1 |   5.7ms |   5.7ms | `directive` | `json-schema`                                              |
|  0.5% |   1.0ms |     1 |   1.0ms |   1.0ms | `directive` | `chai-subset`                                              |
| 67.5% | 146.6ms |     1 | 146.6ms | 146.6ms | `refPath`   | `/src/zod/node_modules/@jest/environment/build/index.d.ts` |

##### `resolveModuleNamesWorker`

|     % |  Time | Count |  Mean |   Max | Attribute            | Value                                                  |
| ----: | ----: | ----: | ----: | ----: | -------------------- | ------------------------------------------------------ |
| 47.4% | 2.0ms |     1 | 2.0ms | 2.0ms | `containingFileName` | `/src/zod/node_modules/@jest/globals/build/index.d.ts` |
| 29.0% | 1.2ms |     1 | 1.2ms | 1.2ms | `containingFileName` | `/src/zod/node_modules/@types/node/child_process.d.ts` |
| 13.5% | 0.6ms |     1 | 0.6ms | 0.6ms | `containingFileName` | `/src/zod/node_modules/jest-snapshot/build/index.d.ts` |
| 10.0% | 0.4ms |     1 | 0.4ms | 0.4ms | `containingFileName` | `/src/zod/src/external.ts`                             |

#### Parents

Parent spans with the largest contribution to each span's total time.

##### `checkExpression`

|     % |    Time | Count |  Mean |     Max | Parent                     |
| ----: | ------: | ----: | ----: | ------: | -------------------------- |
| 62.3% |   1.77s |   383 | 4.6ms | 106.9ms | `checkExpression`          |
| 27.3% | 779.6ms |    86 | 9.1ms | 124.9ms | `checkVariableDeclaration` |
|  6.6% | 187.0ms |    53 | 3.5ms |  24.7ms | `checkDeferredNode`        |
|  3.9% | 110.4ms |    43 | 2.6ms |  21.8ms | `checkSourceFile`          |

##### `checkDeferredNode`

|      % |  Time | Count |  Mean |     Max | Parent            |
| -----: | ----: | ----: | ----: | ------: | ----------------- |
| 100.0% | 1.06s |   117 | 9.1ms | 128.2ms | `checkSourceFile` |

##### `checkVariableDeclaration`

|     % |    Time | Count |   Mean |     Max | Parent              |
| ----: | ------: | ----: | -----: | ------: | ------------------- |
| 66.5% | 552.7ms |    61 |  9.1ms | 125.2ms | `checkDeferredNode` |
| 33.5% | 278.9ms |    27 | 10.3ms |  83.9ms | `checkSourceFile`   |

##### `findSourceFile`

|     % |    Time | Count |   Mean |     Max | Parent                          |
| ----: | ------: | ----: | -----: | ------: | ------------------------------- |
| 62.3% |   1.06s |    46 | 23.2ms | 200.4ms | `findSourceFile`                |
| 20.0% | 341.8ms |    10 | 34.2ms | 204.2ms | `processRootFiles`              |
| 12.6% | 216.3ms |     5 | 43.3ms | 146.3ms | `processTypeReferenceDirective` |
|  5.1% |  86.9ms |     2 | 43.4ms |  64.2ms | `createProgram`                 |

##### `structuredTypeRelatedTo`

|     % |    Time | Count |   Mean |     Max | Parent                    |
| ----: | ------: | ----: | -----: | ------: | ------------------------- |
| 61.3% |   2.47s |   179 | 13.8ms | 142.5ms | `structuredTypeRelatedTo` |
| 27.4% |   1.10s |    29 | 38.1ms | 148.9ms | `getVariancesWorker`      |
|  8.5% | 341.3ms |    17 | 20.1ms | 152.4ms | `checkSourceFile`         |
|  2.5% | 101.0ms |    44 |  2.3ms |  16.9ms | `checkExpression`         |
|  0.4% |  15.5ms |     9 |  1.7ms |   3.5ms | `checkDeferredNode`       |

##### `createSourceFile`

|     % |    Time | Count |  Mean |    Max | Parent                  |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 88.1% | 379.6ms |   215 | 1.8ms | 75.8ms | `findSourceFile`        |
| 10.1% |  43.5ms |    56 | 0.8ms |  3.7ms | `processRootFiles`      |
|  1.8% |   7.9ms |     5 | 1.6ms |  3.8ms | `processTypeReferences` |

##### `processRootFiles`

|      % |    Time | Count |    Mean |     Max | Parent          |
| -----: | ------: | ----: | ------: | ------: | --------------- |
| 100.0% | 402.9ms |     1 | 402.9ms | 402.9ms | `createProgram` |

##### `getVariancesWorker`

|     % |   Time | Count |   Mean |     Max | Parent                    |
| ----: | -----: | ----: | -----: | ------: | ------------------------- |
| 97.9% |  1.13s |    21 | 54.1ms | 152.0ms | `structuredTypeRelatedTo` |
|  2.1% | 24.8ms |     3 |  8.3ms |  11.4ms | `checkExpression`         |

##### `processTypeReferenceDirective`

|     % |    Time | Count |    Mean |     Max | Parent                  |
| ----: | ------: | ----: | ------: | ------: | ----------------------- |
| 67.5% | 146.6ms |     1 | 146.6ms | 146.6ms | `findSourceFile`        |
| 32.5% |  70.7ms |     4 |  17.7ms |  47.2ms | `processTypeReferences` |

##### `processTypeReferences`

|      % |   Time | Count |   Mean |    Max | Parent          |
| -----: | -----: | ----: | -----: | -----: | --------------- |
| 100.0% | 84.8ms |     1 | 84.8ms | 84.8ms | `createProgram` |

##### `resolveModuleNamesWorker`

|      % |  Time | Count |  Mean |   Max | Parent           |
| -----: | ----: | ----: | ----: | ----: | ---------------- |
| 100.0% | 4.2ms |     4 | 1.1ms | 2.0ms | `findSourceFile` |

##### `emitBuildInfo`

|      % |  Time | Count |  Mean |   Max | Parent |
| -----: | ----: | ----: | ----: | ----: | ------ |
| 100.0% | 0.4ms |     1 | 0.4ms | 0.4ms | `emit` |

#### Children

Child spans with the largest contribution to each span's total time.

##### `checkSourceFile`

|     % |    Time | Count |   Mean |     Max | Child                      |
| ----: | ------: | ----: | -----: | ------: | -------------------------- |
| 36.4% |   1.06s |   117 |  9.1ms | 128.2ms | `checkDeferredNode`        |
| 11.6% | 341.3ms |    17 | 20.1ms | 152.4ms | `structuredTypeRelatedTo`  |
|  9.5% | 278.9ms |    27 | 10.3ms |  83.9ms | `checkVariableDeclaration` |
|  3.8% | 110.4ms |    43 |  2.6ms |  21.8ms | `checkExpression`          |

##### `checkExpression`

|     % |    Time | Count |  Mean |     Max | Child                     |
| ----: | ------: | ----: | ----: | ------: | ------------------------- |
| 62.3% |   1.77s |   383 | 4.6ms | 106.9ms | `checkExpression`         |
|  3.5% | 101.0ms |    44 | 2.3ms |  16.9ms | `structuredTypeRelatedTo` |
|  0.9% |  24.8ms |     3 | 8.3ms |  11.4ms | `getVariancesWorker`      |

##### `checkDeferredNode`

|     % |    Time | Count |  Mean |     Max | Child                      |
| ----: | ------: | ----: | ----: | ------: | -------------------------- |
| 51.7% | 552.7ms |    61 | 9.1ms | 125.2ms | `checkVariableDeclaration` |
| 17.5% | 187.0ms |    53 | 3.5ms |  24.7ms | `checkExpression`          |
|  1.5% |  15.5ms |     9 | 1.7ms |   3.5ms | `structuredTypeRelatedTo`  |

##### `checkVariableDeclaration`

|     % |    Time | Count |  Mean |     Max | Child             |
| ----: | ------: | ----: | ----: | ------: | ----------------- |
| 93.7% | 779.6ms |    86 | 9.1ms | 124.9ms | `checkExpression` |

##### `createProgram`

|     % |    Time | Count |    Mean |     Max | Child                   |
| ----: | ------: | ----: | ------: | ------: | ----------------------- |
| 69.0% | 402.9ms |     1 | 402.9ms | 402.9ms | `processRootFiles`      |
| 14.9% |  86.9ms |     2 |  43.4ms |  64.2ms | `findSourceFile`        |
| 14.5% |  84.8ms |     1 |  84.8ms |  84.8ms | `processTypeReferences` |

##### `findSourceFile`

|     % |    Time | Count |    Mean |     Max | Child                           |
| ----: | ------: | ----: | ------: | ------: | ------------------------------- |
| 62.3% |   1.06s |    46 |  23.2ms | 200.4ms | `findSourceFile`                |
| 22.2% | 379.6ms |   215 |   1.8ms |  75.8ms | `createSourceFile`              |
|  8.6% | 146.6ms |     1 | 146.6ms | 146.6ms | `processTypeReferenceDirective` |
|  0.2% |   4.2ms |     4 |   1.1ms |   2.0ms | `resolveModuleNamesWorker`      |

##### `structuredTypeRelatedTo`

|     % |  Time | Count |   Mean |     Max | Child                     |
| ----: | ----: | ----: | -----: | ------: | ------------------------- |
| 61.3% | 2.47s |   179 | 13.8ms | 142.5ms | `structuredTypeRelatedTo` |
| 28.2% | 1.13s |    21 | 54.1ms | 152.0ms | `getVariancesWorker`      |

##### `processRootFiles`

|     % |    Time | Count |   Mean |     Max | Child              |
| ----: | ------: | ----: | -----: | ------: | ------------------ |
| 84.8% | 341.8ms |    10 | 34.2ms | 204.2ms | `findSourceFile`   |
| 10.8% |  43.5ms |    56 |  0.8ms |   3.7ms | `createSourceFile` |

##### `getVariancesWorker`

|     % |  Time | Count |   Mean |     Max | Child                     |
| ----: | ----: | ----: | -----: | ------: | ------------------------- |
| 95.0% | 1.10s |    29 | 38.1ms | 148.9ms | `structuredTypeRelatedTo` |

##### `processTypeReferenceDirective`

|     % |    Time | Count |   Mean |     Max | Child            |
| ----: | ------: | ----: | -----: | ------: | ---------------- |
| 99.6% | 216.3ms |     5 | 43.3ms | 146.3ms | `findSourceFile` |

##### `processTypeReferences`

|     % |   Time | Count |   Mean |    Max | Child                           |
| ----: | -----: | ----: | -----: | -----: | ------------------------------- |
| 83.4% | 70.7ms |     4 | 17.7ms | 47.2ms | `processTypeReferenceDirective` |
|  9.3% |  7.9ms |     5 |  1.6ms |  3.8ms | `createSourceFile`              |

##### `emit`

|     % |  Time | Count |  Mean |   Max | Child           |
| ----: | ----: | ----: | ----: | ----: | --------------- |
| 42.0% | 0.4ms |     1 | 0.4ms | 0.4ms | `emitBuildInfo` |

#### Longest instances

Instances of each span with the most time.

##### `checkSourceFile`

|     % |    Time | Start | Attributes                                                 |
| ----: | ------: | ----: | ---------------------------------------------------------- |
| 21.9% | 643.9ms | 1.34s | `path=/src/zod/src/types.ts`                               |
|  9.9% | 291.1ms | 2.40s | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |
|  8.7% | 255.1ms | 1.09s | `path=/src/zod/src/helpers/partialUtil.ts`                 |
|  4.9% | 143.0ms | 3.10s | `path=/src/zod/src/__tests__/object.test.ts`               |
|  4.1% | 120.1ms | 3.27s | `path=/src/zod/src/__tests__/partials.test.ts`             |

##### `checkExpression`

|    % |    Time | Start | Attributes                                                 |
| ---: | ------: | ----: | ---------------------------------------------------------- |
| 4.4% | 124.9ms | 2.42s | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |
| 3.7% | 106.9ms | 2.42s | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |
| 2.9% |  83.5ms | 2.29s | `path=/src/zod/src/__tests__/crazySchema.ts`               |
| 2.5% |  71.3ms | 2.29s | `path=/src/zod/src/__tests__/crazySchema.ts`               |
| 1.0% |  28.2ms | 2.01s | `path=/src/zod/src/__tests__/all-errors.test.ts`           |

##### `checkDeferredNode`

|     % |    Time | Start | Attributes                                                  |
| ----: | ------: | ----: | ----------------------------------------------------------- |
| 12.0% | 128.2ms | 2.42s | `path=/src/zod/src/__tests__/discriminated-unions.test.ts`  |
|  4.0% |  43.1ms | 3.32s | `path=/src/zod/src/__tests__/partials.test.ts`              |
|  2.8% |  29.7ms | 3.52s | `path=/src/zod/src/__tests__/readonly.test.ts`              |
|  2.7% |  28.7ms | 2.80s | `path=/src/zod/src/__tests__/firstpartyschematypes.test.ts` |
|  2.2% |  23.1ms | 3.22s | `path=/src/zod/src/__tests__/object.test.ts`                |

##### `checkVariableDeclaration`

|     % |    Time | Start | Attributes                                                 |
| ----: | ------: | ----: | ---------------------------------------------------------- |
| 15.1% | 125.2ms | 2.42s | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |
| 10.1% |  83.9ms | 2.29s | `path=/src/zod/src/__tests__/crazySchema.ts`               |
|  3.4% |  28.6ms | 2.01s | `path=/src/zod/src/__tests__/all-errors.test.ts`           |
|  2.7% |  22.3ms | 3.22s | `path=/src/zod/src/__tests__/object.test.ts`               |
|  2.5% |  20.7ms | 2.62s | `path=/src/zod/src/__tests__/discriminated-unions.test.ts` |

##### `createProgram`

|      % |    Time | Start | Attributes                              |
| -----: | ------: | ----: | --------------------------------------- |
| 100.0% | 583.7ms |   0ms | `configFilePath=/src/zod/tsconfig.json` |

##### `findSourceFile`

|     % |    Time |   Start | Attributes                                                                                      |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------- |
| 11.9% | 204.2ms | 126.0ms | `fileName=/src/zod/src/__tests__/all-errors.test.ts, fileIncludeKind=RootFile`                  |
| 11.7% | 200.4ms | 129.7ms | `fileName=/src/zod/node_modules/@jest/globals/build/index.d.ts, fileIncludeKind=Import`         |
| 10.9% | 187.0ms | 132.9ms | `fileName=/src/zod/node_modules/@jest/environment/build/index.d.ts, fileIncludeKind=Import`     |
|  8.6% | 146.3ms | 137.2ms | `fileName=/src/zod/node_modules/@types/node/index.d.ts, fileIncludeKind=TypeReferenceDirective` |
|  7.2% | 124.0ms |   0.9ms | `fileName=/src/zod/src/ZodError.ts, fileIncludeKind=RootFile`                                   |

##### `structuredTypeRelatedTo`

|    % |    Time | Start |
| ---: | ------: | ----: |
| 3.8% | 152.4ms | 1.09s |
| 3.7% | 148.9ms | 1.09s |
| 3.5% | 142.5ms | 1.10s |
| 3.5% | 141.2ms | 1.10s |
| 3.4% | 135.8ms | 1.10s |

##### `createSourceFile`

|     % |   Time |   Start | Attributes                                               |
| ----: | -----: | ------: | -------------------------------------------------------- |
| 17.6% | 75.8ms |  45.5ms | `path=/src/zod/src/types.ts`                             |
| 14.2% | 61.2ms | 518.5ms | `path=/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
|  5.6% | 24.0ms | 421.4ms | `path=/src/zod/node_modules/@babel/types/lib/index.d.ts` |
|  3.7% | 16.1ms |   1.3ms | `path=/src/zod/src/ZodError.ts`                          |
|  2.8% | 11.9ms | 249.1ms | `path=/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |

##### `processRootFiles`

|      % |    Time | Start |
| -----: | ------: | ----: |
| 100.0% | 402.9ms | 0.7ms |

##### `bindSourceFile`

|     % |   Time |   Start | Attributes                                               |
| ----: | -----: | ------: | -------------------------------------------------------- |
| 19.1% | 61.0ms | 613.1ms | `path=/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
| 11.1% | 35.5ms | 710.6ms | `path=/src/zod/src/types.ts`                             |
|  6.8% | 21.8ms | 588.3ms | `path=/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |
|  5.6% | 18.0ms | 895.9ms | `path=/src/zod/node_modules/@babel/types/lib/index.d.ts` |
|  2.3% |  7.3ms | 792.7ms | `path=/src/zod/node_modules/@types/node/inspector.d.ts`  |

##### `getVariancesWorker`

|     % |    Time | Start |
| ----: | ------: | ----: |
| 13.1% | 152.0ms | 1.09s |
| 12.1% | 141.0ms | 1.10s |
| 11.1% | 128.9ms | 1.10s |
|  8.9% | 103.8ms | 1.13s |
|  8.3% |  96.8ms | 1.13s |

##### `processTypeReferenceDirective`

|     % |    Time |   Start | Attributes                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------- |
| 67.5% | 146.6ms | 137.1ms | `directive=node, refPath=/src/zod/node_modules/@jest/environment/build/index.d.ts` |
| 21.7% |  47.2ms | 410.4ms | `directive=babel__core`                                                            |
|  7.7% |  16.8ms | 475.5ms | `directive=semver`                                                                 |
|  2.6% |   5.7ms | 469.1ms | `directive=json-schema`                                                            |
|  0.5% |   1.0ms | 462.3ms | `directive=chai-subset`                                                            |

##### `processTypeReferences`

|      % |   Time |   Start |
| -----: | -----: | ------: |
| 100.0% | 84.8ms | 407.7ms |

##### `resolveModuleNamesWorker`

|     % |  Time |   Start | Attributes                                                                |
| ----: | ----: | ------: | ------------------------------------------------------------------------- |
| 47.4% | 2.0ms | 130.7ms | `containingFileName=/src/zod/node_modules/@jest/globals/build/index.d.ts` |
| 29.0% | 1.2ms | 152.5ms | `containingFileName=/src/zod/node_modules/@types/node/child_process.d.ts` |
| 13.5% | 0.6ms | 322.2ms | `containingFileName=/src/zod/node_modules/jest-snapshot/build/index.d.ts` |
| 10.0% | 0.4ms |  22.3ms | `containingFileName=/src/zod/src/external.ts`                             |

##### `emit`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 1.1ms | 3.90s |

##### `emitBuildInfo`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 0.4ms | 3.90s |

## Most frequent instants

### Count

Instants with the most occurrences recorded.

#### Categories

Categories accounting for at least 1.0% of instants.

##### Compilation

|      % | Count | Instant                             |
| -----: | ----: | ----------------------------------- |
| 100.0% |     2 | `recursiveTypeRelatedTo_DepthLimit` |
