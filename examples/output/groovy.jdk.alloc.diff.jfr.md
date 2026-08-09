# Sampling profile diff

Collected 300 samples → 327 samples (+27 samples, +9.0%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  +9.3% |   +27 | 97.0% → 97.2% | 291 → 318 |
| Ours             |   0.0% |     0 |   3.0% → 2.8% |         9 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                     | Location                                                       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
|  +34.6% |    +9 | 8.7% → 10.7% | 26 → 35 | `newArray(Class, int)`                                                                       | `java.lang.reflect.Array`                                      |
| +500.0% |    +5 |  0.3% → 1.8% |   1 → 6 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`         |
|     new |    +4 |  0.0% → 1.2% |   0 → 4 | `divideOneWord(int, MutableBigInteger)`                                                      | `java.math.MutableBigInteger`                                  |
|  +50.0% |    +3 |  2.0% → 2.8% |   6 → 9 | `getNode(Object)`                                                                            | `java.util.HashMap`                                            |
| +150.0% |    +3 |  0.7% → 1.5% |   2 → 5 | `add(ATNConfig, PredictionContextCache)`                                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`               |
|  +50.0% |    +3 |  2.0% → 2.8% |   6 → 9 | `newInstance(Class, int)`                                                                    | `java.lang.reflect.Array`                                      |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `sync(int)`                                                                                  | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`            |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `correctClassForNameAndUnReflectOtherwise(Method)`                                           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`      |
| +300.0% |    +3 |  0.3% → 1.2% |   1 → 4 | `getBooleanAttributes0(File)`                                                                | `java.io.UnixFileSystem`                                       |
| +300.0% |    +3 |  0.3% → 1.2% |   1 → 4 | `getReachableTarget(Transition, int)`                                                        | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`          |
| +300.0% |    +3 |  0.3% → 1.2% |   1 → 4 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                 | `java.math.MutableBigInteger`                                  |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `toArray(IntFunction)`                                                                       | `java.util.stream.ReferencePipeline`                           |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `invokeExact_MT(Object, Object, Object)`                                                     | `java.lang.invoke.Invokers$Holder`                             |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`         |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `insertParameterTypes(int, Class[])`                                                         | `java.lang.invoke.MethodType`                                  |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `equals(Object)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `findSpecies(Object)`                                                                        | `java.lang.invoke.ClassSpecializer`                            |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `arraycopy(Object, int, Object, int, int)`                                                   | `java.lang.System`                                             |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `clone()`                                                                                    | `java.lang.Object`                                             |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `convertToTypeArray(Object[])`                                                               | `org.codehaus.groovy.runtime.MetaClassHelper`                  |

##### Ours

| Change | Delta |           % | Samples | Function                                 | Location                                                               |
| -----: | ----: | ----------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                         |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `calculate(MethodNode, SourceCode)`      | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityMetric`            |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getAstVisitor()`                        | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `calculateFunctions(Collection)`         | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `applyTo(SourceCode, List)`              | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule`                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `super$4$visitClassEx(ClassNode)`        | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                         | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementRule`      |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                         | `org.codenarc.rule.groovyism.GStringAsMapKeyRule`                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed |    -6 | 2.0% → 0.0% |   6 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`       |
|  -50.0% |    -6 | 4.0% → 1.8% |  12 → 6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|  -85.7% |    -6 | 2.3% → 0.3% |   7 → 1 | `addArgumentForm(int, LambdaForm$BasicType)`                                                                  | `java.lang.invoke.LambdaFormEditor`                        |
| removed |    -5 | 1.7% → 0.0% |   5 → 0 | `<init>(Method, boolean)`                                                                                     | `java.lang.invoke.MemberName`                              |
|  -62.5% |    -5 | 2.7% → 0.9% |   8 → 3 | `matches(Method, String, Class[])`                                                                            | `java.lang.PublicMethods$Key`                              |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                 | `java.util.zip.Inflater`                                   |
|  -60.0% |    -3 | 1.7% → 0.6% |   5 → 2 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                      |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `put(Object, Object)`                                                                                         | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`       |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `guard(Object, Object, Object)`                                                                               | `java.lang.invoke.LambdaForm$MH.0x000000e801118400`        |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `readLine()`                                                                                                  | `java.util.Properties$LineReader`                          |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `forName0(String, boolean, ClassLoader, Class)`                                                               | `java.lang.Class`                                          |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                                               | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `invoke(Object, int)`                                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e80109bc00`        |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `equals(Object, Object)`                                                                                      | `java.util.Objects`                                        |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `valueConversion(Class, Class, boolean, boolean)`                                                             | `java.lang.invoke.MethodHandleImpl`                        |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `copyIntoWithCancel(Sink, Spliterator)`                                                                       | `java.util.stream.AbstractPipeline`                        |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`               |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `compare(Method, Method)`                                                                                     | `com.sun.beans.introspect.MethodInfo$MethodOrder`          |
|  -28.6% |    -2 | 2.3% → 1.5% |   7 → 5 | `getReturnState(int)`                                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |

##### Ours

|  Change | Delta |           % | Samples | Function                                    | Location                                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getAstVisitor()`                           | `org.codenarc.rule.AbstractAstVisitorRule`                        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)`                 | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`    |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                            | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitClosureExpression(ClosureExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `lastSourceLine(ASTNode)`                   | `org.codenarc.rule.AbstractAstVisitor`                            |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>()`                                  | `org.gmetrics.metric.AbstractMethodMetric`                        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getSuppressionsByLineNumber(ModuleNode)`   | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `setSourceCode(SourceCode)`                 | `org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +293 | 0.0% → 89.6% | 0 → 293 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|    new |  +242 | 0.0% → 74.0% | 0 → 242 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301117800`  |
|    new |  +240 | 0.0% → 73.4% | 0 → 240 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000301118400`  |
|    new |  +223 | 0.0% → 68.2% | 0 → 223 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301115400`  |
|    new |  +163 | 0.0% → 49.8% | 0 → 163 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|    new |  +135 | 0.0% → 41.3% | 0 → 135 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000003010bd400` |
|    new |  +129 | 0.0% → 39.4% | 0 → 129 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |
|    new |  +127 | 0.0% → 38.8% | 0 → 127 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301140400`  |
|    new |  +123 | 0.0% → 37.6% | 0 → 123 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000030118d400`  |
|    new |  +111 | 0.0% → 33.9% | 0 → 111 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`  |
|    new |   +99 | 0.0% → 30.3% |  0 → 99 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000003010bc800` |
|    new |   +99 | 0.0% → 30.3% |  0 → 99 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000030138cc00` |
|    new |   +94 | 0.0% → 28.7% |  0 → 94 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003013d3000`  |
|    new |   +92 | 0.0% → 28.1% |  0 → 92 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000030118d000`  |
|    new |   +89 | 0.0% → 27.2% |  0 → 89 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301102400`  |
|    new |   +89 | 0.0% → 27.2% |  0 → 89 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003012ac800`  |
|    new |   +87 | 0.0% → 26.6% |  0 → 87 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000000301152800` |
|    new |   +87 | 0.0% → 26.6% |  0 → 87 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`  |
|    new |   +86 | 0.0% → 26.3% |  0 → 86 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301119400`  |
|    new |   +85 | 0.0% → 26.0% |  0 → 85 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301140c00`  |

##### Ours

|  Change | Delta |             % | Samples | Function                                       | Location                                                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------ |
|  +25.8% |   +17 | 22.0% → 25.4% | 66 → 83 | `init()`                                       | `org.codenarc.source.AbstractSourceCode`                                       |
|  +17.3% |   +13 | 25.0% → 26.9% | 75 → 88 | `measureRuleProcessingTime(Rule, Closure)`     | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|  +15.7% |   +11 | 23.3% → 24.8% | 70 → 81 | `applyTo(SourceCode)`                          | `org.codenarc.rule.AbstractRule`                                               |
|  +15.6% |   +10 | 21.3% → 22.6% | 64 → 74 | `applyTo(SourceCode, List)`                    | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
|  +18.5% |   +10 | 18.0% → 19.6% | 54 → 64 | `visitClass(ClassNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                         |
|  +10.6% |    +9 | 28.3% → 28.7% | 85 → 94 | `doCall(Object)`                               | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
| +800.0% |    +8 |   0.3% → 2.8% |   1 → 9 | `calculateForClass(ClassNode, SourceCode)`     | `org.gmetrics.metric.AbstractMethodMetric`                                     |
|  +15.4% |    +6 | 13.0% → 13.8% | 39 → 45 | `isRuleSuppressed(Rule)`                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  +12.2% |    +5 | 13.7% → 14.1% | 41 → 46 | `init()`                                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
| +500.0% |    +5 |   0.3% → 1.8% |   1 → 6 | `processDirectory(String, RuleSet)`            | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
| +500.0% |    +5 |   0.3% → 1.8% |   1 → 6 | `applyToClass(ClassNode, SourceCode)`          | `org.gmetrics.metric.AbstractMetric`                                           |
|   +9.5% |    +4 | 14.0% → 14.1% | 42 → 46 | `getAst()`                                     | `org.codenarc.source.AbstractSourceCode`                                       |
|  +10.3% |    +4 | 13.0% → 13.1% | 39 → 43 | `visitMethod(MethodNode)`                      | `org.codenarc.rule.AbstractAstVisitor`                                         |
| +200.0% |    +4 |   0.7% → 1.8% |   2 → 6 | `visitClassEx(ClassNode)`                      | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                        |
| +400.0% |    +4 |   0.3% → 1.5% |   1 → 5 | `doCall(Object)`                               | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
|   +5.7% |    +3 | 17.7% → 17.1% | 53 → 56 | `collectViolations(SourceCode, RuleSet)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| +100.0% |    +3 |   1.0% → 1.8% |   3 → 6 | `applyTo(SourceCode, List)`                    | `org.codenarc.rule.formatting.IndentationRule`                                 |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `checkForCorrectColumn(ASTNode, String)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `addViolationIfDuplicate(Expression)`          | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -263 | 87.7% → 0.0% | 263 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800` |
| removed |  -219 | 73.0% → 0.0% | 219 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801115400`  |
| removed |  -216 | 72.0% → 0.0% | 216 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801117800`  |
| removed |  -214 | 71.3% → 0.0% | 214 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e801118400`  |
| removed |  -156 | 52.0% → 0.0% | 156 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801118000`  |
| removed |  -121 | 40.3% → 0.0% | 121 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bd400` |
| removed |  -116 | 38.7% → 0.0% | 116 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e80113fc00`  |
| removed |  -109 | 36.3% → 0.0% | 109 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801140400`  |
| removed |  -102 | 34.0% → 0.0% | 102 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e80118d400`  |
| removed |  -100 | 33.3% → 0.0% | 100 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bc800` |
| removed |   -92 | 30.7% → 0.0% |  92 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801141000`  |
| removed |   -84 | 28.0% → 0.0% |  84 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801119400`  |
| removed |   -83 | 27.7% → 0.0% |  83 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e80138c800` |
| removed |   -82 | 27.3% → 0.0% |  82 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e80118d000`  |
| removed |   -81 | 27.0% → 0.0% |  81 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e8013d1c00`  |
| removed |   -78 | 26.0% → 0.0% |  78 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801102400`  |
| removed |   -77 | 25.7% → 0.0% |  77 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e8012ac800`  |
| removed |   -76 | 25.3% → 0.0% |  76 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e801104000`  |
| removed |   -75 | 25.0% → 0.0% |  75 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801140c00`  |
| removed |   -71 | 23.7% → 0.0% |  71 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000e801152800` |

##### Ours

|  Change | Delta |           % | Samples | Function                                               | Location                                                                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  -83.3% |    -5 | 2.0% → 0.3% |   6 → 1 | `visitClass(ClassNode)`                                | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                           |
| removed |    -4 | 1.3% → 0.0% |   4 → 0 | `main(String[])`                                       | `org.codenarc.CodeNarc`                                                                           |
|  -80.0% |    -4 | 1.7% → 0.3% |   5 → 1 | `doCall(Object, Object)`                               | `org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`                         |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `doCall(Object)`                                       | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `processMethodOrConstructorCall(MethodCall)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                          |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `super$3$visitBlockStatement(BlockStatement)`          | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                               |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `buildLookupTable()`                                   | `org.codenarc.plugin.disablerules.LookupTable`                                                    |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `doCall(Object)`                                       | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`                    |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `writeFileViolations(Writer, FileResults)`             | `org.codenarc.report.TextReportWriter`                                                            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `assertClassImplementsRuleInterface(Class)`            | `org.codenarc.ruleset.RuleSetUtil`                                                                |
|  -18.2% |    -2 | 3.7% → 2.8% |  11 → 9 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                        |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                                    |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitClassEx(ClassNode)`                              | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`                                          |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `visitClassComplete(ClassNode)`                        | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                                   |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.groovyism.ClosureAsLastMethodParameterAstVisitor`                              |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                                      |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                                          |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                          |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `sourceLineAndNumberForImport(SourceCode, ImportNode)` | `org.codenarc.util.ImportUtil`                                                                    |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                                                      |

# Allocated heap profile diff

Allocated 12 GiB → 11.8 GiB (-200.783 MiB, -1.6%) over 6,288 samples → 6,320 samples (1.96 MiB → 1.92 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.9% | -233.962 MiB | 99.4% → 99.1% |   12 GiB → 11.7 GiB | 6,195 → 6,216 |
| Ours             | +43.4% |  +33.176 MiB |   0.6% → 0.9% |  76.5 MiB → 110 MiB |       39 → 53 |
| Unknown          |  +6.6% |   +2.343 KiB |         <0.1% | 35.8 KiB → 38.1 KiB |       54 → 51 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |                Size |   Samples | Function                                               | Location                                                  |
| ------: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------------ | --------------------------------------------------------- |
|  +29.3% | +50.697 MiB |  1.4% → 1.8% |   173 MiB → 224 MiB |  90 → 114 | `compile()`                                            | `java.util.regex.Pattern`                                 |
|  +15.6% | +46.379 MiB |  2.4% → 2.8% |   297 MiB → 343 MiB | 154 → 176 | `newInstance(Class, int)`                              | `java.lang.reflect.Array`                                 |
|  +47.2% | +39.231 MiB |  0.7% → 1.0% |  83.1 MiB → 122 MiB |   43 → 60 | `newHashMap(int)`                                      | `java.util.HashMap`                                       |
| +167.1% | +36.265 MiB |  0.2% → 0.5% |   21.7 MiB → 58 MiB |   12 → 29 | `lambda$setGuards$1(int)`                              | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  +30.1% | +29.903 MiB |  0.8% → 1.1% |  99.4 MiB → 129 MiB |   50 → 65 | `toBigInteger(int)`                                    | `java.math.MutableBigInteger`                             |
| +968.1% | +29.739 MiB | <0.1% → 0.3% | 3.07 MiB → 32.8 MiB |    5 → 13 | `<init>(InputStream, Inflater, int)`                   | `java.util.zip.InflaterInputStream`                       |
| +105.0% | +26.261 MiB |  0.2% → 0.4% |   25 MiB → 51.3 MiB |   13 → 27 | `grow(int)`                                            | `java.util.ArrayList`                                     |
|  +97.1% | +25.194 MiB |  0.2% → 0.4% |   26 MiB → 51.1 MiB |   14 → 27 | `opWrapSink(int, Sink)`                                | `java.util.stream.ReferencePipeline$3`                    |
| +140.8% | +24.412 MiB |  0.1% → 0.3% | 17.3 MiB → 41.8 MiB |    9 → 21 | `of(byte, int, int, int)`                              | `java.lang.invoke.LambdaFormEditor$TransformKey`          |
|  +20.2% | +22.983 MiB |  0.9% → 1.1% |   114 MiB → 137 MiB |   59 → 71 | `make(MethodType, LambdaForm, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLL`          |
|  +41.4% |  +21.08 MiB |  0.4% → 0.6% |   50.9 MiB → 72 MiB |   27 → 34 | `make(byte, Class, MemberName, Class)`                 | `java.lang.invoke.DirectMethodHandle`                     |
|   +9.4% | +20.847 MiB |  1.8% → 2.0% |   222 MiB → 243 MiB | 113 → 122 | `divideAndRemainderKnuth(BigInteger)`                  | `java.math.BigInteger`                                    |
|  +54.1% | +19.517 MiB |  0.3% → 0.5% | 36.1 MiB → 55.6 MiB |   19 → 29 | `divideOneWord(int, MutableBigInteger)`                | `java.math.MutableBigInteger`                             |
|  +24.1% | +17.613 MiB |  0.6% → 0.7% | 72.9 MiB → 90.6 MiB |   35 → 49 | `copyWith(MethodType, LambdaForm)`                     | `java.lang.invoke.BoundMethodHandle$Species_L`            |
|  +62.9% | +17.125 MiB |  0.2% → 0.4% | 27.2 MiB → 44.3 MiB |   15 → 23 | `put(String, MethodHandleWrapper)`                     | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`       |
|  +44.5% | +15.992 MiB |  0.3% → 0.4% |     36 MiB → 52 MiB |   18 → 25 | `copyOf(int[], int)`                                   | `java.util.Arrays`                                        |
|  +21.4% | +15.474 MiB |  0.6% → 0.7% | 72.4 MiB → 87.9 MiB |   38 → 42 | `listIterator(int)`                                    | `java.util.LinkedList`                                    |
|   +4.4% | +14.471 MiB |  2.6% → 2.8% |   326 MiB → 340 MiB | 160 → 170 | `newArray(Class, int)`                                 | `java.lang.reflect.Array`                                 |
|   +7.5% | +14.021 MiB |  1.5% → 1.7% |   188 MiB → 202 MiB |  94 → 101 | `allocateInstance(Object)`                             | `java.lang.invoke.DirectMethodHandle`                     |
| +106.9% | +13.133 MiB |  0.1% → 0.2% | 12.3 MiB → 25.4 MiB |    7 → 15 | `toString()`                                           | `java.lang.StringBuilder`                                 |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |            % |                Size |   Samples | Function                                                                                | Location                                            |
| -----: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | --------------------------------------------------- |
| -21.3% | -115.472 MiB |  4.4% → 3.5% |   542 MiB → 427 MiB | 202 → 218 | `makeBlockInliningWrapper(MethodHandle)`                                                | `java.lang.invoke.MethodHandleImpl`                 |
| -10.4% |   -84.56 MiB |  6.6% → 6.0% |   811 MiB → 727 MiB | 411 → 370 | `makeImpl(Class, Class[], boolean)`                                                     | `java.lang.invoke.MethodType`                       |
| -22.7% |  -72.016 MiB |  2.6% → 2.0% |   318 MiB → 246 MiB | 145 → 123 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                          | `java.lang.invoke.BoundMethodHandle$Species_LLLL`   |
| -10.2% |  -61.221 MiB |  4.9% → 4.4% |   600 MiB → 539 MiB | 304 → 284 | `fillInStackTrace(int)`                                                                 | `java.lang.Throwable`                               |
| -40.8% |  -54.964 MiB |  1.1% → 0.7% |  135 MiB → 79.8 MiB |   43 → 41 | `map(Function)`                                                                         | `java.util.stream.ReferencePipeline`                |
| -25.5% |   -42.85 MiB |  1.4% → 1.0% |   168 MiB → 125 MiB |   85 → 62 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                  | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`  |
| -13.9% |  -39.397 MiB |  2.3% → 2.0% |   284 MiB → 244 MiB | 141 → 123 | `lambdaFormEditor(LambdaForm)`                                                          | `java.lang.invoke.LambdaFormEditor`                 |
| -40.7% |  -36.763 MiB |  0.7% → 0.4% | 90.2 MiB → 53.5 MiB |   36 → 27 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`          | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL` |
| -37.5% |  -34.971 MiB |  0.8% → 0.5% | 93.2 MiB → 58.2 MiB |   55 → 40 | `copyOfRangeByte(byte[], int, int)`                                                     | `java.util.Arrays`                                  |
| -12.8% |  -34.941 MiB |  2.2% → 2.0% |   273 MiB → 238 MiB | 136 → 120 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`       |
| -38.5% |  -31.669 MiB |  0.7% → 0.4% | 82.3 MiB → 50.7 MiB |   56 → 52 | `copyOf(byte[], int)`                                                                   | `java.util.Arrays`                                  |
| -30.3% |  -31.412 MiB |  0.8% → 0.6% |  104 MiB → 72.1 MiB |   67 → 60 | `iterator()`                                                                            | `java.util.ArrayList`                               |
| -98.6% |  -29.549 MiB | 0.2% → <0.1% |    30 MiB → 439 KiB |         1 | `<init>(Object[])`                                                                      | `java.util.ImmutableCollections$SetN`               |
|  -9.4% |  -26.027 MiB |  2.3% → 2.1% |   278 MiB → 252 MiB | 140 → 131 | `of(byte, int, int)`                                                                    | `java.lang.invoke.LambdaFormEditor$TransformKey`    |
| -33.7% |  -22.367 MiB |  0.5% → 0.4% |   66.3 MiB → 44 MiB |   33 → 22 | `compile(String)`                                                                       | `java.util.regex.Pattern`                           |
| -23.4% |  -22.224 MiB |  0.8% → 0.6% | 94.9 MiB → 72.7 MiB |   49 → 37 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                       | `java.util.stream.MatchOps`                         |
| -27.9% |  -21.527 MiB |  0.6% → 0.5% |   77 MiB → 55.5 MiB |   39 → 28 | `matcher(CharSequence)`                                                                 | `java.util.regex.Pattern`                           |
| -33.0% |  -20.787 MiB |  0.5% → 0.3% |   63 MiB → 42.2 MiB |   33 → 22 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                     | `java.lang.invoke.MethodHandleImpl`                 |
|  -9.1% |   -20.73 MiB |  1.8% → 1.7% |   227 MiB → 206 MiB | 113 → 103 | `optimize(Pattern$Node)`                                                                | `java.util.regex.Pattern$BnM`                       |
| -13.5% |   -17.03 MiB |  1.0% → 0.9% |   126 MiB → 109 MiB |   66 → 56 | `of(byte, int)`                                                                         | `java.lang.invoke.LambdaFormEditor$TransformKey`    |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.115 GiB | 0.0% → 93.9% | 0 B → 11.1 GiB | 0 → 5,859 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|    new |  +7.699 GiB | 0.0% → 65.1% |  0 B → 7.7 GiB | 0 → 4,065 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301115400`  |
|    new |  +7.621 GiB | 0.0% → 64.4% | 0 B → 7.62 GiB | 0 → 4,024 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301117800`  |
|    new |  +7.535 GiB | 0.0% → 63.7% | 0 B → 7.54 GiB | 0 → 3,977 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000301118400`  |
|    new |  +6.551 GiB | 0.0% → 55.4% | 0 B → 6.55 GiB | 0 → 3,406 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301140400`  |
|    new |  +6.457 GiB | 0.0% → 54.6% | 0 B → 6.46 GiB | 0 → 3,357 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000030118d400`  |
|    new |  +5.951 GiB | 0.0% → 50.3% | 0 B → 5.95 GiB | 0 → 3,210 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|    new |  +5.522 GiB | 0.0% → 46.7% | 0 B → 5.52 GiB | 0 → 2,854 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000003010bc800` |
|    new |   +5.44 GiB | 0.0% → 46.0% | 0 B → 5.44 GiB | 0 → 2,841 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000030118d000`  |
|    new |  +5.233 GiB | 0.0% → 44.2% | 0 B → 5.23 GiB | 0 → 2,717 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000003010bd400` |
|    new |  +4.991 GiB | 0.0% → 42.2% | 0 B → 4.99 GiB | 0 → 2,594 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301142000`  |
|    new |  +4.932 GiB | 0.0% → 41.7% | 0 B → 4.93 GiB | 0 → 2,508 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000030138cc00` |
|    new |  +4.914 GiB | 0.0% → 41.5% | 0 B → 4.91 GiB | 0 → 2,544 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030113fc00`  |
|    new |  +4.499 GiB | 0.0% → 38.0% |  0 B → 4.5 GiB | 0 → 2,345 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030138d800`  |
|    new |  +4.437 GiB | 0.0% → 37.5% | 0 B → 4.44 GiB | 0 → 2,314 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003012ac800`  |
|    new |  +3.595 GiB | 0.0% → 30.4% |  0 B → 3.6 GiB | 0 → 1,867 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003013dcc00`  |
|    new |   +3.54 GiB | 0.0% → 29.9% | 0 B → 3.54 GiB | 0 → 1,835 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000030118e800` |
|    new |  +3.469 GiB | 0.0% → 29.3% | 0 B → 3.47 GiB | 0 → 1,816 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003013d3000`  |
|    new |  +3.306 GiB | 0.0% → 27.9% | 0 B → 3.31 GiB | 0 → 1,797 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301141000`  |
|    new |  +3.287 GiB | 0.0% → 27.8% | 0 B → 3.29 GiB | 0 → 1,781 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301119400`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.344 GiB | 94.3% → 0.0% | 11.3 GiB → 0 B | 5,836 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800` |
| removed |  -7.813 GiB | 64.9% → 0.0% | 7.81 GiB → 0 B | 4,010 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801115400`  |
| removed |  -7.719 GiB | 64.2% → 0.0% | 7.72 GiB → 0 B | 3,969 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801117800`  |
| removed |  -7.633 GiB | 63.4% → 0.0% | 7.63 GiB → 0 B | 3,922 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e801118400`  |
| removed |  -6.739 GiB | 56.0% → 0.0% | 6.74 GiB → 0 B | 3,426 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801140400`  |
| removed |  -6.666 GiB | 55.4% → 0.0% | 6.67 GiB → 0 B | 3,386 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e80118d400`  |
| removed |   -5.95 GiB | 49.5% → 0.0% | 5.95 GiB → 0 B | 3,154 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801118000`  |
| removed |  -5.706 GiB | 47.4% → 0.0% | 5.71 GiB → 0 B | 2,836 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bc800` |
| removed |  -5.536 GiB | 46.0% → 0.0% | 5.54 GiB → 0 B | 2,858 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e80118d000`  |
| removed |  -5.221 GiB | 43.4% → 0.0% | 5.22 GiB → 0 B | 2,664 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bd400` |
| removed |  -5.096 GiB | 42.4% → 0.0% |  5.1 GiB → 0 B | 2,600 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801142000`  |
| removed |  -5.083 GiB | 42.3% → 0.0% | 5.08 GiB → 0 B | 2,560 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e80138c800` |
| removed |  -4.895 GiB | 40.7% → 0.0% |  4.9 GiB → 0 B | 2,488 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e80113fc00`  |
| removed |  -4.606 GiB | 38.3% → 0.0% | 4.61 GiB → 0 B | 2,363 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e80138d400`  |
| removed |  -4.601 GiB | 38.2% → 0.0% |  4.6 GiB → 0 B | 2,359 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e8012ac800`  |
| removed |  -3.747 GiB | 31.1% → 0.0% | 3.75 GiB → 0 B | 1,911 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e8013db800`  |
| removed |   -3.57 GiB | 29.7% → 0.0% | 3.57 GiB → 0 B | 1,820 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000e80118e800` |
| removed |  -3.375 GiB | 28.1% → 0.0% | 3.38 GiB → 0 B | 1,760 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e8013d1c00`  |
| removed |  -3.371 GiB | 28.0% → 0.0% | 3.37 GiB → 0 B | 1,800 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801119400`  |
| removed |  -3.324 GiB | 27.6% → 0.0% | 3.32 GiB → 0 B | 1,774 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801141000`  |

# Retained heap profile diff

Retained 55.7 KiB → 28.1 KiB (-27.664 KiB, -49.6%) over 109 objects → 117 objects (523 B → 246 B per object).

| Category         | Change |       Delta |              % |              Size |   Objects |
| ---------------- | -----: | ----------: | -------------: | ----------------: | --------: |
| Standard library | -49.7% | -27.695 KiB | 100.0% → 99.9% | 55.7 KiB → 28 KiB | 109 → 116 |
| Ours             |    new |       +32 B |    0.0% → 0.1% |        0 B → 32 B |     0 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |          Size | Objects | Function                                                                                                    | Location                                                |
| ------: | ----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new | +20.031 KiB | 0.0% → 71.4% |  0 B → 20 KiB |   0 → 2 | `<init>(int, int, MemorySegment)`                                                                           | `java.nio.HeapByteBuffer`                               |
| +200.0% |      +288 B |  0.3% → 1.5% | 144 B → 432 B |   1 → 3 | `sizeCache(int)`                                                                                            | `java.lang.ClassValue$ClassValueMap`                    |
| +133.3% |      +224 B |  0.3% → 1.4% | 168 B → 392 B |   3 → 7 | `grow(int)`                                                                                                 | `java.util.ArrayList`                                   |
| +650.0% |      +208 B |  0.1% → 0.8% |  32 B → 240 B |   1 → 2 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`        | `java.lang.ClassLoader`                                 |
| +166.7% |      +200 B |  0.2% → 1.1% | 120 B → 320 B |   3 → 8 | `newNode(int, Object, Object, HashMap$Node)`                                                                | `java.util.LinkedHashMap`                               |
|     new |      +160 B |  0.0% → 0.6% |   0 B → 160 B |   0 → 1 | `visitClassDeclaration(GroovyParser$ClassDeclarationContext)`                                               | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|  +33.9% |      +152 B |  0.8% → 2.1% | 448 B → 600 B |       5 | `copyOfRangeByte(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
|     new |      +128 B |  0.0% → 0.4% |   0 B → 128 B |   0 → 2 | `<init>(int, float)`                                                                                        | `java.util.Hashtable`                                   |
|  +28.6% |      +112 B |  0.7% → 1.8% | 392 B → 504 B |   7 → 9 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|     new |      +112 B |  0.0% → 0.4% |   0 B → 112 B |   0 → 1 | `getDeclaredConstructors0(boolean)`                                                                         | `java.lang.Class`                                       |
| +200.0% |       +96 B |  0.1% → 0.5% |  48 B → 144 B |   1 → 3 | `create(Tuple2, int, String, int, int, int, int, int)`                                                      | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`      |
|     new |       +96 B |  0.0% → 0.3% |    0 B → 96 B |   0 → 2 | `clone()`                                                                                                   | `java.lang.Object`                                      |
|     new |       +96 B |  0.0% → 0.3% |    0 B → 96 B |   0 → 2 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                              | `java.lang.invoke.BoundMethodHandle$Species_LLLL`       |
|     new |       +72 B |  0.0% → 0.3% |    0 B → 72 B |   0 → 1 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                             | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |       +72 B |  0.0% → 0.3% |    0 B → 72 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL` |
|     new |       +64 B |  0.0% → 0.2% |    0 B → 64 B |   0 → 1 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                                                   | `sun.reflect.annotation.AnnotationParser`               |
|     new |       +64 B |  0.0% → 0.2% |    0 B → 64 B |   0 → 1 | `createBinaryExpression(GroovyParser$ExpressionContext, Token, GroovyParser$ExpressionContext)`             | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |       +64 B |  0.0% → 0.2% |    0 B → 64 B |   0 → 1 | `createDotExpression(GroovyParser$PathElementContext, Expression, Expression, GenericsType[], boolean)`     | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |       +64 B |  0.0% → 0.2% |    0 B → 64 B |   0 → 2 | `addEntry(int, Object, Object, int)`                                                                        | `java.util.Hashtable`                                   |
|     new |       +64 B |  0.0% → 0.2% |    0 B → 64 B |   0 → 1 | `putDeclaredVariable(Variable)`                                                                             | `org.codehaus.groovy.ast.VariableScope`                 |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |                Size | Objects | Function                                                                                                                                                   | Location                                            |
| ------: | ----------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  -99.7% | -32.515 KiB | 58.5% → 0.3% |     32.6 KiB → 96 B |   3 → 2 | `resize()`                                                                                                                                                 | `java.util.HashMap`                                 |
| removed |  -8.828 KiB | 15.8% → 0.0% |      8.83 KiB → 0 B |   2 → 0 | `copyOf(Object[], int)`                                                                                                                                    | `java.util.Arrays`                                  |
|  -81.4% |  -6.773 KiB | 14.9% → 5.5% | 8.32 KiB → 1.55 KiB |       1 | `<init>(Object[])`                                                                                                                                         | `java.util.ImmutableCollections$SetN`               |
|  -93.2% |      -328 B |  0.6% → 0.1% |        352 B → 24 B |   3 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                                            | `java.lang.ClassLoader`                             |
| removed |      -312 B |  0.5% → 0.0% |         312 B → 0 B |   1 → 0 | `checkValuesStringConstant(Object[])`                                                                                                                      | `org.codehaus.groovy.runtime.GStringImpl`           |
| removed |      -208 B |  0.4% → 0.0% |         208 B → 0 B |   2 → 0 | `forName0(String, boolean, ClassLoader, Class)`                                                                                                            | `java.lang.Class`                                   |
|  -61.1% |      -176 B |  0.5% → 0.4% |       288 B → 112 B |   4 → 2 | `getDeclaredMethods0(boolean)`                                                                                                                             | `java.lang.Class`                                   |
| removed |      -168 B |  0.3% → 0.0% |         168 B → 0 B |   3 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                                                                                     | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`  |
| removed |      -128 B |  0.2% → 0.0% |         128 B → 0 B |   1 → 0 | `defineClass2(ClassLoader, String, ByteBuffer, int, int, ProtectionDomain, String)`                                                                        | `java.lang.ClassLoader`                             |
| removed |       -96 B |  0.2% → 0.0% |          96 B → 0 B |   2 → 0 | `<init>(Class, ClassInfo)`                                                                                                                                 | `org.codehaus.groovy.reflection.CachedClass`        |
| removed |       -96 B |  0.2% → 0.0% |          96 B → 0 B |   1 → 0 | `create(String, String)`                                                                                                                                   | `org.codehaus.groovy.control.SourceUnit`            |
|  -50.0% |       -88 B |         0.3% |        176 B → 88 B |   2 → 1 | `copy()`                                                                                                                                                   | `java.lang.reflect.Method`                          |
| removed |       -80 B |  0.1% → 0.0% |          80 B → 0 B |   1 → 0 | `createMethodNodeForClass(GroovyParser$MethodDeclarationContext, ModifierManager, String, ClassNode, Parameter[], ClassNode[], Statement, ClassNode, int)` | `org.apache.groovy.parser.antlr4.AstBuilder`        |
| removed |       -72 B |  0.1% → 0.0% |          72 B → 0 B |   3 → 0 | `copy()`                                                                                                                                                   | `org.codehaus.groovy.util.FastArray`                |
| removed |       -72 B |  0.1% → 0.0% |          72 B → 0 B |   3 → 0 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`                                                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`       |
| removed |       -64 B |  0.1% → 0.0% |          64 B → 0 B |   2 → 0 | `getWeakReference(Object)`                                                                                                                                 | `java.beans.FeatureDescriptor`                      |
| removed |       -64 B |  0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `lambda$inheritStaticInterfaceFields$17(CachedClass)`                                                                                                      | `groovy.lang.MetaClassImpl`                         |
| removed |       -64 B |  0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `lambda$initValue$2(Method)`                                                                                                                               | `org.codehaus.groovy.reflection.CachedClass$3`      |
| removed |       -64 B |  0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `<init>(MethodType)`                                                                                                                                       | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |
| removed |       -56 B |  0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `visitNamePart(GroovyParser$NamePartContext)`                                                                                                              | `org.apache.groovy.parser.antlr4.AstBuilder`        |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size | Objects | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +24.71 KiB | 0.0% → 88.1% | 0 B → 24.7 KiB |  0 → 91 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003010b2800` |
|    new |  +24.07 KiB | 0.0% → 85.8% | 0 B → 24.1 KiB |  0 → 84 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301117800`  |
|    new |  +24.07 KiB | 0.0% → 85.8% | 0 B → 24.1 KiB |  0 → 84 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000301118400`  |
|    new |     +24 KiB | 0.0% → 85.5% |   0 B → 24 KiB |  0 → 82 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301115400`  |
|    new | +22.335 KiB | 0.0% → 79.6% | 0 B → 22.3 KiB |  0 → 48 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000301118000`  |
|    new | +21.781 KiB | 0.0% → 77.6% | 0 B → 21.8 KiB |  0 → 37 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301104000`  |
|    new | +21.773 KiB | 0.0% → 77.6% | 0 B → 21.8 KiB |  0 → 37 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301102400`  |
|    new | +21.265 KiB | 0.0% → 75.8% | 0 B → 21.3 KiB |  0 → 25 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301150800`  |
|    new | +21.257 KiB | 0.0% → 75.8% | 0 B → 21.3 KiB |  0 → 26 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000000301152800` |
|    new | +21.257 KiB | 0.0% → 75.8% | 0 B → 21.3 KiB |  0 → 26 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003012d8000`  |
|    new | +21.046 KiB | 0.0% → 75.0% |   0 B → 21 KiB |  0 → 21 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030182f400`  |
|    new | +20.437 KiB | 0.0% → 72.8% | 0 B → 20.4 KiB |  0 → 11 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000000301101c00` |
|    new | +20.328 KiB | 0.0% → 72.5% | 0 B → 20.3 KiB |   0 → 9 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003012c5c00`  |
|    new | +20.164 KiB | 0.0% → 71.9% | 0 B → 20.2 KiB |   0 → 6 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301145c00`  |
|    new |  +20.07 KiB | 0.0% → 71.5% | 0 B → 20.1 KiB |   0 → 3 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000030138c800`  |
|    new |  +20.07 KiB | 0.0% → 71.5% | 0 B → 20.1 KiB |   0 → 3 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000030138c000`  |
|    new | +20.031 KiB | 0.0% → 71.4% |   0 B → 20 KiB |   0 → 2 | `<init>(int, int, MemorySegment)`                                                           | `java.nio.HeapByteBuffer`                            |
|    new | +20.031 KiB | 0.0% → 71.4% |   0 B → 20 KiB |   0 → 2 | `allocate(int)`                                                                             | `java.nio.ByteBuffer`                                |
|    new | +20.031 KiB | 0.0% → 71.4% |   0 B → 20 KiB |   0 → 2 | `fromReader(Reader, String)`                                                                | `groovyjarjarantlr4.v4.runtime.CharStreams`          |
|    new | +20.031 KiB | 0.0% → 71.4% |   0 B → 20 KiB |   0 → 2 | `createCharStream(SourceUnit)`                                                              | `org.apache.groovy.parser.antlr4.AstBuilder`         |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |             Size | Objects | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | ---------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -54.234 KiB | 97.3% → 0.0% |   54.2 KiB → 0 B |  87 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800` |
| removed | -51.515 KiB | 92.5% → 0.0% |   51.5 KiB → 0 B |  80 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801117800`  |
| removed | -51.515 KiB | 92.5% → 0.0% |   51.5 KiB → 0 B |  80 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e801118400`  |
| removed | -51.328 KiB | 92.1% → 0.0% |   51.3 KiB → 0 B |  77 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801115400`  |
| removed | -49.789 KiB | 89.4% → 0.0% |   49.8 KiB → 0 B |  49 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801118000`  |
| removed | -34.664 KiB | 62.2% → 0.0% |   34.7 KiB → 0 B |   9 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bc800` |
| removed | -33.507 KiB | 60.1% → 0.0% |   33.5 KiB → 0 B |  21 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801119400`  |
|  -99.7% | -32.515 KiB | 58.5% → 0.3% |  32.6 KiB → 96 B |   3 → 2 | `resize()`                                                                                  | `java.util.HashMap`                                  |
| removed | -32.437 KiB | 58.2% → 0.0% |   32.4 KiB → 0 B |   7 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801117000`  |
|  -98.9% | -32.359 KiB | 58.7% → 1.3% | 32.7 KiB → 376 B |   6 → 9 | `putVal(int, Object, Object, boolean, boolean)`                                             | `java.util.HashMap`                                  |
|  -98.9% | -32.359 KiB | 58.7% → 1.3% | 32.7 KiB → 376 B |   6 → 9 | `put(Object, Object)`                                                                       | `java.util.HashMap`                                  |
|  -99.6% | -32.156 KiB | 58.0% → 0.5% | 32.3 KiB → 144 B |   4 → 2 | `find(URI, String, String, boolean)`                                                        | `org.codehaus.groovy.vmplugin.v9.ClassFinder`        |
|  -99.6% | -32.156 KiB | 58.0% → 0.5% | 32.3 KiB → 144 B |   4 → 2 | `find(URI, String, boolean)`                                                                | `org.codehaus.groovy.vmplugin.v9.ClassFinder`        |
|  -99.6% | -32.156 KiB | 58.0% → 0.5% | 32.3 KiB → 144 B |   4 → 2 | `doFindClasses(URI, String, List)`                                                          | `org.codehaus.groovy.vmplugin.v9.Java9`              |
|  -99.6% | -32.156 KiB | 58.0% → 0.5% | 32.3 KiB → 144 B |   4 → 2 | `getDefaultImportClasses(String[])`                                                         | `org.codehaus.groovy.vmplugin.v9.Java9`              |
|  -99.6% | -32.156 KiB | 58.0% → 0.5% | 32.3 KiB → 144 B |   4 → 2 | `<clinit>()`                                                                                | `org.codehaus.groovy.control.ResolveVisitor`         |
|  -99.4% | -32.156 KiB | 58.1% → 0.7% | 32.4 KiB → 208 B |   5 → 4 | `invokeConstructor(Class, Object[])`                                                        | `groovy.lang.MetaClassImpl`                          |
|  -99.4% | -32.156 KiB | 58.1% → 0.7% | 32.4 KiB → 208 B |   5 → 4 | `invokeConstructor(Object[])`                                                               | `groovy.lang.MetaClassImpl`                          |
|  -99.5% |  -32.14 KiB | 58.0% → 0.6% | 32.3 KiB → 160 B |   4 → 3 | `<clinit>()`                                                                                | `org.codehaus.groovy.runtime.FormatHelper`           |
|  -99.5% |  -32.14 KiB | 58.0% → 0.6% | 32.3 KiB → 160 B |   4 → 3 | `asType(Collection, Class)`                                                                 | `org.codehaus.groovy.runtime.DefaultGroovyMethods`   |
