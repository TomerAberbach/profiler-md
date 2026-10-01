# Sampling profile diff

Collected 310 samples → 334 samples (+24 samples, +7.7%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  +7.2% |   +22 | 98.1% → 97.6% | 304 → 326 |
| Ours             | +33.3% |    +2 |   1.9% → 2.4% |     6 → 8 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                      | Location                                                          |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------- |
| +126.7% |   +19 | 4.8% → 10.2% | 15 → 34 | `newArray(Class, int)`                                        | `java.lang.reflect.Array`                                         |
| +114.3% |    +8 |  2.3% → 4.5% |  7 → 15 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                                               |
| +250.0% |    +5 |  0.6% → 2.1% |   2 → 7 | `resize()`                                                    | `java.util.HashMap`                                               |
|     new |    +4 |  0.0% → 1.2% |   0 → 4 | `getCachedContext(PredictionContext)`                         | `groovyjarjarantlr4.v4.runtime.atn.ATN`                           |
| +300.0% |    +3 |  0.3% → 1.2% |   1 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                          |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `chooseMeta(MetaClassImpl)`                                   | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`       |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `transform(ATNState, boolean)`                                | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                     |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `invokeSpecial(Object, Object, Object)`                       | `java.lang.invoke.DirectMethodHandle$Holder`                      |
|  +20.0% |    +2 |  3.2% → 3.6% | 10 → 12 | `getNode(Object)`                                             | `java.util.HashMap`                                               |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `add(ATNConfig, PredictionContextCache)`                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                  |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `insertParameterTypes(int, Class[])`                          | `java.lang.invoke.MethodType`                                     |
|  +33.3% |    +2 |  1.9% → 2.4% |   6 → 8 | `getReturnState(int)`                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`        |
|  +50.0% |    +2 |  1.3% → 1.8% |   4 → 6 | `matches(Method, String, Class[])`                            | `java.lang.PublicMethods$Key`                                     |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `getMethodsRecursive(String, Class[], boolean)`               | `java.lang.Class`                                                 |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `compile()`                                                   | `java.util.regex.Pattern`                                         |
| +100.0% |    +2 |  0.6% → 1.2% |   2 → 4 | `compare(MutableBigInteger)`                                  | `java.math.MutableBigInteger`                                     |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `getInfoNullable()`                                           | `org.codehaus.groovy.runtime.GroovyCategorySupport$MyThreadLocal` |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `readBytes0(byte[], int, int)`                                | `java.io.RandomAccessFile`                                        |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `getExactSizeIfKnown()`                                       | `java.util.Spliterator`                                           |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `asCollector(int, Class, int)`                                | `java.lang.invoke.MethodHandle`                                   |

##### Ours

| Change | Delta |           % | Samples | Function                                                 | Location                                                                              |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `addViolationForSunImport(ImportNode, SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSunPackagesRule`                                 |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `matches(SourceCode)`                                    | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                      |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClassComplete(ClassNode)`                          | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>()`                                               | `org.codenarc.rule.AbstractAstVisitor`                                                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `doCall(Object)`                                         | `org.codenarc.rule.unused.UnusedPrivateMethodRule$_collectAllPrivateMethods_closure2` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitPropertyExpression(PropertyExpression)`            | `org.gmetrics.metric.abc.AbcAstVisitor`                                               |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                                         | `org.codenarc.rule.formatting.ClassStartsWithBlankLineRule`                           |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                      | Location                                                                                                                                              |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -70.0% |    -7 | 3.2% → 0.9% |  10 → 3 | `get(Object)`                                                                                 | `java.util.concurrent.ConcurrentHashMap`                                                                                                              |
|  -42.9% |    -3 | 2.3% → 1.2% |   7 → 4 | `getReachableTarget(Transition, int)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                                                                                                 |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`                                                                                                 |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                  | `java.math.MutableBigInteger`                                                                                                                         |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `invokeStatic(Object, Object, Object)`                                                        | `java.lang.invoke.DirectMethodHandle$Holder`                                                                                                          |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `evaluateToArrayNode(IntFunction)`                                                            | `java.util.stream.AbstractPipeline`                                                                                                                   |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                                                                                                    |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`                                                                                                          |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                             | `groovy.lang.MetaClassImpl`                                                                                                                           |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `binarySearch(Object[], Object, Comparator)`                                                  | `java.util.Arrays`                                                                                                                                    |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `provide(Object)`                                                                             | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x00000070010b6d70 → org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000a8010b6d70` |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `isAssignableFrom(Class)`                                                                     | `java.lang.Class`                                                                                                                                     |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `checkCustomized(MethodHandle)`                                                               | `java.lang.invoke.Invokers`                                                                                                                           |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `valueConversion(Class, Class, boolean, boolean)`                                             | `java.lang.invoke.MethodHandleImpl`                                                                                                                   |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000007001002c00 → java.lang.invoke.LambdaForm$MH.0x000000a801476800`                                               |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `equals(Object[], Object[])`                                                                  | `java.util.Arrays`                                                                                                                                    |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `equals(MethodType)`                                                                          | `java.lang.invoke.MethodType`                                                                                                                         |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `hashCodeRange(int, int)`                                                                     | `java.util.ArrayList`                                                                                                                                 |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `put(Object, Object)`                                                                         | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`                                                                                                  |

##### Ours

|  Change | Delta |           % | Samples | Function                                                  | Location                                                                                 |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `processMethodNode(MethodNode)`                           | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `calculate(MethodNode, SourceCode)`                       | `org.gmetrics.metric.abc.AbcMetric`                                                      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference)`                       | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor$_processParameters_closure1` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference, Reference, Reference)` | `org.codenarc.rule.unused.UnusedPrivateMethodRule$_getViolations_closure1`               |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `addViolation(String, int)`                               | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                          | `org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionRule`                         |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

|   Change | Delta |             % |   Samples | Function                                                  | Location                                                                                                  |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +4150.0% |   +83 |  0.6% → 25.4% |    2 → 85 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000070013a1000 → java.lang.invoke.LambdaForm$MH.0x000000a801142000`   |
|  +625.0% |   +75 |  3.9% → 26.0% |   12 → 87 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001133400 → java.lang.invoke.LambdaForm$MH.0x000000a801140c00`   |
| +1800.0% |   +72 |  1.3% → 22.8% |    4 → 76 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001148800 → java.lang.invoke.LambdaForm$MH.0x000000a801150800`   |
| +7100.0% |   +71 |  0.3% → 21.6% |    1 → 72 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001132400 → java.lang.invoke.LambdaForm$MH.0x000000a8012d8400`   |
| +7000.0% |   +70 |  0.3% → 21.3% |    1 → 71 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000070012c4400 → java.lang.invoke.LambdaForm$MH.0x000000a80138dc00`   |
|  +100.0% |   +68 | 21.9% → 40.7% |  68 → 136 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000007001142000 → java.lang.invoke.LambdaForm$MH.0x000000a80113bc00`   |
|  +182.4% |   +62 | 11.0% → 28.7% |   34 → 96 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070012c5c00 → java.lang.invoke.LambdaForm$MH.0x000000a8013d2000`   |
| +5000.0% |   +50 |  0.3% → 15.3% |    1 → 51 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000070013d2c00 → java.lang.invoke.LambdaForm$MH.0x000000a8013db800`   |
|      new |   +49 |  0.0% → 14.7% |    0 → 49 | `invoke(Object, int)`                                     | `java.lang.invoke.LambdaForm$MH.0x000000a80109bc00`                                                       |
| +4800.0% |   +48 |  0.3% → 14.7% |    1 → 49 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000070014f8400 → java.lang.invoke.LambdaForm$MH.0x000000a80182f000`   |
| +1125.0% |   +45 |  1.3% → 14.7% |    4 → 49 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001448400 → java.lang.invoke.LambdaForm$MH.0x000000a80160ac00`   |
| +3300.0% |   +33 |  0.3% → 10.2% |    1 → 34 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000070014ea400 → java.lang.invoke.LambdaForm$MH.0x000000a801829c00`   |
| +1500.0% |   +30 |   0.6% → 9.6% |    2 → 32 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070012bcc00 → java.lang.invoke.LambdaForm$MH.0x000000a8012b8800`   |
|   +31.8% |   +27 | 27.4% → 33.5% |  85 → 112 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800 → java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |
|  +866.7% |   +26 |   1.0% → 8.7% |    3 → 29 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001003000 → java.lang.invoke.LambdaForm$MH.0x000000a801145c00`   |
|   +12.8% |   +23 | 57.7% → 60.5% | 179 → 202 | `doMethodInvoke(Object, Object[])`                        | `groovy.lang.MetaMethod`                                                                                  |
|   +19.3% |   +23 | 38.4% → 42.5% | 119 → 142 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400 → java.lang.invoke.LambdaForm$DMH.0x000000a8010bd400` |
|   +12.5% |   +22 | 56.8% → 59.3% | 176 → 198 | `invoke(Object, Object[])`                                | `org.codehaus.groovy.reflection.CachedMethod`                                                             |
|   +95.5% |   +21 |  7.1% → 12.9% |   22 → 43 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001117000 → java.lang.invoke.LambdaForm$MH.0x000000a801117000`   |
|   +10.9% |   +21 | 61.9% → 63.8% | 192 → 213 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |

##### Ours

|  Change | Delta |             % | Samples | Function                                          | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  +23.9% |   +16 | 21.6% → 24.9% | 67 → 83 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  +28.3% |   +13 | 14.8% → 17.7% | 46 → 59 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  +24.4% |   +11 | 14.5% → 16.8% | 45 → 56 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                             |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `<clinit>()`                                      | `org.codenarc.CodeNarc`                                                                      |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                                      |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitMethodEx(MethodNode)`                       | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`                          |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `super$2$visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`                                |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `main(String[])`                                  | `org.codenarc.CodeNarc`                                                                      |
|   +2.1% |    +2 | 30.3% → 28.7% | 94 → 96 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                   |
|  +50.0% |    +2 |   1.3% → 1.8% |   4 → 6 | `calculate(MethodNode, SourceCode)`               | `org.gmetrics.metric.abc.AbcMetric`                                                          |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `visitBinaryExpression(BinaryExpression)`         | `org.gmetrics.metric.abc.AbcAstVisitor`                                                      |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `super$3$visitMethod(MethodNode)`                 | `org.gmetrics.metric.abc.AbcAstVisitor`                                                      |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `visitMethod(MethodNode)`                         | `org.gmetrics.metric.abc.AbcAstVisitor`                                                      |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitPropertyExpression(PropertyExpression)`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `doCall(Object)`                                  | `org.codenarc.rule.imports.ImportFromSunPackagesRule$_applyTo_closure1`                      |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |             % |  Samples | Function                                         | Location                                                                                                |
| -----: | ----: | ------------: | -------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| -99.1% |  -111 |  36.1% → 0.3% |  112 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00 → java.lang.invoke.LambdaForm$MH.0x000000a80118f800` |
| -96.6% |   -84 |  28.1% → 0.9% |   87 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013d2000 → java.lang.invoke.LambdaForm$MH.0x000000a801184c00` |
| -96.8% |   -60 |  20.0% → 0.6% |   62 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700182f000 → java.lang.invoke.LambdaForm$MH.0x000000a801453c00` |
| -92.2% |   -59 |  20.6% → 1.5% |   64 → 5 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013dbc00 → java.lang.invoke.LambdaForm$MH.0x000000a80115c800` |
| -98.3% |   -57 |  18.7% → 0.3% |   58 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010bc000 → java.lang.invoke.LambdaForm$MH.0x000000a801105c00` |
| -60.9% |   -53 | 28.1% → 10.2% |  87 → 34 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400 → java.lang.invoke.LambdaForm$MH.0x000000a8012c5c00` |
| -98.1% |   -53 |  17.4% → 0.3% |   54 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700138dc00 → java.lang.invoke.LambdaForm$MH.0x000000a8014b2c00` |
| -97.6% |   -41 |  13.5% → 0.3% |   42 → 1 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700160bc00 → java.lang.invoke.LambdaForm$MH.0x000000a801485c00` |
| -97.4% |   -38 |  12.6% → 0.3% |   39 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013db800 → java.lang.invoke.LambdaForm$MH.0x000000a8014b2400` |
| -97.2% |   -35 |  11.6% → 0.3% |   36 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001829c00 → java.lang.invoke.LambdaForm$MH.0x000000a8010b1400` |
| -27.6% |   -32 | 37.4% → 25.1% | 116 → 84 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001141000 → java.lang.invoke.LambdaForm$MH.0x000000a801119400` |
| -93.5% |   -29 |  10.0% → 0.6% |   31 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001145c00 → java.lang.invoke.LambdaForm$MH.0x000000a8013db000` |
| -32.6% |   -28 | 27.7% → 17.4% |  86 → 58 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001119400 → java.lang.invoke.LambdaForm$MH.0x000000a8010bc000` |
| -96.3% |   -26 |   8.7% → 0.3% |   27 → 1 | `invoke(Object, int)`                            | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00 → java.lang.invoke.LambdaForm$MH.0x000000a801278400` |
| -95.8% |   -23 |   7.7% → 0.3% |   24 → 1 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b8400 → java.lang.invoke.LambdaForm$MH.0x000000a80141f400` |
| -22.8% |   -21 | 29.7% → 21.3% |  92 → 71 | `guard(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001104000 → java.lang.invoke.LambdaForm$MH.0x000000a801104000` |
| -95.5% |   -21 |   7.1% → 0.3% |   22 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105400 → java.lang.invoke.LambdaForm$MH.0x000000a801185400` |
| -19.5% |   -16 | 26.5% → 19.8% |  82 → 66 | `compilationUnit()`                              | `org.apache.groovy.parser.antlr4.GroovyParser`                                                          |
| -19.5% |   -16 | 26.5% → 19.8% |  82 → 66 | `buildCST(PredictionMode)`                       | `org.apache.groovy.parser.antlr4.AstBuilder`                                                            |
| -21.9% |   -16 | 23.5% → 17.1% |  73 → 57 | `classBodyDeclaration(int)`                      | `org.apache.groovy.parser.antlr4.GroovyParser`                                                          |

##### Ours

|  Change | Delta |             % | Samples | Function                                                | Location                                                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -14.0% |   -12 | 27.7% → 22.2% | 86 → 74 | `init()`                                                | `org.codenarc.source.AbstractSourceCode`                                    |
|  -13.2% |   -12 | 29.4% → 23.7% | 91 → 79 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                            |
|  -13.9% |   -11 | 25.5% → 20.4% | 79 → 68 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  -19.2% |   -10 | 16.8% → 12.6% | 52 → 42 | `getAst()`                                              | `org.codenarc.source.AbstractSourceCode`                                    |
|  -18.4% |    -9 | 15.8% → 12.0% | 49 → 40 | `init()`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -20.5% |    -9 | 14.2% → 10.5% | 44 → 35 | `isRuleSuppressed(Rule)`                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -12.5% |    -9 | 23.2% → 18.9% | 72 → 63 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -42.1% |    -8 |   6.1% → 3.3% | 19 → 11 | `doCall(Object)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   -9.8% |    -5 | 16.5% → 13.8% | 51 → 46 | `visitMethod(MethodNode)`                               | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -36.4% |    -4 |   3.5% → 2.1% |  11 → 7 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  -66.7% |    -4 |   1.9% → 0.6% |   6 → 2 | `getAstVisitor()`                                       | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| removed |    -4 |   1.3% → 0.0% |   4 → 0 | `line(int)`                                             | `org.codenarc.source.AbstractSourceCode`                                    |
|  -75.0% |    -3 |   1.3% → 0.3% |   4 → 1 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                  |
|  -75.0% |    -3 |   1.3% → 0.3% |   4 → 1 | `doCall(Object)`                                        | `org.codenarc.rule.unused.UnusedVariableRule$_applyTo_closure2`             |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`            |
|  -50.0% |    -3 |   1.9% → 0.9% |   6 → 3 | `applyVisitor(AstVisitor, SourceCode)`                  | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
|  -75.0% |    -3 |   1.3% → 0.3% |   4 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`         | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `super$3$visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  -50.0% |    -3 |   1.9% → 0.9% |   6 → 3 | `getNumberOfViolationsWithPriority(int, boolean)`       | `org.codenarc.results.FileResults`                                          |
|  -50.0% |    -3 |   1.9% → 0.9% |   6 → 3 | `getNumberOfViolationsWithPriority(int)`                | `org.codenarc.results.FileResults`                                          |

# Allocated heap profile diff

Allocated 11.8 GiB → 12 GiB (+167.918 MiB, +1.4%) over 6,262 samples → 6,345 samples (1.93 MiB per sample).

| Category         | Change |        Delta |     % |                Size |       Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | ------------: |
| Standard library |  +1.4% | +163.498 MiB | 99.1% | 11.7 GiB → 11.9 GiB | 6,156 → 6,243 |
| Ours             |  +4.1% |    +4.42 MiB |  0.9% |   107 MiB → 111 MiB |       53 → 56 |
| Unknown          |  -2.0% |       -744 B | <0.1% | 37.2 KiB → 36.4 KiB |       53 → 46 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|   Change |       Delta |            % |                Size |   Samples | Function                                                                       | Location                                                   |
| -------: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|   +44.3% | +91.575 MiB |  1.7% → 2.4% |   207 MiB → 298 MiB | 106 → 155 | `copyOfRange(Object[], int, int)`                                              | `java.util.Arrays`                                         |
|   +31.7% | +88.066 MiB |  2.3% → 3.0% |   278 MiB → 366 MiB | 140 → 122 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                 | `java.lang.invoke.BoundMethodHandle$Species_LLLL`          |
|  +250.0% |  +79.96 MiB |  0.3% → 0.9% |    32 MiB → 112 MiB |   16 → 26 | `unreflect(Method)`                                                            | `java.lang.invoke.MethodHandles$Lookup`                    |
|   +92.0% | +44.066 MiB |  0.4% → 0.7% |   47.9 MiB → 92 MiB |   23 → 45 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`        |
|   +13.0% | +43.452 MiB |  2.8% → 3.1% |   333 MiB → 377 MiB | 171 → 194 | `make(MethodType, LambdaForm, Object, Object)`                                 | `java.lang.invoke.BoundMethodHandle$Species_LL`            |
|   +41.4% |  +38.18 MiB |  0.8% → 1.1% |  92.3 MiB → 130 MiB |   46 → 64 | `toBigInteger(int)`                                                            | `java.math.MutableBigInteger`                              |
|   +19.9% | +35.468 MiB |  1.5% → 1.7% |   178 MiB → 214 MiB |  90 → 106 | `optimize(Pattern$Node)`                                                       | `java.util.regex.Pattern$BnM`                              |
|  +305.7% | +30.558 MiB |  0.1% → 0.3% |   10 MiB → 40.6 MiB |    5 → 20 | `valueOf(int)`                                                                 | `java.lang.Integer`                                        |
|  +131.1% | +28.577 MiB |  0.2% → 0.4% | 21.8 MiB → 50.4 MiB |   15 → 22 | `copy()`                                                                       | `java.lang.reflect.Method`                                 |
|   +61.4% |     +26 MiB |  0.3% → 0.6% | 42.4 MiB → 68.4 MiB |   21 → 35 | `matcher(CharSequence)`                                                        | `java.util.regex.Pattern`                                  |
|   +21.6% | +25.964 MiB |  1.0% → 1.2% |   120 MiB → 146 MiB |   64 → 76 | `resize()`                                                                     | `java.util.HashMap`                                        |
|   +10.5% | +21.971 MiB |  1.7% → 1.9% |   210 MiB → 232 MiB | 107 → 120 | `newNode(int, Object, Object, HashMap$Node)`                                   | `java.util.HashMap`                                        |
| +2455.1% | +21.907 MiB | <0.1% → 0.2% |  914 KiB → 22.8 MiB |         1 | `initCEN(int, ZipCoder)`                                                       | `java.util.zip.ZipFile$Source`                             |
|    +8.1% | +20.632 MiB |  2.1% → 2.2% |   255 MiB → 276 MiB | 132 → 143 | `lambdaFormEditor(LambdaForm)`                                                 | `java.lang.invoke.LambdaFormEditor`                        |
|   +24.8% | +18.325 MiB |  0.6% → 0.8% |   74 MiB → 92.4 MiB |   37 → 44 | `map(Function)`                                                                | `java.util.stream.ReferencePipeline`                       |
|    +8.1% |  +18.32 MiB |  1.9% → 2.0% |   227 MiB → 245 MiB | 116 → 125 | `of(byte, int, int)`                                                           | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
|   +83.9% | +17.332 MiB |  0.2% → 0.3% |   20.6 MiB → 38 MiB |   11 → 18 | `<init>(Method, boolean)`                                                      | `java.lang.invoke.MemberName`                              |
|   +57.0% | +16.199 MiB |  0.2% → 0.4% | 28.4 MiB → 44.6 MiB |   15 → 21 | `getChild(PredictionContext, int)`                                             | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|   +71.8% |  +16.11 MiB |  0.2% → 0.3% | 22.4 MiB → 38.6 MiB |   11 → 20 | `basicTypesOrd(Class[])`                                                       | `java.lang.invoke.LambdaForm$BasicType`                    |
|   +88.9% | +15.994 MiB |  0.1% → 0.3% |     18 MiB → 34 MiB |    9 → 17 | `<init>()`                                                                     | `java.util.regex.Pattern$BitClass`                         |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function                                                                                      | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -13.1% | -107.555 MiB |  6.8% → 5.8% |   821 MiB → 713 MiB | 369 → 357 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                              |
|  -21.6% | -106.835 MiB |  4.1% → 3.2% |   495 MiB → 388 MiB | 199 → 202 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                        |
|  -11.0% |  -70.305 MiB |  5.3% → 4.6% |   639 MiB → 569 MiB | 323 → 288 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  -22.7% |  -60.012 MiB |  2.2% → 1.7% |   265 MiB → 205 MiB | 134 → 109 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                              |
|  -56.2% |  -43.208 MiB |  0.6% → 0.3% | 76.8 MiB → 33.6 MiB |   37 → 17 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  -10.0% |  -38.302 MiB |  3.2% → 2.8% |   384 MiB → 346 MiB | 199 → 174 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                  |
|   -5.0% |    -28.8 MiB |  4.7% → 4.4% |   572 MiB → 543 MiB | 303 → 288 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                      |
|  -72.9% |  -23.323 MiB |  0.3% → 0.1% |   32 MiB → 8.66 MiB |    16 → 5 | `join(PredictionContext, PredictionContext)`                                                  | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|  -30.0% |  -23.027 MiB |  0.6% → 0.4% | 76.7 MiB → 53.7 MiB |   37 → 27 | `newSlice(int[], int, boolean)`                                                               | `java.util.regex.Pattern`                                  |
|  -14.0% |  -22.265 MiB |  1.3% → 1.1% |   159 MiB → 136 MiB |   80 → 68 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`           |
| removed |  -22.063 MiB |  0.2% → 0.0% |      22.1 MiB → 0 B |     2 → 0 | `initTable()`                                                                                 | `java.util.concurrent.ConcurrentHashMap`                   |
|  -29.0% |  -20.301 MiB |  0.6% → 0.4% |   70 MiB → 49.7 MiB |   35 → 26 | `convertToTypeArray(Object[])`                                                                | `org.codehaus.groovy.runtime.MetaClassHelper`              |
|  -76.9% |   -19.99 MiB | 0.2% → <0.1% |      26 MiB → 6 MiB |    12 → 3 | `<init>(Object, Object)`                                                                      | `groovy.lang.Tuple2`                                       |
|  -11.6% |  -19.603 MiB |  1.4% → 1.2% |   169 MiB → 149 MiB |   88 → 75 | `valueOf(long)`                                                                               | `java.lang.Long`                                           |
|   -6.1% |  -19.269 MiB |  2.6% → 2.4% |   317 MiB → 298 MiB | 141 → 152 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                           |
|   -6.1% |  -19.008 MiB |  2.6% → 2.4% |   312 MiB → 293 MiB | 151 → 145 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                                  |
|  -28.2% |   -18.63 MiB |  0.5% → 0.4% |   66 MiB → 47.3 MiB |   33 → 25 | `make(byte, Class, MemberName, Class)`                                                        | `java.lang.invoke.DirectMethodHandle`                      |
|  -81.8% |   -17.99 MiB | 0.2% → <0.1% |      22 MiB → 4 MiB |    11 → 2 | `getPlainNodeReference(boolean)`                                                              | `org.codehaus.groovy.ast.ClassNode`                        |
|  -24.8% |  -17.447 MiB |  0.6% → 0.4% |   70.4 MiB → 53 MiB |   34 → 27 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                             | `java.util.stream.MatchOps`                                |
|  -29.7% |   -17.14 MiB |  0.5% → 0.3% | 57.7 MiB → 40.6 MiB |   30 → 21 | `getParameterTypes()`                                                                         | `java.lang.reflect.Method`                                 |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|     Change |        Delta |             % |               Size |     Samples | Function                                         | Location                                                                                                |
| ---------: | -----------: | ------------: | -----------------: | ----------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|    +877.8% |   +3.368 GiB |  3.2% → 31.3% | 393 MiB → 3.75 GiB | 198 → 1,935 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700118c000 → java.lang.invoke.LambdaForm$MH.0x000000a8013db800` |
|   +1180.0% |   +3.083 GiB |  2.2% → 27.9% | 268 MiB → 3.34 GiB | 139 → 1,743 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001179800 → java.lang.invoke.LambdaForm$MH.0x000000a8013d2000` |
|  +13004.8% |   +2.973 GiB |  0.2% → 25.0% |   23.4 MiB → 3 GiB |  12 → 1,499 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001416000 → java.lang.invoke.LambdaForm$MH.0x000000a80160ac00` |
|  +30276.1% |   +2.961 GiB |  0.1% → 24.8% |  10 MiB → 2.97 GiB |  11 → 1,558 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001005800 → java.lang.invoke.LambdaForm$MH.0x000000a801140c00` |
| +144596.1% |   +2.822 GiB | <0.1% → 23.6% |   2 MiB → 2.82 GiB |   1 → 1,412 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001503800 → java.lang.invoke.LambdaForm$MH.0x000000a801829c00` |
|    +465.4% |   +2.668 GiB |  4.9% → 27.1% | 587 MiB → 3.24 GiB | 302 → 1,763 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001145c00 → java.lang.invoke.LambdaForm$MH.0x000000a801141000` |
|  +27754.4% |    +1.11 GiB |  <0.1% → 9.3% | 4.1 MiB → 1.11 GiB |     4 → 576 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001185000 → java.lang.invoke.LambdaForm$MH.0x000000a8012d8400` |
| +117271.5% |   +1.076 GiB |  <0.1% → 9.0% | 962 KiB → 1.08 GiB |     1 → 558 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700140a000 → java.lang.invoke.LambdaForm$MH.0x000000a801398000` |
|  +14007.3% | +839.561 MiB |  <0.1% → 6.9% | 5.99 MiB → 846 MiB |     3 → 418 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001487800 → java.lang.invoke.LambdaForm$MH.0x000000a80160a800` |
|    +227.6% | +677.811 MiB |   2.5% → 8.0% |  298 MiB → 976 MiB |   150 → 502 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001133c00 → java.lang.invoke.LambdaForm$MH.0x000000a801150800` |
|   +8199.7% | +655.654 MiB |   0.1% → 5.4% |    8 MiB → 664 MiB |     4 → 328 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001584000 → java.lang.invoke.LambdaForm$MH.0x000000a801607c00` |
|    +175.7% | +590.058 MiB |   2.8% → 7.5% |  336 MiB → 926 MiB |   167 → 471 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012ae000 → java.lang.invoke.LambdaForm$MH.0x000000a801105400` |
|  +56528.3% | +531.195 MiB |  <0.1% → 4.3% |  962 KiB → 532 MiB |     1 → 272 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700140b800 → java.lang.invoke.LambdaForm$MH.0x000000a80138c800` |
|  +11476.8% | +485.928 MiB |  <0.1% → 4.0% | 4.23 MiB → 490 MiB |     3 → 250 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700116c000 → java.lang.invoke.LambdaForm$MH.0x000000a8012c6400` |
|   +8280.5% | +409.966 MiB |  <0.1% → 3.4% | 4.95 MiB → 415 MiB |     4 → 211 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012c5000 → java.lang.invoke.LambdaForm$MH.0x000000a8013dc400` |
|        new | +395.803 MiB |   0.0% → 3.2% |      0 B → 396 MiB |     0 → 168 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000a80146c800`                                                     |
|  +19399.9% | +387.807 MiB |  <0.1% → 3.2% |    2 MiB → 390 MiB |     1 → 165 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001915000 → java.lang.invoke.LambdaForm$MH.0x000000a80197d000` |
|  +18800.0% | +375.813 MiB |  <0.1% → 3.1% |    2 MiB → 378 MiB |     1 → 159 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014f1000 → java.lang.invoke.LambdaForm$MH.0x000000a80197d400` |
|  +18800.0% | +375.813 MiB |  <0.1% → 3.1% |    2 MiB → 378 MiB |     1 → 159 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001610400 → java.lang.invoke.LambdaForm$MH.0x000000a80197f400` |
|  +18799.9% | +375.813 MiB |  <0.1% → 3.1% |    2 MiB → 378 MiB |     1 → 159 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001562000 → java.lang.invoke.LambdaForm$MH.0x000000a80197f000` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                                                                |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  -88.0% |    -3.18 GiB |  30.6% → 3.6% |  3.62 GiB → 446 MiB |   1,849 → 226 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013db800 → java.lang.invoke.LambdaForm$MH.0x000000a80118c000` |
|  -99.4% |   -3.055 GiB |  26.0% → 0.2% | 3.07 GiB → 18.6 MiB |    1,617 → 15 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00 → java.lang.invoke.LambdaForm$MH.0x000000a801141400` |
|  -98.8% |   -2.808 GiB |  24.1% → 0.3% | 2.84 GiB → 35.9 MiB |    1,412 → 18 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700160bc00 → java.lang.invoke.LambdaForm$MH.0x000000a801537400` |
|  -87.7% |   -2.788 GiB |  26.9% → 3.3% |  3.18 GiB → 399 MiB |   1,737 → 158 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001141000 → java.lang.invoke.LambdaForm$MH.0x000000a801133000` |
|  -99.7% |   -2.723 GiB |  23.1% → 0.1% | 2.73 GiB → 8.23 MiB |     1,415 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013dbc00 → java.lang.invoke.LambdaForm$MH.0x000000a8013a0400` |
|  -72.0% |   -1.889 GiB |  22.2% → 6.1% |  2.62 GiB → 752 MiB |   1,300 → 368 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001829c00 → java.lang.invoke.LambdaForm$MH.0x000000a80182f000` |
|  -95.0% |   -1.055 GiB |   9.4% → 0.5% | 1.11 GiB → 56.5 MiB |      577 → 30 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400 → java.lang.invoke.LambdaForm$MH.0x000000a801179400` |
|  -98.4% | -950.895 MiB |   8.0% → 0.1% |  966 MiB → 15.3 MiB |       484 → 8 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105400 → java.lang.invoke.LambdaForm$MH.0x000000a80116c000` |
|  -68.3% | -877.934 MiB |  10.6% → 3.3% |  1.26 GiB → 408 MiB |     695 → 202 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012c5400 → java.lang.invoke.LambdaForm$MH.0x000000a8012ae000` |
|  -99.1% | -861.467 MiB |   7.2% → 0.1% |     869 MiB → 8 MiB |       414 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700160b800 → java.lang.invoke.LambdaForm$MH.0x000000a8014dec00` |
|  -22.9% |  -817.06 MiB | 29.4% → 22.4% | 3.48 GiB → 2.68 GiB | 1,816 → 1,381 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013d2000 → java.lang.invoke.LambdaForm$MH.0x000000a8013dbc00` |
|  -99.5% |  -733.56 MiB |  6.1% → <0.1% |     738 MiB → 4 MiB |       363 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700182f000 → java.lang.invoke.LambdaForm$MH.0x000000a80156d400` |
|  -92.2% | -641.579 MiB |   5.7% → 0.4% |    696 MiB → 54 MiB |      328 → 26 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001608c00 → java.lang.invoke.LambdaForm$MH.0x000000a80155d800` |
|  -99.6% |  -484.48 MiB |  4.0% → <0.1% |  486 MiB → 1.72 MiB |       235 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012c6400 → java.lang.invoke.LambdaForm$MH.0x000000a8014a2400` |
|  -38.3% | -391.405 MiB |   8.4% → 5.1% | 1,021 MiB → 629 MiB |     522 → 327 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001150800 → java.lang.invoke.LambdaForm$MH.0x000000a801145c00` |
|  -88.5% | -371.195 MiB |   3.5% → 0.4% |  420 MiB → 48.4 MiB |      213 → 24 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700138c000 → java.lang.invoke.LambdaForm$MH.0x000000a801184c00` |
|  -99.7% | -349.556 MiB |  2.9% → <0.1% |  351 MiB → 1.09 MiB |       176 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012c5c00 → java.lang.invoke.LambdaForm$MH.0x000000a801185000` |
|  -72.5% | -323.062 MiB |   3.7% → 1.0% |   446 MiB → 123 MiB |      213 → 62 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013dc400 → java.lang.invoke.LambdaForm$MH.0x000000a801398c00` |
|  -99.4% | -319.841 MiB |  2.7% → <0.1% |     322 MiB → 2 MiB |       140 → 1 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000700146ac00 → java.lang.invoke.LambdaForm$MH.0x000000a801450400` |
| removed | -319.841 MiB |   2.6% → 0.0% |       320 MiB → 0 B |       139 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700149d800`                                                     |

# Retained heap profile diff

Retained 280 KiB → 71.9 KiB (-207.773 KiB, -74.3%) over 106 objects → 115 objects (2.64 KiB → 641 B per object).

| Category         | Change |        Delta |              % |               Size |   Objects |
| ---------------- | -----: | -----------: | -------------: | -----------------: | --------: |
| Standard library | -74.3% | -207.757 KiB | 100.0% → 99.9% | 280 KiB → 71.9 KiB | 104 → 114 |
| Ours             | -28.6% |        -16 B |   <0.1% → 0.1% |        56 B → 40 B |     2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |           Size | Objects | Function                                                                                                | Location                                                |
| ------: | ----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new | +64.015 KiB | 0.0% → 89.0% |   0 B → 64 KiB |   0 → 1 | `<clinit>()`                                                                                            | `com.sun.org.apache.xerces.internal.util.XMLChar`       |
|     new |  +1.015 KiB |  0.0% → 1.4% | 0 B → 1.02 KiB |   0 → 1 | `resize(int)`                                                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|     new |      +536 B |  0.0% → 0.7% |    0 B → 536 B |   0 → 2 | `copyOf(Object[], int)`                                                                                 | `java.util.Arrays`                                      |
|  +65.4% |      +272 B |  0.1% → 0.9% |  416 B → 688 B |   2 → 3 | `resize()`                                                                                              | `java.util.HashMap`                                     |
| +150.0% |      +264 B |  0.1% → 0.6% |  176 B → 440 B |   2 → 5 | `copy()`                                                                                                | `java.lang.reflect.Method`                              |
|     new |      +208 B |  0.0% → 0.3% |    0 B → 208 B |   0 → 1 | `copyOfRange(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
|     new |      +192 B |  0.0% → 0.3% |    0 B → 192 B |   0 → 4 | `<init>(Class, ClassInfo)`                                                                              | `org.codehaus.groovy.reflection.CachedClass`            |
|  +42.9% |      +168 B |  0.1% → 0.8% |  392 B → 560 B |  7 → 10 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                       | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| +400.0% |      +128 B | <0.1% → 0.2% |   32 B → 160 B |   1 → 5 | `<init>(int)`                                                                                           | `org.codehaus.groovy.util.ListHashMap`                  |
|     new |      +128 B |  0.0% → 0.2% |    0 B → 128 B |   0 → 2 | `lambda$initValue$2(Method)`                                                                            | `org.codehaus.groovy.reflection.CachedClass$3`          |
| +100.0% |      +120 B | <0.1% → 0.3% |  120 B → 240 B |   1 → 2 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`    | `java.lang.ClassLoader`                                 |
|     new |      +120 B |  0.0% → 0.2% |    0 B → 120 B |   0 → 3 | `make(MethodType, LambdaForm, Object, Object)`                                                          | `java.lang.invoke.BoundMethodHandle$Species_LL`         |
|     new |      +120 B |  0.0% → 0.2% |    0 B → 120 B |   0 → 1 | `newInstance()`                                                                                         | `javax.xml.parsers.SAXParserFactory`                    |
|     new |       +96 B |  0.0% → 0.1% |     0 B → 96 B |   0 → 1 | `compress(char[], int, int)`                                                                            | `java.lang.StringUTF16`                                 |
| +366.7% |       +88 B | <0.1% → 0.2% |   24 B → 112 B |       1 | `initClassName()`                                                                                       | `java.lang.Class`                                       |
|     new |       +80 B |  0.0% → 0.1% |     0 B → 80 B |   0 → 1 | `decompress(ByteBuffer, int)`                                                                           | `jdk.internal.jimage.ImageLocation`                     |
|     new |       +64 B |  0.0% → 0.1% |     0 B → 64 B |   0 → 1 | `newModuleDescriptor(String, ModuleDescriptor$Version, Set, Set, Set, Set, Set, Set, Set, String, int)` | `java.lang.module.ModuleDescriptor$1`                   |
|     new |       +64 B |  0.0% → 0.1% |     0 B → 64 B |   0 → 2 | `<init>(int)`                                                                                           | `java.util.ArrayList`                                   |
|     new |       +64 B |  0.0% → 0.1% |     0 B → 64 B |   0 → 1 | `lambda$inheritFields$19(CachedClass)`                                                                  | `groovy.lang.MetaClassImpl`                             |
|     new |       +64 B |  0.0% → 0.1% |     0 B → 64 B |   0 → 1 | `lambda$inheritStaticInterfaceFields$17(CachedClass)`                                                   | `groovy.lang.MetaClassImpl`                             |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |          Size | Objects | Function                                                                                                            | Location                                                 |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed | -256.015 KiB | 91.5% → 0.0% | 256 KiB → 0 B |   1 → 0 | `initTable()`                                                                                                       | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -16.015 KiB |  5.7% → 0.0% |  16 KiB → 0 B |   1 → 0 | `<init>(int, int, MemorySegment)`                                                                                   | `java.nio.HeapByteBuffer`                                |
|  -80.0% |       -608 B |  0.3% → 0.2% | 760 B → 152 B |   5 → 1 | `getPlainNodeReference(boolean)`                                                                                    | `org.codehaus.groovy.ast.ClassNode`                      |
| removed |       -528 B |  0.2% → 0.0% |   528 B → 0 B |   1 → 0 | `<init>(int)`                                                                                                       | `java.util.concurrent.atomic.AtomicIntegerArray`         |
| removed |       -528 B |  0.2% → 0.0% |   528 B → 0 B |   1 → 0 | `<init>(HashEdgeMap, int)`                                                                                          | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap`          |
|  -69.1% |       -448 B |  0.2% → 0.3% | 648 B → 200 B |   5 → 3 | `getDeclaredMethods0(boolean)`                                                                                      | `java.lang.Class`                                        |
| removed |       -376 B |  0.1% → 0.0% |   376 B → 0 B |   1 → 0 | `toArray()`                                                                                                         | `java.lang.PublicMethods`                                |
|  -89.7% |       -208 B | 0.1% → <0.1% |  232 B → 24 B |   2 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                     | `java.lang.ClassLoader`                                  |
|  -33.3% |       -168 B |  0.2% → 0.5% | 504 B → 336 B |   9 → 6 | `grow(int)`                                                                                                         | `java.util.ArrayList`                                    |
| removed |       -160 B |  0.1% → 0.0% |   160 B → 0 B |   2 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL` |
| removed |       -128 B | <0.1% → 0.0% |   128 B → 0 B |   2 → 0 | `clone()`                                                                                                           | `java.lang.Object`                                       |
|  -66.7% |        -80 B | <0.1% → 0.1% |  120 B → 40 B |   3 → 1 | `set(Method)`                                                                                                       | `java.beans.MethodRef`                                   |
| removed |        -80 B | <0.1% → 0.0% |    80 B → 0 B |   3 → 0 | `setParams(Class[])`                                                                                                | `java.beans.MethodDescriptor`                            |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `lambda$applyStrayPropertyMethods$20(CachedClass)`                                                                  | `groovy.lang.MetaClassImpl`                              |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `initializeMap(Class)`                                                                                              | `java.lang.ClassValue`                                   |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(CachedClass)`                                                                                               | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `lambda$inheritFields$18(CachedClass)`                                                                              | `groovy.lang.MetaClassImpl`                              |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(int, float)`                                                                                                | `java.util.Hashtable`                                    |
| removed |        -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `computeValue(Class)`                                                                                               | `org.codehaus.groovy.reflection.ClassInfo$1`             |
| removed |        -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `visitStringLiteral(GroovyParser$StringLiteralContext)`                                                             | `org.apache.groovy.parser.antlr4.AstBuilder`             |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|     Change |       Delta |             % |                Size | Objects | Function                                                            | Location                                                                                                  |
| ---------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  +24040.5% | +69.492 KiB |  0.1% → 97.0% |    296 B → 69.8 KiB |  7 → 85 | `invoke(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001117000 → java.lang.invoke.LambdaForm$MH.0x000000a801115400`   |
|   +6302.9% | +66.968 KiB |  0.4% → 94.6% |   1.06 KiB → 68 KiB | 20 → 51 | `invoke(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001148800 → java.lang.invoke.LambdaForm$MH.0x000000a801141000`   |
|  +25828.1% |  +64.57 KiB |  0.1% → 90.1% |    256 B → 64.8 KiB |   3 → 9 | `newInstance(Object[])`                                             | `java.lang.reflect.Constructor`                                                                           |
|   +5737.5% | +64.546 KiB |  0.4% → 91.3% | 1.13 KiB → 65.7 KiB | 15 → 18 | `newInstanceWithCaller(Object[], boolean, Class)`                   | `java.lang.reflect.Constructor`                                                                           |
|  +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.MethodHandleAccessorFactory`                                                        |
|  +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.ReflectionFactory`                                                                  |
|  +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `acquireConstructorAccessor()`                                      | `java.lang.reflect.Constructor`                                                                           |
|  +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized0(Class)`                                    | `jdk.internal.misc.Unsafe`                                                                                |
|  +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)`                                     | `jdk.internal.misc.Unsafe`                                                                                |
|  +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)`                                     | `jdk.internal.reflect.MethodHandleAccessorFactory`                                                        |
|  +63238.5% | +64.226 KiB | <0.1% → 89.4% |    104 B → 64.3 KiB |   2 → 6 | `newInvokeSpecial(Object, Object)`                                  | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
| +102675.0% | +64.171 KiB | <0.1% → 89.3% |     64 B → 64.2 KiB |   1 → 4 | `<init>(Reader)`                                                    | `org.codenarc.ruleset.XmlReaderRuleSet`                                                                   |
|  +51331.3% | +64.164 KiB | <0.1% → 89.4% |    128 B → 64.3 KiB |   3 → 6 | `invokeSpecial(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800 → java.lang.invoke.LambdaForm$DMH.0x000000a801001000` |
|        new | +64.046 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 2 | `validateXml(String)`                                               | `org.codenarc.ruleset.XmlReaderRuleSet`                                                                   |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`                                                         |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `normalize(Object, short)`                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`                                          |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`                                          |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `applyFacets(XSFacets, short, short, short, ValidationContext)`     | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`                                          |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `applyFacets1(XSFacets, short, short)`                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`                                          |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                  | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory`                                       |

##### Standard library

|    Change |       Delta |             % |                Size | Objects | Function                                                            | Location                                                                                                  |
| --------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +24040.5% | +69.492 KiB |  0.1% → 97.0% |    296 B → 69.8 KiB |  7 → 85 | `invoke(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001117000 → java.lang.invoke.LambdaForm$MH.0x000000a801115400`   |
|  +6302.9% | +66.968 KiB |  0.4% → 94.6% |   1.06 KiB → 68 KiB | 20 → 51 | `invoke(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001148800 → java.lang.invoke.LambdaForm$MH.0x000000a801141000`   |
| +25828.1% |  +64.57 KiB |  0.1% → 90.1% |    256 B → 64.8 KiB |   3 → 9 | `newInstance(Object[])`                                             | `java.lang.reflect.Constructor`                                                                           |
|  +5737.5% | +64.546 KiB |  0.4% → 91.3% | 1.13 KiB → 65.7 KiB | 15 → 18 | `newInstanceWithCaller(Object[], boolean, Class)`                   | `java.lang.reflect.Constructor`                                                                           |
| +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.MethodHandleAccessorFactory`                                                        |
| +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.ReflectionFactory`                                                                  |
| +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `acquireConstructorAccessor()`                                      | `java.lang.reflect.Constructor`                                                                           |
| +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized0(Class)`                                    | `jdk.internal.misc.Unsafe`                                                                                |
| +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)`                                     | `jdk.internal.misc.Unsafe`                                                                                |
| +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)`                                     | `jdk.internal.reflect.MethodHandleAccessorFactory`                                                        |
| +63238.5% | +64.226 KiB | <0.1% → 89.4% |    104 B → 64.3 KiB |   2 → 6 | `newInvokeSpecial(Object, Object)`                                  | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
| +51331.3% | +64.164 KiB | <0.1% → 89.4% |    128 B → 64.3 KiB |   3 → 6 | `invokeSpecial(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800 → java.lang.invoke.LambdaForm$DMH.0x000000a801001000` |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`                                                         |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `normalize(Object, short)`                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`                                          |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`                                          |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `applyFacets(XSFacets, short, short, short, ValidationContext)`     | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`                                          |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `applyFacets1(XSFacets, short, short)`                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`                                          |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                  | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory`                                       |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `createBuiltInTypes()`                                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl`                                       |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl`                                       |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                                                                                |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`                                                                |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`                                                                |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                                                                           |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                                                                           |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                                                                    |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                                                                   |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                                                                     |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                                                                     |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                                                                    |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.Recording`                                                                                     |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                                                                       |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                                                                    |
| -100.0% | -255.984 KiB | 91.5% → <0.1% |      256 KiB → 32 B |       1 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`                                                                |
|  -97.6% |  -21.093 KiB |   7.7% → 0.7% |    21.6 KiB → 528 B |  77 → 6 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001115400 → java.lang.invoke.LambdaForm$MH.0x000000a801117000` |
|  -99.3% |  -17.906 KiB |   6.4% → 0.2% |      18 KiB → 120 B |  21 → 1 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400 → java.lang.invoke.LambdaForm$MH.0x000000a801183400` |
|  -94.1% |  -17.312 KiB |   6.6% → 1.5% | 18.4 KiB → 1.08 KiB | 28 → 23 | `invokeSpecial(Object, Object)`                                                   | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -95.3% |  -17.234 KiB |   6.5% → 1.2% |    18.1 KiB → 872 B | 22 → 20 | `init()`                                                                          | `org.codenarc.source.AbstractSourceCode`                                                                |
|  -91.6% |  -17.156 KiB |   6.7% → 2.2% | 18.7 KiB → 1.57 KiB | 35 → 33 | `guard(Object, Object)`                                                           | `java.lang.invoke.LambdaForm$MH.0x0000007001104000 → java.lang.invoke.LambdaForm$MH.0x000000a801104000` |
|  -94.9% |  -17.085 KiB |   6.4% → 1.3% |      18 KiB → 936 B | 21 → 20 | `delegate(Object, Object)`                                                        | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
|  -94.5% |  -17.031 KiB |   6.4% → 1.4% |    18 KiB → 1,016 B |      21 | `forEach(Consumer)`                                                               | `java.util.stream.ReferencePipeline$Head`                                                               |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                                                                                |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`                                                                |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`                                                                |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                                                                           |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                                                                           |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                                                                    |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                                                                   |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                                                                     |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                                                                     |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                                                                    |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.Recording`                                                                                     |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                                                                       |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                                                                    |
| -100.0% | -255.984 KiB | 91.5% → <0.1% |      256 KiB → 32 B |       1 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`                                                                |
|  -97.6% |  -21.093 KiB |   7.7% → 0.7% |    21.6 KiB → 528 B |  77 → 6 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001115400 → java.lang.invoke.LambdaForm$MH.0x000000a801117000` |
|  -99.3% |  -17.906 KiB |   6.4% → 0.2% |      18 KiB → 120 B |  21 → 1 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400 → java.lang.invoke.LambdaForm$MH.0x000000a801183400` |
|  -94.1% |  -17.312 KiB |   6.6% → 1.5% | 18.4 KiB → 1.08 KiB | 28 → 23 | `invokeSpecial(Object, Object)`                                                   | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -91.6% |  -17.156 KiB |   6.7% → 2.2% | 18.7 KiB → 1.57 KiB | 35 → 33 | `guard(Object, Object)`                                                           | `java.lang.invoke.LambdaForm$MH.0x0000007001104000 → java.lang.invoke.LambdaForm$MH.0x000000a801104000` |
|  -94.9% |  -17.085 KiB |   6.4% → 1.3% |      18 KiB → 936 B | 21 → 20 | `delegate(Object, Object)`                                                        | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
|  -94.5% |  -17.031 KiB |   6.4% → 1.4% |    18 KiB → 1,016 B |      21 | `forEach(Consumer)`                                                               | `java.util.stream.ReferencePipeline$Head`                                                               |
|  -94.5% |  -17.031 KiB |   6.4% → 1.4% |    18 KiB → 1,016 B |      21 | `compile(int)`                                                                    | `org.codehaus.groovy.control.CompilationUnit`                                                           |
