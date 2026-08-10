# Profile diff

368 samples → 327 samples (-41 samples, -11.1%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  -9.0% |   -32 | 96.7% → 99.1% | 356 → 324 |
| Ours             | -75.0% |    -9 |   3.3% → 0.9% |    12 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |           % | Samples | Function                                 | Location                                       |
| -----: | ----: | ----------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|    new |    +2 | 0.0% → 0.6% |   0 → 2 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>()`                               | `org.codenarc.rule.Violation`                  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                         | Location                                                                                 |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `init()`                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                               |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                                       |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                                 | `org.codenarc.rule.unnecessary.UnnecessaryCastRule`                                      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `super$2$visitClosureExpression(ClosureExpression)`              | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `findMethodHandleType(Class, Class[])`                           | `java.lang.invoke.MethodHandleNatives`                                                   |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getName()`                                                      | `org.codenarc.rule.basic.ConstantTernaryExpressionRule`                                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visit(GroovyCodeVisitor)`                                       | `org.codehaus.groovy.ast.expr.ConstantExpression`                                        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Object, Object)`                                         | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                                 | `org.codenarc.rule.basic.DuplicateMapKeyRule`                                            |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `super$4$visitClassEx(ClassNode)`                                | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                    |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `call(Object)`                                                   | `java_util_Map$isEmpty`                                                                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitNotExpression(NotExpression)`                              | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`                               |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                         | Location                                                                       |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|     new |   +11 |   0.0% → 3.4% |    0 → 11 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000c001134800`                            |
|  +90.9% |   +10 |   3.0% → 6.4% |   11 → 21 | `doCall(Object)`                                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`    |
|   +5.1% |    +7 | 37.2% → 44.0% | 137 → 144 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                                             |
|     new |    +7 |   0.0% → 2.1% |     0 → 7 | `checkDeclaration(ASTNode, String, String)`                      | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`            |
| +120.0% |    +6 |   1.4% → 3.4% |    5 → 11 | `visitClosureExpression(ClosureExpression)`                      | `org.codehaus.groovy.ast.CodeVisitorSupport`                                   |
|     new |    +6 |   0.0% → 1.8% |     0 → 6 | `processDirectory(String, RuleSet)`                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
|     new |    +6 |   0.0% → 1.8% |     0 → 6 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000c001394400`                            |
|     new |    +6 |   0.0% → 1.8% |     0 → 6 | `findLineWithDeclaration(ASTNode, String)`                       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`            |
|     new |    +6 |   0.0% → 1.8% |     0 → 6 | `calculate(MethodNode, SourceCode)`                              | `org.gmetrics.metric.abc.AbcMetric`                                            |
| +500.0% |    +5 |   0.3% → 1.8% |     1 → 6 | `loadClass(String)`                                              | `java.lang.ClassLoader`                                                        |
|  +21.7% |    +5 |   6.3% → 8.6% |   23 → 28 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                             |
| +500.0% |    +5 |   0.3% → 1.8% |     1 → 6 | `doCall(Object)`                                                 | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
|     new |    +5 |   0.0% → 1.5% |     0 → 5 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000c001390800`                            |
|  +66.7% |    +4 |   1.6% → 3.1% |    6 → 10 | `getMetaClass()`                                                 | `org.codehaus.groovy.reflection.ClassInfo`                                     |
| +133.3% |    +4 |   0.8% → 2.1% |     3 → 7 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                             |
| +400.0% |    +4 |   0.3% → 1.5% |     1 → 5 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractMethodVisitor`                                      |
|     new |    +4 |   0.0% → 1.2% |     0 → 4 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`            |
|     new |    +4 |   0.0% → 1.2% |     0 → 4 | `visitClassEx(ClassNode)`                                        | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
|  +75.0% |    +3 |   1.1% → 2.1% |     4 → 7 | `callCurrent(GroovyObject, Object, Object)`                      | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                        |
| +300.0% |    +3 |   0.3% → 1.2% |     1 → 4 | `line(int)`                                                      | `org.codenarc.source.AbstractSourceCode`                                       |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                         | Location                                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
|  -17.3% |   -46 | 72.3% → 67.3% | 266 → 220 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
|  -31.0% |   -36 | 31.5% → 24.5% |  116 → 80 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  -26.2% |   -33 | 34.2% → 28.4% |  126 → 93 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -30.1% |   -31 | 28.0% → 22.0% |  103 → 72 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
|  -27.9% |   -24 | 23.4% → 19.0% |   86 → 62 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  -21.0% |   -22 | 28.5% → 25.4% |  105 → 83 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
|  -31.8% |   -21 | 17.9% → 13.8% |   66 → 45 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -27.8% |   -20 | 19.6% → 15.9% |   72 → 52 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  -25.0% |   -19 | 20.7% → 17.4% |   76 → 57 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -30.5% |   -18 | 16.0% → 12.5% |   59 → 41 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -32.7% |   -17 | 14.1% → 10.7% |   52 → 35 | `visitMethod(MethodNode)`                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -29.5% |   -13 |  12.0% → 9.5% |   44 → 31 | `visitConstructorOrMethod(MethodNode, boolean)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| removed |   -12 |   3.3% → 0.0% |    12 → 0 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000a801390800`                        |
| removed |   -11 |   3.0% → 0.0% |    11 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`                        |
|  -25.6% |   -11 |  11.7% → 9.8% |   43 → 32 | `visitBlockStatement(BlockStatement)`            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| removed |    -8 |   2.2% → 0.0% |     8 → 0 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801394400`                        |
|  -12.1% |    -7 | 15.8% → 15.6% |   58 → 51 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  -10.9% |    -6 | 14.9% → 15.0% |   55 → 49 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
|  -11.5% |    -6 |         14.1% |   52 → 46 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -50.0% |    -6 |   3.3% → 1.8% |    12 → 6 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |

# Allocated heap profile diff

Allocated 12 GiB → 11.9 GiB (-73.473 MiB, -0.6%) over 6,318 samples → 6,306 samples (1.94 MiB → 1.93 MiB per sample).

| Category         | Change |       Delta |     % |                Size |       Samples |
| ---------------- | -----: | ----------: | ----: | ------------------: | ------------: |
| Standard library |  -0.6% | -72.717 MiB | 99.1% | 11.9 GiB → 11.8 GiB | 6,212 → 6,199 |
| Ours             |  -0.7% |    -771 KiB |  0.9% |   107 MiB → 106 MiB |       55 → 53 |
| Unknown          |  -8.6% |   -3.21 KiB | <0.1% | 37.4 KiB → 34.2 KiB |       51 → 54 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Samples | Function                                                    | Location                                                                    |
| ------: | ---------: | -----------: | ------------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +16.2% | +11.44 MiB |  0.6% → 0.7% |   70.5 MiB → 82 MiB | 35 → 34 | `matcher(CharSequence)`                                     | `java.util.regex.Pattern`                                                   |
| +389.6% | +7.953 MiB | <0.1% → 0.1% | 2.04 MiB → 9.99 MiB |   2 → 5 | `collectViolations(SourceCode, RuleSet)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +42.9% | +5.997 MiB |  0.1% → 0.2% |     14 MiB → 20 MiB |  7 → 10 | `<init>()`                                                  | `java.util.HashSet`                                                         |
|     new | +5.997 MiB | 0.0% → <0.1% |         0 B → 6 MiB |   0 → 3 | `<init>(String, boolean)`                                   | `org.codenarc.util.WildcardPattern`                                         |
|  +49.3% |  +5.59 MiB |         0.1% | 11.3 MiB → 16.9 MiB |   6 → 9 | `valueOf(int)`                                              | `java.lang.Integer`                                                         |
| +100.1% |     +4 MiB | <0.1% → 0.1% |       4 MiB → 8 MiB |   2 → 4 | `writeViolation(Writer, Violation, String)`                 | `org.codenarc.report.TextReportWriter`                                      |
|     new | +3.998 MiB | 0.0% → <0.1% |         0 B → 4 MiB |   0 → 2 | `<init>()`                                                  | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|     new | +3.998 MiB | 0.0% → <0.1% |         0 B → 4 MiB |   0 → 2 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`         |
| +100.0% | +3.998 MiB | <0.1% → 0.1% |       4 MiB → 8 MiB |   2 → 4 | `doCall(Object)`                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|     new | +3.997 MiB | 0.0% → <0.1% |         0 B → 4 MiB |   0 → 2 | `markVariableAsReferenced(String, VariableExpression)`      | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                         |
|  +99.9% | +3.995 MiB | <0.1% → 0.1% |    4 MiB → 7.99 MiB |   2 → 3 | `matches(String)`                                           | `org.codenarc.util.WildcardPattern`                                         |
|  +41.9% | +3.913 MiB |         0.1% | 9.34 MiB → 13.3 MiB |   5 → 7 | `isCase(Object, Object)`                                    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                         |
|  +16.7% | +2.193 MiB |         0.1% | 13.1 MiB → 15.3 MiB |  9 → 12 | `toString()`                                                | `java.lang.StringBuilder`                                                   |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitConstructorCallExpression(ConstructorCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor`          |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitBlockStatement(BlockStatement)`                       | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`            |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `checkMethods(ClassMetricResult)`                           | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethod(MethodNode)`                                   | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`             |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `setDisabledRulesByLine(int)`                               | `org.codenarc.plugin.disablerules.LookupTable`                              |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.basic.BrokenNullCheckAstVisitor`                         |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodComplete(MethodNode)`                           | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |                Size | Samples | Function                                        | Location                                                                               |
| ------: | ----------: | -----------: | ------------------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------- |
|  -32.8% | -20.136 MiB |  0.5% → 0.3% | 61.4 MiB → 41.3 MiB | 32 → 22 | `compile(String)`                               | `java.util.regex.Pattern`                                                              |
|  -83.3% |  -9.995 MiB | 0.1% → <0.1% |      12 MiB → 2 MiB |   5 → 1 | `<init>()`                                      | `org.codenarc.rule.AbstractAstVisitor`                                                 |
| removed |  -5.997 MiB | <0.1% → 0.0% |         6 MiB → 0 B |   3 → 0 | `applyTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                                       |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   2 → 0 | `visitBinaryExpression(BinaryExpression)`       | `org.codenarc.rule.unnecessary.ConsecutiveStringConcatenationAstVisitor`               |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   2 → 0 | `processMethodOrConstructorCall(MethodCall)`    | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                               |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   2 → 0 | `getViolationLocationString(Violation, String)` | `org.codenarc.report.TextReportWriter`                                                 |
|  -66.7% |  -3.998 MiB |        <0.1% |       6 MiB → 2 MiB |   3 → 1 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractAstVisitorRule`                                             |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   2 → 0 | `doCall(Object)`                                | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3` |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   2 → 0 | `processParameters(Parameter[], String)`        | `org.codenarc.rule.naming.ParameterNameAstVisitor`                                     |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `isRuleSuppressed(Rule)`                        | `org.codenarc.analyzer.SuppressionAnalyzer`                                            |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `getAnonymousClasses()`                         | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                             |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `<init>(Metric, MetricLevel, Object, Integer)`  | `org.gmetrics.result.SingleNumberMetricResult`                                         |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`       | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`                |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `<init>()`                                      | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`                      |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `visitBlockStatement(BlockStatement)`           | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`                      |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `visitExpressionStatement(ExpressionStatement)` | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                               |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `createUsagePattern(String)`                    | `org.codenarc.rule.imports.UnusedImportRule`                                           |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `<init>()`                                      | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `addViolation(MethodNode, String)`              | `org.codenarc.rule.AbstractMethodVisitor`                                              |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `hasOneStaticFieldOfItself(ClassNode)`          | `org.codenarc.rule.design.StatelessSingletonAstVisitor`                                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |   +1.067 GiB |   0.0% → 9.0% |      0 B → 1.07 GiB |       0 → 550 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000c001394400`                                 |
|    new | +673.755 MiB |   0.0% → 5.5% |       0 B → 674 MiB |       0 → 345 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000c001390800`                                 |
|    new | +351.819 MiB |   0.0% → 2.9% |       0 B → 352 MiB |       0 → 141 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000c00144d800`                                 |
|    new | +279.165 MiB |   0.0% → 2.3% |       0 B → 279 MiB |       0 → 141 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c0013b8c00`                                 |
|    new | +232.244 MiB |   0.0% → 1.9% |       0 B → 232 MiB |       0 → 162 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000c001134800`                                 |
| +17.1% |  +83.161 MiB |   4.0% → 4.7% |   487 MiB → 570 MiB |     232 → 269 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
|    new |  +82.857 MiB |   0.0% → 0.7% |      0 B → 82.9 MiB |        0 → 42 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c001471400`                                 |
|  +2.4% |  +78.281 MiB | 26.3% → 27.1% | 3.15 GiB → 3.23 GiB | 1,618 → 1,595 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                                  |
|    new |  +54.078 MiB |   0.0% → 0.4% |      0 B → 54.1 MiB |        0 → 29 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c001402400`                                 |
| +51.9% |  +44.746 MiB |   0.7% → 1.1% |  86.3 MiB → 131 MiB |       46 → 66 | `applyVisitor(AstVisitor, SourceCode)`                        | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                    |
| +43.0% |   +40.15 MiB |   0.8% → 1.1% |  93.3 MiB → 133 MiB |       50 → 68 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                    |
|  +4.5% |  +38.217 MiB |   6.9% → 7.3% |   850 MiB → 888 MiB |     418 → 430 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                 |
| +19.8% |  +35.981 MiB |   1.5% → 1.8% |   182 MiB → 218 MiB |       44 → 42 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`                |
|  +7.0% |  +35.729 MiB |   4.2% → 4.5% |   509 MiB → 544 MiB |     262 → 271 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
| +11.2% |   +33.98 MiB |   2.5% → 2.8% |   304 MiB → 338 MiB |     141 → 134 | `doCall(Object)`                                              | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
| +88.9% |  +32.647 MiB |   0.3% → 0.6% | 36.7 MiB → 69.4 MiB |       19 → 24 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`       | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                        |
| +84.3% |  +32.644 MiB |   0.3% → 0.6% | 38.7 MiB → 71.3 MiB |       20 → 25 | `visitBinaryExpression(BinaryExpression)`                     | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                        |
| +12.8% |  +31.981 MiB |   2.0% → 2.3% |   250 MiB → 282 MiB |     114 → 106 | `doCall(Object)`                                              | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|  +7.3% |  +30.921 MiB |   3.5% → 3.7% |   425 MiB → 456 MiB |     201 → 213 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
|    new |  +30.351 MiB |   0.0% → 0.2% |      0 B → 30.4 MiB |        0 → 16 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000c001142800`                                 |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | --------------------------------------------------- |
| removed |   -1.068 GiB |   8.9% → 0.0% |      1.07 GiB → 0 B |       551 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801394400` |
| removed | -676.174 MiB |   5.5% → 0.0% |       676 MiB → 0 B |       336 → 0 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801390800` |
| removed | -327.872 MiB |   2.7% → 0.0% |       328 MiB → 0 B |       154 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a80144dc00` |
| removed | -293.621 MiB |   2.4% → 0.0% |       294 MiB → 0 B |       148 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8013b8c00` |
| removed | -237.677 MiB |   1.9% → 0.0% |       238 MiB → 0 B |       150 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000a801134800` |
|   -4.7% | -127.978 MiB | 22.2% → 21.3% | 2.65 GiB → 2.53 GiB | 1,374 → 1,322 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`          |
|   -1.5% | -121.536 MiB | 64.7% → 64.1% | 7.74 GiB → 7.62 GiB | 4,042 → 3,975 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|   -2.3% | -120.761 MiB | 43.7% → 43.0% | 5.23 GiB → 5.11 GiB | 2,691 → 2,663 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
|   -4.1% | -114.798 MiB | 23.0% → 22.2% | 2.75 GiB → 2.64 GiB | 1,430 → 1,382 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                    |
| removed | -114.234 MiB |   0.9% → 0.0% |       114 MiB → 0 B |        57 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801470c00` |
|   -2.3% |  -94.098 MiB | 33.8% → 33.2% | 4.04 GiB → 3.94 GiB | 2,078 → 2,066 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`      |
|   -6.0% |   -91.14 MiB | 12.5% → 11.8% |  1.5 GiB → 1.41 GiB |     747 → 731 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
|   -2.6% |   -90.83 MiB | 28.6% → 28.0% | 3.42 GiB → 3.33 GiB | 1,756 → 1,744 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`    |
|   -4.8% |  -82.293 MiB | 14.1% → 13.5% | 1.69 GiB → 1.61 GiB |     865 → 820 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|   -1.8% |  -81.508 MiB | 37.8% → 37.4% | 4.52 GiB → 4.44 GiB | 2,327 → 2,305 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`      |
|   -3.9% |   -79.29 MiB | 16.4% → 15.9% | 1.96 GiB → 1.89 GiB |   1,007 → 971 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`              |
|   -3.0% |  -71.801 MiB | 19.5% → 19.0% | 2.33 GiB → 2.26 GiB | 1,196 → 1,162 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`              |
|   -4.2% |  -70.368 MiB | 13.6% → 13.1% | 1.62 GiB → 1.56 GiB |     831 → 795 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  -16.0% |  -68.254 MiB |   3.5% → 3.0% |   428 MiB → 359 MiB |     211 → 181 | `addViolationIfDuplicate(Expression, boolean)`                | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`  |
|  -15.8% |  -66.255 MiB |   3.4% → 2.9% |   420 MiB → 353 MiB |     207 → 178 | `addViolationIfDuplicate(Expression)`                         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`  |

# Retained heap profile diff

Retained 263 KiB → 18.4 KiB (-244.578 KiB, -93.0%) over 105 samples → 115 samples (2.5 KiB → 164 B per sample).

| Category         |  Change |        Delta |            % |               Size |   Samples |
| ---------------- | ------: | -----------: | -----------: | -----------------: | --------: |
| Standard library |  -93.0% | -244.484 KiB |       100.0% | 263 KiB → 18.4 KiB | 104 → 115 |
| Ours             | removed |        -96 B | <0.1% → 0.0% |         96 B → 0 B |     1 → 0 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change | Delta |            % |       Size | Samples | Function   | Location                |
| ------: | ----: | -----------: | ---------: | ------: | ---------- | ----------------------- |
| removed | -96 B | <0.1% → 0.0% | 96 B → 0 B |   1 → 0 | `<init>()` | `org.codenarc.CodeNarc` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|   Change |      Delta |            % |                Size | Samples | Function                                | Location                                                                   |
| -------: | ---------: | -----------: | ------------------: | ------: | --------------------------------------- | -------------------------------------------------------------------------- |
|  +206.1% |  +5.25 KiB | 1.0% → 42.3% |  2.55 KiB → 7.8 KiB | 40 → 53 | `getMetaClass()`                        | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|  +310.8% | +4.953 KiB | 0.6% → 35.5% | 1.59 KiB → 6.55 KiB | 18 → 27 | `doCall(Object)`                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  +292.1% | +4.906 KiB | 0.6% → 35.8% | 1.68 KiB → 6.59 KiB | 19 → 27 | `applyTo(SourceCode, List)`             | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  +263.7% | +4.882 KiB | 0.7% → 36.6% | 1.85 KiB → 6.73 KiB | 22 → 30 | `applyTo(SourceCode)`                   | `org.codenarc.rule.AbstractRule`                                           |
| +1038.6% | +4.625 KiB | 0.2% → 27.5% |    456 B → 5.07 KiB |  8 → 15 | `newInstance()`                         | `java.lang.Class`                                                          |
| +1038.6% | +4.625 KiB | 0.2% → 27.5% |    456 B → 5.07 KiB |  8 → 15 | `getAstVisitor()`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|      new | +4.046 KiB | 0.0% → 22.0% |      0 B → 4.05 KiB |   0 → 2 | `<init>(String, int)`                   | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|      new | +4.046 KiB | 0.0% → 22.0% |      0 B → 4.05 KiB |   0 → 2 | `<init>(String)`                        | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|      new | +4.015 KiB | 0.0% → 21.8% |      0 B → 4.02 KiB |   0 → 1 | `$getStaticMetaClass()`                 | `org.codenarc.rule.groovyism.ExplicitCallToPlusMethodAstVisitor`           |
|      new | +4.015 KiB | 0.0% → 21.8% |      0 B → 4.02 KiB |   0 → 1 | `<init>()`                              | `org.codenarc.rule.groovyism.ExplicitCallToPlusMethodAstVisitor`           |
|  +179.5% |  +3.21 KiB | 0.7% → 27.1% |    1.79 KiB → 5 KiB | 28 → 32 | `linkToCallSite(Object, Object)`        | `java.lang.invoke.Invokers$Holder`                                         |
|      new | +2.875 KiB | 0.0% → 15.6% |      0 B → 2.88 KiB |   0 → 2 | `getText()`                             | `org.codenarc.source.SourceFile`                                           |
|  +254.0% |  +2.46 KiB | 0.4% → 18.6% |    992 B → 3.43 KiB |      14 | `getAst()`                              | `org.codenarc.source.AbstractSourceCode`                                   |
|  +248.4% | +2.406 KiB | 0.4% → 18.3% |    992 B → 3.38 KiB | 14 → 13 | `init()`                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  +248.4% | +2.406 KiB | 0.4% → 18.3% |    992 B → 3.38 KiB | 14 → 13 | `isRuleSuppressed(Rule)`                | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|      new | +1.179 KiB |  0.0% → 6.4% |      0 B → 1.18 KiB |  0 → 21 | `linkToCallSite(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000c001134800`                        |
|  +154.1% |     +752 B |  0.2% → 6.6% |    488 B → 1.21 KiB |   7 → 9 | `visitClass(ClassNode)`                 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|   +81.2% |     +552 B |  0.3% → 6.5% |     680 B → 1.2 KiB |  10 → 9 | `visitClass(ClassNode)`                 | `org.codenarc.rule.AbstractAstVisitor`                                     |
|      new |     +528 B |  0.0% → 2.8% |         0 B → 528 B |   0 → 1 | `visitAssertStatement(AssertStatement)` | `org.codenarc.rule.basic.ConstantAssertExpressionAstVisitor`               |
|      new |     +384 B |  0.0% → 2.0% |         0 B → 384 B |   0 → 1 | `$getStaticMetaClass()`                 | `org.codenarc.rule.convention.IfStatementCouldBeTernaryAstVisitor`         |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |               Size | Samples | Function                                                         | Location                                                                                 |
| ------: | -----------: | ------------: | -----------------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|  -98.5% | -253.406 KiB | 97.8% → 20.4% | 257 KiB → 3.75 KiB |      20 | `init()`                                                         | `org.codenarc.source.AbstractSourceCode`                                                 |
|  -96.4% |  -251.14 KiB | 99.0% → 50.6% | 260 KiB → 9.31 KiB | 69 → 80 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                                       |
| removed |   -1.109 KiB |   0.4% → 0.0% |     1.11 KiB → 0 B |  21 → 0 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`                                      |
| removed |       -648 B |   0.2% → 0.0% |        648 B → 0 B |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor` |
|  -80.4% |       -624 B |   0.3% → 0.8% |      776 B → 152 B |   3 → 1 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                       |
|  -77.8% |       -504 B |   0.2% → 0.8% |      648 B → 144 B |   2 → 1 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                  |
|  -65.4% |       -408 B |   0.2% → 1.1% |      624 B → 216 B |   7 → 3 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                                       |
|  -63.2% |       -288 B |   0.2% → 0.9% |      456 B → 168 B |   7 → 4 | `<clinit>()`                                                     | `org.codenarc.CodeNarc`                                                                  |
|  -90.9% |       -240 B |          0.1% |       264 B → 24 B |   2 → 1 | `doCall(Object)`                                                 | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                                          |
|  -77.8% |       -224 B |   0.1% → 0.3% |       288 B → 64 B |   3 → 2 | `<init>(Reader)`                                                 | `org.codenarc.ruleset.XmlReaderRuleSet`                                                  |
| removed |       -216 B |   0.1% → 0.0% |        216 B → 0 B |   3 → 0 | `line(int)`                                                      | `org.codenarc.source.AbstractSourceCode`                                                 |
| removed |       -216 B |   0.1% → 0.0% |        216 B → 0 B |   3 → 0 | `sourceLineTrimmed(ASTNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                                   |
| removed |       -216 B |   0.1% → 0.0% |        216 B → 0 B |   3 → 0 | `addViolation(ASTNode, String)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                                   |
| removed |       -208 B |   0.1% → 0.0% |        208 B → 0 B |   1 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                     |
| removed |       -208 B |   0.1% → 0.0% |        208 B → 0 B |   1 → 0 | `checkStatementIndent(Statement, BlockStatement)`                | `org.codenarc.rule.formatting.IndentationAstVisitor`                                     |
| removed |       -208 B |   0.1% → 0.0% |        208 B → 0 B |   1 → 0 | `doCall(Object)`                                                 | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`       |
|  -54.3% |       -200 B |   0.1% → 0.9% |      368 B → 168 B |   7 → 4 | `<clinit>()`                                                     | `groovy.lang.Closure`                                                                    |
|  -82.1% |       -184 B |   0.1% → 0.2% |       224 B → 40 B |   2 → 1 | `validateXml(String)`                                            | `org.codenarc.ruleset.XmlReaderRuleSet`                                                  |
| removed |       -144 B |   0.1% → 0.0% |        144 B → 0 B |   2 → 0 | `isCase(Object, Object)`                                         | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                      |
| removed |       -128 B |  <0.1% → 0.0% |        128 B → 0 B |   2 → 0 | `getLines()`                                                     | `org.codenarc.source.AbstractSourceCode`                                                 |
