# Allocated heap profile diff

Allocated 11.9 GiB → 11.8 GiB (-111.999 MiB, -0.9%) over 24,369 samples → 24,145 samples (512 KiB per sample).

| Category         | Change |       Delta |             % |                Size |         Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------------: |
| Standard library |  -0.7% | -87.999 MiB | 99.0% → 99.2% | 11.8 GiB → 11.7 GiB | 24,116 → 23,940 |
| Ours             | -19.0% | -23.999 MiB |   1.0% → 0.8% |   126 MiB → 102 MiB |       253 → 205 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |           % |                Size |       Samples | Function                                                       | Location                                            |
| ------: | ----------: | ----------: | ------------------: | ------------: | -------------------------------------------------------------- | --------------------------------------------------- |
|   +5.2% | +39.499 MiB | 6.2% → 6.6% |   754 MiB → 793 MiB | 1,508 → 1,587 | `makeImpl(Class, Class[], boolean)`                            | `java.lang.invoke.MethodType`                       |
|  +10.5% | +27.999 MiB | 2.2% → 2.4% |   267 MiB → 295 MiB |     534 → 590 | `lambdaFormEditor(LambdaForm)`                                 | `java.lang.invoke.LambdaFormEditor`                 |
|  +11.2% | +25.999 MiB | 1.9% → 2.1% |   233 MiB → 259 MiB |     466 → 518 | `divideAndRemainderKnuth(BigInteger)`                          | `java.math.BigInteger`                              |
| +212.5% | +25.499 MiB | 0.1% → 0.3% |   12 MiB → 37.5 MiB |       24 → 75 | `copy()`                                                       | `java.lang.reflect.Method`                          |
|  +17.9% | +22.499 MiB | 1.0% → 1.2% |   126 MiB → 148 MiB |     252 → 297 | `make(MethodType, LambdaForm, Object, Object, Object)`         | `java.lang.invoke.BoundMethodHandle$Species_LLL`    |
|  +30.1% | +16.999 MiB | 0.5% → 0.6% | 56.5 MiB → 73.5 MiB |     113 → 147 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`   | `java.math.MutableBigInteger`                       |
|  +15.8% | +13.499 MiB | 0.7% → 0.8% |   85.5 MiB → 99 MiB |     171 → 198 | `map(Function)`                                                | `java.util.stream.ReferencePipeline`                |
|   +3.9% | +10.999 MiB | 2.3% → 2.4% |   280 MiB → 291 MiB |     560 → 582 | `copyOfRange(Object[], int, int)`                              | `java.util.Arrays`                                  |
|   +5.9% | +10.999 MiB | 1.5% → 1.6% |   185 MiB → 196 MiB |     371 → 393 | `spliterator(Object[], int, int, int)`                         | `java.util.Spliterators`                            |
|  +24.1% | +10.499 MiB |        0.4% |   43.5 MiB → 54 MiB |      87 → 108 | `RemoveQEQuoting()`                                            | `java.util.regex.Pattern`                           |
|  +51.3% |  +9.999 MiB |        0.2% | 19.5 MiB → 29.5 MiB |       39 → 59 | `<init>()`                                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`    |
|  +11.9% |  +9.499 MiB |        0.7% |   80 MiB → 89.5 MiB |     160 → 179 | `iterator()`                                                   | `java.util.ArrayList`                               |
|   +7.9% |  +9.499 MiB | 1.0% → 1.1% |   120 MiB → 129 MiB |     240 → 259 | `of(byte, int)`                                                | `java.lang.invoke.LambdaFormEditor$TransformKey`    |
|  +11.1% |  +9.499 MiB | 0.7% → 0.8% |   85.5 MiB → 95 MiB |     171 → 190 | `newHashMap(int)`                                              | `java.util.HashMap`                                 |
|   +3.6% |  +8.999 MiB | 2.0% → 2.1% |   248 MiB → 257 MiB |     497 → 515 | `make(MethodType, LambdaForm, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLL`   |
|   +7.7% |  +8.999 MiB |        1.0% |   117 MiB → 126 MiB |     234 → 252 | `<init>()`                                                     | `java.math.MutableBigInteger`                       |
|  +16.7% |  +7.999 MiB | 0.4% → 0.5% |     48 MiB → 56 MiB |      96 → 112 | `unreflect(Method)`                                            | `java.lang.invoke.MethodHandles$Lookup`             |
| +123.1% |  +7.999 MiB |        0.1% |  6.5 MiB → 14.5 MiB |       13 → 29 | `isCase(Object, Object)`                                       | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  +40.0% |  +7.999 MiB |        0.2% |     20 MiB → 28 MiB |       40 → 56 | `intStream(Spliterator$OfInt, boolean)`                        | `java.util.stream.StreamSupport`                    |
|   +3.3% |  +7.499 MiB | 1.8% → 1.9% |   224 MiB → 232 MiB |     449 → 464 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                                 |

##### Ours

