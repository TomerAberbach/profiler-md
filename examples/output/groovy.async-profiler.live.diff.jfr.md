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

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |       Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------------------------- |
|  +5.2% | +39.499 MiB | 100.0% | 754 MiB → 793 MiB | 1,508 → 1,587 | `java.lang.invoke.MethodType:400` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

| Change |       Delta |      % |              Size |   Samples | Location                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------- |
| +10.5% | +27.999 MiB | 100.0% | 267 MiB → 295 MiB | 534 → 590 | `java.lang.invoke.LambdaFormEditor:61` |

##### `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`)

| Change |       Delta |             % |                Size |   Samples | Location                    |
| -----: | ----------: | ------------: | ------------------: | --------: | --------------------------- |
| +43.3% | +19.499 MiB | 19.3% → 24.9% |   45 MiB → 64.5 MiB |  90 → 129 | `java.math.BigInteger:2476` |
| +14.6% |  +8.999 MiB | 26.4% → 27.2% | 61.5 MiB → 70.5 MiB | 123 → 141 | `java.math.BigInteger:2473` |
|  -6.2% |  -3.999 MiB | 27.9% → 23.6% |     65 MiB → 61 MiB | 130 → 122 | `java.math.BigInteger:2474` |
|  +2.4% |  +1.499 MiB | 26.4% → 24.3% |   61.5 MiB → 63 MiB | 123 → 126 | `java.math.BigInteger:2475` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |       Delta |      % |              Size | Samples | Location                       |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------------ |
| +212.5% | +25.499 MiB | 100.0% | 12 MiB → 37.5 MiB | 24 → 75 | `java.lang.reflect.Method:165` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change |       Delta |             % |            Size |   Samples | Location                           |
| -----: | ----------: | ------------: | --------------: | --------: | ---------------------------------- |
| +30.4% | +16.999 MiB | 99.1% → 99.3% | 56 MiB → 73 MiB | 112 → 146 | `java.math.MutableBigInteger:1211` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |              Size |   Samples | Location                                 |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------- |
| +15.8% | +13.499 MiB | 100.0% | 85.5 MiB → 99 MiB | 171 → 198 | `java.util.stream.ReferencePipeline:190` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
|  +3.9% | +10.999 MiB | 100.0% | 280 MiB → 291 MiB | 560 → 582 | `java.util.Arrays:3768` |

##### `spliterator(Object[], int, int, int)` (`java.util.Spliterators`)

| Change |       Delta |      % |              Size |   Samples | Location                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------- |
|  +5.9% | +10.999 MiB | 100.0% | 185 MiB → 196 MiB | 371 → 393 | `java.util.Spliterators:178` |

##### `RemoveQEQuoting()` (`java.util.regex.Pattern`)

| Change |       Delta |      % |              Size |  Samples | Location                       |
| -----: | ----------: | -----: | ----------------: | -------: | ------------------------------ |
| +24.1% | +10.499 MiB | 100.0% | 43.5 MiB → 54 MiB | 87 → 108 | `java.util.regex.Pattern:1848` |

##### `<init>()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|  Change |       Delta |             % |             Size | Samples | Location                                            |
| ------: | ----------: | ------------: | ---------------: | ------: | --------------------------------------------------- |
| +123.5% | +10.499 MiB | 43.6% → 64.4% | 8.5 MiB → 19 MiB | 17 → 38 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:87` |
|  -35.7% |  -2.499 MiB | 35.9% → 15.3% |  7 MiB → 4.5 MiB |  14 → 9 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:88` |
|  +50.0% |  +1.999 MiB | 20.5% → 20.3% |    4 MiB → 6 MiB |  8 → 12 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:89` |

##### `iterator()` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Location                   |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------- |
| +11.9% | +9.499 MiB | 100.0% | 80 MiB → 89.5 MiB | 160 → 179 | `java.util.ArrayList:1029` |

##### `of(byte, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |              Size |   Samples | Location                                             |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------- |
|  +7.9% | +9.499 MiB | 100.0% | 120 MiB → 129 MiB | 240 → 259 | `java.lang.invoke.LambdaFormEditor$TransformKey:177` |

##### `newHashMap(int)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Location                 |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------ |
| +11.1% | +9.499 MiB | 100.0% | 85.5 MiB → 95 MiB | 171 → 190 | `java.util.HashMap:2584` |

##### `<init>()` (`java.math.MutableBigInteger`)

| Change |      Delta |      % |              Size |   Samples | Location                          |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------- |
|  +7.7% | +8.999 MiB | 100.0% | 117 MiB → 126 MiB | 234 → 252 | `java.math.MutableBigInteger:103` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change |      Delta |      % |            Size |  Samples | Location                                     |
| -----: | ---------: | -----: | --------------: | -------: | -------------------------------------------- |
| +16.7% | +7.999 MiB | 100.0% | 48 MiB → 56 MiB | 96 → 112 | `java.lang.invoke.MethodHandles$Lookup:3444` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|  Change |      Delta |      % |               Size | Samples | Location                                                |
| ------: | ---------: | -----: | -----------------: | ------: | ------------------------------------------------------- |
| +123.1% | +7.999 MiB | 100.0% | 6.5 MiB → 14.5 MiB | 13 → 29 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |            Size | Samples | Location                             |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------ |
| +40.0% | +7.999 MiB | 100.0% | 20 MiB → 28 MiB | 40 → 56 | `java.util.stream.StreamSupport:138` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Location                 |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------ |
|  +3.3% | +7.499 MiB | 100.0% | 224 MiB → 232 MiB | 449 → 464 | `java.util.HashMap:1909` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change |      Delta |      % |            Size | Samples | Location                                                                      |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------------------------- |
| +63.6% | +3.499 MiB | 100.0% | 5.5 MiB → 9 MiB | 11 → 18 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`)

| Change |          Delta |            % |          Size | Samples | Location                                                              |
| -----: | -------------: | -----------: | ------------: | ------: | --------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 66.7% |   0 B → 1 MiB |   0 → 2 | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor:42` |
|    new |   +511.999 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor:51` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`)

|  Change |      Delta |      % |            Size | Samples | Location                                                         |
| ------: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor:40` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change |        Delta |            % |          Size | Samples | Location                                                    |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:48` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:55` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.naming.MethodNameAstVisitor`)

| Change |          Delta |             % |        Size | Samples | Location                                           |
| -----: | -------------: | ------------: | ----------: | ------: | -------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.codenarc.rule.naming.MethodNameAstVisitor:53` |

##### `addClosureFieldsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`)

| Change |        Delta |            % |          Size | Samples | Location                                      |
| -----: | -----------: | -----------: | ------------: | ------: | --------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.gmetrics.metric.AbstractMethodMetric:89` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.gmetrics.metric.AbstractMethodMetric:94` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`)

| Change |          Delta |             % |        Size | Samples | Location                                                            |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor:100` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |        Delta |             % |          Size | Samples | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change |        Delta |      % |            Size | Samples | Location                                       |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------- |
| +33.3% | +511.999 KiB | 100.0% | 1.5 MiB → 2 MiB |   3 → 4 | `org.codenarc.rule.AbstractAstVisitorRule:102` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Location                                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor:84` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.ToStringReturnsNullAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Location                                                    |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.design.ToStringReturnsNullAstVisitor:52` |

##### `parseIgnoreValues()` (`org.codenarc.rule.dry.DuplicateStringLiteralRule`)

| Change |        Delta |             % |          Size | Samples | Location                                              |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.dry.DuplicateStringLiteralRule:64` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Location                                                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.formatting.IndentationAstVisitor:93` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Location                                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor:129` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Location                                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor:41` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Location                                                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor:50` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|  Change |        Delta |      % |            Size | Samples | Location                                                     |
| ------: | -----------: | -----: | --------------: | ------: | ------------------------------------------------------------ |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor:141` |

##### `visitConstructorCallExpression(ConstructorCallExpression)` (`org.codenarc.rule.AbstractConstructorCallAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Location                                                 |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.AbstractConstructorCallAstVisitor:43` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Location                                                 |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.formatting.IndentationAstVisitor:205` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|  Change |          Delta |             % |          Size | Samples | Location                                                     |
| ------: | -------------: | ------------: | ------------: | ------: | ------------------------------------------------------------ |
|     new | +1,023.998 KiB | 0.0% → 100.0% |   0 B → 1 MiB |   0 → 2 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor:107` |
| removed |   -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor:117` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Location                                |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------- |
|  -7.5% | -33.499 MiB | 100.0% | 444 MiB → 411 MiB | 889 → 822 | `java.lang.invoke.MethodHandleImpl:667` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size |   Samples | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------- |
| -12.2% | -31.999 MiB | 100.0% | 262 MiB → 230 MiB | 525 → 461 | `java.lang.invoke.LambdaFormEditor$TransformKey:183` |

##### `tuple(Object, Object)` (`groovy.lang.Tuple`)

| Change |       Delta |      % |             Size | Samples | Location                |
| -----: | ----------: | -----: | ---------------: | ------: | ----------------------- |
| -78.5% | -25.499 MiB | 100.0% | 32.5 MiB → 7 MiB | 65 → 14 | `groovy.lang.Tuple:142` |

##### `<init>(Object, Object)` (`groovy.lang.Tuple2`)

| Change |       Delta |      % |             Size | Samples | Location                |
| -----: | ----------: | -----: | ---------------: | ------: | ----------------------- |
| -81.1% | -21.499 MiB | 100.0% | 26.5 MiB → 5 MiB | 53 → 10 | `groovy.lang.Tuple2:30` |

##### `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

| Change |       Delta |             % |                Size |   Samples | Location                                       |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------- |
| -21.8% | -15.499 MiB | 58.2% → 54.4% |   71 MiB → 55.5 MiB | 142 → 111 | `org.codehaus.groovy.vmplugin.v8.Selector:135` |
| -10.5% |  -2.999 MiB | 23.4% → 25.0% | 28.5 MiB → 25.5 MiB |   57 → 51 | `org.codehaus.groovy.vmplugin.v8.Selector:141` |
|  -6.7% |  -1.499 MiB | 18.4% → 20.6% |   22.5 MiB → 21 MiB |   45 → 42 | `org.codehaus.groovy.vmplugin.v8.Selector:137` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

| Change |       Delta |      % |              Size |   Samples | Location                                           |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------- |
| -20.3% | -19.499 MiB | 100.0% | 96 MiB → 76.5 MiB | 192 → 153 | `java.lang.invoke.BoundMethodHandle$Species_L:225` |

##### `compile()` (`java.util.regex.Pattern`)

| Change |          Delta |             % |                Size |   Samples | Location                       |
| -----: | -------------: | ------------: | ------------------: | --------: | ------------------------------ |
| -23.3% |    -21.999 MiB | 45.2% → 38.1% | 94.5 MiB → 72.5 MiB | 189 → 145 | `java.util.regex.Pattern:1934` |
| +14.5% |     +4.499 MiB | 14.8% → 18.6% |   31 MiB → 35.5 MiB |   62 → 71 | `java.util.regex.Pattern:1935` |
| -53.8% |     -3.499 MiB |   3.1% → 1.6% |     6.5 MiB → 3 MiB |    13 → 6 | `java.util.regex.Pattern:1967` |
|  +5.4% | +1,023.998 KiB |  8.9% → 10.2% | 18.5 MiB → 19.5 MiB |   37 → 39 | `java.util.regex.Pattern:1937` |
| +66.7% | +1,023.998 KiB |   0.7% → 1.3% |   1.5 MiB → 2.5 MiB |     3 → 5 | `java.util.regex.Pattern:1962` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |      % |              Size |   Samples | Location                                  |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------------- |
|  -7.3% | -15.999 MiB | 100.0% | 219 MiB → 203 MiB | 438 → 406 | `java.lang.invoke.DirectMethodHandle:501` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |      % |              Size |   Samples | Location              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------- |
|  -9.7% | -15.999 MiB | 100.0% | 165 MiB → 149 MiB | 330 → 298 | `java.lang.Long:1207` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |      Delta |             % |                Size |   Samples | Location                                                  |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------------------------------------------------- |
| -12.1% | -7.999 MiB | 45.5% → 43.8% |     66 MiB → 58 MiB | 132 → 116 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:159` |
| -11.7% | -7.999 MiB | 47.2% → 45.7% | 68.5 MiB → 60.5 MiB | 137 → 121 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:160` |
| +33.3% | +3.499 MiB |  7.2% → 10.6% |   10.5 MiB → 14 MiB |   21 → 28 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:227` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |  Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | -------: | ------------------------- |
| -22.8% | -11.499 MiB | 100.0% | 50.5 MiB → 39 MiB | 101 → 78 | `java.util.ArrayList:239` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size |   Samples | Location                |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- |
| -13.0% | -9.499 MiB | 100.0% | 73 MiB → 63.5 MiB | 144 → 125 | `java.util.Arrays:3541` |

##### `toBigInteger(int)` (`java.math.MutableBigInteger`)

| Change |      Delta |      % |              Size |   Samples | Location                          |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------- |
|  -8.3% | -9.499 MiB | 100.0% | 114 MiB → 105 MiB | 229 → 210 | `java.math.MutableBigInteger:191` |

##### `of(byte, int, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |              Size | Samples | Location                                             |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------- |
| -19.3% | -8.499 MiB | 100.0% | 44 MiB → 35.5 MiB | 88 → 71 | `java.lang.invoke.LambdaFormEditor$TransformKey:189` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |      Delta |      % |                Size |   Samples | Location                                |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------------------------- |
| -11.7% | -7.999 MiB | 100.0% | 68.5 MiB → 60.5 MiB | 137 → 121 | `java.lang.invoke.MethodHandleImpl:373` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |      Delta |             % |                Size |   Samples | Location                                |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------------------------------- |
| -16.4% | -5.999 MiB | 38.2% → 34.9% | 36.5 MiB → 30.5 MiB |   73 → 61 | `java.lang.invoke.MethodHandleImpl:321` |
|  -3.4% | -1.999 MiB | 61.8% → 65.1% |     59 MiB → 57 MiB | 118 → 114 | `java.lang.invoke.MethodHandleImpl:298` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Location                |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- |
|  -5.6% | -7.999 MiB | 100.0% | 142 MiB → 134 MiB | 284 → 268 | `java.util.HashMap:710` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change |        Delta |             % |             Size | Samples | Location                                          |
| ------: | -----------: | ------------: | ---------------: | ------: | ------------------------------------------------- |
|  -35.0% |   -3.499 MiB | 95.2% → 92.9% | 10 MiB → 6.5 MiB | 20 → 13 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |
| removed | -511.999 KiB |   4.8% → 0.0% |    512 KiB → 0 B |   1 → 0 | `org.codenarc.analyzer.AbstractSourceAnalyzer:39` |
|     new | +511.999 KiB |   0.0% → 7.1% |    0 B → 512 KiB |   0 → 1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:52` |

##### `processMethodOrConstructorCall(MethodCall)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|  Change |          Delta |              % |            Size | Samples | Location                                                    |
| ------: | -------------: | -------------: | --------------: | ------: | ----------------------------------------------------------- |
| removed | -1,023.998 KiB |   33.3% → 0.0% |     1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:86` |
| removed | -1,023.998 KiB |   33.3% → 0.0% |     1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:87` |
|  -50.0% |   -511.999 KiB | 33.3% → 100.0% | 1 MiB → 512 KiB |   2 → 1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:90` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|  Change |        Delta |             % |              Size | Samples | Location                               |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------------- |
|  -80.0% |   -1.999 MiB | 83.3% → 50.0% | 2.5 MiB → 512 KiB |   5 → 1 | `org.codenarc.util.WildcardPattern:54` |
| removed | -511.999 KiB |  16.7% → 0.0% |     512 KiB → 0 B |   1 → 0 | `org.codenarc.util.WildcardPattern:39` |
|     new | +511.999 KiB |  0.0% → 50.0% |     0 B → 512 KiB |   0 → 1 | `org.codenarc.util.WildcardPattern:53` |

##### `removeAnyViolationsForSameLine(int)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|  Change |      Delta |             % |          Size | Samples | Location                                                           |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor:124` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codenarc.rule.unused.UnusedArrayAstVisitor`)

