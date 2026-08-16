# Sampling profile diff

Collected 367 samples → 311 samples (-56 samples, -15.3%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library | -14.5% |   -52 | 97.5% → 98.4% | 358 → 306 |
| Ours             | -44.4% |    -4 |   2.5% → 1.6% |     9 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|  +55.6% |    +5 | 2.5% → 4.5% |  9 → 14 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
| +300.0% |    +3 | 0.3% → 1.3% |   1 → 4 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)`                       | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`     |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `execute(int, int, Symbol, SymbolTable)`                                                                      | `jdk.internal.org.objectweb.asm.Frame`                    |
| +100.0% |    +3 | 0.8% → 1.9% |   3 → 6 | `<init>(Method, boolean)`                                                                                     | `java.lang.invoke.MemberName`                             |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `sync(int)`                                                                                                   | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`       |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `setGuards(Object)`                                                                                           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `checkCustomized(MethodHandle)`                                                                               | `java.lang.invoke.Invokers`                               |
| +100.0% |    +2 | 0.5% → 1.3% |   2 → 4 | `convertToTypeArray(Object[])`                                                                                | `org.codehaus.groovy.runtime.MetaClassHelper`             |
|  +66.7% |    +2 | 0.8% → 1.6% |   3 → 5 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`     |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `getMethodsRecursive(String, Class[], boolean)`                                                               | `java.lang.Class`                                         |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`     |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `atom()`                                                                                                      | `java.util.regex.Pattern`                                 |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `equals(MethodType)`                                                                                          | `java.lang.invoke.MethodType`                             |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `prepare()`                                                                                                   | `java.lang.invoke.LambdaForm`                             |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `allocateInstance(Class)`                                                                                     | `jdk.internal.misc.Unsafe`                                |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `profileBoolean(boolean, int[])`                                                                              | `java.lang.invoke.MethodHandleImpl`                       |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `apply(MethodHandle)`                                                                                         | `java.lang.invoke.MethodHandleImpl$Makers$1`              |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `bindArgumentForm(int)`                                                                                       | `java.lang.invoke.LambdaFormEditor`                       |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `pickClosureMethod(Class[])`                                                                                  | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`  |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `coerceArgumentsToClasses(Object[])`                                                                          | `org.codehaus.groovy.reflection.ParameterTypes`           |

##### Ours

| Change | Delta |           % | Samples | Function                                        | Location                                                          |
| -----: | ----: | ----------: | ------: | ----------------------------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractFieldVisitor`                          |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `$getStaticMetaClass()`                         | `org.gmetrics.result.NumberMetricResult`                          |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`   |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `handleMapExpression(MapEntryExpression)`       | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |             % | Samples | Function                                                                                         | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
|  -40.4% |   -21 | 14.2% → 10.0% | 52 → 31 | `newArray(Class, int)`                                                                           | `java.lang.reflect.Array`                                 |
|  -50.0% |    -6 |   3.3% → 1.9% |  12 → 6 | `getNode(Object)`                                                                                | `java.util.HashMap`                                       |
| removed |    -5 |   1.4% → 0.0% |   5 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x00000004010aa800`      |
|  -83.3% |    -5 |   1.6% → 0.3% |   6 → 1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
| removed |    -3 |   0.8% → 0.0% |   3 → 0 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x00000004010bc000`       |
| removed |    -3 |   0.8% → 0.0% |   3 → 0 | `doInvokeMethod(Class, Object, String, Object[], boolean, boolean)`                              | `groovy.lang.MetaClassImpl`                               |
|  -42.9% |    -3 |   1.9% → 1.3% |   7 → 4 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)`     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
| removed |    -3 |   0.8% → 0.0% |   3 → 0 | `correctParameterLength()`                                                                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |    -3 |   0.8% → 0.0% |   3 → 0 | `copyOf(Object[], int)`                                                                          | `java.util.Arrays`                                        |
|  -66.7% |    -2 |   0.8% → 0.3% |   3 → 1 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                    | `java.util.zip.Inflater`                                  |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `invokeExact_MT(Object, Object, Object)`                                                         | `java.lang.invoke.Invokers$Holder`                        |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `doMethodInvoke(Object, Object[])`                                                               | `groovy.lang.MetaMethod`                                  |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `resolve(MemberName, Class, int, boolean)`                                                       | `java.lang.invoke.MethodHandleNatives`                    |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `chooseMeta(MetaClassImpl)`                                                                      | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  -66.7% |    -2 |   0.8% → 0.3% |   3 → 1 | `binarySort(Object[], int, int, int, Comparator)`                                                | `java.util.TimSort`                                       |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `canConvert(Class, Class)`                                                                       | `java.lang.invoke.MethodType`                             |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `stat0(long, UnixFileAttributes)`                                                                | `sun.nio.fs.UnixNativeDispatcher`                         |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `checkPtypes(Class[])`                                                                           | `java.lang.invoke.MethodType`                             |
| removed |    -2 |   0.5% → 0.0% |   2 → 0 | `find(int, Object, Class)`                                                                       | `java.util.HashMap$TreeNode`                              |

##### Ours

|  Change | Delta |           % | Samples | Function                                             | Location                                                        |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `doCall(Object)`                                     | `org.codenarc.util.WildcardPattern$_closure1`                   |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitImports(ModuleNode)`                           | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Metric, MetricLevel, AbcVector, Integer)`    | `org.gmetrics.metric.abc.result.AbcMetricResult`                |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `handleExpressionContainingOperation(Expression)`    | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitMethod(MethodNode)`                            | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `isMethodCallOnObject(Expression, String)`           | `org.codenarc.util.AstUtil`                                     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `isOdd(int)`                                         | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `sourceLinesBetween(SourceCode, int, int, int, int)` | `org.codenarc.util.SourceCodeUtil`                              |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +268 | 0.0% → 86.2% | 0 → 268 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010aa800` |
|    new |  +230 | 0.0% → 74.0% | 0 → 230 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700110f800`  |
|    new |  +229 | 0.0% → 73.6% | 0 → 229 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001110400`  |
|    new |  +213 | 0.0% → 68.5% | 0 → 213 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000700110d400`  |
|    new |  +160 | 0.0% → 51.4% | 0 → 160 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001110000`  |
|    new |  +122 | 0.0% → 39.2% | 0 → 122 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010b5400` |
|    new |  +119 | 0.0% → 38.3% | 0 → 119 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001138800`  |
|    new |  +118 | 0.0% → 37.9% | 0 → 118 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001138000`  |
|    new |  +113 | 0.0% → 36.3% | 0 → 113 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x00000070011c9400`  |
|    new |  +101 | 0.0% → 32.5% | 0 → 101 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001139400`  |
|    new |   +94 | 0.0% → 30.2% |  0 → 94 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000070010b4800` |
|    new |   +94 | 0.0% → 30.2% |  0 → 94 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2000`  |
|    new |   +92 | 0.0% → 29.6% |  0 → 92 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001388800` |
|    new |   +91 | 0.0% → 29.3% |  0 → 91 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000070011c9000`  |
|    new |   +90 | 0.0% → 28.9% |  0 → 90 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001111400`  |
|    new |   +86 | 0.0% → 27.7% |  0 → 86 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001139000`  |
|    new |   +86 | 0.0% → 27.7% |  0 → 86 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`  |
|    new |   +80 | 0.0% → 25.7% |  0 → 80 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113a400`  |
|    new |   +74 | 0.0% → 23.8% |  0 → 74 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010b5000` |
|    new |   +74 | 0.0% → 23.8% |  0 → 74 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012b1c00`  |

