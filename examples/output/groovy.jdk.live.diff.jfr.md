# Sampling profile diff

309 samples → 336 samples (+27 samples, +8.7%).

| Category | Change | Delta |             % |   Samples |
| -------- | -----: | ----: | ------------: | --------: |
| stdlib   |  +8.2% |   +25 | 98.7% → 98.2% | 305 → 330 |
| ours     | +50.0% |    +2 |   1.3% → 1.8% |     4 → 6 |

Hidden functions account for 97.4% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % | Samples | Function                                                                                                      | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +32.4% |   +11 | 11.0% → 13.4% | 34 → 45 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                              |
|  +62.5% |    +5 |   2.6% → 3.9% |  8 → 13 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                 |
| +200.0% |    +4 |   0.6% → 1.8% |   2 → 6 | `init(MemberName, Object)`                                                                                    | `java.lang.invoke.MethodHandleNatives`                                 |
|     new |    +4 |   0.0% → 1.2% |   0 → 4 | `wrapSink(Sink)`                                                                                              | `java.util.stream.AbstractPipeline`                                    |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `privateGetDeclaredMethods(boolean)`                                                                          | `java.lang.Class`                                                      |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                                  |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `collectViolations(SourceCode, RuleSet)`                                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                         |
|  +40.0% |    +2 |   1.6% → 2.1% |   5 → 7 | `getReturnState(int)`                                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`             |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `getClass()`                                                                                                  | `java.lang.Object`                                                     |
|  +25.0% |    +1 |   1.3% → 1.5% |   4 → 5 | `add(ATNConfig, PredictionContextCache)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                       |
|  +33.3% |    +1 |   1.0% → 1.2% |   3 → 4 | `getReachableTarget(Transition, int)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                  |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `checkCall(Object, Object)`                                                                                   | `org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite`              |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `addViolationForSunImport(ImportNode, SourceCode, List)`                                                      | `org.codenarc.rule.imports.ImportFromSunPackagesRule`                  |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `append(String)`                                                                                              | `java.lang.StringBuilder`                                              |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `<init>()`                                                                                                    | `org.codenarc.rule.basic.EmptyClassAstVisitor`                         |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `areBothTheSame(Expression, Expression)`                                                                      | `org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionAstVisitor` |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                                                                     | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`        |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `callGetProperty(Object)`                                                                                     | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                         | Location                                             |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|  -61.5% |    -8 | 4.2% → 1.5% |  13 → 5 | `newInstance(Class, int)`                                                                        | `java.lang.reflect.Array`                            |
|  -62.5% |    -5 | 2.6% → 0.9% |   8 → 3 | `matches(Method, String, Class[])`                                                               | `java.lang.PublicMethods$Key`                        |
| removed |    -4 | 1.3% → 0.0% |   4 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |
|  -80.0% |    -4 | 1.6% → 0.3% |   5 → 1 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                               | `java.lang.invoke.MethodHandles`                     |
|  -33.3% |    -4 | 3.9% → 2.4% |  12 → 8 | `getNode(Object)`                                                                                | `java.util.HashMap`                                  |
|  -80.0% |    -4 | 1.6% → 0.3% |   5 → 1 | `<init>(Method, boolean)`                                                                        | `java.lang.invoke.MemberName`                        |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `reflectionData()`                                                                               | `java.lang.Class`                                    |
|  -50.0% |    -2 | 1.3% → 0.6% |   4 → 2 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                   |
|  -16.7% |    -1 | 1.9% → 1.5% |   6 → 5 | `prepare()`                                                                                      | `java.lang.invoke.LambdaForm`                        |
|  -14.3% |    -1 | 2.3% → 1.8% |   7 → 6 | `putVal(int, Object, Object, boolean, boolean)`                                                  | `java.util.HashMap`                                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                                                        | `org.codehaus.groovy.ast.CodeVisitorSupport`         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getText()`                                                                                      | `org.codenarc.source.SourceFile`                     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getViolations(AstVisitor, SourceCode)`                                                          | `org.codenarc.rule.unused.UnusedPrivateFieldRule`    |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `valueOf(int)`                                                                                   | `java.lang.Integer`                                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                                                | `org.gmetrics.metric.abc.AbcAstVisitor`              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `writeFileViolations(Writer, FileResults)`                                                       | `org.codenarc.report.TextReportWriter`               |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                              | Location                                                                    |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------- | --------------------------------------------------------------------------- |
|   +7.1% |   +16 | 72.8% → 71.7% | 225 → 241 | `linkToCallSite(Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                          |
|  +19.7% |   +15 | 24.6% → 27.1% |   76 → 91 | `applyTo(SourceCode)`                                 | `org.codenarc.rule.AbstractRule`                                            |
|     new |   +14 |   0.0% → 4.2% |    0 → 14 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`                         |
|  +13.8% |   +11 | 25.9% → 27.1% |   80 → 91 | `linkToCallSite(Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                          |
|  +32.4% |   +11 | 11.0% → 13.4% |   34 → 45 | `newArray(Class, int)`                                | `java.lang.reflect.Array`                                                   |
|     new |   +11 |   0.0% → 3.3% |    0 → 11 | `linkToCallSite(Object, Object, long, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a801394400`                         |
|  +11.1% |   +10 | 29.1% → 29.8% |  90 → 100 | `doCall(Object)`                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +100.0% |    +9 |   2.9% → 5.4% |    9 → 18 | `visitMethodCallExpression(MethodCallExpression)`     | `org.codehaus.groovy.ast.CodeVisitorSupport`                                |
|  +19.0% |    +8 | 13.6% → 14.9% |   42 → 50 | `visitMethod(MethodNode)`                             | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +133.3% |    +8 |   1.9% → 4.2% |    6 → 14 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                                |
|  +36.8% |    +7 |   6.1% → 7.7% |   19 → 26 | `doCall(Object)`                                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   +9.9% |    +7 | 23.0% → 23.2% |   71 → 78 | `measureRuleProcessingTime(Rule, Closure)`            | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   +8.6% |    +6 | 22.7% → 22.6% |   70 → 76 | `applyTo(SourceCode, List)`                           | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  +10.2% |    +6 | 19.1% → 19.3% |   59 → 65 | `visitClass(ClassNode)`                               | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  +46.2% |    +6 |   4.2% → 5.7% |   13 → 19 | `visitBinaryExpression(BinaryExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                                |
| +600.0% |    +6 |   0.3% → 2.1% |     1 → 7 | `visitClass(ClassNode)`                               | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                     |
|     new |    +6 |   0.0% → 1.8% |     0 → 6 | `linkToCallSite(Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801390800`                         |
| +500.0% |    +5 |   0.3% → 1.8% |     1 → 6 | `loadClass(String)`                                   | `java.lang.ClassLoader`                                                     |
| +166.7% |    +5 |   1.0% → 2.4% |     3 → 8 | `callCurrent(GroovyObject, Object, Object)`           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                     |
| +500.0% |    +5 |   0.3% → 1.8% |     1 → 6 | `call(Object, Object)`                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                     |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                    | Location                                                                                     |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| removed |  -290 |  93.9% → 0.0% |   290 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`                                         |
|  -15.9% |   -23 | 46.9% → 36.3% | 145 → 122 | `linkToCallSite(Object, Object)`                                                            | `java.lang.invoke.Invokers$Holder`                                                           |
|  -31.5% |   -17 | 17.5% → 11.0% |   54 → 37 | `getAst()`                                                                                  | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -30.8% |   -16 | 16.8% → 10.7% |   52 → 36 | `init()`                                                                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -30.8% |   -16 | 16.8% → 10.7% |   52 → 36 | `isRuleSuppressed(Rule)`                                                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
| removed |   -10 |   3.2% → 0.0% |    10 → 0 | `linkToCallSite(Object, Object, long, Object)`                                              | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                                          |
| removed |    -9 |   2.9% → 0.0% |     9 → 0 | `linkToCallSite(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801134800`                                          |
|  -71.4% |    -5 |   2.3% → 0.6% |     7 → 2 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                          | `java.lang.invoke.MethodHandles`                                                             |
|  -50.0% |    -5 |   3.2% → 1.5% |    10 → 5 | `newInstance()`                                                                             | `java.lang.Class`                                                                            |
|  -50.0% |    -5 |   3.2% → 1.5% |    10 → 5 | `getAstVisitor()`                                                                           | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|  -62.5% |    -5 |   2.6% → 0.9% |     8 → 3 | `matches(Method, String, Class[])`                                                          | `java.lang.PublicMethods$Key`                                                                |
|  -71.4% |    -5 |   2.3% → 0.6% |     7 → 2 | `writeFileViolations(Writer, FileResults)`                                                  | `org.codenarc.report.TextReportWriter`                                                       |
|  -12.5% |    -4 |  10.4% → 8.3% |   32 → 28 | `linkToCallSite(Object, Object, Object, Object, Object)`                                    | `java.lang.invoke.Invokers$Holder`                                                           |
|   -5.2% |    -4 | 24.9% → 21.7% |   77 → 73 | `init()`                                                                                    | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -28.6% |    -4 |   4.5% → 3.0% |   14 → 10 | `getNode(Object)`                                                                           | `java.util.HashMap`                                                                          |
| removed |    -4 |   1.3% → 0.0% |     4 → 0 | `linkToCallSite(Object, long, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000801390400`                                          |
| removed |    -4 |   1.3% → 0.0% |     4 → 0 | `linkToCallSite(Object, int, Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x0000000801449000`                                          |
|  -42.9% |    -3 |   2.3% → 1.2% |     7 → 4 | `linkToCallSite(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                                                           |
|  -27.3% |    -3 |   3.6% → 2.4% |    11 → 8 | `doCall(Object)`                                                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |
|  -75.0% |    -3 |   1.3% → 0.3% |     4 → 1 | `doCall(Object)`                                                                            | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |

# Allocated heap profile diff

Allocated 11.9 GiB (+63.211 MiB, +0.5%) over 6,276 samples → 6,325 samples (1.94 MiB → 1.93 MiB per sample).

| Category | Change |        Delta |             % |               Size |       Samples |
| -------- | -----: | -----------: | ------------: | -----------------: | ------------: |
| stdlib   |    ~0% | +598.851 KiB | 99.2% → 98.7% |           11.8 GiB | 6,172 → 6,220 |
| ours     | +62.8% |  +62.628 MiB |   0.8% → 1.3% | 99.7 MiB → 162 MiB |       51 → 53 |
| native   |  -5.3% |   -2.117 KiB |         <0.1% |  40.1 KiB → 38 KiB |       53 → 52 |

Hidden functions account for 97.7% of bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |            % |                Size |   Samples | Function                                                       | Location                                                                        |
| -------: | -----------: | -----------: | ------------------: | --------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  +144.2% | +161.038 MiB |  0.9% → 2.2% |   112 MiB → 273 MiB |   54 → 71 | `make(MethodType, LambdaForm, Object, Object, Object)`         | `java.lang.invoke.BoundMethodHandle$Species_LLL`                                |
|   +34.2% |   +78.22 MiB |  1.9% → 2.5% |   229 MiB → 307 MiB | 121 → 154 | `lambdaFormEditor(LambdaForm)`                                 | `java.lang.invoke.LambdaFormEditor`                                             |
| +3000.0% |   +59.97 MiB | <0.1% → 0.5% |      2 MiB → 62 MiB |     1 → 2 | `getViolationLocationString(Violation, String)`                | `org.codenarc.report.TextReportWriter`                                          |
|   +10.3% |  +54.731 MiB |  4.4% → 4.8% |   533 MiB → 588 MiB | 276 → 308 | `fillInStackTrace(int)`                                        | `java.lang.Throwable`                                                           |
|   +21.1% |  +52.448 MiB |  2.0% → 2.5% |   249 MiB → 302 MiB | 127 → 152 | `make(MethodType, LambdaForm, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLL`                               |
|   +16.2% |  +31.972 MiB |  1.6% → 1.9% |   198 MiB → 230 MiB | 101 → 119 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                                                             |
|    +7.8% |  +20.888 MiB |  2.2% → 2.4% |   267 MiB → 288 MiB | 137 → 145 | `stream(Spliterator, boolean)`                                 | `java.util.stream.StreamSupport`                                                |
|  +300.0% |  +11.994 MiB | <0.1% → 0.1% |      4 MiB → 16 MiB |     2 → 8 | `<init>()`                                                     | `org.codenarc.rule.AbstractAstVisitor`                                          |
|    +3.5% |  +11.666 MiB |  2.7% → 2.8% |   331 MiB → 342 MiB | 164 → 174 | `newArray(Class, int)`                                         | `java.lang.reflect.Array`                                                       |
|   +75.2% |   +9.015 MiB |  0.1% → 0.2% |     12 MiB → 21 MiB |    6 → 11 | `<init>()`                                                     | `java.util.HashSet`                                                             |
|    +1.8% |   +6.114 MiB |  2.8% → 2.9% |   346 MiB → 352 MiB | 173 → 178 | `make(MethodType, LambdaForm, Object, Object)`                 | `java.lang.invoke.BoundMethodHandle$Species_LL`                                 |
|      new |   +3.998 MiB | 0.0% → <0.1% |         0 B → 4 MiB |     0 → 2 | `applyTo(SourceCode)`                                          | `org.codenarc.rule.AbstractRule`                                                |
|      new |   +3.998 MiB | 0.0% → <0.1% |         0 B → 4 MiB |     0 → 2 | `removeAnyViolationsForSameLine(int)`                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |
|   +12.1% |   +2.011 MiB |  0.1% → 0.2% | 16.6 MiB → 18.6 MiB |    12 → 9 | `toString()`                                                   | `java.lang.StringBuilder`                                                       |
|  +100.0% |   +1.999 MiB |        <0.1% |       2 MiB → 4 MiB |     1 → 2 | `doCall(Object)`                                               | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
|  +100.0% |   +1.999 MiB |        <0.1% |       2 MiB → 4 MiB |     1 → 2 | `isRuleSuppressed(Rule)`                                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                     |
|      new |   +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |     0 → 1 | `visitConstructorCallExpression(ConstructorCallExpression)`    | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor`              |
|      new |   +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |     0 → 1 | `<init>(String)`                                               | `org.codenarc.plugin.disablerules.LookupTable`                                  |
|      new |   +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |     0 → 1 | `visitReturnStatement(ReturnStatement)`                        | `org.codenarc.rule.design.ArrayReturnTracker`                                   |
|      new |   +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |     0 → 1 | `visitMethodEx(MethodNode)`                                    | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`                  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |              Size |   Samples | Function                                                                                      | Location                                                                              |
| ------: | ----------: | -----------: | ----------------: | --------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -10.8% | -88.795 MiB |  6.8% → 6.0% | 821 MiB → 732 MiB | 400 → 375 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                                                         |
|  -13.6% | -61.582 MiB |  3.7% → 3.2% | 454 MiB → 393 MiB | 229 → 197 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                                                   |
|  -21.2% | -56.806 MiB |  2.2% → 1.7% | 268 MiB → 212 MiB | 131 → 105 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                                         |
|  -18.5% | -51.351 MiB |  2.3% → 1.9% | 278 MiB → 227 MiB | 143 → 118 | `of(byte, int, int)`                                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey`                                      |
|   -5.5% |  -35.88 MiB |  5.4% → 5.0% | 652 MiB → 616 MiB | 331 → 311 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                       |
|   -6.8% | -24.945 MiB |  3.0% → 2.8% | 366 MiB → 341 MiB | 190 → 162 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                                             |
|   -6.9% | -20.934 MiB |  2.5% → 2.3% | 305 MiB → 284 MiB | 150 → 141 | `divideAndRemainderKnuth(BigInteger)`                                                         | `java.math.BigInteger`                                                                |
|   -5.3% | -14.533 MiB |  2.3% → 2.1% | 274 MiB → 260 MiB | 141 → 135 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                                                    |
|  -10.1% |  -6.967 MiB |  0.6% → 0.5% | 68.9 MiB → 62 MiB |   34 → 31 | `matcher(CharSequence)`                                                                       | `java.util.regex.Pattern`                                                             |
|   -2.6% |  -6.445 MiB |  2.0% → 1.9% | 245 MiB → 238 MiB | 121 → 119 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                                                         |
| removed |  -3.998 MiB | <0.1% → 0.0% |       4 MiB → 0 B |     2 → 0 | `processParameters(Parameter[], String)`                                                      | `org.codenarc.rule.naming.ParameterNameAstVisitor`                                    |
| removed |  -3.998 MiB | <0.1% → 0.0% |       4 MiB → 0 B |     2 → 0 | `markVariableAsReferenced(String, VariableExpression)`                                        | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |
|  -48.1% |  -3.701 MiB | 0.1% → <0.1% |   7.7 MiB → 4 MiB |     4 → 2 | `doCall(Object)`                                                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`            |
| removed |  -3.347 MiB | <0.1% → 0.0% |    3.35 MiB → 0 B |     2 → 0 | `doCall(Object)`                                                                              | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3` |
| removed |  -1.999 MiB | <0.1% → 0.0% |       2 MiB → 0 B |     1 → 0 | `checkForCorrectColumn(ASTNode, String, int)`                                                 | `org.codenarc.rule.formatting.IndentationAstVisitor`                                  |
| removed |  -1.999 MiB | <0.1% → 0.0% |       2 MiB → 0 B |     1 → 0 | `visitClass(ClassNode)`                                                                       | `org.codenarc.rule.AbstractFieldVisitor`                                              |
| removed |  -1.999 MiB | <0.1% → 0.0% |       2 MiB → 0 B |     1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                                             | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |
| removed |  -1.999 MiB | <0.1% → 0.0% |       2 MiB → 0 B |     1 → 0 | `<init>(AbstractAstVisitor)`                                                                  | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                        |
| removed |  -1.999 MiB | <0.1% → 0.0% |       2 MiB → 0 B |     1 → 0 | `visitBinaryExpression(BinaryExpression)`                                                     | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`                         |
| removed |  -1.999 MiB | <0.1% → 0.0% |       2 MiB → 0 B |     1 → 0 | `visitMethodEx(MethodNode)`                                                                   | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`                     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                            |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|      new |   +1.047 GiB |   0.0% → 8.8% |      0 B → 1.05 GiB |       0 → 543 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801394400`                                 |
|      new | +705.444 MiB |   0.0% → 5.8% |       0 B → 705 MiB |       0 → 357 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801390800`                                 |
|      new | +442.794 MiB |   0.0% → 3.6% |       0 B → 443 MiB |       0 → 153 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a80144ac00`                                 |
|      new | +294.775 MiB |   0.0% → 2.4% |       0 B → 295 MiB |       0 → 150 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8013bd000`                                 |
|      new | +203.694 MiB |   0.0% → 1.7% |       0 B → 204 MiB |       0 → 146 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`                                 |
|  +144.1% | +161.745 MiB |   0.9% → 2.2% |   112 MiB → 274 MiB |       55 → 72 | `make(MethodType, LambdaForm, Object, Object, Object)`        | `java.lang.invoke.BoundMethodHandle$Species_LLL`                                    |
|    +8.0% | +109.072 MiB | 11.3% → 12.1% | 1.34 GiB → 1.45 GiB |     684 → 714 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                                  |
|   +29.7% |  +97.946 MiB |   2.7% → 3.5% |   330 MiB → 428 MiB |     146 → 145 | `doCall(Object)`                                              | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
|   +28.0% |  +93.948 MiB |   2.8% → 3.5% |   336 MiB → 430 MiB |     149 → 146 | `getNumberOfViolationsWithPriority(int, boolean)`             | `org.codenarc.results.FileResults`                                                  |
|   +28.0% |  +93.948 MiB |   2.8% → 3.5% |   336 MiB → 430 MiB |     149 → 146 | `getNumberOfViolationsWithPriority(int)`                      | `org.codenarc.results.FileResults`                                                  |
|      new |   +91.38 MiB |   0.0% → 0.7% |      0 B → 91.4 MiB |        0 → 46 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801472000`                                 |
|   +30.5% |  +85.953 MiB |   2.3% → 3.0% |   282 MiB → 368 MiB |     122 → 115 | `doCall(Object)`                                              | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|   +34.2% |   +78.22 MiB |   1.9% → 2.5% |   229 MiB → 307 MiB |     121 → 154 | `lambdaFormEditor(LambdaForm)`                                | `java.lang.invoke.LambdaFormEditor`                                                 |
|   +22.1% |  +76.374 MiB |   2.8% → 3.4% |   345 MiB → 421 MiB |     167 → 211 | `findRegex(Object, Object)`                                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                 |
|   +32.4% |  +69.886 MiB |   1.8% → 2.3% |   216 MiB → 285 MiB |     108 → 141 | `checkDeclaration(ASTNode, String, String)`                   | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                 |
|    +3.0% |  +67.054 MiB | 18.3% → 18.8% | 2.18 GiB → 2.24 GiB | 1,129 → 1,163 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                              |
| +1650.0% |  +65.967 MiB |  <0.1% → 0.6% |      4 MiB → 70 MiB |         2 → 6 | `getViolationLocationString(Violation, String)`               | `org.codenarc.report.TextReportWriter`                                              |
|    +9.1% |  +64.619 MiB |   5.8% → 6.3% |   710 MiB → 775 MiB |     355 → 389 | `compile(String)`                                             | `java.util.regex.Pattern`                                                           |
|   +31.4% |  +63.889 MiB |   1.7% → 2.2% |   204 MiB → 267 MiB |     102 → 133 | `findLineWithDeclaration(ASTNode, String)`                    | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                 |
|   +51.9% |  +55.975 MiB |   0.9% → 1.3% |   108 MiB → 164 MiB |       37 → 53 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                | Location                                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed |   -1.009 GiB |   8.5% → 0.0% |      1.01 GiB → 0 B |       514 → 0 | `linkToCallSite(Object, Object, long, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                        |
| removed | -699.503 MiB |   5.8% → 0.0% |       700 MiB → 0 B |       346 → 0 | `linkToCallSite(Object, long, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801390400`                        |
| removed | -348.847 MiB |   2.9% → 0.0% |       349 MiB → 0 B |       156 → 0 | `linkToCallSite(Object, int, Object, Object)`                                           | `java.lang.invoke.LambdaForm$MH.0x0000000801449000`                        |
| removed | -280.708 MiB |   2.3% → 0.0% |       281 MiB → 0 B |       142 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`                                   | `java.lang.invoke.LambdaForm$MH.0x00000008013b9000`                        |
| removed | -241.906 MiB |   2.0% → 0.0% |       242 MiB → 0 B |       165 → 0 | `linkToCallSite(Object, Object)`                                                        | `java.lang.invoke.LambdaForm$MH.0x0000000801134800`                        |
|  -18.2% | -123.708 MiB |   5.6% → 4.6% |   681 MiB → 557 MiB |     324 → 280 | `insertParameterTypes(int, Class[])`                                                    | `java.lang.invoke.MethodType`                                              |
|   -2.7% |   -94.17 MiB | 28.5% → 27.5% | 3.38 GiB → 3.29 GiB | 1,752 → 1,712 | `processFile(String, DirectoryResults, RuleSet)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| removed |  -91.861 MiB |   0.8% → 0.0% |      91.9 MiB → 0 B |        47 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x0000000801470400`                        |
|  -10.8% |  -88.766 MiB |   6.8% → 6.0% |   821 MiB → 732 MiB |     400 → 376 | `makeImpl(Class, Class[], boolean)`                                                     | `java.lang.invoke.MethodType`                                              |
|   -2.0% |  -82.616 MiB | 33.8% → 33.0% | 4.02 GiB → 3.94 GiB | 2,075 → 2,053 | `collectViolations(SourceCode, RuleSet)`                                                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  -26.6% |  -73.963 MiB |   2.3% → 1.7% |   278 MiB → 204 MiB |       90 → 87 | `writeFileViolations(Writer, FileResults)`                                              | `org.codenarc.report.TextReportWriter`                                     |
|  -14.3% |  -66.867 MiB |   3.8% → 3.3% |   467 MiB → 400 MiB |     239 → 205 | `doCall(Object)`                                                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|  -34.0% |  -65.967 MiB |   1.6% → 1.0% |   194 MiB → 128 MiB |       48 → 49 | `doCall(Object)`                                                                        | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`       |
|  -18.0% |  -62.763 MiB |   2.9% → 2.3% |   349 MiB → 286 MiB |     158 → 144 | `visitClosureExpression(ClosureExpression)`                                             | `org.codehaus.groovy.ast.CodeVisitorSupport`                               |
|  -13.6% |  -61.582 MiB |   3.7% → 3.2% |   454 MiB → 393 MiB |     229 → 197 | `makeBlockInliningWrapper(MethodHandle)`                                                | `java.lang.invoke.MethodHandleImpl`                                        |
|  -21.2% |  -56.806 MiB |   2.2% → 1.7% |   268 MiB → 212 MiB |     131 → 105 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                              |
| removed |  -55.956 MiB |   0.5% → 0.0% |        56 MiB → 0 B |        27 → 0 | `linkToCallSite(Object, Object, int, Object, Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x0000000801402800`                        |
|  -18.5% |  -51.351 MiB |   2.3% → 1.9% |   278 MiB → 227 MiB |     143 → 118 | `of(byte, int, int)`                                                                    | `java.lang.invoke.LambdaFormEditor$TransformKey`                           |
|   -6.0% |  -49.917 MiB |   6.8% → 6.3% |   825 MiB → 775 MiB |     404 → 393 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`                           | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  -56.1% |  -37.611 MiB |   0.6% → 0.2% |   67 MiB → 29.4 MiB |       31 → 15 | `visitBlockStatement(BlockStatement)`                                                   | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |

# Retained heap profile diff

Retained 325 KiB → 8.95 KiB (-316.515 KiB, -97.3%) over 117 samples → 114 samples (2.78 KiB → 80.4 B per sample).

| Category | Change |        Delta |      % |               Size |   Samples |
| -------- | -----: | -----------: | -----: | -----------------: | --------: |
| stdlib   | -97.3% | -316.515 KiB | 100.0% | 325 KiB → 8.95 KiB | 117 → 114 |

Hidden functions account for 100.0% of bytes retained, so the hottest are also shown.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|  Change |  Delta |             % |             Size | Samples | Function                         | Location                            |
| ------: | -----: | ------------: | ---------------: | ------: | -------------------------------- | ----------------------------------- |
| +600.0% | +912 B | <0.1% → 11.6% | 152 B → 1.04 KiB |   1 → 7 | `getPlainNodeReference(boolean)` | `org.codehaus.groovy.ast.ClassNode` |
| +154.2% | +592 B |  0.1% → 10.7% |    384 B → 976 B |   5 → 6 | `getDeclaredMethods0(boolean)`   | `java.lang.Class`                   |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

| Change |        Delta |             % |                Size | Samples | Function                                                       | Location                                                |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| -99.6% | -287.046 KiB | 88.5% → 11.4% |  288 KiB → 1.02 KiB |   3 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                |
| -74.7% |       -3 KiB |  1.2% → 11.4% | 4.02 KiB → 1.02 KiB |       1 | `resize(int)`                                                  | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -5.3% |        -32 B |   0.2% → 6.3% |       608 B → 576 B |       2 | `resize()`                                                     | `java.util.HashMap`                                     |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|   Change |     Delta |             % |                Size | Samples | Function                                                  | Location                                                           |
| -------: | --------: | ------------: | ------------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------ |
|      new | +2.39 KiB |  0.0% → 26.7% |      0 B → 2.39 KiB |  0 → 21 | `linkToCallSite(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`                |
|  +621.1% |    +944 B | <0.1% → 12.0% |    152 B → 1.07 KiB |   1 → 9 | `getPlainNodeReference(boolean)`                          | `org.codehaus.groovy.ast.ClassNode`                                |
|   +55.6% |    +672 B |  0.4% → 20.5% | 1.18 KiB → 1.84 KiB | 20 → 19 | `doCall(Object)`                                          | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2` |
|   +51.9% |    +656 B |  0.4% → 21.0% | 1.23 KiB → 1.88 KiB | 22 → 20 | `assertClassImplementsRuleInterface(Class)`               | `org.codenarc.ruleset.RuleSetUtil`                                 |
|  +154.2% |    +592 B |  0.1% → 10.7% |       384 B → 976 B |   5 → 6 | `getDeclaredMethods0(boolean)`                            | `java.lang.Class`                                                  |
|  +672.7% |    +592 B |  <0.1% → 7.4% |        88 B → 680 B |   1 → 2 | `callConstructor(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`            |
|  +618.2% |    +544 B |  <0.1% → 6.9% |        88 B → 632 B |   1 → 2 | `call(Object, Object)`                                    | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`            |
|  +618.2% |    +544 B |  <0.1% → 6.9% |        88 B → 632 B |   1 → 2 | `calculate(MethodNode, SourceCode)`                       | `org.gmetrics.metric.abc.AbcMetric`                                |
|      new |    +528 B |   0.0% → 5.8% |         0 B → 528 B |   0 → 1 | `doCall(Object)`                                          | `org.codenarc.CodeNarc$_execute_closure2`                          |
|  +572.7% |    +504 B |  <0.1% → 6.5% |        88 B → 592 B |       1 | `getMagnitude()`                                          | `org.gmetrics.metric.abc.AbcVector`                                |
|  +572.7% |    +504 B |  <0.1% → 6.5% |        88 B → 592 B |       1 | `callGroovyObjectGetProperty(Object)`                     | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`            |
|  +572.7% |    +504 B |  <0.1% → 6.5% |        88 B → 592 B |       1 | `<init>(Metric, MetricLevel, AbcVector, Integer)`         | `org.gmetrics.metric.abc.result.AbcMetricResult`                   |
| +1220.0% |    +488 B |  <0.1% → 5.8% |        40 B → 528 B |       1 | `execute(String[])`                                       | `org.codenarc.CodeNarc`                                            |
|   +31.3% |    +168 B |   0.2% → 7.7% |       536 B → 704 B | 10 → 14 | `visitClass(ClassNode)`                                   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                  |
|  +100.0% |    +136 B |  <0.1% → 3.0% |       136 B → 272 B |   4 → 6 | `<clinit>()`                                              | `groovy.lang.Closure`                                              |
|  +100.0% |    +136 B |  <0.1% → 3.0% |       136 B → 272 B |   4 → 6 | `<clinit>()`                                              | `org.codenarc.CodeNarc`                                            |
|  +340.0% |    +136 B |  <0.1% → 1.9% |        40 B → 176 B |   1 → 2 | `initializeRuleRegistry()`                                | `org.codenarc.CodeNarcRunner`                                      |
|      new |    +128 B |   0.0% → 1.4% |         0 B → 128 B |   0 → 2 | `callCurrent(GroovyObject, Object, Object)`               | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`            |
|  +214.3% |    +120 B |  <0.1% → 1.9% |        56 B → 176 B |   1 → 2 | `loadRules()`                                             | `org.codenarc.ruleregistry.PropertiesFileRuleRegistry`             |
|  +214.3% |    +120 B |  <0.1% → 1.9% |        56 B → 176 B |   1 → 2 | `<init>()`                                                | `org.codenarc.ruleregistry.PropertiesFileRuleRegistry`             |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size | Samples | Function                                                       | Location                                                                   |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -98.1% | -317.335 KiB | 99.4% → 69.8% |  324 KiB → 6.24 KiB | 87 → 80 | `linkToCallSite(Object, Object, Object)`                       | `java.lang.invoke.Invokers$Holder`                                         |
|  -99.6% | -287.046 KiB | 88.5% → 11.4% |  288 KiB → 1.02 KiB |   3 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                                   |
|  -99.3% | -281.304 KiB | 87.1% → 23.7% |  283 KiB → 2.12 KiB |      24 | `init()`                                                       | `org.codenarc.source.AbstractSourceCode`                                   |
|  -96.8% |  -37.273 KiB | 11.8% → 14.0% | 38.5 KiB → 1.25 KiB | 33 → 24 | `applyTo(SourceCode)`                                          | `org.codenarc.rule.AbstractRule`                                           |
|  -96.8% |  -37.171 KiB | 11.8% → 13.9% | 38.4 KiB → 1.24 KiB | 31 → 24 | `applyTo(SourceCode, List)`                                    | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  -97.1% |      -37 KiB | 11.7% → 12.2% | 38.1 KiB → 1.09 KiB | 24 → 21 | `doCall(Object)`                                               | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -98.9% |   -36.89 KiB |  11.5% → 4.5% |    37.3 KiB → 408 B |  13 → 8 | `newInstance()`                                                | `java.lang.Class`                                                          |
|  -98.9% |   -36.89 KiB |  11.5% → 4.5% |    37.3 KiB → 408 B |  13 → 8 | `getAstVisitor()`                                              | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  -89.2% |  -35.015 KiB | 12.1% → 47.2% | 39.2 KiB → 4.22 KiB | 48 → 45 | `getMetaClass()`                                               | `org.codehaus.groovy.reflection.ClassInfo`                                 |
| removed |  -32.046 KiB |   9.8% → 0.0% |        32 KiB → 0 B |   2 → 0 | `$getStaticMetaClass()`                                        | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`              |
| removed |  -32.046 KiB |   9.8% → 0.0% |        32 KiB → 0 B |   2 → 0 | `<init>()`                                                     | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`              |
|  -97.9% |  -26.531 KiB |   8.3% → 6.3% |    27.1 KiB → 576 B | 16 → 13 | `getAst()`                                                     | `org.codenarc.source.AbstractSourceCode`                                   |
|  -93.3% |  -26.093 KiB |  8.6% → 21.0% |   28 KiB → 1.88 KiB |      35 | `linkToCallSite(Object, Object)`                               | `java.lang.invoke.Invokers$Holder`                                         |
|  -89.4% |   -4.078 KiB |   1.4% → 5.4% |    4.56 KiB → 496 B | 13 → 11 | `init()`                                                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -99.2% |   -4.078 KiB |   1.3% → 0.3% |     4.11 KiB → 32 B |   4 → 1 | `doCall(Object)`                                               | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
| removed |   -4.039 KiB |   1.2% → 0.0% |      4.04 KiB → 0 B |   2 → 0 | `$getStaticMetaClass()`                                        | `org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`      |
| removed |   -4.039 KiB |   1.2% → 0.0% |      4.04 KiB → 0 B |   2 → 0 | `<init>()`                                                     | `org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`      |
|  -89.3% |   -4.023 KiB |   1.4% → 5.4% |    4.51 KiB → 496 B | 12 → 11 | `isRuleSuppressed(Rule)`                                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -99.4% |   -4.015 KiB |   1.2% → 0.3% |     4.04 KiB → 24 B |   2 → 1 | `<init>(String, int)`                                          | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|  -99.4% |   -4.015 KiB |   1.2% → 0.3% |     4.04 KiB → 24 B |   2 → 1 | `<init>(String)`                                               | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
