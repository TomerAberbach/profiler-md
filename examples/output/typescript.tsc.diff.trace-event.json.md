# Trace diff

Recorded 1,773 → 1,785 events (+12, +0.7%) over 3.88s → 3.90s (+18.04ms, +0.5%).

| Category    | Change |    Delta |             % |              Time |         Count |
| ----------- | -----: | -------: | ------------: | ----------------: | ------------: |
| Compilation |  +0.9% | +28.77ms | 87.1% → 87.4% |     3.38s → 3.41s | 1,497 → 1,509 |
| Parsing     |  -0.5% |  -1.95ms | 11.1% → 11.0% | 432.9ms → 431.0ms |           276 |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

#### Regressions

Thread spans with the largest increase in time, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

##### Compilation

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Span                            |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | ------------------------------- |
|  +4.6% | +41.45ms | 23.4% → 24.4% | 909.7ms → 951.2ms | 558 → 565 | 1.6ms → 1.7ms | 24.6ms → 24.7ms | `checkExpression`               |
| +27.3% | +11.17ms |   1.1% → 1.3% |   40.9ms → 52.1ms |   81 → 88 | 0.5ms → 0.6ms |   4.5ms → 5.2ms | `checkVariableDeclaration`      |
|  +2.2% |  +6.70ms |   7.9% → 8.0% | 307.3ms → 314.0ms | 116 → 117 | 2.6ms → 2.7ms | 22.0ms → 20.8ms | `checkDeferredNode`             |
|  +2.9% |  +3.28ms |          2.9% | 111.2ms → 114.5ms |   60 → 63 | 1.9ms → 1.8ms | 17.6ms → 17.5ms | `findSourceFile`                |
| +70.1% |  +2.57ms |   0.1% → 0.2% |     3.7ms → 6.2ms |         1 | 3.7ms → 6.2ms |   3.7ms → 6.2ms | `processTypeReferences`         |
| +19.7% |  +0.70ms |          0.1% |     3.5ms → 4.2ms |     2 → 4 | 1.8ms → 1.1ms |   3.0ms → 2.0ms | `resolveModuleNamesWorker`      |
| +30.1% |  +0.22ms |         <0.1% |     0.7ms → 0.9ms |         5 | 0.1ms → 0.2ms |   0.2ms → 0.3ms | `processTypeReferenceDirective` |

#### Improvements

Thread spans with the largest decrease in time, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |              Time |     Count |            Mean |               Max | Span                                       |
| ------: | ------: | ------------: | ----------------: | --------: | --------------: | ----------------: | ------------------------------------------ |
|   -0.8% | -9.48ms | 29.5% → 29.2% |     1.14s → 1.13s |        83 | 13.8ms → 13.7ms | 407.7ms → 420.4ms | `checkSourceFile`                          |
|  -46.6% | -8.04ms |   0.4% → 0.2% |    17.2ms → 9.2ms |         1 |  17.2ms → 9.2ms |    17.2ms → 9.2ms | `createProgram`                            |
|  -10.9% | -7.06ms |   1.7% → 1.5% |   64.8ms → 57.8ms |   28 → 24 |   2.3ms → 2.4ms |     7.4ms → 9.5ms | `getVariancesWorker`                       |
|   -1.5% | -6.60ms | 11.1% → 10.9% | 431.5ms → 424.9ms | 279 → 278 |           1.5ms |   31.4ms → 33.5ms | `structuredTypeRelatedTo`                  |
| removed | -2.28ms |   0.1% → 0.0% |       2.3ms → 0ms |     1 → 0 |     2.3ms → 0ms |       2.3ms → 0ms | `resolveTypeReferenceDirectiveNamesWorker` |
|   -0.7% | -2.09ms |   8.3% → 8.2% | 321.2ms → 319.1ms |       275 |           1.2ms |   59.5ms → 61.0ms | `bindSourceFile`                           |
|   -0.5% | -1.95ms | 11.1% → 11.0% | 432.9ms → 431.0ms |       276 |           1.6ms |   79.8ms → 75.8ms | `createSourceFile`                         |
|   -7.0% | -1.33ms |          0.5% |   18.9ms → 17.6ms |         1 | 18.9ms → 17.6ms |   18.9ms → 17.6ms | `processRootFiles`                         |
| removed | -0.23ms |  <0.1% → 0.0% |       0.2ms → 0ms |     2 → 0 |     0.1ms → 0ms |       0.2ms → 0ms | `resolveLibrary`                           |
|  -28.1% | -0.17ms |         <0.1% |     0.6ms → 0.4ms |         1 |   0.6ms → 0.4ms |     0.6ms → 0.4ms | `emitBuildInfo`                            |
|   -4.1% | -0.03ms |         <0.1% |             0.6ms |         1 |           0.6ms |             0.6ms | `emit`                                     |

##### Compilation

|  Change |   Delta |             % |              Time |     Count |            Mean |               Max | Span                                       |
| ------: | ------: | ------------: | ----------------: | --------: | --------------: | ----------------: | ------------------------------------------ |
|   -0.8% | -9.48ms | 29.5% → 29.2% |     1.14s → 1.13s |        83 | 13.8ms → 13.7ms | 407.7ms → 420.4ms | `checkSourceFile`                          |
|  -46.6% | -8.04ms |   0.4% → 0.2% |    17.2ms → 9.2ms |         1 |  17.2ms → 9.2ms |    17.2ms → 9.2ms | `createProgram`                            |
|  -10.9% | -7.06ms |   1.7% → 1.5% |   64.8ms → 57.8ms |   28 → 24 |   2.3ms → 2.4ms |     7.4ms → 9.5ms | `getVariancesWorker`                       |
|   -1.5% | -6.60ms | 11.1% → 10.9% | 431.5ms → 424.9ms | 279 → 278 |           1.5ms |   31.4ms → 33.5ms | `structuredTypeRelatedTo`                  |
| removed | -2.28ms |   0.1% → 0.0% |       2.3ms → 0ms |     1 → 0 |     2.3ms → 0ms |       2.3ms → 0ms | `resolveTypeReferenceDirectiveNamesWorker` |
|   -0.7% | -2.09ms |   8.3% → 8.2% | 321.2ms → 319.1ms |       275 |           1.2ms |   59.5ms → 61.0ms | `bindSourceFile`                           |
|   -7.0% | -1.33ms |          0.5% |   18.9ms → 17.6ms |         1 | 18.9ms → 17.6ms |   18.9ms → 17.6ms | `processRootFiles`                         |
| removed | -0.23ms |  <0.1% → 0.0% |       0.2ms → 0ms |     2 → 0 |     0.1ms → 0ms |       0.2ms → 0ms | `resolveLibrary`                           |
|  -28.1% | -0.17ms |         <0.1% |     0.6ms → 0.4ms |         1 |   0.6ms → 0.4ms |     0.6ms → 0.4ms | `emitBuildInfo`                            |
|   -4.1% | -0.03ms |         <0.1% |             0.6ms |         1 |           0.6ms |             0.6ms | `emit`                                     |

##### Parsing

