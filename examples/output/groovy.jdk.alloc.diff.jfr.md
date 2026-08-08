# Sampling profile diff

300 samples → 327 samples (+27 samples, +9.0%).

| Category | Change | Delta |             % |   Samples |
| -------- | -----: | ----: | ------------: | --------: |
| stdlib   |  +9.3% |   +27 | 97.0% → 97.2% | 291 → 318 |
| ours     |   0.0% |     0 |   3.0% → 2.8% |         9 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |           % | Samples | Function                                 | Location                                                               |
| -----: | ----: | ----------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                     |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                         |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `calculate(MethodNode, SourceCode)`      | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityMetric`            |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `booleanUnbox(Object)`                   | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`   |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getAnnotations(ClassNode)`              | `org.codehaus.groovy.ast.AnnotatedNode`                                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getAstVisitor()`                        | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `calculateFunctions(Collection)`         | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `applyTo(SourceCode, List)`              | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule`                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `super$4$visitClassEx(ClassNode)`        | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                         | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementRule`      |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `sort(List, Comparator)`                 | `java.util.Collections`                                                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                         | `org.codenarc.rule.groovyism.GStringAsMapKeyRule`                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                    | Location                                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getAstVisitor()`                           | `org.codenarc.rule.AbstractAstVisitorRule`                        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)`                 | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`    |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                            | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitClosureExpression(ClosureExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `lastSourceLine(ASTNode)`                   | `org.codenarc.rule.AbstractAstVisitor`                            |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>()`                                  | `org.gmetrics.metric.AbstractMethodMetric`                        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getClass()`                                | `java.lang.Object`                                                |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getSuppressionsByLineNumber(ModuleNode)`   | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `setSourceCode(SourceCode)`                 | `org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +15.5% |   +17 | 36.7% → 38.8% | 110 → 127 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
|  +25.8% |   +17 | 22.0% → 25.4% |   66 → 83 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  +20.9% |   +14 | 22.3% → 24.8% |   67 → 81 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
|  +17.3% |   +13 | 25.0% → 26.9% |   75 → 88 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|     new |   +12 |   0.0% → 3.7% |    0 → 12 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x0000000301134800`                        |
|  +15.7% |   +11 | 23.3% → 24.8% |   70 → 81 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
|     new |   +11 |   0.0% → 3.4% |    0 → 11 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000000301390800`                        |
|  +15.6% |   +10 | 21.3% → 22.6% |   64 → 74 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  +18.5% |   +10 | 18.0% → 19.6% |   54 → 64 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  +71.4% |   +10 |   4.7% → 7.3% |   14 → 24 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|     new |   +10 |   0.0% → 3.1% |    0 → 10 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000301394400`                        |
|  +10.6% |    +9 | 28.3% → 28.7% |   85 → 94 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| +900.0% |    +9 |   0.3% → 3.1% |    1 → 10 | `callCurrent(GroovyObject, Object, Object)`                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                    |
| +800.0% |    +8 |   0.3% → 2.8% |     1 → 9 | `calculateForClass(ClassNode, SourceCode)`                    | `org.gmetrics.metric.AbstractMethodMetric`                                 |
| +175.0% |    +7 |   1.3% → 3.4% |    4 → 11 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`                               |
|  +70.0% |    +7 |   3.3% → 5.2% |   10 → 17 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                               |
| +700.0% |    +7 |   0.3% → 2.4% |     1 → 8 | `callCurrent(GroovyObject, Object, Object, Object)`           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                    |
|  +15.4% |    +6 | 13.0% → 13.8% |   39 → 45 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  +22.2% |    +6 |  9.0% → 10.1% |   27 → 33 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| +150.0% |    +6 |   1.3% → 3.1% |    4 → 10 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                         | Location                                                                                          |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed |   -15 | 5.0% → 0.0% |  15 → 0 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000e801134800`                                               |
|  -83.3% |    -5 | 2.0% → 0.3% |   6 → 1 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                           |
|  -66.7% |    -4 | 2.0% → 0.6% |   6 → 2 | `loadClass(String)`                                              | `java.lang.ClassLoader`                                                                           |
| removed |    -4 | 1.3% → 0.0% |   4 → 0 | `main(String[])`                                                 | `org.codenarc.CodeNarc`                                                                           |
|  -80.0% |    -4 | 1.7% → 0.3% |   5 → 1 | `doCall(Object, Object)`                                         | `org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`                         |
| removed |    -4 | 1.3% → 0.0% |   4 → 0 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000e80144e000`                                               |
|  -42.9% |    -3 | 2.3% → 1.2% |   7 → 4 | `getMetaClass()`                                                 | `org.codehaus.groovy.reflection.ClassInfo`                                                        |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `doCall(Object)`                                                 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `processMethodOrConstructorCall(MethodCall)`                     | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                          |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `super$3$visitBlockStatement(BlockStatement)`                    | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                               |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000e801390400`                                               |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `buildLookupTable()`                                             | `org.codenarc.plugin.disablerules.LookupTable`                                                    |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `doCall(Object)`                                                 | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`                    |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `writeFileViolations(Writer, FileResults)`                       | `org.codenarc.report.TextReportWriter`                                                            |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `assertClassImplementsRuleInterface(Class)`                      | `org.codenarc.ruleset.RuleSetUtil`                                                                |
|  -18.2% |    -2 | 3.7% → 2.8% |  11 → 9 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                        |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                                |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                                    |
| removed |    -2 | 0.7% → 0.0% |   2 → 0 | `visitClassEx(ClassNode)`                                        | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`                                          |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `visitClassComplete(ClassNode)`                                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                                   |