|  Change |      Delta |             % |          Size | Samples | Location                                            |
| ------: | ---------: | ------------: | ------------: | ------: | --------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.codenarc.rule.unused.UnusedArrayAstVisitor:42` |

##### `visitBinaryExpression(BinaryExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change |      Delta |             % |          Size | Samples | Location                                   |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------------------ |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.gmetrics.metric.abc.AbcAstVisitor:55` |

##### `convertStringWithWildcardsToRegex(String)` (`org.codenarc.util.WildcardPattern`)

|  Change |        Delta |            % |          Size | Samples | Location                                |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.codenarc.util.WildcardPattern:100` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.codenarc.util.WildcardPattern:101` |

##### `doCall(Object)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`)

| Change |          Delta |      % |              Size | Samples | Location                                                                                  |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------------------------------------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3:142` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.BrokenNullCheckAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Location                                               |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------ |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.basic.BrokenNullCheckAstVisitor:49` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

| Change |          Delta |      % |              Size | Samples | Location                                         |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------ |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.codenarc.rule.ClassReferenceAstVisitor:107` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`)

|  Change |          Delta |            % |          Size | Samples | Location                                                      |
| ------: | -------------: | -----------: | ------------: | ------: | ------------------------------------------------------------- |
| removed | -1,023.998 KiB | 50.0% → 0.0% |   1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:60` |
| removed |   -511.999 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:46` |
| removed |   -511.999 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:56` |
|     new |   +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:54` |
|     new |   +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:61` |

##### `visitArgumentlistExpression(ArgumentListExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Location                                              |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:62` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Location                                                        |
| ------: | -------------: | ------------: | ----------: | ------: | --------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor:63` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Location                                                                  |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor:71` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Location                                                         |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor:89` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

| Change |          Delta |             % |              Size | Samples | Location                               |
| -----: | -------------: | ------------: | ----------------: | ------: | -------------------------------------- |
| -22.2% | -1,023.998 KiB | 64.3% → 58.3% | 4.5 MiB → 3.5 MiB |   9 → 7 | `org.codenarc.util.WildcardPattern:75` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.convention.NoFloatAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Location                                            |
| ------: | -------------: | ------------: | ----------: | ------: | --------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.convention.NoFloatAstVisitor:70` |

##### `doCall(Object)` (`org.codenarc.rule.convention.VariableTypeRequiredAstVisitor$_visitDeclarationExpression_closure1`)

|  Change |          Delta |             % |        Size | Samples | Location                                                                                              |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.convention.VariableTypeRequiredAstVisitor$_visitDeclarationExpression_closure1:45` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Location                                                            |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor:100` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

| Change |          Delta |      % |              Size | Samples | Location                                                |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------------- |
| -40.0% | -1,023.998 KiB | 100.0% | 2.5 MiB → 1.5 MiB |   5 → 3 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:158` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |             % |              Size |   Samples | Caller                                | Location                      |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------------------------- | ----------------------------- |
| +12.6% | +44.499 MiB | 46.7% → 50.0% | 352 MiB → 396 MiB | 704 → 793 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |
| -20.4% | -11.499 MiB |   7.5% → 5.7% | 56.5 MiB → 45 MiB |  113 → 90 | `methodType(Class, Class)`            | `java.lang.invoke.MethodType` |
|  +1.9% |  +6.499 MiB | 45.8% → 44.4% | 345 MiB → 352 MiB | 691 → 704 | `insertParameterTypes(int, Class[])`  | `java.lang.invoke.MethodType` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

| Change |       Delta |      % |              Size |   Samples | Caller     | Location                      |
| -----: | ----------: | -----: | ----------------: | --------: | ---------- | ----------------------------- |
| +10.5% | +27.999 MiB | 100.0% | 267 MiB → 295 MiB | 534 → 590 | `editor()` | `java.lang.invoke.LambdaForm` |

##### `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`)

| Change |       Delta |      % |              Size |   Samples | Caller                           | Location               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------- | ---------------------- |
| +11.2% | +25.999 MiB | 100.0% | 233 MiB → 259 MiB | 466 → 518 | `divideAndRemainder(BigInteger)` | `java.math.BigInteger` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |       Delta |      % |              Size | Samples | Caller               | Location                          |
| ------: | ----------: | -----: | ----------------: | ------: | -------------------- | --------------------------------- |
| +212.5% | +25.499 MiB | 100.0% | 12 MiB → 37.5 MiB | 24 → 75 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `make(MethodType, LambdaForm, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                         | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- | -------------------------------------------- |
| +17.9% | +22.499 MiB | 100.0% | 126 MiB → 148 MiB | 252 → 297 | `invokeStatic(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change |       Delta |      % |                Size |   Samples | Caller                                              | Location                      |
| -----: | ----------: | -----: | ------------------: | --------: | --------------------------------------------------- | ----------------------------- |
| +30.1% | +16.999 MiB | 100.0% | 56.5 MiB → 73.5 MiB | 113 → 147 | `divideKnuth(MutableBigInteger, MutableBigInteger)` | `java.math.MutableBigInteger` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|  Change |        Delta |             % |                Size |   Samples | Caller                                                              | Location                                                  |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------- | --------------------------------------------------------- |
|  +14.5% |  +11.999 MiB | 96.5% → 95.5% | 82.5 MiB → 94.5 MiB | 165 → 189 | `setGuards(Object)`                                                 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +400.0% |   +1.999 MiB |   0.6% → 2.5% |   512 KiB → 2.5 MiB |     1 → 5 | `createPathExpression(Expression, List)`                            | `org.apache.groovy.parser.antlr4.AstBuilder`              |
| removed | -511.999 KiB |   0.6% → 0.0% |       512 KiB → 0 B |     1 → 0 | `lambda$initValue$4()`                                              | `org.codehaus.groovy.reflection.CachedClass$2`            |
| removed | -511.999 KiB |   0.6% → 0.0% |       512 KiB → 0 B |     1 → 0 | `visitVariableDeclarators(GroovyParser$VariableDeclaratorsContext)` | `org.apache.groovy.parser.antlr4.AstBuilder`              |
| +100.0% | +511.999 KiB |   0.6% → 1.0% |     512 KiB → 1 MiB |     1 → 2 | `visitCommandExpression(GroovyParser$CommandExpressionContext)`     | `org.apache.groovy.parser.antlr4.AstBuilder`              |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |       Delta |             % |              Size |   Samples | Caller                                                           | Location                         |
| -----: | ----------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------- | -------------------------------- |
| +11.6% | +14.499 MiB | 44.8% → 48.1% | 125 MiB → 140 MiB | 251 → 280 | `dropParameterTypes(int, int)`                                   | `java.lang.invoke.MethodType`    |
|  -2.3% |  -3.499 MiB | 55.2% → 51.9% | 154 MiB → 151 MiB | 309 → 302 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles` |

##### `spliterator(Object[], int, int, int)` (`java.util.Spliterators`)

| Change |       Delta |      % |              Size |   Samples | Caller                            | Location           |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- | ------------------ |
|  +5.9% | +10.999 MiB | 100.0% | 185 MiB → 196 MiB | 371 → 393 | `spliterator(Object[], int, int)` | `java.util.Arrays` |

##### `RemoveQEQuoting()` (`java.util.regex.Pattern`)

| Change |       Delta |      % |              Size |  Samples | Caller      | Location                  |
| -----: | ----------: | -----: | ----------------: | -------: | ----------- | ------------------------- |
| +24.1% | +10.499 MiB | 100.0% | 43.5 MiB → 54 MiB | 87 → 108 | `compile()` | `java.util.regex.Pattern` |

##### `<init>()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

| Change |        Delta |             % |              Size | Samples | Caller                                                                                       | Location                                                |
| -----: | -----------: | ------------: | ----------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +68.4% |   +6.499 MiB | 48.7% → 54.2% |  9.5 MiB → 16 MiB | 19 → 32 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`  |
| +66.7% |   +2.999 MiB | 23.1% → 25.4% | 4.5 MiB → 7.5 MiB |  9 → 15 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`  |
|  +9.1% | +511.999 KiB | 28.2% → 20.3% |   5.5 MiB → 6 MiB | 11 → 12 | `<init>()`                                                                                   | `groovyjarjarantlr4.v4.runtime.atn.OrderedATNConfigSet` |

##### `iterator()` (`java.util.ArrayList`)

|  Change |          Delta |             % |              Size | Samples | Caller                              | Location                                          |
| ------: | -------------: | ------------: | ----------------: | ------: | ----------------------------------- | ------------------------------------------------- |
|  +17.3% |     +4.499 MiB | 32.5% → 34.1% | 26 MiB → 30.5 MiB | 52 → 61 | `visitListOfExpressions(List)`      | `org.codehaus.groovy.ast.GroovyCodeVisitor`       |
|  +43.8% |     +3.499 MiB | 10.0% → 12.8% |  8 MiB → 11.5 MiB | 16 → 23 | `visitAnnotations(Iterable)`        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
|  +62.5% |     +2.499 MiB |   5.0% → 7.3% |   4 MiB → 6.5 MiB |  8 → 13 | `visitContents(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode`               |
|  +11.4% |     +2.499 MiB | 27.5% → 27.4% | 22 MiB → 24.5 MiB | 44 → 49 | `compile()`                         | `java.util.regex.Pattern`                         |
| removed | -1,023.998 KiB |   1.3% → 0.0% |       1 MiB → 0 B |   2 → 0 | `addAnnotations(List)`              | `org.codehaus.groovy.ast.AnnotatedNode`           |

##### `of(byte, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
|  +7.9% | +9.499 MiB | 100.0% | 120 MiB → 129 MiB | 240 → 259 | `bindArgumentForm(int)` | `java.lang.invoke.LambdaFormEditor` |

##### `newHashMap(int)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller                                                                    | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------- | ----------------------------------- |
| +11.1% | +9.499 MiB | 100.0% | 85.5 MiB → 95 MiB | 171 → 190 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change |      Delta |      % |              Size |   Samples | Caller                                                                 | Location                                     |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  +3.6% | +8.999 MiB | 100.0% | 248 MiB → 257 MiB | 497 → 515 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>()` (`java.math.MutableBigInteger`)

| Change |          Delta |             % |                Size |   Samples | Caller                                                       | Location                      |
| -----: | -------------: | ------------: | ------------------: | --------: | ------------------------------------------------------------ | ----------------------------- |
| +33.0% |    +15.999 MiB | 41.5% → 51.2% | 48.5 MiB → 64.5 MiB |  97 → 129 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |
|  -9.3% |     -5.999 MiB | 55.1% → 46.4% | 64.5 MiB → 58.5 MiB | 129 → 117 | `divideAndRemainderKnuth(BigInteger)`                        | `java.math.BigInteger`        |
| -25.0% | -1,023.998 KiB |   3.4% → 2.4% |       4 MiB → 3 MiB |     8 → 6 | `divideAndRound(BigInteger, long, int, int, int)`            | `java.math.BigDecimal`        |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |          Delta |             % |                Size |  Samples | Caller                                             | Location                                                  |
| ------: | -------------: | ------------: | ------------------: | -------: | -------------------------------------------------- | --------------------------------------------------------- |
|  +14.7% |     +6.999 MiB | 99.0% → 97.3% | 47.5 MiB → 54.5 MiB | 95 → 109 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +200.0% | +1,023.998 KiB |   1.0% → 2.7% |   512 KiB → 1.5 MiB |    1 → 3 | `cloneObject(Object)`                              | `org.apache.groovy.runtime.ObjectUtil`                    |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|  Change |          Delta |             % |              Size | Samples | Caller                                            | Location                                                                        |
| ------: | -------------: | ------------: | ----------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| +114.3% |     +3.999 MiB | 53.8% → 51.7% | 3.5 MiB → 7.5 MiB |  7 → 15 | `doCall(Object)`                                  | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
|     new |     +1.999 MiB |  0.0% → 13.8% |       0 B → 2 MiB |   0 → 4 | `isFloatTypeName(String)`                         | `org.codenarc.rule.convention.NoFloatAstVisitor`                                |
| removed | -1,023.998 KiB |  15.4% → 0.0% |       1 MiB → 0 B |   2 → 0 | `statementForcesMethodReturn(Statement)`          | `org.codenarc.rule.basic.DeadCodeAstVisitor`                                    |
|     new | +1,023.998 KiB |   0.0% → 6.9% |       0 B → 1 MiB |   0 → 2 | `handleExpressionContainingOperation(Expression)` | `org.gmetrics.metric.abc.AbcAstVisitor`                                         |
|     new |   +511.999 KiB |   0.0% → 3.4% |     0 B → 512 KiB |   0 → 1 | `doCall(Object)`                                  | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule$_applyTo_closure1`       |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |          Delta |             % |                Size | Samples | Caller            | Location                     |
| -----: | -------------: | ------------: | ------------------: | ------: | ----------------- | ---------------------------- |
| +56.0% |     +6.999 MiB | 62.5% → 69.6% | 12.5 MiB → 19.5 MiB | 25 → 39 | `range(int, int)` | `java.util.stream.IntStream` |
| +13.3% | +1,023.998 KiB | 37.5% → 30.4% |   7.5 MiB → 8.5 MiB | 15 → 17 | `chars()`         | `java.lang.String`           |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  +3.3% | +7.499 MiB | 100.0% | 224 MiB → 232 MiB | 449 → 464 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change |      Delta |      % |            Size | Samples | Caller                                  | Location                                     |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------- | -------------------------------------------- |
| +63.6% | +3.499 MiB | 100.0% | 5.5 MiB → 9 MiB | 11 → 18 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`)

| Change |      Delta |             % |          Size | Samples | Caller                     | Location                                          |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------------- | ------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ConstantExpression` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`)

|  Change |      Delta |      % |            Size | Samples | Caller                  | Location                                                |
| ------: | ---------: | -----: | --------------: | ------: | ----------------------- | ------------------------------------------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change |          Delta |             % |        Size | Samples | Caller                    | Location                                          |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.naming.MethodNameAstVisitor`)

| Change |          Delta |             % |        Size | Samples | Caller                  | Location                                  |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------- | ----------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor` |

##### `addClosureFieldsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`)

| Change |          Delta |             % |        Size | Samples | Caller                                                  | Location                                             |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118a000` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`)

| Change |          Delta |             % |        Size | Samples | Caller                     | Location                                            |
| -----: | -------------: | ------------: | ----------: | ------: | -------------------------- | --------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |        Delta |             % |          Size | Samples | Caller                                  | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change |        Delta |      % |            Size | Samples | Caller                | Location                         |
| -----: | -----------: | -----: | --------------: | ------: | --------------------- | -------------------------------- |
| +33.3% | +511.999 KiB | 100.0% | 1.5 MiB → 2 MiB |   3 → 4 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Caller                  | Location                               |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- | -------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.ToStringReturnsNullAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Caller                    | Location                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- | -------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `parseIgnoreValues()` (`org.codenarc.rule.dry.DuplicateStringLiteralRule`)

| Change |        Delta |             % |          Size | Samples | Caller                          | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Caller                  | Location                               |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- | -------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Caller                    | Location                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- | ------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Caller                  | Location                               |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- | -------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Caller                     | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------- | ---------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `newInvokeSpecial(Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070016f7c00` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|  Change |        Delta |      % |            Size | Samples | Caller                     | Location                                          |
| ------: | -----------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.VariableExpression` |

##### `visitConstructorCallExpression(ConstructorCallExpression)` (`org.codenarc.rule.AbstractConstructorCallAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Caller                     | Location                                                 |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ConstructorCallExpression` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |        Delta |             % |          Size | Samples | Caller                     | Location                                            |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------- | --------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|  Change |        Delta |      % |            Size | Samples | Caller                     | Location                                            |
| ------: | -----------: | -----: | --------------: | ------: | -------------------------- | --------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
|  -7.5% | -33.499 MiB | 100.0% | 444 MiB → 411 MiB | 889 → 822 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |             % |                Size |   Samples | Caller                                            | Location                            |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------- | ----------------------------------- |
| -10.5% | -16.499 MiB | 59.8% → 61.0% |   157 MiB → 140 MiB | 314 → 281 | `addArgumentForm(int, LambdaForm$BasicType)`      | `java.lang.invoke.LambdaFormEditor` |
| -15.5% | -13.499 MiB | 33.1% → 31.9% |   87 MiB → 73.5 MiB | 174 → 147 | `filterArgumentForm(int, LambdaForm$BasicType)`   | `java.lang.invoke.LambdaFormEditor` |
| -10.8% |  -1.999 MiB |   7.0% → 7.2% | 18.5 MiB → 16.5 MiB |   37 → 33 | `filterReturnForm(LambdaForm$BasicType, boolean)` | `java.lang.invoke.LambdaFormEditor` |

##### `tuple(Object, Object)` (`groovy.lang.Tuple`)

|  Change |        Delta |             % |            Size | Samples | Caller                                                                         | Location                                                      |
| ------: | -----------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| removed |  -22.499 MiB |  69.2% → 0.0% |  22.5 MiB → 0 B |  45 → 0 | `createMetaMethodAndMetaProperty(Class, Class, String, boolean, boolean)`      | `groovy.lang.MetaClassImpl`                                   |
|  -36.8% |   -3.499 MiB | 29.2% → 85.7% | 9.5 MiB → 6 MiB | 19 → 12 | `endPosition(Token)`                                                           | `org.apache.groovy.parser.antlr4.util.PositionConfigureUtils` |
| +100.0% | +511.999 KiB |  1.5% → 14.3% | 512 KiB → 1 MiB |   1 → 2 | `invokeMethod(MetaMethod, Object, Closure, String, Class[], Object[], Object)` | `groovy.lang.MetaClassImpl`                                   |

##### `<init>(Object, Object)` (`groovy.lang.Tuple2`)

| Change |       Delta |      % |             Size | Samples | Caller                  | Location            |
| -----: | ----------: | -----: | ---------------: | ------: | ----------------------- | ------------------- |
| -81.1% | -21.499 MiB | 100.0% | 26.5 MiB → 5 MiB | 53 → 10 | `tuple(Object, Object)` | `groovy.lang.Tuple` |

##### `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                                       | Location                                        |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -16.4% | -19.999 MiB | 100.0% | 122 MiB → 102 MiB | 244 → 204 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

| Change |       Delta |      % |              Size |   Samples | Caller                        | Location                             |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------- | ------------------------------------ |
| -20.3% | -19.499 MiB | 100.0% | 96 MiB → 76.5 MiB | 192 → 153 | `makeReinvoker(MethodHandle)` | `java.lang.invoke.BoundMethodHandle` |

##### `compile()` (`java.util.regex.Pattern`)

| Change |       Delta |      % |              Size |   Samples | Caller                | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------- | ------------------------- |
|  -8.9% | -18.499 MiB | 100.0% | 209 MiB → 190 MiB | 418 → 381 | `<init>(String, int)` | `java.util.regex.Pattern` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |              Size |   Samples | Caller                             | Location                                             |
| ------: | -----------: | ------------: | ----------------: | --------: | ---------------------------------- | ---------------------------------------------------- |
|  -11.0% |  -21.999 MiB | 91.1% → 87.4% | 199 MiB → 177 MiB | 399 → 355 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| +125.0% |   +2.499 MiB |   0.9% → 2.2% |   2 MiB → 4.5 MiB |     4 → 9 | `newInvokeSpecial(Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  +50.0% |   +1.999 MiB |   1.8% → 3.0% |     4 MiB → 6 MiB |    8 → 12 | `newInvokeSpecial(Object, int)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -511.999 KiB |   0.2% → 0.0% |     512 KiB → 0 B |     1 → 0 | `newInvokeSpecial(Object)`         | `java.lang.invoke.LambdaForm$DMH.0x000000900171a000` |
| removed | -511.999 KiB |   0.2% → 0.0% |     512 KiB → 0 B |     1 → 0 | `newInvokeSpecial(Object)`         | `java.lang.invoke.LambdaForm$DMH.0x00000090016fe800` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |             % |               Size |   Samples | Caller                                   | Location                                         |
| -----: | ----------: | ------------: | -----------------: | --------: | ---------------------------------------- | ------------------------------------------------ |
|  -7.9% | -11.999 MiB | 92.4% → 94.3% |  152 MiB → 140 MiB | 305 → 281 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |
| -32.0% |  -3.999 MiB |   7.6% → 5.7% | 12.5 MiB → 8.5 MiB |   25 → 17 | `boxLong(long)`                          | `sun.invoke.util.ValueConversions`               |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |        Delta |             % |              Size |   Samples | Caller                                       | Location                                                   |
| -----: | -----------: | ------------: | ----------------: | --------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -9.1% |  -12.999 MiB | 98.3% → 97.7% | 142 MiB → 129 MiB | 285 → 259 | `add(ATNConfig, PredictionContextCache)`     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| +20.0% | +511.999 KiB |   1.7% → 2.3% |   2.5 MiB → 3 MiB |     5 → 6 | `join(PredictionContext, PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------------------- | -------------------------------------------- |
| -18.0% | -12.499 MiB | 100.0% | 69.5 MiB → 57 MiB | 139 → 114 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |  Samples | Caller   | Location              |
| -----: | ----------: | -----: | ----------------: | -------: | -------- | --------------------- |
| -22.8% | -11.499 MiB | 100.0% | 50.5 MiB → 39 MiB | 101 → 78 | `grow()` | `java.util.ArrayList` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                         | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------------ | -------------------------------------------- |
|  -6.8% | -10.999 MiB | 100.0% | 161 MiB → 150 MiB | 323 → 301 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |              Size |  Samples | Caller                        | Location                          |
| -----: | ---------: | ------------: | ----------------: | -------: | ----------------------------- | --------------------------------- |
| -12.0% | -6.499 MiB | 73.9% → 74.8% | 54 MiB → 47.5 MiB | 108 → 95 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
| -15.8% | -2.999 MiB | 26.1% → 25.2% |   19 MiB → 16 MiB |  36 → 30 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `toBigInteger(int)` (`java.math.MutableBigInteger`)

| Change |        Delta |             % |              Size |   Samples | Caller                                            | Location               |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------------------------- | ---------------------- |
|  -8.1% |   -8.999 MiB | 96.5% → 96.7% | 110 MiB → 101 MiB | 221 → 203 | `divideAndRemainderKnuth(BigInteger)`             | `java.math.BigInteger` |
| -12.5% | -511.999 KiB |   3.5% → 3.3% |   4 MiB → 3.5 MiB |     8 → 7 | `divideAndRound(BigInteger, long, int, int, int)` | `java.math.BigDecimal` |

##### `of(byte, int, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |              Size | Samples | Caller                                 | Location                            |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------- | ----------------------------------- |
| -19.3% | -8.499 MiB | 100.0% | 44 MiB → 35.5 MiB | 88 → 71 | `spreadArgumentsForm(int, Class, int)` | `java.lang.invoke.LambdaFormEditor` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |      Delta |      % |                Size |   Samples | Caller                                                                    | Location                            |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------- | ----------------------------------- |
| -11.7% | -7.999 MiB | 100.0% | 68.5 MiB → 60.5 MiB | 137 → 121 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |      Delta |      % |                Size |   Samples | Caller                                                            | Location                            |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------------------------------------------------- | ----------------------------------- |
|  -8.4% | -7.999 MiB | 100.0% | 95.5 MiB → 87.5 MiB | 191 → 175 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  -5.7% | -7.999 MiB | 98.6% → 98.5% | 140 MiB → 132 MiB | 280 → 264 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change |      Delta |      % |              Size |   Samples | Caller                                                 | Location                                     |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------------ | -------------------------------------------- |
|  -2.0% | -7.499 MiB | 100.0% | 369 MiB → 361 MiB | 738 → 723 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |      Delta |      % |             Size | Samples | Caller                                          | Location                                             |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| -33.3% | -3.499 MiB | 100.0% | 10.5 MiB → 7 MiB | 21 → 14 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `processMethodOrConstructorCall(MethodCall)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change |      Delta |      % |            Size | Samples | Caller                                  | Location                                             |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| -83.3% | -2.499 MiB | 100.0% | 3 MiB → 512 KiB |   6 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

| Change |      Delta |      % |          Size | Samples | Caller                                  | Location                                             |
| -----: | ---------: | -----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| -66.7% | -1.999 MiB | 100.0% | 3 MiB → 1 MiB |   6 → 2 | `newInvokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700126b800` |

##### `removeAnyViolationsForSameLine(int)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|  Change |      Delta |             % |          Size | Samples | Caller                               | Location                                             |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `invokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x00000090013aac00` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codenarc.rule.unused.UnusedArrayAstVisitor`)

|  Change |      Delta |             % |          Size | Samples | Caller                     | Location                                           |
| ------: | ---------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.stmt.ExpressionStatement` |

##### `visitBinaryExpression(BinaryExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change |          Delta |            % |          Size | Samples | Caller                                              | Location                                        |
| ------: | -------------: | -----------: | ------------: | ------: | --------------------------------------------------- | ----------------------------------------------- |
| removed | -1,023.998 KiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `visit(GroovyCodeVisitor)`                          | `org.codehaus.groovy.ast.expr.BinaryExpression` |
| removed |   -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`    |

##### `convertStringWithWildcardsToRegex(String)` (`org.codenarc.util.WildcardPattern`)

|  Change |          Delta |             % |        Size | Samples | Caller                         | Location                                     |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------ | -------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`)

| Change |          Delta |      % |              Size | Samples | Caller                                  | Location                                     |
| -----: | -------------: | -----: | ----------------: | ------: | --------------------------------------- | -------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.BrokenNullCheckAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Caller                     | Location                                        |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

| Change |          Delta |      % |              Size | Samples | Caller                    | Location                                          |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------- | ------------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`)

|  Change |        Delta |              % |            Size | Samples | Caller                              | Location                                          |
| ------: | -----------: | -------------: | --------------: | ------: | ----------------------------------- | ------------------------------------------------- |
|  -33.3% | -511.999 KiB | 75.0% → 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `visitMethod(MethodNode)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| removed | -511.999 KiB |   25.0% → 0.0% |   512 KiB → 0 B |   1 → 0 | `visitConstructor(ConstructorNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitArgumentlistExpression(ArgumentListExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Caller                     | Location                                              |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ArgumentListExpression` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Caller                     | Location                                            |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------- | --------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Caller                     | Location                                        |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`)

|  Change |        Delta |            % |          Size | Samples | Caller                                              | Location                                        |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------- | ----------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)`                          | `org.codehaus.groovy.ast.expr.BinaryExpression` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`    |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

| Change |          Delta |      % |          Size | Samples | Caller                                  | Location                                             |
| -----: | -------------: | -----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| -14.3% | -1,023.998 KiB | 100.0% | 7 MiB → 6 MiB | 14 → 12 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.convention.NoFloatAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Caller                     | Location                                          |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.VariableExpression` |

##### `doCall(Object)` (`org.codenarc.rule.convention.VariableTypeRequiredAstVisitor$_visitDeclarationExpression_closure1`)

|  Change |          Delta |             % |        Size | Samples | Caller                                  | Location                                     |
| ------: | -------------: | ------------: | ----------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`)

|  Change |          Delta |             % |        Size | Samples | Caller                     | Location                                      |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------- | --------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.stmt.BlockStatement` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

| Change |          Delta |      % |              Size | Samples | Caller                                          | Location                                     |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
| -40.0% | -1,023.998 KiB | 100.0% | 2.5 MiB → 1.5 MiB |   5 → 3 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                            |
| ----------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | --------------------------------------------------- |
|    +5309.2% | +11.536 GiB |  1.8% → 99.7% |  222 MiB → 11.8 GiB |   445 → 24,069 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
|  +255262.5% |  +9.971 GiB | <0.1% → 84.6% |    4 MiB → 9.98 GiB |     8 → 20,429 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015a2400` |
| +2041300.0% |  +9.967 GiB | <0.1% → 84.5% |  512 KiB → 9.97 GiB |     1 → 20,414 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015a5400` |
|   +92690.9% |  +9.957 GiB |  0.1% → 84.5% |   11 MiB → 9.97 GiB |    22 → 20,414 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015a5000` |
|    +1152.3% |  +9.954 GiB |  7.3% → 91.7% |  885 MiB → 10.8 GiB | 1,767 → 22,153 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001282400` |
|     +446.1% |  +9.215 GiB | 17.4% → 95.7% | 2.07 GiB → 11.3 GiB | 4,231 → 23,102 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00` |
|  +625566.7% |  +9.163 GiB | <0.1% → 77.7% |  1.5 MiB → 9.17 GiB |     3 → 18,770 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001639400` |
|  +208455.6% |   +9.16 GiB | <0.1% → 77.7% |  4.5 MiB → 9.17 GiB |     9 → 18,770 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700163a000` |
|   +98689.5% |  +9.155 GiB |  0.1% → 77.7% |  9.5 MiB → 9.17 GiB |    19 → 18,770 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001639c00` |
|   +14465.6% |  +8.405 GiB |  0.5% → 71.8% | 59.5 MiB → 8.46 GiB |   119 → 17,331 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700136a400` |
|    +1506.5% |   +7.98 GiB |  4.5% → 72.2% |  542 MiB → 8.51 GiB | 1,085 → 17,428 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700126a400` |
| +1561500.0% |  +7.624 GiB | <0.1% → 64.7% |  512 KiB → 7.62 GiB |     1 → 15,616 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017c1c00` |
|    +8741.9% |  +5.719 GiB |  0.5% → 49.1% |   67 MiB → 5.79 GiB |   134 → 11,846 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700136a800` |
|  +108860.9% |  +5.315 GiB | <0.1% → 45.1% |    5 MiB → 5.32 GiB |    10 → 10,894 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001360c00` |
|     +718.5% |  +3.206 GiB |  3.7% → 31.0% |  457 MiB → 3.65 GiB |    914 → 7,479 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001291000` |
|   +15014.8% |  +1.979 GiB |  0.1% → 16.9% | 13.5 MiB → 1.99 GiB |     27 → 4,081 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001314400` |
|   +42875.0% |  +1.674 GiB | <0.1% → 14.2% |    4 MiB → 1.68 GiB |      8 → 3,438 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
|   +72275.0% |  +1.411 GiB | <0.1% → 12.0% |    2 MiB → 1.41 GiB |      4 → 2,895 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017c2800` |
|  +220300.0% |  +1.075 GiB |  <0.1% → 9.1% |  512 KiB → 1.08 GiB |      1 → 2,204 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017c7000` |
|   +11015.8% |  +1.021 GiB |   0.1% → 8.7% |  9.5 MiB → 1.03 GiB |     19 → 2,112 | `invoke(Object, Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH.0x000000700136ac00` |

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

|  Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                            |
| ------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | --------------------------------------------------- |
| -100.0% | -11.715 GiB | 98.5% → <0.1% |  11.7 GiB → 4.5 MiB |     24,000 → 9 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001115800` |
| -100.0% | -10.902 GiB | 91.6% → <0.1% |  10.9 GiB → 512 KiB |     22,328 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001236c00` |
| -100.0% | -10.026 GiB | 84.3% → <0.1% |    10 GiB → 4.5 MiB |     20,544 → 9 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001405c00` |
|  -99.7% | -10.013 GiB |  84.4% → 0.2% |   10 GiB → 26.5 MiB |    20,560 → 53 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001490000` |
|  -98.9% |  -9.916 GiB |  84.3% → 1.0% |    10 GiB → 117 MiB |   20,544 → 234 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700158b800` |
|  -82.6% |  -9.798 GiB | 99.6% → 17.4% | 11.9 GiB → 2.06 GiB | 24,278 → 4,213 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d9c00` |
| -100.0% |  -9.242 GiB | 77.7% → <0.1% |    9.24 GiB → 1 MiB |     18,930 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001624000` |
| -100.0% |  -9.241 GiB | 77.7% → <0.1% |    9.24 GiB → 2 MiB |     18,930 → 4 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001361c00` |
|  -99.8% |  -9.221 GiB |  77.7% → 0.2% |   9.24 GiB → 22 MiB |    18,930 → 44 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700162b400` |
|  -99.6% |   -8.49 GiB |  71.6% → 0.3% | 8.52 GiB → 31.5 MiB |    17,450 → 63 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001282800` |
| -100.0% |  -7.739 GiB | 65.0% → <0.1% |  7.74 GiB → 512 KiB |     15,852 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070014b6400` |
|  -99.9% |  -5.868 GiB |  49.4% → 0.1% |  5.88 GiB → 8.5 MiB |    12,033 → 17 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700126b400` |
|  -68.3% |   -5.85 GiB | 72.0% → 23.0% | 8.56 GiB → 2.71 GiB | 17,538 → 5,557 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001290000` |
|  -94.9% |  -5.102 GiB |  45.2% → 2.3% |  5.38 GiB → 282 MiB |   11,012 → 565 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001130800` |
|  -77.1% |  -2.831 GiB |  30.9% → 7.1% |  3.67 GiB → 861 MiB |  7,518 → 1,720 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700128b800` |
|  -99.9% |  -1.693 GiB | 14.3% → <0.1% |   1.7 GiB → 2.5 MiB |      3,474 → 5 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a0800` |
|  -96.5% |  -1.596 GiB |  13.9% → 0.5% |   1.65 GiB → 60 MiB |    3,389 → 120 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001182000` |
|  -99.9% |  -1.458 GiB | 12.3% → <0.1% |  1.46 GiB → 1.5 MiB |      2,989 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001656000` |
|  -99.3% |  -1.103 GiB |   9.3% → 0.1% |    1.11 GiB → 8 MiB |     2,276 → 16 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017adc00` |
|  -99.7% |  -1.021 GiB |  8.6% → <0.1% |  1.02 GiB → 3.5 MiB |      2,099 → 7 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001322800` |

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

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|  Change |          Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | -------------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |    +11.753 GiB | 0.0% → 100.0% | 0 B → 11.8 GiB | 0 → 24,069 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
|     new |     +2.656 GiB |  0.0% → 22.6% | 0 B → 2.66 GiB |  0 → 5,441 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |   -195.999 MiB |  88.1% → 0.0% |  196 MiB → 0 B |    392 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |
| removed |    -26.499 MiB |  11.9% → 0.0% | 26.5 MiB → 0 B |     53 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000009001031800`  |
|     new | +1,023.998 KiB |  0.0% → <0.1% |    0 B → 1 MiB |      0 → 2 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a2400`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                  | Location                                     |
| ------: | ---------: | ------------: | -------------: | ---------: | --------------------------------------- | -------------------------------------------- |
|     new | +9.975 GiB | 0.0% → 100.0% | 0 B → 9.98 GiB | 0 → 20,429 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed | -3.999 MiB | 100.0% → 0.0% |    4 MiB → 0 B |      8 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a5400`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +9.967 GiB | 0.0% → 100.0% | 0 B → 9.97 GiB | 0 → 20,414 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118a000` |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090011c5800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a5000`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                  | Location                                            |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------- | --------------------------------------------------- |
|     new |  +9.967 GiB | 0.0% → 100.0% | 0 B → 9.97 GiB | 0 → 20,414 | `delegate(Object, Object, Object, Object, Object)`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -10.999 MiB | 100.0% → 0.0% |   11 MiB → 0 B |     22 → 0 | `delegate(Object, Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x000000900137a400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001282400`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                             | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | -------------------------------------------------- | --------------------------------------------------- |
|     new |  +10.817 GiB | 0.0% → 100.0% | 0 B → 10.8 GiB | 0 → 22,153 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
| removed | -628.041 MiB |  71.0% → 0.0% |  628 MiB → 0 B |  1,254 → 0 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090012b8c00` |
| removed | -256.499 MiB |  29.0% → 0.0% |  256 MiB → 0 B |    513 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |  +26.999 MiB |   0.0% → 0.2% |   0 B → 27 MiB |     0 → 54 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +3.999 MiB |  0.0% → <0.1% |    0 B → 4 MiB |      0 → 8 | `invoke(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d4c00`)

|    Change |        Delta |              % |                Size |        Samples | Callee                             | Location                                            |
| --------: | -----------: | -------------: | ------------------: | -------------: | ---------------------------------- | --------------------------------------------------- |
|   +447.9% |   +9.222 GiB | 99.7% → 100.0% | 2.06 GiB → 11.3 GiB | 4,217 → 23,102 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
| +16050.0% | +481.499 MiB |    0.1% → 4.2% |     3 MiB → 484 MiB |        6 → 969 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   removed |   -5.999 MiB |    0.3% → 0.0% |         6 MiB → 0 B |         12 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000090010ab000` |
|       new |   +5.999 MiB |    0.0% → 0.1% |         0 B → 6 MiB |         0 → 12 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001639400`)

|     Change |        Delta |              % |             Size |    Samples | Callee                             | Location                                            |
| ---------: | -----------: | -------------: | ---------------: | ---------: | ---------------------------------- | --------------------------------------------------- |
| +938400.0% |   +9.164 GiB | 66.7% → 100.0% | 1 MiB → 9.17 GiB | 2 → 18,770 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|    removed | -511.999 KiB |   33.3% → 0.0% |    512 KiB → 0 B |      1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000090010ab000` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700163a000`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +9.165 GiB | 0.0% → 100.0% | 0 B → 9.17 GiB | 0 → 18,770 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -4.499 MiB | 100.0% → 0.0% |  4.5 MiB → 0 B |      9 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001639c00`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------ | ------------------------------------------------ |
|     new | +9.165 GiB | 0.0% → 100.0% | 0 B → 9.17 GiB | 0 → 18,770 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -9.499 MiB | 100.0% → 0.0% |  9.5 MiB → 0 B |     19 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700136a400`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +8.46 GiB | 0.0% → 100.0% | 0 B → 8.46 GiB | 0 → 17,325 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed | -59.499 MiB | 100.0% → 0.0% | 59.5 MiB → 0 B |    119 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000009001348000` |
|     new |  +2.999 MiB |  0.0% → <0.1% |    0 B → 3 MiB |      0 → 6 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700126a400`)

|   Change |       Delta |              % |               Size |        Samples | Callee                                     | Location                                            |
| -------: | ----------: | -------------: | -----------------: | -------------: | ------------------------------------------ | --------------------------------------------------- |
| +1551.4% |  +7.991 GiB | 97.2% → 100.0% | 527 MiB → 8.51 GiB | 1,055 → 17,420 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
|   -80.0% | -11.999 MiB |   2.8% → <0.1% |     15 MiB → 3 MiB |         30 → 6 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|      new | +10.499 MiB |    0.0% → 0.1% |     0 B → 10.5 MiB |         0 → 21 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017c1c00`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                     | Location                                         |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------ | ------------------------------------------------ |
|     new |   +7.624 GiB | 0.0% → 100.0% | 0 B → 7.62 GiB | 0 → 15,616 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700136a800`)

| Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| -----: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +5.781 GiB |  0.0% → 99.9% | 0 B → 5.78 GiB | 0 → 11,838 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| -94.0% | -62.999 MiB | 100.0% → 0.1% | 67 MiB → 4 MiB |    134 → 8 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001360c00`)

|     Change |      Delta |      % |             Size |     Samples | Callee                                  | Location                                     |
| ---------: | ---------: | -----: | ---------------: | ----------: | --------------------------------------- | -------------------------------------------- |
| +108860.9% | +5.315 GiB | 100.0% | 5 MiB → 5.32 GiB | 10 → 10,894 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001291000`)

|    Change |        Delta |             % |               Size |     Samples | Callee                                     | Location                                            |
| --------: | -----------: | ------------: | -----------------: | ----------: | ------------------------------------------ | --------------------------------------------------- |
| +44554.5% |   +2.393 GiB |  1.2% → 65.7% |  5.5 MiB → 2.4 GiB |  11 → 4,912 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   +188.4% | +841.041 MiB | 97.7% → 34.4% | 446 MiB → 1.26 GiB | 893 → 2,573 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
|   removed |   -7.999 MiB |   1.8% → 0.0% |        8 MiB → 0 B |      16 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000090011c8800` |
|       new |   +1.499 MiB |  0.0% → <0.1% |      0 B → 1.5 MiB |       0 → 3 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001314400`)

|  Change |       Delta |             % |           Size |   Samples | Callee                                  | Location                                     |
| ------: | ----------: | ------------: | -------------: | --------: | --------------------------------------- | -------------------------------------------- |
|     new |  +1.992 GiB | 0.0% → 100.0% | 0 B → 1.99 GiB | 0 → 4,081 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed | -13.499 MiB | 100.0% → 0.0% | 13.5 MiB → 0 B |    27 → 0 | `invokeStatic(Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001105400`)

| Change |      Delta |              % |            Size |   Samples | Callee                          | Location                                             |
| -----: | ---------: | -------------: | --------------: | --------: | ------------------------------- | ---------------------------------------------------- |
|    new | +1.678 GiB |  0.0% → 100.0% |  0 B → 1.68 GiB | 0 → 3,437 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| -87.5% | -3.499 MiB | 100.0% → <0.1% | 4 MiB → 512 KiB |     8 → 1 | `invokeVirtual(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001105000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017c2800`)

|    Change |      Delta |      % |             Size |   Samples | Callee                             | Location                                         |
| --------: | ---------: | -----: | ---------------: | --------: | ---------------------------------- | ------------------------------------------------ |
| +72275.0% | +1.411 GiB | 100.0% | 2 MiB → 1.41 GiB | 4 → 2,895 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017c7000`)

|  Change |        Delta |             % |           Size |   Samples | Callee                             | Location                                            |
| ------: | -----------: | ------------: | -------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|     new |   +1.076 GiB | 0.0% → 100.0% | 0 B → 1.08 GiB | 0 → 2,204 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |     1 → 0 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000900109b800` |

##### `invoke(Object, Object, Object, long)` (`java.lang.invoke.LambdaForm$MH.0x000000700136ac00`)

| Change |      Delta |             % |            Size |   Samples | Callee                                                                                      | Location                                             |
| -----: | ---------: | ------------: | --------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +1.026 GiB |  0.0% → 99.5% |  0 B → 1.03 GiB | 0 → 2,102 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| -47.4% | -4.499 MiB | 100.0% → 0.5% | 9.5 MiB → 5 MiB |   19 → 10 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`  |

##### `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`)

| Change |       Delta |      % |              Size |   Samples | Callee            | Location           |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------- | ------------------ |
|  +6.5% | +15.999 MiB | 100.0% | 245 MiB → 261 MiB | 490 → 522 | `matches(String)` | `java.lang.String` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change |       Delta |      % |            Size |   Samples | Callee          | Location          |
| -----: | ----------: | -----: | --------------: | --------: | --------------- | ----------------- |
| +19.2% | +13.999 MiB | 100.0% | 73 MiB → 87 MiB | 146 → 174 | `newInstance()` | `java.lang.Class` |

##### `suppressException(Class, Closure)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change |       Delta |      % |            Size | Samples | Callee                           | Location                           |
| -----: | ----------: | -----: | --------------: | ------: | -------------------------------- | ---------------------------------- |
| +56.5% | +12.999 MiB | 100.0% | 23 MiB → 36 MiB | 46 → 72 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writeSummary(Writer, Results)` (`org.codenarc.report.TextReportWriter`)

| Change |       Delta |              % |              Size |   Samples | Callee                                   | Location                           |
| -----: | ----------: | -------------: | ----------------: | --------: | ---------------------------------------- | ---------------------------------- |
|  +8.0% | +10.499 MiB | 100.0% → 98.6% | 132 MiB → 142 MiB | 264 → 285 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |  +1.999 MiB |    0.0% → 1.4% |       0 B → 2 MiB |     0 → 4 | `linkToCallSite(Object, int, Object)`    | `java.lang.invoke.Invokers$Holder` |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

| Change |       Delta |      % |              Size |   Samples | Callee                      | Location                                   |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------- | ------------------------------------------ |
|  +5.9% | +11.999 MiB | 100.0% | 204 MiB → 216 MiB | 409 → 433 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `super$3$visitBlockStatement(BlockStatement)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

| Change |       Delta |      % |            Size |  Samples | Callee                                | Location                                          |
| -----: | ----------: | -----: | --------------: | -------: | ------------------------------------- | ------------------------------------------------- |
| +31.6% | +11.999 MiB | 100.0% | 38 MiB → 50 MiB | 76 → 100 | `visitBlockStatement(BlockStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

| Change |       Delta |             % |            Size |  Samples | Callee                                                        | Location                                            |
| -----: | ----------: | ------------: | --------------: | -------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +31.6% | +11.999 MiB | 89.4% → 91.7% | 38 MiB → 50 MiB | 76 → 100 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`)

| Change |       Delta |             % |              Size | Samples | Callee                                   | Location                           |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------------------------------------- | ---------------------------------- |
| +56.1% | +11.499 MiB | 93.2% → 95.5% | 20.5 MiB → 32 MiB | 41 → 64 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall()` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`)

| Change |       Delta |      % |              Size | Samples | Callee           | Location                                                                                       |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------- | ---------------------------------------------------------------------------------------------- |
| +52.3% | +11.499 MiB | 100.0% | 22 MiB → 33.5 MiB | 44 → 67 | `doCall(Object)` | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1` |

##### `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change |          Delta |             % |              Size |   Samples | Callee                                   | Location                                            |
| -----: | -------------: | ------------: | ----------------: | --------: | ---------------------------------------- | --------------------------------------------------- |
|  +5.4% |    +10.999 MiB | 84.7% → 85.3% | 204 MiB → 215 MiB | 409 → 431 | `findRegex(Object, Object)`              | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| +22.6% |     +3.499 MiB |   6.4% → 7.5% | 15.5 MiB → 19 MiB |   31 → 38 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| -12.5% |     -1.999 MiB |   6.6% → 5.5% |   16 MiB → 14 MiB |   32 → 28 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| -75.0% |     -1.499 MiB |   0.8% → 0.2% |   2 MiB → 512 KiB |     4 → 1 | `linkToCallSite(Object, int, Object)`    | `java.lang.invoke.Invokers$Holder`                  |
| +50.0% | +1,023.998 KiB |   0.8% → 1.2% |     2 MiB → 3 MiB |     4 → 6 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

| Change |          Delta |             % |                Size |   Samples | Callee                                                        | Location                                            |
| -----: | -------------: | ------------: | ------------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  +5.9% |    +11.999 MiB | 94.7% → 95.4% |   204 MiB → 216 MiB | 409 → 433 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  -8.7% | -1,023.998 KiB |   5.3% → 4.6% | 11.5 MiB → 10.5 MiB |   23 → 21 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |

##### `isMethodCall(Expression, String, int)` (`org.codenarc.util.AstUtil`)

| Change |       Delta |      % |                Size |   Samples | Callee                                        | Location                    |
| -----: | ----------: | -----: | ------------------: | --------: | --------------------------------------------- | --------------------------- |
| +21.0% | +10.999 MiB | 100.0% | 52.5 MiB → 63.5 MiB | 105 → 127 | `isMethodNamed(MethodCallExpression, String)` | `org.codenarc.util.AstUtil` |

##### `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|  Change |      Delta |             % |            Size | Samples | Callee                                           | Location                           |
| ------: | ---------: | ------------: | --------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|  +66.7% | +3.999 MiB | 35.3% → 35.7% |  6 MiB → 10 MiB | 12 → 20 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| +233.3% | +3.499 MiB |  8.8% → 17.9% | 1.5 MiB → 5 MiB |  3 → 10 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  +70.0% | +3.499 MiB | 29.4% → 30.4% | 5 MiB → 8.5 MiB | 10 → 17 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeSummary_closure1`)

| Change |       Delta |      % |              Size |   Samples | Callee                                   | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------- | ---------------------------------- |
|  +8.0% | +10.499 MiB | 100.0% | 132 MiB → 142 MiB | 264 → 285 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

|  Change |          Delta |             % |              Size |   Samples | Callee                                           | Location                                            |
| ------: | -------------: | ------------: | ----------------: | --------: | ------------------------------------------------ | --------------------------------------------------- |
|   +3.8% |     +9.499 MiB | 98.2% → 98.1% | 249 MiB → 258 MiB | 498 → 517 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  +42.9% |     +1.499 MiB |   1.4% → 1.9% |   3.5 MiB → 5 MiB |    7 → 10 | `findRegex(Object, Object)`                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed | -1,023.998 KiB |   0.4% → 0.0% |       1 MiB → 0 B |     2 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedVariableRule$_applyTo_closure2`)

| Change |      Delta |      % |            Size |  Samples | Callee                                   | Location                           |
| -----: | ---------: | -----: | --------------: | -------: | ---------------------------------------- | ---------------------------------- |
| +21.3% | +9.999 MiB | 100.0% | 47 MiB → 57 MiB | 94 → 114 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.unused.UnusedVariableRule`)

|  Change |        Delta |             % |            Size |  Samples | Callee                                   | Location                           |
| ------: | -----------: | ------------: | --------------: | -------: | ---------------------------------------- | ---------------------------------- |
|  +20.8% |   +9.999 MiB | 99.0% → 99.1% | 48 MiB → 58 MiB | 96 → 116 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed | -511.999 KiB |   1.0% → 0.0% |   512 KiB → 0 B |    1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

| Change |        Delta |             % |              Size | Samples | Callee                                                        | Location                                            |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +46.4% |   +6.499 MiB | 53.8% → 56.9% | 14 MiB → 20.5 MiB | 28 → 41 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| +28.0% |   +3.499 MiB | 48.1% → 44.4% | 12.5 MiB → 16 MiB | 25 → 32 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
|    new | +511.999 KiB |   0.0% → 1.4% |     0 B → 512 KiB |   0 → 1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

|  Change |        Delta |             % |              Size |   Samples | Callee                                                   | Location                           |
| ------: | -----------: | ------------: | ----------------: | --------: | -------------------------------------------------------- | ---------------------------------- |
|   +7.4% |   +8.499 MiB | 96.2% → 95.7% | 114 MiB → 123 MiB | 229 → 246 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +300.0% |   +1.499 MiB |   0.4% → 1.6% |   512 KiB → 2 MiB |     1 → 4 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  -12.5% | -511.999 KiB |   3.4% → 2.7% |   4 MiB → 3.5 MiB |     8 → 7 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|  Change |          Delta |             % |                Size | Samples | Callee                                                        | Location                                            |
| ------: | -------------: | ------------: | ------------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  +45.7% |     +7.999 MiB | 85.4% → 85.0% | 17.5 MiB → 25.5 MiB | 35 → 51 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| +166.7% |     +2.499 MiB |  7.3% → 13.3% |     1.5 MiB → 4 MiB |   3 → 8 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
|  -33.3% | -1,023.998 KiB |  14.6% → 6.7% |       3 MiB → 2 MiB |   6 → 4 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001115800`)