| Change |   Delta |             % |              Time | Count |  Mean |             Max | Span               |
| -----: | ------: | ------------: | ----------------: | ----: | ----: | --------------: | ------------------ |
|  -0.5% | -1.95ms | 11.1% → 11.0% | 432.9ms → 431.0ms |   276 | 1.6ms | 79.8ms → 75.8ms | `createSourceFile` |

#### Parents

Parent spans with the largest change in contribution to each span's self time.

##### `checkExpression`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Parent                     |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | -------------------------- |
| +27.6% | +41.44ms | 16.5% → 20.2% | 150.3ms → 191.7ms |   78 → 86 | 1.9ms → 2.2ms | 10.7ms → 14.5ms | `checkVariableDeclaration` |
|  +0.7% |  +4.47ms | 73.5% → 70.8% | 668.6ms → 673.0ms | 379 → 383 |         1.8ms | 17.7ms → 17.6ms | `checkExpression`          |
|  -5.4% |  -3.13ms |   6.4% → 5.7% |   57.8ms → 54.7ms |   66 → 53 | 0.9ms → 1.0ms | 24.6ms → 24.7ms | `checkDeferredNode`        |
|  -4.0% |  -1.33ms |   3.6% → 3.3% |   33.1ms → 31.7ms |   35 → 43 | 0.9ms → 0.7ms |   9.0ms → 8.5ms | `checkSourceFile`          |

##### `checkVariableDeclaration`

| Change |    Delta |             % |            Time |   Count |          Mean |           Max | Parent              |
| -----: | -------: | ------------: | --------------: | ------: | ------------: | ------------: | ------------------- |
| +31.5% | +10.43ms | 81.1% → 83.7% | 33.1ms → 43.6ms | 55 → 61 | 0.6ms → 0.7ms | 4.5ms → 5.2ms | `checkDeferredNode` |
|  +9.6% |  +0.74ms | 18.9% → 16.3% |   7.7ms → 8.5ms | 26 → 27 |         0.3ms | 1.0ms → 1.2ms | `checkSourceFile`   |

##### `checkDeferredNode`

| Change |   Delta |      % |              Time |     Count |          Mean |             Max | Parent            |
| -----: | ------: | -----: | ----------------: | --------: | ------------: | --------------: | ----------------- |
|  +2.2% | +6.70ms | 100.0% | 307.3ms → 314.0ms | 116 → 117 | 2.6ms → 2.7ms | 22.0ms → 20.8ms | `checkSourceFile` |

##### `findSourceFile`

| Change |   Delta |             % |            Time |   Count |          Mean |             Max | Parent                          |
| -----: | ------: | ------------: | --------------: | ------: | ------------: | --------------: | ------------------------------- |
| +15.6% | +9.00ms | 51.8% → 58.2% | 57.6ms → 66.6ms | 44 → 46 | 1.3ms → 1.4ms |   5.6ms → 6.4ms | `findSourceFile`                |
| -58.3% | -7.72ms |  11.9% → 4.8% |  13.2ms → 5.5ms |       2 | 6.6ms → 2.8ms |  10.8ms → 3.0ms | `createProgram`                 |
|  +5.0% | +1.55ms | 27.8% → 28.4% | 31.0ms → 32.5ms |       5 | 6.2ms → 6.5ms | 17.6ms → 17.5ms | `processTypeReferenceDirective` |
|  +4.7% | +0.44ms |   8.5% → 8.6% |   9.4ms → 9.9ms |  9 → 10 |         1.0ms |   4.1ms → 3.7ms | `processRootFiles`              |

##### `processTypeReferences`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent          |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | --------------- |
| +70.1% | +2.57ms | 100.0% | 3.7ms → 6.2ms |     1 | 3.7ms → 6.2ms | 3.7ms → 6.2ms | `createProgram` |

##### `resolveModuleNamesWorker`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent           |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------- |
| +19.7% | +0.70ms | 100.0% | 3.5ms → 4.2ms | 2 → 4 | 1.8ms → 1.1ms | 3.0ms → 2.0ms | `findSourceFile` |

##### `processTypeReferenceDirective`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Parent                  |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| +21.8% | +0.13ms | 80.4% → 75.3% | 0.6ms → 0.7ms |     4 | 0.1ms → 0.2ms | 0.2ms → 0.3ms | `processTypeReferences` |
| +64.2% | +0.09ms | 19.6% → 24.7% | 0.1ms → 0.2ms |     1 | 0.1ms → 0.2ms | 0.1ms → 0.2ms | `findSourceFile`        |

##### `getVariancesWorker`

| Change |   Delta |             % |            Time |   Count |          Mean |           Max | Parent                    |
| -----: | ------: | ------------: | --------------: | ------: | ------------: | ------------: | ------------------------- |
|  -9.7% | -5.41ms | 85.6% → 86.7% | 55.5ms → 50.1ms | 24 → 21 | 2.3ms → 2.4ms | 7.4ms → 9.5ms | `structuredTypeRelatedTo` |
| -17.7% | -1.65ms | 14.4% → 13.3% |   9.3ms → 7.7ms |   4 → 3 | 2.3ms → 2.6ms | 3.6ms → 3.1ms | `checkExpression`         |

##### `structuredTypeRelatedTo`

|  Change |   Delta |             % |              Time |   Count |          Mean |             Max | Parent                     |
| ------: | ------: | ------------: | ----------------: | ------: | ------------: | --------------: | -------------------------- |
|  -12.3% | -6.68ms | 12.6% → 11.2% |   54.4ms → 47.8ms | 40 → 44 | 1.4ms → 1.1ms | 13.9ms → 15.3ms | `checkExpression`          |
| removed | -5.57ms |   1.3% → 0.0% |       5.6ms → 0ms |   3 → 0 |   1.9ms → 0ms |     2.7ms → 0ms | `checkVariableDeclaration` |
|  +56.7% | +5.06ms |   2.1% → 3.3% |    8.9ms → 14.0ms |   7 → 9 | 1.3ms → 1.6ms |   2.0ms → 3.0ms | `checkDeferredNode`        |
|   +1.3% | +1.97ms | 34.2% → 35.2% | 147.6ms → 149.6ms |      29 | 5.1ms → 5.2ms | 19.9ms → 26.7ms | `getVariancesWorker`       |
|   -7.7% | -1.41ms |   4.2% → 4.0% |   18.2ms → 16.8ms |      17 | 1.1ms → 1.0ms |   4.4ms → 4.5ms | `checkSourceFile`          |

##### `resolveTypeReferenceDirectiveNamesWorker`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent                  |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ----------------------- |
| removed | -2.28ms | 100.0% → 0.0% | 2.3ms → 0ms | 1 → 0 | 2.3ms → 0ms | 2.3ms → 0ms | `processTypeReferences` |

##### `createSourceFile`

| Change |   Delta |             % |              Time |     Count |          Mean |             Max | Parent                  |
| -----: | ------: | ------------: | ----------------: | --------: | ------------: | --------------: | ----------------------- |
|  -2.3% | -8.83ms | 89.7% → 88.1% | 388.4ms → 379.6ms | 213 → 215 |         1.8ms | 79.8ms → 75.8ms | `findSourceFile`        |
| +12.8% | +4.95ms |  8.9% → 10.1% |   38.6ms → 43.5ms |   58 → 56 | 0.7ms → 0.8ms |   3.4ms → 3.7ms | `processRootFiles`      |
| +32.6% | +1.94ms |   1.4% → 1.8% |     5.9ms → 7.9ms |         5 | 1.2ms → 1.6ms |   2.6ms → 3.8ms | `processTypeReferences` |

