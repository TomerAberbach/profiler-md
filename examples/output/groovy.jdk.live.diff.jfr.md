# Sampling profile diff

Collected 309 samples → 336 samples (+27 samples, +8.7%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  +8.2% |   +25 | 98.7% → 98.2% | 305 → 330 |
| Ours             | +50.0% |    +2 |   1.3% → 1.8% |     4 → 6 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % | Samples | Function                                                                                                      | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +32.4% |   +11 | 11.0% → 13.4% | 34 → 45 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                  |
|  +62.5% |    +5 |   2.6% → 3.9% |  8 → 13 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
| +200.0% |    +4 |   0.6% → 1.8% |   2 → 6 | `init(MemberName, Object)`                                                                                    | `java.lang.invoke.MethodHandleNatives`                     |
|     new |    +4 |   0.0% → 1.2% |   0 → 4 | `wrapSink(Sink)`                                                                                              | `java.util.stream.AbstractPipeline`                        |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                                     | `java.lang.invoke.MethodHandleImpl`                        |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                                 | `java.lang.invoke.MethodHandleImpl`                        |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `privateGetDeclaredMethods(boolean)`                                                                          | `java.lang.Class`                                          |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                      |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `coerceArgumentsToClasses(Object[])`                                                                          | `org.codehaus.groovy.reflection.ParameterTypes`            |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `getBooleanAttributes0(File)`                                                                                 | `java.io.UnixFileSystem`                                   |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `getWeakMetaClass()`                                                                                          | `org.codehaus.groovy.reflection.ClassInfo`                 |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `compare(MutableBigInteger)`                                                                                  | `java.math.MutableBigInteger`                              |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `invokeExact_MT(Object, Object, Object)`                                                                      | `java.lang.invoke.Invokers$Holder`                         |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `invokeSpecial(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`               |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `collectViolations(SourceCode, RuleSet)`                                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`             |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `resolve(MemberName, Class, int, boolean)`                                                                    | `java.lang.invoke.MethodHandleNatives`                     |
|  +40.0% |    +2 |   1.6% → 2.1% |   5 → 7 | `getReturnState(int)`                                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                                        | `java.lang.invoke.DirectMethodHandle$Holder`               |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `resize()`                                                                                                    | `java.util.HashMap`                                        |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `get(int)`                                                                                                    | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap`            |

##### Standard library

|  Change | Delta |             % | Samples | Function                                                                                                      | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +32.4% |   +11 | 11.0% → 13.4% | 34 → 45 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                  |
|  +62.5% |    +5 |   2.6% → 3.9% |  8 → 13 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
| +200.0% |    +4 |   0.6% → 1.8% |   2 → 6 | `init(MemberName, Object)`                                                                                    | `java.lang.invoke.MethodHandleNatives`                     |
|     new |    +4 |   0.0% → 1.2% |   0 → 4 | `wrapSink(Sink)`                                                                                              | `java.util.stream.AbstractPipeline`                        |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                                     | `java.lang.invoke.MethodHandleImpl`                        |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                                 | `java.lang.invoke.MethodHandleImpl`                        |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `privateGetDeclaredMethods(boolean)`                                                                          | `java.lang.Class`                                          |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                      |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `coerceArgumentsToClasses(Object[])`                                                                          | `org.codehaus.groovy.reflection.ParameterTypes`            |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `getBooleanAttributes0(File)`                                                                                 | `java.io.UnixFileSystem`                                   |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `getWeakMetaClass()`                                                                                          | `org.codehaus.groovy.reflection.ClassInfo`                 |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `compare(MutableBigInteger)`                                                                                  | `java.math.MutableBigInteger`                              |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `invokeExact_MT(Object, Object, Object)`                                                                      | `java.lang.invoke.Invokers$Holder`                         |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `invokeSpecial(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`               |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `resolve(MemberName, Class, int, boolean)`                                                                    | `java.lang.invoke.MethodHandleNatives`                     |
|  +40.0% |    +2 |   1.6% → 2.1% |   5 → 7 | `getReturnState(int)`                                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                                        | `java.lang.invoke.DirectMethodHandle$Holder`               |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `resize()`                                                                                                    | `java.util.HashMap`                                        |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `get(int)`                                                                                                    | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap`            |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `getClass()`                                                                                                  | `java.lang.Object`                                         |

##### Ours

| Change | Delta |           % | Samples | Function                                                 | Location                                                               |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.6% |   0 → 2 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                         |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `addViolationForSunImport(ImportNode, SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSunPackagesRule`                  |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>()`                                               | `org.codenarc.rule.basic.EmptyClassAstVisitor`                         |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `areBothTheSame(Expression, Expression)`                 | `org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionAstVisitor` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`        |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                         | Location                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
|  -61.5% |    -8 | 4.2% → 1.5% |  13 → 5 | `newInstance(Class, int)`                                                                        | `java.lang.reflect.Array`                                 |
|  -62.5% |    -5 | 2.6% → 0.9% |   8 → 3 | `matches(Method, String, Class[])`                                                               | `java.lang.PublicMethods$Key`                             |
| removed |    -4 | 1.3% → 0.0% |   4 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`      |
|  -80.0% |    -4 | 1.6% → 0.3% |   5 → 1 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                               | `java.lang.invoke.MethodHandles`                          |
|  -33.3% |    -4 | 3.9% → 2.4% |  12 → 8 | `getNode(Object)`                                                                                | `java.util.HashMap`                                       |
|  -80.0% |    -4 | 1.6% → 0.3% |   5 → 1 | `<init>(Method, boolean)`                                                                        | `java.lang.invoke.MemberName`                             |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `invokeVirtual(Object, Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`              |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `execute(Lexer, CharStream, int)`                                                                | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`   |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `getCallerClass()`                                                                               | `jdk.internal.reflect.Reflection`                         |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `reflectionData()`                                                                               | `java.lang.Class`                                         |
|  -50.0% |    -2 | 1.3% → 0.6% |   4 → 2 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `correctClassForNameAndUnReflectOtherwise(Method)`                                               | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `addFirst(Object)`                                                                               | `java.util.ArrayDeque`                                    |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `lock()`                                                                                         | `org.codehaus.groovy.reflection.ClassInfo`                |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `internalMemberName(Object)`                                                                     | `java.lang.invoke.DirectMethodHandle`                     |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `valueConversion(Class, Class, boolean, boolean)`                                                | `java.lang.invoke.MethodHandleImpl`                       |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `stat0(long, UnixFileAttributes)`                                                                | `sun.nio.fs.UnixNativeDispatcher`                         |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `getMethods(Class, String)`                                                                      | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`   |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getParameterTypes()`                                                                            | `org.codehaus.groovy.reflection.ParameterTypes`           |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |

##### Ours

|  Change | Delta |           % | Samples | Function                                          | Location                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getText()`                                       | `org.codenarc.source.SourceFile`                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getViolations(AstVisitor, SourceCode)`           | `org.codenarc.rule.unused.UnusedPrivateFieldRule` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.gmetrics.metric.abc.AbcAstVisitor`           |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`            |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +303 | 0.0% → 90.2% | 0 → 303 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
|    new |  +251 | 0.0% → 74.7% | 0 → 251 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801117800`  |
|    new |  +246 | 0.0% → 73.2% | 0 → 246 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a801118400`  |
|    new |  +240 | 0.0% → 71.4% | 0 → 240 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801115400`  |
|    new |  +164 | 0.0% → 48.8% | 0 → 164 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a801118000`  |
|    new |  +142 | 0.0% → 42.3% | 0 → 142 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bd400` |
|    new |  +139 | 0.0% → 41.4% | 0 → 139 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a80113fc00`  |
|    new |  +132 | 0.0% → 39.3% | 0 → 132 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801140400`  |
|    new |  +123 | 0.0% → 36.6% | 0 → 123 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a80118d400`  |
|    new |  +118 | 0.0% → 35.1% | 0 → 118 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |
|    new |  +116 | 0.0% → 34.5% | 0 → 116 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801141000`  |
|    new |   +96 | 0.0% → 28.6% |  0 → 96 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8013d2400`  |
|    new |   +92 | 0.0% → 27.4% |  0 → 92 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a80138cc00` |
|    new |   +91 | 0.0% → 27.1% |  0 → 91 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bd000` |
|    new |   +87 | 0.0% → 25.9% |  0 → 87 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801142000`  |
|    new |   +87 | 0.0% → 25.9% |  0 → 87 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801140c00`  |
|    new |   +85 | 0.0% → 25.3% |  0 → 85 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801102400`  |
|    new |   +85 | 0.0% → 25.3% |  0 → 85 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a80118d000`  |
|    new |   +84 | 0.0% → 25.0% |  0 → 84 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a801104000`  |
|    new |   +83 | 0.0% → 24.7% |  0 → 83 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a8012ac800`  |

##### Ours

|  Change | Delta |             % |  Samples | Function                                                  | Location                                                                           |
| ------: | ----: | ------------: | -------: | --------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +19.7% |   +15 | 24.6% → 27.1% |  76 → 91 | `applyTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                                   |
|  +11.1% |   +10 | 29.1% → 29.8% | 90 → 100 | `doCall(Object)`                                          | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`         |
|  +19.0% |    +8 | 13.6% → 14.9% |  42 → 50 | `visitMethod(MethodNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                             |
|  +36.8% |    +7 |   6.1% → 7.7% |  19 → 26 | `doCall(Object)`                                          | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`        |
|   +9.9% |    +7 | 23.0% → 23.2% |  71 → 78 | `measureRuleProcessingTime(Rule, Closure)`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                     |
|   +8.6% |    +6 | 22.7% → 22.6% |  70 → 76 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.AbstractAstVisitorRule`                                         |
|  +10.2% |    +6 | 19.1% → 19.3% |  59 → 65 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractAstVisitor`                                             |
| +600.0% |    +6 |   0.3% → 2.1% |    1 → 7 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                            |
| +250.0% |    +5 |   0.6% → 2.1% |    2 → 7 | `visitBlockStatement(BlockStatement)`                     | `org.codenarc.rule.formatting.IndentationAstVisitor`                               |
| +200.0% |    +4 |   0.6% → 1.8% |    2 → 6 | `applyVisitor(AstVisitor, SourceCode)`                    | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                   |
| +133.3% |    +4 |   1.0% → 2.1% |    3 → 7 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                   |
| +200.0% |    +4 |   0.6% → 1.8% |    2 → 6 | `visitBinaryExpression(BinaryExpression)`                 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                 |
|     new |    +4 |   0.0% → 1.2% |    0 → 4 | `doCall(Object)`                                          | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7` |
| +150.0% |    +3 |   0.6% → 1.5% |    2 → 5 | `calculate(MethodNode, SourceCode)`                       | `org.gmetrics.metric.abc.AbcMetric`                                                |
| +150.0% |    +3 |   0.6% → 1.5% |    2 → 5 | `doCall(Object)`                                          | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`     |
| +300.0% |    +3 |   0.3% → 1.2% |    1 → 4 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)`   | `org.gmetrics.metric.AbstractMethodMetric`                                         |
| +300.0% |    +3 |   0.3% → 1.2% |    1 → 4 | `visitVariableExpression(VariableExpression)`             | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                           |
| +300.0% |    +3 |   0.3% → 1.2% |    1 → 4 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                           |
| +300.0% |    +3 |   0.3% → 1.2% |    1 → 4 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                           |
| +150.0% |    +3 |   0.6% → 1.5% |    2 → 5 | `processDirectory(String, RuleSet)`                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                   |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -290 | 93.9% → 0.0% | 290 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |
| removed |  -236 | 76.4% → 0.0% | 236 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801117800`  |
| removed |  -234 | 75.7% → 0.0% | 234 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000801118400`  |
| removed |  -226 | 73.1% → 0.0% | 226 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801115400`  |
| removed |  -166 | 53.7% → 0.0% | 166 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000801118000`  |
| removed |  -141 | 45.6% → 0.0% | 141 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000008010bd400` |
| removed |  -133 | 43.0% → 0.0% | 133 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080113fc00`  |
| removed |  -113 | 36.6% → 0.0% | 113 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801140400`  |
| removed |  -109 | 35.3% → 0.0% | 109 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080118d400`  |
| removed |  -107 | 34.6% → 0.0% | 107 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801141000`  |
| removed |  -103 | 33.3% → 0.0% | 103 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000008010bc800` |
| removed |   -89 | 28.8% → 0.0% |  89 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801102400`  |
| removed |   -87 | 28.2% → 0.0% |  87 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008013d2400`  |
| removed |   -85 | 27.5% → 0.0% |  85 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000080138c800` |
| removed |   -84 | 27.2% → 0.0% |  84 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801104000`  |
| removed |   -84 | 27.2% → 0.0% |  84 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000080118d000`  |
| removed |   -81 | 26.2% → 0.0% |  81 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801142000`  |
| removed |   -79 | 25.6% → 0.0% |  79 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801140c00`  |
| removed |   -78 | 25.2% → 0.0% |  78 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801150800`  |
| removed |   -77 | 24.9% → 0.0% |  77 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801119400`  |

##### Ours

|  Change | Delta |             % | Samples | Function                                            | Location                                                                                                       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|  -31.5% |   -17 | 17.5% → 11.0% | 54 → 37 | `getAst()`                                          | `org.codenarc.source.AbstractSourceCode`                                                                       |
|  -30.8% |   -16 | 16.8% → 10.7% | 52 → 36 | `init()`                                            | `org.codenarc.analyzer.SuppressionAnalyzer`                                                                    |
|  -30.8% |   -16 | 16.8% → 10.7% | 52 → 36 | `isRuleSuppressed(Rule)`                            | `org.codenarc.analyzer.SuppressionAnalyzer`                                                                    |
|  -50.0% |    -5 |   3.2% → 1.5% |  10 → 5 | `getAstVisitor()`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                                                     |
|  -71.4% |    -5 |   2.3% → 0.6% |   7 → 2 | `writeFileViolations(Writer, FileResults)`          | `org.codenarc.report.TextReportWriter`                                                                         |
|   -5.2% |    -4 | 24.9% → 21.7% | 77 → 73 | `init()`                                            | `org.codenarc.source.AbstractSourceCode`                                                                       |
|  -27.3% |    -3 |   3.6% → 2.4% |  11 → 8 | `doCall(Object)`                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                                     |
|  -75.0% |    -3 |   1.3% → 0.3% |   4 → 1 | `doCall(Object)`                                    | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1`                   |
|  -60.0% |    -3 |   1.6% → 0.6% |   5 → 2 | `getText()`                                         | `org.codenarc.source.SourceFile`                                                                               |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `doCall(Object)`                                    | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`                                           |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `checkForCorrectColumn(ASTNode, String, int)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `processSourceLine(String, int)`                    | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                                                |
|  -50.0% |    -2 |   1.3% → 0.6% |   4 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`     | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                                                   |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `doCall(Object)`                                    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`                       |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `doCall(Object)`                                    | `org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6` |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `visitBinaryExpression(BinaryExpression)`           | `org.codenarc.rule.design.InstanceofAstVisitor`                                                                |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `checkParametersCount(MethodNode)`                  | `org.codenarc.rule.size.ParameterCountAstVisitor`                                                              |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`     | `org.codenarc.rule.size.ParameterCountAstVisitor`                                                              |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `super$3$visitBlockStatement(BlockStatement)`       | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`                                          |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                                            |

# Allocated heap profile diff

Allocated 11.9 GiB (+63.211 MiB, +0.5%) over 6,276 samples → 6,325 samples (1.94 MiB → 1.93 MiB per sample).

| Category         | Change |        Delta |             % |               Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | -----------------: | ------------: |
| Standard library |    ~0% | +598.851 KiB | 99.2% → 98.7% |           11.8 GiB | 6,172 → 6,220 |
| Ours             | +62.8% |  +62.628 MiB |   0.8% → 1.3% | 99.7 MiB → 162 MiB |       51 → 53 |
| Unknown          |  -5.3% |   -2.117 KiB |         <0.1% |  40.1 KiB → 38 KiB |       53 → 52 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |            % |                Size |   Samples | Function                                                                                     | Location                                             |
| -------: | -----------: | -----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +144.2% | +161.038 MiB |  0.9% → 2.2% |   112 MiB → 273 MiB |   54 → 71 | `make(MethodType, LambdaForm, Object, Object, Object)`                                       | `java.lang.invoke.BoundMethodHandle$Species_LLL`     |
|   +34.2% |   +78.22 MiB |  1.9% → 2.5% |   229 MiB → 307 MiB | 121 → 154 | `lambdaFormEditor(LambdaForm)`                                                               | `java.lang.invoke.LambdaFormEditor`                  |
| +3000.0% |   +59.97 MiB | <0.1% → 0.5% |      2 MiB → 62 MiB |     1 → 2 | `getViolationLocationString(Violation, String)`                                              | `org.codenarc.report.TextReportWriter`               |
|   +10.3% |  +54.731 MiB |  4.4% → 4.8% |   533 MiB → 588 MiB | 276 → 308 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                                |
|   +21.1% |  +52.448 MiB |  2.0% → 2.5% |   249 MiB → 302 MiB | 127 → 152 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                               | `java.lang.invoke.BoundMethodHandle$Species_LLLL`    |
|   +30.6% |  +35.612 MiB |  1.0% → 1.2% |   116 MiB → 152 MiB |   60 → 75 | `parameterArray()`                                                                           | `java.lang.invoke.MethodType`                        |
|   +16.2% |  +31.972 MiB |  1.6% → 1.9% |   198 MiB → 230 MiB | 101 → 119 | `newNode(int, Object, Object, HashMap$Node)`                                                 | `java.util.HashMap`                                  |
|   +17.2% |  +31.526 MiB |  1.5% → 1.8% |   183 MiB → 215 MiB |  93 → 109 | `optimize(Pattern$Node)`                                                                     | `java.util.regex.Pattern$BnM`                        |
|   +52.2% |  +22.629 MiB |  0.4% → 0.5% |   43.3 MiB → 66 MiB |   21 → 33 | `createEntryListArray(int)`                                                                  | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap` |
|   +45.2% |  +22.274 MiB |  0.4% → 0.6% | 49.3 MiB → 71.6 MiB |   26 → 35 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|   +37.3% |  +21.521 MiB |  0.5% → 0.6% | 57.7 MiB → 79.2 MiB |   31 → 41 | `copyOf(Object[], int)`                                                                      | `java.util.Arrays`                                   |
|   +47.6% |  +21.035 MiB |  0.4% → 0.5% | 44.2 MiB → 65.2 MiB |   23 → 27 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)`       | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL` |
|    +7.8% |  +20.888 MiB |  2.2% → 2.4% |   267 MiB → 288 MiB | 137 → 145 | `stream(Spliterator, boolean)`                                                               | `java.util.stream.StreamSupport`                     |
|   +19.6% |  +19.735 MiB |  0.8% → 1.0% |   101 MiB → 120 MiB |   52 → 62 | `toBigInteger(int)`                                                                          | `java.math.MutableBigInteger`                        |
|   +36.7% |  +19.475 MiB |  0.4% → 0.6% |   53 MiB → 72.5 MiB |   34 → 50 | `copyOfRangeByte(byte[], int, int)`                                                          | `java.util.Arrays`                                   |
|   +18.1% |  +18.334 MiB |  0.8% → 1.0% |   101 MiB → 119 MiB |   51 → 61 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                | `java.lang.invoke.MethodHandleImpl`                  |
|  +126.9% |  +17.761 MiB |  0.1% → 0.3% |   14 MiB → 31.8 MiB |    7 → 17 | `entrySet()`                                                                                 | `java.util.HashMap`                                  |
|  +160.0% |  +15.991 MiB |  0.1% → 0.2% |   9.99 MiB → 26 MiB |    5 → 12 | `getPlainNodeReference(boolean)`                                                             | `org.codehaus.groovy.ast.ClassNode`                  |
|   +52.0% |   +14.56 MiB |  0.2% → 0.3% |   28 MiB → 42.5 MiB |   14 → 20 | `getInvocationType()`                                                                        | `java.lang.invoke.MemberName`                        |
|   +34.2% |  +14.261 MiB |  0.3% → 0.5% |   41.7 MiB → 56 MiB |   21 → 27 | `RemoveQEQuoting()`                                                                          | `java.util.regex.Pattern`                            |

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function                                                                                     | Location                                             |
| ------: | -----------: | -----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +144.2% | +161.038 MiB |  0.9% → 2.2% |   112 MiB → 273 MiB |   54 → 71 | `make(MethodType, LambdaForm, Object, Object, Object)`                                       | `java.lang.invoke.BoundMethodHandle$Species_LLL`     |
|  +34.2% |   +78.22 MiB |  1.9% → 2.5% |   229 MiB → 307 MiB | 121 → 154 | `lambdaFormEditor(LambdaForm)`                                                               | `java.lang.invoke.LambdaFormEditor`                  |
|  +10.3% |  +54.731 MiB |  4.4% → 4.8% |   533 MiB → 588 MiB | 276 → 308 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                                |
|  +21.1% |  +52.448 MiB |  2.0% → 2.5% |   249 MiB → 302 MiB | 127 → 152 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                               | `java.lang.invoke.BoundMethodHandle$Species_LLLL`    |
|  +30.6% |  +35.612 MiB |  1.0% → 1.2% |   116 MiB → 152 MiB |   60 → 75 | `parameterArray()`                                                                           | `java.lang.invoke.MethodType`                        |
|  +16.2% |  +31.972 MiB |  1.6% → 1.9% |   198 MiB → 230 MiB | 101 → 119 | `newNode(int, Object, Object, HashMap$Node)`                                                 | `java.util.HashMap`                                  |
|  +17.2% |  +31.526 MiB |  1.5% → 1.8% |   183 MiB → 215 MiB |  93 → 109 | `optimize(Pattern$Node)`                                                                     | `java.util.regex.Pattern$BnM`                        |
|  +52.2% |  +22.629 MiB |  0.4% → 0.5% |   43.3 MiB → 66 MiB |   21 → 33 | `createEntryListArray(int)`                                                                  | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap` |
|  +45.2% |  +22.274 MiB |  0.4% → 0.6% | 49.3 MiB → 71.6 MiB |   26 → 35 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  +37.3% |  +21.521 MiB |  0.5% → 0.6% | 57.7 MiB → 79.2 MiB |   31 → 41 | `copyOf(Object[], int)`                                                                      | `java.util.Arrays`                                   |
|  +47.6% |  +21.035 MiB |  0.4% → 0.5% | 44.2 MiB → 65.2 MiB |   23 → 27 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)`       | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL` |
|   +7.8% |  +20.888 MiB |  2.2% → 2.4% |   267 MiB → 288 MiB | 137 → 145 | `stream(Spliterator, boolean)`                                                               | `java.util.stream.StreamSupport`                     |
|  +19.6% |  +19.735 MiB |  0.8% → 1.0% |   101 MiB → 120 MiB |   52 → 62 | `toBigInteger(int)`                                                                          | `java.math.MutableBigInteger`                        |
|  +36.7% |  +19.475 MiB |  0.4% → 0.6% |   53 MiB → 72.5 MiB |   34 → 50 | `copyOfRangeByte(byte[], int, int)`                                                          | `java.util.Arrays`                                   |
|  +18.1% |  +18.334 MiB |  0.8% → 1.0% |   101 MiB → 119 MiB |   51 → 61 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                | `java.lang.invoke.MethodHandleImpl`                  |
| +126.9% |  +17.761 MiB |  0.1% → 0.3% |   14 MiB → 31.8 MiB |    7 → 17 | `entrySet()`                                                                                 | `java.util.HashMap`                                  |
| +160.0% |  +15.991 MiB |  0.1% → 0.2% |   9.99 MiB → 26 MiB |    5 → 12 | `getPlainNodeReference(boolean)`                                                             | `org.codehaus.groovy.ast.ClassNode`                  |
|  +52.0% |   +14.56 MiB |  0.2% → 0.3% |   28 MiB → 42.5 MiB |   14 → 20 | `getInvocationType()`                                                                        | `java.lang.invoke.MemberName`                        |
|  +34.2% |  +14.261 MiB |  0.3% → 0.5% |   41.7 MiB → 56 MiB |   21 → 27 | `RemoveQEQuoting()`                                                                          | `java.util.regex.Pattern`                            |
| +700.0% |  +13.993 MiB | <0.1% → 0.1% |      2 MiB → 16 MiB |     1 → 8 | `lambda$new$0(String[], int)`                                                                | `org.codehaus.groovy.runtime.callsite.CallSiteArray` |

##### Ours

|   Change |       Delta |            % |           Size | Samples | Function                                                    | Location                                                                        |
| -------: | ----------: | -----------: | -------------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| +3000.0% |  +59.97 MiB | <0.1% → 0.5% | 2 MiB → 62 MiB |   1 → 2 | `getViolationLocationString(Violation, String)`             | `org.codenarc.report.TextReportWriter`                                          |
|  +300.0% | +11.994 MiB | <0.1% → 0.1% | 4 MiB → 16 MiB |   2 → 8 | `<init>()`                                                  | `org.codenarc.rule.AbstractAstVisitor`                                          |
|      new |  +3.998 MiB | 0.0% → <0.1% |    0 B → 4 MiB |   0 → 2 | `applyTo(SourceCode)`                                       | `org.codenarc.rule.AbstractRule`                                                |
|      new |  +3.998 MiB | 0.0% → <0.1% |    0 B → 4 MiB |   0 → 2 | `removeAnyViolationsForSameLine(int)`                       | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |
|  +100.0% |  +1.999 MiB |        <0.1% |  2 MiB → 4 MiB |   1 → 2 | `doCall(Object)`                                            | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
|  +100.0% |  +1.999 MiB |        <0.1% |  2 MiB → 4 MiB |   1 → 2 | `isRuleSuppressed(Rule)`                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                     |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitConstructorCallExpression(ConstructorCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor`              |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `<init>(String)`                                            | `org.codenarc.plugin.disablerules.LookupTable`                                  |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitReturnStatement(ReturnStatement)`                     | `org.codenarc.rule.design.ArrayReturnTracker`                                   |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                 | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`                  |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                 | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`    |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.basic.BrokenNullCheckAstVisitor`                             |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitBlockStatement(BlockStatement)`                       | `org.codenarc.rule.convention.IfStatementCouldBeTernaryAstVisitor`              |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryCollectCallAstVisitor`                |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `getSuppressionsByLineNumber(ModuleNode)`                   | `org.codenarc.analyzer.SuppressionAnalyzer`                                     |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `addViolationIfDoubleQuoted(ConstantExpression)`            | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`           | `org.codenarc.rule.FieldReferenceAstVisitor`                                    |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.design.InstanceofAstVisitor`                                 |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`           | `org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`           |
|      new |  +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.formatting.SpaceAfterMethodDeclarationNameRuleAstVisitor`    |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |            % |                Size |   Samples | Function                                                                                      | Location                                         |
| -----: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| -49.1% | -109.267 MiB |  1.8% → 0.9% |   223 MiB → 113 MiB |   63 → 60 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`       |
| -10.8% |  -88.795 MiB |  6.8% → 6.0% |   821 MiB → 732 MiB | 400 → 375 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                    |
| -13.6% |  -61.582 MiB |  3.7% → 3.2% |   454 MiB → 393 MiB | 229 → 197 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`              |
| -21.2% |  -56.806 MiB |  2.2% → 1.7% |   268 MiB → 212 MiB | 131 → 105 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`    |
| -18.5% |  -51.351 MiB |  2.3% → 1.9% |   278 MiB → 227 MiB | 143 → 118 | `of(byte, int, int)`                                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey` |
| -87.0% |  -39.977 MiB | 0.4% → <0.1% |      46 MiB → 6 MiB |     6 → 3 | `write(String, int, int)`                                                                     | `sun.nio.cs.StreamEncoder`                       |
|  -5.5% |   -35.88 MiB |  5.4% → 5.0% |   652 MiB → 616 MiB | 331 → 311 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`  |
|  -6.8% |  -24.945 MiB |  3.0% → 2.8% |   366 MiB → 341 MiB | 190 → 162 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                        |
| -30.1% |  -22.389 MiB |  0.6% → 0.4% | 74.3 MiB → 51.9 MiB |   43 → 32 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.LinkedHashMap`                        |
|  -6.9% |  -20.934 MiB |  2.5% → 2.3% |   305 MiB → 284 MiB | 150 → 141 | `divideAndRemainderKnuth(BigInteger)`                                                         | `java.math.BigInteger`                           |
| -66.3% |  -20.798 MiB |  0.3% → 0.1% | 31.4 MiB → 10.6 MiB |    18 → 8 | `copy()`                                                                                      | `java.lang.reflect.Method`                       |
|  -8.1% |  -18.297 MiB |  1.9% → 1.7% |   227 MiB → 208 MiB | 114 → 102 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`   |
| -17.6% |   -17.07 MiB |  0.8% → 0.7% | 96.7 MiB → 79.7 MiB |   44 → 38 | `newHashMap(int)`                                                                             | `java.util.HashMap`                              |
| -20.7% |  -17.007 MiB |  0.7% → 0.5% | 82.1 MiB → 65.1 MiB |   36 → 33 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                     | `java.lang.invoke.MethodHandleImpl`              |
| -33.6% |  -15.883 MiB |  0.4% → 0.3% | 47.3 MiB → 31.4 MiB |   24 → 16 | `grow(int)`                                                                                   | `java.util.ArrayList`                            |
|  -5.3% |  -14.533 MiB |  2.3% → 2.1% |   274 MiB → 260 MiB | 141 → 135 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                               |
|  -6.8% |  -14.099 MiB |  1.7% → 1.6% |   208 MiB → 194 MiB |  104 → 96 | `allocateInstance(Object)`                                                                    | `java.lang.invoke.DirectMethodHandle`            |
| -28.0% |  -13.995 MiB |  0.4% → 0.3% |     50 MiB → 36 MiB |   24 → 18 | `asSpreader(int, Class, int)`                                                                 | `java.lang.invoke.MethodHandle`                  |
| -43.7% |  -13.993 MiB |  0.3% → 0.1% |     32 MiB → 18 MiB |    15 → 9 | `removeRealReceiver(Object[])`                                                                | `org.codehaus.groovy.vmplugin.v8.Selector`       |
| -51.4% |  -13.992 MiB |  0.2% → 0.1% | 27.2 MiB → 13.3 MiB |    14 → 7 | `<init>(Method, boolean)`                                                                     | `java.lang.invoke.MemberName`                    |

##### Ours

|  Change |      Delta |            % |            Size | Samples | Function                                               | Location                                                                               |
| ------: | ---------: | -----------: | --------------: | ------: | ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| removed | -3.998 MiB | <0.1% → 0.0% |     4 MiB → 0 B |   2 → 0 | `processParameters(Parameter[], String)`               | `org.codenarc.rule.naming.ParameterNameAstVisitor`                                     |
| removed | -3.998 MiB | <0.1% → 0.0% |     4 MiB → 0 B |   2 → 0 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                    |
|  -48.1% | -3.701 MiB | 0.1% → <0.1% | 7.7 MiB → 4 MiB |   4 → 2 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`             |
| removed | -3.347 MiB | <0.1% → 0.0% |  3.35 MiB → 0 B |   2 → 0 | `doCall(Object)`                                       | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`  |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `checkForCorrectColumn(ASTNode, String, int)`          | `org.codenarc.rule.formatting.IndentationAstVisitor`                                   |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `visitClass(ClassNode)`                                | `org.codenarc.rule.AbstractFieldVisitor`                                               |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                    |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `<init>(AbstractAstVisitor)`                           | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                         |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`                          |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`                      |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `getViolations(AstVisitor, SourceCode)`                | `org.codenarc.rule.unused.UnusedPrivateMethodRule`                                     |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `<init>()`                                             | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`                      |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `applyTo(SourceCode, List)`                            | `org.codenarc.rule.AbstractAstVisitorRule`                                             |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `visitMethodComplete(MethodNode)`                      | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`         |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `doCall(Object)`                                       | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3` |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`         |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `visitClosureExpression(ClosureExpression)`            | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`                        |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `setDisabledRulesByLine(int)`                          | `org.codenarc.plugin.disablerules.LookupTable`                                         |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `<init>()`                                             | `org.codenarc.rule.AbstractMethodVisitor`                                              |
| removed | -1.999 MiB | <0.1% → 0.0% |     2 MiB → 0 B |   1 → 0 | `visitClassEx(ClassNode)`                              | `org.codenarc.rule.formatting.BracesForTryCatchFinallyAstVisitor`                      |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.176 GiB | 0.0% → 93.7% | 0 B → 11.2 GiB | 0 → 5,841 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
|    new |  +7.613 GiB | 0.0% → 63.8% | 0 B → 7.61 GiB | 0 → 3,997 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801115400`  |
|    new |  +7.578 GiB | 0.0% → 63.5% | 0 B → 7.58 GiB | 0 → 3,946 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801117800`  |
|    new |  +7.507 GiB | 0.0% → 62.9% | 0 B → 7.51 GiB | 0 → 3,908 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a801118400`  |
|    new |  +6.776 GiB | 0.0% → 56.8% | 0 B → 6.78 GiB | 0 → 3,476 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801140400`  |
|    new |  +6.676 GiB | 0.0% → 55.9% | 0 B → 6.68 GiB | 0 → 3,422 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a80118d400`  |
|    new |  +5.812 GiB | 0.0% → 48.7% | 0 B → 5.81 GiB | 0 → 3,134 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a801118000`  |
|    new |  +5.623 GiB | 0.0% → 47.1% | 0 B → 5.62 GiB | 0 → 2,869 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |
|    new |   +5.53 GiB | 0.0% → 46.3% | 0 B → 5.53 GiB | 0 → 2,884 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a80118d000`  |
|    new |  +5.272 GiB | 0.0% → 44.2% | 0 B → 5.27 GiB | 0 → 2,708 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bd400` |
|    new |  +5.106 GiB | 0.0% → 42.8% | 0 B → 5.11 GiB | 0 → 2,618 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801142000`  |
|    new |  +5.003 GiB | 0.0% → 41.9% |    0 B → 5 GiB | 0 → 2,559 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a80113fc00`  |
|    new |  +4.968 GiB | 0.0% → 41.6% | 0 B → 4.97 GiB | 0 → 2,571 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a80138cc00` |
|    new |  +4.635 GiB | 0.0% → 38.8% | 0 B → 4.64 GiB | 0 → 2,410 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a80138d800`  |
|    new |  +4.596 GiB | 0.0% → 38.5% |  0 B → 4.6 GiB | 0 → 2,394 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a8012ac800`  |
|    new |  +3.712 GiB | 0.0% → 31.1% | 0 B → 3.71 GiB | 0 → 1,936 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a8013db000`  |
|    new |  +3.534 GiB | 0.0% → 29.6% | 0 B → 3.53 GiB | 0 → 1,836 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000a80118e800` |
|    new |  +3.427 GiB | 0.0% → 28.7% | 0 B → 3.43 GiB | 0 → 1,789 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8013d2400`  |
|    new |   +3.31 GiB | 0.0% → 27.7% | 0 B → 3.31 GiB | 0 → 1,691 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000a801004000`  |
|    new |  +3.241 GiB | 0.0% → 27.2% | 0 B → 3.24 GiB | 0 → 1,748 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801119400`  |

##### Ours

|   Change |       Delta |             % |                Size |       Samples | Function                                                  | Location                                                                            |
| -------: | ----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|   +29.7% | +97.946 MiB |   2.7% → 3.5% |   330 MiB → 428 MiB |     146 → 145 | `doCall(Object)`                                          | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
|   +28.0% | +93.948 MiB |   2.8% → 3.5% |   336 MiB → 430 MiB |     149 → 146 | `getNumberOfViolationsWithPriority(int, boolean)`         | `org.codenarc.results.FileResults`                                                  |
|   +28.0% | +93.948 MiB |   2.8% → 3.5% |   336 MiB → 430 MiB |     149 → 146 | `getNumberOfViolationsWithPriority(int)`                  | `org.codenarc.results.FileResults`                                                  |
|   +30.5% | +85.953 MiB |   2.3% → 3.0% |   282 MiB → 368 MiB |     122 → 115 | `doCall(Object)`                                          | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|   +32.4% | +69.886 MiB |   1.8% → 2.3% |   216 MiB → 285 MiB |     108 → 141 | `checkDeclaration(ASTNode, String, String)`               | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                 |
|    +3.0% | +67.054 MiB | 18.3% → 18.8% | 2.18 GiB → 2.24 GiB | 1,129 → 1,163 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractAstVisitor`                                              |
| +1650.0% | +65.967 MiB |  <0.1% → 0.6% |      4 MiB → 70 MiB |         2 → 6 | `getViolationLocationString(Violation, String)`           | `org.codenarc.report.TextReportWriter`                                              |
|   +31.4% | +63.889 MiB |   1.7% → 2.2% |   204 MiB → 267 MiB |     102 → 133 | `findLineWithDeclaration(ASTNode, String)`                | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                 |
|   +51.9% | +55.975 MiB |   0.9% → 1.3% |   108 MiB → 164 MiB |       37 → 53 | `doCall(Object)`                                          | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                |
|   +51.0% | +51.977 MiB |   0.8% → 1.3% |   102 MiB → 154 MiB |       34 → 48 | `writeViolation(Writer, Violation, String)`               | `org.codenarc.report.TextReportWriter`                                              |
|   +43.1% | +43.416 MiB |   0.8% → 1.2% |   101 MiB → 144 MiB |       49 → 73 | `visitMethodEx(MethodNode)`                               | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                 |
|    +2.3% | +42.548 MiB | 15.5% → 15.7% | 1.84 GiB → 1.88 GiB |     949 → 977 | `visitMethod(MethodNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                              |
|   +99.4% | +27.815 MiB |   0.2% → 0.5% |   28 MiB → 55.8 MiB |       15 → 29 | `visitVariableExpression(VariableExpression)`             | `org.codenarc.rule.ClassReferenceAstVisitor`                                        |
|   +47.8% | +26.148 MiB |   0.4% → 0.7% | 54.7 MiB → 80.8 MiB |       27 → 41 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                  |
|    +0.7% | +24.359 MiB |         29.7% | 3.52 GiB → 3.55 GiB | 1,835 → 1,862 | `doCall(Object)`                                          | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`          |
|   +23.9% | +24.198 MiB |   0.8% → 1.0% |   101 MiB → 126 MiB |       52 → 63 | `applyVisitor(AstVisitor, SourceCode)`                    | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                    |
|  +157.3% | +21.996 MiB |   0.1% → 0.3% |     14 MiB → 36 MiB |        7 → 18 | `hasSpaceBeforeClosingParenthesis(String)`                | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                     |
|   +36.7% | +21.296 MiB |   0.5% → 0.6% |   58 MiB → 79.3 MiB |       31 → 43 | `doCall(List)`                                            | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`         |
|   +32.6% | +20.645 MiB |   0.5% → 0.7% |   63.3 MiB → 84 MiB |       30 → 41 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                  |
|   +30.4% | +19.242 MiB |   0.5% → 0.7% | 63.3 MiB → 82.5 MiB |       33 → 43 | `visitExpressionStatement(ExpressionStatement)`           | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                            |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.156 GiB | 94.0% → 0.0% | 11.2 GiB → 0 B | 5,814 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |
| removed |  -7.648 GiB | 64.4% → 0.0% | 7.65 GiB → 0 B | 3,993 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801115400`  |
| removed |   -7.43 GiB | 62.6% → 0.0% | 7.43 GiB → 0 B | 3,881 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801117800`  |
| removed |  -7.375 GiB | 62.1% → 0.0% | 7.38 GiB → 0 B | 3,853 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000801118400`  |
| removed |  -6.746 GiB | 56.8% → 0.0% | 6.75 GiB → 0 B | 3,437 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801140400`  |
| removed |  -6.671 GiB | 56.2% → 0.0% | 6.67 GiB → 0 B | 3,397 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080118d400`  |
| removed |  -5.837 GiB | 49.2% → 0.0% | 5.84 GiB → 0 B | 3,138 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000801118000`  |
| removed |  -5.632 GiB | 47.5% → 0.0% | 5.63 GiB → 0 B | 2,868 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000008010bc800` |
| removed |   -5.48 GiB | 46.2% → 0.0% | 5.48 GiB → 0 B | 2,847 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000080118d000`  |
| removed |   -5.32 GiB | 44.8% → 0.0% | 5.32 GiB → 0 B | 2,700 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000008010bd400` |
| removed |  -5.084 GiB | 42.8% → 0.0% | 5.08 GiB → 0 B | 2,568 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000080138c800` |
| removed |  -5.065 GiB | 42.7% → 0.0% | 5.07 GiB → 0 B | 2,619 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801142000`  |
| removed |  -5.006 GiB | 42.2% → 0.0% | 5.01 GiB → 0 B | 2,538 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080113fc00`  |
| removed |  -4.598 GiB | 38.7% → 0.0% |  4.6 GiB → 0 B | 2,377 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080138d400`  |
| removed |  -4.591 GiB | 38.7% → 0.0% | 4.59 GiB → 0 B | 2,367 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008012ac800`  |
| removed |  -3.698 GiB | 31.2% → 0.0% |  3.7 GiB → 0 B | 1,910 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008013db000`  |
| removed |   -3.59 GiB | 30.2% → 0.0% | 3.59 GiB → 0 B | 1,857 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000080118e800` |
| removed |  -3.394 GiB | 28.6% → 0.0% | 3.39 GiB → 0 B | 1,760 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008013d2400`  |
| removed |  -3.347 GiB | 28.2% → 0.0% | 3.35 GiB → 0 B | 1,800 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801119400`  |
| removed |  -3.346 GiB | 28.2% → 0.0% | 3.35 GiB → 0 B | 1,711 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000000801004000`  |

##### Ours

| Change |       Delta |             % |                Size |       Samples | Function                                          | Location                                                                                     |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -2.7% |  -94.17 MiB | 28.5% → 27.5% | 3.38 GiB → 3.29 GiB | 1,752 → 1,712 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                             |
|  -2.0% | -82.616 MiB | 33.8% → 33.0% | 4.02 GiB → 3.94 GiB | 2,075 → 2,053 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
| -26.6% | -73.963 MiB |   2.3% → 1.7% |   278 MiB → 204 MiB |       90 → 87 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`                                                       |
| -14.3% | -66.867 MiB |   3.8% → 3.3% |   467 MiB → 400 MiB |     239 → 205 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |
| -34.0% | -65.967 MiB |   1.6% → 1.0% |   194 MiB → 128 MiB |       48 → 49 | `doCall(Object)`                                  | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`                         |
| -56.1% | -37.611 MiB |   0.6% → 0.2% |   67 MiB → 29.4 MiB |       31 → 15 | `visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
| -31.5% | -30.588 MiB |   0.8% → 0.5% | 97.2 MiB → 66.7 MiB |       46 → 33 | `super$3$applyTo(SourceCode, List)`               | `org.codenarc.rule.formatting.IndentationRule`                                               |
| -37.4% | -24.674 MiB |   0.5% → 0.3% | 65.9 MiB → 41.2 MiB |       30 → 20 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.formatting.IndentationRule`                                               |
| -68.8% | -21.995 MiB |   0.3% → 0.1% |     32 MiB → 10 MiB |        17 → 5 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                  |
| -38.4% | -21.994 MiB |   0.5% → 0.3% | 57.2 MiB → 35.2 MiB |       29 → 18 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodVisitor`                                                    |
|  -5.9% | -21.639 MiB |   3.0% → 2.8% |   366 MiB → 344 MiB |     188 → 177 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -0.5% | -21.115 MiB | 37.9% → 37.5% |  4.5 GiB → 4.48 GiB | 2,311 → 2,329 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
| -56.4% | -20.836 MiB |   0.3% → 0.1% | 36.9 MiB → 16.1 MiB |        18 → 9 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`                                    |
| -23.5% | -20.243 MiB |   0.7% → 0.5% |   86.2 MiB → 66 MiB |       41 → 32 | `isMethodCall(MethodCallExpression, String)`      | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
| -75.7% |  -18.64 MiB |  0.2% → <0.1% |    24.6 MiB → 6 MiB |         7 → 3 | `<init>(String)`                                  | `org.codenarc.util.WildcardPattern`                                                          |
|  -6.5% | -18.279 MiB |   2.3% → 2.2% |   281 MiB → 263 MiB |     142 → 134 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                      |
| -22.7% | -18.244 MiB |   0.7% → 0.5% |   80.2 MiB → 62 MiB |       38 → 30 | `doCall(Object)`                                  | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor$_visitMethodCallExpression_closure2` |
| -56.3% | -17.991 MiB |   0.3% → 0.1% |     32 MiB → 14 MiB |        16 → 7 | `doCall(Object)`                                  | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2`                      |
| -69.2% |  -17.99 MiB |   0.2% → 0.1% |      26 MiB → 8 MiB |        12 → 4 | `processLine(String)`                             | `org.codenarc.util.MultilineCommentChecker`                                                  |
| -45.0% |  -17.99 MiB |   0.3% → 0.2% |     40 MiB → 22 MiB |       20 → 11 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |

# Retained heap profile diff

Retained 325 KiB → 8.95 KiB (-316.515 KiB, -97.3%) over 117 objects → 114 objects (2.78 KiB → 80.4 B per object).

| Category         | Change |        Delta |      % |               Size |   Objects |
| ---------------- | -----: | -----------: | -----: | -----------------: | --------: |
| Standard library | -97.3% | -316.515 KiB | 100.0% | 325 KiB → 8.95 KiB | 117 → 114 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |  Delta |             % |             Size | Objects | Function                                                                                             | Location                                                |
| ------: | -----: | ------------: | ---------------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +600.0% | +912 B | <0.1% → 11.6% | 152 B → 1.04 KiB |   1 → 7 | `getPlainNodeReference(boolean)`                                                                     | `org.codehaus.groovy.ast.ClassNode`                     |
| +154.2% | +592 B |  0.1% → 10.7% |    384 B → 976 B |   5 → 6 | `getDeclaredMethods0(boolean)`                                                                       | `java.lang.Class`                                       |
|     new | +128 B |   0.0% → 1.4% |      0 B → 128 B |   0 → 2 | `lambda$initValue$2(Method)`                                                                         | `org.codehaus.groovy.reflection.CachedClass$3`          |
|     new | +120 B |   0.0% → 1.3% |      0 B → 120 B |   0 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                 |
|     new | +104 B |   0.0% → 1.1% |      0 B → 104 B |   0 → 4 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`           |
| +200.0% |  +96 B |  <0.1% → 1.6% |     48 B → 144 B |   1 → 3 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                       | `java.lang.invoke.BoundMethodHandle$Species_LLLL`       |
|     new |  +96 B |   0.0% → 1.0% |       0 B → 96 B |   0 → 2 | `create(Tuple2, int, String, int, int, int, int, int)`                                               | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`      |
|     new |  +80 B |   0.0% → 0.9% |       0 B → 80 B |   0 → 1 | `newTable(int)`                                                                                      | `java.util.WeakHashMap`                                 |
|     new |  +72 B |   0.0% → 0.8% |       0 B → 72 B |   0 → 1 | `<init>(String, int, ClassNode, ClassNode, Expression, Statement, Statement)`                        | `org.codehaus.groovy.ast.PropertyNode`                  |
|     new |  +64 B |   0.0% → 0.7% |       0 B → 64 B |   0 → 2 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`         | `org.codehaus.groovy.vmplugin.v8.IndyInterface`         |
|     new |  +64 B |   0.0% → 0.7% |       0 B → 64 B |   0 → 1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                                | `sun.reflect.annotation.AnnotationParser`               |
|     new |  +64 B |   0.0% → 0.7% |       0 B → 64 B |   0 → 2 | `createGroovyToken(Token, int)`                                                                      | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |  +64 B |   0.0% → 0.7% |       0 B → 64 B |   0 → 1 | `visitClosure(GroovyParser$ClosureContext)`                                                          | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |  +56 B |   0.0% → 0.6% |       0 B → 56 B |   0 → 1 | `forName0(String, boolean, ClassLoader, Class)`                                                      | `java.lang.Class`                                       |
| +233.3% |  +56 B |  <0.1% → 0.9% |      24 B → 80 B |   1 → 3 | `copy()`                                                                                             | `org.codehaus.groovy.util.FastArray`                    |
|     new |  +56 B |   0.0% → 0.6% |       0 B → 56 B |   0 → 1 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)`            | `org.codehaus.groovy.vmplugin.v8.IndyInterface`         |
| +200.0% |  +48 B |  <0.1% → 0.8% |      24 B → 72 B |   1 → 3 | `addMethodToList(Object, MetaMethod)`                                                                | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| +100.0% |  +48 B |  <0.1% → 1.0% |      48 B → 96 B |   2 → 4 | `addAnyChild(ParseTree)`                                                                             | `groovyjarjarantlr4.v4.runtime.ParserRuleContext`       |
|     new |  +48 B |   0.0% → 0.5% |       0 B → 48 B |   0 → 1 | `getDeclaredConstructors0(boolean)`                                                                  | `java.lang.Class`                                       |
|     new |  +48 B |   0.0% → 0.5% |       0 B → 48 B |   0 → 1 | `allocateUninitializedArray(Class, int)`                                                             | `jdk.internal.misc.Unsafe`                              |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                                                                    | Location                                                |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -99.6% | -287.046 KiB | 88.5% → 11.4% |  288 KiB → 1.02 KiB |   3 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                              | `java.util.concurrent.ConcurrentHashMap`                |
| removed |  -22.664 KiB |   7.0% → 0.0% |      22.7 KiB → 0 B |   2 → 0 | `copyOf(Object[], int)`                                                                                     | `java.util.Arrays`                                      |
| removed |   -4.015 KiB |   1.2% → 0.0% |      4.02 KiB → 0 B |   1 → 0 | `<init>(int, int, MemorySegment)`                                                                           | `java.nio.HeapByteBuffer`                               |
|  -74.7% |       -3 KiB |  1.2% → 11.4% | 4.02 KiB → 1.02 KiB |       1 | `resize(int)`                                                                                               | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -57.0% |       -488 B |   0.3% → 4.0% |       856 B → 368 B |   6 → 5 | `copyOfRangeByte(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
| removed |       -376 B |   0.1% → 0.0% |         376 B → 0 B |   1 → 0 | `toArray()`                                                                                                 | `java.lang.PublicMethods`                               |
| removed |       -192 B |   0.1% → 0.0% |         192 B → 0 B |   1 → 0 | `copyOfRange(byte[], int, int)`                                                                             | `java.util.Arrays`                                      |
|  -42.9% |       -168 B |   0.1% → 2.4% |       392 B → 224 B |   7 → 4 | `grow(int)`                                                                                                 | `java.util.ArrayList`                                   |
| removed |       -160 B |  <0.1% → 0.0% |         160 B → 0 B |   5 → 0 | `<init>(int)`                                                                                               | `org.codehaus.groovy.util.ListHashMap`                  |
| removed |       -152 B |  <0.1% → 0.0% |         152 B → 0 B |   1 → 0 | `makeWithoutCaching(String)`                                                                                | `org.codehaus.groovy.ast.ClassHelper`                   |
| removed |       -144 B |  <0.1% → 0.0% |         144 B → 0 B |   2 → 0 | `getDeclaredFields0(boolean)`                                                                               | `java.lang.Class`                                       |
|  -66.7% |        -96 B |  <0.1% → 0.5% |        144 B → 48 B |   3 → 1 | `makeBlockInliningWrapper(MethodHandle)`                                                                    | `java.lang.invoke.MethodHandleImpl`                     |
|  -50.0% |        -88 B |   0.1% → 1.0% |        176 B → 88 B |   2 → 1 | `copy()`                                                                                                    | `java.lang.reflect.Method`                              |
| removed |        -80 B |  <0.1% → 0.0% |          80 B → 0 B |   1 → 0 | `initClassName()`                                                                                           | `java.lang.Class`                                       |
| removed |        -72 B |  <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL` |
| removed |        -72 B |  <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `createMethodCallExpression(Expression, Expression)`                                                        | `org.apache.groovy.parser.antlr4.AstBuilder`            |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   2 → 0 | `<init>(Class)`                                                                                             | `org.codehaus.groovy.reflection.ClassInfo`              |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   2 → 0 | `addEntry(int, Object, Object, int)`                                                                        | `java.util.Hashtable`                                   |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `<init>(MethodType)`                                                                                        | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
|  -53.8% |        -56 B |  <0.1% → 0.5% |        104 B → 48 B |   2 → 1 | `clone()`                                                                                                   | `java.lang.Object`                                      |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

| Change |      Delta |            % |           Size | Objects | Function                                                                                    | Location                                             |
| -----: | ---------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +6.867 KiB | 0.0% → 76.8% | 0 B → 6.87 KiB |  0 → 90 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
|    new | +6.335 KiB | 0.0% → 70.8% | 0 B → 6.34 KiB |  0 → 82 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801117800`  |
|    new | +6.335 KiB | 0.0% → 70.8% | 0 B → 6.34 KiB |  0 → 82 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a801118400`  |
|    new | +6.242 KiB | 0.0% → 69.8% | 0 B → 6.24 KiB |  0 → 80 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801115400`  |
|    new | +3.617 KiB | 0.0% → 40.4% | 0 B → 3.62 KiB |  0 → 52 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801141000`  |
|    new | +2.828 KiB | 0.0% → 31.6% | 0 B → 2.83 KiB |  0 → 49 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a801118000`  |
|    new | +2.742 KiB | 0.0% → 30.7% | 0 B → 2.74 KiB |  0 → 34 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801102400`  |
|    new | +2.687 KiB | 0.0% → 30.0% | 0 B → 2.69 KiB |  0 → 33 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a801104000`  |
|    new |  +2.39 KiB | 0.0% → 26.7% | 0 B → 2.39 KiB |  0 → 21 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801134400`  |
|    new |  +2.39 KiB | 0.0% → 26.7% | 0 B → 2.39 KiB |  0 → 21 | `linkToCallSite(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`  |
|    new | +2.304 KiB | 0.0% → 25.8% |  0 B → 2.3 KiB |  0 → 26 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801150800`  |
|    new | +2.296 KiB | 0.0% → 25.7% |  0 B → 2.3 KiB |  0 → 18 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801005400`  |
|    new | +2.148 KiB | 0.0% → 24.0% | 0 B → 2.15 KiB |  0 → 25 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000a801152800` |
|    new | +2.148 KiB | 0.0% → 24.0% | 0 B → 2.15 KiB |  0 → 25 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8012d8000`  |
|    new | +1.875 KiB | 0.0% → 21.0% | 0 B → 1.88 KiB |  0 → 20 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801136800`  |
|    new | +1.875 KiB | 0.0% → 21.0% | 0 B → 1.88 KiB |  0 → 20 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a801136c00`  |
|    new | +1.875 KiB | 0.0% → 21.0% | 0 B → 1.88 KiB |  0 → 20 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801148800`  |
|    new | +1.875 KiB | 0.0% → 21.0% | 0 B → 1.88 KiB |  0 → 20 | `invokeStatic(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |
|    new | +1.875 KiB | 0.0% → 21.0% | 0 B → 1.88 KiB |  0 → 20 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801176000`  |
|    new |  +1.75 KiB | 0.0% → 19.6% | 0 B → 1.75 KiB |  0 → 18 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801831000`  |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |               Size |  Objects | Function                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -----------------: | -------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -324.515 KiB |  99.7% → 0.0% |      325 KiB → 0 B |  100 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |
| removed | -323.726 KiB |  99.5% → 0.0% |      324 KiB → 0 B |   90 → 0 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000801117800`  |
| removed | -323.726 KiB |  99.5% → 0.0% |      324 KiB → 0 B |   90 → 0 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000801118400`  |
| removed | -323.625 KiB |  99.4% → 0.0% |      324 KiB → 0 B |   88 → 0 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000801115400`  |
| removed | -318.515 KiB |  97.9% → 0.0% |      319 KiB → 0 B |   63 → 0 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000801141000`  |
|  -97.9% | -317.718 KiB | 99.7% → 76.8% | 325 KiB → 6.87 KiB | 101 → 90 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  -98.1% | -317.335 KiB | 99.4% → 69.8% | 324 KiB → 6.24 KiB |  87 → 80 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
|  -97.8% | -317.257 KiB | 99.7% → 81.5% | 325 KiB → 7.29 KiB | 100 → 88 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
|  -99.6% | -287.046 KiB | 88.5% → 11.4% | 288 KiB → 1.02 KiB |    3 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                | `java.util.concurrent.ConcurrentHashMap`             |
|  -99.6% | -287.046 KiB | 88.5% → 11.4% | 288 KiB → 1.02 KiB |    3 → 1 | `addCount(long, int)`                                                                         | `java.util.concurrent.ConcurrentHashMap`             |
|  -99.6% | -287.046 KiB | 88.5% → 11.7% | 288 KiB → 1.05 KiB |    4 → 2 | `putVal(Object, Object, boolean)`                                                             | `java.util.concurrent.ConcurrentHashMap`             |
|  -99.6% | -287.046 KiB | 88.5% → 11.7% | 288 KiB → 1.05 KiB |    4 → 2 | `putIfAbsent(Object, Object)`                                                                 | `java.util.concurrent.ConcurrentHashMap`             |
| removed |     -284 KiB |  87.3% → 0.0% |      284 KiB → 0 B |   35 → 0 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000801102400`  |
| removed | -283.562 KiB |  87.1% → 0.0% |      284 KiB → 0 B |   27 → 0 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000801150800`  |
| removed | -283.421 KiB |  87.1% → 0.0% |      283 KiB → 0 B |   24 → 0 | `invokeVirtual(Object, Object, int)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x0000000801152800` |
| removed | -283.421 KiB |  87.1% → 0.0% |      283 KiB → 0 B |   24 → 0 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008012d8400`  |
|  -99.2% | -281.421 KiB | 87.1% → 24.0% | 284 KiB → 2.15 KiB |       25 | `forEach(Consumer)`                                                                           | `java.util.stream.ReferencePipeline$Head`            |
|  -99.2% | -281.406 KiB | 87.1% → 24.2% | 284 KiB → 2.16 KiB |  25 → 26 | `forEachRemaining(Consumer)`                                                                  | `java.util.Spliterators$IteratorSpliterator`         |
|  -99.2% |  -281.39 KiB | 87.1% → 24.4% | 284 KiB → 2.18 KiB |  25 → 26 | `buildAST(SourceUnit, ClassLoader, Reduction)`                                                | `org.apache.groovy.parser.antlr4.Antlr4ParserPlugin` |
|  -99.2% |  -281.39 KiB | 87.1% → 24.4% | 284 KiB → 2.18 KiB |  25 → 26 | `buildAST()`                                                                                  | `org.codehaus.groovy.control.SourceUnit`             |
