# CPU profile diff

Took 11.47s → 11.41s (-60.9ms, -0.5%) over 9,111 samples → 9,057 samples (1.3ms per sample).

| Category          | Change |   Delta |             % |              Time |       Samples |
| ----------------- | -----: | ------: | ------------: | ----------------: | ------------: |
| ours              |  -0.4% | -41.0ms | 96.5% → 96.7% |   11.07s → 11.03s | 8,816 → 8,782 |
| garbage collector |  -5.5% | -10.5ms |   1.7% → 1.6% | 192.7ms → 182.2ms |     153 → 145 |
| program           |  -8.3% | -14.6ms |   1.5% → 1.4% | 176.9ms → 162.2ms |     141 → 129 |
| stdlib            | +18.1% |  +5.3ms |          0.3% |   29.1ms → 34.3ms |             1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |   Delta |             % |              Time |   Samples | Function                 | Location                              |
| -----: | ------: | ------------: | ----------------: | --------: | ------------------------ | ------------------------------------- |
|  +4.8% | +56.3ms | 10.2% → 10.7% |     1.16s → 1.22s | 931 → 976 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32  |
|  +5.0% | +29.9ms |   5.3% → 5.5% | 603.1ms → 633.0ms | 480 → 504 | `unevalInternal`         | uneval/src/internal/index.ts:25:32    |
| +18.9% | +23.7ms |   1.1% → 1.3% | 125.7ms → 149.4ms | 100 → 119 | `unevalObject`           | uneval/src/internal/object.ts:21:29   |
|  +2.8% | +22.3ms |   7.0% → 7.3% | 808.2ms → 830.5ms | 642 → 661 | `unevalObjectInternal`   | uneval/src/internal/object.ts:69:30   |
|  +2.8% |  +7.2ms |   2.2% → 2.3% | 257.7ms → 264.9ms | 205 → 211 | `traverse`               | uneval/src/index.ts:165:20            |
|  +9.8% |  +6.0ms |   0.5% → 0.6% |   61.7ms → 67.7ms |   49 → 54 | `unevalWithoutCustom`    | uneval/src/internal/index.ts:14:37    |
| +19.2% |  +3.8ms |          0.2% |   19.8ms → 23.6ms |   18 → 20 | `(anonymous)`            | uneval/scripts/profile.ts             |
| +20.6% |  +2.6ms |          0.1% |   12.5ms → 15.1ms |   10 → 12 | `unevalBoolean`          | uneval/src/internal/primitive.ts:8:30 |
|  +0.2% |  +0.7ms |          2.9% | 335.0ms → 335.7ms |       267 | `getType`                | uneval/src/internal/type.ts:4:24      |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