##### `processRootFiles`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent          |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | --------------- |
|  -7.0% | -1.33ms | 100.0% | 18.9ms → 17.6ms |     1 | 18.9ms → 17.6ms | 18.9ms → 17.6ms | `createProgram` |

##### `resolveLibrary`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent           |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ---------------- |
| removed | -0.23ms | 100.0% → 0.0% | 0.2ms → 0ms | 2 → 0 | 0.1ms → 0ms | 0.2ms → 0ms | `findSourceFile` |

##### `emitBuildInfo`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ------ |
| -28.1% | -0.17ms | 100.0% | 0.6ms → 0.4ms |     1 | 0.6ms → 0.4ms | 0.6ms → 0.4ms | `emit` |

### Total time

#### Regressions

Thread spans with the largest increase in time, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

##### Compilation

| Change |    Delta |             % |              Time |     Count |              Mean |               Max | Span                            |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------: | ----------------: | ------------------------------- |
|  +1.2% | +36.18ms | 74.7% → 75.3% |     2.90s → 2.93s |        83 |   35.0ms → 35.4ms | 601.2ms → 643.9ms | `checkSourceFile`               |
|  +3.2% | +33.59ms | 26.9% → 27.6% |     1.04s → 1.07s | 558 → 565 |     5.2ms → 5.1ms | 118.6ms → 124.9ms | `checkExpression`               |
|  +4.1% | +32.57ms | 20.6% → 21.3% | 799.1ms → 831.6ms |   81 → 88 |     9.9ms → 9.5ms | 118.8ms → 125.2ms | `checkVariableDeclaration`      |
|  +1.9% | +20.02ms | 27.0% → 27.4% |     1.04s → 1.06s | 116 → 117 |     9.0ms → 9.1ms | 122.3ms → 128.2ms | `checkDeferredNode`             |
|  +3.8% | +14.59ms | 10.0% → 10.3% | 388.3ms → 402.9ms |         1 | 388.3ms → 402.9ms | 388.3ms → 402.9ms | `processRootFiles`              |
|  +6.1% | +12.42ms |   5.3% → 5.6% | 204.8ms → 217.2ms |         5 |   41.0ms → 43.4ms | 137.7ms → 146.6ms | `processTypeReferenceDirective` |
|  +7.4% |  +5.81ms |   2.0% → 2.2% |   79.0ms → 84.8ms |         1 |   79.0ms → 84.8ms |   79.0ms → 84.8ms | `processTypeReferences`         |
| +19.7% |  +0.70ms |          0.1% |     3.5ms → 4.2ms |     2 → 4 |     1.8ms → 1.1ms |     3.0ms → 2.0ms | `resolveModuleNamesWorker`      |

#### Improvements

Thread spans with the largest decrease in time, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |     Count |              Mean |               Max | Span                                       |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------: | ----------------: | ------------------------------------------ |
|   -9.6% | -25.84ms |   6.9% → 6.2% | 268.2ms → 242.4ms |   28 → 24 |   50.9ms → 48.4ms | 172.9ms → 152.0ms | `getVariancesWorker`                       |
|   -2.5% | -12.00ms | 12.5% → 12.2% | 487.0ms → 475.0ms | 279 → 278 |   16.9ms → 14.5ms | 173.2ms → 152.4ms | `structuredTypeRelatedTo`                  |
|   -1.2% |  -7.07ms | 15.2% → 15.0% | 590.8ms → 583.7ms |         1 | 590.8ms → 583.7ms | 590.8ms → 583.7ms | `createProgram`                            |
|   -1.0% |  -5.00ms | 13.0% → 12.8% | 503.6ms → 498.6ms |   60 → 63 |   28.1ms → 27.2ms | 190.8ms → 204.2ms | `findSourceFile`                           |
| removed |  -2.28ms |   0.1% → 0.0% |       2.3ms → 0ms |     1 → 0 |       2.3ms → 0ms |       2.3ms → 0ms | `resolveTypeReferenceDirectiveNamesWorker` |
|   -0.7% |  -2.09ms |   8.3% → 8.2% | 321.2ms → 319.1ms |       275 |             1.2ms |   59.5ms → 61.0ms | `bindSourceFile`                           |
|   -0.5% |  -1.95ms | 11.1% → 11.0% | 432.9ms → 431.0ms |       276 |             1.6ms |   79.8ms → 75.8ms | `createSourceFile`                         |
| removed |  -0.23ms |  <0.1% → 0.0% |       0.2ms → 0ms |     2 → 0 |       0.1ms → 0ms |       0.2ms → 0ms | `resolveLibrary`                           |
|  -15.9% |  -0.20ms |         <0.1% |     1.3ms → 1.1ms |         1 |     1.3ms → 1.1ms |     1.3ms → 1.1ms | `emit`                                     |
|  -28.1% |  -0.17ms |         <0.1% |     0.6ms → 0.4ms |         1 |     0.6ms → 0.4ms |     0.6ms → 0.4ms | `emitBuildInfo`                            |

##### Compilation

|  Change |    Delta |             % |              Time |     Count |              Mean |               Max | Span                                       |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------: | ----------------: | ------------------------------------------ |
|   -9.6% | -25.84ms |   6.9% → 6.2% | 268.2ms → 242.4ms |   28 → 24 |   50.9ms → 48.4ms | 172.9ms → 152.0ms | `getVariancesWorker`                       |
|   -2.5% | -12.00ms | 12.5% → 12.2% | 487.0ms → 475.0ms | 279 → 278 |   16.9ms → 14.5ms | 173.2ms → 152.4ms | `structuredTypeRelatedTo`                  |
|   -1.2% |  -7.07ms | 15.2% → 15.0% | 590.8ms → 583.7ms |         1 | 590.8ms → 583.7ms | 590.8ms → 583.7ms | `createProgram`                            |
|   -1.0% |  -5.00ms | 13.0% → 12.8% | 503.6ms → 498.6ms |   60 → 63 |   28.1ms → 27.2ms | 190.8ms → 204.2ms | `findSourceFile`                           |
| removed |  -2.28ms |   0.1% → 0.0% |       2.3ms → 0ms |     1 → 0 |       2.3ms → 0ms |       2.3ms → 0ms | `resolveTypeReferenceDirectiveNamesWorker` |
|   -0.7% |  -2.09ms |   8.3% → 8.2% | 321.2ms → 319.1ms |       275 |             1.2ms |   59.5ms → 61.0ms | `bindSourceFile`                           |
| removed |  -0.23ms |  <0.1% → 0.0% |       0.2ms → 0ms |     2 → 0 |       0.1ms → 0ms |       0.2ms → 0ms | `resolveLibrary`                           |
|  -15.9% |  -0.20ms |         <0.1% |     1.3ms → 1.1ms |         1 |     1.3ms → 1.1ms |     1.3ms → 1.1ms | `emit`                                     |
|  -28.1% |  -0.17ms |         <0.1% |     0.6ms → 0.4ms |         1 |     0.6ms → 0.4ms |     0.6ms → 0.4ms | `emitBuildInfo`                            |

