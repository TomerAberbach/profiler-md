# Sampling profile diff

Collected 296 samples → 283 samples (-13 samples, -4.4%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  -5.1% |   -15 | 99.0% → 98.2% | 293 → 278 |
| Ours             | +66.7% |    +2 |   1.0% → 1.8% |     3 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                                      | Location                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +88.2% |   +15 | 5.7% → 11.3% | 17 → 32 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                               |
|  +44.4% |    +4 |  3.0% → 4.6% |  9 → 13 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`  |
|     new |    +4 |  0.0% → 1.4% |   0 → 4 | `getTreeNode(int, Object)`                                                                                    | `java.util.HashMap$TreeNode`                            |
|     new |    +4 |  0.0% → 1.4% |   0 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                 | `java.util.zip.Inflater`                                |
|  +33.3% |    +3 |  3.0% → 4.2% |  9 → 12 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                     |
| +300.0% |    +3 |  0.3% → 1.4% |   1 → 4 | `reflectionData()`                                                                                            | `java.lang.Class`                                       |
|     new |    +3 |  0.0% → 1.1% |   0 → 3 | `getBooleanAttributes0(File)`                                                                                 | `java.io.UnixFileSystem`                                |
| +200.0% |    +2 |  0.3% → 1.1% |   1 → 3 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                   |
| +200.0% |    +2 |  0.3% → 1.1% |   1 → 3 | `sync(int)`                                                                                                   | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`     |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `getTarget(int)`                                                                                              | `groovyjarjarantlr4.v4.runtime.dfa.DFAState`            |
| +100.0% |    +2 |  0.7% → 1.4% |   2 → 4 | `transform(ATNState, boolean)`                                                                                | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`           |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                                  | `java.math.MutableBigInteger`                           |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `methodType(Class, Class[], boolean)`                                                                         | `java.lang.invoke.MethodType`                           |
|  +50.0% |    +2 |  1.4% → 2.1% |   4 → 6 | `getReachableTarget(Transition, int)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`   |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `allocateInstance(Class)`                                                                                     | `jdk.internal.misc.Unsafe`                              |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `seek0(long)`                                                                                                 | `java.io.RandomAccessFile`                              |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `getPlainNodeReference(boolean)`                                                                              | `org.codehaus.groovy.ast.ClassNode`                     |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `checkPtypes(Class[])`                                                                                        | `java.lang.invoke.MethodType`                           |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `execute(Lexer, CharStream, int)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor` |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `sameClasses(Class[], Object[], boolean)`                                                                     | `org.codehaus.groovy.runtime.MetaClassHelper`           |

##### Ours

| Change | Delta |           % | Samples | Function                                            | Location                                                                                |
| -----: | ----: | ----------: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `visitClass(ClassNode)`                             | `org.codenarc.rule.AbstractMethodVisitor`                                               |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `super$2$visitBinaryExpression(BinaryExpression)`   | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`                     |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `<init>(Object, Object)`                            | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor$_visitClassEx_closure1` |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`                           |
|    new |    +1 | 0.0% → 0.4% |   0 → 1 | `isSingleVariable(Object)`                          | `org.gmetrics.metric.abc.AbcAstVisitor`                                                 |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                             | Location                                                       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
|  -75.0% |    -6 | 2.7% → 0.7% |   8 → 2 | `getNode(Object)`                                                                                    | `java.util.HashMap`                                            |
|  -80.0% |    -4 | 1.7% → 0.4% |   5 → 1 | `prepare()`                                                                                          | `java.lang.invoke.LambdaForm`                                  |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                        |
|  -60.0% |    -3 | 1.7% → 0.7% |   5 → 2 | `resize()`                                                                                           | `java.util.HashMap`                                            |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `atom()`                                                                                             | `java.util.regex.Pattern`                                      |
|  -50.0% |    -2 | 1.4% → 0.7% |   4 → 2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`        | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001000400`            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `clone()`                                                                                            | `java.lang.Object`                                             |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `asType(MethodType)`                                                                                 | `java.lang.invoke.MethodHandle`                                |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`         |
|  -33.3% |    -2 | 2.0% → 1.4% |   6 → 4 | `get(Object)`                                                                                        | `java.util.concurrent.ConcurrentHashMap`                       |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `execATN(CharStream, DFAState)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`          |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `invoke(Object, int)`                                                                                | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `getClassId(Class)`                                                                                  | `jdk.jfr.internal.JVM`                                         |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `wrapSink(Sink)`                                                                                     | `java.util.stream.AbstractPipeline`                            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                        | `java.lang.invoke.MethodHandleImpl`                            |
|  -66.7% |    -2 | 1.0% → 0.4% |   3 → 1 | `open0(String)`                                                                                      | `java.io.FileInputStream`                                      |
|  -40.0% |    -2 | 1.7% → 1.1% |   5 → 3 | `getReturnState(int)`                                                                                | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`     |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `insertParameterTypes(int, Class[])`                                                                 | `java.lang.invoke.MethodType`                                  |
|  -66.7% |    -2 | 1.0% → 0.4% |   3 → 1 | `equals(Object)`                                                                                     | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |

##### Ours

|  Change | Delta |           % | Samples | Function                       | Location                                                           |
| ------: | ----: | ----------: | ------: | ------------------------------ | ------------------------------------------------------------------ |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitField(FieldNode)`        | `org.codenarc.rule.design.FinalClassWithProtectedMemberAstVisitor` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `isSingleLineClassViolation()` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`    |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(String)`               | `org.codenarc.rule.groovyism.ExplicitTypeInstantiationAstVisitor`  |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|    Change | Delta |             % |   Samples | Function                                                     | Location                                                                   |
| --------: | ----: | ------------: | --------: | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
|   +535.3% |  +182 | 11.5% → 76.3% |  34 → 216 | `invoke(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`                        |
| +12100.0% |  +121 |  0.3% → 43.1% |   1 → 122 | `invoke(Object, Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`                        |
| +10700.0% |  +107 |  0.3% → 38.2% |   1 → 108 | `invoke(Object, Object)`                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001141000`                        |
|  +4250.0% |   +85 |  0.7% → 30.7% |    2 → 87 | `invoke(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400`                        |
|   +730.0% |   +73 |  3.4% → 29.3% |   10 → 83 | `invoke(Object, Object)`                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001150800`                        |
|  +5800.0% |   +58 |  0.3% → 20.8% |    1 → 59 | `invoke(Object, Object)`                                     | `java.lang.invoke.LambdaForm$MH.0x000000700182c800`                        |
|   +550.0% |   +55 |  3.4% → 23.0% |   10 → 65 | `invoke(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$MH.0x00000070013db400`                        |
|   +533.3% |   +48 |  3.0% → 20.1% |    9 → 57 | `invoke(Object, Object)`                                     | `java.lang.invoke.LambdaForm$MH.0x00000070010bc000`                        |
|   +109.1% |   +48 | 14.9% → 32.5% |   44 → 92 | `invoke(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$MH.0x00000070013d2400`                        |
|   +363.6% |   +40 |  3.7% → 18.0% |   11 → 51 | `invoke(Object, Object)`                                     | `java.lang.invoke.LambdaForm$MH.0x000000700138d400`                        |
|  +1233.3% |   +37 |  1.0% → 14.1% |    3 → 40 | `invoke(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$MH.0x00000070012c5c00`                        |
|    +27.3% |   +27 | 33.4% → 44.5% |  99 → 126 | `invokeInterface(Object, Object, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400`                       |
|    +36.6% |   +26 | 24.0% → 34.3% |   71 → 97 | `doCall(Object)`                                             | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  +1250.0% |   +25 |   0.7% → 9.5% |    2 → 27 | `invoke(Object, Object, Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x0000007001607c00`                        |
|  +1800.0% |   +18 |   0.3% → 6.7% |    1 → 19 | `invoke(Object, Object)`                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001105400`                        |
|   +340.0% |   +17 |   1.7% → 7.8% |    5 → 22 | `invoke(Object, Object, Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x00000070012b8400`                        |
|    +68.2% |   +15 |  7.4% → 13.1% |   22 → 37 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|    +68.2% |   +15 |  7.4% → 13.1% |   22 → 37 | `provide(Object)`                                            | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x00000070010b6d70` |
|    +11.9% |   +15 | 42.6% → 49.8% | 126 → 141 | `invokeSpecial(Object, Object, Object)`                      | `java.lang.invoke.DirectMethodHandle$Holder`                               |
|    +88.2% |   +15 |  5.7% → 11.3% |   17 → 32 | `newArray(Class, int)`                                       | `java.lang.reflect.Array`                                                  |

##### Standard library

|    Change | Delta |             % |   Samples | Function                                                                                       | Location                                                                   |
| --------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|   +535.3% |  +182 | 11.5% → 76.3% |  34 → 216 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`                        |
| +12100.0% |  +121 |  0.3% → 43.1% |   1 → 122 | `invoke(Object, Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`                        |
| +10700.0% |  +107 |  0.3% → 38.2% |   1 → 108 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001141000`                        |
|  +4250.0% |   +85 |  0.7% → 30.7% |    2 → 87 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400`                        |
|   +730.0% |   +73 |  3.4% → 29.3% |   10 → 83 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001150800`                        |
|  +5800.0% |   +58 |  0.3% → 20.8% |    1 → 59 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700182c800`                        |
|   +550.0% |   +55 |  3.4% → 23.0% |   10 → 65 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070013db400`                        |
|   +533.3% |   +48 |  3.0% → 20.1% |    9 → 57 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x00000070010bc000`                        |
|   +109.1% |   +48 | 14.9% → 32.5% |   44 → 92 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070013d2400`                        |
|   +363.6% |   +40 |  3.7% → 18.0% |   11 → 51 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700138d400`                        |
|  +1233.3% |   +37 |  1.0% → 14.1% |    3 → 40 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070012c5c00`                        |
|    +27.3% |   +27 | 33.4% → 44.5% |  99 → 126 | `invokeInterface(Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400`                       |
|  +1250.0% |   +25 |   0.7% → 9.5% |    2 → 27 | `invoke(Object, Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x0000007001607c00`                        |
|  +1800.0% |   +18 |   0.3% → 6.7% |    1 → 19 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001105400`                        |
|   +340.0% |   +17 |   1.7% → 7.8% |    5 → 22 | `invoke(Object, Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x00000070012b8400`                        |
|    +68.2% |   +15 |  7.4% → 13.1% |   22 → 37 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)`                                   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|    +68.2% |   +15 |  7.4% → 13.1% |   22 → 37 | `provide(Object)`                                                                              | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x00000070010b6d70` |
|    +11.9% |   +15 | 42.6% → 49.8% | 126 → 141 | `invokeSpecial(Object, Object, Object)`                                                        | `java.lang.invoke.DirectMethodHandle$Holder`                               |
|    +88.2% |   +15 |  5.7% → 11.3% |   17 → 32 | `newArray(Class, int)`                                                                         | `java.lang.reflect.Array`                                                  |
|    +60.9% |   +14 |  7.8% → 13.1% |   23 → 37 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |

##### Ours

|  Change | Delta |             % | Samples | Function                                          | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  +36.6% |   +26 | 24.0% → 34.3% | 71 → 97 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                   |
|  +10.8% |    +7 | 22.0% → 25.4% | 65 → 72 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|  +10.0% |    +7 | 23.6% → 27.2% | 70 → 77 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                             |
|  +11.1% |    +7 | 21.3% → 24.7% | 63 → 70 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|     new |    +5 |   0.0% → 1.8% |   0 → 5 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
| +200.0% |    +4 |   0.7% → 2.1% |   2 → 6 | `getAstVisitor()`                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
| +400.0% |    +4 |   0.3% → 1.8% |   1 → 5 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodVisitor`                                                    |
|     new |    +4 |   0.0% → 1.4% |   0 → 4 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|     new |    +4 |   0.0% → 1.4% |   0 → 4 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|     new |    +4 |   0.0% → 1.4% |   0 → 4 | `processDirectory(String, RuleSet)`               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                             |
|  +75.0% |    +3 |   1.4% → 2.5% |   4 → 7 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                      |
| +300.0% |    +3 |   0.3% → 1.4% |   1 → 4 | `visitMethodEx(MethodNode)`                       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                          |
| +100.0% |    +2 |   0.7% → 1.4% |   2 → 4 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`                                                       |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `<init>(String, int)`                             | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                                 |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `stripComments(String)`                           | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `matchesAndNotWithinString(String, String)`       | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `hasSpaceBeforeClosingParenthesis(String)`        | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `super$2$visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `visitConstantExpression(ConstantExpression)`     | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`                        |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor`     |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                                                         | Location                                             |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| -87.5% |  -189 |  73.0% → 9.5% |  216 → 27 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001117000`  |
| -93.0% |   -80 |  29.1% → 2.1% |    86 → 6 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070013d1c00`  |
| -70.2% |   -66 |  31.8% → 9.9% |   94 → 28 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001145c00`  |
| -65.6% |   -63 | 32.4% → 11.7% |   96 → 33 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070013db000`  |
| -95.5% |   -63 |  22.3% → 1.1% |    66 → 3 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001184c00`  |
| -95.4% |   -62 |  22.0% → 1.1% |    65 → 3 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001118800`  |
| -98.2% |   -54 |  18.6% → 0.4% |    55 → 1 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070012b3800`  |
| -96.4% |   -53 |  18.6% → 0.7% |    55 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105c00`  |
| -92.7% |   -51 |  18.6% → 1.4% |    55 → 4 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001179800`  |
| -97.4% |   -38 |  13.2% → 0.4% |    39 → 1 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001003000`  |
| -95.0% |   -38 |  13.5% → 0.7% |    40 → 2 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070013f2800`  |
| -60.7% |   -34 |  18.9% → 7.8% |   56 → 22 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001827400`  |
| -84.6% |   -33 |  13.2% → 2.1% |    39 → 6 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001442800`  |
| -94.3% |   -33 |  11.8% → 0.7% |    35 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001606000`  |
| -96.8% |   -30 |  10.5% → 0.4% |    31 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000700148ec00`  |
| -25.3% |   -23 | 30.7% → 24.0% |   91 → 68 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |
| -95.2% |   -20 |   7.1% → 0.4% |    21 → 1 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001421800`  |
| -12.0% |   -16 | 44.9% → 41.3% | 133 → 117 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| -31.9% |   -15 | 15.9% → 11.3% |   47 → 32 | `collectViolations(SourceCode, RuleSet)`                                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`       |
| -13.5% |   -13 | 32.4% → 29.3% |   96 → 83 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001104000`  |

##### Standard library

| Change | Delta |             % |   Samples | Function                                                                                         | Location                                             |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| -87.5% |  -189 |  73.0% → 9.5% |  216 → 27 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001117000`  |
| -93.0% |   -80 |  29.1% → 2.1% |    86 → 6 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070013d1c00`  |
| -70.2% |   -66 |  31.8% → 9.9% |   94 → 28 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001145c00`  |
| -65.6% |   -63 | 32.4% → 11.7% |   96 → 33 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070013db000`  |
| -95.5% |   -63 |  22.3% → 1.1% |    66 → 3 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001184c00`  |
| -95.4% |   -62 |  22.0% → 1.1% |    65 → 3 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001118800`  |
| -98.2% |   -54 |  18.6% → 0.4% |    55 → 1 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070012b3800`  |
| -96.4% |   -53 |  18.6% → 0.7% |    55 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105c00`  |
| -92.7% |   -51 |  18.6% → 1.4% |    55 → 4 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001179800`  |
| -97.4% |   -38 |  13.2% → 0.4% |    39 → 1 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001003000`  |
| -95.0% |   -38 |  13.5% → 0.7% |    40 → 2 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070013f2800`  |
| -60.7% |   -34 |  18.9% → 7.8% |   56 → 22 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001827400`  |
| -84.6% |   -33 |  13.2% → 2.1% |    39 → 6 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001442800`  |
| -94.3% |   -33 |  11.8% → 0.7% |    35 → 2 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001606000`  |
| -96.8% |   -30 |  10.5% → 0.4% |    31 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000700148ec00`  |
| -25.3% |   -23 | 30.7% → 24.0% |   91 → 68 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |
| -95.2% |   -20 |   7.1% → 0.4% |    21 → 1 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001421800`  |
| -12.0% |   -16 | 44.9% → 41.3% | 133 → 117 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| -13.5% |   -13 | 32.4% → 29.3% |   96 → 83 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001104000`  |
| -16.4% |   -12 | 24.7% → 21.6% |   73 → 61 | `linkToCallSite(Object, Object, Object, Object)`                                                 | `java.lang.invoke.Invokers$Holder`                   |

##### Ours

|  Change | Delta |             % | Samples | Function                                                         | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  -31.9% |   -15 | 15.9% → 11.3% | 47 → 32 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                |
|  -21.4% |    -9 | 14.2% → 11.7% | 42 → 33 | `processFile(String, DirectoryResults, RuleSet)`                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                              |
|  -57.1% |    -8 |   4.7% → 2.1% |  14 → 6 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                    |
|   -8.6% |    -5 | 19.6% → 18.7% | 58 → 53 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractAstVisitor`                                                        |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `visitClassComplete(ClassNode)`                                  | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`                               |
|  -75.0% |    -3 |   1.4% → 0.4% |   4 → 1 | `getText()`                                                      | `org.codenarc.source.SourceFile`                                                              |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `setDisabledRulesByLine(int)`                                    | `org.codenarc.plugin.disablerules.LookupTable`                                                |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `assertClassImplementsRuleInterface(Class)`                      | `org.codenarc.ruleset.RuleSetUtil`                                                            |
|   -2.4% |    -2 | 28.4% → 29.0% | 84 → 82 | `init()`                                                         | `org.codenarc.source.AbstractSourceCode`                                                      |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `matches(String)`                                                | `org.codenarc.util.WildcardPattern`                                                           |
|   -4.7% |    -2 |         14.5% | 43 → 41 | `visitMethod(MethodNode)`                                        | `org.codenarc.rule.AbstractAstVisitor`                                                        |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `checkStatementIndent(Statement, BlockStatement)`                | `org.codenarc.rule.formatting.IndentationAstVisitor`                                          |
|  -66.7% |    -2 |   1.0% → 0.4% |   3 → 1 | `calculate(MethodNode, SourceCode)`                              | `org.gmetrics.metric.abc.AbcMetric`                                                           |
|  -50.0% |    -2 |   1.4% → 0.7% |   4 → 2 | `doCall(Object)`                                                 | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`                |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `doCall(Object)`                                                 | `org.codenarc.rule.formatting.IndentationAstVisitor$_flexibleCheckForCorrectColumn_closure12` |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                          |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `doCall(Object)`                                                 | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`         |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `doCall(List)`                                                   | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`                   |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                   |
|  -66.7% |    -2 |   1.0% → 0.4% |   3 → 1 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)`          | `org.gmetrics.metric.AbstractMethodMetric`                                                    |

# Allocated heap profile diff

Allocated 11.9 GiB → 11.7 GiB (-168.634 MiB, -1.4%) over 6,327 samples → 6,274 samples (1.92 MiB → 1.91 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.4% | -170.816 MiB | 99.1% → 99.0% | 11.8 GiB → 11.6 GiB | 6,215 → 6,161 |
| Ours             |  +1.9% |   +2.185 MiB |   0.9% → 1.0% |   114 MiB → 116 MiB |       58 → 60 |
| Unknown          |  -9.9% |   -3.773 KiB |         <0.1% | 38.1 KiB → 34.4 KiB |       54 → 53 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |           % |                Size |   Samples | Function                                                                                | Location                                              |
| ------: | -----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|     new | +107.945 MiB | 0.0% → 0.9% |       0 B → 108 MiB |     0 → 2 | `wrap(char[], int, int)`                                                                | `java.nio.CharBuffer`                                 |
| +176.1% |  +72.684 MiB | 0.3% → 0.9% |  41.3 MiB → 114 MiB |   21 → 36 | `builder(long, IntFunction)`                                                            | `java.util.stream.Nodes`                              |
|  +48.2% |  +55.139 MiB | 0.9% → 1.4% |   114 MiB → 170 MiB |   59 → 85 | `valueOf(long)`                                                                         | `java.lang.Long`                                      |
|  +26.9% |  +30.322 MiB | 0.9% → 1.2% |   113 MiB → 143 MiB |   55 → 72 | `parameterArray()`                                                                      | `java.lang.invoke.MethodType`                         |
|  +31.5% |  +29.937 MiB | 0.8% → 1.0% |    95 MiB → 125 MiB |   51 → 63 | `of(byte, int)`                                                                         | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
|  +12.0% |   +29.85 MiB | 2.0% → 2.3% |   248 MiB → 278 MiB | 130 → 145 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |
|  +28.9% |  +28.807 MiB | 0.8% → 1.1% |  99.7 MiB → 129 MiB |   49 → 66 | `toBigInteger(int)`                                                                     | `java.math.MutableBigInteger`                         |
|  +59.4% |   +28.05 MiB | 0.4% → 0.6% | 47.2 MiB → 75.3 MiB |   21 → 38 | `<init>(MethodHandle, MethodHandle, boolean)`                                           | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |
|  +75.6% |  +25.137 MiB | 0.3% → 0.5% | 33.3 MiB → 58.4 MiB |   21 → 30 | `<init>(int)`                                                                           | `java.util.ArrayList`                                 |
| +144.7% |  +24.966 MiB | 0.1% → 0.4% | 17.3 MiB → 42.2 MiB |    9 → 20 | `getInvocationType()`                                                                   | `java.lang.invoke.MemberName`                         |
|  +10.1% |   +24.38 MiB | 2.0% → 2.2% |   242 MiB → 266 MiB | 124 → 136 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                          | `java.lang.invoke.BoundMethodHandle$Species_LLLL`     |
|  +12.5% |  +23.021 MiB | 1.5% → 1.7% |   184 MiB → 207 MiB |  92 → 103 | `optimize(Pattern$Node)`                                                                | `java.util.regex.Pattern$BnM`                         |
|  +85.0% |   +22.07 MiB | 0.2% → 0.4% |     26 MiB → 48 MiB |   13 → 24 | `of(byte, int, int, int)`                                                               | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
|  +22.6% |  +21.182 MiB | 0.8% → 1.0% |  93.6 MiB → 115 MiB |   49 → 59 | `newHashMap(int)`                                                                       | `java.util.HashMap`                                   |
|  +96.7% |  +20.632 MiB | 0.2% → 0.3% |   21.3 MiB → 42 MiB |   12 → 21 | `getAndPut(String, MemoizeCache$ValueProvider)`                                         | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`   |
|  +38.6% |   +19.74 MiB | 0.4% → 0.6% | 51.1 MiB → 70.9 MiB |   48 → 45 | `copyOf(byte[], int)`                                                                   | `java.util.Arrays`                                    |
|   +5.2% |  +18.283 MiB | 2.9% → 3.1% |   354 MiB → 373 MiB | 183 → 191 | `newInstance(Class, int)`                                                               | `java.lang.reflect.Array`                             |
|  +20.6% |  +18.103 MiB | 0.7% → 0.9% |  87.7 MiB → 106 MiB |   45 → 53 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                           | `java.lang.invoke.MethodHandleImpl`                   |
|  +20.2% |  +17.693 MiB | 0.7% → 0.9% |  87.5 MiB → 105 MiB |   44 → 51 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`               | `java.lang.invoke.MethodHandleImpl`                   |
|  +19.2% |   +17.37 MiB | 0.7% → 0.9% |  90.5 MiB → 108 MiB |   49 → 55 | `<init>(Pattern, CharSequence)`                                                         | `java.util.regex.Matcher`                             |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |           % |                Size |   Samples | Function                                                                                      | Location                                                   |
| -----: | -----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -39.6% | -135.851 MiB | 2.8% → 1.7% |   343 MiB → 207 MiB | 105 → 102 | `of(byte, int, int)`                                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
| -13.3% |  -92.812 MiB | 5.7% → 5.0% |   696 MiB → 603 MiB | 348 → 309 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
| -48.9% |  -87.635 MiB | 1.5% → 0.8% |  179 MiB → 91.7 MiB |   96 → 48 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`             |
|  -8.4% |  -66.993 MiB | 6.5% → 6.0% |   793 MiB → 726 MiB | 368 → 373 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                              |
| -13.3% |  -49.042 MiB | 3.0% → 2.7% |   370 MiB → 321 MiB | 189 → 163 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                                  |
| -31.6% |  -42.296 MiB | 1.1% → 0.8% |  134 MiB → 91.7 MiB |   68 → 47 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`                 |
| -34.6% |      -31 MiB | 0.7% → 0.5% | 89.6 MiB → 58.6 MiB |   69 → 57 | `iterator()`                                                                                  | `java.util.ArrayList`                                      |
| -13.7% |  -30.509 MiB | 1.8% → 1.6% |   222 MiB → 191 MiB |  109 → 98 | `allocateInstance(Object)`                                                                    | `java.lang.invoke.DirectMethodHandle`                      |
| -31.1% |  -26.119 MiB | 0.7% → 0.5% | 83.9 MiB → 57.8 MiB |   42 → 30 | `put(Object, Object)`                                                                         | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`       |
| -48.8% |    -24.8 MiB | 0.4% → 0.2% |   50.8 MiB → 26 MiB |   26 → 13 | `unreflect(Method)`                                                                           | `java.lang.invoke.MethodHandles$Lookup`                    |
| -24.6% |  -22.907 MiB | 0.8% → 0.6% |   93 MiB → 70.1 MiB |   50 → 39 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                             | `java.util.stream.MatchOps`                                |
|  -6.6% |  -22.521 MiB | 2.8% → 2.6% |   340 MiB → 317 MiB | 170 → 159 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`                        |
| -31.4% |  -20.448 MiB | 0.5% → 0.4% | 65.2 MiB → 44.7 MiB |   35 → 21 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)`        | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`       |
| -70.9% |  -20.062 MiB | 0.2% → 0.1% | 28.3 MiB → 8.22 MiB |   11 → 10 | `<init>(InputStream, Inflater, int)`                                                          | `java.util.zip.InflaterInputStream`                        |
| -37.7% |  -19.935 MiB | 0.4% → 0.3% |   52.9 MiB → 33 MiB |   26 → 17 | `getChild(PredictionContext, int)`                                                            | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
| -62.1% |  -18.864 MiB | 0.2% → 0.1% | 30.4 MiB → 11.5 MiB |    17 → 6 | `join(PredictionContext, PredictionContext)`                                                  | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
| -53.2% |  -18.197 MiB | 0.3% → 0.1% |   34.2 MiB → 16 MiB |    17 → 8 | `<init>()`                                                                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| -41.7% |  -17.161 MiB | 0.3% → 0.2% |   41.1 MiB → 24 MiB |   21 → 12 | `intStream(Spliterator$OfInt, boolean)`                                                       | `java.util.stream.StreamSupport`                           |
|  -3.9% |  -16.996 MiB |        3.5% |   432 MiB → 415 MiB | 223 → 213 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                        |
|  -2.9% |  -16.811 MiB | 4.7% → 4.6% |   573 MiB → 556 MiB | 301 → 293 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                      |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|     Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                            |
| ---------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
|   +3974.0% |   +7.267 GiB |  1.5% → 63.5% |  187 MiB → 7.45 GiB |   166 → 3,981 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001115400` |
| +289964.7% |   +4.998 GiB | <0.1% → 42.6% |    1.77 MiB → 5 GiB |     2 → 2,557 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00` |
| +265009.4% |   +4.412 GiB | <0.1% → 37.6% |  1.7 MiB → 4.41 GiB |     2 → 2,312 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800` |
|    +254.9% |   +3.176 GiB | 10.5% → 37.7% | 1.25 GiB → 4.42 GiB |   700 → 2,313 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700138d400` |
|  +32828.8% |   +3.009 GiB |  0.1% → 25.7% | 9.39 MiB → 3.02 GiB |    10 → 1,578 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00` |
|   +7222.7% |   +2.819 GiB |  0.3% → 24.4% |   40 MiB → 2.86 GiB |    20 → 1,439 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001607c00` |
|    +493.3% |   +2.747 GiB |  4.7% → 28.2% |   570 MiB → 3.3 GiB |   304 → 1,782 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001119400` |
| +136659.3% |   +2.667 GiB | <0.1% → 22.8% |    2 MiB → 2.67 GiB |     1 → 1,341 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001827400` |
|   +2521.6% |   +2.558 GiB |  0.9% → 22.7% |  104 MiB → 2.66 GiB |    55 → 1,387 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013db400` |
| +287467.2% |   +1.726 GiB | <0.1% → 14.7% |  630 KiB → 1.73 GiB |       1 → 913 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010bc000` |
|   +8319.9% |   +1.546 GiB |  0.2% → 13.3% |   19 MiB → 1.57 GiB |      14 → 809 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001117000` |
|     +76.1% |   +1.383 GiB | 15.3% → 27.3% |  1.82 GiB → 3.2 GiB |   874 → 1,749 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001141000` |
|   +1479.4% | +971.486 MiB |   0.5% → 8.6% | 65.7 MiB → 1.01 GiB |      41 → 526 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001397800` |
|  +76692.2% | +942.514 MiB |  <0.1% → 7.9% |  1.23 MiB → 944 MiB |       2 → 493 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001150800` |
|  +11681.1% | +909.393 MiB |   0.1% → 7.6% |  7.79 MiB → 917 MiB |       5 → 462 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
|   +8219.0% | +821.451 MiB |   0.1% → 6.9% |  9.99 MiB → 831 MiB |       5 → 406 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001607800` |
|   +4374.7% |  +699.61 MiB |   0.1% → 6.0% |    16 MiB → 716 MiB |       7 → 353 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700182c800` |
|     +25.4% | +699.499 MiB | 22.7% → 28.8% | 2.69 GiB → 3.38 GiB | 1,423 → 1,761 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013d2400` |
|   +6715.0% | +619.595 MiB |   0.1% → 5.2% |  9.23 MiB → 629 MiB |      12 → 323 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001145c00` |
|    +640.8% | +563.584 MiB |   0.7% → 5.4% |    88 MiB → 652 MiB |      43 → 321 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001604c00` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                Size |     Samples | Function                                         | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
|  -86.0% |   -6.619 GiB |  64.7% → 9.2% | 7.69 GiB → 1.07 GiB | 4,045 → 565 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400` |
|  -91.7% |   -4.544 GiB |  41.7% → 3.5% |  4.96 GiB → 422 MiB | 2,579 → 210 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700118c000` |
|  -98.9% |   -4.463 GiB |  37.9% → 0.4% | 4.51 GiB → 50.8 MiB |  2,356 → 26 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070013e3000` |
|  -98.4% |    -4.38 GiB |  37.4% → 0.6% | 4.45 GiB → 73.4 MiB |  2,325 → 37 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013ea000` |
|  -98.5% |   -3.265 GiB |  27.9% → 0.4% | 3.31 GiB → 49.8 MiB |  1,796 → 42 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001104c00` |
|  -91.8% |   -3.219 GiB |  29.5% → 2.5% |  3.51 GiB → 296 MiB | 1,845 → 152 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001179800` |
|  -93.9% |   -2.862 GiB |  25.6% → 1.6% |  3.05 GiB → 191 MiB | 1,610 → 156 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001005400` |
|  -98.3% |   -2.749 GiB |  23.5% → 0.4% |  2.8 GiB → 47.3 MiB |  1,400 → 23 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001400000` |
|  -99.8% |   -2.563 GiB | 21.6% → <0.1% |    2.57 GiB → 6 MiB |   1,286 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070014ed000` |
|  -64.6% |   -2.148 GiB | 28.0% → 10.1% | 3.33 GiB → 1.18 GiB | 1,809 → 675 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012c5400` |
|  -97.6% |    -1.07 GiB |   9.2% → 0.2% |  1.1 GiB → 26.5 MiB |    577 → 30 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700122c000` |
|  -99.5% |   -1.037 GiB |  8.8% → <0.1% |  1.04 GiB → 5.3 MiB |     544 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700116c000` |
|  -65.1% | -997.243 MiB |  12.6% → 4.5% |   1.5 GiB → 535 MiB |   808 → 269 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700138c400` |
|  -94.5% | -985.564 MiB |   8.6% → 0.5% | 1.02 GiB → 57.1 MiB |    535 → 37 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001135400` |
|  -97.1% | -951.726 MiB |   8.1% → 0.2% |  980 MiB → 28.8 MiB |    508 → 19 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001003000` |
|  -99.3% | -863.548 MiB |  7.1% → <0.1% |     870 MiB → 6 MiB |     428 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700154ac00` |
|  -99.2% | -739.566 MiB |  6.1% → <0.1% |     746 MiB → 6 MiB |     372 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001575400` |
|  -99.1% | -693.648 MiB |  5.7% → <0.1% |     700 MiB → 6 MiB |     344 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014f3c00` |
|  -99.9% | -475.658 MiB |  3.9% → <0.1% |   476 MiB → 627 KiB |     248 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001230c00` |
| removed | -445.778 MiB |   3.7% → 0.0% |       446 MiB → 0 B |     148 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b001978000` |

# Retained heap profile diff

Retained 90 KiB → 14.2 KiB (-75.742 KiB, -84.2%) over 109 objects → 128 objects (845 B → 114 B per object).

| Category         | Change |       Delta |              % |              Size |   Objects |
| ---------------- | -----: | ----------: | -------------: | ----------------: | --------: |
| Standard library | -84.2% | -75.765 KiB | 100.0% → 99.8% | 90 KiB → 14.2 KiB | 109 → 127 |
| Ours             |    new |       +24 B |    0.0% → 0.2% |        0 B → 24 B |     0 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |                Size | Objects | Function                                                                                                                              | Location                                                |
| ------: | ---------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +197.7% | +4.015 KiB | 2.3% → 42.5% | 2.03 KiB → 6.05 KiB |   2 → 3 | `resize(int)`                                                                                                                         | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| +500.0% |     +760 B |  0.2% → 6.3% |       152 B → 912 B |   1 → 6 | `getPlainNodeReference(boolean)`                                                                                                      | `org.codehaus.groovy.ast.ClassNode`                     |
|     new |     +640 B |  0.0% → 4.4% |         0 B → 640 B |   0 → 3 | `getTargetMethodInfo()`                                                                                                               | `java.beans.Introspector`                               |
|  +68.8% |     +440 B |  0.7% → 7.4% |    640 B → 1.05 KiB |  5 → 11 | `copyOfRangeByte(byte[], int, int)`                                                                                                   | `java.util.Arrays`                                      |
|  +71.4% |     +280 B |  0.4% → 4.6% |       392 B → 672 B |  7 → 12 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                                                     | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| +300.0% |     +264 B |  0.1% → 2.4% |        88 B → 352 B |   1 → 4 | `copy()`                                                                                                                              | `java.lang.reflect.Method`                              |
| +300.0% |     +192 B |  0.1% → 1.8% |        64 B → 256 B |   1 → 4 | `lambda$initValue$2(Method)`                                                                                                          | `org.codehaus.groovy.reflection.CachedClass$3`          |
|     new |     +160 B |  0.0% → 1.1% |         0 B → 160 B |   0 → 1 | `createPogoMetaMethodSite(CallSite, MetaClassImpl, Class[])`                                                                          | `org.codehaus.groovy.reflection.CachedMethod`           |
| +320.0% |     +128 B | <0.1% → 1.2% |        40 B → 168 B |   1 → 3 | `compress(char[], int, int)`                                                                                                          | `java.lang.StringUTF16`                                 |
| +114.3% |     +128 B |  0.1% → 1.6% |       112 B → 240 B |   1 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                       | `java.lang.ClassLoader`                                 |
|     new |     +120 B |  0.0% → 0.8% |         0 B → 120 B |   0 → 1 | `findBootstrapClass(String)`                                                                                                          | `java.lang.ClassLoader`                                 |
|     new |     +120 B |  0.0% → 0.8% |         0 B → 120 B |   0 → 1 | `<init>(MethodType)`                                                                                                                  | `java.lang.invoke.MethodTypeForm`                       |
|     new |      +88 B |  0.0% → 0.6% |          0 B → 88 B |   0 → 1 | `forName0(String, boolean, ClassLoader, Class)`                                                                                       | `java.lang.Class`                                       |
|     new |      +80 B |  0.0% → 0.5% |          0 B → 80 B |   0 → 3 | `setParams(Class[])`                                                                                                                  | `java.beans.MethodDescriptor`                           |
|     new |      +72 B |  0.0% → 0.5% |          0 B → 72 B |   0 → 1 | `copy()`                                                                                                                              | `java.lang.reflect.Field`                               |
|     new |      +72 B |  0.0% → 0.5% |          0 B → 72 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                           | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL` |
|     new |      +72 B |  0.0% → 0.5% |          0 B → 72 B |   0 → 1 | `declareProperty(GroovyParser$GroovyParserRuleContext, ModifierManager, ClassNode, ClassNode, int, ASTNode, String, int, Expression)` | `org.apache.groovy.parser.antlr4.AstBuilder`            |
| +100.0% |      +64 B |  0.1% → 0.9% |        64 B → 128 B |   1 → 2 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                                                                 | `sun.reflect.annotation.AnnotationParser`               |
|     new |      +64 B |  0.0% → 0.4% |          0 B → 64 B |   0 → 1 | `<init>(MethodType)`                                                                                                                  | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
|     new |      +64 B |  0.0% → 0.4% |          0 B → 64 B |   0 → 1 | `<init>(int, float, boolean)`                                                                                                         | `java.util.HashSet`                                     |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |           Size | Objects | Function                                                                                                       | Location                                           |
| ------: | ----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| removed | -64.015 KiB | 71.2% → 0.0% |   64 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                                 | `java.util.concurrent.ConcurrentHashMap`           |
| removed |  -9.656 KiB | 10.7% → 0.0% | 9.66 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                                   | `jdk.internal.math.MathUtils`                      |
| removed |  -8.015 KiB |  8.9% → 0.0% | 8.02 KiB → 0 B |   1 → 0 | `<init>(int, int, MemorySegment)`                                                                              | `java.nio.HeapByteBuffer`                          |
| removed |      -672 B |  0.7% → 0.0% |    672 B → 0 B |   2 → 0 | `copyOf(Object[], int)`                                                                                        | `java.util.Arrays`                                 |
|  -48.5% |      -256 B |  0.6% → 1.9% |  528 B → 272 B |       1 | `resize()`                                                                                                     | `java.util.HashMap`                                |
|  -66.7% |      -192 B |  0.3% → 0.7% |   288 B → 96 B |   6 → 2 | `create(Tuple2, int, String, int, int, int, int, int)`                                                         | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory` |
|  -50.0% |      -176 B |  0.4% → 1.2% |  352 B → 176 B |   4 → 2 | `getDeclaredMethods0(boolean)`                                                                                 | `java.lang.Class`                                  |
| removed |      -160 B |  0.2% → 0.0% |    160 B → 0 B |   5 → 0 | `makeReplacementMetaProperty(MetaProperty, String, boolean, MetaMethod)`                                       | `groovy.lang.MetaClassImpl`                        |
| removed |      -104 B |  0.1% → 0.0% |    104 B → 0 B |   1 → 0 | `toArray()`                                                                                                    | `java.lang.PublicMethods`                          |
| removed |       -96 B |  0.1% → 0.0% |     96 B → 0 B |   4 → 0 | `addAnyChild(ParseTree)`                                                                                       | `groovyjarjarantlr4.v4.runtime.ParserRuleContext`  |
| removed |       -80 B |  0.1% → 0.0% |     80 B → 0 B |   2 → 0 | `make(MethodType, LambdaForm, Object, Object)`                                                                 | `java.lang.invoke.BoundMethodHandle$Species_LL`    |
| removed |       -72 B |  0.1% → 0.0% |     72 B → 0 B |   3 → 0 | `toString()`                                                                                                   | `java.lang.StringBuilder`                          |
|  -75.0% |       -72 B |  0.1% → 0.2% |    96 B → 24 B |   2 → 1 | `initClassName()`                                                                                              | `java.lang.Class`                                  |
| removed |       -64 B |  0.1% → 0.0% |     64 B → 0 B |   1 → 0 | `<init>(Class, MetaMethod[])`                                                                                  | `groovy.lang.MetaClassImpl`                        |
| removed |       -64 B |  0.1% → 0.0% |     64 B → 0 B |   1 → 0 | `lambda$inheritStaticInterfaceFields$16(CachedClass)`                                                          | `groovy.lang.MetaClassImpl`                        |
| removed |       -64 B |  0.1% → 0.0% |     64 B → 0 B |   1 → 0 | `<init>(int, float)`                                                                                           | `java.util.Hashtable`                              |
| removed |       -56 B |  0.1% → 0.0% |     56 B → 0 B |   1 → 0 | `toModuleReference(ModuleDescriptor, ModuleTarget, ModuleHashes, ModuleHashes$HashSupplier, ModuleResolution)` | `jdk.internal.module.SystemModuleFinders`          |
| removed |       -48 B |  0.1% → 0.0% |     48 B → 0 B |   1 → 0 | `clone()`                                                                                                      | `java.lang.Object`                                 |
| removed |       -48 B |  0.1% → 0.0% |     48 B → 0 B |   1 → 0 | `<init>(Class)`                                                                                                | `sun.reflect.annotation.AnnotationType`            |
| removed |       -48 B |  0.1% → 0.0% |     48 B → 0 B |   1 → 0 | `pathElement()`                                                                                                | `org.apache.groovy.parser.antlr4.GroovyParser`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |      Delta |             % |                Size | Objects | Function                                                                | Location                                                          |
| --------: | ---------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +12383.3% | +5.804 KiB |  0.1% → 41.2% |     48 B → 5.85 KiB |  1 → 24 | `invoke(Object, Object, Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`               |
| +13840.0% | +5.406 KiB | <0.1% → 38.3% |     40 B → 5.45 KiB |  1 → 21 | `invoke(Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00`               |
|   +442.4% | +5.218 KiB |  1.3% → 45.0% |  1.18 KiB → 6.4 KiB |  4 → 10 | `copyNonPrivateMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)`  | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`           |
|   +442.4% | +5.218 KiB |  1.3% → 45.0% |  1.18 KiB → 6.4 KiB |  4 → 10 | `copyNonPrivateMethods(MetaMethodIndex$Header, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`           |
|   +920.3% |  +4.96 KiB |  0.6% → 38.7% |     552 B → 5.5 KiB |  3 → 20 | `invoke(Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x00000070013d2400`               |
|   +358.7% |  +4.82 KiB |  1.5% → 43.4% | 1.34 KiB → 6.16 KiB | 14 → 28 | `invokeInterface(Object, Object, Object, Object, Object)`               | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400`              |
|  +2833.3% | +4.648 KiB |  0.2% → 33.8% |    168 B → 4.81 KiB |   2 → 9 | `invoke(Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x00000070013db400`               |
|    +90.0% | +4.421 KiB |  5.5% → 65.7% | 4.91 KiB → 9.34 KiB | 38 → 49 | `invokeMethod(Object, String, Object[])`                                | `groovy.lang.MetaClassImpl`                                       |
|    +86.2% | +4.343 KiB |  5.6% → 66.0% | 5.04 KiB → 9.38 KiB | 40 → 50 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`       | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`          |
|   +177.7% | +4.289 KiB |  2.7% → 47.1% |  2.41 KiB → 6.7 KiB |  9 → 15 | `getOrPutMethods(String, MetaMethodIndex$Header)`                       | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`           |
|   +145.3% | +4.187 KiB |  3.2% → 49.7% | 2.88 KiB → 7.07 KiB | 18 → 21 | `populateMethods(List, CachedClass)`                                    | `groovy.lang.MetaClassImpl`                                       |
| +13350.0% | +4.171 KiB | <0.1% → 29.6% |      32 B → 4.2 KiB |   1 → 5 | `invoke(Object, Object, Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`               |
|  +2955.6% | +4.156 KiB |  0.2% → 30.2% |     144 B → 4.3 KiB |   3 → 6 | `invokeVirtual(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$DMH.0x000000700138c800`              |
|       new | +4.148 KiB |  0.0% → 29.2% |      0 B → 4.15 KiB |   0 → 3 | `<init>(String)`                                                        | `org.codenarc.rule.groovyism.ExplicitTypeInstantiationAstVisitor` |
|    +74.9% | +4.117 KiB |  6.1% → 67.6% |  5.5 KiB → 9.62 KiB | 49 → 57 | `getMetaClassUnderLock()`                                               | `org.codehaus.groovy.reflection.ClassInfo`                        |
|    +74.9% | +4.117 KiB |  6.1% → 67.6% |  5.5 KiB → 9.62 KiB | 49 → 57 | `getMetaClass()`                                                        | `org.codehaus.groovy.reflection.ClassInfo`                        |
|   +197.7% | +4.015 KiB |  2.3% → 42.5% | 2.03 KiB → 6.05 KiB |   2 → 3 | `resize(int)`                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`           |
|       new | +4.015 KiB |  0.0% → 28.2% |      0 B → 4.02 KiB |   0 → 1 | `$getStaticMetaClass()`                                                 | `org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule$1`  |
|       new | +4.015 KiB |  0.0% → 28.2% |      0 B → 4.02 KiB |   0 → 1 | `<init>(ExplicitHashMapInstantiationRule, Object)`                      | `org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule$1`  |
|       new | +4.015 KiB |  0.0% → 28.2% |      0 B → 4.02 KiB |   0 → 1 | `getAstVisitor()`                                                       | `org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule`    |

##### Standard library

|    Change |      Delta |             % |                Size | Objects | Function                                                                | Location                                                 |
| --------: | ---------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------- |
| +12383.3% | +5.804 KiB |  0.1% → 41.2% |     48 B → 5.85 KiB |  1 → 24 | `invoke(Object, Object, Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`      |
| +13840.0% | +5.406 KiB | <0.1% → 38.3% |     40 B → 5.45 KiB |  1 → 21 | `invoke(Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00`      |
|   +442.4% | +5.218 KiB |  1.3% → 45.0% |  1.18 KiB → 6.4 KiB |  4 → 10 | `copyNonPrivateMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)`  | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|   +442.4% | +5.218 KiB |  1.3% → 45.0% |  1.18 KiB → 6.4 KiB |  4 → 10 | `copyNonPrivateMethods(MetaMethodIndex$Header, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|   +920.3% |  +4.96 KiB |  0.6% → 38.7% |     552 B → 5.5 KiB |  3 → 20 | `invoke(Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x00000070013d2400`      |
|   +358.7% |  +4.82 KiB |  1.5% → 43.4% | 1.34 KiB → 6.16 KiB | 14 → 28 | `invokeInterface(Object, Object, Object, Object, Object)`               | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400`     |
|  +2833.3% | +4.648 KiB |  0.2% → 33.8% |    168 B → 4.81 KiB |   2 → 9 | `invoke(Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x00000070013db400`      |
|    +90.0% | +4.421 KiB |  5.5% → 65.7% | 4.91 KiB → 9.34 KiB | 38 → 49 | `invokeMethod(Object, String, Object[])`                                | `groovy.lang.MetaClassImpl`                              |
|    +86.2% | +4.343 KiB |  5.6% → 66.0% | 5.04 KiB → 9.38 KiB | 40 → 50 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`       | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
|   +177.7% | +4.289 KiB |  2.7% → 47.1% |  2.41 KiB → 6.7 KiB |  9 → 15 | `getOrPutMethods(String, MetaMethodIndex$Header)`                       | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|   +145.3% | +4.187 KiB |  3.2% → 49.7% | 2.88 KiB → 7.07 KiB | 18 → 21 | `populateMethods(List, CachedClass)`                                    | `groovy.lang.MetaClassImpl`                              |
| +13350.0% | +4.171 KiB | <0.1% → 29.6% |      32 B → 4.2 KiB |   1 → 5 | `invoke(Object, Object, Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`      |
|  +2955.6% | +4.156 KiB |  0.2% → 30.2% |     144 B → 4.3 KiB |   3 → 6 | `invokeVirtual(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$DMH.0x000000700138c800`     |
|    +74.9% | +4.117 KiB |  6.1% → 67.6% |  5.5 KiB → 9.62 KiB | 49 → 57 | `getMetaClassUnderLock()`                                               | `org.codehaus.groovy.reflection.ClassInfo`               |
|    +74.9% | +4.117 KiB |  6.1% → 67.6% |  5.5 KiB → 9.62 KiB | 49 → 57 | `getMetaClass()`                                                        | `org.codehaus.groovy.reflection.ClassInfo`               |
|   +197.7% | +4.015 KiB |  2.3% → 42.5% | 2.03 KiB → 6.05 KiB |   2 → 3 | `resize(int)`                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|    +75.2% |     +4 KiB |  5.9% → 65.5% | 5.32 KiB → 9.32 KiB | 46 → 52 | `reinitialize()`                                                        | `groovy.lang.MetaClassImpl`                              |
|    +75.2% |     +4 KiB |  5.9% → 65.5% | 5.32 KiB → 9.32 KiB | 46 → 52 | `initialize()`                                                          | `groovy.lang.MetaClassImpl`                              |
|  +3825.0% | +3.585 KiB |  0.1% → 25.9% |     96 B → 3.68 KiB |  2 → 25 | `invoke(Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x0000007001176000`      |
|  +2265.0% | +3.539 KiB |  0.2% → 26.0% |     160 B → 3.7 KiB |  3 → 26 | `invoke(Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000007001148800`      |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

| Change |       Delta |             % |                Size |  Objects | Function                                                                                       | Location                                                                   |
| -----: | ----------: | ------------: | ------------------: | -------: | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| -90.4% |  -68.96 KiB | 84.8% → 51.7% | 76.3 KiB → 7.35 KiB |  50 → 58 | `reinvoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`                        |
| -86.9% | -67.359 KiB | 86.2% → 71.6% | 77.5 KiB → 10.2 KiB |  50 → 59 | `invokeImpl(Object, Object[])`                                                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`                          |
| -87.1% | -67.296 KiB | 85.9% → 70.3% |   77.3 KiB → 10 KiB |  48 → 58 | `invokeExact_MT(Object, Object, Object, Object)`                                               | `java.lang.invoke.Invokers$Holder`                                         |
| -86.9% | -67.273 KiB | 86.1% → 71.6% | 77.5 KiB → 10.2 KiB |  49 → 59 | `invoke(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`                          |
| -87.1% | -67.257 KiB | 85.9% → 70.2% | 77.2 KiB → 9.98 KiB |  47 → 60 | `invokeSpecial(Object, Object, Object)`                                                        | `java.lang.invoke.DirectMethodHandle$Holder`                               |
| -84.4% | -67.148 KiB | 88.5% → 87.4% | 79.6 KiB → 12.4 KiB | 94 → 105 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| -84.5% | -67.132 KiB | 88.3% → 86.8% | 79.5 KiB → 12.3 KiB | 93 → 103 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800`                       |
| -85.0% | -67.132 KiB | 87.8% → 83.4% |   79 KiB → 11.9 KiB |  85 → 96 | `guardWithCatch(Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001117800`                        |
| -85.3% | -67.039 KiB | 87.4% → 81.5% | 78.6 KiB → 11.6 KiB |  80 → 91 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`                        |
| -85.0% |  -66.96 KiB | 87.6% → 83.4% | 78.8 KiB → 11.9 KiB |  82 → 96 | `guard(Object, Object, Object)`                                                                | `java.lang.invoke.LambdaForm$MH.0x0000007001118400`                        |
| -85.2% | -66.945 KiB | 87.3% → 81.8% | 78.6 KiB → 11.6 KiB |  79 → 91 | `linkToCallSite(Object, Object, Object)`                                                       | `java.lang.invoke.Invokers$Holder`                                         |
| -84.4% | -66.882 KiB | 88.1% → 86.8% | 79.2 KiB → 12.3 KiB | 88 → 103 | `invokeExact_MT(Object, Object, Object)`                                                       | `java.lang.invoke.Invokers$Holder`                                         |
| -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `get()`                                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`           |
| -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)`                                   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `provide(Object)`                                                                              | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x00000070010b6d70` |
| -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                        |
| -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)`                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `apply(Object, Object)`                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x00000070010b6918` |
| -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
