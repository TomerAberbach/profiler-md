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
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000d8010b2800`   |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `allocateInstance(Class)`                                                                    | `jdk.internal.misc.Unsafe`                             |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                                  |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `matches(Method, String, Class[])`                                                           | `java.lang.PublicMethods$Key`                          |
|     new |    +3 |   0.0% → 0.8% |   0 → 3 | `cast(Object)`                                                                               | `java.lang.Class`                                      |
|  +50.0% |    +2 |   1.4% → 1.6% |   4 → 6 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  +66.7% |    +2 |   1.1% → 1.4% |   3 → 5 | `prepare()`                                                                                  | `java.lang.invoke.LambdaForm`                          |
|     new |    +2 |   0.0% → 0.5% |   0 → 2 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                           | `java.lang.invoke.MethodHandles`                       |
|  +25.0% |    +2 |   2.8% → 2.7% |  8 → 10 | `newInstance(Class, int)`                                                                    | `java.lang.reflect.Array`                              |
| +100.0% |    +2 |   0.7% → 1.1% |   2 → 4 | `invokeStatic(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`           |
|  +40.0% |    +2 |   1.8% → 1.9% |   5 → 7 | `resize()`                                                                                   | `java.util.HashMap`                                    |
|     new |    +2 |   0.0% → 0.5% |   0 → 2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                    | `java.lang.invoke.MethodHandleImpl`                    |

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
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.LambdaForm$MH.0x000000a00116d000`        |
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

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +338 | 0.0% → 91.4% | 0 → 338 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000d8010b2800` |
|    new |  +291 | 0.0% → 78.6% | 0 → 291 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801117800`  |
|    new |  +288 | 0.0% → 77.8% | 0 → 288 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000d801118400`  |
|    new |  +275 | 0.0% → 74.3% | 0 → 275 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801115400`  |
|    new |  +184 | 0.0% → 49.7% | 0 → 184 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000d801118000`  |
|    new |  +162 | 0.0% → 43.8% | 0 → 162 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bd400` |
|    new |  +154 | 0.0% → 41.6% | 0 → 154 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d80113fc00`  |
|    new |  +134 | 0.0% → 36.2% | 0 → 134 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bc800` |
|    new |  +131 | 0.0% → 35.4% | 0 → 131 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801140400`  |
|    new |  +130 | 0.0% → 35.1% | 0 → 130 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801141000`  |
|    new |  +123 | 0.0% → 33.2% | 0 → 123 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000d80118d400`  |
|    new |  +101 | 0.0% → 27.3% | 0 → 101 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d8013d3000`  |
|    new |  +101 | 0.0% → 27.3% | 0 → 101 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000d80138cc00` |
|    new |  +100 | 0.0% → 27.0% | 0 → 100 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000d801104000`  |
|    new |   +98 | 0.0% → 26.5% |  0 → 98 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bd000` |
|    new |   +96 | 0.0% → 25.9% |  0 → 96 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801102400`  |
|    new |   +95 | 0.0% → 25.7% |  0 → 95 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801119400`  |
|    new |   +94 | 0.0% → 25.4% |  0 → 94 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801140c00`  |
|    new |   +93 | 0.0% → 25.1% |  0 → 93 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d80118d000`  |
|    new |   +92 | 0.0% → 24.9% |  0 → 92 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801150800`  |

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

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -250 | 88.7% → 0.0% | 250 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a0010b2800` |
| removed |  -210 | 74.5% → 0.0% | 210 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001117800`  |
| removed |  -208 | 73.8% → 0.0% | 208 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001115400`  |
| removed |  -207 | 73.4% → 0.0% | 207 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a001118400`  |
| removed |  -140 | 49.6% → 0.0% | 140 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a001118000`  |
| removed |  -102 | 36.2% → 0.0% | 102 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bd400` |
| removed |   -98 | 34.8% → 0.0% |  98 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001141000`  |
| removed |   -95 | 33.7% → 0.0% |  95 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00113fc00`  |
| removed |   -92 | 32.6% → 0.0% |  92 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bc800` |
| removed |   -87 | 30.9% → 0.0% |  87 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001140400`  |
| removed |   -83 | 29.4% → 0.0% |  83 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a00118d400`  |
| removed |   -76 | 27.0% → 0.0% |  76 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bd000` |
| removed |   -75 | 26.6% → 0.0% |  75 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001102400`  |
| removed |   -72 | 25.5% → 0.0% |  72 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a001104000`  |
| removed |   -72 | 25.5% → 0.0% |  72 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000a001152800` |
| removed |   -72 | 25.5% → 0.0% |  72 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0013d3000`  |
| removed |   -70 | 24.8% → 0.0% |  70 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001119400`  |
| removed |   -70 | 24.8% → 0.0% |  70 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0012d8400`  |
| removed |   -68 | 24.1% → 0.0% |  68 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a00138cc00` |
| removed |   -66 | 23.4% → 0.0% |  66 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001150800`  |

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

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.246 GiB | 0.0% → 93.7% | 0 B → 11.2 GiB | 0 → 5,932 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000d8010b2800` |
|    new |  +7.535 GiB | 0.0% → 62.8% | 0 B → 7.54 GiB | 0 → 4,018 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801115400`  |
|    new |  +7.532 GiB | 0.0% → 62.8% | 0 B → 7.53 GiB | 0 → 3,997 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801117800`  |
|    new |  +7.456 GiB | 0.0% → 62.1% | 0 B → 7.46 GiB | 0 → 3,956 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000d801118400`  |
|    new |  +6.733 GiB | 0.0% → 56.1% | 0 B → 6.73 GiB | 0 → 3,471 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801140400`  |
|    new |  +6.672 GiB | 0.0% → 55.6% | 0 B → 6.67 GiB | 0 → 3,440 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000d80118d400`  |
|    new |  +5.796 GiB | 0.0% → 48.3% |  0 B → 5.8 GiB | 0 → 3,108 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000d801118000`  |
|    new |  +5.747 GiB | 0.0% → 47.9% | 0 B → 5.75 GiB | 0 → 3,010 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bc800` |
|    new |  +5.576 GiB | 0.0% → 46.5% | 0 B → 5.58 GiB | 0 → 2,886 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d80118d000`  |
|    new |  +5.239 GiB | 0.0% → 43.7% | 0 B → 5.24 GiB | 0 → 2,732 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000d8010bd400` |
|    new |  +5.126 GiB | 0.0% → 42.7% | 0 B → 5.13 GiB | 0 → 2,645 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801142000`  |
|    new |  +5.122 GiB | 0.0% → 42.7% | 0 B → 5.12 GiB | 0 → 2,640 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000d80138cc00` |
|    new |  +4.945 GiB | 0.0% → 41.2% | 0 B → 4.95 GiB | 0 → 2,568 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d80113fc00`  |
|    new |  +4.667 GiB | 0.0% → 38.9% | 0 B → 4.67 GiB | 0 → 2,404 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d80138d800`  |
|    new |   +4.66 GiB | 0.0% → 38.8% | 0 B → 4.66 GiB | 0 → 2,405 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d8012ac800`  |
|    new |  +3.818 GiB | 0.0% → 31.8% | 0 B → 3.82 GiB | 0 → 1,965 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d8013dcc00`  |
|    new |  +3.659 GiB | 0.0% → 30.5% | 0 B → 3.66 GiB | 0 → 1,883 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000d80118e800` |
|    new |  +3.409 GiB | 0.0% → 28.4% | 0 B → 3.41 GiB | 0 → 1,751 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000d801004000`  |
|    new |   +3.39 GiB | 0.0% → 28.2% | 0 B → 3.39 GiB | 0 → 1,814 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801119400`  |
|    new |  +3.388 GiB | 0.0% → 28.2% | 0 B → 3.39 GiB | 0 → 1,762 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d8013d3000`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.068 GiB | 94.0% → 0.0% | 11.1 GiB → 0 B | 5,809 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a0010b2800` |
| removed |  -7.673 GiB | 65.2% → 0.0% | 7.67 GiB → 0 B | 4,057 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001115400`  |
| removed |  -7.541 GiB | 64.1% → 0.0% | 7.54 GiB → 0 B | 3,994 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001117800`  |
| removed |  -7.476 GiB | 63.5% → 0.0% | 7.48 GiB → 0 B | 3,957 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a001118400`  |
| removed |  -6.485 GiB | 55.1% → 0.0% | 6.49 GiB → 0 B | 3,347 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001140400`  |
| removed |  -6.404 GiB | 54.4% → 0.0% |  6.4 GiB → 0 B | 3,303 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a00118d400`  |
| removed |  -5.946 GiB | 50.5% → 0.0% | 5.95 GiB → 0 B | 3,207 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a001118000`  |
| removed |  -5.429 GiB | 46.1% → 0.0% | 5.43 GiB → 0 B | 2,783 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bc800` |
| removed |  -5.359 GiB | 45.5% → 0.0% | 5.36 GiB → 0 B | 2,740 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bd400` |
| removed |  -5.353 GiB | 45.5% → 0.0% | 5.35 GiB → 0 B | 2,774 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a00118d000`  |
| removed |  -5.037 GiB | 42.8% → 0.0% | 5.04 GiB → 0 B | 2,566 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00113fc00`  |
| removed |   -4.88 GiB | 41.5% → 0.0% | 4.88 GiB → 0 B | 2,470 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a00138cc00` |
| removed |  -4.841 GiB | 41.1% → 0.0% | 4.84 GiB → 0 B | 2,494 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001142000`  |
| removed |  -4.417 GiB | 37.5% → 0.0% | 4.42 GiB → 0 B | 2,273 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00138d800`  |
| removed |  -4.411 GiB | 37.5% → 0.0% | 4.41 GiB → 0 B | 2,277 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0012ac800`  |
| removed |  -3.537 GiB | 30.0% → 0.0% | 3.54 GiB → 0 B | 1,811 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0013dcc00`  |
| removed |  -3.478 GiB | 29.5% → 0.0% | 3.48 GiB → 0 B | 1,814 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0013d3000`  |
| removed |  -3.463 GiB | 29.4% → 0.0% | 3.46 GiB → 0 B | 1,778 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000a00118e800` |
| removed |  -3.366 GiB | 28.6% → 0.0% | 3.37 GiB → 0 B | 1,817 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001119400`  |
| removed |  -3.202 GiB | 27.2% → 0.0% |  3.2 GiB → 0 B | 1,750 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001141000`  |

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

##### Standard library

| Change |       Delta |            % |           Size | Objects | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +10.546 KiB | 0.0% → 85.1% | 0 B → 10.5 KiB |  0 → 87 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000d8010b2800` |
|    new | +10.203 KiB | 0.0% → 82.3% | 0 B → 10.2 KiB |  0 → 82 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801117800`  |
|    new | +10.007 KiB | 0.0% → 80.7% |   0 B → 10 KiB |  0 → 78 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000d801118400`  |
|    new |  +9.898 KiB | 0.0% → 79.8% |  0 B → 9.9 KiB |  0 → 78 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801115400`  |
|    new |  +8.429 KiB | 0.0% → 68.0% | 0 B → 8.43 KiB |  0 → 51 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801141000`  |
|    new |  +7.156 KiB | 0.0% → 57.7% | 0 B → 7.16 KiB |  0 → 24 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801005400`  |
|    new |  +6.546 KiB | 0.0% → 52.8% | 0 B → 6.55 KiB |  0 → 52 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000d801118000`  |
|    new |  +5.437 KiB | 0.0% → 43.9% | 0 B → 5.44 KiB |  0 → 33 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801102400`  |
|    new |  +5.414 KiB | 0.0% → 43.7% | 0 B → 5.41 KiB |  0 → 32 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000d801104000`  |
|    new |  +4.859 KiB | 0.0% → 39.2% | 0 B → 4.86 KiB |  0 → 21 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000d801152800` |
|    new |  +4.859 KiB | 0.0% → 39.2% | 0 B → 4.86 KiB |  0 → 21 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d8012d8000`  |
|    new |  +4.851 KiB | 0.0% → 39.1% | 0 B → 4.85 KiB |  0 → 24 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801150800`  |
|    new |  +4.828 KiB | 0.0% → 38.9% | 0 B → 4.83 KiB |  0 → 19 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d8010bc000`  |
|    new |  +4.632 KiB | 0.0% → 37.4% | 0 B → 4.63 KiB |  0 → 16 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000d801101c00` |
|    new |  +4.562 KiB | 0.0% → 36.8% | 0 B → 4.56 KiB |  0 → 15 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000d8012c5c00`  |
|    new |    +4.5 KiB | 0.0% → 36.3% |  0 B → 4.5 KiB |  0 → 12 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000d801103c00`  |
|    new |  +4.437 KiB | 0.0% → 35.8% | 0 B → 4.44 KiB |  0 → 11 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801104c00`  |
|    new |  +4.265 KiB | 0.0% → 34.4% | 0 B → 4.27 KiB |  0 → 11 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000d801145c00`  |
|    new |  +3.929 KiB | 0.0% → 31.7% | 0 B → 3.93 KiB |   0 → 1 | `<clinit>()`                                                                                | `groovyjarjarantlr4.v4.runtime.misc.Interval`        |
|    new |  +3.929 KiB | 0.0% → 31.7% | 0 B → 3.93 KiB |   0 → 1 | `add(int, int)`                                                                             | `groovyjarjarantlr4.v4.runtime.misc.IntervalSet`     |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size | Objects | Function                                                                                    | Location                                                                   |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -10.671 KiB |  87.5% → 0.0% |      10.7 KiB → 0 B | 103 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a0010b2800`                       |
| removed | -10.085 KiB |  82.7% → 0.0% |      10.1 KiB → 0 B |  93 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001117800`                        |
| removed | -10.039 KiB |  82.3% → 0.0% |        10 KiB → 0 B |  92 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a001118400`                        |
| removed |  -8.468 KiB |  69.4% → 0.0% |      8.47 KiB → 0 B |  90 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001115400`                        |
| removed |  -8.125 KiB |  66.6% → 0.0% |      8.13 KiB → 0 B |  65 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a001118000`                        |
| removed |  -6.617 KiB |  54.2% → 0.0% |      6.62 KiB → 0 B |  64 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001141000`                        |
| removed |  -4.585 KiB |  37.6% → 0.0% |      4.59 KiB → 0 B |  34 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bd400`                       |
| removed |  -4.531 KiB |  37.1% → 0.0% |      4.53 KiB → 0 B |  32 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00113fc00`                        |
| removed |  -4.156 KiB |  34.1% → 0.0% |      4.16 KiB → 0 B |  29 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bd000`                       |
| removed |   -3.96 KiB |  32.5% → 0.0% |      3.96 KiB → 0 B |  38 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001102400`                        |
| removed |  -3.921 KiB |  32.1% → 0.0% |      3.92 KiB → 0 B |  25 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001140c00`                        |
| removed |  -3.828 KiB |  31.4% → 0.0% |      3.83 KiB → 0 B |  19 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001119400`                        |
| removed |  -3.812 KiB |  31.2% → 0.0% |      3.81 KiB → 0 B |  37 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a001104000`                        |
| removed |  -3.726 KiB |  30.5% → 0.0% |      3.73 KiB → 0 B |  20 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0013d3000`                        |
| removed |  -3.421 KiB |  28.0% → 0.0% |      3.42 KiB → 0 B |  23 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010bc000`                        |
| removed |  -3.273 KiB |  26.8% → 0.0% |      3.27 KiB → 0 B |  26 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001150800`                        |
|  -71.4% |  -2.984 KiB |  34.3% → 9.6% |  4.18 KiB → 1.2 KiB | 30 → 22 | `applyTo(SourceCode, List)`                                                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| removed |  -2.953 KiB |  24.2% → 0.0% |      2.95 KiB → 0 B |   8 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0013dd000`                        |
|  -71.4% |  -2.929 KiB |  33.6% → 9.5% |  4.1 KiB → 1.17 KiB | 28 → 21 | `doCall(Object)`                                                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -70.1% |  -2.914 KiB | 34.1% → 10.0% | 4.16 KiB → 1.24 KiB | 29 → 23 | `applyTo(SourceCode)`                                                                       | `org.codenarc.rule.AbstractRule`                                           |

##### Standard library

|  Change |       Delta |             % |                Size | Objects | Function                                                                                         | Location                                             |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| removed | -10.671 KiB |  87.5% → 0.0% |      10.7 KiB → 0 B | 103 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x000000a0010b2800` |
| removed | -10.085 KiB |  82.7% → 0.0% |      10.1 KiB → 0 B |  93 → 0 | `guardWithCatch(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a001117800`  |
| removed | -10.039 KiB |  82.3% → 0.0% |        10 KiB → 0 B |  92 → 0 | `guard(Object, Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a001118400`  |
| removed |  -8.468 KiB |  69.4% → 0.0% |      8.47 KiB → 0 B |  90 → 0 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a001115400`  |
| removed |  -8.125 KiB |  66.6% → 0.0% |      8.13 KiB → 0 B |  65 → 0 | `reinvoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000a001118000`  |
| removed |  -6.617 KiB |  54.2% → 0.0% |      6.62 KiB → 0 B |  64 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a001141000`  |
| removed |  -4.585 KiB |  37.6% → 0.0% |      4.59 KiB → 0 B |  34 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bd400` |
| removed |  -4.531 KiB |  37.1% → 0.0% |      4.53 KiB → 0 B |  32 → 0 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a00113fc00`  |
| removed |  -4.156 KiB |  34.1% → 0.0% |      4.16 KiB → 0 B |  29 → 0 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000a0010bd000` |
| removed |   -3.96 KiB |  32.5% → 0.0% |      3.96 KiB → 0 B |  38 → 0 | `guardWithCatch(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a001102400`  |
| removed |  -3.921 KiB |  32.1% → 0.0% |      3.92 KiB → 0 B |  25 → 0 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a001140c00`  |
| removed |  -3.828 KiB |  31.4% → 0.0% |      3.83 KiB → 0 B |  19 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a001119400`  |
| removed |  -3.812 KiB |  31.2% → 0.0% |      3.81 KiB → 0 B |  37 → 0 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a001104000`  |
| removed |  -3.726 KiB |  30.5% → 0.0% |      3.73 KiB → 0 B |  20 → 0 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a0013d3000`  |
| removed |  -3.421 KiB |  28.0% → 0.0% |      3.42 KiB → 0 B |  23 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a0010bc000`  |
| removed |  -3.273 KiB |  26.8% → 0.0% |      3.27 KiB → 0 B |  26 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a001150800`  |
| removed |  -2.953 KiB |  24.2% → 0.0% |      2.95 KiB → 0 B |   8 → 0 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a0013dd000`  |
|  -92.1% |  -2.828 KiB |  25.2% → 2.0% |    3.07 KiB → 248 B |  13 → 7 | `newInstance()`                                                                                  | `java.lang.Class`                                    |
|  -38.4% |  -2.703 KiB | 57.6% → 34.9% | 7.03 KiB → 4.33 KiB | 45 → 42 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| removed |  -2.648 KiB |  21.7% → 0.0% |      2.65 KiB → 0 B |  16 → 0 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a001145c00`  |