##### Ours

|  Change | Delta |             % | Samples | Function                                                                | Location                                                                                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|  +10.1% |    +8 | 21.5% → 28.0% | 79 → 87 | `measureRuleProcessingTime(Rule, Closure)`                              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                                 |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `doCall(Object)`                                                        | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`                                 |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `getNumberOfViolationsWithPriority(int, boolean)`                       | `org.codenarc.results.FileResults`                                                                             |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `getNumberOfViolationsWithPriority(int)`                                | `org.codenarc.results.FileResults`                                                                             |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `isSpockMethod(MethodCallExpression)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                                    |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                                    |
| +100.0% |    +2 |   0.5% → 1.3% |   2 → 4 | `<init>(Reader)`                                                        | `org.codenarc.ruleset.XmlReaderRuleSet`                                                                        |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `doCall(Object)`                                                        | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                                                                |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                                                   |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitClassEx(ClassNode)`                                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                                                        |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                                                       |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitPropertyExpression(PropertyExpression)`                           | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                                          |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `checkType(String, ASTNode)`                                            | `org.codenarc.rule.ClassReferenceAstVisitor`                                                                   |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitVariableExpression(VariableExpression)`                           | `org.codenarc.rule.ClassReferenceAstVisitor`                                                                   |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`                 | `org.codenarc.rule.ClassReferenceAstVisitor`                                                                   |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `checkIfThereIsBlankLineAfterOpeningBrace(ClassNode)`                   | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                                              |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitClassComplete(ClassNode)`                                         | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                                              |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `doCall(Object)`                                                        | `org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6` |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`                                                  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -319 | 86.9% → 0.0% | 319 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000004010aa800` |
| removed |  -268 | 73.0% → 0.0% | 268 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040110f800`  |
| removed |  -267 | 72.8% → 0.0% | 267 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000401110400`  |
| removed |  -254 | 69.2% → 0.0% | 254 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000040110d400`  |
| removed |  -196 | 53.4% → 0.0% | 196 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000401110000`  |
| removed |  -153 | 41.7% → 0.0% | 153 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000004010b5400` |
| removed |  -145 | 39.5% → 0.0% | 145 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000401138000`  |
| removed |  -138 | 37.6% → 0.0% | 138 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000401139400`  |
| removed |  -128 | 34.9% → 0.0% | 128 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000401138800`  |
| removed |  -117 | 31.9% → 0.0% | 117 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x00000004011cd400`  |
| removed |  -114 | 31.1% → 0.0% | 114 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000004010b4800` |
| removed |  -104 | 28.3% → 0.0% | 104 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004013d0800`  |
| removed |  -103 | 28.1% → 0.0% | 103 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x00000004010b5000` |
| removed |   -96 | 26.2% → 0.0% |  96 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010ba400`  |
| removed |   -96 | 26.2% → 0.0% |  96 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x00000004010bc000`  |
| removed |   -94 | 25.6% → 0.0% |  94 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040113a400`  |
| removed |   -92 | 25.1% → 0.0% |  92 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000004011cd000`  |
| removed |   -89 | 24.3% → 0.0% |  89 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000401111400`  |
| removed |   -88 | 24.0% → 0.0% |  88 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000401139000`  |
| removed |   -88 | 24.0% → 0.0% |  88 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000401388000` |

##### Ours

