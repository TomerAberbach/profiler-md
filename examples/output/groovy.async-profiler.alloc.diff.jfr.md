# Allocated heap profile diff

Allocated 8.9 MiB → 5.79 MiB (-3.11 MiB, -34.9%) over 23,956 samples → 24,584 samples (390 B → 247 B per sample).

| Category         | Change |      Delta |     % |                Size |         Samples |
| ---------------- | -----: | ---------: | ----: | ------------------: | --------------: |
| Standard library | -35.0% | -3.111 MiB | 99.9% |  8.9 MiB → 5.79 MiB | 23,752 → 24,361 |
| Ours             |  +6.7% |     +504 B |  0.1% | 7.38 KiB → 7.87 KiB |       204 → 223 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size |   Samples | Function                                                                | Location                                                                   |
| ------: | ---------: | -----------: | ------------------: | --------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +40.7% | +2.414 KiB |         0.1% | 5.93 KiB → 8.34 KiB |   17 → 19 | `<init>(Collection)`                                                    | `java.util.ArrayList`                                                      |
|   +8.4% |     +720 B |  0.1% → 0.2% | 8.36 KiB → 9.06 KiB | 107 → 116 | `matcher(CharSequence)`                                                 | `java.util.regex.Pattern`                                                  |
|   +4.5% |     +440 B |  0.1% → 0.2% | 9.54 KiB → 9.97 KiB | 111 → 116 | `compile(String)`                                                       | `java.util.regex.Pattern`                                                  |
| +300.0% |     +144 B |        <0.1% |        48 B → 192 B |     1 → 4 | `visitArgumentlistExpression(ArgumentListExpression)`                   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                         |
|  +15.6% |     +120 B |        <0.1% |       768 B → 888 B |   32 → 37 | `toString()`                                                            | `java.lang.StringBuilder`                                                  |
|  +20.8% |     +120 B |        <0.1% |       576 B → 696 B |   18 → 22 | `writeViolation(Writer, Violation, String)`                             | `org.codenarc.report.TextReportWriter`                                     |
|     new |     +112 B | 0.0% → <0.1% |         0 B → 112 B |     0 → 2 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)`                 | `org.gmetrics.metric.AbstractMethodMetric`                                 |
| +300.0% |      +96 B |        <0.1% |        32 B → 128 B |     1 → 4 | `checkForCorrectColumn(ASTNode, String, int)`                           | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|     new |      +96 B | 0.0% → <0.1% |          0 B → 96 B |     0 → 2 | `visitClosureExpression(ClosureExpression)`                             | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`      |
| +366.7% |      +88 B |        <0.1% |        24 B → 112 B |     1 → 2 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|   +7.0% |      +80 B |        <0.1% | 1.11 KiB → 1.19 KiB |   18 → 19 | `collectViolations(SourceCode, RuleSet)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|     new |      +80 B | 0.0% → <0.1% |          0 B → 80 B |     0 → 2 | `methodReturnsArray(MethodNode)`                                        | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`        |
|  +40.0% |      +64 B |        <0.1% |       160 B → 224 B |         6 | `<init>(String, boolean)`                                               | `org.codenarc.util.WildcardPattern`                                        |
| +400.0% |      +64 B |        <0.1% |         16 B → 80 B |     1 → 5 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| +133.3% |      +64 B |        <0.1% |        48 B → 112 B |         2 | `markVariableAsReferenced(String, VariableExpression)`                  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                        |
|     new |      +64 B | 0.0% → <0.1% |          0 B → 64 B |     0 → 2 | `shouldApplyThisRuleTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                           |
| +200.0% |      +64 B |        <0.1% |         32 B → 96 B |     1 → 3 | `addViolation(ASTNode, String)`                                         | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  +10.0% |      +56 B |        <0.1% |       560 B → 616 B |   10 → 11 | `doCall(Object)`                                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|     new |      +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|     new |      +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 2 | `addViolationIfDoubleQuoted(ConstantExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`               |

##### Standard library

| Change |      Delta |           % |                Size |   Samples | Function                | Location                                                |
| -----: | ---------: | ----------: | ------------------: | --------: | ----------------------- | ------------------------------------------------------- |
| +40.7% | +2.414 KiB |        0.1% | 5.93 KiB → 8.34 KiB |   17 → 19 | `<init>(Collection)`    | `java.util.ArrayList`                                   |
|  +8.4% |     +720 B | 0.1% → 0.2% | 8.36 KiB → 9.06 KiB | 107 → 116 | `matcher(CharSequence)` | `java.util.regex.Pattern`                               |
|  +4.5% |     +440 B | 0.1% → 0.2% | 9.54 KiB → 9.97 KiB | 111 → 116 | `compile(String)`       | `java.util.regex.Pattern`                               |
| +15.6% |     +120 B |       <0.1% |       768 B → 888 B |   32 → 37 | `toString()`            | `java.lang.StringBuilder`                               |
| +50.0% |      +48 B |       <0.1% |        96 B → 144 B |     4 → 6 | `record(Object, int)`   | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |

##### Ours

|  Change |  Delta |            % |                Size | Samples | Function                                                                | Location                                                                   |
| ------: | -----: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +300.0% | +144 B |        <0.1% |        48 B → 192 B |   1 → 4 | `visitArgumentlistExpression(ArgumentListExpression)`                   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                         |
|  +20.8% | +120 B |        <0.1% |       576 B → 696 B | 18 → 22 | `writeViolation(Writer, Violation, String)`                             | `org.codenarc.report.TextReportWriter`                                     |
|     new | +112 B | 0.0% → <0.1% |         0 B → 112 B |   0 → 2 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)`                 | `org.gmetrics.metric.AbstractMethodMetric`                                 |
| +300.0% |  +96 B |        <0.1% |        32 B → 128 B |   1 → 4 | `checkForCorrectColumn(ASTNode, String, int)`                           | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|     new |  +96 B | 0.0% → <0.1% |          0 B → 96 B |   0 → 2 | `visitClosureExpression(ClosureExpression)`                             | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`      |
| +366.7% |  +88 B |        <0.1% |        24 B → 112 B |   1 → 2 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|   +7.0% |  +80 B |        <0.1% | 1.11 KiB → 1.19 KiB | 18 → 19 | `collectViolations(SourceCode, RuleSet)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|     new |  +80 B | 0.0% → <0.1% |          0 B → 80 B |   0 → 2 | `methodReturnsArray(MethodNode)`                                        | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`        |
|  +40.0% |  +64 B |        <0.1% |       160 B → 224 B |       6 | `<init>(String, boolean)`                                               | `org.codenarc.util.WildcardPattern`                                        |
| +400.0% |  +64 B |        <0.1% |         16 B → 80 B |   1 → 5 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| +133.3% |  +64 B |        <0.1% |        48 B → 112 B |       2 | `markVariableAsReferenced(String, VariableExpression)`                  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                        |
|     new |  +64 B | 0.0% → <0.1% |          0 B → 64 B |   0 → 2 | `shouldApplyThisRuleTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                           |
| +200.0% |  +64 B |        <0.1% |         32 B → 96 B |   1 → 3 | `addViolation(ASTNode, String)`                                         | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  +10.0% |  +56 B |        <0.1% |       560 B → 616 B | 10 → 11 | `doCall(Object)`                                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 2 | `addViolationIfDoubleQuoted(ConstantExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`               |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)`                     | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                        |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                 |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `visitListExpression(ListExpression)`                                   | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `visitMapExpression(MapExpression)`                                     | `org.codenarc.rule.dry.DuplicateMapLiteralAstVisitor`                      |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |  Delta |            % |                Size |   Samples | Function                                          | Location                                                                               |
| ------: | -----: | -----------: | ------------------: | --------: | ------------------------------------------------- | -------------------------------------------------------------------------------------- |
|  -13.9% | -640 B | <0.1% → 0.1% |  4.5 KiB → 3.88 KiB | 144 → 124 | `iterator()`                                      | `java.util.ArrayList`                                                                  |
|  -28.9% | -528 B |        <0.1% | 1.78 KiB → 1.27 KiB |   38 → 27 | `<init>()`                                        | `java.util.HashSet`                                                                    |
|  -63.0% | -504 B |        <0.1% |       800 B → 296 B |    16 → 7 | `matches(String)`                                 | `org.codenarc.util.WildcardPattern`                                                    |
|  -33.3% | -160 B |        <0.1% |       480 B → 320 B |    12 → 8 | `createRange(Object, Object, boolean, boolean)`   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                    |
|  -63.3% | -152 B |        <0.1% |        240 B → 88 B |     5 → 2 | `doCall(Object)`                                  | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3` |
| removed | -144 B | <0.1% → 0.0% |         144 B → 0 B |     3 → 0 | `visitImports(ModuleNode)`                        | `org.codenarc.rule.ClassReferenceAstVisitor`                                           |
|  -10.3% |  -96 B |        <0.1% |       928 B → 832 B |   29 → 26 | `iterator()`                                      | `java.util.LinkedHashMap$LinkedValues`                                                 |
| removed |  -72 B | <0.1% → 0.0% |          72 B → 0 B |     1 → 0 | `<init>()`                                        | `org.codenarc.rule.basic.BrokenOddnessCheckRule`                                       |
|  -16.7% |  -72 B |        <0.1% |       432 B → 360 B |     6 → 5 | `doCall(Object)`                                  | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`        |
| removed |  -72 B | <0.1% → 0.0% |          72 B → 0 B |     2 → 0 | `visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`                       |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.ClassReferenceAstVisitor`                                           |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.unused.UnusedVariableRule`                                          |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `processImports(SourceCode, List)`                | `org.codenarc.rule.imports.UnusedImportRule`                                           |
|  -70.0% |  -56 B |        <0.1% |         80 B → 24 B |     2 → 1 | `processMethodOrConstructorCall(MethodCall)`      | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                               |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule`                                |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `processParameters(Parameter[], String)`          | `org.codenarc.rule.convention.NoFloatAstVisitor`                                       |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `processParameters(Parameter[], String)`          | `org.codenarc.rule.convention.NoDoubleAstVisitor`                                      |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                                     |
|   -9.5% |  -48 B |        <0.1% |       504 B → 456 B |   21 → 19 | `isCase(Object, Object)`                          | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                    |
|   -7.9% |  -48 B |        <0.1% |       608 B → 560 B |   38 → 35 | `valueOf(int)`                                    | `java.lang.Integer`                                                                    |

