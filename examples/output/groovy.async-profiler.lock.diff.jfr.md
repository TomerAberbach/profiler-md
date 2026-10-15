# Lock contention profile diff

Blocked 3.0ms → 3.3ms (+0.23ms, +7.6%) over 44 contentions → 48 contentions (68.7µs → 67.7µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library |  +7.6% | +0.23ms | 100.0% | 3.0ms → 3.3ms |     44 → 48 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function             | Location                             |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------- | ------------------------------------ |
| +18.0% | +0.44ms | 81.2% → 89.1% | 2.5ms → 2.9ms |          22 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function | Location                             |
| -----: | ------: | ------------: | ------------: | ----------: | -------- | ------------------------------------ |
| -37.6% | -0.21ms | 18.8% → 10.9% | 0.6ms → 0.4ms |     22 → 26 | `poll()` | `java.lang.ref.NativeReferenceQueue` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `enqueue(Reference)` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |      % |          Time | Contentions | Location                                |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------- |
| +18.0% | +0.44ms | 100.0% | 2.5ms → 2.9ms |          22 | `java.lang.ref.NativeReferenceQueue:58` |

##### `poll()` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |      % |          Time | Contentions | Location                                |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------- |
| -37.6% | -0.21ms | 100.0% | 0.6ms → 0.4ms |     22 → 26 | `java.lang.ref.NativeReferenceQueue:68` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `enqueue(Reference)` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                 | Location                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ------------------------- |
| +18.0% | +0.44ms | 100.0% | 2.5ms → 2.9ms |          22 | `enqueueFromPending()` | `java.lang.ref.Reference` |

##### `poll()` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                    | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------- | ------------------------------------ |
| -37.6% | -0.21ms | 100.0% | 0.6ms → 0.4ms |     22 → 26 | `removeStaleReferences()` | `jdk.internal.util.ReferencedKeyMap` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|   Change |   Delta |             % |           Time | Contentions | Function                                                                                 | Location                                                           |
| -------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|   +18.0% | +0.44ms | 81.2% → 89.1% |  2.5ms → 2.9ms |          22 | `enqueue(Reference)`                                                                     | `java.lang.ref.NativeReferenceQueue`                               |
|   +18.0% | +0.44ms | 81.2% → 89.1% |  2.5ms → 2.9ms |          22 | `enqueueFromPending()`                                                                   | `java.lang.ref.Reference`                                          |
|   +18.0% | +0.44ms | 81.2% → 89.1% |  2.5ms → 2.9ms |          22 | `processPendingReferences()`                                                             | `java.lang.ref.Reference`                                          |
|   +18.0% | +0.44ms | 81.2% → 89.1% |  2.5ms → 2.9ms |          22 | `run()`                                                                                  | `java.lang.ref.Reference$ReferenceHandler`                         |
|  +863.0% | +0.22ms |   0.8% → 7.6% | 25.6µs → 0.2ms |      1 → 20 | `invoke(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001292400`                |
|  +144.4% | +0.21ms |  4.8% → 10.9% |  0.1ms → 0.4ms |      7 → 26 | `invoke(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`                |
| +1383.6% | +0.18ms |   0.4% → 6.0% | 13.2µs → 0.2ms |      1 → 11 | `setHandleForMetaMethod()`                                                               | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`          |
|  +753.5% | +0.17ms |   0.8% → 6.0% | 22.8µs → 0.2ms |      1 → 16 | `invoke(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070015a3400`                |
|      new | +0.16ms |   0.0% → 4.8% |    0ms → 0.2ms |      0 → 15 | `invoke(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001641000`                |
|  +579.7% | +0.13ms |   0.8% → 4.8% | 22.8µs → 0.2ms |      1 → 14 | `invoke(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070017c8800`                |
|  +431.1% | +0.11ms |   0.8% → 4.2% | 25.6µs → 0.1ms |       1 → 8 | `invoke(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000`                |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `make(byte, Class, MemberName, Class)`                                                   | `java.lang.invoke.DirectMethodHandle`                              |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup`                            |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)`        | `java.lang.invoke.MethodHandles$Lookup`                            |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `unreflect(Method)`                                                                      | `java.lang.invoke.MethodHandles$Lookup`                            |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `correctClassForNameAndUnReflectOtherwise(Method)`                                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`          |
|      new | +0.08ms |   0.0% → 2.6% |    0ms → 0.1ms |       0 → 4 | `asCollectorType(Class, int, int)`                                                       | `java.lang.invoke.MethodType`                                      |
|      new | +0.08ms |   0.0% → 2.6% |    0ms → 0.1ms |       0 → 4 | `asCollector(int, Class, int)`                                                           | `java.lang.invoke.MethodHandle`                                    |
|      new | +0.08ms |   0.0% → 2.6% |    0ms → 0.1ms |       0 → 4 | `asCollector(Class, int)`                                                                | `java.lang.invoke.MethodHandle`                                    |
|      new | +0.08ms |   0.0% → 2.6% |    0ms → 0.1ms |       0 → 4 | `doCall(Object)`                                                                         | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2` |

##### Standard library

|   Change |   Delta |             % |           Time | Contentions | Function                                                                                 | Location                                                  |
| -------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   +18.0% | +0.44ms | 81.2% → 89.1% |  2.5ms → 2.9ms |          22 | `enqueue(Reference)`                                                                     | `java.lang.ref.NativeReferenceQueue`                      |
|   +18.0% | +0.44ms | 81.2% → 89.1% |  2.5ms → 2.9ms |          22 | `enqueueFromPending()`                                                                   | `java.lang.ref.Reference`                                 |
|   +18.0% | +0.44ms | 81.2% → 89.1% |  2.5ms → 2.9ms |          22 | `processPendingReferences()`                                                             | `java.lang.ref.Reference`                                 |
|   +18.0% | +0.44ms | 81.2% → 89.1% |  2.5ms → 2.9ms |          22 | `run()`                                                                                  | `java.lang.ref.Reference$ReferenceHandler`                |
|  +863.0% | +0.22ms |   0.8% → 7.6% | 25.6µs → 0.2ms |      1 → 20 | `invoke(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001292400`       |
|  +144.4% | +0.21ms |  4.8% → 10.9% |  0.1ms → 0.4ms |      7 → 26 | `invoke(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`       |
| +1383.6% | +0.18ms |   0.4% → 6.0% | 13.2µs → 0.2ms |      1 → 11 | `setHandleForMetaMethod()`                                                               | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  +753.5% | +0.17ms |   0.8% → 6.0% | 22.8µs → 0.2ms |      1 → 16 | `invoke(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070015a3400`       |
|      new | +0.16ms |   0.0% → 4.8% |    0ms → 0.2ms |      0 → 15 | `invoke(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001641000`       |
|  +579.7% | +0.13ms |   0.8% → 4.8% | 22.8µs → 0.2ms |      1 → 14 | `invoke(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070017c8800`       |
|  +431.1% | +0.11ms |   0.8% → 4.2% | 25.6µs → 0.1ms |       1 → 8 | `invoke(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000`       |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `make(byte, Class, MemberName, Class)`                                                   | `java.lang.invoke.DirectMethodHandle`                     |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup`                   |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)`        | `java.lang.invoke.MethodHandles$Lookup`                   |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `unreflect(Method)`                                                                      | `java.lang.invoke.MethodHandles$Lookup`                   |
|  +747.3% | +0.10ms |   0.4% → 3.4% | 13.2µs → 0.1ms |       1 → 7 | `correctClassForNameAndUnReflectOtherwise(Method)`                                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|      new | +0.08ms |   0.0% → 2.6% |    0ms → 0.1ms |       0 → 4 | `asCollectorType(Class, int, int)`                                                       | `java.lang.invoke.MethodType`                             |
|      new | +0.08ms |   0.0% → 2.6% |    0ms → 0.1ms |       0 → 4 | `asCollector(int, Class, int)`                                                           | `java.lang.invoke.MethodHandle`                           |
|      new | +0.08ms |   0.0% → 2.6% |    0ms → 0.1ms |       0 → 4 | `asCollector(Class, int)`                                                                | `java.lang.invoke.MethodHandle`                           |
|      new | +0.08ms |   0.0% → 2.6% |    0ms → 0.1ms |       0 → 4 | `each(Iterator, Closure)`                                                                | `org.codehaus.groovy.runtime.DefaultGroovyMethods`        |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |            % |          Time | Contentions | Function                                                         | Location                                                                    |
| -----: | ------: | -----------: | ------------: | ----------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| -85.2% | -0.49ms | 18.8% → 2.6% | 0.6ms → 0.1ms |      22 → 4 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00`                         |
| -85.2% | -0.49ms | 18.8% → 2.6% | 0.6ms → 0.1ms |      22 → 4 | `invoke(Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x00000070011e0c00`                         |
| -83.9% | -0.48ms | 18.8% → 2.8% | 0.6ms → 0.1ms |      22 → 6 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x000000700129dc00`                         |
| -61.2% | -0.34ms | 18.2% → 6.6% | 0.5ms → 0.2ms |     21 → 15 | `invoke(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001378800`                         |
| -61.2% | -0.34ms | 18.2% → 6.6% | 0.5ms → 0.2ms |     21 → 15 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x00000070011e1800`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `guardWithCatch(Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `reinvoke(Object, Object, Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000007001189000`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `guard(Object, Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001189400`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `processFile(String, DirectoryResults, RuleSet)`                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invokeSpecial(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x000000700118a800`                        |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700103c000`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d8400`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001298800`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `guardWithCatch(Object, Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001299000`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `guard(Object, Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000700129a000`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001298400`                         |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `doCall(Object)`                                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |

##### Standard library

| Change |   Delta |            % |          Time | Contentions | Function                                                         | Location                                             |
| -----: | ------: | -----------: | ------------: | ----------: | ---------------------------------------------------------------- | ---------------------------------------------------- |
| -85.2% | -0.49ms | 18.8% → 2.6% | 0.6ms → 0.1ms |      22 → 4 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00`  |
| -85.2% | -0.49ms | 18.8% → 2.6% | 0.6ms → 0.1ms |      22 → 4 | `invoke(Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x00000070011e0c00`  |
| -83.9% | -0.48ms | 18.8% → 2.8% | 0.6ms → 0.1ms |      22 → 6 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x000000700129dc00`  |
| -61.2% | -0.34ms | 18.2% → 6.6% | 0.5ms → 0.2ms |     21 → 15 | `invoke(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001378800`  |
| -61.2% | -0.34ms | 18.2% → 6.6% | 0.5ms → 0.2ms |     21 → 15 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x00000070011e1800`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `guardWithCatch(Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `reinvoke(Object, Object, Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000007001189000`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `guard(Object, Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001189400`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                   |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invokeSpecial(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x000000700118a800` |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700103c000`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d8400`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001298800`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `guardWithCatch(Object, Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001299000`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `guard(Object, Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000700129a000`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001298400`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                   |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `eachFile(File, FileType, Closure)`                              | `org.codehaus.groovy.runtime.ResourceGroovyMethods`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `eachFile(File, Closure)`                                        | `org.codehaus.groovy.runtime.ResourceGroovyMethods`  |
| -55.2% | -0.30ms | 18.2% → 7.6% | 0.5ms → 0.2ms |     21 → 20 | `doMethodInvoke(Object, Object[])`                               | `org.codehaus.groovy.runtime.dgm$1076`               |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `enqueueFromPending()` (`java.lang.ref.Reference`)

| Change |   Delta |      % |          Time | Contentions | Callee               | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | -------------------- | ------------------------------------ |
| +18.0% | +0.44ms | 100.0% | 2.5ms → 2.9ms |          22 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

| Change |   Delta |      % |          Time | Contentions | Callee                 | Location                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ------------------------- |
| +18.0% | +0.44ms | 100.0% | 2.5ms → 2.9ms |          22 | `enqueueFromPending()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

| Change |   Delta |      % |          Time | Contentions | Callee                       | Location                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ------------------------- |
| +18.0% | +0.44ms | 100.0% | 2.5ms → 2.9ms |          22 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001292400`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                     | Location                                            |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +0.25ms | 0.0% → 100.0% |  0ms → 0.2ms |      0 → 20 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |
| removed | -0.03ms | 100.0% → 0.0% | 25.6µs → 0ms |       1 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                   | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
|     new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |      0 → 26 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed | -0.15ms | 100.0% → 0.0% | 0.1ms → 0ms |       7 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400` |

##### `setHandleForMetaMethod()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|  Change |   Delta |              % |           Time | Contentions | Callee                                             | Location                                                  |
| ------: | ------: | -------------: | -------------: | ----------: | -------------------------------------------------- | --------------------------------------------------------- |
| +747.3% | +0.10ms | 100.0% → 57.1% | 13.2µs → 0.1ms |       1 → 7 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|     new | +0.08ms |   0.0% → 42.9% |    0ms → 0.1ms |       0 → 4 | `asCollector(Class, int)`                          | `java.lang.invoke.MethodHandle`                           |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a3400`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                  | Location                                     |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------- | -------------------------------------------- |
|     new | +0.19ms | 0.0% → 100.0% |  0ms → 0.2ms |      0 → 16 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed | -0.02ms | 100.0% → 0.0% | 22.8µs → 0ms |       1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001641000`)

| Change |   Delta |             % |        Time | Contentions | Callee                                          | Location                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------- | -------------------------------------------- |
|    new | +0.16ms | 0.0% → 100.0% | 0ms → 0.2ms |      0 → 15 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017c8800`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                                                                      | Location                                             |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +0.15ms | 0.0% → 100.0% |  0ms → 0.2ms |      0 → 14 | `delegate(Object, Object, Object, Object)`                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed | -0.02ms | 100.0% → 0.0% | 22.8µs → 0ms |       1 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c8000`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                  | Location                                             |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------- | ---------------------------------------------------- |
|     new | +0.14ms | 0.0% → 100.0% |  0ms → 0.1ms |       0 → 8 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -0.03ms | 100.0% → 0.0% | 25.6µs → 0ms |       1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |   Delta |              % |           Time | Contentions | Callee                               | Location                      |
| ------: | ------: | -------------: | -------------: | ----------: | ------------------------------------ | ----------------------------- |
| +425.2% | +0.06ms | 100.0% → 62.0% | 13.2µs → 0.1ms |       1 → 5 | `insertParameterTypes(int, Class[])` | `java.lang.invoke.MethodType` |
|     new | +0.04ms |   0.0% → 38.0% |   0ms → 42.5µs |       0 → 2 | `getMethodOrFieldType()`             | `java.lang.invoke.MemberName` |

##### `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |   Delta |      % |           Time | Contentions | Callee                                 | Location                              |
| ------: | ------: | -----: | -------------: | ----------: | -------------------------------------- | ------------------------------------- |
| +747.3% | +0.10ms | 100.0% | 13.2µs → 0.1ms |       1 → 7 | `make(byte, Class, MemberName, Class)` | `java.lang.invoke.DirectMethodHandle` |

##### `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |   Delta |      % |           Time | Contentions | Callee                                                                                   | Location                                |
| ------: | ------: | -----: | -------------: | ----------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| +747.3% | +0.10ms | 100.0% | 13.2µs → 0.1ms |       1 → 7 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |   Delta |      % |           Time | Contentions | Callee                                                                            | Location                                |
| ------: | ------: | -----: | -------------: | ----------: | --------------------------------------------------------------------------------- | --------------------------------------- |
| +747.3% | +0.10ms | 100.0% | 13.2µs → 0.1ms |       1 → 7 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `correctClassForNameAndUnReflectOtherwise(Method)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|  Change |   Delta |      % |           Time | Contentions | Callee              | Location                                |
| ------: | ------: | -----: | -------------: | ----------: | ------------------- | --------------------------------------- |
| +747.3% | +0.10ms | 100.0% | 13.2µs → 0.1ms |       1 → 7 | `unreflect(Method)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `asCollectorType(Class, int, int)` (`java.lang.invoke.MethodType`)

| Change |   Delta |             % |        Time | Contentions | Callee                               | Location                      |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------ | ----------------------------- |
|    new | +0.08ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `insertParameterTypes(int, Class[])` | `java.lang.invoke.MethodType` |

##### `asCollector(int, Class, int)` (`java.lang.invoke.MethodHandle`)

| Change |   Delta |             % |        Time | Contentions | Callee                             | Location                      |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------- | ----------------------------- |
|    new | +0.08ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `asCollectorType(Class, int, int)` | `java.lang.invoke.MethodType` |

##### `asCollector(Class, int)` (`java.lang.invoke.MethodHandle`)

| Change |   Delta |             % |        Time | Contentions | Callee                         | Location                        |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------- |
|    new | +0.08ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `asCollector(int, Class, int)` | `java.lang.invoke.MethodHandle` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

| Change |   Delta |             % |        Time | Contentions | Callee                                   | Location                           |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- | ---------------------------------- |
|    new | +0.08ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `each(Iterator, Closure)` (`org.codehaus.groovy.runtime.DefaultGroovyMethods`)

| Change |   Delta |             % |        Time | Contentions | Callee         | Location              |
| -----: | ------: | ------------: | ----------: | ----------: | -------------- | --------------------- |
|    new | +0.08ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `call(Object)` | `groovy.lang.Closure` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109ac00`)

|  Change |   Delta |             % |        Time | Contentions | Callee                             | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------- | --------------------------------------------------- |
| removed | -0.57ms | 100.0% → 0.0% | 0.6ms → 0ms |      22 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
| removed | -0.10ms |  17.8% → 0.0% | 0.1ms → 0ms |       4 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +0.08ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `reinvoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070011e0c00`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                  | Location                                     |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------------- | -------------------------------------------- |
| removed | -0.57ms | 100.0% → 0.0% | 0.6ms → 0ms |      22 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new | +0.08ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700129dc00`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                     | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | --------------------------------------------------- |
| removed | -0.57ms | 100.0% → 0.0% | 0.6ms → 0ms |      22 → 0 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|     new | +0.05ms |  0.0% → 57.9% | 0ms → 0.1ms |       0 → 3 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +0.05ms |  0.0% → 56.7% | 0ms → 0.1ms |       0 → 4 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001378800`)

| Change |   Delta |      % |          Time | Contentions | Callee                                                                                      | Location                                             |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -61.2% | -0.34ms | 100.0% | 0.5ms → 0.2ms |     21 → 15 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070011e1800`)

| Change |   Delta |      % |          Time | Contentions | Callee                                     | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------ | --------------------------------------------------- |
| -61.2% | -0.34ms | 100.0% | 0.5ms → 0.2ms |     21 → 15 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |

##### `guardWithCatch(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d2800`)

|  Change |   Delta |            % |          Time | Contentions | Callee                                          | Location                                             |
| ------: | ------: | -----------: | ------------: | ----------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed | -0.45ms | 81.9% → 0.0% |   0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`  |
|  -55.2% | -0.30ms |       100.0% | 0.5ms → 0.2ms |     21 → 20 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|  -55.2% | -0.30ms |       100.0% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001188000`  |
|  -55.2% | -0.30ms |       100.0% | 0.5ms → 0.2ms |     21 → 20 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +0.21ms | 0.0% → 86.5% |   0ms → 0.2ms |      0 → 15 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001288800`  |

##### `reinvoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001189000`)

|  Change |   Delta |            % |          Time | Contentions | Callee                                           | Location                                            |
| ------: | ------: | -----------: | ------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| removed | -0.46ms | 83.8% → 0.0% |   0.5ms → 0ms |      18 → 0 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700139c000` |
|  -55.2% | -0.30ms |       100.0% | 0.5ms → 0.2ms |     21 → 20 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800` |
|  -55.2% | -0.30ms |       100.0% | 0.5ms → 0.2ms |     21 → 20 | `guard(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |
|     new | +0.21ms | 0.0% → 86.5% |   0ms → 0.2ms |      0 → 15 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001378800` |
|     new | +0.05ms | 0.0% → 20.6% |   0ms → 0.1ms |       0 → 3 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001379400` |

##### `guard(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001189400`)

| Change |   Delta |             % |          Time | Contentions | Callee                                     | Location                                            |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------ | --------------------------------------------------- |
| -55.2% | -0.30ms |        100.0% | 0.5ms → 0.2ms |     21 → 20 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |
| -42.6% | -0.15ms | 65.8% → 84.4% | 0.4ms → 0.2ms |     15 → 17 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                   | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
| removed | -0.55ms | 100.0% → 0.0% | 0.5ms → 0ms |      21 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800` |
|     new | +0.25ms | 0.0% → 100.0% | 0ms → 0.2ms |      0 → 20 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8400` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |   Delta |             % |           Time | Contentions | Callee                                           | Location                           |
| -----: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
| -53.8% | -0.25ms | 83.8% → 86.5% |  0.5ms → 0.2ms |     18 → 15 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -86.5% | -0.08ms |  16.2% → 4.9% | 0.1ms → 12.0µs |           3 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|    new | +0.02ms |   0.0% → 8.6% |   0ms → 21.2µs |       0 → 2 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change |   Delta |      % |          Time | Contentions | Callee                                           | Location                           |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeSpecial(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000700118a800`)

| Change |   Delta |      % |          Time | Contentions | Callee                                           | Location                                         |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------ | ------------------------------------------------ |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700103c000`)

| Change |   Delta |             % |          Time | Contentions | Callee                                           | Location                                            |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| -46.3% | -0.17ms | 65.8% → 79.0% | 0.4ms → 0.2ms |     15 → 16 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015a6400` |
| -72.4% | -0.14ms | 34.2% → 21.0% | 0.2ms → 0.1ms |       6 → 4 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700129cc00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d8400`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                      | Location                                             |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -0.55ms | 100.0% → 0.0% | 0.5ms → 0ms |      21 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
|     new | +0.25ms | 0.0% → 100.0% | 0ms → 0.2ms |      0 → 20 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001298800`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                   | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
| removed | -0.55ms | 100.0% → 0.0% | 0.5ms → 0ms |      21 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400` |
|     new | +0.25ms | 0.0% → 100.0% | 0ms → 0.2ms |      0 → 20 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2000` |

##### `guardWithCatch(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001299000`)

| Change |   Delta |      % |          Time | Contentions | Callee                                           | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001298800` |

##### `guard(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700129a000`)

| Change |   Delta |             % |           Time | Contentions | Callee                                             | Location                                            |
| -----: | ------: | ------------: | -------------: | ----------: | -------------------------------------------------- | --------------------------------------------------- |
| -42.6% | -0.15ms | 65.8% → 84.4% |  0.4ms → 0.2ms |     15 → 17 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| -79.5% | -0.15ms | 34.2% → 15.6% | 0.2ms → 38.5µs |       6 → 3 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001299c00` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001298400`)

| Change |   Delta |      % |          Time | Contentions | Callee                                                                                      | Location                                             |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |   Delta |      % |          Time | Contentions | Callee                                           | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001298400` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

| Change |   Delta |      % |          Time | Contentions | Callee                                                   | Location                           |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------- | ---------------------------------- |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `eachFile(File, FileType, Closure)` (`org.codehaus.groovy.runtime.ResourceGroovyMethods`)

| Change |   Delta |      % |          Time | Contentions | Callee         | Location              |
| -----: | ------: | -----: | ------------: | ----------: | -------------- | --------------------- |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `call(Object)` | `groovy.lang.Closure` |

##### `eachFile(File, Closure)` (`org.codehaus.groovy.runtime.ResourceGroovyMethods`)

| Change |   Delta |      % |          Time | Contentions | Callee                              | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | --------------------------------------------------- |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `eachFile(File, FileType, Closure)` | `org.codehaus.groovy.runtime.ResourceGroovyMethods` |

##### `doMethodInvoke(Object, Object[])` (`org.codehaus.groovy.runtime.dgm$1076`)

| Change |   Delta |      % |          Time | Contentions | Callee                    | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------- | --------------------------------------------------- |
| -55.2% | -0.30ms | 100.0% | 0.5ms → 0.2ms |     21 → 20 | `eachFile(File, Closure)` | `org.codehaus.groovy.runtime.ResourceGroovyMethods` |