|  Change | Delta |             % |  Samples | Function                                       | Location                                                                                     |
| ------: | ----: | ------------: | -------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -27.9% |   -29 | 28.3% → 24.1% | 104 → 75 | `applyTo(SourceCode)`                          | `org.codenarc.rule.AbstractRule`                                                             |
|  -34.1% |   -28 | 22.3% → 17.4% |  82 → 54 | `visitClass(ClassNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                                       |
|  -29.0% |   -27 | 25.3% → 21.2% |  93 → 66 | `applyTo(SourceCode, List)`                    | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|  -39.7% |   -27 | 18.5% → 13.2% |  68 → 41 | `visitMethod(MethodNode)`                      | `org.codenarc.rule.AbstractAstVisitor`                                                       |
|  -22.0% |   -18 | 22.3% → 20.6% |  82 → 64 | `init()`                                       | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -30.5% |   -18 | 16.1% → 13.2% |  59 → 41 | `getAst()`                                     | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -25.9% |   -14 | 14.7% → 12.9% |  54 → 40 | `init()`                                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|   -9.2% |   -10 | 29.7% → 31.8% | 109 → 99 | `doCall(Object)`                               | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                   |
|  -21.3% |   -10 | 12.8% → 11.9% |  47 → 37 | `isRuleSuppressed(Rule)`                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -31.6% |    -6 |   5.2% → 4.2% |  19 → 13 | `doCall(Object)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                  |
|  -62.5% |    -5 |   2.2% → 1.0% |    8 → 3 | `applyVisitor(AstVisitor, SourceCode)`         | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                             |
|  -83.3% |    -5 |   1.6% → 0.3% |    6 → 1 | `visitBlockStatement(BlockStatement)`          | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
|  -83.3% |    -5 |   1.6% → 0.3% |    6 → 1 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|  -83.3% |    -5 |   1.6% → 0.3% |    6 → 1 | `addViolationIfDuplicate(Expression)`          | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
| removed |    -4 |   1.1% → 0.0% |    4 → 0 | `doCall(Object)`                               | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`                           |
| removed |    -4 |   1.1% → 0.0% |    4 → 0 | `doCall(Object)`                               | `org.codenarc.util.WildcardPattern$_closure1`                                                |
| removed |    -4 |   1.1% → 0.0% |    4 → 0 | `<init>(String, boolean)`                      | `org.codenarc.util.WildcardPattern`                                                          |
|  -80.0% |    -4 |   1.4% → 0.3% |    5 → 1 | `doCall(Object)`                               | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|  -66.7% |    -4 |   1.6% → 0.6% |    6 → 2 | `checkDeclaration(ASTNode, String, String)`    | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                          |
|   -6.8% |    -4 | 16.1% → 17.7% |  59 → 55 | `collectViolations(SourceCode, RuleSet)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |

# Allocated heap profile diff