# Allocated heap profile diff

Allocated 12 GiB → 11.8 GiB (-200.783 MiB, -1.6%) over 6,288 samples → 6,320 samples (1.96 MiB → 1.92 MiB per sample).

| Category | Change |        Delta |             % |                Size |       Samples |
| -------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| stdlib   |  -1.9% | -233.962 MiB | 99.4% → 99.1% |   12 GiB → 11.7 GiB | 6,195 → 6,216 |
| ours     | +43.4% |  +33.176 MiB |   0.6% → 0.9% |  76.5 MiB → 110 MiB |       39 → 53 |
| unknown  |  +6.6% |   +2.343 KiB |         <0.1% | 35.8 KiB → 38.1 KiB |       54 → 51 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |                Size | Samples | Function                                               | Location                                                                       |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| +106.9% | +13.133 MiB |  0.1% → 0.2% | 12.3 MiB → 25.4 MiB |  7 → 15 | `toString()`                                           | `java.lang.StringBuilder`                                                      |
|     new |  +7.996 MiB |  0.0% → 0.1% |         0 B → 8 MiB |   0 → 4 | `processMethodOrConstructorCall(MethodCall)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                       |
|     new |  +6.482 MiB |  0.0% → 0.1% |      0 B → 6.48 MiB |   0 → 1 | `getSuppressWarningsAnnotations(AnnotatedNode)`        | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|     new |  +5.997 MiB | 0.0% → <0.1% |         0 B → 6 MiB |   0 → 3 | `record(Object, int)`                                  | `org.codehaus.groovy.runtime.powerassert.ValueRecorder`                        |
|     new |  +3.997 MiB | 0.0% → <0.1% |         0 B → 4 MiB |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor`           |
|     new |  +3.427 MiB | 0.0% → <0.1% |      0 B → 3.43 MiB |   0 → 2 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                            |
| +100.0% |  +1.999 MiB |        <0.1% |       2 MiB → 4 MiB |   1 → 2 | `visitBlockStatement(BlockStatement)`                  | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`              |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`          | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`             |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitAnnotations(AnnotatedNode)`                      | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`          |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`          | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                   |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitVariableExpression(VariableExpression)`          | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                       |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitExpressionStatement(ExpressionStatement)`        | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                       |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitVariableExpression(VariableExpression)`          | `org.codenarc.rule.convention.NoFloatAstVisitor`                               |
|  +50.0% |  +1.999 MiB |        <0.1% |       4 MiB → 6 MiB |   2 → 3 | `createRange(Object, Object, boolean, boolean)`        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                            |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `setDisabledRulesByLine(int)`                          | `org.codenarc.plugin.disablerules.LookupTable`                                 |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `getViolationLocationString(Violation, String)`        | `org.codenarc.report.TextReportWriter`                                         |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethod(MethodNode)`                              | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`                |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `<init>()`                                             | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.unnecessary.UnnecessaryNullCheckBeforeInstanceOfAstVisitor` |
|     new |  +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `isRuleSuppressed(Rule)`                               | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |               Size | Samples | Function                                                         | Location                                                                       |
| ------: | ----------: | -----------: | -----------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -30.3% | -31.412 MiB |  0.8% → 0.6% | 104 MiB → 72.1 MiB | 67 → 60 | `iterator()`                                                     | `java.util.ArrayList`                                                          |
|  -27.9% | -21.527 MiB |  0.6% → 0.5% |  77 MiB → 55.5 MiB | 39 → 28 | `matcher(CharSequence)`                                          | `java.util.regex.Pattern`                                                      |
|  -80.0% |  -7.995 MiB | 0.1% → <0.1% |   9.99 MiB → 2 MiB |   4 → 1 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|  -40.0% |  -3.998 MiB | 0.1% → <0.1% |     10 MiB → 6 MiB |   5 → 3 | `isCase(Object, Object)`                                         | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                            |
| removed |  -3.998 MiB | <0.1% → 0.0% |        4 MiB → 0 B |   2 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
|  -62.0% |  -3.263 MiB |        <0.1% |   5.26 MiB → 2 MiB |   3 → 1 | `<init>(String, boolean)`                                        | `org.codenarc.util.WildcardPattern`                                            |
|  -62.2% |  -2.486 MiB |        <0.1% |   4 MiB → 1.51 MiB |   2 → 1 | `shouldApplyThisRuleTo(SourceCode)`                              | `org.codenarc.rule.AbstractRule`                                               |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                     |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                       |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `getText()`                                                      | `org.codehaus.groovy.ast.expr.PropertyExpression`                              |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `isViolationSuppressed(Violation)`                               | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `visitClassEx(ClassNode)`                                        | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor` |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `addViolationIfDoubleQuoted(ConstantExpression)`                 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                   |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `visitDeclarationExpression(DeclarationExpression)`              | `org.codenarc.rule.convention.NoDefAstVisitor`                                 |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `visitField(FieldNode)`                                          | `org.codenarc.rule.design.ImplementationAsTypeAstVisitor`                      |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`            |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `visitVariableExpression(VariableExpression)`                    | `org.codenarc.rule.ClassReferenceAstVisitor`                                   |
| removed |  -1.999 MiB | <0.1% → 0.0% |        2 MiB → 0 B |   1 → 0 | `visitField(FieldNode)`                                          | `org.codenarc.rule.design.FinalClassWithProtectedMemberAstVisitor`             |
|  -50.0% |  -1.999 MiB |        <0.1% |      4 MiB → 2 MiB |   2 → 1 | `<init>()`                                                       | `org.codenarc.rule.AbstractAstVisitor`                                         |
|  -50.0% |  -1.998 MiB |        <0.1% |      4 MiB → 2 MiB |   2 → 1 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                   |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|    new |   +1.041 GiB |   0.0% → 8.8% |      0 B → 1.04 GiB |       0 → 540 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000301394400`                        |
|    new | +657.905 MiB |   0.0% → 5.4% |       0 B → 658 MiB |       0 → 333 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000000301390800`                        |
|    new | +295.853 MiB |   0.0% → 2.4% |       0 B → 296 MiB |       0 → 147 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301449c00`                        |
|    new | +274.226 MiB |   0.0% → 2.3% |       0 B → 274 MiB |       0 → 137 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013b8c00`                        |
|    new | +229.603 MiB |   0.0% → 1.9% |       0 B → 230 MiB |       0 → 159 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x0000000301134800`                        |
|  +2.5% |  +91.972 MiB | 29.3% → 30.5% | 3.53 GiB → 3.62 GiB | 1,846 → 1,898 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| +11.7% |  +89.462 MiB |   6.2% → 7.1% |   768 MiB → 857 MiB |     387 → 424 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|    new |  +81.385 MiB |   0.0% → 0.7% |      0 B → 81.4 MiB |        0 → 39 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301470800`                        |
|  +2.3% |  +64.148 MiB | 22.3% → 23.2% | 2.69 GiB → 2.75 GiB | 1,417 → 1,452 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
|  +4.2% |  +56.596 MiB | 10.9% → 11.5% | 1.31 GiB → 1.37 GiB |     678 → 701 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
| +35.0% |  +55.969 MiB |   1.3% → 1.8% |   160 MiB → 216 MiB |       60 → 46 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`       |
| +26.2% |  +55.584 MiB |   1.7% → 2.2% |   212 MiB → 267 MiB |     109 → 132 | `findLineWithDeclaration(ASTNode, String)`                    | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|    new |  +50.935 MiB |   0.0% → 0.4% |      0 B → 50.9 MiB |        0 → 27 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301402400`                        |
| +20.4% |  +46.284 MiB |   1.8% → 2.3% |   227 MiB → 273 MiB |     117 → 135 | `checkDeclaration(ASTNode, String, String)`                   | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|  +1.9% |  +44.267 MiB | 19.1% → 19.7% | 2.29 GiB → 2.34 GiB | 1,190 → 1,211 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| +40.6% |  +43.177 MiB |   0.9% → 1.2% |   106 MiB → 149 MiB |       58 → 75 | `applyVisitor(AstVisitor, SourceCode)`                        | `org.codenarc.rule.AbstractSharedAstVisitorRule`                           |
| +35.1% |  +40.116 MiB |   0.9% → 1.3% |   114 MiB → 154 MiB |       62 → 78 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractSharedAstVisitorRule`                           |
|  +6.6% |  +34.289 MiB |   4.2% → 4.6% |   521 MiB → 556 MiB |     250 → 273 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                               |
| +27.0% |  +32.298 MiB |   1.0% → 1.3% |   119 MiB → 152 MiB |       62 → 75 | `visitClassEx(ClassNode)`                                     | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|    new |  +27.299 MiB |   0.0% → 0.2% |      0 B → 27.3 MiB |        0 → 16 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301142800`                        |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed |   -1.196 GiB |   9.9% → 0.0% |       1.2 GiB → 0 B |       601 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000e801394000`                                 |
| removed | -602.404 MiB |   4.9% → 0.0% |       602 MiB → 0 B |       302 → 0 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000e801390400`                                 |
| removed | -418.808 MiB |   3.4% → 0.0% |       419 MiB → 0 B |       139 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e80144e000`                                 |
| removed | -324.055 MiB |   2.6% → 0.0% |       324 MiB → 0 B |       157 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e8013c0800`                                 |
| removed | -206.646 MiB |   1.7% → 0.0% |       207 MiB → 0 B |       141 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000e801134800`                                 |
|   -3.1% | -144.114 MiB | 37.3% → 36.7% | 4.49 GiB → 4.35 GiB | 2,301 → 2,264 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
|   -3.4% | -144.003 MiB | 33.9% → 33.3% | 4.08 GiB → 3.94 GiB | 2,068 → 2,042 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
|   -2.6% | -138.652 MiB | 43.5% → 43.1% |  5.23 GiB → 5.1 GiB | 2,671 → 2,647 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                                  |
|  -38.8% | -127.936 MiB |   2.7% → 1.7% |   330 MiB → 202 MiB |      94 → 100 | `doCall(Object)`                                              | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|  -29.6% | -117.938 MiB |   3.2% → 2.3% |   398 MiB → 280 MiB |     128 → 139 | `doCall(Object)`                                              | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
|  -29.1% | -117.938 MiB |   3.3% → 2.4% |   406 MiB → 288 MiB |     132 → 143 | `getNumberOfViolationsWithPriority(int, boolean)`             | `org.codenarc.results.FileResults`                                                  |
|  -29.1% | -117.938 MiB |   3.3% → 2.4% |   406 MiB → 288 MiB |     132 → 143 | `getNumberOfViolationsWithPriority(int)`                      | `org.codenarc.results.FileResults`                                                  |
|   -1.3% | -105.546 MiB | 65.0% → 65.3% | 7.83 GiB → 7.72 GiB | 4,012 → 4,074 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                                  |
|   -2.3% |   -79.37 MiB | 28.0% → 27.8% | 3.37 GiB → 3.29 GiB | 1,715 → 1,710 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                    |
| removed |  -77.378 MiB |   0.6% → 0.0% |      77.4 MiB → 0 B |        39 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801470c00`                                 |
|  -54.8% |  -45.977 MiB |   0.7% → 0.3% |     84 MiB → 38 MiB |       16 → 19 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`                |
|  -10.9% |  -44.297 MiB |   3.3% → 3.0% |   407 MiB → 362 MiB |     206 → 180 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                   |
| removed |  -41.295 MiB |   0.3% → 0.0% |      41.3 MiB → 0 B |        19 → 0 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801402400`                                 |
|   -2.2% |  -37.898 MiB | 13.7% → 13.6% | 1.65 GiB → 1.61 GiB |     846 → 831 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                   |
|   -3.7% |  -37.667 MiB |   8.3% → 8.1% |  1020 MiB → 982 MiB |     522 → 507 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                            |

