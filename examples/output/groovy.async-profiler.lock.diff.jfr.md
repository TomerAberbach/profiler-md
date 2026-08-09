# Lock contention profile diff

Blocked 1.4ms → 4.0ms (+2.56ms, +178.0%) over 30 contentions → 41 contentions (47.9µs → 97.5µs per contention).

| Category         |  Change |   Delta |      % |          Time | Contentions |
| ---------------- | ------: | ------: | -----: | ------------: | ----------: |
| Standard library | +178.0% | +2.56ms | 100.0% | 1.4ms → 4.0ms |     30 → 41 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function             | Location                             |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------- | ------------------------------------ |
| +324.9% | +1.47ms | 31.4% → 48.0% | 0.5ms → 1.9ms |     17 → 25 | `poll()`             | `java.lang.ref.NativeReferenceQueue` |
| +110.7% | +1.09ms | 68.6% → 52.0% | 1.0ms → 2.1ms |     13 → 16 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

##### Standard library

| Change |   Delta |            % |        Time | Contentions | Function                                                                                    | Location                                             |
| -----: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010ac400`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001092800` |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010ab400`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000070010ac800`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010c6c00`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010d4800`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001189000`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001189400`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d6400`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000700118a800` |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000700103c000`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001093400` |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invoke(Object, Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001288800`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `guardWithCatch(Object, Object, Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001289000`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `guard(Object, Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$MH.0x000000700128a000`  |
|    new | +1.92ms | 0.0% → 48.0% | 0ms → 1.9ms |      0 → 25 | `invoke(Object, Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001288400`  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |            % |        Time | Contentions | Function                                                                                    | Location                                             |
| ------: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801088800` |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000008801093400` |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000088010d2000`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000088010abc00`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000088010ac400`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000088010ac800`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000088010a9400`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000088010d2800`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000008801189000`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000008801189400`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000088010d8400`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000008801092800` |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000880103c000`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000008801288800`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `guardWithCatch(Object, Object, Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000008801289000`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `guard(Object, Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$MH.0x000000880128a000`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000008801288400`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000088010ab400`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000088010c6c00`  |
| removed | -0.45ms | 31.4% → 0.0% | 0.5ms → 0ms |      17 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000008801120c00`  |