|  Change |          Delta |            % |            Size | Samples | Function                                                      | Location                                                                   |
| ------: | -------------: | -----------: | --------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +63.6% |     +3.499 MiB | <0.1% → 0.1% | 5.5 MiB → 9 MiB | 11 → 18 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|     new |     +1.499 MiB | 0.0% → <0.1% |   0 B → 1.5 MiB |   0 → 3 | `visitConstantExpression(ConstantExpression)`                 | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`         |
| +300.0% |     +1.499 MiB |        <0.1% | 512 KiB → 2 MiB |   1 → 4 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`              |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1 MiB |   0 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1 MiB |   0 → 2 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.naming.MethodNameAstVisitor`                            |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1 MiB |   0 → 2 | `addClosureFieldsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                 |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1 MiB |   0 → 2 | `visitMethodCallExpression(MethodCallExpression)`             | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`            |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  +33.3% |   +511.999 KiB |        <0.1% | 1.5 MiB → 2 MiB |   3 → 4 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `visitClassEx(ClassNode)`                                     | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`              |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.design.ToStringReturnsNullAstVisitor`                   |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `parseIgnoreValues()`                                         | `org.codenarc.rule.dry.DuplicateStringLiteralRule`                         |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `visitClassEx(ClassNode)`                                     | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`               |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `visitClassEx(ClassNode)`                                     | `org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`             |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `<init>()`                                                    | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`      |
| +100.0% |   +511.999 KiB |        <0.1% | 512 KiB → 1 MiB |   1 → 2 | `visitVariableExpression(VariableExpression)`                 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                   |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `visitConstructorCallExpression(ConstructorCallExpression)`   | `org.codenarc.rule.AbstractConstructorCallAstVisitor`                      |
|     new |   +511.999 KiB | 0.0% → <0.1% |   0 B → 512 KiB |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
| +100.0% |   +511.999 KiB |        <0.1% | 512 KiB → 1 MiB |   1 → 2 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                   |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |            % |                Size |   Samples | Function                                                                                | Location                                              |
| -----: | ----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|  -7.5% | -33.499 MiB |  3.6% → 3.4% |   444 MiB → 411 MiB | 889 → 822 | `makeBlockInliningWrapper(MethodHandle)`                                                | `java.lang.invoke.MethodHandleImpl`                   |
| -12.2% | -31.999 MiB |  2.2% → 1.9% |   262 MiB → 230 MiB | 525 → 461 | `of(byte, int, int)`                                                                    | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -78.5% | -25.499 MiB |  0.3% → 0.1% |    32.5 MiB → 7 MiB |   65 → 14 | `tuple(Object, Object)`                                                                 | `groovy.lang.Tuple`                                   |
| -81.1% | -21.499 MiB | 0.2% → <0.1% |    26.5 MiB → 5 MiB |   53 → 10 | `<init>(Object, Object)`                                                                | `groovy.lang.Tuple2`                                  |
| -16.4% | -19.999 MiB |  1.0% → 0.8% |   122 MiB → 102 MiB | 244 → 204 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector`            |
| -20.3% | -19.499 MiB |  0.8% → 0.6% |   96 MiB → 76.5 MiB | 192 → 153 | `make(MethodType, LambdaForm, Object)`                                                  | `java.lang.invoke.BoundMethodHandle$Species_L`        |
|  -8.9% | -18.499 MiB |  1.7% → 1.6% |   209 MiB → 190 MiB | 418 → 381 | `compile()`                                                                             | `java.util.regex.Pattern`                             |
|  -7.3% | -15.999 MiB |  1.8% → 1.7% |   219 MiB → 203 MiB | 438 → 406 | `allocateInstance(Object)`                                                              | `java.lang.invoke.DirectMethodHandle`                 |
|  -9.7% | -15.999 MiB |  1.4% → 1.2% |   165 MiB → 149 MiB | 330 → 298 | `valueOf(long)`                                                                         | `java.lang.Long`                                      |
|  -8.6% | -12.499 MiB |  1.2% → 1.1% |   145 MiB → 132 MiB | 290 → 265 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                    | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| -18.0% | -12.499 MiB |  0.6% → 0.5% |   69.5 MiB → 57 MiB | 139 → 114 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`          | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`   |
| -22.8% | -11.499 MiB |  0.4% → 0.3% |   50.5 MiB → 39 MiB |  101 → 78 | `grow(int)`                                                                             | `java.util.ArrayList`                                 |
|  -6.8% | -10.999 MiB |  1.3% → 1.2% |   161 MiB → 150 MiB | 323 → 301 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                  | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`    |
| -13.0% |  -9.499 MiB |  0.6% → 0.5% |   73 MiB → 63.5 MiB | 144 → 125 | `copyOf(byte[], int)`                                                                   | `java.util.Arrays`                                    |
|  -8.3% |  -9.499 MiB |         0.9% |   114 MiB → 105 MiB | 229 → 210 | `toBigInteger(int)`                                                                     | `java.math.MutableBigInteger`                         |
| -19.3% |  -8.499 MiB |  0.4% → 0.3% |   44 MiB → 35.5 MiB |   88 → 71 | `of(byte, int, int, int)`                                                               | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -11.7% |  -7.999 MiB |  0.6% → 0.5% | 68.5 MiB → 60.5 MiB | 137 → 121 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                     | `java.lang.invoke.MethodHandleImpl`                   |
|  -8.4% |  -7.999 MiB |  0.8% → 0.7% | 95.5 MiB → 87.5 MiB | 191 → 175 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`               | `java.lang.invoke.MethodHandleImpl`                   |
|  -5.6% |  -7.999 MiB |  1.2% → 1.1% |   142 MiB → 134 MiB | 284 → 268 | `resize()`                                                                              | `java.util.HashMap`                                   |
|  -2.0% |  -7.499 MiB |         3.0% |   369 MiB → 361 MiB | 738 → 723 | `make(MethodType, LambdaForm, Object, Object)`                                          | `java.lang.invoke.BoundMethodHandle$Species_LL`       |

##### Ours