##### Parsing

| Change |   Delta |             % |              Time | Count |  Mean |             Max | Span               |
| -----: | ------: | ------------: | ----------------: | ----: | ----: | --------------: | ------------------ |
|  -0.5% | -1.95ms | 11.1% → 11.0% | 432.9ms → 431.0ms |   276 | 1.6ms | 79.8ms → 75.8ms | `createSourceFile` |

#### Attribute values

Attribute values with the largest change in contribution to each span's total time.

##### `checkSourceFile`

| Change |    Delta |             % |              Time | Count |              Mean |               Max | Attribute | Value                                                 |
| -----: | -------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | --------- | ----------------------------------------------------- |
|  +7.1% | +42.73ms | 20.7% → 21.9% | 601.2ms → 643.9ms |     1 | 601.2ms → 643.9ms | 601.2ms → 643.9ms | `path`    | `/src/zod/src/types.ts`                               |
| -16.9% | -16.49ms |   3.4% → 2.8% |   97.7ms → 81.2ms |     1 |   97.7ms → 81.2ms |   97.7ms → 81.2ms | `path`    | `/src/zod/src/__tests__/function.test.ts`             |
|  -5.4% | -14.69ms |   9.3% → 8.7% | 269.8ms → 255.1ms |     1 | 269.8ms → 255.1ms | 269.8ms → 255.1ms | `path`    | `/src/zod/src/helpers/partialUtil.ts`                 |
| -12.4% | -12.02ms |   3.3% → 2.9% |   97.0ms → 85.0ms |     1 |   97.0ms → 85.0ms |   97.0ms → 85.0ms | `path`    | `/src/zod/src/__tests__/async-parsing.test.ts`        |
|  +2.9% |  +8.21ms |   9.7% → 9.9% | 282.9ms → 291.1ms |     1 | 282.9ms → 291.1ms | 282.9ms → 291.1ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |

##### `checkExpression`

|  Change |     Delta |             % |              Time |    Count |           Mean |               Max | Attribute | Value                                                 |
| ------: | --------: | ------------: | ----------------: | -------: | -------------: | ----------------: | --------- | ----------------------------------------------------- |
|  -52.2% | -139.36ms |   9.2% → 4.5% | 266.8ms → 127.4ms |  44 → 22 |  6.1ms → 5.8ms |   15.6ms → 16.8ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |
|  +51.3% |  +81.91ms |   5.5% → 8.5% | 159.8ms → 241.7ms | 97 → 114 |  1.6ms → 2.1ms |   13.8ms → 21.8ms | `path`    | `/src/zod/src/types.ts`                               |
|   -4.6% |  -46.11ms | 34.7% → 33.8% |   1.01s → 964.9ms | 104 → 85 | 9.7ms → 11.4ms | 118.6ms → 124.9ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
| +586.0% |  +36.43ms |   0.2% → 1.5% |    6.2ms → 42.6ms |   5 → 19 |  1.2ms → 2.2ms |     2.2ms → 6.9ms | `path`    | `/src/zod/src/__tests__/readonly.test.ts`             |
|  +60.6% |  +36.05ms |   2.0% → 3.3% |   59.5ms → 95.6ms |  19 → 27 |  3.1ms → 3.5ms |   14.7ms → 16.4ms | `path`    | `/src/zod/src/__tests__/error.test.ts`                |

##### `checkVariableDeclaration`

