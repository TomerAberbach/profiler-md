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

|    Change |   Delta |             % |           Time | Contentions | Function                                         | Location                                            |
| --------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
|    +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `enqueue(Reference)`                             | `java.lang.ref.NativeReferenceQueue`                |
|    +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `enqueueFromPending()`                           | `java.lang.ref.Reference`                           |
|    +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `processPendingReferences()`                     | `java.lang.ref.Reference`                           |
|    +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `run()`                                          | `java.lang.ref.Reference$ReferenceHandler`          |
| +10575.5% | +0.70ms |  0.3% → 18.8% |  6.7µs → 0.7ms |      1 → 24 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070011eac00` |
|   +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6c00` |
|   +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `reinvoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000007001098000` |
|   +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `guard(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
|   +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400` |
|   +590.2% | +0.63ms |  4.6% → 19.5% |  0.1ms → 0.7ms |      3 → 26 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
|   +590.2% | +0.63ms |  4.6% → 19.5% |  0.1ms → 0.7ms |      3 → 26 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010ab400` |
|   +590.2% | +0.63ms |  4.6% → 19.5% |  0.1ms → 0.7ms |      3 → 26 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|   +535.9% | +0.62ms |  4.9% → 19.5% |  0.1ms → 0.7ms |      4 → 26 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d3400` |
|   +267.6% | +0.52ms |  8.2% → 18.8% |  0.2ms → 0.7ms |      7 → 23 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001268800` |
|  +3055.1% | +0.52ms |  0.7% → 14.1% | 16.9µs → 0.5ms |      1 → 19 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001638000` |
|   +712.9% | +0.51ms |  3.0% → 15.4% |  0.1ms → 0.6ms |      3 → 21 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700159b800` |
|   +309.1% | +0.44ms |  6.1% → 15.4% |  0.1ms → 0.6ms |      5 → 21 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700159e800` |
|   +275.2% | +0.39ms |  6.1% → 14.1% |  0.1ms → 0.5ms |      5 → 19 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001637400` |
|   +426.5% | +0.37ms |  3.7% → 12.2% |  0.1ms → 0.5ms |      3 → 16 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017bcc00` |
|    +84.0% | +0.34ms | 17.1% → 19.5% |  0.4ms → 0.7ms |     15 → 26 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d2000` |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |            % |           Time | Contentions | Function                                         | Location                                            |
| ------: | ------: | -----------: | -------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| removed | -0.58ms | 24.5% → 0.0% |    0.6ms → 0ms |      20 → 0 | `reinvoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
| removed | -0.58ms | 24.5% → 0.0% |    0.6ms → 0ms |      20 → 0 | `guard(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|  -91.6% | -0.53ms | 24.5% → 1.3% | 0.6ms → 48.2µs |      20 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700151d000` |
|  -72.8% | -0.42ms | 24.5% → 4.1% |  0.6ms → 0.2ms |      20 → 5 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700128b400` |
|  -68.1% | -0.39ms | 24.5% → 4.8% |  0.6ms → 0.2ms |      20 → 5 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001325c00` |
|  -64.5% | -0.37ms | 24.5% → 5.4% |  0.6ms → 0.2ms |      20 → 7 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000` |
| removed | -0.30ms | 12.8% → 0.0% |    0.3ms → 0ms |      10 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015a6800` |
| removed | -0.30ms | 12.7% → 0.0% |    0.3ms → 0ms |       9 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001642400` |
|  -90.2% | -0.27ms | 12.8% → 0.8% | 0.3ms → 29.5µs |      10 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001509000` |
|  -87.2% | -0.26ms | 12.7% → 1.0% | 0.3ms → 38.3µs |       9 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001379400` |
|  -72.3% | -0.23ms | 13.5% → 2.3% |  0.3ms → 0.1ms |      11 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014a9c00` |
|  -82.6% | -0.23ms | 11.8% → 1.3% | 0.3ms → 48.2µs |      11 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014c9800` |
|  -76.1% | -0.23ms | 12.8% → 1.9% |  0.3ms → 0.1ms |      10 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001437400` |
| removed | -0.22ms |  9.4% → 0.0% |    0.2ms → 0ms |       7 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017c5400` |
|  -84.7% | -0.21ms | 10.6% → 1.0% | 0.2ms → 38.3µs |      10 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
|  -66.2% | -0.20ms | 12.7% → 2.7% |  0.3ms → 0.1ms |       9 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001099800` |
|  -83.6% | -0.19ms |  9.9% → 1.0% | 0.2ms → 38.3µs |       9 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014a9000` |
|  -36.6% | -0.14ms | 16.7% → 6.6% |  0.4ms → 0.2ms |      14 → 9 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001290800` |
| removed | -0.14ms |  6.0% → 0.0% |    0.1ms → 0ms |       3 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c8c00` |
|  -62.1% | -0.13ms |  8.7% → 2.1% |  0.2ms → 0.1ms |       8 → 3 | `each(Iterator, Closure)`                        | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
