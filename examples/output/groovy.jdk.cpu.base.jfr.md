# Sampling profile

Collected 321 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| stdlib   | 97.2% |     312 |
| ours     |  2.8% |       9 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                              | Location                                                             |
| ---: | ------: | ----------------------------------------------------- | -------------------------------------------------------------------- |
| 0.6% |       2 | `collectViolations(SourceCode, RuleSet)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                       |
| 0.6% |       2 | `visitMethodCallExpression(MethodCallExpression)`     | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| 0.3% |       1 | `linkToCallSite(Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                   |
| 0.3% |       1 | `visitBinaryExpression(BinaryExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| 0.3% |       1 | `getDeclaration(ASTNode, SourceCode)`                 | `org.codenarc.util.AstUtil`                                          |
| 0.3% |       1 | `doCall(Object)`                                      | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3` |
| 0.3% |       1 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.design.ConstantsOnlyInterfaceAstVisitor`          |
| 0.3% |       1 | `propertyExpressionsAreEqual(Expression, Expression)` | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`  |
| 0.3% |       1 | `$getStaticMetaClass()`                               | `org.codenarc.rule.size.MethodCountAstVisitor`                       |
| 0.3% |       1 | `compareEqual(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
| 0.3% |       1 | `removeGrabTransformation(CompilationUnit)`           | `org.codenarc.source.AbstractSourceCode`                             |
| 0.3% |       1 | `getMetaClass()`                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                       |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Location                                          |
| ----: | ------: | ------------------------------------------------- |
| 50.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |
| 50.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:43` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|     % | Samples | Location                                         |
| ----: | ------: | ------------------------------------------------ |
| 50.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:184` |
| 50.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:186` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:201` |

##### `getDeclaration(ASTNode, SourceCode)` (`org.codenarc.util.AstUtil`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       1 | `org.codenarc.util.AstUtil:1245` |

##### `doCall(Object)` (`org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3:82` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.design.ConstantsOnlyInterfaceAstVisitor`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.design.ConstantsOnlyInterfaceAstVisitor:36` |

##### `propertyExpressionsAreEqual(Expression, Expression)` (`org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor:59` |

##### `compareEqual(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:752` |

##### `removeGrabTransformation(CompilationUnit)` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.codenarc.source.AbstractSourceCode:140` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|     % | Samples | Caller                                                    | Location                                                 |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| 50.0% |       1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                           | Location                                                                    |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------- |
| 100.0% |       1 | `removeDistractingParts(String)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Caller                                            | Location                                                      |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `super$2$visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.design.ConstantsOnlyInterfaceAstVisitor`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `$getStaticMetaClass()` (`org.codenarc.rule.size.MethodCountAstVisitor`)

|      % | Samples | Caller     | Location                                       |
| -----: | ------: | ---------- | ---------------------------------------------- |
| 100.0% |       1 | `<init>()` | `org.codenarc.rule.size.MethodCountAstVisitor` |

##### `compareEqual(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Caller                          | Location                                                        |
| -----: | ------: | ------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `processMethodNode(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                         | Location                                                                   |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 73.5% |     236 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 39.6% |     127 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 34.6% |     111 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 29.9% |      96 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
| 26.5% |      85 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 26.5% |      85 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 25.9% |      83 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
| 24.9% |      80 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 21.5% |      69 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                   |
| 19.6% |      63 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 17.8% |      57 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 15.9% |      51 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 15.6% |      50 | `visitMethod(MethodNode)`                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 15.3% |      49 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
| 15.0% |      48 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 14.3% |      46 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 14.0% |      45 | `visitConstructorOrMethod(MethodNode, boolean)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.7% |      44 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 13.7% |      44 | `visitBlockStatement(BlockStatement)`            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.8% |      38 | `visitExpressionStatement(ExpressionStatement)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 79.3% |      88 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 20.7% |      23 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                              |
| ----: | ------: | --------------------------- | ----------------------------------------------------- |
| 84.4% |      81 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`            |
|  4.2% |       4 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`      |
|  2.1% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.TrailingWhitespaceRule` |
|  1.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`         |
|  1.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`        |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 67.1% |      57 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 17.6% |      15 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000e001394800` |
| 10.6% |       9 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  4.7% |       4 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000e001390c00` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 85.9% |      73 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  8.2% |       7 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.4% |       2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  2.4% |       2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`                |
|  1.2% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                              |
| ----: | ------: | ------------------------------- | --------------------------------------------------------------------- |
| 78.8% |      63 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
|  2.5% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`       |
|  2.5% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |
|  2.5% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`   |
|  1.3% |       1 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.design.StatelessSingletonAstVisitor`               |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 84.1% |      58 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  8.7% |       6 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  5.8% |       4 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.4% |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                     | Location                                     |
| ---: | ------: | -------------------------- | -------------------------------------------- |
| 1.6% |       1 | `visitImports(ModuleNode)` | `org.codenarc.rule.ClassReferenceAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                      | Location                                                                       |
| ----: | ------: | --------------------------- | ------------------------------------------------------------------------------ |
| 84.2% |      48 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                              |
|  1.8% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor` |
|  1.8% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`               |
|  1.8% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`            |
|  1.8% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.FieldReferenceAstVisitor`                                   |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 80.4% |      41 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 11.8% |       6 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  3.9% |       2 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                                    |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 78.0% |      39 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  6.0% |       3 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  4.0% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                  |
|  4.0% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                    |
|  2.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`           |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      49 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |      48 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      46 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |      44 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.7% |      28 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 6.9% |      22 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 5.3% |      17 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.8% |       9 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                     |
| 2.8% |       9 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001394800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                      |
| 2.2% |       7 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                             |
| 1.6% |       5 | `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |       5 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                          |
| 1.6% |       5 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% |       4 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001390c00`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                              |
| 1.2% |       4 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getText()` (`org.codenarc.source.SourceFile`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2% |       4 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.9% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                          |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |       2 | `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.6% |       2 | `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitConstructorOrMethod(MethodNode, boolean)` ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) |

# Allocated heap profile

Allocated 12 GiB over 6,317 samples (1.95 MiB per sample).

| Category |     % |     Size | Samples |
| -------- | ----: | -------: | ------: |
| stdlib   | 99.0% | 11.9 GiB |   6,204 |
| ours     |  1.0% |  122 MiB |      63 |
| native   | <0.1% | 35.8 KiB |      50 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                               | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------ | -------------------------------------------------------------------------- |
|  0.5% | 59.7 MiB |      31 | `matcher(CharSequence)`                                | `java.util.regex.Pattern`                                                  |
|  0.5% |   58 MiB |      29 | `compile(String)`                                      | `java.util.regex.Pattern`                                                  |
|  0.2% | 23.8 MiB |      13 | `<init>()`                                             | `java.util.HashSet`                                                        |
|  0.2% | 22.5 MiB |      15 | `toString()`                                           | `java.lang.StringBuilder`                                                  |
|  0.1% | 15.4 MiB |       8 | `matches(String)`                                      | `org.codenarc.util.WildcardPattern`                                        |
|  0.1% | 11.2 MiB |       6 | `collectViolations(SourceCode, RuleSet)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  0.1% |   10 MiB |       5 | `writeViolation(Writer, Violation, String)`            | `org.codenarc.report.TextReportWriter`                                     |
|  0.1% | 8.81 MiB |       5 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  0.1% |    8 MiB |       4 | `createRange(Object, Object, boolean, boolean)`        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  0.1% | 7.16 MiB |       4 | `isCase(Object, Object)`                               | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  0.1% | 6.99 MiB |       4 | `<init>()`                                             | `org.codenarc.rule.AbstractAstVisitor`                                     |
| <0.1% | 4.33 MiB |       3 | `filter(Predicate)`                                    | `java.util.stream.ReferencePipeline`                                       |
| <0.1% |    4 MiB |       1 | `visitImports(ModuleNode)`                             | `org.codenarc.rule.ClassReferenceAstVisitor`                               |
| <0.1% |    4 MiB |       2 | `repeat(char, int)`                                    | `org.codenarc.util.AstUtil`                                                |
| <0.1% |    4 MiB |       2 | `setDisabledRulesByLine(int)`                          | `org.codenarc.plugin.disablerules.LookupTable`                             |
| <0.1% |    4 MiB |       2 | `applyTo(SourceCode)`                                  | `org.codenarc.rule.AbstractRule`                                           |
| <0.1% |    4 MiB |       2 | `<init>(String, boolean)`                              | `org.codenarc.util.WildcardPattern`                                        |
| <0.1% |    4 MiB |       2 | `isViolationSuppressed(Violation)`                     | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| <0.1% |    4 MiB |       2 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                        |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`          |

#### Lines

Lines ranked by contribution to each function's self size.

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|      % |     Size | Samples | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 59.7 MiB |      31 | `java.util.regex.Pattern:1180` |

##### `compile(String)` (`java.util.regex.Pattern`)

|      % |   Size | Samples | Location                       |
| -----: | -----: | ------: | ------------------------------ |
| 100.0% | 58 MiB |      29 | `java.util.regex.Pattern:1101` |

##### `<init>()` (`java.util.HashSet`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 23.8 MiB |      13 | `java.util.HashSet:107` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 22.5 MiB |      15 | `java.lang.StringBuilder:475` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|     % |     Size | Samples | Location                               |
| ----: | -------: | ------: | -------------------------------------- |
| 38.9% | 5.99 MiB |       3 | `org.codenarc.util.WildcardPattern:75` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 11.2 MiB |       6 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 80.0% | 8 MiB |       4 | `org.codenarc.report.TextReportWriter:90` |
| 20.0% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:92` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Location                                                                      |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 8.81 MiB |       5 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 8 MiB |       4 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |     Size | Samples | Location                                                |
| -----: | -------: | ------: | ------------------------------------------------------- |
| 100.0% | 7.16 MiB |       4 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |     Size | Samples | Location                                  |
| -----: | -------: | ------: | ----------------------------------------- |
| 100.0% | 6.99 MiB |       4 | `org.codenarc.rule.AbstractAstVisitor:36` |

##### `filter(Predicate)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Samples | Location                                 |
| -----: | -------: | ------: | ---------------------------------------- |
| 100.0% | 4.33 MiB |       3 | `java.util.stream.ReferencePipeline:166` |

##### `visitImports(ModuleNode)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|      % |  Size | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 4 MiB |       1 | `org.codenarc.rule.ClassReferenceAstVisitor:67` |

##### `repeat(char, int)` (`org.codenarc.util.AstUtil`)

|      % |  Size | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.util.AstUtil:1192` |

##### `setDisabledRulesByLine(int)` (`org.codenarc.plugin.disablerules.LookupTable`)

|      % |  Size | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.plugin.disablerules.LookupTable:93` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractRule:141` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.util.WildcardPattern:54` |

##### `isViolationSuppressed(Violation)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.SuppressionAnalyzer:83` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|     % |  Size | Samples | Location                                                |
| ----: | ----: | ------: | ------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:158` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`)

|      % |  Size | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor:42` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>()` (`java.util.HashSet`)

|     % |     Size | Samples | Caller     | Location                               |
| ----: | -------: | ------: | ---------- | -------------------------------------- |
| 72.2% | 17.2 MiB |       9 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |  Size | Samples | Caller                   | Location                                    |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------- |
| 26.7% | 6 MiB |       3 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                 |
| ----: | ----: | ------: | --------------------------------------------- | -------------------------------------------------------- |
| 50.0% | 4 MiB |       2 | `endsWithSemicolon(String, int)`              | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
| 25.0% | 2 MiB |       1 | `hasOpeningBraceOnSameLine(MethodNode)`       | `org.codenarc.rule.formatting.BracesForMethodAstVisitor` |
| 25.0% | 2 MiB |       1 | `visitVariableExpression(VariableExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |     Size | Samples | Caller                    | Location                                                                        |
| ----: | -------: | ------: | ------------------------- | ------------------------------------------------------------------------------- |
| 72.1% | 5.16 MiB |       3 | `doCall(Object)`          | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| 27.9% |    2 MiB |       1 | `isFloatTypeName(String)` | `org.codenarc.rule.convention.NoFloatAstVisitor`                                |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Caller     | Location                                                                |
| ----: | -------: | ------: | ---------- | ----------------------------------------------------------------------- |
| 28.6% |    2 MiB |       1 | `<init>()` | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`       |
| 28.6% |    2 MiB |       1 | `<init>()` | `org.codenarc.rule.convention.NoFloatAstVisitor`                        |
| 28.6% |    2 MiB |       1 | `<init>()` | `org.codenarc.rule.unused.UnusedPrivateMethodParameterAstVisitor`       |
| 14.2% | 1018 KiB |       1 | `<init>()` | `org.codenarc.rule.design.AbstractClassWithPublicConstructorAstVisitor` |

##### `filter(Predicate)` (`java.util.stream.ReferencePipeline`)

|     % |  Size | Samples | Caller                                 | Location                    |
| ----: | ----: | ------: | -------------------------------------- | --------------------------- |
| 92.4% | 4 MiB |       2 | `getAnnotation(AnnotatedNode, String)` | `org.codenarc.util.AstUtil` |

##### `visitImports(ModuleNode)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|      % |  Size | Samples | Caller                  | Location                                          |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% | 4 MiB |       1 | `visitClass(ClassNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `repeat(char, int)` (`org.codenarc.util.AstUtil`)

|      % |  Size | Samples | Caller                                | Location                    |
| -----: | ----: | ------: | ------------------------------------- | --------------------------- |
| 100.0% | 4 MiB |       2 | `getDeclaration(ASTNode, SourceCode)` | `org.codenarc.util.AstUtil` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                      | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 62.5% |  7.5 GiB |   3,983 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
| 43.8% | 5.25 GiB |   2,698 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
| 37.3% | 4.47 GiB |   2,288 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 33.5% | 4.02 GiB |   2,055 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 30.1% | 3.61 GiB |   1,871 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 28.2% | 3.39 GiB |   1,732 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 26.8% | 3.22 GiB |   1,577 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
| 23.1% | 2.77 GiB |   1,446 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| 21.8% | 2.61 GiB |   1,363 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.7% | 2.36 GiB |   1,217 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 17.2% | 2.06 GiB |   1,055 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 16.4% | 1.97 GiB |   1,018 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 14.2% | 1.71 GiB |     879 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.0% | 1.68 GiB |     866 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.5% | 1.62 GiB |     836 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.7% | 1.52 GiB |     715 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
| 12.6% | 1.51 GiB |     781 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  8.4% | 1.01 GiB |     515 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000e001394800`                        |
|  7.5% |  916 MiB |     454 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  7.4% |  905 MiB |     465 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 51.3% |  2.3 GiB |   1,179 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 22.6% | 1.01 GiB |     515 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000e001394800` |
| 16.4% |  751 MiB |     380 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000e001390c00` |
|  9.5% |  435 MiB |     209 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.2% |    8 MiB |       4 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                                               | Location                                                                   |
| ----: | -------: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 83.1% | 3.34 GiB |   1,697 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 10.3% |  424 MiB |     218 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  6.3% |  261 MiB |     133 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
| <0.1% | 1.51 MiB |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 73.8% | 2.67 GiB |   1,396 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 25.9% |  959 MiB |     470 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                                   | Location                           |
| ----: | -------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.6% | 3.38 GiB |   1,725 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  0.3% |   12 MiB |       6 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| <0.1% | 1018 KiB |       1 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                  |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------------------- |
| 82.7% | 2.29 GiB |   1,198 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  5.5% |  155 MiB |      77 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  5.4% |  152 MiB |      76 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  2.2% |   62 MiB |      31 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |
|  0.9% |   27 MiB |      14 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 83.7% | 2.19 GiB |   1,129 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 10.2% |  272 MiB |     135 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.9% |   77 MiB |      54 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.6% | 69.6 MiB |      36 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.2% |    6 MiB |       3 | `getAstVisitor()`       | `org.codenarc.rule.dry.DuplicateNumberLiteralRule`      |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 86.7% | 2.05 GiB |   1,048 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.1% |  147 MiB |      75 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.2% | 30.2 MiB |      16 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.2% | 29.2 MiB |      16 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  0.9% | 21.4 MiB |      11 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`   |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.8% | 16.6 MiB |       8 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| 0.3% | 6.12 MiB |       4 | `visitImports(ModuleNode)`        | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`           |
| 0.2% |    4 MiB |       2 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 0.1% |    2 MiB |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor`               |
| 0.1% |    2 MiB |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                                     |
| ----: | -------: | ------: | --------------------------- | ---------------------------------------------------------------------------- |
| 83.7% | 1.65 GiB |     852 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
|  5.9% |  119 MiB |      58 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`          |
|  2.2% | 44.8 MiB |      23 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |
|  1.2% |   24 MiB |      11 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |
|  1.0% |   20 MiB |      10 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`             |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                      | Location                                                       |
| ---: | -----: | ------: | --------------------------- | -------------------------------------------------------------- |
| 4.2% | 73 MiB |      36 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                          |
| ----: | -------: | ------: | ----------------------------------------------- | ----------------------------------------------------------------- |
| 86.4% | 1.45 GiB |     753 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                 |
|  3.3% | 57.3 MiB |      26 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`      |
|  2.0% |   34 MiB |      16 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor` |
|  2.0% |   34 MiB |      17 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`        |
|  1.4% |   24 MiB |      12 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                      |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.0% | 17.3 MiB |       9 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 0.6% | 9.25 MiB |       5 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |    Size | Samples | Callee                      | Location                                                       |
| ---: | ------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 6.8% | 105 MiB |      53 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 97.1% |  879 MiB |     451 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  1.5% | 13.3 MiB |       6 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.1% | 9.82 MiB |       6 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.3% | 3.08 MiB |       2 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7.3% |  899 MiB |     439 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 6.1% |  751 MiB |     380 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001390c00`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.5% |  552 MiB |     269 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.3% |  528 MiB |     260 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001394800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.2% |  516 MiB |     259 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4.1% |  503 MiB |     254 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001394800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.7% |  455 MiB |     238 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.5% |  433 MiB |     208 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.2% |  399 MiB |     207 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.7% |  329 MiB |     171 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.4% |  292 MiB |     148 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.0% |  247 MiB |     126 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.9% |  232 MiB |     115 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001448c00`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |  160 MiB |      19 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.8% |   98 MiB |      25 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001448c00`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |   96 MiB |      37 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% | 85.6 MiB |      43 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.7% | 85.3 MiB |      42 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% |   78 MiB |      38 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e0013b9000`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% | 74.6 MiB |      37 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

# Retained heap profile

Retained 69.3 KiB over 95 samples (747 B per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| stdlib   | 100.0% | 69.2 KiB |      94 |
| ours     |  <0.1% |     32 B |       1 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % | Size | Samples | Function                        | Location                               |
| ----: | ---: | ------: | ------------------------------- | -------------------------------------- |
| <0.1% | 32 B |       1 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

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
| 97.8% | 67.8 KiB |      66 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 92.6% | 64.1 KiB |       2 | `validateXml(String)`                            | `org.codenarc.ruleset.XmlReaderRuleSet`                                    |
| 92.4% |   64 KiB |       1 | `<init>(Reader)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet`                                    |
|  3.4% | 2.34 KiB |      41 | `getMetaClass()`                                 | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|  1.9% | 1.32 KiB |      24 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e001134800`                        |
|  1.8% | 1.26 KiB |      24 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
|  1.8% | 1.25 KiB |      22 | `assertClassImplementsRuleInterface(Class)`      | `org.codenarc.ruleset.RuleSetUtil`                                         |
|  1.8% | 1.25 KiB |      22 | `doCall(Object)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
|  1.3% |    920 B |      16 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                   |
|  1.1% |    776 B |      15 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
|  1.0% |    736 B |      14 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  0.9% |    640 B |      12 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  0.7% |    528 B |       9 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
|  0.7% |    520 B |      10 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  0.7% |    480 B |       8 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  0.7% |    480 B |       8 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  0.5% |    344 B |       9 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
|  0.5% |    336 B |       7 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                    |
|  0.5% |    320 B |       7 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  0.4% |    264 B |       5 | `<init>(Object, Object)`                         | `groovy.lang.Closure`                                                      |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 64.1 KiB |       2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|      % |   Size | Samples | Callee                                   | Location                           |
| -----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 64 KiB |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % |     Size | Samples | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 1.25 KiB |      22 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e001134800` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.25 KiB |      22 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |  Size | Samples | Callee                                                           | Location                           |
| ----: | ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 85.2% | 784 B |      14 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| 14.8% | 136 B |       2 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |  Size | Samples | Callee                              | Location                                   |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------ |
| 94.8% | 736 B |      14 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.AbstractAstVisitorRule` |
|  5.2% |  40 B |       1 | `shouldApplyThisRuleTo(SourceCode)` | `org.codenarc.rule.AbstractRule`           |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |  Size | Samples | Callee                  | Location                                                |
| ----: | ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 70.7% | 520 B |      10 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 21.7% | 160 B |       3 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  7.6% |  56 B |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |  Size | Samples | Callee                                   | Location                           |
| -----: | ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 640 B |      12 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |  Size | Samples | Callee                           | Location                           |
| -----: | ----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 528 B |       9 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Callee                    | Location                                                            |
| ----: | ----: | ------: | ------------------------- | ------------------------------------------------------------------- |
| 61.5% | 320 B |       7 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
| 21.5% | 112 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
| 12.3% |  64 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.ClassReferenceAstVisitor`                        |
|  4.6% |  24 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor`                |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Samples | Callee     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 480 B |       8 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Samples | Callee   | Location                                    |
| -----: | ----: | ------: | -------- | ------------------------------------------- |
| 100.0% | 480 B |       8 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % |  Size | Samples | Callee                                                        | Location                               |
| ----: | ----: | ------: | ------------------------------------------------------------- | -------------------------------------- |
| 90.5% | 304 B |       6 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`     |
|  9.5% |  32 B |       1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.4% |   64 KiB |       1 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.8% | 1.25 KiB |      22 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.5% |    320 B |       5 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% |    312 B |       5 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |    232 B |       4 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← … ← `<clinit>()` ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% |    224 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |    120 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>(List)` (`org.codenarc.ruleset.ListRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `buildRuleSet()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |    120 B |       1 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                           |
|  0.2% |    112 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                  |
|  0.2% |    112 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processViolationsForFile(FileViolations)` (`org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.CodeNarcRunner$_applyPluginsProcessViolationsForFile_closure5`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |     96 B |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.ClassReferenceAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                         |
|  0.1% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getInputStream()` (`org.codenarc.util.io.ClassPathResource`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getInputStream(String)` (`org.codenarc.util.io.ClassPathResource`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |     80 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.ToStringReturnsNullAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                            |
|  0.1% |     72 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitListExpression_closure2`)                                                                                                                                                                                                      |
|  0.1% |     72 B |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% |     64 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                      |
|  0.1% |     64 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.ClassReferenceAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                         |
|  0.1% |     56 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.naming.ClassNameAstVisitor`) ← `<init>()` (`org.codenarc.rule.naming.AbstractTypeNameAstVisitor`) ← `<init>()` (`org.codenarc.rule.naming.ClassNameAstVisitor`) ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                               |
|  0.1% |     56 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `sourceLinesBetween(SourceCode, int, int, int, int)` (`org.codenarc.util.SourceCodeUtil`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `sourceLinesBetweenNodes(SourceCode, ASTNode, ASTNode)` (`org.codenarc.util.SourceCodeUtil`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) |
