# Sampling profile diff

321 samples → 342 samples (+21 samples, +6.5%).

| Category | Change | Delta |             % |   Samples |
| -------- | -----: | ----: | ------------: | --------: |
| stdlib   |  +6.1% |   +19 | 97.2% → 96.8% | 312 → 331 |
| ours     | +22.2% |    +2 |   2.8% → 3.2% |    9 → 11 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |           % | Samples | Function                                              | Location                                                                                 |
| -----: | ----: | ----------: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `init()`                                              | `org.codenarc.source.AbstractSourceCode`                                                 |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitMethod(MethodNode)`                             | `org.codenarc.rule.AbstractAstVisitor`                                                   |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitExpressionStatement(ExpressionStatement)`       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                                             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `addViolationIfDuplicate(Expression, boolean)`        | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                       |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitPropertyExpression(PropertyExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitObjectInitializerStatements(ClassNode)`         | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor`                             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>()`                                            | `org.gmetrics.metric.AbstractAstVisitor`                                                 |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `doCall(AnnotationNode)`                              | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `applyTo(SourceCode, List)`                           | `org.codenarc.rule.formatting.BracesForClassRule`                                        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`                           |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getClass()`                                          | `java.lang.Object`                                                                       |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getSuppressionsByLineNumber(ModuleNode)`             | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                                      | `org.codenarc.rule.braces.WhileStatementBracesRule`                                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                              | Location                                                             |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------- | -------------------------------------------------------------------- |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`     | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                   |
|  -50.0% |    -1 | 0.6% → 0.3% |   2 → 1 | `collectViolations(SourceCode, RuleSet)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                       |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getDeclaration(ASTNode, SourceCode)`                 | `org.codenarc.util.AstUtil`                                          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `doCall(Object)`                                      | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.design.ConstantsOnlyInterfaceAstVisitor`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `propertyExpressionsAreEqual(Expression, Expression)` | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `$getStaticMetaClass()`                               | `org.codenarc.rule.size.MethodCountAstVisitor`                       |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `compareEqual(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `removeGrabTransformation(CompilationUnit)`           | `org.codenarc.source.AbstractSourceCode`                             |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                       |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +31.8% |   +14 | 13.7% → 17.0% |   44 → 58 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|     new |   +14 |   0.0% → 4.1% |    0 → 14 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x0000000801134800`                         |
|   +5.5% |   +13 | 73.5% → 72.8% | 236 → 249 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                          |
|  +13.3% |   +11 | 25.9% → 27.5% |   83 → 94 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                          |
|  +66.7% |   +10 |   4.7% → 7.3% |   15 → 25 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                         |
|     new |   +10 |   0.0% → 2.9% |    0 → 10 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000000801390400`                         |
| +800.0% |    +8 |   0.3% → 2.6% |     1 → 9 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                     |
|  +11.8% |    +6 | 15.9% → 16.7% |   51 → 57 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +28.6% |    +6 |   6.5% → 7.9% |   21 → 27 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                          |
|  +62.5% |    +5 |   2.5% → 3.8% |    8 → 13 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|   +5.2% |    +5 | 29.9% → 29.5% |  96 → 101 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                            |
|  +33.3% |    +5 |   4.7% → 5.8% |   15 → 20 | `doCall(Object)`                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| +125.0% |    +5 |   1.2% → 2.6% |     4 → 9 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
| +500.0% |    +5 |   0.3% → 1.8% |     1 → 6 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                    |
| +500.0% |    +5 |   0.3% → 1.8% |     1 → 6 | `addViolationIfDuplicate(Expression, boolean)`                | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
| +500.0% |    +5 |   0.3% → 1.8% |     1 → 6 | `addViolationIfDuplicate(Expression)`                         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|     new |    +5 |   0.0% → 1.5% |     0 → 5 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                         |
|     new |    +5 |   0.0% → 1.5% |     0 → 5 | `super$3$applyTo(SourceCode, List)`                           | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                    |
| +400.0% |    +4 |   0.3% → 1.5% |     1 → 5 | `doCall(Object)`                                              | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`          |
|     new |    +4 |   0.0% → 1.2% |     0 → 4 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codenarc.rule.convention.NoDefAstVisitor`                              |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                         | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| removed |   -15 |   4.7% → 0.0% |  15 → 0 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000e001394800`                                          |
| removed |   -11 |   3.4% → 0.0% |  11 → 0 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000e001134800`                                          |
|  -20.4% |   -10 | 15.3% → 11.4% | 49 → 39 | `getAst()`                                                       | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -16.7% |    -8 | 15.0% → 11.7% | 48 → 40 | `init()`                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -15.2% |    -7 | 14.3% → 11.4% | 46 → 39 | `isRuleSuppressed(Rule)`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|   -6.3% |    -5 | 24.9% → 21.9% | 80 → 75 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractAstVisitor`                                                       |
| removed |    -5 |   1.6% → 0.0% |   5 → 0 | `processSourceLine(String, int)`                                 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
| removed |    -5 |   1.6% → 0.0% |   5 → 0 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000e001448c00`                                          |
|  -57.1% |    -4 |   2.2% → 0.9% |   7 → 3 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                           |
|   -5.8% |    -4 | 21.5% → 19.0% | 69 → 65 | `init()`                                                         | `org.codenarc.source.AbstractSourceCode`                                                     |
|   -6.3% |    -4 | 19.6% → 17.3% | 63 → 59 | `visitClass(ClassNode)`                                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                            |
| removed |    -4 |   1.2% → 0.0% |   4 → 0 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000e001390c00`                                          |
|  -80.0% |    -4 |   1.6% → 0.3% |   5 → 1 | `doCall(Object)`                                                 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
| removed |    -4 |   1.2% → 0.0% |   4 → 0 | `getNumberOfViolationsWithPriority(int, boolean)`                | `org.codenarc.results.DirectoryResults`                                                      |
|  -75.0% |    -3 |   1.2% → 0.3% |   4 → 1 | `validateXml(String)`                                            | `org.codenarc.ruleset.XmlReaderRuleSet`                                                      |
|  -60.0% |    -3 |   1.6% → 0.6% |   5 → 2 | `<init>(Reader)`                                                 | `org.codenarc.ruleset.XmlReaderRuleSet`                                                      |
|  -75.0% |    -3 |   1.2% → 0.3% |   4 → 1 | `visitIfElse(IfStatement)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                            |
| removed |    -3 |   0.9% → 0.0% |   3 → 0 | `doCall(Object)`                                                 | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`                         |
| removed |    -3 |   0.9% → 0.0% |   3 → 0 | `getNumberOfViolationsWithPriority(int)`                         | `org.codenarc.results.DirectoryResults`                                                      |
|  -60.0% |    -3 |   1.6% → 0.6% |   5 → 2 | `doCall(Object)`                                                 | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`          |

# Allocated heap profile diff

Allocated 12 GiB → 11.8 GiB (-231.612 MiB, -1.9%) over 6,317 samples → 6,264 samples (1.95 MiB → 1.92 MiB per sample).

| Category | Change |        Delta |             % |                Size |       Samples |
| -------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| stdlib   |  -1.7% | -206.847 MiB | 99.0% → 99.2% | 11.9 GiB → 11.7 GiB | 6,204 → 6,165 |
| ours     | -20.2% |  -24.763 MiB |   1.0% → 0.8% |  122 MiB → 97.6 MiB |       63 → 50 |
| unknown  |  -5.6% |   -2.007 KiB |         <0.1% | 35.8 KiB → 33.8 KiB |       50 → 49 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Samples | Function                                                                | Location                                                               |
| ------: | ---------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new | +3.998 MiB | 0.0% → <0.1% |         0 B → 4 MiB |   0 → 2 | `isRuleSuppressed(Rule)`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                            |
|     new | +3.998 MiB | 0.0% → <0.1% |         0 B → 4 MiB |   0 → 1 | `isSpockMethod(MethodCallExpression)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`            |
|     new | +3.998 MiB | 0.0% → <0.1% |         0 B → 4 MiB |   0 → 2 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`           |
|     new | +3.905 MiB | 0.0% → <0.1% |      0 B → 3.91 MiB |   0 → 2 | `shouldApplyThisRuleTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                       |
|     new | +3.342 MiB | 0.0% → <0.1% |      0 B → 3.34 MiB |   0 → 2 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.AbstractAstVisitorRule`                             |
|  +39.7% | +2.839 MiB |         0.1% |   7.16 MiB → 10 MiB |   4 → 5 | `isCase(Object, Object)`                                                | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                    |
|  +10.0% | +2.237 MiB |         0.2% | 22.5 MiB → 24.7 MiB | 15 → 16 | `toString()`                                                            | `java.lang.StringBuilder`                                              |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`                           | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`           |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitBlockStatement(BlockStatement)`                                   | `org.codenarc.rule.size.NestedBlockDepthAstVisitor`                    |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitBlockStatement(BlockStatement)`                                   | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`        |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                  |
| +100.0% | +1.999 MiB |        <0.1% |       2 MiB → 4 MiB |   1 → 2 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor` |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                             | `org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`          |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                   |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.unnecessary.UnnecessaryCollectCallAstVisitor`       |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)`        | `org.codenarc.rule.formatting.IndentationAstVisitor`                   |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `record(Object, int)`                                                   | `org.codehaus.groovy.runtime.powerassert.ValueRecorder`                |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `<init>(Metric, MetricLevel, Object, Integer)`                          | `org.gmetrics.result.SingleNumberMetricResult`                         |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                     |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                    |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |                Size | Samples | Function                                        | Location                                                                   |
| ------: | ----------: | -----------: | ------------------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------- |
|  -36.1% | -21.523 MiB |  0.5% → 0.3% | 59.7 MiB → 38.2 MiB | 31 → 20 | `matcher(CharSequence)`                         | `java.util.regex.Pattern`                                                  |
|  -50.2% | -12.051 MiB |  0.2% → 0.1% |   24 MiB → 11.9 MiB |  12 → 6 | `valueOf(int)`                                  | `java.lang.Integer`                                                        |
|  -48.1% |  -7.412 MiB |         0.1% |    15.4 MiB → 8 MiB |   8 → 4 | `matches(String)`                               | `org.codenarc.util.WildcardPattern`                                        |
|  -62.6% |  -7.011 MiB | 0.1% → <0.1% | 11.2 MiB → 4.18 MiB |   6 → 3 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  -40.0% |  -3.998 MiB | 0.1% → <0.1% |      10 MiB → 6 MiB |   5 → 3 | `writeViolation(Writer, Violation, String)`     | `org.codenarc.report.TextReportWriter`                                     |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   1 → 0 | `visitImports(ModuleNode)`                      | `org.codenarc.rule.ClassReferenceAstVisitor`                               |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   2 → 0 | `repeat(char, int)`                             | `org.codenarc.util.AstUtil`                                                |
|  -50.0% |  -3.998 MiB | 0.1% → <0.1% |       8 MiB → 4 MiB |   4 → 2 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   2 → 0 | `<init>(String, boolean)`                       | `org.codenarc.util.WildcardPattern`                                        |
| removed |  -3.998 MiB | <0.1% → 0.0% |         4 MiB → 0 B |   2 → 0 | `isViolationSuppressed(Violation)`              | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|   -6.9% |  -3.989 MiB |  0.5% → 0.4% |     58 MiB → 54 MiB | 29 → 26 | `compile(String)`                               | `java.util.regex.Pattern`                                                  |
|  -91.3% |  -3.949 MiB |        <0.1% |  4.33 MiB → 388 KiB |   3 → 1 | `filter(Predicate)`                             | `java.util.stream.ReferencePipeline`                                       |
|  -31.9% |  -2.811 MiB | 0.1% → <0.1% |    8.81 MiB → 6 MiB |   5 → 2 | `doCall(Object)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -52.3% |  -2.091 MiB |        <0.1% |    4 MiB → 1.91 MiB |   2 → 1 | `applyTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                           |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                     | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`          |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `hasOpeningBraceOnSameLine(MethodNode)`         | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                   |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                               |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `visitMethod(MethodNode)`                       | `org.codenarc.rule.naming.ObjectOverrideMisspelledMethodNameAstVisitor`    |
| removed |  -1.999 MiB | <0.1% → 0.0% |         2 MiB → 0 B |   1 → 0 | `visitCastExpression(CastExpression)`           | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`               |
|  -50.0% |  -1.999 MiB |        <0.1% |       4 MiB → 2 MiB |   2 → 1 | `setDisabledRulesByLine(int)`                   | `org.codenarc.plugin.disablerules.LookupTable`                             |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |           % |                Size |   Samples | Function                                                      | Location                                                             |
| ------: | -----------: | ----------: | ------------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------- |
|     new |   +1.087 GiB | 0.0% → 9.2% |      0 B → 1.09 GiB |   0 → 564 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                  |
|     new | +729.337 MiB | 0.0% → 6.0% |       0 B → 729 MiB |   0 → 357 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000000801390400`                  |
|     new | +341.995 MiB | 0.0% → 2.8% |       0 B → 342 MiB |   0 → 150 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801449800`                  |
|     new | +283.981 MiB | 0.0% → 2.4% |       0 B → 284 MiB |   0 → 142 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008013c0800`                  |
|     new | +263.364 MiB | 0.0% → 2.2% |       0 B → 263 MiB |   0 → 178 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x0000000801134800`                  |
|  +11.5% | +103.884 MiB | 7.4% → 8.4% |  905 MiB → 1009 MiB | 465 → 510 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                             |
|  +51.2% |  +83.954 MiB | 1.3% → 2.1% |   164 MiB → 248 MiB |   71 → 78 | `writeFileViolations(Writer, FileResults)`                    | `org.codenarc.report.TextReportWriter`                               |
|     new |  +76.899 MiB | 0.0% → 0.6% |      0 B → 76.9 MiB |    0 → 39 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801470400`                  |
|  +16.3% |  +67.731 MiB | 3.4% → 4.0% |   415 MiB → 482 MiB | 213 → 241 | `getAst()`                                                    | `org.codenarc.source.AbstractSourceCode`                             |
|  +58.5% |  +61.968 MiB | 0.9% → 1.4% |   106 MiB → 168 MiB |   42 → 38 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5` |
|     new |   +57.38 MiB | 0.0% → 0.5% |      0 B → 57.4 MiB |    0 → 29 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801402400`                  |
|  +13.4% |  +50.843 MiB | 3.1% → 3.6% |   381 MiB → 432 MiB | 196 → 216 | `init()`                                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                          |
|  +12.9% |    +48.9 MiB | 3.1% → 3.5% |   378 MiB → 427 MiB | 194 → 214 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                          |
|   +9.0% |  +34.605 MiB | 3.1% → 3.5% |   386 MiB → 420 MiB | 194 → 204 | `addViolationIfDuplicate(Expression, boolean)`                | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                   |
|   +8.5% |  +32.606 MiB | 3.1% → 3.5% |   386 MiB → 418 MiB | 194 → 203 | `addViolationIfDuplicate(Expression)`                         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                   |
|  +19.7% |  +31.038 MiB | 1.3% → 1.6% |   158 MiB → 189 MiB |   80 → 95 | `linkToTargetMethod(Object, Object)`                          | `java.lang.invoke.Invokers$Holder`                                   |
|  +81.8% |  +29.449 MiB | 0.3% → 0.5% |   36 MiB → 65.4 MiB |   18 → 33 | `isChainedUnique(Expression)`                                 | `org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`       |
|     new |  +29.189 MiB | 0.0% → 0.2% |      0 B → 29.2 MiB |    0 → 14 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801142800`                  |
|  +41.9% |  +29.135 MiB | 0.6% → 0.8% | 69.6 MiB → 98.7 MiB |   36 → 51 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractMethodVisitor`                            |
| +310.9% |  +25.248 MiB | 0.1% → 0.3% | 8.12 MiB → 33.4 MiB |    5 → 18 | `call(Object, Object)`                                        | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed |   -1.009 GiB |   8.4% → 0.0% |      1.01 GiB → 0 B |       515 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000e001394800`                        |
| removed | -750.635 MiB |   6.1% → 0.0% |       751 MiB → 0 B |       380 → 0 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000e001390c00`                        |
| removed |  -396.81 MiB |   3.2% → 0.0% |       397 MiB → 0 B |       175 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e001448c00`                        |
| removed | -291.069 MiB |   2.4% → 0.0% |       291 MiB → 0 B |       144 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e0013b9000`                        |
| removed |  -266.45 MiB |   2.2% → 0.0% |       266 MiB → 0 B |       176 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000e001134800`                        |
|   -9.9% |  -208.73 MiB | 17.2% → 15.8% | 2.06 GiB → 1.86 GiB |   1,055 → 975 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|   -8.1% | -195.897 MiB | 19.7% → 18.4% | 2.36 GiB → 2.17 GiB | 1,217 → 1,140 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -11.8% | -195.709 MiB | 13.5% → 12.1% | 1.62 GiB → 1.42 GiB |     836 → 742 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|   -9.7% | -195.485 MiB | 16.4% → 15.1% | 1.97 GiB → 1.78 GiB |   1,018 → 932 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -11.1% | -189.969 MiB | 14.0% → 12.7% | 1.68 GiB → 1.49 GiB |     866 → 782 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|   -9.7% | -169.964 MiB | 14.2% → 13.1% | 1.71 GiB → 1.54 GiB |     879 → 801 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -17.7% | -161.704 MiB |   7.5% → 6.3% |   916 MiB → 754 MiB |     454 → 381 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  -10.1% | -158.291 MiB | 12.7% → 11.6% | 1.52 GiB → 1.37 GiB |     715 → 695 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
|   -9.7% | -149.517 MiB | 12.6% → 11.6% | 1.51 GiB → 1.37 GiB |     781 → 714 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|   -5.3% | -149.406 MiB | 23.1% → 22.3% | 2.77 GiB → 2.63 GiB | 1,446 → 1,399 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
|   -3.8% | -139.741 MiB | 30.1% → 29.5% | 3.61 GiB → 3.48 GiB | 1,871 → 1,843 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|   -2.5% |  -133.36 MiB | 43.8% → 43.5% | 5.25 GiB → 5.12 GiB | 2,698 → 2,654 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
|   -4.8% | -129.684 MiB | 21.8% → 21.1% | 2.61 GiB → 2.49 GiB | 1,363 → 1,321 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|   -3.7% | -123.124 MiB | 26.8% → 26.3% |  3.22 GiB → 3.1 GiB | 1,577 → 1,552 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
|   -3.1% | -109.078 MiB | 28.2% → 27.9% | 3.39 GiB → 3.28 GiB | 1,732 → 1,697 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |

# Retained heap profile diff

Retained 69.3 KiB → 9.88 KiB (-59.375 KiB, -85.7%) over 95 samples → 105 samples (747 B → 96.4 B per sample).

| Category |  Change |       Delta |            % |                Size |  Samples |
| -------- | ------: | ----------: | -----------: | ------------------: | -------: |
| stdlib   |  -85.7% | -59.343 KiB |       100.0% | 69.2 KiB → 9.88 KiB | 94 → 105 |
| ours     | removed |       -32 B | <0.1% → 0.0% |          32 B → 0 B |    1 → 0 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change | Delta |            % |       Size | Samples | Function                        | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------------- | -------------------------------------- |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|   Change |      Delta |            % |                Size | Samples | Function                                         | Location                                                                   |
| -------: | ---------: | -----------: | ------------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
|  +345.3% | +4.343 KiB | 1.8% → 56.7% |  1.26 KiB → 5.6 KiB | 24 → 32 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
|  +916.7% | +4.296 KiB | 0.7% → 48.2% |    480 B → 4.77 KiB |  8 → 16 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  +916.7% | +4.296 KiB | 0.7% → 48.2% |    480 B → 4.77 KiB |  8 → 16 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  +824.2% |  +4.25 KiB | 0.7% → 48.2% |    528 B → 4.77 KiB |  9 → 16 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
|  +452.2% | +4.062 KiB | 1.3% → 50.2% |    920 B → 4.96 KiB | 16 → 21 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                   |
| +2710.5% | +4.023 KiB | 0.2% → 42.2% |    152 B → 4.17 KiB |   2 → 4 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|      new | +1.578 KiB | 0.0% → 16.0% |      0 B → 1.58 KiB |  0 → 24 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801134800`                        |
|  +110.9% |     +816 B | 1.0% → 15.3% |    736 B → 1.52 KiB | 14 → 22 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  +100.0% |     +776 B | 1.1% → 15.3% |    776 B → 1.52 KiB | 15 → 22 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
|  +229.0% |     +568 B |  0.3% → 8.1% |       248 B → 816 B |  6 → 10 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  +167.5% |     +536 B |  0.5% → 8.5% |       320 B → 856 B |  7 → 11 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  +471.4% |     +528 B |  0.2% → 6.3% |       112 B → 640 B |   3 → 7 | `visitMethod(MethodNode)`                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|   +81.3% |     +520 B | 0.9% → 11.5% |    640 B → 1.13 KiB | 12 → 18 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|   +98.5% |     +512 B | 0.7% → 10.2% |    520 B → 1.01 KiB | 10 → 14 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  +104.7% |     +360 B |  0.5% → 7.0% |       344 B → 704 B |  9 → 12 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
|   +26.3% |     +336 B | 1.8% → 16.0% | 1.25 KiB → 1.58 KiB | 22 → 24 | `assertClassImplementsRuleInterface(Class)`      | `org.codenarc.ruleset.RuleSetUtil`                                         |
|  +300.0% |     +336 B |  0.2% → 4.4% |       112 B → 448 B |   3 → 5 | `visitConstructorOrMethod(MethodNode, boolean)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|   +24.4% |     +312 B | 1.8% → 15.7% | 1.25 KiB → 1.55 KiB | 22 → 23 | `doCall(Object)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
|   +12.0% |     +288 B | 3.4% → 26.5% | 2.34 KiB → 2.62 KiB | 41 → 45 | `getMetaClass()`                                 | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|  +150.0% |     +240 B |  0.2% → 4.0% |       160 B → 400 B |   3 → 6 | `newInstance()`                                  | `java.lang.Class`                                                          |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size | Samples | Function                                                         | Location                                                                     |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed | -64.101 KiB |  92.6% → 0.0% |      64.1 KiB → 0 B |   2 → 0 | `validateXml(String)`                                            | `org.codenarc.ruleset.XmlReaderRuleSet`                                      |
|  -99.9% | -63.953 KiB |  92.4% → 0.6% |       64 KiB → 64 B |   1 → 2 | `<init>(Reader)`                                                 | `org.codenarc.ruleset.XmlReaderRuleSet`                                      |
|  -87.4% | -59.242 KiB | 97.8% → 86.1% | 67.8 KiB → 8.51 KiB | 66 → 80 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                           |
| removed |   -1.32 KiB |   1.9% → 0.0% |      1.32 KiB → 0 B |  24 → 0 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000e001134800`                          |
| removed |      -120 B |   0.2% → 0.0% |         120 B → 0 B |   1 → 0 | `<init>(List)`                                                   | `org.codenarc.ruleset.ListRuleSet`                                           |
| removed |      -120 B |   0.2% → 0.0% |         120 B → 0 B |   1 → 0 | `buildRuleSet()`                                                 | `org.codenarc.CodeNarcRunner`                                                |
| removed |      -112 B |   0.2% → 0.0% |         112 B → 0 B |   2 → 0 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.design.ToStringReturnsNullAstVisitor`                     |
| removed |      -112 B |   0.2% → 0.0% |         112 B → 0 B |   1 → 0 | `visitClassEx(ClassNode)`                                        | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`          |
| removed |      -112 B |   0.2% → 0.0% |         112 B → 0 B |   1 → 0 | `processViolationsForFile(FileViolations)`                       | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin`              |
| removed |      -112 B |   0.2% → 0.0% |         112 B → 0 B |   1 → 0 | `doCall(Object)`                                                 | `org.codenarc.CodeNarcRunner$_applyPluginsProcessViolationsForFile_closure5` |
| removed |       -96 B |   0.1% → 0.0% |          96 B → 0 B |   2 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.ClassReferenceAstVisitor`                                 |
|  -70.6% |       -96 B |   0.2% → 0.4% |        136 B → 40 B |   2 → 1 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                           |
| removed |       -88 B |   0.1% → 0.0% |          88 B → 0 B |   1 → 0 | `getInputStream()`                                               | `org.codenarc.util.io.ClassPathResource`                                     |
| removed |       -88 B |   0.1% → 0.0% |          88 B → 0 B |   1 → 0 | `getInputStream(String)`                                         | `org.codenarc.util.io.ClassPathResource`                                     |
| removed |       -80 B |   0.1% → 0.0% |          80 B → 0 B |   2 → 0 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                           |
| removed |       -64 B |   0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `$getStaticMetaClass()`                                          | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`                |
| removed |       -64 B |   0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `<init>()`                                                       | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`                |
| removed |       -64 B |   0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `visitClassEx(ClassNode)`                                        | `org.codenarc.rule.ClassReferenceAstVisitor`                                 |
| removed |       -56 B |   0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `$getStaticMetaClass()`                                          | `org.codenarc.rule.naming.ClassNameAstVisitor`                               |
| removed |       -56 B |   0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `<init>()`                                                       | `org.codenarc.rule.naming.AbstractTypeNameAstVisitor`                        |