|  Change |       Delta |             % |           Size |    Samples | Callee                          | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------- | ---------------------------------------------------- |
| removed | -11.718 GiB | 100.0% → 0.0% | 11.7 GiB → 0 B | 23,998 → 0 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -19.999 MiB |   0.2% → 0.0% |   20 MiB → 0 B |     40 → 0 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +4.499 MiB | 0.0% → 100.0% |  0 B → 4.5 MiB |      0 → 9 | `invokeVirtual(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001105000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001236c00`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
| removed |  -10.903 GiB | 100.0% → 0.0% | 10.9 GiB → 0 B | 22,328 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090011c5c00` |
| removed |  -26.499 MiB |   0.2% → 0.0% | 26.5 MiB → 0 B |     53 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -511.999 KiB |  <0.1% → 0.0% |  512 KiB → 0 B |      1 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000090011c8800` |
|     new | +511.999 KiB | 0.0% → 100.0% |  0 B → 512 KiB |      0 → 1 | `reinvoke(Object, int)`                    | `java.lang.invoke.LambdaForm$MH.0x0000007001236000` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001405c00`)

|  Change |       Delta |      % |             Size |    Samples | Callee                                                  | Location                                             |
| ------: | ----------: | -----: | ---------------: | ---------: | ------------------------------------------------------- | ---------------------------------------------------- |
| -100.0% | -10.026 GiB | 100.0% | 10 GiB → 4.5 MiB | 20,544 → 9 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118a000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001490000`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                  | Location                                     |
| ------: | ----------: | ------------: | -------------: | ---------: | --------------------------------------- | -------------------------------------------- |
| removed | -10.039 GiB | 100.0% → 0.0% |   10 GiB → 0 B | 20,560 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new | +26.499 MiB | 0.0% → 100.0% | 0 B → 26.5 MiB |     0 → 53 | `invokeStatic(Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700158b800`)