Allocated 11.9 GiB → 11.8 GiB (-141.696 MiB, -1.2%) over 6,323 samples → 6,315 samples (1.93 MiB → 1.91 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.1% | -132.669 MiB | 99.1% → 99.2% | 11.8 GiB → 11.7 GiB | 6,223 → 6,219 |
| Ours             |  -8.5% |   -9.026 MiB |   0.9% → 0.8% |  106 MiB → 97.2 MiB |       53 → 50 |
| Unknown          |  -1.3% |       -464 B |         <0.1% |   34.4 KiB → 34 KiB |       47 → 46 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |           % |                Size |   Samples | Function                                                                                      | Location                                                   |
| ------: | ----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +20.4% | +99.507 MiB | 4.0% → 4.9% |   488 MiB → 588 MiB | 261 → 306 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                      |
|  +25.4% | +85.733 MiB | 2.8% → 3.5% |   338 MiB → 424 MiB | 167 → 210 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                  |
| +782.5% | +48.785 MiB | 0.1% → 0.5% |   6.23 MiB → 55 MiB |    7 → 34 | `copy()`                                                                                      | `java.lang.reflect.Method`                                 |
|  +16.0% | +39.025 MiB | 2.0% → 2.3% |   244 MiB → 283 MiB | 124 → 146 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                         |
| +171.9% | +29.657 MiB | 0.1% → 0.4% | 17.3 MiB → 46.9 MiB |    9 → 24 | `methodType(Class, Class)`                                                                    | `java.lang.invoke.MethodType`                              |
| +110.9% | +28.379 MiB | 0.2% → 0.4% |   25.6 MiB → 54 MiB |   14 → 19 | `<init>(Reader, int)`                                                                         | `java.io.BufferedReader`                                   |
|  +19.4% | +28.102 MiB | 1.2% → 1.4% |   144 MiB → 173 MiB |   74 → 88 | `valueOf(long)`                                                                               | `java.lang.Long`                                           |
|  +61.6% | +24.816 MiB | 0.3% → 0.5% | 40.3 MiB → 65.1 MiB |   20 → 33 | `createEntryListArray(int)`                                                                   | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`       |
|  +29.4% | +24.249 MiB | 0.7% → 0.9% |  82.6 MiB → 107 MiB |   40 → 55 | `listIterator(int)`                                                                           | `java.util.LinkedList`                                     |
|  +26.7% | +23.178 MiB | 0.7% → 0.9% |  86.9 MiB → 110 MiB |   44 → 51 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`                        |
|  +55.9% | +22.364 MiB | 0.3% → 0.5% |   40 MiB → 62.3 MiB |   20 → 31 | `RemoveQEQuoting()`                                                                           | `java.util.regex.Pattern`                                  |
|  +35.9% | +20.676 MiB | 0.5% → 0.6% | 57.6 MiB → 78.3 MiB |   31 → 39 | `copyOf(Object[], int)`                                                                       | `java.util.Arrays`                                         |
|  +25.2% | +20.674 MiB | 0.7% → 0.9% |    82 MiB → 103 MiB |   39 → 51 | `<init>(Pattern, CharSequence)`                                                               | `java.util.regex.Matcher`                                  |
|  +14.0% | +19.263 MiB | 1.1% → 1.3% |   138 MiB → 157 MiB |   69 → 77 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                              |
|   +6.9% | +19.242 MiB | 2.3% → 2.5% |   278 MiB → 297 MiB | 140 → 149 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                                  |
|  +29.9% | +18.931 MiB | 0.5% → 0.7% | 63.3 MiB → 82.2 MiB |   31 → 41 | `make(byte, Class, MemberName, Class)`                                                        | `java.lang.invoke.DirectMethodHandle`                      |
|  +37.4% | +18.706 MiB | 0.4% → 0.6% |   50 MiB → 68.7 MiB |   25 → 34 | `newSlice(int[], int, boolean)`                                                               | `java.util.regex.Pattern`                                  |
| +182.8% | +18.632 MiB | 0.1% → 0.2% | 10.2 MiB → 28.8 MiB |    6 → 16 | `getPlainNodeReference(boolean)`                                                              | `org.codehaus.groovy.ast.ClassNode`                        |
|   +2.9% | +18.568 MiB | 5.3% → 5.5% |   643 MiB → 662 MiB | 311 → 313 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
| +225.0% | +17.988 MiB | 0.1% → 0.2% |      8 MiB → 26 MiB |     4 → 9 | `equals(ArrayPredictionContext, Set)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |            % |                Size |   Samples | Function                                                                                | Location                                              |
| -----: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| -70.4% | -182.658 MiB |  2.1% → 0.6% |  260 MiB → 76.9 MiB |  130 → 41 | `make(MethodType, LambdaForm, Object)`                                                  | `java.lang.invoke.BoundMethodHandle$Species_L`        |
|  -8.6% |  -75.707 MiB |  7.2% → 6.7% |   879 MiB → 803 MiB | 415 → 352 | `makeImpl(Class, Class[], boolean)`                                                     | `java.lang.invoke.MethodType`                         |
| -17.5% |  -56.921 MiB |  2.7% → 2.2% |   325 MiB → 268 MiB | 127 → 140 | `of(byte, int, int)`                                                                    | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -17.4% |  -35.381 MiB |  1.7% → 1.4% |   204 MiB → 168 MiB |  103 → 85 | `compile()`                                                                             | `java.util.regex.Pattern`                             |
| -14.3% |  -35.098 MiB |  2.0% → 1.7% |   245 MiB → 210 MiB | 128 → 108 | `newNode(int, Object, Object, HashMap$Node)`                                            | `java.util.HashMap`                                   |
| -49.8% |  -34.701 MiB |  0.6% → 0.3% |   69.7 MiB → 35 MiB |   38 → 19 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                            | `java.math.MutableBigInteger`                         |
| -12.2% |  -33.299 MiB |  2.2% → 2.0% |   273 MiB → 240 MiB | 136 → 122 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |
| -10.2% |  -33.206 MiB |  2.7% → 2.4% |   325 MiB → 292 MiB | 166 → 141 | `lambdaFormEditor(LambdaForm)`                                                          | `java.lang.invoke.LambdaFormEditor`                   |
| -45.8% |  -31.652 MiB |  0.6% → 0.3% |   69 MiB → 37.4 MiB |   35 → 19 | `divideOneWord(int, MutableBigInteger)`                                                 | `java.math.MutableBigInteger`                         |
| -15.9% |  -30.468 MiB |  1.6% → 1.3% |   191 MiB → 161 MiB |   99 → 82 | `spliterator(Object[], int, int, int)`                                                  | `java.util.Spliterators`                              |
| -14.8% |  -23.451 MiB |  1.3% → 1.1% |   159 MiB → 135 MiB |   84 → 73 | `resize()`                                                                              | `java.util.HashMap`                                   |
| -15.4% |  -22.817 MiB |  1.2% → 1.0% |   149 MiB → 126 MiB |   76 → 65 | `of(byte, int)`                                                                         | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -84.6% |  -21.989 MiB | 0.2% → <0.1% |      26 MiB → 4 MiB |    13 → 2 | `valueOf(int)`                                                                          | `java.lang.Integer`                                   |
| -37.9% |  -20.153 MiB |  0.4% → 0.3% | 53.2 MiB → 33.1 MiB |   27 → 17 | `<init>(MethodHandle, MethodHandle, boolean)`                                           | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |
| -52.6% |   -19.99 MiB |  0.3% → 0.1% |     38 MiB → 18 MiB |    19 → 9 | `linkLast(Object)`                                                                      | `java.util.LinkedList`                                |
| -62.4% |  -17.452 MiB |  0.2% → 0.1% |   28 MiB → 10.5 MiB |    13 → 6 | `removeRealReceiver(Object[])`                                                          | `org.codehaus.groovy.vmplugin.v8.Selector`            |
| -44.4% |  -15.989 MiB |  0.3% → 0.2% |     36 MiB → 20 MiB |   18 → 10 | `of(byte, int, int, int[])`                                                             | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -18.0% |  -13.219 MiB |  0.6% → 0.5% | 73.3 MiB → 60.1 MiB |   38 → 31 | `convertToTypeArray(Object[])`                                                          | `org.codehaus.groovy.runtime.MetaClassHelper`         |
|  -3.6% |  -13.197 MiB |  3.0% → 2.9% |   362 MiB → 349 MiB | 181 → 179 | `make(MethodType, LambdaForm, Object, Object)`                                          | `java.lang.invoke.BoundMethodHandle$Species_LL`       |
| -22.9% |  -13.167 MiB |  0.5% → 0.4% | 57.6 MiB → 44.4 MiB |   30 → 22 | `asSpreader(int, Class, int)`                                                           | `java.lang.invoke.MethodHandle`                       |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.082 GiB | 0.0% → 94.1% | 0 B → 11.1 GiB | 0 → 5,860 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010aa800` |
|    new |  +7.597 GiB | 0.0% → 64.5% |  0 B → 7.6 GiB | 0 → 4,023 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000700110d400`  |
|    new |  +7.561 GiB | 0.0% → 64.2% | 0 B → 7.56 GiB | 0 → 4,006 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700110f800`  |
|    new |  +7.479 GiB | 0.0% → 63.5% | 0 B → 7.48 GiB | 0 → 3,960 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001110400`  |
|    new |  +6.561 GiB | 0.0% → 55.7% | 0 B → 6.56 GiB | 0 → 3,404 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001138800`  |
|    new |  +6.485 GiB | 0.0% → 55.1% | 0 B → 6.49 GiB | 0 → 3,366 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x00000070011c9400`  |
|    new |   +5.84 GiB | 0.0% → 49.6% | 0 B → 5.84 GiB | 0 → 3,179 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001110000`  |
|    new |  +5.436 GiB | 0.0% → 46.2% | 0 B → 5.44 GiB | 0 → 2,804 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000070010b4800` |
|    new |  +5.334 GiB | 0.0% → 45.3% | 0 B → 5.33 GiB | 0 → 2,803 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000070011c9000`  |
|    new |  +5.281 GiB | 0.0% → 44.9% | 0 B → 5.28 GiB | 0 → 2,734 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010b5400` |
|    new |   +4.98 GiB | 0.0% → 42.3% | 0 B → 4.98 GiB | 0 → 2,560 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001138000`  |
|    new |  +4.956 GiB | 0.0% → 42.1% | 0 B → 4.96 GiB | 0 → 2,568 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113a400`  |
|    new |  +4.903 GiB | 0.0% → 41.7% |  0 B → 4.9 GiB | 0 → 2,481 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001388800` |
|    new |  +4.446 GiB | 0.0% → 37.8% | 0 B → 4.45 GiB | 0 → 2,322 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012b1c00`  |
|    new |  +4.418 GiB | 0.0% → 37.5% | 0 B → 4.42 GiB | 0 → 2,295 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`  |
|    new |  +3.518 GiB | 0.0% → 29.9% | 0 B → 3.52 GiB | 0 → 1,831 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070013d9c00`  |
|    new |  +3.457 GiB | 0.0% → 29.4% | 0 B → 3.46 GiB | 0 → 1,809 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x00000070011ca800` |
|    new |  +3.423 GiB | 0.0% → 29.1% | 0 B → 3.42 GiB | 0 → 1,846 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001111400`  |
|    new |  +3.341 GiB | 0.0% → 28.4% | 0 B → 3.34 GiB | 0 → 1,758 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2000`  |
|    new |  +3.192 GiB | 0.0% → 27.1% | 0 B → 3.19 GiB | 0 → 1,776 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001139400`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.187 GiB | 93.9% → 0.0% | 11.2 GiB → 0 B | 5,858 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000004010aa800` |
| removed |  -7.633 GiB | 64.1% → 0.0% | 7.63 GiB → 0 B | 4,042 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000040110d400`  |
| removed |  -7.573 GiB | 63.6% → 0.0% | 7.57 GiB → 0 B | 3,975 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040110f800`  |
| removed |  -7.398 GiB | 62.1% → 0.0% |  7.4 GiB → 0 B | 3,923 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000401110400`  |
| removed |  -6.609 GiB | 55.5% → 0.0% | 6.61 GiB → 0 B | 3,416 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000401138800`  |
| removed |  -6.522 GiB | 54.8% → 0.0% | 6.52 GiB → 0 B | 3,372 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x00000004011cd400`  |
| removed |  -5.958 GiB | 50.0% → 0.0% | 5.96 GiB → 0 B | 3,196 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000401110000`  |
| removed |  -5.482 GiB | 46.0% → 0.0% | 5.48 GiB → 0 B | 2,850 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000004011cd000`  |
| removed |   -5.47 GiB | 45.9% → 0.0% | 5.47 GiB → 0 B | 2,816 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000004010b4800` |
| removed |  -5.327 GiB | 44.7% → 0.0% | 5.33 GiB → 0 B | 2,728 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000004010b5400` |
| removed |  -5.047 GiB | 42.4% → 0.0% | 5.05 GiB → 0 B | 2,604 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040113a400`  |
| removed |  -4.991 GiB | 41.9% → 0.0% | 4.99 GiB → 0 B | 2,551 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000401138000`  |
| removed |  -4.884 GiB | 41.0% → 0.0% | 4.88 GiB → 0 B | 2,523 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000401388000` |
| removed |  -4.553 GiB | 38.2% → 0.0% | 4.55 GiB → 0 B | 2,357 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004012b1400`  |
| removed |  -4.527 GiB | 38.0% → 0.0% | 4.53 GiB → 0 B | 2,342 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004012ac800`  |
| removed |   -3.65 GiB | 30.6% → 0.0% | 3.65 GiB → 0 B | 1,953 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000401111400`  |
| removed |  -3.644 GiB | 30.6% → 0.0% | 3.64 GiB → 0 B | 1,878 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004013d8c00`  |
| removed |   -3.62 GiB | 30.4% → 0.0% | 3.62 GiB → 0 B | 1,866 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x00000004011ce800` |
| removed |  -3.434 GiB | 28.8% → 0.0% | 3.43 GiB → 0 B | 1,793 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004013d0800`  |
| removed |  -3.432 GiB | 28.8% → 0.0% | 3.43 GiB → 0 B | 1,709 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000000401003800`  |

# Retained heap profile diff

Retained 267 KiB → 82.3 KiB (-184.742 KiB, -69.2%) over 118 objects → 111 objects (2.26 KiB → 759 B per object).

| Category         |  Change |        Delta |            % |               Size |   Objects |
| ---------------- | ------: | -----------: | -----------: | -----------------: | --------: |
| Standard library |  -69.2% | -184.679 KiB |       100.0% | 267 KiB → 82.3 KiB | 116 → 111 |
| Ours             | removed |        -64 B | <0.1% → 0.0% |         64 B → 0 B |     2 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |                Size | Objects | Function                                                                                             | Location                                                |
| ------: | ---------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +132.5% | +4.015 KiB |  1.1% → 8.6% | 3.03 KiB → 7.05 KiB |   2 → 3 | `resize(int)`                                                                                        | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  +50.0% |     +352 B |  0.3% → 1.3% |    704 B → 1.03 KiB |   4 → 2 | `resize()`                                                                                           | `java.util.HashMap`                                     |
|     new |     +144 B |  0.0% → 0.2% |         0 B → 144 B |   0 → 1 | `<init>(HashEdgeMap, int)`                                                                           | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap`         |
|     new |     +128 B |  0.0% → 0.2% |         0 B → 128 B |   0 → 2 | `newReflectionData(SoftReference, int)`                                                              | `java.lang.Class`                                       |
|  +83.3% |     +120 B |  0.1% → 0.3% |       144 B → 264 B |   2 → 3 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                 |
| +200.0% |     +112 B | <0.1% → 0.2% |        56 B → 168 B |   1 → 3 | `grow(int)`                                                                                          | `java.util.ArrayList`                                   |
|     new |      +96 B |  0.0% → 0.1% |          0 B → 96 B |   0 → 2 | `makeBlockInliningWrapper(MethodHandle)`                                                             | `java.lang.invoke.MethodHandleImpl`                     |
| +100.0% |      +96 B | <0.1% → 0.2% |        96 B → 192 B |   2 → 4 | `create(Tuple2, int, String, int, int, int, int, int)`                                               | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`      |
|     new |      +96 B |  0.0% → 0.1% |          0 B → 96 B |   0 → 2 | `clone()`                                                                                            | `java.lang.Object`                                      |
| +100.0% |      +88 B | <0.1% → 0.2% |        88 B → 176 B |   1 → 2 | `copy()`                                                                                             | `java.lang.reflect.Method`                              |
|  +28.6% |      +80 B |  0.1% → 0.4% |       280 B → 360 B |   7 → 9 | `newNode(int, Object, Object, HashMap$Node)`                                                         | `java.util.LinkedHashMap`                               |
| +250.0% |      +80 B | <0.1% → 0.1% |        32 B → 112 B |   1 → 4 | `copy()`                                                                                             | `org.codehaus.groovy.util.FastArray`                    |
|     new |      +72 B |  0.0% → 0.1% |          0 B → 72 B |   0 → 1 | `mergePropertyDescriptor(PropertyDescriptor, PropertyDescriptor)`                                    | `java.beans.Introspector`                               |
|     new |      +72 B |  0.0% → 0.1% |          0 B → 72 B |   0 → 1 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                      | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |      +72 B |  0.0% → 0.1% |          0 B → 72 B |   0 → 1 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`   |
|     new |      +64 B |  0.0% → 0.1% |          0 B → 64 B |   0 → 1 | `<init>(Class, MetaMethod[])`                                                                        | `groovy.lang.MetaClassImpl`                             |
| +200.0% |      +64 B | <0.1% → 0.1% |         32 B → 96 B |   1 → 3 | `putNodeMetaData(Object, Object)`                                                                    | `org.codehaus.groovy.ast.NodeMetaDataHandler`           |
| +100.0% |      +56 B | <0.1% → 0.1% |        56 B → 112 B |   1 → 2 | `addMethod(MethodDescriptor)`                                                                        | `java.beans.Introspector`                               |
|     new |      +56 B |  0.0% → 0.1% |          0 B → 56 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                               | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`      |
|     new |      +56 B |  0.0% → 0.1% |          0 B → 56 B |   0 → 1 | `visitElementValueArrayInitializer(GroovyParser$ElementValueArrayInitializerContext)`                | `org.apache.groovy.parser.antlr4.AstBuilder`            |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |             % |               Size | Objects | Function                                                                                                    | Location                                                |
| ------: | -----------: | ------------: | -----------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -73.2% | -187.468 KiB | 95.9% → 83.3% | 256 KiB → 68.5 KiB |   1 → 3 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                              | `java.util.concurrent.ConcurrentHashMap`                |
|  -63.6% |       -824 B |   0.5% → 0.6% |   1.27 KiB → 472 B |  10 → 5 | `copyOfRangeByte(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
| removed |       -304 B |   0.1% → 0.0% |        304 B → 0 B |   2 → 0 | `toArray()`                                                                                                 | `java.lang.PublicMethods`                               |
| removed |       -272 B |   0.1% → 0.0% |        272 B → 0 B |   1 → 0 | `initTable()`                                                                                               | `java.util.concurrent.ConcurrentHashMap`                |
|  -38.1% |       -256 B |   0.2% → 0.5% |      672 B → 416 B |   2 → 1 | `copyOf(Object[], int)`                                                                                     | `java.util.Arrays`                                      |
| removed |       -160 B |   0.1% → 0.0% |        160 B → 0 B |   2 → 0 | `decompress(ByteBuffer, int)`                                                                               | `jdk.internal.jimage.ImageLocation`                     |
|  -25.0% |       -152 B |   0.2% → 0.5% |      608 B → 456 B |   4 → 3 | `getPlainNodeReference(boolean)`                                                                            | `org.codehaus.groovy.ast.ClassNode`                     |
| removed |       -144 B |   0.1% → 0.0% |        144 B → 0 B |   3 → 0 | `<init>(Class, ClassInfo)`                                                                                  | `org.codehaus.groovy.reflection.CachedClass`            |
| removed |       -144 B |   0.1% → 0.0% |        144 B → 0 B |   2 → 0 | `getDeclaredFields0(boolean)`                                                                               | `java.lang.Class`                                       |
| removed |       -128 B |  <0.1% → 0.0% |        128 B → 0 B |   2 → 0 | `lambda$initValue$2(Method)`                                                                                | `org.codehaus.groovy.reflection.CachedClass$3`          |
|  -82.4% |       -112 B |         <0.1% |       136 B → 24 B |   3 → 1 | `compress(char[], int, int)`                                                                                | `java.lang.StringUTF16`                                 |
| removed |       -112 B |  <0.1% → 0.0% |        112 B → 0 B |   3 → 0 | `set(Method)`                                                                                               | `java.beans.MethodRef`                                  |
| removed |       -112 B |  <0.1% → 0.0% |        112 B → 0 B |   2 → 0 | `getTargetMethodInfo()`                                                                                     | `java.beans.Introspector`                               |
| removed |        -96 B |  <0.1% → 0.0% |         96 B → 0 B |   2 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                              | `java.lang.invoke.BoundMethodHandle$Species_LLLL`       |
|  -60.0% |        -96 B |          0.1% |       160 B → 64 B |   5 → 2 | `<init>(int)`                                                                                               | `org.codehaus.groovy.util.ListHashMap`                  |
| removed |        -72 B |  <0.1% → 0.0% |         72 B → 0 B |   1 → 0 | `copy()`                                                                                                    | `java.lang.reflect.Field`                               |
| removed |        -72 B |  <0.1% → 0.0% |         72 B → 0 B |   1 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL` |
| removed |        -64 B |  <0.1% → 0.0% |         64 B → 0 B |   1 → 0 | `lambda$applyStrayPropertyMethods$20(CachedClass)`                                                          | `groovy.lang.MetaClassImpl`                             |
| removed |        -64 B |  <0.1% → 0.0% |         64 B → 0 B |   1 → 0 | `<init>(int, float)`                                                                                        | `java.util.Hashtable`                                   |
| removed |        -64 B |  <0.1% → 0.0% |         64 B → 0 B |   1 → 0 | `lambda$inheritFields$19(CachedClass)`                                                                      | `groovy.lang.MetaClassImpl`                             |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |       Delta |             % |                Size | Objects | Function                                                                                    | Location                                                                   |
| --------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|       new | +77.132 KiB |  0.0% → 93.7% |      0 B → 77.1 KiB |  0 → 88 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010aa800`                       |
|       new | +76.875 KiB |  0.0% → 93.4% |      0 B → 76.9 KiB |  0 → 83 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700110f800`                        |
|       new | +76.828 KiB |  0.0% → 93.4% |      0 B → 76.8 KiB |  0 → 81 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001110400`                        |
|       new | +76.765 KiB |  0.0% → 93.3% |      0 B → 76.8 KiB |  0 → 81 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000700110d400`                        |
|       new | +75.007 KiB |  0.0% → 91.2% |        0 B → 75 KiB |  0 → 52 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001139400`                        |
|       new | +73.617 KiB |  0.0% → 89.5% |      0 B → 73.6 KiB |  0 → 54 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001110000`                        |
|       new | +71.515 KiB |  0.0% → 86.9% |      0 B → 71.5 KiB |  0 → 23 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010b5000`                       |
|       new | +71.148 KiB |  0.0% → 86.5% |      0 B → 71.1 KiB |  0 → 15 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2000`                        |
|  +2042.5% | +67.976 KiB |  1.2% → 86.7% | 3.33 KiB → 71.3 KiB | 16 → 19 | `doCall(Object)`                                                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  +1880.5% | +67.875 KiB |  1.4% → 86.9% | 3.61 KiB → 71.5 KiB | 20 → 22 | `applyTo(SourceCode)`                                                                       | `org.codenarc.rule.AbstractRule`                                           |
|  +1856.9% | +67.601 KiB |  1.4% → 86.6% | 3.64 KiB → 71.2 KiB | 21 → 19 | `applyTo(SourceCode, List)`                                                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|   +966.6% | +67.281 KiB |  2.6% → 90.2% | 6.96 KiB → 74.2 KiB | 53 → 50 | `invokeExact_MT(Object, Object, Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                                         |
|   +930.4% | +67.164 KiB |  2.7% → 90.4% | 7.22 KiB → 74.4 KiB | 56 → 55 | `invoke(Object, Object[])`                                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`                          |
|   +940.0% | +67.125 KiB |  2.7% → 90.2% | 7.14 KiB → 74.3 KiB | 54 → 50 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`                               |
|   +915.0% | +67.054 KiB |  2.7% → 90.4% | 7.33 KiB → 74.4 KiB | 57 → 55 | `invokeImpl(Object, Object[])`                                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`                          |
|   +953.1% |  +66.64 KiB |  2.6% → 89.5% | 6.99 KiB → 73.6 KiB | 52 → 50 | `doMethodInvoke(Object, Object[])`                                                          | `groovy.lang.MetaMethod`                                                   |
|   +943.7% | +66.578 KiB |  2.6% → 89.5% | 7.05 KiB → 73.6 KiB | 53 → 50 | `invoke(Object, Object[])`                                                                  | `org.codehaus.groovy.reflection.CachedMethod`                              |
|   +925.0% | +66.554 KiB |  2.7% → 89.6% |  7.2 KiB → 73.8 KiB | 55 → 53 | `invoke(Object, Object[])`                                                                  | `java.lang.reflect.Method`                                                 |
| +75500.0% | +64.882 KiB | <0.1% → 79.0% |       88 B → 65 KiB |   2 → 9 | `visitConstructorOrMethod(MethodNode, boolean)`                                             | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| +55340.0% | +64.851 KiB | <0.1% → 79.0% |      120 B → 65 KiB |   3 → 9 | `visit(GroovyCodeVisitor)`                                                                  | `org.codehaus.groovy.ast.stmt.BlockStatement`                              |

##### Standard library

|    Change |       Delta |             % |                Size | Objects | Function                                                                                    | Location                                             |
| --------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|       new | +77.132 KiB |  0.0% → 93.7% |      0 B → 77.1 KiB |  0 → 88 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010aa800` |
|       new | +76.875 KiB |  0.0% → 93.4% |      0 B → 76.9 KiB |  0 → 83 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700110f800`  |
|       new | +76.828 KiB |  0.0% → 93.4% |      0 B → 76.8 KiB |  0 → 81 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001110400`  |
|       new | +76.765 KiB |  0.0% → 93.3% |      0 B → 76.8 KiB |  0 → 81 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000700110d400`  |
|       new | +75.007 KiB |  0.0% → 91.2% |        0 B → 75 KiB |  0 → 52 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001139400`  |
|       new | +73.617 KiB |  0.0% → 89.5% |      0 B → 73.6 KiB |  0 → 54 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001110000`  |
|       new | +71.515 KiB |  0.0% → 86.9% |      0 B → 71.5 KiB |  0 → 23 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010b5000` |
|       new | +71.148 KiB |  0.0% → 86.5% |      0 B → 71.1 KiB |  0 → 15 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2000`  |
|   +966.6% | +67.281 KiB |  2.6% → 90.2% | 6.96 KiB → 74.2 KiB | 53 → 50 | `invokeExact_MT(Object, Object, Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                   |
|   +930.4% | +67.164 KiB |  2.7% → 90.4% | 7.22 KiB → 74.4 KiB | 56 → 55 | `invoke(Object, Object[])`                                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +940.0% | +67.125 KiB |  2.7% → 90.2% | 7.14 KiB → 74.3 KiB | 54 → 50 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   +915.0% | +67.054 KiB |  2.7% → 90.4% | 7.33 KiB → 74.4 KiB | 57 → 55 | `invokeImpl(Object, Object[])`                                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +953.1% |  +66.64 KiB |  2.6% → 89.5% | 6.99 KiB → 73.6 KiB | 52 → 50 | `doMethodInvoke(Object, Object[])`                                                          | `groovy.lang.MetaMethod`                             |
|   +943.7% | +66.578 KiB |  2.6% → 89.5% | 7.05 KiB → 73.6 KiB | 53 → 50 | `invoke(Object, Object[])`                                                                  | `org.codehaus.groovy.reflection.CachedMethod`        |
|   +925.0% | +66.554 KiB |  2.7% → 89.6% |  7.2 KiB → 73.8 KiB | 55 → 53 | `invoke(Object, Object[])`                                                                  | `java.lang.reflect.Method`                           |
| +75500.0% | +64.882 KiB | <0.1% → 79.0% |       88 B → 65 KiB |   2 → 9 | `visitConstructorOrMethod(MethodNode, boolean)`                                             | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`    |
| +55340.0% | +64.851 KiB | <0.1% → 79.0% |      120 B → 65 KiB |   3 → 9 | `visit(GroovyCodeVisitor)`                                                                  | `org.codehaus.groovy.ast.stmt.BlockStatement`        |
| +55340.0% | +64.851 KiB | <0.1% → 79.0% |      120 B → 65 KiB |   3 → 9 | `visitClassCodeContainer(Statement)`                                                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`    |
| +55320.0% | +64.828 KiB | <0.1% → 78.9% |    120 B → 64.9 KiB |   3 → 8 | `visitBlockStatement(BlockStatement)`                                                       | `org.codehaus.groovy.ast.CodeVisitorSupport`         |
| +55320.0% | +64.828 KiB | <0.1% → 78.9% |    120 B → 64.9 KiB |   3 → 8 | `visitBlockStatement(BlockStatement)`                                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`    |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |        Delta |            % |               Size | Objects | Function                                                                                     | Location                                               |
| ------: | -----------: | -----------: | -----------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed | -266.039 KiB | 99.6% → 0.0% |      266 KiB → 0 B | 103 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x00000004010aa800`   |
| removed | -265.562 KiB | 99.4% → 0.0% |      266 KiB → 0 B |  94 → 0 | `guardWithCatch(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000040110f800`    |
| removed | -265.507 KiB | 99.4% → 0.0% |      266 KiB → 0 B |  93 → 0 | `guard(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000401110400`    |
| removed |  -265.39 KiB | 99.4% → 0.0% |      265 KiB → 0 B |  91 → 0 | `invoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000040110d400`    |
| removed |  -263.32 KiB | 98.6% → 0.0% |      263 KiB → 0 B |  62 → 0 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000401139400`    |
| removed | -257.796 KiB | 96.5% → 0.0% |      258 KiB → 0 B |  34 → 0 | `guardWithCatch(Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000004010ba400`    |
| removed | -256.789 KiB | 96.2% → 0.0% |      257 KiB → 0 B |  20 → 0 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000401149400`    |
| removed |  -256.71 KiB | 96.1% → 0.0% |      257 KiB → 0 B |  18 → 0 | `invokeVirtual(Object, Object, int)`                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000040114b400`   |
| removed |  -256.71 KiB | 96.1% → 0.0% |      257 KiB → 0 B |  18 → 0 | `invoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000004012d4c00`    |
| removed | -256.015 KiB | 95.9% → 0.0% |      256 KiB → 0 B |   1 → 0 | `ifElseStatement()`                                                                          | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| removed | -256.015 KiB | 95.9% → 0.0% |      256 KiB → 0 B |   1 → 0 | `conditionalStatement()`                                                                     | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -98.6% |  -255.64 KiB | 97.1% → 4.4% | 259 KiB → 3.59 KiB | 49 → 37 | `delegate(Object, Object, Object)`                                                           | `java.lang.invoke.DelegatingMethodHandle$Holder`       |
|  -99.8% | -255.609 KiB | 95.9% → 0.5% |    256 KiB → 416 B |       1 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)`                                     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -99.8% | -255.609 KiB | 95.9% → 0.5% |    256 KiB → 416 B |       1 | `addDFAEdge(DFA, DFAState, int, IntegerList, ATNConfigSet, PredictionContextCache)`          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -99.8% | -255.539 KiB | 95.9% → 0.6% |    256 KiB → 488 B |   1 → 2 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -99.8% | -255.539 KiB | 95.9% → 0.6% |    256 KiB → 488 B |   1 → 2 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -99.8% |   -255.5 KiB | 95.9% → 0.6% |    256 KiB → 528 B |       1 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)`      | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
|  -99.8% |   -255.5 KiB | 95.9% → 0.6% |    256 KiB → 528 B |       1 | `getCachedContext(PredictionContext)`                                                        | `groovyjarjarantlr4.v4.runtime.atn.ATN`                |
|  -99.8% |   -255.5 KiB | 95.9% → 0.6% |    256 KiB → 528 B |       1 | `optimizeConfigs(ATNSimulator)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`       |
|  -99.4% | -255.382 KiB | 96.2% → 1.9% | 257 KiB → 1.53 KiB |      21 | `delegate(Object, Object)`                                                                   | `java.lang.invoke.DelegatingMethodHandle$Holder`       |
