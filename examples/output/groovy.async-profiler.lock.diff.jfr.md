# Lock contention profile diff

Blocked 2.3ms → 3.8ms (+1.43ms, +61.1%) over 36 contentions → 48 contentions (65.2µs → 78.8µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | +61.1% | +1.43ms | 100.0% | 2.3ms → 3.8ms |     36 → 48 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function             | Location                             |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------- | ------------------------------------ |
| +71.7% | +1.27ms | 75.5% → 80.5% | 1.8ms → 3.0ms |     16 → 22 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |
| +28.4% | +0.16ms | 24.5% → 19.5% | 0.6ms → 0.7ms |     20 → 26 | `poll()`             | `java.lang.ref.NativeReferenceQueue` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function                                                  | Location                                             |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------------------------------- | ---------------------------------------------------- |
| +71.7% | +1.27ms | 75.5% → 80.5% | 1.8ms → 3.0ms |     16 → 22 | `enqueue(Reference)`                                      | `java.lang.ref.NativeReferenceQueue`                 |
| +71.7% | +1.27ms | 75.5% → 80.5% | 1.8ms → 3.0ms |     16 → 22 | `enqueueFromPending()`                                    | `java.lang.ref.Reference`                            |
| +71.7% | +1.27ms | 75.5% → 80.5% | 1.8ms → 3.0ms |     16 → 22 | `processPendingReferences()`                              | `java.lang.ref.Reference`                            |
| +71.7% | +1.27ms | 75.5% → 80.5% | 1.8ms → 3.0ms |     16 → 22 | `run()`                                                   | `java.lang.ref.Reference$ReferenceHandler`           |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `reinvoke(Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x00000070010ac400`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x0000007001092800` |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070010ab400`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `guardWithCatch(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `guard(Object, Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010ac800`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001093400` |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001288800`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `guardWithCatch(Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000007001289000`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `guard(Object, Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700128a000`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001288400`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001282400`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `invokeInterface(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x0000007001093000` |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `guardWithCatch(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001096800`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `reinvoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x0000007001098000`  |
|    new | +0.74ms |  0.0% → 19.5% |   0ms → 0.7ms |      0 → 26 | `guard(Object, Object)`                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |            % |        Time | Contentions | Function                                                  | Location                                             |
| ------: | ------: | -----------: | ----------: | ----------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `guardWithCatch(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `guard(Object, Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `reinvoke(Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `guardWithCatch(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `reinvoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `guard(Object, Object)`                                   | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| removed | -0.58ms | 24.5% → 0.0% | 0.6ms → 0ms |      20 → 0 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`  |
| removed | -0.57ms | 24.1% → 0.0% | 0.6ms → 0ms |      19 → 0 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
| removed | -0.45ms | 19.2% → 0.0% | 0.5ms → 0ms |      16 → 0 | `guardWithCatch(Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000007001299000`  |
| removed | -0.45ms | 19.2% → 0.0% | 0.5ms → 0ms |      16 → 0 | `guard(Object, Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700129a000`  |
| removed | -0.45ms | 19.2% → 0.0% | 0.5ms → 0ms |      16 → 0 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001298400`  |
| removed | -0.44ms | 18.8% → 0.0% | 0.4ms → 0ms |      15 → 0 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001298800`  |
| removed | -0.44ms | 18.8% → 0.0% | 0.4ms → 0ms |      15 → 0 | `invokeInterface(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| removed | -0.44ms | 18.8% → 0.0% | 0.4ms → 0ms |      15 → 0 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001292400`  |
| removed | -0.40ms | 17.1% → 0.0% | 0.4ms → 0ms |      15 → 0 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x00000070011eb000` |
| removed | -0.40ms | 17.1% → 0.0% | 0.4ms → 0ms |      15 → 0 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000700128c800`  |