| Change |      Delta |      % |             Size |      Samples | Callee                                             | Location                                         |
| -----: | ---------: | -----: | ---------------: | -----------: | -------------------------------------------------- | ------------------------------------------------ |
| -98.9% | -9.916 GiB | 100.0% | 10 GiB → 117 MiB | 20,544 → 234 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d9c00`)

|  Change |        Delta |              % |                Size |        Samples | Callee                             | Location                                            |
| ------: | -----------: | -------------: | ------------------: | -------------: | ---------------------------------- | --------------------------------------------------- |
|  -82.7% |   -9.805 GiB | 100.0% → 99.7% | 11.9 GiB → 2.05 GiB | 24,278 → 4,199 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  -99.8% |   -2.635 GiB |   22.3% → 0.2% |    2.64 GiB → 5 MiB |     5,407 → 10 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +4.999 MiB |    0.0% → 0.2% |         0 B → 5 MiB |         0 → 10 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |
| removed | -511.999 KiB |   <0.1% → 0.0% |       512 KiB → 0 B |          1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000090010ab000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001624000`)

|  Change |      Delta |      % |             Size |    Samples | Callee                             | Location                                         |
| ------: | ---------: | -----: | ---------------: | ---------: | ---------------------------------- | ------------------------------------------------ |
| -100.0% | -9.242 GiB | 100.0% | 9.24 GiB → 1 MiB | 18,930 → 2 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001361c00`)

|  Change |      Delta |      % |             Size |    Samples | Callee                                          | Location                                     |
| ------: | ---------: | -----: | ---------------: | ---------: | ----------------------------------------------- | -------------------------------------------- |
| -100.0% | -9.241 GiB | 100.0% | 9.24 GiB → 2 MiB | 18,930 → 4 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700162b400`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                             | Location                                         |
| ------: | ----------: | ------------: | -------------: | ---------: | -------------------------------------------------- | ------------------------------------------------ |
| removed |  -9.243 GiB | 100.0% → 0.0% | 9.24 GiB → 0 B | 18,930 → 0 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +21.999 MiB | 0.0% → 100.0% |   0 B → 22 MiB |     0 → 44 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001282800`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -8.518 GiB | 100.0% → 0.0% | 8.52 GiB → 0 B | 17,443 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |
|     new | +21.999 MiB |  0.0% → 69.8% |   0 B → 22 MiB |     0 → 44 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +9.499 MiB |  0.0% → 30.2% |  0 B → 9.5 MiB |     0 → 19 | `newInvokeSpecial(Object, Object, Object)`                                                  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -3.499 MiB |  <0.1% → 0.0% |  3.5 MiB → 0 B |      7 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000090010d4000`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070014b6400`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
| removed |    -7.74 GiB | 100.0% → 0.0% | 7.74 GiB → 0 B | 15,852 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +511.999 KiB | 0.0% → 100.0% |  0 B → 512 KiB |      0 → 1 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700126b400`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -5.874 GiB | 100.0% → 0.0% | 5.87 GiB → 0 B | 12,029 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |
|     new | +8.499 MiB | 0.0% → 100.0% |  0 B → 8.5 MiB |     0 → 17 | `invokeStatic(Object, Object)`                                                              | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -1.999 MiB |  <0.1% → 0.0% |    2 MiB → 0 B |      4 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000090010a1000`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001290000`)

