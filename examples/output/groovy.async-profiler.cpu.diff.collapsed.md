# Sampling profile diff

5,918 samples → 6,382 samples (+464 samples, +7.8%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| native            |  +7.9% |  +344 | 73.2% → 73.3% | 4,333 → 4,677 |
| stdlib            |  +6.5% |   +95 | 24.6% → 24.3% | 1,457 → 1,552 |
| ours              | +26.6% |   +17 |   1.1% → 1.3% |       64 → 81 |
| jit               | +15.5% |    +9 |          1.0% |       58 → 67 |
| garbage collector | -16.7% |    -1 |          0.1% |         6 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                       | Location                                                                   |
| ------: | ----: | -----------: | --------: | ------------------------------ | -------------------------------------------------------------------------- |
|   +9.9% |   +10 |         1.7% | 101 → 111 | `tlv_get_addr`                 | `<unknown>`                                                                |
| +500.0% |    +5 | <0.1% → 0.1% |     1 → 6 | `I2C/C2I adapters(0xbbb)`      | `<unknown>`                                                                |
|   +3.5% |    +4 |         1.9% | 115 → 119 | `pthread_jit_write_protect_np` | `<unknown>`                                                                |
|  +18.2% |    +4 |         0.4% |   22 → 26 | `itable stub`                  | `<unknown>`                                                                |
| +150.0% |    +3 | <0.1% → 0.1% |     2 → 5 | `I2C/C2I adapters(0xbb)`       | `<unknown>`                                                                |
|     new |    +3 | 0.0% → <0.1% |     0 → 3 | `next`                         | `java.util.ArrayList$Itr`                                                  |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `writeViolation`               | `org.codenarc.report.TextReportWriter`                                     |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `visitBinaryExpression`        | `org.codehaus.groovy.ast.CodeVisitorSupport`                               |
|  +22.2% |    +2 |         0.2% |    9 → 11 | `vtable stub`                  | `<unknown>`                                                                |
|  +66.7% |    +2 |         0.1% |     3 → 5 | `zero_blocks`                  | `<unknown>`                                                                |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `getName`                      | `org.codenarc.rule.size.CrapMetricRule`                                    |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `$getStaticMetaClass`          | `org.codenarc.rule.unused.ReferenceCollector`                              |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `call_stub`                    | `<unknown>`                                                                |
|  +33.3% |    +1 |         0.1% |     3 → 4 | `linkToCallSite`               | `java.lang.invoke.Invokers$Holder`                                         |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `processImports`               | `org.codenarc.rule.imports.UnusedImportRule`                               |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `doCall`                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  +33.3% |    +1 |         0.1% |     3 → 4 | `<init>`                       | `java.util.ArrayList`                                                      |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `visitClass`                   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `visitMethod`                  | `org.codenarc.rule.AbstractAstVisitor`                                     |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `newInstance`                  | `java.lang.Class`                                                          |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                  | Location                                                                      |
| ------: | ----: | -----------: | ------: | ----------------------------------------- | ----------------------------------------------------------------------------- |
|  -77.8% |    -7 | 0.2% → <0.1% |   9 → 2 | `I2C/C2I adapters(0xbbbb)`                | `<unknown>`                                                                   |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `collectViolations`                       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass`                            | `org.codenarc.rule.convention.VariableTypeRequiredRule`                       |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `constantPoolHandle::~constantPoolHandle` | `<unknown>`                                                                   |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `getClass`                                | `java.lang.Object`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitExpressionStatement`                | `org.codenarc.rule.unnecessary.UnnecessaryDefInVariableDeclarationAstVisitor` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitAnnotations`                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodCallExpression`               | `org.codehaus.groovy.ast.CodeVisitorSupport`                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitClosureExpression`                  | `org.codehaus.groovy.ast.CodeVisitorSupport`                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass`                            | `org.codenarc.rule.unused.UnusedVariableRule`                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo`                                 | `org.codenarc.rule.unused.UnusedVariableRule`                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getLines`                                | `org.codenarc.source.AbstractSourceCode`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `findFirstNonAnnotationLine`              | `org.codenarc.util.AstUtil`                                                   |
|  -14.3% |    -1 |         0.1% |   7 → 6 | `I2C/C2I adapters(0xb)`                   | `<unknown>`                                                                   |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xa)`                   | `<unknown>`                                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbbb)`              | `<unknown>`                                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBlockStatement`                     | `org.codenarc.rule.convention.IfStatementCouldBeTernaryAstVisitor`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `lineNumberForMethod`                     | `org.gmetrics.metric.AbstractMethodMetric`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass`                            | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                         |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                    | Location                                                                    |
| -----: | ----: | ------------: | ------------: | --------------------------- | --------------------------------------------------------------------------- |
|    new |  +290 |   0.0% → 4.5% |       0 → 290 | `linkToCallSite`            | `java.lang.invoke.LambdaForm$MH.0x000000a801323800`                         |
|  +8.5% |  +182 | 36.3% → 36.5% | 2,150 → 2,332 | `linkToCallSite`            | `java.lang.invoke.Invokers$Holder`                                          |
|  +8.4% |  +181 | 36.4% → 36.6% | 2,152 → 2,333 | `main`                      | `org.codenarc.CodeNarc`                                                     |
|  +8.4% |  +179 | 36.1% → 36.3% | 2,139 → 2,318 | `execute`                   | `org.codenarc.CodeNarc`                                                     |
|  +8.3% |  +177 | 35.9% → 36.0% | 2,123 → 2,300 | `execute`                   | `org.codenarc.CodeNarcRunner`                                               |
|  +8.5% |  +168 | 33.5% → 33.7% | 1,983 → 2,151 | `processDirectory`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +8.5% |  +168 | 33.5% → 33.7% | 1,984 → 2,152 | `analyze`                   | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +8.4% |  +167 | 33.5% → 33.7% | 1,983 → 2,150 | `doCall`                    | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +8.4% |  +166 | 33.2% → 33.4% | 1,967 → 2,133 | `collectViolations`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +8.2% |  +163 | 33.4% → 33.5% | 1,978 → 2,141 | `processFile`               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +8.0% |  +131 |         27.7% | 1,638 → 1,769 | `measureRuleProcessingTime` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|    new |  +124 |   0.0% → 1.9% |       0 → 124 | `linkToCallSite`            | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8c00`                         |
|  +6.6% |   +85 | 21.8% → 21.5% | 1,290 → 1,375 | `doCall`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  +7.8% |   +75 |         16.3% |   964 → 1,039 | `applyTo`                   | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  +5.0% |   +59 | 20.0% → 19.5% | 1,185 → 1,244 | `applyTo`                   | `org.codenarc.rule.AbstractRule`                                            |
|  +4.7% |   +43 | 15.6% → 15.1% |     923 → 966 | `visitClass`                | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  +5.2% |   +39 | 12.8% → 12.4% |     755 → 794 | `visitClass`                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|    new |   +39 |   0.0% → 0.6% |        0 → 39 | `linkToCallSite`            | `java.lang.invoke.LambdaForm$MH.0x000000a8013de800`                         |
|  +4.1% |   +29 | 11.9% → 11.5% |     703 → 732 | `visitMethod`               | `org.codenarc.rule.AbstractAstVisitor`                                      |
|    new |   +25 |   0.0% → 0.4% |        0 → 25 | `linkToCallSite`            | `java.lang.invoke.LambdaForm$MH.0x000000a8013f3000`                         |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                           | Location                                                                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |  -274 |  4.6% → 0.0% | 274 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001322800`                                      |
| removed |  -109 |  1.8% → 0.0% | 109 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x00000070010c8c00`                                      |
| removed |   -40 |  0.7% → 0.0% |  40 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x00000070013da400`                                      |
| removed |   -26 |  0.4% → 0.0% |  26 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x000000700134c800`                                      |
| removed |   -23 |  0.4% → 0.0% |  23 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x00000070010d9000`                                      |
| removed |   -23 |  0.4% → 0.0% |  23 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x00000070013efc00`                                      |
|  -17.3% |   -14 |  1.4% → 1.0% | 81 → 67 | `applyTo`                          | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                         |
| removed |   -13 |  0.2% → 0.0% |  13 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x000000700131ac00`                                      |
|  -70.6% |   -12 |  0.3% → 0.1% |  17 → 5 | `super$3$visitConstructorOrMethod` | `org.codenarc.rule.ClassReferenceAstVisitor`                                             |
| removed |   -11 |  0.2% → 0.0% |  11 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001958c00`                                      |
| removed |   -10 |  0.2% → 0.0% |  10 → 0 | `linkToCallSite`                   | `java.lang.invoke.LambdaForm$MH.0x000000700138ec00`                                      |
|  -39.1% |    -9 |  0.4% → 0.2% | 23 → 14 | `visitIfElse`                      | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                        |
|  -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `visitDeclarationExpression`       | `org.codenarc.rule.naming.VariableNameAstVisitor`                                        |
|  -64.3% |    -9 |  0.2% → 0.1% |  14 → 5 | `sourceLineAndNumberForImport`     | `org.codenarc.util.ImportUtil`                                                           |
|  -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `visitVariableExpression`          | `org.codenarc.rule.ClassReferenceAstVisitor`                                             |
|  -50.0% |    -9 |  0.3% → 0.1% |  18 → 9 | `visitConstructorOrMethod`         | `org.codenarc.rule.ClassReferenceAstVisitor`                                             |
|  -40.0% |    -8 |  0.3% → 0.2% | 20 → 12 | `doCall`                           | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1` |
|  -53.3% |    -8 |  0.3% → 0.1% |  15 → 7 | `visitPropertyExpression`          | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                 |
|  -77.8% |    -7 | 0.2% → <0.1% |   9 → 2 | `I2C/C2I adapters(0xbbbb)`         | `<unknown>`                                                                              |
|  -50.0% |    -7 |  0.2% → 0.1% |  14 → 7 | `doCall`                           | `org.codenarc.util.ImportUtil$_sortImportsByLineNumber_closure4`                         |
