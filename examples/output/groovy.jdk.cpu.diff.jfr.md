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
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800`    |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `allocateInstance(Class)`                                                                                     | `jdk.internal.misc.Unsafe`                              |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `seek0(long)`                                                                                                 | `java.io.RandomAccessFile`                              |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `getPlainNodeReference(boolean)`                                                                              | `org.codehaus.groovy.ast.ClassNode`                     |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `checkPtypes(Class[])`                                                                                        | `java.lang.invoke.MethodType`                           |
|     new |    +2 |  0.0% → 0.7% |   0 → 2 | `execute(Lexer, CharStream, int)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor` |

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
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                             | `java.lang.invoke.LambdaForm$MH.0x000000b001002c00`            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `clone()`                                                                                            | `java.lang.Object`                                             |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `asType(MethodType)`                                                                                 | `java.lang.invoke.MethodHandle`                                |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`         |
|  -33.3% |    -2 | 2.0% → 1.4% |   6 → 4 | `get(Object)`                                                                                        | `java.util.concurrent.ConcurrentHashMap`                       |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `execATN(CharStream, DFAState)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`          |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `invoke(Object, int)`                                                                                | `java.lang.invoke.LambdaForm$MH.0x000000b00109bc00`            |
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

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +259 | 0.0% → 91.5% | 0 → 259 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|    new |  +231 | 0.0% → 81.6% | 0 → 231 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001117800`  |
|    new |  +228 | 0.0% → 80.6% | 0 → 228 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001118400`  |
|    new |  +216 | 0.0% → 76.3% | 0 → 216 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`  |
|    new |  +157 | 0.0% → 55.5% | 0 → 157 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`  |
|    new |  +126 | 0.0% → 44.5% | 0 → 126 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400` |
|    new |  +122 | 0.0% → 43.1% | 0 → 122 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |
|    new |  +108 | 0.0% → 38.2% | 0 → 108 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001141000`  |
|    new |   +99 | 0.0% → 35.0% |  0 → 99 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001140400`  |
|    new |   +97 | 0.0% → 34.3% |  0 → 97 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700118d400`  |
|    new |   +92 | 0.0% → 32.5% |  0 → 92 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2400`  |
|    new |   +88 | 0.0% → 31.1% |  0 → 88 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000007001152800` |
|    new |   +87 | 0.0% → 30.7% |  0 → 87 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400`  |
|    new |   +86 | 0.0% → 30.4% |  0 → 86 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001102400`  |
|    new |   +84 | 0.0% → 29.7% |  0 → 84 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00`  |
|    new |   +83 | 0.0% → 29.3% |  0 → 83 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001104000`  |
|    new |   +83 | 0.0% → 29.3% |  0 → 83 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001150800`  |
|    new |   +78 | 0.0% → 27.6% |  0 → 78 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001119400`  |
|    new |   +76 | 0.0% → 26.9% |  0 → 76 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd000` |
|    new |   +73 | 0.0% → 25.8% |  0 → 73 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000700138c800` |

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

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -264 | 89.2% → 0.0% | 264 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b0010b2800` |
| removed |  -231 | 78.0% → 0.0% | 231 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001117800`  |
| removed |  -227 | 76.7% → 0.0% | 227 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000b001118400`  |
| removed |  -216 | 73.0% → 0.0% | 216 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b001115400`  |
| removed |  -159 | 53.7% → 0.0% | 159 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000b001118000`  |
| removed |   -99 | 33.4% → 0.0% |  99 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000b0010bd400` |
| removed |   -98 | 33.1% → 0.0% |  98 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000b001140400`  |
| removed |   -96 | 32.4% → 0.0% |  96 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000b001104000`  |
| removed |   -96 | 32.4% → 0.0% |  96 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000b00118d400`  |
| removed |   -96 | 32.4% → 0.0% |  96 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b00113fc00`  |
| removed |   -94 | 31.8% → 0.0% |  94 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b001102400`  |
| removed |   -94 | 31.8% → 0.0% |  94 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001141000`  |
| removed |   -91 | 30.7% → 0.0% |  91 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000b0010bc800` |
| removed |   -86 | 29.1% → 0.0% |  86 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001150800`  |
| removed |   -85 | 28.7% → 0.0% |  85 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000b001152800` |
| removed |   -85 | 28.7% → 0.0% |  85 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b0012d8400`  |
| removed |   -78 | 26.4% → 0.0% |  78 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000b00118d000`  |
| removed |   -77 | 26.0% → 0.0% |  77 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001119400`  |
| removed |   -73 | 24.7% → 0.0% |  73 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001142000`  |
| removed |   -72 | 24.3% → 0.0% |  72 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000b00138c800` |

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

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +10.878 GiB | 0.0% → 92.7% | 0 B → 10.9 GiB | 0 → 5,790 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|    new |  +7.512 GiB | 0.0% → 64.1% | 0 B → 7.51 GiB | 0 → 3,951 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001117800`  |
|    new |   +7.45 GiB | 0.0% → 63.5% | 0 B → 7.45 GiB | 0 → 3,981 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`  |
|    new |  +7.411 GiB | 0.0% → 63.2% | 0 B → 7.41 GiB | 0 → 3,901 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001118400`  |
|    new |  +6.502 GiB | 0.0% → 55.4% |  0 B → 6.5 GiB | 0 → 3,390 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001140400`  |
|    new |  +6.427 GiB | 0.0% → 54.8% | 0 B → 6.43 GiB | 0 → 3,351 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700118d400`  |
|    new |  +5.851 GiB | 0.0% → 49.9% | 0 B → 5.85 GiB | 0 → 3,160 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`  |
|    new |  +5.471 GiB | 0.0% → 46.6% | 0 B → 5.47 GiB | 0 → 2,839 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |
|    new |  +5.314 GiB | 0.0% → 45.3% | 0 B → 5.31 GiB | 0 → 2,799 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000700118d000`  |
|    new |  +5.265 GiB | 0.0% → 44.9% | 0 B → 5.27 GiB | 0 → 2,701 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400` |
|    new |      +5 GiB | 0.0% → 42.6% |    0 B → 5 GiB | 0 → 2,557 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |
|    new |  +4.889 GiB | 0.0% → 41.7% | 0 B → 4.89 GiB | 0 → 2,565 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001142000`  |
|    new |  +4.797 GiB | 0.0% → 40.9% |  0 B → 4.8 GiB | 0 → 2,503 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000700138c800` |
|    new |  +4.422 GiB | 0.0% → 37.7% | 0 B → 4.42 GiB | 0 → 2,313 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700138d400`  |
|    new |  +4.413 GiB | 0.0% → 37.6% | 0 B → 4.41 GiB | 0 → 2,312 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`  |
|    new |  +3.556 GiB | 0.0% → 30.3% | 0 B → 3.56 GiB | 0 → 1,864 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070013db000`  |
|    new |  +3.491 GiB | 0.0% → 29.8% | 0 B → 3.49 GiB | 0 → 1,834 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000700118e800` |
|    new |  +3.377 GiB | 0.0% → 28.8% | 0 B → 3.38 GiB | 0 → 1,761 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2400`  |
|    new |  +3.304 GiB | 0.0% → 28.2% |  0 B → 3.3 GiB | 0 → 1,782 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001119400`  |
|    new |  +3.281 GiB | 0.0% → 28.0% | 0 B → 3.28 GiB | 0 → 1,664 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000007001004000`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.206 GiB | 94.2% → 0.0% | 11.2 GiB → 0 B | 5,873 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b0010b2800` |
| removed |  -7.692 GiB | 64.7% → 0.0% | 7.69 GiB → 0 B | 4,045 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b001115400`  |
| removed |  -7.664 GiB | 64.4% → 0.0% | 7.66 GiB → 0 B | 4,021 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001117800`  |
| removed |   -7.56 GiB | 63.6% → 0.0% | 7.56 GiB → 0 B | 3,968 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000b001118400`  |
| removed |   -6.56 GiB | 55.2% → 0.0% | 6.56 GiB → 0 B | 3,421 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000b001140400`  |
| removed |  -6.502 GiB | 54.7% → 0.0% |  6.5 GiB → 0 B | 3,390 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000b00118d400`  |
| removed |  -5.964 GiB | 50.1% → 0.0% | 5.96 GiB → 0 B | 3,202 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000b001118000`  |
| removed |  -5.459 GiB | 45.9% → 0.0% | 5.46 GiB → 0 B | 2,864 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000b00118d000`  |
| removed |  -5.444 GiB | 45.8% → 0.0% | 5.44 GiB → 0 B | 2,788 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000b0010bc800` |
| removed |  -5.249 GiB | 44.1% → 0.0% | 5.25 GiB → 0 B | 2,764 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000b0010bd400` |
| removed |  -4.956 GiB | 41.7% → 0.0% | 4.96 GiB → 0 B | 2,579 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001142000`  |
| removed |  -4.905 GiB | 41.2% → 0.0% | 4.91 GiB → 0 B | 2,528 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000b00138c800` |
| removed |  -4.903 GiB | 41.2% → 0.0% |  4.9 GiB → 0 B | 2,573 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b00113fc00`  |
| removed |  -4.512 GiB | 37.9% → 0.0% | 4.51 GiB → 0 B | 2,356 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b00138d400`  |
| removed |  -4.451 GiB | 37.4% → 0.0% | 4.45 GiB → 0 B | 2,325 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b0012ac800`  |
| removed |  -3.566 GiB | 30.0% → 0.0% | 3.57 GiB → 0 B | 1,855 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b0013db000`  |
| removed |  -3.508 GiB | 29.5% → 0.0% | 3.51 GiB → 0 B | 1,845 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b0013d2400`  |
| removed |  -3.453 GiB | 29.0% → 0.0% | 3.45 GiB → 0 B | 1,795 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000b00118e800` |
| removed |  -3.327 GiB | 28.0% → 0.0% | 3.33 GiB → 0 B | 1,809 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001119400`  |
| removed |  -3.314 GiB | 27.9% → 0.0% | 3.31 GiB → 0 B | 1,796 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001141000`  |

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

##### Standard library

|  Change |       Delta |            % |                Size | Objects | Function                                                                                    | Location                                                 |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|     new | +12.343 KiB | 0.0% → 86.8% |      0 B → 12.3 KiB | 0 → 103 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800`     |
|     new | +11.851 KiB | 0.0% → 83.4% |      0 B → 11.9 KiB |  0 → 96 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001117800`      |
|     new | +11.851 KiB | 0.0% → 83.4% |      0 B → 11.9 KiB |  0 → 96 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001118400`      |
|     new | +11.585 KiB | 0.0% → 81.5% |      0 B → 11.6 KiB |  0 → 91 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001115400`      |
|     new |  +9.851 KiB | 0.0% → 69.3% |      0 B → 9.85 KiB |  0 → 61 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001141000`      |
|     new |  +7.351 KiB | 0.0% → 51.7% |      0 B → 7.35 KiB |  0 → 58 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`      |
|     new |  +6.164 KiB | 0.0% → 43.4% |      0 B → 6.16 KiB |  0 → 28 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400`     |
|     new |  +5.937 KiB | 0.0% → 41.8% |      0 B → 5.94 KiB |  0 → 29 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd000`     |
|     new |  +5.851 KiB | 0.0% → 41.2% |      0 B → 5.85 KiB |  0 → 24 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`      |
|     new |    +5.5 KiB | 0.0% → 38.7% |       0 B → 5.5 KiB |  0 → 20 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013d2400`      |
|     new |  +5.445 KiB | 0.0% → 38.3% |      0 B → 5.45 KiB |  0 → 21 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00`      |
|     new |  +5.296 KiB | 0.0% → 37.3% |       0 B → 5.3 KiB |  0 → 20 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001119400`      |
| +442.4% |  +5.218 KiB | 1.3% → 45.0% |  1.18 KiB → 6.4 KiB |  4 → 10 | `copyNonPrivateMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)`                      | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
| +442.4% |  +5.218 KiB | 1.3% → 45.0% |  1.18 KiB → 6.4 KiB |  4 → 10 | `copyNonPrivateMethods(MetaMethodIndex$Header, MetaMethodIndex$Header)`                     | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|     new |  +4.812 KiB | 0.0% → 33.8% |      0 B → 4.81 KiB |   0 → 9 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070013db400`      |
|  +90.0% |  +4.421 KiB | 5.5% → 65.7% | 4.91 KiB → 9.34 KiB | 38 → 49 | `invokeMethod(Object, String, Object[])`                                                    | `groovy.lang.MetaClassImpl`                              |
|  +86.2% |  +4.343 KiB | 5.6% → 66.0% | 5.04 KiB → 9.38 KiB | 40 → 50 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                           | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
|     new |  +4.296 KiB | 0.0% → 30.2% |       0 B → 4.3 KiB |   0 → 6 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000700138c800`     |
| +177.7% |  +4.289 KiB | 2.7% → 47.1% |  2.41 KiB → 6.7 KiB |  9 → 15 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|     new |  +4.203 KiB | 0.0% → 29.6% |       0 B → 4.2 KiB |   0 → 5 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800`      |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size |  Objects | Function                                                                                       | Location                                                                   |
| ------: | ----------: | ------------: | ------------------: | -------: | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -79.476 KiB |  88.3% → 0.0% |      79.5 KiB → 0 B |   93 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x000000b0010b2800`                       |
| removed | -78.984 KiB |  87.8% → 0.0% |        79 KiB → 0 B |   85 → 0 | `guardWithCatch(Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$MH.0x000000b001117800`                        |
| removed | -78.812 KiB |  87.6% → 0.0% |      78.8 KiB → 0 B |   82 → 0 | `guard(Object, Object, Object)`                                                                | `java.lang.invoke.LambdaForm$MH.0x000000b001118400`                        |
| removed | -78.625 KiB |  87.4% → 0.0% |      78.6 KiB → 0 B |   80 → 0 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000b001115400`                        |
| removed | -76.312 KiB |  84.8% → 0.0% |      76.3 KiB → 0 B |   50 → 0 | `reinvoke(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000b001118000`                        |
| removed | -68.328 KiB |  76.0% → 0.0% |      68.3 KiB → 0 B |   49 → 0 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000b001141000`                        |
|  -86.9% | -67.359 KiB | 86.2% → 71.6% | 77.5 KiB → 10.2 KiB |  50 → 59 | `invokeImpl(Object, Object[])`                                                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`                          |
|  -87.1% | -67.296 KiB | 85.9% → 70.3% |   77.3 KiB → 10 KiB |  48 → 58 | `invokeExact_MT(Object, Object, Object, Object)`                                               | `java.lang.invoke.Invokers$Holder`                                         |
|  -86.9% | -67.273 KiB | 86.1% → 71.6% | 77.5 KiB → 10.2 KiB |  49 → 59 | `invoke(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`                          |
|  -87.1% | -67.257 KiB | 85.9% → 70.2% | 77.2 KiB → 9.98 KiB |  47 → 60 | `invokeSpecial(Object, Object, Object)`                                                        | `java.lang.invoke.DirectMethodHandle$Holder`                               |
|  -84.4% | -67.148 KiB | 88.5% → 87.4% | 79.6 KiB → 12.4 KiB | 94 → 105 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -85.2% | -66.945 KiB | 87.3% → 81.8% | 78.6 KiB → 11.6 KiB |  79 → 91 | `linkToCallSite(Object, Object, Object)`                                                       | `java.lang.invoke.Invokers$Holder`                                         |
|  -84.4% | -66.882 KiB | 88.1% → 86.8% | 79.2 KiB → 12.3 KiB | 88 → 103 | `invokeExact_MT(Object, Object, Object)`                                                       | `java.lang.invoke.Invokers$Holder`                                         |
| removed | -65.546 KiB |  72.9% → 0.0% |      65.5 KiB → 0 B |   22 → 0 | `invokeInterface(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$DMH.0x000000b0010bd000`                       |
|  -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `get()`                                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`           |
|  -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)`                                   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `provide(Object)`                                                                              | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x00000070010b6d70` |
|  -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                        |
|  -98.6% | -65.031 KiB |  73.3% → 6.4% |    65.9 KiB → 936 B |  21 → 19 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)`                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
