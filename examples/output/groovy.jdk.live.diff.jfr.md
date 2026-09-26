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
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000301397c00`       |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invokeSpecial(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`              |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invokeExact_MT(Object, Object, Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                        |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `postfixExpression()`                                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser`            |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `expression(int)`                                                                                             | `org.apache.groovy.parser.antlr4.GroovyParser`            |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `setGuards(Object)`                                                                                           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `getMetaProperty(Class, String, boolean, boolean)`                                                            | `groovy.lang.MetaClassImpl`                               |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                                            | `java.lang.invoke.MethodHandles`                          |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                     |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `readBytes0(byte[], int, int)`                                                                                | `java.io.RandomAccessFile`                                |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `getMethods(Class, String)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`   |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `allocateInstance(Class)`                                                                                     | `jdk.internal.misc.Unsafe`                                |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invoke(Object)`                                                                                              | `java.lang.invoke.LambdaForm$MH.0x00000003010b3400`       |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `gallopLeft(Object, Object[], int, int, int, Comparator)`                                                     | `java.util.TimSort`                                       |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `isValidExactMethod(Class[], CachedClass[])`                                                                  | `org.codehaus.groovy.reflection.ParameterTypes`           |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `contains(int)`                                                                                               | `groovyjarjarantlr4.v4.runtime.misc.IntervalSet`          |

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
| removed |    -2 |  0.6% → 0.0% |   2 → 0 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000301118400`        |
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

|    Change | Delta |             % | Samples | Function                                         | Location                                             |
| --------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------------------------- |
| +10900.0% |  +109 |  0.3% → 36.8% | 1 → 110 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |
|  +8100.0% |   +81 |  0.3% → 27.4% |  1 → 82 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`  |
|   +276.0% |   +69 |  7.3% → 31.4% | 25 → 94 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`  |
|  +2200.0% |   +66 |  0.9% → 23.1% |  3 → 69 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301119400`  |
|  +6000.0% |   +60 |  0.3% → 20.4% |  1 → 61 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030138d800`  |
|  +1060.0% |   +53 |  1.5% → 19.4% |  5 → 58 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013dbc00`  |
|  +2600.0% |   +52 |  0.6% → 18.1% |  2 → 54 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030182b000`  |
|  +2300.0% |   +46 |  0.6% → 16.1% |  2 → 48 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003012c5c00`  |
|  +4400.0% |   +44 |  0.3% → 15.1% |  1 → 45 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013db800`  |
|  +3800.0% |   +38 |  0.3% → 13.0% |  1 → 39 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301607800`  |
|  +3200.0% |   +32 |  0.3% → 11.0% |  1 → 33 | `invoke(Object, int)`                            | `java.lang.invoke.LambdaForm$MH.0x000000030109bc00`  |
|   +625.0% |   +25 |   1.2% → 9.7% |  4 → 29 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301825c00`  |
|  +1900.0% |   +19 |   0.3% → 6.7% |  1 → 20 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301105400`  |
|  +1900.0% |   +19 |   0.3% → 6.7% |  1 → 20 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003012b8000`  |
|    +26.2% |   +16 | 17.9% → 25.8% | 61 → 77 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301140c00`  |
|    +42.9% |   +15 | 10.3% → 16.7% | 35 → 50 | `invokeVirtual(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |
|    +42.9% |   +15 | 10.3% → 16.7% | 35 → 50 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`          |
|    +36.8% |   +14 | 11.1% → 17.4% | 38 → 52 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`          |
|  +1200.0% |   +12 |   0.3% → 4.3% |  1 → 13 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301607400`  |
|    +14.9% |   +11 | 21.7% → 28.4% | 74 → 85 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`             |

##### Standard library

|    Change | Delta |             % | Samples | Function                                         | Location                                             |
| --------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------------------------- |
| +10900.0% |  +109 |  0.3% → 36.8% | 1 → 110 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |
|  +8100.0% |   +81 |  0.3% → 27.4% |  1 → 82 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`  |
|   +276.0% |   +69 |  7.3% → 31.4% | 25 → 94 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`  |
|  +2200.0% |   +66 |  0.9% → 23.1% |  3 → 69 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301119400`  |
|  +6000.0% |   +60 |  0.3% → 20.4% |  1 → 61 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030138d800`  |
|  +1060.0% |   +53 |  1.5% → 19.4% |  5 → 58 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013dbc00`  |
|  +2600.0% |   +52 |  0.6% → 18.1% |  2 → 54 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030182b000`  |
|  +2300.0% |   +46 |  0.6% → 16.1% |  2 → 48 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003012c5c00`  |
|  +4400.0% |   +44 |  0.3% → 15.1% |  1 → 45 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013db800`  |
|  +3800.0% |   +38 |  0.3% → 13.0% |  1 → 39 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301607800`  |
|  +3200.0% |   +32 |  0.3% → 11.0% |  1 → 33 | `invoke(Object, int)`                            | `java.lang.invoke.LambdaForm$MH.0x000000030109bc00`  |
|   +625.0% |   +25 |   1.2% → 9.7% |  4 → 29 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301825c00`  |
|  +1900.0% |   +19 |   0.3% → 6.7% |  1 → 20 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301105400`  |
|  +1900.0% |   +19 |   0.3% → 6.7% |  1 → 20 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003012b8000`  |
|    +26.2% |   +16 | 17.9% → 25.8% | 61 → 77 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301140c00`  |
|    +42.9% |   +15 | 10.3% → 16.7% | 35 → 50 | `invokeVirtual(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |
|  +1200.0% |   +12 |   0.3% → 4.3% |  1 → 13 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301607400`  |
|   +900.0% |    +9 |   0.3% → 3.3% |  1 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012c6400`  |
|   +400.0% |    +8 |   0.6% → 3.3% |  2 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301133000`  |
|   +800.0% |    +8 |   0.3% → 3.0% |   1 → 9 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013dc400`  |

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

|  Change | Delta |             % |   Samples | Function                                                                                    | Location                                             |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -98.8% |   -79 |  23.5% → 0.3% |    80 → 1 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030144e800`  |
|  -98.7% |   -77 |  22.9% → 0.3% |    78 → 1 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000030122c000`  |
|  -98.6% |   -73 |  21.7% → 0.3% |    74 → 1 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301000400`  |
|  -66.7% |   -72 | 31.7% → 12.0% |  108 → 36 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301145c00`  |
|  -87.7% |   -64 |  21.4% → 3.0% |    73 → 9 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301397c00`  |
|  -96.4% |   -53 |  16.1% → 0.7% |    55 → 2 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301827000`  |
| removed |   -50 |  14.7% → 0.0% |    50 → 0 | `invoke(Object, int)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000f80109bc00`  |
|  -38.2% |   -47 | 36.1% → 25.4% |  123 → 76 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003012ac800`  |
|  -95.7% |   -44 |  13.5% → 0.7% |    46 → 2 | `invoke(Object, Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301535c00`  |
|  -74.1% |   -43 |  17.0% → 5.0% |   58 → 15 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003012c5400`  |
|  -17.5% |   -37 | 62.2% → 58.5% | 212 → 175 | `invokeImpl(Object, Object[])`                                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -18.2% |   -37 | 59.5% → 55.5% | 203 → 166 | `invoke(Object, Object[])`                                                                  | `java.lang.reflect.Method`                           |
|  -82.2% |   -37 |  13.2% → 2.7% |    45 → 8 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030118c000`  |
|  -16.8% |   -35 | 61.0% → 57.9% | 208 → 173 | `invoke(Object, Object[])`                                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -17.9% |   -35 | 57.2% → 53.5% | 195 → 160 | `invoke(Object, Object[])`                                                                  | `org.codehaus.groovy.reflection.CachedMethod`        |
|  -94.4% |   -34 |  10.6% → 0.7% |    36 → 2 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301826c00`  |
|  -96.8% |   -30 |   9.1% → 0.3% |    31 → 1 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301184800`  |
|   -9.8% |   -29 | 86.5% → 89.0% | 295 → 266 | `invokeExact_MT(Object, Object, Object)`                                                    | `java.lang.invoke.Invokers$Holder`                   |
|  -17.2% |   -29 | 49.6% → 46.8% | 169 → 140 | `invokeExact_MT(Object, Object, Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                   |
|   -9.6% |   -28 | 85.6% → 88.3% | 292 → 264 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |

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

|     Change |        Delta |             % |                Size |     Samples | Function                                         | Location                                            |
| ---------: | -----------: | ------------: | ------------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
|  +22817.4% |   +4.512 GiB |  0.2% → 38.6% | 20.3 MiB → 4.53 GiB |  11 → 2,346 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003012ac800` |
|   +5403.4% |   +4.379 GiB |  0.7% → 38.0% |   83 MiB → 4.46 GiB |  57 → 2,315 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030138d800` |
| +121348.4% |   +3.532 GiB | <0.1% → 30.1% | 2.98 MiB → 3.54 GiB |   2 → 1,833 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013db800` |
|    +689.3% |    +2.98 GiB |  3.6% → 29.1% |  443 MiB → 3.41 GiB | 224 → 1,788 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013d2000` |
|   +6519.7% |   +2.757 GiB |  0.4% → 23.9% |  43.3 MiB → 2.8 GiB |  22 → 1,415 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301607800` |
|   +5634.5% |   +2.677 GiB |  0.4% → 23.2% | 48.7 MiB → 2.72 GiB |  25 → 1,416 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013dbc00` |
|  +33283.7% |   +2.599 GiB |  0.1% → 22.2% |    8 MiB → 2.61 GiB |   4 → 1,317 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301825c00` |
|  +26867.9% |   +1.239 GiB | <0.1% → 10.6% | 4.72 MiB → 1.24 GiB |     3 → 683 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012c5400` |
|  +45891.2% |   +1.086 GiB |  <0.1% → 9.3% | 2.42 MiB → 1.09 GiB |     2 → 567 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000` |
|    +424.4% |   +1.055 GiB |  2.1% → 11.1% |   255 MiB → 1.3 GiB |   174 → 620 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003012b8400` |
|   +6166.5% | +739.612 MiB |   0.1% → 6.3% |    12 MiB → 752 MiB |     6 → 373 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301607400` |
|  +63070.7% | +724.332 MiB |  <0.1% → 6.0% |  1.15 MiB → 725 MiB |     1 → 354 | `invoke(Object, int)`                            | `java.lang.invoke.LambdaForm$MH.0x000000030109bc00` |
|  +35597.7% | +711.604 MiB |  <0.1% → 5.9% |     2 MiB → 714 MiB |     1 → 350 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030182b000` |
|  +27154.5% | +510.197 MiB |  <0.1% → 4.3% |  1.88 MiB → 512 MiB |     2 → 263 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012c6400` |
|    +602.4% | +505.726 MiB |   0.7% → 4.9% |    84 MiB → 590 MiB |    33 → 293 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301604800` |
|    +228.4% | +320.684 MiB |   1.1% → 3.8% |   140 MiB → 461 MiB |    70 → 237 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013dc400` |
|  +64011.4% | +320.325 MiB |  <0.1% → 2.7% |   512 KiB → 321 MiB |     1 → 162 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003012c5c00` |
|  +15300.8% | +305.848 MiB |  <0.1% → 2.6% |     2 MiB → 308 MiB |     1 → 139 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301976800` |
|   +7599.9% | +303.849 MiB |  <0.1% → 2.6% |     4 MiB → 308 MiB |     2 → 139 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301974c00` |
|  +15200.0% | +303.849 MiB |  <0.1% → 2.5% |     2 MiB → 306 MiB |     1 → 138 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301976c00` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                Size |     Samples | Function                                         | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| -100.0% |   -4.469 GiB | 37.1% → <0.1% |  4.47 GiB → 321 KiB |   2,310 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301231000` |
|  -99.9% |   -3.652 GiB | 30.3% → <0.1% | 3.66 GiB → 3.26 MiB |   1,889 → 4 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013a2c00` |
|  -77.9% |   -3.519 GiB |  37.5% → 8.5% |    4.52 GiB → 1 GiB | 2,338 → 516 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301105400` |
|  -99.7% |   -3.355 GiB |  27.9% → 0.1% | 3.36 GiB → 8.83 MiB |   1,753 → 6 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013a0400` |
|  -98.6% |    -2.93 GiB |  24.7% → 0.4% |   2.97 GiB → 44 MiB |  1,494 → 21 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301535c00` |
|  -99.9% |   -2.744 GiB | 22.8% → <0.1% |    2.75 GiB → 2 MiB |   1,379 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003015e7800` |
|  -81.5% |   -2.114 GiB |  21.5% → 4.1% |  2.59 GiB → 492 MiB | 1,349 → 249 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000030138c800` |
|  -79.7% |   -1.078 GiB |  11.2% → 2.3% |  1.35 GiB → 282 MiB |   709 → 184 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003012bc800` |
|  -94.8% |   -1.018 GiB |   8.9% → 0.5% | 1.07 GiB → 57.7 MiB |    560 → 29 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301179400` |
|  -99.0% |   -1.001 GiB |   8.4% → 0.1% | 1.01 GiB → 10.6 MiB |     521 → 7 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003013f1400` |
|  -99.0% | -821.533 MiB |   6.7% → 0.1% |     830 MiB → 8 MiB |     410 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301566800` |
|  -99.1% | -693.571 MiB |  5.7% → <0.1% |     700 MiB → 6 MiB |     347 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030159f000` |
|  -69.4% | -672.706 MiB |   7.9% → 2.5% |   970 MiB → 297 MiB |   494 → 150 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012ae000` |
|  -96.8% | -657.614 MiB |   5.5% → 0.2% |    680 MiB → 22 MiB |    337 → 11 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301587800` |
|  -99.4% | -650.657 MiB |  5.3% → <0.1% |     655 MiB → 4 MiB |     327 → 2 | `invoke(Object, int)`                            | `java.lang.invoke.LambdaForm$MH.0x0000000301278400` |
|  -99.8% | -487.577 MiB |  4.0% → <0.1% |   489 MiB → 960 KiB |     246 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301088000` |
|  -98.1% | -452.996 MiB |   3.7% → 0.1% |  462 MiB → 8.94 MiB |     232 → 7 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003012c5000` |
| removed | -437.783 MiB |   3.5% → 0.0% |       438 MiB → 0 B |     145 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801971c00` |
| removed | -429.787 MiB |   3.5% → 0.0% |       430 MiB → 0 B |     141 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f801972000` |
| removed | -427.788 MiB |   3.5% → 0.0% |       428 MiB → 0 B |     140 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801974000` |

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

|    Change |       Delta |            % |               Size | Objects | Function                                                                                     | Location                                               |
| --------: | ----------: | -----------: | -----------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +3558.7% | +12.789 KiB | 0.7% → 61.4% |   368 B → 13.1 KiB |  8 → 26 | `invoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`    |
| +26800.0% | +12.562 KiB | 0.1% → 58.9% |    48 B → 12.6 KiB |  1 → 14 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000030182b000`    |
|   +243.7% |    +9.5 KiB | 7.6% → 62.6% | 3.9 KiB → 13.4 KiB | 54 → 30 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`    |
|       new |  +8.804 KiB | 0.0% → 41.1% |      0 B → 8.8 KiB |  0 → 18 | `invokeVirtual(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00`   |
| +18116.7% |  +8.492 KiB | 0.1% → 39.9% |    48 B → 8.54 KiB |  1 → 15 | `invoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000003012c5c00`    |
|  +8933.3% |  +8.375 KiB | 0.2% → 39.6% |    96 B → 8.47 KiB |  2 → 13 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301145c00`    |
|  +6946.7% |   +8.14 KiB | 0.2% → 38.6% |   120 B → 8.26 KiB |   1 → 8 | `invoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000030138c800`    |
|  +6846.7% |  +8.023 KiB | 0.2% → 38.0% |   120 B → 8.14 KiB |   1 → 4 | `invoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000030138c000`    |
|   +496.6% |  +4.539 KiB | 1.8% → 25.5% |   936 B → 5.45 KiB | 11 → 56 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`    |
|       new |  +4.046 KiB | 0.0% → 18.9% |     0 B → 4.05 KiB |   0 → 2 | `addState(DFAState)`                                                                         | `groovyjarjarantlr4.v4.runtime.dfa.DFA`                |
|       new |  +4.015 KiB | 0.0% → 18.8% |     0 B → 4.02 KiB |   0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                               | `java.util.concurrent.ConcurrentHashMap`               |
|       new |  +4.015 KiB | 0.0% → 18.8% |     0 B → 4.02 KiB |   0 → 1 | `addCount(long, int)`                                                                        | `java.util.concurrent.ConcurrentHashMap`               |
| +10260.0% |  +4.007 KiB | 0.1% → 18.9% |    40 B → 4.05 KiB |   1 → 2 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)`                                     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +10260.0% |  +4.007 KiB | 0.1% → 18.9% |    40 B → 4.05 KiB |   1 → 2 | `addDFAEdge(DFA, DFAState, int, IntegerList, ATNConfigSet, PredictionContextCache)`          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  +6375.0% |  +3.984 KiB | 0.1% → 18.9% |    64 B → 4.05 KiB |       2 | `putVal(Object, Object, boolean)`                                                            | `java.util.concurrent.ConcurrentHashMap`               |
|  +6375.0% |  +3.984 KiB | 0.1% → 18.9% |    64 B → 4.05 KiB |       2 | `putIfAbsent(Object, Object)`                                                                | `java.util.concurrent.ConcurrentHashMap`               |
|  +2254.5% |  +3.875 KiB | 0.3% → 18.9% |   176 B → 4.05 KiB |   4 → 2 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  +2254.5% |  +3.875 KiB | 0.3% → 18.9% |   176 B → 4.05 KiB |   4 → 2 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|   +837.3% |  +3.859 KiB | 0.9% → 20.2% |   472 B → 4.32 KiB |  11 → 8 | `expression(int)`                                                                            | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  +1750.0% |  +3.828 KiB | 0.4% → 18.9% |   224 B → 4.05 KiB |   5 → 2 | `execATN(DFA, TokenStream, int, SimulatorState)`                                             | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size | Objects | Function                                         | Location                                                                   |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
|  -99.4% | -37.046 KiB |  72.3% → 1.1% |    37.3 KiB → 240 B |  29 → 5 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301003000`                        |
| removed | -36.867 KiB |  71.5% → 0.0% |      36.9 KiB → 0 B |  21 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80182f800`                        |
|  -99.9% | -36.804 KiB |  71.5% → 0.2% |     36.8 KiB → 40 B |  19 → 1 | `invokeVirtual(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x00000003010bdc00`                       |
|  -99.5% | -36.382 KiB |  70.9% → 0.8% |    36.6 KiB → 184 B |  14 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301148c00`                        |
|  -98.2% | -35.937 KiB |  71.0% → 3.1% |    36.6 KiB → 680 B |  13 → 9 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301230400`                        |
|  -96.4% | -35.828 KiB |  72.1% → 6.2% | 37.1 KiB → 1.32 KiB | 30 → 25 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301176000`                        |
|  -96.8% |  -34.89 KiB |  69.9% → 5.3% |   36 KiB → 1.14 KiB |  2 → 12 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013d2000`                        |
|  -95.9% | -34.781 KiB |  70.3% → 6.9% | 36.3 KiB → 1.48 KiB |  7 → 18 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301140c00`                        |
|  -70.9% | -28.656 KiB | 78.4% → 54.9% | 40.4 KiB → 11.8 KiB | 61 → 58 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                          |
|  -71.1% | -28.476 KiB | 77.7% → 54.2% | 40.1 KiB → 11.6 KiB | 57 → 55 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
|  -70.9% | -28.421 KiB | 77.7% → 54.5% | 40.1 KiB → 11.7 KiB | 57 → 56 | `invokeSpecial(Object, Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder`                               |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `<init>(int, int, MemorySegment)`                | `java.nio.HeapByteBuffer`                                                  |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `allocate(int)`                                  | `java.nio.ByteBuffer`                                                      |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `fromReader(Reader, String)`                     | `groovyjarjarantlr4.v4.runtime.CharStreams`                                |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `createCharStream(SourceUnit)`                   | `org.apache.groovy.parser.antlr4.AstBuilder`                               |
|  -77.7% | -27.992 KiB | 69.9% → 37.6% |   36 KiB → 8.04 KiB |       2 | `<init>(SourceUnit, boolean, boolean)`           | `org.apache.groovy.parser.antlr4.AstBuilder`                               |
|  -75.9% | -27.937 KiB | 71.4% → 41.4% | 36.8 KiB → 8.86 KiB | 18 → 19 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -77.2% | -27.851 KiB | 70.0% → 38.4% | 36.1 KiB → 8.23 KiB |   3 → 7 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|  -75.6% |  -27.82 KiB | 71.4% → 41.9% | 36.8 KiB → 8.98 KiB | 18 → 22 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -75.5% | -27.789 KiB | 71.4% → 42.1% | 36.8 KiB → 9.01 KiB | 18 → 23 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |

##### Standard library

|  Change |       Delta |             % |                Size | Objects | Function                                                                                         | Location                                             |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|  -99.4% | -37.046 KiB |  72.3% → 1.1% |    37.3 KiB → 240 B |  29 → 5 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301003000`  |
| removed | -36.867 KiB |  71.5% → 0.0% |      36.9 KiB → 0 B |  21 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000f80182f800`  |
|  -99.9% | -36.804 KiB |  71.5% → 0.2% |     36.8 KiB → 40 B |  19 → 1 | `invokeVirtual(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x00000003010bdc00` |
|  -99.5% | -36.382 KiB |  70.9% → 0.8% |    36.6 KiB → 184 B |  14 → 4 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301148c00`  |
|  -98.2% | -35.937 KiB |  71.0% → 3.1% |    36.6 KiB → 680 B |  13 → 9 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000301230400`  |
|  -96.4% | -35.828 KiB |  72.1% → 6.2% | 37.1 KiB → 1.32 KiB | 30 → 25 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301176000`  |
|  -96.8% |  -34.89 KiB |  69.9% → 5.3% |   36 KiB → 1.14 KiB |  2 → 12 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000003013d2000`  |
|  -95.9% | -34.781 KiB |  70.3% → 6.9% | 36.3 KiB → 1.48 KiB |  7 → 18 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301140c00`  |
|  -70.9% | -28.656 KiB | 78.4% → 54.9% | 40.4 KiB → 11.8 KiB | 61 → 58 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -71.1% | -28.476 KiB | 77.7% → 54.2% | 40.1 KiB → 11.6 KiB | 57 → 55 | `invokeExact_MT(Object, Object, Object, Object)`                                                 | `java.lang.invoke.Invokers$Holder`                   |
|  -70.9% | -28.421 KiB | 77.7% → 54.5% | 40.1 KiB → 11.7 KiB | 57 → 56 | `invokeSpecial(Object, Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `<init>(int, int, MemorySegment)`                                                                | `java.nio.HeapByteBuffer`                            |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `allocate(int)`                                                                                  | `java.nio.ByteBuffer`                                |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `fromReader(Reader, String)`                                                                     | `groovyjarjarantlr4.v4.runtime.CharStreams`          |
|  -77.8% | -28.015 KiB | 69.9% → 37.4% |   36 KiB → 8.02 KiB |   2 → 1 | `createCharStream(SourceUnit)`                                                                   | `org.apache.groovy.parser.antlr4.AstBuilder`         |
|  -77.7% | -27.992 KiB | 69.9% → 37.6% |   36 KiB → 8.04 KiB |       2 | `<init>(SourceUnit, boolean, boolean)`                                                           | `org.apache.groovy.parser.antlr4.AstBuilder`         |
|  -71.7% |  -27.75 KiB | 75.1% → 51.3% |   38.7 KiB → 11 KiB | 43 → 50 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  -68.1% | -25.968 KiB | 74.0% → 56.9% | 38.1 KiB → 12.2 KiB | 34 → 46 | `linkToCallSite(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                   |
|  -64.9% |  -25.64 KiB | 76.6% → 64.8% | 39.5 KiB → 13.9 KiB | 59 → 65 | `reinvoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|  -63.9% |  -24.64 KiB | 74.8% → 65.0% | 38.5 KiB → 13.9 KiB | 44 → 42 | `delegate(Object, Object, Object)`                                                               | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
