# CPU profile diff

Took 11.47s → 11.41s (-60.9ms, -0.5%) over 9,111 samples → 9,057 samples (1.3ms per sample).

| Category          | Change |   Delta |    Base | Current |
| ----------------- | -----: | ------: | ------: | ------: |
| ours              |  -0.4% | -41.0ms |  11.07s |  11.03s |
| garbage collector |  -5.5% | -10.5ms | 192.7ms | 182.2ms |
| program           |  -8.3% | -14.6ms | 176.9ms | 162.2ms |
| stdlib            | +18.1% |  +5.3ms |  29.1ms |  34.3ms |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |   Delta |    Base | Current | Function                 | Location                              |
| -----: | ------: | ------: | ------: | ------------------------ | ------------------------------------- |
|  +4.8% | +56.3ms |   1.16s |   1.22s | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32  |
|  +5.0% | +29.9ms | 603.1ms | 633.0ms | `unevalInternal`         | uneval/src/internal/index.ts:25:32    |
| +18.9% | +23.7ms | 125.7ms | 149.4ms | `unevalObject`           | uneval/src/internal/object.ts:21:29   |
|  +2.8% | +22.3ms | 808.2ms | 830.5ms | `unevalObjectInternal`   | uneval/src/internal/object.ts:69:30   |
|  +2.8% |  +7.2ms | 257.7ms | 264.9ms | `traverse`               | uneval/src/index.ts:165:20            |
|  +9.8% |  +6.0ms |  61.7ms |  67.7ms | `unevalWithoutCustom`    | uneval/src/internal/index.ts:14:37    |
| +19.2% |  +3.8ms |  19.8ms |  23.6ms | `(anonymous)`            | uneval/scripts/profile.ts:0:0         |
| +20.6% |  +2.6ms |  12.5ms |  15.1ms | `unevalBoolean`          | uneval/src/internal/primitive.ts:8:30 |
|  +0.2% |  +0.7ms | 335.0ms | 335.7ms | `getType`                | uneval/src/internal/type.ts:4:24      |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

| Change |   Delta |    Base | Current | Function              | Location                                |
| -----: | ------: | ------: | ------: | --------------------- | --------------------------------------- |
|  -4.9% | -57.5ms |   1.16s |   1.10s | `unevalNumber`        | uneval/src/internal/primitive.ts:12:29  |
|  -3.0% | -29.0ms | 967.5ms | 938.5ms | `unevalArray`         | uneval/src/internal/collection.ts:7:47  |
| -14.0% | -28.0ms | 199.8ms | 171.8ms | `createState`         | uneval/src/index.ts:145:21              |
|  -1.0% | -22.7ms |   2.26s |   2.23s | `traverseObject`      | uneval/src/index.ts:205:26              |
| -10.4% | -21.4ms | 205.9ms | 184.5ms | `unevalLiteral`       | uneval/src/internal/primitive.ts:139:23 |
| -57.0% | -20.0ms |  35.1ms |  15.1ms | `unevalString`        | uneval/src/internal/primitive.ts:133:29 |
|  -8.3% | -14.6ms | 176.9ms | 162.2ms | `(program)`           | `<unknown>`                             |
|  -5.4% | -12.2ms | 227.2ms | 215.0ms | `uneval`              | uneval/src/index.ts:76:16               |
|  -5.5% | -10.5ms | 192.7ms | 182.2ms | `(garbage collector)` | `<unknown>`                             |
|  -0.1% |  -2.6ms |   2.61s |   2.61s | `unevalObjectLike`    | uneval/src/internal/object.ts:105:26    |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |   Delta |    Base | Current | Function                 | Location                              |
| -----: | ------: | ------: | ------: | ------------------------ | ------------------------------------- |
|  +0.8% | +49.7ms |   5.86s |   5.91s | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26  |
|  +3.0% | +42.0ms |   1.38s |   1.42s | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32  |
|  +0.1% |  +4.2ms |   7.75s |   7.75s | `unevalInternal`         | uneval/src/internal/index.ts:25:32    |
| +20.6% |  +2.6ms |  12.5ms |  15.1ms | `unevalBoolean`          | uneval/src/internal/primitive.ts:8:30 |
|  +0.2% |  +0.7ms | 335.0ms | 335.7ms | `getType`                | uneval/src/internal/type.ts:4:24      |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |   Delta |    Base | Current | Function               | Location                                |
| -----: | ------: | ------: | ------: | ---------------------- | --------------------------------------- |
|  -4.9% | -57.5ms |   1.16s |   1.10s | `unevalNumber`         | uneval/src/internal/primitive.ts:12:29  |
|  -0.4% | -46.0ms |  11.02s |  10.97s | `uneval`               | uneval/src/index.ts:76:16               |
|  -1.4% | -41.6ms |   3.05s |      3s | `createState`          | uneval/src/index.ts:145:21              |
| -17.2% | -41.4ms | 241.0ms | 199.5ms | `unevalString`         | uneval/src/internal/primitive.ts:133:29 |
|  -0.4% | -39.5ms |  11.06s |  11.02s | `(anonymous)`          | uneval/scripts/profile.ts:0:0           |
| -10.4% | -21.4ms | 205.9ms | 184.5ms | `unevalLiteral`        | uneval/src/internal/primitive.ts:139:23 |
|  -0.7% | -18.6ms |   2.74s |   2.72s | `traverseObject`       | uneval/src/index.ts:205:26              |
|  -7.1% | -15.5ms | 219.8ms | 204.2ms | `unevalWithoutCustom`  | uneval/src/internal/index.ts:14:37      |
|  -8.3% | -14.6ms | 176.9ms | 162.2ms | `(program)`            | `<unknown>`                             |
|  -0.5% | -13.6ms |   2.85s |   2.83s | `traverse`             | uneval/src/index.ts:165:20              |
|  -0.2% | -12.7ms |   7.56s |   7.55s | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30     |
|  -5.5% | -10.5ms | 192.7ms | 182.2ms | `(garbage collector)`  | `<unknown>`                             |
|  -0.1% |  -5.1ms |   7.61s |   7.60s | `unevalObject`         | uneval/src/internal/object.ts:21:29     |
|  -0.0% |  -1.6ms |   3.42s |   3.42s | `unevalArray`          | uneval/src/internal/collection.ts:7:47  |