##### Standard library

|  Change |  Delta |            % |                Size |   Samples | Function                                        | Location                                            |
| ------: | -----: | -----------: | ------------------: | --------: | ----------------------------------------------- | --------------------------------------------------- |
|  -13.9% | -640 B | <0.1% → 0.1% |  4.5 KiB → 3.88 KiB | 144 → 124 | `iterator()`                                    | `java.util.ArrayList`                               |
|  -28.9% | -528 B |        <0.1% | 1.78 KiB → 1.27 KiB |   38 → 27 | `<init>()`                                      | `java.util.HashSet`                                 |
|  -33.3% | -160 B |        <0.1% |       480 B → 320 B |    12 → 8 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  -10.3% |  -96 B |        <0.1% |       928 B → 832 B |   29 → 26 | `iterator()`                                    | `java.util.LinkedHashMap$LinkedValues`              |
|   -9.5% |  -48 B |        <0.1% |       504 B → 456 B |   21 → 19 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|   -7.9% |  -48 B |        <0.1% |       608 B → 560 B |   38 → 35 | `valueOf(int)`                                  | `java.lang.Integer`                                 |
| removed |  -48 B | <0.1% → 0.0% |          48 B → 0 B |     2 → 0 | `getAnnotations(ClassNode)`                     | `org.codehaus.groovy.ast.AnnotatedNode`             |
| removed |  -24 B | <0.1% → 0.0% |          24 B → 0 B |     1 → 0 | `getText()`                                     | `org.codehaus.groovy.ast.expr.PropertyExpression`   |
| removed |  -24 B | <0.1% → 0.0% |          24 B → 0 B |     1 → 0 | `asType(Object, Class)`                         | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### Ours

