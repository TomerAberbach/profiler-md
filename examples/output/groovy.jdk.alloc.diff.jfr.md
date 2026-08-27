# Sampling profile diff

Collected 366 samples → 286 samples (-80 samples, -21.9%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library | -22.2% |   -80 | 98.4% → 97.9% | 360 → 280 |
| Ours             |   0.0% |     0 |   1.6% → 2.1% |         6 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                      | Location                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|     new |    +6 | 0.0% → 2.1% |   0 → 6 | `bindArgumentL(int, Object)`                                                                  | `java.lang.invoke.BoundMethodHandle`                       |
|     new |    +6 | 0.0% → 2.1% |   0 → 6 | `getTreeNode(int, Object)`                                                                    | `java.util.HashMap$TreeNode`                               |
|     new |    +4 | 0.0% → 1.4% |   0 → 4 | `getMethodsRecursive(String, Class[], boolean)`                                               | `java.lang.Class`                                          |
| +300.0% |    +3 | 0.3% → 1.4% |   1 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                 | `java.util.zip.Inflater`                                   |
| +300.0% |    +3 | 0.3% → 1.4% |   1 → 4 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)`       | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |
| +100.0% |    +3 | 0.8% → 2.1% |   3 → 6 | `resize()`                                                                                    | `java.util.HashMap`                                        |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `privateGetDeclaredMethods(boolean)`                                                          | `java.lang.Class`                                          |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `add(Object, Object[], int)`                                                                  | `java.util.ArrayList`                                      |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `binarySort(Object[], int, int, int, Comparator)`                                             | `java.util.TimSort`                                        |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800`       |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                         |
| +100.0% |    +2 | 0.5% → 1.4% |   2 → 4 | `<init>(Method, boolean)`                                                                     | `java.lang.invoke.MemberName`                              |
|  +33.3% |    +2 | 1.6% → 2.8% |   6 → 8 | `getReturnState(int)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `readBytes0(byte[], int, int)`                                                                | `java.io.RandomAccessFile`                                 |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `isAcceptState(DFAState, boolean)`                                                            | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `getCallerClass()`                                                                            | `jdk.internal.reflect.Reflection`                          |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `keepsAlive(Class, ClassLoader)`                                                              | `java.lang.invoke.MethodHandle`                            |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `compare(MutableBigInteger)`                                                                  | `java.math.MutableBigInteger`                              |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `reinitialize()`                                                                              | `groovy.lang.MetaClassImpl`                                |
| +100.0% |    +1 | 0.3% → 0.7% |   1 → 2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |

##### Ours

| Change | Delta |           % | Samples | Function                                        | Location                                                                    |
| -----: | ----: | ----------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                     |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitMethodEx(MethodNode)`                     | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`       | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `classNodeImplementsType(ClassNode, Class)`     | `org.codenarc.util.AstUtil`                                                 |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                    | Location                                                                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -44.4% |   -16 | 9.8% → 7.0% | 36 → 20 | `newArray(Class, int)`                                                                      | `java.lang.reflect.Array`                                                  |
|  -53.8% |    -7 | 3.6% → 2.1% |  13 → 6 | `putVal(int, Object, Object, boolean, boolean)`                                             | `java.util.HashMap`                                                        |
| removed |    -7 | 1.9% → 0.0% |   7 → 0 | `matches(Method, String, Class[])`                                                          | `java.lang.PublicMethods$Key`                                              |
|  -83.3% |    -5 | 1.6% → 0.3% |   6 → 1 | `provide(Object)`                                                                           | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x00000070010b6d70` |
|  -62.5% |    -5 | 2.2% → 1.0% |   8 → 3 | `getNode(Object)`                                                                           | `java.util.HashMap`                                                        |
|  -83.3% |    -5 | 1.6% → 0.3% |   6 → 1 | `add(ATNConfig, PredictionContextCache)`                                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                           |
|  -50.0% |    -4 | 2.2% → 1.4% |   8 → 4 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                        | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                      |
|  -80.0% |    -4 | 1.4% → 0.3% |   5 → 1 | `sync(int)`                                                                                 | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`                        |
|  -40.0% |    -4 | 2.7% → 2.1% |  10 → 6 | `get(Object)`                                                                               | `java.util.concurrent.ConcurrentHashMap`                                   |
| removed |    -4 | 1.1% → 0.0% |   4 → 0 | `valueConversion(Class, Class, boolean, boolean)`                                           | `java.lang.invoke.MethodHandleImpl`                                        |
| removed |    -3 | 0.8% → 0.0% |   3 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800`                       |
| removed |    -3 | 0.8% → 0.0% |   3 → 0 | `putVal(Object, Object, boolean)`                                                           | `java.util.concurrent.ConcurrentHashMap`                                   |
| removed |    -3 | 0.8% → 0.0% |   3 → 0 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`                               |
| removed |    -3 | 0.8% → 0.0% |   3 → 0 | `pickClosureMethod(Class[])`                                                                | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`                   |
| removed |    -3 | 0.8% → 0.0% |   3 → 0 | `equals(Object, Object)`                                                                    | `java.util.Objects`                                                        |
| removed |    -2 | 0.5% → 0.0% |   2 → 0 | `toArray(IntFunction)`                                                                      | `java.util.stream.ReferencePipeline`                                       |
| removed |    -2 | 0.5% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`                               |
| removed |    -2 | 0.5% → 0.0% |   2 → 0 | `asSpreader(int, Class, int)`                                                               | `java.lang.invoke.MethodHandle`                                            |
|  -66.7% |    -2 | 0.8% → 0.3% |   3 → 1 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                   | `java.lang.invoke.MethodHandleImpl`                                        |
| removed |    -2 | 0.5% → 0.0% |   2 → 0 | `closure(CharStream, ATNConfig, ATNConfigSet, boolean, boolean, boolean)`                   | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                      |

##### Ours

|  Change | Delta |           % | Samples | Function                                                         | Location                                                             |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                 |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessaryInstanceOfCheckAstVisitor` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.imports.NoWildcardImportsRule`                    |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getVariableExpressions(DeclarationExpression)`                  | `org.gmetrics.util.AstUtil`                                          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `addViolationIfAssignment(Expression)`                           | `org.codenarc.rule.basic.AssignmentInConditionalAstVisitor`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `sourceLinesBetweenNodes(SourceCode, ASTNode, ASTNode)`          | `org.codenarc.util.SourceCodeUtil`                                   |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +245 | 0.0% → 85.7% | 0 → 245 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|    new |  +200 | 0.0% → 69.9% | 0 → 200 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001117800`  |
|    new |  +199 | 0.0% → 69.6% | 0 → 199 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001118400`  |
|    new |  +190 | 0.0% → 66.4% | 0 → 190 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`  |
|    new |  +142 | 0.0% → 49.7% | 0 → 142 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`  |
|    new |  +116 | 0.0% → 40.6% | 0 → 116 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001140400`  |
|    new |  +114 | 0.0% → 39.9% | 0 → 114 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400` |
|    new |  +112 | 0.0% → 39.2% | 0 → 112 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700118d400`  |
|    new |  +107 | 0.0% → 37.4% | 0 → 107 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |
|    new |   +92 | 0.0% → 32.2% |  0 → 92 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001141000`  |
|    new |   +91 | 0.0% → 31.8% |  0 → 91 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000700138cc00` |
|    new |   +87 | 0.0% → 30.4% |  0 → 87 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |
|    new |   +86 | 0.0% → 30.1% |  0 → 86 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000700118d000`  |
|    new |   +84 | 0.0% → 29.4% |  0 → 84 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001119400`  |
|    new |   +84 | 0.0% → 29.4% |  0 → 84 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`  |
|    new |   +78 | 0.0% → 27.3% |  0 → 78 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2000`  |
|    new |   +77 | 0.0% → 26.9% |  0 → 77 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00`  |
|    new |   +76 | 0.0% → 26.6% |  0 → 76 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001102400`  |
|    new |   +74 | 0.0% → 25.9% |  0 → 74 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001104000`  |
|    new |   +74 | 0.0% → 25.9% |  0 → 74 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001142000`  |

##### Ours

|  Change | Delta |           % | Samples | Function                                                | Location                                                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
|     new |    +5 | 0.0% → 1.7% |   0 → 5 | `visitClassEx(ClassNode)`                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                        |
|     new |    +4 | 0.0% → 1.4% |   0 → 4 | `getAstVisitor()`                                       | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `visitClassEx(ClassNode)`                               | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `calculateForClass(ClassNode, SourceCode)`              | `org.gmetrics.metric.AbstractMethodMetric`                                     |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `applyToClass(ClassNode, SourceCode)`                   | `org.gmetrics.metric.AbstractMetric`                                           |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `visitBinaryExpression(BinaryExpression)`               | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                     |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `matches(String)`                                       | `org.codenarc.util.WildcardPattern`                                            |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.formatting.BracesForClassRule`                              |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `visitConstantExpression(ConstantExpression)`           | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`          |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.imports.UnusedImportRule`                                   |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `visitMethodCallExpression(MethodCallExpression)`       | `org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`          |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `doCall(Object)`                                        | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`           |
| +100.0% |    +1 | 0.3% → 0.7% |   1 → 2 | `assertClassImplementsRuleInterface(Class)`             | `org.codenarc.ruleset.RuleSetUtil`                                             |
|  +25.0% |    +1 | 1.1% → 1.7% |   4 → 5 | `super$3$applyTo(SourceCode, List)`                     | `org.codenarc.rule.formatting.IndentationRule`                                 |
|  +33.3% |    +1 | 0.8% → 1.4% |   3 → 4 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.formatting.IndentationRule`                                 |
|  +33.3% |    +1 | 0.8% → 1.4% |   3 → 4 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                        |
| +100.0% |    +1 | 0.3% → 0.7% |   1 → 2 | `doCall(Object)`                                        | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
| +100.0% |    +1 | 0.3% → 0.7% |   1 → 2 | `eachImportLine(SourceCode, Closure)`                   | `org.codenarc.rule.imports.AbstractImportRule`                                 |
| +100.0% |    +1 | 0.3% → 0.7% |   1 → 2 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.imports.DuplicateImportRule`                                |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -327 | 89.3% → 0.0% | 327 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800` |
| removed |  -269 | 73.5% → 0.0% | 269 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001115400`  |
| removed |  -267 | 73.0% → 0.0% | 267 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001117800`  |
| removed |  -266 | 72.7% → 0.0% | 266 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000c001118400`  |
| removed |  -195 | 53.3% → 0.0% | 195 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000c001118000`  |
| removed |  -154 | 42.1% → 0.0% | 154 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd400` |
| removed |  -149 | 40.7% → 0.0% | 149 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c00113fc00`  |
| removed |  -138 | 37.7% → 0.0% | 138 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001140400`  |
| removed |  -130 | 35.5% → 0.0% | 130 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bc800` |
| removed |  -128 | 35.0% → 0.0% | 128 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c00118d400`  |
| removed |  -118 | 32.2% → 0.0% | 118 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001141000`  |
| removed |  -104 | 28.4% → 0.0% | 104 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c0013d2000`  |
| removed |  -100 | 27.3% → 0.0% | 100 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001102400`  |
| removed |   -97 | 26.5% → 0.0% |  97 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c00138cc00` |
| removed |   -96 | 26.2% → 0.0% |  96 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c001104000`  |
| removed |   -96 | 26.2% → 0.0% |  96 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c00118d000`  |
| removed |   -95 | 26.0% → 0.0% |  95 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001142000`  |
| removed |   -94 | 25.7% → 0.0% |  94 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001119400`  |
| removed |   -92 | 25.1% → 0.0% |  92 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd000` |
| removed |   -92 | 25.1% → 0.0% |  92 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001140c00`  |

##### Ours

|  Change | Delta |             % |  Samples | Function                                                | Location                                                                       |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -55.9% |   -38 | 18.6% → 10.5% |  68 → 30 | `visitMethod(MethodNode)`                               | `org.codenarc.rule.AbstractAstVisitor`                                         |
|  -37.7% |   -29 | 21.0% → 16.8% |  77 → 48 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                         |
|  -30.9% |   -29 | 25.7% → 22.7% |  94 → 65 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                               |
|  -25.0% |   -27 | 29.5% → 28.3% | 108 → 81 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
|  -28.7% |   -23 | 21.9% → 19.9% |  80 → 57 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
|  -24.4% |   -22 | 24.6% → 23.8% |  90 → 68 | `init()`                                                | `org.codenarc.source.AbstractSourceCode`                                       |
|  -38.6% |   -22 | 15.6% → 12.2% |  57 → 35 | `isRuleSuppressed(Rule)`                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  -31.3% |   -20 | 17.5% → 15.4% |  64 → 44 | `getAst()`                                              | `org.codenarc.source.AbstractSourceCode`                                       |
|  -33.3% |   -20 | 16.4% → 14.0% |  60 → 40 | `init()`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  -23.6% |   -17 | 19.7% → 19.2% |  72 → 55 | `collectViolations(SourceCode, RuleSet)`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|  -51.9% |   -14 |   7.4% → 4.5% |  27 → 13 | `doCall(Object)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`    |
|  -17.5% |   -11 | 17.2% → 18.2% |  63 → 52 | `processFile(String, DirectoryResults, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
|  -43.8% |    -7 |   4.4% → 3.1% |   16 → 9 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`     |
|   -8.0% |    -7 | 23.8% → 28.0% |  87 → 80 | `measureRuleProcessingTime(Rule, Closure)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| removed |    -5 |   1.4% → 0.0% |    5 → 0 | `doCall(Object)`                                        | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1` |
| removed |    -5 |   1.4% → 0.0% |    5 → 0 | `getNumberOfViolationsWithPriority(int, boolean)`       | `org.codenarc.results.FileResults`                                             |
| removed |    -5 |   1.4% → 0.0% |    5 → 0 | `getNumberOfViolationsWithPriority(int)`                | `org.codenarc.results.FileResults`                                             |
| removed |    -4 |   1.1% → 0.0% |    4 → 0 | `findReference(SourceCode, String, String)`             | `org.codenarc.rule.imports.UnusedImportRule`                                   |
|  -75.0% |    -3 |   1.1% → 0.3% |    4 → 1 | `visitBinaryExpression(BinaryExpression)`               | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                   |
|  -75.0% |    -3 |   1.1% → 0.3% |    4 → 1 | `super$3$visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                   |

# Allocated heap profile diff

Allocated 11.8 GiB → 11.9 GiB (+136.942 MiB, +1.1%) over 6,268 samples → 6,312 samples (1.92 MiB → 1.93 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +1.3% | +150.711 MiB | 99.0% → 99.2% | 11.6 GiB → 11.8 GiB | 6,160 → 6,206 |
| Ours             | -11.8% |  -13.769 MiB |   1.0% → 0.8% |   117 MiB → 103 MiB |       57 → 52 |
| Unknown          |  +0.1% |        +24 B |         <0.1% | 36.3 KiB → 36.4 KiB |       51 → 54 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|   Change |        Delta |            % |                Size |   Samples | Function                                                                                | Location                                              |
| -------: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|   +83.9% | +130.267 MiB |  1.3% → 2.3% |   155 MiB → 285 MiB |  77 → 143 | `divideAndRemainderKnuth(BigInteger)`                                                   | `java.math.BigInteger`                                |
|   +57.7% | +122.872 MiB |  1.8% → 2.8% |   213 MiB → 336 MiB | 108 → 130 | `of(byte, int, int)`                                                                    | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
|    +7.8% |  +56.022 MiB |  5.9% → 6.3% |   716 MiB → 772 MiB | 366 → 374 | `makeImpl(Class, Class[], boolean)`                                                     | `java.lang.invoke.MethodType`                         |
|   +19.8% |  +47.096 MiB |  2.0% → 2.3% |   238 MiB → 285 MiB | 119 → 118 | `optimize(Pattern$Node)`                                                                | `java.util.regex.Pattern$BnM`                         |
|   +15.5% |   +37.98 MiB |  2.0% → 2.3% |   246 MiB → 284 MiB | 127 → 141 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                          | `java.lang.invoke.BoundMethodHandle$Species_LLLL`     |
|   +17.1% |  +35.507 MiB |  1.7% → 2.0% |   208 MiB → 244 MiB | 110 → 118 | `insertParameterTypes(int, Class[])`                                                    | `java.lang.invoke.MethodType`                         |
|   +41.3% |  +32.311 MiB |  0.6% → 0.9% |  78.2 MiB → 111 MiB |   39 → 54 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`               | `java.lang.invoke.MethodHandleImpl`                   |
|   +27.6% |  +28.844 MiB |  0.9% → 1.1% |   105 MiB → 133 MiB |   53 → 68 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector`            |
|   +78.4% |  +25.633 MiB |  0.3% → 0.5% | 32.7 MiB → 58.3 MiB |   17 → 29 | `<init>(int)`                                                                           | `java.util.ArrayList`                                 |
| +1078.6% |  +25.588 MiB | <0.1% → 0.2% |   2.37 MiB → 28 MiB |     2 → 3 | `visitMethod(int, String, String, String, String[])`                                    | `jdk.internal.org.objectweb.asm.ClassWriter`          |
|    +6.4% |  +25.515 MiB |  3.3% → 3.5% |   400 MiB → 426 MiB | 203 → 218 | `makeBlockInliningWrapper(MethodHandle)`                                                | `java.lang.invoke.MethodHandleImpl`                   |
|   +23.7% |  +25.393 MiB |  0.9% → 1.1% |   107 MiB → 132 MiB |   54 → 69 | `of(byte, int)`                                                                         | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
|      new |   +21.97 MiB |  0.0% → 0.2% |        0 B → 22 MiB |     0 → 1 | `iterator()`                                                                            | `java.util.HashMap$KeySet`                            |
|   +35.5% |   +21.57 MiB |  0.5% → 0.7% | 60.7 MiB → 82.3 MiB |   31 → 45 | `copyOf(Object[], int)`                                                                 | `java.util.Arrays`                                    |
|   +67.1% |  +21.475 MiB |  0.3% → 0.4% |   32 MiB → 53.5 MiB |   16 → 26 | `<init>(MethodHandle, MethodHandle, boolean)`                                           | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |
|   +45.0% |  +20.674 MiB |  0.4% → 0.5% |   46 MiB → 66.7 MiB |   23 → 34 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`          | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`   |
|    +7.6% |  +20.108 MiB |  2.2% → 2.3% |   263 MiB → 283 MiB | 137 → 141 | `stream(Spliterator, boolean)`                                                          | `java.util.stream.StreamSupport`                      |
|   +34.4% |  +19.131 MiB |  0.5% → 0.6% | 55.6 MiB → 74.7 MiB |   43 → 45 | `copyOfRangeByte(byte[], int, int)`                                                     | `java.util.Arrays`                                    |
|   +12.0% |  +17.217 MiB |  1.2% → 1.3% |   143 MiB → 160 MiB |   75 → 81 | `<init>()`                                                                              | `java.math.MutableBigInteger`                         |
|   +62.8% |  +17.079 MiB |  0.2% → 0.4% | 27.2 MiB → 44.3 MiB |   14 → 22 | `<init>(Reader, int)`                                                                   | `java.io.BufferedReader`                              |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |           % |                Size |   Samples | Function                                                                                     | Location                                                  |
| -----: | -----------: | ----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| -27.9% | -115.997 MiB | 3.5% → 2.5% |   416 MiB → 300 MiB | 179 → 149 | `newArray(Class, int)`                                                                       | `java.lang.reflect.Array`                                 |
| -70.8% |  -97.119 MiB | 1.1% → 0.3% |    137 MiB → 40 MiB |   30 → 20 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |
| -21.8% |  -54.177 MiB | 2.1% → 1.6% |   248 MiB → 194 MiB |  126 → 97 | `newNode(int, Object, Object, HashMap$Node)`                                                 | `java.util.HashMap`                                       |
| -66.7% |  -43.978 MiB | 0.5% → 0.2% |     66 MiB → 22 MiB |   30 → 11 | `lambda$setGuards$1(int)`                                                                    | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -38.5% |  -31.773 MiB | 0.7% → 0.4% | 82.5 MiB → 50.7 MiB |   41 → 25 | `matcher(CharSequence)`                                                                      | `java.util.regex.Pattern`                                 |
| -32.5% |  -30.738 MiB | 0.8% → 0.5% | 94.7 MiB → 63.9 MiB |   61 → 65 | `copyOf(byte[], int)`                                                                        | `java.util.Arrays`                                        |
|  -4.7% |  -26.965 MiB | 4.7% → 4.5% |   571 MiB → 545 MiB | 300 → 286 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                                     |
| -34.5% |  -26.273 MiB | 0.6% → 0.4% |   76.2 MiB → 50 MiB |   39 → 25 | `convertToTypeArray(Object[])`                                                               | `org.codehaus.groovy.runtime.MetaClassHelper`             |
| -44.8% |  -25.987 MiB | 0.5% → 0.3% |     58 MiB → 32 MiB |   25 → 16 | `opWrapSink(int, Sink)`                                                                      | `java.util.stream.ReferencePipeline$3`                    |
| -28.2% |  -22.748 MiB | 0.7% → 0.5% |   80.7 MiB → 58 MiB |   40 → 30 | `listIterator(int)`                                                                          | `java.util.LinkedList`                                    |
| -44.9% |  -21.376 MiB | 0.4% → 0.2% | 47.6 MiB → 26.3 MiB |   25 → 14 | `builder(long, IntFunction)`                                                                 | `java.util.stream.Nodes`                                  |
| -32.7% |  -20.668 MiB | 0.5% → 0.3% | 63.1 MiB → 42.5 MiB |   33 → 23 | `newSlice(int[], int, boolean)`                                                              | `java.util.regex.Pattern`                                 |
| -36.1% |  -20.364 MiB | 0.5% → 0.3% |   56.3 MiB → 36 MiB |   29 → 18 | `RemoveQEQuoting()`                                                                          | `java.util.regex.Pattern`                                 |
| -12.0% |  -19.331 MiB | 1.3% → 1.2% |   161 MiB → 142 MiB |   83 → 71 | `make(MethodType, LambdaForm, Object, Object, Object)`                                       | `java.lang.invoke.BoundMethodHandle$Species_LLL`          |
|  -8.8% |  -17.654 MiB | 1.7% → 1.5% |   200 MiB → 182 MiB |  101 → 94 | `spliterator(Object[], int, int, int)`                                                       | `java.util.Spliterators`                                  |
| -50.0% |  -15.991 MiB | 0.3% → 0.1% |     32 MiB → 16 MiB |    16 → 8 | `getPlainNodeReference(boolean)`                                                             | `org.codehaus.groovy.ast.ClassNode`                       |
|  -9.1% |  -15.098 MiB | 1.4% → 1.2% |   166 MiB → 151 MiB |   83 → 77 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                       | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`        |
| -34.1% |  -14.994 MiB | 0.4% → 0.2% |     44 MiB → 29 MiB |   21 → 15 | `linkLast(Object)`                                                                           | `java.util.LinkedList`                                    |
|  -9.4% |   -14.91 MiB | 1.3% → 1.2% |   158 MiB → 143 MiB |   79 → 75 | `valueOf(long)`                                                                              | `java.lang.Long`                                          |
| -36.8% |  -13.993 MiB | 0.3% → 0.2% |     38 MiB → 24 MiB |   19 → 12 | `of(byte, int, int, int[])`                                                                  | `java.lang.invoke.LambdaFormEditor$TransformKey`          |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.199 GiB | 0.0% → 94.2% | 0 B → 11.2 GiB | 0 → 5,852 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|    new |  +7.623 GiB | 0.0% → 64.1% | 0 B → 7.62 GiB | 0 → 4,023 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`  |
|    new |  +7.561 GiB | 0.0% → 63.6% | 0 B → 7.56 GiB | 0 → 3,971 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001117800`  |
|    new |  +7.477 GiB | 0.0% → 62.9% | 0 B → 7.48 GiB | 0 → 3,928 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001118400`  |
|    new |   +6.62 GiB | 0.0% → 55.7% | 0 B → 6.62 GiB | 0 → 3,404 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001140400`  |
|    new |  +6.537 GiB | 0.0% → 55.0% | 0 B → 6.54 GiB | 0 → 3,362 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700118d400`  |
|    new |  +5.872 GiB | 0.0% → 49.4% | 0 B → 5.87 GiB | 0 → 3,151 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`  |
|    new |  +5.534 GiB | 0.0% → 46.5% | 0 B → 5.53 GiB | 0 → 2,857 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |
|    new |  +5.497 GiB | 0.0% → 46.2% |  0 B → 5.5 GiB | 0 → 2,855 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000700118d000`  |
|    new |   +5.09 GiB | 0.0% → 42.8% | 0 B → 5.09 GiB | 0 → 2,650 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400` |
|    new |  +5.046 GiB | 0.0% → 42.4% | 0 B → 5.05 GiB | 0 → 2,576 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000700138cc00` |
|    new |  +5.031 GiB | 0.0% → 42.3% | 0 B → 5.03 GiB | 0 → 2,592 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001142000`  |
|    new |  +4.756 GiB | 0.0% → 40.0% | 0 B → 4.76 GiB | 0 → 2,469 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |
|    new |  +4.561 GiB | 0.0% → 38.3% | 0 B → 4.56 GiB | 0 → 2,361 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`  |
|    new |  +4.557 GiB | 0.0% → 38.3% | 0 B → 4.56 GiB | 0 → 2,354 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700138d800`  |
|    new |  +3.654 GiB | 0.0% → 30.7% | 0 B → 3.65 GiB | 0 → 1,887 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070013db800`  |
|    new |  +3.541 GiB | 0.0% → 29.8% | 0 B → 3.54 GiB | 0 → 1,825 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000700118e800` |
|    new |   +3.38 GiB | 0.0% → 28.4% | 0 B → 3.38 GiB | 0 → 1,816 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001119400`  |
|    new |  +3.317 GiB | 0.0% → 27.9% | 0 B → 3.32 GiB | 0 → 1,733 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2000`  |
|    new |  +3.292 GiB | 0.0% → 27.7% | 0 B → 3.29 GiB | 0 → 1,690 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000007001004000`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.051 GiB | 94.0% → 0.0% | 11.1 GiB → 0 B | 5,806 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800` |
| removed |  -7.627 GiB | 64.9% → 0.0% | 7.63 GiB → 0 B | 4,013 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001115400`  |
| removed |  -7.527 GiB | 64.0% → 0.0% | 7.53 GiB → 0 B | 3,962 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001117800`  |
| removed |  -7.419 GiB | 63.1% → 0.0% | 7.42 GiB → 0 B | 3,905 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000c001118400`  |
| removed |   -6.62 GiB | 56.3% → 0.0% | 6.62 GiB → 0 B | 3,410 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001140400`  |
| removed |  -6.548 GiB | 55.7% → 0.0% | 6.55 GiB → 0 B | 3,374 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c00118d400`  |
| removed |  -5.816 GiB | 49.5% → 0.0% | 5.82 GiB → 0 B | 3,147 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000c001118000`  |
| removed |  -5.462 GiB | 46.4% → 0.0% | 5.46 GiB → 0 B | 2,827 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bc800` |
| removed |  -5.416 GiB | 46.1% → 0.0% | 5.42 GiB → 0 B | 2,836 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c00118d000`  |
| removed |  -5.289 GiB | 45.0% → 0.0% | 5.29 GiB → 0 B | 2,685 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd400` |
| removed |  -4.978 GiB | 42.3% → 0.0% | 4.98 GiB → 0 B | 2,520 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c00138cc00` |
| removed |  -4.968 GiB | 42.2% → 0.0% | 4.97 GiB → 0 B | 2,518 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c00113fc00`  |
| removed |   -4.94 GiB | 42.0% → 0.0% | 4.94 GiB → 0 B | 2,573 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001142000`  |
| removed |  -4.477 GiB | 38.1% → 0.0% | 4.48 GiB → 0 B | 2,330 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c0012ac800`  |
| removed |  -4.456 GiB | 37.9% → 0.0% | 4.46 GiB → 0 B | 2,316 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c00138d800`  |
| removed |  -3.556 GiB | 30.2% → 0.0% | 3.56 GiB → 0 B | 1,843 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c0013db800`  |
| removed |  -3.498 GiB | 29.7% → 0.0% |  3.5 GiB → 0 B | 1,816 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c00118e800` |
| removed |  -3.316 GiB | 28.2% → 0.0% | 3.32 GiB → 0 B | 1,738 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c0013d2000`  |
| removed |  -3.284 GiB | 27.9% → 0.0% | 3.28 GiB → 0 B | 1,782 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001119400`  |
| removed |   -3.23 GiB | 27.5% → 0.0% | 3.23 GiB → 0 B | 1,642 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000c001004000`  |

# Retained heap profile diff

Retained 16.5 KiB → 75.4 KiB (+58.945 KiB, +357.9%) over 123 objects → 119 objects (137 B → 649 B per object).

| Category         |  Change |      Delta |              % |                Size |   Objects |
| ---------------- | ------: | ---------: | -------------: | ------------------: | --------: |
| Standard library | +357.6% | +58.89 KiB | 100.0% → 99.9% | 16.5 KiB → 75.4 KiB | 123 → 117 |
| Ours             |     new |      +56 B |    0.0% → 0.1% |          0 B → 56 B |     0 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|    Change |       Delta |            % |             Size | Objects | Function                                                                                                    | Location                                                |
| --------: | ----------: | -----------: | ---------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|       new | +32.171 KiB | 0.0% → 42.7% |   0 B → 32.2 KiB |   0 → 3 | `resize()`                                                                                                  | `java.util.HashMap`                                     |
| +28892.9% | +31.601 KiB | 0.7% → 42.0% | 112 B → 31.7 KiB |   1 → 3 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                             | `java.lang.ClassLoader`                                 |
|   +464.4% |  +3.664 KiB |  4.8% → 5.9% | 808 B → 4.45 KiB |       1 | `copyOf(Object[], int)`                                                                                     | `java.util.Arrays`                                      |
|   +200.0% |      +192 B |  0.6% → 0.4% |     96 B → 288 B |   2 → 6 | `create(Tuple2, int, String, int, int, int, int, int)`                                                      | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`      |
|       new |      +192 B |  0.0% → 0.2% |      0 B → 192 B |   0 → 3 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                                                   | `sun.reflect.annotation.AnnotationParser`               |
|    +50.0% |      +168 B |  2.0% → 0.7% |    336 B → 504 B |   6 → 9 | `grow(int)`                                                                                                 | `java.util.ArrayList`                                   |
|    +66.7% |      +160 B |  1.4% → 0.5% |    240 B → 400 B |  6 → 10 | `newNode(int, Object, Object, HashMap$Node)`                                                                | `java.util.LinkedHashMap`                               |
|       new |      +144 B |  0.0% → 0.2% |      0 B → 144 B |   0 → 3 | `<init>(Class, ClassInfo)`                                                                                  | `org.codehaus.groovy.reflection.CachedClass`            |
|    +26.3% |      +120 B |  2.7% → 0.7% |    456 B → 576 B |       6 | `copyOfRangeByte(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
|       new |       +96 B |  0.0% → 0.1% |       0 B → 96 B |   0 → 1 | `copyOfRange(byte[], int, int)`                                                                             | `java.util.Arrays`                                      |
|    +50.0% |       +88 B |  1.0% → 0.3% |    176 B → 264 B |   2 → 3 | `copy()`                                                                                                    | `java.lang.reflect.Method`                              |
|       new |       +88 B |  0.0% → 0.1% |       0 B → 88 B |   0 → 3 | `copy()`                                                                                                    | `org.codehaus.groovy.util.FastArray`                    |
|    +52.9% |       +72 B |  0.8% → 0.3% |    136 B → 208 B |       2 | `compress(char[], int, int)`                                                                                | `java.lang.StringUTF16`                                 |
|       new |       +72 B |  0.0% → 0.1% |       0 B → 72 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL` |
|       new |       +64 B |  0.0% → 0.1% |       0 B → 64 B |   0 → 1 | `getDefaultImportClasses(String[])`                                                                         | `org.codehaus.groovy.vmplugin.v9.Java9`                 |
|       new |       +64 B |  0.0% → 0.1% |       0 B → 64 B |   0 → 2 | `allocateInstance(Object)`                                                                                  | `java.lang.invoke.DirectMethodHandle`                   |
|       new |       +64 B |  0.0% → 0.1% |       0 B → 64 B |   0 → 1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                                       | `sun.reflect.annotation.AnnotationParser`               |
|       new |       +64 B |  0.0% → 0.1% |       0 B → 64 B |   0 → 1 | `<init>(MethodType)`                                                                                        | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
|       new |       +40 B |  0.0% → 0.1% |       0 B → 40 B |   0 → 1 | `closureOrLambdaExpression()`                                                                               | `org.apache.groovy.parser.antlr4.GroovyParser`          |
|   +250.0% |       +40 B |         0.1% |      16 B → 56 B |   1 → 3 | `<init>(String, int, ClassNode, ClassNode[], MixinNode[])`                                                  | `org.codehaus.groovy.ast.ClassNode`                     |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |             Size | Objects | Function                                                                                             | Location                                        |
| ------: | ---------: | -----------: | ---------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| removed | -8.015 KiB | 48.7% → 0.0% |   8.02 KiB → 0 B |   1 → 0 | `<init>(int, int, MemorySegment)`                                                                    | `java.nio.HeapByteBuffer`                       |
|  -50.0% |     -608 B |  7.2% → 0.8% | 1.19 KiB → 608 B |   8 → 4 | `getPlainNodeReference(boolean)`                                                                     | `org.codehaus.groovy.ast.ClassNode`             |
|  -55.9% |     -152 B |  1.6% → 0.2% |    272 B → 120 B |   3 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                         |
|  -73.9% |     -136 B |  1.1% → 0.1% |     184 B → 48 B |   3 → 1 | `clone()`                                                                                            | `java.lang.Object`                              |
| removed |     -128 B |  0.8% → 0.0% |      128 B → 0 B |   4 → 0 | `addEntry(int, Object, Object, int)`                                                                 | `java.util.Hashtable`                           |
| removed |      -72 B |  0.4% → 0.0% |       72 B → 0 B |   1 → 0 | `copy()`                                                                                             | `java.lang.reflect.Field`                       |
| removed |      -72 B |  0.4% → 0.0% |       72 B → 0 B |   1 → 0 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                      | `org.apache.groovy.parser.antlr4.AstBuilder`    |
|  -75.0% |      -72 B | 0.6% → <0.1% |      96 B → 24 B |   4 → 1 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`   |
| removed |      -64 B |  0.4% → 0.0% |       64 B → 0 B |   2 → 0 | `applyPropertyDescriptors(PropertyDescriptor[])`                                                     | `groovy.lang.MetaClassImpl`                     |
| removed |      -64 B |  0.4% → 0.0% |       64 B → 0 B |   1 → 0 | `initializeMap(Class)`                                                                               | `java.lang.ClassValue`                          |
| removed |      -64 B |  0.4% → 0.0% |       64 B → 0 B |   1 → 0 | `<init>(int, float)`                                                                                 | `java.util.Hashtable`                           |
| removed |      -64 B |  0.4% → 0.0% |       64 B → 0 B |   1 → 0 | `createBinaryExpression(GroovyParser$ExpressionContext, Token, GroovyParser$ExpressionContext)`      | `org.apache.groovy.parser.antlr4.AstBuilder`    |
|  -66.7% |      -64 B | 0.6% → <0.1% |      96 B → 32 B |   3 → 1 | `<init>(int)`                                                                                        | `org.codehaus.groovy.util.ListHashMap`          |
| removed |      -64 B |  0.4% → 0.0% |       64 B → 0 B |   1 → 0 | `assertMembers()`                                                                                    | `org.codehaus.groovy.ast.AnnotationNode`        |
| removed |      -56 B |  0.3% → 0.0% |       56 B → 0 B |   1 → 0 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)`            | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
| removed |      -56 B |  0.3% → 0.0% |       56 B → 0 B |   1 → 0 | `visitIntegerLiteralAlt(GroovyParser$IntegerLiteralAltContext)`                                      | `org.apache.groovy.parser.antlr4.AstBuilder`    |
| removed |      -56 B |  0.3% → 0.0% |       56 B → 0 B |   1 → 0 | `visitNamePart(GroovyParser$NamePartContext)`                                                        | `org.apache.groovy.parser.antlr4.AstBuilder`    |
| removed |      -48 B |  0.3% → 0.0% |       48 B → 0 B |   1 → 0 | `pathExpression()`                                                                                   | `org.apache.groovy.parser.antlr4.GroovyParser`  |
|  -50.0% |      -48 B |  0.6% → 0.1% |      96 B → 48 B |   2 → 1 | `commandExpression()`                                                                                | `org.apache.groovy.parser.antlr4.GroovyParser`  |
| removed |      -48 B |  0.3% → 0.0% |       48 B → 0 B |   1 → 0 | `expressionListElement(boolean)`                                                                     | `org.apache.groovy.parser.antlr4.GroovyParser`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size | Objects | Function                                                                                      | Location                                             |
| ------: | ----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +74.226 KiB |  0.0% → 98.4% |      0 B → 74.2 KiB |  0 → 99 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new | +73.789 KiB |  0.0% → 97.8% |      0 B → 73.8 KiB |  0 → 92 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x0000007001117800`  |
|     new | +73.789 KiB |  0.0% → 97.8% |      0 B → 73.8 KiB |  0 → 92 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000007001118400`  |
|     new | +73.609 KiB |  0.0% → 97.6% |      0 B → 73.6 KiB |  0 → 89 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`  |
|     new | +70.851 KiB |  0.0% → 94.0% |      0 B → 70.9 KiB |  0 → 54 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`  |
| +422.9% | +60.031 KiB | 86.2% → 98.4% | 14.2 KiB → 74.2 KiB | 93 → 99 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| +425.5% | +60.031 KiB | 85.7% → 98.3% | 14.1 KiB → 74.1 KiB | 90 → 98 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| +435.6% | +59.867 KiB | 83.4% → 97.6% | 13.7 KiB → 73.6 KiB | 84 → 89 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
|     new | +38.968 KiB |  0.0% → 51.7% |        0 B → 39 KiB |  0 → 57 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000007001141000`  |
|     new | +37.875 KiB |  0.0% → 50.2% |      0 B → 37.9 KiB |  0 → 39 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001104000`  |
|     new |  +37.71 KiB |  0.0% → 50.0% |      0 B → 37.7 KiB |  0 → 39 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001102400`  |
|     new | +37.242 KiB |  0.0% → 49.4% |      0 B → 37.2 KiB |  0 → 31 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000007001150800`  |
|     new | +37.156 KiB |  0.0% → 49.3% |      0 B → 37.2 KiB |  0 → 29 | `invokeVirtual(Object, Object, int)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x0000007001152800` |
|     new | +37.156 KiB |  0.0% → 49.3% |      0 B → 37.2 KiB |  0 → 29 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400`  |
|     new | +36.804 KiB |  0.0% → 48.8% |      0 B → 36.8 KiB |  0 → 16 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010bc000`  |
|     new | +36.546 KiB |  0.0% → 48.5% |      0 B → 36.5 KiB |  0 → 16 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |
|     new | +36.546 KiB |  0.0% → 48.5% |      0 B → 36.5 KiB |  0 → 16 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070012c5c00`  |
|     new | +36.171 KiB |  0.0% → 48.0% |      0 B → 36.2 KiB |   0 → 8 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000007001145c00`  |
|     new | +33.617 KiB |  0.0% → 44.6% |      0 B → 33.6 KiB |  0 → 22 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000007001119400`  |
|     new | +32.601 KiB |  0.0% → 43.2% |      0 B → 32.6 KiB |  0 → 13 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |            % |                Size | Objects | Function                                                                                    | Location                                                                   |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -14.195 KiB | 86.2% → 0.0% |      14.2 KiB → 0 B |  93 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800`                       |
| removed | -14.164 KiB | 86.0% → 0.0% |      14.2 KiB → 0 B |  90 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001117800`                        |
| removed | -14.085 KiB | 85.5% → 0.0% |      14.1 KiB → 0 B |  88 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000c001118400`                        |
| removed |  -13.82 KiB | 83.9% → 0.0% |      13.8 KiB → 0 B |  85 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001115400`                        |
| removed | -11.093 KiB | 67.4% → 0.0% |      11.1 KiB → 0 B |  57 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000c001118000`                        |
| removed |  -10.46 KiB | 63.5% → 0.0% |      10.5 KiB → 0 B |  40 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001102400`                        |
| removed | -10.398 KiB | 63.1% → 0.0% |      10.4 KiB → 0 B |  38 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c001104000`                        |
| removed | -10.187 KiB | 61.9% → 0.0% |      10.2 KiB → 0 B |  34 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001150800`                        |
| removed |  -9.968 KiB | 60.5% → 0.0% |      9.97 KiB → 0 B |  31 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000c001152800`                       |
| removed |  -9.968 KiB | 60.5% → 0.0% |      9.97 KiB → 0 B |  31 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c0012d8000`                        |
| removed |  -9.609 KiB | 58.3% → 0.0% |      9.61 KiB → 0 B |  23 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c00182f400`                        |
| removed |  -8.625 KiB | 52.4% → 0.0% |      8.63 KiB → 0 B |  14 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c001101c00`                       |
| removed |  -8.625 KiB | 52.4% → 0.0% |      8.63 KiB → 0 B |  14 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c0012c5c00`                        |
| removed |  -8.398 KiB | 51.0% → 0.0% |       8.4 KiB → 0 B |  11 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001145c00`                        |
|  -70.8% |  -8.203 KiB | 70.4% → 4.5% | 11.6 KiB → 3.38 KiB | 48 → 44 | `invokeExact_MT(Object, Object, Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                                         |
|  -71.4% |  -8.164 KiB | 69.4% → 4.3% | 11.4 KiB → 3.27 KiB | 42 → 46 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`                           |
| removed |  -8.109 KiB | 49.2% → 0.0% |      8.11 KiB → 0 B |   3 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c00138c800`                        |
|  -99.4% |  -8.031 KiB | 49.1% → 0.1% |     8.08 KiB → 48 B |   3 → 2 | `doCall(Object)`                                                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
| removed |  -8.015 KiB | 48.7% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `<init>(int, int, MemorySegment)`                                                           | `java.nio.HeapByteBuffer`                                                  |
| removed |  -8.015 KiB | 48.7% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `allocate(int)`                                                                             | `java.nio.ByteBuffer`                                                      |

##### Standard library

|  Change |       Delta |            % |                Size | Objects | Function                                                                                    | Location                                                |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed | -14.195 KiB | 86.2% → 0.0% |      14.2 KiB → 0 B |  93 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800`    |
| removed | -14.164 KiB | 86.0% → 0.0% |      14.2 KiB → 0 B |  90 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001117800`     |
| removed | -14.085 KiB | 85.5% → 0.0% |      14.1 KiB → 0 B |  88 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000c001118400`     |
| removed |  -13.82 KiB | 83.9% → 0.0% |      13.8 KiB → 0 B |  85 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001115400`     |
| removed | -11.093 KiB | 67.4% → 0.0% |      11.1 KiB → 0 B |  57 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000c001118000`     |
| removed |  -10.46 KiB | 63.5% → 0.0% |      10.5 KiB → 0 B |  40 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001102400`     |
| removed | -10.398 KiB | 63.1% → 0.0% |      10.4 KiB → 0 B |  38 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c001104000`     |
| removed | -10.187 KiB | 61.9% → 0.0% |      10.2 KiB → 0 B |  34 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001150800`     |
| removed |  -9.968 KiB | 60.5% → 0.0% |      9.97 KiB → 0 B |  31 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000c001152800`    |
| removed |  -9.968 KiB | 60.5% → 0.0% |      9.97 KiB → 0 B |  31 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c0012d8000`     |
| removed |  -9.609 KiB | 58.3% → 0.0% |      9.61 KiB → 0 B |  23 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c00182f400`     |
| removed |  -8.625 KiB | 52.4% → 0.0% |      8.63 KiB → 0 B |  14 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c001101c00`    |
| removed |  -8.625 KiB | 52.4% → 0.0% |      8.63 KiB → 0 B |  14 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c0012c5c00`     |
| removed |  -8.398 KiB | 51.0% → 0.0% |       8.4 KiB → 0 B |  11 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001145c00`     |
|  -70.8% |  -8.203 KiB | 70.4% → 4.5% | 11.6 KiB → 3.38 KiB | 48 → 44 | `invokeExact_MT(Object, Object, Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                      |
|  -71.4% |  -8.164 KiB | 69.4% → 4.3% | 11.4 KiB → 3.27 KiB | 42 → 46 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`        |
| removed |  -8.109 KiB | 49.2% → 0.0% |      8.11 KiB → 0 B |   3 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c00138c800`     |
| removed |  -8.015 KiB | 48.7% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `<init>(int, int, MemorySegment)`                                                           | `java.nio.HeapByteBuffer`                               |
| removed |  -8.015 KiB | 48.7% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `allocate(int)`                                                                             | `java.nio.ByteBuffer`                                   |
| removed |  -8.015 KiB | 48.7% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `ensureRemaining(int)`                                                                      | `groovyjarjarantlr4.v4.runtime.CodePointBuffer$Builder` |