|  Change |    Delta |           % |            Time | Count |           Mean |             Max | Attribute | Value                                          |
| ------: | -------: | ----------: | --------------: | ----: | -------------: | --------------: | --------- | ---------------------------------------------- |
|  -36.5% | -19.05ms | 6.5% → 4.0% | 52.2ms → 33.1ms | 6 → 4 |  8.7ms → 8.3ms | 19.4ms → 18.8ms | `path`    | `/src/zod/src/__tests__/async-parsing.test.ts` |
|  -22.7% | -11.94ms | 6.6% → 4.9% | 52.6ms → 40.7ms | 7 → 4 | 7.5ms → 10.2ms | 16.0ms → 16.8ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`      |
|  -74.1% | -10.64ms | 1.8% → 0.4% |  14.4ms → 3.7ms | 4 → 1 |  3.6ms → 3.7ms |   7.7ms → 3.7ms | `path`    | `/src/zod/src/helpers/parseUtil.ts`            |
|  +33.2% | +10.30ms | 3.9% → 5.0% | 31.0ms → 41.3ms | 4 → 6 |  7.7ms → 6.9ms |           9.8ms | `path`    | `/src/zod/src/__tests__/intersection.test.ts`  |
| +524.8% |  +8.86ms | 0.2% → 1.3% |  1.7ms → 10.5ms | 1 → 2 |  1.7ms → 5.3ms |   1.7ms → 7.3ms | `path`    | `/src/zod/src/__tests__/refine.test.ts`        |

##### `checkDeferredNode`

|  Change |    Delta |             % |              Time | Count |            Mean |               Max | Attribute | Value                                                 |
| ------: | -------: | ------------: | ----------------: | ----: | --------------: | ----------------: | --------- | ----------------------------------------------------- |
|  -13.4% | -12.36ms |   8.8% → 7.5% |   92.6ms → 80.2ms | 7 → 6 | 13.2ms → 13.4ms |   40.6ms → 43.1ms | `path`    | `/src/zod/src/__tests__/partials.test.ts`             |
|  +83.1% |  +8.18ms |   0.9% → 1.7% |    9.8ms → 18.0ms |     4 |   2.5ms → 4.5ms |     4.2ms → 9.6ms | `path`    | `/src/zod/src/__tests__/refine.test.ts`               |
|  -17.0% |  -8.11ms |   4.5% → 3.7% |   47.6ms → 39.5ms | 6 → 5 |           7.9ms |   20.8ms → 20.2ms | `path`    | `/src/zod/src/__tests__/async-parsing.test.ts`        |
|   +2.7% |  +7.37ms | 26.0% → 26.2% | 273.0ms → 280.4ms |    12 | 22.8ms → 23.4ms | 122.3ms → 128.2ms | `path`    | `/src/zod/src/__tests__/discriminated-unions.test.ts` |
| removed |  -7.28ms |   0.7% → 0.0% |       7.3ms → 0ms | 1 → 0 |     7.3ms → 0ms |       7.3ms → 0ms | `path`    | `/src/zod/src/__tests__/optional.test.ts`             |

##### `processTypeReferenceDirective`

|  Change |   Delta |             % |              Time | Count |              Mean |               Max | Attribute   | Value                                                      |
| ------: | ------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | ----------- | ---------------------------------------------------------- |
|   +6.4% | +8.84ms | 67.2% → 67.5% | 137.7ms → 146.6ms |     1 | 137.7ms → 146.6ms | 137.7ms → 146.6ms | `directive` | `node`                                                     |
|   +6.0% | +2.66ms |         21.7% |   44.5ms → 47.2ms |     1 |   44.5ms → 47.2ms |   44.5ms → 47.2ms | `directive` | `babel__core`                                              |
| removed | -1.45ms |   0.7% → 0.0% |       1.5ms → 0ms | 1 → 0 |       1.5ms → 0ms |       1.5ms → 0ms | `directive` | `estree`                                                   |
|     new | +0.99ms |   0.0% → 0.5% |       0ms → 1.0ms | 0 → 1 |       0ms → 1.0ms |       0ms → 1.0ms | `directive` | `chai-subset`                                              |
|   +4.7% | +0.76ms |   7.8% → 7.7% |   16.1ms → 16.8ms |     1 |   16.1ms → 16.8ms |   16.1ms → 16.8ms | `directive` | `semver`                                                   |
|   +6.4% | +8.84ms | 67.2% → 67.5% | 137.7ms → 146.6ms |     1 | 137.7ms → 146.6ms | 137.7ms → 146.6ms | `refPath`   | `/src/zod/node_modules/@jest/environment/build/index.d.ts` |

##### `resolveModuleNamesWorker`

|  Change |   Delta |            % |        Time | Count |        Mean |         Max | Attribute            | Value                                                      |
| ------: | ------: | -----------: | ----------: | ----: | ----------: | ----------: | -------------------- | ---------------------------------------------------------- |
| removed | -2.98ms | 84.3% → 0.0% | 3.0ms → 0ms | 1 → 0 | 3.0ms → 0ms | 3.0ms → 0ms | `containingFileName` | `/src/zod/node_modules/@types/istanbul-reports/index.d.ts` |
|     new | +2.01ms | 0.0% → 47.4% | 0ms → 2.0ms | 0 → 1 | 0ms → 2.0ms | 0ms → 2.0ms | `containingFileName` | `/src/zod/node_modules/@jest/globals/build/index.d.ts`     |
|     new | +1.23ms | 0.0% → 29.0% | 0ms → 1.2ms | 0 → 1 | 0ms → 1.2ms | 0ms → 1.2ms | `containingFileName` | `/src/zod/node_modules/@types/node/child_process.d.ts`     |
|     new | +0.57ms | 0.0% → 13.5% | 0ms → 0.6ms | 0 → 1 | 0ms → 0.6ms | 0ms → 0.6ms | `containingFileName` | `/src/zod/node_modules/jest-snapshot/build/index.d.ts`     |
| removed | -0.56ms | 15.7% → 0.0% | 0.6ms → 0ms | 1 → 0 | 0.6ms → 0ms | 0.6ms → 0ms | `containingFileName` | `/src/zod/node_modules/@jest/fake-timers/build/index.d.ts` |

##### `createProgram`

| Change |   Delta |      % |              Time | Count |              Mean |               Max | Attribute        | Value                    |
| -----: | ------: | -----: | ----------------: | ----: | ----------------: | ----------------: | ---------------- | ------------------------ |
|  -1.2% | -7.07ms | 100.0% | 590.8ms → 583.7ms |     1 | 590.8ms → 583.7ms | 590.8ms → 583.7ms | `configFilePath` | `/src/zod/tsconfig.json` |

##### `findSourceFile`

| Change |    Delta |             % |              Time |   Count |              Mean |               Max | Attribute         | Value                                                      |
| -----: | -------: | ------------: | ----------------: | ------: | ----------------: | ----------------: | ----------------- | ---------------------------------------------------------- |
| -26.2% | -22.76ms |   5.2% → 3.8% |   86.9ms → 64.2ms |       1 |   86.9ms → 64.2ms |   86.9ms → 64.2ms | `fileName`        | `/src/zod/node_modules/typescript/lib/lib.dom.d.ts`        |
|  +7.1% | +13.45ms | 11.3% → 11.9% | 190.8ms → 204.2ms |       1 | 190.8ms → 204.2ms | 190.8ms → 204.2ms | `fileName`        | `/src/zod/src/__tests__/all-errors.test.ts`                |
|  +7.0% | +13.06ms | 11.1% → 11.7% | 187.3ms → 200.4ms |       1 | 187.3ms → 200.4ms | 187.3ms → 200.4ms | `fileName`        | `/src/zod/node_modules/@jest/globals/build/index.d.ts`     |
|  +7.2% | +12.54ms | 10.4% → 10.9% | 174.4ms → 187.0ms |       1 | 174.4ms → 187.0ms | 174.4ms → 187.0ms | `fileName`        | `/src/zod/node_modules/@jest/environment/build/index.d.ts` |
|  +6.4% |  +8.75ms |   8.2% → 8.6% | 137.6ms → 146.3ms |       1 | 137.6ms → 146.3ms | 137.6ms → 146.3ms | `fileName`        | `/src/zod/node_modules/@types/node/index.d.ts`             |
|  +2.4% | +19.58ms | 49.2% → 49.6% | 828.1ms → 847.7ms | 22 → 21 |   37.6ms → 40.4ms | 187.3ms → 200.4ms | `fileIncludeKind` | `Import`                                                   |
| -18.3% | -19.43ms |   6.3% → 5.1% |  106.3ms → 86.9ms |       2 |   53.1ms → 43.4ms |   86.9ms → 64.2ms | `fileIncludeKind` | `LibFile`                                                  |
|  +3.3% | +10.97ms | 19.6% → 20.0% | 330.8ms → 341.8ms |  9 → 10 |   36.8ms → 34.2ms | 190.8ms → 204.2ms | `fileIncludeKind` | `RootFile`                                                 |
|  +6.4% |  +8.75ms |   8.2% → 8.6% | 137.6ms → 146.3ms |       1 | 137.6ms → 146.3ms | 137.6ms → 146.3ms | `fileIncludeKind` | `TypeReferenceDirective`                                   |
|  +8.1% |  +3.68ms |   2.7% → 2.9% |   45.4ms → 49.1ms | 10 → 11 |             4.5ms |    9.0ms → 10.1ms | `fileIncludeKind` | `ReferenceFile`                                            |

##### `resolveTypeReferenceDirectiveNamesWorker`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Attribute            | Value                                 |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | -------------------- | ------------------------------------- |
| removed | -2.28ms | 100.0% → 0.0% | 2.3ms → 0ms | 1 → 0 | 2.3ms → 0ms | 2.3ms → 0ms | `containingFileName` | `/src/zod/__inferred type names__.ts` |

##### `bindSourceFile`

|  Change |   Delta |             % |            Time | Count |            Mean |             Max | Attribute | Value                                               |
| ------: | ------: | ------------: | --------------: | ----: | --------------: | --------------: | --------- | --------------------------------------------------- |
| +815.6% | +3.99ms |   0.2% → 1.4% |   0.5ms → 4.5ms |     1 |   0.5ms → 4.5ms |   0.5ms → 4.5ms | `path`    | `/src/zod/node_modules/expect/build/index.d.ts`     |
|  -79.1% | -3.85ms |   1.5% → 0.3% |   4.9ms → 1.0ms |     1 |   4.9ms → 1.0ms |   4.9ms → 1.0ms | `path`    | `/src/zod/src/__tests__/catch.test.ts`              |
|   -6.9% | -1.61ms |   7.3% → 6.8% | 23.4ms → 21.8ms |     1 | 23.4ms → 21.8ms | 23.4ms → 21.8ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.es5.d.ts` |
|   +2.5% | +1.49ms | 18.5% → 19.1% | 59.5ms → 61.0ms |     1 | 59.5ms → 61.0ms | 59.5ms → 61.0ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.dom.d.ts` |
|   +4.0% | +1.35ms | 10.6% → 11.1% | 34.2ms → 35.5ms |     1 | 34.2ms → 35.5ms | 34.2ms → 35.5ms | `path`    | `/src/zod/src/types.ts`                             |

##### `createSourceFile`

|  Change |    Delta |             % |            Time | Count |            Mean |             Max | Attribute | Value                                                 |
| ------: | -------: | ------------: | --------------: | ----: | --------------: | --------------: | --------- | ----------------------------------------------------- |
|  -19.7% | -15.02ms | 17.6% → 14.2% | 76.2ms → 61.2ms |     1 | 76.2ms → 61.2ms | 76.2ms → 61.2ms | `path`    | `/src/zod/node_modules/typescript/lib/lib.dom.d.ts`   |
| +211.9% |  +4.43ms |   0.5% → 1.5% |   2.1ms → 6.5ms |     1 |   2.1ms → 6.5ms |   2.1ms → 6.5ms | `path`    | `/src/zod/node_modules/@types/babel__core/index.d.ts` |
|   -4.9% |  -3.95ms | 18.4% → 17.6% | 79.8ms → 75.8ms |     1 | 79.8ms → 75.8ms | 79.8ms → 75.8ms | `path`    | `/src/zod/src/types.ts`                               |
|  -74.8% |  -2.57ms |   0.8% → 0.2% |   3.4ms → 0.9ms |     1 |   3.4ms → 0.9ms |   3.4ms → 0.9ms | `path`    | `/src/zod/src/__tests__/set.test.ts`                  |
|   -9.2% |  -2.44ms |   6.1% → 5.6% | 26.5ms → 24.0ms |     1 | 26.5ms → 24.0ms | 26.5ms → 24.0ms | `path`    | `/src/zod/node_modules/@babel/types/lib/index.d.ts`   |

##### `resolveLibrary`

|  Change |   Delta |            % |        Time | Count |        Mean |         Max | Attribute     | Value                                                            |
| ------: | ------: | -----------: | ----------: | ----: | ----------: | ----------: | ------------- | ---------------------------------------------------------------- |
| removed | -0.15ms | 67.3% → 0.0% | 0.2ms → 0ms | 1 → 0 | 0.2ms → 0ms | 0.2ms → 0ms | `resolveFrom` | `/src/zod/__lib_node_modules_lookup_lib.es2020.intl.d.ts__.ts`   |
| removed | -0.07ms | 32.7% → 0.0% | 0.1ms → 0ms | 1 → 0 | 0.1ms → 0ms | 0.1ms → 0ms | `resolveFrom` | `/src/zod/__lib_node_modules_lookup_lib.es2022.string.d.ts__.ts` |

#### Parents

Parent spans with the largest change in contribution to each span's total time.

##### `checkExpression`

| Change |    Delta |             % |              Time |     Count |          Mean |               Max | Parent                     |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | ----------------: | -------------------------- |
|  -4.7% | -88.12ms | 64.1% → 62.3% |     1.86s → 1.77s | 379 → 383 | 4.9ms → 4.6ms | 101.2ms → 106.9ms | `checkExpression`          |
| +38.9% | +30.90ms |   2.7% → 3.9% |  79.5ms → 110.4ms |   35 → 43 | 2.3ms → 2.6ms |   13.8ms → 21.8ms | `checkSourceFile`          |
|  +3.6% | +27.44ms | 25.9% → 27.3% | 752.1ms → 779.6ms |   78 → 86 | 9.6ms → 9.1ms | 118.6ms → 124.9ms | `checkVariableDeclaration` |
| -11.7% | -24.75ms |   7.3% → 6.6% | 211.8ms → 187.0ms |   66 → 53 | 3.2ms → 3.5ms |   24.6ms → 24.7ms | `checkDeferredNode`        |

##### `checkVariableDeclaration`

| Change |    Delta |             % |              Time |   Count |            Mean |               Max | Parent              |
| -----: | -------: | ------------: | ----------------: | ------: | --------------: | ----------------: | ------------------- |
|  +6.6% | +34.30ms | 64.9% → 66.5% | 518.4ms → 552.7ms | 55 → 61 |   9.4ms → 9.1ms | 118.8ms → 125.2ms | `checkDeferredNode` |
|  -0.6% |  -1.73ms | 35.1% → 33.5% | 280.6ms → 278.9ms | 26 → 27 | 10.8ms → 10.3ms |   84.0ms → 83.9ms | `checkSourceFile`   |

##### `checkDeferredNode`

| Change |    Delta |      % |          Time |     Count |          Mean |               Max | Parent            |
| -----: | -------: | -----: | ------------: | --------: | ------------: | ----------------: | ----------------- |
|  +1.9% | +20.02ms | 100.0% | 1.04s → 1.06s | 116 → 117 | 9.0ms → 9.1ms | 122.3ms → 128.2ms | `checkSourceFile` |

##### `processRootFiles`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Parent          |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------------- |
|  +3.8% | +14.59ms | 100.0% | 388.3ms → 402.9ms |     1 | 388.3ms → 402.9ms | 388.3ms → 402.9ms | `createProgram` |

##### `processTypeReferenceDirective`

| Change |   Delta |             % |              Time | Count |              Mean |               Max | Parent                  |
| -----: | ------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | ----------------------- |
|  +6.4% | +8.84ms | 67.2% → 67.5% | 137.7ms → 146.6ms |     1 | 137.7ms → 146.6ms | 137.7ms → 146.6ms | `findSourceFile`        |
|  +5.3% | +3.58ms | 32.8% → 32.5% |   67.1ms → 70.7ms |     4 |   16.8ms → 17.7ms |   44.5ms → 47.2ms | `processTypeReferences` |

##### `processTypeReferences`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent          |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | --------------- |
|  +7.4% | +5.81ms | 100.0% | 79.0ms → 84.8ms |     1 | 79.0ms → 84.8ms | 79.0ms → 84.8ms | `createProgram` |

##### `resolveModuleNamesWorker`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent           |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------- |
| +19.7% | +0.70ms | 100.0% | 3.5ms → 4.2ms | 2 → 4 | 1.8ms → 1.1ms | 3.0ms → 2.0ms | `findSourceFile` |

##### `getVariancesWorker`

| Change |     Delta |     % |            Time |   Count |            Mean |               Max | Parent                    |
| -----: | --------: | ----: | --------------: | ------: | --------------: | ----------------: | ------------------------- |
| -18.6% | -259.12ms | 97.9% |   1.39s → 1.13s | 24 → 21 | 58.1ms → 54.1ms | 172.9ms → 152.0ms | `structuredTypeRelatedTo` |
| -18.2% |   -5.54ms |  2.1% | 30.4ms → 24.8ms |   4 → 3 |   7.6ms → 8.3ms |   13.0ms → 11.4ms | `checkExpression`         |

##### `structuredTypeRelatedTo`

|  Change |     Delta |             % |              Time |     Count |            Mean |               Max | Parent                     |
| ------: | --------: | ------------: | ----------------: | --------: | --------------: | ----------------: | -------------------------- |
|  -14.3% | -411.28ms | 61.2% → 61.3% |     2.88s → 2.47s | 183 → 179 | 15.8ms → 13.8ms | 163.2ms → 142.5ms | `structuredTypeRelatedTo`  |
|  -18.9% | -257.61ms | 28.9% → 27.4% |     1.36s → 1.10s |        29 | 46.9ms → 38.1ms | 169.9ms → 148.9ms | `getVariancesWorker`       |
| removed |   -6.04ms |   0.1% → 0.0% |       6.0ms → 0ms |     3 → 0 |     2.0ms → 0ms |       2.7ms → 0ms | `checkVariableDeclaration` |
|  +32.1% |   +3.77ms |   0.2% → 0.4% |   11.7ms → 15.5ms |     7 → 9 |           1.7ms |     2.4ms → 3.5ms | `checkDeferredNode`        |
|   -1.0% |   -3.52ms |   7.3% → 8.5% | 344.8ms → 341.3ms |        17 | 20.3ms → 20.1ms | 173.2ms → 152.4ms | `checkSourceFile`          |

##### `findSourceFile`

| Change |    Delta |             % |              Time |   Count |            Mean |               Max | Parent                          |
| -----: | -------: | ------------: | ----------------: | ------: | --------------: | ----------------: | ------------------------------- |
|  +2.2% | +22.77ms | 61.9% → 62.3% |     1.04s → 1.06s | 44 → 46 | 23.7ms → 23.2ms | 187.3ms → 200.4ms | `findSourceFile`                |
| -18.3% | -19.43ms |   6.3% → 5.1% |  106.3ms → 86.9ms |       2 | 53.1ms → 43.4ms |   86.9ms → 64.2ms | `createProgram`                 |
|  +6.0% | +12.20ms | 12.1% → 12.6% | 204.1ms → 216.3ms |       5 | 40.8ms → 43.3ms | 137.6ms → 146.3ms | `processTypeReferenceDirective` |
|  +3.3% | +10.97ms | 19.6% → 20.0% | 330.8ms → 341.8ms |  9 → 10 | 36.8ms → 34.2ms | 190.8ms → 204.2ms | `processRootFiles`              |

##### `resolveTypeReferenceDirectiveNamesWorker`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent                  |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ----------------------- |
| removed | -2.28ms | 100.0% → 0.0% | 2.3ms → 0ms | 1 → 0 | 2.3ms → 0ms | 2.3ms → 0ms | `processTypeReferences` |

##### `createSourceFile`

| Change |   Delta |             % |              Time |     Count |          Mean |             Max | Parent                  |
| -----: | ------: | ------------: | ----------------: | --------: | ------------: | --------------: | ----------------------- |
|  -2.3% | -8.83ms | 89.7% → 88.1% | 388.4ms → 379.6ms | 213 → 215 |         1.8ms | 79.8ms → 75.8ms | `findSourceFile`        |
| +12.8% | +4.95ms |  8.9% → 10.1% |   38.6ms → 43.5ms |   58 → 56 | 0.7ms → 0.8ms |   3.4ms → 3.7ms | `processRootFiles`      |
| +32.6% | +1.94ms |   1.4% → 1.8% |     5.9ms → 7.9ms |         5 | 1.2ms → 1.6ms |   2.6ms → 3.8ms | `processTypeReferences` |

##### `resolveLibrary`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent           |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ---------------- |
| removed | -0.23ms | 100.0% → 0.0% | 0.2ms → 0ms | 2 → 0 | 0.1ms → 0ms | 0.2ms → 0ms | `findSourceFile` |

##### `emitBuildInfo`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ------ |
| -28.1% | -0.17ms | 100.0% | 0.6ms → 0.4ms |     1 | 0.6ms → 0.4ms | 0.6ms → 0.4ms | `emit` |

#### Children

Child spans with the largest change in contribution to each span's total time.

##### `checkSourceFile`

| Change |    Delta |             % |              Time |     Count |            Mean |               Max | Child                      |
| -----: | -------: | ------------: | ----------------: | --------: | --------------: | ----------------: | -------------------------- |
| +38.9% | +30.90ms |   2.7% → 3.8% |  79.5ms → 110.4ms |   35 → 43 |   2.3ms → 2.6ms |   13.8ms → 21.8ms | `checkExpression`          |
|  +1.9% | +20.02ms | 36.2% → 36.4% |     1.04s → 1.06s | 116 → 117 |   9.0ms → 9.1ms | 122.3ms → 128.2ms | `checkDeferredNode`        |
|  -1.0% |  -3.52ms | 11.9% → 11.6% | 344.8ms → 341.3ms |        17 | 20.3ms → 20.1ms | 173.2ms → 152.4ms | `structuredTypeRelatedTo`  |
|  -0.6% |  -1.73ms |   9.7% → 9.5% | 280.6ms → 278.9ms |   26 → 27 | 10.8ms → 10.3ms |   84.0ms → 83.9ms | `checkVariableDeclaration` |

##### `checkExpression`

| Change |    Delta |             % |              Time |     Count |          Mean |               Max | Child                     |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | ----------------: | ------------------------- |
|  -4.7% | -88.12ms | 64.1% → 62.3% |     1.86s → 1.77s | 379 → 383 | 4.9ms → 4.6ms | 101.2ms → 106.9ms | `checkExpression`         |
| -18.2% |  -5.54ms |   1.0% → 0.9% |   30.4ms → 24.8ms |     4 → 3 | 7.6ms → 8.3ms |   13.0ms → 11.4ms | `getVariancesWorker`      |
|  -2.2% |  -2.32ms |   3.6% → 3.5% | 103.3ms → 101.0ms |   40 → 44 | 2.6ms → 2.3ms |   16.1ms → 16.9ms | `structuredTypeRelatedTo` |

##### `checkVariableDeclaration`

|  Change |    Delta |             % |              Time |   Count |          Mean |               Max | Child                     |
| ------: | -------: | ------------: | ----------------: | ------: | ------------: | ----------------: | ------------------------- |
|   +3.6% | +27.44ms | 94.1% → 93.7% | 752.1ms → 779.6ms | 78 → 86 | 9.6ms → 9.1ms | 118.6ms → 124.9ms | `checkExpression`         |
| removed |  -6.04ms |   0.8% → 0.0% |       6.0ms → 0ms |   3 → 0 |   2.0ms → 0ms |       2.7ms → 0ms | `structuredTypeRelatedTo` |

##### `checkDeferredNode`

| Change |    Delta |             % |              Time |   Count |          Mean |               Max | Child                      |
| -----: | -------: | ------------: | ----------------: | ------: | ------------: | ----------------: | -------------------------- |
|  +6.6% | +34.30ms | 49.4% → 51.7% | 518.4ms → 552.7ms | 55 → 61 | 9.4ms → 9.1ms | 118.8ms → 125.2ms | `checkVariableDeclaration` |
| -11.7% | -24.75ms | 20.2% → 17.5% | 211.8ms → 187.0ms | 66 → 53 | 3.2ms → 3.5ms |   24.6ms → 24.7ms | `checkExpression`          |
| +32.1% |  +3.77ms |   1.1% → 1.5% |   11.7ms → 15.5ms |   7 → 9 |         1.7ms |     2.4ms → 3.5ms | `structuredTypeRelatedTo`  |

##### `processRootFiles`

| Change |    Delta |             % |              Time |   Count |            Mean |               Max | Child              |
| -----: | -------: | ------------: | ----------------: | ------: | --------------: | ----------------: | ------------------ |
|  +3.3% | +10.97ms | 85.2% → 84.8% | 330.8ms → 341.8ms |  9 → 10 | 36.8ms → 34.2ms | 190.8ms → 204.2ms | `findSourceFile`   |
| +12.8% |  +4.95ms |  9.9% → 10.8% |   38.6ms → 43.5ms | 58 → 56 |   0.7ms → 0.8ms |     3.4ms → 3.7ms | `createSourceFile` |

##### `processTypeReferenceDirective`

| Change |    Delta |     % |              Time | Count |            Mean |               Max | Child            |
| -----: | -------: | ----: | ----------------: | ----: | --------------: | ----------------: | ---------------- |
|  +6.0% | +12.20ms | 99.6% | 204.1ms → 216.3ms |     5 | 40.8ms → 43.3ms | 137.6ms → 146.3ms | `findSourceFile` |

##### `processTypeReferences`

|  Change |   Delta |             % |            Time | Count |            Mean |             Max | Child                                      |
| ------: | ------: | ------------: | --------------: | ----: | --------------: | --------------: | ------------------------------------------ |
|   +5.3% | +3.58ms | 85.0% → 83.4% | 67.1ms → 70.7ms |     4 | 16.8ms → 17.7ms | 44.5ms → 47.2ms | `processTypeReferenceDirective`            |
| removed | -2.28ms |   2.9% → 0.0% |     2.3ms → 0ms | 1 → 0 |     2.3ms → 0ms |     2.3ms → 0ms | `resolveTypeReferenceDirectiveNamesWorker` |
|  +32.6% | +1.94ms |   7.5% → 9.3% |   5.9ms → 7.9ms |     5 |   1.2ms → 1.6ms |   2.6ms → 3.8ms | `createSourceFile`                         |

##### `getVariancesWorker`

| Change |     Delta |             % |          Time | Count |            Mean |               Max | Child                     |
| -----: | --------: | ------------: | ------------: | ----: | --------------: | ----------------: | ------------------------- |
| -18.9% | -257.61ms | 95.5% → 95.0% | 1.36s → 1.10s |    29 | 46.9ms → 38.1ms | 169.9ms → 148.9ms | `structuredTypeRelatedTo` |

##### `structuredTypeRelatedTo`

| Change |     Delta |             % |          Time |     Count |            Mean |               Max | Child                     |
| -----: | --------: | ------------: | ------------: | --------: | --------------: | ----------------: | ------------------------- |
| -14.3% | -411.28ms | 61.2% → 61.3% | 2.88s → 2.47s | 183 → 179 | 15.8ms → 13.8ms | 163.2ms → 142.5ms | `structuredTypeRelatedTo` |
| -18.6% | -259.12ms | 29.6% → 28.2% | 1.39s → 1.13s |   24 → 21 | 58.1ms → 54.1ms | 172.9ms → 152.0ms | `getVariancesWorker`      |

##### `createProgram`

| Change |    Delta |             % |              Time | Count |              Mean |               Max | Child                   |
| -----: | -------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | ----------------------- |
| -18.3% | -19.43ms | 18.0% → 14.9% |  106.3ms → 86.9ms |     2 |   53.1ms → 43.4ms |   86.9ms → 64.2ms | `findSourceFile`        |
|  +3.8% | +14.59ms | 65.7% → 69.0% | 388.3ms → 402.9ms |     1 | 388.3ms → 402.9ms | 388.3ms → 402.9ms | `processRootFiles`      |
|  +7.4% |  +5.81ms | 13.4% → 14.5% |   79.0ms → 84.8ms |     1 |   79.0ms → 84.8ms |   79.0ms → 84.8ms | `processTypeReferences` |

##### `findSourceFile`

|  Change |    Delta |             % |              Time |     Count |              Mean |               Max | Child                           |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------: | ----------------: | ------------------------------- |
|   +2.2% | +22.77ms | 61.9% → 62.3% |     1.04s → 1.06s |   44 → 46 |   23.7ms → 23.2ms | 187.3ms → 200.4ms | `findSourceFile`                |
|   +6.4% |  +8.84ms |   8.2% → 8.6% | 137.7ms → 146.6ms |         1 | 137.7ms → 146.6ms | 137.7ms → 146.6ms | `processTypeReferenceDirective` |
|   -2.3% |  -8.83ms | 23.1% → 22.2% | 388.4ms → 379.6ms | 213 → 215 |             1.8ms |   79.8ms → 75.8ms | `createSourceFile`              |
|  +19.7% |  +0.70ms |          0.2% |     3.5ms → 4.2ms |     2 → 4 |     1.8ms → 1.1ms |     3.0ms → 2.0ms | `resolveModuleNamesWorker`      |
| removed |  -0.23ms |  <0.1% → 0.0% |       0.2ms → 0ms |     2 → 0 |       0.1ms → 0ms |       0.2ms → 0ms | `resolveLibrary`                |

##### `emit`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child           |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------------- |
| -28.1% | -0.17ms | 49.1% → 42.0% | 0.6ms → 0.4ms |     1 | 0.6ms → 0.4ms | 0.6ms → 0.4ms | `emitBuildInfo` |

### Count

#### Regressions

Thread spans with the largest increase in occurrences recorded. Categories account for at least 1.0% of self time on the base or the current side.

##### Compilation

|  Change | Delta |             % |     Count | Span                       |
| ------: | ----: | ------------: | --------: | -------------------------- |
|   +8.6% |    +7 |   4.6% → 4.9% |   81 → 88 | `checkVariableDeclaration` |
|   +1.3% |    +7 | 31.5% → 31.7% | 558 → 565 | `checkExpression`          |
|   +5.0% |    +3 |   3.4% → 3.5% |   60 → 63 | `findSourceFile`           |
| +100.0% |    +2 |   0.1% → 0.2% |     2 → 4 | `resolveModuleNamesWorker` |
|   +0.9% |    +1 |   6.5% → 6.6% | 116 → 117 | `checkDeferredNode`        |

#### Improvements

Thread spans with the largest decrease in occurrences recorded. Categories account for at least 1.0% of self time on the base or the current side.

##### Compilation

|  Change | Delta |             % |     Count | Span                                       |
| ------: | ----: | ------------: | --------: | ------------------------------------------ |
|  -14.3% |    -4 |   1.6% → 1.3% |   28 → 24 | `getVariancesWorker`                       |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `resolveLibrary`                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `resolveTypeReferenceDirectiveNamesWorker` |
|   -0.4% |    -1 | 15.8% → 15.6% | 279 → 278 | `structuredTypeRelatedTo`                  |

## Most frequent instants

### Count

No instant differed in occurrences recorded.