# Retained heap profile diff

Retained 55.7 KiB → 28.1 KiB (-27.664 KiB, -49.6%) over 109 samples → 117 samples (523 B → 246 B per sample).

| Category | Change |       Delta |              % |              Size |   Samples |
| -------- | -----: | ----------: | -------------: | ----------------: | --------: |
| stdlib   | -49.7% | -27.695 KiB | 100.0% → 99.9% | 55.7 KiB → 28 KiB | 109 → 116 |
| ours     |    new |       +32 B |    0.0% → 0.1% |        0 B → 32 B |     0 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change | Delta |           % |       Size | Samples | Function                        | Location                               |
| -----: | ----: | ----------: | ---------: | ------: | ------------------------------- | -------------------------------------- |
|    new | +32 B | 0.0% → 0.1% | 0 B → 32 B |   0 → 1 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |       Delta |             % |                Size | Samples | Function                                                         | Location                                                                   |
| --------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +13436.8% | +19.945 KiB |  0.3% → 71.6% |    152 B → 20.1 KiB |   3 → 4 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|   +185.9% | +13.406 KiB | 12.9% → 73.5% | 7.21 KiB → 20.6 KiB |      13 | `getAst()`                                                       | `org.codenarc.source.AbstractSourceCode`                                   |
|   +185.9% | +13.406 KiB | 12.9% → 73.5% | 7.21 KiB → 20.6 KiB |      13 | `init()`                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|   +168.8% | +13.296 KiB | 14.1% → 75.5% | 7.88 KiB → 21.2 KiB | 25 → 23 | `init()`                                                         | `org.codenarc.source.AbstractSourceCode`                                   |
|   +185.0% | +13.281 KiB | 12.9% → 72.9% | 7.18 KiB → 20.5 KiB |      12 | `isRuleSuppressed(Rule)`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|    +15.7% |  +2.921 KiB | 33.5% → 76.9% | 18.7 KiB → 21.6 KiB | 31 → 33 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                                         |
|   +215.7% |    +1.5 KiB |   1.2% → 7.8% |     712 B → 2.2 KiB |       9 | `<init>(Object, Object)`                                         | `groovy.lang.Closure`                                                      |
|   +260.3% |  +1.484 KiB |   1.0% → 7.3% |    584 B → 2.05 KiB |       8 | `<clinit>()`                                                     | `groovy.lang.Closure`                                                      |
|       new |      +616 B |   0.0% → 2.1% |         0 B → 616 B |  0 → 15 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301134800`                        |
|   +120.3% |      +568 B |   0.8% → 3.6% |    472 B → 1.02 KiB | 10 → 17 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
|   +100.0% |      +424 B |   0.7% → 3.0% |       424 B → 848 B |  9 → 12 | `visitClass(ClassNode)`                                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  +1275.0% |      +408 B |   0.1% → 1.5% |        32 B → 440 B |   1 → 3 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
|    +89.1% |      +328 B |   0.6% → 2.4% |       368 B → 696 B |   8 → 9 | `visitMethod(MethodNode)`                                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
|    +16.4% |      +232 B |   2.5% → 5.7% | 1.38 KiB → 1.61 KiB | 21 → 28 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|       new |      +224 B |   0.0% → 0.8% |         0 B → 224 B |   0 → 2 | `super$3$applyTo(SourceCode, List)`                              | `org.codenarc.rule.formatting.IndentationRule`                             |
|       new |      +224 B |   0.0% → 0.8% |         0 B → 224 B |   0 → 1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|       new |      +224 B |   0.0% → 0.8% |         0 B → 224 B |   0 → 1 | `checkStatementIndent(Statement, BlockStatement)`                | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|       new |      +216 B |   0.0% → 0.8% |         0 B → 216 B |   0 → 2 | `checkForCorrectColumn(ASTNode, String, int)`                    | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|       new |      +216 B |   0.0% → 0.8% |         0 B → 216 B |   0 → 2 | `checkForCorrectColumn(ASTNode, String)`                         | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|       new |      +176 B |   0.0% → 0.6% |         0 B → 176 B |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size | Samples | Function                                                                    | Location                                                                   |
| ------: | ----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -99.2% | -32.023 KiB |  58.0% → 1.0% |    32.3 KiB → 280 B |   4 → 6 | `main(String[])`                                                            | `org.codenarc.CodeNarc`                                                    |
|  -53.4% | -27.437 KiB | 92.3% → 85.5% |   51.4 KiB → 24 KiB | 78 → 81 | `linkToCallSite(Object, Object, Object)`                                    | `java.lang.invoke.Invokers$Holder`                                         |
| removed |   -8.32 KiB |  14.9% → 0.0% |      8.32 KiB → 0 B |   1 → 0 | `getFormattedTimestamp()`                                                   | `org.codenarc.report.AbstractReportWriter`                                 |
| removed |   -8.32 KiB |  14.9% → 0.0% |      8.32 KiB → 0 B |   1 → 0 | `writeTitle(Writer)`                                                        | `org.codenarc.report.TextReportWriter`                                     |
| removed |   -8.32 KiB |  14.9% → 0.0% |      8.32 KiB → 0 B |   1 → 0 | `writeReport(Writer, AnalysisContext, Results)`                             | `org.codenarc.report.TextReportWriter`                                     |
| removed |  -2.164 KiB |   3.9% → 0.0% |      2.16 KiB → 0 B |   1 → 0 | `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`               |
|  -95.7% |   -2.07 KiB |   3.9% → 0.3% |     2.16 KiB → 96 B |   1 → 3 | `getLines()`                                                                | `org.codenarc.source.AbstractSourceCode`                                   |
|  -92.8% |  -2.007 KiB |   3.9% → 0.6% |    2.16 KiB → 160 B |   1 → 5 | `line(int)`                                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
|  -92.8% |  -2.007 KiB |   3.9% → 0.6% |    2.16 KiB → 160 B |   1 → 5 | `sourceLineTrimmed(ASTNode)`                                                | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -91.3% |  -1.976 KiB |   3.9% → 0.7% |    2.16 KiB → 192 B |   1 → 6 | `addViolation(ASTNode, String)`                                             | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -70.9% |   -1.75 KiB |   4.4% → 2.6% |    2.47 KiB → 736 B |  6 → 13 | `linkToCallSite(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                                         |
| removed |  -1.093 KiB |   2.0% → 0.0% |      1.09 KiB → 0 B |  18 → 0 | `linkToCallSite(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801134800`                        |
|  -43.0% |  -1.078 KiB |   4.5% → 5.1% | 2.51 KiB → 1.43 KiB | 38 → 33 | `getMetaClass()`                                                            | `org.codehaus.groovy.reflection.ClassInfo`                                 |
| removed |      -528 B |   0.9% → 0.0% |         528 B → 0 B |   1 → 0 | `$getStaticMetaClass()`                                                     | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`      |
| removed |      -528 B |   0.9% → 0.0% |         528 B → 0 B |   1 → 0 | `<init>()`                                                                  | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`      |
|  -45.0% |      -504 B |   2.0% → 2.1% |    1.09 KiB → 616 B | 18 → 15 | `assertClassImplementsRuleInterface(Class)`                                 | `org.codenarc.ruleset.RuleSetUtil`                                         |
|  -21.9% |      -312 B |   2.5% → 3.9% | 1.39 KiB → 1.09 KiB |      21 | `doCall(Object)`                                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -84.4% |      -304 B |   0.6% → 0.2% |        360 B → 56 B |   3 → 1 | `initializeRuleRegistry()`                                                  | `org.codenarc.CodeNarcRunner`                                              |
|  -27.4% |      -296 B |   1.9% → 2.7% |    1.05 KiB → 784 B |      17 | `doCall(Object)`                                                            | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
|  -83.3% |      -280 B |   0.6% → 0.2% |        336 B → 56 B |   2 → 1 | `<init>(Object[], String[])`                                                | `org.codehaus.groovy.runtime.GStringImpl`                                  |
