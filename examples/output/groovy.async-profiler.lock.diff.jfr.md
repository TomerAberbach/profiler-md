# Lock contention profile diff

Blocked 3.0ms → 3.3ms (+0.23ms, +7.6%) over 44 contentions → 48 contentions (68.7µs → 67.7µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library |  +7.6% | +0.23ms | 100.0% | 3.0ms → 3.3ms |     44 → 48 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function             | Location                             |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------- | ------------------------------------ |
| +18.0% | +0.44ms | 81.2% → 89.1% | 2.5ms → 2.9ms |          22 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function | Location                             |
| -----: | ------: | ------------: | ------------: | ----------: | -------- | ------------------------------------ |
| -37.6% | -0.21ms | 18.8% → 10.9% | 0.6ms → 0.4ms |     22 → 26 | `poll()` | `java.lang.ref.NativeReferenceQueue` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

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

Functions with the largest decrease in total time blocked in the function and all its callees.

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
