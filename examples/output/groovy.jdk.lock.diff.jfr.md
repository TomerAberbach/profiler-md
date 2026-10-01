# Sampling profile diff

Collected 275 samples → 311 samples (+36 samples, +13.1%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library | +13.2% |   +36 | 98.9% → 99.0% | 272 → 308 |
| Ours             |   0.0% |     0 |   1.1% → 1.0% |         3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                        | Location                                                                                                |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +260.0% |   +13 | 1.8% → 5.8% |  5 → 18 | `getNode(Object)`                               | `java.util.HashMap`                                                                                     |
| +150.0% |    +9 | 2.2% → 4.8% |  6 → 15 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                                                                     |
| +700.0% |    +7 | 0.4% → 2.6% |   1 → 8 | `getReachableTarget(Transition, int)`           | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                                                   |
| +100.0% |    +4 | 1.5% → 2.6% |   4 → 8 | `prepare()`                                     | `java.lang.invoke.LambdaForm`                                                                           |
|     new |    +4 | 0.0% → 1.3% |   0 → 4 | `getInCache(LambdaFormEditor$TransformKey)`     | `java.lang.invoke.LambdaFormEditor`                                                                     |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `copyIntoWithCancel(Sink, Spliterator)`         | `java.util.stream.AbstractPipeline`                                                                     |
| +150.0% |    +3 | 0.7% → 1.6% |   2 → 5 | `equals(Object, Object)`                        | `java.util.Objects`                                                                                     |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `hashCode()`                                    | `java.lang.String`                                                                                      |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `matches(Method, String, Class[])`              | `java.lang.PublicMethods$Key`                                                                           |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `countNonNull(Object[])`                        | `java.lang.invoke.MethodHandleImpl`                                                                     |
| +200.0% |    +2 | 0.4% → 1.0% |   1 → 3 | `invokeExact_MT(Object, Object, Object)`        | `java.lang.invoke.Invokers$Holder`                                                                      |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `guard(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801104000 → java.lang.invoke.LambdaForm$MH.0x000000c801104000` |
| +200.0% |    +2 | 0.4% → 1.0% |   1 → 3 | `sync(int)`                                     | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`                                                     |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `boxInteger(int)`                               | `sun.invoke.util.ValueConversions`                                                                      |
| +100.0% |    +2 | 0.7% → 1.3% |   2 → 4 | `invokeVirtual(Object, Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
| +200.0% |    +2 | 0.4% → 1.0% |   1 → 3 | `atom()`                                        | `java.util.regex.Pattern`                                                                               |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `clone()`                                       | `java.lang.Object`                                                                                      |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `mergeHi(int, int, int, int)`                   | `java.util.TimSort`                                                                                     |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `isAncestorLoaderOf(ClassLoader, ClassLoader)`  | `java.lang.invoke.MethodHandle`                                                                         |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `pickClosureMethod(Class[])`                    | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`                                                |

##### Ours

| Change | Delta |           % | Samples | Function                                 | Location                                           |
| -----: | ----: | ----------: | ------: | ---------------------------------------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getLines()`                             | `org.codenarc.source.AbstractSourceCode`           |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `processParameters(Parameter[], String)` | `org.codenarc.rule.naming.ParameterNameAstVisitor` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                                      | Location                                                                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -75.0% |    -6 |  2.9% → 0.6% |   8 → 2 | `resize()`                                                                                                    | `java.util.HashMap`                                                                                     |
|  -20.7% |    -6 | 10.5% → 7.4% | 29 → 23 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                                                               |
| removed |    -4 |  1.5% → 0.0% |   4 → 0 | `bindArgumentL(BoundMethodHandle, int, Object)`                                                               | `java.lang.invoke.LambdaFormEditor`                                                                     |
|  -80.0% |    -4 |  1.8% → 0.3% |   5 → 1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                                                  |
|  -21.4% |    -3 |  5.1% → 3.5% | 14 → 11 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                                                  |
|  -75.0% |    -3 |  1.5% → 0.3% |   4 → 1 | `equals(Object)`                                                                                              | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext`                                          |
|  -75.0% |    -3 |  1.5% → 0.3% |   4 → 1 | `keepsAlive(Class, ClassLoader)`                                                                              | `java.lang.invoke.MethodHandle`                                                                         |
| removed |    -3 |  1.1% → 0.0% |   3 → 0 | `putVal(Object, Object, boolean)`                                                                             | `java.util.concurrent.ConcurrentHashMap`                                                                |
| removed |    -3 |  1.1% → 0.0% |   3 → 0 | `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)`   | `java.lang.invoke.DelegatingMethodHandle`                                                               |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `guard(Object, Object, Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f8012b9c00 → java.lang.invoke.LambdaForm$MH.0x000000c8012b9c00` |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `expression(int)`                                                                                             | `org.apache.groovy.parser.antlr4.GroovyParser`                                                          |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `valueOf(int)`                                                                                                | `java.lang.Integer`                                                                                     |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                                  | `java.math.MutableBigInteger`                                                                           |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                                             | `groovy.lang.MetaClassImpl`                                                                             |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `cast(Object)`                                                                                                | `java.lang.Class`                                                                                       |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                                            | `java.lang.invoke.MethodHandles`                                                                        |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `afterNodeAccess(HashMap$Node)`                                                                               | `java.util.LinkedHashMap`                                                                               |
| removed |    -1 |  0.4% → 0.0% |   1 → 0 | `makeHiddenClassDefiner(MethodHandles$Lookup$ClassFile, Set, boolean, ClassFileDumper)`                       | `java.lang.invoke.MethodHandles$Lookup`                                                                 |
| removed |    -1 |  0.4% → 0.0% |   1 → 0 | `wrapAndCopyInto(Sink, Spliterator)`                                                                          | `java.util.stream.AbstractPipeline`                                                                     |
| removed |    -1 |  0.4% → 0.0% |   1 → 0 | `lambda$iteratorOf$2(JrtPath, ImageReader$Node)`                                                              | `jdk.internal.jrtfs.JrtFileSystem`                                                                      |

##### Ours

|  Change | Delta |           % | Samples | Function                        | Location                                                             |
| ------: | ----: | ----------: | ------: | ------------------------------- | -------------------------------------------------------------------- |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)`     | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`       |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<init>(ExpressionCollector$1)` | `org.codenarc.source.ExpressionCollector$ExpressionCollectorVisitor` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

|   Change | Delta |             % |   Samples | Function                                                                                      | Location                                                                                                  |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +4350.0% |   +87 |  0.7% → 28.6% |    2 → 89 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f801003000 → java.lang.invoke.LambdaForm$MH.0x000000c801141000`   |
| +8300.0% |   +83 |  0.4% → 27.0% |    1 → 84 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f801230400 → java.lang.invoke.LambdaForm$MH.0x000000c801150800`   |
| +2566.7% |   +77 |  1.1% → 25.7% |    3 → 80 | `invoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f8013e8000 → java.lang.invoke.LambdaForm$MH.0x000000c8012ac800`   |
|  +480.0% |   +72 |  5.5% → 28.0% |   15 → 87 | `invoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f8013dc400 → java.lang.invoke.LambdaForm$MH.0x000000c801142000`   |
| +3500.0% |   +70 |  0.7% → 23.2% |    2 → 72 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f801179800 → java.lang.invoke.LambdaForm$MH.0x000000c8013d2400`   |
|  +630.0% |   +63 |  3.6% → 23.5% |   10 → 73 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f801005400 → java.lang.invoke.LambdaForm$MH.0x000000c801140c00`   |
| +6000.0% |   +60 |  0.4% → 19.6% |    1 → 61 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f8015d7000 → java.lang.invoke.LambdaForm$MH.0x000000c80182ec00`   |
| +5900.0% |   +59 |  0.4% → 19.3% |    1 → 60 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f80157b800 → java.lang.invoke.LambdaForm$MH.0x000000c8013db400`   |
| +4400.0% |   +44 |  0.4% → 14.5% |    1 → 45 | `invoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f801452400 → java.lang.invoke.LambdaForm$MH.0x000000c8013db000`   |
| +2200.0% |   +44 |  0.7% → 14.8% |    2 → 46 | `invoke(Object, Object, Object, Object, Object)`                                              | `java.lang.invoke.LambdaForm$MH.0x000000f8013e5800 → java.lang.invoke.LambdaForm$MH.0x000000c801608800`   |
| +3900.0% |   +39 |  0.4% → 12.9% |    1 → 40 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f801520c00 → java.lang.invoke.LambdaForm$MH.0x000000c801829800`   |
|   +29.3% |   +36 | 44.7% → 51.1% | 123 → 159 | `invokeMethod(Object, String, Object[])`                                                      | `groovy.lang.MetaClassImpl`                                                                               |
|   +14.3% |   +35 | 88.7% → 89.7% | 244 → 279 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                                                        |
|   +14.0% |   +34 | 88.0% → 88.7% | 242 → 276 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f8010b2800 → java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
|  +147.8% |   +34 |  8.4% → 18.3% |   23 → 57 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f8012c5400 → java.lang.invoke.LambdaForm$MH.0x000000c80138dc00`   |
|   +13.5% |   +33 | 88.7% → 89.1% | 244 → 277 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
|   +17.3% |   +32 | 67.3% → 69.8% | 185 → 217 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f801115400 → java.lang.invoke.LambdaForm$MH.0x000000c801115400`   |
|   +24.2% |   +31 | 46.5% → 51.1% | 128 → 159 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                             | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`                                                  |
|   +27.2% |   +31 | 41.5% → 46.6% | 114 → 145 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                                                                        |
|   +16.1% |   +30 | 67.6% → 69.5% | 186 → 216 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                                                        |

##### Ours

|  Change | Delta |             % | Samples | Function                                          | Location                                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +18.8% |   +12 | 23.3% → 24.4% | 64 → 76 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                    |
|  +15.1% |   +11 | 26.5% → 27.0% | 73 → 84 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                                          |
|  +11.8% |    +8 | 24.7% → 24.4% | 68 → 76 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                        |
|  +10.4% |    +5 | 17.5% → 17.0% | 48 → 53 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                    |
| +250.0% |    +5 |   0.7% → 2.3% |   2 → 7 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`                                                            |
| +400.0% |    +4 |   0.4% → 1.6% |   1 → 5 | `eachImportLine(SourceCode, Closure)`             | `org.codenarc.rule.imports.AbstractImportRule`                                                    |
| +400.0% |    +4 |   0.4% → 1.6% |   1 → 5 | `doCall(Object)`                                  | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`                              |
|     new |    +4 |   0.0% → 1.3% |   0 → 4 | `doCall(Object)`                                  | `org.codenarc.util.WildcardPattern$_closure1`                                                     |
|     new |    +4 |   0.0% → 1.3% |   0 → 4 | `<init>(String, boolean)`                         | `org.codenarc.util.WildcardPattern`                                                               |
|   +6.7% |    +3 | 16.4% → 15.4% | 45 → 48 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                                  |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `calculateForClass(ClassNode, SourceCode)`        | `org.gmetrics.metric.AbstractMethodMetric`                                                        |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `getLines()`                                      | `org.codenarc.source.AbstractSourceCode`                                                          |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                                |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.unused.UnusedVariableRule`                                                     |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                             |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.convention.CompileStaticlVisitor`                                              |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `<init>(String)`                                  | `org.codenarc.util.WildcardPattern`                                                               |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `<init>(String, String)`                          | `org.codenarc.rule.ClassReferenceAstVisitor`                                                      |
|   +4.2% |    +2 | 17.5% → 16.1% | 48 → 50 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                                       |
| +200.0% |    +2 |   0.4% → 1.0% |   1 → 3 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % | Samples | Function                                         | Location                                                                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| -93.1% |   -81 |  31.6% → 1.9% |  87 → 6 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801141000 → java.lang.invoke.LambdaForm$MH.0x000000c801134400` |
| -98.6% |   -71 |  26.2% → 0.3% |  72 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8012d8000 → java.lang.invoke.LambdaForm$MH.0x000000c80122c000` |
| -95.8% |   -69 |  26.2% → 1.0% |  72 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801150800 → java.lang.invoke.LambdaForm$MH.0x000000c801399800` |
| -98.6% |   -68 |  25.1% → 0.3% |  69 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f801142000 → java.lang.invoke.LambdaForm$MH.0x000000c8013a2c00` |
| -98.4% |   -63 |  23.3% → 0.3% |  64 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8012ac800 → java.lang.invoke.LambdaForm$MH.0x000000c801405800` |
| -98.1% |   -51 |  18.9% → 0.3% |  52 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80138dc00 → java.lang.invoke.LambdaForm$MH.0x000000c80148ec00` |
| -97.9% |   -46 |  17.1% → 0.3% |  47 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80182ec00 → java.lang.invoke.LambdaForm$MH.0x000000c8015d8800` |
| -83.3% |   -40 |  17.5% → 2.6% |  48 → 8 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8013dbc00 → java.lang.invoke.LambdaForm$MH.0x000000c801005400` |
| -97.1% |   -34 |  12.7% → 0.3% |  35 → 1 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80160ac00 → java.lang.invoke.LambdaForm$MH.0x000000c801455000` |
| -97.1% |   -33 |  12.4% → 0.3% |  34 → 1 | `invoke(Object, int)`                            | `java.lang.invoke.LambdaForm$MH.0x000000f80109bc00 → java.lang.invoke.LambdaForm$MH.0x000000c8014c8800` |
| -68.3% |   -28 |  14.9% → 4.2% | 41 → 13 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8013db800 → java.lang.invoke.LambdaForm$MH.0x000000c80118c000` |
| -69.2% |   -27 |  14.2% → 3.9% | 39 → 12 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8012c5c00 → java.lang.invoke.LambdaForm$MH.0x000000c801133400` |
| -96.2% |   -25 |   9.5% → 0.3% |  26 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801829800 → java.lang.invoke.LambdaForm$MH.0x000000c8014b7c00` |
| -91.7% |   -22 |   8.7% → 0.6% |  24 → 2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8012b8400 → java.lang.invoke.LambdaForm$MH.0x000000c8012bc800` |
| -35.6% |   -21 | 21.5% → 12.2% | 59 → 38 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801140c00 → java.lang.invoke.LambdaForm$MH.0x000000c8012c5c00` |
| -95.2% |   -20 |   7.6% → 0.3% |  21 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801105400 → java.lang.invoke.LambdaForm$MH.0x000000c8013e8c00` |
| -90.9% |   -20 |   8.0% → 0.6% |  22 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f80138c800 → java.lang.invoke.LambdaForm$MH.0x000000c801118800` |
| -31.3% |   -15 | 17.5% → 10.6% | 48 → 33 | `visitMethods(GroovyClassVisitor)`               | `org.codehaus.groovy.ast.ClassNode`                                                                     |
| -30.6% |   -15 | 17.8% → 10.9% | 49 → 34 | `visitContents(GroovyClassVisitor)`              | `org.codehaus.groovy.ast.ClassNode`                                                                     |
| -29.8% |   -14 | 17.1% → 10.6% | 47 → 33 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                                                  |

##### Standard library

| Change | Delta |             % | Samples | Function                                         | Location                                                                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| -93.1% |   -81 |  31.6% → 1.9% |  87 → 6 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801141000 → java.lang.invoke.LambdaForm$MH.0x000000c801134400` |
| -98.6% |   -71 |  26.2% → 0.3% |  72 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8012d8000 → java.lang.invoke.LambdaForm$MH.0x000000c80122c000` |
| -95.8% |   -69 |  26.2% → 1.0% |  72 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801150800 → java.lang.invoke.LambdaForm$MH.0x000000c801399800` |
| -98.6% |   -68 |  25.1% → 0.3% |  69 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f801142000 → java.lang.invoke.LambdaForm$MH.0x000000c8013a2c00` |
| -98.4% |   -63 |  23.3% → 0.3% |  64 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8012ac800 → java.lang.invoke.LambdaForm$MH.0x000000c801405800` |
| -98.1% |   -51 |  18.9% → 0.3% |  52 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80138dc00 → java.lang.invoke.LambdaForm$MH.0x000000c80148ec00` |
| -97.9% |   -46 |  17.1% → 0.3% |  47 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80182ec00 → java.lang.invoke.LambdaForm$MH.0x000000c8015d8800` |
| -83.3% |   -40 |  17.5% → 2.6% |  48 → 8 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8013dbc00 → java.lang.invoke.LambdaForm$MH.0x000000c801005400` |
| -97.1% |   -34 |  12.7% → 0.3% |  35 → 1 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80160ac00 → java.lang.invoke.LambdaForm$MH.0x000000c801455000` |
| -97.1% |   -33 |  12.4% → 0.3% |  34 → 1 | `invoke(Object, int)`                            | `java.lang.invoke.LambdaForm$MH.0x000000f80109bc00 → java.lang.invoke.LambdaForm$MH.0x000000c8014c8800` |
| -68.3% |   -28 |  14.9% → 4.2% | 41 → 13 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8013db800 → java.lang.invoke.LambdaForm$MH.0x000000c80118c000` |
| -69.2% |   -27 |  14.2% → 3.9% | 39 → 12 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8012c5c00 → java.lang.invoke.LambdaForm$MH.0x000000c801133400` |
| -96.2% |   -25 |   9.5% → 0.3% |  26 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801829800 → java.lang.invoke.LambdaForm$MH.0x000000c8014b7c00` |
| -91.7% |   -22 |   8.7% → 0.6% |  24 → 2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8012b8400 → java.lang.invoke.LambdaForm$MH.0x000000c8012bc800` |
| -35.6% |   -21 | 21.5% → 12.2% | 59 → 38 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801140c00 → java.lang.invoke.LambdaForm$MH.0x000000c8012c5c00` |
| -95.2% |   -20 |   7.6% → 0.3% |  21 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801105400 → java.lang.invoke.LambdaForm$MH.0x000000c8013e8c00` |
| -90.9% |   -20 |   8.0% → 0.6% |  22 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f80138c800 → java.lang.invoke.LambdaForm$MH.0x000000c801118800` |
| -31.3% |   -15 | 17.5% → 10.6% | 48 → 33 | `visitMethods(GroovyClassVisitor)`               | `org.codehaus.groovy.ast.ClassNode`                                                                     |
| -30.6% |   -15 | 17.8% → 10.9% | 49 → 34 | `visitContents(GroovyClassVisitor)`              | `org.codehaus.groovy.ast.ClassNode`                                                                     |
| -28.0% |   -14 | 18.2% → 11.6% | 50 → 36 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                                       |

##### Ours

|  Change | Delta |             % | Samples | Function                                                  | Location                                                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -29.8% |   -14 | 17.1% → 10.6% | 47 → 33 | `visitMethod(MethodNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                       |
|   -8.1% |    -5 | 22.5% → 18.3% | 62 → 57 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.AbstractAstVisitorRule`                                   |
| removed |    -5 |   1.8% → 0.0% |   5 → 0 | `findReference(SourceCode, String, String)`               | `org.codenarc.rule.imports.UnusedImportRule`                                 |
|   -9.1% |    -5 | 20.0% → 16.1% | 55 → 50 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractAstVisitor`                                       |
| removed |    -4 |   1.5% → 0.0% |   4 → 0 | `doCall(Object)`                                          | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`         |
|  -60.0% |    -3 |   1.8% → 0.6% |   5 → 2 | `visitBlockStatement(BlockStatement)`                     | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |
| removed |    -3 |   1.1% → 0.0% |   3 → 0 | `visitVariableExpression(VariableExpression)`             | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                     |
| removed |    -3 |   1.1% → 0.0% |   3 → 0 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                     |
| removed |    -3 |   1.1% → 0.0% |   3 → 0 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                     |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `doCall(Object)`                                          | `org.codenarc.rule.imports.UnusedImportRule$_processImports_closure1`        |
|  -33.3% |    -2 |   2.2% → 1.3% |   6 → 4 | `super$3$applyTo(SourceCode, List)`                       | `org.codenarc.rule.formatting.IndentationRule`                               |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`           | `org.codenarc.rule.ClassReferenceAstVisitor`                                 |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`                       |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitAnnotations(AnnotatedNode)`                         | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`        |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `processMethodNode(MethodNode)`                           | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`              |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitMethodEx(MethodNode)`                               | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`              |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitMethodEx(MethodNode)`                               | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |
|  -66.7% |    -2 |   1.1% → 0.3% |   3 → 1 | `visitBinaryExpression(BinaryExpression)`                 | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`                 |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `super$2$visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`                 |
|  -22.2% |    -2 |   3.3% → 2.3% |   9 → 7 | `doCall(Object)`                                          | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`   |

# Allocated heap profile diff

Allocated 12 GiB (-18.738 MiB, -0.2%) over 6,380 samples → 6,359 samples (1.93 MiB → 1.94 MiB per sample).

| Category         | Change |       Delta |     % |               Size |       Samples |
| ---------------- | -----: | ----------: | ----: | -----------------: | ------------: |
| Standard library |  -0.2% | -24.043 MiB | 99.2% |           11.9 GiB | 6,282 → 6,256 |
| Ours             |  +5.5% |  +5.305 MiB |  0.8% | 96.2 MiB → 102 MiB |       49 → 51 |
| Unknown          |  +0.1% |       +24 B | <0.1% |           35.9 KiB |       49 → 52 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |           % |                Size |   Samples | Function                                                                                      | Location                                              |
| ------: | -----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| +185.0% | +129.436 MiB | 0.6% → 1.6% |    70 MiB → 199 MiB |   35 → 38 | `newHashMap(int)`                                                                             | `java.util.HashMap`                                   |
|  +15.3% |  +83.483 MiB | 4.4% → 5.1% |   547 MiB → 631 MiB | 285 → 317 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`       |
|  +73.0% |  +68.616 MiB | 0.8% → 1.3% |    94 MiB → 163 MiB |   49 → 53 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`                   |
|  +21.5% |  +48.333 MiB | 1.8% → 2.2% |   225 MiB → 273 MiB | 114 → 139 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |
|  +47.3% |  +47.977 MiB | 0.8% → 1.2% |   101 MiB → 149 MiB |   51 → 77 | `of(byte, int)`                                                                               | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
|  +34.4% |  +40.972 MiB | 1.0% → 1.3% |   119 MiB → 160 MiB |   61 → 83 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  +13.5% |  +40.364 MiB | 2.4% → 2.8% |   298 MiB → 339 MiB | 152 → 173 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                             |
|  +75.0% |  +37.494 MiB | 0.4% → 0.7% |   50 MiB → 87.5 MiB |   25 → 43 | `convertToTypeArray(Object[])`                                                                | `org.codehaus.groovy.runtime.MetaClassHelper`         |
|  +58.1% |  +34.422 MiB | 0.5% → 0.8% | 59.2 MiB → 93.6 MiB |   54 → 69 | `iterator()`                                                                                  | `java.util.ArrayList`                                 |
|  +12.5% |  +32.214 MiB | 2.1% → 2.4% |   259 MiB → 291 MiB | 130 → 147 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`        |
|  +13.5% |  +29.145 MiB | 1.8% → 2.0% |   217 MiB → 246 MiB | 111 → 120 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                         |
|  +19.9% |   +26.74 MiB | 1.1% → 1.3% |   134 MiB → 161 MiB |   70 → 80 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`      |
|  +45.1% |  +25.328 MiB | 0.5% → 0.7% | 56.1 MiB → 81.5 MiB |   29 → 41 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                         |
|  +12.4% |  +23.013 MiB | 1.5% → 1.7% |   185 MiB → 208 MiB |  95 → 107 | `compile()`                                                                                   | `java.util.regex.Pattern`                             |
|  +41.2% |  +19.463 MiB | 0.4% → 0.5% | 47.2 MiB → 66.7 MiB |   24 → 35 | `make(byte, Class, MemberName, Class)`                                                        | `java.lang.invoke.DirectMethodHandle`                 |
|   +5.4% |   +19.19 MiB | 2.9% → 3.0% |   354 MiB → 373 MiB | 179 → 185 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`       |
|   +7.9% |  +18.964 MiB | 1.9% → 2.1% |   240 MiB → 259 MiB | 129 → 131 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.HashMap`                                   |
|  +12.6% |  +18.651 MiB | 1.2% → 1.4% |   148 MiB → 166 MiB |   76 → 83 | `valueOf(long)`                                                                               | `java.lang.Long`                                      |
|   +6.0% |  +15.287 MiB | 2.1% → 2.2% |   254 MiB → 269 MiB | 128 → 127 | `divideAndRemainderKnuth(BigInteger)`                                                         | `java.math.BigInteger`                                |
|   +2.5% |  +14.473 MiB | 4.8% → 4.9% |   587 MiB → 601 MiB | 307 → 325 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                 |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |           % |                Size |   Samples | Function                                                                                | Location                                              |
| -----: | -----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| -22.2% | -203.331 MiB | 7.4% → 5.8% |   918 MiB → 714 MiB | 381 → 362 | `makeImpl(Class, Class[], boolean)`                                                     | `java.lang.invoke.MethodType`                         |
| -60.1% |  -69.752 MiB | 0.9% → 0.4% |  116 MiB → 46.4 MiB |   61 → 51 | `copyOf(byte[], int)`                                                                   | `java.util.Arrays`                                    |
| -16.5% |  -52.487 MiB | 2.6% → 2.2% |   318 MiB → 265 MiB | 153 → 137 | `copyOfRange(Object[], int, int)`                                                       | `java.util.Arrays`                                    |
| -42.2% |  -36.795 MiB | 0.7% → 0.4% | 87.3 MiB → 50.5 MiB |   41 → 26 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`          | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`   |
|  -9.4% |  -33.197 MiB | 2.9% → 2.6% |   355 MiB → 321 MiB | 183 → 154 | `newInstance(Class, int)`                                                               | `java.lang.reflect.Array`                             |
| -38.3% |  -31.313 MiB | 0.7% → 0.4% | 81.7 MiB → 50.4 MiB |   41 → 26 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)`  | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`  |
| -12.8% |  -30.458 MiB | 1.9% → 1.7% |   237 MiB → 207 MiB | 113 → 102 | `allocateInstance(Object)`                                                              | `java.lang.invoke.DirectMethodHandle`                 |
| -20.7% |   -29.59 MiB | 1.2% → 0.9% |   143 MiB → 114 MiB |   72 → 57 | `<init>()`                                                                              | `java.math.MutableBigInteger`                         |
|  -9.6% |    -28.2 MiB | 2.4% → 2.2% |   293 MiB → 265 MiB | 146 → 137 | `lambdaFormEditor(LambdaForm)`                                                          | `java.lang.invoke.LambdaFormEditor`                   |
| -50.2% |  -28.161 MiB | 0.5% → 0.2% |   56.1 MiB → 28 MiB |   23 → 14 | `unreflect(Method)`                                                                     | `java.lang.invoke.MethodHandles$Lookup`               |
| -45.3% |   -28.15 MiB | 0.5% → 0.3% |   62.1 MiB → 34 MiB |   31 → 17 | `<init>(MethodHandle, MethodHandle, boolean)`                                           | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |
| -52.1% |  -27.395 MiB | 0.4% → 0.2% | 52.6 MiB → 25.2 MiB |   30 → 19 | `copy()`                                                                                | `java.lang.reflect.Method`                            |
|  -6.2% |  -25.581 MiB | 3.3% → 3.1% |   413 MiB → 387 MiB | 213 → 198 | `makeBlockInliningWrapper(MethodHandle)`                                                | `java.lang.invoke.MethodHandleImpl`                   |
| -10.4% |  -25.554 MiB | 2.0% → 1.8% |   247 MiB → 221 MiB | 120 → 112 | `optimize(Pattern$Node)`                                                                | `java.util.regex.Pattern$BnM`                         |
| -31.8% |  -24.223 MiB | 0.6% → 0.4% |   76.2 MiB → 52 MiB |   41 → 25 | `listIterator(int)`                                                                     | `java.util.LinkedList`                                |
| -12.4% |  -22.906 MiB | 1.5% → 1.3% |   185 MiB → 162 MiB |   93 → 84 | `spliterator(Object[], int, int, int)`                                                  | `java.util.Spliterators`                              |
| -25.8% |  -22.777 MiB | 0.7% → 0.5% | 88.2 MiB → 65.4 MiB |   45 → 35 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                       | `java.util.stream.MatchOps`                           |
| -13.3% |  -17.441 MiB | 1.1% → 0.9% |   131 MiB → 113 MiB |   66 → 56 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector`            |
| -33.5% |  -16.948 MiB | 0.4% → 0.3% | 50.5 MiB → 33.6 MiB |   26 → 18 | `grow(int)`                                                                             | `java.util.ArrayList`                                 |
| -53.7% |  -16.142 MiB | 0.2% → 0.1% | 30.1 MiB → 13.9 MiB |    16 → 7 | `<init>(Reader, int)`                                                                   | `java.io.BufferedReader`                              |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                                                                  |
| ----------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| +1537271.1% |   +4.481 GiB | <0.1% → 37.3% |  306 KiB → 4.48 GiB |     1 → 2,321 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801230800 → java.lang.invoke.LambdaForm$MH.0x000000c80138dc00`   |
|    +1135.9% |   +4.145 GiB |  3.0% → 37.5% |  374 MiB → 4.51 GiB |   187 → 2,337 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f80118c000 → java.lang.invoke.LambdaForm$MH.0x000000c8012ac800`   |
|  +397978.6% |   +3.625 GiB | <0.1% → 30.2% |  955 KiB → 3.63 GiB |     1 → 1,873 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f80140bc00 → java.lang.invoke.LambdaForm$MH.0x000000c8013db000`   |
|   +19131.9% |   +3.222 GiB |  0.1% → 26.9% | 17.2 MiB → 3.24 GiB |    14 → 1,756 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801000400 → java.lang.invoke.LambdaForm$MH.0x000000c801141000`   |
|     +763.2% |   +3.023 GiB |  3.3% → 28.4% |  406 MiB → 3.42 GiB |   208 → 1,781 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f80138c000 → java.lang.invoke.LambdaForm$MH.0x000000c8013d2400`   |
|   +10469.3% |   +2.947 GiB |  0.2% → 24.7% | 28.8 MiB → 2.98 GiB |    19 → 1,557 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801141400 → java.lang.invoke.LambdaForm$MH.0x000000c801140c00`   |
|  +146274.6% |   +2.855 GiB | <0.1% → 23.8% |    2 MiB → 2.86 GiB |     1 → 1,434 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801434000 → java.lang.invoke.LambdaForm$MH.0x000000c801608800`   |
|    +6458.0% |   +2.596 GiB |  0.3% → 21.9% | 41.2 MiB → 2.64 GiB |    23 → 1,375 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801179400 → java.lang.invoke.LambdaForm$MH.0x000000c8013db400`   |
|     +913.8% |   +2.461 GiB |  2.2% → 22.7% |  276 MiB → 2.73 GiB |   135 → 1,370 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80182a400 → java.lang.invoke.LambdaForm$MH.0x000000c801829800`   |
|     +744.7% |   +1.425 GiB |  1.6% → 13.4% |  196 MiB → 1.62 GiB |     161 → 837 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801005400 → java.lang.invoke.LambdaForm$MH.0x000000c801117000`   |
|   +36245.0% |   +1.196 GiB | <0.1% → 10.0% |  3.38 MiB → 1.2 GiB |       6 → 663 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80122e000 → java.lang.invoke.LambdaForm$MH.0x000000c8012c5400`   |
|   +51678.0% |   +1.063 GiB |  <0.1% → 8.9% | 2.11 MiB → 1.07 GiB |       2 → 555 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f8013a8800 → java.lang.invoke.LambdaForm$MH.0x000000c801398000`   |
|   +89323.2% | +970.014 MiB |  <0.1% → 7.9% |  1.09 MiB → 971 MiB |       1 → 490 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f8012a6400 → java.lang.invoke.LambdaForm$MH.0x000000c801105400`   |
|    +2109.8% | +759.169 MiB |   0.3% → 6.5% |    36 MiB → 795 MiB |      18 → 390 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80157cc00 → java.lang.invoke.LambdaForm$MH.0x000000c801608400`   |
|   +12311.1% | +738.255 MiB |  <0.1% → 6.0% |     6 MiB → 744 MiB |       3 → 370 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801826400 → java.lang.invoke.LambdaForm$MH.0x000000c80182ec00`   |
|      +12.8% | +655.816 MiB | 41.6% → 47.0% | 5.02 GiB → 5.66 GiB | 2,584 → 2,867 | `invokeVirtual(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000f80138cc00 → java.lang.invoke.LambdaForm$DMH.0x000000c8010bc800` |
|     +810.7% | +526.847 MiB |   0.5% → 4.8% |    65 MiB → 592 MiB |      44 → 309 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801104c00 → java.lang.invoke.LambdaForm$MH.0x000000c801145c00`   |
|      +11.2% |  +523.96 MiB | 37.9% → 42.2% | 4.57 GiB → 5.08 GiB | 2,366 → 2,630 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8012ac800 → java.lang.invoke.LambdaForm$MH.0x000000c801142000`   |
|    +1453.8% | +523.282 MiB |   0.3% → 4.5% |    36 MiB → 559 MiB |      19 → 277 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f80150d800 → java.lang.invoke.LambdaForm$MH.0x000000c801605800`   |
|    +1376.0% | +458.371 MiB |   0.3% → 4.0% |  33.3 MiB → 492 MiB |      16 → 250 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801135800 → java.lang.invoke.LambdaForm$MH.0x000000c8012c6400`   |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                                                                  |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| -100.0% |   -5.133 GiB | 42.6% → <0.1% | 5.13 GiB → 1.47 MiB |     2,666 → 2 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f801142000 → java.lang.invoke.LambdaForm$MH.0x000000c80118f800`   |
| -100.0% |   -3.836 GiB | 31.9% → <0.1% | 3.84 GiB → 1.71 MiB |     1,992 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8013db800 → java.lang.invoke.LambdaForm$MH.0x000000c8013a8c00`   |
|  -99.8% |   -3.282 GiB |  27.3% → 0.1% | 3.29 GiB → 7.38 MiB |    1,770 → 11 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801119400 → java.lang.invoke.LambdaForm$MH.0x000000c801000400`   |
| -100.0% |   -3.081 GiB | 25.6% → <0.1% | 3.08 GiB → 1.16 MiB |     1,551 → 1 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80160ac00 → java.lang.invoke.LambdaForm$MH.0x000000c8014f0400`   |
|  -99.9% |   -2.846 GiB | 23.7% → <0.1% |    2.85 GiB → 4 MiB |     1,428 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801829800 → java.lang.invoke.LambdaForm$MH.0x000000c80154f800`   |
|  -84.8% |    -2.81 GiB |  27.5% → 4.2% |  3.31 GiB → 516 MiB |   1,728 → 262 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8013d2000 → java.lang.invoke.LambdaForm$MH.0x000000c80138c800`   |
|  -86.0% |   -2.513 GiB |  24.3% → 3.4% |  2.92 GiB → 418 MiB |   1,537 → 209 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801140c00 → java.lang.invoke.LambdaForm$MH.0x000000c801133400`   |
|  -82.8% |   -2.158 GiB |  21.6% → 3.7% |  2.61 GiB → 460 MiB |   1,359 → 234 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8013dbc00 → java.lang.invoke.LambdaForm$MH.0x000000c80138c000`   |
|  -97.3% |   -1.745 GiB |  14.9% → 0.4% | 1.79 GiB → 48.7 MiB |      884 → 41 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f8010bc000 → java.lang.invoke.LambdaForm$MH.0x000000c801104c00`   |
|  -99.5% |   -1.507 GiB |  12.6% → 0.1% | 1.52 GiB → 8.45 MiB |       827 → 7 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801117000 → java.lang.invoke.LambdaForm$MH.0x000000c801132400`   |
|  -43.3% |   -1.379 GiB | 26.4% → 15.0% | 3.18 GiB → 1.81 GiB |   1,720 → 873 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801141000 → java.lang.invoke.LambdaForm$MH.0x000000c8010bc000`   |
|  -28.0% |   -1.298 GiB | 38.5% → 27.7% | 4.63 GiB → 3.33 GiB | 2,406 → 1,792 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80138dc00 → java.lang.invoke.LambdaForm$MH.0x000000c801119400`   |
|  -99.8% |    -1.13 GiB |  9.4% → <0.1% | 1.13 GiB → 2.45 MiB |       587 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801398000 → java.lang.invoke.LambdaForm$MH.0x000000c8012b3400`   |
|  -95.5% | -950.359 MiB |   8.1% → 0.4% |  996 MiB → 45.2 MiB |      512 → 66 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801150800 → java.lang.invoke.LambdaForm$MH.0x000000c801148800`   |
|  -99.8% | -915.516 MiB |  7.4% → <0.1% |     918 MiB → 2 MiB |       448 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80160a800 → java.lang.invoke.LambdaForm$MH.0x000000c80160f800`   |
|  -67.1% | -845.546 MiB |  10.2% → 3.4% |  1.23 GiB → 415 MiB |     694 → 210 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f8012c5400 → java.lang.invoke.LambdaForm$MH.0x000000c801133c00`   |
|  -13.2% | -783.738 MiB | 48.0% → 41.7% | 5.78 GiB → 5.02 GiB | 2,973 → 2,552 | `invokeVirtual(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000f8010bc800 → java.lang.invoke.LambdaForm$DMH.0x000000c80138cc00` |
|  -99.5% | -747.475 MiB |  6.1% → <0.1% |     751 MiB → 4 MiB |       373 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80182ec00 → java.lang.invoke.LambdaForm$MH.0x000000c80158f800`   |
|  -98.9% | -733.618 MiB |   6.0% → 0.1% |     742 MiB → 8 MiB |       362 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801607c00 → java.lang.invoke.LambdaForm$MH.0x000000c801562c00`   |
|  -94.2% | -488.774 MiB |   4.2% → 0.2% |  519 MiB → 30.4 MiB |      261 → 15 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f8012c6400 → java.lang.invoke.LambdaForm$MH.0x000000c801185400`   |

# Retained heap profile diff

Retained 354 KiB → 96.6 KiB (-257.242 KiB, -72.7%) over 120 objects → 110 objects (2.95 KiB → 900 B per object).

| Category         | Change |        Delta |            % |               Size |   Objects |
| ---------------- | -----: | -----------: | -----------: | -----------------: | --------: |
| Standard library | -72.7% | -257.273 KiB |       100.0% | 354 KiB → 96.6 KiB | 120 → 109 |
| Ours             |    new |        +32 B | 0.0% → <0.1% |         0 B → 32 B |     0 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |              Size | Objects | Function                                                                                             | Location                                                |
| ------: | ----------: | -----------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +433.3% | +14.625 KiB | 1.0% → 18.6% | 3.38 KiB → 18 KiB |       3 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                                      |
|     new |  +8.015 KiB |  0.0% → 8.3% |    0 B → 8.02 KiB |   0 → 1 | `newTable(int)`                                                                                      | `com.sun.beans.util.Cache`                              |
|  +48.5% |      +256 B |  0.1% → 0.8% |     528 B → 784 B |   1 → 5 | `resize()`                                                                                           | `java.util.HashMap`                                     |
| +193.3% |      +232 B | <0.1% → 0.4% |     120 B → 352 B |   1 → 3 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                 |
|  +40.0% |      +224 B |  0.2% → 0.8% |     560 B → 784 B | 10 → 14 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                    | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|     new |      +192 B |  0.0% → 0.2% |       0 B → 192 B |   0 → 3 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16`                                 |
|  +50.0% |      +176 B |  0.1% → 0.5% |     352 B → 528 B |   4 → 6 | `copy()`                                                                                             | `java.lang.reflect.Method`                              |
| +400.0% |      +160 B | <0.1% → 0.2% |      40 B → 200 B |   1 → 5 | `newNode(int, Object, Object, HashMap$Node)`                                                         | `java.util.LinkedHashMap`                               |
|     new |       +96 B |  0.0% → 0.1% |        0 B → 96 B |   0 → 2 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`   |
|     new |       +72 B |  0.0% → 0.1% |        0 B → 72 B |   0 → 1 | `getDeclaredConstructors0(boolean)`                                                                  | `java.lang.Class`                                       |
|     new |       +72 B |  0.0% → 0.1% |        0 B → 72 B |   0 → 1 | `addPropertyDescriptor(PropertyDescriptor)`                                                          | `java.beans.Introspector`                               |
|     new |       +72 B |  0.0% → 0.1% |        0 B → 72 B |   0 → 1 | `clone()`                                                                                            | `java.lang.Object`                                      |
|     new |       +64 B |  0.0% → 0.1% |        0 B → 64 B |   0 → 1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                                | `sun.reflect.annotation.AnnotationParser`               |
|     new |       +64 B |  0.0% → 0.1% |        0 B → 64 B |   0 → 2 | `<init>(int)`                                                                                        | `org.codehaus.groovy.util.ListHashMap`                  |
| +233.3% |       +56 B | <0.1% → 0.1% |       24 B → 80 B |   1 → 3 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`           |
|     new |       +48 B | 0.0% → <0.1% |        0 B → 48 B |   0 → 1 | `stateFactory(int, int)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`     |
| +200.0% |       +48 B | <0.1% → 0.1% |       24 B → 72 B |       1 | `getDeclaredFields0(boolean)`                                                                        | `java.lang.Class`                                       |
|     new |       +48 B | 0.0% → <0.1% |        0 B → 48 B |   0 → 1 | `<init>()`                                                                                           | `java.util.HashSet`                                     |
|     new |       +48 B | 0.0% → <0.1% |        0 B → 48 B |   0 → 2 | `copy()`                                                                                             | `org.codehaus.groovy.util.FastArray`                    |
|     new |       +40 B | 0.0% → <0.1% |        0 B → 40 B |   0 → 1 | `primary()`                                                                                          | `org.apache.groovy.parser.antlr4.GroovyParser`          |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |             Size | Objects | Function                                                                                                | Location                                                |
| ------: | -----------: | -----------: | ---------------: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed | -256.015 KiB | 72.3% → 0.0% |    256 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                          | `java.util.concurrent.ConcurrentHashMap`                |
|  -96.9% |  -21.617 KiB |  6.3% → 0.7% | 22.3 KiB → 704 B |  10 → 7 | `copyOfRangeByte(byte[], int, int)`                                                                     | `java.util.Arrays`                                      |
| removed |   -1.015 KiB |  0.3% → 0.0% |   1.02 KiB → 0 B |   1 → 0 | `resize(int)`                                                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| removed |       -720 B |  0.2% → 0.0% |      720 B → 0 B |   1 → 0 | `copyOfRange(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
|  -50.0% |       -608 B |  0.3% → 0.6% | 1.19 KiB → 608 B |   8 → 4 | `getPlainNodeReference(boolean)`                                                                        | `org.codehaus.groovy.ast.ClassNode`                     |
|  -32.8% |       -152 B |  0.1% → 0.3% |    464 B → 312 B |   6 → 5 | `getDeclaredMethods0(boolean)`                                                                          | `java.lang.Class`                                       |
| removed |       -152 B | <0.1% → 0.0% |      152 B → 0 B |   1 → 0 | `makeWithoutCaching(String)`                                                                            | `org.codehaus.groovy.ast.ClassHelper`                   |
|  -80.0% |       -128 B |        <0.1% |     160 B → 32 B |   5 → 1 | `makeReplacementMetaProperty(MetaProperty, String, boolean, MetaMethod)`                                | `groovy.lang.MetaClassImpl`                             |
|  -25.0% |       -112 B |  0.1% → 0.3% |    448 B → 336 B |   8 → 6 | `grow(int)`                                                                                             | `java.util.ArrayList`                                   |
|  -81.3% |       -104 B |        <0.1% |     128 B → 24 B |   2 → 1 | `<init>(MethodType)`                                                                                    | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
| removed |        -96 B | <0.1% → 0.0% |       96 B → 0 B |   2 → 0 | `get(Class)`                                                                                            | `com.sun.beans.introspect.PropertyInfo`                 |
| removed |        -96 B | <0.1% → 0.0% |       96 B → 0 B |   2 → 0 | `create(Tuple2, int, String, int, int, int, int, int)`                                                  | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`      |
| removed |        -80 B | <0.1% → 0.0% |       80 B → 0 B |   1 → 0 | `newTable(int)`                                                                                         | `java.util.WeakHashMap`                                 |
| removed |        -80 B | <0.1% → 0.0% |       80 B → 0 B |   2 → 0 | `nls()`                                                                                                 | `org.apache.groovy.parser.antlr4.GroovyParser`          |
|  -75.0% |        -72 B |        <0.1% |      96 B → 24 B |   4 → 1 | `addMethodToList(Object, MetaMethod)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| removed |        -72 B | <0.1% → 0.0% |       72 B → 0 B |   1 → 0 | `getTargetPropertyInfo()`                                                                               | `java.beans.Introspector`                               |
| removed |        -64 B | <0.1% → 0.0% |       64 B → 0 B |   1 → 0 | `newModuleDescriptor(String, ModuleDescriptor$Version, Set, Set, Set, Set, Set, Set, Set, String, int)` | `java.lang.module.ModuleDescriptor$1`                   |
| removed |        -64 B | <0.1% → 0.0% |       64 B → 0 B |   1 → 0 | `<init>(Class, MetaMethod[])`                                                                           | `groovy.lang.MetaClassImpl`                             |
| removed |        -64 B | <0.1% → 0.0% |       64 B → 0 B |   1 → 0 | `initializeMap(Class)`                                                                                  | `java.lang.ClassValue`                                  |
| removed |        -64 B | <0.1% → 0.0% |       64 B → 0 B |   2 → 0 | `getWeakReference(Object)`                                                                              | `java.beans.FeatureDescriptor`                          |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |       Delta |             % |                Size | Objects | Function                                                                                       | Location                                                                                                                                              |
| --------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +3130.8% | +75.335 KiB |  0.7% → 80.5% | 2.41 KiB → 77.7 KiB | 26 → 50 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000f801134400 → java.lang.invoke.LambdaForm$MH.0x000000c801141000`                                               |
| +51143.8% | +63.929 KiB | <0.1% → 66.3% |    128 B → 64.1 KiB |       2 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f801148c00 → java.lang.invoke.LambdaForm$MH.0x000000c80116d400`                                               |
|  +2028.3% | +19.015 KiB |  0.3% → 20.6% |      960 B → 20 KiB | 21 → 23 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                                                                                                   |
|  +2028.3% | +19.015 KiB |  0.3% → 20.6% |      960 B → 20 KiB | 21 → 23 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)`                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|  +2028.3% | +19.015 KiB |  0.3% → 20.6% |      960 B → 20 KiB | 21 → 23 | `apply(Object, Object)`                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000f8010b6918 → org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000c8010b6918` |
|  +2028.3% | +19.015 KiB |  0.3% → 20.6% |      960 B → 20 KiB | 21 → 23 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|  +2110.4% |  +18.96 KiB |  0.3% → 20.6% |    920 B → 19.9 KiB | 20 → 21 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|  +2110.4% |  +18.96 KiB |  0.3% → 20.6% |    920 B → 19.9 KiB | 20 → 21 | `get()`                                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`                                                                                      |
|  +2110.4% |  +18.96 KiB |  0.3% → 20.6% |    920 B → 19.9 KiB | 20 → 21 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)`                                   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|  +2110.4% |  +18.96 KiB |  0.3% → 20.6% |    920 B → 19.9 KiB | 20 → 21 | `provide(Object)`                                                                              | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000f8010b6d70 → org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000c8010b6d70` |
|   +594.6% |  +18.07 KiB |  0.9% → 21.8% | 3.04 KiB → 21.1 KiB | 40 → 42 | `setCallSiteTarget()`                                                                          | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                                                                                             |
|   +562.3% | +17.968 KiB |  0.9% → 21.9% |  3.2 KiB → 21.2 KiB | 43 → 44 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|   +433.3% | +14.625 KiB |  1.0% → 18.6% |   3.38 KiB → 18 KiB |       3 | `copyOf(Object[], int)`                                                                        | `java.util.Arrays`                                                                                                                                    |
|   +425.3% | +14.453 KiB |  1.0% → 18.5% |  3.4 KiB → 17.9 KiB |  10 → 8 | `grow(int)`                                                                                    | `java.util.ArrayList`                                                                                                                                 |
|   +425.3% | +14.453 KiB |  1.0% → 18.5% |  3.4 KiB → 17.9 KiB |  10 → 8 | `grow()`                                                                                       | `java.util.ArrayList`                                                                                                                                 |
|   +425.3% | +14.453 KiB |  1.0% → 18.5% |  3.4 KiB → 17.9 KiB |  10 → 8 | `add(Object, Object[], int)`                                                                   | `java.util.ArrayList`                                                                                                                                 |
|   +425.3% | +14.453 KiB |  1.0% → 18.5% |  3.4 KiB → 17.9 KiB |  10 → 8 | `add(Object)`                                                                                  | `java.util.ArrayList`                                                                                                                                 |
|   +855.2% | +11.023 KiB |  0.4% → 12.7% | 1.29 KiB → 12.3 KiB | 27 → 24 | `applyTo(SourceCode)`                                                                          | `org.codenarc.rule.AbstractRule`                                                                                                                      |
|   +855.2% | +11.023 KiB |  0.4% → 12.7% | 1.29 KiB → 12.3 KiB | 27 → 24 | `invokeInterface(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$DMH.0x000000f8010bd000 → java.lang.invoke.LambdaForm$DMH.0x000000c8010bd000`                                             |
|       new | +10.882 KiB |  0.0% → 11.3% |      0 B → 10.9 KiB |   0 → 2 | `createProxy()`                                                                                | `org.codehaus.groovy.reflection.GeneratedMetaMethod$Proxy`                                                                                            |

