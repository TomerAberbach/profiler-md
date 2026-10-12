# Sampling profile diff

Collected 251 samples → 316 samples (+65 samples, +25.9%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library | +29.9% |   +72 | 96.0% → 99.1% | 241 → 313 |
| Ours             | -70.0% |    -7 |   4.0% → 0.9% |    10 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                     | Location                                                       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
|  +63.6% |   +14 | 8.8% → 11.4% | 22 → 36 | `newArray(Class, int)`                                                                       | `java.lang.reflect.Array`                                      |
| +183.3% |   +11 |  2.4% → 5.4% |  6 → 17 | `putVal(int, Object, Object, boolean, boolean)`                                              | `java.util.HashMap`                                            |
| +125.0% |    +5 |  1.6% → 2.8% |   4 → 9 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`         |
| +400.0% |    +4 |  0.4% → 1.6% |   1 → 5 | `getReachableTarget(Transition, int)`                                                        | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`          |
|     new |    +4 |  0.0% → 1.3% |   0 → 4 | `equals(Object)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |
| +150.0% |    +3 |  0.8% → 1.6% |   2 → 5 | `add(ATNConfig, PredictionContextCache)`                                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`               |
| +150.0% |    +3 |  0.8% → 1.6% |   2 → 5 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                         | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`          |
| +100.0% |    +3 |  1.2% → 1.9% |   3 → 6 | `getBooleanAttributes0(File)`                                                                | `java.io.UnixFileSystem`                                       |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `invokeExact_MT(Object, Object, Object)`                                                     | `java.lang.invoke.Invokers$Holder`                             |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800`           |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                | `java.lang.invoke.MethodHandleImpl`                            |
| +100.0% |    +2 |  0.8% → 1.3% |   2 → 4 | `<init>(Method, boolean)`                                                                    | `java.lang.invoke.MemberName`                                  |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `invokeVirtual(Object, Object, Object, int)`                                                 | `java.lang.invoke.LambdaForm$DMH.0x00000003013a1400`           |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                 | `java.math.MutableBigInteger`                                  |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `equals(ATNConfig)`                                                                          | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                  |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `binarySearch0(Object[], int, int, Object, Comparator)`                                      | `java.util.Arrays`                                             |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `getOptimizedTransition(int)`                                                                | `groovyjarjarantlr4.v4.runtime.atn.ATNState`                   |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `removeNode(int, Object, Object, boolean, boolean)`                                          | `java.util.HashMap`                                            |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                                          |
|     new |    +1 |  0.0% → 0.3% |   0 → 1 | `allocateInstance(Object)`                                                                   | `java.lang.invoke.DirectMethodHandle`                          |

##### Ours

| Change | Delta |           % | Samples | Function                              | Location                                   |
| -----: | ----: | ----------: | ------: | ------------------------------------- | ------------------------------------------ |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `applyTo(SourceCode, List)`           | `org.codenarc.rule.AbstractAstVisitorRule` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getNumberOfFilesWithViolations(int)` | `org.codenarc.results.DirectoryResults`    |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -60.0% |    -6 | 4.0% → 1.3% |  10 → 4 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                           |
|  -55.6% |    -5 | 3.6% → 1.3% |   9 → 4 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`         |
| removed |    -5 | 2.0% → 0.0% |   5 → 0 | `valueConversion(Class, Class, boolean, boolean)`                                                             | `java.lang.invoke.MethodHandleImpl`                           |
| removed |    -4 | 1.6% → 0.0% |   4 → 0 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`                      |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)`                  | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                         |
|  -15.4% |    -2 | 5.2% → 3.5% | 13 → 11 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
|  -66.7% |    -2 | 1.2% → 0.3% |   3 → 1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `copyIntoWithCancel(Sink, Spliterator)`                                                                       | `java.util.stream.AbstractPipeline`                           |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `profileBoolean(boolean, int[])`                                                                              | `java.lang.invoke.MethodHandleImpl`                           |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `bindArgumentL(int, Object)`                                                                                  | `java.lang.invoke.BoundMethodHandle`                          |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `equals(Object, Object)`                                                                                      | `groovyjarjarantlr4.v4.runtime.misc.ObjectEqualityComparator` |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `getZipEntry(String, int)`                                                                                    | `java.util.zip.ZipFile`                                       |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000301119400`           |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<init>(Pattern, CharSequence)`                                                                               | `java.util.regex.Matcher`                                     |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `hashCode(byte[])`                                                                                            | `java.lang.StringLatin1`                                      |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `hashCode()`                                                                                                  | `java.lang.String`                                            |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `findBootstrapClass(String)`                                                                                  | `java.lang.ClassLoader`                                       |
|  -50.0% |    -1 | 0.8% → 0.3% |   2 → 1 | `allocateInstance(Class)`                                                                                     | `jdk.internal.misc.Unsafe`                                    |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000301134400`           |

##### Ours

|  Change | Delta |           % | Samples | Function                                           | Location                                                                                              |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `applyTo(SourceCode)`                              | `org.codenarc.rule.AbstractRule`                                                                      |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `doCall(Object)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor$_initializeImportNames_closure4` |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `checkMethods(ClassMetricResult)`                  | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                                               |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<init>()`                                         | `org.codenarc.source.ExpressionCollector$ExpressionCollectorVisitor`                                  |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `getMethodCalls(ModuleNode)`                       | `org.codenarc.source.ExpressionCollector`                                                             |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<init>(SuppressionAnalyzer, Map, int)`            | `org.codenarc.analyzer.SuppressionAnalyzer$1`                                                         |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `createAggregateMetricResult(Collection, Integer)` | `org.gmetrics.result.MetricResultBuilder`                                                             |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `getMetaClass()`                                   | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                  |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<init>(Metric, MetricLevel, Map, Integer, int)`   | `org.gmetrics.result.NumberMetricResult`                                                              |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| +600.0% |    +6 | 16.7% → 41.2% |   1 → 7 | `java.util.HashMap:644` |
|     new |    +6 |  0.0% → 35.3% |   0 → 6 | `java.util.HashMap:641` |
| removed |    -4 |  66.7% → 0.0% |   4 → 0 | `java.util.HashMap:670` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `java.util.HashMap:637` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `java.util.HashMap:650` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| +100.0% |    +3 | 75.0% → 66.7% |   3 → 6 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1860` |
|     new |    +3 |  0.0% → 33.3% |   0 → 3 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1865` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1862` |

##### `getReachableTarget(Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|  Change | Delta |      % | Samples | Location                                                  |
| ------: | ----: | -----: | ------: | --------------------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:367` |

##### `equals(Object)` (`groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext`)

| Change | Delta |            % | Samples | Location                                                          |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext:88` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext:87` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

| Change | Delta |              % | Samples | Location                                             |
| -----: | ----: | -------------: | ------: | ---------------------------------------------------- |
|    new |    +2 |   0.0% → 40.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:264` |
| +50.0% |    +1 | 100.0% → 60.0% |   2 → 3 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:254` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change | Delta |            % | Samples | Location                                                  |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:188` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:182` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.invoke.MethodHandleImpl:633` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|  Change | Delta |      % | Samples | Location                          |
| ------: | ----: | -----: | ------: | --------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `java.lang.invoke.MemberName:535` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change | Delta |             % | Samples | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.math.MutableBigInteger:1208` |

##### `equals(ATNConfig)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:371` |

##### `binarySearch0(Object[], int, int, Object, Comparator)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.Arrays:2348` |

##### `getOptimizedTransition(int)` (`groovyjarjarantlr4.v4.runtime.atn.ATNState`)

| Change | Delta |             % | Samples | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ATNState:223` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.HashMap:853` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.DirectMethodHandle:501` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change | Delta |             % | Samples | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.AbstractAstVisitorRule:92` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  -62.5% |    -5 | 80.0% → 75.0% |   8 → 3 | `java.util.HashMap:582` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `java.util.HashMap:587` |

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Location                                                  |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- |
| -55.6% |    -5 | 100.0% |   9 → 4 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:345` |

##### `valueConversion(Class, Class, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `java.lang.invoke.MethodHandleImpl:404` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |            % | Samples | Location                                     |
| ------: | ----: | -----------: | ------: | -------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `java.util.concurrent.ConcurrentHashMap:940` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:946` |

##### `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |            % | Samples | Location                                                    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1110` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1094` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.ArrayList:677` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -3 |  23.1% → 0.0% |   3 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1789` |
|  -66.7% |    -2 |  23.1% → 9.1% |   3 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1759` |
|  -50.0% |    -1 |  15.4% → 9.1% |   2 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1703` |
|  +33.3% |    +1 | 23.1% → 36.4% |   3 → 4 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1809` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1713` |

##### `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |      % | Samples | Location                                                    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1681` |

##### `copyIntoWithCancel(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.stream.AbstractPipeline:526` |

##### `profileBoolean(boolean, int[])` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.MethodHandleImpl:606` |

##### `bindArgumentL(int, Object)` (`java.lang.invoke.BoundMethodHandle`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.BoundMethodHandle:72` |

##### `equals(Object, Object)` (`groovyjarjarantlr4.v4.runtime.misc.ObjectEqualityComparator`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.misc.ObjectEqualityComparator:44` |

##### `getZipEntry(String, int)` (`java.util.zip.ZipFile`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.zip.ZipFile:707` |

##### `<init>(Pattern, CharSequence)` (`java.util.regex.Matcher`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.regex.Matcher:245` |

##### `hashCode(byte[])` (`java.lang.StringLatin1`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.StringLatin1:194` |

##### `hashCode()` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:2358` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractRule:143` |

##### `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor$_initializeImportNames_closure4`)

|  Change | Delta |             % | Samples | Location                                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor$_initializeImportNames_closure4:134` |

##### `checkMethods(ClassMetricResult)` (`org.codenarc.rule.size.AbstractMethodMetricAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor:82` |

##### `<init>()` (`org.codenarc.source.ExpressionCollector$ExpressionCollectorVisitor`)

|  Change | Delta |             % | Samples | Location                                                                |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.source.ExpressionCollector$ExpressionCollectorVisitor:31` |

##### `getMethodCalls(ModuleNode)` (`org.codenarc.source.ExpressionCollector`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.source.ExpressionCollector:25` |

##### `<init>(SuppressionAnalyzer, Map, int)` (`org.codenarc.analyzer.SuppressionAnalyzer$1`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.analyzer.SuppressionAnalyzer$1:135` |

##### `<init>(Metric, MetricLevel, Map, Integer, int)` (`org.gmetrics.result.NumberMetricResult`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.gmetrics.result.NumberMetricResult:44` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Caller                    | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------- |
| +63.6% |   +14 | 100.0% | 22 → 36 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                | Location            |
| ------: | ----: | -----: | ------: | --------------------- | ------------------- |
| +183.3% |   +11 | 100.0% |  6 → 17 | `put(Object, Object)` | `java.util.HashMap` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |      % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +125.0% |    +5 | 100.0% |   4 → 9 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getReachableTarget(Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|  Change | Delta |      % | Samples | Caller                                                               | Location                                              |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `equals(Object)` (`groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext`)

| Change | Delta |            % | Samples | Caller              | Location                                                       |
| -----: | ----: | -----------: | ------: | ------------------- | -------------------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `equals(Object)`    | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `getNode(Object)`   | `java.util.HashMap`                                            |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `equals(ATNConfig)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                  |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|  Change | Delta |      % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change | Delta |      % | Samples | Caller                                   | Location                                         |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `getBooleanAttributes0(File)` (`java.io.UnixFileSystem`)

|  Change | Delta |      % | Samples | Caller                            | Location                 |
| ------: | ----: | -----: | ------: | --------------------------------- | ------------------------ |
| +100.0% |    +3 | 100.0% |   3 → 6 | `hasBooleanAttributes(File, int)` | `java.io.UnixFileSystem` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |            % | Samples | Caller                                                                                        | Location                                          |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000003010b2800`)

| Change | Delta |            % | Samples | Caller                        | Location                                            |
| -----: | ----: | -----------: | ------: | ----------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x0000000301134400` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x0000000301137c00` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Caller                                                    | Location                         |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|  Change | Delta |      % | Samples | Caller           | Location                      |
| ------: | ----: | -----: | ------: | ---------------- | ----------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `<init>(Method)` | `java.lang.invoke.MemberName` |

##### `invokeVirtual(Object, Object, Object, int)` (`java.lang.invoke.LambdaForm$DMH.0x00000003013a1400`)

| Change | Delta |            % | Samples | Caller                                   | Location                                            |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003015a9800` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301594c00` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change | Delta |             % | Samples | Caller                                              | Location                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- | ----------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `divideKnuth(MutableBigInteger, MutableBigInteger)` | `java.math.MutableBigInteger` |

##### `equals(ATNConfig)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change | Delta |             % | Samples | Caller           | Location                                      |
| -----: | ----: | ------------: | ------: | ---------------- | --------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `equals(Object)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `binarySearch0(Object[], int, int, Object, Comparator)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller                                       | Location           |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `binarySearch(Object[], Object, Comparator)` | `java.util.Arrays` |

##### `getOptimizedTransition(int)` (`groovyjarjarantlr4.v4.runtime.atn.ATNState`)

| Change | Delta |            % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)`                  | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                        | Location                  |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `afterNodeInsertion(boolean)` | `java.util.LinkedHashMap` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change | Delta |             % | Samples | Caller               | Location              |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                             | Location                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change | Delta |             % | Samples | Caller                | Location                         |
| -----: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `getNumberOfFilesWithViolations(int)` (`org.codenarc.results.DirectoryResults`)

| Change | Delta |             % | Samples | Caller                               | Location                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301971400` |

##### `getNode(Object)` (`java.util.HashMap`)

| Change | Delta |     % | Samples | Caller        | Location                  |
| -----: | ----: | ----: | ------: | ------------- | ------------------------- |
| -60.0% |    -3 | 50.0% |   5 → 2 | `get(Object)` | `java.util.HashMap`       |
| -60.0% |    -3 | 50.0% |   5 → 2 | `get(Object)` | `java.util.LinkedHashMap` |

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Caller                                          | Location                                              |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| -55.6% |    -5 | 100.0% |   9 → 4 | `computeTargetState(CharStream, DFAState, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `valueConversion(Class, Class, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller       | Location              |
| ------: | ----: | ------------: | ------: | ------------ | --------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `hashCode()` | `java.util.ArrayList` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |              % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -23.1% |    -3 | 100.0% → 90.9% | 13 → 10 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|    new |    +1 |    0.0% → 9.1% |   0 → 1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |      % | Samples | Caller                                                                                       | Location                                               |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `copyIntoWithCancel(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                        | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `profileBoolean(boolean, int[])` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |            % | Samples | Caller                   | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000900138d800` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000009001104000` |

##### `bindArgumentL(int, Object)` (`java.lang.invoke.BoundMethodHandle`)

|  Change | Delta |             % | Samples | Caller                       | Location                        |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `bindArgumentL(int, Object)` | `java.lang.invoke.MethodHandle` |

##### `equals(Object, Object)` (`groovyjarjarantlr4.v4.runtime.misc.ObjectEqualityComparator`)

|  Change | Delta |             % | Samples | Caller              | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `equals(ATNConfig)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `getZipEntry(String, int)` (`java.util.zip.ZipFile`)

|  Change | Delta |             % | Samples | Caller             | Location                |
| ------: | ----: | ------------: | ------: | ------------------ | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getEntry(String)` | `java.util.zip.ZipFile` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301119400`)

|  Change | Delta |             % | Samples | Caller                                   | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(Pattern, CharSequence)` (`java.util.regex.Matcher`)

|  Change | Delta |             % | Samples | Caller                  | Location                  |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `matcher(CharSequence)` | `java.util.regex.Pattern` |

##### `hashCode(byte[])` (`java.lang.StringLatin1`)

|  Change | Delta |             % | Samples | Caller       | Location           |
| ------: | ----: | ------------: | ------: | ------------ | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hashCode()` | `java.lang.String` |

##### `hashCode()` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller              | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hash(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `findBootstrapClass(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                             | Location                |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller                     | Location                              |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301134400`)

|  Change | Delta |             % | Samples | Caller                           | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001102400` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010bd000` |

##### `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor$_initializeImportNames_closure4`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `checkMethods(ClassMetricResult)` (`org.codenarc.rule.size.AbstractMethodMetricAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301001000` |

##### `<init>()` (`org.codenarc.source.ExpressionCollector$ExpressionCollectorVisitor`)

|  Change | Delta |             % | Samples | Caller                          | Location                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(ExpressionCollector$1)` | `org.codenarc.source.ExpressionCollector$ExpressionCollectorVisitor` |

##### `getMethodCalls(ModuleNode)` (`org.codenarc.source.ExpressionCollector`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010bdc00` |

##### `<init>(SuppressionAnalyzer, Map, int)` (`org.codenarc.analyzer.SuppressionAnalyzer$1`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `createAggregateMetricResult(Collection, Integer)` (`org.gmetrics.result.MetricResultBuilder`)

|  Change | Delta |             % | Samples | Caller                         | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------ | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `call(Object, Object, Object)` | `org.gmetrics.result.MetricResultBuilder$createAggregateMetricResult` |

##### `getMetaClass()` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |             % | Samples | Caller                          | Location                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lookupObjectMetaClass(Object)` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |

##### `<init>(Metric, MetricLevel, Map, Integer, int)` (`org.gmetrics.result.NumberMetricResult`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object, Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001442000` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

|   Change | Delta |             % |   Samples | Function                                                                                      | Location                                             |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +1357.1% |   +95 |  2.8% → 32.3% |   7 → 102 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`  |
| +1620.0% |   +81 |  2.0% → 27.2% |    5 → 86 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000000301104000`  |
|  +750.0% |   +75 |  4.0% → 26.9% |   10 → 85 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`  |
| +7300.0% |   +73 |  0.4% → 23.4% |    1 → 74 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000003013d2000`  |
|   +27.1% |   +61 | 89.6% → 90.5% | 225 → 286 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| +6000.0% |   +60 |  0.4% → 19.3% |    1 → 61 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000030182f000`  |
|   +26.3% |   +59 | 89.2% → 89.6% | 224 → 283 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|   +25.6% |   +57 | 88.8% → 88.6% | 223 → 280 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|   +30.6% |   +55 | 71.7% → 74.4% | 180 → 235 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000301118400`  |
| +1833.3% |   +55 |  1.2% → 18.4% |    3 → 58 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000301140c00`  |
|  +166.7% |   +55 | 13.1% → 27.8% |   33 → 88 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`  |
|   +29.7% |   +54 | 72.5% → 74.7% | 182 → 236 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000301117800`  |
| +4900.0% |   +49 |  0.4% → 15.8% |    1 → 50 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000003010bc000`  |
|   +25.7% |   +45 | 69.7% → 69.6% | 175 → 220 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000301115400`  |
|   +25.7% |   +45 | 69.7% → 69.6% | 175 → 220 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
|   +33.1% |   +45 | 54.2% → 57.3% | 136 → 181 | `doMethodInvoke(Object, Object[])`                                                            | `groovy.lang.MetaMethod`                             |
|   +63.2% |   +43 | 27.1% → 35.1% |  68 → 111 | `invoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |
|   +30.2% |   +42 | 55.4% → 57.3% | 139 → 181 | `invoke(Object, Object[])`                                                                    | `org.codehaus.groovy.reflection.CachedMethod`        |
|   +28.3% |   +41 | 57.8% → 58.9% | 145 → 186 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                           |
|  +666.7% |   +40 |  2.4% → 14.6% |    6 → 46 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |

##### Ours

|  Change | Delta |             % | Samples | Function                                         | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
|  +38.3% |   +18 | 18.7% → 20.6% | 47 → 65 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  +26.7% |   +16 | 23.9% → 24.1% | 60 → 76 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                                             |
|  +25.0% |   +16 | 25.5% → 25.3% | 64 → 80 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                   |
|  +20.8% |   +15 | 28.7% → 27.5% | 72 → 87 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                                     |
|  +29.5% |   +13 | 17.5% → 18.0% | 44 → 57 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  +29.3% |   +12 | 16.3% → 16.8% | 41 → 53 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                                     |
|  +23.8% |   +10 | 16.7% → 16.5% | 42 → 52 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                             |
|  +20.5% |    +8 | 15.5% → 14.9% | 39 → 47 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  +17.9% |    +7 | 15.5% → 14.6% | 39 → 46 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  +13.2% |    +7 | 21.1% → 19.0% | 53 → 60 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                                       |
|  +87.5% |    +7 |   3.2% → 4.7% |  8 → 15 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |
|  +10.5% |    +6 | 22.7% → 19.9% | 57 → 63 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|  +35.3% |    +6 |   6.8% → 7.3% | 17 → 23 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                  |
|  +10.8% |    +4 | 14.7% → 13.0% | 37 → 41 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                                       |
| +200.0% |    +4 |   0.8% → 1.9% |   2 → 6 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                             |
| +400.0% |    +4 |   0.4% → 1.6% |   1 → 5 | `findReference(SourceCode, String, String)`      | `org.codenarc.rule.imports.UnusedImportRule`                                                 |
| +400.0% |    +4 |   0.4% → 1.6% |   1 → 5 | `visitVariableExpression(VariableExpression)`    | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
| +150.0% |    +3 |   0.8% → 1.6% |   2 → 5 | `doCall(Object)`                                 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
| +300.0% |    +3 |   0.4% → 1.3% |   1 → 4 | `doCall(Object)`                                 | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`                         |
| +300.0% |    +3 |   0.4% → 1.3% |   1 → 4 | `applyVisitor(AstVisitor, SourceCode)`           | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |             % | Samples | Function                                                                  | Location                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------- |
| -93.6% |   -73 |  31.1% → 1.6% |  78 → 5 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301104c00`  |
| -98.6% |   -72 |  29.1% → 0.3% |  73 → 1 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301148800`  |
| -90.5% |   -67 |  29.5% → 2.2% |  74 → 7 | `guard(Object, Object)`                                                   | `java.lang.invoke.LambdaForm$MH.0x0000000301136c00`  |
| -98.5% |   -66 |  26.7% → 0.3% |  67 → 1 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000030122c000`  |
| -98.0% |   -48 |  19.5% → 0.3% |  49 → 1 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000003014a1000`  |
| -94.9% |   -37 |  15.5% → 0.6% |  39 → 2 | `invokeVirtual(Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000003010bdc00` |
| -92.5% |   -37 |  15.9% → 0.9% |  40 → 3 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301105c00`  |
| -96.4% |   -27 |  11.2% → 0.3% |  28 → 1 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000003014d0400`  |
| -88.9% |   -24 |  10.8% → 0.9% |  27 → 3 | `invoke(Object, Object, Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000003012c1000`  |
| -55.8% |   -24 |  17.1% → 6.0% | 43 → 19 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000030138c800`  |
| -25.6% |   -23 | 35.9% → 21.2% | 90 → 67 | `invoke(Object, Object, Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000003012ac800`  |
| -94.4% |   -17 |   7.2% → 0.3% |  18 → 1 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000003015e7400`  |
| -25.8% |   -16 | 24.7% → 14.6% | 62 → 46 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x00000003013dbc00`  |
| -93.8% |   -15 |   6.4% → 0.3% |  16 → 1 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000003013c3c00`  |
| -92.9% |   -13 |   5.6% → 0.3% |  14 → 1 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000030158bc00`  |
| -60.0% |   -12 |   8.0% → 2.5% |  20 → 8 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301398000`  |
| -90.9% |   -10 |   4.4% → 0.3% |  11 → 1 | `invoke(Object, Object, Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301488000`  |
| -17.3% |    -9 | 20.7% → 13.6% | 52 → 43 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x00000003012c1c00`  |
| -54.5% |    -6 |   4.4% → 1.6% |  11 → 5 | `getNode(Object)`                                                         | `java.util.HashMap`                                  |
| -50.0% |    -6 |   4.8% → 1.9% |  12 → 6 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                  |

##### Ours

|  Change | Delta |           % | Samples | Function                                                        | Location                                                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `createAggregateMetricResult(Collection, Integer)`              | `org.gmetrics.result.MetricResultBuilder`                                                  |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `call(Object, Object, Object)`                                  | `org.gmetrics.result.MetricResultBuilder$createAggregateMetricResult`                      |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `createAggregateMetricResult(MetricLevel, Collection, ASTNode)` | `org.gmetrics.metric.AbstractMetric`                                                       |
|  -50.0% |    -2 | 1.6% → 0.6% |   4 → 2 | `doCall(Object)`                                                | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`                         |
|  -50.0% |    -2 | 1.6% → 0.6% |   4 → 2 | `calculateForClass(ClassNode, SourceCode)`                      | `org.gmetrics.metric.AbstractMethodMetric`                                                 |
|  -50.0% |    -2 | 1.6% → 0.6% |   4 → 2 | `applyToClass(ClassNode, SourceCode)`                           | `org.gmetrics.metric.AbstractMetric`                                                       |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `visitClass(ClassNode)`                                         | `org.codenarc.rule.AbstractMethodVisitor`                                                  |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `visitBlockStatement(BlockStatement)`                           | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`                      |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `getMethodCalls(ModuleNode)`                                    | `org.codenarc.source.ExpressionCollector`                                                  |
|  -50.0% |    -2 | 1.6% → 0.6% |   4 → 2 | `super$3$applyTo(SourceCode, List)`                             | `org.codenarc.rule.formatting.IndentationRule`                                             |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `doCall(Object)`                                                | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`         |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `visitClosureExpression(ClosureExpression)`                     | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`                            |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `doCall(Object)`                                                | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult$_addChildrenToAbcVector_closure2` |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `addChildrenToAbcVector(Object)`                                | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                                  |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `handleExpressionContainingOperation(Expression)`               | `org.gmetrics.metric.abc.AbcAstVisitor`                                                    |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `visitBinaryExpression(BinaryExpression)`                       | `org.gmetrics.metric.abc.AbcAstVisitor`                                                    |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `super$3$visitMethod(MethodNode)`                               | `org.gmetrics.metric.abc.AbcAstVisitor`                                                    |
|  -66.7% |    -2 | 1.2% → 0.3% |   3 → 1 | `visitMethodEx(MethodNode)`                                     | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                        |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `doCall(Object)`                                                | `org.codenarc.util.WildcardPattern$_closure1`                                              |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `getLines()`                                                    | `org.codenarc.source.AbstractSourceCode`                                                   |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301141000`)

|  Change | Delta |            % | Samples | Callee                             | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new |   +87 | 0.0% → 85.3% |  0 → 87 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301118000` |
|     new |   +15 | 0.0% → 14.7% |  0 → 15 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -5 | 71.4% → 0.0% |   5 → 0 | `reinvoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000009001103c00` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000009001105800` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301104000`)

|  Change | Delta |            % | Samples | Callee                     | Location                                            |
| ------: | ----: | -----------: | ------: | -------------------------- | --------------------------------------------------- |
|     new |   +80 | 0.0% → 93.0% |  0 → 80 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| +500.0% |    +5 | 20.0% → 7.0% |   1 → 6 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301103c00` |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000009001105800` |
|     new |    +1 |  0.0% → 1.2% |   0 → 1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000301104400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301150800`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new |   +85 | 0.0% → 100.0% |  0 → 85 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |    -6 |  60.0% → 0.0% |   6 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001118000` |
| removed |    -4 |  40.0% → 0.0% |   4 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003013d2000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +74 | 0.0% → 100.0% |  0 → 74 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001101c00` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|   Change | Delta |            % | Samples | Callee                   | Location                                            |
| -------: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------- |
| +1328.6% |   +93 | 3.1% → 35.0% | 7 → 100 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301141000` |
|   -93.6% |   -73 | 34.7% → 1.7% |  78 → 5 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301104c00` |
| +6000.0% |   +60 | 0.4% → 21.3% |  1 → 61 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030182f000` |
|   -98.0% |   -48 | 21.8% → 0.3% |  49 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003014a1000` |
|   -92.5% |   -37 | 17.8% → 1.0% |  40 → 3 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301105c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030182f000`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new |   +61 | 0.0% → 100.0% |  0 → 61 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000009001118800` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |              % |   Samples | Callee                                                  | Location                                        |
| -----: | ----: | -------------: | --------: | ------------------------------------------------------- | ----------------------------------------------- |
| +27.5% |   +61 | 99.1% → 100.0% | 222 → 283 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
|  +2.8% |    +1 |  16.1% → 13.1% |   36 → 37 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000003010b2800`)

| Change | Delta |             % |   Samples | Callee                                                                                           | Location                                        |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| +25.6% |   +57 |        100.0% | 223 → 280 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
| +19.6% |   +18 | 41.3% → 39.3% |  92 → 110 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|    new |    +1 |   0.0% → 0.4% |     0 → 1 | `internalMemberName(Object)`                                                                     | `java.lang.invoke.DirectMethodHandle`           |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301118400`)

|  Change | Delta |             % |   Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|  +37.4% |   +37 | 55.0% → 57.9% |  99 → 136 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  +32.4% |   +36 | 61.7% → 62.6% | 111 → 147 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301118000` |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000009001118800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301140c00`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +58 | 0.0% → 100.0% |  0 → 58 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010bd400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012d8000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +88 | 0.0% → 100.0% |  0 → 88 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000000301152800` |
| removed |   -33 | 100.0% → 0.0% |  33 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001101c00` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301117800`)

|   Change | Delta |             % | Samples | Callee                                    | Location                                             |
| -------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
|  removed |   -67 |  36.8% → 0.0% |  67 → 0 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000090012d1400`  |
|  +175.0% |   +56 | 17.6% → 37.3% | 32 → 88 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`  |
| +1766.7% |   +53 |  1.6% → 23.7% |  3 → 56 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000301140c00`  |
|   +33.3% |   +19 | 31.3% → 32.2% | 57 → 76 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010bd000` |
|   +46.4% |   +13 | 15.4% → 17.4% | 28 → 41 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000301117000`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010bc000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +45 |  0.0% → 90.0% |  0 → 45 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|     new |    +5 |  0.0% → 10.0% |   0 → 5 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000030109c000`  |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object)`                                                                  | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301115400`)

|  Change | Delta |           % |   Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ----------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +25.7% |   +45 |      100.0% | 175 → 220 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
| +200.0% |    +4 | 1.1% → 2.7% |     2 → 6 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301114c00`  |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % |   Samples | Callee                           | Location                                            |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------- |
| +25.4% |   +44 | 98.9% → 98.6% | 173 → 217 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301115400` |
| +33.3% |    +1 |   1.7% → 1.8% |     3 → 4 | `guard(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000000301118400` |

##### `doMethodInvoke(Object, Object[])` (`groovy.lang.MetaMethod`)

| Change | Delta |             % |   Samples | Callee                     | Location                                      |
| -----: | ----: | ------------: | --------: | -------------------------- | --------------------------------------------- |
| +32.8% |   +44 | 98.5% → 98.3% | 134 → 178 | `invoke(Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030113fc00`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +111 | 0.0% → 100.0% | 0 → 111 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000003010bd400` |
| removed |   -66 |  97.1% → 0.0% |  66 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2800` |
| removed |    -2 |   2.9% → 0.0% |   2 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000009001140000`  |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

| Change | Delta |      % |   Samples | Callee                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| +30.2% |   +42 | 100.0% | 139 → 181 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % |   Samples | Callee                     | Location                                          |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------- |
| +28.3% |   +41 | 100.0% | 145 → 186 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301101c00`)

|  Change | Delta |            % | Samples | Callee                                  | Location                                                          |
| ------: | ----: | -----------: | ------: | --------------------------------------- | ----------------------------------------------------------------- |
|     new |   +44 | 0.0% → 95.7% |  0 → 44 | `isRuleSuppressed(Rule)`                | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `getMethodCalls(ModuleNode)`            | `org.codenarc.source.ExpressionCollector`                         |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `loadClass(String)`                     | `java.lang.ClassLoader`                                           |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `getProperty(Object)`                   | `groovy.lang.MetaClassImpl$7`                                     |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `replaceNonPrintableCharacters(String)` | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------- |
| +200.0% |    +6 |  6.4% → 13.8% |   3 → 9 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000301394800`                  |
|  +60.0% |    +6 | 21.3% → 24.6% | 10 → 16 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                   |
|   +9.7% |    +3 | 66.0% → 52.3% | 31 → 34 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                   |
|     new |    +2 |   0.0% → 3.1% |   0 → 2 | `longUnbox(Object)`                              | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|  +33.3% |    +1 |   6.4% → 6.2% |   3 → 4 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000301390c00`                  |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Callee                      | Location                                                 |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------------------------------------- |
|  +18.0% |    +9 | 83.3% → 77.6% | 50 → 59 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
| +200.0% |    +4 |   3.3% → 7.9% |   2 → 6 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |
|  -33.3% |    -1 |   5.0% → 2.6% |   3 → 2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|     new |    +1 |   0.0% → 1.3% |   0 → 1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnusedImportRule`             |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |     % | Samples | Callee                                   | Location                           |
| -----: | ----: | ----: | ------: | ---------------------------------------- | ---------------------------------- |
| +25.0% |   +13 | 81.3% | 52 → 65 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +25.0% |    +3 | 18.8% | 12 → 15 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |             % | Samples | Callee                                                           | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
|  +14.9% |   +10 | 93.1% → 88.5% | 67 → 77 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| +200.0% |    +2 |   1.4% → 3.4% |   1 → 3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|     new |    +2 |   0.0% → 2.3% |   0 → 2 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  +25.0% |    +1 |   5.6% → 5.7% |   4 → 5 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % | Samples | Callee                                                               | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +44.4% |   +12 | 61.4% → 68.4% | 27 → 39 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
|  -7.1% |    -1 | 31.8% → 22.8% | 14 → 13 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
| +50.0% |    +1 |   4.5% → 5.3% |   2 → 3 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|    new |    +1 |   0.0% → 1.8% |   0 → 1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |      % | Samples | Callee                           | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------- |
| +29.3% |   +12 | 100.0% | 41 → 53 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |              % | Samples | Callee                                           | Location                           |
| -----: | ----: | -------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +21.4% |    +9 | 100.0% → 98.1% | 42 → 51 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |    0.0% → 1.9% |   0 → 1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |              % | Samples | Callee                                    | Location                                    |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | ------------------------------------------- |
|  +23.7% |    +9 | 97.4% → 100.0% | 38 → 47 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
| removed |    -1 |    2.6% → 0.0% |   1 → 0 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |      % | Samples | Callee   | Location                                    |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------- |
| +17.9% |    +7 | 100.0% | 39 → 46 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                    | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------------- |
|  +24.3% |    +9 | 69.8% → 76.7% | 37 → 46 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| +200.0% |    +2 |   1.9% → 5.0% |   1 → 3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`   |
| removed |    -2 |   3.8% → 0.0% |   2 → 0 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor`                  |
|  -25.0% |    -1 |   7.5% → 5.0% |   4 → 3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`               |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------- |
| +300.0% |    +3 |   1.8% → 6.3% |   1 → 4 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|   +3.8% |    +2 | 91.2% → 85.7% | 52 → 54 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| removed |    -2 |   3.5% → 0.0% |   2 → 0 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  +50.0% |    +1 |   3.5% → 4.8% |   2 → 3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|     new |    +1 |   0.0% → 1.6% |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`                |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|  Change | Delta |             % | Samples | Callee                                                   | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| +200.0% |    +4 | 11.8% → 26.1% |   2 → 6 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  +21.4% |    +3 | 82.4% → 73.9% | 14 → 17 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                      | Location                                                                       |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------------------------------------ |
|  +13.3% |    +4 | 81.1% → 82.9% | 30 → 34 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                              |
|  -66.7% |    -2 |   8.1% → 2.4% |   3 → 1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`            |
| removed |    -1 |   2.7% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor` |
| removed |    -1 |   2.7% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
| removed |    -1 |   2.7% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ToStringReturnsNullAstVisitor`                       |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|  Change | Delta |             % | Samples | Callee                                 | Location                                          |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------------------------- |
| +300.0% |    +3 | 50.0% → 66.7% |   1 → 4 | `applyVisitor(AstVisitor, SourceCode)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`  |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `getAstVisitor(SourceCode)`            | `org.codenarc.rule.unused.UnusedPrivateFieldRule` |

##### `findReference(SourceCode, String, String)` (`org.codenarc.rule.imports.UnusedImportRule`)

|  Change | Delta |      % | Samples | Callee                                   | Location                           |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

| Change | Delta |            % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `linkToCallSite(Object, int, Object)`    | `java.lang.invoke.Invokers$Holder` |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1`)

| Change | Delta |              % | Samples | Callee                                           | Location                           |
| -----: | ----: | -------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|    new |    +2 |   0.0% → 40.0% |   0 → 2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| +50.0% |    +1 | 100.0% → 60.0% |   2 → 3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`)

|  Change | Delta |              % | Samples | Callee                                           | Location                                                             |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                   |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301134800`                  |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `booleanUnbox(Object)`                           | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|  Change | Delta |      % | Samples | Callee                  | Location                               |
| ------: | ----: | -----: | ------: | ----------------------- | -------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301104c00`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
| removed |   -61 |  78.2% → 0.0% |  61 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001118000` |
| removed |   -18 |  23.1% → 0.0% |  18 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `reinvoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301103c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301148800`)

|  Change | Delta |             % | Samples | Callee                          | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------- | --------------------------------------------------- |
| removed |   -73 | 100.0% → 0.0% |  73 → 0 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `reinvoke(Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x0000000301136800` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301136c00`)

|  Change | Delta |             % | Samples | Callee                           | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
|  -95.5% |   -63 | 89.2% → 42.9% |  66 → 3 | `delegate(Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  -80.0% |    -4 |  6.8% → 14.3% |   5 → 1 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000000301136800` |
|     new |    +4 |  0.0% → 57.1% |   0 → 4 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301105800` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000009001104400` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `profileBoolean(boolean, int[])` | `java.lang.invoke.MethodHandleImpl`                 |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030122c000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |   -67 | 100.0% → 0.0% |  67 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000009001152800` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003014a1000`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed |   -49 | 100.0% → 0.0% |  49 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000003010bdc00`)

|  Change | Delta |            % | Samples | Callee                           | Location                                                          |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| removed |   -38 | 97.4% → 0.0% |  38 → 0 | `isRuleSuppressed(Rule)`         | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| removed |    -1 |  2.6% → 0.0% |   1 → 0 | `isNotAnInterface(ClassNode)`    | `org.gmetrics.metric.AbstractMetric`                              |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `lastSourceLineOrEmpty(ASTNode)` | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `call(Object)`                   | `groovy.lang.Closure`                                             |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301105c00`)

|  Change | Delta |            % | Samples | Callee                                     | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed |   -39 | 97.5% → 0.0% |  39 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000900118d000` |
| removed |    -1 |  2.5% → 0.0% |   1 → 0 | `profileBoolean(boolean, int[])`           | `java.lang.invoke.MethodHandleImpl`                 |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `reinvoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301103c00` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `delegate(Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000000301105800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003014d0400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| removed |   -28 | 100.0% → 0.0% |  28 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeInterface(Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x0000000301099400` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012c1000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -26 |  96.3% → 0.0% |  26 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2800` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000009001140000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030138c800`)

| Change | Delta |      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -55.8% |   -24 | 100.0% | 43 → 19 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012ac800`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -90 | 100.0% → 0.0% |  90 → 0 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010bd400` |
|     new |   +63 |  0.0% → 94.0% |  0 → 63 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x000000030138cc00` |
|     new |    +4 |   0.0% → 6.0% |   0 → 4 | `invokeSpecial(Object, Object, Object, Object)`           | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003015e7400`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
| removed |   -18 | 100.0% → 0.0% |  18 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003013dbc00`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -62 | 100.0% → 0.0% |  62 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +46 | 0.0% → 100.0% |  0 → 46 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003013c3c00`)

