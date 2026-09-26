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

|   Change |   Delta |             % |           Time | Contentions | Function                                         | Location                                             |
| -------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|   +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `enqueue(Reference)`                             | `java.lang.ref.NativeReferenceQueue`                 |
|   +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `enqueueFromPending()`                           | `java.lang.ref.Reference`                            |
|   +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `processPendingReferences()`                     | `java.lang.ref.Reference`                            |
|   +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `run()`                                          | `java.lang.ref.Reference$ReferenceHandler`           |
|  +894.1% | +0.64ms |  3.0% → 18.8% |  0.1ms → 0.7ms |      3 → 24 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070011eac00`  |
|  +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `reinvoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000007001098000`  |
|  +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `guard(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
|  +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400`  |
|  +590.2% | +0.63ms |  4.6% → 19.5% |  0.1ms → 0.7ms |      3 → 26 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001282400`  |
|  +267.9% | +0.52ms |  8.2% → 18.8% |  0.2ms → 0.7ms |      7 → 24 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001368800`  |
| +3055.1% | +0.52ms |  0.7% → 14.1% | 16.9µs → 0.5ms |      1 → 19 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001638000`  |
|  +712.9% | +0.51ms |  3.0% → 15.4% |  0.1ms → 0.6ms |      3 → 21 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700159b800`  |
|  +309.1% | +0.44ms |  6.1% → 15.4% |  0.1ms → 0.6ms |      5 → 21 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700159e800`  |
|  +275.2% | +0.39ms |  6.1% → 14.1% |  0.1ms → 0.5ms |      5 → 19 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001637400`  |
|  +357.7% | +0.38ms |  4.6% → 12.9% |  0.1ms → 0.5ms |      3 → 16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001368c00`  |
|  +426.5% | +0.37ms |  3.7% → 12.2% |  0.1ms → 0.5ms |      3 → 16 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017bcc00`  |
|  +162.2% | +0.36ms |  9.5% → 15.4% |  0.2ms → 0.6ms |      8 → 21 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700159e400`  |
|   +81.4% | +0.32ms | 16.7% → 18.8% |  0.4ms → 0.7ms |     14 → 23 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`       |
|   +81.4% | +0.32ms | 16.7% → 18.8% |  0.4ms → 0.7ms |     14 → 23 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001268800`  |
|   +77.2% | +0.31ms | 17.1% → 18.8% |  0.4ms → 0.7ms |     15 → 23 | `invokeVirtual(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x00000070011e1400` |

##### Standard library

|   Change |   Delta |             % |           Time | Contentions | Function                                         | Location                                                  |
| -------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | --------------------------------------------------------- |
|   +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `enqueue(Reference)`                             | `java.lang.ref.NativeReferenceQueue`                      |
|   +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `enqueueFromPending()`                           | `java.lang.ref.Reference`                                 |
|   +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `processPendingReferences()`                     | `java.lang.ref.Reference`                                 |
|   +71.7% | +1.27ms | 75.5% → 80.5% |  1.8ms → 3.0ms |     16 → 22 | `run()`                                          | `java.lang.ref.Reference$ReferenceHandler`                |
|  +894.1% | +0.64ms |  3.0% → 18.8% |  0.1ms → 0.7ms |      3 → 24 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070011eac00`       |
|  +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `reinvoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000007001098000`       |
|  +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `guard(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`       |
|  +636.0% | +0.64ms |  4.3% → 19.5% |  0.1ms → 0.7ms |      2 → 26 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400`       |
|  +590.2% | +0.63ms |  4.6% → 19.5% |  0.1ms → 0.7ms |      3 → 26 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001282400`       |
|  +267.9% | +0.52ms |  8.2% → 18.8% |  0.2ms → 0.7ms |      7 → 24 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001368800`       |
| +3055.1% | +0.52ms |  0.7% → 14.1% | 16.9µs → 0.5ms |      1 → 19 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001638000`       |
|  +712.9% | +0.51ms |  3.0% → 15.4% |  0.1ms → 0.6ms |      3 → 21 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700159b800`       |
|  +309.1% | +0.44ms |  6.1% → 15.4% |  0.1ms → 0.6ms |      5 → 21 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700159e800`       |
|  +275.2% | +0.39ms |  6.1% → 14.1% |  0.1ms → 0.5ms |      5 → 19 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001637400`       |
|  +357.7% | +0.38ms |  4.6% → 12.9% |  0.1ms → 0.5ms |      3 → 16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001368c00`       |
|  +426.5% | +0.37ms |  3.7% → 12.2% |  0.1ms → 0.5ms |      3 → 16 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017bcc00`       |
|  +162.2% | +0.36ms |  9.5% → 15.4% |  0.2ms → 0.6ms |      8 → 21 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700159e400`       |
|   +81.4% | +0.32ms | 16.7% → 18.8% |  0.4ms → 0.7ms |     14 → 23 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001268800`       |
|   +77.2% | +0.31ms | 17.1% → 18.8% |  0.4ms → 0.7ms |     15 → 23 | `invokeVirtual(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x00000070011e1400`      |
|   +92.3% | +0.30ms | 13.8% → 16.4% |  0.3ms → 0.6ms |     11 → 22 | `setCallSiteTarget()`                            | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |             % |           Time | Contentions | Function                                         | Location                                            |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| removed | -0.58ms |  24.5% → 0.0% |    0.6ms → 0ms |      20 → 0 | `reinvoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
| removed | -0.58ms |  24.5% → 0.0% |    0.6ms → 0ms |      20 → 0 | `guard(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
| removed | -0.30ms |  12.8% → 0.0% |    0.3ms → 0ms |      10 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015a6800` |
| removed | -0.30ms |  12.7% → 0.0% |    0.3ms → 0ms |       9 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001642400` |
|  -85.2% | -0.28ms |  13.9% → 1.3% | 0.3ms → 48.2µs |      12 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700151c800` |
|  -90.2% | -0.27ms |  12.8% → 0.8% | 0.3ms → 29.5µs |      10 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001509000` |
|  -87.2% | -0.26ms |  12.7% → 1.0% | 0.3ms → 38.3µs |       9 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001379400` |
|  -72.3% | -0.23ms |  13.5% → 2.3% |  0.3ms → 0.1ms |      11 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014a9c00` |
|  -76.1% | -0.23ms |  12.8% → 1.9% |  0.3ms → 0.1ms |      10 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001437400` |
| removed | -0.22ms |   9.4% → 0.0% |    0.2ms → 0ms |       7 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017c5400` |
|  -66.2% | -0.20ms |  12.7% → 2.7% |  0.3ms → 0.1ms |       9 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001099800` |
|  -83.6% | -0.19ms |   9.9% → 1.0% | 0.2ms → 38.3µs |       9 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014a9000` |
|  -38.1% | -0.15ms |  17.1% → 6.6% |  0.4ms → 0.2ms |      15 → 9 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001290800` |
| removed | -0.14ms |   6.0% → 0.0% |    0.1ms → 0ms |       3 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c8c00` |
|  -23.6% | -0.14ms | 24.5% → 11.6% |  0.6ms → 0.4ms |     20 → 15 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700135f400` |
|  -62.1% | -0.13ms |   8.7% → 2.1% |  0.2ms → 0.1ms |       8 → 3 | `each(Iterator, Closure)`                        | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
|  -62.1% | -0.13ms |   8.7% → 2.1% |  0.2ms → 0.1ms |       8 → 3 | `each(Iterable, Closure)`                        | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
|  -62.1% | -0.13ms |   8.7% → 2.1% |  0.2ms → 0.1ms |       8 → 3 | `each(List, Closure)`                            | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
|  -62.1% | -0.13ms |   8.7% → 2.1% |  0.2ms → 0.1ms |       8 → 3 | `doMethodInvoke(Object, Object[])`               | `org.codehaus.groovy.runtime.dgm$207`               |
| removed | -0.12ms |   5.2% → 0.0% |    0.1ms → 0ms |       4 → 0 | `existingKey(ReferencedKeyMap, Object)`          | `jdk.internal.util.ReferencedKeyMap`                |
