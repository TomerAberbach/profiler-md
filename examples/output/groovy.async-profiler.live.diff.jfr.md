# Allocated heap profile diff

Allocated 9.18 MiB → 7.94 MiB (-1.234 MiB, -13.5%) over 24,242 samples (397 B → 344 B per sample).

| Category         | Change |      Delta |     % |                Size |         Samples |
| ---------------- | -----: | ---------: | ----: | ------------------: | --------------: |
| Standard library | -13.5% | -1.234 MiB | 99.9% | 9.17 MiB → 7.94 MiB | 24,027 → 24,039 |
| Ours             |  -2.7% |     -208 B |  0.1% | 7.61 KiB → 7.41 KiB |       215 → 203 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |  Delta |            % |                Size |   Samples | Function                                                | Location                                                                        |
| ------: | -----: | -----------: | ------------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
|   +9.5% | +880 B |         0.1% | 9.02 KiB → 9.88 KiB | 105 → 115 | `compile(String)`                                       | `java.util.regex.Pattern`                                                       |
|  +70.0% | +392 B |        <0.1% |       560 B → 952 B |   10 → 17 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`      |
| +142.9% | +160 B |        <0.1% |       112 B → 272 B |     2 → 6 | `visitConstantExpression(ConstantExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |
|  +66.7% | +160 B |        <0.1% |       240 B → 400 B |    6 → 10 | `createRange(Object, Object, boolean, boolean)`         | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
|     new | +128 B | 0.0% → <0.1% |         0 B → 128 B |     0 → 4 | `convertStringWithWildcardsToRegex(String)`             | `org.codenarc.util.WildcardPattern`                                             |
|  +70.0% | +112 B |        <0.1% |       160 B → 272 B |     4 → 6 | `markVariableAsReferenced(String, VariableExpression)`  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|     new | +104 B | 0.0% → <0.1% |         0 B → 104 B |     0 → 3 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                  |
| +166.7% |  +80 B |        <0.1% |        48 B → 128 B |     1 → 4 | `<init>(String, boolean)`                               | `org.codenarc.util.WildcardPattern`                                             |
|     new |  +80 B | 0.0% → <0.1% |          0 B → 80 B |     0 → 2 | `visitDeclarationExpression(DeclarationExpression)`     | `org.codenarc.rule.naming.VariableNameAstVisitor`                               |
|  +14.3% |  +72 B |        <0.1% |       504 B → 576 B |     7 → 8 | `doCall(Object)`                                        | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
|     new |  +72 B | 0.0% → <0.1% |          0 B → 72 B |     0 → 3 | `visitVariableExpression(VariableExpression)`           | `org.codenarc.rule.convention.NoFloatAstVisitor`                                |
|     new |  +64 B | 0.0% → <0.1% |          0 B → 64 B |     0 → 2 | `addViolation(ASTNode, String)`                         | `org.codenarc.rule.AbstractAstVisitor`                                          |
|  +50.0% |  +64 B |        <0.1% |       128 B → 192 B |     5 → 7 | `getViolationLocationString(Violation, String)`         | `org.codenarc.report.TextReportWriter`                                          |
|  +25.0% |  +56 B |        <0.1% |       224 B → 280 B |     4 → 5 | `filter(Predicate)`                                     | `java.util.stream.ReferencePipeline`                                            |
| +100.0% |  +56 B |        <0.1% |        56 B → 112 B |     1 → 2 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                      |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`         | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                      |
| +100.0% |  +56 B |        <0.1% |        56 B → 112 B |     1 → 2 | `visitBlockStatement(BlockStatement)`                   | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 2 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`                |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `visitClassComplete(ClassNode)`                         | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`       |
| +100.0% |  +56 B |        <0.1% |        56 B → 112 B |     1 → 2 | `removeAnyViolationsForSameLine(int)`                   | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |

##### Standard library

|  Change |  Delta |            % |                Size |   Samples | Function                                        | Location                                                |
| ------: | -----: | -----------: | ------------------: | --------: | ----------------------------------------------- | ------------------------------------------------------- |
|   +9.5% | +880 B |         0.1% | 9.02 KiB → 9.88 KiB | 105 → 115 | `compile(String)`                               | `java.util.regex.Pattern`                               |
|  +66.7% | +160 B |        <0.1% |       240 B → 400 B |    6 → 10 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  +25.0% |  +56 B |        <0.1% |       224 B → 280 B |     4 → 5 | `filter(Predicate)`                             | `java.util.stream.ReferencePipeline`                    |
|  +50.0% |  +48 B |        <0.1% |        96 B → 144 B |     4 → 6 | `record(Object, int)`                           | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |
|     new |  +48 B | 0.0% → <0.1% |          0 B → 48 B |     0 → 2 | `asList(Object[])`                              | `java.util.Arrays`                                      |
| +100.0% |  +24 B |        <0.1% |         24 B → 48 B |     1 → 2 | `<init>()`                                      | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |

##### Ours

|  Change |  Delta |            % |          Size | Samples | Function                                                | Location                                                                        |
| ------: | -----: | -----------: | ------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  +70.0% | +392 B |        <0.1% | 560 B → 952 B | 10 → 17 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`      |
| +142.9% | +160 B |        <0.1% | 112 B → 272 B |   2 → 6 | `visitConstantExpression(ConstantExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |
|     new | +128 B | 0.0% → <0.1% |   0 B → 128 B |   0 → 4 | `convertStringWithWildcardsToRegex(String)`             | `org.codenarc.util.WildcardPattern`                                             |
|  +70.0% | +112 B |        <0.1% | 160 B → 272 B |   4 → 6 | `markVariableAsReferenced(String, VariableExpression)`  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|     new | +104 B | 0.0% → <0.1% |   0 B → 104 B |   0 → 3 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                  |
| +166.7% |  +80 B |        <0.1% |  48 B → 128 B |   1 → 4 | `<init>(String, boolean)`                               | `org.codenarc.util.WildcardPattern`                                             |
|     new |  +80 B | 0.0% → <0.1% |    0 B → 80 B |   0 → 2 | `visitDeclarationExpression(DeclarationExpression)`     | `org.codenarc.rule.naming.VariableNameAstVisitor`                               |
|  +14.3% |  +72 B |        <0.1% | 504 B → 576 B |   7 → 8 | `doCall(Object)`                                        | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
|     new |  +72 B | 0.0% → <0.1% |    0 B → 72 B |   0 → 3 | `visitVariableExpression(VariableExpression)`           | `org.codenarc.rule.convention.NoFloatAstVisitor`                                |
|     new |  +64 B | 0.0% → <0.1% |    0 B → 64 B |   0 → 2 | `addViolation(ASTNode, String)`                         | `org.codenarc.rule.AbstractAstVisitor`                                          |
|  +50.0% |  +64 B |        <0.1% | 128 B → 192 B |   5 → 7 | `getViolationLocationString(Violation, String)`         | `org.codenarc.report.TextReportWriter`                                          |
| +100.0% |  +56 B |        <0.1% |  56 B → 112 B |   1 → 2 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                      |
|     new |  +56 B | 0.0% → <0.1% |    0 B → 56 B |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`         | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                      |
| +100.0% |  +56 B |        <0.1% |  56 B → 112 B |   1 → 2 | `visitBlockStatement(BlockStatement)`                   | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
|     new |  +56 B | 0.0% → <0.1% |    0 B → 56 B |   0 → 2 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`                |
|     new |  +56 B | 0.0% → <0.1% |    0 B → 56 B |   0 → 1 | `visitClassComplete(ClassNode)`                         | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`       |
| +100.0% |  +56 B |        <0.1% |  56 B → 112 B |   1 → 2 | `removeAnyViolationsForSameLine(int)`                   | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |
|     new |  +56 B | 0.0% → <0.1% |    0 B → 56 B |   0 → 1 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.imports.ImportFromSunPackagesRule`                           |
|     new |  +56 B | 0.0% → <0.1% |    0 B → 56 B |   0 → 1 | `getNumberOfViolationsWithPriority(int, boolean)`       | `org.codenarc.results.FileResults`                                              |
|     new |  +48 B | 0.0% → <0.1% |    0 B → 48 B |   0 → 1 | `hasOpeningBraceOnSameLine(MethodNode)`                 | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                        |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size |   Samples | Function                                                      | Location                                                 |
| ------: | ---------: | -----------: | ------------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------- |
|  -15.1% | -1.484 KiB |         0.1% | 9.84 KiB → 8.36 KiB | 126 → 107 | `matcher(CharSequence)`                                       | `java.util.regex.Pattern`                                |
|  -14.6% |     -336 B |        <0.1% | 2.25 KiB → 1.92 KiB |   48 → 41 | `<init>()`                                                    | `java.util.HashSet`                                      |
|  -41.7% |     -320 B |        <0.1% |       768 B → 448 B |    12 → 7 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`           |
|  -29.0% |     -288 B |        <0.1% |       992 B → 704 B |   20 → 16 | `matches(String)`                                             | `org.codenarc.util.WildcardPattern`                      |
|  -36.4% |     -224 B |        <0.1% |       616 B → 392 B |   20 → 12 | `writeViolation(Writer, Violation, String)`                   | `org.codenarc.report.TextReportWriter`                   |
|  -38.1% |     -192 B |        <0.1% |       504 B → 312 B |   21 → 13 | `isCase(Object, Object)`                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`      |
| removed |     -192 B | <0.1% → 0.0% |         192 B → 0 B |     6 → 0 | `shouldApplyThisRuleTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                         |
|  -83.3% |     -160 B |        <0.1% |        192 B → 32 B |     6 → 1 | `checkForCorrectColumn(ASTNode, String, int)`                 | `org.codenarc.rule.formatting.IndentationAstVisitor`     |
|  -25.6% |     -160 B |        <0.1% |       624 B → 464 B |   39 → 29 | `valueOf(int)`                                                | `java.lang.Integer`                                      |
|  -57.1% |     -128 B |        <0.1% |        224 B → 96 B |    10 → 4 | `<init>()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                   |
|  -83.3% |      -80 B |        <0.1% |         96 B → 16 B |     6 → 1 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  -76.9% |      -80 B |        <0.1% |        104 B → 24 B |     3 → 1 | `processMethodOrConstructorCall(MethodCall)`                  | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor` |
|   -8.3% |      -72 B |        <0.1% |       864 B → 792 B |   36 → 33 | `toString()`                                                  | `java.lang.StringBuilder`                                |
|  -75.0% |      -72 B |        <0.1% |         96 B → 24 B |     4 → 1 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                         |
| removed |      -72 B | <0.1% → 0.0% |          72 B → 0 B |     1 → 0 | `findReference(SourceCode, String, String)`                   | `org.codenarc.rule.imports.UnusedImportRule`             |
|  -60.0% |      -72 B |        <0.1% |        120 B → 48 B |     5 → 2 | `visitVariableExpression(VariableExpression)`                 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor` |
| removed |      -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `collectAllPrivateFields(ModuleNode)`                         | `org.codenarc.rule.unused.UnusedPrivateFieldRule`        |
| removed |      -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `processImports(SourceCode, List)`                            | `org.codenarc.rule.imports.UnusedImportRule`             |
| removed |      -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `getViolations(AstVisitor, SourceCode)`                       | `org.codenarc.rule.unused.UnusedPrivateFieldRule`        |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `addClosureFieldsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`               |

##### Standard library

|  Change |      Delta |            % |                Size |   Samples | Function                                              | Location                                            |
| ------: | ---------: | -----------: | ------------------: | --------: | ----------------------------------------------------- | --------------------------------------------------- |
|  -15.1% | -1.484 KiB |         0.1% | 9.84 KiB → 8.36 KiB | 126 → 107 | `matcher(CharSequence)`                               | `java.util.regex.Pattern`                           |
|  -14.6% |     -336 B |        <0.1% | 2.25 KiB → 1.92 KiB |   48 → 41 | `<init>()`                                            | `java.util.HashSet`                                 |
|  -38.1% |     -192 B |        <0.1% |       504 B → 312 B |   21 → 13 | `isCase(Object, Object)`                              | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  -25.6% |     -160 B |        <0.1% |       624 B → 464 B |   39 → 29 | `valueOf(int)`                                        | `java.lang.Integer`                                 |
|   -8.3% |      -72 B |        <0.1% |       864 B → 792 B |   36 → 33 | `toString()`                                          | `java.lang.StringBuilder`                           |
|  -66.7% |      -48 B |        <0.1% |         72 B → 24 B |     3 → 1 | `getText()`                                           | `org.codehaus.groovy.ast.expr.PropertyExpression`   |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |     2 → 0 | `createPojoWrapper(Object, Class)`                    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |      -40 B | <0.1% → 0.0% |          40 B → 0 B |     1 → 0 | `createArray(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.ArrayUtil`             |

##### Ours

|  Change |  Delta |            % |          Size | Samples | Function                                                      | Location                                                              |
| ------: | -----: | -----------: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------------------------- |
|  -41.7% | -320 B |        <0.1% | 768 B → 448 B |  12 → 7 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                        |
|  -29.0% | -288 B |        <0.1% | 992 B → 704 B | 20 → 16 | `matches(String)`                                             | `org.codenarc.util.WildcardPattern`                                   |
|  -36.4% | -224 B |        <0.1% | 616 B → 392 B | 20 → 12 | `writeViolation(Writer, Violation, String)`                   | `org.codenarc.report.TextReportWriter`                                |
| removed | -192 B | <0.1% → 0.0% |   192 B → 0 B |   6 → 0 | `shouldApplyThisRuleTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                      |
|  -83.3% | -160 B |        <0.1% |  192 B → 32 B |   6 → 1 | `checkForCorrectColumn(ASTNode, String, int)`                 | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |
|  -57.1% | -128 B |        <0.1% |  224 B → 96 B |  10 → 4 | `<init>()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                                |
|  -83.3% |  -80 B |        <0.1% |   96 B → 16 B |   6 → 1 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                            |
|  -76.9% |  -80 B |        <0.1% |  104 B → 24 B |   3 → 1 | `processMethodOrConstructorCall(MethodCall)`                  | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`              |
|  -75.0% |  -72 B |        <0.1% |   96 B → 24 B |   4 → 1 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                      |
| removed |  -72 B | <0.1% → 0.0% |    72 B → 0 B |   1 → 0 | `findReference(SourceCode, String, String)`                   | `org.codenarc.rule.imports.UnusedImportRule`                          |
|  -60.0% |  -72 B |        <0.1% |  120 B → 48 B |   5 → 2 | `visitVariableExpression(VariableExpression)`                 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`              |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `collectAllPrivateFields(ModuleNode)`                         | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                     |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `processImports(SourceCode, List)`                            | `org.codenarc.rule.imports.UnusedImportRule`                          |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `getViolations(AstVisitor, SourceCode)`                       | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                     |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `addClosureFieldsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                            |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `visitImports(ModuleNode)`                                    | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`           |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   2 → 0 | `visitAnnotations(AnnotatedNode)`                             | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`          |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `visitClosureExpression(ClosureExpression)`                   | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |           % |                Size |   Samples | Function                                                      | Location                                                              |
| ------: | -----------: | ----------: | ------------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------------------------- |
|     new | +238.539 KiB | 0.0% → 2.9% |       0 B → 239 KiB | 0 → 2,213 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000301322800`                   |
|  +34.2% | +182.531 KiB | 5.7% → 8.8% |   534 KiB → 717 KiB |   44 → 55 | `getText()`                                                   | `org.codenarc.source.SourceFile`                                      |
|     new | +111.414 KiB | 0.0% → 1.4% |       0 B → 111 KiB |   0 → 575 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030134c800`                   |
|  +42.4% | +104.484 KiB | 2.6% → 4.3% |   246 KiB → 351 KiB |   24 → 25 | `<init>(Object, Object)`                                      | `groovy.lang.Closure`                                                 |
|  +42.5% | +104.203 KiB | 2.6% → 4.3% |   245 KiB → 350 KiB |   15 → 16 | `<clinit>()`                                                  | `groovy.lang.Closure`                                                 |
|  +41.7% | +102.812 KiB | 2.6% → 4.3% |   247 KiB → 350 KiB |        16 | `<clinit>()`                                                  | `org.codenarc.CodeNarc`                                               |
|  +54.2% |  +89.296 KiB | 1.8% → 3.1% |   165 KiB → 254 KiB | 832 → 788 | `put(Object, Object)`                                         | `java.util.HashMap`                                                   |
| +149.7% |  +48.062 KiB | 0.3% → 1.0% | 32.1 KiB → 80.2 KiB |     5 → 8 | `getRawLine(SourceCode, int)`                                 | `org.codenarc.util.AstUtil`                                           |
| +149.4% |  +48.015 KiB | 0.3% → 1.0% | 32.1 KiB → 80.2 KiB |     6 → 8 | `findFirstNonAnnotationLine(ASTNode, SourceCode)`             | `org.codenarc.util.AstUtil`                                           |
|  +33.0% |  +47.843 KiB | 1.5% → 2.4% |   145 KiB → 193 KiB |   27 → 35 | `getLines()`                                                  | `org.codenarc.source.AbstractSourceCode`                              |
| +103.8% |  +46.992 KiB | 0.5% → 1.1% | 45.3 KiB → 92.3 KiB | 127 → 139 | `buildRuleSet()`                                              | `org.codenarc.CodeNarcRunner`                                         |
| +100.8% |  +45.468 KiB | 0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `doCall(Object)`                                              | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6` |
| +100.8% |  +45.468 KiB | 0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `createInitialRuleSetFromFiles()`                             | `org.codenarc.CodeNarcRunner`                                         |
| +100.8% |  +45.468 KiB | 0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `createInitialRuleSet()`                                      | `org.codenarc.CodeNarcRunner`                                         |
|  +98.5% |  +44.445 KiB | 0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 136 | `<init>(String)`                                              | `org.codenarc.ruleset.XmlFileRuleSet`                                 |
|  +98.5% |  +44.445 KiB | 0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 136 | `loadRuleSetFile(String)`                                     | `org.codenarc.ruleset.RuleSetUtil`                                    |
|  +98.6% |  +44.429 KiB | 0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 121 → 135 | `<init>(Reader)`                                              | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
|  +98.5% |  +44.406 KiB | 0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 135 | `doCall(Object)`                                              | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                       |
|     new |  +43.414 KiB | 0.0% → 0.5% |      0 B → 43.4 KiB |   0 → 178 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301400400`                   |
|     new |  +35.828 KiB | 0.0% → 0.4% |      0 B → 35.8 KiB | 0 → 1,337 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000030131ac00`                   |

##### Standard library

|  Change |        Delta |           % |                Size |       Samples | Function                                                      | Location                                                |
| ------: | -----------: | ----------: | ------------------: | ------------: | ------------------------------------------------------------- | ------------------------------------------------------- |
|     new | +238.539 KiB | 0.0% → 2.9% |       0 B → 239 KiB |     0 → 2,213 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000301322800`     |
|     new | +111.414 KiB | 0.0% → 1.4% |       0 B → 111 KiB |       0 → 575 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030134c800`     |
|  +42.4% | +104.484 KiB | 2.6% → 4.3% |   246 KiB → 351 KiB |       24 → 25 | `<init>(Object, Object)`                                      | `groovy.lang.Closure`                                   |
|  +42.5% | +104.203 KiB | 2.6% → 4.3% |   245 KiB → 350 KiB |       15 → 16 | `<clinit>()`                                                  | `groovy.lang.Closure`                                   |
|  +54.2% |  +89.296 KiB | 1.8% → 3.1% |   165 KiB → 254 KiB |     832 → 788 | `put(Object, Object)`                                         | `java.util.HashMap`                                     |
|     new |  +43.414 KiB | 0.0% → 0.5% |      0 B → 43.4 KiB |       0 → 178 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301400400`     |
|     new |  +35.828 KiB | 0.0% → 0.4% |      0 B → 35.8 KiB |     0 → 1,337 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000030131ac00`     |
|     new |  +32.648 KiB | 0.0% → 0.4% |      0 B → 32.6 KiB |       0 → 810 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013dac00`     |
|     new |  +29.679 KiB | 0.0% → 0.4% |      0 B → 29.7 KiB |       0 → 441 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x00000003010c8400`     |
|     new |  +20.828 KiB | 0.0% → 0.3% |      0 B → 20.8 KiB |       0 → 517 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000003013f5400`     |
| +291.1% |  +18.921 KiB | 0.1% → 0.3% |  6.5 KiB → 25.4 KiB |     164 → 172 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                      |
|  +22.1% |  +18.085 KiB | 0.9% → 1.2% |    82 KiB → 100 KiB | 1,454 → 1,429 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  +27.6% |  +16.976 KiB | 0.7% → 1.0% | 61.4 KiB → 78.4 KiB | 1,064 → 1,023 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  +25.3% |  +12.257 KiB | 0.5% → 0.7% | 48.5 KiB → 60.8 KiB |     774 → 772 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  +66.9% |  +12.031 KiB | 0.2% → 0.4% |     18 KiB → 30 KiB |      102 → 91 | `append(String)`                                              | `java.lang.StringBuilder`                               |
|   +6.4% |   +11.75 KiB | 2.0% → 2.4% |   185 KiB → 197 KiB | 2,254 → 2,230 | `visit(GroovyCodeVisitor)`                                    | `org.codehaus.groovy.ast.expr.MethodCallExpression`     |
|     new |  +11.148 KiB | 0.0% → 0.1% |      0 B → 11.1 KiB |       0 → 135 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003010d6400`     |
|     new |  +10.937 KiB | 0.0% → 0.1% |      0 B → 10.9 KiB |       0 → 281 | `linkToCallSite(Object, Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000000301940400`     |
|  +42.6% |  +10.054 KiB | 0.3% → 0.4% | 23.6 KiB → 33.7 KiB |       23 → 25 | `callCurrent(GroovyObject, Object)`                           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|     new |  +10.007 KiB | 0.0% → 0.1% |        0 B → 10 KiB |        0 → 89 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301392800`     |

##### Ours

|    Change |        Delta |            % |                Size |   Samples | Function                                          | Location                                                              |
| --------: | -----------: | -----------: | ------------------: | --------: | ------------------------------------------------- | --------------------------------------------------------------------- |
|    +34.2% | +182.531 KiB |  5.7% → 8.8% |   534 KiB → 717 KiB |   44 → 55 | `getText()`                                       | `org.codenarc.source.SourceFile`                                      |
|    +41.7% | +102.812 KiB |  2.6% → 4.3% |   247 KiB → 350 KiB |        16 | `<clinit>()`                                      | `org.codenarc.CodeNarc`                                               |
|   +149.7% |  +48.062 KiB |  0.3% → 1.0% | 32.1 KiB → 80.2 KiB |     5 → 8 | `getRawLine(SourceCode, int)`                     | `org.codenarc.util.AstUtil`                                           |
|   +149.4% |  +48.015 KiB |  0.3% → 1.0% | 32.1 KiB → 80.2 KiB |     6 → 8 | `findFirstNonAnnotationLine(ASTNode, SourceCode)` | `org.codenarc.util.AstUtil`                                           |
|    +33.0% |  +47.843 KiB |  1.5% → 2.4% |   145 KiB → 193 KiB |   27 → 35 | `getLines()`                                      | `org.codenarc.source.AbstractSourceCode`                              |
|   +103.8% |  +46.992 KiB |  0.5% → 1.1% | 45.3 KiB → 92.3 KiB | 127 → 139 | `buildRuleSet()`                                  | `org.codenarc.CodeNarcRunner`                                         |
|   +100.8% |  +45.468 KiB |  0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `doCall(Object)`                                  | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6` |
|   +100.8% |  +45.468 KiB |  0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `createInitialRuleSetFromFiles()`                 | `org.codenarc.CodeNarcRunner`                                         |
|   +100.8% |  +45.468 KiB |  0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `createInitialRuleSet()`                          | `org.codenarc.CodeNarcRunner`                                         |
|    +98.5% |  +44.445 KiB |  0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 136 | `<init>(String)`                                  | `org.codenarc.ruleset.XmlFileRuleSet`                                 |
|    +98.5% |  +44.445 KiB |  0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 136 | `loadRuleSetFile(String)`                         | `org.codenarc.ruleset.RuleSetUtil`                                    |
|    +98.6% |  +44.429 KiB |  0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 121 → 135 | `<init>(Reader)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
|    +98.5% |  +44.406 KiB |  0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 135 | `doCall(Object)`                                  | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                       |
|    +60.8% |  +26.906 KiB |  0.5% → 0.9% | 44.3 KiB → 71.2 KiB | 109 → 125 | `doCall(Object)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`    |
|    +60.8% |  +26.906 KiB |  0.5% → 0.9% | 44.3 KiB → 71.2 KiB | 109 → 125 | `loadRuleElements(Node)`                          | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
|   +142.1% |  +16.953 KiB |  0.1% → 0.4% | 11.9 KiB → 28.9 KiB | 130 → 134 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodVisitor`                             |
|  +5004.7% |  +16.812 KiB | <0.1% → 0.2% |    344 B → 17.1 KiB |     9 → 6 | `visitMethodEx(MethodNode)`                       | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`      |
|  +2328.6% |  +16.554 KiB | <0.1% → 0.2% |    728 B → 17.3 KiB |    10 → 7 | `validateXml(String)`                             | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
| +10530.0% |  +16.453 KiB | <0.1% → 0.2% |    160 B → 16.6 KiB |     5 → 8 | `addViolation(MethodNode, String)`                | `org.codenarc.rule.AbstractMethodVisitor`                             |
|  +5026.8% |  +16.101 KiB | <0.1% → 0.2% |    328 B → 16.4 KiB |     7 → 8 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.basic.EmptyMethodAstVisitor`                       |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                 | Location                                                                    |
| ------: | -----------: | ------------: | ------------------: | --------------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|   -8.1% | -516.117 KiB | 68.2% → 72.4% | 6.25 MiB → 5.75 MiB | 24,167 → 24,166 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|   -8.0% | -509.414 KiB | 67.9% → 72.2% | 6.23 MiB → 5.73 MiB | 23,905 → 23,883 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|   -7.9% | -503.726 KiB | 68.0% → 72.4% | 6.24 MiB → 5.75 MiB | 24,173 → 24,174 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|   -7.8% | -469.453 KiB | 63.8% → 67.9% |  5.86 MiB → 5.4 MiB | 22,335 → 22,295 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -7.8% | -468.531 KiB | 63.8% → 67.9% | 5.85 MiB → 5.39 MiB | 22,306 → 22,276 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   -7.8% | -465.078 KiB | 63.8% → 68.0% |  5.86 MiB → 5.4 MiB | 22,354 → 22,316 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   -7.7% | -463.695 KiB | 63.8% → 68.0% |  5.86 MiB → 5.4 MiB | 22,357 → 22,318 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -7.7% | -461.375 KiB | 63.8% → 68.1% | 5.86 MiB → 5.41 MiB | 22,361 → 22,323 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -7.5% | -456.742 KiB | 64.5% → 68.9% | 5.92 MiB → 5.47 MiB | 23,261 → 23,242 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|   -6.2% | -451.429 KiB | 77.9% → 84.5% | 7.15 MiB → 6.71 MiB | 24,223 → 24,224 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
|   -7.4% | -448.406 KiB | 64.5% → 69.0% | 5.92 MiB → 5.48 MiB | 23,399 → 23,397 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|   -6.0% | -439.609 KiB | 77.8% → 84.5% | 7.14 MiB → 6.71 MiB |          24,217 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  -10.2% | -402.578 KiB | 42.2% → 43.8% | 3.87 MiB → 3.48 MiB |        109 → 95 | `loadClass(String)`                                      | `java.lang.ClassLoader`                                                     |
|  -17.4% | -398.382 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,366 → 3,345 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -17.3% | -398.335 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,407 → 3,388 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -17.4% | -398.203 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,356 → 3,342 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                    |
|  -17.4% | -398.179 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,357 → 3,344 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                    |
|  -17.1% |  -396.71 KiB | 24.7% → 23.7% | 2.27 MiB → 1.88 MiB |   4,148 → 4,194 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| removed | -223.632 KiB |   2.4% → 0.0% |       224 KiB → 0 B |       2,176 → 0 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000009001323400`                         |
|   -5.7% | -127.164 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |           8 → 5 | `callGetProperty(Object)`                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                     |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                                         | Location                                                |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------- | ------------------------------------------------------- |
|   -8.1% | -516.117 KiB | 68.2% → 72.4% | 6.25 MiB → 5.75 MiB | 24,167 → 24,166 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                      |
|   -7.5% | -456.742 KiB | 64.5% → 68.9% | 5.92 MiB → 5.47 MiB | 23,261 → 23,242 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                      |
|   -7.4% | -448.406 KiB | 64.5% → 69.0% | 5.92 MiB → 5.48 MiB | 23,399 → 23,397 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                      |
|   -6.0% | -439.609 KiB | 77.8% → 84.5% | 7.14 MiB → 6.71 MiB |          24,217 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                      |
|  -10.2% | -402.578 KiB | 42.2% → 43.8% | 3.87 MiB → 3.48 MiB |        109 → 95 | `loadClass(String)`                                              | `java.lang.ClassLoader`                                 |
| removed | -223.632 KiB |   2.4% → 0.0% |       224 KiB → 0 B |       2,176 → 0 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000009001323400`     |
|   -5.7% | -127.164 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |           8 → 5 | `callGetProperty(Object)`                                        | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|   -5.7% | -127.015 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |           3 → 2 | `callStatic(Class, Object, Object, Object)`                      | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| removed | -107.375 KiB |   1.1% → 0.0% |       107 KiB → 0 B |         559 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000900134a000`     |
| removed |  -46.531 KiB |   0.5% → 0.0% |      46.5 KiB → 0 B |         197 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)`    | `java.lang.invoke.LambdaForm$MH.0x0000009001401000`     |
|  -10.7% |  -44.781 KiB |   4.4% → 4.6% |   417 KiB → 372 KiB |       106 → 100 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
| removed |  -37.414 KiB |   0.4% → 0.0% |      37.4 KiB → 0 B |       1,371 → 0 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000900131f800`     |
| removed |  -29.718 KiB |   0.3% → 0.0% |      29.7 KiB → 0 B |         757 → 0 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000090013e0800`     |
|   -8.9% |  -29.398 KiB |   3.5% → 3.7% |   331 KiB → 302 KiB |   4,646 → 4,560 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|   -8.0% |  -27.609 KiB |   3.7% → 3.9% |   346 KiB → 318 KiB |   4,866 → 4,763 | `visitMethod(MethodNode)`                                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| removed |  -26.882 KiB |   0.3% → 0.0% |      26.9 KiB → 0 B |         448 → 0 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x00000090010c8400`     |
|  -55.3% |  -25.281 KiB |   0.5% → 0.3% | 45.7 KiB → 20.5 KiB |       207 → 147 | `newInstance()`                                                  | `java.lang.Class`                                       |
|   -7.5% |  -23.718 KiB |   3.4% → 3.6% |   315 KiB → 292 KiB |   4,376 → 4,322 | `visitBlockStatement(BlockStatement)`                            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|   -7.0% |  -20.226 KiB |   3.1% → 3.3% |   290 KiB → 270 KiB |   3,930 → 3,885 | `visitExpressionStatement(ExpressionStatement)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| removed |  -19.703 KiB |   0.2% → 0.0% |      19.7 KiB → 0 B |         500 → 0 | `linkToCallSite(Object, int, int, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x00000090013f8000`     |

##### Ours

| Change |        Delta |             % |                Size |         Samples | Function                                         | Location                                                                    |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
|  -8.0% | -509.414 KiB | 67.9% → 72.2% | 6.23 MiB → 5.73 MiB | 23,905 → 23,883 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
|  -7.9% | -503.726 KiB | 68.0% → 72.4% | 6.24 MiB → 5.75 MiB | 24,173 → 24,174 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
|  -7.8% | -469.453 KiB | 63.8% → 67.9% |  5.86 MiB → 5.4 MiB | 22,335 → 22,295 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -7.8% | -468.531 KiB | 63.8% → 67.9% | 5.85 MiB → 5.39 MiB | 22,306 → 22,276 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -7.8% | -465.078 KiB | 63.8% → 68.0% |  5.86 MiB → 5.4 MiB | 22,354 → 22,316 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -7.7% | -463.695 KiB | 63.8% → 68.0% |  5.86 MiB → 5.4 MiB | 22,357 → 22,318 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -7.7% | -461.375 KiB | 63.8% → 68.1% | 5.86 MiB → 5.41 MiB | 22,361 → 22,323 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -6.2% | -451.429 KiB | 77.9% → 84.5% | 7.15 MiB → 6.71 MiB | 24,223 → 24,224 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| -17.4% | -398.382 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,366 → 3,345 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| -17.3% | -398.335 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,407 → 3,388 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| -17.4% | -398.203 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,356 → 3,342 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| -17.4% | -398.179 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,357 → 3,344 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| -17.1% |  -396.71 KiB | 24.7% → 23.7% | 2.27 MiB → 1.88 MiB |   4,148 → 4,194 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  -5.7% | -127.015 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |           3 → 2 | `<clinit>()`                                     | `org.gmetrics.metric.MetricLevel`                                           |
|  -5.7% | -127.015 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |           3 → 2 | `<init>()`                                       | `org.gmetrics.metric.AbstractMethodMetric`                                  |
|  -5.7% | -127.015 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |           3 → 2 | `<init>()`                                       | `org.gmetrics.metric.abc.AbcMetric`                                         |
|  -5.7% | -126.976 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |               3 | `createMetric()`                                 | `org.codenarc.rule.size.AbcMetricAstVisitor`                                |
|  -5.7% | -126.945 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |               4 | `getMetric()`                                    | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
|  -5.5% | -123.546 KiB | 24.0% → 26.2% |  2.2 MiB → 2.08 MiB |       109 → 113 | `visitClassEx(ClassNode)`                        | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
|  -3.6% | -111.093 KiB | 32.7% → 36.4% |    3 MiB → 2.89 MiB |   7,110 → 6,928 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |

# Retained heap profile diff

Retained 1.32 MiB → 958 KiB (-393.906 KiB, -29.1%) over 677 samples → 655 samples (2 KiB → 1.46 KiB per sample).

| Category         | Change |        Delta |      % |               Size |   Samples |
| ---------------- | -----: | -----------: | -----: | -----------------: | --------: |
| Standard library | -29.1% | -393.875 KiB | 100.0% | 1.32 MiB → 958 KiB | 673 → 652 |
| Ours             | -26.7% |        -32 B |  <0.1% |       120 B → 88 B |     4 → 3 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Ours

| Change | Delta |            % |       Size | Samples | Function                        | Location                               |
| -----: | ----: | -----------: | ---------: | ------: | ------------------------------- | -------------------------------------- |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 2 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change | Delta |            % |       Size | Samples | Function                                                   | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ---------------------------------------------------------- | -------------------------------------- |
| removed | -96 B | <0.1% → 0.0% | 96 B → 0 B |   2 → 0 | `<init>()`                                                 | `java.util.HashSet`                    |
| removed | -64 B | <0.1% → 0.0% | 64 B → 0 B |   2 → 0 | `writeViolation(Writer, Violation, String)`                | `org.codenarc.report.TextReportWriter` |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `createViolationForImport(SourceCode, ImportNode, String)` | `org.codenarc.rule.AbstractRule`       |

##### Ours

|  Change | Delta |            % |       Size | Samples | Function                                                   | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ---------------------------------------------------------- | -------------------------------------- |
| removed | -64 B | <0.1% → 0.0% | 64 B → 0 B |   2 → 0 | `writeViolation(Writer, Violation, String)`                | `org.codenarc.report.TextReportWriter` |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `createViolationForImport(SourceCode, ImportNode, String)` | `org.codenarc.rule.AbstractRule`       |

##### Standard library

|  Change | Delta |            % |       Size | Samples | Function   | Location            |
| ------: | ----: | -----------: | ---------: | ------: | ---------- | ------------------- |
| removed | -96 B | <0.1% → 0.0% | 96 B → 0 B |   2 → 0 | `<init>()` | `java.util.HashSet` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |       Delta |            % |               Size | Samples | Function                                                      | Location                                                           |
| ------: | ----------: | -----------: | -----------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------ |
|     new | +10.937 KiB |  0.0% → 1.1% |     0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013dac00`                |
|     new | +10.937 KiB |  0.0% → 1.1% |     0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000003013f5400`                |
|     new | +10.937 KiB |  0.0% → 1.1% |     0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000000301940400`                |
|     new |  +4.046 KiB |  0.0% → 0.4% |     0 B → 4.05 KiB |   0 → 2 | `<init>(String)`                                              | `org.codenarc.rule.groovyism.ExplicitTypeInstantiationAstVisitor`  |
|     new |  +4.015 KiB |  0.0% → 0.4% |     0 B → 4.02 KiB |   0 → 1 | `$getStaticMetaClass()`                                       | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule$1` |
|     new |  +4.015 KiB |  0.0% → 0.4% |     0 B → 4.02 KiB |   0 → 1 | `<init>(ExplicitArrayListInstantiationRule, Object)`          | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule$1` |
|     new |  +4.015 KiB |  0.0% → 0.4% |     0 B → 4.02 KiB |   0 → 1 | `getAstVisitor()`                                             | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule`   |
|     new |   +2.07 KiB |  0.0% → 0.2% |     0 B → 2.07 KiB |  0 → 27 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x00000003010c8400`                |
|  +32.0% |      +592 B |  0.1% → 0.2% | 1.8 KiB → 2.38 KiB | 27 → 30 | `doCall(Object)`                                              | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2` |
|  +32.0% |      +592 B |  0.1% → 0.2% | 1.8 KiB → 2.38 KiB | 27 → 30 | `loadRuleElements(Node)`                                      | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
|  +54.4% |      +496 B |         0.1% |   912 B → 1.38 KiB | 13 → 18 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                |
|  +19.5% |      +440 B |  0.2% → 0.3% | 2.2 KiB → 2.63 KiB | 37 → 39 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                  |
| +211.5% |      +440 B | <0.1% → 0.1% |      208 B → 648 B |   1 → 4 | `initializeDefaultResourceBundle()`                           | `org.codenarc.report.AbstractReportWriter`                         |
| +211.5% |      +440 B | <0.1% → 0.1% |      208 B → 648 B |   1 → 4 | `doCall(Object)`                                              | `org.codenarc.report.AbstractReportWriter$_closure2`               |
| +211.5% |      +440 B | <0.1% → 0.1% |      208 B → 648 B |   1 → 4 | `doCall()`                                                    | `org.codenarc.report.AbstractReportWriter$_closure2`               |
|     new |      +440 B | 0.0% → <0.1% |        0 B → 440 B |   0 → 2 | `$getStaticMetaClass()`                                       | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`  |
|     new |      +440 B | 0.0% → <0.1% |        0 B → 440 B |   0 → 2 | `<init>()`                                                    | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`  |
|  +20.7% |      +424 B |  0.1% → 0.3% |   2 KiB → 2.41 KiB | 28 → 31 | `<init>(Reader)`                                              | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
|  +20.7% |      +424 B |  0.1% → 0.3% |   2 KiB → 2.41 KiB | 28 → 31 | `doCall(Object)`                                              | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                    |
|  +20.7% |      +424 B |  0.1% → 0.3% |   2 KiB → 2.41 KiB | 28 → 31 | `<init>(String)`                                              | `org.codenarc.ruleset.XmlFileRuleSet`                              |

##### Ours

|  Change |      Delta |            % |                Size |   Samples | Function                                             | Location                                                                       |
| ------: | ---------: | -----------: | ------------------: | --------: | ---------------------------------------------------- | ------------------------------------------------------------------------------ |
|     new | +4.046 KiB |  0.0% → 0.4% |      0 B → 4.05 KiB |     0 → 2 | `<init>(String)`                                     | `org.codenarc.rule.groovyism.ExplicitTypeInstantiationAstVisitor`              |
|     new | +4.015 KiB |  0.0% → 0.4% |      0 B → 4.02 KiB |     0 → 1 | `$getStaticMetaClass()`                              | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule$1`             |
|     new | +4.015 KiB |  0.0% → 0.4% |      0 B → 4.02 KiB |     0 → 1 | `<init>(ExplicitArrayListInstantiationRule, Object)` | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule$1`             |
|     new | +4.015 KiB |  0.0% → 0.4% |      0 B → 4.02 KiB |     0 → 1 | `getAstVisitor()`                                    | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule`               |
|  +32.0% |     +592 B |  0.1% → 0.2% |  1.8 KiB → 2.38 KiB |   27 → 30 | `doCall(Object)`                                     | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`             |
|  +32.0% |     +592 B |  0.1% → 0.2% |  1.8 KiB → 2.38 KiB |   27 → 30 | `loadRuleElements(Node)`                             | `org.codenarc.ruleset.XmlReaderRuleSet`                                        |
| +211.5% |     +440 B | <0.1% → 0.1% |       208 B → 648 B |     1 → 4 | `initializeDefaultResourceBundle()`                  | `org.codenarc.report.AbstractReportWriter`                                     |
| +211.5% |     +440 B | <0.1% → 0.1% |       208 B → 648 B |     1 → 4 | `doCall(Object)`                                     | `org.codenarc.report.AbstractReportWriter$_closure2`                           |
| +211.5% |     +440 B | <0.1% → 0.1% |       208 B → 648 B |     1 → 4 | `doCall()`                                           | `org.codenarc.report.AbstractReportWriter$_closure2`                           |
|     new |     +440 B | 0.0% → <0.1% |         0 B → 440 B |     0 → 2 | `$getStaticMetaClass()`                              | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`              |
|     new |     +440 B | 0.0% → <0.1% |         0 B → 440 B |     0 → 2 | `<init>()`                                           | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`              |
|  +20.7% |     +424 B |  0.1% → 0.3% |    2 KiB → 2.41 KiB |   28 → 31 | `<init>(Reader)`                                     | `org.codenarc.ruleset.XmlReaderRuleSet`                                        |
|  +20.7% |     +424 B |  0.1% → 0.3% |    2 KiB → 2.41 KiB |   28 → 31 | `doCall(Object)`                                     | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                                |
|  +20.7% |     +424 B |  0.1% → 0.3% |    2 KiB → 2.41 KiB |   28 → 31 | `<init>(String)`                                     | `org.codenarc.ruleset.XmlFileRuleSet`                                          |
|  +20.7% |     +424 B |  0.1% → 0.3% |    2 KiB → 2.41 KiB |   28 → 31 | `loadRuleSetFile(String)`                            | `org.codenarc.ruleset.RuleSetUtil`                                             |
|  +19.3% |     +400 B |  0.1% → 0.3% | 2.02 KiB → 2.41 KiB |   29 → 31 | `doCall(Object)`                                     | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`          |
|  +19.3% |     +400 B |  0.1% → 0.3% | 2.02 KiB → 2.41 KiB |   29 → 31 | `createInitialRuleSetFromFiles()`                    | `org.codenarc.CodeNarcRunner`                                                  |
|  +19.3% |     +400 B |  0.1% → 0.3% | 2.02 KiB → 2.41 KiB |   29 → 31 | `createInitialRuleSet()`                             | `org.codenarc.CodeNarcRunner`                                                  |
|  +19.3% |     +400 B |  0.1% → 0.3% | 2.02 KiB → 2.41 KiB |   29 → 31 | `buildRuleSet()`                                     | `org.codenarc.CodeNarcRunner`                                                  |
|   +3.6% |     +384 B |  0.8% → 1.1% | 10.4 KiB → 10.8 KiB | 249 → 275 | `doCall(Object)`                                     | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1` |

##### Standard library

|  Change |       Delta |            % |                Size | Samples | Function                                                      | Location                                            |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|     new | +10.937 KiB |  0.0% → 1.1% |      0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013dac00` |
|     new | +10.937 KiB |  0.0% → 1.1% |      0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000003013f5400` |
|     new | +10.937 KiB |  0.0% → 1.1% |      0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000000301940400` |
|     new |   +2.07 KiB |  0.0% → 0.2% |      0 B → 2.07 KiB |  0 → 27 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x00000003010c8400` |
|  +54.4% |      +496 B |         0.1% |    912 B → 1.38 KiB | 13 → 18 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  +19.5% |      +440 B |  0.2% → 0.3% |  2.2 KiB → 2.63 KiB | 37 → 39 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +25.0% |      +288 B |         0.1% | 1.13 KiB → 1.41 KiB | 17 → 21 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +21.2% |      +288 B |  0.1% → 0.2% | 1.33 KiB → 1.61 KiB | 22 → 25 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| +300.0% |      +216 B |        <0.1% |        72 B → 288 B |       2 | `getClassInfo(Class)`                                         | `org.codehaus.groovy.reflection.ClassInfo`          |
|     new |      +216 B | 0.0% → <0.1% |         0 B → 216 B |   0 → 2 | `visitCastExpression(CastExpression)`                         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  +55.0% |      +176 B | <0.1% → 0.1% |       320 B → 496 B |   7 → 8 | `<init>(Object, Object)`                                      | `groovy.lang.Closure`                               |
|  +10.2% |      +168 B |  0.1% → 0.2% | 1.61 KiB → 1.77 KiB |      26 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +13.0% |      +128 B |         0.1% |    984 B → 1.09 KiB | 16 → 15 | `put(Object, Object)`                                         | `java.util.HashMap`                                 |
| +200.0% |      +112 B |        <0.1% |        56 B → 168 B |   2 → 3 | `<clinit>()`                                                  | `groovy.lang.Closure`                               |
|     new |       +48 B | 0.0% → <0.1% |          0 B → 48 B |   0 → 2 | `visitConstructorCallExpression(ConstructorCallExpression)`   | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  +22.7% |       +40 B |        <0.1% |       176 B → 216 B |   2 → 4 | `<init>(Object[], String[])`                                  | `org.codehaus.groovy.runtime.GStringImpl`           |
|     new |       +40 B | 0.0% → <0.1% |          0 B → 40 B |   0 → 1 | `findMethodHandleType(Class, Class[])`                        | `java.lang.invoke.MethodHandleNatives`              |
|     new |       +40 B | 0.0% → <0.1% |          0 B → 40 B |   0 → 1 | `setProperty(Object, Class, Object, String)`                  | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|     new |       +24 B | 0.0% → <0.1% |          0 B → 24 B |   0 → 1 | `implementsInterface(ClassNode)`                              | `org.codehaus.groovy.ast.ClassNode`                 |
|     new |       +24 B | 0.0% → <0.1% |          0 B → 24 B |   0 → 1 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030134c800` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |               Size |   Samples | Function                                                 | Location                                                                    |
| ------: | -----------: | ------------: | -----------------: | --------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -92.9% | -394.695 KiB |  31.4% → 3.1% | 425 KiB → 30.1 KiB | 373 → 327 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  -92.9% |  -394.57 KiB |  31.4% → 3.1% | 425 KiB → 30.1 KiB | 370 → 327 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  -92.3% | -394.226 KiB |  31.6% → 3.4% | 427 KiB → 32.8 KiB | 405 → 362 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|  -90.0% | -394.101 KiB |  32.4% → 4.6% | 438 KiB → 43.7 KiB | 662 → 639 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|  -89.9% | -394.054 KiB |  32.4% → 4.6% |   438 KiB → 44 KiB | 674 → 650 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
|  -90.0% | -394.031 KiB |  32.4% → 4.6% | 438 KiB → 43.8 KiB | 667 → 646 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  -89.9% | -393.984 KiB |  32.4% → 4.6% |   438 KiB → 44 KiB | 672 → 650 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  -94.4% | -389.906 KiB |  30.5% → 2.4% |   413 KiB → 23 KiB | 241 → 217 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -94.4% | -389.906 KiB |  30.5% → 2.4% |   413 KiB → 23 KiB | 241 → 217 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -94.4% | -389.828 KiB |  30.5% → 2.4% |   413 KiB → 23 KiB | 239 → 217 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -94.4% | -389.781 KiB |  30.5% → 2.4% |   413 KiB → 23 KiB | 238 → 217 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -94.4% | -389.648 KiB |  30.5% → 2.4% | 413 KiB → 22.9 KiB | 236 → 216 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                    |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                    |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|   -6.4% |  -62.101 KiB | 72.2% → 95.4% |  976 KiB → 914 KiB |     3 → 4 | `loadClass(String)`                                      | `java.lang.ClassLoader`                                                     |
| removed |   -10.64 KiB |   0.8% → 0.0% |     10.6 KiB → 0 B |   256 → 0 | `linkToCallSite(Object, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x00000090013e0800`                         |
| removed |  -10.617 KiB |   0.8% → 0.0% |     10.6 KiB → 0 B |   256 → 0 | `linkToCallSite(Object, Object, int, int, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000009001936800`                         |

##### Ours

| Change |        Delta |            % |                Size |   Samples | Function                                         | Location                                                                    |
| -----: | -----------: | -----------: | ------------------: | --------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| -92.3% | -394.226 KiB | 31.6% → 3.4% |  427 KiB → 32.8 KiB | 405 → 362 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| -89.9% | -394.054 KiB | 32.4% → 4.6% |    438 KiB → 44 KiB | 674 → 650 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| -90.0% | -394.031 KiB | 32.4% → 4.6% |  438 KiB → 43.8 KiB | 667 → 646 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| -94.4% | -389.906 KiB | 30.5% → 2.4% |    413 KiB → 23 KiB | 241 → 217 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -94.4% | -389.906 KiB | 30.5% → 2.4% |    413 KiB → 23 KiB | 241 → 217 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -94.4% | -389.828 KiB | 30.5% → 2.4% |    413 KiB → 23 KiB | 239 → 217 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| -94.4% | -389.781 KiB | 30.5% → 2.4% |    413 KiB → 23 KiB | 238 → 217 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -94.4% | -389.648 KiB | 30.5% → 2.4% |  413 KiB → 22.9 KiB | 236 → 216 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -96.6% | -382.734 KiB | 29.3% → 1.4% |  396 KiB → 13.5 KiB | 134 → 120 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| -96.6% | -382.734 KiB | 29.3% → 1.4% |  396 KiB → 13.5 KiB | 134 → 120 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| -96.6% | -382.734 KiB | 29.3% → 1.4% |  396 KiB → 13.5 KiB | 134 → 120 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| -96.6% | -382.734 KiB | 29.3% → 1.4% |  396 KiB → 13.5 KiB | 134 → 120 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| -96.6% | -382.734 KiB | 29.3% → 1.4% |  396 KiB → 13.5 KiB | 134 → 120 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| -84.8% |  -10.484 KiB |  0.9% → 0.2% | 12.4 KiB → 1.88 KiB |   39 → 31 | `getAstVisitor()`                                | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| -41.5% |   -6.625 KiB |  1.2% → 1.0% |   16 KiB → 9.34 KiB |   99 → 95 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| -41.5% |   -6.625 KiB |  1.2% → 1.0% |   16 KiB → 9.34 KiB |   99 → 95 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| -41.5% |   -6.625 KiB |  1.2% → 1.0% |   16 KiB → 9.34 KiB |   99 → 95 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -41.1% |   -6.445 KiB |  1.2% → 1.0% | 15.7 KiB → 9.23 KiB |        92 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| -44.4% |   -5.179 KiB |  0.9% → 0.7% | 11.7 KiB → 6.48 KiB | 129 → 105 | `doCall(Object)`                                 | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2`     |
| -44.1% |   -5.148 KiB |  0.9% → 0.7% | 11.7 KiB → 6.52 KiB | 129 → 106 | `writePackageViolations(Writer, Results)`        | `org.codenarc.report.TextReportWriter`                                      |

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                                                         | Location                                                |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------- | ------------------------------------------------------- |
|  -92.9% | -394.695 KiB |  31.4% → 3.1% |  425 KiB → 30.1 KiB | 373 → 327 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                      |
|  -92.9% |  -394.57 KiB |  31.4% → 3.1% |  425 KiB → 30.1 KiB | 370 → 327 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                      |
|  -90.0% | -394.101 KiB |  32.4% → 4.6% |  438 KiB → 43.7 KiB | 662 → 639 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                      |
|  -89.9% | -393.984 KiB |  32.4% → 4.6% |    438 KiB → 44 KiB | 672 → 650 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                      |
|   -6.4% |  -62.101 KiB | 72.2% → 95.4% |   976 KiB → 914 KiB |     3 → 4 | `loadClass(String)`                                              | `java.lang.ClassLoader`                                 |
| removed |   -10.64 KiB |   0.8% → 0.0% |      10.6 KiB → 0 B |   256 → 0 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000090013e0800`     |
| removed |  -10.617 KiB |   0.8% → 0.0% |      10.6 KiB → 0 B |   256 → 0 | `linkToCallSite(Object, Object, int, int, Object)`               | `java.lang.invoke.LambdaForm$MH.0x0000009001936800`     |
| removed |  -10.593 KiB |   0.8% → 0.0% |      10.6 KiB → 0 B |   255 → 0 | `linkToCallSite(Object, int, int, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x00000090013f8000`     |
|  -84.8% |  -10.484 KiB |   0.9% → 0.2% | 12.4 KiB → 1.88 KiB |   39 → 31 | `newInstance()`                                                  | `java.lang.Class`                                       |
|  -43.2% |       -7 KiB |   1.2% → 1.0% | 16.2 KiB → 9.19 KiB |   98 → 82 | `getMetaClass()`                                                 | `org.codehaus.groovy.reflection.ClassInfo`              |
| removed |    -1.89 KiB |   0.1% → 0.0% |      1.89 KiB → 0 B |    29 → 0 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x00000090010c8400`     |
|  -34.8% |       -248 B |  0.1% → <0.1% |       712 B → 464 B |     8 → 6 | `visitClosureExpression(ClosureExpression)`                      | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  -27.6% |       -168 B |         <0.1% |       608 B → 440 B |     6 → 8 | `visitArgumentlistExpression(ArgumentListExpression)`            | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
| removed |       -152 B |  <0.1% → 0.0% |         152 B → 0 B |     4 → 0 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
| removed |       -136 B |  <0.1% → 0.0% |         136 B → 0 B |     3 → 0 | `call(Object, Object)`                                           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -88.2% |       -120 B |         <0.1% |        136 B → 16 B |     3 → 1 | `callCurrent(GroovyObject, Object, Object)`                      | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -88.2% |       -120 B |         <0.1% |        136 B → 16 B |     3 → 1 | `callCurrent(GroovyObject, Object, Object, Object)`              | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -19.7% |       -112 B |         <0.1% |       568 B → 456 B |     7 → 8 | `visitBinaryExpression(BinaryExpression)`                        | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  -85.7% |        -96 B |         <0.1% |        112 B → 16 B |     2 → 1 | `callConstructor(Object, Object)`                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `<init>()`                                                       | `java.util.HashSet`                                     |