| Change |   Delta |             % |              Time |       Samples | Function              | Location                                |
| -----: | ------: | ------------: | ----------------: | ------------: | --------------------- | --------------------------------------- |
|  -4.9% | -57.5ms |  10.2% → 9.7% |     1.16s → 1.10s |     927 → 881 | `unevalNumber`        | uneval/src/internal/primitive.ts:12:29  |
|  -3.0% | -29.0ms |   8.4% → 8.2% | 967.5ms → 938.5ms |     771 → 746 | `unevalArray`         | uneval/src/internal/collection.ts:7:47  |
| -14.0% | -28.0ms |   1.7% → 1.5% | 199.8ms → 171.8ms |     159 → 137 | `createState`         | uneval/src/index.ts:145:21              |
|  -1.0% | -22.7ms | 19.7% → 19.6% |     2.26s → 2.23s | 1,800 → 1,783 | `traverseObject`      | uneval/src/index.ts:205:26              |
| -10.4% | -21.4ms |   1.8% → 1.6% | 205.9ms → 184.5ms |     164 → 147 | `unevalLiteral`       | uneval/src/internal/primitive.ts:139:23 |
| -57.0% | -20.0ms |   0.3% → 0.1% |   35.1ms → 15.1ms |       28 → 12 | `unevalString`        | uneval/src/internal/primitive.ts:133:29 |
|  -8.3% | -14.6ms |   1.5% → 1.4% | 176.9ms → 162.2ms |     141 → 129 | `(program)`           | `<unknown>`                             |
|  -5.4% | -12.2ms |   2.0% → 1.9% | 227.2ms → 215.0ms |     181 → 171 | `uneval`              | uneval/src/index.ts:76:16               |
|  -5.5% | -10.5ms |   1.7% → 1.6% | 192.7ms → 182.2ms |     153 → 145 | `(garbage collector)` | `<unknown>`                             |
|  -0.1% |  -2.6ms | 22.8% → 22.9% |             2.61s | 2,084 → 2,081 | `unevalObjectLike`    | uneval/src/internal/object.ts:105:26    |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |   Delta |             % |              Time |       Samples | Function                 | Location                              |
| -----: | ------: | ------------: | ----------------: | ------------: | ------------------------ | ------------------------------------- |
|  +0.8% | +49.7ms | 51.1% → 51.8% |     5.86s → 5.91s | 4,668 → 4,707 | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26  |
|  +3.0% | +42.0ms | 12.1% → 12.5% |     1.38s → 1.42s | 1,104 → 1,138 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32  |
|  +0.1% |  +4.2ms | 67.6% → 68.0% |             7.75s | 6,173 → 6,175 | `unevalInternal`         | uneval/src/internal/index.ts:25:32    |
| +20.6% |  +2.6ms |          0.1% |   12.5ms → 15.1ms |       10 → 12 | `unevalBoolean`          | uneval/src/internal/primitive.ts:8:30 |
|  +0.2% |  +0.7ms |          2.9% | 335.0ms → 335.7ms |           267 | `getType`                | uneval/src/internal/type.ts:4:24      |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |   Delta |             % |              Time |       Samples | Function               | Location                                |
| -----: | ------: | ------------: | ----------------: | ------------: | ---------------------- | --------------------------------------- |
|  -4.9% | -57.5ms |  10.2% → 9.7% |     1.16s → 1.10s |     927 → 881 | `unevalNumber`         | uneval/src/internal/primitive.ts:12:29  |
|  -0.4% | -46.0ms | 96.1% → 96.2% |   11.02s → 10.97s | 8,773 → 8,736 | `uneval`               | uneval/src/index.ts:76:16               |
|  -1.4% | -41.6ms | 26.6% → 26.4% |        3.05s → 3s | 2,428 → 2,396 | `createState`          | uneval/src/index.ts:145:21              |
| -17.2% | -41.4ms |   2.1% → 1.7% | 241.0ms → 199.5ms |     192 → 159 | `unevalString`         | uneval/src/internal/primitive.ts:133:29 |
|  -0.4% | -39.5ms | 96.5% → 96.7% |   11.06s → 11.02s | 8,791 → 8,754 | `(anonymous)`          | uneval/scripts/profile.ts               |
| -10.4% | -21.4ms |   1.8% → 1.6% | 205.9ms → 184.5ms |     164 → 147 | `unevalLiteral`        | uneval/src/internal/primitive.ts:139:23 |
|  -0.7% | -18.6ms |         23.9% |     2.74s → 2.72s | 2,183 → 2,169 | `traverseObject`       | uneval/src/index.ts:205:26              |
|  -7.1% | -15.5ms |   1.9% → 1.8% | 219.8ms → 204.2ms |     175 → 163 | `unevalWithoutCustom`  | uneval/src/internal/index.ts:14:37      |
|  -8.3% | -14.6ms |   1.5% → 1.4% | 176.9ms → 162.2ms |     141 → 129 | `(program)`            | `<unknown>`                             |
|  -0.5% | -13.6ms |         24.9% |     2.85s → 2.83s | 2,269 → 2,259 | `traverse`             | uneval/src/index.ts:165:20              |
|  -0.2% | -12.7ms | 65.9% → 66.2% |     7.56s → 7.55s | 6,020 → 6,009 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30     |
|  -5.5% | -10.5ms |   1.7% → 1.6% | 192.7ms → 182.2ms |     153 → 145 | `(garbage collector)`  | `<unknown>`                             |
|  -0.1% |  -5.1ms | 66.4% → 66.7% |     7.61s → 7.60s | 6,059 → 6,054 | `unevalObject`         | uneval/src/internal/object.ts:21:29     |
|  -0.0% |  -1.6ms | 29.9% → 30.0% |             3.42s | 2,727 → 2,724 | `unevalArray`          | uneval/src/internal/collection.ts:7:47  |