##### Standard library

|    Change |       Delta |             % |                Size | Objects | Function                                                                                       | Location                                                                                                                                              |
| --------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +3130.8% | +75.335 KiB |  0.7% → 80.5% | 2.41 KiB → 77.7 KiB | 26 → 50 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000f801134400 → java.lang.invoke.LambdaForm$MH.0x000000c801141000`                                               |
| +51143.8% | +63.929 KiB | <0.1% → 66.3% |    128 B → 64.1 KiB |       2 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f801148c00 → java.lang.invoke.LambdaForm$MH.0x000000c80116d400`                                               |
|  +2028.3% | +19.015 KiB |  0.3% → 20.6% |      960 B → 20 KiB | 21 → 23 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                                                                                                   |
|  +2028.3% | +19.015 KiB |  0.3% → 20.6% |      960 B → 20 KiB | 21 → 23 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)`                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|  +2028.3% | +19.015 KiB |  0.3% → 20.6% |      960 B → 20 KiB | 21 → 23 | `apply(Object, Object)`                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000f8010b6918 → org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000c8010b6918` |
|  +2028.3% | +19.015 KiB |  0.3% → 20.6% |      960 B → 20 KiB | 21 → 23 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|  +2110.4% |  +18.96 KiB |  0.3% → 20.6% |    920 B → 19.9 KiB | 20 → 21 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|  +2110.4% |  +18.96 KiB |  0.3% → 20.6% |    920 B → 19.9 KiB | 20 → 21 | `get()`                                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`                                                                                      |
|  +2110.4% |  +18.96 KiB |  0.3% → 20.6% |    920 B → 19.9 KiB | 20 → 21 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)`                                   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|  +2110.4% |  +18.96 KiB |  0.3% → 20.6% |    920 B → 19.9 KiB | 20 → 21 | `provide(Object)`                                                                              | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000f8010b6d70 → org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000c8010b6d70` |
|   +594.6% |  +18.07 KiB |  0.9% → 21.8% | 3.04 KiB → 21.1 KiB | 40 → 42 | `setCallSiteTarget()`                                                                          | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                                                                                             |
|   +562.3% | +17.968 KiB |  0.9% → 21.9% |  3.2 KiB → 21.2 KiB | 43 → 44 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                                                                       |
|   +433.3% | +14.625 KiB |  1.0% → 18.6% |   3.38 KiB → 18 KiB |       3 | `copyOf(Object[], int)`                                                                        | `java.util.Arrays`                                                                                                                                    |
|   +425.3% | +14.453 KiB |  1.0% → 18.5% |  3.4 KiB → 17.9 KiB |  10 → 8 | `grow(int)`                                                                                    | `java.util.ArrayList`                                                                                                                                 |
|   +425.3% | +14.453 KiB |  1.0% → 18.5% |  3.4 KiB → 17.9 KiB |  10 → 8 | `grow()`                                                                                       | `java.util.ArrayList`                                                                                                                                 |
|   +425.3% | +14.453 KiB |  1.0% → 18.5% |  3.4 KiB → 17.9 KiB |  10 → 8 | `add(Object, Object[], int)`                                                                   | `java.util.ArrayList`                                                                                                                                 |
|   +425.3% | +14.453 KiB |  1.0% → 18.5% |  3.4 KiB → 17.9 KiB |  10 → 8 | `add(Object)`                                                                                  | `java.util.ArrayList`                                                                                                                                 |
|   +855.2% | +11.023 KiB |  0.4% → 12.7% | 1.29 KiB → 12.3 KiB | 27 → 24 | `invokeInterface(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$DMH.0x000000f8010bd000 → java.lang.invoke.LambdaForm$DMH.0x000000c8010bd000`                                             |
|       new | +10.882 KiB |  0.0% → 11.3% |      0 B → 10.9 KiB |   0 → 2 | `createProxy()`                                                                                | `org.codehaus.groovy.reflection.GeneratedMetaMethod$Proxy`                                                                                            |
|       new | +10.882 KiB |  0.0% → 11.3% |      0 B → 10.9 KiB |   0 → 2 | `proxy()`                                                                                      | `org.codehaus.groovy.reflection.GeneratedMetaMethod$Proxy`                                                                                            |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |               Size | Objects | Function                                                                                      | Location                                                                                                  |
| ------: | -----------: | ------------: | -----------------: | ------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -100.0% | -323.632 KiB |  91.5% → 0.1% |     324 KiB → 56 B |  56 → 1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f801141000 → java.lang.invoke.LambdaForm$MH.0x000000c80115e000`   |
|  -99.9% | -280.906 KiB |  79.4% → 0.2% |    281 KiB → 152 B |  24 → 4 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f801150800 → java.lang.invoke.LambdaForm$MH.0x000000c801003000`   |
|  -97.3% |  -273.46 KiB |  79.4% → 7.8% | 281 KiB → 7.49 KiB |      20 | `delegate(Object, Object)`                                                                    | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                          |
|  -97.1% | -273.375 KiB |  79.5% → 8.4% | 282 KiB → 8.13 KiB | 31 → 30 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f801102400 → java.lang.invoke.LambdaForm$MH.0x000000c801102400`   |
|  -97.0% | -272.992 KiB |  79.5% → 8.6% | 281 KiB → 8.31 KiB | 27 → 26 | `invokeSpecial(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
|  -97.1% | -272.914 KiB |  79.4% → 8.4% | 281 KiB → 8.11 KiB |      22 | `init()`                                                                                      | `org.codenarc.source.AbstractSourceCode`                                                                  |
|  -99.7% | -258.343 KiB |  73.2% → 0.8% |    259 KiB → 832 B | 21 → 14 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f8012d8000 → java.lang.invoke.LambdaForm$MH.0x000000c801140c00`   |
|  -99.7% | -258.007 KiB |  73.2% → 0.9% |    259 KiB → 920 B | 14 → 11 | `statement()`                                                                                 | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.835 KiB |  73.2% → 1.1% | 259 KiB → 1.07 KiB | 14 → 16 | `blockStatement()`                                                                            | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.835 KiB |  73.2% → 1.1% | 259 KiB → 1.07 KiB | 14 → 16 | `blockStatements()`                                                                           | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.812 KiB |  73.2% → 1.1% | 259 KiB → 1.11 KiB | 14 → 17 | `block()`                                                                                     | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.812 KiB |  73.2% → 1.1% | 259 KiB → 1.11 KiB | 14 → 17 | `methodBody()`                                                                                | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.796 KiB |  73.2% → 1.1% | 259 KiB → 1.11 KiB | 14 → 17 | `blockStatementsOpt()`                                                                        | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.5% | -257.765 KiB |  73.2% → 1.3% | 259 KiB → 1.22 KiB | 16 → 19 | `methodDeclaration(int, int)`                                                                 | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -73.0% | -256.257 KiB | 99.2% → 98.0% | 351 KiB → 94.7 KiB |      91 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                                                        |
|  -72.9% | -256.218 KiB | 99.3% → 98.3% |   351 KiB → 95 KiB | 96 → 94 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
|  -72.9% | -256.218 KiB | 99.3% → 98.3% |   351 KiB → 95 KiB | 96 → 94 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f8010b2800 → java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
| removed | -256.062 KiB |  72.4% → 0.0% |      256 KiB → 0 B |   2 → 0 | `ifElseStatement()`                                                                           | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
| removed | -256.062 KiB |  72.4% → 0.0% |      256 KiB → 0 B |   2 → 0 | `conditionalStatement()`                                                                      | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
| removed | -256.046 KiB |  72.4% → 0.0% |      256 KiB → 0 B |   2 → 0 | `putVal(Object, Object, boolean)`                                                             | `java.util.concurrent.ConcurrentHashMap`                                                                  |

##### Standard library

|  Change |        Delta |             % |               Size | Objects | Function                                                                                      | Location                                                                                                  |
| ------: | -----------: | ------------: | -----------------: | ------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -100.0% | -323.632 KiB |  91.5% → 0.1% |     324 KiB → 56 B |  56 → 1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f801141000 → java.lang.invoke.LambdaForm$MH.0x000000c80115e000`   |
|  -99.9% | -280.906 KiB |  79.4% → 0.2% |    281 KiB → 152 B |  24 → 4 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f801150800 → java.lang.invoke.LambdaForm$MH.0x000000c801003000`   |
|  -97.3% |  -273.46 KiB |  79.4% → 7.8% | 281 KiB → 7.49 KiB |      20 | `delegate(Object, Object)`                                                                    | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                          |
|  -97.1% | -273.375 KiB |  79.5% → 8.4% | 282 KiB → 8.13 KiB | 31 → 30 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f801102400 → java.lang.invoke.LambdaForm$MH.0x000000c801102400`   |
|  -97.0% | -272.992 KiB |  79.5% → 8.6% | 281 KiB → 8.31 KiB | 27 → 26 | `invokeSpecial(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
|  -99.7% | -258.343 KiB |  73.2% → 0.8% |    259 KiB → 832 B | 21 → 14 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f8012d8000 → java.lang.invoke.LambdaForm$MH.0x000000c801140c00`   |
|  -99.7% | -258.007 KiB |  73.2% → 0.9% |    259 KiB → 920 B | 14 → 11 | `statement()`                                                                                 | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.835 KiB |  73.2% → 1.1% | 259 KiB → 1.07 KiB | 14 → 16 | `blockStatement()`                                                                            | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.835 KiB |  73.2% → 1.1% | 259 KiB → 1.07 KiB | 14 → 16 | `blockStatements()`                                                                           | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.812 KiB |  73.2% → 1.1% | 259 KiB → 1.11 KiB | 14 → 17 | `block()`                                                                                     | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.812 KiB |  73.2% → 1.1% | 259 KiB → 1.11 KiB | 14 → 17 | `methodBody()`                                                                                | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.6% | -257.796 KiB |  73.2% → 1.1% | 259 KiB → 1.11 KiB | 14 → 17 | `blockStatementsOpt()`                                                                        | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -99.5% | -257.765 KiB |  73.2% → 1.3% | 259 KiB → 1.22 KiB | 16 → 19 | `methodDeclaration(int, int)`                                                                 | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -73.0% | -256.257 KiB | 99.2% → 98.0% | 351 KiB → 94.7 KiB |      91 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                                                        |
|  -72.9% | -256.218 KiB | 99.3% → 98.3% |   351 KiB → 95 KiB | 96 → 94 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
|  -72.9% | -256.218 KiB | 99.3% → 98.3% |   351 KiB → 95 KiB | 96 → 94 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f8010b2800 → java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
| removed | -256.062 KiB |  72.4% → 0.0% |      256 KiB → 0 B |   2 → 0 | `ifElseStatement()`                                                                           | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
| removed | -256.062 KiB |  72.4% → 0.0% |      256 KiB → 0 B |   2 → 0 | `conditionalStatement()`                                                                      | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
| removed | -256.046 KiB |  72.4% → 0.0% |      256 KiB → 0 B |   2 → 0 | `putVal(Object, Object, boolean)`                                                             | `java.util.concurrent.ConcurrentHashMap`                                                                  |
| removed | -256.046 KiB |  72.4% → 0.0% |      256 KiB → 0 B |   2 → 0 | `putIfAbsent(Object, Object)`                                                                 | `java.util.concurrent.ConcurrentHashMap`                                                                  |
