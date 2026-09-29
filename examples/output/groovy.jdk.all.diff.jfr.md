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