|  Change | Delta |             % | Samples | Callee                                          | Location                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| removed |   -12 |  75.0% → 0.0% |  12 → 0 | `delegate(Object, Object, Object, Object)`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -4 |  25.0% → 0.0% |   4 → 0 | `reinvoke(Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x000000900118d000` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `delegate(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x0000000301143400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030158bc00`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |   -14 | 100.0% → 0.0% |  14 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301398000`)

|  Change | Delta |            % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -19 | 95.0% → 0.0% |  19 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2800` |
|     new |    +7 | 0.0% → 87.5% |   0 → 7 | `reinvoke(Object, Object, Object, long)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301396800`  |
| removed |    -1 |  5.0% → 0.0% |   1 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000900109c000`  |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301170000`  |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301488000`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| removed |   -11 | 100.0% → 0.0% |  11 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000900113fc00`  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000301002400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012c1c00`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| removed |   -52 | 100.0% → 0.0% |  52 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000900113fc00`  |
|     new |   +42 |  0.0% → 97.7% |  0 → 42 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |
|     new |    +1 |   0.0% → 2.3% |   0 → 1 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x0000000301004800` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee           | Location                                                       |
| ------: | ----: | -----------: | ------: | ---------------- | -------------------------------------------------------------- |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `hash(Object)`   | `java.util.HashMap`                                            |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `equals(Object)` | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Callee                                                              | Location                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -5 |  41.7% → 0.0% |   5 → 0 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`       |
|  -66.7% |    -2 | 25.0% → 16.7% |   3 → 1 | `bindTo(Object)`                                                    | `java.lang.invoke.MethodHandle`           |
|  -50.0% |    -1 |         16.7% |   2 → 1 | `filterArgumentForm(int, LambdaForm$BasicType)`                     | `java.lang.invoke.LambdaFormEditor`       |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `viewAsType(MethodType, boolean)`                                   | `java.lang.invoke.DelegatingMethodHandle` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `viewAsType(MethodType, boolean)`                                   | `java.lang.invoke.MethodHandle`           |