|  Change |  Delta |            % |          Size | Samples | Function                                          | Location                                                                               |
| ------: | -----: | -----------: | ------------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------------------------- |
|  -63.0% | -504 B |        <0.1% | 800 B → 296 B |  16 → 7 | `matches(String)`                                 | `org.codenarc.util.WildcardPattern`                                                    |
|  -63.3% | -152 B |        <0.1% |  240 B → 88 B |   5 → 2 | `doCall(Object)`                                  | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3` |
| removed | -144 B | <0.1% → 0.0% |   144 B → 0 B |   3 → 0 | `visitImports(ModuleNode)`                        | `org.codenarc.rule.ClassReferenceAstVisitor`                                           |
| removed |  -72 B | <0.1% → 0.0% |    72 B → 0 B |   1 → 0 | `<init>()`                                        | `org.codenarc.rule.basic.BrokenOddnessCheckRule`                                       |
|  -16.7% |  -72 B |        <0.1% | 432 B → 360 B |   6 → 5 | `doCall(Object)`                                  | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`        |
| removed |  -72 B | <0.1% → 0.0% |    72 B → 0 B |   2 → 0 | `visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`                       |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.ClassReferenceAstVisitor`                                           |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.unused.UnusedVariableRule`                                          |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `processImports(SourceCode, List)`                | `org.codenarc.rule.imports.UnusedImportRule`                                           |
|  -70.0% |  -56 B |        <0.1% |   80 B → 24 B |   2 → 1 | `processMethodOrConstructorCall(MethodCall)`      | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                               |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule`                                |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `processParameters(Parameter[], String)`          | `org.codenarc.rule.convention.NoFloatAstVisitor`                                       |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `processParameters(Parameter[], String)`          | `org.codenarc.rule.convention.NoDoubleAstVisitor`                                      |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                                     |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   2 → 0 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`                           |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `getParameterDefinitionAsString(MethodNode)`      | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                         |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `doCall(Object)`                                  | `org.codenarc.rule.unused.UnusedPrivateFieldRule$_collectAllPrivateFields_closure3`    |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`         |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `processParameters(Parameter[])`                  | `org.codenarc.rule.design.ImplementationAsTypeAstVisitor`                              |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `getAnonymousClasses(List)`                       | `org.codenarc.rule.unused.UnusedVariableRule`                                          |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |            % |                Size |       Samples | Function                                                      | Location                                                       |
| --------: | -----------: | -----------: | ------------------: | ------------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
|       new | +234.125 KiB |  0.0% → 3.9% |       0 B → 234 KiB |     0 → 2,224 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000f001322c00`            |
|       new |  +101.75 KiB |  0.0% → 1.7% |       0 B → 102 KiB |       0 → 564 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f00134c800`            |
|    +61.1% |  +98.171 KiB |  1.8% → 4.4% |   161 KiB → 259 KiB |       28 → 31 | `getLines()`                                                  | `org.codenarc.source.AbstractSourceCode`                       |
|    +51.3% |   +82.64 KiB |  1.8% → 4.1% |   161 KiB → 244 KiB |       39 → 52 | `addViolation(ASTNode, String)`                               | `org.codenarc.rule.AbstractAstVisitor`                         |
|    +46.0% |   +66.46 KiB |  1.6% → 3.6% |   145 KiB → 211 KiB |       22 → 29 | `visitClassEx(ClassNode)`                                     | `org.codenarc.rule.convention.CompileStaticlVisitor`           |
|    +64.6% |  +64.398 KiB |  1.1% → 2.8% |  99.7 KiB → 164 KiB |       90 → 86 | `line(int)`                                                   | `org.codenarc.source.AbstractSourceCode`                       |
| +94300.0% |   +51.57 KiB | <0.1% → 0.9% |     56 B → 51.6 KiB |             1 | `visitClassEx(ClassNode)`                                     | `org.codenarc.rule.exceptions.ExceptionExtendsErrorAstVisitor` |
|    +50.9% |  +49.359 KiB |  1.1% → 2.5% |    97 KiB → 146 KiB |       32 → 35 | `sourceLineTrimmed(ASTNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                         |
|       new |  +48.726 KiB |  0.0% → 0.8% |      0 B → 48.7 KiB |       0 → 211 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001400400`            |
|       new |  +36.601 KiB |  0.0% → 0.6% |      0 B → 36.6 KiB |     0 → 1,356 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000f00131f000`            |
|   +491.8% |   +34.96 KiB |  0.1% → 0.7% | 7.11 KiB → 42.1 KiB |      97 → 107 | `toString()`                                                  | `java.lang.StringBuilder`                                      |
|    +51.7% |   +33.14 KiB |  0.7% → 1.6% | 64.1 KiB → 97.3 KiB |        6 → 13 | `getRawLine(SourceCode, int)`                                 | `org.codenarc.util.AstUtil`                                    |
|    +51.7% |   +33.14 KiB |  0.7% → 1.6% | 64.1 KiB → 97.3 KiB |        6 → 13 | `findFirstNonAnnotationLine(ASTNode, SourceCode)`             | `org.codenarc.util.AstUtil`                                    |
|       new |  +31.898 KiB |  0.0% → 0.5% |      0 B → 31.9 KiB |       0 → 798 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f0013da000`            |
|       new |  +31.242 KiB |  0.0% → 0.5% |      0 B → 31.2 KiB |       0 → 458 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000f0010c8400`            |
|    +53.8% |  +28.046 KiB |  0.6% → 1.4% | 52.2 KiB → 80.2 KiB |     821 → 845 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`                   |
|    +31.2% |  +27.992 KiB |  1.0% → 2.0% |  89.7 KiB → 118 KiB |     535 → 559 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`        |
|    +69.0% |  +22.531 KiB |  0.4% → 0.9% | 32.6 KiB → 55.2 KiB |     126 → 135 | `add(Object)`                                                 | `java.util.ArrayList`                                          |
|    +19.6% |  +22.359 KiB |  1.3% → 2.3% |   114 KiB → 137 KiB | 1,683 → 1,828 | `visit(GroovyCodeVisitor)`                                    | `org.codehaus.groovy.ast.expr.BinaryExpression`                |
|   +179.4% |  +22.257 KiB |  0.1% → 0.6% | 12.4 KiB → 34.7 KiB |     153 → 162 | `newInstance()`                                               | `java.lang.Class`                                              |

##### Standard library

|   Change |        Delta |            % |                Size |       Samples | Function                                                         | Location                                            |
| -------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------------------------------------------- | --------------------------------------------------- |
|      new | +234.125 KiB |  0.0% → 3.9% |       0 B → 234 KiB |     0 → 2,224 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000f001322c00` |
|      new |  +101.75 KiB |  0.0% → 1.7% |       0 B → 102 KiB |       0 → 564 | `linkToCallSite(Object, Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000f00134c800` |
|      new |  +48.726 KiB |  0.0% → 0.8% |      0 B → 48.7 KiB |       0 → 211 | `linkToCallSite(Object, Object, Object, Object, int, Object)`    | `java.lang.invoke.LambdaForm$MH.0x000000f001400400` |
|      new |  +36.601 KiB |  0.0% → 0.6% |      0 B → 36.6 KiB |     0 → 1,356 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000f00131f000` |
|  +491.8% |   +34.96 KiB |  0.1% → 0.7% | 7.11 KiB → 42.1 KiB |      97 → 107 | `toString()`                                                     | `java.lang.StringBuilder`                           |
|      new |  +31.898 KiB |  0.0% → 0.5% |      0 B → 31.9 KiB |       0 → 798 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000f0013da000` |
|      new |  +31.242 KiB |  0.0% → 0.5% |      0 B → 31.2 KiB |       0 → 458 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000f0010c8400` |
|   +53.8% |  +28.046 KiB |  0.6% → 1.4% | 52.2 KiB → 80.2 KiB |     821 → 845 | `visitClosureExpression(ClosureExpression)`                      | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|   +69.0% |  +22.531 KiB |  0.4% → 0.9% | 32.6 KiB → 55.2 KiB |     126 → 135 | `add(Object)`                                                    | `java.util.ArrayList`                               |
|   +19.6% |  +22.359 KiB |  1.3% → 2.3% |   114 KiB → 137 KiB | 1,683 → 1,828 | `visit(GroovyCodeVisitor)`                                       | `org.codehaus.groovy.ast.expr.BinaryExpression`     |
|  +179.4% |  +22.257 KiB |  0.1% → 0.6% | 12.4 KiB → 34.7 KiB |     153 → 162 | `newInstance()`                                                  | `java.lang.Class`                                   |
|      new |  +18.882 KiB |  0.0% → 0.3% |      0 B → 18.9 KiB |       0 → 507 | `linkToCallSite(Object, int, int, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x000000f0013f5400` |
|    +5.8% |  +16.554 KiB |  3.1% → 5.1% |   286 KiB → 303 KiB |     105 → 100 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| +1344.5% |  +15.335 KiB | <0.1% → 0.3% | 1.14 KiB → 16.5 KiB |       17 → 24 | `<init>(Object[], String[])`                                     | `org.codehaus.groovy.runtime.GStringImpl`           |
|  +233.4% |   +13.82 KiB |  0.1% → 0.3% | 5.92 KiB → 19.7 KiB |       79 → 76 | `visitAnnotations(AnnotatedNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|      new |   +9.109 KiB |  0.0% → 0.2% |      0 B → 9.11 KiB |        0 → 88 | `linkToCallSite(Object, Object, int, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$MH.0x000000f001392800` |
|      new |   +8.796 KiB |  0.0% → 0.1% |       0 B → 8.8 KiB |       0 → 242 | `linkToCallSite(Object, Object, int, int, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000f00192ec00` |
|      new |   +6.828 KiB |  0.0% → 0.1% |      0 B → 6.83 KiB |       0 → 152 | `linkToCallSite(Object, Object, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010d6400` |
|    +6.3% |   +5.828 KiB |  1.0% → 1.6% | 91.8 KiB → 97.7 KiB | 1,489 → 1,513 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|    +7.3% |   +5.289 KiB |  0.8% → 1.3% | 72.4 KiB → 77.7 KiB | 1,069 → 1,104 | `visitArgumentlistExpression(ArgumentListExpression)`            | `org.codehaus.groovy.ast.CodeVisitorSupport`        |

##### Ours

|    Change |       Delta |            % |                Size |   Samples | Function                                                                    | Location                                                       |
| --------: | ----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------- | -------------------------------------------------------------- |
|    +61.1% | +98.171 KiB |  1.8% → 4.4% |   161 KiB → 259 KiB |   28 → 31 | `getLines()`                                                                | `org.codenarc.source.AbstractSourceCode`                       |
|    +51.3% |  +82.64 KiB |  1.8% → 4.1% |   161 KiB → 244 KiB |   39 → 52 | `addViolation(ASTNode, String)`                                             | `org.codenarc.rule.AbstractAstVisitor`                         |
|    +46.0% |  +66.46 KiB |  1.6% → 3.6% |   145 KiB → 211 KiB |   22 → 29 | `visitClassEx(ClassNode)`                                                   | `org.codenarc.rule.convention.CompileStaticlVisitor`           |
|    +64.6% | +64.398 KiB |  1.1% → 2.8% |  99.7 KiB → 164 KiB |   90 → 86 | `line(int)`                                                                 | `org.codenarc.source.AbstractSourceCode`                       |
| +94300.0% |  +51.57 KiB | <0.1% → 0.9% |     56 B → 51.6 KiB |         1 | `visitClassEx(ClassNode)`                                                   | `org.codenarc.rule.exceptions.ExceptionExtendsErrorAstVisitor` |
|    +50.9% | +49.359 KiB |  1.1% → 2.5% |    97 KiB → 146 KiB |   32 → 35 | `sourceLineTrimmed(ASTNode)`                                                | `org.codenarc.rule.AbstractAstVisitor`                         |
|    +51.7% |  +33.14 KiB |  0.7% → 1.6% | 64.1 KiB → 97.3 KiB |    6 → 13 | `getRawLine(SourceCode, int)`                                               | `org.codenarc.util.AstUtil`                                    |
|    +51.7% |  +33.14 KiB |  0.7% → 1.6% | 64.1 KiB → 97.3 KiB |    6 → 13 | `findFirstNonAnnotationLine(ASTNode, SourceCode)`                           | `org.codenarc.util.AstUtil`                                    |
|    +31.2% | +27.992 KiB |  1.0% → 2.0% |  89.7 KiB → 118 KiB | 535 → 559 | `visitClass(ClassNode)`                                                     | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`        |
|   +179.4% | +22.257 KiB |  0.1% → 0.6% | 12.4 KiB → 34.7 KiB | 153 → 162 | `getAstVisitor()`                                                           | `org.codenarc.rule.AbstractAstVisitorRule`                     |
|   +694.2% | +19.632 KiB | <0.1% → 0.4% | 2.83 KiB → 22.5 KiB |   26 → 27 | `visitMethodCallExpression(MethodCallExpression)`                           | `org.codenarc.rule.basic.BooleanGetBooleanAstVisitor`          |
|   +245.2% | +18.195 KiB |  0.1% → 0.4% | 7.42 KiB → 25.6 KiB |   84 → 80 | `visitBinaryExpression(BinaryExpression)`                                   | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`         |
|  +7079.3% | +16.039 KiB | <0.1% → 0.3% |    232 B → 16.3 KiB |     6 → 8 | `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`   |
|       new | +16.039 KiB |  0.0% → 0.3% |        0 B → 16 KiB |     0 → 2 | `addViolationIfBothAreTheSameVariable(ASTNode, Expression, Expression)`     | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`         |
| +51150.0% | +15.984 KiB | <0.1% → 0.3% |       32 B → 16 KiB |         1 | `addViolation(MethodCallExpression, String)`                                | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`        |
|  +1041.3% | +15.945 KiB | <0.1% → 0.3% | 1.53 KiB → 17.5 KiB |   16 → 21 | `super$2$visitMethodCallExpression(MethodCallExpression)`                   | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`         |
| +63966.7% | +14.992 KiB | <0.1% → 0.3% |       24 B → 15 KiB |         1 | `<clinit>()`                                                                | `org.codenarc.ruleregistry.PropertiesFileRuleRegistry`         |
|   +219.0% | +14.796 KiB |  0.1% → 0.4% | 6.76 KiB → 21.6 KiB |  86 → 101 | `visitBinaryExpression(BinaryExpression)`                                   | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`   |
|  +1667.3% | +14.718 KiB | <0.1% → 0.3% |    904 B → 15.6 KiB |    9 → 12 | `initializeRuleRegistry()`                                                  | `org.codenarc.ruleregistry.RuleRegistryInitializer`            |
|  +1667.3% | +14.718 KiB | <0.1% → 0.3% |    904 B → 15.6 KiB |    9 → 12 | `initializeRuleRegistry()`                                                  | `org.codenarc.CodeNarcRunner`                                  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |          Delta |             % |                Size |         Samples | Function                                                 | Location                                                                    |
| -----: | -------------: | ------------: | ------------------: | --------------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| -28.5% |     -2.234 MiB | 87.9% → 96.6% | 7.83 MiB → 5.59 MiB | 23,939 → 24,563 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
| -27.8% |     -2.153 MiB | 87.0% → 96.5% | 7.74 MiB → 5.59 MiB | 23,928 → 24,551 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| -20.3% |     -1.396 MiB | 77.3% → 94.7% | 6.88 MiB → 5.48 MiB | 23,867 → 24,523 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
| -19.4% |     -1.316 MiB | 76.4% → 94.6% |  6.8 MiB → 5.48 MiB | 23,872 → 24,518 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
| -19.4% |     -1.315 MiB | 76.2% → 94.5% | 6.79 MiB → 5.47 MiB | 23,596 → 24,266 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
| -18.6% |     -1.201 MiB | 72.4% → 90.5% | 6.44 MiB → 5.24 MiB | 23,086 → 23,751 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
| -18.7% |     -1.201 MiB | 72.3% → 90.4% | 6.44 MiB → 5.24 MiB | 22,937 → 23,614 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
| -18.6% |     -1.184 MiB | 71.5% → 89.5% | 6.37 MiB → 5.19 MiB | 21,960 → 22,641 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -18.6% |     -1.183 MiB | 71.5% → 89.5% | 6.37 MiB → 5.19 MiB | 21,955 → 22,638 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -18.6% |     -1.183 MiB | 71.5% → 89.5% | 6.37 MiB → 5.19 MiB | 21,954 → 22,638 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| -18.6% |     -1.183 MiB | 71.5% → 89.5% | 6.37 MiB → 5.19 MiB | 21,934 → 22,624 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -18.5% |     -1.179 MiB | 71.5% → 89.5% | 6.36 MiB → 5.18 MiB | 21,909 → 22,598 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -40.4% |     -1.057 MiB | 29.4% → 26.9% | 2.61 MiB → 1.56 MiB |        122 → 92 | `visitClassEx(ClassNode)`                                | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
| -30.0% |     -1.006 MiB | 37.7% → 40.6% | 3.36 MiB → 2.35 MiB |        90 → 101 | `loadClass(String)`                                      | `java.lang.ClassLoader`                                                     |
| -39.3% |  -1,023.75 KiB | 28.6% → 26.6% | 2.54 MiB → 1.54 MiB |          11 → 3 | `getMetric()`                                            | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
| -39.3% | -1,023.398 KiB | 28.6% → 26.6% | 2.54 MiB → 1.54 MiB |           7 → 3 | `createMetric()`                                         | `org.codenarc.rule.size.AbcMetricAstVisitor`                                |
| -39.3% | -1,023.335 KiB | 28.6% → 26.6% | 2.54 MiB → 1.54 MiB |          15 → 5 | `callGetProperty(Object)`                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                     |
| -39.3% |  -1,023.07 KiB | 28.5% → 26.6% | 2.54 MiB → 1.54 MiB |           4 → 2 | `<init>()`                                               | `org.gmetrics.metric.AbstractMethodMetric`                                  |
| -39.3% |  -1,023.07 KiB | 28.5% → 26.6% | 2.54 MiB → 1.54 MiB |           4 → 2 | `<init>()`                                               | `org.gmetrics.metric.abc.AbcMetric`                                         |
| -39.3% | -1,023.015 KiB | 28.5% → 26.6% | 2.54 MiB → 1.54 MiB |           3 → 2 | `callStatic(Class, Object, Object, Object)`              | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                     |

##### Standard library

|  Change |          Delta |             % |                Size |         Samples | Function                                                      | Location                                                |
| ------: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------- | ------------------------------------------------------- |
|  -27.8% |     -2.153 MiB | 87.0% → 96.5% | 7.74 MiB → 5.59 MiB | 23,928 → 24,551 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                      |
|  -20.3% |     -1.396 MiB | 77.3% → 94.7% | 6.88 MiB → 5.48 MiB | 23,867 → 24,523 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                      |
|  -18.6% |     -1.201 MiB | 72.4% → 90.5% | 6.44 MiB → 5.24 MiB | 23,086 → 23,751 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                      |
|  -18.7% |     -1.201 MiB | 72.3% → 90.4% | 6.44 MiB → 5.24 MiB | 22,937 → 23,614 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                      |
|  -30.0% |     -1.006 MiB | 37.7% → 40.6% | 3.36 MiB → 2.35 MiB |        90 → 101 | `loadClass(String)`                                           | `java.lang.ClassLoader`                                 |
|  -39.3% | -1,023.335 KiB | 28.6% → 26.6% | 2.54 MiB → 1.54 MiB |          15 → 5 | `callGetProperty(Object)`                                     | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -39.3% | -1,023.015 KiB | 28.5% → 26.6% | 2.54 MiB → 1.54 MiB |           3 → 2 | `callStatic(Class, Object, Object, Object)`                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| removed |   -229.804 KiB |   2.5% → 0.0% |       230 KiB → 0 B |       2,157 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000007001322800`     |
| removed |     -98.71 KiB |   1.1% → 0.0% |      98.7 KiB → 0 B |         549 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700134c800`     |
|  -47.6% |    -88.234 KiB |   2.0% → 1.6% |  185 KiB → 96.9 KiB |         13 → 19 | `<clinit>()`                                                  | `groovy.lang.Closure`                                   |
|  -47.2% |    -87.656 KiB |   2.0% → 1.7% |    186 KiB → 98 KiB |         18 → 28 | `<init>(Object, Object)`                                      | `groovy.lang.Closure`                                   |
|  -93.9% |    -60.812 KiB |   0.7% → 0.1% | 64.8 KiB → 3.95 KiB |         27 → 20 | `callCurrent(GroovyObject, Object)`                           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -95.7% |    -60.164 KiB |  0.7% → <0.1% | 62.9 KiB → 2.69 KiB |               4 | `call(Object)`                                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -82.1% |    -59.414 KiB |   0.8% → 0.2% |   72.4 KiB → 13 KiB |         83 → 71 | `callCurrent(GroovyObject, Object, Object)`                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -43.5% |    -42.921 KiB |   1.1% → 0.9% | 98.6 KiB → 55.7 KiB |       281 → 284 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`              |
| removed |    -38.906 KiB |   0.4% → 0.0% |      38.9 KiB → 0 B |         192 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070013fa400`     |
| removed |    -35.812 KiB |   0.4% → 0.0% |      35.8 KiB → 0 B |       1,322 → 0 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000700131ac00`     |
| removed |    -31.312 KiB |   0.3% → 0.0% |      31.3 KiB → 0 B |         826 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013d9000`     |
| removed |    -29.914 KiB |   0.3% → 0.0% |      29.9 KiB → 0 B |         415 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400`     |
|  -22.7% |    -28.804 KiB |   1.4% → 1.7% |  127 KiB → 98.2 KiB |   1,400 → 1,422 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`            |

##### Ours

| Change |          Delta |             % |                Size |         Samples | Function                                         | Location                                                                    |
| -----: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| -28.5% |     -2.234 MiB | 87.9% → 96.6% | 7.83 MiB → 5.59 MiB | 23,939 → 24,563 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| -19.4% |     -1.316 MiB | 76.4% → 94.6% |  6.8 MiB → 5.48 MiB | 23,872 → 24,518 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| -19.4% |     -1.315 MiB | 76.2% → 94.5% | 6.79 MiB → 5.47 MiB | 23,596 → 24,266 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| -18.6% |     -1.184 MiB | 71.5% → 89.5% | 6.37 MiB → 5.19 MiB | 21,960 → 22,641 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -18.6% |     -1.183 MiB | 71.5% → 89.5% | 6.37 MiB → 5.19 MiB | 21,955 → 22,638 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -18.6% |     -1.183 MiB | 71.5% → 89.5% | 6.37 MiB → 5.19 MiB | 21,954 → 22,638 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| -18.6% |     -1.183 MiB | 71.5% → 89.5% | 6.37 MiB → 5.19 MiB | 21,934 → 22,624 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -18.5% |     -1.179 MiB | 71.5% → 89.5% | 6.36 MiB → 5.18 MiB | 21,909 → 22,598 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -40.4% |     -1.057 MiB | 29.4% → 26.9% | 2.61 MiB → 1.56 MiB |        122 → 92 | `visitClassEx(ClassNode)`                        | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
| -39.3% |  -1,023.75 KiB | 28.6% → 26.6% | 2.54 MiB → 1.54 MiB |          11 → 3 | `getMetric()`                                    | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
| -39.3% | -1,023.398 KiB | 28.6% → 26.6% | 2.54 MiB → 1.54 MiB |           7 → 3 | `createMetric()`                                 | `org.codenarc.rule.size.AbcMetricAstVisitor`                                |
| -39.3% |  -1,023.07 KiB | 28.5% → 26.6% | 2.54 MiB → 1.54 MiB |           4 → 2 | `<init>()`                                       | `org.gmetrics.metric.AbstractMethodMetric`                                  |
| -39.3% |  -1,023.07 KiB | 28.5% → 26.6% | 2.54 MiB → 1.54 MiB |           4 → 2 | `<init>()`                                       | `org.gmetrics.metric.abc.AbcMetric`                                         |
| -39.3% | -1,023.015 KiB | 28.5% → 26.6% | 2.54 MiB → 1.54 MiB |           3 → 2 | `<clinit>()`                                     | `org.gmetrics.metric.MetricLevel`                                           |
| -28.6% |   -983.234 KiB | 37.7% → 41.4% |  3.36 MiB → 2.4 MiB |   6,655 → 6,771 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| -26.2% |   -945.906 KiB | 39.7% → 45.0% | 3.53 MiB → 2.61 MiB |   8,087 → 8,182 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| -25.2% |   -937.289 KiB | 40.8% → 46.9% | 3.64 MiB → 2.72 MiB | 10,878 → 11,203 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| -26.4% |    -927.71 KiB | 38.5% → 43.5% | 3.43 MiB → 2.52 MiB |   6,994 → 7,202 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| -22.9% |   -926.742 KiB | 44.5% → 52.7% | 3.96 MiB → 3.05 MiB | 16,212 → 16,736 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -12.0% |   -284.617 KiB | 26.0% → 35.2% | 2.32 MiB → 2.04 MiB |   3,276 → 3,359 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