|  Change |          Delta |            % |              Size | Samples | Function                                               | Location                                                                                           |
| ------: | -------------: | -----------: | ----------------: | ------: | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
|  -33.3% |     -3.499 MiB |         0.1% |  10.5 MiB → 7 MiB | 21 → 14 | `collectViolations(SourceCode, RuleSet)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                     |
|  -83.3% |     -2.499 MiB |        <0.1% |   3 MiB → 512 KiB |   6 → 1 | `processMethodOrConstructorCall(MethodCall)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                           |
|  -66.7% |     -1.999 MiB |        <0.1% |     3 MiB → 1 MiB |   6 → 2 | `<init>(String, boolean)`                              | `org.codenarc.util.WildcardPattern`                                                                |
| removed |     -1.499 MiB | <0.1% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `removeAnyViolationsForSameLine(int)`                  | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                                     |
| removed |     -1.499 MiB | <0.1% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `visitExpressionStatement(ExpressionStatement)`        | `org.codenarc.rule.unused.UnusedArrayAstVisitor`                                                   |
| removed |     -1.499 MiB | <0.1% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `visitBinaryExpression(BinaryExpression)`              | `org.gmetrics.metric.abc.AbcAstVisitor`                                                            |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `convertStringWithWildcardsToRegex(String)`            | `org.codenarc.util.WildcardPattern`                                                                |
|  -66.7% | -1,023.998 KiB |        <0.1% | 1.5 MiB → 512 KiB |   3 → 1 | `doCall(Object)`                                       | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`              |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.basic.BrokenNullCheckAstVisitor`                                                |
|  -66.7% | -1,023.998 KiB |        <0.1% | 1.5 MiB → 512 KiB |   3 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                                                       |
|  -50.0% | -1,023.998 KiB |        <0.1% |     2 MiB → 1 MiB |   4 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                                         |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `visitArgumentlistExpression(ArgumentListExpression)`  | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                                 |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`                                       |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`                             |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`                                      |
|  -14.3% | -1,023.998 KiB | 0.1% → <0.1% |     7 MiB → 6 MiB | 14 → 12 | `matches(String)`                                      | `org.codenarc.util.WildcardPattern`                                                                |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `visitVariableExpression(VariableExpression)`          | `org.codenarc.rule.convention.NoFloatAstVisitor`                                                   |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `doCall(Object)`                                       | `org.codenarc.rule.convention.VariableTypeRequiredAstVisitor$_visitDeclarationExpression_closure1` |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `visitBlockStatement(BlockStatement)`                  | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`                                    |
|  -40.0% | -1,023.998 KiB |        <0.1% | 2.5 MiB → 1.5 MiB |   5 → 3 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                                                                                |
| ----------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|    +5309.2% | +11.536 GiB |  1.8% → 99.7% |  222 MiB → 11.8 GiB |   445 → 24,069 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090010c8400 → java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
|  +255262.5% |  +9.971 GiB | <0.1% → 84.6% |    4 MiB → 9.98 GiB |     8 → 20,429 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000009001509800 → java.lang.invoke.LambdaForm$MH.0x00000070015a2400` |
| +2041300.0% |  +9.967 GiB | <0.1% → 84.5% |  512 KiB → 9.97 GiB |     1 → 20,414 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090014ae000 → java.lang.invoke.LambdaForm$MH.0x00000070015a5400` |
|   +92690.9% |  +9.957 GiB |  0.1% → 84.5% |   11 MiB → 9.97 GiB |    22 → 20,414 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001503400 → java.lang.invoke.LambdaForm$MH.0x00000070015a5000` |
|    +1152.3% |  +9.954 GiB |  7.3% → 91.7% |  885 MiB → 10.8 GiB | 1,767 → 22,153 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090012ba400 → java.lang.invoke.LambdaForm$MH.0x0000007001282400` |
|     +446.1% |  +9.215 GiB | 17.4% → 95.7% | 2.07 GiB → 11.3 GiB | 4,231 → 23,102 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090010da400 → java.lang.invoke.LambdaForm$MH.0x00000070010d4c00` |
|  +625566.7% |  +9.163 GiB | <0.1% → 77.7% |  1.5 MiB → 9.17 GiB |     3 → 18,770 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000900167e000 → java.lang.invoke.LambdaForm$MH.0x0000007001639400` |
|  +208455.6% |   +9.16 GiB | <0.1% → 77.7% |  4.5 MiB → 9.17 GiB |     9 → 18,770 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000900168c400 → java.lang.invoke.LambdaForm$MH.0x000000700163a000` |
|   +98689.5% |  +9.155 GiB |  0.1% → 77.7% |  9.5 MiB → 9.17 GiB |    19 → 18,770 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001497400 → java.lang.invoke.LambdaForm$MH.0x0000007001639c00` |
|   +14465.6% |  +8.405 GiB |  0.5% → 71.8% | 59.5 MiB → 8.46 GiB |   119 → 17,331 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000090013a2c00 → java.lang.invoke.LambdaForm$MH.0x000000700136a400` |
|    +1506.5% |   +7.98 GiB |  4.5% → 72.2% |  542 MiB → 8.51 GiB | 1,085 → 17,428 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001359c00 → java.lang.invoke.LambdaForm$MH.0x000000700126a400` |
| +1561500.0% |  +7.624 GiB | <0.1% → 64.7% |  512 KiB → 7.62 GiB |     1 → 15,616 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090015e8000 → java.lang.invoke.LambdaForm$MH.0x00000070017c1c00` |
|    +8741.9% |  +5.719 GiB |  0.5% → 49.1% |   67 MiB → 5.79 GiB |   134 → 11,846 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090010ab000 → java.lang.invoke.LambdaForm$MH.0x000000700136a800` |
|  +108860.9% |  +5.315 GiB | <0.1% → 45.1% |    5 MiB → 5.32 GiB |    10 → 10,894 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000009001390800 → java.lang.invoke.LambdaForm$MH.0x0000007001360c00` |
|     +718.5% |  +3.206 GiB |  3.7% → 31.0% |  457 MiB → 3.65 GiB |    914 → 7,479 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090012c0c00 → java.lang.invoke.LambdaForm$MH.0x0000007001291000` |
|   +15014.8% |  +1.979 GiB |  0.1% → 16.9% | 13.5 MiB → 1.99 GiB |     27 → 4,081 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090012aa400 → java.lang.invoke.LambdaForm$MH.0x0000007001314400` |
|   +42875.0% |  +1.674 GiB | <0.1% → 14.2% |    4 MiB → 1.68 GiB |      8 → 3,438 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001116400 → java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
|   +72275.0% |  +1.411 GiB | <0.1% → 12.0% |    2 MiB → 1.41 GiB |      4 → 2,895 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001638000 → java.lang.invoke.LambdaForm$MH.0x00000070017c2800` |
|  +220300.0% |  +1.075 GiB |  <0.1% → 9.1% |  512 KiB → 1.08 GiB |      1 → 2,204 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090015e6400 → java.lang.invoke.LambdaForm$MH.0x00000070017c7000` |
|   +11015.8% |  +1.021 GiB |   0.1% → 8.7% |  9.5 MiB → 1.03 GiB |     19 → 2,112 | `invoke(Object, Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH.0x0000009001355400 → java.lang.invoke.LambdaForm$MH.0x000000700136ac00` |

##### Ours

| Change |       Delta |           % |                Size |   Samples | Function                                               | Location                                                                                       |
| -----: | ----------: | ----------: | ------------------: | --------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
|  +6.5% | +15.999 MiB | 2.0% → 2.2% |   245 MiB → 261 MiB | 490 → 522 | `isMethodNamed(MethodCallExpression, String, Integer)` | `org.codenarc.util.AstUtil`                                                                    |
| +19.2% | +13.999 MiB | 0.6% → 0.7% |     73 MiB → 87 MiB | 146 → 174 | `getAstVisitor()`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                                     |
| +56.5% | +12.999 MiB | 0.2% → 0.3% |     23 MiB → 36 MiB |   46 → 72 | `suppressException(Class, Closure)`                    | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                   |
|  +9.5% | +12.499 MiB | 1.1% → 1.2% |   132 MiB → 144 MiB | 264 → 289 | `writeSummary(Writer, Results)`                        | `org.codenarc.report.TextReportWriter`                                                         |
|  +5.9% | +11.999 MiB | 1.7% → 1.8% |   204 MiB → 216 MiB | 409 → 433 | `super$3$applyTo(SourceCode, List)`                    | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                       |
| +31.6% | +11.999 MiB | 0.3% → 0.4% |     38 MiB → 50 MiB |  76 → 100 | `super$3$visitBlockStatement(BlockStatement)`          | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                            |
| +28.2% | +11.999 MiB | 0.3% → 0.5% | 42.5 MiB → 54.5 MiB |  85 → 109 | `visitBlockStatement(BlockStatement)`                  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                            |
| +52.3% | +11.499 MiB | 0.2% → 0.3% |   22 MiB → 33.5 MiB |   44 → 67 | `doCall(Object)`                                       | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1` |
| +52.3% | +11.499 MiB | 0.2% → 0.3% |   22 MiB → 33.5 MiB |   44 → 67 | `doCall()`                                             | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1` |
|  +4.6% | +10.999 MiB | 2.0% → 2.1% |   241 MiB → 252 MiB | 483 → 505 | `findLineWithDeclaration(ASTNode, String)`             | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                            |
|  +5.1% | +10.999 MiB | 1.8% → 1.9% |   216 MiB → 227 MiB | 432 → 454 | `applyTo(SourceCode, List)`                            | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                       |
| +21.0% | +10.999 MiB | 0.4% → 0.5% | 52.5 MiB → 63.5 MiB | 105 → 127 | `isMethodCall(Expression, String, int)`                | `org.codenarc.util.AstUtil`                                                                    |
| +64.7% | +10.999 MiB | 0.1% → 0.2% |     17 MiB → 28 MiB |   34 → 56 | `addViolationIfDoubleQuoted(ConstantExpression)`       | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                   |
|  +8.0% | +10.499 MiB | 1.1% → 1.2% |   132 MiB → 142 MiB | 264 → 285 | `doCall(Object)`                                       | `org.codenarc.report.TextReportWriter$_writeSummary_closure1`                                  |
|  +3.9% |  +9.999 MiB | 2.1% → 2.2% |   253 MiB → 263 MiB | 507 → 527 | `checkDeclaration(ASTNode, String, String)`            | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                            |
| +21.3% |  +9.999 MiB | 0.4% → 0.5% |     47 MiB → 57 MiB |  94 → 114 | `doCall(Object)`                                       | `org.codenarc.rule.unused.UnusedVariableRule$_applyTo_closure2`                                |
| +20.6% |  +9.999 MiB | 0.4% → 0.5% | 48.5 MiB → 58.5 MiB |  97 → 117 | `applyTo(SourceCode, List)`                            | `org.codenarc.rule.unused.UnusedVariableRule`                                                  |
| +38.5% |  +9.999 MiB | 0.2% → 0.3% |     26 MiB → 36 MiB |   52 → 72 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                            |
|  +8.0% |  +9.499 MiB | 1.0% → 1.1% |   119 MiB → 128 MiB | 238 → 257 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                            |
| +46.3% |  +9.499 MiB |        0.2% |   20.5 MiB → 30 MiB |   41 → 60 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                            |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                                                                                |
| ------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| -100.0% | -11.715 GiB | 98.5% → <0.1% |  11.7 GiB → 4.5 MiB |     24,000 → 9 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000900102b000 → java.lang.invoke.LambdaForm$MH.0x0000007001115800` |
| -100.0% | -10.902 GiB | 91.6% → <0.1% |  10.9 GiB → 512 KiB |     22,328 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090012b1000 → java.lang.invoke.LambdaForm$MH.0x0000007001236c00` |
| -100.0% | -10.026 GiB | 84.3% → <0.1% |    10 GiB → 4.5 MiB |     20,544 → 9 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090015c6c00 → java.lang.invoke.LambdaForm$MH.0x0000007001405c00` |
|  -99.7% | -10.013 GiB |  84.4% → 0.2% |   10 GiB → 26.5 MiB |    20,560 → 53 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090015c3c00 → java.lang.invoke.LambdaForm$MH.0x0000007001490000` |
|  -98.9% |  -9.916 GiB |  84.3% → 1.0% |    10 GiB → 117 MiB |   20,544 → 234 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090015c6800 → java.lang.invoke.LambdaForm$MH.0x000000700158b800` |
|  -82.6% |  -9.798 GiB | 99.6% → 17.4% | 11.9 GiB → 2.06 GiB | 24,278 → 4,213 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090010c7400 → java.lang.invoke.LambdaForm$MH.0x00000070010d9c00` |
| -100.0% |  -9.242 GiB | 77.7% → <0.1% |    9.24 GiB → 1 MiB |     18,930 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001661400 → java.lang.invoke.LambdaForm$MH.0x0000007001624000` |
| -100.0% |  -9.241 GiB | 77.7% → <0.1% |    9.24 GiB → 2 MiB |     18,930 → 4 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000009001662000 → java.lang.invoke.LambdaForm$MH.0x0000007001361c00` |
|  -99.8% |  -9.221 GiB |  77.7% → 0.2% |   9.24 GiB → 22 MiB |    18,930 → 44 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001661c00 → java.lang.invoke.LambdaForm$MH.0x000000700162b400` |
|  -99.6% |   -8.49 GiB |  71.6% → 0.3% | 8.52 GiB → 31.5 MiB |    17,450 → 63 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000009001399800 → java.lang.invoke.LambdaForm$MH.0x0000007001282800` |
| -100.0% |  -7.739 GiB | 65.0% → <0.1% |  7.74 GiB → 512 KiB |     15,852 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090017e3c00 → java.lang.invoke.LambdaForm$MH.0x00000070014b6400` |
|  -99.9% |  -5.868 GiB |  49.4% → 0.1% |  5.88 GiB → 8.5 MiB |    12,033 → 17 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000009001399c00 → java.lang.invoke.LambdaForm$MH.0x000000700126b400` |
|  -68.3% |   -5.85 GiB | 72.0% → 23.0% | 8.56 GiB → 2.71 GiB | 17,538 → 5,557 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090012a9400 → java.lang.invoke.LambdaForm$MH.0x0000007001290000` |
|  -94.9% |  -5.102 GiB |  45.2% → 2.3% |  5.38 GiB → 282 MiB |   11,012 → 565 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000900138fc00 → java.lang.invoke.LambdaForm$MH.0x0000007001130800` |
|  -77.1% |  -2.831 GiB |  30.9% → 7.1% |  3.67 GiB → 861 MiB |  7,518 → 1,720 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090012bcc00 → java.lang.invoke.LambdaForm$MH.0x000000700128b800` |
|  -99.9% |  -1.693 GiB | 14.3% → <0.1% |   1.7 GiB → 2.5 MiB |      3,474 → 5 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001105400 → java.lang.invoke.LambdaForm$MH.0x00000070010a0800` |
|  -96.5% |  -1.596 GiB |  13.9% → 0.5% |   1.65 GiB → 60 MiB |    3,389 → 120 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090012c0000 → java.lang.invoke.LambdaForm$MH.0x0000007001182000` |
|  -99.9% |  -1.458 GiB | 12.3% → <0.1% |  1.46 GiB → 1.5 MiB |      2,989 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090017e4800 → java.lang.invoke.LambdaForm$MH.0x0000007001656000` |
|  -99.3% |  -1.103 GiB |   9.3% → 0.1% |    1.11 GiB → 8 MiB |     2,276 → 16 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000090017e9000 → java.lang.invoke.LambdaForm$MH.0x00000070017adc00` |
|  -99.7% |  -1.021 GiB |  8.6% → <0.1% |  1.02 GiB → 3.5 MiB |      2,099 → 7 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001356400 → java.lang.invoke.LambdaForm$MH.0x0000007001322800` |

##### Ours

| Change |        Delta |             % |                Size |         Samples | Function                                         | Location                                                                    |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
|  -0.9% | -109.499 MiB |         99.9% | 11.9 GiB → 11.8 GiB | 24,339 → 24,120 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
|  -0.9% | -104.499 MiB | 99.6% → 99.7% | 11.9 GiB → 11.8 GiB | 24,278 → 24,069 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
|  -0.8% |  -99.999 MiB | 98.5% → 98.6% | 11.7 GiB → 11.6 GiB | 23,998 → 23,798 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
|  -0.8% |  -88.999 MiB | 91.6% → 91.8% | 10.9 GiB → 10.8 GiB | 22,334 → 22,156 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -0.8% |  -88.499 MiB | 91.5% → 91.7% | 10.9 GiB → 10.8 GiB | 22,311 → 22,134 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -0.8% |  -87.999 MiB | 91.6% → 91.7% | 10.9 GiB → 10.8 GiB | 22,326 → 22,150 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -0.8% |  -87.499 MiB | 91.6% → 91.7% | 10.9 GiB → 10.8 GiB | 22,328 → 22,153 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -0.8% |  -87.499 MiB | 91.4% → 91.5% | 10.9 GiB → 10.8 GiB | 22,280 → 22,105 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -1.9% |  -78.999 MiB | 33.8% → 33.5% | 4.03 GiB → 3.95 GiB |   8,248 → 8,090 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
|  -2.1% |  -75.499 MiB | 29.8% → 29.4% | 3.54 GiB → 3.47 GiB |   7,253 → 7,102 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  -2.1% |  -70.999 MiB | 27.9% → 27.6% | 3.32 GiB → 3.25 GiB |   6,803 → 6,661 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -1.0% |  -57.999 MiB | 45.5% → 45.4% | 5.41 GiB → 5.36 GiB | 11,086 → 10,970 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  -1.6% |  -45.499 MiB | 23.0% → 22.8% | 2.73 GiB → 2.69 GiB |   5,596 → 5,505 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -0.5% |  -38.499 MiB | 67.5% → 67.8% | 8.03 GiB → 7.99 GiB | 16,445 → 16,368 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -13.0% |  -25.999 MiB |   1.6% → 1.4% |   200 MiB → 174 MiB |       401 → 349 | `super$3$applyTo(SourceCode, List)`              | `org.codenarc.rule.formatting.IndentationRule`                              |
| -13.0% |  -25.999 MiB |   1.6% → 1.4% |   200 MiB → 174 MiB |       401 → 349 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.formatting.IndentationRule`                              |
| -41.1% |  -21.999 MiB |   0.4% → 0.3% | 53.5 MiB → 31.5 MiB |        107 → 63 | `checkForCorrectColumn(ASTNode, String, int)`    | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
| -24.0% |  -19.999 MiB |   0.7% → 0.5% | 83.5 MiB → 63.5 MiB |       167 → 127 | `checkForCorrectColumn(ASTNode, String)`         | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
| -14.7% |  -19.999 MiB |   1.1% → 1.0% |   136 MiB → 116 MiB |       273 → 233 | `visitBlockStatement(BlockStatement)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|  -9.6% |  -19.999 MiB |   1.7% → 1.6% |   207 MiB → 187 MiB |       415 → 375 | `isMethodCallOnObject(Expression, String)`       | `org.codenarc.util.AstUtil`                                                 |

# Retained heap profile diff

Retained 1,009 KiB → 1.41 MiB (+439.468 KiB, +43.6%) over 688 objects → 774 objects (1.47 KiB → 1.87 KiB per object).

| Category         |  Change |        Delta |      % |                 Size |   Objects |
| ---------------- | ------: | -----------: | -----: | -------------------: | --------: |
| Standard library |  +43.5% | +439.164 KiB | 100.0% | 1,009 KiB → 1.41 MiB | 684 → 761 |
| Ours             | +260.0% |       +312 B |  <0.1% |        120 B → 432 B |    4 → 13 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|    Change |        Delta |             % |                Size | Objects | Function                                                                        | Location                                          |
| --------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------- |
|       new | +260.031 KiB |  0.0% → 18.0% |       0 B → 260 KiB |   0 → 2 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                  | `java.util.concurrent.ConcurrentHashMap`          |
|    +11.7% | +107.304 KiB | 90.6% → 70.5% | 914 KiB → 1,021 KiB |   1 → 2 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`                    |
|       new |  +64.015 KiB |   0.0% → 4.4% |        0 B → 64 KiB |   0 → 1 | `<init>(int)`                                                                   | `java.util.concurrent.atomic.AtomicIntegerArray`  |
| +27628.6% |  +30.218 KiB |  <0.1% → 2.1% |    112 B → 30.3 KiB |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                           |
|   +336.9% |   +8.843 KiB |   0.3% → 0.8% | 2.63 KiB → 11.5 KiB | 22 → 23 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                |
|   +611.1% |   +2.578 KiB |  <0.1% → 0.2% |       432 B → 3 KiB |   3 → 6 | `resize()`                                                                      | `java.util.HashMap`                               |
|       new |   +1.187 KiB |   0.0% → 0.1% |      0 B → 1.19 KiB |   0 → 8 | `makeWithoutCaching(String)`                                                    | `org.codehaus.groovy.ast.ClassHelper`             |
|    +50.0% |   +1.039 KiB |          0.2% | 2.08 KiB → 3.12 KiB | 14 → 21 | `getPlainNodeReference(boolean)`                                                | `org.codehaus.groovy.ast.ClassNode`               |
|   +112.5% |       +792 B |          0.1% |    704 B → 1.46 KiB |  8 → 17 | `copy()`                                                                        | `java.lang.reflect.Method`                        |
|    +24.4% |       +616 B |          0.2% | 2.46 KiB → 3.06 KiB |   7 → 6 | `write(String, int, int)`                                                       | `sun.nio.cs.StreamEncoder`                        |
|    +43.5% |       +480 B |          0.1% | 1.08 KiB → 1.55 KiB | 23 → 33 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                  | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |
|    +28.4% |       +464 B |   0.2% → 0.1% | 1.59 KiB → 2.05 KiB |   4 → 8 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                |
|   +450.0% |       +432 B |         <0.1% |        96 B → 528 B |  2 → 11 | `unreflect(Method)`                                                             | `java.lang.invoke.MethodHandles$Lookup`           |
|    +30.0% |       +432 B |          0.1% | 1.41 KiB → 1.83 KiB | 30 → 39 | `makeBlockInliningWrapper(MethodHandle)`                                        | `java.lang.invoke.MethodHandleImpl`               |
|    +71.4% |       +400 B |          0.1% |       560 B → 960 B | 14 → 24 | `make(MethodType, LambdaForm, Object, Object)`                                  | `java.lang.invoke.BoundMethodHandle$Species_LL`   |
|    +31.3% |       +280 B |          0.1% |    896 B → 1.15 KiB | 16 → 21 | `stream(Spliterator, boolean)`                                                  | `java.util.stream.StreamSupport`                  |
|    +31.0% |       +248 B |          0.1% |    800 B → 1.02 KiB |   4 → 3 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                |
|    +55.6% |       +200 B |         <0.1% |       360 B → 560 B |  9 → 14 | `spliterator(Object[], int, int, int)`                                          | `java.util.Spliterators`                          |
|   +440.0% |       +176 B |         <0.1% |        40 B → 216 B |   1 → 8 | `writeViolation(Writer, Violation, String)`                                     | `org.codenarc.report.TextReportWriter`            |
|   +116.7% |       +168 B |         <0.1% |       144 B → 312 B |  6 → 13 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                   | `java.lang.invoke.MethodHandleImpl`               |

##### Standard library

|    Change |        Delta |             % |                Size | Objects | Function                                                                        | Location                                          |
| --------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------- |
|       new | +260.031 KiB |  0.0% → 18.0% |       0 B → 260 KiB |   0 → 2 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                  | `java.util.concurrent.ConcurrentHashMap`          |
|    +11.7% | +107.304 KiB | 90.6% → 70.5% | 914 KiB → 1,021 KiB |   1 → 2 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`                    |
|       new |  +64.015 KiB |   0.0% → 4.4% |        0 B → 64 KiB |   0 → 1 | `<init>(int)`                                                                   | `java.util.concurrent.atomic.AtomicIntegerArray`  |
| +27628.6% |  +30.218 KiB |  <0.1% → 2.1% |    112 B → 30.3 KiB |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                           |
|   +336.9% |   +8.843 KiB |   0.3% → 0.8% | 2.63 KiB → 11.5 KiB | 22 → 23 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                |
|   +611.1% |   +2.578 KiB |  <0.1% → 0.2% |       432 B → 3 KiB |   3 → 6 | `resize()`                                                                      | `java.util.HashMap`                               |
|       new |   +1.187 KiB |   0.0% → 0.1% |      0 B → 1.19 KiB |   0 → 8 | `makeWithoutCaching(String)`                                                    | `org.codehaus.groovy.ast.ClassHelper`             |
|    +50.0% |   +1.039 KiB |          0.2% | 2.08 KiB → 3.12 KiB | 14 → 21 | `getPlainNodeReference(boolean)`                                                | `org.codehaus.groovy.ast.ClassNode`               |
|   +112.5% |       +792 B |          0.1% |    704 B → 1.46 KiB |  8 → 17 | `copy()`                                                                        | `java.lang.reflect.Method`                        |
|    +24.4% |       +616 B |          0.2% | 2.46 KiB → 3.06 KiB |   7 → 6 | `write(String, int, int)`                                                       | `sun.nio.cs.StreamEncoder`                        |
|    +43.5% |       +480 B |          0.1% | 1.08 KiB → 1.55 KiB | 23 → 33 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                  | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |
|    +28.4% |       +464 B |   0.2% → 0.1% | 1.59 KiB → 2.05 KiB |   4 → 8 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                |
|   +450.0% |       +432 B |         <0.1% |        96 B → 528 B |  2 → 11 | `unreflect(Method)`                                                             | `java.lang.invoke.MethodHandles$Lookup`           |
|    +30.0% |       +432 B |          0.1% | 1.41 KiB → 1.83 KiB | 30 → 39 | `makeBlockInliningWrapper(MethodHandle)`                                        | `java.lang.invoke.MethodHandleImpl`               |
|    +71.4% |       +400 B |          0.1% |       560 B → 960 B | 14 → 24 | `make(MethodType, LambdaForm, Object, Object)`                                  | `java.lang.invoke.BoundMethodHandle$Species_LL`   |
|    +31.3% |       +280 B |          0.1% |    896 B → 1.15 KiB | 16 → 21 | `stream(Spliterator, boolean)`                                                  | `java.util.stream.StreamSupport`                  |
|    +31.0% |       +248 B |          0.1% |    800 B → 1.02 KiB |   4 → 3 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                |
|    +55.6% |       +200 B |         <0.1% |       360 B → 560 B |  9 → 14 | `spliterator(Object[], int, int, int)`                                          | `java.util.Spliterators`                          |
|   +116.7% |       +168 B |         <0.1% |       144 B → 312 B |  6 → 13 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                   | `java.lang.invoke.MethodHandleImpl`               |
|       new |       +152 B |  0.0% → <0.1% |         0 B → 152 B |   0 → 1 | `visitClassDeclaration(GroovyParser$ClassDeclarationContext)`                   | `org.apache.groovy.parser.antlr4.AstBuilder`      |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |                Size | Objects | Function                                                                                        | Location                                                |
| ------: | ----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -62.4% | -19.984 KiB |  3.2% → 0.8% |     32 KiB → 12 KiB |   1 → 2 | `<init>(int, int, MemorySegment)`                                                               | `java.nio.HeapByteBuffer`                               |
|  -99.5% |  -8.281 KiB | 0.8% → <0.1% |     8.32 KiB → 40 B |       1 | `<init>(Object[])`                                                                              | `java.util.ImmutableCollections$SetN`                   |
|  -51.9% |  -6.367 KiB |  1.2% → 0.4% | 12.3 KiB → 5.91 KiB |       4 | `copyOfRange(byte[], int, int)`                                                                 | `java.util.Arrays`                                      |
|  -58.1% |  -3.515 KiB |  0.6% → 0.2% | 6.05 KiB → 2.53 KiB |   3 → 2 | `resize(int)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| removed |  -1.453 KiB |  0.1% → 0.0% |      1.45 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`             |
|  -32.3% |      -560 B |  0.2% → 0.1% |  1.7 KiB → 1.15 KiB | 31 → 21 | `grow(int)`                                                                                     | `java.util.ArrayList`                                   |
|  -54.5% |      -336 B | 0.1% → <0.1% |       616 B → 280 B |  11 → 5 | `map(Function)`                                                                                 | `java.util.stream.ReferencePipeline`                    |
|  -69.8% |      -240 B |        <0.1% |       344 B → 104 B |   9 → 3 | `make(byte, Class, MemberName, Class)`                                                          | `java.lang.invoke.DirectMethodHandle`                   |
| removed |      -224 B | <0.1% → 0.0% |         224 B → 0 B |   7 → 0 | `tuple(Object, Object)`                                                                         | `groovy.lang.Tuple`                                     |
|  -42.3% |      -176 B |        <0.1% |       416 B → 240 B |       1 | `toArray()`                                                                                     | `java.lang.PublicMethods`                               |
|  -30.0% |      -144 B |        <0.1% |       480 B → 336 B |  10 → 7 | `create(Tuple2, int, String, int, int, int, int, int)`                                          | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`      |
| removed |      -144 B | <0.1% → 0.0% |         144 B → 0 B |   1 → 0 | `sizeCache(int)`                                                                                | `java.lang.ClassValue$ClassValueMap`                    |
| removed |      -128 B | <0.1% → 0.0% |         128 B → 0 B |   2 → 0 | `createBinaryExpression(GroovyParser$ExpressionContext, Token, GroovyParser$ExpressionContext)` | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|  -83.3% |      -120 B |        <0.1% |        144 B → 24 B |   6 → 1 | `newString(byte[], int, int)`                                                                   | `java.lang.StringLatin1`                                |
|  -83.3% |      -120 B |        <0.1% |        144 B → 24 B |   6 → 1 | `createTerminalNode(ParserRuleContext, Token)`                                                  | `groovyjarjarantlr4.v4.runtime.Parser`                  |
|  -15.8% |      -120 B | 0.1% → <0.1% |       760 B → 640 B | 19 → 16 | `newNode(int, Object, Object, HashMap$Node)`                                                    | `java.util.LinkedHashMap`                               |
| removed |      -112 B | <0.1% → 0.0% |         112 B → 0 B |   1 → 0 | `createNormalMetaClass(Class, MetaClassRegistry)`                                               | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle` |
|  -28.6% |       -96 B |        <0.1% |       336 B → 240 B |   7 → 5 | `make(MethodType, LambdaForm, Object, Object, Object)`                                          | `java.lang.invoke.BoundMethodHandle$Species_LLL`        |
| removed |       -96 B | <0.1% → 0.0% |          96 B → 0 B |   3 → 0 | `entryKey(Object)`                                                                              | `jdk.internal.util.ReferencedKeyMap`                    |
| removed |       -80 B | <0.1% → 0.0% |          80 B → 0 B |   2 → 0 | `rparen()`                                                                                      | `org.apache.groovy.parser.antlr4.GroovyParser`          |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

|    Change |        Delta |            % |               Size |   Objects | Function                                                  | Location                                                                                                  |
| --------: | -----------: | -----------: | -----------------: | --------: | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  +4159.5% | +407.171 KiB | 1.0% → 28.8% | 9.79 KiB → 417 KiB | 116 → 502 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000900193c800 → java.lang.invoke.LambdaForm$MH.0x00000070010a9800`   |
|  +4118.5% | +403.164 KiB | 1.0% → 28.5% | 9.79 KiB → 413 KiB | 116 → 502 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000900193e400 → java.lang.invoke.LambdaForm$MH.0x000000700102b000`   |
|  +4118.4% | +403.156 KiB | 1.0% → 28.5% | 9.79 KiB → 413 KiB | 116 → 503 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001358400 → java.lang.invoke.LambdaForm$MH.0x000000700109bc00`   |
|  +4086.3% | +400.007 KiB | 1.0% → 28.3% | 9.79 KiB → 410 KiB | 116 → 455 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000090011ca400 → java.lang.invoke.LambdaForm$MH.0x0000007001182800`   |
|  +6727.7% | +391.046 KiB | 0.6% → 27.4% | 5.81 KiB → 397 KiB |  47 → 235 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001942400 → java.lang.invoke.LambdaForm$MH.0x0000007001282400`   |
| +27092.3% | +385.218 KiB | 0.1% → 26.7% | 1.42 KiB → 387 KiB |  28 → 147 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000090010db000 → java.lang.invoke.LambdaForm$MH.0x0000007001105400`   |
| +19859.7% | +384.781 KiB | 0.2% → 26.7% | 1.94 KiB → 387 KiB |  36 → 148 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001120800 → java.lang.invoke.LambdaForm$MH.0x00000070010d9c00`   |
|  +1002.9% | +384.304 KiB | 3.8% → 29.2% | 38.3 KiB → 423 KiB | 117 → 758 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000090017e9000 → java.lang.invoke.LambdaForm$MH.0x000000700108e000`   |
|  +5362.5% | +379.562 KiB | 0.7% → 26.7% | 7.08 KiB → 387 KiB |  78 → 147 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000900138fc00 → java.lang.invoke.LambdaForm$MH.0x0000007001291800`   |
|   +714.7% | +374.718 KiB | 5.2% → 29.5% | 52.4 KiB → 427 KiB | 152 → 770 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000090012c0000 → java.lang.invoke.LambdaForm$MH.0x00000070010a1800`   |
| +45579.8% | +370.335 KiB | 0.1% → 25.6% |    832 B → 371 KiB |   7 → 140 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000090014bc800 → java.lang.invoke.LambdaForm$MH.0x00000070012a4c00`   |
|   +696.4% | +369.796 KiB | 5.3% → 29.2% | 53.1 KiB → 423 KiB | 160 → 765 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001661c00 → java.lang.invoke.LambdaForm$MH.0x00000070010c7000`   |
|  +3759.2% | +361.531 KiB | 1.0% → 25.6% | 9.62 KiB → 371 KiB | 267 → 140 | `invokeVirtual(Object, Object, int)`                      | `java.lang.invoke.LambdaForm$DMH.0x000000900188c800 → java.lang.invoke.LambdaForm$DMH.0x0000007001109400` |
| +46733.7% | +357.804 KiB | 0.1% → 24.8% |    784 B → 359 KiB |  12 → 171 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000009001228000 → java.lang.invoke.LambdaForm$MH.0x00000070015a2400`   |
| +10746.4% | +352.617 KiB | 0.3% → 24.6% | 3.28 KiB → 356 KiB |  49 → 141 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000009001933000 → java.lang.invoke.LambdaForm$MH.0x0000007001314400`   |
|  +3637.5% | +348.976 KiB | 1.0% → 24.8% | 9.59 KiB → 359 KiB |  63 → 171 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000090012bbc00 → java.lang.invoke.LambdaForm$MH.0x00000070015a5400`   |
|  +4928.1% |  +348.82 KiB | 0.7% → 24.6% | 7.08 KiB → 356 KiB |  78 → 141 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000009001399c00 → java.lang.invoke.LambdaForm$MH.0x0000007001318400`   |
|  +3353.5% | +348.187 KiB | 1.0% → 24.8% | 10.4 KiB → 359 KiB |  41 → 171 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000900109ac00 → java.lang.invoke.LambdaForm$MH.0x00000070015a5000`   |
|   +399.0% | +338.148 KiB | 8.4% → 29.2% | 84.8 KiB → 423 KiB | 404 → 765 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000090010a9800 → java.lang.invoke.LambdaForm$MH.0x00000070010c6400`   |
|   +441.5% | +335.945 KiB | 7.5% → 28.4% | 76.1 KiB → 412 KiB | 395 → 492 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001095000 → java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

| Change |       Delta |            % |                Size |   Objects | Function                                 | Location                                                                                                  |
| -----: | ----------: | -----------: | ------------------: | --------: | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -91.5% | -86.632 KiB |  9.4% → 0.6% | 94.7 KiB → 8.07 KiB |  677 → 83 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000090010c6800 → java.lang.invoke.LambdaForm$MH.0x00000070010d4800`   |
| -89.6% |  -84.96 KiB |  9.4% → 0.7% | 94.8 KiB → 9.85 KiB | 679 → 261 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000090010a1800 → java.lang.invoke.LambdaForm$MH.0x00000070018b3800`   |
| -89.2% | -66.726 KiB |  7.4% → 0.6% | 74.8 KiB → 8.07 KiB |  286 → 83 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090010d5000 → java.lang.invoke.LambdaForm$MH.0x000000700126a400`   |
| -99.9% | -54.867 KiB | 5.4% → <0.1% |     54.9 KiB → 40 B |   185 → 1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000090015c3c00 → java.lang.invoke.LambdaForm$MH.0x0000007001329800`   |
| -71.6% | -53.468 KiB |  7.4% → 1.5% | 74.7 KiB → 21.2 KiB | 367 → 308 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090010d3c00 → java.lang.invoke.LambdaForm$MH.0x0000007001268800`   |
| -87.6% | -46.492 KiB |  5.3% → 0.5% | 53.1 KiB → 6.61 KiB |  160 → 65 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001662000 → java.lang.invoke.LambdaForm$MH.0x000000700136a400`   |
| -54.8% | -46.476 KiB |  8.4% → 2.6% | 84.7 KiB → 38.3 KiB |  409 → 63 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000900109bc00 → java.lang.invoke.LambdaForm$MH.0x000000700128b800`   |
| -82.1% | -45.054 KiB |  5.4% → 0.7% | 54.9 KiB → 9.85 KiB | 185 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090015c6800 → java.lang.invoke.LambdaForm$MH.0x00000070018b4c00`   |
| -81.4% |  -43.25 KiB |  5.3% → 0.7% | 53.1 KiB → 9.85 KiB | 160 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000009001661400 → java.lang.invoke.LambdaForm$MH.0x0000007001944c00`   |
| -81.3% |  -42.82 KiB |  5.2% → 0.7% | 52.7 KiB → 9.85 KiB | 155 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090010da400 → java.lang.invoke.LambdaForm$MH.0x00000070018a6800`   |
| -81.5% | -42.781 KiB |  5.2% → 0.7% | 52.5 KiB → 9.74 KiB | 154 → 259 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000009001105400 → java.lang.invoke.LambdaForm$MH.0x00000070018a6c00`   |
| -81.2% | -42.437 KiB |  5.2% → 0.7% | 52.3 KiB → 9.85 KiB | 150 → 261 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000009001344c00 → java.lang.invoke.LambdaForm$MH.0x00000070018abc00`   |
| -81.2% | -42.437 KiB |  5.2% → 0.7% | 52.3 KiB → 9.85 KiB | 150 → 261 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000009001344400 → java.lang.invoke.LambdaForm$MH.0x0000007001430000`   |
| -81.0% | -42.078 KiB |  5.1% → 0.7% | 51.9 KiB → 9.85 KiB | 141 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090017e3c00 → java.lang.invoke.LambdaForm$MH.0x00000070018a5c00`   |
| -80.5% | -40.593 KiB |  5.0% → 0.7% | 50.4 KiB → 9.85 KiB | 120 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090017e4800 → java.lang.invoke.LambdaForm$MH.0x00000070018a5800`   |
| -60.7% | -39.164 KiB |  6.4% → 1.7% | 64.5 KiB → 25.3 KiB | 248 → 311 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000090012b1000 → java.lang.invoke.LambdaForm$MH.0x00000070010abc00`   |
| -75.9% | -30.515 KiB |  4.0% → 0.7% | 40.2 KiB → 9.67 KiB | 148 → 256 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000090012d4c00 → java.lang.invoke.LambdaForm$MH.0x00000070018b3c00`   |
| -75.5% | -30.335 KiB |  4.0% → 0.7% | 40.2 KiB → 9.85 KiB | 148 → 261 | `invokeVirtual(Object, Object, int)`     | `java.lang.invoke.LambdaForm$DMH.0x0000009001109400 → java.lang.invoke.LambdaForm$DMH.0x00000070018b3000` |
| -90.3% | -27.304 KiB |  3.0% → 0.2% | 30.2 KiB → 2.92 KiB |  216 → 45 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090012a3800 → java.lang.invoke.LambdaForm$MH.0x000000700193e400`   |
| -79.0% | -24.867 KiB |  3.1% → 0.5% | 31.5 KiB → 6.61 KiB |  242 → 65 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000090010c7c00 → java.lang.invoke.LambdaForm$MH.0x0000007001360c00`   |
