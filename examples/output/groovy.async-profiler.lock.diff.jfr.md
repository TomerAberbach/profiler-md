# Lock contention profile diff

Blocked 1.4ms → 4.0ms (+2.56ms, +178.0%) over 30 contentions → 41 contentions (47.9µs → 97.5µs per contention).

| Category         |  Change |   Delta |      % |          Time | Contentions |
| ---------------- | ------: | ------: | -----: | ------------: | ----------: |
| Standard library | +178.0% | +2.56ms | 100.0% | 1.4ms → 4.0ms |     30 → 41 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|   Change |   Delta |             % |          Time | Contentions | Function                                                 | Location                                                                    |
| -------: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +347.6% | +1.49ms | 29.8% → 48.0% | 0.4ms → 1.9ms |     16 → 25 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +347.6% | +1.49ms | 29.8% → 48.0% | 0.4ms → 1.9ms |     16 → 25 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +347.6% | +1.49ms | 29.8% → 48.0% | 0.4ms → 1.9ms |     16 → 25 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +347.6% | +1.49ms | 29.8% → 48.0% | 0.4ms → 1.9ms |     16 → 25 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +347.6% | +1.49ms | 29.8% → 48.0% | 0.4ms → 1.9ms |     16 → 25 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +324.9% | +1.47ms | 31.4% → 48.0% | 0.5ms → 1.9ms |     17 → 25 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|  +324.9% | +1.47ms | 31.4% → 48.0% | 0.5ms → 1.9ms |     17 → 25 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  +324.9% | +1.47ms | 31.4% → 48.0% | 0.5ms → 1.9ms |     17 → 25 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  +324.9% | +1.47ms | 31.4% → 48.0% | 0.5ms → 1.9ms |     17 → 25 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  +324.9% | +1.47ms | 31.4% → 48.0% | 0.5ms → 1.9ms |     17 → 25 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|  +324.9% | +1.47ms | 31.4% → 48.0% | 0.5ms → 1.9ms |     17 → 25 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  +324.9% | +1.47ms | 31.4% → 48.0% | 0.5ms → 1.9ms |     17 → 25 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
| +1111.1% | +1.17ms |  7.4% → 32.0% | 0.1ms → 1.3ms |       3 → 6 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1111.1% | +1.17ms |  7.4% → 32.0% | 0.1ms → 1.3ms |       3 → 6 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1111.1% | +1.17ms |  7.4% → 32.0% | 0.1ms → 1.3ms |       3 → 6 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +1111.1% | +1.17ms |  7.4% → 32.0% | 0.1ms → 1.3ms |       3 → 6 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1111.1% | +1.17ms |  7.4% → 32.0% | 0.1ms → 1.3ms |       3 → 6 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +1111.1% | +1.17ms |  7.4% → 32.0% | 0.1ms → 1.3ms |       3 → 6 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +1111.1% | +1.17ms |  7.4% → 32.0% | 0.1ms → 1.3ms |       3 → 6 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
|  +289.1% | +1.15ms | 27.7% → 38.7% | 0.4ms → 1.5ms |     14 → 15 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |           % |           Time | Contentions | Function                                                                | Location                                                                                                       |
| ------: | ------: | ----------: | -------------: | ----------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| removed | -0.04ms | 2.8% → 0.0% |   39.6µs → 0ms |       1 → 0 | `super$2$visitArgumentlistExpression(ArgumentListExpression)`           | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                                             |
| removed | -0.04ms | 2.4% → 0.0% |   35.1µs → 0ms |       1 → 0 | `doCall(Object)`                                                        | `org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6` |
| removed | -0.04ms | 2.4% → 0.0% |   35.1µs → 0ms |       1 → 0 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
| removed | -0.04ms | 2.4% → 0.0% |   35.1µs → 0ms |       1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
| removed | -0.04ms | 2.4% → 0.0% |   35.1µs → 0ms |       1 → 0 | `super$3$visitBlockStatement(BlockStatement)`                           | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
| removed | -0.04ms | 2.4% → 0.0% |   35.1µs → 0ms |       1 → 0 | `visitBlockStatement(BlockStatement)`                                   | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
| removed | -0.04ms | 2.4% → 0.0% |   35.1µs → 0ms |       1 → 0 | `super$3$applyTo(SourceCode, List)`                                     | `org.codenarc.rule.formatting.IndentationRule`                                                                 |
| removed | -0.04ms | 2.4% → 0.0% |   35.1µs → 0ms |       1 → 0 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.formatting.IndentationRule`                                                                 |
|  -45.9% | -0.03ms | 4.9% → 1.0% | 0.1ms → 38.2µs |           2 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                                             |
| removed | -0.03ms | 1.8% → 0.0% |   26.5µs → 0ms |       1 → 0 | `linkToCallSite(Object, Object, long, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000880131e400`                                                            |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `writeViolation(Writer, Violation, String)`                             | `org.codenarc.report.TextReportWriter`                                                                         |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `doCall(Object)`                                                        | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                                           |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `writeFileViolations(Writer, FileResults)`                              | `org.codenarc.report.TextReportWriter`                                                                         |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `doCall(Object)`                                                        | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2`                                        |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `writePackageViolations(Writer, Results)`                               | `org.codenarc.report.TextReportWriter`                                                                         |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `writeReport(Writer, AnalysisContext, Results)`                         | `org.codenarc.report.TextReportWriter`                                                                         |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `writeReportToStandardOut(AnalysisContext, Results)`                    | `org.codenarc.report.AbstractReportWriter`                                                                     |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `writeReport(AnalysisContext, Results)`                                 | `org.codenarc.report.AbstractReportWriter`                                                                     |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `doCall(Object)`                                                        | `org.codenarc.CodeNarcRunner$_writeReports_closure8`                                                           |
| removed | -0.02ms | 1.6% → 0.0% |   22.9µs → 0ms |       1 → 0 | `writeReports(AnalysisContext, Results)`                                | `org.codenarc.CodeNarcRunner`                                                                                  |
