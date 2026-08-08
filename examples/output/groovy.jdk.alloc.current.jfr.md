# Sampling profile

Collected 327 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| stdlib   | 97.2% |     318 |
| ours     |  2.8% |       9 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                        | Location                                                               |
| ---: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------- |
| 0.3% |       1 | `linkToCallSite(Object, Object)`                | `java.lang.invoke.Invokers$Holder`                                     |
| 0.3% |       1 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                         |
| 0.3% |       1 | `booleanUnbox(Object)`                          | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`   |
| 0.3% |       1 | `getAnnotations(ClassNode)`                     | `org.codehaus.groovy.ast.AnnotatedNode`                                |
| 0.3% |       1 | `getSuppressWarningsAnnotations(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer`                            |
| 0.3% |       1 | `getAstVisitor()`                               | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule` |
| 0.3% |       1 | `calculate(MethodNode, SourceCode)`             | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityMetric`            |
| 0.3% |       1 | `calculateFunctions(Collection)`                | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`              |
| 0.3% |       1 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule`                |
| 0.3% |       1 | `super$4$visitClassEx(ClassNode)`               | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`        |
| 0.3% |       1 | `getMetaClass()`                                | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementRule`      |
| 0.3% |       1 | `sort(List, Comparator)`                        | `java.util.Collections`                                                |
| 0.3% |       1 | `getMetaClass()`                                | `org.codenarc.rule.groovyism.GStringAsMapKeyRule`                      |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `booleanUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation:86` |

##### `getAnnotations(ClassNode)` (`org.codehaus.groovy.ast.AnnotatedNode`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.AnnotatedNode:42` |

##### `getSuppressWarningsAnnotations(AnnotatedNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:240` |

##### `getAstVisitor()` (`org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule:32` |

##### `calculateFunctions(Collection)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult:56` |

##### `sort(List, Comparator)` (`java.util.Collections`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.util.Collections:178` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                      | Location                       |
| -----: | ------: | --------------------------- | ------------------------------ |
| 100.0% |       1 | `getAllImports(SourceCode)` | `org.codenarc.util.ImportUtil` |

##### `booleanUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|      % | Samples | Caller                                    | Location                                                      |
| -----: | ------: | ----------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor` |

##### `getAnnotations(ClassNode)` (`org.codehaus.groovy.ast.AnnotatedNode`)

|      % | Samples | Caller                                          | Location                                    |
| -----: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `getSuppressWarningsAnnotations(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `getSuppressWarningsAnnotations(AnnotatedNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller                                  | Location                                    |
| -----: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `getSuppressedRuleNames(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `getAstVisitor()` (`org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.imports.UnnecessaryGroovyImportRule`)

|      % | Samples | Caller                | Location                         |
| -----: | ------: | --------------------- | -------------------------------- |
| 100.0% |       1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `sort(List, Comparator)` (`java.util.Collections`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                         | Location                                                                   |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 67.9% |     222 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 38.8% |     127 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 28.7% |      94 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 26.9% |      88 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 25.4% |      83 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                   |
| 24.8% |      81 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
| 24.8% |      81 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
| 22.6% |      74 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.6% |      64 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 17.1% |      56 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 15.3% |      50 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 14.1% |      46 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
| 14.1% |      46 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 13.8% |      45 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 13.5% |      44 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.1% |      43 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 11.0% |      36 | `visitMethod(MethodNode)`                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 10.1% |      33 | `visitBlockStatement(BlockStatement)`            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 10.1% |      33 | `visitConstructorOrMethod(MethodNode, boolean)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  8.9% |      29 | `visitExpressionStatement(ExpressionStatement)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 75.5% |      71 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 24.5% |      23 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 63.6% |      56 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 12.5% |      11 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000301390800` |
| 12.5% |      11 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 11.4% |      10 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000301394400` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 94.0% |      78 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  3.6% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.2% |       1 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.2% |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                        |
| ----: | ------: | --------------------------- | --------------------------------------------------------------- |
| 82.7% |      67 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                      |
|  7.4% |       6 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`                  |
|  2.5% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`                |
|  1.2% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.MissingBlankLineAfterImportsRule` |
|  1.2% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.DuplicateImportRule`                 |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                               |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 83.8% |      62 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                                 |
|  8.1% |       6 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`                             |
|  4.1% |       3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`                              |
|  1.4% |       1 | `getAstVisitor()`       | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule` |
|  1.4% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                        |
| ----: | ------: | ------------------------------- | --------------------------------------------------------------- |
| 65.6% |      42 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  7.8% |       5 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`         |
|  3.1% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor` |
|  3.1% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.design.CloneableWithoutCloneAstVisitor`      |
|  3.1% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`            |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 78.6% |      44 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 14.3% |       8 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  5.4% |       3 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.0% |      49 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  2.0% |       1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      46 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee                                  | Location                                    |
| ----: | ------: | --------------------------------------- | ------------------------------------------- |
| 95.7% |      44 | `getAst()`                              | `org.codenarc.source.AbstractSourceCode`    |
|  2.2% |       1 | `getSuppressedRuleNames(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  2.2% |       1 | `getSuppressedRuleNames(Collection)`    | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      45 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 2.3% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                            | Location                                                                     |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------------- |
| 81.4% |      35 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
|  4.7% |       2 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |
|  2.3% |       1 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.PublicMethodsBeforeNonPublicMethodsAstVisitor` |
|  2.3% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`             |
|  2.3% |       1 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`  |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                                    |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 86.1% |      31 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  5.6% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  2.8% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`           |
|  2.8% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  2.8% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                  |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 3.4% |       1 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.8% |      32 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 9.5% |      31 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6.4% |      21 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.4% |      11 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301390800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                |
| 3.4% |      11 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                       |
| 2.4% |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                               |
| 2.1% |       7 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                        |
| 1.8% |       6 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                     |
| 1.5% |       5 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                            |
| 1.2% |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |       4 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.9% |       3 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getText()` (`org.codenarc.source.SourceFile`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRuleElements(Node)` (`org.codenarc.ruleset.XmlReaderRuleSet`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                     |
| 0.6% |       2 | `callConstructor(Object, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`) ← … ← `callCurrent(GroovyObject, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `doCall(Object)` (`org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`) ← … ← `call(Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`) ← … ← `callCurrent(GroovyObject, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `calculateForClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`) |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% |       2 | `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                 |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Allocated heap profile

Allocated 11.8 GiB over 6,320 samples (1.92 MiB per sample).

| Category |     % |     Size | Samples |
| -------- | ----: | -------: | ------: |
| stdlib   | 99.1% | 11.7 GiB |   6,216 |
| ours     |  0.9% |  110 MiB |      53 |
| unknown  | <0.1% | 38.1 KiB |      51 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                               | Location                                                             |
| ----: | -------: | ------: | ------------------------------------------------------ | -------------------------------------------------------------------- |
|  0.5% | 55.5 MiB |      28 | `matcher(CharSequence)`                                | `java.util.regex.Pattern`                                            |
|  0.2% | 25.4 MiB |      15 | `toString()`                                           | `java.lang.StringBuilder`                                            |
|  0.1% | 15.1 MiB |       8 | `<init>()`                                             | `java.util.HashSet`                                                  |
|  0.1% |    8 MiB |       4 | `processMethodOrConstructorCall(MethodCall)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`             |
|  0.1% | 6.48 MiB |       1 | `getSuppressWarningsAnnotations(AnnotatedNode)`        | `org.codenarc.analyzer.SuppressionAnalyzer`                          |
| <0.1% |    6 MiB |       3 | `isCase(Object, Object)`                               | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
| <0.1% |    6 MiB |       3 | `createRange(Object, Object, boolean, boolean)`        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
| <0.1% |    6 MiB |       3 | `matches(String)`                                      | `org.codenarc.util.WildcardPattern`                                  |
| <0.1% |    6 MiB |       3 | `record(Object, int)`                                  | `org.codehaus.groovy.runtime.powerassert.ValueRecorder`              |
| <0.1% |    4 MiB |       2 | `applyTo(SourceCode)`                                  | `org.codenarc.rule.AbstractRule`                                     |
| <0.1% |    4 MiB |       2 | `visitBlockStatement(BlockStatement)`                  | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`    |
| <0.1% |    4 MiB |       1 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor` |
| <0.1% | 3.43 MiB |       2 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                  |
| <0.1% |    2 MiB |       1 | `visitStatement(Statement)`                            | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor`      |
| <0.1% |    2 MiB |       1 | `visitConstantExpression(ConstantExpression)`          | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`         |
| <0.1% |    2 MiB |       1 | `visitVariableExpression(VariableExpression)`          | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`             |
| <0.1% |    2 MiB |       1 | `visitVariableExpression(VariableExpression)`          | `org.codenarc.rule.convention.NoFloatAstVisitor`                     |
| <0.1% |    2 MiB |       1 | `visitExpressionStatement(ExpressionStatement)`        | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`             |
| <0.1% |    2 MiB |       1 | `visitMethod(MethodNode)`                              | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`      |
| <0.1% |    2 MiB |       1 | `visitConstantExpression(ConstantExpression)`          | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`   |

#### Lines

Lines ranked by contribution to each function's self size.

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|      % |     Size | Samples | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 55.5 MiB |      28 | `java.util.regex.Pattern:1180` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 25.4 MiB |      15 | `java.lang.StringBuilder:475` |

##### `<init>()` (`java.util.HashSet`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 15.1 MiB |       8 | `java.util.HashSet:107` |

##### `processMethodOrConstructorCall(MethodCall)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|     % |  Size | Samples | Location                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------- |
| 50.0% | 4 MiB |       2 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:90` |

##### `getSuppressWarningsAnnotations(AnnotatedNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 6.48 MiB |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:237` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codenarc.util.WildcardPattern:75` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder:36` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractRule:141` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`)

|      % |  Size | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor:49` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor`)

|      % |  Size | Samples | Location                                                                |
| -----: | ----: | ------: | ----------------------------------------------------------------------- |
| 100.0% | 4 MiB |       1 | `org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor:42` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|      % |     Size | Samples | Location                                                |
| -----: | -------: | ------: | ------------------------------------------------------- |
| 100.0% | 3.43 MiB |       2 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:158` |

##### `visitStatement(Statement)` (`org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor`)

|      % |  Size | Samples | Location                                                           |
| -----: | ----: | ------: | ------------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor:71` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|      % |  Size | Samples | Location                                                     |
| -----: | ----: | ------: | ------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor:141` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.convention.NoFloatAstVisitor`)

|      % |  Size | Samples | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.NoFloatAstVisitor:70` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

|      % |  Size | Samples | Location                                                    |
| -----: | ----: | ------: | ----------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor:71` |

##### `visitMethod(MethodNode)` (`org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`)

|      % |  Size | Samples | Location                                                           |
| -----: | ----: | ------: | ------------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor:43` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`)

|      % |  Size | Samples | Location                                                              |
| -----: | ----: | ------: | --------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor:42` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|    % |  Size | Samples | Caller                                                  | Location                    |
| ---: | ----: | ------: | ------------------------------------------------------- | --------------------------- |
| 3.6% | 2 MiB |       1 | `findClassDeclarationLineNumber(ClassNode, SourceCode)` | `org.codenarc.util.AstUtil` |

##### `toString()` (`java.lang.StringBuilder`)

|    % |  Size | Samples | Caller                   | Location                                    |
| ---: | ----: | ------: | ------------------------ | ------------------------------------------- |
| 7.9% | 2 MiB |       1 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `<init>()` (`java.util.HashSet`)

|     % |  Size | Samples | Caller     | Location                               |
| ----: | ----: | ------: | ---------- | -------------------------------------- |
| 39.6% | 6 MiB |       3 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getSuppressWarningsAnnotations(AnnotatedNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Caller                                  | Location                                    |
| -----: | -------: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 6.48 MiB |       1 | `getSuppressedRuleNames(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                    | Location                                                                        |
| ----: | ----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------- |
| 33.3% | 2 MiB |       1 | `doCall(Object)`                          | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| 33.3% | 2 MiB |       1 | `removeInitializedField(String)`          | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`                   |
| 33.3% | 2 MiB |       1 | `visitBinaryExpression(BinaryExpression)` | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`                 |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                 |
| ----: | ----: | ------: | --------------------------------------------- | -------------------------------------------------------- |
| 66.7% | 4 MiB |       2 | `visitVariableExpression(VariableExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor` |
| 33.3% | 2 MiB |       1 | `hasOpeningBraceOnSameLine(MethodNode)`       | `org.codenarc.rule.formatting.BracesForMethodAstVisitor` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|     % |  Size | Samples | Caller                                            | Location                                         |
| ----: | ----: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| 33.3% | 2 MiB |       1 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.naming.MethodNameAstVisitor`  |
| 33.3% | 2 MiB |       1 | `<init>(Metric, MetricLevel, Object, Integer)`    | `org.gmetrics.result.SingleNumberMetricResult`   |
| 33.3% | 2 MiB |       1 | `<init>(Metric, MetricLevel, AbcVector, Integer)` | `org.gmetrics.metric.abc.result.AbcMetricResult` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                                          |
| -----: | ----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% | 4 MiB |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitStatement(Statement)` (`org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor`)

|      % |  Size | Samples | Caller                                          | Location                                          |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitMethod(MethodNode)` (`org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`)

|      % |  Size | Samples | Caller                 | Location                                                 |
| -----: | ----: | ------: | ---------------------- | -------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `call(Object, Object)` | `org.codehaus.groovy.ast.GroovyClassVisitor$visitMethod` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                      | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 65.3% | 7.72 GiB |   4,074 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
| 43.1% |  5.1 GiB |   2,647 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
| 36.7% | 4.35 GiB |   2,264 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 33.3% | 3.94 GiB |   2,042 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 30.5% | 3.62 GiB |   1,898 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 27.8% | 3.29 GiB |   1,710 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 27.2% | 3.22 GiB |   1,625 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
| 23.2% | 2.75 GiB |   1,452 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| 21.8% | 2.58 GiB |   1,360 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.7% | 2.34 GiB |   1,211 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 17.3% | 2.05 GiB |   1,062 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 16.6% | 1.97 GiB |   1,014 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 14.6% | 1.73 GiB |     889 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.1% | 1.67 GiB |     860 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.6% | 1.61 GiB |     831 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.0% | 1.54 GiB |     788 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.5% | 1.37 GiB |     701 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
|  8.8% | 1.04 GiB |     540 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000301394400`                        |
|  8.1% |  982 MiB |     507 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  7.1% |  857 MiB |     424 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 51.6% | 2.24 GiB |   1,169 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 24.0% | 1.04 GiB |     540 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000301394400` |
| 14.8% |  658 MiB |     333 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000301390800` |
|  9.5% |  422 MiB |     217 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.2% | 7.43 MiB |       4 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 82.1% | 3.23 GiB |   1,679 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 11.0% |  444 MiB |     223 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  6.8% |  276 MiB |     139 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 72.3% | 2.61 GiB |   1,378 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 27.6% | 1023 MiB |     519 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.8% | 3.29 GiB |   1,706 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.2% |    8 MiB |       4 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                  |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------------------- |
| 83.8% | 2.31 GiB |   1,218 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  5.3% |  150 MiB |      76 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  3.9% |  110 MiB |      57 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  2.3% | 64.8 MiB |      33 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |
|  0.8% | 23.1 MiB |      12 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 83.5% | 2.15 GiB |   1,116 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 10.4% |  275 MiB |     140 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.9% | 77.7 MiB |      58 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.1% | 54.2 MiB |      29 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.3% | 8.17 MiB |       6 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`                |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 86.3% | 2.01 GiB |   1,044 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.3% |  150 MiB |      74 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.4% | 33.4 MiB |      17 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  0.8% | 19.8 MiB |      12 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  0.6% | 15.3 MiB |       8 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`            |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.5% | 10.3 MiB |       7 | `visitImports(ModuleNode)`        | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`           |
| 0.3% |    6 MiB |       3 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| 0.1% |    2 MiB |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 83.4% | 1.64 GiB |     843 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.2% |  124 MiB |      61 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.8% |   36 MiB |      18 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  1.1% |   22 MiB |      11 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`       |
|  0.9% | 17.3 MiB |       9 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                      | Location                                                       |
| ---: | -----: | ------: | --------------------------- | -------------------------------------------------------------- |
| 4.1% | 72 MiB |      36 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                     |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------------ |
| 85.8% | 1.43 GiB |     739 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`            |
|  4.3% | 73.4 MiB |      36 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |
|  2.2% | 37.4 MiB |      18 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`   |
|  1.8% | 31.1 MiB |      16 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                 |
|  1.5% | 26.3 MiB |      13 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`     |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                            | Location                                                              |
| ---: | -----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.6% | 10 MiB |       5 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                      | Location                                                        |
| ---: | -------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 5.7% | 89.7 MiB |      45 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`  |
| 0.1% |    2 MiB |       1 | `visitStatement(Statement)` | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 95.6% |  939 MiB |     483 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  2.3% | 22.7 MiB |      12 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.8% | 17.2 MiB |      10 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.3% | 3.09 MiB |       2 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.9% |  954 MiB |     484 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5.4% |  658 MiB |     333 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301390800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.5% |  546 MiB |     277 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.4% |  531 MiB |     270 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.3% |  520 MiB |     263 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.3% |  519 MiB |     261 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.7% |  447 MiB |     233 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.5% |  422 MiB |     217 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.2% |  392 MiB |     202 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.9% |  347 MiB |     175 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.1% |  260 MiB |     130 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.1% |  257 MiB |     129 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.7% |  210 MiB |      43 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |  192 MiB |      95 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301449c00`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.8% |  103 MiB |      51 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.8% |  101 MiB |      49 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% | 76.3 MiB |      40 | `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003013b8c00`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |   72 MiB |      36 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% | 63.1 MiB |      32 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(List)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |   58 MiB |      29 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301449c00`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

# Retained heap profile

Retained 28.1 KiB over 117 samples (246 B per sample).

| Category |     % |   Size | Samples |
| -------- | ----: | -----: | ------: |
| stdlib   | 99.9% | 28 KiB |     116 |
| ours     |  0.1% |   32 B |       1 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|    % | Size | Samples | Function                        | Location                               |
| ---: | ---: | ------: | ------------------------------- | -------------------------------------- |
| 0.1% | 32 B |       1 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Size | Samples | Location                                   |
| -----: | ---: | ------: | ------------------------------------------ |
| 100.0% | 32 B |       1 | `org.codenarc.rule.AbstractAstVisitor:107` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                         | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 85.5% |   24 KiB |      81 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 76.9% | 21.6 KiB |      33 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 75.5% | 21.2 KiB |      23 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                   |
| 73.5% | 20.6 KiB |      13 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
| 73.5% | 20.6 KiB |      13 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 72.9% | 20.5 KiB |      12 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 71.6% | 20.1 KiB |       4 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|  7.8% |  2.2 KiB |       9 | `<init>(Object, Object)`                         | `groovy.lang.Closure`                                                      |
|  7.3% | 2.05 KiB |       8 | `<clinit>()`                                     | `groovy.lang.Closure`                                                      |
|  5.7% | 1.61 KiB |      28 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  5.1% | 1.43 KiB |      33 | `getMetaClass()`                                 | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|  5.0% | 1.39 KiB |      26 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
|  3.9% | 1.09 KiB |      21 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  3.6% | 1.02 KiB |      17 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  3.0% |    848 B |      12 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  2.7% |    784 B |      17 | `doCall(Object)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
|  2.6% |    736 B |      13 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
|  2.4% |    696 B |       9 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  2.1% |    616 B |      15 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301134800`                        |
|  2.1% |    616 B |      15 | `assertClassImplementsRuleInterface(Class)`      | `org.codenarc.ruleset.RuleSetUtil`                                         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 21.2 KiB |      23 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 20.6 KiB |      13 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee     | Location                                 |
| -----: | -------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 20.6 KiB |      13 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee   | Location                                    |
| -----: | -------: | ------: | -------- | ------------------------------------------- |
| 100.0% | 20.5 KiB |      12 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 20.1 KiB |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                   |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------ |
| 63.1% | 1.02 KiB |      17 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`     |
| 31.1% |    512 B |       9 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule` |
|  2.9% |     48 B |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`  |
|  2.9% |     48 B |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`   |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                       |
| ----: | -------: | ------: | --------------------------- | ---------------------------------------------- |
| 96.6% | 1.34 KiB |      25 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`     |
|  3.4% |     48 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.09 KiB |      21 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Callee                    | Location                                                                |
| ----: | ----: | ------: | ------------------------- | ----------------------------------------------------------------------- |
| 81.5% | 848 B |      12 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                       |
|  9.2% |  96 B |       3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor`                    |
|  4.6% |  48 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                    |
|  4.6% |  48 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.design.AbstractClassWithoutAbstractMethodAstVisitor` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |  Size | Samples | Callee                     | Location                                                    |
| ----: | ----: | ------: | -------------------------- | ----------------------------------------------------------- |
| 14.2% | 120 B |       2 | `visitImports(ModuleNode)` | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|     % |  Size | Samples | Callee                                           | Location                           |
| ----: | ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 78.6% | 616 B |      15 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| 15.3% | 120 B |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  6.1% |  48 B |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Callee                      | Location                                                         |
| ----: | ----: | ------: | --------------------------- | ---------------------------------------------------------------- |
| 50.6% | 352 B |       6 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                |
| 25.3% | 176 B |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`             |
| 17.2% | 120 B |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ParameterNameAstVisitor`               |
|  6.9% |  48 B |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % |  Size | Samples | Callee                           | Location                                            |
| -----: | ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 616 B |      15 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301134800` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 71.6% | 20.1 KiB |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.5% | 1.55 KiB |       1 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← … ← `<clinit>()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.1% |    616 B |      15 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.8% |    504 B |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.7% |    480 B |       6 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← … ← `<clinit>()` ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.2% |    336 B |       7 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% |    224 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% |    176 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)     |
|  0.6% |    160 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.6% |    160 B |       1 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.5% |    144 B |       1 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← `<init>(Object, Object, Reference)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_expressionContainsBannedCharacters_closure2`) ← `expressionContainsBannedCharacters(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← … ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) |
|  0.4% |    120 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRuleElements(Node)` (`org.codenarc.ruleset.XmlReaderRuleSet`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% |    120 B |       1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ParameterNameAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                          |
|  0.4% |    112 B |       1 | `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |     96 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`) ← `doCall()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.3% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.BooleanGetBooleanAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% |     72 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `visitImports(ModuleNode)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`) ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                     |
|  0.2% |     64 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `createMetric()` (`org.codenarc.rule.size.AbcMetricAstVisitor`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getMetric()` (`org.codenarc.rule.size.AbstractMethodMetricAstVisitor`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |     64 B |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |     56 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `createSourceAnalyzer()` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