|    Change |      Delta |              % |               Size |        Samples | Callee                                     | Location                                            |
| --------: | ---------: | -------------: | -----------------: | -------------: | ------------------------------------------ | --------------------------------------------------- |
|    -89.9% |   -7.7 GiB | 100.0% → 31.8% | 8.56 GiB → 883 MiB | 17,534 → 1,764 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
| +60728.6% | +2.075 GiB |  <0.1% → 76.6% | 3.5 MiB → 2.08 GiB |      7 → 4,258 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   removed | -6.499 MiB |    0.1% → 0.0% |      6.5 MiB → 0 B |         13 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000090011c8800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001130800`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                    | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |   -5.377 GiB | 100.0% → 0.0% | 5.38 GiB → 0 B | 11,012 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +233.499 MiB |  0.0% → 82.7% |  0 B → 233 MiB |    0 → 467 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001030400` |
|     new |  +42.499 MiB |  0.0% → 15.0% | 0 B → 42.5 MiB |     0 → 85 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |
|     new |   +6.499 MiB |   0.0% → 2.3% |  0 B → 6.5 MiB |     0 → 13 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700128b800`)

|  Change |        Delta |            % |           Size |   Samples | Callee                                             | Location                                            |
| ------: | -----------: | -----------: | -------------: | --------: | -------------------------------------------------- | --------------------------------------------------- |
| removed |   -2.554 GiB | 69.6% → 0.0% | 2.55 GiB → 0 B | 5,231 → 0 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -1.374 GiB | 37.4% → 0.0% | 1.37 GiB → 0 B | 2,813 → 0 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000090011c5c00` |
|     new | +621.541 MiB | 0.0% → 72.2% |  0 B → 622 MiB | 0 → 1,241 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700128a000` |
|     new | +239.499 MiB | 0.0% → 27.8% |  0 B → 239 MiB |   0 → 479 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a0800`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                            | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed | -1.694 GiB |  99.9% → 0.0% | 1.69 GiB → 0 B | 3,471 → 0 | `invokeSpecial(Object, Object)`                   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +2.499 MiB | 0.0% → 100.0% |  0 B → 2.5 MiB |     0 → 5 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095c00` |
| removed | -1.499 MiB |   0.1% → 0.0% |  1.5 MiB → 0 B |     3 → 0 | `invokeVirtual(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000009001105000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001182000`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                    | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |   -1.654 GiB | 100.0% → 0.0% | 1.65 GiB → 0 B | 3,388 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000009001097c00` |
|     new |  +30.499 MiB |  0.0% → 50.8% | 0 B → 30.5 MiB |    0 → 61 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |
|     new |  +29.499 MiB |  0.0% → 49.2% | 0 B → 29.5 MiB |    0 → 59 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -511.999 KiB |  <0.1% → 0.0% |  512 KiB → 0 B |     1 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001656000`)

| Change |      Delta |      % |               Size |   Samples | Callee                             | Location                                         |
| -----: | ---------: | -----: | -----------------: | --------: | ---------------------------------- | ------------------------------------------------ |
| -99.9% | -1.458 GiB | 100.0% | 1.46 GiB → 1.5 MiB | 2,989 → 3 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017adc00`)

| Change |      Delta |      % |             Size |    Samples | Callee                             | Location                                         |
| -----: | ---------: | -----: | ---------------: | ---------: | ---------------------------------- | ------------------------------------------------ |
| -99.3% | -1.103 GiB | 100.0% | 1.11 GiB → 8 MiB | 2,276 → 16 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001322800`)

|  Change |        Delta |            % |           Size |   Samples | Callee                                   | Location                                            |
| ------: | -----------: | -----------: | -------------: | --------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -1.02 GiB | 99.5% → 0.0% | 1.02 GiB → 0 B | 2,089 → 0 | `reinvoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x0000009001354c00` |
| removed |   -9.499 MiB |  0.9% → 0.0% |  9.5 MiB → 0 B |    19 → 0 | `invoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x0000009001355400` |
|     new |   +2.999 MiB | 0.0% → 85.7% |    0 B → 3 MiB |     0 → 6 | `delegate(Object, Object, long)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +511.999 KiB | 0.0% → 14.3% |  0 B → 512 KiB |     0 → 1 | `reinvoke(Object, Object, long)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001321800` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|  Change |          Delta |            % |                Size |         Samples | Callee                                                           | Location                               |
| ------: | -------------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------- | -------------------------------------- |
|   -0.9% |   -107.999 MiB |       100.0% | 11.9 GiB → 11.8 GiB | 24,331 → 24,115 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
| removed | -1,023.998 KiB | <0.1% → 0.0% |         1 MiB → 0 B |           2 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `loadClass(String)`                                              | `java.lang.ClassLoader`                |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|  Change |        Delta |            % |                Size |         Samples | Callee                                                           | Location                                            |
| ------: | -----------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------- | --------------------------------------------------- |
|   -0.8% | -100.499 MiB |        98.9% | 11.7 GiB → 11.6 GiB | 24,000 → 23,799 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
|   -1.9% |   -2.499 MiB |         1.1% |   133 MiB → 131 MiB |       267 → 262 | `linkToCallSite(Object, Object, int, int, Object)`               | `java.lang.invoke.LambdaForm$MH.0x0000007001940400` |
|  -37.5% |   -1.499 MiB |        <0.1% |     4 MiB → 2.5 MiB |           8 → 5 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  +50.0% | +511.999 KiB |        <0.1% |     1 MiB → 1.5 MiB |           2 → 3 | `invokeClosure(Object, Object[])`                                | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`              |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

| Change |       Delta |           % |                Size |         Samples | Callee                                           | Location                           |
| -----: | ----------: | ----------: | ------------------: | --------------: | ------------------------------------------------ | ---------------------------------- |
|  -0.9% | -97.999 MiB |       95.3% | 11.2 GiB → 11.1 GiB | 22,865 → 22,669 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  -1.2% |  -5.999 MiB |        4.1% |   492 MiB → 486 MiB |       985 → 973 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  +5.4% |  +3.999 MiB | 0.6% → 0.7% |     74 MiB → 78 MiB |       148 → 156 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|  Change |          Delta |            % |                Size |         Samples | Callee                                                           | Location                               |
| ------: | -------------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------- | -------------------------------------- |
|   -0.8% |    -87.499 MiB |       100.0% | 10.9 GiB → 10.8 GiB | 22,329 → 22,154 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`     |
|  -66.7% | -1,023.998 KiB |        <0.1% |   1.5 MiB → 512 KiB |           3 → 1 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `findMethodHandleType(Class, Class[])`                           | `java.lang.invoke.MethodHandleNatives` |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `loadClass(String)`                                              | `java.lang.ClassLoader`                |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|  Change |        Delta |     % |                Size |         Samples | Callee                                           | Location                                            |
| ------: | -----------: | ----: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------- |
|   -0.8% |  -87.499 MiB | 99.9% | 10.9 GiB → 10.8 GiB | 22,284 → 22,109 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  -11.5% |   -1.499 MiB |  0.1% |   13 MiB → 11.5 MiB |         26 → 23 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| +100.0% | +511.999 KiB | <0.1% |     512 KiB → 1 MiB |           1 → 2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|  Change |          Delta |      % |                Size |         Samples | Callee                                                   | Location                                            |
| ------: | -------------: | -----: | ------------------: | --------------: | -------------------------------------------------------- | --------------------------------------------------- |
|   -0.8% |    -88.999 MiB |  99.9% | 10.9 GiB → 10.8 GiB | 22,312 → 22,134 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   -0.8% |    -86.999 MiB | 100.0% | 10.9 GiB → 10.8 GiB | 22,322 → 22,148 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| +300.0% |     +1.499 MiB |  <0.1% |     512 KiB → 2 MiB |           1 → 4 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder`                  |
| +100.0% | +1,023.998 KiB |  <0.1% |       1 MiB → 2 MiB |           2 → 4 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  -33.3% |   -511.999 KiB |  <0.1% |     1.5 MiB → 1 MiB |           3 → 2 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change |        Delta |      % |                Size |         Samples | Callee                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------------------------------------------ | ---------------------------------- |
|  -0.8% |  -87.499 MiB | 100.0% | 10.9 GiB → 10.8 GiB | 22,327 → 22,152 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| -33.3% | -511.999 KiB |  <0.1% |     1.5 MiB → 1 MiB |           3 → 2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |       Delta |             % |                Size |         Samples | Callee                                           | Location                           |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ---------------------------------- |
|  -0.6% | -52.499 MiB | 78.8% → 79.0% | 8.58 GiB → 8.52 GiB | 17,560 → 17,455 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  -0.8% | -16.999 MiB |         18.8% | 2.04 GiB → 2.03 GiB |   4,183 → 4,149 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  -5.6% | -14.499 MiB |   2.3% → 2.2% |   258 MiB → 243 MiB |       516 → 487 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

| Change |       Delta |           % |                Size |       Samples | Callee                      | Location                                                 |
| -----: | ----------: | ----------: | ------------------: | ------------: | --------------------------- | -------------------------------------------------------- |
|  -1.9% | -61.499 MiB |       78.1% | 3.15 GiB → 3.09 GiB | 6,443 → 6,320 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
| -13.0% | -25.999 MiB | 4.9% → 4.3% |   200 MiB → 174 MiB |     401 → 349 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
| -28.0% | -14.999 MiB | 1.3% → 1.0% | 53.5 MiB → 38.5 MiB |      107 → 77 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnusedImportRule`             |
|  +5.1% | +10.999 MiB | 5.2% → 5.6% |   216 MiB → 227 MiB |     432 → 454 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
| +20.6% |  +9.999 MiB | 1.2% → 1.4% | 48.5 MiB → 58.5 MiB |      97 → 117 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`            |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change |       Delta |             % |               Size |       Samples | Callee                  | Location                                                |
| ------: | ----------: | ------------: | -----------------: | ------------: | ----------------------- | ------------------------------------------------------- |
|   -2.6% | -82.499 MiB | 87.4% → 87.0% | 3.1 GiB → 3.02 GiB | 6,341 → 6,176 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  +20.0% | +14.499 MiB |   2.0% → 2.4% |  72.5 MiB → 87 MiB |     145 → 174 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|   -2.8% |  -7.999 MiB |   7.8% → 7.7% |  282 MiB → 274 MiB |     564 → 548 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
| +275.0% |  +5.499 MiB |   0.1% → 0.2% |    2 MiB → 7.5 MiB |        4 → 15 | `addAll(Collection)`    | `java.util.ArrayList`                                   |
|   +5.5% |  +3.499 MiB |   1.8% → 1.9% |  64 MiB → 67.5 MiB |     128 → 135 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change |       Delta |             % |                Size |       Samples | Callee                    | Location                                                 |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------- | -------------------------------------------------------- |
|  -1.3% | -37.999 MiB | 86.3% → 87.0% | 2.87 GiB → 2.83 GiB | 5,875 → 5,799 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`        |
| -20.0% | -13.999 MiB |   2.1% → 1.7% |     70 MiB → 56 MiB |     138 → 110 | `visitClassEx(ClassNode)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`  |
| -26.5% |  -4.499 MiB |   0.5% → 0.4% |   17 MiB → 12.5 MiB |       34 → 25 | `visitClassEx(ClassNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`     |
| -28.1% |  -4.499 MiB |   0.5% → 0.3% |   16 MiB → 11.5 MiB |       32 → 23 | `visitClassEx(ClassNode)` | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor` |
| -53.8% |  -3.499 MiB |   0.2% → 0.1% |     6.5 MiB → 3 MiB |        13 → 6 | `visitClassEx(ClassNode)` | `org.codenarc.rule.design.InstanceofAstVisitor`          |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change |       Delta |             % |                Size |       Samples | Callee                                   | Location                           |
| -----: | ----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | ---------------------------------- |
|  -1.5% | -70.499 MiB | 83.4% → 83.0% | 4.52 GiB → 4.45 GiB | 9,245 → 9,104 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  +1.0% |  +8.999 MiB | 16.5% → 16.8% |   915 MiB → 924 MiB | 1,830 → 1,848 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change |       Delta |             % |               Size |       Samples | Callee                      | Location                                                                     |
| -----: | ----------: | ------------: | -----------------: | ------------: | --------------------------- | ---------------------------------------------------------------------------- |
|  -1.0% | -24.999 MiB | 88.6% → 89.2% | 2.42 GiB → 2.4 GiB | 4,960 → 4,910 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
|  +8.0% |  +9.499 MiB |   4.3% → 4.7% |  119 MiB → 128 MiB |     238 → 257 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`          |
| -41.4% |  -5.999 MiB |   0.5% → 0.3% | 14.5 MiB → 8.5 MiB |       29 → 17 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`               |
| -61.1% |  -5.499 MiB |   0.3% → 0.1% |    9 MiB → 3.5 MiB |        18 → 7 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ToStringReturnsNullAstVisitor`                     |
| -24.1% |  -3.499 MiB |   0.5% → 0.4% |  14.5 MiB → 11 MiB |       29 → 22 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |       Delta |             % |                Size |         Samples | Callee                                           | Location                                            |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------- |
|  -1.5% | -93.499 MiB | 73.8% → 73.0% | 5.93 GiB → 5.83 GiB | 12,133 → 11,946 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  +7.2% | +45.999 MiB |   7.8% → 8.4% |   639 MiB → 685 MiB |   1,279 → 1,371 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700131b800` |
|  +1.3% | +13.499 MiB | 12.9% → 13.2% | 1.04 GiB → 1.05 GiB |   2,129 → 2,156 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001323400` |
|  -0.7% |  -2.999 MiB |          5.4% |   442 MiB → 439 MiB |       885 → 879 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| -28.6% |  -1.999 MiB |          0.1% |       7 MiB → 5 MiB |         14 → 10 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