##### `createAggregateMetricResult(Collection, Integer)` (`org.gmetrics.result.MetricResultBuilder`)

|  Change | Delta |            % | Samples | Callee                                                  | Location                                  |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------- | ----------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `createAggregateMetricResult(Collection, Integer, Map)` | `org.gmetrics.result.MetricResultBuilder` |

##### `call(Object, Object, Object)` (`org.gmetrics.result.MetricResultBuilder$createAggregateMetricResult`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `createAggregateMetricResult(Collection, Integer)` | `org.gmetrics.result.MetricResultBuilder` |

##### `createAggregateMetricResult(MetricLevel, Collection, ASTNode)` (`org.gmetrics.metric.AbstractMetric`)

|  Change | Delta |             % | Samples | Callee                         | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------ | --------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `call(Object, Object, Object)` | `org.gmetrics.result.MetricResultBuilder$createAggregateMetricResult` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|  Change | Delta |              % | Samples | Callee                                   | Location                           |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `calculateForClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`)

|  Change | Delta |              % | Samples | Callee                                              | Location                                                |
| ------: | ----: | -------------: | ------: | --------------------------------------------------- | ------------------------------------------------------- |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `callCurrent(GroovyObject, Object)`                 | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `callCurrent(GroovyObject, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `applyToClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMetric`)

| Change | Delta |      % | Samples | Callee                                      | Location                                                |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `callCurrent(GroovyObject, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodVisitor`)

|  Change | Delta |            % | Samples | Callee                    | Location                                                              |
| ------: | ----: | -----------: | ------: | ------------------------- | --------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `visitMethod(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryOverridingMethodAstVisitor` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `visitMethod(MethodNode)` | `org.codenarc.rule.naming.MethodNameAstVisitor`                       |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`)

|  Change | Delta |            % | Samples | Callee                                   | Location                           |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getMethodCalls(ModuleNode)` (`org.codenarc.source.ExpressionCollector`)

|  Change | Delta |            % | Samples | Callee                          | Location                                                             |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>(ExpressionCollector$1)` | `org.codenarc.source.ExpressionCollector$ExpressionCollectorVisitor` |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

| Change | Delta |      % | Samples | Callee                      | Location                                   |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------------------ |
| -50.0% |    -2 | 100.0% |   4 → 2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`)

|  Change | Delta |            % | Samples | Callee                                           | Location                           |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`)

