# Sampling profile diff

6,001 samples → 5,827 samples (-174 samples, -2.9%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| native            |  -2.6% |  -114 | 72.4% → 72.6% | 4,346 → 4,232 |
| stdlib            |  -5.0% |   -76 | 25.6% → 25.0% | 1,535 → 1,459 |
| ours              | +22.0% |   +13 |   1.0% → 1.2% |       59 → 72 |
| jit               |  +1.7% |    +1 |          1.0% |       58 → 59 |
| garbage collector | +66.7% |    +2 |  <0.1% → 0.1% |         3 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                        | Location                                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------- |
|     new |   +11 |  0.0% → 0.2% |  0 → 11 | `I2C/C2I adapters(0xbb)`                        | `<unknown>`                                                          |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `I2C/C2I adapters(0xb)`                         | `<unknown>`                                                          |
|  +26.7% |    +4 |  0.2% → 0.3% | 15 → 19 | `itable stub`                                   | `<unknown>`                                                          |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `intUnbox(Object)`                              | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xbbb)`                       | `<unknown>`                                                          |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `getInterfaces()`                               | `org.codehaus.groovy.ast.ClassNode`                                  |
|  +66.7% |    +2 | <0.1% → 0.1% |   3 → 5 | `g1_post_barrier_slow`                          | `<unknown>`                                                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `linkToCallSite(Object, Object)`                | `java.lang.invoke.Invokers$Holder`                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                | `org.codenarc.util.WildcardPattern$_closure1`                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isRuleSuppressed(Rule)`                        | `org.codenarc.analyzer.SuppressionAnalyzer`                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitor()`                               | `org.codenarc.rule.AbstractAstVisitorRule`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `eachImportLine(SourceCode, Closure)`           | `org.codenarc.rule.imports.AbstractImportRule`                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`             |
|   +6.7% |    +1 |  0.2% → 0.3% | 15 → 16 | `equals(Object)`                                | `java.lang.String`                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitBlockStatement(BlockStatement)`   | `org.codenarc.rule.convention.IfStatementCouldBeTernaryAstVisitor`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(Collection)`                            | `org.codenarc.rule.FieldReferenceAstVisitor`                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitVariableExpression(VariableExpression)`   | `org.codenarc.rule.FieldReferenceAstVisitor`                         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                          | Location                                                                                    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  -92.3% |   -12 | 0.2% → <0.1% |  13 → 1 | `I2C/C2I adapters(0xbaa)`                         | `<unknown>`                                                                                 |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `I2C/C2I adapters(0xba)`                          | `<unknown>`                                                                                 |
|  -33.3% |    -4 |  0.2% → 0.1% |  12 → 8 | `vtable stub`                                     | `<unknown>`                                                                                 |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `<init>()`                                        | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitBlockStatement(BlockStatement)`             | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                           |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                                                |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `iterator()`                                      | `java.util.ArrayList`                                                                       |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xab)`                          | `<unknown>`                                                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbab)`                      | `<unknown>`                                                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbabbbbb)`                  | `<unknown>`                                                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `InterpreterRuntime::anewarray`                   | `libjvm.dylib`                                                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                              |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `hasNext()`                                       | `java.util.ArrayList$Itr`                                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `matches(String)`                                 | `org.codenarc.util.WildcardPattern`                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitClosureExpression(ClosureExpression)`       | `org.codenarc.rule.formatting.ClosureStatementOnOpeningLineOfMultipleLineClosureAstVisitor` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |            % |   Samples | Function                                                      | Location                                                                                     |
| -------: | ----: | -----------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|      new |  +260 |  0.0% → 4.5% |   0 → 260 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000b801320400`                                          |
|      new |  +115 |  0.0% → 2.0% |   0 → 115 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000b8010c8400`                                          |
|      new |   +36 |  0.0% → 0.6% |    0 → 36 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8013d6800`                                          |
|      new |   +26 |  0.0% → 0.4% |    0 → 26 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8010d6400`                                          |
|      new |   +21 |  0.0% → 0.4% |    0 → 21 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000b8013f0c00`                                          |
|      new |   +19 |  0.0% → 0.3% |    0 → 19 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000b80131c800`                                          |
|      new |   +19 |  0.0% → 0.3% |    0 → 19 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b80134c800`                                          |
|   +29.4% |   +15 |  0.8% → 1.1% |   51 → 66 | `getAstVisitor()`                                             | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|    +5.9% |   +14 |  3.9% → 4.3% | 236 → 250 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|   +73.7% |   +14 |  0.3% → 0.6% |   19 → 33 | `visitClassComplete(ClassNode)`                               | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|    +5.2% |   +12 |  3.9% → 4.2% | 232 → 244 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                                     |
|    +5.2% |   +12 |  3.9% → 4.2% | 232 → 244 | `init()`                                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|   +63.2% |   +12 |  0.3% → 0.5% |   19 → 31 | `doCall(Object)`                                              | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|      new |   +12 |  0.0% → 0.2% |    0 → 12 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80138e400`                                          |
| +1000.0% |   +10 | <0.1% → 0.2% |    1 → 11 | `I2C/C2I adapters(0xbb)`                                      | `<unknown>`                                                                                  |
|    +4.3% |   +10 |  3.9% → 4.2% | 235 → 245 | `getAst()`                                                    | `org.codenarc.source.AbstractSourceCode`                                                     |
|   +16.1% |   +10 |  1.0% → 1.2% |   62 → 72 | `super$3$applyTo(SourceCode, List)`                           | `org.codenarc.rule.formatting.IndentationRule`                                               |
|  +200.0% |   +10 |  0.1% → 0.3% |    5 → 15 | `calculate(MethodNode, SourceCode)`                           | `org.gmetrics.metric.abc.AbcMetric`                                                          |
|  +500.0% |   +10 | <0.1% → 0.2% |    2 → 12 | `visitClassComplete(ClassNode)`                               | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`                              |
|    +3.5% |    +9 |  4.3% → 4.6% | 260 → 269 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                 | Location                                                                    |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed |  -285 |   4.7% → 0.0% |       285 → 0 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000f001320400`                         |
| removed |  -106 |   1.8% → 0.0% |       106 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f0010c8400`                         |
|   -2.5% |   -55 | 36.3% → 36.4% | 2,178 → 2,123 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|   -2.4% |   -52 | 36.5% → 36.7% | 2,191 → 2,139 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
|   -2.4% |   -52 | 36.4% → 36.6% | 2,187 → 2,135 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|   -2.4% |   -52 | 36.3% → 36.5% | 2,177 → 2,125 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|   -2.4% |   -51 | 36.0% → 36.2% | 2,162 → 2,111 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|   -3.1% |   -51 | 27.7% → 27.6% | 1,662 → 1,611 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   -2.4% |   -50 | 34.4% → 34.5% | 2,063 → 2,013 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|   -2.2% |   -45 | 34.7% → 35.0% | 2,082 → 2,037 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|   -2.2% |   -45 | 33.6% → 33.8% | 2,017 → 1,972 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -2.2% |   -45 | 33.4% → 33.7% | 2,007 → 1,962 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -2.2% |   -45 | 33.6% → 33.8% | 2,016 → 1,971 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   -2.2% |   -45 | 33.6% → 33.8% | 2,016 → 1,971 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -1.9% |   -37 | 33.2% → 33.6% | 1,994 → 1,957 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| removed |   -35 |   0.6% → 0.0% |        35 → 0 | `linkToCallSite(Object, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000f0013d9800`                         |
| removed |   -25 |   0.4% → 0.0% |        25 → 0 | `linkToCallSite(Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000f00131c800`                         |
| removed |   -24 |   0.4% → 0.0% |        24 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`    | `java.lang.invoke.LambdaForm$MH.0x000000f00134c800`                         |
| removed |   -23 |   0.4% → 0.0% |        23 → 0 | `linkToCallSite(Object, int, int, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000f0013f5000`                         |
| removed |   -21 |   0.3% → 0.0% |        21 → 0 | `linkToCallSite(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000f0010d6400`                         |