| Change |       Delta |      % |              Size |   Samples | Callee                      | Location                                   |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------- | ------------------------------------------ |
| -13.0% | -25.999 MiB | 100.0% | 200 MiB → 174 MiB | 401 → 349 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                        | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------- |
| -13.0% | -25.999 MiB | 100.0% | 200 MiB → 174 MiB | 401 → 349 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |       Delta |             % |              Size | Samples | Callee                                           | Location                           |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| -37.0% | -16.999 MiB | 86.0% → 92.1% |   46 MiB → 29 MiB | 92 → 58 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -66.7% |  -4.999 MiB |  14.0% → 7.9% | 7.5 MiB → 2.5 MiB |  15 → 5 | `linkToCallSite(Object, int, Object)`            | `java.lang.invoke.Invokers$Holder` |

##### `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |       Delta |             % |              Size |   Samples | Callee                                                   | Location                           |
| -----: | ----------: | ------------: | ----------------: | --------: | -------------------------------------------------------- | ---------------------------------- |
| -23.3% | -18.499 MiB | 95.2% → 96.1% | 79.5 MiB → 61 MiB | 159 → 122 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -37.5% |  -1.499 MiB |   4.8% → 3.9% |   4 MiB → 2.5 MiB |     8 → 5 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change |          Delta |             % |              Size |   Samples | Callee                                                        | Location                                            |
| ------: | -------------: | ------------: | ----------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  -15.5% |    -14.999 MiB | 71.1% → 70.4% |   97 MiB → 82 MiB | 194 → 164 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|   -7.7% |     -5.499 MiB | 52.0% → 56.2% | 71 MiB → 65.5 MiB | 142 → 131 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed | -1,023.998 KiB |   0.7% → 0.0% |       1 MiB → 0 B |     2 → 0 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
| removed | -1,023.998 KiB |   0.7% → 0.0% |       1 MiB → 0 B |     2 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

| Change |       Delta |             % |              Size |   Samples | Callee                                        | Location                    |
| -----: | ----------: | ------------: | ----------------: | --------: | --------------------------------------------- | --------------------------- |
|  -8.1% | -15.499 MiB | 92.5% → 94.1% | 192 MiB → 176 MiB | 384 → 353 | `matches(String)`                             | `java.lang.String`          |
| -31.0% |  -4.499 MiB |   7.0% → 5.3% | 14.5 MiB → 10 MiB |   29 → 20 | `isMethodNamed(MethodCallExpression, String)` | `org.codenarc.util.AstUtil` |

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

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
|    new | +260.031 KiB | 0.0% → 100.0% | 0 B → 260 KiB |   0 → 2 | `java.util.concurrent.ConcurrentHashMap:2431` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |            % |          Size | Objects | Location                            |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------- |
|    new | +107.304 KiB | 0.0% → 10.5% | 0 B → 107 KiB |   0 → 1 | `java.util.zip.ZipFile$Source:1744` |

##### `<init>(int)` (`java.util.concurrent.atomic.AtomicIntegerArray`)

| Change |       Delta |             % |         Size | Objects | Location                                            |
| -----: | ----------: | ------------: | -----------: | ------: | --------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `java.util.concurrent.atomic.AtomicIntegerArray:63` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |      % |                Size | Objects | Location                |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +336.9% | +8.843 KiB | 100.0% | 2.63 KiB → 11.5 KiB | 22 → 23 | `java.util.Arrays:3863` |

##### `resize()` (`java.util.HashMap`)

|  Change |      Delta |      % |          Size | Objects | Location                |
| ------: | ---------: | -----: | ------------: | ------: | ----------------------- |
| +611.1% | +2.578 KiB | 100.0% | 432 B → 3 KiB |   3 → 6 | `java.util.HashMap:710` |

##### `makeWithoutCaching(String)` (`org.codehaus.groovy.ast.ClassHelper`)

| Change |      Delta |             % |           Size | Objects | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------- |
|    new | +1.187 KiB | 0.0% → 100.0% | 0 B → 1.19 KiB |   0 → 8 | `org.codehaus.groovy.ast.ClassHelper:281` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |      Delta |      % |                Size | Objects | Location                                 |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------- |
| +50.0% | +1.039 KiB | 100.0% | 2.08 KiB → 3.12 KiB | 14 → 21 | `org.codehaus.groovy.ast.ClassNode:1531` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |  Delta |      % |             Size | Objects | Location                       |
| ------: | -----: | -----: | ---------------: | ------: | ------------------------------ |
| +112.5% | +792 B | 100.0% | 704 B → 1.46 KiB |  8 → 17 | `java.lang.reflect.Method:165` |

##### `write(String, int, int)` (`sun.nio.cs.StreamEncoder`)

| Change |  Delta |      % |                Size | Objects | Location                       |
| -----: | -----: | -----: | ------------------: | ------: | ------------------------------ |
| +24.4% | +616 B | 100.0% | 2.46 KiB → 3.06 KiB |   7 → 6 | `sun.nio.cs.StreamEncoder:165` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |  Delta |      % |                Size | Objects | Location                |
| -----: | -----: | -----: | ------------------: | ------: | ----------------------- |
| +28.4% | +464 B | 100.0% | 1.59 KiB → 2.05 KiB |   4 → 8 | `java.util.Arrays:3541` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |  Delta |      % |         Size | Objects | Location                                     |
| ------: | -----: | -----: | -----------: | ------: | -------------------------------------------- |
| +450.0% | +432 B | 100.0% | 96 B → 528 B |  2 → 11 | `java.lang.invoke.MethodHandles$Lookup:3444` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |  Delta |      % |                Size | Objects | Location                                |
| -----: | -----: | -----: | ------------------: | ------: | --------------------------------------- |
| +30.0% | +432 B | 100.0% | 1.41 KiB → 1.83 KiB | 30 → 39 | `java.lang.invoke.MethodHandleImpl:667` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |  Delta |      % |             Size | Objects | Location                            |
| -----: | -----: | -----: | ---------------: | ------: | ----------------------------------- |
| +31.3% | +280 B | 100.0% | 896 B → 1.15 KiB | 16 → 21 | `java.util.stream.StreamSupport:69` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |  Delta |      % |             Size | Objects | Location                |
| -----: | -----: | -----: | ---------------: | ------: | ----------------------- |
| +31.0% | +248 B | 100.0% | 800 B → 1.02 KiB |   4 → 3 | `java.util.Arrays:3482` |

##### `spliterator(Object[], int, int, int)` (`java.util.Spliterators`)

| Change |  Delta |      % |          Size | Objects | Location                     |
| -----: | -----: | -----: | ------------: | ------: | ---------------------------- |
| +55.6% | +200 B | 100.0% | 360 B → 560 B |  9 → 14 | `java.util.Spliterators:178` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

| Change |  Delta |            % |        Size | Objects | Location                                  |
| -----: | -----: | -----------: | ----------: | ------: | ----------------------------------------- |
|    new | +104 B | 0.0% → 48.1% | 0 B → 104 B |   0 → 4 | `org.codenarc.report.TextReportWriter:90` |
|    new |  +72 B | 0.0% → 33.3% |  0 B → 72 B |   0 → 3 | `org.codenarc.report.TextReportWriter:91` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

|  Change |  Delta |      % |          Size | Objects | Location                                |
| ------: | -----: | -----: | ------------: | ------: | --------------------------------------- |
| +116.7% | +168 B | 100.0% | 144 B → 312 B |  6 → 13 | `java.lang.invoke.MethodHandleImpl:631` |

##### `visitClassDeclaration(GroovyParser$ClassDeclarationContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change |  Delta |             % |        Size | Objects | Location                                          |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------------------- |
|    new | +152 B | 0.0% → 100.0% | 0 B → 152 B |   0 → 1 | `org.apache.groovy.parser.antlr4.AstBuilder:1293` |

##### `<init>(int, int, MemorySegment)` (`java.nio.HeapByteBuffer`)

| Change |       Delta |      % |            Size | Objects | Location                     |
| -----: | ----------: | -----: | --------------: | ------: | ---------------------------- |
| -62.4% | -19.984 KiB | 100.0% | 32 KiB → 12 KiB |   1 → 2 | `java.nio.HeapByteBuffer:71` |

##### `<init>(Object[])` (`java.util.ImmutableCollections$SetN`)

| Change |      Delta |      % |            Size | Objects | Location                                  |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------- |
| -99.5% | -8.281 KiB | 100.0% | 8.32 KiB → 40 B |       1 | `java.util.ImmutableCollections$SetN:920` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -51.9% | -6.367 KiB | 100.0% | 12.3 KiB → 5.91 KiB |       4 | `java.util.Arrays:3856` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |      Delta |      % |                Size | Objects | Location                                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------- |
| -58.1% | -3.515 KiB | 100.0% | 6.05 KiB → 2.53 KiB |   3 → 2 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:135` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |             % |           Size | Objects | Location                                       |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------- |
| removed | -1.453 KiB | 100.0% → 0.0% | 1.45 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |               Size | Objects | Location                  |
| -----: | -----: | -----: | -----------------: | ------: | ------------------------- |
| -32.3% | -560 B | 100.0% | 1.7 KiB → 1.15 KiB | 31 → 21 | `java.util.ArrayList:239` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |  Delta |      % |          Size | Objects | Location                                 |
| -----: | -----: | -----: | ------------: | ------: | ---------------------------------------- |
| -54.5% | -336 B | 100.0% | 616 B → 280 B |  11 → 5 | `java.util.stream.ReferencePipeline:190` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |  Delta |             % |         Size | Objects | Location                                  |
| ------: | -----: | ------------: | -----------: | ------: | ----------------------------------------- |
|  -71.4% | -200 B | 81.4% → 76.9% | 280 B → 80 B |   7 → 2 | `java.lang.invoke.DirectMethodHandle:103` |
| removed |  -40 B |  11.6% → 0.0% |   40 B → 0 B |   1 → 0 | `java.lang.invoke.DirectMethodHandle:107` |

##### `tuple(Object, Object)` (`groovy.lang.Tuple`)

|  Change |  Delta |             % |        Size | Objects | Location                |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- |
| removed | -224 B | 100.0% → 0.0% | 224 B → 0 B |   7 → 0 | `groovy.lang.Tuple:142` |

##### `toArray()` (`java.lang.PublicMethods`)

| Change |  Delta |      % |          Size | Objects | Location                     |
| -----: | -----: | -----: | ------------: | ------: | ---------------------------- |
| -42.3% | -176 B | 100.0% | 416 B → 240 B |       1 | `java.lang.PublicMethods:77` |

##### `create(Tuple2, int, String, int, int, int, int, int)` (`groovyjarjarantlr4.v4.runtime.CommonTokenFactory`)

| Change |  Delta |      % |          Size | Objects | Location                                              |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------------------------------- |
| -30.0% | -144 B | 100.0% | 480 B → 336 B |  10 → 7 | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory:70` |

##### `sizeCache(int)` (`java.lang.ClassValue$ClassValueMap`)

|  Change |  Delta |             % |        Size | Objects | Location                                 |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------------------------- |
| removed | -144 B | 100.0% → 0.0% | 144 B → 0 B |   1 → 0 | `java.lang.ClassValue$ClassValueMap:609` |

##### `createBinaryExpression(GroovyParser$ExpressionContext, Token, GroovyParser$ExpressionContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change |  Delta |             % |        Size | Objects | Location                                          |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------- |
| removed | -128 B | 100.0% → 0.0% | 128 B → 0 B |   2 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:4516` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |  Delta |      % |         Size | Objects | Location                     |
| -----: | -----: | -----: | -----------: | ------: | ---------------------------- |
| -83.3% | -120 B | 100.0% | 144 B → 24 B |   6 → 1 | `java.lang.StringLatin1:750` |

##### `createTerminalNode(ParserRuleContext, Token)` (`groovyjarjarantlr4.v4.runtime.Parser`)

| Change |  Delta |      % |         Size | Objects | Location                                   |
| -----: | -----: | -----: | -----------: | ------: | ------------------------------------------ |
| -83.3% | -120 B | 100.0% | 144 B → 24 B |   6 → 1 | `groovyjarjarantlr4.v4.runtime.Parser:601` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |  Delta |      % |          Size | Objects | Location                      |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------- |
| -15.8% | -120 B | 100.0% | 760 B → 640 B | 19 → 16 | `java.util.LinkedHashMap:281` |

##### `createNormalMetaClass(Class, MetaClassRegistry)` (`groovy.lang.MetaClassRegistry$MetaClassCreationHandle`)

|  Change |  Delta |             % |        Size | Objects | Location                                                    |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle:166` |

##### `entryKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change | Delta |             % |       Size | Objects | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   3 → 0 | `jdk.internal.util.ReferencedKeyMap:165` |

##### `rparen()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % |       Size | Objects | Location                                             |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `org.apache.groovy.parser.antlr4.GroovyParser:12801` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Caller                | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +260.031 KiB | 0.0% → 100.0% | 0 B → 260 KiB |   0 → 2 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |                Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +11.7% | +107.304 KiB | 100.0% | 914 KiB → 1,021 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(int)` (`java.util.concurrent.atomic.AtomicIntegerArray`)

| Change |       Delta |             % |         Size | Objects | Caller                     | Location                                        |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------- | ----------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `<init>(HashEdgeMap, int)` | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|    Change |       Delta |      % |             Size | Objects | Caller                                                    | Location                |
| --------: | ----------: | -----: | ---------------: | ------: | --------------------------------------------------------- | ----------------------- |
| +27628.6% | +30.218 KiB | 100.0% | 112 B → 30.3 KiB |       1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |      % |                Size | Objects | Caller                          | Location           |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------- | ------------------ |
| +336.9% | +8.843 KiB | 100.0% | 2.63 KiB → 11.5 KiB | 22 → 23 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `resize()` (`java.util.HashMap`)