|  Change | Delta |            % | Samples | Callee                                   | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000009001134800` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `doCall(Object)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult$_addChildrenToAbcVector_closure2`)

|  Change | Delta |            % | Samples | Callee                                | Location                                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------- | ------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `callGroovyObjectGetProperty(Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`             |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `callGetProperty(Object)`             | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite` |

##### `addChildrenToAbcVector(Object)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|  Change | Delta |             % | Samples | Callee                 | Location                                                |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `call(Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `handleExpressionContainingOperation(Expression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change | Delta |            % | Samples | Callee                              | Location                                                |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `callGetProperty(Object)`           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `callCurrent(GroovyObject, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `visitBinaryExpression(BinaryExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change | Delta |             % | Samples | Callee                              | Location                                                |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `callCurrent(GroovyObject, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `super$3$visitMethod(MethodNode)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change | Delta |             % | Samples | Callee                    | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change | Delta |      % | Samples | Callee                                                   | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_closure1`)

|  Change | Delta |             % | Samples | Callee                                   | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |             % | Samples | Callee                           | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

# Allocated heap profile diff

Allocated 12 GiB (+36.129 MiB, +0.3%) over 6,335 samples → 6,337 samples (1.93 MiB → 1.94 MiB per sample).

| Category         | Change |       Delta |     % |                Size |       Samples |
| ---------------- | -----: | ----------: | ----: | ------------------: | ------------: |
| Standard library |  +0.2% | +28.179 MiB | 99.1% |            11.9 GiB | 6,234 → 6,228 |
| Ours             |  +7.4% |  +7.951 MiB |  0.9% |   107 MiB → 115 MiB |       52 → 57 |
| Unknown          |  -2.9% |  -1.093 KiB | <0.1% | 37.8 KiB → 36.8 KiB |       49 → 52 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|   Change |        Delta |            % |                Size |   Samples | Function                                                                                      | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   +22.6% | +103.969 MiB |  3.7% → 4.6% |   460 MiB → 563 MiB | 178 → 212 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                        |
|   +16.2% |  +94.339 MiB |  4.8% → 5.5% |   584 MiB → 678 MiB | 291 → 349 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|   +11.5% |  +80.317 MiB |  5.7% → 6.3% |   699 MiB → 779 MiB | 355 → 396 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                              |
|   +26.2% |  +54.988 MiB |  1.7% → 2.2% |   210 MiB → 265 MiB | 102 → 132 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
| +1300.0% |  +51.972 MiB | <0.1% → 0.5% |      4 MiB → 56 MiB |     2 → 4 | `write(String, int, int)`                                                                     | `sun.nio.cs.StreamEncoder`                                 |
|   +84.1% |  +45.404 MiB |  0.4% → 0.8% |   54 MiB → 99.4 MiB |   27 → 28 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|   +22.3% |  +39.914 MiB |  1.5% → 1.8% |   179 MiB → 219 MiB |  89 → 111 | `allocateInstance(Object)`                                                                    | `java.lang.invoke.DirectMethodHandle`                      |
|   +63.4% |  +34.631 MiB |  0.4% → 0.7% | 54.6 MiB → 89.2 MiB |   51 → 75 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                                         |
|   +34.8% |  +27.695 MiB |  0.7% → 0.9% |  79.7 MiB → 107 MiB |   39 → 54 | `newHashMap(int)`                                                                             | `java.util.HashMap`                                        |
|   +42.1% |  +27.428 MiB |  0.5% → 0.8% | 65.2 MiB → 92.6 MiB |   34 → 46 | `map(Function)`                                                                               | `java.util.stream.ReferencePipeline`                       |
|    +8.7% |  +21.233 MiB |  2.0% → 2.1% |   243 MiB → 264 MiB | 126 → 133 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                           |
|   +17.1% |   +20.47 MiB |  1.0% → 1.1% |   119 MiB → 140 MiB |   61 → 73 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |
|   +34.5% |  +18.474 MiB |  0.4% → 0.6% |   53.5 MiB → 72 MiB |   27 → 37 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                  | `java.math.MutableBigInteger`                              |
|   +42.6% |  +15.862 MiB |  0.3% → 0.4% | 37.2 MiB → 53.1 MiB |   20 → 27 | `copyOf(int[], int)`                                                                          | `java.util.Arrays`                                         |
|   +13.0% |  +15.802 MiB |  1.0% → 1.1% |   121 MiB → 137 MiB |   62 → 69 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                              |
|   +71.3% |  +14.971 MiB |  0.2% → 0.3% |     21 MiB → 36 MiB |   10 → 18 | `removeRealReceiver(Object[])`                                                                | `org.codehaus.groovy.vmplugin.v8.Selector`                 |
|   +50.1% |  +14.928 MiB |  0.2% → 0.4% | 29.8 MiB → 44.8 MiB |   16 → 23 | `builder(long, IntFunction)`                                                                  | `java.util.stream.Nodes`                                   |
|  +700.0% |  +13.993 MiB | <0.1% → 0.1% |      2 MiB → 16 MiB |     1 → 2 | `createPogoCallSite(CallSite, Object[])`                                                      | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`   |
|  +233.3% |   +13.99 MiB | <0.1% → 0.2% |      6 MiB → 20 MiB |     3 → 9 | `equals(ArrayPredictionContext, Set)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|   +92.0% |   +13.02 MiB |  0.1% → 0.2% | 14.2 MiB → 27.2 MiB |   10 → 17 | `enlarge(int)`                                                                                | `jdk.internal.org.objectweb.asm.ByteVector`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |           % |                Size |   Samples | Function                                                               | Location                                              |
| -----: | ----------: | ----------: | ------------------: | --------: | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| -68.2% | -68.691 MiB | 0.8% → 0.3% |    101 MiB → 32 MiB |   25 → 19 | `copy()`                                                               | `java.lang.reflect.Method`                            |
| -16.2% | -62.422 MiB | 3.1% → 2.6% |   385 MiB → 323 MiB | 197 → 163 | `make(MethodType, LambdaForm, Object, Object)`                         | `java.lang.invoke.BoundMethodHandle$Species_LL`       |
| -22.0% | -57.759 MiB | 2.1% → 1.7% |   263 MiB → 205 MiB | 134 → 103 | `insertParameterTypes(int, Class[])`                                   | `java.lang.invoke.MethodType`                         |
| -31.2% | -48.471 MiB | 1.3% → 0.9% |   155 MiB → 107 MiB |   77 → 55 | `of(byte, int)`                                                        | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -26.5% | -48.301 MiB | 1.5% → 1.1% |   182 MiB → 134 MiB |   93 → 71 | `valueOf(long)`                                                        | `java.lang.Long`                                      |
| -18.8% | -43.476 MiB | 1.9% → 1.5% |   232 MiB → 188 MiB |  117 → 97 | `compile()`                                                            | `java.util.regex.Pattern`                             |
| -11.9% | -42.901 MiB | 2.9% → 2.6% |   359 MiB → 316 MiB | 179 → 155 | `newArray(Class, int)`                                                 | `java.lang.reflect.Array`                             |
| -21.2% | -35.063 MiB | 1.3% → 1.1% |   165 MiB → 130 MiB |   85 → 65 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`    |
| -25.7% | -34.064 MiB | 1.1% → 0.8% |  133 MiB → 98.6 MiB |   67 → 49 | `make(MethodType, LambdaForm, Object, Object, Object)`                 | `java.lang.invoke.BoundMethodHandle$Species_LLL`      |
|  -9.4% | -34.059 MiB | 2.9% → 2.7% |   361 MiB → 327 MiB | 181 → 170 | `newInstance(Class, int)`                                              | `java.lang.reflect.Array`                             |
| -34.7% | -24.123 MiB | 0.6% → 0.4% | 69.5 MiB → 45.4 MiB |   34 → 24 | `copyOf(Object[], int)`                                                | `java.util.Arrays`                                    |
| -42.0% | -22.465 MiB | 0.4% → 0.3% |   53.5 MiB → 31 MiB |   27 → 15 | `grow(int)`                                                            | `java.util.ArrayList`                                 |
|  -6.9% | -20.966 MiB | 2.5% → 2.3% |   305 MiB → 284 MiB | 157 → 142 | `lambdaFormEditor(LambdaForm)`                                         | `java.lang.invoke.LambdaFormEditor`                   |
| -68.4% | -19.128 MiB | 0.2% → 0.1% |   28 MiB → 8.86 MiB |    14 → 5 | `call(Object)`                                                         | `groovy.lang.Closure`                                 |
| -44.3% | -17.499 MiB | 0.3% → 0.2% |   39.5 MiB → 22 MiB |   20 → 11 | `basicTypesOrd(Class[])`                                               | `java.lang.invoke.LambdaForm$BasicType`               |
| -30.1% | -16.391 MiB | 0.4% → 0.3% |   54.4 MiB → 38 MiB |   27 → 16 | `of(byte, int, int, int)`                                              | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -34.0% | -15.877 MiB | 0.4% → 0.3% | 46.7 MiB → 30.8 MiB |   23 → 17 | `getParameterTypes()`                                                  | `java.lang.reflect.Method`                            |
| -16.1% | -15.478 MiB | 0.8% → 0.7% |   96 MiB → 80.5 MiB |   47 → 39 | `<init>(Pattern, CharSequence)`                                        | `java.util.regex.Matcher`                             |
| -64.3% | -14.802 MiB | 0.2% → 0.1% |   23 MiB → 8.21 MiB |    12 → 5 | `getChild(int)`                                                        | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| -31.5% | -14.152 MiB | 0.4% → 0.3% |   45 MiB → 30.8 MiB |   21 → 16 | `<init>(MethodHandle, MethodHandle, boolean)`                          | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |        Delta |      % |              Size |   Samples | Location                                |
| -----: | -----------: | -----: | ----------------: | --------: | --------------------------------------- |
| +22.6% | +103.969 MiB | 100.0% | 460 MiB → 563 MiB | 178 → 212 | `java.lang.invoke.MethodHandleImpl:667` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |              Size |   Samples | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------------- |
| +16.2% | +94.339 MiB | 100.0% | 584 MiB → 678 MiB | 291 → 349 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:293` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |   Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- |
| +11.5% | +80.317 MiB | 100.0% | 699 MiB → 779 MiB | 355 → 396 | `java.lang.invoke.MethodType:400` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change |       Delta |             % |                Size |  Samples | Location                                          |
| ------: | ----------: | ------------: | ------------------: | -------: | ------------------------------------------------- |
|  +23.2% | +45.033 MiB | 92.2% → 90.1% |   194 MiB → 239 MiB | 93 → 119 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:232` |
| +141.7% | +15.381 MiB |   5.2% → 9.9% | 10.9 MiB → 26.2 MiB |   6 → 13 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:225` |
| removed |  -5.426 MiB |   2.6% → 0.0% |      5.43 MiB → 0 B |    3 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:229` |

##### `write(String, int, int)` (`sun.nio.cs.StreamEncoder`)

|   Change |       Delta |      % |           Size | Samples | Location                       |
| -------: | ----------: | -----: | -------------: | ------: | ------------------------------ |
| +1300.0% | +51.972 MiB | 100.0% | 4 MiB → 56 MiB |   2 → 4 | `sun.nio.cs.StreamEncoder:165` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |              Size | Samples | Location                                            |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------------------- |
| +84.1% | +45.404 MiB | 100.0% | 54 MiB → 99.4 MiB | 27 → 28 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:362` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |      % |              Size |  Samples | Location                                  |
| -----: | ----------: | -----: | ----------------: | -------: | ----------------------------------------- |
| +22.3% | +39.914 MiB | 100.0% | 179 MiB → 219 MiB | 89 → 111 | `java.lang.invoke.DirectMethodHandle:501` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Samples | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| +63.4% | +34.631 MiB | 100.0% | 54.6 MiB → 89.2 MiB | 51 → 75 | `java.util.Arrays:3541` |

##### `newHashMap(int)` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Location                 |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------ |
| +34.8% | +27.695 MiB | 100.0% | 79.7 MiB → 107 MiB | 39 → 54 | `java.util.HashMap:2584` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |                Size | Samples | Location                                 |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------------------------- |
| +42.1% | +27.428 MiB | 100.0% | 65.2 MiB → 92.6 MiB | 34 → 46 | `java.util.stream.ReferencePipeline:190` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |      % |              Size |   Samples | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------- |
|  +8.7% | +21.233 MiB | 100.0% | 243 MiB → 264 MiB | 126 → 133 | `java.util.stream.StreamSupport:69` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |       Delta |             % |                Size | Samples | Location                                                  |
| -----: | ----------: | ------------: | ------------------: | ------: | --------------------------------------------------------- |
| +27.2% | +13.379 MiB | 41.2% → 44.7% | 49.1 MiB → 62.5 MiB | 25 → 33 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:159` |
| +15.6% |  +9.089 MiB | 48.8% → 48.2% | 58.2 MiB → 67.3 MiB | 30 → 35 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:160` |
| -16.7% |  -1.999 MiB |  10.0% → 7.1% |     12 MiB → 10 MiB |   6 → 5 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:227` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change |       Delta |              % |              Size | Samples | Location                           |
| -----: | ----------: | -------------: | ----------------: | ------: | ---------------------------------- |
| +30.8% | +16.475 MiB | 100.0% → 97.2% | 53.5 MiB → 70 MiB | 27 → 36 | `java.math.MutableBigInteger:1211` |
|    new |  +1.999 MiB |    0.0% → 2.8% |       0 B → 2 MiB |   0 → 1 | `java.math.MutableBigInteger:1212` |

##### `copyOf(int[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Samples | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| +42.6% | +15.862 MiB | 100.0% | 37.2 MiB → 53.1 MiB | 20 → 27 | `java.util.Arrays:3595` |

##### `<init>()` (`java.math.MutableBigInteger`)

| Change |       Delta |      % |              Size | Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------- |
| +13.0% | +15.802 MiB | 100.0% | 121 MiB → 137 MiB | 62 → 69 | `java.math.MutableBigInteger:103` |

##### `removeRealReceiver(Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

| Change |       Delta |      % |            Size | Samples | Location                                        |
| -----: | ----------: | -----: | --------------: | ------: | ----------------------------------------------- |
| +71.3% | +14.971 MiB | 100.0% | 21 MiB → 36 MiB | 10 → 18 | `org.codehaus.groovy.vmplugin.v8.Selector:1098` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |       Delta |      % |                Size | Samples | Location                     |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------------- |
| +50.1% | +14.928 MiB | 100.0% | 29.8 MiB → 44.8 MiB | 16 → 23 | `java.util.stream.Nodes:168` |

##### `createPogoCallSite(CallSite, Object[])` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

|  Change |       Delta |      % |           Size | Samples | Location                                                     |
| ------: | ----------: | -----: | -------------: | ------: | ------------------------------------------------------------ |
| +700.0% | +13.993 MiB | 100.0% | 2 MiB → 16 MiB |   1 → 2 | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass:682` |

##### `equals(ArrayPredictionContext, Set)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|  Change |      Delta |      % |           Size | Samples | Location                                                       |
| ------: | ---------: | -----: | -------------: | ------: | -------------------------------------------------------------- |
| +233.3% | +13.99 MiB | 100.0% | 6 MiB → 20 MiB |   3 → 9 | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext:187` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |      Delta |      % |                Size | Samples | Location                                        |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------- |
| +92.0% | +13.02 MiB | 100.0% | 14.2 MiB → 27.2 MiB | 10 → 17 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `copy()` (`java.lang.reflect.Method`)

| Change |       Delta |      % |             Size | Samples | Location                       |
| -----: | ----------: | -----: | ---------------: | ------: | ------------------------------ |
| -68.2% | -68.691 MiB | 100.0% | 101 MiB → 32 MiB | 25 → 19 | `java.lang.reflect.Method:165` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |   Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- |
| -22.0% | -57.759 MiB | 100.0% | 263 MiB → 205 MiB | 134 → 103 | `java.lang.invoke.MethodType:500` |

##### `of(byte, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size | Samples | Location                                             |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------------------- |
| -31.2% | -48.471 MiB | 100.0% | 155 MiB → 107 MiB | 77 → 55 | `java.lang.invoke.LambdaFormEditor$TransformKey:177` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |      % |              Size | Samples | Location              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------- |
| -26.5% | -48.301 MiB | 100.0% | 182 MiB → 134 MiB | 93 → 71 | `java.lang.Long:1207` |

##### `compile()` (`java.util.regex.Pattern`)

| Change |       Delta |             % |                Size | Samples | Location                       |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------ |
| -40.8% | -42.193 MiB | 44.6% → 32.5% |  103 MiB → 61.3 MiB | 53 → 32 | `java.util.regex.Pattern:1934` |
| -66.7% | -11.994 MiB |   7.8% → 3.2% |      18 MiB → 6 MiB |   9 → 3 | `java.util.regex.Pattern:1937` |
| +26.3% | +11.167 MiB | 18.4% → 28.5% | 42.5 MiB → 53.7 MiB | 21 → 29 | `java.util.regex.Pattern:1935` |
| -77.5% |  -4.648 MiB |   2.6% → 0.7% |    6 MiB → 1.35 MiB |   3 → 1 | `java.util.regex.Pattern:1967` |
|  +7.0% |  +4.191 MiB | 25.8% → 34.0% |   59.8 MiB → 64 MiB | 30 → 31 | `java.util.regex.Pattern:1915` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Location                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------- |
|  -9.4% | -34.059 MiB | 100.0% | 361 MiB → 327 MiB | 181 → 170 | `java.lang.reflect.Array:78` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Samples | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| -34.7% | -24.123 MiB | 100.0% | 69.5 MiB → 45.4 MiB | 34 → 24 | `java.util.Arrays:3482` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size | Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------- |
| -42.0% | -22.465 MiB | 100.0% | 53.5 MiB → 31 MiB | 27 → 15 | `java.util.ArrayList:239` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

| Change |       Delta |      % |              Size |   Samples | Location                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------- |
|  -6.9% | -20.966 MiB | 100.0% | 305 MiB → 284 MiB | 157 → 142 | `java.lang.invoke.LambdaFormEditor:61` |

##### `call(Object)` (`groovy.lang.Closure`)

| Change |       Delta |      % |              Size | Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------- |
| -68.4% | -19.128 MiB | 100.0% | 28 MiB → 8.86 MiB |  14 → 5 | `groovy.lang.Closure:422` |

##### `basicTypesOrd(Class[])` (`java.lang.invoke.LambdaForm$BasicType`)

| Change |       Delta |      % |              Size | Samples | Location                                    |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------- |
| -44.3% | -17.499 MiB | 100.0% | 39.5 MiB → 22 MiB | 20 → 11 | `java.lang.invoke.LambdaForm$BasicType:211` |

##### `of(byte, int, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size | Samples | Location                                             |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------------------- |
| -30.1% | -16.391 MiB | 100.0% | 54.4 MiB → 38 MiB | 27 → 16 | `java.lang.invoke.LambdaFormEditor$TransformKey:189` |

##### `getParameterTypes()` (`java.lang.reflect.Method`)

| Change |       Delta |      % |                Size | Samples | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------ |
| -34.0% | -15.877 MiB | 100.0% | 46.7 MiB → 30.8 MiB | 23 → 17 | `java.lang.reflect.Method:318` |

##### `<init>(Pattern, CharSequence)` (`java.util.regex.Matcher`)

| Change |      Delta |             % |              Size | Samples | Location                      |
| -----: | ---------: | ------------: | ----------------: | ------: | ----------------------------- |
| -66.7% | -7.996 MiB |  12.5% → 5.0% |    12 MiB → 4 MiB |   6 → 2 | `java.util.regex.Matcher:252` |
|  -7.8% | -5.472 MiB | 72.9% → 80.1% | 70 MiB → 64.5 MiB | 34 → 31 | `java.util.regex.Matcher:251` |
| -14.4% |  -2.01 MiB | 14.6% → 14.9% |   14 MiB → 12 MiB |   7 → 6 | `java.util.regex.Matcher:253` |

##### `getChild(int)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |       Delta |      % |              Size | Samples | Location                                                  |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------------------------- |
| -64.3% | -14.802 MiB | 100.0% | 23 MiB → 8.21 MiB |  12 → 5 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:303` |

##### `<init>(MethodHandle, MethodHandle, boolean)` (`org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper`)

| Change |       Delta |      % |              Size | Samples | Location                                                 |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------- |
| -31.5% | -14.152 MiB | 100.0% | 45 MiB → 30.8 MiB | 21 → 16 | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper:33` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |        Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | -----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
| +22.6% | +103.969 MiB | 100.0% | 460 MiB → 563 MiB | 178 → 212 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                                      | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +16.2% | +94.339 MiB | 100.0% | 584 MiB → 678 MiB | 291 → 349 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |       Delta |             % |                Size |   Samples | Caller                                | Location                      |
| ------: | ----------: | ------------: | ------------------: | --------: | ------------------------------------- | ----------------------------- |
|  +20.2% |  +64.27 MiB | 45.6% → 49.1% |   318 MiB → 383 MiB | 164 → 192 | `insertParameterTypes(int, Class[])`  | `java.lang.invoke.MethodType` |
|  +42.2% | +17.353 MiB |   5.9% → 7.5% | 41.1 MiB → 58.5 MiB |   21 → 31 | `methodType(Class, Class)`            | `java.lang.invoke.MethodType` |
|   -1.0% |  -3.305 MiB | 48.3% → 42.9% |   337 MiB → 334 MiB | 169 → 171 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |
| +100.0% |  +1.998 MiB |   0.3% → 0.5% |       2 MiB → 4 MiB |     1 → 2 | `changeParameterType(int, Class)`     | `java.lang.invoke.MethodType` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change |       Delta |             % |              Size |  Samples | Caller                                              | Location                                      |
| -----: | ----------: | ------------: | ----------------: | -------: | --------------------------------------------------- | --------------------------------------------- |
| +48.9% | +70.579 MiB | 68.8% → 81.1% | 144 MiB → 215 MiB | 74 → 107 | `transform(ATNState, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
| -21.7% | -12.163 MiB | 26.7% → 16.6% | 56.1 MiB → 44 MiB |  23 → 22 | `transform(ATNState, PredictionContext, boolean)`   | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
| -36.4% |  -3.427 MiB |   4.5% → 2.3% |  9.42 MiB → 6 MiB |    5 → 3 | `transform(ATNState, LexerActionExecutor, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `write(String, int, int)` (`sun.nio.cs.StreamEncoder`)

|   Change |       Delta |      % |           Size | Samples | Caller                    | Location                     |
| -------: | ----------: | -----: | -------------: | ------: | ------------------------- | ---------------------------- |
| +1300.0% | +51.972 MiB | 100.0% | 4 MiB → 56 MiB |   2 → 4 | `write(String, int, int)` | `java.io.OutputStreamWriter` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change |       Delta |             % |              Size | Samples | Caller                                                                                           | Location                                        |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| +240.0% | +47.976 MiB | 37.0% → 68.4% |   20 MiB → 68 MiB | 10 → 12 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   -7.6% |  -2.571 MiB | 63.0% → 31.6% | 34 MiB → 31.4 MiB | 17 → 16 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |       Delta |             % |              Size |  Samples | Caller                                     | Location                                             |
| ------: | ----------: | ------------: | ----------------: | -------: | ------------------------------------------ | ---------------------------------------------------- |
|  +33.2% | +50.038 MiB | 84.3% → 91.8% | 151 MiB → 201 MiB | 75 → 101 | `newInvokeSpecial(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -5.997 MiB |   3.4% → 0.0% |       6 MiB → 0 B |    3 → 0 | `newInvokeSpecial(Object)`                 | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -34.4% |  -4.127 MiB |   6.7% → 3.6% | 12 MiB → 7.87 MiB |    6 → 5 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -25.0% |  -1.999 MiB |   4.5% → 2.7% |     8 MiB → 6 MiB |    4 → 3 | `newInvokeSpecial(Object, int)`            | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +1.999 MiB |   0.0% → 0.9% |       0 B → 2 MiB |    0 → 1 | `newInvokeSpecial(Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x0000000301707800` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size | Samples | Caller                        | Location                          |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| +76.3% | +28.927 MiB | 69.4% → 74.9% | 37.9 MiB → 66.8 MiB | 29 → 48 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
| +34.1% |  +5.704 MiB | 30.6% → 25.1% | 16.7 MiB → 22.4 MiB | 22 → 27 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `newHashMap(int)` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Caller                                                                    | Location                            |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| +34.8% | +27.695 MiB | 100.0% | 79.7 MiB → 107 MiB | 39 → 54 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |              % |                Size | Samples | Caller                                                          | Location                                                  |
| -----: | ----------: | -------------: | ------------------: | ------: | --------------------------------------------------------------- | --------------------------------------------------------- |
| +40.3% | +26.285 MiB | 100.0% → 98.8% | 65.2 MiB → 91.5 MiB | 34 → 45 | `setGuards(Object)`                                             | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|    new |  +1.142 MiB |    0.0% → 1.2% |      0 B → 1.14 MiB |   0 → 1 | `visitCommandExpression(GroovyParser$CommandExpressionContext)` | `org.apache.groovy.parser.antlr4.AstBuilder`              |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |             % |                Size |   Samples | Caller                       | Location               |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------------- | ---------------------- |
|  +5.9% | +13.891 MiB | 96.6% → 94.1% |   235 MiB → 248 MiB | 121 → 125 | `stream(Object[], int, int)` | `java.util.Arrays`     |
| +87.7% |  +7.341 MiB |   3.4% → 5.9% | 8.37 MiB → 15.7 MiB |     5 → 8 | `stream()`                   | `java.util.Collection` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change |       Delta |             % |              Size | Samples | Caller                                       | Location                                                   |
| ------: | ----------: | ------------: | ----------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|  +15.1% | +17.811 MiB | 98.9% → 97.1% | 118 MiB → 136 MiB | 60 → 71 | `add(ATNConfig, PredictionContextCache)`     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| +198.4% |  +2.658 MiB |   1.1% → 2.9% |  1.34 MiB → 4 MiB |   1 → 2 | `join(PredictionContext, PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change |       Delta |      % |              Size | Samples | Caller                                              | Location                      |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------------------- | ----------------------------- |
| +34.5% | +18.474 MiB | 100.0% | 53.5 MiB → 72 MiB | 27 → 37 | `divideKnuth(MutableBigInteger, MutableBigInteger)` | `java.math.MutableBigInteger` |

##### `copyOf(int[], int)` (`java.util.Arrays`)

|  Change |        Delta |             % |              Size | Samples | Caller                                                                    | Location                                              |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------------------------- |
| +125.8% |  +14.477 MiB | 30.9% → 48.9% | 11.5 MiB → 26 MiB |  6 → 13 | `append(int, int)`                                                        | `java.util.regex.Pattern`                             |
|  +78.6% |   +3.141 MiB | 10.7% → 13.4% |  4 MiB → 7.14 MiB |   2 → 4 | `join(PredictionContext, PredictionContext, PredictionContextCache)`      | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| removed |   -1.999 MiB |   5.4% → 0.0% |       2 MiB → 0 B |   1 → 0 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                   |
|   +1.2% | +248.484 KiB | 53.0% → 37.6% | 19.7 MiB → 20 MiB | 11 → 10 | `RemoveQEQuoting()`                                                       | `java.util.regex.Pattern`                             |

##### `<init>()` (`java.math.MutableBigInteger`)

| Change |       Delta |             % |                Size | Samples | Caller                                                       | Location                      |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------ | ----------------------------- |
| +31.9% | +18.099 MiB | 46.8% → 54.6% | 56.7 MiB → 74.8 MiB | 29 → 37 | `divideAndRemainderKnuth(BigInteger)`                        | `java.math.BigInteger`        |
|  -4.0% |  -2.507 MiB | 51.5% → 43.8% |   62.5 MiB → 60 MiB | 32 → 30 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |
| +10.5% | +215.89 KiB |          1.6% |    2 MiB → 2.21 MiB |   1 → 2 | `divideAndRound(BigInteger, long, int, int, int)`            | `java.math.BigDecimal`        |

##### `removeRealReceiver(Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

| Change |       Delta |      % |            Size | Samples | Caller                 | Location                                   |
| -----: | ----------: | -----: | --------------: | ------: | ---------------------- | ------------------------------------------ |
| +71.3% | +14.971 MiB | 100.0% | 21 MiB → 36 MiB | 10 → 18 | `access$000(Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |       Delta |      % |                Size | Samples | Caller                               | Location                             |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------ | ------------------------------------ |
| +50.1% | +14.928 MiB | 100.0% | 29.8 MiB → 44.8 MiB | 16 → 23 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `createPogoCallSite(CallSite, Object[])` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

|  Change |       Delta |      % |           Size | Samples | Caller                                       | Location                                             |
| ------: | ----------: | -----: | -------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| +700.0% | +13.993 MiB | 100.0% | 2 MiB → 16 MiB |   1 → 2 | `createPogoSite(CallSite, Object, Object[])` | `org.codehaus.groovy.runtime.callsite.CallSiteArray` |

##### `equals(ArrayPredictionContext, Set)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|  Change |      Delta |      % |           Size | Samples | Caller           | Location                                                   |
| ------: | ---------: | -----: | -------------: | ------: | ---------------- | ---------------------------------------------------------- |
| +233.3% | +13.99 MiB | 100.0% | 6 MiB → 20 MiB |   3 → 9 | `equals(Object)` | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |       Delta |             % |                Size | Samples | Caller                  | Location                                    |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------- | ------------------------------------------- |
| +191.0% | +15.591 MiB | 57.7% → 87.4% | 8.16 MiB → 23.8 MiB |  7 → 15 | `putUTF8(String)`       | `jdk.internal.org.objectweb.asm.ByteVector` |
| removed |  -3.996 MiB |  28.2% → 0.0% |         4 MiB → 0 B |   2 → 0 | `put122(int, int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |
|     new |  +1.998 MiB |   0.0% → 7.4% |         0 B → 2 MiB |   0 → 1 | `putByte(int)`          | `jdk.internal.org.objectweb.asm.ByteVector` |
|  -28.6% | -585.89 KiB |  14.1% → 5.2% |    2 MiB → 1.43 MiB |       1 | `putShort(int)`         | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `copy()` (`java.lang.reflect.Method`)

| Change |       Delta |      % |             Size | Samples | Caller               | Location                          |
| -----: | ----------: | -----: | ---------------: | ------: | -------------------- | --------------------------------- |
| -68.2% | -68.691 MiB | 100.0% | 101 MiB → 32 MiB | 25 → 19 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------ | -------------------------------------------- |
| -16.2% | -62.422 MiB | 100.0% | 385 MiB → 323 MiB | 197 → 163 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change |       Delta |             % |                Size | Samples | Caller                                             | Location                              |
| -----: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------- | ------------------------------------- |
| -20.0% | -21.015 MiB | 39.9% → 40.9% |  105 MiB → 83.9 MiB | 53 → 42 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles`      |
| -43.5% | -16.064 MiB | 14.0% → 10.2% | 36.9 MiB → 20.9 MiB | 19 → 11 | `getInvocationType()`                              | `java.lang.invoke.MemberName`         |
| -78.6% |  -7.336 MiB |   3.6% → 1.0% |    9.34 MiB → 2 MiB |   5 → 1 | `asCollectorType(Class, int, int)`                 | `java.lang.invoke.MethodType`         |
| -14.7% |   -6.08 MiB | 15.8% → 17.2% | 41.4 MiB → 35.3 MiB | 20 → 17 | `replaceParameterTypes(int, int, Class[])`         | `java.lang.invoke.MethodType`         |
| -16.3% |  -4.788 MiB | 11.2% → 12.0% | 29.3 MiB → 24.5 MiB | 15 → 12 | `make(byte, Class, MemberName, Class)`             | `java.lang.invoke.DirectMethodHandle` |

##### `of(byte, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size | Samples | Caller                  | Location                            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------------- |
| -31.2% | -48.471 MiB | 100.0% | 155 MiB → 107 MiB | 77 → 55 | `bindArgumentForm(int)` | `java.lang.invoke.LambdaFormEditor` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |             % |              Size | Samples | Caller                                   | Location                                         |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| -24.9% | -42.459 MiB | 93.4% → 95.4% | 170 MiB → 128 MiB | 87 → 67 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |
| -48.7% |  -5.842 MiB |   6.6% → 4.6% | 12 MiB → 6.15 MiB |   6 → 4 | `boxLong(long)`                          | `sun.invoke.util.ValueConversions`               |

##### `compile()` (`java.util.regex.Pattern`)

| Change |       Delta |      % |              Size |  Samples | Caller                | Location                  |
| -----: | ----------: | -----: | ----------------: | -------: | --------------------- | ------------------------- |
| -18.8% | -43.476 MiB | 100.0% | 232 MiB → 188 MiB | 117 → 97 | `<init>(String, int)` | `java.util.regex.Pattern` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Caller                    | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------- | ------------------------- |
| -11.9% | -42.901 MiB | 100.0% | 359 MiB → 316 MiB | 179 → 155 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLL`)

| Change |       Delta |      % |              Size | Samples | Caller                                                                         | Location                                     |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------- |
| -21.2% | -35.063 MiB | 100.0% | 165 MiB → 130 MiB | 85 → 65 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `make(MethodType, LambdaForm, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLL`)

| Change |       Delta |      % |               Size | Samples | Caller                                                         | Location                                     |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| -25.7% | -34.064 MiB | 100.0% | 133 MiB → 98.6 MiB | 67 → 49 | `invokeStatic(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |              % |              Size |   Samples | Caller                                             | Location                                             |
| -----: | ----------: | -------------: | ----------------: | --------: | -------------------------------------------------- | ---------------------------------------------------- |
| -10.7% | -38.796 MiB | 100.0% → 98.6% | 361 MiB → 322 MiB | 181 → 166 | `invokeStatic(Object, Object, int)`                | `java.lang.invoke.LambdaForm$DMH.0x000000030109a000` |
|    new |  +1.998 MiB |    0.0% → 0.6% |       0 B → 2 MiB |     0 → 1 | `<init>(Object[], Comparator, Object[], int, int)` | `java.util.TimSort`                                  |
|    new |  +1.509 MiB |    0.0% → 0.5% |    0 B → 1.51 MiB |     0 → 1 | `copyOf(Object[], int, Class)`                     | `java.util.Arrays`                                   |
|    new |  +1.229 MiB |    0.0% → 0.4% |    0 B → 1.23 MiB |     0 → 2 | `copyOfRange(Object[], int, int, Class)`           | `java.util.Arrays`                                   |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |       Delta |             % |                Size | Samples | Caller                                                               | Location                                              |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
|  -86.9% | -13.317 MiB |  22.0% → 4.4% |    15.3 MiB → 2 MiB |   7 → 1 | `asCollectorType(Class, int, int)`                                   | `java.lang.invoke.MethodType`                         |
|  -34.7% |  -6.937 MiB |         28.7% |   20 MiB → 13.1 MiB |  10 → 7 | `toArray()`                                                          | `java.util.ArrayList`                                 |
|  -66.7% |  -3.997 MiB |   8.6% → 4.4% |       6 MiB → 2 MiB |   2 → 1 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| +100.0% |  +1.999 MiB |   2.9% → 8.8% |       2 MiB → 4 MiB |   1 → 2 | `clone()`                                                            | `java.util.ArrayList`                                 |
|   -7.1% |  -1.869 MiB | 37.7% → 53.7% | 26.2 MiB → 24.4 MiB | 14 → 13 | `grow(int)`                                                          | `java.util.ArrayList`                                 |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |             % |              Size | Samples | Caller               | Location              |
| -----: | ----------: | ------------: | ----------------: | ------: | -------------------- | --------------------- |
| -43.7% | -22.465 MiB | 96.3% → 93.6% | 51.5 MiB → 29 MiB | 26 → 14 | `grow()`             | `java.util.ArrayList` |
|    ~0% |      +200 B |   3.7% → 6.4% |             2 MiB |       1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

| Change |       Delta |      % |              Size |   Samples | Caller     | Location                      |
| -----: | ----------: | -----: | ----------------: | --------: | ---------- | ----------------------------- |
|  -6.9% | -20.966 MiB | 100.0% | 305 MiB → 284 MiB | 157 → 142 | `editor()` | `java.lang.invoke.LambdaForm` |

##### `call(Object)` (`groovy.lang.Closure`)

|  Change |       Delta |             % |              Size | Samples | Caller                                     | Location                                           |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------ | -------------------------------------------------- |
|  -73.0% | -13.131 MiB | 64.3% → 54.9% | 18 MiB → 4.86 MiB |   9 → 3 | `compare(Object, Object)`                  | `groovy.util.OrderBy`                              |
|  -50.0% |  -3.998 MiB | 28.6% → 45.1% |     8 MiB → 4 MiB |   4 → 2 | `each(Iterator, Closure)`                  | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |
| removed |  -1.999 MiB |   7.1% → 0.0% |       2 MiB → 0 B |   1 → 0 | `callClosureForLine(Closure, String, int)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `basicTypesOrd(Class[])` (`java.lang.invoke.LambdaForm$BasicType`)

| Change |       Delta |      % |              Size | Samples | Caller                                  | Location                            |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------- | ----------------------------------- |
| -44.3% | -17.499 MiB | 100.0% | 39.5 MiB → 22 MiB | 20 → 11 | `collectArgumentsForm(int, MethodType)` | `java.lang.invoke.LambdaFormEditor` |

##### `of(byte, int, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size | Samples | Caller                                 | Location                            |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------- | ----------------------------------- |
| -30.1% | -16.391 MiB | 100.0% | 54.4 MiB → 38 MiB | 27 → 16 | `spreadArgumentsForm(int, Class, int)` | `java.lang.invoke.LambdaFormEditor` |

##### `getParameterTypes()` (`java.lang.reflect.Method`)

| Change |        Delta |             % |             Size | Samples | Caller                                             | Location                                                  |
| -----: | -----------: | ------------: | ---------------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
| -64.7% |  -14.673 MiB | 48.6% → 26.0% | 22.7 MiB → 8 MiB |  11 → 4 | `<init>(Method, boolean)`                          | `java.lang.invoke.MemberName`                             |
| -16.7% |   -3.998 MiB | 51.4% → 64.9% |  24 MiB → 20 MiB | 12 → 10 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|    new |    +2.18 MiB |   0.0% → 7.1% |   0 B → 2.18 MiB |   0 → 2 | `getGenericParameterTypes()`                       | `java.lang.reflect.Executable`                            |
|    new | +629.343 KiB |   0.0% → 2.0% |    0 B → 629 KiB |   0 → 1 | `compareToMethod(Method)`                          | `org.codehaus.groovy.reflection.CachedMethod`             |

##### `<init>(Pattern, CharSequence)` (`java.util.regex.Matcher`)

| Change |       Delta |      % |              Size | Samples | Caller                  | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- | ------------------------- |
| -16.1% | -15.478 MiB | 100.0% | 96 MiB → 80.5 MiB | 47 → 39 | `matcher(CharSequence)` | `java.util.regex.Pattern` |

##### `getChild(int)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |          Delta |             % |              Size | Samples | Caller                                                                                | Location                                                   |
| -----: | -------------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -75.7% |    -16.642 MiB | 95.6% → 65.1% | 22 MiB → 5.35 MiB |  11 → 3 | `getChild(PredictionContext, int)`                                                    | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
| +95.8% | +1,001.453 KiB |  4.4% → 24.4% |  1.02 MiB → 2 MiB |       1 | `getEpsilonTarget(CharStream, ATNConfig, Transition, ATNConfigSet, boolean, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`      |
|    new |   +882.187 KiB |  0.0% → 10.5% |     0 B → 882 KiB |   0 → 1 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                  | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |

##### `<init>(MethodHandle, MethodHandle, boolean)` (`org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper`)

| Change |       Delta |      % |              Size | Samples | Caller                                                                                       | Location                                        |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -31.5% | -14.152 MiB | 100.0% | 45 MiB → 30.8 MiB | 21 → 16 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|     Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                             |
| ---------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | ---------------------------------------------------- |
|   +6553.7% |   +4.441 GiB |  0.6% → 37.6% | 69.4 MiB → 4.51 GiB |    37 → 2,335 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003012ac800`  |
| +160547.2% |   +3.415 GiB | <0.1% → 28.5% | 2.18 MiB → 3.42 GiB |     2 → 1,787 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013d2000`  |
|   +6636.6% |    +2.85 GiB |  0.4% → 24.1% |   44 MiB → 2.89 GiB |    22 → 1,447 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030160a800`  |
|  +27820.8% |   +2.715 GiB |  0.1% → 22.7% |   10 MiB → 2.73 GiB |     5 → 1,366 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301829c00`  |
|   +7557.9% |    +2.63 GiB |  0.3% → 22.2% | 35.6 MiB → 2.67 GiB |    19 → 1,381 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013dbc00`  |
|   +1368.5% |   +1.175 GiB |  0.7% → 10.5% | 87.9 MiB → 1.26 GiB |      62 → 697 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012c1400`  |
|  +65634.1% |   +1.019 GiB |  <0.1% → 8.5% | 1.59 MiB → 1.02 GiB |       2 → 534 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301398000`  |
|  +24406.6% |  +974.28 MiB |  <0.1% → 8.0% |  3.99 MiB → 978 MiB |       4 → 496 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301105400`  |
|    +301.3% | +857.897 MiB |   2.3% → 9.3% |  285 MiB → 1.12 GiB |     143 → 579 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`  |
|  +13466.5% | +807.586 MiB |  <0.1% → 6.6% |     6 MiB → 814 MiB |       3 → 400 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030160a400`  |
|  +37559.1% | +750.809 MiB |  <0.1% → 6.1% |     2 MiB → 753 MiB |       1 → 370 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030182f000`  |
|     +14.1% | +714.663 MiB | 41.4% → 47.0% | 4.95 GiB → 5.65 GiB | 2,491 → 2,855 | `invokeVirtual(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x00000003010bc800` |
|  +31200.0% |  +623.68 MiB |  <0.1% → 5.1% |     2 MiB → 626 MiB |       1 → 307 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301607800`  |
|     +12.6% | +583.066 MiB | 37.7% → 42.3% | 4.51 GiB → 5.08 GiB | 2,329 → 2,630 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301142000`  |
|     +81.0% |  +441.63 MiB |   4.4% → 8.0% |   545 MiB → 987 MiB |     287 → 507 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`  |
|        new | +435.783 MiB |   0.0% → 3.5% |       0 B → 436 MiB |       0 → 141 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301971c00`  |
|        new | +413.794 MiB |   0.0% → 3.4% |       0 B → 414 MiB |       0 → 136 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301972000`  |
|        new | +411.795 MiB |   0.0% → 3.4% |       0 B → 412 MiB |       0 → 135 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301974000`  |
|        new | +411.795 MiB |   0.0% → 3.4% |       0 B → 412 MiB |       0 → 135 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301973c00`  |
|    +434.9% |  +388.93 MiB |   0.7% → 3.9% |  89.4 MiB → 478 MiB |      46 → 240 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012c2400`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

| Change |          Delta |             % |                 Size |       Samples | Function                                         | Location                                             |
| -----: | -------------: | ------------: | -------------------: | ------------: | ------------------------------------------------ | ---------------------------------------------------- |
| -90.9% |     -4.347 GiB |  40.0% → 3.6% |   4.78 GiB → 447 MiB |   2,490 → 197 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030118c000`  |
| -85.4% |     -2.873 GiB |  28.1% → 4.1% |   3.36 GiB → 502 MiB |   1,751 → 253 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000030138c800`  |
| -98.5% |     -2.868 GiB |  24.3% → 0.4% |  2.91 GiB → 43.3 MiB |    1,464 → 22 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003013e1c00`  |
| -99.3% |     -2.678 GiB |  22.5% → 0.1% |     2.7 GiB → 18 MiB |     1,353 → 8 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003014b4800`  |
| -83.3% |     -2.176 GiB |  21.8% → 3.6% |   2.61 GiB → 447 MiB |   1,354 → 226 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000030138c000`  |
| -92.4% |     -1.185 GiB |  10.7% → 0.8% |   1.28 GiB → 100 MiB |      711 → 65 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012bb000`  |
| -97.7% |     -1.053 GiB |   9.0% → 0.2% |  1.08 GiB → 25.3 MiB |      556 → 14 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301185400`  |
| -99.9% | -1,011.612 MiB |  8.3% → <0.1% | 1,013 MiB → 1.44 MiB |       517 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301114400`  |
| -98.8% |   -931.625 MiB |   7.7% → 0.1% |     943 MiB → 11 MiB |      478 → 14 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301000400`  |
| -70.3% |   -801.263 MiB |   9.3% → 2.8% |   1.11 GiB → 339 MiB |     577 → 177 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003012c1c00`  |
| -99.7% |   -759.604 MiB |  6.2% → <0.1% |      762 MiB → 2 MiB |       371 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301782400`  |
| -93.1% |   -757.607 MiB |   6.6% → 0.5% |     814 MiB → 56 MiB |      401 → 28 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030151f400`  |
| -12.7% |   -727.953 MiB | 46.9% → 40.9% |   5.62 GiB → 4.9 GiB | 2,873 → 2,514 | `invokeVirtual(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000030138cc00` |
| -98.2% |   -634.247 MiB |   5.3% → 0.1% |   646 MiB → 11.4 MiB |       319 → 5 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301501c00`  |
| -99.9% |    -465.06 MiB |  3.8% → <0.1% |    466 MiB → 671 KiB |       235 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030142a800`  |
| -99.2% |   -393.688 MiB |  3.2% → <0.1% |   397 MiB → 3.27 MiB |       199 → 3 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301231000`  |
| -99.6% |   -389.466 MiB |  3.2% → <0.1% |   391 MiB → 1.51 MiB |       201 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013d9800`  |
| -99.0% |   -379.811 MiB |  3.1% → <0.1% |      384 MiB → 4 MiB |       162 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301532000`  |
| -73.7% |   -376.041 MiB |   4.2% → 1.1% |    511 MiB → 134 MiB |      259 → 68 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301448c00`  |
| -99.5% |   -375.813 MiB |  3.1% → <0.1% |      378 MiB → 2 MiB |       159 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000030148a800`  |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012ac800`)

|  Change |       Delta |             % |           Size |   Samples | Callee                                            | Location                                             |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------- | ---------------------------------------------------- |
|     new |  +4.428 GiB |  0.0% → 98.2% | 0 B → 4.43 GiB | 0 → 2,292 | `invokeVirtual(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000030138cc00` |
|     new | +81.619 MiB |   0.0% → 1.8% | 0 B → 81.6 MiB |    0 → 42 | `invokeSpecial(Object, Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -69.397 MiB | 100.0% → 0.0% | 69.4 MiB → 0 B |    37 → 0 | `invokeVirtual(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000900138c800` |
|     new |  +1.088 MiB |  0.0% → <0.1% | 0 B → 1.09 MiB |     0 → 1 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003012ac400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003013d2000`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                       | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------------------ | ---------------------------------------------------- |
|     new | +3.417 GiB | 0.0% → 100.0% | 0 B → 3.42 GiB | 0 → 1,787 | `invokeSpecial(Object, Object, Object)`                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -2.178 MiB | 100.0% → 0.0% | 2.18 MiB → 0 B |     2 → 0 | `invokeSpecial(Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090013d6800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030160a800`)

|  Change |       Delta |             % |           Size |   Samples | Callee                                                  | Location                                             |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +2.893 GiB | 0.0% → 100.0% | 0 B → 2.89 GiB | 0 → 1,447 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000030118e800` |
| removed | -43.975 MiB | 100.0% → 0.0% |   44 MiB → 0 B |    22 → 0 | `invokeStatic(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x0000009001003c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301829c00`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
|     new | +2.725 GiB | 0.0% → 100.0% | 0 B → 2.73 GiB | 0 → 1,366 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -9.995 MiB | 100.0% → 0.0% |   10 MiB → 0 B |     5 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003013dbc00`)

|  Change |       Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +2.665 GiB | 0.0% → 100.0% | 0 B → 2.67 GiB | 0 → 1,381 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
| removed | -25.982 MiB |  72.9% → 0.0% |   26 MiB → 0 B |    13 → 0 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -6.548 MiB |  18.4% → 0.0% | 6.55 MiB → 0 B |     4 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -3.114 MiB |   8.7% → 0.0% | 3.11 MiB → 0 B |     2 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000009001001000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012c1400`)

|  Change |        Delta |            % |          Size | Samples | Callee                                             | Location                                            |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
|     new | +919.371 MiB | 0.0% → 71.2% | 0 B → 919 MiB | 0 → 448 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +371.824 MiB | 0.0% → 28.8% | 0 B → 372 MiB | 0 → 249 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030118d000` |
| removed |  -53.961 MiB | 61.4% → 0.0% |  54 MiB → 0 B |  45 → 0 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090012b9800` |
| removed |  -33.967 MiB | 38.6% → 0.0% |  34 MiB → 0 B |  17 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301398000`)

|  Change |        Delta |            % |           Size | Samples | Callee                                   | Location                                            |
| ------: | -----------: | -----------: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|     new |   +1.016 GiB | 0.0% → 99.6% | 0 B → 1.02 GiB | 0 → 532 | `reinvoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x0000000301396800` |
|     new |   +6.858 MiB |  0.0% → 0.7% | 0 B → 6.86 MiB |   0 → 4 | `invoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x0000000301397000` |
| removed | -881.312 KiB | 54.1% → 0.0% |  881 KiB → 0 B |   1 → 0 | `delegate(Object, Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -746.703 KiB | 45.9% → 0.0% |  747 KiB → 0 B |   1 → 0 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000009001118000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301105400`)

|    Change |        Delta |              % |               Size | Samples | Callee                                                                                      | Location                                             |
| --------: | -----------: | -------------: | -----------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +23924.3% | +955.028 MiB | 100.0% → 98.0% | 3.99 MiB → 959 MiB | 4 → 486 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|       new |  +19.252 MiB |    0.0% → 2.0% |     0 B → 19.3 MiB |  0 → 10 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000030109c000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012d8000`)

|  Change |        Delta |            % |          Size | Samples | Callee                                    | Location                                             |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
|     new |   +1.096 GiB | 0.0% → 98.3% | 0 B → 1.1 GiB | 0 → 570 | `invokeVirtual(Object, Object, int)`      | `java.lang.invoke.LambdaForm$DMH.0x0000000301152800` |
| removed | -236.777 MiB | 83.2% → 0.0% | 237 MiB → 0 B | 117 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000009001004800` |
| removed |  -41.981 MiB | 14.7% → 0.0% |  42 MiB → 0 B |  23 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000009001101c00` |
|     new |  +19.989 MiB |  0.0% → 1.7% |  0 B → 20 MiB |   0 → 9 | `invokeSpecial(Object, Object, int)`      | `java.lang.invoke.LambdaForm$DMH.0x00000003013f0000` |
| removed |   -5.997 MiB |  2.1% → 0.0% |   6 MiB → 0 B |   3 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030160a400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                             | Location                                            |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
|     new | +813.583 MiB | 0.0% → 100.0% | 0 B → 814 MiB | 0 → 400 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -3.998 MiB |  66.7% → 0.0% |   4 MiB → 0 B |   2 → 0 | `delegate(Object, Object, Object, int)`            | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -1.998 MiB |  33.3% → 0.0% |   2 MiB → 0 B |   1 → 0 | `reinvoke(Object, Object, Object, int)`            | `java.lang.invoke.LambdaForm$MH.0x0000009001144800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030182f000`)

|    Change |        Delta |      % |            Size | Samples | Callee                             | Location                                         |
| --------: | -----------: | -----: | --------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| +37559.1% | +750.809 MiB | 100.0% | 2 MiB → 753 MiB | 1 → 370 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000003010bc800`)

|  Change |        Delta |            % |           Size |   Samples | Callee                                     | Location                                       |
| ------: | -----------: | -----------: | -------------: | --------: | ------------------------------------------ | ---------------------------------------------- |
| removed |   -4.369 GiB | 88.3% → 0.0% | 4.37 GiB → 0 B | 2,258 → 0 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
|     new |   +3.992 GiB | 0.0% → 70.7% | 0 B → 3.99 GiB | 0 → 2,068 | `collectViolations(SourceCode, RuleSet)`   | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
|     new | +669.645 MiB | 0.0% → 11.6% |  0 B → 670 MiB |   0 → 336 | `doMethodInvoke(Object, Object[])`         | `groovy.lang.MetaMethod`                       |
|     new | +571.824 MiB |  0.0% → 9.9% |  0 B → 572 MiB |   0 → 265 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$251`          |
|     new | +489.794 MiB |  0.0% → 8.5% |  0 B → 490 MiB |   0 → 225 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$207`          |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301607800`)

|    Change |       Delta |      % |            Size | Samples | Callee                                  | Location                                     |
| --------: | ----------: | -----: | --------------: | ------: | --------------------------------------- | -------------------------------------------- |
| +31200.0% | +623.68 MiB | 100.0% | 2 MiB → 626 MiB | 1 → 307 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301142000`)

|  Change |       Delta |            % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +5.063 GiB | 0.0% → 99.8% | 0 B → 5.06 GiB | 0 → 2,624 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
| removed |  -4.436 GiB | 98.5% → 0.0% | 4.44 GiB → 0 B | 2,293 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000900138c800` |
| removed |  -70.51 MiB |  1.5% → 0.0% | 70.5 MiB → 0 B |    36 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +24.646 MiB |  0.0% → 0.5% | 0 B → 24.6 MiB |    0 → 12 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301140000`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301150800`)

|  Change |        Delta |            % |          Size | Samples | Callee                             | Location                                             |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
|     new |   +986.2 MiB | 0.0% → 99.9% | 0 B → 986 MiB | 0 → 506 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -539.186 MiB | 98.9% → 0.0% | 539 MiB → 0 B | 284 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001118000`  |
| removed |   -7.996 MiB |  1.5% → 0.0% |   8 MiB → 0 B |   4 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000009001118800`  |
|     new | +629.359 KiB |  0.0% → 0.1% | 0 B → 629 KiB |   0 → 1 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000000301150400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301971c00`)

| Change |        Delta |             % |          Size | Samples | Callee                               | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
|    new | +435.783 MiB | 0.0% → 100.0% | 0 B → 436 MiB | 0 → 141 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301971400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301972000`)

| Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new | +413.794 MiB | 0.0% → 100.0% | 0 B → 414 MiB | 0 → 136 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301974000`)

| Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------ |
|    new | +411.795 MiB | 0.0% → 100.0% | 0 B → 412 MiB | 0 → 135 | `delegate(Object, Object, int, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301973c00`)

| Change |        Delta |             % |          Size | Samples | Callee                             | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
|    new | +411.795 MiB | 0.0% → 100.0% | 0 B → 412 MiB | 0 → 135 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012c2400`)

|  Change |        Delta |             % |           Size | Samples | Callee                                             | Location                                            |
| ------: | -----------: | ------------: | -------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
|     new | +465.028 MiB |  0.0% → 97.2% |  0 B → 465 MiB | 0 → 233 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030118d000` |
| removed |  -89.436 MiB | 100.0% → 0.0% | 89.4 MiB → 0 B |  46 → 0 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090012b9800` |
|     new |  +13.993 MiB |   0.0% → 2.9% |   0 B → 14 MiB |   0 → 6 | `invoke(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000030118dc00` |
|     new |    +9.34 MiB |   0.0% → 2.0% | 0 B → 9.34 MiB |   0 → 5 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030118c000`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                                    | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -4.783 GiB | 100.0% → 0.0% | 4.78 GiB → 0 B | 2,490 → 0 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010bd400` |
|     new | +446.609 MiB | 0.0% → 100.0% |  0 B → 447 MiB |   0 → 197 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030138c800`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -3.363 GiB | 100.0% → 0.0% | 3.36 GiB → 0 B | 1,751 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +502.375 MiB | 0.0% → 100.0% |  0 B → 502 MiB |   0 → 253 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003013e1c00`)

|  Change |       Delta |             % |           Size |   Samples | Callee                                                  | Location                                             |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -2.91 GiB | 100.0% → 0.0% | 2.91 GiB → 0 B | 1,464 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000900118e800` |
|     new | +43.328 MiB | 0.0% → 100.0% | 0 B → 43.3 MiB |    0 → 22 | `invokeSpecial(Object, Object, Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x00000003013a1800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003014b4800`)

| Change |      Delta |      % |             Size |   Samples | Callee                                     | Location                                         |
| -----: | ---------: | -----: | ---------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
| -99.3% | -2.678 GiB | 100.0% | 2.7 GiB → 18 MiB | 1,353 → 8 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030138c000`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -2.612 GiB |  99.9% → 0.0% | 2.61 GiB → 0 B | 1,353 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2800` |
|     new | +447.493 MiB | 0.0% → 100.0% |  0 B → 447 MiB |   0 → 226 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -1.999 MiB |   0.1% → 0.0% |    2 MiB → 0 B |     1 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000009001114c00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012bb000`)

|  Change |        Delta |            % |           Size | Samples | Callee                                             | Location                                            |
| ------: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| removed | -949.402 MiB | 72.2% → 0.0% |  949 MiB → 0 B | 465 → 0 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -362.864 MiB | 27.6% → 0.0% |  363 MiB → 0 B | 245 → 0 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000900118d000` |
|     new |  +52.265 MiB | 0.0% → 52.1% | 0 B → 52.3 MiB |  0 → 41 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003012b9800` |
|     new |  +47.971 MiB | 0.0% → 47.9% |   0 B → 48 MiB |  0 → 24 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -1.999 MiB |  0.2% → 0.0% |    2 MiB → 0 B |   1 → 0 | `invoke(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000900118dc00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301185400`)

|  Change |       Delta |             % |           Size | Samples | Callee                                   | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |  -1.076 GiB |  99.8% → 0.0% | 1.08 GiB → 0 B | 555 → 0 | `reinvoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x0000009001396400` |
|     new | +25.255 MiB | 0.0% → 100.0% | 0 B → 25.3 MiB |  0 → 14 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00` |
| removed |  -7.336 MiB |   0.7% → 0.0% | 7.34 MiB → 0 B |   4 → 0 | `invoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x0000009001396c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301114400`)

|  Change |          Delta |             % |            Size | Samples | Callee                                            | Location                                             |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed | -1,010.874 MiB |  99.8% → 0.0% | 1,011 MiB → 0 B | 515 → 0 | `invokeSpecial(Object, Object)`                   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -2.178 MiB |   0.2% → 0.0% |  2.18 MiB → 0 B |   2 → 0 | `invokeVirtual(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000009001150400` |
|     new |      +1.44 MiB | 0.0% → 100.0% |  0 B → 1.44 MiB |   0 → 3 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301100000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301000400`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -918.349 MiB |  97.4% → 0.0% |  918 MiB → 0 B | 465 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2800` |
| removed |  -24.304 MiB |   2.6% → 0.0% | 24.3 MiB → 0 B |  13 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000900109c000`  |
|     new |  +11.028 MiB | 0.0% → 100.0% |   0 B → 11 MiB |  0 → 14 | `newInvokeSpecial(Object)`                                                                  | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012c1c00`)

|  Change |        Delta |            % |          Size | Samples | Callee                                    | Location                                             |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |   -1.101 GiB | 98.9% → 0.0% | 1.1 GiB → 0 B | 571 → 0 | `invokeVirtual(Object, Object, int)`      | `java.lang.invoke.LambdaForm$DMH.0x0000009001152800` |
|     new | +334.705 MiB | 0.0% → 98.8% | 0 B → 335 MiB | 0 → 175 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |
| removed |  -11.994 MiB |  1.1% → 0.0% |  12 MiB → 0 B |   6 → 0 | `invokeSpecial(Object, Object, int)`      | `java.lang.invoke.LambdaForm$DMH.0x00000090013ebc00` |
|     new |   +3.997 MiB |  0.0% → 1.2% |   0 B → 4 MiB |   0 → 2 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301782400`)

|  Change |        Delta |             % |          Size | Samples | Callee                             | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed | -761.603 MiB | 100.0% → 0.0% | 762 MiB → 0 B | 371 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |   +1.999 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030151f400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                             | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
| removed | -813.579 MiB | 100.0% → 0.0% | 814 MiB → 0 B | 401 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |  +55.972 MiB | 0.0% → 100.0% |  0 B → 56 MiB |  0 → 28 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000030138cc00`)

|  Change |        Delta |            % |           Size |   Samples | Callee                                     | Location                                       |
| ------: | -----------: | -----------: | -------------: | --------: | ------------------------------------------ | ---------------------------------------------- |
|     new |   +4.381 GiB | 0.0% → 89.3% | 0 B → 4.38 GiB | 0 → 2,269 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| removed |   -3.975 GiB | 70.8% → 0.0% | 3.98 GiB → 0 B | 2,062 → 0 | `collectViolations(SourceCode, RuleSet)`   | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| removed | -629.162 MiB | 10.9% → 0.0% |  629 MiB → 0 B |   318 → 0 | `doMethodInvoke(Object, Object[])`         | `groovy.lang.MetaMethod`                       |
| removed | -485.501 MiB |  8.4% → 0.0% |  486 MiB → 0 B |   249 → 0 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$251`          |
| removed | -441.481 MiB |  7.7% → 0.0% |  441 MiB → 0 B |   224 → 0 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$207`          |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301501c00`)

| Change |        Delta |      % |               Size | Samples | Callee                                  | Location                                     |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------------------- | -------------------------------------------- |
| -98.2% | -634.247 MiB | 100.0% | 646 MiB → 11.4 MiB | 319 → 5 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030142a800`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -463.716 MiB |  99.6% → 0.0% | 464 MiB → 0 B | 234 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2800` |
| removed |   -1.999 MiB |   0.4% → 0.0% |   2 MiB → 0 B |   1 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000009001140000`  |
|     new | +670.718 KiB | 0.0% → 100.0% | 0 B → 671 KiB |   0 → 1 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000301429800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301231000`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -394.956 MiB |  99.5% → 0.0% |  395 MiB → 0 B | 198 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000900113fc00`  |
|     new |   +3.266 MiB | 0.0% → 100.0% | 0 B → 3.27 MiB |   0 → 3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
| removed |   -1.999 MiB |   0.5% → 0.0% |    2 MiB → 0 B |   1 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000009001114c00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003013d9800`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                       | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------- |
| removed | -390.976 MiB | 100.0% → 0.0% |  391 MiB → 0 B | 201 → 0 | `invokeSpecial(Object, Object, Object)`                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +1.509 MiB | 0.0% → 100.0% | 0 B → 1.51 MiB |   0 → 1 | `invokeSpecial(Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003013d7400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301532000`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -383.809 MiB | 100.0% → 0.0% | 384 MiB → 0 B | 162 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000009001978c00` |
|     new |   +3.998 MiB | 0.0% → 100.0% |   0 B → 4 MiB |   0 → 2 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301448c00`)

|  Change |        Delta |            % |           Size | Samples | Callee                                             | Location                                            |
| ------: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| removed | -498.536 MiB | 97.7% → 0.0% |  499 MiB → 0 B | 253 → 0 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000900118d000` |
|     new | +121.642 MiB | 0.0% → 90.4% |  0 B → 122 MiB |  0 → 61 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003012b9800` |
|     new |  +12.847 MiB |  0.0% → 9.6% | 0 B → 12.8 MiB |   0 → 7 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -7.996 MiB |  1.6% → 0.0% |    8 MiB → 0 B |   4 → 0 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -7.507 MiB |  1.5% → 0.0% | 7.51 MiB → 0 B |   4 → 0 | `invoke(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000900118dc00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030148a800`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -377.812 MiB | 100.0% → 0.0% | 378 MiB → 0 B | 159 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +1.998 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010bdc00` |

# Retained heap profile diff

Retained 30.5 KiB → 279 KiB (+248.82 KiB, +815.8%) over 122 objects → 100 objects (256 B → 2.79 KiB per object).

| Category         |  Change |        Delta |            % |               Size |  Objects |
| ---------------- | ------: | -----------: | -----------: | -----------------: | -------: |
| Standard library | +815.7% | +248.789 KiB |       100.0% | 30.5 KiB → 279 KiB | 122 → 99 |
| Ours             |     new |        +32 B | 0.0% → <0.1% |         0 B → 32 B |    0 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|     Change |        Delta |            % |             Size | Objects | Function                                                                                                                                                   | Location                                                 |
| ---------: | -----------: | -----------: | ---------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| +819150.0% | +255.984 KiB | 0.1% → 91.7% |   32 B → 256 KiB |       1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                                                                             | `java.util.concurrent.ConcurrentHashMap`                 |
|     +55.0% |       +528 B |  3.1% → 0.5% | 960 B → 1.45 KiB |      10 | `copyOfRangeByte(byte[], int, int)`                                                                                                                        | `java.util.Arrays`                                       |
|        new |       +152 B |  0.0% → 0.1% |      0 B → 152 B |   0 → 1 | `makeWithoutCaching(String)`                                                                                                                               | `org.codehaus.groovy.ast.ClassHelper`                    |
|        new |       +144 B |  0.0% → 0.1% |      0 B → 144 B |   0 → 1 | `sizeCache(int)`                                                                                                                                           | `java.lang.ClassValue$ClassValueMap`                     |
|        new |        +96 B | 0.0% → <0.1% |       0 B → 96 B |   0 → 2 | `commandExpression()`                                                                                                                                      | `org.apache.groovy.parser.antlr4.GroovyParser`           |
|        new |        +80 B | 0.0% → <0.1% |       0 B → 80 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL` |
|        new |        +80 B | 0.0% → <0.1% |       0 B → 80 B |   0 → 1 | `createMethodNodeForClass(GroovyParser$MethodDeclarationContext, ModifierManager, String, ClassNode, Parameter[], ClassNode[], Statement, ClassNode, int)` | `org.apache.groovy.parser.antlr4.AstBuilder`             |
|        new |        +72 B | 0.0% → <0.1% |       0 B → 72 B |   0 → 1 | `getDeclaredFields0(boolean)`                                                                                                                              | `java.lang.Class`                                        |
|        new |        +72 B | 0.0% → <0.1% |       0 B → 72 B |   0 → 2 | `<init>(int)`                                                                                                                                              | `java.util.ArrayList`                                    |
|        new |        +72 B | 0.0% → <0.1% |       0 B → 72 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL`  |
|        new |        +64 B | 0.0% → <0.1% |       0 B → 64 B |   0 → 1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                                                                                      | `sun.reflect.annotation.AnnotationParser`                |
|        new |        +64 B | 0.0% → <0.1% |       0 B → 64 B |   0 → 1 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                                                                                                  | `sun.reflect.annotation.AnnotationParser`                |
|     +63.6% |        +56 B |  0.3% → 0.1% |     88 B → 144 B |   1 → 2 | `getTargetPropertyInfo()`                                                                                                                                  | `java.beans.Introspector`                                |
|        new |        +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 2 | `setParams(Class[])`                                                                                                                                       | `java.beans.MethodDescriptor`                            |
|        new |        +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                                                                                     | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`       |
|        new |        +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `visitNamePart(GroovyParser$NamePartContext)`                                                                                                              | `org.apache.groovy.parser.antlr4.AstBuilder`             |
|        new |        +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `createConstantExpression(Expression)`                                                                                                                     | `org.apache.groovy.parser.antlr4.AstBuilder`             |
|        new |        +48 B | 0.0% → <0.1% |       0 B → 48 B |   0 → 1 | `pathExpression()`                                                                                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser`           |
|        new |        +40 B | 0.0% → <0.1% |       0 B → 40 B |   0 → 1 | `identifier()`                                                                                                                                             | `org.apache.groovy.parser.antlr4.GroovyParser`           |
|        new |        +40 B | 0.0% → <0.1% |       0 B → 40 B |   0 → 1 | `methodBody()`                                                                                                                                             | `org.apache.groovy.parser.antlr4.GroovyParser`           |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |                Size | Objects | Function                                                                                             | Location                                                          |
| ------: | ---------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -75.5% | -3.578 KiB | 15.5% → 0.4% | 4.74 KiB → 1.16 KiB |       1 | `copyOfRange(byte[], int, int)`                                                                      | `java.util.Arrays`                                                |
| removed | -2.015 KiB |  6.6% → 0.0% |      2.02 KiB → 0 B |   1 → 0 | `resize(int)`                                                                                        | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`           |
| removed |     -752 B |  2.4% → 0.0% |         752 B → 0 B |   1 → 0 | `startElement(QName, XMLAttributes, Augmentations)`                                                  | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser` |
|  -64.3% |     -504 B |  2.5% → 0.1% |       784 B → 280 B |  14 → 5 | `grow(int)`                                                                                          | `java.util.ArrayList`                                             |
|  -60.0% |     -456 B |  2.4% → 0.1% |       760 B → 304 B |   5 → 2 | `getPlainNodeReference(boolean)`                                                                     | `org.codehaus.groovy.ast.ClassNode`                               |
|  -56.1% |     -256 B |  1.5% → 0.1% |       456 B → 200 B |   8 → 3 | `getDeclaredMethods0(boolean)`                                                                       | `java.lang.Class`                                                 |
|  -78.1% |     -200 B | 0.8% → <0.1% |        256 B → 56 B |   2 → 1 | `getTargetMethodInfo()`                                                                              | `java.beans.Introspector`                                         |
|  -62.5% |     -200 B | 1.0% → <0.1% |       320 B → 120 B |   8 → 3 | `newNode(int, Object, Object, HashMap$Node)`                                                         | `java.util.LinkedHashMap`                                         |
| removed |     -144 B |  0.5% → 0.0% |         144 B → 0 B |   2 → 0 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                      | `org.apache.groovy.parser.antlr4.AstBuilder`                      |
| removed |     -120 B |  0.4% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                           |
|  -50.0% |      -88 B | 0.6% → <0.1% |        176 B → 88 B |   2 → 1 | `copy()`                                                                                             | `java.lang.reflect.Method`                                        |
|  -78.6% |      -88 B | 0.4% → <0.1% |        112 B → 24 B |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                      | `java.lang.ClassLoader`                                           |
|  -72.7% |      -64 B | 0.3% → <0.1% |         88 B → 24 B |   2 → 1 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16`                                           |
| removed |      -64 B |  0.2% → 0.0% |          64 B → 0 B |   2 → 0 | `set(Method)`                                                                                        | `java.beans.MethodRef`                                            |
|   -9.5% |      -64 B |  2.2% → 0.2% |       672 B → 608 B |       2 | `resize()`                                                                                           | `java.util.HashMap`                                               |
| removed |      -64 B |  0.2% → 0.0% |          64 B → 0 B |   1 → 0 | `<init>(MethodType)`                                                                                 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`               |
|  -11.1% |      -56 B |  1.6% → 0.2% |       504 B → 448 B |   9 → 8 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                    | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`           |
| removed |      -56 B |  0.2% → 0.0% |          56 B → 0 B |   1 → 0 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)`            | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                   |
| removed |      -48 B |  0.2% → 0.0% |          48 B → 0 B |   1 → 0 | `<init>(Class, ClassInfo)`                                                                           | `org.codehaus.groovy.reflection.CachedClass`                      |
| removed |      -48 B |  0.2% → 0.0% |          48 B → 0 B |   1 → 0 | `expressionListElement(boolean)`                                                                     | `org.apache.groovy.parser.antlr4.GroovyParser`                    |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
|     new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:2431` |
| removed |        -32 B | 100.0% → 0.0% |    32 B → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:2507` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |      % |             Size | Objects | Location                |
| -----: | -----: | -----: | ---------------: | ------: | ----------------------- |
| +55.0% | +528 B | 100.0% | 960 B → 1.45 KiB |      10 | `java.util.Arrays:3863` |

##### `makeWithoutCaching(String)` (`org.codehaus.groovy.ast.ClassHelper`)

| Change |  Delta |             % |        Size | Objects | Location                                  |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +152 B | 0.0% → 100.0% | 0 B → 152 B |   0 → 1 | `org.codehaus.groovy.ast.ClassHelper:281` |

##### `sizeCache(int)` (`java.lang.ClassValue$ClassValueMap`)

| Change |  Delta |             % |        Size | Objects | Location                                 |
| -----: | -----: | ------------: | ----------: | ------: | ---------------------------------------- |
|    new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 1 | `java.lang.ClassValue$ClassValueMap:609` |

##### `commandExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 2 | `org.apache.groovy.parser.antlr4.GroovyParser:9694` |

##### `createMethodNodeForClass(GroovyParser$MethodDeclarationContext, ModifierManager, String, ClassNode, Parameter[], ClassNode[], Statement, ClassNode, int)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                          |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `org.apache.groovy.parser.antlr4.AstBuilder:1886` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change | Delta |             % |       Size | Objects | Location                  |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 2 | `java.util.ArrayList:156` |

##### `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` (`sun.reflect.annotation.AnnotationParser`)

| Change | Delta |             % |       Size | Objects | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `sun.reflect.annotation.AnnotationParser:269` |

##### `parseAnnotations2(byte[], ConstantPool, Class, Class[])` (`sun.reflect.annotation.AnnotationParser`)

| Change | Delta |             % |       Size | Objects | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `sun.reflect.annotation.AnnotationParser:116` |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

|  Change |  Delta |             % |        Size | Objects | Location                      |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------- |
|     new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 2 | `java.beans.Introspector:503` |
| removed |  -88 B | 100.0% → 0.0% |  88 B → 0 B |   1 → 0 | `java.beans.Introspector:514` |

##### `setParams(Class[])` (`java.beans.MethodDescriptor`)

| Change | Delta |            % |       Size | Objects | Location                          |
| -----: | ----: | -----------: | ---------: | ------: | --------------------------------- |
|    new | +32 B | 0.0% → 57.1% | 0 B → 32 B |   0 → 1 | `java.beans.MethodDescriptor:130` |
|    new | +24 B | 0.0% → 42.9% | 0 B → 24 B |   0 → 1 | `java.beans.MethodDescriptor:127` |

##### `visitNamePart(GroovyParser$NamePartContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                          |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `org.apache.groovy.parser.antlr4.AstBuilder:2914` |

##### `createConstantExpression(Expression)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                          |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `org.apache.groovy.parser.antlr4.AstBuilder:4512` |

##### `pathExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `org.apache.groovy.parser.antlr4.GroovyParser:9854` |

##### `identifier()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Location                                             |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `org.apache.groovy.parser.antlr4.GroovyParser:12607` |

##### `methodBody()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `org.apache.groovy.parser.antlr4.GroovyParser:3896` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -75.5% | -3.578 KiB | 100.0% | 4.74 KiB → 1.16 KiB |       1 | `java.util.Arrays:3856` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change |      Delta |             % |           Size | Objects | Location                                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| removed | -2.015 KiB | 100.0% → 0.0% | 2.02 KiB → 0 B |   1 → 0 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:135` |

##### `startElement(QName, XMLAttributes, Augmentations)` (`com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser`)

|  Change |  Delta |             % |        Size | Objects | Location                                                              |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------- |
| removed | -752 B | 100.0% → 0.0% | 752 B → 0 B |   1 → 0 | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser:239` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Location                  |
| -----: | -----: | -----: | ------------: | ------: | ------------------------- |
| -64.3% | -504 B | 100.0% | 784 B → 280 B |  14 → 5 | `java.util.ArrayList:239` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |  Delta |      % |          Size | Objects | Location                                 |
| -----: | -----: | -----: | ------------: | ------: | ---------------------------------------- |
| -60.0% | -456 B | 100.0% | 760 B → 304 B |   5 → 2 | `org.codehaus.groovy.ast.ClassNode:1531` |

##### `getTargetMethodInfo()` (`java.beans.Introspector`)

|  Change |  Delta |            % |        Size | Objects | Location                       |
| ------: | -----: | -----------: | ----------: | ------: | ------------------------------ |
| removed | -200 B | 78.1% → 0.0% | 200 B → 0 B |   1 → 0 | `java.beans.Introspector:1035` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |  Delta |      % |          Size | Objects | Location                      |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------- |
| -62.5% | -200 B | 100.0% | 320 B → 120 B |   8 → 3 | `java.util.LinkedHashMap:281` |

##### `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change |  Delta |             % |        Size | Objects | Location                                          |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------- |
| removed | -144 B | 100.0% → 0.0% | 144 B → 0 B |   2 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:3248` |

##### `copy()` (`java.lang.reflect.Method`)

| Change | Delta |      % |         Size | Objects | Location                       |
| -----: | ----: | -----: | -----------: | ------: | ------------------------------ |
| -50.0% | -88 B | 100.0% | 176 B → 88 B |   2 → 1 | `java.lang.reflect.Method:165` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change | Delta |      % |        Size | Objects | Location                    |
| -----: | ----: | -----: | ----------: | ------: | --------------------------- |
| -72.7% | -64 B | 100.0% | 88 B → 24 B |   2 → 1 | `java.lang.StringUTF16:211` |

##### `set(Method)` (`java.beans.MethodRef`)

|  Change | Delta |             % |       Size | Objects | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `java.beans.MethodRef:48` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |      % |          Size | Objects | Location                |
| -----: | ----: | -----: | ------------: | ------: | ----------------------- |
|  -9.5% | -64 B | 100.0% | 672 B → 608 B |       2 | `java.util.HashMap:710` |

##### `<init>(MethodType)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |             % |       Size | Objects | Location                                               |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:45` |

##### `getOrPutMethods(String, MetaMethodIndex$Header)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |      % |          Size | Objects | Location                                                    |
| -----: | ----: | -----: | ------------: | ------: | ----------------------------------------------------------- |
| -11.1% | -56 B | 100.0% | 504 B → 448 B |   9 → 8 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:219` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |             % |       Size | Objects | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:227` |

##### `<init>(Class, ClassInfo)` (`org.codehaus.groovy.reflection.CachedClass`)

|  Change | Delta |             % |       Size | Objects | Location                                         |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `org.codehaus.groovy.reflection.CachedClass:194` |

##### `expressionListElement(boolean)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % |       Size | Objects | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `org.apache.groovy.parser.antlr4.GroovyParser:8120` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|     Change |        Delta |      % |           Size | Objects | Caller                | Location                                 |
| ---------: | -----------: | -----: | -------------: | ------: | --------------------- | ---------------------------------------- |
| +819150.0% | +255.984 KiB | 100.0% | 32 B → 256 KiB |       1 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |      % |             Size | Objects | Caller                          | Location           |
| -----: | -----: | -----: | ---------------: | ------: | ------------------------------- | ------------------ |
| +55.0% | +528 B | 100.0% | 960 B → 1.45 KiB |      10 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `makeWithoutCaching(String)` (`org.codehaus.groovy.ast.ClassHelper`)

| Change |  Delta |             % |        Size | Objects | Caller         | Location                              |
| -----: | -----: | ------------: | ----------: | ------: | -------------- | ------------------------------------- |
|    new | +152 B | 0.0% → 100.0% | 0 B → 152 B |   0 → 1 | `make(String)` | `org.codehaus.groovy.ast.ClassHelper` |

##### `sizeCache(int)` (`java.lang.ClassValue$ClassValueMap`)

| Change |  Delta |             % |        Size | Objects | Caller     | Location                             |
| -----: | -----: | ------------: | ----------: | ------: | ---------- | ------------------------------------ |
|    new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 1 | `<init>()` | `java.lang.ClassValue$ClassValueMap` |

##### `commandExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Caller                  | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------- | ---------------------------------------------- |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 2 | `statementExpression()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL`)

| Change | Delta |             % |       Size | Objects | Caller                                                                                                                      | Location                                             |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301105000` |

##### `createMethodNodeForClass(GroovyParser$MethodDeclarationContext, ModifierManager, String, ClassNode, Parameter[], ClassNode[], Statement, ClassNode, int)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                                                                                                                                             | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `createConstructorOrMethodNodeForClass(GroovyParser$MethodDeclarationContext, ModifierManager, String, ClassNode, Parameter[], ClassNode[], Statement, ClassNode)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `getDeclaredFields0(boolean)` (`java.lang.Class`)

| Change | Delta |             % |       Size | Objects | Caller                              | Location          |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------- | ----------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `privateGetDeclaredFields(boolean)` | `java.lang.Class` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change | Delta |            % |       Size | Objects | Caller                      | Location                                      |
| -----: | ----: | -----------: | ---------: | ------: | --------------------------- | --------------------------------------------- |
|    new | +40 B | 0.0% → 55.6% | 0 B → 40 B |   0 → 1 | `parseClassTypeSignature()` | `sun.reflect.generics.parser.SignatureParser` |
|    new | +32 B | 0.0% → 44.4% | 0 B → 32 B |   0 → 1 | `<init>()`                  | `groovyjarjarantlr4.v4.runtime.atn.ATNState`  |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL`)

| Change | Delta |             % |       Size | Objects | Caller                                                                                                              | Location                                             |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010bbc00` |

##### `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` (`sun.reflect.annotation.AnnotationParser`)

| Change | Delta |             % |       Size | Objects | Caller                                                    | Location                                  |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------- | ----------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])` | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations2(byte[], ConstantPool, Class, Class[])` (`sun.reflect.annotation.AnnotationParser`)

| Change | Delta |             % |       Size | Objects | Caller                                          | Location                                  |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- | ----------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `parseAnnotations(byte[], ConstantPool, Class)` | `sun.reflect.annotation.AnnotationParser` |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

| Change | Delta |      % |         Size | Objects | Caller          | Location                  |
| -----: | ----: | -----: | -----------: | ------: | --------------- | ------------------------- |
| +63.6% | +56 B | 100.0% | 88 B → 144 B |   1 → 2 | `getBeanInfo()` | `java.beans.Introspector` |

##### `setParams(Class[])` (`java.beans.MethodDescriptor`)

| Change | Delta |             % |       Size | Objects | Caller              | Location                      |
| -----: | ----: | ------------: | ---------: | ------: | ------------------- | ----------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 2 | `setMethod(Method)` | `java.beans.MethodDescriptor` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLL`)

| Change | Delta |             % |       Size | Objects | Caller                                                                         | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitNamePart(GroovyParser$NamePartContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                              | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- | -------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `visitPathElement(GroovyParser$PathElementContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `createConstantExpression(Expression)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                               | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------- | -------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `createMethodCallExpression(Expression, Expression)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `pathExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Caller                | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | --------------------- | ---------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `postfixExpression()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `identifier()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Caller                 | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------- | ---------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `qualifiedClassName()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `methodBody()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Caller                        | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------- | ---------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `methodDeclaration(int, int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Caller                                | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------- | ------------------ |
| -75.5% | -3.578 KiB | 100.0% | 4.74 KiB → 1.16 KiB |       1 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change |      Delta |             % |           Size | Objects | Caller                                            | Location                                                |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| removed | -2.015 KiB | 100.0% → 0.0% | 2.02 KiB → 0 B |   1 → 0 | `getOrPutMethods(String, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `startElement(QName, XMLAttributes, Augmentations)` (`com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser`)

|  Change |  Delta |             % |        Size | Objects | Caller               | Location                                                           |
| ------: | -----: | ------------: | ----------: | ------: | -------------------- | ------------------------------------------------------------------ |
| removed | -752 B | 100.0% → 0.0% | 752 B → 0 B |   1 → 0 | `scanStartElement()` | `com.sun.org.apache.xerces.internal.impl.XMLNSDocumentScannerImpl` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Caller   | Location              |
| -----: | -----: | -----: | ------------: | ------: | -------- | --------------------- |
| -64.3% | -504 B | 100.0% | 784 B → 280 B |  14 → 5 | `grow()` | `java.util.ArrayList` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |  Delta |      % |          Size | Objects | Caller                    | Location                            |
| -----: | -----: | -----: | ------------: | ------: | ------------------------- | ----------------------------------- |
| -60.0% | -456 B | 100.0% | 760 B → 304 B |   5 → 2 | `getPlainNodeReference()` | `org.codehaus.groovy.ast.ClassNode` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

| Change |  Delta |      % |          Size | Objects | Caller                               | Location          |
| -----: | -----: | -----: | ------------: | ------: | ------------------------------------ | ----------------- |
| -56.1% | -256 B | 100.0% | 456 B → 200 B |   8 → 3 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `getTargetMethodInfo()` (`java.beans.Introspector`)

| Change |  Delta |      % |         Size | Objects | Caller          | Location                  |
| -----: | -----: | -----: | -----------: | ------: | --------------- | ------------------------- |
| -78.1% | -200 B | 100.0% | 256 B → 56 B |   2 → 1 | `getBeanInfo()` | `java.beans.Introspector` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |  Delta |      % |          Size | Objects | Caller                                          | Location            |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| -62.5% | -200 B | 100.0% | 320 B → 120 B |   8 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                          | Location                                     |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------- | -------------------------------------------- |
| removed | -144 B | 100.0% → 0.0% | 144 B → 0 B |   2 → 0 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                                                    | Location             |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `copy()` (`java.lang.reflect.Method`)

| Change | Delta |      % |         Size | Objects | Caller               | Location                          |
| -----: | ----: | -----: | -----------: | ------: | -------------------- | --------------------------------- |
| -50.0% | -88 B | 100.0% | 176 B → 88 B |   2 → 1 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |      % |         Size | Objects | Caller                                                    | Location                |
| -----: | ----: | -----: | -----------: | ------: | --------------------------------------------------------- | ----------------------- |
| -78.6% | -88 B | 100.0% | 112 B → 24 B |       1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change | Delta |      % |        Size | Objects | Caller                           | Location           |
| -----: | ----: | -----: | ----------: | ------: | -------------------------------- | ------------------ |
| -72.7% | -64 B | 100.0% | 88 B → 24 B |   2 → 1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `set(Method)` (`java.beans.MethodRef`)

|  Change | Delta |            % |       Size | Objects | Caller                   | Location                        |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------ | ------------------------------- |
| removed | -32 B | 50.0% → 0.0% | 32 B → 0 B |   1 → 0 | `setMethod(Method)`      | `java.beans.MethodDescriptor`   |
| removed | -32 B | 50.0% → 0.0% | 32 B → 0 B |   1 → 0 | `setReadMethod0(Method)` | `java.beans.PropertyDescriptor` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |      % |          Size | Objects | Caller                                          | Location            |
| -----: | ----: | -----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|  -9.5% | -64 B | 100.0% | 672 B → 608 B |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>(MethodType)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |             % |       Size | Objects | Caller                                                                                    | Location                                        |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `getOrPutMethods(String, MetaMethodIndex$Header)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |             % |          Size | Objects | Caller                                                                           | Location                                                |
| -----: | ----: | ------------: | ------------: | ------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -16.7% | -56 B | 66.7% → 62.5% | 336 B → 280 B |   6 → 5 | `addMetaMethodToIndex(MetaMethod, MetaMethodIndex$Header)`                       | `groovy.lang.MetaClassImpl`                             |
| -33.3% | -56 B | 33.3% → 25.0% | 168 B → 112 B |   3 → 2 | `copyNonPrivateMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)`           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|    new | +56 B |  0.0% → 12.5% |    0 B → 56 B |   0 → 1 | `copyNonPrivateNonNewMetaMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |             % |       Size | Objects | Caller                                                             | Location                                        |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `bootstrap(MethodHandles$Lookup, String, MethodType, String, int)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `<init>(Class, ClassInfo)` (`org.codehaus.groovy.reflection.CachedClass`)

|  Change | Delta |             % |       Size | Objects | Caller                                | Location                                   |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------- | ------------------------------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `createCachedClass(Class, ClassInfo)` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `expressionListElement(boolean)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % |       Size | Objects | Caller                    | Location                                       |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------- | ---------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `expressionList(boolean)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

|     Change |        Delta |            % |               Size | Objects | Function                                                                                     | Location                                               |
| ---------: | -----------: | -----------: | -----------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +72014.3% | +275.679 KiB | 1.3% → 98.8% |    392 B → 276 KiB |  8 → 73 | `invoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000301115400`    |
| +106615.2% | +274.867 KiB | 0.8% → 98.5% |    264 B → 275 KiB |  5 → 53 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`    |
| +122244.4% | +257.859 KiB | 0.7% → 92.4% |    216 B → 258 KiB |  3 → 23 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`    |
| +299018.2% | +256.968 KiB | 0.3% → 92.0% |     88 B → 257 KiB |  1 → 23 | `invoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`    |
|        new | +256.015 KiB | 0.0% → 91.7% |      0 B → 256 KiB |   0 → 1 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)`      | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
|        new | +256.015 KiB | 0.0% → 91.7% |      0 B → 256 KiB |   0 → 1 | `getCachedContext(PredictionContext)`                                                        | `groovyjarjarantlr4.v4.runtime.atn.ATN`                |
|        new | +256.015 KiB | 0.0% → 91.7% |      0 B → 256 KiB |   0 → 1 | `optimizeConfigs(ATNSimulator)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`       |
|        new | +256.015 KiB | 0.0% → 91.7% |      0 B → 256 KiB |   0 → 1 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)`                                     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|        new | +256.015 KiB | 0.0% → 91.7% |      0 B → 256 KiB |   0 → 1 | `addDFAEdge(DFA, DFAState, int, IntegerList, ATNConfigSet, PredictionContextCache)`          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|        new | +256.015 KiB | 0.0% → 91.7% |      0 B → 256 KiB |   0 → 1 | `ifElseStatement()`                                                                          | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|        new | +256.015 KiB | 0.0% → 91.7% |      0 B → 256 KiB |   0 → 1 | `conditionalStatement()`                                                                     | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| +819150.0% | +255.984 KiB | 0.1% → 91.7% |     32 B → 256 KiB |       1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                               | `java.util.concurrent.ConcurrentHashMap`               |
| +819150.0% | +255.984 KiB | 0.1% → 91.7% |     32 B → 256 KiB |       1 | `addCount(long, int)`                                                                        | `java.util.concurrent.ConcurrentHashMap`               |
| +819150.0% | +255.984 KiB | 0.1% → 91.7% |     32 B → 256 KiB |       1 | `putVal(Object, Object, boolean)`                                                            | `java.util.concurrent.ConcurrentHashMap`               |
| +819150.0% | +255.984 KiB | 0.1% → 91.7% |     32 B → 256 KiB |       1 | `putIfAbsent(Object, Object)`                                                                | `java.util.concurrent.ConcurrentHashMap`               |
| +546066.7% | +255.968 KiB | 0.2% → 91.7% |     48 B → 256 KiB |   2 → 1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +546066.7% | +255.968 KiB | 0.2% → 91.7% |     48 B → 256 KiB |   2 → 1 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +546066.7% | +255.968 KiB | 0.2% → 91.7% |     48 B → 256 KiB |   2 → 1 | `execATN(DFA, TokenStream, int, SimulatorState)`                                             | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  +22131.8% | +255.898 KiB | 3.8% → 92.0% | 1.16 KiB → 257 KiB | 26 → 23 | `compile(int)`                                                                               | `org.codehaus.groovy.control.CompilationUnit`          |
|  +22131.8% | +255.898 KiB | 3.8% → 92.0% | 1.16 KiB → 257 KiB | 26 → 23 | `invokeVirtual(Object, Object, int)`                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000000301152800`   |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size | Objects | Function                                                                                         | Location                                             |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|  -99.2% |  -23.32 KiB |  77.1% → 0.1% |    23.5 KiB → 200 B |  87 → 4 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301117000`  |
|  -99.6% | -21.703 KiB | 71.4% → <0.1% |     21.8 KiB → 88 B |  10 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000030115e000`  |
|  -97.0% | -21.265 KiB |  71.9% → 0.2% |    21.9 KiB → 672 B | 52 → 12 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301134400`  |
|  -99.8% | -18.398 KiB | 60.5% → <0.1% |     18.4 KiB → 40 B |  23 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301005800`  |
|  -96.1% | -16.093 KiB |  54.9% → 0.2% |    16.8 KiB → 672 B |  2 → 12 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301176000`  |
|  -23.8% |   -6.32 KiB |  87.2% → 7.3% | 26.6 KiB → 20.3 KiB | 61 → 53 | `reinvoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|  -97.8% |  -5.867 KiB | 19.7% → <0.1% |       6 KiB → 136 B |  28 → 4 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301003000`  |
|  -61.0% |  -5.656 KiB |  30.4% → 1.3% | 9.27 KiB → 3.62 KiB | 38 → 36 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  -96.1% |  -5.351 KiB |  18.3% → 0.1% |    5.57 KiB → 224 B |  16 → 4 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301000400`  |
|  -99.5% |  -5.156 KiB | 17.0% → <0.1% |     5.18 KiB → 24 B |  11 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301148c00`  |
| removed |  -4.742 KiB |  15.5% → 0.0% |      4.74 KiB → 0 B |   1 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000009001135400`  |
| removed |  -4.742 KiB |  15.5% → 0.0% |      4.74 KiB → 0 B |   1 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000900182b000`  |
| removed |  -4.742 KiB |  15.5% → 0.0% |      4.74 KiB → 0 B |   1 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000900182ac00`  |
|  -61.5% |  -3.929 KiB |  21.0% → 0.9% | 6.39 KiB → 2.46 KiB | 36 → 31 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000301104000`  |
|  -73.2% |  -3.835 KiB |  17.2% → 0.5% | 5.24 KiB → 1.41 KiB |  12 → 7 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x00000003010bc800` |
|  -69.3% |  -3.835 KiB |  18.2% → 0.6% |  5.54 KiB → 1.7 KiB | 19 → 14 | `getAst()`                                                                                       | `org.codenarc.source.AbstractSourceCode`             |
|  -69.1% |   -3.75 KiB |  17.8% → 0.6% | 5.43 KiB → 1.68 KiB | 17 → 13 | `init()`                                                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`          |
|  -69.5% |  -3.726 KiB |  17.6% → 0.6% | 5.36 KiB → 1.63 KiB | 15 → 12 | `isRuleSuppressed(Rule)`                                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`          |
|  -59.6% |   -3.71 KiB |  20.4% → 0.9% | 6.23 KiB → 2.52 KiB | 34 → 32 | `linkToCallSite(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                   |
|  -69.8% |   -3.64 KiB |  17.1% → 0.6% | 5.22 KiB → 1.58 KiB | 12 → 11 | `invokeVirtual(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |

##### Standard library

|  Change |       Delta |             % |                Size | Objects | Function                                                                                         | Location                                             |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|  -99.2% |  -23.32 KiB |  77.1% → 0.1% |    23.5 KiB → 200 B |  87 → 4 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301117000`  |
|  -99.6% | -21.703 KiB | 71.4% → <0.1% |     21.8 KiB → 88 B |  10 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000030115e000`  |
|  -97.0% | -21.265 KiB |  71.9% → 0.2% |    21.9 KiB → 672 B | 52 → 12 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301134400`  |
|  -99.8% | -18.398 KiB | 60.5% → <0.1% |     18.4 KiB → 40 B |  23 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301005800`  |
|  -96.1% | -16.093 KiB |  54.9% → 0.2% |    16.8 KiB → 672 B |  2 → 12 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301176000`  |
|  -23.8% |   -6.32 KiB |  87.2% → 7.3% | 26.6 KiB → 20.3 KiB | 61 → 53 | `reinvoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|  -97.8% |  -5.867 KiB | 19.7% → <0.1% |       6 KiB → 136 B |  28 → 4 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301003000`  |
|  -61.0% |  -5.656 KiB |  30.4% → 1.3% | 9.27 KiB → 3.62 KiB | 38 → 36 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  -96.1% |  -5.351 KiB |  18.3% → 0.1% |    5.57 KiB → 224 B |  16 → 4 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301000400`  |
|  -99.5% |  -5.156 KiB | 17.0% → <0.1% |     5.18 KiB → 24 B |  11 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301148c00`  |
| removed |  -4.742 KiB |  15.5% → 0.0% |      4.74 KiB → 0 B |   1 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000009001135400`  |
| removed |  -4.742 KiB |  15.5% → 0.0% |      4.74 KiB → 0 B |   1 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000900182b000`  |
| removed |  -4.742 KiB |  15.5% → 0.0% |      4.74 KiB → 0 B |   1 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000900182ac00`  |
|  -61.5% |  -3.929 KiB |  21.0% → 0.9% | 6.39 KiB → 2.46 KiB | 36 → 31 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000301104000`  |
|  -73.2% |  -3.835 KiB |  17.2% → 0.5% | 5.24 KiB → 1.41 KiB |  12 → 7 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x00000003010bc800` |
|  -59.6% |   -3.71 KiB |  20.4% → 0.9% | 6.23 KiB → 2.52 KiB | 34 → 32 | `linkToCallSite(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                   |
|  -69.8% |   -3.64 KiB |  17.1% → 0.6% | 5.22 KiB → 1.58 KiB | 12 → 11 | `invokeVirtual(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |
|  -74.4% |  -3.625 KiB |  16.0% → 0.4% | 4.88 KiB → 1.25 KiB |   4 → 3 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000030138c800`  |
|  -75.5% |  -3.578 KiB |  15.5% → 0.4% | 4.74 KiB → 1.16 KiB |       1 | `getText(BufferedReader)`                                                                        | `org.codehaus.groovy.runtime.IOGroovyMethods`        |
|  -75.5% |  -3.578 KiB |  15.5% → 0.4% | 4.74 KiB → 1.16 KiB |       1 | `getText(File)`                                                                                  | `org.codehaus.groovy.runtime.ResourceGroovyMethods`  |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301115400`)

|  Change |        Delta |             % |          Size | Objects | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +276.062 KiB | 0.0% → 100.0% | 0 B → 276 KiB |  0 → 73 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
| removed |       -392 B | 100.0% → 0.0% |   392 B → 0 B |   8 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000090010bc800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301141000`)

|  Change |        Delta |            % |           Size | Objects | Callee                             | Location                                            |
| ------: | -----------: | -----------: | -------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new | +256.804 KiB | 0.0% → 93.3% |  0 B → 257 KiB |  0 → 15 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +18.32 KiB |  0.0% → 6.7% | 0 B → 18.3 KiB |  0 → 38 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301118000` |
| removed |       -176 B | 66.7% → 0.0% |    176 B → 0 B |   4 → 0 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |        -88 B | 33.3% → 0.0% |     88 B → 0 B |   1 → 0 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301150800`)

|  Change |       Delta |             % |          Size | Objects | Callee                          | Location                                            |
| ------: | ----------: | ------------: | ------------: | ------: | ------------------------------- | --------------------------------------------------- |
|     new | +258.07 KiB | 0.0% → 100.0% | 0 B → 258 KiB |  0 → 23 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |      -216 B | 100.0% → 0.0% |   216 B → 0 B |   3 → 0 | `reinvoke(Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x0000009001103c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003012d8000`)

|  Change |        Delta |             % |          Size | Objects | Callee                               | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
|     new | +257.054 KiB | 0.0% → 100.0% | 0 B → 257 KiB |  0 → 23 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301152800` |
| removed |        -88 B | 100.0% → 0.0% |    88 B → 0 B |   1 → 0 | `newInvokeSpecial(Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |        Delta |             % |          Size | Objects | Callee                        | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- | ---------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `getCachedContext(PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.ATN`)

| Change |        Delta |             % |          Size | Objects | Callee                                                                                  | Location                                              |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `optimizeConfigs(ATNSimulator)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

| Change |        Delta |             % |          Size | Objects | Callee                                | Location                                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------- | --------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `getCachedContext(PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.ATN` |

##### `addDFAState(DFA, ATNConfigSet, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change |        Delta |             % |          Size | Objects | Callee                          | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------------------------------------ |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `optimizeConfigs(ATNSimulator)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `addDFAEdge(DFA, DFAState, int, IntegerList, ATNConfigSet, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change |        Delta |             % |          Size | Objects | Callee                                                   | Location                                               |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------- | ------------------------------------------------------ |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `ifElseStatement()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change |        Delta |             % |          Size | Objects | Callee        | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `statement()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `conditionalStatement()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `ifElseStatement()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `addCount(long, int)` (`java.util.concurrent.ConcurrentHashMap`)

|     Change |        Delta |      % |           Size | Objects | Callee                                                         | Location                                 |
| ---------: | -----------: | -----: | -------------: | ------: | -------------------------------------------------------------- | ---------------------------------------- |
| +819150.0% | +255.984 KiB | 100.0% | 32 B → 256 KiB |       1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|     Change |        Delta |      % |           Size | Objects | Callee                | Location                                 |
| ---------: | -----------: | -----: | -------------: | ------: | --------------------- | ---------------------------------------- |
| +819150.0% | +255.984 KiB | 100.0% | 32 B → 256 KiB |       1 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `putIfAbsent(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

|     Change |        Delta |      % |           Size | Objects | Callee                            | Location                                 |
| ---------: | -----------: | -----: | -------------: | ------: | --------------------------------- | ---------------------------------------- |
| +819150.0% | +255.984 KiB | 100.0% | 32 B → 256 KiB |       1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change |        Delta |             % |          Size | Objects | Callee                                                                                   | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|     new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `addDFAEdge(DFA, DFAState, int, IntegerList, ATNConfigSet, PredictionContextCache)`      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |        -48 B | 100.0% → 0.0% |    48 B → 0 B |   2 → 0 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     Change |        Delta |      % |           Size | Objects | Callee                                                                                       | Location                                               |
| ---------: | -----------: | -----: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +546066.7% | +255.968 KiB | 100.0% | 48 B → 256 KiB |   2 → 1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `execATN(DFA, TokenStream, int, SimulatorState)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     Change |        Delta |      % |           Size | Objects | Callee                                                              | Location                                               |
| ---------: | -----------: | -----: | -------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
| +546066.7% | +255.968 KiB | 100.0% | 48 B → 256 KiB |   2 → 1 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `compile(int)` (`org.codehaus.groovy.control.CompilationUnit`)

|    Change |        Delta |      % |               Size | Objects | Callee              | Location                                  |
| --------: | -----------: | -----: | -----------------: | ------: | ------------------- | ----------------------------------------- |
| +22131.8% | +255.898 KiB | 100.0% | 1.16 KiB → 257 KiB | 26 → 23 | `forEach(Consumer)` | `java.util.stream.ReferencePipeline$Head` |

##### `invokeVirtual(Object, Object, int)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301152800`)

|    Change |        Delta |      % |               Size | Objects | Callee         | Location                                      |
| --------: | -----------: | -----: | -----------------: | ------: | -------------- | --------------------------------------------- |
| +22131.8% | +255.898 KiB | 100.0% | 1.16 KiB → 257 KiB | 26 → 23 | `compile(int)` | `org.codehaus.groovy.control.CompilationUnit` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301117000`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -23.515 KiB | 100.0% → 0.0% | 23.5 KiB → 0 B |  87 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2800` |
|     new |      +200 B | 0.0% → 100.0% |    0 B → 200 B |   0 → 4 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000003010bc800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030115e000`)

|  Change |       Delta |             % |           Size | Objects | Callee                             | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| removed | -21.789 KiB | 100.0% → 0.0% | 21.8 KiB → 0 B |  10 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001118000`  |
|     new |       +88 B | 0.0% → 100.0% |     0 B → 88 B |   0 → 2 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000000301150400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301134400`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -20.796 KiB |  94.9% → 0.0% | 20.8 KiB → 0 B |  37 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000009001118000`  |
| removed |  -1.125 KiB |   5.1% → 0.0% | 1.13 KiB → 0 B |  15 → 0 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |      +672 B | 0.0% → 100.0% |    0 B → 672 B |  0 → 12 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301005800`)

|  Change |       Delta |              % |            Size | Objects | Callee                                  | Location                                             |
| ------: | ----------: | -------------: | --------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -18.437 KiB |  100.0% → 0.0% |  18.4 KiB → 0 B |  23 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -99.8% |  -16.71 KiB | 90.8% → 100.0% | 16.8 KiB → 40 B |   2 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010bdc00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301176000`)

|  Change |      Delta |             % |           Size | Objects | Callee                             | Location                                             |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| removed | -16.75 KiB | 100.0% → 0.0% | 16.8 KiB → 0 B |   2 → 0 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |     +672 B | 0.0% → 100.0% |    0 B → 672 B |  0 → 12 | `invokeStatic(Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000301001c00` |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301118000`)

| Change |      Delta |             % |                Size | Objects | Callee                                   | Location                                            |
| -----: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| -23.8% |  -6.32 KiB |        100.0% | 26.6 KiB → 20.3 KiB | 61 → 53 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301117800` |
| -23.6% | -6.242 KiB | 99.5% → 99.8% | 26.5 KiB → 20.2 KiB | 58 → 52 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000301118400` |
| -75.2% | -3.664 KiB |  18.3% → 6.0% | 4.88 KiB → 1.21 KiB |   4 → 2 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030138c800` |
| -68.0% | -1.578 KiB |   8.7% → 3.7% |    2.32 KiB → 760 B |   6 → 7 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013dbc00` |
|    new |     +360 B |   0.0% → 1.7% |         0 B → 360 B |   0 → 6 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301115400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301003000`)

| Change |      Delta |              % |         Size | Objects | Callee                          | Location                                     |
| -----: | ---------: | -------------: | -----------: | ------: | ------------------------------- | -------------------------------------------- |
| -99.6% | -5.976 KiB | 100.0% → 17.6% | 6 KiB → 24 B |  28 → 1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|    new |     +112 B |   0.0% → 82.4% |  0 B → 112 B |   0 → 3 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |      Delta |             % |                Size | Objects | Callee                                                                                       | Location                                        |
| -----: | ---------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -61.7% | -4.773 KiB | 83.4% → 81.9% | 7.73 KiB → 2.96 KiB | 17 → 24 | `invokeExact_MT(Object, Object, Object)`                                                     | `java.lang.invoke.Invokers$Holder`              |
| -57.4% |     -904 B | 16.6% → 18.1% |    1.54 KiB → 672 B | 21 → 12 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301000400`)

|  Change |     Delta |             % |           Size | Objects | Callee                                                                                          | Location                                             |
| ------: | --------: | ------------: | -------------: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -5.57 KiB | 100.0% → 0.0% | 5.57 KiB → 0 B |  16 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2800` |
|     new |    +224 B | 0.0% → 100.0% |    0 B → 224 B |   0 → 4 | `newInvokeSpecial(Object)`                                                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -24 B |   0.4% → 0.0% |     24 B → 0 B |   1 → 0 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010b2c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301148c00`)

|  Change |      Delta |             % |           Size | Objects | Callee                                  | Location                                             |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -5.179 KiB | 100.0% → 0.0% | 5.18 KiB → 0 B |  11 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001101c00` |
|     new |      +24 B | 0.0% → 100.0% |     0 B → 24 B |   0 → 1 | `invokeStatic(Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001135400`)

|  Change |      Delta |             % |           Size | Objects | Callee                                          | Location                                             |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed | -4.742 KiB | 100.0% → 0.0% | 4.74 KiB → 0 B |   1 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090010bc800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000900182b000`)

|  Change |      Delta |             % |           Size | Objects | Callee                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | ------------------------------------------------ |
| removed | -4.742 KiB | 100.0% → 0.0% | 4.74 KiB → 0 B |   1 → 0 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000900182ac00`)

|  Change |      Delta |             % |           Size | Objects | Callee                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | ------------------------------------------------ |
| removed | -4.742 KiB | 100.0% → 0.0% | 4.74 KiB → 0 B |   1 → 0 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301104000`)

|  Change |      Delta |             % |               Size | Objects | Callee                     | Location                                            |
| ------: | ---------: | ------------: | -----------------: | ------: | -------------------------- | --------------------------------------------------- |
|  -65.7% | -3.875 KiB | 92.3% → 82.2% | 5.9 KiB → 2.02 KiB | 28 → 21 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| +225.4% | +1.109 KiB |  7.7% → 65.1% |    504 B → 1.6 KiB |  8 → 11 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301103c00` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000003010bc800`)

|  Change |      Delta |             % |                Size | Objects | Callee                                     | Location                                                   |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
|  -75.5% | -3.578 KiB | 90.5% → 82.8% | 4.74 KiB → 1.16 KiB |       1 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.reflection.GeneratedMetaMethod$Proxy` |
|  -73.7% |     -224 B |   5.7% → 5.6% |        304 B → 80 B |   6 → 1 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$59`                       |
|     new |      +96 B |   0.0% → 6.7% |          0 B → 96 B |   0 → 2 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$207`                      |
| removed |      -80 B |   1.5% → 0.0% |          80 B → 0 B |   2 → 0 | `calculateForClass(ClassNode, SourceCode)` | `org.gmetrics.metric.AbstractMethodMetric`                 |
| removed |      -64 B |   1.2% → 0.0% |          64 B → 0 B |   1 → 0 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$251`                      |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

| Change |      Delta |      % |               Size | Objects | Callee                           | Location                           |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------------------- | ---------------------------------- |
| -69.3% | -3.835 KiB | 100.0% | 5.54 KiB → 1.7 KiB | 19 → 14 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |     Delta |      % |                Size | Objects | Callee     | Location                                 |
| -----: | --------: | -----: | ------------------: | ------: | ---------- | ---------------------------------------- |
| -69.1% | -3.75 KiB | 100.0% | 5.43 KiB → 1.68 KiB | 17 → 13 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |      Delta |      % |                Size | Objects | Callee   | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------: | -------- | ------------------------------------------- |
| -69.5% | -3.726 KiB | 100.0% | 5.36 KiB → 1.63 KiB | 15 → 12 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change |      Delta |             % |             Size | Objects | Callee                   | Location                                            |
| ------: | ---------: | ------------: | ---------------: | ------: | ------------------------ | --------------------------------------------------- |
| removed | -5.484 KiB |  88.1% → 0.0% |   5.48 KiB → 0 B |  15 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090010bc000` |
|  -88.4% | -4.804 KiB | 87.3% → 25.2% | 5.44 KiB → 648 B | 19 → 14 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000000301104000` |
|     new | +1.882 KiB |  0.0% → 74.8% |   0 B → 1.88 KiB |  0 → 18 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010bc000` |
| removed |      -48 B |   0.8% → 0.0% |       48 B → 0 B |   1 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001105400` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301101c00`)

|  Change |      Delta |              % |                Size | Objects | Callee                     | Location                                    |
| ------: | ---------: | -------------: | ------------------: | ------: | -------------------------- | ------------------------------------------- |
|  -69.5% | -3.601 KiB | 99.3% → 100.0% | 5.18 KiB → 1.58 KiB |      11 | `isRuleSuppressed(Rule)`   | `org.codenarc.analyzer.SuppressionAnalyzer` |
| removed |      -40 B |    0.7% → 0.0% |          40 B → 0 B |   1 → 0 | `isDerivedFrom(ClassNode)` | `org.codehaus.groovy.ast.ClassNode`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030138c800`)

| Change |      Delta |      % |                Size | Objects | Callee                                                                                      | Location                                             |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -74.4% | -3.625 KiB | 100.0% | 4.88 KiB → 1.25 KiB |   4 → 3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |

##### `getText(BufferedReader)` (`org.codehaus.groovy.runtime.IOGroovyMethods`)

| Change |      Delta |      % |                Size | Objects | Callee       | Location                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------ | ------------------------- |
| -75.5% | -3.578 KiB | 100.0% | 4.74 KiB → 1.16 KiB |       1 | `toString()` | `java.lang.StringBuilder` |

##### `getText(File)` (`org.codehaus.groovy.runtime.ResourceGroovyMethods`)

| Change |      Delta |      % |                Size | Objects | Callee                    | Location                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- | --------------------------------------------- |
| -75.5% | -3.578 KiB | 100.0% | 4.74 KiB → 1.16 KiB |       1 | `getText(BufferedReader)` | `org.codehaus.groovy.runtime.IOGroovyMethods` |
