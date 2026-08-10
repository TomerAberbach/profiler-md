# Profile diff

367 samples → 311 samples (-56 samples, -15.3%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library | -14.5% |   -52 | 97.5% → 98.4% | 358 → 306 |
| Ours             | -44.4% |    -4 |   2.5% → 1.6% |     9 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |           % | Samples | Function                                        | Location                                                             |
| -----: | ----: | ----------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractFieldVisitor`                             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `charUnbox(Object)`                             | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `$getStaticMetaClass()`                         | `org.gmetrics.result.NumberMetricResult`                             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`      |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `handleMapExpression(MapEntryExpression)`       | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`    |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `intUnbox(Object)`                              | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                             | Location                                                        |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`             | `java.lang.invoke.Invokers$Holder`                              |
|  -33.3% |    -1 | 0.8% → 0.6% |   3 → 2 | `getClass()`                                         | `java.lang.Object`                                              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitClass(ClassNode)`                              | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `doCall(Object)`                                     | `org.codenarc.util.WildcardPattern$_closure1`                   |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitPropertyExpression(PropertyExpression)`        | `org.codehaus.groovy.ast.CodeVisitorSupport`                    |
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

|  Change | Delta |             % | Samples | Function                                                                | Location                                                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|     new |   +10 |   0.0% → 3.2% |  0 → 10 | `linkToCallSite(Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`                            |
|  +10.1% |    +8 | 21.5% → 28.0% | 79 → 87 | `measureRuleProcessingTime(Rule, Closure)`                              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|     new |    +8 |   0.0% → 2.6% |   0 → 8 | `linkToCallSite(Object, long, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000700138b800`                            |
|     new |    +7 |   0.0% → 2.3% |   0 → 7 | `linkToCallSite(Object, Object, long, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001393400`                            |
|     new |    +5 |   0.0% → 1.6% |   0 → 5 | `linkToCallSite(Object, int, Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x0000007001448800`                            |
|     new |    +4 |   0.0% → 1.3% |   0 → 4 | `linkToCallSite(Object, Object, Object, int, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x00000070013b9400`                            |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `doCall(Object)`                                                        | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1` |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `getNumberOfViolationsWithPriority(int, boolean)`                       | `org.codenarc.results.FileResults`                                             |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `getNumberOfViolationsWithPriority(int)`                                | `org.codenarc.results.FileResults`                                             |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `linkToCallSite(Object, Object, int, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000700113ac00`                            |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `isSpockMethod(MethodCallExpression)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                    |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                    |
| +100.0% |    +2 |   0.5% → 1.3% |   2 → 4 | `<init>(Reader)`                                                        | `org.codenarc.ruleset.XmlReaderRuleSet`                                        |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `doCall(Object)`                                                        | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                                |
|  +15.4% |    +2 |   3.5% → 4.8% | 13 → 15 | `visitBinaryExpression(BinaryExpression)`                               | `org.codehaus.groovy.ast.CodeVisitorSupport`                                   |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                   |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitIfElse(IfStatement)`                                              | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                              |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitClassEx(ClassNode)`                                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                        |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                       |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -15.0% |   -38 | 68.9% → 69.1% | 253 → 215 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
|  -23.7% |   -36 | 41.4% → 37.3% | 152 → 116 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
|  -27.9% |   -29 | 28.3% → 24.1% |  104 → 75 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
|  -40.3% |   -29 | 19.6% → 13.8% |   72 → 43 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -34.1% |   -28 | 22.3% → 17.4% |   82 → 54 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -29.0% |   -27 | 25.3% → 21.2% |   93 → 66 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  -39.7% |   -27 | 18.5% → 13.2% |   68 → 41 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -32.8% |   -19 | 15.8% → 12.5% |   58 → 39 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -22.0% |   -18 | 22.3% → 20.6% |   82 → 64 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  -30.5% |   -18 | 16.1% → 13.2% |   59 → 41 | `getAst()`                                                    | `org.codenarc.source.AbstractSourceCode`                                   |
|  -45.7% |   -16 |   9.5% → 6.1% |   35 → 19 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
|  -30.2% |   -16 | 14.4% → 11.9% |   53 → 37 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -28.8% |   -15 | 14.2% → 11.9% |   52 → 37 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -25.9% |   -14 | 14.7% → 12.9% |   54 → 40 | `init()`                                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -14.4% |   -14 | 26.4% → 26.7% |   97 → 83 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
|  -40.0% |   -12 |   8.2% → 5.8% |   30 → 18 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
| removed |   -12 |   3.3% → 0.0% |    12 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00`                        |
| removed |   -11 |   3.0% → 0.0% |    11 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00`                        |
|   -9.2% |   -10 | 29.7% → 31.8% |  109 → 99 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -21.3% |   -10 | 12.8% → 11.9% |   47 → 37 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |

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

|  Change |      Delta |            % |                Size | Samples | Function                                                         | Location                                                                        |
| ------: | ---------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|     new | +7.996 MiB |  0.0% → 0.1% |         0 B → 8 MiB |   0 → 4 | `doCall(Object)`                                                 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| +100.0% | +7.995 MiB |         0.1% |      8 MiB → 16 MiB |   3 → 8 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                  |
|     new |  +3.99 MiB | 0.0% → <0.1% |      0 B → 3.99 MiB |   0 → 2 | `markVariableAsReferenced(String, VariableExpression)`           | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|  +21.9% | +3.728 MiB |  0.1% → 0.2% |   17 MiB → 20.7 MiB | 13 → 12 | `toString()`                                                     | `java.lang.StringBuilder`                                                       |
|   +3.8% | +2.618 MiB |         0.6% | 68.5 MiB → 71.1 MiB | 57 → 61 | `iterator()`                                                     | `java.util.ArrayList`                                                           |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `processMethodOrConstructorCall(MethodCall)`                     | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                        |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`                    | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`           |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`                |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `afterBlock()`                                                   | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`                    | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`           |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitPropertyExpression(PropertyExpression)`                    | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`     |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `setDisabledRulesByLine(int)`                                    | `org.codenarc.plugin.disablerules.LookupTable`                                  |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`  |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `calculate(MethodNode, SourceCode)`                              | `org.gmetrics.metric.abc.AbcMetric`                                             |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)`              | `org.codenarc.rule.naming.VariableNameAstVisitor`                               |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `getNumberOfViolationsWithPriority(int, boolean)`                | `org.codenarc.results.FileResults`                                              |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `calculate(MethodNode, SourceCode)`                              | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityMetric`                     |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitStatement(Statement)`                                      | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |             Size | Samples | Function                                                      | Location                                                                |
| ------: | ---------: | -----------: | ---------------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
|  -71.4% | -9.995 MiB | 0.1% → <0.1% |   14 MiB → 4 MiB |   7 → 2 | `createRange(Object, Object, boolean, boolean)`               | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                     |
| removed | -5.997 MiB | <0.1% → 0.0% |      6 MiB → 0 B |   3 → 0 | `record(Object, int)`                                         | `org.codehaus.groovy.runtime.powerassert.ValueRecorder`                 |
|  -50.0% | -3.998 MiB | 0.1% → <0.1% |    8 MiB → 4 MiB |   4 → 2 | `<init>()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                                  |
| removed | -3.998 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `addViolation(ASTNode, String)`                               | `org.codenarc.rule.AbstractAstVisitor`                                  |
|  -40.0% | -3.998 MiB | 0.1% → <0.1% |   10 MiB → 6 MiB |   5 → 3 | `isCase(Object, Object)`                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                     |
| removed | -3.998 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `sourceLineAndNumberForNonStarImport(SourceCode, ImportNode)` | `org.codenarc.util.ImportUtil`                                          |
| removed | -3.997 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `filter(Predicate)`                                           | `java.util.stream.ReferencePipeline`                                    |
|  -66.7% | -3.995 MiB |        <0.1% | 5.99 MiB → 2 MiB |   3 → 1 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                        |
|  -33.3% | -1.999 MiB |        <0.1% |    6 MiB → 4 MiB |   3 → 2 | `matches(String)`                                             | `org.codenarc.util.WildcardPattern`                                     |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `<init>()`                                                    | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`   |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`       |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBlockStatement(BlockStatement)`                         | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`         |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                   |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `processParameters(Parameter[], String)`                      | `org.codenarc.rule.naming.ParameterNameAstVisitor`                      |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                     | `org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`                |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitClosureExpression(ClosureExpression)`                   | `org.codenarc.rule.ClassReferenceAstVisitor`                            |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`          |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor` |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `removeAnyViolationsForSameLine(int)`                         | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`          |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitField(FieldNode)`                                       | `org.codenarc.rule.design.FinalClassWithProtectedMemberAstVisitor`      |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new |   +1.022 GiB |   0.0% → 8.7% |      0 B → 1.02 GiB |       0 → 526 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000007001393400`                                 |
|     new | +646.695 MiB |   0.0% → 5.4% |       0 B → 647 MiB |       0 → 328 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000700138b800`                                 |
|     new | +325.744 MiB |   0.0% → 2.7% |       0 B → 326 MiB |       0 → 149 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001448800`                                 |
|     new | +270.857 MiB |   0.0% → 2.2% |       0 B → 271 MiB |       0 → 131 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013b9400`                                 |
|     new |  +257.41 MiB |   0.0% → 2.1% |       0 B → 257 MiB |       0 → 191 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`                                 |
|   +4.0% | +128.343 MiB | 26.0% → 27.4% |  3.1 GiB → 3.22 GiB | 1,567 → 1,623 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                                  |
| +492.3% | +127.936 MiB |   0.2% → 1.3% |    26 MiB → 154 MiB |       13 → 12 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`                |
|  +63.7% | +101.948 MiB |   1.3% → 2.2% |   160 MiB → 262 MiB |       80 → 66 | `writeFileViolations(Writer, FileResults)`                    | `org.codenarc.report.TextReportWriter`                                              |
|     new |   +84.43 MiB |   0.0% → 0.7% |      0 B → 84.4 MiB |        0 → 41 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001469c00`                                 |
|  +18.9% |   +82.38 MiB |   3.6% → 4.3% |   436 MiB → 518 MiB |     213 → 259 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
|     new |  +52.728 MiB |   0.0% → 0.4% |      0 B → 52.7 MiB |        0 → 30 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001402800`                                 |
| +325.0% |  +51.974 MiB |   0.1% → 0.6% |     16 MiB → 68 MiB |        8 → 12 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2`             |
|  +14.8% |  +48.945 MiB |   2.7% → 3.2% |   331 MiB → 380 MiB |     166 → 193 | `findRegex(Object, Object)`                                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                 |
|  +38.2% |  +44.351 MiB |   1.0% → 1.3% |   116 MiB → 160 MiB |       59 → 75 | `checkNode(ASTNode)`                                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                      |
|  +25.6% |  +43.975 MiB |   1.4% → 1.8% |   172 MiB → 216 MiB |      86 → 107 | `doCall(Object)`                                              | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|  +11.3% |  +42.609 MiB |   3.1% → 3.5% |   378 MiB → 421 MiB |     187 → 210 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
|   +7.8% |  +41.281 MiB |   4.4% → 4.8% |   532 MiB → 573 MiB |     250 → 287 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
|   +9.8% |  +39.073 MiB |   3.3% → 3.6% |   401 MiB → 440 MiB |     199 → 213 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|   +3.8% |  +38.538 MiB |   8.2% → 8.6% | 1002 MiB → 1.02 GiB |     507 → 523 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                            |
|     new |  +35.279 MiB |   0.0% → 0.3% |      0 B → 35.3 MiB |        0 → 19 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700113ac00`                                 |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                    |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed |    -1.02 GiB |   8.6% → 0.0% |      1.02 GiB → 0 B |       527 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00`                         |
| removed | -692.925 MiB |   5.7% → 0.0% |       693 MiB → 0 B |       341 → 0 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000040138b000`                         |
| removed | -307.847 MiB |   2.5% → 0.0% |       308 MiB → 0 B |       128 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000401441c00`                         |
| removed | -287.253 MiB |   2.4% → 0.0% |       287 MiB → 0 B |       140 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000004013bc400`                         |
| removed | -219.294 MiB |   1.8% → 0.0% |       219 MiB → 0 B |       176 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00`                         |
|   -5.6% | -193.927 MiB | 28.6% → 27.4% | 3.41 GiB → 3.22 GiB | 1,753 → 1,691 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -3.5% | -129.264 MiB | 30.3% → 29.6% | 3.61 GiB → 3.48 GiB | 1,892 → 1,839 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|   -2.7% | -111.935 MiB | 33.5% → 32.9% | 3.99 GiB → 3.88 GiB | 2,049 → 2,024 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   -7.0% |  -107.76 MiB | 12.7% → 11.9% |  1.51 GiB → 1.4 GiB |     730 → 734 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                          |
|  -47.7% | -103.946 MiB |   1.8% → 0.9% |   218 MiB → 114 MiB |            57 | `writeViolation(Writer, Violation, String)`                   | `org.codenarc.report.TextReportWriter`                                      |
|  -46.8% | -101.947 MiB |   1.8% → 1.0% |   218 MiB → 116 MiB |       57 → 58 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`        |
|   -2.1% |  -94.911 MiB | 37.1% → 36.8% | 4.42 GiB → 4.33 GiB | 2,284 → 2,250 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   -1.6% |  -82.021 MiB | 43.3% → 43.1% | 5.16 GiB → 5.08 GiB | 2,660 → 2,629 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                          |
| removed |  -73.218 MiB |   0.6% → 0.0% |      73.2 MiB → 0 B |        37 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401462400`                         |
|  -18.4% |  -62.245 MiB |   2.8% → 2.3% |   338 MiB → 276 MiB |     160 → 143 | `visitBinaryExpression(BinaryExpression)`                     | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|  -13.8% |  -61.209 MiB |   3.6% → 3.2% |   442 MiB → 381 MiB |     209 → 196 | `addViolationIfDuplicate(Expression, boolean)`                | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|  -13.6% |   -59.21 MiB |   3.6% → 3.1% |   436 MiB → 377 MiB |     206 → 194 | `addViolationIfDuplicate(Expression)`                         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|   -3.0% |  -52.809 MiB | 14.4% → 14.1% | 1.71 GiB → 1.66 GiB |     876 → 863 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|   -6.1% |  -52.495 MiB |   7.1% → 6.7% |   864 MiB → 811 MiB |     435 → 418 | `doCall(Object)`                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   -1.6% |  -44.875 MiB | 22.8% → 22.7% | 2.72 GiB → 2.67 GiB | 1,431 → 1,418 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                            |

# Retained heap profile diff

Retained 267 KiB → 82.3 KiB (-184.742 KiB, -69.2%) over 118 samples → 111 samples (2.26 KiB → 759 B per sample).

| Category         |  Change |        Delta |            % |               Size |   Samples |
| ---------------- | ------: | -----------: | -----------: | -----------------: | --------: |
| Standard library |  -69.2% | -184.679 KiB |       100.0% | 267 KiB → 82.3 KiB | 116 → 111 |
| Ours             | removed |        -64 B | <0.1% → 0.0% |         64 B → 0 B |     2 → 0 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change | Delta |            % |       Size | Samples | Function                        | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------------- | -------------------------------------- |
| removed | -64 B | <0.1% → 0.0% | 64 B → 0 B |   2 → 0 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |       Delta |             % |                Size | Samples | Function                                        | Location                                                                   |
| --------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------- |
|  +2042.5% | +67.976 KiB |  1.2% → 86.7% | 3.33 KiB → 71.3 KiB | 16 → 19 | `doCall(Object)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  +1880.5% | +67.875 KiB |  1.4% → 86.9% | 3.61 KiB → 71.5 KiB | 20 → 22 | `applyTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                           |
|  +1856.9% | +67.601 KiB |  1.4% → 86.6% | 3.64 KiB → 71.2 KiB | 21 → 19 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| +75500.0% | +64.882 KiB | <0.1% → 79.0% |       88 B → 65 KiB |   2 → 9 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| +31884.6% | +64.765 KiB |  0.1% → 79.0% |      208 B → 65 KiB |   3 → 9 | `visitMethod(MethodNode)`                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| +31884.6% | +64.765 KiB |  0.1% → 79.0% |      208 B → 65 KiB |   3 → 9 | `visitMethod(MethodNode)`                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| +21223.1% | +64.664 KiB |  0.1% → 79.0% |      312 B → 65 KiB |   5 → 9 | `visitClass(ClassNode)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| +13776.7% | +64.578 KiB |  0.2% → 79.0% |      480 B → 65 KiB |  9 → 11 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                     |
|       new | +64.015 KiB |  0.0% → 77.8% |        0 B → 64 KiB |   0 → 1 | `visitForLoop(ForStatement)`                    | `org.codenarc.rule.design.NestedForLoopAstVisitor`                         |
|   +502.9% |  +5.343 KiB |   0.4% → 7.8% | 1.06 KiB → 6.41 KiB | 10 → 11 | `newInstance()`                                 | `java.lang.Class`                                                          |
|   +502.9% |  +5.343 KiB |   0.4% → 7.8% | 1.06 KiB → 6.41 KiB | 10 → 11 | `getAstVisitor()`                               | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|       new |  +4.039 KiB |   0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `$getStaticMetaClass()`                         | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`          |
|       new |  +4.039 KiB |   0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>(String, int)`                           | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|       new |  +4.039 KiB |   0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>(String)`                                | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|       new |  +4.039 KiB |   0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>()`                                      | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`          |
|    +34.3% |  +2.679 KiB |  2.9% → 12.8% | 7.81 KiB → 10.5 KiB | 65 → 54 | `getMetaClass()`                                | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|       new |  +2.578 KiB |   0.0% → 3.1% |      0 B → 2.58 KiB |  0 → 22 | `linkToCallSite(Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`                        |
|       new |   +2.07 KiB |   0.0% → 2.5% |      0 B → 2.07 KiB |   0 → 2 | `$getStaticMetaClass()`                         | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|       new |   +2.07 KiB |   0.0% → 2.5% |      0 B → 2.07 KiB |   0 → 2 | `<init>()`                                      | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|   +693.3% |      +832 B |  <0.1% → 1.1% |       120 B → 952 B |   3 → 7 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size | Samples | Function                                                 | Location                                                           |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------ |
|  -99.2% | -254.617 KiB |  96.1% → 2.5% |  257 KiB → 2.05 KiB | 18 → 23 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                           |
|  -71.1% | -188.625 KiB | 99.4% → 93.3% |  265 KiB → 76.8 KiB | 91 → 81 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                 |
| removed |   -3.679 KiB |   1.4% → 0.0% |      3.68 KiB → 0 B |  36 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00`                |
|  -92.0% |   -2.617 KiB |   1.1% → 0.3% |    2.84 KiB → 232 B |  14 → 4 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                 |
| removed |   -2.015 KiB |   0.8% → 0.0% |      2.02 KiB → 0 B |   1 → 0 | `getAstVisitor()`                                        | `org.codenarc.rule.convention.HashtableIsObsoleteRule`             |
|  -29.9% |   -1.101 KiB |   1.4% → 3.1% | 3.68 KiB → 2.58 KiB | 36 → 22 | `assertClassImplementsRuleInterface(Class)`              | `org.codenarc.ruleset.RuleSetUtil`                                 |
|  -29.3% |   -1.054 KiB |   1.3% → 3.1% |  3.6 KiB → 2.55 KiB | 35 → 21 | `doCall(Object)`                                         | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2` |
| removed |       -456 B |   0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `$getStaticMetaClass()`                                  | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`            |
| removed |       -456 B |   0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `<init>()`                                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`            |
| removed |       -456 B |   0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `<init>()`                                               | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`            |
|  -78.1% |       -400 B |   0.2% → 0.1% |       512 B → 112 B |   5 → 2 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                 |
| removed |       -392 B |   0.1% → 0.0% |         392 B → 0 B |   7 → 0 | `addViolation(ASTNode, String)`                          | `org.codenarc.rule.AbstractAstVisitor`                             |
| removed |       -368 B |   0.1% → 0.0% |         368 B → 0 B |   3 → 0 | `validateXml(String)`                                    | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
| removed |       -344 B |   0.1% → 0.0% |         344 B → 0 B |   3 → 0 | `checkForCorrectColumn(ASTNode, String, int)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -344 B |   0.1% → 0.0% |         344 B → 0 B |   3 → 0 | `checkForCorrectColumn(ASTNode, String)`                 | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -328 B |   0.1% → 0.0% |         328 B → 0 B |   5 → 0 | `line(int)`                                              | `org.codenarc.source.AbstractSourceCode`                           |
| removed |       -328 B |   0.1% → 0.0% |         328 B → 0 B |   5 → 0 | `sourceLineTrimmed(ASTNode)`                             | `org.codenarc.rule.AbstractAstVisitor`                             |
| removed |       -280 B |   0.1% → 0.0% |         280 B → 0 B |   3 → 0 | `checkStatementIndent(Statement, BlockStatement)`        | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -168 B |   0.1% → 0.0% |         168 B → 0 B |   3 → 0 | `<init>(Reader)`                                         | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
|  -86.4% |       -152 B |  0.1% → <0.1% |        176 B → 24 B |       1 | `$getStaticMetaClass()`                                  | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`         |