|  Change |      Delta |      % |          Size | Objects | Caller                                          | Location            |
| ------: | ---------: | -----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| +611.1% | +2.578 KiB | 100.0% | 432 B → 3 KiB |   3 → 6 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `makeWithoutCaching(String)` (`org.codehaus.groovy.ast.ClassHelper`)

| Change |  Delta |            % |        Size | Objects | Caller                                   | Location                                |
| -----: | -----: | -----------: | ----------: | ------: | ---------------------------------------- | --------------------------------------- |
|    new | +760 B | 0.0% → 62.5% | 0 B → 760 B |   0 → 5 | `make(String)`                           | `org.codehaus.groovy.ast.ClassHelper`   |
|    new | +456 B | 0.0% → 37.5% | 0 B → 456 B |   0 → 3 | `configureTypeVariableReference(String)` | `org.codehaus.groovy.vmplugin.v8.Java8` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |      Delta |      % |                Size | Objects | Caller                    | Location                            |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- | ----------------------------------- |
| +50.0% | +1.039 KiB | 100.0% | 2.08 KiB → 3.12 KiB | 14 → 21 | `getPlainNodeReference()` | `org.codehaus.groovy.ast.ClassNode` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |  Delta |      % |             Size | Objects | Caller               | Location                          |
| ------: | -----: | -----: | ---------------: | ------: | -------------------- | --------------------------------- |
| +112.5% | +792 B | 100.0% | 704 B → 1.46 KiB |  8 → 17 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `write(String, int, int)` (`sun.nio.cs.StreamEncoder`)

| Change |  Delta |      % |                Size | Objects | Caller                    | Location                     |
| -----: | -----: | -----: | ------------------: | ------: | ------------------------- | ---------------------------- |
| +24.4% | +616 B | 100.0% | 2.46 KiB → 3.06 KiB |   7 → 6 | `write(String, int, int)` | `java.io.OutputStreamWriter` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change |  Delta |      % |                Size | Objects | Caller                                                                 | Location                                     |
| -----: | -----: | -----: | ------------------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| +43.5% | +480 B | 100.0% | 1.08 KiB → 1.55 KiB | 23 → 33 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |  Delta |      % |                Size | Objects | Caller                        | Location                          |
| -----: | -----: | -----: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| +28.4% | +464 B | 100.0% | 1.59 KiB → 2.05 KiB |   4 → 8 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |  Delta |      % |         Size | Objects | Caller                                             | Location                                                  |
| ------: | -----: | -----: | -----------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
| +450.0% | +432 B | 100.0% | 96 B → 528 B |  2 → 11 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |  Delta |      % |                Size | Objects | Caller                  | Location                            |
| -----: | -----: | -----: | ------------------: | ------: | ----------------------- | ----------------------------------- |
| +30.0% | +432 B | 100.0% | 1.41 KiB → 1.83 KiB | 30 → 39 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change |  Delta |      % |          Size | Objects | Caller                                                 | Location                                     |
| -----: | -----: | -----: | ------------: | ------: | ------------------------------------------------------ | -------------------------------------------- |
| +71.4% | +400 B | 100.0% | 560 B → 960 B | 14 → 24 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |  Delta |      % |             Size | Objects | Caller                       | Location           |
| -----: | -----: | -----: | ---------------: | ------: | ---------------------------- | ------------------ |
| +31.3% | +280 B | 100.0% | 896 B → 1.15 KiB | 16 → 21 | `stream(Object[], int, int)` | `java.util.Arrays` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |  Delta |              % |          Size | Objects | Caller      | Location              |
| -----: | -----: | -------------: | ------------: | ------: | ----------- | --------------------- |
|    new | +632 B |   0.0% → 60.3% |   0 B → 632 B |   0 → 2 | `grow(int)` | `java.util.ArrayList` |
| -48.0% | -384 B | 100.0% → 39.7% | 800 B → 416 B |   4 → 1 | `clone()`   | `java.util.ArrayList` |

##### `spliterator(Object[], int, int, int)` (`java.util.Spliterators`)

| Change |  Delta |      % |          Size | Objects | Caller                            | Location           |
| -----: | -----: | -----: | ------------: | ------: | --------------------------------- | ------------------ |
| +55.6% | +200 B | 100.0% | 360 B → 560 B |  9 → 14 | `spliterator(Object[], int, int)` | `java.util.Arrays` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|  Change |  Delta |      % |         Size | Objects | Caller                                                  | Location                                             |
| ------: | -----: | -----: | -----------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| +440.0% | +176 B | 100.0% | 40 B → 216 B |   1 → 8 | `invokeVirtual(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001399400` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

|  Change |  Delta |      % |          Size | Objects | Caller                                                    | Location                         |
| ------: | -----: | -----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------- |
| +116.7% | +168 B | 100.0% | 144 B → 312 B |  6 → 13 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `visitClassDeclaration(GroovyParser$ClassDeclarationContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change |  Delta |             % |        Size | Objects | Caller                                                      | Location                                     |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | -------------------------------------------- |
|    new | +152 B | 0.0% → 100.0% | 0 B → 152 B |   0 → 1 | `visitTypeDeclaration(GroovyParser$TypeDeclarationContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `<init>(int, int, MemorySegment)` (`java.nio.HeapByteBuffer`)

| Change |       Delta |      % |            Size | Objects | Caller          | Location              |
| -----: | ----------: | -----: | --------------: | ------: | --------------- | --------------------- |
| -62.4% | -19.984 KiB | 100.0% | 32 KiB → 12 KiB |   1 → 2 | `allocate(int)` | `java.nio.ByteBuffer` |

##### `<init>(Object[])` (`java.util.ImmutableCollections$SetN`)

|  Change |     Delta |             % |           Size | Objects | Caller                       | Location        |
| ------: | --------: | ------------: | -------------: | ------: | ---------------------------- | --------------- |
| removed | -8.32 KiB | 100.0% → 0.0% | 8.32 KiB → 0 B |   1 → 0 | `of(Object[])`               | `java.util.Set` |
|     new |     +40 B | 0.0% → 100.0% |     0 B → 40 B |   0 → 1 | `of(Object, Object, Object)` | `java.util.Set` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Caller                                | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------- | ------------------ |
| -51.9% | -6.367 KiB | 100.0% | 12.3 KiB → 5.91 KiB |       4 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |      Delta |      % |                Size | Objects | Caller                                            | Location                                                |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| -58.1% | -3.515 KiB | 100.0% | 6.05 KiB → 2.53 KiB |   3 → 2 | `getOrPutMethods(String, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |             % |           Size | Objects | Caller          | Location                                     |
| ------: | ---------: | ------------: | -------------: | ------: | --------------- | -------------------------------------------- |
| removed | -1.453 KiB | 100.0% → 0.0% | 1.45 KiB → 0 B |   1 → 0 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |               Size | Objects | Caller   | Location              |
| -----: | -----: | -----: | -----------------: | ------: | -------- | --------------------- |
| -32.3% | -560 B | 100.0% | 1.7 KiB → 1.15 KiB | 31 → 21 | `grow()` | `java.util.ArrayList` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |  Delta |      % |          Size | Objects | Caller              | Location                                                  |
| -----: | -----: | -----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| -54.5% | -336 B | 100.0% | 616 B → 280 B |  11 → 5 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change |  Delta |      % |          Size | Objects | Caller                                                                                   | Location                                |
| -----: | -----: | -----: | ------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| -69.8% | -240 B | 100.0% | 344 B → 104 B |   9 → 3 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `tuple(Object, Object)` (`groovy.lang.Tuple`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                                    | Location                    |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------------- | --------------------------- |
| removed | -224 B | 100.0% → 0.0% | 224 B → 0 B |   7 → 0 | `createMetaMethodAndMetaProperty(Class, Class, String, boolean, boolean)` | `groovy.lang.MetaClassImpl` |

##### `toArray()` (`java.lang.PublicMethods`)

| Change |  Delta |      % |          Size | Objects | Caller                      | Location          |
| -----: | -----: | -----: | ------------: | ------: | --------------------------- | ----------------- |
| -42.3% | -176 B | 100.0% | 416 B → 240 B |       1 | `privateGetPublicMethods()` | `java.lang.Class` |

##### `create(Tuple2, int, String, int, int, int, int, int)` (`groovyjarjarantlr4.v4.runtime.CommonTokenFactory`)

| Change |  Delta |      % |          Size | Objects | Caller                                                 | Location                                           |
| -----: | -----: | -----: | ------------: | ------: | ------------------------------------------------------ | -------------------------------------------------- |
| -30.0% | -144 B | 100.0% | 480 B → 336 B |  10 → 7 | `create(Tuple2, int, String, int, int, int, int, int)` | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory` |

##### `sizeCache(int)` (`java.lang.ClassValue$ClassValueMap`)

|  Change |  Delta |             % |        Size | Objects | Caller     | Location                             |
| ------: | -----: | ------------: | ----------: | ------: | ---------- | ------------------------------------ |
| removed | -144 B | 100.0% → 0.0% | 144 B → 0 B |   1 → 0 | `<init>()` | `java.lang.ClassValue$ClassValueMap` |

##### `createBinaryExpression(GroovyParser$ExpressionContext, Token, GroovyParser$ExpressionContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                      | Location                                     |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | -------------------------------------------- |
| removed | -128 B | 100.0% → 0.0% | 128 B → 0 B |   2 → 0 | `visitEqualityExprAlt(GroovyParser$EqualityExprAltContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change |  Delta |            % |        Size | Objects | Caller         | Location                 |
| ------: | -----: | -----------: | ----------: | ------: | -------------- | ------------------------ |
| removed | -120 B | 83.3% → 0.0% | 120 B → 0 B |   5 → 0 | `trim(byte[])` | `java.lang.StringLatin1` |

##### `createTerminalNode(ParserRuleContext, Token)` (`groovyjarjarantlr4.v4.runtime.Parser`)

| Change |  Delta |      % |         Size | Objects | Caller      | Location                               |
| -----: | -----: | -----: | -----------: | ------: | ----------- | -------------------------------------- |
| -83.3% | -120 B | 100.0% | 144 B → 24 B |   6 → 1 | `consume()` | `groovyjarjarantlr4.v4.runtime.Parser` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |  Delta |             % |          Size | Objects | Caller                                          | Location            |
| -----: | -----: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| -16.7% | -120 B | 94.7% → 93.8% | 720 B → 600 B | 18 → 15 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `createNormalMetaClass(Class, MetaClassRegistry)` (`groovy.lang.MetaClassRegistry$MetaClassCreationHandle`)

|  Change |  Delta |             % |        Size | Objects | Caller                                             | Location                                                |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------------------- | ------------------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `createWithCustomLookup(Class, MetaClassRegistry)` | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle` |

##### `make(MethodType, LambdaForm, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLL`)

| Change | Delta |      % |          Size | Objects | Caller                                                         | Location                                     |
| -----: | ----: | -----: | ------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| -28.6% | -96 B | 100.0% | 336 B → 240 B |   7 → 5 | `invokeStatic(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `entryKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change | Delta |             % |       Size | Objects | Caller                                | Location                             |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------- | ------------------------------------ |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   3 → 0 | `internKey(ReferencedKeyMap, Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `rparen()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % |       Size | Objects | Caller               | Location                                       |
| ------: | ----: | ------------: | ---------: | ------: | -------------------- | ---------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `formalParameters()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

|    Change |        Delta |            % |               Size |   Objects | Function                                                  | Location                                             |
| --------: | -----------: | -----------: | -----------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  +4159.5% | +407.171 KiB | 1.0% → 28.8% | 9.79 KiB → 417 KiB | 116 → 502 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
|  +4118.5% | +403.164 KiB | 1.0% → 28.5% | 9.79 KiB → 413 KiB | 116 → 502 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
|  +4118.4% | +403.156 KiB | 1.0% → 28.5% | 9.79 KiB → 413 KiB | 116 → 503 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`  |
|  +4086.3% | +400.007 KiB | 1.0% → 28.3% | 9.79 KiB → 410 KiB | 116 → 455 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000007001182800`  |
|  +6727.7% | +391.046 KiB | 0.6% → 27.4% | 5.81 KiB → 397 KiB |  47 → 235 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001282400`  |
| +27092.3% | +385.218 KiB | 0.1% → 26.7% | 1.42 KiB → 387 KiB |  28 → 147 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001105400`  |
| +19859.7% | +384.781 KiB | 0.2% → 26.7% | 1.94 KiB → 387 KiB |  36 → 148 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000070010d9c00`  |
|  +1002.9% | +384.304 KiB | 3.8% → 29.2% | 38.3 KiB → 423 KiB | 117 → 758 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
|  +5362.5% | +379.562 KiB | 0.7% → 26.7% | 7.08 KiB → 387 KiB |  78 → 147 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001291800`  |
|   +714.7% | +374.718 KiB | 5.2% → 29.5% | 52.4 KiB → 427 KiB | 152 → 770 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| +45579.8% | +370.335 KiB | 0.1% → 25.6% |    832 B → 371 KiB |   7 → 140 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070012a4c00`  |
|   +696.4% | +369.796 KiB | 5.3% → 29.2% | 53.1 KiB → 423 KiB | 160 → 765 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
|  +3759.2% | +361.531 KiB | 1.0% → 25.6% | 9.62 KiB → 371 KiB | 267 → 140 | `invokeVirtual(Object, Object, int)`                      | `java.lang.invoke.LambdaForm$DMH.0x0000007001109400` |
| +46733.7% | +357.804 KiB | 0.1% → 24.8% |    784 B → 359 KiB |  12 → 171 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070015a2400`  |
| +10746.4% | +352.617 KiB | 0.3% → 24.6% | 3.28 KiB → 356 KiB |  49 → 141 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001314400`  |
|  +3637.5% | +348.976 KiB | 1.0% → 24.8% | 9.59 KiB → 359 KiB |  63 → 171 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070015a5400`  |
|  +4928.1% |  +348.82 KiB | 0.7% → 24.6% | 7.08 KiB → 356 KiB |  78 → 141 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001318400`  |
|  +3353.5% | +348.187 KiB | 1.0% → 24.8% | 10.4 KiB → 359 KiB |  41 → 171 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000070015a5000`  |
|   +399.0% | +338.148 KiB | 8.4% → 29.2% | 84.8 KiB → 423 KiB | 404 → 765 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
|   +441.5% | +335.945 KiB | 7.5% → 28.4% | 76.1 KiB → 412 KiB | 395 → 492 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

| Change |       Delta |            % |                Size |   Objects | Function                                 | Location                                             |
| -----: | ----------: | -----------: | ------------------: | --------: | ---------------------------------------- | ---------------------------------------------------- |
| -91.5% | -86.632 KiB |  9.4% → 0.6% | 94.7 KiB → 8.07 KiB |  677 → 83 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d4800`  |
| -89.6% |  -84.96 KiB |  9.4% → 0.7% | 94.8 KiB → 9.85 KiB | 679 → 261 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070018b3800`  |
| -89.2% | -66.726 KiB |  7.4% → 0.6% | 74.8 KiB → 8.07 KiB |  286 → 83 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700126a400`  |
| -99.9% | -54.867 KiB | 5.4% → <0.1% |     54.9 KiB → 40 B |   185 → 1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001329800`  |
| -71.6% | -53.468 KiB |  7.4% → 1.5% | 74.7 KiB → 21.2 KiB | 367 → 308 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001268800`  |
| -87.6% | -46.492 KiB |  5.3% → 0.5% | 53.1 KiB → 6.61 KiB |  160 → 65 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700136a400`  |
| -54.8% | -46.476 KiB |  8.4% → 2.6% | 84.7 KiB → 38.3 KiB |  409 → 63 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700128b800`  |
| -82.1% | -45.054 KiB |  5.4% → 0.7% | 54.9 KiB → 9.85 KiB | 185 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070018b4c00`  |
| -81.4% |  -43.25 KiB |  5.3% → 0.7% | 53.1 KiB → 9.85 KiB | 160 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001944c00`  |
| -81.3% |  -42.82 KiB |  5.2% → 0.7% | 52.7 KiB → 9.85 KiB | 155 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070018a6800`  |
| -81.5% | -42.781 KiB |  5.2% → 0.7% | 52.5 KiB → 9.74 KiB | 154 → 259 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070018a6c00`  |
| -81.2% | -42.437 KiB |  5.2% → 0.7% | 52.3 KiB → 9.85 KiB | 150 → 261 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070018abc00`  |
| -81.2% | -42.437 KiB |  5.2% → 0.7% | 52.3 KiB → 9.85 KiB | 150 → 261 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001430000`  |
| -81.0% | -42.078 KiB |  5.1% → 0.7% | 51.9 KiB → 9.85 KiB | 141 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070018a5c00`  |
| -80.5% | -40.593 KiB |  5.0% → 0.7% | 50.4 KiB → 9.85 KiB | 120 → 261 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070018a5800`  |
| -60.7% | -39.164 KiB |  6.4% → 1.7% | 64.5 KiB → 25.3 KiB | 248 → 311 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
| -75.9% | -30.515 KiB |  4.0% → 0.7% | 40.2 KiB → 9.67 KiB | 148 → 256 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070018b3c00`  |
| -75.5% | -30.335 KiB |  4.0% → 0.7% | 40.2 KiB → 9.85 KiB | 148 → 261 | `invokeVirtual(Object, Object, int)`     | `java.lang.invoke.LambdaForm$DMH.0x00000070018b3000` |
| -90.3% | -27.304 KiB |  3.0% → 0.2% | 30.2 KiB → 2.92 KiB |  216 → 45 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700193e400`  |
| -79.0% | -24.867 KiB |  3.1% → 0.5% | 31.5 KiB → 6.61 KiB |  242 → 65 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001360c00`  |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|  Change |       Delta |             % |           Size | Objects | Callee                                          | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new | +416.96 KiB | 0.0% → 100.0% |  0 B → 417 KiB | 0 → 502 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| removed |  -9.789 KiB | 100.0% → 0.0% | 9.79 KiB → 0 B | 116 → 0 | `invokeSpecial(Object, Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700102b000`)

|  Change |        Delta |             % |           Size | Objects | Callee                                     | Location                                         |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
|     new | +412.898 KiB | 0.0% → 100.0% |  0 B → 413 KiB | 0 → 501 | `invokeVirtual(Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`     |
| removed |   -9.789 KiB | 100.0% → 0.0% | 9.79 KiB → 0 B | 116 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |       +344 B |   0.0% → 0.1% |    0 B → 344 B |   0 → 8 | `invokeSpecial(Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109bc00`)

|  Change |        Delta |             % |           Size | Objects | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +412.898 KiB | 0.0% → 100.0% |  0 B → 413 KiB | 0 → 501 | `reinvoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
| removed |   -9.789 KiB | 100.0% → 0.0% | 9.79 KiB → 0 B | 116 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090011c5c00` |
| removed |   -9.648 KiB |  98.6% → 0.0% | 9.65 KiB → 0 B | 112 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |       +192 B |  0.0% → <0.1% |    0 B → 192 B |   0 → 8 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001182800`)

|  Change |        Delta |             % |           Size | Objects | Callee                                          | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new | +409.796 KiB | 0.0% → 100.0% |  0 B → 410 KiB | 0 → 455 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
| removed |   -9.789 KiB | 100.0% → 0.0% | 9.79 KiB → 0 B | 116 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001348000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001282400`)

|  Change |        Delta |             % |           Size | Objects | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +396.859 KiB | 0.0% → 100.0% |  0 B → 397 KiB | 0 → 235 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
| removed |   -5.812 KiB | 100.0% → 0.0% | 5.81 KiB → 0 B |  47 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001105400`)

|  Change |       Delta |             % |           Size | Objects | Callee                          | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------- | --------------------------------------------------- |
|     new | +386.64 KiB | 0.0% → 100.0% |  0 B → 387 KiB | 0 → 147 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |  -1.421 KiB | 100.0% → 0.0% | 1.42 KiB → 0 B |  28 → 0 | `reinvoke(Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x00000090010ca800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d9c00`)

|    Change |        Delta |            % |               Size |  Objects | Callee                             | Location                                            |
| --------: | -----------: | -----------: | -----------------: | -------: | ---------------------------------- | --------------------------------------------------- |
| +19855.6% | +384.703 KiB |       100.0% | 1.94 KiB → 387 KiB | 36 → 147 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|       new |        +80 B | 0.0% → <0.1% |         0 B → 80 B |    0 → 1 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|  Change |        Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +422.531 KiB | 0.0% → 100.0% |  0 B → 423 KiB | 0 → 754 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |   -38.32 KiB | 100.0% → 0.0% | 38.3 KiB → 0 B | 117 → 0 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |       +264 B |   0.0% → 0.1% |    0 B → 264 B |  0 → 11 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001291800`)

|  Change |       Delta |             % |           Size | Objects | Callee                                  | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new | +386.64 KiB | 0.0% → 100.0% |  0 B → 387 KiB | 0 → 147 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |
| removed |  -7.078 KiB | 100.0% → 0.0% | 7.08 KiB → 0 B |  78 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|  Change |        Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +427.148 KiB | 0.0% → 100.0% |  0 B → 427 KiB | 0 → 770 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |  -52.429 KiB | 100.0% → 0.0% | 52.4 KiB → 0 B | 152 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000009001097c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012a4c00`)

