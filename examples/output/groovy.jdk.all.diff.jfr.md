# Sampling profile diff

Collected 282 samples → 370 samples (+88 samples, +31.2%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library | +31.2% |   +86 | 97.9% → 97.8% | 276 → 362 |
| Ours             | +33.3% |    +2 |   2.1% → 2.2% |     6 → 8 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |             % | Samples | Function                                                                                     | Location                                               |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +32.3% |   +10 | 11.0% → 11.1% | 31 → 41 | `newArray(Class, int)`                                                                       | `java.lang.reflect.Array`                              |
| +100.0% |   +10 |   3.5% → 5.4% | 10 → 20 | `getNode(Object)`                                                                            | `java.util.HashMap`                                    |
| +100.0% |    +7 |   2.5% → 3.8% |  7 → 14 | `putVal(int, Object, Object, boolean, boolean)`                                              | `java.util.HashMap`                                    |
| +125.0% |    +5 |   1.4% → 2.4% |   4 → 9 | `init(MemberName, Object)`                                                                   | `java.lang.invoke.MethodHandleNatives`                 |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `insertParameterTypes(int, Class[])`                                                         | `java.lang.invoke.MethodType`                          |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `checkCustomized(MethodHandle)`                                                              | `java.lang.invoke.Invokers`                            |
| +300.0% |    +3 |   0.4% → 1.1% |   1 → 4 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |
| +100.0% |    +3 |   1.1% → 1.6% |   3 → 6 | `getReachableTarget(Transition, int)`                                                        | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `allocateInstance(Class)`                                                                    | `jdk.internal.misc.Unsafe`                             |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                                  |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `matches(Method, String, Class[])`                                                           | `java.lang.PublicMethods$Key`                          |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `cast(Object)`                                                                               | `java.lang.Class`                                      |
| +200.0% |    +2 |   0.4% → 0.8% |   1 → 3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000d8010b2800`   |
|     new |    +2 |   0.0% → 0.5% |   0 → 2 | `guard(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000d801104000`    |
|  +50.0% |    +2 |   1.4% → 1.6% |   4 → 6 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|     new |    +2 |   0.0% → 0.5% |   0 → 2 | `reinvoke(Object, Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$MH.0x000000d80118d000`    |
|  +66.7% |    +2 |   1.1% → 1.4% |   3 → 5 | `prepare()`                                                                                  | `java.lang.invoke.LambdaForm`                          |
|     new |    +2 |   0.0% → 0.5% |   0 → 2 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                           | `java.lang.invoke.MethodHandles`                       |
|  +25.0% |    +2 |   2.8% → 2.7% |  8 → 10 | `newInstance(Class, int)`                                                                    | `java.lang.reflect.Array`                              |
| +100.0% |    +2 |   0.7% → 1.1% |   2 → 4 | `invokeStatic(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`           |

##### Ours

| Change | Delta |           % | Samples | Function                                    | Location                                                                         |
| -----: | ----: | ----------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `calculate(MethodNode, SourceCode)`         | `org.gmetrics.metric.abc.AbcMetric`                                              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClassComplete(ClassNode)`             | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                  |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitMethod(MethodNode)`                   | `org.codenarc.rule.design.BuilderMethodWithSideEffectsAstVisitor`                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `$getCallSiteArray()`                       | `org.gmetrics.util.AstUtil`                                                      |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `applyTo(SourceCode, List)`                 | `org.codenarc.rule.imports.ImportFromSunPackagesRule`                            |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `filterSuppressedViolations(Iterable)`      | `org.codenarc.analyzer.SuppressionAnalyzer`                                      |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `doCall(Object)`                            | `org.codenarc.results.DirectoryResults$_getNumberOfFilesWithViolations_closure4` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `writeViolation(Writer, Violation, String)` | `org.codenarc.report.TextReportWriter`                                           |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                      | Location                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -62.5% |    -5 | 2.8% → 0.8% |   8 → 3 | `add(ATNConfig, PredictionContextCache)`                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| removed |    -3 | 1.1% → 0.0% |   3 → 0 | `copyIntoWithCancel(Sink, Spliterator)`                                                       | `java.util.stream.AbstractPipeline`                        |
| removed |    -3 | 1.1% → 0.0% |   3 → 0 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)`       | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |
| removed |    -3 | 1.1% → 0.0% |   3 → 0 | `equals(ATNConfig)`                                                                           | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
| removed |    -3 | 1.1% → 0.0% |   3 → 0 | `<init>(Method, boolean)`                                                                     | `java.lang.invoke.MemberName`                              |
|  -75.0% |    -3 | 1.4% → 0.3% |   4 → 1 | `coerceArgumentsToClasses(Object[])`                                                          | `org.codehaus.groovy.reflection.ParameterTypes`            |
|  -66.7% |    -2 | 1.1% → 0.3% |   3 → 1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `readLine()`                                                                                  | `java.util.Properties$LineReader`                          |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.LambdaForm$MH.0x000000d80116d000`        |
|  -28.6% |    -2 | 2.5% → 1.4% |   7 → 5 | `getReturnState(int)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|  -66.7% |    -2 | 1.1% → 0.3% |   3 → 1 | `getCachedContext(PredictionContext)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ATN`                    |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `isBuiltinLoader(ClassLoader)`                                                                | `java.lang.invoke.MethodHandle`                            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `addFirst(Object)`                                                                            | `java.util.ArrayDeque`                                     |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `getType(int)`                                                                                | `java.util.regex.ASCII`                                    |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `packedBytes(byte, int, int, int[])`                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `unboxInteger(Object, boolean)`                                                               | `sun.invoke.util.ValueConversions`                         |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                              |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `boxInteger(int)`                                                                             | `sun.invoke.util.ValueConversions`                         |
|  -33.3% |    -1 | 1.1% → 0.5% |   3 → 2 | `clone()`                                                                                     | `java.lang.Object`                                         |

##### Ours

|  Change | Delta |           % | Samples | Function                                             | Location                                                                       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `collectViolations(SourceCode, RuleSet)`             | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `resetSpockFlagIfExitingMethod(int)`                 | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `processParameters(Parameter[], String)`             | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor`                   |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `doCall(Object)`                                     | `org.codenarc.rule.naming.ParameterNameAstVisitor$_processParameters_closure1` |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `isFinalVariable(DeclarationExpression, SourceCode)` | `org.gmetrics.util.AstUtil`                                                    |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                          | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`                         |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

|   Change | Delta |             % |   Samples | Function                                                                                      | Location                                             |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +3150.0% |  +126 |  1.4% → 35.1% |   4 → 130 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000d801141000`  |
|  +900.0% |   +90 |  3.5% → 27.0% |  10 → 100 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000d801104000`  |
|   +35.2% |   +88 | 88.7% → 91.4% | 250 → 338 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000d8010b2800` |
|   +34.8% |   +87 | 88.7% → 91.1% | 250 → 337 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|   +34.1% |   +86 | 89.4% → 91.4% | 252 → 338 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
|   +38.6% |   +81 | 74.5% → 78.6% | 210 → 291 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000d801117800`  |
|   +39.1% |   +81 | 73.4% → 77.8% | 207 → 288 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000d801118400`  |
|  +736.4% |   +81 |  3.9% → 24.9% |   11 → 92 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000d801150800`  |
| +8100.0% |   +81 |  0.4% → 22.2% |    1 → 82 | `invoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000d8012ac800`  |
| +3950.0% |   +79 |  0.7% → 21.9% |    2 → 81 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000d8010bc000`  |
|  +452.9% |   +77 |  6.0% → 25.4% |   17 → 94 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000d801140c00`  |
|   +58.1% |   +72 | 44.0% → 53.0% | 124 → 196 | `invokeSpecial(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   +34.6% |   +71 | 72.7% → 74.6% | 205 → 276 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
|   +43.3% |   +71 | 58.2% → 63.5% | 164 → 235 | `invoke(Object, Object[])`                                                                    | `org.codehaus.groovy.reflection.CachedMethod`        |
|   +51.1% |   +70 | 48.6% → 55.9% | 137 → 207 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                   |
|   +42.4% |   +70 | 58.5% → 63.5% | 165 → 235 | `doMethodInvoke(Object, Object[])`                                                            | `groovy.lang.MetaMethod`                             |
|   +39.2% |   +69 | 62.4% → 66.2% | 176 → 245 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +38.2% |   +68 | 63.1% → 66.5% | 178 → 246 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +32.2% |   +67 | 73.8% → 74.3% | 208 → 275 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000d801115400`  |
|   +39.0% |   +67 | 61.0% → 64.6% | 172 → 239 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                           |

##### Ours

|  Change | Delta |             % |  Samples | Function                                          | Location                                                                            |
| ------: | ----: | ------------: | -------: | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +48.2% |   +27 | 19.9% → 22.4% |  56 → 83 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
|  +32.5% |   +26 | 28.4% → 28.6% | 80 → 106 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`          |
|  +31.6% |   +24 |         27.0% | 76 → 100 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                    |
|  +30.3% |   +20 | 23.4% → 23.2% |  66 → 86 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                          |
|  +27.9% |   +19 | 24.1% → 23.5% |  68 → 87 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                            |
|  +40.0% |   +16 | 14.2% → 15.1% |  40 → 56 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
|  +29.7% |   +11 | 13.1% → 13.0% |  37 → 48 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                    |
| +137.5% |   +11 |   2.8% → 5.1% |   8 → 19 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`         |
| +250.0% |   +10 |   1.4% → 3.8% |   4 → 14 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
| +250.0% |   +10 |   1.4% → 3.8% |   4 → 14 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                                  |
| +250.0% |   +10 |   1.4% → 3.8% |   4 → 14 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                                  |
|  +20.5% |    +8 | 13.8% → 12.7% |  39 → 47 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                            |
|  +11.9% |    +8 | 23.8% → 20.3% |  67 → 75 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                              |
|     new |    +7 |   0.0% → 1.9% |    0 → 7 | `doCall(Object)`                                  | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                |
| +600.0% |    +6 |   0.4% → 1.9% |    1 → 7 | `getAstVisitor()`                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                          |
| +600.0% |    +6 |   0.4% → 1.9% |    1 → 7 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`                                              |
|     new |    +6 |   0.0% → 1.6% |    0 → 6 | `buildLookupTable()`                              | `org.codenarc.plugin.disablerules.LookupTable`                                      |
|     new |    +6 |   0.0% → 1.6% |    0 → 6 | `writeViolation(Writer, Violation, String)`       | `org.codenarc.report.TextReportWriter`                                              |
| +500.0% |    +5 |   0.4% → 1.6% |    1 → 6 | `doCall(Object, Object)`                          | `org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`           |
| +125.0% |    +5 |   1.4% → 2.4% |    4 → 9 | `doCall(Object)`                                  | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                         | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | ---------------------------------------------------- |
| -82.7% |   -81 | 34.8% → 4.6% | 98 → 17 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801134400`  |
| -94.3% |   -66 | 24.8% → 1.1% |  70 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d80116d400`  |
| -98.5% |   -64 | 23.0% → 0.3% |  65 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000d801173800`  |
| -93.9% |   -62 | 23.4% → 1.1% |  66 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801148800`  |
| -81.9% |   -59 | 25.5% → 3.5% | 72 → 13 | `guard(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000d801136c00`  |
| -95.7% |   -45 | 16.7% → 0.5% |  47 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801230400`  |
| -97.8% |   -45 | 16.3% → 0.3% |  46 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d80140d000`  |
| -97.8% |   -45 | 16.3% → 0.3% |  46 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801151c00`  |
| -97.4% |   -37 | 13.5% → 0.3% |  38 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000d801411400`  |
| -91.4% |   -32 | 12.4% → 0.8% |  35 → 3 | `invokeVirtual(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bdc00` |
| -90.0% |   -27 | 10.6% → 0.8% |  30 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d801179000`  |
| -64.7% |   -11 |  6.0% → 1.6% |  17 → 6 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000d80144c000`  |
| -27.0% |   -10 | 13.1% → 7.3% | 37 → 27 | `visitExpressionStatement(ExpressionStatement)`  | `org.codehaus.groovy.ast.CodeVisitorSupport`         |
| -25.6% |   -10 | 13.8% → 7.8% | 39 → 29 | `visit(GroovyCodeVisitor)`                       | `org.codehaus.groovy.ast.stmt.ExpressionStatement`   |
| -21.7% |   -10 | 16.3% → 9.7% | 46 → 36 | `visit(GroovyCodeVisitor)`                       | `org.codehaus.groovy.ast.stmt.BlockStatement`        |
| -71.4% |   -10 |  5.0% → 1.1% |  14 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d8013d2800`  |
| -76.9% |   -10 |  4.6% → 0.8% |  13 → 3 | `visit(GroovyCodeVisitor)`                       | `org.codehaus.groovy.ast.expr.ClosureExpression`     |
| -30.0% |    -9 | 10.6% → 5.7% | 30 → 21 | `add(ATNConfig, PredictionContextCache)`         | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`     |
| -21.6% |    -8 | 13.1% → 7.8% | 37 → 29 | `visitExpressionStatement(ExpressionStatement)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`    |
| -20.0% |    -8 | 14.2% → 8.6% | 40 → 32 | `visitBlockStatement(BlockStatement)`            | `org.codehaus.groovy.ast.CodeVisitorSupport`         |

##### Ours

|  Change | Delta |             % | Samples | Function                                                | Location                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------------------------------------------------------------- |
|   -9.1% |    -5 | 19.5% → 13.5% | 55 → 50 | `visitMethod(MethodNode)`                               | `org.codenarc.rule.AbstractAstVisitor`                            |
| removed |    -4 |   1.4% → 0.0% |   4 → 0 | `doCall(int, String)`                                   | `org.codenarc.rule.imports.DuplicateImportRule$_applyTo_closure1` |
|  -60.0% |    -3 |   1.8% → 0.5% |   5 → 2 | `addViolationIfDuplicate(Expression, boolean)`          | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                |
|  -60.0% |    -3 |   1.8% → 0.5% |   5 → 2 | `addViolationIfDuplicate(Expression)`                   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                |
|  -75.0% |    -3 |   1.4% → 0.3% |   4 → 1 | `eachImportLine(SourceCode, Closure)`                   | `org.codenarc.rule.imports.AbstractImportRule`                    |
| removed |    -3 |   1.1% → 0.0% |   3 → 0 | `visitMethod(MethodNode)`                               | `org.gmetrics.metric.abc.AbcAstVisitor`                           |
| removed |    -3 |   1.1% → 0.0% |   3 → 0 | `visitBlockStatement(BlockStatement)`                   | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`  |
|  -50.0% |    -2 |   1.4% → 0.5% |   4 → 2 | `main(String[])`                                        | `org.codenarc.CodeNarc`                                           |
|  -66.7% |    -2 |   1.1% → 0.3% |   3 → 1 | `visitBinaryExpression(BinaryExpression)`               | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`     |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitBinaryExpression(BinaryExpression)`               | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                |
|  -50.0% |    -2 |   1.4% → 0.5% |   4 → 2 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.formatting.IndentationRule`                    |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitVariableExpression(VariableExpression)`           | `org.codenarc.rule.ClassReferenceAstVisitor`                      |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitClosureExpression(ClosureExpression)`             | `org.codenarc.rule.ClassReferenceAstVisitor`                      |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `super$3$visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                      |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`         | `org.codenarc.rule.ClassReferenceAstVisitor`                      |
|  -66.7% |    -2 |   1.1% → 0.3% |   3 → 1 | `processMethodNode(MethodNode)`                         | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`  |
|  -66.7% |    -2 |   1.1% → 0.3% |   3 → 1 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`  |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitClassEx(ClassNode)`                               | `org.codenarc.rule.formatting.IndentationAstVisitor`              |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor`      |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.imports.DuplicateImportRule`                   |

# Allocated heap profile diff

Allocated 11.8 GiB → 12 GiB (+233.798 MiB, +1.9%) over 6,270 samples → 6,421 samples (1.92 MiB → 1.91 MiB per sample).

| Category         | Change |        Delta |     % |                Size |       Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | ------------: |
| Standard library |  +2.0% | +235.803 MiB | 99.1% | 11.7 GiB → 11.9 GiB | 6,161 → 6,312 |
| Ours             |  -1.8% |   -2.002 MiB |  0.9% |   112 MiB → 110 MiB |            57 |
| Unknown          |  -4.9% |   -1.843 KiB | <0.1% | 37.6 KiB → 35.8 KiB |            52 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |           % |                Size |   Samples | Function                                                                                      | Location                                         |
| ------: | -----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| +144.5% | +151.294 MiB | 0.9% → 2.1% |   105 MiB → 256 MiB |  56 → 129 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`   |
|  +17.3% |  +88.145 MiB | 4.2% → 4.9% |   509 MiB → 598 MiB | 266 → 317 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                            |
|  +22.6% |  +54.405 MiB | 2.0% → 2.4% |   241 MiB → 295 MiB | 124 → 148 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`    |
|  +19.6% |  +41.811 MiB | 1.8% → 2.1% |   213 MiB → 255 MiB | 110 → 128 | `divideAndRemainderKnuth(BigInteger)`                                                         | `java.math.BigInteger`                           |
|  +35.4% |  +40.935 MiB | 1.0% → 1.3% |   116 MiB → 157 MiB |   59 → 79 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                    |
|  +21.7% |  +37.636 MiB | 1.4% → 1.7% |   174 MiB → 211 MiB |  90 → 110 | `compile()`                                                                                   | `java.util.regex.Pattern`                        |
|  +36.7% |  +34.807 MiB | 0.8% → 1.1% |  94.9 MiB → 130 MiB |   48 → 64 | `toBigInteger(int)`                                                                           | `java.math.MutableBigInteger`                    |
| +159.7% |  +34.009 MiB | 0.2% → 0.5% | 21.3 MiB → 55.3 MiB |   12 → 29 | `getParameterTypes()`                                                                         | `java.lang.reflect.Method`                       |
|   +4.9% |  +30.915 MiB | 5.2% → 5.4% |   631 MiB → 662 MiB | 327 → 333 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`  |
|  +12.6% |   +29.36 MiB | 1.9% → 2.1% |   233 MiB → 263 MiB | 120 → 131 | `of(byte, int, int)`                                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey` |
|  +20.0% |  +27.604 MiB | 1.1% → 1.3% |   138 MiB → 165 MiB |   72 → 85 | `resize()`                                                                                    | `java.util.HashMap`                              |
|  +48.2% |  +27.457 MiB | 0.5% → 0.7% |   57 MiB → 84.5 MiB |   29 → 43 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                    |
|  +36.9% |  +27.001 MiB | 0.6% → 0.8% |  73.2 MiB → 100 MiB |   38 → 48 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                             | `java.util.stream.MatchOps`                      |
|  +11.5% |  +26.701 MiB | 1.9% → 2.1% |   232 MiB → 258 MiB | 119 → 130 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.HashMap`                              |
|  +31.9% |  +23.618 MiB | 0.6% → 0.8% | 74.1 MiB → 97.7 MiB |   35 → 50 | `newHashMap(int)`                                                                             | `java.util.HashMap`                              |
|  +38.6% |  +22.254 MiB | 0.5% → 0.7% | 57.6 MiB → 79.9 MiB |   30 → 40 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                  | `java.math.MutableBigInteger`                    |
|  +23.6% |  +22.106 MiB | 0.8% → 0.9% |  93.8 MiB → 116 MiB |   46 → 58 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`              |
| +275.0% |  +21.989 MiB | 0.1% → 0.2% |      8 MiB → 30 MiB |    4 → 14 | `removeRealReceiver(Object[])`                                                                | `org.codehaus.groovy.vmplugin.v8.Selector`       |
|  +20.3% |   +21.54 MiB | 0.9% → 1.0% |   106 MiB → 128 MiB |   54 → 64 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`       |
|  +32.2% |  +21.277 MiB | 0.5% → 0.7% |   66 MiB → 87.3 MiB |   59 → 58 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                               |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |            % |                Size |   Samples | Function                                                                       | Location                                            |
| -----: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------ | --------------------------------------------------- |
| -23.4% |  -95.72 MiB |  3.4% → 2.6% |   410 MiB → 314 MiB | 159 → 154 | `lambdaFormEditor(LambdaForm)`                                                 | `java.lang.invoke.LambdaFormEditor`                 |
|  -8.0% | -64.986 MiB |  6.8% → 6.1% |   816 MiB → 752 MiB | 407 → 370 | `makeImpl(Class, Class[], boolean)`                                            | `java.lang.invoke.MethodType`                       |
| -23.2% | -52.672 MiB |  1.9% → 1.4% |   227 MiB → 175 MiB |   98 → 88 | `spliterator(Object[], int, int, int)`                                         | `java.util.Spliterators`                            |
| -31.8% | -51.668 MiB |  1.3% → 0.9% |   163 MiB → 111 MiB |   80 → 56 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`         | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`  |
| -65.2% | -41.142 MiB |  0.5% → 0.2% |   63.1 MiB → 22 MiB |   32 → 11 | `<init>()`                                                                     | `java.util.ArrayDeque`                              |
| -22.9% | -38.195 MiB |  1.4% → 1.0% |   167 MiB → 129 MiB |   86 → 65 | `parameterArray()`                                                             | `java.lang.invoke.MethodType`                       |
| -13.0% | -36.377 MiB |  2.3% → 2.0% |   279 MiB → 243 MiB | 133 → 121 | `allocateInstance(Object)`                                                     | `java.lang.invoke.DirectMethodHandle`               |
| -12.3% | -31.339 MiB |  2.1% → 1.8% |   255 MiB → 224 MiB | 130 → 111 | `optimize(Pattern$Node)`                                                       | `java.util.regex.Pattern$BnM`                       |
|  -7.2% | -19.726 MiB |  2.3% → 2.1% |   273 MiB → 253 MiB | 136 → 130 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                 | `java.lang.invoke.BoundMethodHandle$Species_LLLL`   |
| -19.0% | -19.169 MiB |  0.8% → 0.7% |    101 MiB → 82 MiB |   51 → 40 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`      | `java.lang.invoke.MethodHandleImpl`                 |
| -61.0% | -18.229 MiB |  0.2% → 0.1% | 29.9 MiB → 11.6 MiB |    14 → 7 | `<init>(Reader, int)`                                                          | `java.io.BufferedReader`                            |
| -65.7% | -18.181 MiB |  0.2% → 0.1% | 27.7 MiB → 9.49 MiB |    9 → 13 | `<init>(InputStream, Inflater, int)`                                           | `java.util.zip.InflaterInputStream`                 |
| -60.0% | -18.006 MiB |  0.2% → 0.1% |     30 MiB → 12 MiB |    15 → 6 | `intStream(Spliterator$OfInt, boolean)`                                        | `java.util.stream.StreamSupport`                    |
| -33.9% | -17.647 MiB |  0.4% → 0.3% |   52 MiB → 34.4 MiB |   26 → 18 | `compile(String)`                                                              | `java.util.regex.Pattern`                           |
| -89.7% |  -17.33 MiB | 0.2% → <0.1% |    19.3 MiB → 2 MiB |     9 → 1 | `make(MethodType, LambdaForm)`                                                 | `java.lang.invoke.SimpleMethodHandle`               |
| -27.6% | -16.494 MiB |  0.5% → 0.4% | 59.7 MiB → 43.2 MiB |   30 → 21 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL` |
|  -6.7% | -16.044 MiB |  2.0% → 1.8% |   238 MiB → 222 MiB | 111 → 115 | `insertParameterTypes(int, Class[])`                                           | `java.lang.invoke.MethodType`                       |
| -28.6% | -14.432 MiB |  0.4% → 0.3% |   50.4 MiB → 36 MiB |   26 → 16 | `unreflect(Method)`                                                            | `java.lang.invoke.MethodHandles$Lookup`             |
| -30.1% | -14.296 MiB |  0.4% → 0.3% | 47.5 MiB → 33.2 MiB |   26 → 16 | `grow(int)`                                                                    | `java.util.ArrayList`                               |
| -41.2% | -14.025 MiB |  0.3% → 0.2% |     34 MiB → 20 MiB |   18 → 10 | `linkLast(Object)`                                                             | `java.util.LinkedList`                              |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                            |
| ----------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
|  +374554.0% |   +4.665 GiB | <0.1% → 38.9% | 1.28 MiB → 4.67 GiB |     1 → 2,404 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d80138d800` |
|  +212903.8% |   +4.657 GiB | <0.1% → 38.8% | 2.24 MiB → 4.66 GiB |     2 → 2,405 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000d8012ac800` |
|     +761.0% |   +3.374 GiB |  3.8% → 31.8% |  454 MiB → 3.82 GiB |   220 → 1,965 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000d8013dcc00` |
|    +1040.6% |   +3.091 GiB |  2.5% → 28.2% |  304 MiB → 3.39 GiB |   155 → 1,762 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d8013d3000` |
|  +155781.7% |   +3.041 GiB | <0.1% → 25.4% |    2 MiB → 3.04 GiB |     1 → 1,525 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000d80160b400` |
|   +16902.5% |   +2.976 GiB |  0.1% → 25.0% |   18 MiB → 2.99 GiB |    15 → 1,563 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d801140c00` |
|  +146793.2% |   +2.865 GiB | <0.1% → 23.9% |    2 MiB → 2.87 GiB |     1 → 1,438 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801829400` |
| +1834309.2% |   +2.698 GiB | <0.1% → 22.5% |   154 KiB → 2.7 GiB |     1 → 1,398 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d8013dd000` |
|     +353.7% |   +1.014 GiB |  2.4% → 10.8% |   294 MiB → 1.3 GiB |     175 → 670 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000d8012b8400` |
|    +3313.7% | +902.057 MiB |   0.2% → 7.6% |  27.2 MiB → 929 MiB |      21 → 467 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801105400` |
|    +8420.4% | +841.568 MiB |   0.1% → 6.9% |  9.99 MiB → 852 MiB |       5 → 418 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d80160b000` |
|      +16.2% | +732.552 MiB | 37.5% → 42.7% | 4.41 GiB → 5.13 GiB | 2,277 → 2,645 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000d801142000` |
|     +275.8% | +725.069 MiB |   2.2% → 8.0% |   263 MiB → 988 MiB |     147 → 497 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801150800` |
|     +153.1% | +681.902 MiB |   3.7% → 9.2% |   445 MiB → 1.1 GiB |     224 → 561 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d8012d8000` |
|   +16749.6% | +669.653 MiB |  <0.1% → 5.5% |     4 MiB → 674 MiB |       1 → 330 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d801608400` |
|    +1172.9% | +486.403 MiB |   0.3% → 4.3% |  41.5 MiB → 528 MiB |      22 → 265 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d8012c6400` |
|     +147.0% | +437.767 MiB |   2.5% → 6.0% |   298 MiB → 736 MiB |     146 → 358 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d80182e800` |
|     +838.5% | +422.105 MiB |   0.4% → 3.8% |  50.3 MiB → 472 MiB |      27 → 239 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d80138c800` |
|   +20299.8% | +405.797 MiB |  <0.1% → 3.3% |     2 MiB → 408 MiB |       1 → 189 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d80149e800` |
|    +4267.3% | +402.334 MiB |   0.1% → 3.4% |  9.43 MiB → 412 MiB |       6 → 212 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d80138c000` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                 Size |     Samples | Function                                         | Location                                            |
| ------: | -----------: | ------------: | -------------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
|  -91.2% |   -4.414 GiB |  41.1% → 3.6% |   4.84 GiB → 437 MiB | 2,494 → 220 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000d80118c000` |
| -100.0% |   -3.536 GiB | 30.0% → <0.1% |   3.54 GiB → 627 KiB |   1,811 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000d80118f800` |
|  -75.6% |   -3.339 GiB |  37.5% → 9.0% |  4.42 GiB → 1.08 GiB | 2,273 → 555 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801397c00` |
|  -92.3% |   -3.211 GiB |  29.5% → 2.2% |   3.48 GiB → 274 MiB | 1,814 → 137 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d801179800` |
|  -99.7% |   -3.055 GiB |  26.0% → 0.1% |  3.06 GiB → 9.49 MiB |  1,611 → 10 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d801005800` |
|  -98.3% |   -2.766 GiB |  23.9% → 0.4% |    2.81 GiB → 48 MiB |  1,414 → 23 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000d801537800` |
|  -99.9% |   -2.722 GiB | 23.1% → <0.1% |  2.72 GiB → 2.12 MiB |   1,419 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d8013e3400` |
|  -99.9% |   -2.559 GiB | 21.8% → <0.1% |     2.56 GiB → 2 MiB |   1,289 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d80164e000` |
|  -82.2% |   -1.155 GiB |  11.9% → 2.1% |   1.41 GiB → 256 MiB |   703 → 167 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000d8012bc800` |
|  -93.9% |   -1.142 GiB |  10.3% → 0.6% |  1.22 GiB → 75.9 MiB |    652 → 46 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d8012bb000` |
|  -94.7% | -947.221 MiB |   8.3% → 0.4% | 1,001 MiB → 53.4 MiB |    508 → 36 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d8013dc400` |
|  -84.5% | -869.024 MiB |   8.5% → 1.3% |      1 GiB → 159 MiB |    532 → 90 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801105c00` |
|  -99.3% |  -807.55 MiB |  6.7% → <0.1% |      814 MiB → 6 MiB |     397 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d80148cc00` |
|  -70.5% | -790.085 MiB |   9.3% → 2.7% |    1.1 GiB → 331 MiB |   577 → 166 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d8012c5c00` |
|  -99.5% | -751.604 MiB |  6.3% → <0.1% |      756 MiB → 4 MiB |     376 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d801678800` |
|  -99.1% | -645.673 MiB |  5.4% → <0.1% |      652 MiB → 6 MiB |     318 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d80164a800` |
|  -99.5% | -517.104 MiB |  4.3% → <0.1% |   519 MiB → 2.34 MiB |     262 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d801185000` |
|  -71.4% | -376.528 MiB |   4.4% → 1.2% |    527 MiB → 151 MiB |    256 → 75 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d80144c800` |
|  -97.4% | -371.534 MiB |   3.2% → 0.1% |   382 MiB → 10.1 MiB |     196 → 6 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000d8013a8000` |
|  -99.2% | -366.183 MiB |  3.1% → <0.1% |   369 MiB → 2.95 MiB |     184 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000d8012d0c00` |

# Retained heap profile diff

Retained 12.2 KiB → 12.4 KiB (+200 B, +1.6%) over 129 objects → 110 objects (96.9 B → 115 B per object).

| Category         |  Change |  Delta |              % |                Size |   Objects |
| ---------------- | ------: | -----: | -------------: | ------------------: | --------: |
| Standard library |   +2.1% | +264 B | 99.5% → 100.0% | 12.1 KiB → 12.4 KiB | 127 → 110 |
| Ours             | removed |  -64 B |    0.5% → 0.0% |          64 B → 0 B |     2 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |           Size | Objects | Function                                                                                                    | Location                                                |
| ------: | ---------: | -----------: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new | +3.929 KiB | 0.0% → 31.7% | 0 B → 3.93 KiB |   0 → 1 | `<clinit>()`                                                                                                | `groovyjarjarantlr4.v4.runtime.misc.Interval`           |
|  +42.6% |     +232 B |  4.4% → 6.1% |  544 B → 776 B |   6 → 7 | `copyOfRangeByte(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
|  +23.1% |     +192 B |  6.7% → 8.1% |  832 B → 1 KiB |   5 → 4 | `resize()`                                                                                                  | `java.util.HashMap`                                     |
| +200.0% |     +160 B |  0.6% → 1.9% |   80 B → 240 B |   2 → 6 | `newNode(int, Object, Object, HashMap$Node)`                                                                | `java.util.LinkedHashMap`                               |
|     new |     +152 B |  0.0% → 1.2% |    0 B → 152 B |   0 → 1 | `visitClassDeclaration(GroovyParser$ClassDeclarationContext)`                                               | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |     +144 B |  0.0% → 1.1% |    0 B → 144 B |   0 → 1 | `sizeCache(int)`                                                                                            | `java.lang.ClassValue$ClassValueMap`                    |
|     new |     +112 B |  0.0% → 0.9% |    0 B → 112 B |   0 → 2 | `initClassName()`                                                                                           | `java.lang.Class`                                       |
|     new |      +96 B |  0.0% → 0.8% |     0 B → 96 B |   0 → 2 | `clone()`                                                                                                   | `java.lang.Object`                                      |
| +100.0% |      +72 B |  0.6% → 1.1% |   72 B → 144 B |   1 → 2 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                             | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |      +72 B |  0.0% → 0.6% |     0 B → 72 B |   0 → 1 | `getDeclaredFields0(boolean)`                                                                               | `java.lang.Class`                                       |
|     new |      +72 B |  0.0% → 0.6% |     0 B → 72 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL` |
|     new |      +64 B |  0.0% → 0.5% |     0 B → 64 B |   0 → 1 | `allocateInstance(Class)`                                                                                   | `jdk.internal.misc.Unsafe`                              |
| +100.0% |      +64 B |  0.5% → 1.0% |   64 B → 128 B |   1 → 2 | `lambda$initValue$2(Method)`                                                                                | `org.codehaus.groovy.reflection.CachedClass$3`          |
|     new |      +64 B |  0.0% → 0.5% |     0 B → 64 B |   0 → 1 | `lambda$inheritFields$18(CachedClass)`                                                                      | `groovy.lang.MetaClassImpl`                             |
|     new |      +56 B |  0.0% → 0.4% |     0 B → 56 B |   0 → 1 | `getTargetMethodInfo()`                                                                                     | `java.beans.Introspector`                               |
|     new |      +56 B |  0.0% → 0.4% |     0 B → 56 B |   0 → 1 | `computeValue(Class)`                                                                                       | `org.codehaus.groovy.reflection.ClassInfo$1`            |
|  +50.0% |      +48 B |  0.8% → 1.1% |   96 B → 144 B |   4 → 6 | `addAnyChild(ParseTree)`                                                                                    | `groovyjarjarantlr4.v4.runtime.ParserRuleContext`       |
|     new |      +48 B |  0.0% → 0.4% |     0 B → 48 B |   0 → 1 | `<init>(Class)`                                                                                             | `org.codehaus.groovy.reflection.ClassInfo`              |
|     new |      +40 B |  0.0% → 0.3% |     0 B → 40 B |   0 → 1 | `getDefaultMetaClass()`                                                                                     | `groovy.lang.GroovyObjectSupport`                       |
|     new |      +40 B |  0.0% → 0.3% |     0 B → 40 B |   0 → 1 | `blockStatement()`                                                                                          | `org.apache.groovy.parser.antlr4.GroovyParser`          |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |            Size | Objects | Function                                                                                             | Location                                                |
| ------: | ---------: | -----------: | --------------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -88.5% | -1.679 KiB | 15.6% → 1.8% | 1.9 KiB → 224 B |   2 → 1 | `copyOfRange(byte[], int, int)`                                                                      | `java.util.Arrays`                                      |
| removed |     -496 B |  4.0% → 0.0% |     496 B → 0 B |   1 → 0 | `getDeclaredConstructors0(boolean)`                                                                  | `java.lang.Class`                                       |
| removed |     -352 B |  2.8% → 0.0% |     352 B → 0 B |   4 → 0 | `copy()`                                                                                             | `java.lang.reflect.Method`                              |
|  -46.2% |     -336 B |  5.8% → 3.1% |   728 B → 392 B |  13 → 7 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                    | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -50.0% |     -304 B |  4.9% → 2.4% |   608 B → 304 B |   4 → 2 | `getPlainNodeReference(boolean)`                                                                     | `org.codehaus.groovy.ast.ClassNode`                     |
|  -66.7% |     -240 B |  2.9% → 0.9% |   360 B → 120 B |   3 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                 |
|  -41.1% |     -184 B |  3.6% → 2.1% |   448 B → 264 B |       3 | `getDeclaredMethods0(boolean)`                                                                       | `java.lang.Class`                                       |
|  -39.2% |     -160 B |  3.3% → 2.0% |   408 B → 248 B |   3 → 4 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16`                                 |
|  -50.0% |     -152 B |  2.4% → 1.2% |   304 B → 152 B |   2 → 1 | `makeWithoutCaching(String)`                                                                         | `org.codehaus.groovy.ast.ClassHelper`                   |
| removed |     -144 B |  1.2% → 0.0% |     144 B → 0 B |   3 → 0 | `create(Tuple2, int, String, int, int, int, int, int)`                                               | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`      |
| removed |     -120 B |  1.0% → 0.0% |     120 B → 0 B |   1 → 0 | `<init>(MethodType)`                                                                                 | `java.lang.invoke.MethodTypeForm`                       |
|  -40.0% |     -112 B |  2.2% → 1.3% |   280 B → 168 B |   5 → 3 | `grow(int)`                                                                                          | `java.util.ArrayList`                                   |
| removed |      -96 B |  0.8% → 0.0% |      96 B → 0 B |   1 → 0 | `<clinit>()`                                                                                         | `org.codehaus.groovy.runtime.MetaClassHelper`           |
| removed |      -96 B |  0.8% → 0.0% |      96 B → 0 B |   2 → 0 | `makeBlockInliningWrapper(MethodHandle)`                                                             | `java.lang.invoke.MethodHandleImpl`                     |
|  -78.6% |      -88 B |  0.9% → 0.2% |    112 B → 24 B |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                      | `java.lang.ClassLoader`                                 |
| removed |      -80 B |  0.6% → 0.0% |      80 B → 0 B |   1 → 0 | `decompress(ByteBuffer, int)`                                                                        | `jdk.internal.jimage.ImageLocation`                     |
| removed |      -72 B |  0.6% → 0.0% |      72 B → 0 B |   3 → 0 | `newString(byte[], int, int)`                                                                        | `java.lang.StringLatin1`                                |
| removed |      -72 B |  0.6% → 0.0% |      72 B → 0 B |   1 → 0 | `copy()`                                                                                             | `java.lang.reflect.Constructor`                         |
| removed |      -72 B |  0.6% → 0.0% |      72 B → 0 B |   1 → 0 | `addPropertyDescriptor(PropertyDescriptor)`                                                          | `java.beans.Introspector`                               |
| removed |      -64 B |  0.5% → 0.0% |      64 B → 0 B |   1 → 0 | `lambda$applyStrayPropertyMethods$20(CachedClass)`                                                   | `groovy.lang.MetaClassImpl`                             |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |      Delta |            % |                Size | Objects | Function                                                                  | Location                                                                   |
| --------: | ---------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +21480.0% |  +8.39 KiB | 0.3% → 68.0% |     40 B → 8.43 KiB |  1 → 51 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d801141000`                        |
|  +2134.1% | +6.835 KiB | 2.6% → 57.7% |    328 B → 7.16 KiB |  3 → 24 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000d801005400`                        |
|  +1304.5% | +4.484 KiB | 2.8% → 38.9% |    352 B → 4.83 KiB |  4 → 19 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d8010bc000`                        |
|  +1547.2% | +4.351 KiB | 2.3% → 37.4% |    288 B → 4.63 KiB |  3 → 16 | `invokeVirtual(Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000d801101c00`                       |
|   +667.9% | +4.226 KiB | 5.2% → 39.2% |    648 B → 4.86 KiB | 11 → 21 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000d8012d8000`                        |
|  +3540.0% | +4.148 KiB | 1.0% → 34.4% |    120 B → 4.27 KiB |  1 → 11 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d801145c00`                        |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `<clinit>()`                                                              | `groovyjarjarantlr4.v4.runtime.misc.Interval`                              |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `add(int, int)`                                                           | `groovyjarjarantlr4.v4.runtime.misc.IntervalSet`                           |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `of(int, int)`                                                            | `groovyjarjarantlr4.v4.runtime.misc.IntervalSet`                           |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `<clinit>()`                                                              | `groovyjarjarantlr4.v4.runtime.misc.IntervalSet`                           |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `deserializeSets(char[], int, List, ATNDeserializer$UnicodeDeserializer)` | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`                        |
| +12550.0% | +3.921 KiB | 0.3% → 31.9% |     32 B → 3.95 KiB |   1 → 2 | `deserialize(char[])`                                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`                        |
| +12550.0% | +3.921 KiB | 0.3% → 31.9% |     32 B → 3.95 KiB |   1 → 2 | `<init>(SourceUnit, boolean, boolean)`                                    | `org.apache.groovy.parser.antlr4.AstBuilder`                               |
| +12475.0% | +3.898 KiB | 0.3% → 31.7% |     32 B → 3.93 KiB |       1 | `<clinit>()`                                                              | `org.apache.groovy.parser.antlr4.GroovyLexer`                              |
|   +404.9% |  +3.89 KiB | 7.9% → 39.1% |    984 B → 4.85 KiB | 10 → 24 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d801150800`                        |
|   +363.7% | +3.835 KiB | 8.6% → 39.4% | 1.05 KiB → 4.89 KiB | 20 → 22 | `buildAST()`                                                              | `org.codehaus.groovy.control.SourceUnit`                                   |
|   +363.7% | +3.835 KiB | 8.6% → 39.4% | 1.05 KiB → 4.89 KiB | 20 → 22 | `accept(Object)`                                                          | `org.codehaus.groovy.control.CompilationUnit$$Lambda.0x000000d8012dc8e8`   |
|   +360.7% | +3.804 KiB | 8.6% → 39.2% | 1.05 KiB → 4.86 KiB | 20 → 21 | `forEach(Consumer)`                                                       | `java.util.stream.ReferencePipeline$Head`                                  |
|   +340.8% | +3.781 KiB | 9.1% → 39.4% | 1.11 KiB → 4.89 KiB | 21 → 22 | `buildAST(SourceUnit, ClassLoader, Reduction)`                            | `org.apache.groovy.parser.antlr4.Antlr4ParserPlugin`                       |
|  +1341.7% | +3.773 KiB | 2.3% → 32.7% |    288 B → 4.05 KiB |       4 | `doCall(Object)`                                                          | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |

##### Standard library

|    Change |      Delta |            % |                Size | Objects | Function                                                                  | Location                                                                 |
| --------: | ---------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +21480.0% |  +8.39 KiB | 0.3% → 68.0% |     40 B → 8.43 KiB |  1 → 51 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d801141000`                      |
|  +2134.1% | +6.835 KiB | 2.6% → 57.7% |    328 B → 7.16 KiB |  3 → 24 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000d801005400`                      |
|  +1304.5% | +4.484 KiB | 2.8% → 38.9% |    352 B → 4.83 KiB |  4 → 19 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d8010bc000`                      |
|  +1547.2% | +4.351 KiB | 2.3% → 37.4% |    288 B → 4.63 KiB |  3 → 16 | `invokeVirtual(Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000d801101c00`                     |
|   +667.9% | +4.226 KiB | 5.2% → 39.2% |    648 B → 4.86 KiB | 11 → 21 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000d8012d8000`                      |
|  +3540.0% | +4.148 KiB | 1.0% → 34.4% |    120 B → 4.27 KiB |  1 → 11 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d801145c00`                      |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `<clinit>()`                                                              | `groovyjarjarantlr4.v4.runtime.misc.Interval`                            |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `add(int, int)`                                                           | `groovyjarjarantlr4.v4.runtime.misc.IntervalSet`                         |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `of(int, int)`                                                            | `groovyjarjarantlr4.v4.runtime.misc.IntervalSet`                         |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `<clinit>()`                                                              | `groovyjarjarantlr4.v4.runtime.misc.IntervalSet`                         |
|       new | +3.929 KiB | 0.0% → 31.7% |      0 B → 3.93 KiB |   0 → 1 | `deserializeSets(char[], int, List, ATNDeserializer$UnicodeDeserializer)` | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`                      |
| +12550.0% | +3.921 KiB | 0.3% → 31.9% |     32 B → 3.95 KiB |   1 → 2 | `deserialize(char[])`                                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`                      |
| +12550.0% | +3.921 KiB | 0.3% → 31.9% |     32 B → 3.95 KiB |   1 → 2 | `<init>(SourceUnit, boolean, boolean)`                                    | `org.apache.groovy.parser.antlr4.AstBuilder`                             |
| +12475.0% | +3.898 KiB | 0.3% → 31.7% |     32 B → 3.93 KiB |       1 | `<clinit>()`                                                              | `org.apache.groovy.parser.antlr4.GroovyLexer`                            |
|   +404.9% |  +3.89 KiB | 7.9% → 39.1% |    984 B → 4.85 KiB | 10 → 24 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d801150800`                      |
|   +363.7% | +3.835 KiB | 8.6% → 39.4% | 1.05 KiB → 4.89 KiB | 20 → 22 | `buildAST()`                                                              | `org.codehaus.groovy.control.SourceUnit`                                 |
|   +363.7% | +3.835 KiB | 8.6% → 39.4% | 1.05 KiB → 4.89 KiB | 20 → 22 | `accept(Object)`                                                          | `org.codehaus.groovy.control.CompilationUnit$$Lambda.0x000000d8012dc8e8` |
|   +360.7% | +3.804 KiB | 8.6% → 39.2% | 1.05 KiB → 4.86 KiB | 20 → 21 | `forEach(Consumer)`                                                       | `java.util.stream.ReferencePipeline$Head`                                |
|   +340.8% | +3.781 KiB | 9.1% → 39.4% | 1.11 KiB → 4.89 KiB | 21 → 22 | `buildAST(SourceUnit, ClassLoader, Reduction)`                            | `org.apache.groovy.parser.antlr4.Antlr4ParserPlugin`                     |
|   +341.1% | +3.757 KiB | 9.0% → 39.2% |  1.1 KiB → 4.86 KiB |      21 | `forEachRemaining(Consumer)`                                              | `java.util.Iterator`                                                     |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |      Delta |             % |                Size | Objects | Function                                                                                         | Location                                                                   |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
|  -98.5% | -6.515 KiB |  54.2% → 0.8% |    6.62 KiB → 104 B |  64 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000d80115e000`                        |
|  -96.9% |  -4.39 KiB |  37.1% → 1.1% |    4.53 KiB → 144 B |  32 → 1 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000d8013a8000`                        |
|  -97.7% |  -3.64 KiB |  30.5% → 0.7% |     3.73 KiB → 88 B |  20 → 2 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000d801133400`                        |
|  -71.7% | -3.289 KiB | 37.6% → 10.5% |  4.59 KiB → 1.3 KiB | 34 → 21 | `invokeInterface(Object, Object, Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bd400`                       |
|  -71.4% | -2.984 KiB |  34.3% → 9.6% |  4.18 KiB → 1.2 KiB | 30 → 22 | `applyTo(SourceCode, List)`                                                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  -71.4% | -2.929 KiB |  33.6% → 9.5% |  4.1 KiB → 1.17 KiB | 28 → 21 | `doCall(Object)`                                                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -70.1% | -2.914 KiB | 34.1% → 10.0% | 4.16 KiB → 1.24 KiB | 29 → 23 | `applyTo(SourceCode)`                                                                            | `org.codenarc.rule.AbstractRule`                                           |
|  -70.1% | -2.914 KiB | 34.1% → 10.0% | 4.16 KiB → 1.24 KiB | 29 → 23 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bd000`                       |
|  -98.4% | -2.906 KiB |  24.2% → 0.4% |     2.95 KiB → 48 B |   8 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000d801141400`                        |
|  -92.1% | -2.828 KiB |  25.2% → 2.0% |    3.07 KiB → 248 B |  13 → 7 | `newInstance()`                                                                                  | `java.lang.Class`                                                          |
|  -92.1% | -2.828 KiB |  25.2% → 2.0% |    3.07 KiB → 248 B |  13 → 7 | `getAstVisitor()`                                                                                | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  -38.4% | -2.703 KiB | 57.6% → 34.9% | 7.03 KiB → 4.33 KiB | 45 → 42 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -75.3% | -2.578 KiB |  28.0% → 6.8% |    3.42 KiB → 864 B | 23 → 13 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000d801119400`                        |
|  -86.0% | -2.546 KiB |  24.3% → 3.3% |    2.96 KiB → 424 B | 17 → 10 | `newInvokeSpecial(Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`                               |
|  -92.9% |  -2.46 KiB |  21.7% → 1.5% |    2.65 KiB → 192 B |  16 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000d801133c00`                        |
| removed | -2.453 KiB |  20.1% → 0.0% |      2.45 KiB → 0 B |  17 → 0 | `invokeVirtual(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x000000a001101c00`                       |
|  -88.6% | -2.367 KiB |  21.9% → 2.5% |    2.67 KiB → 312 B |  14 → 8 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor`                     |
|  -88.6% | -2.367 KiB |  21.9% → 2.5% |    2.67 KiB → 312 B |  14 → 8 | `newInstance(Object[])`                                                                          | `jdk.internal.reflect.DirectConstructorHandleAccessor`                     |
|  -90.6% | -2.343 KiB |  21.2% → 2.0% |    2.59 KiB → 248 B |  12 → 7 | `newInstance(Constructor, Object[], Class)`                                                      | `java.lang.reflect.ReflectAccess`                                          |
|  -90.6% | -2.343 KiB |  21.2% → 2.0% |    2.59 KiB → 248 B |  12 → 7 | `newInstance(Constructor, Object[], Class)`                                                      | `jdk.internal.reflect.ReflectionFactory`                                   |

##### Standard library

|  Change |      Delta |             % |                Size | Objects | Function                                                                                         | Location                                                 |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
|  -98.5% | -6.515 KiB |  54.2% → 0.8% |    6.62 KiB → 104 B |  64 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000d80115e000`      |
|  -96.9% |  -4.39 KiB |  37.1% → 1.1% |    4.53 KiB → 144 B |  32 → 1 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000d8013a8000`      |
|  -97.7% |  -3.64 KiB |  30.5% → 0.7% |     3.73 KiB → 88 B |  20 → 2 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000d801133400`      |
|  -71.7% | -3.289 KiB | 37.6% → 10.5% |  4.59 KiB → 1.3 KiB | 34 → 21 | `invokeInterface(Object, Object, Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bd400`     |
|  -70.1% | -2.914 KiB | 34.1% → 10.0% | 4.16 KiB → 1.24 KiB | 29 → 23 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bd000`     |
|  -98.4% | -2.906 KiB |  24.2% → 0.4% |     2.95 KiB → 48 B |   8 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000d801141400`      |
|  -92.1% | -2.828 KiB |  25.2% → 2.0% |    3.07 KiB → 248 B |  13 → 7 | `newInstance()`                                                                                  | `java.lang.Class`                                        |
|  -38.4% | -2.703 KiB | 57.6% → 34.9% | 7.03 KiB → 4.33 KiB | 45 → 42 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`          |
|  -75.3% | -2.578 KiB |  28.0% → 6.8% |    3.42 KiB → 864 B | 23 → 13 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000d801119400`      |
|  -86.0% | -2.546 KiB |  24.3% → 3.3% |    2.96 KiB → 424 B | 17 → 10 | `newInvokeSpecial(Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`             |
|  -92.9% |  -2.46 KiB |  21.7% → 1.5% |    2.65 KiB → 192 B |  16 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000d801133c00`      |
| removed | -2.453 KiB |  20.1% → 0.0% |      2.45 KiB → 0 B |  17 → 0 | `invokeVirtual(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x000000a001101c00`     |
|  -88.6% | -2.367 KiB |  21.9% → 2.5% |    2.67 KiB → 312 B |  14 → 8 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor`   |
|  -88.6% | -2.367 KiB |  21.9% → 2.5% |    2.67 KiB → 312 B |  14 → 8 | `newInstance(Object[])`                                                                          | `jdk.internal.reflect.DirectConstructorHandleAccessor`   |
|  -90.6% | -2.343 KiB |  21.2% → 2.0% |    2.59 KiB → 248 B |  12 → 7 | `newInstance(Constructor, Object[], Class)`                                                      | `java.lang.reflect.ReflectAccess`                        |
|  -90.6% | -2.343 KiB |  21.2% → 2.0% |    2.59 KiB → 248 B |  12 → 7 | `newInstance(Constructor, Object[], Class)`                                                      | `jdk.internal.reflect.ReflectionFactory`                 |
|  -88.4% | -2.312 KiB |  21.4% → 2.5% |    2.62 KiB → 312 B |  13 → 8 | `invokeExact_MT(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                       |
|  -93.3% | -2.289 KiB |  20.1% → 1.3% |    2.45 KiB → 168 B |   9 → 3 | `addMetaMethodToIndex(MetaMethod, MetaMethodIndex$Header)`                                       | `groovy.lang.MetaClassImpl`                              |
|  -98.2% | -2.101 KiB |  17.5% → 0.3% |     2.14 KiB → 40 B |   9 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000d80138c000`      |
|  -32.1% | -2.039 KiB | 52.1% → 34.8% | 6.36 KiB → 4.32 KiB | 60 → 42 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                                | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
