# Profile

Collected 336 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 98.2% |     330 |
| Ours             |  1.8% |       6 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                 | Location                                                               |
| ---: | ------: | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| 0.6% |       2 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                         |
| 0.6% |       2 | `getClass()`                                             | `java.lang.Object`                                                     |
| 0.3% |       1 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                     |
| 0.3% |       1 | `checkCall(Object, Object)`                              | `org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite`              |
| 0.3% |       1 | `addViolationForSunImport(ImportNode, SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSunPackagesRule`                  |
| 0.3% |       1 | `append(String)`                                         | `java.lang.StringBuilder`                                              |
| 0.3% |       1 | `<init>()`                                               | `org.codenarc.rule.basic.EmptyClassAstVisitor`                         |
| 0.3% |       1 | `areBothTheSame(Expression, Expression)`                 | `org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionAstVisitor` |
| 0.3% |       1 | `visitBinaryExpression(BinaryExpression)`                | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`        |
| 0.3% |       1 | `callGetProperty(Object)`                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Location                                          |
| ----: | ------: | ------------------------------------------------- |
| 50.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:43` |
| 50.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `checkCall(Object, Object)` (`org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite:109` |

##### `addViolationForSunImport(ImportNode, SourceCode, List)` (`org.codenarc.rule.imports.ImportFromSunPackagesRule`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.imports.ImportFromSunPackagesRule:48` |

##### `append(String)` (`java.lang.StringBuilder`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       1 | `java.lang.StringBuilder:179` |

##### `areBothTheSame(Expression, Expression)` (`org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionAstVisitor`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionAstVisitor:102` |

##### `visitBinaryExpression(BinaryExpression)` (`org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor:89` |

##### `callGetProperty(Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.callsite.AbstractCallSite:329` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `getClass()` (`java.lang.Object`)

|     % | Samples | Caller                  | Location                                               |
| ----: | ------: | ----------------------- | ------------------------------------------------------ |
| 50.0% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.basic.BooleanGetBooleanAstVisitor`  |
| 50.0% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.dry.DuplicateListLiteralAstVisitor` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                           | Location                                          |
| -----: | ------: | ------------------------------------------------ | ------------------------------------------------- |
| 100.0% |       1 | `applyToClassNode(ClassNode, int, String, List)` | `org.codenarc.rule.formatting.BracesForClassRule` |

##### `checkCall(Object, Object)` (`org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite`)

|      % | Samples | Caller                 | Location                              |
| -----: | ------: | ---------------------- | ------------------------------------- |
| 100.0% |       1 | `call(Object, Object)` | `org.gmetrics.source.SourceCode$line` |

##### `append(String)` (`java.lang.StringBuilder`)

|      % | Samples | Caller                                | Location                    |
| -----: | ------: | ------------------------------------- | --------------------------- |
| 100.0% |       1 | `getDeclaration(ASTNode, SourceCode)` | `org.codenarc.util.AstUtil` |

##### `callGetProperty(Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`)

|      % | Samples | Caller                                            | Location                                |
| -----: | ------: | ------------------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `handleExpressionContainingOperation(Expression)` | `org.gmetrics.metric.abc.AbcAstVisitor` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                                                   |
| ----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| 71.7% |     241 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 36.3% |     122 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                         |
| 29.8% |     100 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 27.1% |      91 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 27.1% |      91 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                           |
| 23.2% |      78 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 22.6% |      76 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 21.7% |      73 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
| 19.3% |      65 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 17.0% |      57 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 16.4% |      55 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 15.8% |      53 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.9% |      50 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 13.1% |      44 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.5% |      42 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.9% |      40 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.0% |      37 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                   |
| 10.7% |      36 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 10.7% |      36 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  8.3% |      28 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 78.0% |      78 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 22.0% |      22 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                  |
| ----: | ------: | --------------------------- | --------------------------------------------------------- |
| 75.8% |      69 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  7.7% |       7 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  2.2% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |
|  2.2% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`  |
|  2.2% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BracesForClassRule`         |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 64.1% |      50 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 14.1% |      11 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801394400` |
| 14.1% |      11 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  7.7% |       6 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000a801390800` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 77.6% |      59 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  9.2% |       7 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  6.6% |       5 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  3.9% |       3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  1.3% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`                |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 93.2% |      68 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  4.1% |       3 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  2.7% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 81.5% |      53 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  4.6% |       3 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  3.1% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`     |
|  1.5% |       1 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.5% |       1 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`    |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 70.2% |      40 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 15.8% |       9 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  7.0% |       4 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  3.5% |       2 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.2% |      54 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.8% |       1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.9% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                            | Location                                                                    |
| ----: | ------: | --------------------------------- | --------------------------------------------------------------------------- |
| 84.0% |      42 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  4.0% |       2 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor` |
|  2.0% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.FieldReferenceAstVisitor`                                |
|  2.0% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`            |
|  2.0% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`             |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                        |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| 84.1% |      37 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  4.5% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`        |
|  4.5% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`    |
|  4.5% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |
|  2.3% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`      |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 4.8% |       2 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 2.5% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      37 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |      36 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      36 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.1% |      34 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  8.0% |      27 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.0% |      20 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.3% |      11 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.0% |      10 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.7% |       9 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.8% |       6 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.8% |       6 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801390800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.2% |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.2% |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% |       3 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
|  0.9% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.6% |       2 | `callConstructor(Object, Object, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`) ← … ← `callCurrent(GroovyObject, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `doCall(Object)` (`org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`) ← … ← `call(Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`) ← … ← `callCurrent(GroovyObject, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `calculateForClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`)                                                                                                                                                                                             |
|  0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← … ← `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitConstructorOrMethod(MethodNode, boolean)` ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                      |
|  0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% |       2 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← `<init>(Object, Object, Reference, Reference, Reference, Reference)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                 |
|  0.6% |       2 | `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Allocated heap profile

Allocated 11.9 GiB over 6,325 samples (1.93 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 98.7% | 11.8 GiB |   6,220 |
| Ours             |  1.3% |  162 MiB |      53 |
| Unknown          | <0.1% |   38 KiB |      52 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                                    | Location                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  0.5% |   62 MiB |       2 | `getViolationLocationString(Violation, String)`             | `org.codenarc.report.TextReportWriter`                                          |
|  0.5% |   62 MiB |      31 | `matcher(CharSequence)`                                     | `java.util.regex.Pattern`                                                       |
|  0.2% |   21 MiB |      11 | `<init>()`                                                  | `java.util.HashSet`                                                             |
|  0.2% | 18.6 MiB |       9 | `toString()`                                                | `java.lang.StringBuilder`                                                       |
|  0.1% |   16 MiB |       8 | `<init>()`                                                  | `org.codenarc.rule.AbstractAstVisitor`                                          |
|  0.1% |   10 MiB |       5 | `writeViolation(Writer, Violation, String)`                 | `org.codenarc.report.TextReportWriter`                                          |
| <0.1% |    6 MiB |       3 | `isCase(Object, Object)`                                    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
| <0.1% |    6 MiB |       3 | `shouldApplyThisRuleTo(SourceCode)`                         | `org.codenarc.rule.AbstractRule`                                                |
| <0.1% |    6 MiB |       3 | `matches(String)`                                           | `org.codenarc.util.WildcardPattern`                                             |
| <0.1% |    4 MiB |       2 | `applyTo(SourceCode)`                                       | `org.codenarc.rule.AbstractRule`                                                |
| <0.1% |    4 MiB |       2 | `removeAnyViolationsForSameLine(int)`                       | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |
| <0.1% |    4 MiB |       2 | `isRuleSuppressed(Rule)`                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                     |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                            | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`      |
| <0.1% | 3.99 MiB |       2 | `createRange(Object, Object, boolean, boolean)`             | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
| <0.1% |    2 MiB |       1 | `visitConstructorCallExpression(ConstructorCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor`              |
| <0.1% |    2 MiB |       1 | `<init>(String, boolean)`                                   | `org.codenarc.util.WildcardPattern`                                             |
| <0.1% |    2 MiB |       1 | `visitReturnStatement(ReturnStatement)`                     | `org.codenarc.rule.design.ArrayReturnTracker`                                   |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                                 | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`                  |
| <0.1% |    2 MiB |       1 | `<init>(String)`                                            | `org.codenarc.plugin.disablerules.LookupTable`                                  |

#### Lines

Lines ranked by contribution to each function's self size.

##### `getViolationLocationString(Violation, String)` (`org.codenarc.report.TextReportWriter`)

|      % |   Size | Samples | Location                                  |
| -----: | -----: | ------: | ----------------------------------------- |
| 100.0% | 62 MiB |       2 | `org.codenarc.report.TextReportWriter:97` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|      % |   Size | Samples | Location                       |
| -----: | -----: | ------: | ------------------------------ |
| 100.0% | 62 MiB |      31 | `java.util.regex.Pattern:1180` |

##### `<init>()` (`java.util.HashSet`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 21 MiB |      11 | `java.util.HashSet:107` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 18.6 MiB |       9 | `java.lang.StringBuilder:475` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |   Size | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 75.0% | 12 MiB |       6 | `org.codenarc.rule.AbstractAstVisitor:36` |
| 25.0% |  4 MiB |       2 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 60.0% | 6 MiB |       3 | `org.codenarc.report.TextReportWriter:91` |
| 20.0% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:90` |
| 20.0% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:92` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 6 MiB |       3 | `org.codenarc.rule.AbstractRule:253` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codenarc.util.WildcardPattern:75` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractRule:141` |

##### `removeAnyViolationsForSameLine(int)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|      % |  Size | Samples | Location                                                           |
| -----: | ----: | ------: | ------------------------------------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor:124` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`)

|      % |  Size | Samples | Location                                                                            |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3:112` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |  Size | Samples | Location                                                                      |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |     Size | Samples | Location                                                |
| -----: | -------: | ------: | ------------------------------------------------------- |
| 100.0% | 3.99 MiB |       2 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `visitConstructorCallExpression(ConstructorCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor`)

|      % |  Size | Samples | Location                                                              |
| -----: | ----: | ------: | --------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor:67` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.util.WildcardPattern:53` |

##### `visitReturnStatement(ReturnStatement)` (`org.codenarc.rule.design.ArrayReturnTracker`)

|      % |  Size | Samples | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.ArrayReturnTracker:85` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ParameterReassignmentAstVisitor`)

|      % |  Size | Samples | Location                                                          |
| -----: | ----: | ------: | ----------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor:45` |

##### `<init>(String)` (`org.codenarc.plugin.disablerules.LookupTable`)

|      % |  Size | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.plugin.disablerules.LookupTable:35` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>()` (`java.util.HashSet`)

|     % |   Size | Samples | Caller     | Location                               |
| ----: | -----: | ------: | ---------- | -------------------------------------- |
| 57.1% | 12 MiB |       6 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |  Size | Samples | Caller                                | Location                    |
| ----: | ----: | ------: | ------------------------------------- | --------------------------- |
| 10.7% | 2 MiB |       1 | `repeat(char, int)`                   | `org.codenarc.util.AstUtil` |
| 10.7% | 2 MiB |       1 | `getDeclaration(ASTNode, SourceCode)` | `org.codenarc.util.AstUtil` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Caller     | Location                                                  |
| ----: | ----: | ------: | ---------- | --------------------------------------------------------- |
| 12.5% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.formatting.BracesForForLoopAstVisitor` |
| 12.5% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.naming.PackageNameAstVisitor`          |
| 12.5% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.basic.EmptyTryBlockAstVisitor`         |
| 12.5% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.basic.AbstractFinallyAstVisitor`       |
| 12.5% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.design.BooleanReturnTracker`           |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                              |
| ----: | ----: | ------: | --------------------------------------------- | --------------------------------------------------------------------- |
| 33.3% | 2 MiB |       1 | `statementForcesMethodReturn(Statement)`      | `org.codenarc.rule.basic.DeadCodeAstVisitor`                          |
| 33.3% | 2 MiB |       1 | `visitConstantExpression(ConstantExpression)` | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`    |
| 33.3% | 2 MiB |       1 | `checkType(String, ASTNode)`                  | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Caller                | Location                         |
| -----: | ----: | ------: | --------------------- | -------------------------------- |
| 100.0% | 6 MiB |       3 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |     Size | Samples | Caller                                        | Location                                                 |
| ----: | -------: | ------: | --------------------------------------------- | -------------------------------------------------------- |
| 50.1% |    2 MiB |       1 | `endsWithSemicolon(String, int)`              | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
| 49.9% | 1.99 MiB |       1 | `visitVariableExpression(VariableExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ParameterReassignmentAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                 | Location                                                                    |
| ----: | -------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| 64.2% | 7.66 GiB |   4,019 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| 43.8% | 5.22 GiB |   2,689 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
| 37.5% | 4.48 GiB |   2,329 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 33.0% | 3.94 GiB |   2,053 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 29.7% | 3.55 GiB |   1,862 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 27.5% | 3.29 GiB |   1,712 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 26.3% | 3.14 GiB |   1,580 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
| 22.0% | 2.62 GiB |   1,375 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
| 20.8% | 2.48 GiB |   1,304 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 18.8% | 2.24 GiB |   1,163 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 16.3% | 1.94 GiB |   1,012 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 15.7% | 1.88 GiB |     977 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 13.7% | 1.64 GiB |     850 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 13.2% | 1.57 GiB |     816 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 12.7% | 1.51 GiB |     789 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 12.2% | 1.45 GiB |     751 | `visitExpressionStatement(ExpressionStatement)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 12.1% | 1.45 GiB |     714 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  8.8% | 1.05 GiB |     543 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000a801394400`                         |
|  7.9% |  965 MiB |     490 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                    |
|  6.7% |  815 MiB |     412 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 51.5% | 2.31 GiB |   1,198 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 23.4% | 1.05 GiB |     543 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801394400` |
| 15.4% |  705 MiB |     357 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000a801390800` |
|  9.6% |  439 MiB |     228 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.1% |    4 MiB |       2 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 84.0% | 3.31 GiB |   1,724 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  9.6% |  388 MiB |     199 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  6.3% |  253 MiB |     129 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 72.1% | 2.56 GiB |   1,348 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 27.8% | 1009 MiB |     512 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.7% | 3.28 GiB |   1,706 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.3% | 10.7 MiB |       6 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                 |
| ----: | -------: | ------: | --------------------------- | -------------------------------------------------------- |
| 84.6% | 2.22 GiB |   1,167 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  4.8% |  128 MiB |      66 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  4.0% |  107 MiB |      54 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  1.5% | 41.2 MiB |      20 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  0.8% | 20.9 MiB |      11 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule`  |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 84.2% | 2.09 GiB |   1,083 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 10.4% |  263 MiB |     134 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  3.3% | 84.6 MiB |      59 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  1.4% | 35.2 MiB |      18 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.2% |    6 MiB |       3 | `addAll(Collection)`    | `java.util.ArrayList`                                   |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 86.1% | 1.93 GiB |   1,005 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.4% |  146 MiB |      70 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.4% | 32.7 MiB |      16 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  0.8% | 19.4 MiB |      10 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.convention.CompileStaticlVisitor`                |
|  0.7% | 17.1 MiB |       9 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |    Size | Samples | Callee                            | Location                                                              |
| ---: | ------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.3% |   6 MiB |       3 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |
| 0.2% |   4 MiB |       2 | `visitImports(ModuleNode)`        | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`           |
| 0.1% | 1.4 MiB |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 82.1% | 1.54 GiB |     801 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  7.5% |  144 MiB |      73 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.8% |   34 MiB |      16 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  0.9% |   18 MiB |       9 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`     |
|  0.8% | 15.4 MiB |       8 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`      |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                      | Location                                                       |
| ---: | -----: | ------: | --------------------------- | -------------------------------------------------------------- |
| 3.9% | 66 MiB |      33 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                        |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| 86.0% | 1.35 GiB |     703 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  2.5% | 39.6 MiB |      21 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`    |
|  2.3% | 36.3 MiB |      18 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`      |
|  2.2% | 34.7 MiB |      18 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                    |
|  1.9% | 31.2 MiB |      16 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                            | Location                                                              |
| ---: | -----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.9% | 14 MiB |       6 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |    Size | Samples | Callee                      | Location                                                       |
| ---: | ------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 6.9% | 103 MiB |      54 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 97.3% |  939 MiB |     477 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  1.4% | 13.1 MiB |       6 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.3% |   13 MiB |       7 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % |    Size | Samples | Callee                                                   | Location                           |
| ----: | ------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.0% | 807 MiB |     408 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.5% |   4 MiB |       2 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  0.2% |   2 MiB |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  0.2% |   2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.7% |  943 MiB |     479 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5.8% |  705 MiB |     357 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801390800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.6% |  557 MiB |     284 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.5% |  545 MiB |     274 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.4% |  540 MiB |     276 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.2% |  516 MiB |     259 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.8% |  463 MiB |     238 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.7% |  458 MiB |     230 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.6% |  439 MiB |     228 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.0% |  364 MiB |     113 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80144ac00`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.4% |  298 MiB |     152 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.1% |  263 MiB |     132 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.0% |  243 MiB |     124 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |  122 MiB |      46 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.9% |  106 MiB |      55 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.8% |  100 MiB |      47 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.6% | 75.4 MiB |      38 | `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013bd000`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% | 64.8 MiB |      32 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 63.5 MiB |      34 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(List)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |   62 MiB |       2 | `getViolationLocationString(Violation, String)` (`org.codenarc.report.TextReportWriter`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

# Retained heap profile

Retained 8.95 KiB over 114 samples (80.4 B per sample).

| Category         |      % |     Size | Samples |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 8.95 KiB |     114 |

## Hottest functions

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                                  | Location                                                                   |
| ----: | -------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 69.8% | 6.24 KiB |      80 | `linkToCallSite(Object, Object, Object)`                  | `java.lang.invoke.Invokers$Holder`                                         |
| 47.2% | 4.22 KiB |      45 | `getMetaClass()`                                          | `org.codehaus.groovy.reflection.ClassInfo`                                 |
| 26.7% | 2.39 KiB |      21 | `linkToCallSite(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`                        |
| 23.7% | 2.12 KiB |      24 | `init()`                                                  | `org.codenarc.source.AbstractSourceCode`                                   |
| 21.0% | 1.88 KiB |      35 | `linkToCallSite(Object, Object)`                          | `java.lang.invoke.Invokers$Holder`                                         |
| 21.0% | 1.88 KiB |      20 | `assertClassImplementsRuleInterface(Class)`               | `org.codenarc.ruleset.RuleSetUtil`                                         |
| 20.5% | 1.84 KiB |      19 | `doCall(Object)`                                          | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
| 14.0% | 1.25 KiB |      24 | `applyTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                           |
| 13.9% | 1.24 KiB |      24 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 12.2% | 1.09 KiB |      21 | `doCall(Object)`                                          | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  9.4% |    864 B |      16 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  7.7% |    704 B |      14 | `visitClass(ClassNode)`                                   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  7.4% |    680 B |       2 | `callConstructor(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                    |
|  6.9% |    632 B |       2 | `calculate(MethodNode, SourceCode)`                       | `org.gmetrics.metric.abc.AbcMetric`                                        |
|  6.9% |    632 B |       2 | `call(Object, Object)`                                    | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                    |
|  6.5% |    592 B |      11 | `visitMethod(MethodNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  6.5% |    592 B |       1 | `getMagnitude()`                                          | `org.gmetrics.metric.abc.AbcVector`                                        |
|  6.5% |    592 B |       1 | `callGroovyObjectGetProperty(Object)`                     | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                    |
|  6.5% |    592 B |       1 | `<init>(Metric, MetricLevel, AbcVector, Integer)`         | `org.gmetrics.metric.abc.result.AbcMetricResult`                           |
|  6.3% |    576 B |      13 | `getAst()`                                                | `org.codenarc.source.AbstractSourceCode`                                   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 2.12 KiB |      24 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % |     Size | Samples | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 1.88 KiB |      20 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801134800` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.84 KiB |      19 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |    Size | Samples | Callee                      | Location                                                        |
| ----: | ------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 95.6% | 1.2 KiB |      23 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                      |
|  4.4% |    56 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.MissingBlankLineAfterImportsRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |  Size | Samples | Callee                  | Location                                   |
| ----: | ----: | ------: | ----------------------- | ------------------------------------------ |
| 67.9% | 864 B |      16 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`     |
| 32.1% | 408 B |       8 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.09 KiB |      21 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Callee                          | Location                                                        |
| ----: | ----: | ------: | ------------------------------- | --------------------------------------------------------------- |
| 81.5% | 704 B |      14 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
| 13.0% | 112 B |       1 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.convention.CompileStaticlVisitor`            |
|  5.6% |  48 B |       1 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|     % |  Size | Samples | Callee                                                    | Location                                                |
| ----: | ----: | ------: | --------------------------------------------------------- | ------------------------------------------------------- |
| 93.7% | 592 B |       1 | `callConstructor(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  6.3% |  40 B |       1 | `callGetProperty(Object)`                                 | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Callee                            | Location                                                                       |
| ----: | ----: | ------: | --------------------------------- | ------------------------------------------------------------------------------ |
| 54.1% | 320 B |       7 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                              |
| 20.3% | 120 B |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`               |
| 13.5% |  80 B |       1 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor` |
|  6.8% |  40 B |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`            |
|  5.4% |  32 B |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`   |

##### `getMagnitude()` (`org.gmetrics.metric.abc.AbcVector`)

|      % |  Size | Samples | Callee                 | Location                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% | 592 B |       1 | `call(Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `<init>(Metric, MetricLevel, AbcVector, Integer)` (`org.gmetrics.metric.abc.result.AbcMetricResult`)

|      % |  Size | Samples | Callee                                | Location                                                |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------- |
| 100.0% | 592 B |       1 | `callGroovyObjectGetProperty(Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |  Size | Samples | Callee                           | Location                           |
| -----: | ----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 576 B |      13 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.5% | 1.84 KiB |      19 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 16.0% | 1.43 KiB |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  6.5% |    592 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `call(Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `getMagnitude()` (`org.gmetrics.metric.abc.AbcVector`) ← … ← `callGroovyObjectGetProperty(Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `<init>(Metric, MetricLevel, AbcVector, Integer)` (`org.gmetrics.metric.abc.result.AbcMetricResult`) ← … ← `callConstructor(Object, Object, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)                                                                                                                                                                                                                                                                                                    |
|  5.8% |    528 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801134800`) ← `doCall(Object)` (`org.codenarc.CodeNarc$_execute_closure2`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  4.6% |    424 B |       9 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |    232 B |       5 | `<clinit>()` (`groovy.lang.Closure`) ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% |    128 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.4% |    128 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.3% |    120 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processMethodNode(MethodNode, String)` (`org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
|  1.2% |    112 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getLines()` (`org.codenarc.source.AbstractSourceCode`) ← `getRawLine(SourceCode, int)` (`org.codenarc.util.AstUtil`) ← `findFirstNonAnnotationLine(ASTNode, SourceCode)` ← `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.convention.CompileStaticlVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                            |
|  1.0% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `<init>(Object[], String[])` (`org.codehaus.groovy.runtime.GStringImpl`) ← `<clinit>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.ruleregistry.RuleRegistryInitializer`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.CodeNarcRunner`)                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRules()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |     88 B |       1 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRules()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.ruleregistry.RuleRegistryInitializer`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.CodeNarcRunner`)                                                                                                                                                                                                                                                                                                                    |
|  1.0% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.formatting.BracesForForLoopAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                            |
|  1.0% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `callConstructor(Object, Object, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `createAggregateMetricResult(MetricLevel, Collection, ASTNode)` (`org.gmetrics.metric.abc.AbcMetric`) ← … ← `callCurrent(GroovyObject, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `calculateForClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`) ← … ← `callCurrent(GroovyObject, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `applyToClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMetric`)                                                                                                                                                                                                                            |
|  0.9% |     80 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodComplete(MethodNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                                                                                                                                                                                                                                                      |
|  0.9% |     80 B |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.9% |     80 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)                                                                                                                                                                                                                                                       |
|  0.8% |     72 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.7% |     64 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
