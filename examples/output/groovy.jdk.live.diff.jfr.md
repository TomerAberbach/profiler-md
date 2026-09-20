# Sampling profile diff

Collected 341 samples → 299 samples (-42 samples, -12.3%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library | -12.6% |   -42 | 97.9% → 97.7% | 334 → 292 |
| Ours             |   0.0% |     0 |   2.1% → 2.3% |         7 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| +300.0% |    +3 | 0.3% → 1.3% |   1 → 4 | `invokeExact_MT(Object, Object, Object)`                                                                      | `java.lang.invoke.Invokers$Holder`                        |
|  +33.3% |    +3 | 2.6% → 4.0% |  9 → 12 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `valueConversion(Class, Class, boolean, boolean)`                                                             | `java.lang.invoke.MethodHandleImpl`                       |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `divideOneWord(int, MutableBigInteger)`                                                                       | `java.math.MutableBigInteger`                             |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invokeSpecial(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`              |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invokeExact_MT(Object, Object, Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                        |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `postfixExpression()`                                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser`            |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `expression(int)`                                                                                             | `org.apache.groovy.parser.antlr4.GroovyParser`            |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `setGuards(Object)`                                                                                           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `getMetaProperty(Class, String, boolean, boolean)`                                                            | `groovy.lang.MetaClassImpl`                               |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                                            | `java.lang.invoke.MethodHandles`                          |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                     |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `readBytes0(byte[], int, int)`                                                                                | `java.io.RandomAccessFile`                                |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800`      |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `getMethods(Class, String)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`   |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000301397c00`       |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `allocateInstance(Class)`                                                                                     | `jdk.internal.misc.Unsafe`                                |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invoke(Object)`                                                                                              | `java.lang.invoke.LambdaForm$MH.0x00000003010b3400`       |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `gallopLeft(Object, Object[], int, int, int, Comparator)`                                                     | `java.util.TimSort`                                       |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `isValidExactMethod(Class[], CachedClass[])`                                                                  | `org.codehaus.groovy.reflection.ParameterTypes`           |

##### Ours

| Change | Delta |           % | Samples | Function                                                                | Location                                                              |
| -----: | ----: | ----------: | ------: | ----------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `call(Object, Object, Object)`                                          | `org.gmetrics.result.MetricResultBuilder$createAggregateMetricResult` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `isConstructorCallAViolation(ConstructorCallExpression)`                | `org.codenarc.rule.basic.BigDecimalInstantiationAstVisitor`           |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClassComplete(ClassNode)`                                         | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`     |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `hashCode()`                                                            | `org.gmetrics.result.MethodKey`                                       |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                      | Location                                                   |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -38.5% |   -15 | 11.4% → 8.0% | 39 → 24 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                                  |
|  -87.5% |    -7 |  2.3% → 0.3% |   8 → 1 | `getReturnState(int)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|  -60.0% |    -6 |  2.9% → 1.3% |  10 → 4 | `get(Object)`                                                                                 | `java.util.concurrent.ConcurrentHashMap`                   |
|  -71.4% |    -5 |  2.1% → 0.7% |   7 → 2 | `prepare()`                                                                                   | `java.lang.invoke.LambdaForm`                              |
|  -57.1% |    -4 |  2.1% → 1.0% |   7 → 3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  -33.3% |    -4 |  3.5% → 2.7% |  12 → 8 | `getNode(Object)`                                                                             | `java.util.HashMap`                                        |
|  -36.4% |    -4 |  3.2% → 2.3% |  11 → 7 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                  |
| removed |    -3 |  0.9% → 0.0% |   3 → 0 | `getBooleanAttributes0(File)`                                                                 | `java.io.UnixFileSystem`                                   |
|  -50.0% |    -3 |  1.8% → 1.0% |   6 → 3 | `resize()`                                                                                    | `java.util.HashMap`                                        |
|  -21.4% |    -3 |  4.1% → 3.7% | 14 → 11 | `putVal(int, Object, Object, boolean, boolean)`                                               | `java.util.HashMap`                                        |
|  -75.0% |    -3 |  1.2% → 0.3% |   4 → 1 | `equals(ATNConfig)`                                                                           | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
| removed |    -2 |  0.6% → 0.0% |   2 → 0 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f801118400`        |
| removed |    -2 |  0.6% → 0.0% |   2 → 0 | `getCallerClass()`                                                                            | `jdk.internal.reflect.Reflection`                          |
| removed |    -2 |  0.6% → 0.0% |   2 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                               | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|  -66.7% |    -2 |  0.9% → 0.3% |   3 → 1 | `closure(CharStream, ATNConfig, ATNConfigSet, boolean, boolean, boolean)`                     | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`      |
|  -40.0% |    -2 |  1.5% → 1.0% |   5 → 3 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)`  | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
| removed |    -2 |  0.6% → 0.0% |   2 → 0 | `createAndStripZerosToMatchScale(BigInteger, int, long)`                                      | `java.math.BigDecimal`                                     |
| removed |    -2 |  0.6% → 0.0% |   2 → 0 | `compare(Method, Method)`                                                                     | `com.sun.beans.introspect.MethodInfo$MethodOrder`          |
|  -50.0% |    -2 |  1.2% → 0.7% |   4 → 2 | `getReachableTarget(Transition, int)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`      |
| removed |    -2 |  0.6% → 0.0% |   2 → 0 | `emit(Token)`                                                                                 | `org.apache.groovy.parser.antlr4.GroovyLexer`              |

##### Ours

|  Change | Delta |           % | Samples | Function                                            | Location                                                        |
| ------: | ----: | ----------: | ------: | --------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.convention.VariableTypeRequiredAstVisitor`   |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                         | `org.codenarc.rule.formatting.IndentationRule`                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                         | `org.codenarc.rule.formatting.BracesForClassRule`               |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `classNodeImplementsType(ClassNode, Class)`         | `org.codenarc.util.AstUtil`                                     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `processViolationsForFile(FileViolations)`          | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +264 | 0.0% → 88.3% | 0 → 264 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|    new |  +228 | 0.0% → 76.3% | 0 → 228 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301117800`  |
|    new |  +225 | 0.0% → 75.3% | 0 → 225 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000301118400`  |
|    new |  +216 | 0.0% → 72.2% | 0 → 216 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301115400`  |
|    new |  +160 | 0.0% → 53.5% | 0 → 160 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|    new |  +114 | 0.0% → 38.1% | 0 → 114 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000003010bd400` |
|    new |  +110 | 0.0% → 36.8% | 0 → 110 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |
|    new |  +105 | 0.0% → 35.1% | 0 → 105 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301140400`  |
|    new |  +103 | 0.0% → 34.4% | 0 → 103 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000030118d400`  |
|    new |   +94 | 0.0% → 31.4% |  0 → 94 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`  |
|    new |   +93 | 0.0% → 31.1% |  0 → 93 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000003010bc800` |
|    new |   +89 | 0.0% → 29.8% |  0 → 89 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301104000`  |
|    new |   +87 | 0.0% → 29.1% |  0 → 87 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301102400`  |
|    new |   +84 | 0.0% → 28.1% |  0 → 84 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000030118d000`  |
|    new |   +83 | 0.0% → 27.8% |  0 → 83 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000000301152800` |
|    new |   +82 | 0.0% → 27.4% |  0 → 82 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`  |
|    new |   +82 | 0.0% → 27.4% |  0 → 82 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`  |
|    new |   +81 | 0.0% → 27.1% |  0 → 81 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000030138cc00` |
|    new |   +78 | 0.0% → 26.1% |  0 → 78 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003013d2000`  |
|    new |   +77 | 0.0% → 25.8% |  0 → 77 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301140c00`  |

##### Ours

|  Change | Delta |             % | Samples | Function                                                | Location                                                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  +42.9% |   +15 | 10.3% → 16.7% | 35 → 50 | `isRuleSuppressed(Rule)`                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  +36.8% |   +14 | 11.1% → 17.4% | 38 → 52 | `init()`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  +14.9% |   +11 | 21.7% → 28.4% | 74 → 85 | `init()`                                                | `org.codenarc.source.AbstractSourceCode`                                       |
|  +24.4% |   +11 | 13.2% → 18.7% | 45 → 56 | `getAst()`                                              | `org.codenarc.source.AbstractSourceCode`                                       |
| +300.0% |    +6 |   0.6% → 2.7% |   2 → 8 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                        |
|     new |    +5 |   0.0% → 1.7% |   0 → 5 | `visitMethodCallExpression(MethodCallExpression)`       | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                   |
| +200.0% |    +4 |   0.6% → 2.0% |   2 → 6 | `doCall(Object)`                                        | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
| +200.0% |    +4 |   0.6% → 2.0% |   2 → 6 | `getText()`                                             | `org.codenarc.source.SourceFile`                                               |
| +150.0% |    +3 |   0.6% → 1.7% |   2 → 5 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                     |
|  +75.0% |    +3 |   1.2% → 2.3% |   4 → 7 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`     |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `addViolationIfDuplicate(Expression, boolean)`          | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `addViolationIfDuplicate(Expression)`                   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `doCall(Object)`                                        | `org.codenarc.util.WildcardPattern$_closure1`                                  |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `doCall(ClassNode)`                                     | `org.codenarc.rule.formatting.BracesForClassRule$_applyTo_closure1`            |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitClassComplete(ClassNode)`                         | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`              |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `isMethodNamed(MethodCallExpression, String, Integer)`  | `org.codenarc.util.AstUtil`                                                    |
|  +66.7% |    +2 |   0.9% → 1.7% |   3 → 5 | `main(String[])`                                        | `org.codenarc.CodeNarc`                                                        |
|  +50.0% |    +2 |   1.2% → 2.0% |   4 → 6 | `calculateForClass(ClassNode, SourceCode)`              | `org.gmetrics.metric.AbstractMethodMetric`                                     |
| +100.0% |    +2 |   0.6% → 1.3% |   2 → 4 | `<init>(String, boolean)`                               | `org.codenarc.util.WildcardPattern`                                            |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.formatting.BracesForClassRule`                              |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -292 | 85.6% → 0.0% | 292 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f8010b2800` |
| removed |  -245 | 71.8% → 0.0% | 245 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801117800`  |
| removed |  -244 | 71.6% → 0.0% | 244 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000f801118400`  |
| removed |  -241 | 70.7% → 0.0% | 241 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f801115400`  |
| removed |  -158 | 46.3% → 0.0% | 158 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000f801118000`  |
| removed |  -126 | 37.0% → 0.0% | 126 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000f8010bd400` |
| removed |  -123 | 36.1% → 0.0% | 123 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f80113fc00`  |
| removed |  -117 | 34.3% → 0.0% | 117 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000f801140400`  |
| removed |  -112 | 32.8% → 0.0% | 112 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f80118d400`  |
| removed |  -109 | 32.0% → 0.0% | 109 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f8010bc800` |
| removed |  -108 | 31.7% → 0.0% | 108 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801141000`  |
| removed |   -88 | 25.8% → 0.0% |  88 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8013d2400`  |
| removed |   -87 | 25.5% → 0.0% |  87 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000f80118d000`  |
| removed |   -84 | 24.6% → 0.0% |  84 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000f8010bd000` |
| removed |   -82 | 24.0% → 0.0% |  82 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f801104000`  |
| removed |   -81 | 23.8% → 0.0% |  81 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f801102400`  |
| removed |   -81 | 23.8% → 0.0% |  81 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f80138cc00` |
| removed |   -80 | 23.5% → 0.0% |  80 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801142000`  |
| removed |   -78 | 22.9% → 0.0% |  78 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8012d8400`  |
| removed |   -77 | 22.6% → 0.0% |  77 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000f801152800` |

##### Ours

|  Change | Delta |             % | Samples | Function                                          | Location                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  -37.3% |   -19 | 15.0% → 10.7% | 51 → 32 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                              |
|  -19.8% |   -17 | 25.2% → 23.1% | 86 → 69 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                    |
|  -25.4% |   -17 | 19.6% → 16.7% | 67 → 50 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                              |
|  -11.0% |   -10 | 26.7% → 27.1% | 91 → 81 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`          |
|  -13.4% |    -9 | 19.6% → 19.4% | 67 → 58 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                          |
|  -15.7% |    -8 | 15.0% → 14.4% | 51 → 43 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                    |
|  -38.9% |    -7 |   5.3% → 3.7% | 18 → 11 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`         |
|  -11.3% |    -6 | 15.5% → 15.7% | 53 → 47 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| removed |    -5 |   1.5% → 0.0% |   5 → 0 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
| removed |    -5 |   1.5% → 0.0% |   5 → 0 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                                  |
| removed |    -5 |   1.5% → 0.0% |   5 → 0 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                                  |
| removed |    -4 |   1.2% → 0.0% |   4 → 0 | `processDirectory(String, RuleSet)`               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                    |
|  -80.0% |    -4 |   1.5% → 0.3% |   5 → 1 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`  |
| removed |    -4 |   1.2% → 0.0% |   4 → 0 | `doCall(Object)`                                  | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|  -60.0% |    -3 |   1.5% → 0.7% |   5 → 2 | `<init>(Reader)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet`                                             |
|  -75.0% |    -3 |   1.2% → 0.3% |   4 → 1 | `assertClassImplementsRuleInterface(Class)`       | `org.codenarc.ruleset.RuleSetUtil`                                                  |
|   -4.1% |    -3 | 21.7% → 23.7% | 74 → 71 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| removed |    -3 |   0.9% → 0.0% |   3 → 0 | `visitConstantExpression(ConstantExpression)`     | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                        |
|  -37.5% |    -3 |   2.3% → 1.7% |   8 → 5 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                    |
|  -75.0% |    -3 |   1.2% → 0.3% |   4 → 1 | `doCall(Object)`                                  | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`                |

# Allocated heap profile diff

Allocated 12 GiB → 11.7 GiB (-317.261 MiB, -2.6%) over 6,358 samples → 6,264 samples (1.94 MiB → 1.92 MiB per sample).

| Category         | Change |       Delta |             % |                Size |       Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | ------------: |
| Standard library |  -2.4% | -295.96 MiB | 99.0% → 99.2% | 11.9 GiB → 11.6 GiB | 6,242 → 6,168 |
| Ours             | -18.1% | -21.301 MiB |   1.0% → 0.8% |  118 MiB → 96.4 MiB |       59 → 46 |
| Unknown          |  +1.5% |      +552 B |         <0.1% | 36.2 KiB → 36.7 KiB |       57 → 50 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |           % |                Size |   Samples | Function                                                                  | Location                                             |
| ------: | ----------: | ----------: | ------------------: | --------: | ------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +81.4% | +79.032 MiB | 0.8% → 1.5% |  97.1 MiB → 176 MiB |   62 → 55 | `copyOf(byte[], int)`                                                     | `java.util.Arrays`                                   |
|  +14.9% | +46.107 MiB | 2.5% → 3.0% |   310 MiB → 356 MiB | 155 → 166 | `newArray(Class, int)`                                                    | `java.lang.reflect.Array`                            |
|  +78.6% | +44.708 MiB | 0.5% → 0.8% |  56.9 MiB → 102 MiB |   53 → 76 | `iterator()`                                                              | `java.util.ArrayList`                                |
|  +80.6% | +36.141 MiB | 0.4% → 0.7% |   44.8 MiB → 81 MiB |   23 → 40 | `builder(long, IntFunction)`                                              | `java.util.stream.Nodes`                             |
|  +26.9% | +34.791 MiB | 1.0% → 1.4% |   129 MiB → 164 MiB |   65 → 75 | `<init>()`                                                                | `java.math.MutableBigInteger`                        |
|  +16.9% | +30.572 MiB | 1.5% → 1.8% |   181 MiB → 211 MiB |  94 → 110 | `spliterator(Object[], int, int, int)`                                    | `java.util.Spliterators`                             |
|  +64.0% |  +29.42 MiB | 0.4% → 0.6% |   46 MiB → 75.4 MiB |   23 → 38 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`       | `java.lang.invoke.MethodHandleImpl`                  |
|  +73.6% | +29.418 MiB | 0.3% → 0.6% |   40 MiB → 69.4 MiB |   20 → 35 | `newSlice(int[], int, boolean)`                                           | `java.util.regex.Pattern`                            |
|  +10.7% | +26.944 MiB | 2.0% → 2.3% |   251 MiB → 278 MiB | 128 → 142 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`            | `java.lang.invoke.BoundMethodHandle$Species_LLLL`    |
|  +78.4% | +25.307 MiB | 0.3% → 0.5% | 32.3 MiB → 57.6 MiB |   19 → 36 | `newNode(int, Object, Object, HashMap$Node)`                              | `java.util.LinkedHashMap`                            |
|  +84.2% |  +22.84 MiB | 0.2% → 0.4% |   27.1 MiB → 50 MiB |   14 → 25 | `put(String, MethodHandleWrapper)`                                        | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`  |
| +149.0% | +22.333 MiB | 0.1% → 0.3% |   15 MiB → 37.3 MiB |    8 → 19 | `of(byte, int, int, int[])`                                               | `java.lang.invoke.LambdaFormEditor$TransformKey`     |
|   +4.1% |  +21.76 MiB | 4.3% → 4.6% |   536 MiB → 558 MiB | 287 → 292 | `fillInStackTrace(int)`                                                   | `java.lang.Throwable`                                |
|  +29.2% | +21.456 MiB | 0.6% → 0.8% | 73.4 MiB → 94.9 MiB |   39 → 47 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                  |
|  +25.8% | +19.708 MiB | 0.6% → 0.8% |   76.3 MiB → 96 MiB |   40 → 50 | `newHashMap(int)`                                                         | `java.util.HashMap`                                  |
|  +29.5% | +19.114 MiB | 0.5% → 0.7% | 64.8 MiB → 83.9 MiB |   33 → 42 | `put(Object, Object)`                                                     | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap` |
|   +4.9% | +19.088 MiB | 3.2% → 3.4% |   390 MiB → 409 MiB | 193 → 204 | `makeBlockInliningWrapper(MethodHandle)`                                  | `java.lang.invoke.MethodHandleImpl`                  |
|  +77.3% | +17.008 MiB | 0.2% → 0.3% |     22 MiB → 39 MiB |   11 → 21 | `getInvocationType()`                                                     | `java.lang.invoke.MemberName`                        |
|  +10.3% | +16.612 MiB | 1.3% → 1.5% |   161 MiB → 178 MiB |   80 → 89 | `parameterArray()`                                                        | `java.lang.invoke.MethodType`                        |
|  +14.1% | +15.792 MiB | 0.9% → 1.1% |   112 MiB → 128 MiB |   59 → 60 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`             | `java.lang.invoke.MethodHandleImpl`                  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |            % |                Size |   Samples | Function                                                                                      | Location                                            |
| -----: | ----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| -70.0% | -214.92 MiB |  2.5% → 0.8% |  307 MiB → 92.1 MiB |  128 → 49 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`      |
| -28.1% | -93.372 MiB |  2.7% → 2.0% |   333 MiB → 239 MiB | 109 → 122 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                       |
| -69.2% | -71.967 MiB |  0.8% → 0.3% |    104 MiB → 32 MiB |        16 | `entrySet()`                                                                                  | `java.util.HashMap`                                 |
|  -7.9% | -62.376 MiB |  6.4% → 6.0% |   786 MiB → 723 MiB | 389 → 369 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                       |
| -17.2% | -54.261 MiB |  2.6% → 2.2% |   315 MiB → 261 MiB | 163 → 137 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                    |
| -52.9% |  -53.96 MiB |  0.8% → 0.4% |    102 MiB → 48 MiB |   50 → 25 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                  | `java.math.MutableBigInteger`                       |
| -20.6% | -47.658 MiB |  1.9% → 1.5% |   232 MiB → 184 MiB |  120 → 91 | `allocateInstance(Object)`                                                                    | `java.lang.invoke.DirectMethodHandle`               |
| -18.5% | -41.078 MiB |  1.8% → 1.5% |   222 MiB → 181 MiB |  116 → 93 | `compile()`                                                                                   | `java.util.regex.Pattern`                           |
| -68.3% | -27.895 MiB |  0.3% → 0.1% | 40.8 MiB → 12.9 MiB |    19 → 7 | `<init>()`                                                                                    | `java.util.regex.Pattern$BitClass`                  |
| -10.4% | -26.892 MiB |  2.1% → 1.9% |   259 MiB → 232 MiB | 130 → 120 | `of(byte, int, int)`                                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey`    |
| -38.0% | -25.039 MiB |  0.5% → 0.3% |   66 MiB → 40.9 MiB |   34 → 22 | `getCachedContext(PredictionContext)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ATN`             |
| -16.0% | -23.841 MiB |  1.2% → 1.0% |   149 MiB → 125 MiB |   76 → 64 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`    |
|  -9.8% | -23.385 MiB |  1.9% → 1.8% |   239 MiB → 216 MiB | 120 → 108 | `divideAndRemainderKnuth(BigInteger)`                                                         | `java.math.BigInteger`                              |
| -91.7% | -21.989 MiB | 0.2% → <0.1% |      24 MiB → 2 MiB |    12 → 1 | `<init>(Object, Object)`                                                                      | `groovy.lang.Tuple2`                                |
|  -3.4% | -21.262 MiB |  5.1% → 5.0% |   627 MiB → 605 MiB | 313 → 305 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
| -59.3% | -20.958 MiB |  0.3% → 0.1% | 35.3 MiB → 14.4 MiB |    18 → 8 | `methodType(Class, Class)`                                                                    | `java.lang.invoke.MethodType`                       |
| -90.9% | -19.917 MiB | 0.2% → <0.1% |    21.9 MiB → 2 MiB |    11 → 1 | `tuple(Object, Object)`                                                                       | `groovy.lang.Tuple`                                 |
|  -8.6% | -19.059 MiB |  1.8% → 1.7% |   221 MiB → 202 MiB | 118 → 107 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.HashMap`                                 |
| -24.1% | -18.657 MiB |  0.6% → 0.5% | 77.4 MiB → 58.7 MiB |   40 → 30 | `convertToTypeArray(Object[])`                                                                | `org.codehaus.groovy.runtime.MetaClassHelper`       |
| -50.0% |  -17.99 MiB |  0.3% → 0.1% |     36 MiB → 18 MiB |    18 → 9 | `getAndPut(String, MemoizeCache$ValueProvider)`                                               | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +10.904 GiB | 0.0% → 92.9% | 0 B → 10.9 GiB | 0 → 5,786 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|    new |  +7.532 GiB | 0.0% → 64.2% | 0 B → 7.53 GiB | 0 → 3,976 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301117800`  |
|    new |  +7.474 GiB | 0.0% → 63.7% | 0 B → 7.47 GiB | 0 → 4,006 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301115400`  |
|    new |  +7.424 GiB | 0.0% → 63.3% | 0 B → 7.42 GiB | 0 → 3,919 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000301118400`  |
|    new |  +6.485 GiB | 0.0% → 55.3% | 0 B → 6.49 GiB | 0 → 3,364 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301140400`  |
|    new |  +6.403 GiB | 0.0% → 54.6% |  0 B → 6.4 GiB | 0 → 3,320 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000030118d400`  |
|    new |   +5.88 GiB | 0.0% → 50.1% | 0 B → 5.88 GiB | 0 → 3,181 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|    new |  +5.423 GiB | 0.0% → 46.2% | 0 B → 5.42 GiB | 0 → 2,797 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000003010bc800` |
|    new |  +5.401 GiB | 0.0% → 46.0% |  0 B → 5.4 GiB | 0 → 2,815 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000030118d000`  |
|    new |  +5.288 GiB | 0.0% → 45.1% | 0 B → 5.29 GiB | 0 → 2,717 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000003010bd400` |
|    new |  +5.012 GiB | 0.0% → 42.7% | 0 B → 5.01 GiB | 0 → 2,560 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |
|    new |  +4.925 GiB | 0.0% → 42.0% | 0 B → 4.93 GiB | 0 → 2,558 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301142000`  |
|    new |  +4.899 GiB | 0.0% → 41.7% |  0 B → 4.9 GiB | 0 → 2,535 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000030138cc00` |
|    new |  +4.532 GiB | 0.0% → 38.6% | 0 B → 4.53 GiB | 0 → 2,346 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003012ac800`  |
|    new |   +4.46 GiB | 0.0% → 38.0% | 0 B → 4.46 GiB | 0 → 2,315 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030138d800`  |
|    new |  +3.535 GiB | 0.0% → 30.1% | 0 B → 3.54 GiB | 0 → 1,833 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003013db800`  |
|    new |  +3.461 GiB | 0.0% → 29.5% | 0 B → 3.46 GiB | 0 → 1,800 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000030118e800` |
|    new |   +3.42 GiB | 0.0% → 29.1% | 0 B → 3.42 GiB | 0 → 1,841 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301119400`  |
|    new |  +3.413 GiB | 0.0% → 29.1% | 0 B → 3.41 GiB | 0 → 1,788 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003013d2000`  |
|    new |  +3.274 GiB | 0.0% → 27.9% | 0 B → 3.27 GiB | 0 → 1,642 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000000301004000`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.287 GiB | 93.7% → 0.0% | 11.3 GiB → 0 B | 5,867 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f8010b2800` |
| removed |  -7.689 GiB | 63.8% → 0.0% | 7.69 GiB → 0 B | 3,981 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801117800`  |
| removed |  -7.662 GiB | 63.6% → 0.0% | 7.66 GiB → 0 B | 4,015 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f801115400`  |
| removed |  -7.598 GiB | 63.1% → 0.0% |  7.6 GiB → 0 B | 3,932 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000f801118400`  |
| removed |  -6.625 GiB | 55.0% → 0.0% | 6.63 GiB → 0 B | 3,431 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000f801140400`  |
| removed |  -6.552 GiB | 54.4% → 0.0% | 6.55 GiB → 0 B | 3,394 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f80118d400`  |
| removed |  -5.937 GiB | 49.3% → 0.0% | 5.94 GiB → 0 B | 3,182 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000f801118000`  |
| removed |  -5.657 GiB | 47.0% → 0.0% | 5.66 GiB → 0 B | 2,867 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f8010bc800` |
| removed |  -5.455 GiB | 45.3% → 0.0% | 5.46 GiB → 0 B | 2,841 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000f80118d000`  |
| removed |  -5.186 GiB | 43.1% → 0.0% | 5.19 GiB → 0 B | 2,718 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000f8010bd400` |
| removed |  -5.086 GiB | 42.2% → 0.0% | 5.09 GiB → 0 B | 2,642 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801142000`  |
| removed |  -4.981 GiB | 41.4% → 0.0% | 4.98 GiB → 0 B | 2,526 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f80138cc00` |
| removed |  -4.881 GiB | 40.5% → 0.0% | 4.88 GiB → 0 B | 2,550 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f80113fc00`  |
| removed |  -4.519 GiB | 37.5% → 0.0% | 4.52 GiB → 0 B | 2,338 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f80138d800`  |
| removed |  -4.469 GiB | 37.1% → 0.0% | 4.47 GiB → 0 B | 2,310 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f8012ac800`  |
| removed |  -3.655 GiB | 30.3% → 0.0% | 3.66 GiB → 0 B | 1,889 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f8013db000`  |
| removed |  -3.604 GiB | 29.9% → 0.0% |  3.6 GiB → 0 B | 1,866 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000f80118e800` |
| removed |  -3.364 GiB | 27.9% → 0.0% | 3.36 GiB → 0 B | 1,753 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8013d2400`  |
| removed |  -3.343 GiB | 27.8% → 0.0% | 3.34 GiB → 0 B | 1,803 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801141000`  |
| removed |  -3.304 GiB | 27.4% → 0.0% |  3.3 GiB → 0 B | 1,713 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000f801004000`  |

# Retained heap profile diff

Retained 51.6 KiB → 21.4 KiB (-30.148 KiB, -58.5%) over 129 objects → 124 objects (409 B → 177 B per object).

| Category         |  Change |       Delta |              % |                Size |   Objects |
| ---------------- | ------: | ----------: | -------------: | ------------------: | --------: |
| Standard library |  -58.5% | -30.117 KiB | 99.9% → 100.0% | 51.5 KiB → 21.4 KiB | 128 → 124 |
| Ours             | removed |       -32 B |    0.1% → 0.0% |          32 B → 0 B |     1 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |           Size | Objects | Function                                                                        | Location                                                |
| ------: | ---------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new | +4.015 KiB | 0.0% → 18.8% | 0 B → 4.02 KiB |   0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                  | `java.util.concurrent.ConcurrentHashMap`                |
|     new | +2.078 KiB |  0.0% → 9.7% | 0 B → 2.08 KiB |   0 → 1 | `toChars(byte[])`                                                               | `java.lang.StringUTF16`                                 |
| +385.7% |     +432 B |  0.2% → 2.5% |  112 B → 544 B |   2 → 7 | `getDeclaredMethods0(boolean)`                                                  | `java.lang.Class`                                       |
|     new |     +304 B |  0.0% → 1.4% |    0 B → 304 B |   0 → 2 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                      |
|  +44.4% |     +224 B |  1.0% → 3.3% |  504 B → 728 B |  9 → 13 | `getOrPutMethods(String, MetaMethodIndex$Header)`                               | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|     new |     +192 B |  0.0% → 0.9% |    0 B → 192 B |   0 → 3 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`           | `sun.reflect.annotation.AnnotationParser`               |
|     new |     +144 B |  0.0% → 0.7% |    0 B → 144 B |   0 → 2 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                 | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|  +16.2% |      +96 B |  1.1% → 3.1% |  592 B → 688 B |   6 → 7 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                      |
|     new |      +96 B |  0.0% → 0.4% |     0 B → 96 B |   0 → 2 | `makeBlockInliningWrapper(MethodHandle)`                                        | `java.lang.invoke.MethodHandleImpl`                     |
| +157.1% |      +88 B |  0.1% → 0.7% |   56 B → 144 B |   1 → 2 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                                 |
|  +55.6% |      +80 B |  0.3% → 1.0% |  144 B → 224 B |       2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                 |
| +150.0% |      +72 B |  0.1% → 0.5% |   48 B → 120 B |   2 → 5 | `createTerminalNode(ParserRuleContext, Token)`                                  | `groovyjarjarantlr4.v4.runtime.Parser`                  |
|     new |      +72 B |  0.0% → 0.3% |     0 B → 72 B |   0 → 1 | `getDeclaredFields0(boolean)`                                                   | `java.lang.Class`                                       |
| +266.7% |      +64 B | <0.1% → 0.4% |    24 B → 88 B |       1 | `initClassName()`                                                               | `java.lang.Class`                                       |
|     new |      +64 B |  0.0% → 0.3% |     0 B → 64 B |   0 → 1 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                       | `sun.reflect.annotation.AnnotationParser`               |
|     new |      +64 B |  0.0% → 0.3% |     0 B → 64 B |   0 → 2 | `visitEnhancedArgumentListInPar(GroovyParser$EnhancedArgumentListInParContext)` | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |      +64 B |  0.0% → 0.3% |     0 B → 64 B |   0 → 1 | `<init>(GroovyClassLoader, CodeSource, CompilerConfiguration)`                  | `org.codehaus.groovy.ast.CompileUnit`                   |
|     new |      +56 B |  0.0% → 0.3% |     0 B → 56 B |   0 → 1 | `computeValue(Class)`                                                           | `org.codehaus.groovy.reflection.ClassInfo$1`            |
|     new |      +48 B |  0.0% → 0.2% |     0 B → 48 B |   0 → 1 | `postfixExpression()`                                                           | `org.apache.groovy.parser.antlr4.GroovyParser`          |
|     new |      +48 B |  0.0% → 0.2% |     0 B → 48 B |   0 → 1 | `unreflect(Method)`                                                             | `java.lang.invoke.MethodHandles$Lookup`                 |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |             % |              Size | Objects | Function                                                                                | Location                                                |
| ------: | ----------: | ------------: | ----------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% | 36 KiB → 8.02 KiB |   2 → 1 | `<init>(int, int, MemorySegment)`                                                       | `java.nio.HeapByteBuffer`                               |
| removed |  -8.015 KiB |  15.5% → 0.0% |    8.02 KiB → 0 B |   1 → 0 | `initTable()`                                                                           | `java.util.concurrent.ConcurrentHashMap`                |
| removed |      -528 B |   1.0% → 0.0% |       528 B → 0 B |   1 → 0 | `resize(int)`                                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -40.3% |      -464 B |   2.2% → 3.1% |  1.13 KiB → 688 B |   4 → 3 | `resize()`                                                                              | `java.util.HashMap`                                     |
| removed |      -120 B |   0.2% → 0.0% |       120 B → 0 B |   1 → 0 | `findBootstrapClass(String)`                                                            | `java.lang.ClassLoader`                                 |
| removed |       -96 B |   0.2% → 0.0% |        96 B → 0 B |   2 → 0 | `getTable()`                                                                            | `java.beans.FeatureDescriptor`                          |
| removed |       -80 B |   0.2% → 0.0% |        80 B → 0 B |   1 → 0 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                    | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`   |
| removed |       -72 B |   0.1% → 0.0% |        72 B → 0 B |   1 → 0 | `getDeclaredConstructors0(boolean)`                                                     | `java.lang.Class`                                       |
|  -42.9% |       -72 B |   0.3% → 0.4% |      168 B → 96 B |   5 → 2 | `clone()`                                                                               | `java.lang.Object`                                      |
| removed |       -64 B |   0.1% → 0.0% |        64 B → 0 B |   1 → 0 | `initializeMap(Class)`                                                                  | `java.lang.ClassValue`                                  |
|  -40.0% |       -64 B |   0.3% → 0.4% |      160 B → 96 B |   5 → 3 | `putNodeMetaData(Object, Object)`                                                       | `org.codehaus.groovy.ast.NodeMetaDataHandler`           |
|  -50.0% |       -64 B |   0.2% → 0.3% |      128 B → 64 B |   4 → 2 | `<init>(int)`                                                                           | `org.codehaus.groovy.util.ListHashMap`                  |
| removed |       -56 B |   0.1% → 0.0% |        56 B → 0 B |   1 → 0 | `getTargetMethodInfo()`                                                                 | `java.beans.Introspector`                               |
| removed |       -56 B |   0.1% → 0.0% |        56 B → 0 B |   1 → 0 | `addMethod(MethodDescriptor)`                                                           | `java.beans.Introspector`                               |
| removed |       -56 B |   0.1% → 0.0% |        56 B → 0 B |   1 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                  | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`      |
| removed |       -56 B |   0.1% → 0.0% |        56 B → 0 B |   2 → 0 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`           |
| removed |       -56 B |   0.1% → 0.0% |        56 B → 0 B |   1 → 0 | `visitIntegerLiteralAlt(GroovyParser$IntegerLiteralAltContext)`                         | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|  -50.0% |       -48 B |          0.2% |       96 B → 48 B |   4 → 2 | `copy()`                                                                                | `org.codehaus.groovy.util.FastArray`                    |
| removed |       -48 B |   0.1% → 0.0% |        48 B → 0 B |   1 → 0 | `<init>(Class, ClassInfo)`                                                              | `org.codehaus.groovy.reflection.CachedClass`            |
|  -50.0% |       -48 B |          0.2% |       96 B → 48 B |   2 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                          | `java.lang.invoke.BoundMethodHandle$Species_LLLL`       |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size | Objects | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +20.101 KiB | 0.0% → 93.9% | 0 B → 20.1 KiB | 0 → 104 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|    new | +19.468 KiB | 0.0% → 90.9% | 0 B → 19.5 KiB |  0 → 96 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301117800`  |
|    new | +19.265 KiB | 0.0% → 90.0% | 0 B → 19.3 KiB |  0 → 94 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000301118400`  |
|    new | +19.062 KiB | 0.0% → 89.1% | 0 B → 19.1 KiB |  0 → 90 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301115400`  |
|    new | +16.007 KiB | 0.0% → 74.8% |   0 B → 16 KiB |  0 → 41 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301102400`  |
|    new | +15.984 KiB | 0.0% → 74.7% |   0 B → 16 KiB |  0 → 40 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301104000`  |
|    new | +13.875 KiB | 0.0% → 64.8% | 0 B → 13.9 KiB |  0 → 65 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|    new | +13.398 KiB | 0.0% → 62.6% | 0 B → 13.4 KiB |  0 → 30 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`  |
|    new | +13.148 KiB | 0.0% → 61.4% | 0 B → 13.1 KiB |  0 → 26 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000000301152800` |
|    new | +13.148 KiB | 0.0% → 61.4% | 0 B → 13.1 KiB |  0 → 26 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`  |
|    new | +12.609 KiB | 0.0% → 58.9% | 0 B → 12.6 KiB |  0 → 14 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030182b000`  |
|    new |  +8.804 KiB | 0.0% → 41.1% |  0 B → 8.8 KiB |  0 → 18 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |
|    new |  +8.539 KiB | 0.0% → 39.9% | 0 B → 8.54 KiB |  0 → 15 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003012c5c00`  |
|    new |  +8.468 KiB | 0.0% → 39.6% | 0 B → 8.47 KiB |  0 → 13 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301145c00`  |
|    new |  +8.257 KiB | 0.0% → 38.6% | 0 B → 8.26 KiB |   0 → 8 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000030138c800`  |
|    new |   +8.14 KiB | 0.0% → 38.0% | 0 B → 8.14 KiB |   0 → 4 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000030138c000`  |
|    new |  +5.453 KiB | 0.0% → 25.5% | 0 B → 5.45 KiB |  0 → 56 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`  |
|    new |  +4.046 KiB | 0.0% → 18.9% | 0 B → 4.05 KiB |   0 → 2 | `addState(DFAState)`                                                                        | `groovyjarjarantlr4.v4.runtime.dfa.DFA`              |
|    new |  +4.015 KiB | 0.0% → 18.8% | 0 B → 4.02 KiB |   0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                              | `java.util.concurrent.ConcurrentHashMap`             |
|    new |  +4.015 KiB | 0.0% → 18.8% | 0 B → 4.02 KiB |   0 → 1 | `addCount(long, int)`                                                                       | `java.util.concurrent.ConcurrentHashMap`             |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size | Objects | Function                                                                                    | Location                                             |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -42.132 KiB |  81.7% → 0.0% |      42.1 KiB → 0 B |  99 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f8010b2800` |
| removed | -41.648 KiB |  80.8% → 0.0% |      41.6 KiB → 0 B |  93 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801117800`  |
| removed | -41.554 KiB |  80.6% → 0.0% |      41.6 KiB → 0 B |  91 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000f801118400`  |
| removed | -41.382 KiB |  80.3% → 0.0% |      41.4 KiB → 0 B |  86 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f801115400`  |
| removed | -39.515 KiB |  76.6% → 0.0% |      39.5 KiB → 0 B |  59 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000f801118000`  |
| removed | -37.585 KiB |  72.9% → 0.0% |      37.6 KiB → 0 B |  35 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f801102400`  |
| removed | -37.507 KiB |  72.8% → 0.0% |      37.5 KiB → 0 B |  34 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f801104000`  |
| removed | -37.281 KiB |  72.3% → 0.0% |      37.3 KiB → 0 B |  29 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801150800`  |
| removed | -37.148 KiB |  72.1% → 0.0% |      37.1 KiB → 0 B |  30 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000f801152800` |
| removed | -37.148 KiB |  72.1% → 0.0% |      37.1 KiB → 0 B |  30 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8012d8400`  |
| removed | -36.867 KiB |  71.5% → 0.0% |      36.9 KiB → 0 B |  21 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f80182f800`  |
| removed | -36.843 KiB |  71.5% → 0.0% |      36.8 KiB → 0 B |  19 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000f801101c00` |
| removed | -36.601 KiB |  71.0% → 0.0% |      36.6 KiB → 0 B |  13 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801145c00`  |
| removed | -36.562 KiB |  70.9% → 0.0% |      36.6 KiB → 0 B |  14 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8012c5c00`  |
| removed | -36.265 KiB |  70.3% → 0.0% |      36.3 KiB → 0 B |   7 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f80138c800`  |
| removed | -36.031 KiB |  69.9% → 0.0% |        36 KiB → 0 B |   2 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f80138c000`  |
|  -70.9% | -28.656 KiB | 78.4% → 54.9% | 40.4 KiB → 11.8 KiB | 61 → 58 | `invokeImpl(Object, Object[])`                                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -71.1% | -28.476 KiB | 77.7% → 54.2% | 40.1 KiB → 11.6 KiB | 57 → 55 | `invokeExact_MT(Object, Object, Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                   |
|  -70.9% | -28.421 KiB | 77.7% → 54.5% | 40.1 KiB → 11.7 KiB | 57 → 56 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `<init>(int, int, MemorySegment)`                                                           | `java.nio.HeapByteBuffer`                            |