|  Change |        Delta |             % |          Size | Objects | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new | +371.148 KiB | 0.0% → 100.0% | 0 B → 371 KiB | 0 → 140 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001109400` |
| removed |       -832 B | 100.0% → 0.0% |   832 B → 0 B |   7 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|  Change |        Delta |             % |           Size | Objects | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +422.898 KiB | 0.0% → 100.0% |  0 B → 423 KiB | 0 → 765 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|     new | +275.562 KiB |  0.0% → 65.2% |  0 B → 276 KiB | 0 → 258 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |  -53.101 KiB | 100.0% → 0.0% | 53.1 KiB → 0 B | 160 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, int)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001109400`)

|  Change |        Delta |             % |           Size | Objects | Callee                                   | Location                                      |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------------- | --------------------------------------------- |
|     new | +371.148 KiB | 0.0% → 100.0% |  0 B → 371 KiB | 0 → 140 | `compile(int)`                           | `org.codehaus.groovy.control.CompilationUnit` |
| removed |   -9.617 KiB | 100.0% → 0.0% | 9.62 KiB → 0 B | 267 → 0 | `getNumberOfViolationsWithPriority(int)` | `org.codenarc.results.DirectoryResults`       |
| removed |   -9.382 KiB |  97.6% → 0.0% | 9.38 KiB → 0 B | 261 → 0 | `getNumberOfViolationsWithPriority(int)` | `org.codenarc.results.FileResults`            |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a2400`)

|    Change |        Delta |      % |            Size |  Objects | Callee                                  | Location                                     |
| --------: | -----------: | -----: | --------------: | -------: | --------------------------------------- | -------------------------------------------- |
| +46733.7% | +357.804 KiB | 100.0% | 784 B → 359 KiB | 12 → 171 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001314400`)

|    Change |        Delta |      % |               Size |  Objects | Callee                                  | Location                                     |
| --------: | -----------: | -----: | -----------------: | -------: | --------------------------------------- | -------------------------------------------- |
| +10746.4% | +352.617 KiB | 100.0% | 3.28 KiB → 356 KiB | 49 → 141 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a5400`)

|   Change |        Delta |      % |               Size |  Objects | Callee                                                  | Location                                             |
| -------: | -----------: | -----: | -----------------: | -------: | ------------------------------------------------------- | ---------------------------------------------------- |
| +3637.5% | +348.976 KiB | 100.0% | 9.59 KiB → 359 KiB | 63 → 171 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118a000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001318400`)

|   Change |       Delta |      % |               Size |  Objects | Callee                                                                                      | Location                                             |
| -------: | ----------: | -----: | -----------------: | -------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +4928.1% | +348.82 KiB | 100.0% | 7.08 KiB → 356 KiB | 78 → 141 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a5000`)

|  Change |       Delta |             % |           Size | Objects | Callee                                             | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
|     new | +358.57 KiB | 0.0% → 100.0% |  0 B → 359 KiB | 0 → 171 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -10.382 KiB | 100.0% → 0.0% | 10.4 KiB → 0 B |  41 → 0 | `reinvoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001099c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|  Change |        Delta |             % |           Size | Objects | Callee                                          | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new | +422.898 KiB | 0.0% → 100.0% |  0 B → 423 KiB | 0 → 765 | `invokeVirtual(Object, Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -84.75 KiB | 100.0% → 0.0% | 84.8 KiB → 0 B | 404 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001094400` |

##### `invokeInterface(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001095000`)

|  Change |        Delta |             % |                Size |   Objects | Callee                                   | Location                          |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------- | --------------------------------- |
| +448.9% | +335.132 KiB | 98.1% → 99.5% |  74.7 KiB → 410 KiB | 367 → 455 | `invokeMethod(Object, String, Object[])` | `groovy.lang.MetaClassImpl`       |
|  +57.1% |       +832 B |   1.9% → 0.5% | 1.42 KiB → 2.23 KiB |   28 → 37 | `invokeMethod(Object, String, Object[])` | `groovy.lang.DelegatingMetaClass` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d4800`)

|  Change |       Delta |             % |           Size | Objects | Callee                                   | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed | -94.703 KiB | 100.0% → 0.0% | 94.7 KiB → 0 B | 677 → 0 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |   +8.07 KiB | 0.0% → 100.0% | 0 B → 8.07 KiB |  0 → 83 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070018b3800`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -94.812 KiB | 100.0% → 0.0% | 94.8 KiB → 0 B | 679 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x00000070018b3000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700126a400`)

|  Change |       Delta |             % |           Size | Objects | Callee                                     | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed | -74.796 KiB | 100.0% → 0.0% | 74.8 KiB → 0 B | 286 → 0 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000090010aa800` |
|     new |   +8.07 KiB | 0.0% → 100.0% | 0 B → 8.07 KiB |  0 → 83 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
| removed |  -2.546 KiB |   3.4% → 0.0% | 2.55 KiB → 0 B |  44 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001329800`)

|  Change |       Delta |             % |           Size | Objects | Callee                                  | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -54.906 KiB | 100.0% → 0.0% | 54.9 KiB → 0 B | 185 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |       +40 B | 0.0% → 100.0% |     0 B → 40 B |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001030400` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001268800`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                    | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed | -74.664 KiB | 100.0% → 0.0% | 74.7 KiB → 0 B | 367 → 0 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001095000` |
|     new | +13.523 KiB |  0.0% → 63.8% | 0 B → 13.5 KiB | 0 → 229 | `invokeSpecial(Object, Object, Object, Object)`           | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +13.125 KiB |  0.0% → 61.9% | 0 B → 13.1 KiB | 0 → 225 | `invokeInterface(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x0000007001268400` |
|     new |   +8.07 KiB |  0.0% → 38.1% | 0 B → 8.07 KiB |  0 → 83 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x0000007001318800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700136a400`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -53.101 KiB | 100.0% → 0.0% | 53.1 KiB → 0 B | 160 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +6.609 KiB | 0.0% → 100.0% | 0 B → 6.61 KiB |  0 → 65 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700128b800`)

|  Change |       Delta |            % |           Size | Objects | Callee                                             | Location                                            |
| ------: | ----------: | -----------: | -------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| removed | -84.625 KiB | 99.9% → 0.0% | 84.6 KiB → 0 B | 404 → 0 | `reinvoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000009001099c00` |
|     new | +38.101 KiB | 0.0% → 99.6% | 0 B → 38.1 KiB |  0 → 61 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700128a000` |
| removed |      -392 B |  0.5% → 0.0% |    392 B → 0 B |   4 → 0 | `delegate(Object, Object)`                         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |      -288 B |  0.3% → 0.0% |    288 B → 0 B |  12 → 0 | `invoke(Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000900109b800` |
|     new |      +168 B |  0.0% → 0.4% |    0 B → 168 B |   0 → 2 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070018b4c00`)

|  Change |       Delta |             % |           Size | Objects | Callee                                             | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| removed | -54.906 KiB | 100.0% → 0.0% | 54.9 KiB → 0 B | 185 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `reinvoke(Object, Object, int, int)`               | `java.lang.invoke.LambdaForm$MH.0x00000070013f7400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001944c00`)

|  Change |       Delta |             % |           Size | Objects | Callee                                       | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------------------- | --------------------------------------------------- |
| removed | -53.101 KiB | 100.0% → 0.0% | 53.1 KiB → 0 B | 160 → 0 | `delegate(Object, Object, Object)`           | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `reinvoke(Object, Object, Object, int, int)` | `java.lang.invoke.LambdaForm$MH.0x0000007001943000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070018a6800`)

|    Change |       Delta |             % |            Size | Objects | Callee                             | Location                                            |
| --------: | ----------: | ------------: | --------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|   removed | -52.632 KiB |  99.9% → 0.0% |  52.6 KiB → 0 B | 154 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090010aa800` |
| +25120.0% |  +9.812 KiB | 0.1% → 100.0% | 40 B → 9.85 KiB | 1 → 261 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070018a6c00`)

|  Change |       Delta |             % |           Size | Objects | Callee                                  | Location                                         |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------- | ------------------------------------------------ |
| removed | -52.523 KiB | 100.0% → 0.0% | 52.5 KiB → 0 B | 154 → 0 | `invokeSpecial(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`     |
|     new |  +9.742 KiB | 0.0% → 100.0% | 0 B → 9.74 KiB | 0 → 259 | `delegate(Object, Object, int, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070018abc00`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -52.289 KiB | 100.0% → 0.0% | 52.3 KiB → 0 B | 150 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001430000`)

|  Change |       Delta |             % |           Size | Objects | Callee                                  | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -52.289 KiB | 100.0% → 0.0% | 52.3 KiB → 0 B | 150 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x00000070018b3000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070018a5c00`)

|  Change |       Delta |             % |           Size | Objects | Callee                                     | Location                                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed | -51.929 KiB | 100.0% → 0.0% | 51.9 KiB → 0 B | 141 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070018a5800`)

|  Change |       Delta |             % |           Size | Objects | Callee                                  | Location                                         |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------- | ------------------------------------------------ |
| removed | -50.445 KiB | 100.0% → 0.0% | 50.4 KiB → 0 B | 120 → 0 | `delegate(Object, Object, Object)`      | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `delegate(Object, Object, int, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010abc00`)

|  Change |       Delta |             % |           Size | Objects | Callee                                     | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed |   -64.5 KiB | 100.0% → 0.0% | 64.5 KiB → 0 B | 248 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090011c5c00` |
|     new | +25.335 KiB | 0.0% → 100.0% | 0 B → 25.3 KiB | 0 → 311 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|     new |       +40 B |   0.0% → 0.2% |     0 B → 40 B |   0 → 1 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070018b3c00`)

|  Change |       Delta |             % |           Size | Objects | Callee                                  | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -40.187 KiB | 100.0% → 0.0% | 40.2 KiB → 0 B | 148 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000009001109400` |
|     new |  +9.671 KiB | 0.0% → 100.0% | 0 B → 9.67 KiB | 0 → 256 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeVirtual(Object, Object, int)` (`java.lang.invoke.LambdaForm$DMH.0x00000070018b3000`)

|  Change |       Delta |             % |           Size | Objects | Callee                                   | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| removed | -40.187 KiB | 100.0% → 0.0% | 40.2 KiB → 0 B | 148 → 0 | `compile(int)`                           | `org.codehaus.groovy.control.CompilationUnit` |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `getNumberOfViolationsWithPriority(int)` | `org.codenarc.results.FileResults`            |
|     new |  +9.851 KiB | 0.0% → 100.0% | 0 B → 9.85 KiB | 0 → 261 | `getNumberOfViolationsWithPriority(int)` | `org.codenarc.results.DirectoryResults`       |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700193e400`)

|  Change |       Delta |              % |                Size | Objects | Callee                                            | Location                                             |
| ------: | ----------: | -------------: | ------------------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed | -19.062 KiB |   63.1% → 0.0% |      19.1 KiB → 0 B | 131 → 0 | `invokeSpecial(Object, Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -18.296 KiB |   60.5% → 0.0% |      18.3 KiB → 0 B | 122 → 0 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000090012a3400` |
|  -75.5% |  -9.007 KiB | 39.5% → 100.0% | 11.9 KiB → 2.92 KiB | 94 → 45 | `invokeVirtual(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001318800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001360c00`)

|  Change |       Delta |              % |                Size |  Objects | Callee                                  | Location                                             |
| ------: | ----------: | -------------: | ------------------: | -------: | --------------------------------------- | ---------------------------------------------------- |
|  -79.0% | -24.812 KiB | 99.8% → 100.0% | 31.4 KiB → 6.61 KiB | 241 → 65 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |       -56 B |    0.2% → 0.0% |          56 B → 0 B |    1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001095800` |
